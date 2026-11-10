import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createMultiviewService, VIEW_KEYS } from './multiview-service.mjs';
import { createModelService } from './model-service.mjs';
import { createApp } from './server.mjs';
import { fixtureGlb } from './model-test-fixture.mjs';
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1cAAAAASUVORK5CYII=', 'base64');
const viewPng = url => url.includes('/front.png') ? png : Buffer.concat([png,Buffer.from(new URL(url).pathname)]);
const source = { id: randomUUID(), selected: true, state: 'success', workspace: 'quick', result: { id: randomUUID(), bytes: png.length, mime: 'image/png', url: '/source', name: 'result.png' } };
const images = { get: async () => source, asset: async () => ({ ...source.result, content: png }) };
const input = () => ({ requestId: randomUUID(), sourceJobId: source.id });
const ok = data => Response.json({ code: 0, data });
async function fixture(extra = {}) {
  const calls = [], dataDir = await mkdtemp(join(tmpdir(), 'fourviews-test-'));
  const service = createMultiviewService({ getKey: () => 'synthetic-key', imageService: images, dataDir, pollMs: 1, lookupImpl: async () => [{ address: '8.8.8.8' }], fetchImpl: async (url, options) => {
    calls.push({ url, options });
    if (url.endsWith('/files')) return ok({ file_token: 'file_test' });
    if (url.endsWith('/generation/image-to-multiview')) return ok({ task_id: 'view-task' });
    if (url.includes('/tasks/')) return ok({ status: 'success', output: { generate_multiview_image: Object.fromEntries(VIEW_KEYS.map(v => [`${v}_view_url`, `https://cdn.tripo3d.ai/${v}.png`])) } });
    assert.equal(options.headers, undefined); return new Response(viewPng(url));
  }, ...extra });
  await service.ready; return { service, calls, dataDir };
}
test('native four-view task downloads four labelled images and deduplicates generation', async () => {
  const { service, calls } = await fixture(); const req = input(), j = await service.create(req); await service.waitForIdle();
  const final = await service.get(j.id); assert.equal(final.state, 'success'); assert.deepEqual(final.views.map(v => v.view), VIEW_KEYS);
  assert.deepEqual(JSON.parse(calls[1].options.body), { input: 'file_test' });
  for (const v of VIEW_KEYS) assert.deepEqual((await service.asset(j.id, v)).content, viewPng(`https://cdn.tripo3d.ai/${v}.png`));
  assert.equal((await service.create(req)).id, j.id); assert.equal((await service.create(input())).id, j.id);
  assert.equal(calls.filter(c => c.url.includes('/generation/')).length, 1); assert.ok(!JSON.stringify(final).includes('synthetic-key'));
});
test('invalid source and concurrent submission cannot create extra charged tasks', async () => {
  const bad = await fixture({ imageService: { ...images, get: async () => ({ ...source, state: 'running' }) } });
  await assert.rejects(bad.service.create(input()), { status: 400 }); assert.equal(bad.calls.length, 0);
  const { service, calls } = await fixture(); const result = await Promise.allSettled([service.create(input()), service.create(input())]); await service.waitForIdle();
  assert.equal(result.filter(r => r.status === 'fulfilled').length, 1); assert.equal(calls.filter(c => c.url.includes('/generation/')).length, 1);
});
test('ambiguous multiview submission is not repeated after refresh or restart', async () => {
  let submissions = 0;
  const f = await fixture({ fetchImpl: async url => { if (url.endsWith('/files')) return ok({ file_token: 'file' }); submissions++; throw new Error('timeout'); } });
  const req = input(), j = await f.service.create(req); await f.service.waitForIdle(); assert.equal((await f.service.get(j.id)).state, 'uncertain');
  const again = createMultiviewService({ getKey: () => 'synthetic', imageService: images, dataDir: f.dataDir, fetchImpl: () => { throw new Error('must not resubmit'); } });
  assert.equal((await again.create(req)).id, j.id); assert.equal(submissions, 1);
});
test('unsafe or incomplete four-view downloads cannot become model-ready', async () => {
  const f = await fixture({ lookupImpl: async () => [{ address: '127.0.0.1' }] }); const j = await f.service.create(input()); await f.service.waitForIdle();
  assert.equal((await f.service.get(j.id)).state, 'download_failed'); assert.equal((await f.service.get(j.id)).views.length, 0);
  await f.service.recover(j.id); await f.service.waitForIdle(); assert.equal(f.calls.filter(c => c.url.includes('/generation/')).length, 1);
});

