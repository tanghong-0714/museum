import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createImageService, IMAGE_BASE, IMAGE_MODEL } from './image-service.mjs';
import { saveEnvSetting } from './config.mjs';
import { createApp } from './server.mjs';

const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1cAAAAASUVORK5CYII=', 'base64');
const pngResponse = () => Response.json({ data: [{ b64_json: png.toString('base64') }] }, { headers: { 'X-Task-Id': '123456' } });
async function fixture(fetchImpl, extra = {}) {
  const dataDir = await mkdtemp(join(tmpdir(), 'lk-image-tests-'));
  const service = createImageService({ apiKey: 'synthetic-lk-secret', dataDir, fetchImpl, ...extra });
  await service.ready;
  return { service, dataDir };
}
const input = (extra = {}) => ({ requestId: randomUUID(), mode: 'generate', prompt: 'A plain stone statue', ...extra });
async function reference(service, name = 'reference.png') { return service.upload({ name, dataUrl: `data:image/png;base64,${png.toString('base64')}` }); }

test('只读连接检查不生成图像，也不返回密钥', async () => {
  const calls = [];
  const { service } = await fixture(async (url, options) => { calls.push(url); assert.equal(options.headers.Authorization, 'Bearer synthetic-lk-secret'); return Response.json({ data: [{ id: IMAGE_MODEL }] }); });
  const check = await service.check();
  assert.equal(check.ok, true);
  assert.deepEqual(calls, [`${IMAGE_BASE}/models`]);
  assert.ok(!JSON.stringify(await service.status()).includes('synthetic-lk-secret'));
});

test('文生图契约为单张 PNG；保存结果、历史与方案选择', async () => {
  let calls = 0;
  const { service, dataDir } = await fixture(async (url, options) => {
    calls++; assert.equal(url, `${IMAGE_BASE}/images/generations`);
    const body = JSON.parse(options.body);
    assert.equal(body.model, IMAGE_MODEL); assert.equal(body.n, 1); assert.equal(body.output_format, 'png'); assert.ok(!('mask' in body));
    return pngResponse();
  });
  const payload = input(); const created = await service.create(payload);
  const duplicate = await service.create(payload);
  assert.equal(duplicate.id, created.id);
  await service.waitForIdle();
  const result = await service.get(created.id);
  assert.equal(calls, 1); assert.equal(result.state, 'success'); assert.equal(result.upstreamTaskId, '123456');
  assert.deepEqual((await service.asset(result.result.id)).content, png);
  assert.equal((await service.select(created.id)).selected, true);
  const state = await readFile(join(dataDir, 'state.json'), 'utf8');
  assert.ok(!state.includes('synthetic-lk-secret')); assert.ok(!state.includes('b64_json'));
  const reloaded = createImageService({ dataDir }); await reloaded.ready;
  assert.equal((await reloaded.list())[0].selected, true);
});

test('多参考图编辑发送正确 multipart 字段并保护原图', async () => {
  const { service } = await fixture(async (url, options) => {
    assert.equal(url, `${IMAGE_BASE}/images/edits`);
    assert.ok(options.body instanceof FormData);
    assert.equal(options.body.getAll('image[]').length, 2);
    assert.equal(options.body.get('model'), IMAGE_MODEL);
    assert.match(options.body.get('prompt'), /保留现存面部特征/);
    assert.match(options.body.get('prompt'), /补全右手/);
    assert.equal(options.body.get('n'), '1'); assert.equal(options.body.has('mask'), false);
    assert.equal(options.headers['Content-Type'], undefined);
    return pngResponse();
  });
  const a = await reference(service); const b = await reference(service, 'other.png');
  const request = input({ mode: 'restore', prompt: '补全右手', referenceIds: [a.id, b.id], context: { category: 'sculpture', photoSide: 'front' } });
  const preview = await service.preview(request);
  const created = await service.create({ ...request, previewHash: preview.previewHash });
  await service.waitForIdle(); assert.equal((await service.get(created.id)).state, 'success');
  assert.deepEqual((await service.asset(a.id)).content, png);
});

