import {randomBytes, randomUUID, scrypt as scryptCallback, timingSafeEqual, createHash} from 'node:crypto';
import {promisify} from 'node:util';
import {fileURLToPath} from 'node:url';
import {exhibits} from '../src/exhibits.js';
import {passportStore} from './passport-store.js';
import {resolveShareOrigin} from './share-origin.js';

const scrypt = promisify(scryptCallback);
const artifactIds = Object.keys(exhibits);
const COOKIE = 'museum_passport';
const RETENTION_DAYS = 90;
const SESSION_AGE = RETENTION_DAYS * 24 * 60 * 60 * 1000;
const limits = new Map();
const digest = value => createHash('sha256').update(value).digest('hex');
const fail = (status, code, message) => Object.assign(new Error(message), {status, code});

function rateLimit(key, maximum) {
  const now = Date.now();
  for (const [entry, value] of limits) if (value.until <= now) limits.delete(entry);
  const value = limits.get(key) || {count: 0, until: now + 15 * 60 * 1000};
  if (++value.count > maximum) throw fail(429, 'RATE_LIMITED', '操作过于频繁，请十五分钟后再试。');
  if (limits.size >= 10000 && !limits.has(key)) throw fail(429, 'RATE_LIMITED', '服务繁忙，请稍后重试。');
  limits.set(key, value);
}

async function readBody(req) {
  if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) throw fail(415, 'UNSUPPORTED_MEDIA_TYPE', '请使用 JSON 请求。');
  if (Number(req.headers['content-length']) > 4096) throw fail(413, 'BODY_TOO_LARGE', '请求内容过长。');
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > 4096) throw fail(413, 'BODY_TOO_LARGE', '请求内容过长。');
    chunks.push(Buffer.from(chunk));
  }
  let body;
  try { body = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw fail(400, 'INVALID_JSON', '请求需要有效 JSON。'); }
  if (!body || typeof body !== 'object' || Array.isArray(body)) throw fail(400, 'INVALID_INPUT', '请求格式无效。');
  return body;
}

function credentials(body, register) {
  if (typeof body.username !== 'string' || !/^[a-zA-Z0-9_]{3,32}$/.test(body.username)) throw fail(400, 'INVALID_USERNAME', '用户名需为 3–32 位字母、数字或下划线。');
  if (typeof body.password !== 'string' || body.password.length < 8 || body.password.length > 128) throw fail(400, 'INVALID_PASSWORD', '密码需为 8–128 个字符。');
  if (register && (typeof body.nickname !== 'string' || !body.nickname.trim() || body.nickname.trim().length > 30 || /[\u0000-\u001f\u007f]/.test(body.nickname))) throw fail(400, 'INVALID_NICKNAME', '昵称需为 1–30 个可显示字符。');
  return body.username.toLowerCase();
}

function guest(state) {
  const id = randomUUID();
  state.profiles[id] = {kind: 'guest', username: null, nickname: '观展游客', visits: {}};
  return id;
}

function merge(source, target) {
  for (const [id, visit] of Object.entries(source.visits)) {
    const existing = target.visits[id];
    target.visits[id] = existing ? {
      artifactId: id,
      firstVisitedAt: existing.firstVisitedAt < visit.firstVisitedAt ? existing.firstVisitedAt : visit.firstVisitedAt,
      lastVisitedAt: existing.lastVisitedAt > visit.lastVisitedAt ? existing.lastVisitedAt : visit.lastVisitedAt,
      visitCount: existing.visitCount + visit.visitCount,
    } : {...visit};
  }
}

