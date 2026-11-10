import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { randomUUID } from 'node:crypto';
import { createAnalysisService, normalizeAnalysis } from './analysis-service.mjs';
import { createApp } from './server.mjs';

const source = { id: randomUUID(), name: 'original.png', bytes: 3, mime: 'image/png', url: '/api/images/assets/source', content: Buffer.from('raw') };
const result = { ...source, id: randomUUID(), name: 'result.png', content: Buffer.from('new') };
const imageJob = { id: randomUUID(), state: 'success', references: [source], result };
const images = { get: async id => { assert.equal(id, imageJob.id); return imageJob; }, asset: async id => { if (![source.id, result.id].includes(id)) throw Object.assign(new Error('missing'), { status: 404 }); return id === source.id ? source : result; } };
const valid = () => ({ summary: '形态受视角影响，需要人工检查', observations: ['青釉和浮雕'], constraints: ['保留现存轮廓'], uncertainties: ['底部缺失'], issues: [{ area: '颈部', evidence: '透视不同', suggestion: '先对齐视角再检查' }], landmarks: ['口沿与肩部'], prompt: '保守补全缺失器壁，保留现存轮廓和青釉。' });
const response = () => Response.json({ model: 'deepseek-flash', choices: [{ finish_reason: 'stop', message: { content: JSON.stringify(valid()) } }], usage: { prompt_tokens: 100, completion_tokens: 50, total_tokens: 150 } });
test('automatic restoration plan preserves typed context and labels AI assumptions', () => {
  const suggestedContext = { category: 'plate', photoSide: 'back', targetView: 'front', scope: 'complete', decision: '暂按底面圈足理解圆环，输出连续浅盘正面。' };
  const plan = normalizeAnalysis({ ...valid(), suggestedContext });
  assert.equal(plan.suggestedContext.category, 'plate');
  assert.equal(plan.suggestedContext.photoSide, 'back');
  assert.match(plan.suggestedContext.decision, /^AI 推测方案/);
  assert.throws(() => normalizeAnalysis({ ...valid(), suggestedContext: { ...suggestedContext, category: 'unknown' } }));
  assert.throws(() => normalizeAnalysis({ ...valid(), suggestedContext: { ...suggestedContext, decision: '' } }));
  assert.equal(normalizeAnalysis(valid()).suggestedContext, undefined); // old saved responses remain readable
});
const input = () => ({ requestId: randomUUID(), kind: 'analyze', referenceIds: [source.id], notes: '保留原有纹饰' });
async function fixture(extra = {}) {
  const calls = [], dataDir = await mkdtemp(join(tmpdir(), 'deepseek-analysis-test-'));
  const service = createAnalysisService({ apiKey: 'synthetic-analysis-secret', imageService: images, dataDir, fetchImpl: async (url, options) => { calls.push({ url, options }); return response(); }, ...extra }); await service.ready; return { service, calls, dataDir };
}
test('source vision request includes original images and preview, not any generation call', async () => {
  const { service, calls, dataDir } = await fixture(); const request = input(), job = await service.create(request); await service.waitForIdle();
  const done = await service.get(job.id); assert.equal(done.state, 'success'); assert.equal(done.usage.total_tokens, 150); assert.equal((await service.create(request)).id, job.id); assert.equal(calls.length, 1);
  const body = JSON.parse(calls[0].options.body); assert.equal(body.model, 'deepseek-flash'); assert.equal(body.response_format.type, 'json_object'); assert.equal(body.messages[1].content.filter(c => c.type === 'image_url').length, 1);
  assert.equal(body.messages[1].content.at(-1).image_url.url, 'data:image/png;base64,cmF3');
  const saved = await readFile(join(dataDir, 'state.json'), 'utf8'); assert.ok(!saved.includes('synthetic-analysis-secret')); assert.ok(!saved.includes('data:image')); assert.ok(!saved.includes('reasoning_content'));
});

