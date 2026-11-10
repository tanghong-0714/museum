import { mkdir, readFile, writeFile, rename } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { join } from 'node:path';
import { lookup } from 'node:dns/promises';
import { ImageError, publicAddress, readLimited } from './image-service.mjs';

export const TRIPO_BASE = 'https://openapi.tripo3d.com/v3';
export const TRIPO_MODEL = 'v3.1-20260211';
const ID = /^[a-zA-Z0-9_-]{1,120}$/;
const UUID = /^[0-9a-f]{8}-[0-9a-f-]{27}$/i;
const pending = new Set(['queued', 'uploading', 'submitting', 'running', 'downloading']);
const fail = (status, message) => { throw new ImageError(status, message); };

// Preview accepts self-contained GLB only; never let a model cause external requests.
export function validateGlb(bytes) {
  if (bytes.length < 20 || bytes.toString('ascii', 0, 4) !== 'glTF' || bytes.readUInt32LE(4) !== 2 || bytes.readUInt32LE(8) !== bytes.length || bytes.readUInt32LE(16) !== 0x4e4f534a) throw new Error('Invalid GLB');
  const size = bytes.readUInt32LE(12);
  if (size > bytes.length - 20) throw new Error('Invalid GLB JSON');
  const json = JSON.parse(bytes.toString('utf8', 20, 20 + size));
  for (const item of [...(json.buffers || []), ...(json.images || [])]) {
    if (item.uri && !/^data:(image\/(png|jpeg|webp)|application\/octet-stream);base64,/.test(item.uri)) throw new Error('External GLB resources are not supported');
  }
  return json;
}