test('plate preview sends exactly the reviewed prompt, rejects unknown structure and stale preview without charging', async () => {
  let calls = 0, sent;
  const { service } = await fixture(async (_url, options) => { calls++; sent = options.body.get('prompt'); return pngResponse(); });
  const a = await reference(service);
  const request = input({ mode: 'restore', prompt: '补成完整盘子', referenceIds: [a.id], context: { category: 'plate', photoSide: 'back', targetView: 'front', decision: '圆环按底部圈足理解，透明补配只参考外轮廓' }, caseId: randomUUID(), caseName: '青釉盘' });
  const unknown = await service.preview({ ...request, context: {} }); assert.ok(unknown.problems.length >= 2);
  await assert.rejects(service.create({ ...request, context: {} }), { status: 422 });
  const preview = await service.preview(request);
  assert.equal(calls, 0); assert.deepEqual(preview.problems, []);
  assert.match(preview.effectivePrompt, /底部圈足/); assert.match(preview.effectivePrompt, /透明补配/);
  assert.doesNotMatch(preview.effectivePrompt, /保留现存面部|服饰|保持肢体/);
  await assert.rejects(service.create({ ...request, prompt: '改成杯子', previewHash: preview.previewHash }), { status: 422 });
  assert.equal(calls, 0);
  const created = await service.create({ ...request, previewHash: preview.previewHash }); await service.waitForIdle();
  assert.equal(sent, preview.effectivePrompt); assert.equal((await service.get(created.id)).effectivePrompt, sent);
  assert.equal((await service.get(created.id)).caseId, request.caseId); assert.equal(calls, 1);
});

test('reuploaded generated bytes retain provenance and restore prepends original, across restart', async () => {
  const generated = Buffer.concat([png, Buffer.from('synthetic-generated')]);
  const { service, dataDir } = await fixture(async () => Response.json({ data: [{ b64_json: generated.toString('base64') }] }));
  const a = await reference(service), j = await service.create(input({ mode: 'edit', referenceIds: [a.id] })); await service.waitForIdle();
  const produced = (await service.get(j.id)).result;
  const reupload = await service.upload({ name: 'renamed-photo.png', dataUrl: 'data:image/png;base64,' + generated.toString('base64') });
  assert.equal(reupload.kind, 'result'); assert.equal(reupload.derivedFrom, produced.id); assert.deepEqual(reupload.originalReferenceIds, [a.id]);
  const request = input({ mode: 'restore', referenceIds: [reupload.id], context: { category: 'plate', photoSide: 'back' } });
  const preview = await service.preview(request); assert.deepEqual(preview.referenceIds, [a.id, reupload.id]); assert.equal(preview.references[0].kind, 'reference'); assert.match(preview.effectivePrompt, /此前 AI 生成图/);
  const restarted = createImageService({ dataDir }); await restarted.ready;
  assert.equal((await restarted.asset(reupload.id)).kind, 'result');
  assert.deepEqual((await restarted.preview(request)).referenceIds, [a.id, reupload.id]);
});

test('legacy generated reupload is recognized without overwriting images; AI-only cannot become restoration evidence', async () => {
  const { service, dataDir } = await fixture(async () => pngResponse());
  const j = await service.create(input()); await service.waitForIdle();
  const produced = (await service.get(j.id)).result;
  const a = await service.upload({ name: 'copied.png', dataUrl: 'data:image/png;base64,' + png.toString('base64') });
  const state = JSON.parse(await readFile(join(dataDir, 'state.json'), 'utf8'));
  const legacy = state.assets.find(x => x.id === a.id); legacy.kind = 'reference'; delete legacy.derivedFrom; delete legacy.sha256;
  await writeFile(join(dataDir, 'state.json'), JSON.stringify(state));
  const restarted = createImageService({ apiKey: 'synthetic', dataDir }); await restarted.ready;
  assert.equal((await restarted.asset(a.id)).derivedFrom, produced.id);
  assert.deepEqual((await restarted.asset(a.id)).content, png);
  const preview = await restarted.preview(input({ mode: 'restore', referenceIds: [a.id], context: { category: 'plate', photoSide: 'front' } }));
  assert.match(preview.problems.join(' '), /没有可追溯/);
});