test('a previously failed download recovers real nested output without another paid POST', async () => {
  const f = await fixture({ lookupImpl: async () => [{ address: '127.0.0.1' }] });
  const j = await f.service.create(input()); await f.service.waitForIdle();
  const calls = [];
  const recovered = createMultiviewService({ getKey: () => 'synthetic', imageService: images, dataDir: f.dataDir, pollMs: 1, lookupImpl: async () => [{ address: '8.8.8.8' }], fetchImpl: async (url, options) => {
    calls.push({ url, options }); assert.notEqual(options?.method, 'POST');
    if (url.includes('/tasks/')) return ok({ status: 'success', progress: 100, output: { generate_multiview_image: Object.fromEntries(VIEW_KEYS.map(v => [`${v}_view_url`, `https://cdn.tripo3d.ai/${v}.png`])) } });
    return new Response(viewPng(url));
  } });
  await recovered.recover(j.id); await recovered.waitForIdle();
  assert.equal((await recovered.get(j.id)).state, 'success');
  assert.equal((await recovered.get(j.id)).views.length, 4); assert.equal(calls.length, 5);
});

test('legacy flat output still works and missing directions never become ready', async () => {
  let complete = false;
  const f = await fixture({ fetchImpl: async url => {
    if (url.endsWith('/files')) return ok({file_token:'file'});
    if (url.includes('/generation/')) return ok({task_id:'task'});
    if (url.includes('/tasks/')) return ok({status:'success',output:Object.fromEntries((complete ? VIEW_KEYS : ['front']).map(v=>[`${v}_view_url`,`https://cdn.tripo3d.ai/${v}.png`]))});
    return new Response(viewPng(url));
  } });
  const j = await f.service.create(input()); await f.service.waitForIdle();
  assert.equal((await f.service.get(j.id)).errorCode,'missing_view_urls');
  assert.equal((await f.service.get(j.id)).state,'download_failed');
  complete = true; await f.service.recover(j.id); await f.service.waitForIdle();
  assert.equal((await f.service.get(j.id)).state,'success');
});
test('multiview modelling reuses its native task and rejects a different restoration source', async () => {
  const { service: views } = await fixture(); const v = await views.create(input()); await views.waitForIdle();
  const calls = [], dataDir = await mkdtemp(join(tmpdir(), 'fourview-model-test-'));
  const models = createModelService({ getKey: () => 'synthetic', imageService: images, multiviewService: views, dataDir, pollMs: 1, lookupImpl: async () => [{ address: '8.8.8.8' }], fetchImpl: async (url, options) => { calls.push({ url, options }); if (url.includes('/generation/')) return ok({ task_id: 'model-task' }); if (url.includes('/tasks/')) return ok({ status: 'success', output: { model_url: 'https://cdn.tripo3d.ai/model.glb' } }); return new Response(fixtureGlb()); } });
  const j = await models.create({ ...input(), profile: 'web', multiviewJobId: v.id, orientationReviewJobId:v.id }); await models.waitForIdle();
  assert.ok(calls[0].url.endsWith('/generation/multiview-to-model')); assert.deepEqual(JSON.parse(calls[0].options.body).inputs, [{ task_id: 'view-task' }]);
  assert.equal((await models.get(j.id)).orientationReviewJobId, v.id); assert.equal((await models.get(j.id)).multiviewJobId, v.id); assert.equal((await models.get(j.id)).state, 'success'); assert.ok(!calls.some(c => c.url.endsWith('/files')));
  const reviewed = await models.get(j.id);
  const detail = await models.create({...input(),profile:'detail',multiviewJobId:reviewed.multiviewJobId,orientationReviewJobId:reviewed.orientationReviewJobId}); await models.waitForIdle(); assert.equal((await models.get(detail.id)).state,'success');
  const mismatch = createModelService({ getKey: () => 'synthetic', imageService: { ...images, get: async () => ({ ...source, id: randomUUID() }) }, multiviewService: views, dataDir: await mkdtemp(join(tmpdir(), 'mismatch-')), fetchImpl: () => assert.fail('Must not call provider') });
  await assert.rejects(mismatch.create({ ...input(), profile: 'web', multiviewJobId: v.id, orientationReviewJobId:v.id }), { status: 400 });
});
test('HTTP four-view endpoints enforce same-origin and serve locally saved image bytes', async t => {
  const { service } = await fixture(); const server = createApp({ multiviewService: service }); await new Promise(r => server.listen(0, '127.0.0.1', r)); t.after(() => new Promise(r => server.close(r)));
  const base = `http://127.0.0.1:${server.address().port}`;
  const post = origin => fetch(base + '/api/multiview/jobs', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(input()) });
  assert.equal((await post('https://example.com')).status, 403); const response = await post(base); assert.equal(response.status, 202); const job = await response.json(); await service.waitForIdle();
  const asset = await fetch(base + `/api/multiview/jobs/${job.id}/views/front`); assert.equal(asset.headers.get('content-type'), 'image/png'); assert.deepEqual(Buffer.from(await asset.arrayBuffer()), png);
});


