import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdtemp, readFile, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {handlePassportRequest} from '../server/passport-api.js';
import {exhibits} from '../src/exhibits.js';

test('achievement dates follow distinct first visits and merged history without persisting derived fields', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'passport-achievements-'));
  let now = Date.parse('2026-11-01T10:00:00Z');
  const server = createServer((req, res) => handlePassportRequest(req, res, {dataDir: directory, env: {}, now: () => now}));
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(async () => {
    await new Promise(resolve => server.close(resolve));
    await rm(directory, {recursive: true, force: true});
  });
  const origin = `http://127.0.0.1:${server.address().port}`;
  function client() {
    let cookie = '';
    return async (path = '', body) => {
      const response = await fetch(`${origin}/api/passport${path}`, {
        method: body === undefined ? 'GET' : 'POST',
        headers: {Origin: origin, Cookie: cookie, 'Content-Type': 'application/json'},
        body: body === undefined ? undefined : JSON.stringify(body),
      });
      assert.equal(response.status, 200);
      cookie = response.headers.get('set-cookie')?.split(';')[0] || cookie;
      const result = await response.json();
      return result.passport ? {...result.passport, recoveryCode: result.recoveryCode} : result;
    };
  }
  const ids = Object.keys(exhibits);
  assert.ok(ids.length >= 3);
  const account = client();
  const empty = await account();
  assert.ok(empty.achievements.every(item => item.unlockedAt === null));
  assert.equal(empty.achievements.find(item => item.id === 'all').target, ids.length);
  const firstDate = new Date(now).toISOString();
  const first = await account('/checkin', {artifactId: ids[0]});
  assert.equal(first.achievements[0].unlockedAt, firstDate);
  await account('/register', {username: 'achievement_dates', password: 'long-password-123', nickname: '藏器者'});
  now += 86400000;
  await account('/checkin', {artifactId: ids[0]});
  assert.equal((await account()).achievements[0].unlockedAt, firstDate);
  const guest = client();
  // Incoming guest records are intentionally older than the account's records.
  now -= 2 * 86400000;
  const earlierDate = new Date(now).toISOString();
  await guest('/checkin', {artifactId: ids[1]});
  now += 3 * 86400000;
  const thirdDate = new Date(now).toISOString();
  await guest('/checkin', {artifactId: ids[2]});
  const merged = await guest('/login', {username: 'achievement_dates', password: 'long-password-123'});
  assert.equal(merged.achievements[0].unlockedAt, earlierDate);
  assert.equal(merged.achievements[1].unlockedAt, thirdDate);
  for (const artifactId of ids.slice(3)) {
    now += 86400000;
    await guest('/checkin', {artifactId});
  }
  const complete = await guest();
  const all = complete.achievements.find(item => item.id === 'all');
  assert.equal(all.target, ids.length);
  assert.equal(all.progress, ids.length);
  assert.equal(all.unlockedAt, new Date(now).toISOString());
  const {recoveryCode} = await guest('/recovery-code', {});
  const restoringGuest = client();
  now = Date.parse('2026-10-30T10:00:00Z');
  await restoringGuest('/checkin', {artifactId: ids[0]});
  const restored = await restoringGuest('/restore', {recoveryCode});
  assert.equal(restored.achievements[0].unlockedAt, new Date(now).toISOString());
  assert.equal(restored.achievements[1].unlockedAt, thirdDate);
  assert.equal(restored.achievements[2].unlockedAt, all.unlockedAt);
  const persisted = await readFile(join(directory, 'passport.json'), 'utf8');
  assert.equal(persisted.includes('unlockedAt'), false);
  assert.equal(persisted.includes('achievements'), false);
});
