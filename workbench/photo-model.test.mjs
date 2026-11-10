import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createModelService, TRIPO_BASE } from './model-service.mjs';
import { createApp } from './server.mjs';
import { fixtureGlb } from './model-test-fixture.mjs';

async function fixture({ ambiguous = false } = {}) {
  const sourceAssetId = randomUUID(), multiviewJobId = randomUUID(), calls = [];
  const source = { id: sourceAssetId, kind: 'reference', name: 'original.png', bytes: 8, mime: 'image/png', url: `/api/images/assets/${sourceAssetId}` };
  const viewJob = { id: multiviewJobId, viewSet: 'photo', sourceAssetId, state: 'success', views: ['front','left','back','right'].map(view => ({ view, provenance: view === 'front' ? 'original' : 'generated', assetId: view === 'front' ? sourceAssetId : randomUUID() })) };
  const imageService = { asset: async id => ({ ...source, id, content: Buffer.from('ORIGINAL') }) };
  const multiviewService = { get: async () => viewJob, asset: async (_, view) => ({ mime: 'image/png', content: Buffer.from(view) }) };
  const dataDir = await mkdtemp(join(tmpdir(), 'photo-model-'));
  const fetchImpl = async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith('/files')) return Response.json({ code: 0, data: { file_token: `token-${calls.length}` } });
    if (url.includes('/generation/')) { if (ambiguous) throw new Error('timeout'); return Response.json({ code: 0, data: { task_id: 'model-task' } }); }
    if (url.includes('/tasks/')) return Response.json({ code: 0, data: { status: 'success', output: { model_url: 'https://example.com/model.glb' } } });
    return new Response(fixtureGlb());
  };
  const options = { dataDir, imageService, multiviewService, getKey: () => 'synthetic', fetchImpl, lookupImpl: async () => [{ address: '8.8.8.8' }] };
  const service = createModelService(options);
  const input = { requestId: randomUUID(), sourceAssetId, multiviewJobId, profile: 'web' };
  return { service, input, calls, source, viewJob, options };
}

test('photo model uploads original front and all oriented sides, persists source and deduplicates', async () => {
  const { service, input, calls, source, options } = await fixture();
  const job = await service.create(input); await service.waitForIdle();
  const uploads = calls.filter(c => c.url === `${TRIPO_BASE}/files`);
  assert.equal(uploads.length, 4);
  assert.equal(await uploads[0].options.body.get('file').text(), 'ORIGINAL');
  assert.deepEqual(await Promise.all(uploads.slice(1).map(c => c.options.body.get('file').text())), ['left','back','right']);
  const body = JSON.parse(calls.find(c => c.url.includes('/generation/')).options.body);
  assert.deepEqual(body.inputs, [{ front: 'token-1' }, { left: 'token-2' }, { back: 'token-3' }, { right: 'token-4' }]);
  const reloaded = createModelService(options); await reloaded.ready;
  assert.equal((await reloaded.get(job.id)).source.url, source.url);
  assert.equal((await reloaded.create(input)).id, job.id);
  await assert.rejects(reloaded.create({ ...input, sourceAssetId: randomUUID() }), { status: 409 });
});

test('photo model rejects mixed, generated, incomplete and cross-photo sources before provider calls', async () => {
  const { service, input, source, viewJob, calls } = await fixture();
  await assert.rejects(service.create({ ...input, sourceJobId: randomUUID() }), { status: 400 });
  source.kind = 'result'; await assert.rejects(service.create(input), { status: 400 }); source.kind = 'reference';
  viewJob.sourceAssetId = randomUUID(); await assert.rejects(service.create(input), { status: 400 }); viewJob.sourceAssetId = input.sourceAssetId;
  viewJob.views.pop(); await assert.rejects(service.create(input), { status: 400 });
  assert.equal(calls.length, 0);
});

test('ambiguous photo submission recovers by task lookup without uploading or generating again', async () => {
  const { service, input, calls } = await fixture({ ambiguous: true });
  const job = await service.create(input); await service.waitForIdle();
  assert.equal((await service.get(job.id)).state, 'uncertain');
  await service.recover(job.id, { taskId: 'found-task' }); await service.waitForIdle();
  assert.equal((await service.get(job.id)).state, 'success');
  assert.equal(calls.filter(c => c.url.includes('/generation/')).length, 1);
  assert.equal(calls.filter(c => c.url.endsWith('/files')).length, 4);
});


test('replacement HTTP route applies local-origin JSON and size guards', async t => {
  const calls = [];
  const server = createApp({ multiviewService: { replace: async (id, input) => { calls.push({ id, input }); return { id: 'replacement' }; } } });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const post = (body, from = origin) => fetch(`${origin}/api/multiview/jobs/photo/replace`, { method: 'POST', headers: { Origin: from, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  assert.equal((await post({}, 'https://example.com')).status, 403);
  assert.equal((await post({ notes: 'x'.repeat(33000) })).status, 413);
  assert.equal((await post({ view: 'left', assetId: 'raw' })).status, 202);
  assert.deepEqual(calls, [{ id: 'photo', input: { view: 'left', assetId: 'raw' } }]);
});


test('optimized photo model uploads actual prepared front and validates its original', async () => {
  const f = await fixture();
  const preparedId = randomUUID();
  f.viewJob.preparedJobId = randomUUID();
  f.viewJob.views[0] = {view:'front',provenance:'generated',assetId:preparedId};
  f.options.imageService.get = async () => ({state:'success',objective:'photo',mode:'edit',originalReferences:[{id:f.input.sourceAssetId}],result:{id:preparedId}});
  const job = await f.service.create(f.input); await f.service.waitForIdle();
  assert.equal((await f.service.get(job.id)).state,'success');
  const uploads = f.calls.filter(c=>c.url.endsWith('/files'));
  assert.deepEqual(await Promise.all(uploads.map(c=>c.options.body.get('file').text())),['front','left','back','right']);
  const other = await fixture(); other.viewJob.preparedJobId=randomUUID(); other.viewJob.views[0]={view:'front',provenance:'generated',assetId:preparedId};
  other.options.imageService.get=async()=>({state:'success',objective:'photo',mode:'edit',originalReferences:[{id:randomUUID()}],result:{id:preparedId}});
  await assert.rejects(other.service.create(other.input),{status:400}); assert.equal(other.calls.length,0);
});