test('HTTP preview is free; analysis from another object or unresolved structure cannot be submitted', async t => {
  let calls = 0;
  const { service } = await fixture(async () => { calls++; return pngResponse(); });
  const a = await reference(service), b = await reference(service, 'another.png');
  const caseId = randomUUID(), analysisId = randomUUID();
  const analysisService = { get: async () => ({ id: analysisId, kind: 'analyze', caseId, state: 'success', images: [a] }) };
  const server = createApp({ imageService: service, analysisService }); await new Promise(resolve => server.listen(0, '127.0.0.1', resolve)); t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const post = (body, path = '/api/images/preview') => fetch(origin + path, { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const body = input({ mode: 'restore', referenceIds: [a.id], caseId, analysisId, context: { category: 'plate', photoSide: 'back', decision: '圈足在底部' } });
  assert.equal((await post({ ...body, caseId: randomUUID() })).status, 422);
  assert.equal((await post({ ...body, referenceIds: [b.id] })).status, 422);
  assert.equal((await post({ ...body, context: { category: 'plate', photoSide: 'back' } }, '/api/images/jobs')).status, 422);
  const preview = await (await post(body)).json(); assert.ok(preview.effectivePrompt); assert.equal(calls, 0);
  const created = await post({ ...body, previewHash: preview.previewHash }, '/api/images/jobs'); assert.equal(created.status, 202); await service.waitForIdle(); assert.equal(calls, 1);
});

test('缺少参考图、伪图片、蒙版、多图输出在提交前拒绝', async () => {
  let calls = 0; const { service } = await fixture(async () => { calls++; return pngResponse(); });
  await assert.rejects(service.create(input({ mode: 'edit' })), { status: 400 });
  await assert.rejects(service.create(input({ mask: 'mask.png' })), { status: 400 });
  await assert.rejects(service.create(input({ n: 2 })), { status: 400 });
  await assert.rejects(service.upload({ name: 'fake.png', dataUrl: 'data:image/png;base64,PHNjcmlwdD4=' }), { status: 400 });
  assert.equal(calls, 0);
});

test('POST 超时不会自动重试或误报失败，重启后也不会重新提交', async () => {
  let calls = 0;
  const { service, dataDir } = await fixture(async () => { calls++; throw new DOMException('synthetic-private-secret', 'TimeoutError'); });
  const job = await service.create(input()); await service.waitForIdle();
  const result = await service.get(job.id);
  assert.equal(calls, 1); assert.equal(result.state, 'uncertain'); assert.ok(!JSON.stringify(result).includes('synthetic-private-secret'));
  const reloaded = createImageService({ apiKey: 'synthetic-lk-secret', dataDir, fetchImpl: async () => { calls++; return pngResponse(); } });
  await reloaded.ready; assert.equal((await reloaded.get(job.id)).state, 'uncertain'); assert.equal(calls, 1);
});

test('服务重启把未完成任务标为待确认，同一请求编号不会重新生成', async () => {
  const dataDir = await mkdtemp(join(tmpdir(), 'lk-interruption-tests-'));
  const payload = input(); const id = randomUUID(); let calls = 0;
  await writeFile(join(dataDir, 'state.json'), JSON.stringify({ assets: [], jobs: [{ ...payload, id, state: 'running', referenceIds: [], createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), upstreamTaskId: '24680' }] }));
  const service = createImageService({ dataDir, apiKey: 'synthetic-key', fetchImpl: async () => { calls++; return pngResponse(); } });
  await service.ready;
  assert.equal((await service.get(id)).state, 'uncertain');
  assert.equal((await service.create(payload)).id, id); assert.equal(calls, 0);
});

test('带任务号的失败可以只读找回，下载请求不携带密钥', async () => {
  let postCount = 0;
  const { service } = await fixture(async (url, options) => {
    if (options.method === 'POST') { postCount++; return new Response('{}', { status: 504, headers: { 'X-Task-Id': '98765' } }); }
    if (url.includes('/media/status')) return Response.json({ data: { state: 'success', result_url: 'https://cdn.example.org/result.png' } });
    assert.equal(url, 'https://cdn.example.org/result.png'); assert.equal(options.headers, undefined);
    return new Response(png, { headers: { 'Content-Type': 'image/png' } });
  }, { lookupImpl: async () => [{ address: '8.8.8.8', family: 4 }] });
  const created = await service.create(input()); await service.waitForIdle();
  assert.equal((await service.get(created.id)).state, 'uncertain');
  const recovered = await service.recover(created.id);
  assert.equal(recovered.state, 'success'); assert.equal(postCount, 1);
  assert.ok(!JSON.stringify(recovered).includes('https://cdn.example.org'));
});

test('图片下载拒绝回环地址，未知任务号不会触发新生成', async () => {
  let downloads = 0;
  const { service } = await fixture(async (url, options) => {
    if (options.method === 'POST') return Response.json({ data: [{ url: 'https://localhost/private.png' }] });
    downloads++; throw new Error();
  }, { lookupImpl: async () => [{ address: '127.0.0.1', family: 4 }] });
  const job = await service.create(input()); await service.waitForIdle();
  assert.equal((await service.get(job.id)).state, 'download_failed'); assert.equal(downloads, 0);
  await assert.rejects(service.recover(job.id), { status: 400 }); assert.equal(downloads, 0);
});

test('已有任务执行时拒绝新提交，且没有第二次扣费请求', async () => {
  let finish; let calls = 0;
  const { service } = await fixture(async () => { calls++; return new Promise(resolve => { finish = resolve; }); });
  await service.create(input());
  await assert.rejects(service.create(input()), { status: 409 });
  while (!finish) await new Promise(resolve => setTimeout(resolve, 2));
  finish(pngResponse()); await service.waitForIdle(); assert.equal(calls, 1);
});

test('更新 Tripo 密钥保留 LK 配置及其他项目设置', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'lk-env-tests-')); const file = join(directory, '.env');
  await writeFile(file, '# original\nTRIPO_API_KEY=old\nLK_IMAGE_API_KEY=synthetic-lk-secret\nOTHER_SETTING=keep\n');
  await saveEnvSetting(file, 'TRIPO_API_KEY', 'new-synthetic-tripo-key');
  const content = await readFile(file, 'utf8');
  assert.match(content, /LK_IMAGE_API_KEY=synthetic-lk-secret/); assert.match(content, /OTHER_SETTING=keep/); assert.match(content, /TRIPO_API_KEY=new-synthetic-tripo-key/);
  await saveEnvSetting(file, 'TRIPO_API_KEY', ''); assert.match(await readFile(file, 'utf8'), /LK_IMAGE_API_KEY=synthetic-lk-secret/);
});