test('structural uncertainty survives as a review question; explicit questions and object context are sent', async () => {
  assert.deepEqual(normalizeAnalysis({ ...valid(), uncertainties: ['圆环是圈足还是口沿无法确认'] }).structuralQuestions, ['圆环是圈足还是口沿无法确认']);
  const { service, calls } = await fixture({ fetchImpl: async (url, options) => {
    const body = JSON.parse(options.body); assert.match(body.messages[0].content, /不确定性放在独立字段/); assert.match(body.messages[0].content, /约120至220字/); assert.match(body.messages[1].content[0].text, /盘、碟/); assert.match(body.messages[1].content[0].text, /背面或底面/);
    return Response.json({ choices: [{ finish_reason: 'stop', message: { content: JSON.stringify({ ...valid(), structuralQuestions: ['请确认是否为盘底圈足'] }) } }] });
  } });
  const j = await service.create({ ...input(), caseId: randomUUID(), context: { category: 'plate', photoSide: 'back' } }); await service.waitForIdle();
  assert.deepEqual((await service.get(j.id)).result.structuralQuestions, ['请确认是否为盘底圈足']);
});
test('comparison binds original images and candidate to the saved image job', async () => {
  const { service, calls } = await fixture(); const job = await service.create({ requestId: randomUUID(), kind: 'review', imageJobId: imageJob.id }); await service.waitForIdle(); const done = await service.get(job.id); assert.equal(done.sourceJobId, imageJob.id); assert.deepEqual(done.images.map(x => x.id), [source.id, result.id]);
  const blocks = JSON.parse(calls[0].options.body).messages[1].content; assert.match(blocks.at(-2).text, /待评审/); assert.equal(blocks.at(-1).image_url.url, 'data:image/png;base64,bmV3');
});
test('generated references are explicitly labelled as AI; missing evidence type remains uncertain', async () => {
  const { service, calls } = await fixture({ imageService: { ...images, asset: async () => ({ ...source, kind: 'result' }) } }); const job = await service.create(input()); await service.waitForIdle();
  const blocks = JSON.parse(calls[0].options.body).messages[1].content; assert.match(blocks.at(-2).text, /此前AI生成.*不是实物照片/);
  assert.equal((await service.get(job.id)).result.issues[0].basis, 'uncertain');
});
test('invalid input, missing original, and oversized input fail before provider request', async () => {
  const { service, calls } = await fixture(); await assert.rejects(service.create({ ...input(), referenceIds: [] }), { status: 400 }); await assert.rejects(service.create({ ...input(), referenceIds: [source.id, source.id] }), { status: 400 });
  const noReference = await fixture({ imageService: { ...images, get: async () => ({ ...imageJob, references: [] }) } }); await assert.rejects(noReference.service.create({ requestId: randomUUID(), kind: 'review', imageJobId: imageJob.id }), { status: 400 });
  const oversized = await fixture({ imageService: { ...images, asset: async () => ({ ...source, bytes: 33 * 1024 * 1024 }) } }); await assert.rejects(oversized.service.create(input()), { status: 413 }); assert.equal(calls.length + noReference.calls.length + oversized.calls.length, 0);
});
test('concurrent creates submit once; uncertain POST is not retried', async () => {
  let count = 0; const { service } = await fixture({ fetchImpl: async () => { count++; throw new Error('timeout with synthetic-analysis-secret'); } });
  const req = input(); const results = await Promise.allSettled([service.create(req), service.create(input())]); assert.equal(results.filter(x => x.status === 'fulfilled').length, 1); await service.waitForIdle();
  const first = results.find(x => x.status === 'fulfilled').value; assert.equal((await service.get(first.id)).state, 'uncertain'); assert.equal((await service.create(req)).id, first.id); assert.equal(count, 1); assert.ok(!JSON.stringify(await service.list()).includes('synthetic-analysis-secret'));
});
test('invalid JSON and truncated output never become applicable prompts', async () => {
  for (const choice of [{ finish_reason: 'length', message: { content: JSON.stringify(valid()) } }, { finish_reason: 'stop', message: { content: '{}' } }]) { const { service } = await fixture({ fetchImpl: async () => Response.json({ choices: [choice] }) }); const job = await service.create(input()); await service.waitForIdle(); const final = await service.get(job.id); assert.equal(final.state, 'failed'); assert.equal(final.result, null); }
  assert.throws(() => normalizeAnalysis({ ...valid(), observations: 'not a list' }));
});
test('rejected authentication/balance hides upstream details, check is read-only', async () => {
  const { service } = await fixture({ fetchImpl: async () => Response.json({ error: 'private upstream details' }, { status: 402 }) }); const job = await service.create(input()); await service.waitForIdle(); assert.match((await service.get(job.id)).message, /余额不足/); assert.ok(!JSON.stringify(await service.list()).includes('private upstream'));
  const check = await fixture({ fetchImpl: async url => { assert.equal(url, 'https://api.deepseek.com/models'); return Response.json({ data: [{ id: 'deepseek-flash' }] }); } }); assert.equal((await check.service.check()).ok, true); assert.equal((await check.service.list()).length, 0);
});
test('restart preserves analysis, maps interrupted job to uncertain and does not resubmit', async () => {
  const { service, dataDir } = await fixture(); const req = input(), job = await service.create(req); await service.waitForIdle();
  const next = createAnalysisService({ apiKey: 'synthetic', dataDir, imageService: images }); await next.ready; assert.equal((await next.create(req)).id, job.id); assert.equal((await next.get(job.id)).result.prompt, valid().prompt);
  const state = JSON.parse(await readFile(join(dataDir, 'state.json'))); state.jobs[0].state = 'running'; await writeFile(join(dataDir, 'state.json'), JSON.stringify(state)); const interrupted = createAnalysisService({ dataDir }); await interrupted.ready; assert.equal((await interrupted.list())[0].state, 'uncertain');
});
test('HTTP analysis endpoints enforce same-origin JSON and expose no key', async t => {
  const { service } = await fixture(); const server = createApp({ analysisService: service }); await new Promise(resolve => server.listen(0, '127.0.0.1', resolve)); t.after(() => new Promise(resolve => server.close(resolve))); const origin = `http://127.0.0.1:${server.address().port}`;
  const post = from => fetch(origin + '/api/analysis/jobs', { method: 'POST', headers: { Origin: from, 'Content-Type': 'application/json' }, body: JSON.stringify(input()) }); assert.equal((await post('https://example.com')).status, 403); assert.equal((await post(origin)).status, 202); await service.waitForIdle(); const body = await (await fetch(origin + '/api/analysis/jobs')).text(); assert.ok(!body.includes('synthetic-analysis-secret')); assert.ok(body.includes('保守补全'));
});


test('photo analysis preserves damage and separates objective request identity', async () => {
  const { service, calls } = await fixture();
  const request = { ...input(), objective: 'photo' };
  const job = await service.create(request); await service.waitForIdle();
  const done = await service.get(job.id);
  assert.equal(done.objective, 'photo');
  assert.equal(done.result.suggestedContext, undefined);
  const system = JSON.parse(calls[0].options.body).messages[0].content;
  assert.match(system, /形状.*材质.*方向/);
  assert.match(system, /不修复、不复原、不补全/);
  assert.match(system, /去除复杂背景/);
  await assert.rejects(service.create({ ...request, objective: 'restore' }), { status: 409 });
  assert.equal(calls.length, 1);
});