function snapshot(profile, env, expiresAt) {
  const firstVisits = Object.values(profile.visits).map(visit => visit.firstVisitedAt).sort();
  const count = firstVisits.length;
  const publicBaseUrl = resolveShareOrigin(env);
  return {
    profile: {kind: profile.kind, username: profile.username, nickname: profile.nickname},
    storage: {expiresAt: new Date(expiresAt).toISOString(), retentionDays: RETENTION_DAYS, hasRecoveryCode: Boolean(profile.recoveryHash)},
    visits: Object.values(profile.visits), artifactCount: artifactIds.length, publicBaseUrl,
    achievements: [
      ['first', '初次相逢', '数字参观一件文物', 1, '初见纪念章'],
      ['three', '寻器知音', '数字参观三件文物', 3, '知音纪念章'],
      ['all', '器物巡礼', '数字参观全部文物', artifactIds.length, '全馆纪念章'],
    ].map(([id, title, description, target, reward]) => ({id, title, description, target, reward, unlocked: count >= target, unlockedAt: count >= target ? firstVisits[target - 1] : null, progress: Math.min(count, target)})),
  };
}

/** Node HTTP / Connect handler. dataDir can be overridden for isolated tests. */
export async function handlePassportRequest(req, res, options = {}) {
  const pathname = new URL(req.url || '/', 'http://localhost').pathname;
  if (pathname !== '/api/passport' && !pathname.startsWith('/api/passport/')) return false;
  const env = options.env || process.env;
  try {
    const action = pathname.slice('/api/passport'.length);
    if (!['', '/checkin', '/register', '/login', '/logout', '/nickname', '/recovery-code', '/restore'].includes(action)) throw fail(404, 'NOT_FOUND', '未找到此接口。');
    if (req.method !== (action ? 'POST' : 'GET')) throw fail(405, 'METHOD_NOT_ALLOWED', '请求方法不支持。');
    let body;
    if (action) {
      const protocol = req.socket.encrypted ? 'https:' : 'http:';
      const expected = `${protocol}//${req.headers.host}`;
      if (req.headers.origin !== expected || (req.headers['sec-fetch-site'] && !['same-origin', 'none'].includes(req.headers['sec-fetch-site']))) throw fail(403, 'CROSS_ORIGIN', '请从本站页面执行操作。');
      rateLimit(`request:${req.socket.remoteAddress}`, 300);
      body = await readBody(req);
    }
    let username;
    if (action === '/register' || action === '/login') {
      username = credentials(body, action === '/register');
      rateLimit(`auth-ip:${req.socket.remoteAddress}`, 30);
      rateLimit(`auth-user:${username}`, 10);
    }
    if (action === '/checkin' && (typeof body.artifactId !== 'string' || !Object.hasOwn(exhibits, body.artifactId))) throw fail(400, 'INVALID_ARTIFACT', '未知文物编号。');
    if (action === '/nickname' && (typeof body.nickname !== 'string' || body.nickname.trim().length > 30 || /[\u0000-\u001f\u007f]/.test(body.nickname))) throw fail(400, 'INVALID_NICKNAME', '昵称最多 30 个可显示字符。');
    if (action === '/restore') {
      rateLimit(`restore-ip:${req.socket.remoteAddress}`, 15);
      if (typeof body.recoveryCode !== 'string' || !/^[a-fA-F0-9]{64}$/.test(body.recoveryCode)) throw fail(400, 'INVALID_RECOVERY_CODE', '请提供完整的 64 位恢复码。');
    }
    const cookie = String(req.headers.cookie || '').split(';').map(part => part.trim()).find(part => part.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
    const sessionKey = cookie && /^[a-f0-9]{64}$/.test(cookie) ? digest(cookie) : null;
    let newToken;
    const result = await passportStore(options.dataDir || fileURLToPath(new URL('../data/passport/', import.meta.url))).transaction(async state => {
      const now = typeof options.now === 'function' ? options.now() : (options.now ?? Date.now());
      if (!Number.isFinite(now)) throw new Error('Invalid passport clock');
      for (const [key, session] of Object.entries(state.sessions)) if (session.expiresAt <= now) delete state.sessions[key];
      let profileId = sessionKey && state.sessions[sessionKey]?.profileId;
      if (!profileId || !state.profiles[profileId]) profileId = guest(state);
      const originalProfileId = profileId;
      const current = state.profiles[profileId];
      if (action === '/register') {
        if (Object.hasOwn(state.accounts, username)) throw fail(409, 'USERNAME_TAKEN', '用户名已被使用。');
        const salt = randomBytes(16).toString('hex');
        const hash = (await scrypt(body.password, salt, 64)).toString('hex');
        const accountId = randomUUID();
        const account = {kind: 'account', username, nickname: body.nickname.trim(), visits: {}};
        if (current.kind === 'guest') merge(current, account);
        state.profiles[accountId] = account;
        Object.defineProperty(state.accounts, username, {value: {profileId: accountId, salt, hash}, enumerable: true, writable: true, configurable: true});
        profileId = accountId;
      } else if (action === '/login') {
        const account = Object.hasOwn(state.accounts, username) ? state.accounts[username] : null;
        const candidate = await scrypt(body.password, account?.salt || 'passport-dummy-salt', 64);
        if (!account || !timingSafeEqual(candidate, Buffer.from(account.hash, 'hex'))) throw fail(401, 'INVALID_CREDENTIALS', '用户名或密码不正确。');
        profileId = account.profileId;
        if (current.kind === 'guest') merge(current, state.profiles[profileId]);
      } else if (action === '/restore') {
        const recoveryHash = digest(body.recoveryCode.toLowerCase());
        const match = Object.entries(state.profiles).find(([, profile]) => profile.recoveryHash === recoveryHash);
        if (!match) throw fail(401, 'INVALID_RECOVERY_CODE', '恢复码无效，请检查是否已重新生成。');
        profileId = match[0];
        if (profileId !== originalProfileId && current.kind === 'guest') merge(current, match[1]);
      } else if (action === '/logout') profileId = guest(state);
      if (['/register', '/login', '/restore'].includes(action)) {
        if (current.kind === 'guest' && profileId !== originalProfileId) {
          for (const [key, session] of Object.entries(state.sessions)) if (session.profileId === originalProfileId) delete state.sessions[key];
          // The merged guest can no longer be reused to add the same records again.
          current.visits = {};
          delete current.recoveryHash;
        }
      }
      const profile = state.profiles[profileId];
      let extra = {};
      if (action === '/nickname') profile.nickname = body.nickname.trim() || '观展游客';
      if (action === '/recovery-code') {
        const recoveryCode = randomBytes(32).toString('hex');
        profile.recoveryHash = digest(recoveryCode);
        extra = {recoveryCode};
      }
      if (action === '/checkin') {
        const timestamp = new Date(now).toISOString();
        const previous = profile.visits[body.artifactId];
        const visit = {artifactId: body.artifactId, firstVisitedAt: previous?.firstVisitedAt || timestamp, lastVisitedAt: timestamp, visitCount: (previous?.visitCount || 0) + 1};
        profile.visits[body.artifactId] = visit;
        extra = {visit, created: !previous};
      }
      if (!sessionKey || !state.sessions[sessionKey] || ['/register', '/login', '/logout', '/restore'].includes(action)) {
        if (sessionKey) delete state.sessions[sessionKey];
        newToken = randomBytes(32).toString('hex');
        state.sessions[digest(newToken)] = {profileId, expiresAt: now + SESSION_AGE};
      } else {
        state.sessions[sessionKey].expiresAt = now + SESSION_AGE;
        newToken = cookie;
      }
      const passport = snapshot(profile, env, now + SESSION_AGE);
      return action ? {passport, ...extra} : passport;
    });
    if (newToken) res.setHeader('Set-Cookie', `${COOKIE}=${newToken}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${SESSION_AGE / 1000}${req.socket.encrypted ? '; Secure' : ''}`);
    send(res, 200, result);
  } catch (error) {
    if (error.status === 429) res.setHeader('Retry-After', '900');
    send(res, error.status || 500, {error: {code: error.code && error.status ? error.code : 'INTERNAL_ERROR', message: error.status ? error.message : '护照服务暂时不可用，请稍后重试。'}});
  }
  return true;
}

function send(res, status, value) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(value));
}
