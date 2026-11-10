import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';
import { createModelService, TRIPO_BASE, validateGlb } from './model-service.mjs';
import { createApp } from './server.mjs';
import { fixtureGlb } from './model-test-fixture.mjs';
const glb = fixtureGlb();
const sourceId = randomUUID();
const source = { id: sourceId, state: 'success', selected: true, result: { id: randomUUID(), name: 'synthetic.png', bytes: 100, mime: 'image/png', url: '/api/images/assets/synthetic' } };
const images = { async get() { return source; }, async asset() { return { content: Buffer.from('synthetic'), mime: 'image/png' }; } };
const input = () => ({ requestId: randomUUID(), sourceJobId: sourceId, profile: 'web' });
const ok = data => Response.json({ code: 0, data });
async function fixture(overrides = {}) {
  const calls = [];
  const dataDir = await mkdtemp(join(tmpdir(), 'tripo-model-test-'));
  const service = createModelService({ getKey: () => 'synthetic-tripo-secret', imageService: images, dataDir, pollMs: 1, lookupImpl: async () => [{ address: '8.8.8.8' }], fetchImpl: async (url, options) => {
    calls.push({ url, options });
    if (url === `${TRIPO_BASE}/files`) { assert.ok(options.body.get('file')); return ok({ file_token: 'file_test' }); }
    if (url.includes('/generation/')) return ok({ task_id: 'test-task' });
    if (url.includes('/tasks/')) return ok({ status: 'success', progress: 100, credits_consumed: 30, output: { model_url: 'https://cdn.tripo3d.ai/test.glb' } });
    return new Response(glb);
  }, ...overrides });
  await service.ready; return { service, calls, dataDir };
}
test('selected image -> upload -> create -> query -> local GLB; credentials stay server-side', async () => {
  const { service, calls, dataDir } = await fixture(); const payload = input(); const created = await service.create(payload); await service.waitForIdle();
  const job = await service.get(created.id); assert.equal(job.state, 'success'); assert.equal(job.credits, 30); assert.deepEqual(await service.asset(job.id), glb);
  assert.equal((await service.create(payload)).id, job.id); assert.equal((await service.create(input())).id, job.id); assert.equal(calls.length, 4);
  const body = JSON.parse(calls[1].options.body); assert.equal(body.input, 'file_test'); assert.equal(body.face_limit, 50000); assert.equal(body.enable_image_autofix, false); assert.equal(body.pbr, true);
  assert.equal(calls[3].options.headers, undefined); assert.ok(!JSON.stringify(job).includes('secret')); assert.ok(!(await readFile(join(dataDir, 'state.json'), 'utf8')).includes('synthetic-tripo-secret'));
});
test('unconfirmed proposal and invalid precision do not call provider', async () => {
  const { service, calls } = await fixture({ imageService: { ...images, get: async () => ({ ...source, selected: false }) } });
  await assert.rejects(service.create(input()), { status: 400 }); await assert.rejects(service.create({ ...input(), profile: 'ultra' }), { status: 400 }); assert.equal(calls.length, 0);
});
test('concurrent creates allow only one paid submission', async () => {
  const { service, calls } = await fixture(); const results = await Promise.allSettled([service.create(input()), service.create(input())]);
  await service.waitForIdle(); assert.equal(results.filter(r => r.status === 'fulfilled').length, 1); assert.equal(results.find(r => r.status === 'rejected').reason.status, 409); assert.equal(calls.filter(c => c.url.includes('/generation/')).length, 1);
});
test('unknown task states stop at bounded timeout and preserve task ID', async () => {
  let posts = 0;
  const { service } = await fixture({ maxPollMs: 8, fetchImpl: async url => { if (url.endsWith('/files')) return ok({ file_token: 'file_test' }); if (url.includes('/generation/')) { posts++; return ok({ task_id: 'bounded-task' }); } return ok({ status: 'unknown', progress: 35 }); } });
  const job = await service.create(input()); await service.waitForIdle(); const final = await service.get(job.id); assert.equal(final.state, 'uncertain'); assert.equal(final.taskId, 'bounded-task'); assert.equal(posts, 1);
});
test('explicit provider rejection is reported without automatic retry', async () => {
  let posts = 0;
  const { service } = await fixture({ fetchImpl: async url => { if (url.endsWith('/files')) return ok({ file_token: 'file_test' }); posts++; return Response.json({ code: 2010, message: 'synthetic private upstream detail' }, { status: 400 }); } });
  const job = await service.create(input()); await service.waitForIdle(); const final = await service.get(job.id); assert.equal(final.state, 'failed'); assert.match(final.message, /2010/); assert.ok(!JSON.stringify(final).includes('private upstream')); assert.equal(posts, 1);
});
test('ambiguous submission never automatically retries; task ID recovery queries only', async () => {
  let posts = 0; const calls = [];
  const { service } = await fixture({ fetchImpl: async (url, options) => { calls.push(url); if (url.endsWith('/files')) return ok({ file_token: 'file_test' }); if (url.includes('/generation/')) { posts++; throw new Error('timeout'); } if (url.includes('/tasks/')) return ok({ status: 'success', output: { model_url: 'https://cdn.tripo3d.ai/a.glb' } }); return new Response(glb); } });
  const job = await service.create(input()); await service.waitForIdle(); assert.equal((await service.get(job.id)).state, 'uncertain'); assert.equal(posts, 1);
  assert.equal((await service.create(input())).id, job.id); await assert.rejects(service.recover(job.id), { status: 400 });
  await service.recover(job.id, { taskId: 'found-task-id' }); await service.waitForIdle(); assert.equal((await service.get(job.id)).state, 'success'); assert.equal(posts, 1);
});
test('expired download is recovered by query without another generation', async () => {
  let downloads = 0, posts = 0;
  const { service } = await fixture({ fetchImpl: async (url) => { if (url.endsWith('/files')) return ok({ file_token: 'file_test' }); if (url.includes('/generation/')) { posts++; return ok({ task_id: 'task' }); } if (url.includes('/tasks/')) return ok({ status: 'success', output: { model_url: 'https://cdn.tripo3d.ai/a.glb' } }); downloads++; return downloads === 1 ? new Response('', { status: 403 }) : new Response(glb); } });
  const job = await service.create(input()); await service.waitForIdle(); assert.equal((await service.get(job.id)).state, 'download_failed');
  await service.recover(job.id); await service.waitForIdle(); assert.equal((await service.get(job.id)).state, 'success'); assert.equal(posts, 1);
});
test('model downloads reject private network and external GLB resources', async () => {
  const { service } = await fixture({ lookupImpl: async () => [{ address: '127.0.0.1' }] }); const job = await service.create(input()); await service.waitForIdle(); assert.equal((await service.get(job.id)).state, 'download_failed');
  assert.throws(() => validateGlb(fixtureGlb({ images: [{ uri: 'https://example.com/leak.png' }] })));
  assert.throws(() => validateGlb(Buffer.from('not a glb')));
});
test('restart retains model, marks and submission identity', async () => {
  const { service, dataDir } = await fixture(); const payload = input(); const job = await service.create(payload); await service.waitForIdle();
  const regions = [{ position: [.1,.2,.3], radius: .12 }]; await service.annotate(job.id, { regions }); await assert.rejects(service.annotate(job.id, { regions: [{ position: [999,0,0], radius: .1 }] }), { status: 400 });
  const next = createModelService({ dataDir, getKey: () => 'synthetic', imageService: images }); await next.ready; assert.deepEqual((await next.get(job.id)).annotations, regions); assert.equal((await next.create(payload)).id, job.id); assert.deepEqual(await next.asset(job.id), glb);
});
test('restart marks in-flight jobs uncertain without resubmitting', async () => {
  const { service, dataDir } = await fixture(); const job = await service.create(input()); await service.waitForIdle(); const file = join(dataDir, 'state.json'); const state = JSON.parse(await readFile(file)); state.jobs[0].state = 'running'; state.jobs[0].saved = false; await writeFile(file, JSON.stringify(state));
  let requests = 0; const next = createModelService({ dataDir, fetchImpl: async () => { requests++; } }); await next.ready; assert.equal((await next.list())[0].state, 'uncertain'); assert.equal(requests, 0);
});
test('model HTTP routes reject cross-origin requests and serve valid local downloads', async t => {
  const { service } = await fixture(); const server = createApp({ modelService: service }); await new Promise(resolve => server.listen(0, '127.0.0.1', resolve)); t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const post = (body, from = origin) => fetch(`${origin}/api/models/jobs`, { method: 'POST', headers: { Origin: from, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  assert.equal((await post(input(), 'https://example.com')).status, 403); const res = await post(input()); assert.equal(res.status, 202); const job = await res.json(); await service.waitForIdle(); const model = await fetch(`${origin}/api/models/jobs/${job.id}/model?download=1`); assert.equal(model.headers.get('content-type'), 'model/gltf-binary'); assert.match(model.headers.get('content-disposition'), /attachment/); assert.deepEqual(Buffer.from(await model.arrayBuffer()), glb);
});