test('review is bound to the generated group before any model provider request', async () => {
  const {service:views}=await fixture(); const v=await views.create(input()); await views.waitForIdle();
  const models=createModelService({getKey:()=> 'synthetic',imageService:images,multiviewService:views,dataDir:await mkdtemp(join(tmpdir(),'review-model-')),fetchImpl:()=>assert.fail('must reject before paid work')});
  for(const orientationReviewJobId of [undefined,randomUUID()]) await assert.rejects(models.create({...input(),profile:'web',multiviewJobId:v.id,orientationReviewJobId}),{status:400});
});

test('identical native images are saved for inspection but cannot enter modelling', async () => {
  const f=await fixture({fetchImpl:async url=>{
    if(url.endsWith('/files'))return ok({file_token:'file'});
    if(url.includes('/generation/'))return ok({task_id:'duplicate-task'});
    if(url.includes('/tasks/'))return ok({status:'success',output:Object.fromEntries(VIEW_KEYS.map(v=>[`${v}_view_url`,`https://cdn.tripo3d.ai/${v}.png`]))});
    return new Response(png);
  }});
  const v=await f.service.create(input());await f.service.waitForIdle();
  const result=await f.service.get(v.id);
  assert.equal(result.state,'needs_review');assert.equal(result.errorCode,'duplicate_views');assert.equal(result.views.length,4);
  const models=createModelService({getKey:()=> 'synthetic',imageService:images,multiviewService:f.service,dataDir:await mkdtemp(join(tmpdir(),'duplicate-model-')),fetchImpl:()=>assert.fail('must not model duplicates')});
  await assert.rejects(models.create({...input(),profile:'web',multiviewJobId:v.id,orientationReviewJobId:v.id}),{status:400});
  const next=await f.service.create({...input(),regenerateOf:v.id});await f.service.waitForIdle();assert.notEqual(next.id,v.id);
});

test('intentional whole-group regeneration preserves original and deduplicates retries',async()=>{
  const f=await fixture(),original=await f.service.create(input());await f.service.waitForIdle();
  const before=await f.service.asset(original.id,'back');
  const req={...input(),viewSet:'horizontal',regenerateOf:original.id},next=await f.service.create(req);await f.service.waitForIdle();
  assert.notEqual(original.id,next.id);assert.equal(next.regenerateOf,original.id);
  assert.equal((await f.service.create(req)).id,next.id);
  assert.equal((await f.service.create({...req,requestId:randomUUID()})).id,next.id);
  assert.equal((await f.service.create(input())).id,next.id);
  assert.deepEqual(await f.service.asset(original.id,'back'),before);
  assert.equal(f.calls.filter(c=>c.url.includes('/generation/')).length,2);
  await assert.rejects(f.service.create({...req,sourceJobId:randomUUID()}),{status:409});
  await assert.rejects(f.service.create({...req,regenerateOf:undefined}),{status:409});
});

test('unconfirmed submission cannot be regenerated as a new paid task',async()=>{
  let count=0;
  const f=await fixture({fetchImpl:async url=>{if(url.endsWith('/files'))return ok({file_token:'file'});count++;throw new Error('timeout');}});
  const v=await f.service.create(input());await f.service.waitForIdle();
  await assert.rejects(f.service.create({...input(),regenerateOf:v.id}),{status:409});assert.equal(count,1);
});