export function createModelService({ getKey = () => '', imageService, multiviewService = null, dataDir, fetchImpl = fetch, lookupImpl = lookup, pollMs = 2000, maxPollMs = 30 * 60 * 1000 } = {}) {
  const jobs = new Map(), workers = new Map();
  let creating = false, stopped = false, saveQueue = Promise.resolve();
  const stateFile = join(dataDir, 'state.json');
  const ready = (async () => {
    await mkdir(dataDir, { recursive: true });
    try {
      const state = JSON.parse(await readFile(stateFile, 'utf8'));
      for (const job of state.jobs || []) {
        if (pending.has(job.state)) { job.state = 'uncertain'; job.message = '本地服务曾中断。请继续查询已有任务，不会重新生成。'; }
        jobs.set(job.id, job);
      }
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
  })();
  async function persist() {
    const snapshot = JSON.stringify({ version: 1, jobs: [...jobs.values()] }, null, 2);
    saveQueue = saveQueue.catch(() => {}).then(async () => { const temp = join(dataDir, `${randomUUID()}.tmp`); await writeFile(temp, snapshot); await rename(temp, stateFile); });
    return saveQueue;
  }
  const publicJob = job => ({ id: job.id, deletedAt: job.deletedAt || null, requestId: job.requestId, objective: job.objective || (job.sourceAssetId ? 'photo' : 'restore'), sourceJobId: job.sourceJobId || null, sourceAssetId: job.sourceAssetId || null, multiviewJobId: job.multiviewJobId || null, orientationReviewJobId: job.orientationReviewJobId || null, source: job.source, profile: job.profile, model: TRIPO_MODEL, state: job.state, progress: job.progress, message: job.message, taskId: job.taskId || null, createdAt: job.createdAt, updatedAt: job.updatedAt, credits: job.credits ?? null, annotations: job.annotations || [], modelUrl: job.saved ? `/api/models/jobs/${job.id}/model` : null });
  const getJob = id => { const job=jobs.get(id); if(!job||job.deletedAt)fail(404,'建模任务不存在或已移入回收站。'); return job; };
  function key() { const value = getKey(); if (!value) fail(400, '请先在 Tripo 连接页配置有效密钥。'); return value; }
  async function request(path, options = {}) {
    const response = await fetchImpl(`${TRIPO_BASE}${path}`, { ...options, headers: { Authorization: `Bearer ${key()}`, ...(options.headers || {}) }, redirect: 'error', signal: AbortSignal.timeout(60000) });
    const payload = JSON.parse((await readLimited(response, 2 * 1024 * 1024)).toString('utf8'));
    if (!response.ok || payload?.code !== 0) {
      const error = new Error(`Tripo request failed`);
      error.rejected = response.status < 500 && response.status !== 408;
      error.code = Number.isFinite(payload?.code) ? payload.code : response.status;
      throw error;
    }
    return payload.data;
  }
  async function set(job, state, message) { job.state = state; job.message = message; job.updatedAt = new Date().toISOString(); await persist(); }
  async function download(url) {
    let current = new URL(url);
    for (let count = 0; count < 4; count++) {
      if (current.protocol !== 'https:' || current.username || current.password || (current.port && current.port !== '443')) throw new Error('Unsafe model URL');
      const records = await lookupImpl(current.hostname.replace(/^\[|\]$/g, ''), { all: true });
      if (!records.length || records.some(r => !publicAddress(r.address))) throw new Error('Unsafe model host');
      const response = await fetchImpl(current.href, { redirect: 'manual', signal: AbortSignal.timeout(180000) });
      if ([301, 302, 303, 307, 308].includes(response.status)) { await response.body?.cancel(); current = new URL(response.headers.get('location'), current); continue; }
      if (!response.ok) throw new Error('Download failed');
      const bytes = await readLimited(response, 200 * 1024 * 1024);
      validateGlb(bytes); return bytes;
    }
    throw new Error('Too many redirects');
  }
  async function poll(job) {
    const start = Date.now(); let errors = 0;
    while (!stopped && Date.now() - start < maxPollMs) {
      let result;
      try { result = await request(`/tasks/${encodeURIComponent(job.taskId)}`); errors = 0; }
      catch { if (++errors >= 3) { await set(job, 'uncertain', '连续查询失败。稍后继续查询即可，不要重复生成。'); return; } }
      if (result) {
        job.progress = Math.max(0, Math.min(100, Number(result.progress) || 0));
        if (Number.isFinite(result.credits_consumed)) job.credits = result.credits_consumed;
        if (result.status === 'success') {
          await set(job, 'downloading', '建模完成，正在把 GLB 模型保存到本机。');
          try {
            const bytes = await download(result.output?.model_url);
            const temp = join(dataDir, `${job.id}.glb.tmp`);
            await writeFile(temp, bytes); await rename(temp, join(dataDir, `${job.id}.glb`));
            job.saved = true; job.progress = 100;
            await set(job, 'success', '完整模型已保存，可旋转检查、标记补全示意并导出成品图。');
          } catch { await set(job, 'download_failed', '任务已完成，但模型保存失败或格式不受支持。继续查询可重新取得下载地址，不会重新计费生成。'); }
          return;
        }
        if (['failed', 'cancelled', 'banned', 'expired'].includes(result.status)) { await set(job, 'failed', `Tripo 任务未成功${Number.isFinite(result.error_code) ? `（错误码 ${result.error_code}）` : ''}。请核对平台任务记录。`); return; }
        await set(job, 'running', result.status === 'queued' ? 'Tripo 正在排队。' : 'Tripo 正在重建形体与材质，可离开页面，服务会继续查询。');
      }
      await new Promise(resolve => { setTimeout(resolve, pollMs); });
    }
    await set(job, 'uncertain', '已暂停自动查询。点击继续查询可恢复，不会重新提交生成。');
  }
  function launch(job, operation) {
    const worker = operation().catch(async () => { job.state = 'uncertain'; job.message = '本地任务中断，请先查询平台记录。'; await persist().catch(() => {}); }).finally(() => workers.delete(job.id));
    workers.set(job.id, worker);
  }
  async function run(job) {
    let submitting = false;
    try {
      let input;
      if (job.multiviewJobId) {
        const views = await multiviewService.get(job.multiviewJobId);
        if (views.state !== 'success' || views.views.length !== 4 || (job.sourceAssetId ? views.viewSet !== 'photo' || views.sourceAssetId !== job.sourceAssetId : views.sourceJobId !== job.sourceJobId)) throw new Error('Invalid multiview source');
        if (views.viewSet === 'photo') {
          await set(job, 'uploading', '正在上传原始照片与四个对应方向的参考图。');
          const inputs = [];
          for (const view of ['front', 'left', 'back', 'right']) {
            const asset = view === 'front' && !views.preparedJobId ? await imageService.asset(job.sourceAssetId) : await multiviewService.asset(views.id, view);
            const form = new FormData();
            form.append('file', new Blob([asset.content], { type: asset.mime }), `${view}.png`);
            const uploaded = await request('/files', { method: 'POST', body: form });
            if (typeof uploaded?.file_token !== 'string' || !uploaded.file_token) throw new Error('Missing view token');
            inputs.push({ [view]: uploaded.file_token });
          }
          input = { inputs };
        } else if (views.viewSet === 'vertical') {
          // Tripo has no top/bottom slots. Submit the main reference and actual lateral views.
          await set(job,'uploading','正在上传复原主图与左右视图；俯视和仰视仅用于审阅。');
          const inputs=[];
          for(const view of ['front','left','right']) {
            const asset=view==='front'?await imageService.asset(job.source.id):await multiviewService.asset(views.id,view);
            const form=new FormData();form.append('file',new Blob([asset.content],{type:asset.mime}),`${view}.png`);
            const uploaded=await request('/files',{method:'POST',body:form});
            if(!uploaded.file_token) throw new Error('Missing view token');
            inputs.push({[view]:uploaded.file_token});
          }
          input={inputs};
        } else {
          if(!views.taskId) throw new Error('Missing native task');
          input = { inputs: [{ task_id: views.taskId }] };
        }
      } else {
        await set(job, 'uploading', '正在上传已确认的复原图到国内 Tripo。');
        const asset = await imageService.asset(job.source.id);
        const form = new FormData(); form.append('file', new Blob([asset.content], { type: asset.mime }), 'restoration.png');
        const uploaded = await request('/files', { method: 'POST', body: form });
        if (typeof uploaded?.file_token !== 'string' || !uploaded.file_token) throw new Error('Missing file token');
        input = { input: uploaded.file_token, enable_image_autofix: false };
      }
      await set(job, 'submitting', job.multiviewJobId ? '正在使用四视图提交建模，不会自动重试。' : '正在提交建模任务；此步骤不会自动重试。');
      submitting = true;
      const result = await request(job.multiviewJobId ? '/generation/multiview-to-model' : '/generation/image-to-model', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...input, model: TRIPO_MODEL, texture: true, pbr: true, face_limit: job.profile === 'detail' ? 100000 : 50000, texture_quality: 'standard', geometry_quality: 'standard', texture_alignment: 'original_image', orientation: 'align_image', auto_size: false }) });
      if (!ID.test(result?.task_id || '')) throw new Error('Missing task ID');
      job.taskId = result.task_id;
      await set(job, 'running', '建模任务已建立，正在查询进度。');
      await poll(job);
    } catch (error) {
      await set(job, submitting && !error.rejected ? 'uncertain' : 'failed', submitting && !error.rejected ? '提交响应中断，可能已经计费。请到 Tripo 平台核对并填入任务号找回，勿重复提交。' : `请求未成功${error.code ? `（业务码 ${error.code}）` : ''}。请检查余额、密钥或网络后再操作。`);
    }
  }
  return {
    ready,
    async status() { await ready; return { configured: Boolean(getKey()), model: TRIPO_MODEL, activeJobId: [...workers.keys()][0] || null }; },
    async list({includeDeleted=false}={}) { await ready; return [...jobs.values()].filter(j=>includeDeleted||!j.deletedAt).reverse().map(publicJob); },
    async trash(id,restore=false) {
      await ready; const job=jobs.get(id); if(!job)fail(404,'建模任务不存在。');
      if(job.state!=='success'||!job.saved||workers.has(id))fail(409,'只能删除已完成并保存的模型。');
      const previous=job.deletedAt; job.deletedAt=restore?null:new Date().toISOString();
      try{await persist();}catch(error){job.deletedAt=previous;throw error;}
      return publicJob(job);
    },
    async get(id) { await ready; return publicJob(getJob(id)); },
    async create(input) {
      await ready; key();
      if (!UUID.test(input?.requestId || '')) fail(400, '缺少有效提交编号。');
      if (input.sourceAssetId && input.sourceJobId) fail(400, '照片建模不能混用复原任务来源。');
      const old = [...jobs.values()].find(job => job.requestId === input.requestId);
      if (old) {
        if(old.deletedAt)fail(409,'该作品已在回收站，请先恢复。');
        if ((old.sourceAssetId || null) !== (input.sourceAssetId || null) || (old.sourceJobId || null) !== (input.sourceJobId || null) || (old.multiviewJobId || null) !== (input.multiviewJobId || null) || old.profile !== input.profile) fail(409, '提交编号已用于不同的建模来源。');
        return publicJob(old);
      }
      if (creating || workers.size) fail(409, '已有建模任务在处理，请等待完成。');
      if (!['web', 'detail'].includes(input.profile)) fail(400, '请选择建模精度。');
      creating = true;
      try {
        let source, sourceJob;
        if (input.sourceAssetId) {
          if (!UUID.test(input.sourceAssetId)) fail(400, '原始照片编号无效。');
          const asset = await imageService.asset(input.sourceAssetId);
          if (asset.kind !== 'reference' || asset.derivedFrom) fail(400, '照片建模必须使用上传的原始照片。');
          const { content, ...metadata } = asset;
          source = metadata;
          if (asset.bytes > 20 * 1024 * 1024) fail(400, '照片超过 Tripo 的 20 MB 上限。');
          if (!multiviewService || !UUID.test(input.multiviewJobId || '')) fail(400, '请先完成本张照片的四视图。');
          const views = await multiviewService.get(input.multiviewJobId);
          let expectedFrontId = input.sourceAssetId;
          if (views.preparedJobId) {
            const prepared = await imageService.get(views.preparedJobId);
            if (prepared.state !== 'success' || prepared.objective !== 'photo' || prepared.mode !== 'edit' || (prepared.purpose || 'reference') !== 'reference' || prepared.originalReferences?.length !== 1 || prepared.originalReferences[0].id !== input.sourceAssetId || !prepared.result) fail(400, '优化参考图与原始照片不一致。');
            expectedFrontId = prepared.result.id;
          }
          if (views.state !== 'success' || views.viewSet !== 'photo' || views.sourceAssetId !== input.sourceAssetId || views.views.length !== 4 || !['front','left','back','right'].every(name => views.views.some(v => v.view === name)) || !views.views.some(v => v.view === 'front' && v.provenance === (views.preparedJobId ? 'generated' : 'original') && v.assetId === expectedFrontId)) fail(400, '四视图必须完整并对应当前原始照片。');
        } else {
          sourceJob = await imageService.get(input.sourceJobId);
          if (!sourceJob.selected || sourceJob.state !== 'success' || !sourceJob.result) fail(400, '请先在生图页选定一个成功的复原方案。');
          source = sourceJob.result;
          if (source.bytes > 20 * 1024 * 1024) fail(400, '复原图超过 Tripo 的 20 MB 上限。');
          if (input.multiviewJobId) {
            if (!multiviewService || !UUID.test(input.multiviewJobId)) fail(400, '四视图编号无效。');
            const views = await multiviewService.get(input.multiviewJobId);
            if (views.viewSet === 'vertical') fail(400, '旧版上下视图缺少背面，请先生成前、左、后、右四视图再建模。');
            if (views.state !== 'success' || views.viewSet === 'photo' || views.sourceJobId !== sourceJob.id || views.views.length !== 4 || !['front','left','back','right'].every(key=>views.views.some(v=>v.view===key)) || !views.taskId) fail(400, '四视图必须完整并对应当前复原图。');
            if (views.orientationScheme === 'turntable-v2' && input.orientationReviewJobId !== views.id) fail(400, '请先核对本组的前后方向、左右侧面与姿态一致性。');
          }
        }
        const duplicate = [...jobs.values()].find(job => !job.deletedAt && (job.multiviewJobId || null) === (input.multiviewJobId || null) && (job.sourceJobId || null) === (input.sourceJobId || null) && (job.sourceAssetId || null) === (input.sourceAssetId || null) && job.profile === input.profile && !['failed'].includes(job.state));
        if (duplicate) return publicJob(duplicate);
        const job = { id: randomUUID(), requestId: input.requestId, objective: sourceJob?.objective || (input.sourceAssetId ? 'photo' : 'restore'), sourceJobId: input.sourceJobId || null, sourceAssetId: input.sourceAssetId || null, multiviewJobId: input.multiviewJobId || null, orientationReviewJobId: input.orientationReviewJobId === input.multiviewJobId ? input.orientationReviewJobId : null, source, profile: input.profile, state: 'queued', progress: 0, message: '任务已保存。', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), annotations: [] };
        jobs.set(job.id, job);
        try { await persist(); } catch { jobs.delete(job.id); fail(500, '本地任务保存失败，未发送生成请求。'); }
        launch(job, () => run(job)); return publicJob(job);
      } finally { creating = false; }
    },
    async recover(id, input = {}) {
      await ready; key(); const job = getJob(id);
      if (job.saved || workers.has(id)) return publicJob(job);
      if (workers.size) fail(409, '请等待当前任务查询完成。');
      if (!job.taskId && ID.test(input.taskId || '')) job.taskId = input.taskId;
      if (!job.taskId) fail(400, '请从 Tripo 任务记录复制本次建模任务号，不能填入 API 密钥。');
      await set(job, 'running', '正在继续查询已有任务，不重新生成。');
      launch(job, () => poll(job)); return publicJob(job);
    },
    async annotate(id, input) {
      await ready; const job = getJob(id);
      if (!job.saved) fail(400, '模型尚未保存。');
      const regions = input.regions;
      if (!Array.isArray(regions) || regions.length > 30 || regions.some(r => !Array.isArray(r.position) || r.position.length !== 3 || r.position.some(v => !Number.isFinite(v) || Math.abs(v) > 3) || !Number.isFinite(r.radius) || r.radius < .01 || r.radius > .5)) fail(400, '补全示意标记无效。');
      job.annotations = regions.map(r => ({ position: [...r.position], radius: r.radius })); await persist(); return publicJob(job);
    },
    async asset(id) { await ready; const job = getJob(id); if (!job.saved) fail(404, '本地模型尚未保存。'); return readFile(join(dataDir, `${job.id}.glb`)); },
    async waitForIdle() { await ready; await Promise.all([...workers.values()]); },
    close() { stopped = true; },
  };
}
