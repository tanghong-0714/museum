import { mkdir, readFile, writeFile, rename, unlink } from 'node:fs/promises';
import { randomUUID, createHash } from 'node:crypto';
import { normalizeContext, buildRestorationPrompt } from './restoration.mjs';
import { join } from 'node:path';
import { lookup } from 'node:dns/promises';

export const IMAGE_BASE = 'https://api.lk888.ai/v1';
export const IMAGE_MODEL = 'tt-image-2.5';
const MAX_UPLOAD = 10 * 1024 * 1024;
const MAX_RESULT = 80 * 1024 * 1024;
const UUID = /^[0-9a-f]{8}-[0-9a-f-]{27}$/i;
const ALLOWED_SIZES = new Set(['auto', '1024x1024', '1536x1024', '1024x1536']);
const ALLOWED_QUALITY = new Set(['auto', 'low', 'medium', 'high']);
const hash = bytes => createHash('sha256').update(bytes).digest('hex');

export class ImageError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

export function imageType(buffer) {
  if (buffer.length >= 24 && buffer.subarray(0, 8).equals(Buffer.from([137,80,78,71,13,10,26,10]))) return { mime: 'image/png', extension: 'png' };
  if (buffer.length >= 4 && buffer[0] === 255 && buffer[1] === 216 && buffer[2] === 255) return { mime: 'image/jpeg', extension: 'jpg' };
  if (buffer.length >= 12 && buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') return { mime: 'image/webp', extension: 'webp' };
  return null;
}

export function publicAddress(address) {
  const a = address.toLowerCase();
  if (a.includes(':')) {
    if (a.startsWith('::ffff:')) return publicAddress(a.slice(7));
    // 仅接受可全球路由的 IPv6；拒绝回环、链路本地、ULA 与未指定地址。
    return /^[23][0-9a-f]{0,3}:/.test(a) && !a.startsWith('2001:db8:');
  }
  const parts = a.split('.').map(Number);
  if (parts.length !== 4 || parts.some(x => !Number.isInteger(x) || x < 0 || x > 255)) return false;
  return !(parts[0] === 0 || parts[0] === 10 || parts[0] === 127 || parts[0] >= 224 ||
    (parts[0] === 169 && parts[1] === 254) || (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168) || (parts[0] === 100 && parts[1] >= 64 && parts[1] <= 127));
}

export async function readLimited(response, limit) {
  if (Number(response.headers.get('content-length')) > limit) throw new Error('Response too large');
  const chunks = [];
  let size = 0;
  for await (const chunk of response.body ?? []) {
    size += chunk.length;
    if (size > limit) throw new Error('Response too large');
    chunks.push(Buffer.from(chunk));
  }
  return Buffer.concat(chunks);
}

export function createImageService({ apiKey = '', baseUrl = IMAGE_BASE, dataDir, fetchImpl = fetch, lookupImpl = lookup, timeoutMs = 600000 } = {}) {
  if (baseUrl.replace(/\/$/, '') !== IMAGE_BASE) throw new Error('LK endpoint must match the authorized provider');
  if (!dataDir) throw new Error('Image data directory required');
  const assets = new Map();
  const jobs = new Map();
  const requests = new Map();
  const active = new Map();
  // Only trusted service-to-service calls supply this option; HTTP input cannot
  // opt into concurrency. A group is one museum view set, capped at four images.
  function checkCapacity(group) {
    if (active.size && (!group || active.size >= 4 || [...active.values()].some(entry => entry.group !== group))) {
      throw new ImageError(409, '已有生图任务正在处理，请等待结束后再提交。');
    }
  }
  let selectedJobId = null;
  let lastCheck = null;
  let saveQueue = Promise.resolve();
  const stateFile = join(dataDir, 'state.json');
  const ready = (async () => {
    await mkdir(join(dataDir, 'assets'), { recursive: true });
    try {
      const stored = JSON.parse(await readFile(stateFile, 'utf8'));
      for (const asset of stored.assets ?? []) assets.set(asset.id, asset);
      for (const job of stored.jobs ?? []) {
        if (['queued', 'running', 'recovering'].includes(job.state)) {
          job.state = 'uncertain';
          job.message = '服务曾中断，任务可能仍在执行或已计费；请先查询找回，不要直接重复提交。';
        }
        jobs.set(job.id, job);
        job.objective ||= 'restore';
        if (job.requestId) requests.set(job.requestId, job.id);
      }
      selectedJobId = stored.selectedJobId ?? null;
      // Identify historical reuploads by exact content, without altering source files.
      const generated = new Map();
      for (const asset of assets.values()) {
        asset.sha256 ||= hash(await readFile(join(dataDir, 'assets', asset.file)));
        if (asset.kind === 'result') generated.set(asset.sha256, asset);
        else if (generated.has(asset.sha256)) { asset.kind = 'result'; asset.derivedFrom = generated.get(asset.sha256).id; }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw new Error('Unable to load local image history');
    }
  })();

  async function persist() {
    const state = JSON.stringify({ version: 1, selectedJobId, assets: [...assets.values()], jobs: [...jobs.values()] }, null, 2);
    saveQueue = saveQueue.catch(() => {}).then(async () => {
      const temp = join(dataDir, `state-${randomUUID()}.tmp`);
      await writeFile(temp, state, { flag: 'wx' });
      await rename(temp, stateFile);
    });
    await saveQueue;
  }
  function roots(id, seen = new Set()) {
    if (seen.has(id)) return []; seen.add(id);
    const asset = assets.get(id); if (!asset) return [];
    if (asset.kind !== 'result') return [id];
    if (asset.derivedFrom) return roots(asset.derivedFrom, seen);
    const parent = [...jobs.values()].find(j => j.resultAssetId === id);
    return (parent?.referenceIds || []).flatMap(x => roots(x, seen));
  }
  const assetPublic = asset => asset ? { id: asset.id, name: asset.name, mime: asset.mime, bytes: asset.bytes, kind: asset.kind, derivedFrom: asset.derivedFrom || null, originalReferenceIds: [...new Set(roots(asset.id))], createdAt: asset.createdAt, url: `/api/images/assets/${asset.id}` } : null;
  const jobPublic = job => ({ id: job.id, objective: job.objective || 'restore', purpose: job.purpose || 'reference', requestId: job.requestId, mode: job.mode, prompt: job.prompt, size: job.size, quality: job.quality, state: job.state,
    createdAt: job.createdAt, updatedAt: job.updatedAt, durationMs: job.durationMs ?? null, upstreamTaskId: job.upstreamTaskId ?? null,
    message: job.message, providerHttpStatus: job.providerHttpStatus ?? null, cost: job.cost ?? null,
    references: job.referenceIds.map(id => assetPublic(assets.get(id))).filter(Boolean), result: assetPublic(assets.get(job.resultAssetId)),
    workspace: job.workspace || null, selected: job.id === selectedJobId, model: IMAGE_MODEL, caseId: job.caseId || null, caseName: job.caseName || '', context: job.context || null, analysisId: job.analysisId || null,
    originalReferences: [...new Set(job.referenceIds.flatMap(id => roots(id)))].map(id => assetPublic(assets.get(id))),
    effectivePrompt: job.effectivePrompt || null, promptVersion: job.promptVersion || 'legacy-unrecorded' });
  function requireKey() { if (!apiKey) throw new ImageError(400, '生图服务尚未配置，请先设置本机项目 .env 中的 LK_IMAGE_API_KEY。'); }
  function getJob(id) { const job = jobs.get(id); if (!job) throw new ImageError(404, '任务不存在。'); return job; }
  function taskHeader(response) { const value = response.headers.get('x-task-id'); return /^\d{1,20}$/.test(value ?? '') ? value : null; }
  async function saveAsset(bytes, name, kind) {
    const type = imageType(bytes);
    if (!type) throw new ImageError(400, '文件内容不是支持的 PNG、JPEG 或 WebP 图片。');
    const id = randomUUID();
    const file = `${id}.${type.extension}`;
    await writeFile(join(dataDir, 'assets', file), bytes, { flag: 'wx' });
    const asset = { id, file, name: String(name).replace(/[\\/\x00-\x1f]/g, '_').slice(0, 100), ...type, bytes: bytes.length, kind, sha256: hash(bytes), createdAt: new Date().toISOString() };
    assets.set(id, asset);
    return asset;
  }
  async function download(url) {
    let current = new URL(url);
    for (let redirect = 0; redirect <= 3; redirect++) {
      if (current.protocol !== 'https:' || current.username || current.password || current.port && current.port !== '443') throw new Error('Unsafe result URL');
      const host = current.hostname.replace(/^\[|\]$/g, '');
      const records = await lookupImpl(host, { all: true });
      if (!records.length || records.some(r => !publicAddress(r.address))) throw new Error('Unsafe result host');
      // 下载结果时绝不携带服务商 Authorization。
      const response = await fetchImpl(current.href, { redirect: 'manual', signal: AbortSignal.timeout(120000) });
      if ([301, 302, 303, 307, 308].includes(response.status)) {
        const location = response.headers.get('location');
        if (!location || redirect === 3) throw new Error('Too many redirects');
        await response.body?.cancel();
        current = new URL(location, current);
        continue;
      }
      if (!response.ok) throw new Error('Result download failed');
      return readLimited(response, MAX_RESULT);
    }
  }
  async function saveResult(job, item) {
    let bytes;
    if (typeof item?.b64_json === 'string') {
      if (item.b64_json.length > MAX_RESULT * 1.4 || !/^[A-Za-z0-9+/\r\n]*={0,2}$/.test(item.b64_json)) throw new Error('Invalid image response');
      bytes = Buffer.from(item.b64_json, 'base64');
    } else if (typeof item?.url === 'string') bytes = await download(item.url);
    else throw new Error('Missing image result');
    if (bytes.length > MAX_RESULT || imageType(bytes)?.mime !== 'image/png') throw new Error('Expected PNG result');
    const label = job.objective === 'photo' ? job.purpose === 'view' ? '建模视角' : '干净建模图' : '复原方案';
    const asset = await saveAsset(bytes, `${label}-${job.id.slice(0, 8)}.png`, 'result');
    asset.workspace = job.workspace || null;
    job.resultAssetId = asset.id;
    job.state = 'success';
    job.message = job.objective === 'photo' ? '图像已生成并保存到本机。请对照原图核对器形、纹饰与真实缺损。' : '图像已生成并保存到本机。请对照原图检查，AI 补全部分属于复原推测。';
    job.updatedAt = new Date().toISOString();
  }
  async function run(job) {
    const start = performance.now();
    try {
      job.state = 'running'; job.updatedAt = new Date().toISOString();
      job.message = '服务商正在处理，最长等待 10 分钟。不会自动重复提交。';
      await persist();
      const fields = { model: IMAGE_MODEL, prompt: job.effectivePrompt || job.prompt,
        size: job.size, quality: job.quality, n: 1, output_format: 'png' };
      const headers = { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' };
      let body;
      let endpoint;
      if (job.mode === 'generate') {
        endpoint = '/images/generations'; headers['Content-Type'] = 'application/json'; body = JSON.stringify(fields);
      } else {
        endpoint = '/images/edits'; body = new FormData();
        for (const [key, value] of Object.entries(fields)) body.append(key, String(value));
        const field = job.referenceIds.length === 1 ? 'image' : 'image[]';
        for (let i = 0; i < job.referenceIds.length; i++) {
          const asset = assets.get(job.referenceIds[i]);
          const content = await readFile(join(dataDir, 'assets', asset.file));
          body.append(field, new Blob([content], { type: asset.mime }), `reference-${i + 1}.${asset.extension}`);
        }
      }
      const response = await fetchImpl(IMAGE_BASE + endpoint, { method: 'POST', headers, body, redirect: 'error', signal: AbortSignal.timeout(timeoutMs) });
      job.providerHttpStatus = response.status;
      job.upstreamTaskId = taskHeader(response);
      await persist();
      if (!response.ok) {
        // 5xx / 429 / 中断均可能已被供应商接单，保留任务号供查询，绝不自动重试 POST。
        job.state = [400, 401, 403, 404, 422].includes(response.status) && !job.upstreamTaskId ? 'failed' : 'uncertain';
        job.message = response.status === 401 || response.status === 403 ? '生图服务拒绝认证，请检查项目配置和账户权限。'
          : response.status === 429 ? '服务商限流；任务是否接单尚未确认，请先查询任务记录。'
          : '服务商未返回成功结果；请先查询任务记录，勿直接重复提交。';
        return;
      }
      const payload = JSON.parse((await readLimited(response, MAX_RESULT * 1.4)).toString('utf8'));
      const item = payload?.data?.[0];
      try { await saveResult(job, item); }
      catch {
        job.state = 'download_failed';
        job.message = '服务商已响应，但本地图片保存未完成。请用任务号查询找回，勿重新付费生成。';
      }
    } catch {
      job.state = 'uncertain';
      job.message = '连接中断或处理超时，任务可能仍在执行或已计费。请先查询找回或查看服务商记录。';
    } finally {
      job.updatedAt = new Date().toISOString(); job.durationMs = Math.round(performance.now() - start);
      try { await persist(); } finally { active.delete(job.id); }
    }
  }
  async function prepare(input) {
    await ready;
    const { mode, prompt, size = 'auto', quality = 'auto', referenceIds = [] } = input;
    const objective = input.objective ?? 'restore';
    const purpose = input.purpose ?? 'reference';
    if (!['reference','view'].includes(purpose) || purpose === 'view' && objective !== 'photo') throw new ImageError(400, '图片用途无效。');
    if (!['restore','photo'].includes(objective) || objective === 'photo' && mode !== 'edit') throw new ImageError(400, '照片目标仅支持保持实物现状的参考图编辑。');
    if (!['generate', 'edit', 'restore'].includes(mode) || typeof prompt !== 'string' || !prompt.trim() || prompt.length > 8000) throw new ImageError(400, '请选择模式并填写不超过 8000 字符的要求。');
    if (!ALLOWED_SIZES.has(size) || !ALLOWED_QUALITY.has(quality)) throw new ImageError(400, '尺寸或质量选项不受支持。');
    if (!Array.isArray(referenceIds) || referenceIds.length > 4 || new Set(referenceIds).size !== referenceIds.length || referenceIds.some(id => !UUID.test(id || '') || !assets.has(id))) throw new ImageError(400, '参考图片不存在、重复，或超过 4 张。');
    if (mode === 'generate' && referenceIds.length || mode !== 'generate' && !referenceIds.length) throw new ImageError(400, '当前模式与参考图片不匹配。');
    let context; try { context = normalizeContext(input.context); } catch (e) { throw new ImageError(400, e.message); }
    const originalIds = [...new Set(referenceIds.flatMap(id => roots(id)))];
    const ids = mode === 'restore' ? [...new Set([...originalIds, ...referenceIds])] : [...referenceIds];
    const problems = [], warnings = [];
    if (ids.length > 4) problems.push('找回原图后超过 4 张，请移除多余的 AI 辅助图。');
    if (mode === 'restore') {
      if (!originalIds.length) problems.push('没有可追溯的原始照片。请上传实物照片；仅有 AI 图时可改用参考图编辑。');
      if (context.category === 'unknown') problems.push('请先确认器物类别。');
      if (context.photoSide === 'unknown' && !context.decision) problems.push('照片正反面未确认，请选择视角，或填写本次明确采用的结构假设。');
      if (referenceIds.some(id => assets.get(id).kind === 'result')) warnings.push('已识别 AI 参考图：将原始照片放在前面，AI 图仅作为辅助。');
    }
    if (input.caseId != null && !UUID.test(input.caseId)) throw new ImageError(400, '文物任务编号不正确。');
    const refs = ids.map(id => assetPublic(assets.get(id)));
    const effectivePrompt = mode === 'restore' ? buildRestorationPrompt(prompt.trim(), context, refs) : objective === 'photo' ? `实物照片建模参考优化。严格保留参考器物现有形状、比例、材质、纹饰和破损现状，禁止修复、复原、补全缺失。${purpose === 'view' ? '根据指定相机位置真实改变观察视角，不可见部分保守推测。' : '保持当前拍摄方向，去除复杂背景、展柜反光和周围杂物，使用浅灰纯色背景与柔和均匀光照，单件居中，保留包浆与真实纹理。'}用户要求：${prompt.trim()}` : prompt.trim();
    const previewHash = hash(JSON.stringify({ objective, purpose, mode, effectivePrompt, size, quality, referenceIds: ids, analysisId: input.analysisId || null, caseId: input.caseId || null }));
    return { objective, purpose, mode, prompt: prompt.trim(), size, quality, referenceIds: ids, references: refs, context, effectivePrompt, previewHash, problems, warnings, promptVersion: 'R11-concise-complete', caseId: input.caseId || null, caseName: String(input.caseName || '').slice(0, 80), analysisId: input.analysisId || null };
  }
  return {
    ready,
    preview: prepare,
    async resolveReferences(ids) { await ready; if (!Array.isArray(ids) || ids.length > 4 || ids.some(id => !assets.has(id))) throw new ImageError(400, '参考图不存在或超过 4 张。'); return [...new Set([...ids.flatMap(id => roots(id)), ...ids])].map(id => assetPublic(assets.get(id))); },
    async status() { await ready; return { configured: Boolean(apiKey), model: IMAGE_MODEL, baseUrl: IMAGE_BASE, activeJobId: active.keys().next().value ?? null, activeJobIds: [...active.keys()],
      lastCheck, selectedJobId, capabilities: { generate: true, edit: true, multipleReferences: true, maxReferences: 4, maxUploadBytes: MAX_UPLOAD, mask: false, outputCount: 1 } }; },
    async check() {
      await ready; requireKey();
      const start = performance.now();
      try {
        const response = await fetchImpl(`${IMAGE_BASE}/models`, { headers: { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' }, redirect: 'error', signal: AbortSignal.timeout(25000) });
        const payload = await response.json().catch(() => null);
        const available = response.ok && Array.isArray(payload?.data) && payload.data.some(x => x.id === IMAGE_MODEL);
        lastCheck = { ok: Boolean(available), httpStatus: response.status, available: Boolean(available), model: IMAGE_MODEL, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start),
          message: available ? '鉴权成功，服务商已列出可用模型。此检查没有生成图片。' : '未确认模型可用，请检查密钥、权限或服务商响应。' };
      } catch { lastCheck = { ok: false, httpStatus: null, available: false, model: IMAGE_MODEL, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), message: '连接检查未取得有效响应，请检查网络。' }; }
      return lastCheck;
    },
    async upload(input) {
      await ready;
      const match = /^data:image\/(png|jpeg|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(input?.dataUrl ?? '');
      if (!match || match[2].length > MAX_UPLOAD * 1.4) throw new ImageError(400, '请上传单张不超过 10 MB 的 PNG、JPEG 或 WebP 图片。');
      const bytes = Buffer.from(match[2], 'base64');
      if (bytes.length > MAX_UPLOAD) throw new ImageError(413, '图片超过本地 10 MB 上限。');
      const known = [...assets.values()].find(a => a.kind === 'result' && a.sha256 === hash(bytes));
      const asset = await saveAsset(bytes, input.name ?? 'reference', known ? 'result' : 'reference');
      if (known) asset.derivedFrom = known.id;
      if (input.workspace === 'quick') asset.workspace = 'quick';
      await persist(); return assetPublic(asset);
    },
    async create(input, { concurrencyGroup = null } = {}) {
      await ready; requireKey();
      if (!UUID.test(input?.requestId ?? '')) throw new ImageError(400, '缺少有效请求编号，请刷新页面后重试。');
      if (requests.has(input.requestId)) { const previous = getJob(requests.get(input.requestId)); if ((previous.objective || 'restore') !== (input.objective ?? 'restore') || (previous.purpose || 'reference') !== (input.purpose ?? 'reference')) throw new ImageError(409, '提交编号已用于不同任务目标。'); return jobPublic(previous); }
      checkCapacity(concurrencyGroup);
      if (input.mask != null || input.n != null && input.n !== 1) throw new ImageError(400, '当前中转服务不支持蒙版或单次多张输出。');
      const prepared = await prepare(input);
      if (prepared.problems.length) throw new ImageError(422, prepared.problems.join(' '));
      if (input.mode === 'restore' && input.previewHash !== prepared.previewHash) throw new ImageError(422, '请先预览最新完整提示词，再确认生成。');
      // Recheck capacity and idempotency after async preparation, then reserve synchronously.
      if (requests.has(input.requestId)) { const previous = getJob(requests.get(input.requestId)); if ((previous.objective || 'restore') !== (input.objective ?? 'restore') || (previous.purpose || 'reference') !== (input.purpose ?? 'reference')) throw new ImageError(409, '提交编号已用于不同任务目标。'); return jobPublic(previous); }
      checkCapacity(concurrencyGroup);
      const { mode, prompt, size = 'auto', quality = 'auto', referenceIds = [] } = input;
      if (!['generate', 'edit', 'restore'].includes(mode) || typeof prompt !== 'string' || !prompt.trim() || prompt.length > 8000) throw new ImageError(400, '请选择模式，并填写不超过 8000 字符的生成或修补要求。');
      if (!ALLOWED_SIZES.has(size) || !ALLOWED_QUALITY.has(quality)) throw new ImageError(400, '尺寸或质量选项不受支持。');
      if (!Array.isArray(referenceIds) || referenceIds.length > 4 || new Set(referenceIds).size !== referenceIds.length || referenceIds.some(id => !UUID.test(id) || !assets.has(id))) throw new ImageError(400, '参考图片不存在、重复，或超过本地 4 张上限。');
      if (mode === 'generate' && referenceIds.length || mode !== 'generate' && !referenceIds.length) throw new ImageError(400, mode === 'generate' ? '文生图模式不使用参考图，请移除参考图或改为图像编辑。' : '复原或编辑模式至少需要一张参考图。');
      const { references: preparedRefs, problems, warnings, previewHash, ...saved } = prepared;
      const job = { ...saved, workspace: input.workspace === 'quick' ? 'quick' : null, id: randomUUID(), requestId: input.requestId,
        state: 'queued', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), message: '任务已记录，等待发送。' };
      active.set(job.id, { job, group: concurrencyGroup }); jobs.set(job.id, job); requests.set(job.requestId, job.id);
      try { await persist(); } catch { active.delete(job.id); jobs.delete(job.id); requests.delete(job.requestId); throw new ImageError(500, '无法保存任务，请检查本地目录权限。请求尚未发送。'); }
      void run(job).catch(() => { active.delete(job.id); });
      return jobPublic(job);
    },
    async list() { await ready; return [...jobs.values()].filter(j => j.state !== 'expired').reverse().map(jobPublic); },
    async get(id) { await ready; return jobPublic(getJob(id)); },
    async select(id) {
      await ready; const job = getJob(id);
      if (job.state !== 'success' || !job.resultAssetId) throw new ImageError(400, '只有成功保存的图像才能设为复原方案。');
      selectedJobId = id; await persist(); return jobPublic(job);
    },
    async recover(id, { concurrencyGroup = null } = {}) {
      await ready; requireKey(); const job = getJob(id);
      if (job.state === 'success') return jobPublic(job);
      if (active.has(id)) return jobPublic(job);
      checkCapacity(concurrencyGroup);
      if (!job.upstreamTaskId) throw new ImageError(400, '供应商未返回任务编号，请先到供应商后台查询；本工具不会重新提交生成。');
      active.set(job.id, { job, group: concurrencyGroup });
      try {
        const response = await fetchImpl(`${IMAGE_BASE}/media/status?task_id=${job.upstreamTaskId}`, { headers: { Authorization: `Bearer ${apiKey}`, Accept: 'application/json' }, redirect: 'error', signal: AbortSignal.timeout(25000) });
        if (!response.ok) throw new Error('Status query failed');
        const payload = await response.json();
        const state = payload.data ?? payload;
        if (typeof state.cost === 'number' && Number.isFinite(state.cost)) job.cost = state.cost;
        if (state.state === 'success' && typeof state.result_url === 'string') await saveResult(job, { url: state.result_url });
        else if (['failed', 'cancelled'].includes(state.state)) { job.state = 'failed'; job.message = '供应商查询结果：任务未成功。请确认计费记录后再决定是否新建任务。'; }
        else { job.state = 'uncertain'; job.message = '尚未取得可下载的成功结果，可稍后再次查询；本次没有重新生成。'; }
        job.updatedAt = new Date().toISOString(); await persist();
        return jobPublic(job);
      } catch { throw new ImageError(502, '查询或找回失败。没有重新提交生成任务，请稍后查询或查看供应商记录。'); }
      finally { active.delete(job.id); }
    },
    async asset(id) {
      await ready; const asset = assets.get(id);
      if (!asset || !UUID.test(id) || !/^[0-9a-f-]+\.(png|jpg|webp)$/.test(asset.file)) throw new ImageError(404, '图片不存在。');
      return { ...assetPublic(asset), content: await readFile(join(dataDir, 'assets', asset.file)) };
    },
    async prune(keepJobs, keepAssets, cutoff) {
      await ready; if (active.size) return;
      // Retain completed model dependencies, legacy/research records and unresolved requests.
      for (const j of jobs.values()) if (j.workspace === 'quick' && !keepJobs.has(j.id) && ['success','failed'].includes(j.state) && Date.parse(j.updatedAt) < cutoff) {
        Object.assign(j, { state: 'expired', prompt: '', effectivePrompt: null, context: null, referenceIds: [], resultAssetId: null, analysisId: null, message: '临时图片已过期，请重新上传。' });
        if (selectedJobId === j.id) selectedJobId = null;
      }
      const retained = new Set(keepAssets);
      for (const j of jobs.values()) { for (const id of j.referenceIds || []) retained.add(id); if (j.resultAssetId) retained.add(j.resultAssetId); }
      for (const a of assets.values()) if (a.workspace !== 'quick' || Date.parse(a.createdAt) >= cutoff) retained.add(a.id);
      const visit = id => { const a = assets.get(id); if (a?.derivedFrom && !retained.has(a.derivedFrom)) { retained.add(a.derivedFrom); visit(a.derivedFrom); } for (const root of roots(id)) retained.add(root); };
      for (const id of retained) visit(id);
      const removed = [];
      for (const [id,a] of assets) if (!retained.has(id) && a.workspace === 'quick' && /^[0-9a-f-]+\.(png|jpg|webp)$/.test(a.file)) { assets.delete(id); removed.push(a.file); }
      await persist();
      for (const file of removed) await unlink(join(dataDir, 'assets', file)).catch(e => { if (e.code !== 'ENOENT') throw e; });
    },
    async waitForIdle(id = null) { await ready; while (id ? active.has(id) : active.size) await new Promise(resolve => setTimeout(resolve, 5)); },
  };
}