test('本地 HTTP 上传、历史与结果读取有效，跨站提交被拒绝', async t => {
  const { service } = await fixture(async () => pngResponse());
  const server = createApp({ imageService: service });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const post = (path, body, requestOrigin = origin) => fetch(origin + path, { method: 'POST', headers: { Origin: requestOrigin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  assert.equal((await fetch(origin + '/images')).status, 200);
  assert.equal((await post('/api/images/jobs', input(), 'https://example.org')).status, 403);
  const upload = await (await post('/api/images/uploads', { name: 'ref.png', dataUrl: `data:image/png;base64,${png.toString('base64')}` })).json();
  assert.equal((await fetch(origin + upload.url)).headers.get('content-type'), 'image/png');
  const created = await (await post('/api/images/jobs', input({ mode: 'edit', referenceIds: [upload.id] }))).json();
  await service.waitForIdle();
  const job = await (await fetch(origin + `/api/images/jobs/${created.id}`)).json();
  assert.equal(job.state, 'success');
  assert.match((await fetch(origin + job.result.url + '?download=1')).headers.get('content-disposition'), /attachment/);
  assert.equal((await (await fetch(origin + '/api/images/jobs')).json()).jobs.length, 1);
});


test('photo objective distinguishes reference cleanup from camera generation and rejects changed identity', async () => {
  const calls=[];
  const {service,dataDir}=await fixture(async (url,options)=>{calls.push({url,options});return pngResponse();});
  const ref=await reference(service);
  const req=input({mode:'edit',objective:'photo',referenceIds:[ref.id],prompt:'改善照片背景'});
  const preview=await service.preview(req);
  assert.match(preview.effectivePrompt,/保持当前拍摄方向/);
  assert.match(preview.effectivePrompt,/禁止修复/);
  const camera=await service.preview({...req,purpose:'view',prompt:'输出左侧90度视图'});
  assert.match(camera.effectivePrompt,/真实改变观察视角/);
  assert.doesNotMatch(camera.effectivePrompt,/仅改善背景/);
  const job=await service.create(req);await service.waitForIdle();
  assert.equal((await service.get(job.id)).objective,'photo');
  await assert.rejects(service.create({...req,objective:'restore'}),{status:409});
  await assert.rejects(service.create({...req,purpose:'view'}),{status:409});
  assert.equal(calls.length,1);
  const reloaded=createImageService({apiKey:'synthetic',dataDir,fetchImpl:()=>assert.fail('no resubmit')});
  assert.equal((await reloaded.get(job.id)).objective,'photo');
});
