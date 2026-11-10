import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {createHash} from 'node:crypto';
import {handlePassportRequest} from '../server/passport-api.js';
import {exhibits} from '../src/exhibits.js';

const DAY = 24 * 60 * 60 * 1000;
test('rolling 90-day sessions, nickname, recovery rotation, merging and replay isolation', async t => {
  const dataDir = await mkdtemp(join(tmpdir(), 'passport-recovery-'));
  const file = join(dataDir, 'passport.json');
  let now = Date.UTC(2026, 10, 6);
  const server = createServer((req, res) => handlePassportRequest(req, res, {dataDir, now: () => now}));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(dataDir, {recursive: true, force: true}); });
  const origin = `http://127.0.0.1:${server.address().port}`;
  const request = async (client, path = '', body) => {
    const response = await fetch(`${origin}/api/passport${path}`, {
      method: body === undefined ? 'GET' : 'POST',
      headers: {Origin: origin, 'Content-Type': 'application/json', Cookie: client.cookie || ''},
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    const cookie = response.headers.get('set-cookie');
    if (cookie) {
      assert.match(cookie, /Max-Age=7776000/);
      assert.match(cookie, /HttpOnly; SameSite=Lax/);
      client.cookie = cookie.split(';')[0];
    }
    return {status: response.status, body: await response.json()};
  };
  const [firstId, secondId] = Object.keys(exhibits);
  const original = {};
  let snapshot = (await request(original)).body;
  assert.deepEqual(snapshot.storage, {expiresAt: new Date(now + 90 * DAY).toISOString(), retentionDays: 90, hasRecoveryCode: false});
  const originalToken = original.cookie;
  now += 89 * DAY;
  snapshot = (await request(original)).body;
  assert.equal(original.cookie, originalToken);
  assert.equal(snapshot.storage.expiresAt, new Date(now + 90 * DAY).toISOString());
  await request(original, '/checkin', {artifactId: firstId});
  // Reproduce the persisted format from before rolling sessions and recovery codes.
  const legacyState = JSON.parse(await readFile(file, 'utf8'));
  const legacySessionKey = createHash('sha256').update(original.cookie.split('=')[1]).digest('hex');
  const legacySession = legacyState.sessions[legacySessionKey];
  legacySession.expiresAt = now + 30 * DAY;
  delete legacyState.profiles[legacySession.profileId].recoveryHash;
  assert.equal(Object.hasOwn(legacyState.profiles[legacySession.profileId], 'storage'), false);
  await writeFile(file, JSON.stringify(legacyState));
  const legacyCookie = original.cookie;
  const migrated = (await request(original)).body;
  assert.equal(original.cookie, legacyCookie);
  assert.equal(migrated.visits[0].artifactId, firstId);
  assert.equal(migrated.visits[0].visitCount, 1);
  assert.deepEqual(migrated.storage, {expiresAt: new Date(now + 90 * DAY).toISOString(), retentionDays: 90, hasRecoveryCode: false});
  const migratedState = JSON.parse(await readFile(file, 'utf8'));
  assert.equal(migratedState.sessions[legacySessionKey].expiresAt, now + 90 * DAY);
  assert.equal((await request(original, '/nickname', {nickname: '  瓷器收藏者  '})).body.passport.profile.nickname, '瓷器收藏者');
  assert.equal((await request(original, '/nickname', {nickname: ''})).body.passport.profile.nickname, '观展游客');
  assert.equal((await request(original, '/nickname', {nickname: 'x'.repeat(31)})).status, 400);
  const firstCode = (await request(original, '/recovery-code', {})).body.recoveryCode;
  assert.match(firstCode, /^[a-f0-9]{64}$/);
  const generated = (await request(original, '/recovery-code', {})).body;
  const code = generated.recoveryCode;
  assert.notEqual(code, firstCode);
  assert.equal(generated.passport.storage.hasRecoveryCode, true);
  assert.equal(JSON.stringify(generated.passport).includes(code), false);
  const stored = await readFile(file, 'utf8');
  assert.equal(stored.includes(code), false);
  assert.ok(stored.includes(createHash('sha256').update(code).digest('hex')));
  const invalidClient = {};
  assert.equal((await request(invalidClient, '/restore', {recoveryCode: firstCode})).status, 401);
  assert.equal(await readFile(file, 'utf8'), stored, 'failed transaction must not create a guest or persist changes');
  const sameProfile = await request(original, '/restore', {recoveryCode: code});
  assert.equal(sameProfile.body.passport.visits[0].visitCount, 1);
  assert.notEqual(original.cookie, originalToken);
  const incoming = {};
  await request(incoming);
  await request(incoming, '/checkin', {artifactId: firstId});
  await request(incoming, '/checkin', {artifactId: secondId});
  const incomingCode = (await request(incoming, '/recovery-code', {})).body.recoveryCode;
  const staleIncoming = {cookie: incoming.cookie};
  const concurrent = await Promise.all([
    request(incoming, '/restore', {recoveryCode: code}),
    request({cookie: incoming.cookie}, '/restore', {recoveryCode: code}),
  ]);
  assert.ok(concurrent.every(result => result.status === 200));
  const merged = (await request(incoming)).body;
  assert.equal(merged.visits.length, 2);
  assert.equal(merged.visits.find(visit => visit.artifactId === firstId).visitCount, 2);
  assert.equal((await request({}, '/restore', {recoveryCode: incomingCode})).status, 401);
  assert.deepEqual((await request(staleIncoming)).body.visits, []);
  assert.equal((await request(incoming, '/restore', {recoveryCode: code})).body.passport.visits.find(visit => visit.artifactId === firstId).visitCount, 2);
  now += 91 * DAY;
  assert.deepEqual((await request(incoming)).body.visits, [], 'inactive session expires after 90 days');
  assert.equal((await request(incoming, '/restore', {recoveryCode: code})).body.passport.visits.length, 2, 'recovery survives cookie expiry');
  const accountClient = {};
  await request(accountClient);
  await request(accountClient, '/register', {username: 'legacy_account', password: 'legacy-password', nickname: '原账户'});
  await request(accountClient, '/checkin', {artifactId: secondId});
  const preservedAccount = {};
  assert.equal((await request(preservedAccount, '/login', {username: 'legacy_account', password: 'legacy-password'})).status, 200);
  assert.equal((await request(accountClient, '/restore', {recoveryCode: code})).body.passport.profile.kind, 'guest');
  const preserved = (await request(preservedAccount)).body;
  assert.equal(preserved.profile.kind, 'account');
  assert.equal(preserved.visits.length, 1, 'switching away from account preserves its records and other sessions');
  for (let attempt = 0; attempt < 10; attempt++) await request({}, '/restore', {recoveryCode: '0'.repeat(64)});
  assert.equal((await request({}, '/restore', {recoveryCode: '0'.repeat(64)})).status, 429);
});
