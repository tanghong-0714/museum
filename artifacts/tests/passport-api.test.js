import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdtemp, rm, readFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {handlePassportRequest} from '../server/passport-api.js';
import {exhibits} from '../src/exhibits.js';

test('persistent passport account, isolation, merge, concurrency and request boundaries', async t => {
  const artifactIds = Object.keys(exhibits);
  assert.ok(artifactIds.length >= 3, 'three-visit achievement requires at least three configured exhibits');
  const [firstArtifact, secondArtifact, thirdArtifact] = artifactIds;
  const directory = await mkdtemp(join(tmpdir(), 'museum-passport-'));
  const start = async () => {
    const server = createServer(async (req, res) => {
      if (!await handlePassportRequest(req, res, {dataDir: directory, env: {ARTIFACT_PUBLIC_BASE_URL: 'https://museum.example/?secret=discard'}})) { res.statusCode = 404; res.end(); }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    return server;
  };
  let server = await start();
  t.after(async () => { await new Promise(resolve => server.close(resolve)); await rm(directory, {recursive: true, force: true}); });
  const origin = () => `http://127.0.0.1:${server.address().port}`;
  const client = () => {
    let cookie = '';
    return async (path = '', body, overrides = {}) => {
      const response = await fetch(`${origin()}/api/passport${path}`, {
        method: body === undefined ? 'GET' : 'POST',
        headers: {'Content-Type': 'application/json', Origin: origin(), Cookie: cookie, ...overrides},
        body: body === undefined ? undefined : JSON.stringify(body),
      });
      const setCookie = response.headers.get('set-cookie');
      if (setCookie) {
        assert.match(setCookie, /HttpOnly/);
        assert.match(setCookie, /SameSite=Lax/);
        cookie = setCookie.split(';')[0];
      }
      return {status: response.status, body: await response.json()};
    };
  };
  const alice = client();
  const bob = client();
  const first = await alice();
  assert.equal(first.body.profile.kind, 'guest');
  assert.equal(first.body.artifactCount, artifactIds.length);
  assert.equal(first.body.publicBaseUrl, 'https://museum.example/');
  await bob();
  assert.equal((await alice('/checkin', {artifactId: 'unknown'})).status, 400);
  assert.equal((await alice('/checkin', {artifactId: firstArtifact}, {Origin: 'https://attacker.example'})).status, 403);
  assert.equal((await alice('/checkin', {artifactId: firstArtifact}, {Origin: ''})).status, 403);
  assert.equal((await alice('/checkin', {artifactId: firstArtifact, excess: 'x'.repeat(5000)})).status, 413);
  const checks = await Promise.all(Array.from({length: 12}, () => alice('/checkin', {artifactId: firstArtifact})));
  assert.equal(checks.filter(value => value.body.created).length, 1);
  assert.equal((await alice()).body.visits[0].visitCount, 12);
  assert.deepEqual((await bob()).body.visits, []);
  const account = await alice('/register', {username: 'Alice_1', password: 'strong-password-123', nickname: '青花爱好者'});
  assert.equal(account.status, 200);
  assert.equal(account.body.passport.profile.kind, 'account');
  assert.equal(account.body.passport.visits[0].visitCount, 12);
  assert.equal(account.body.passport.achievements[0].unlocked, true);
  await bob('/checkin', {artifactId: secondArtifact});
  assert.equal((await bob('/login', {username: 'alice_1', password: 'wrong-password'})).status, 401);
  assert.equal((await bob()).body.profile.kind, 'guest');
  const login = await bob('/login', {username: 'ALICE_1', password: 'strong-password-123'});
  assert.equal(login.body.passport.visits.length, 2);
  await bob('/checkin', {artifactId: thirdArtifact});
  assert.equal((await alice()).body.achievements[1].unlocked, true);
  for (const artifactId of artifactIds.slice(3)) {
    const before = await alice();
    assert.equal(before.body.achievements[2].unlocked, false);
    assert.equal((await alice('/checkin', {artifactId})).body.created, true);
  }
  const completed = (await alice()).body;
  assert.equal(completed.achievements[2].unlocked, true);
  assert.equal(completed.achievements[2].target, artifactIds.length);
  assert.equal(completed.achievements[2].progress, artifactIds.length);
  assert.deepEqual(completed.visits.map(visit => visit.artifactId).sort(), [...artifactIds].sort());
  const logout = await bob('/logout', {});
  assert.equal(logout.body.passport.profile.kind, 'guest');
  assert.deepEqual(logout.body.passport.visits, []);
  await new Promise(resolve => server.close(resolve));
  server = await start();
  assert.equal((await alice()).body.visits.length, artifactIds.length);
  const stored = await readFile(join(directory, 'passport.json'), 'utf8');
  assert.equal(stored.includes('strong-password-123'), false);
  assert.equal(JSON.stringify(account.body).includes('hash'), false);
  assert.equal((await bob('/register', {username: 'alice_1', password: 'new-password', nickname: '重复'})).status, 409);
  for (let index = 0; index < 10; index++) await bob('/login', {username: 'limited_user', password: 'wrong-password'});
  assert.equal((await bob('/login', {username: 'limited_user', password: 'wrong-password'})).status, 429);
});
