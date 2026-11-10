import { mkdir, readFile, writeFile, rename, unlink, copyFile } from 'node:fs/promises';
import { randomUUID, createHash } from 'node:crypto';
import { join } from 'node:path';
import { lookup } from 'node:dns/promises';
import { ImageError, imageType, publicAddress, readLimited } from './image-service.mjs';
import { TRIPO_BASE } from './model-service.mjs';

export const VIEW_KEYS = ['front', 'left', 'back', 'right'];
export const DIRECTION_KEYS = ['top','bottom','left','right'];
export const DIRECTION_LABELS = {top:'俯视',bottom:'仰视',left:'左侧',right:'右侧'};
export function directionPrompt(view, objective = 'restore') {
  const cameras = {top:'相机在器物正上方，沿竖直方向向下看，真正的俯视图。清楚展示口沿、顶部和由上向下的结构；不要仍然展示正面侧立轮廓。',bottom:'相机在器物正下方，沿竖直方向向上看，真正的仰视图。清楚展示底足、底面与下方结构；不要把俯视图翻转当作仰视图。',left:'以参考图的主视方向为正面，相机绕器物向左移动90度，拍摄器物左侧的严格侧视图。',right:'以参考图的主视方向为正面，相机绕器物向右移动90度，拍摄器物右侧的严格侧视图。'};
  if (!cameras[view]) throw new Error('Unknown camera view');
  const lateral=view==='left'?'相机必须来到原照片画面左侧，水平观察器物。原图左边的突出部件应指向相机，右边部件应转到器身后方并被遮挡；原图左右展开的轮廓现在变为前后重叠。':view==='right'?'相机必须来到原照片画面右侧，水平观察器物。原图右边的部件应靠近相机，左边突出部件应转到器身后方并被遮挡；原图左右展开的轮廓现在变为前后重叠。':'';
  return `任务：对同一件${objective === 'photo' ? '净化图中的文物（保留现存缺损，不补全器物）' : '已复原文物'}进行真实空间换视角，输出一张${DIRECTION_LABELS[view]}图。${cameras[view]} ${lateral} 保持器物静止，只改变相机位置。锁定参考中的器形、部件数量、比例、材质、釉色与主要纹饰，保持把手、流口、面部、肢体等非对称部件的空间位置。不能直接复制原图，不能用裁切、平面旋转或镜像伪造另一视角。不可见结构按现存器形保守推测，不额外添加装饰、铭文或部件。单件完整居中入镜，正交产品视图，统一纯浅灰背景、柔和中性光照。仅输出该方向的单张照片，不要拼图、文字、箭头、水印。`;
}
const UUID = /^[0-9a-f]{8}-[0-9a-f-]{27}$/i;
const TASK = /^[a-zA-Z0-9_-]{1,120}$/;
const live = new Set(['queued', 'uploading', 'submitting', 'running', 'downloading']);
const fail = (status, message) => { throw new ImageError(status, message); };
export function createMultiviewService({ getKey = () => '', imageService, dataDir, fetchImpl = fetch, lookupImpl = lookup, pollMs = 2500, maxPollMs = 20 * 60 * 1000 } = {}) {
  const jobs = new Map(), workers = new Map();
  let creating = false, stopped = false, queue = Promise.resolve();
  const path = join(dataDir, 'state.json');
  const ready = (async () => {
    await mkdir(dataDir, { recursive: true });
    try { const state = JSON.parse(await readFile(path, 'utf8')); for (const j of state.jobs || []) { if (live.has(j.state)) { j.state = 'uncertain'; j.message = '四视图任务曾中断，请继续查询，不会重新生成。'; } jobs.set(j.id, j); } }
    catch (e) { if (e.code !== 'ENOENT') throw e; }
  })();
  async function persist() { const data = JSON.stringify({ jobs: [...jobs.values()] }, null, 2); queue = queue.catch(() => {}).then(async () => { const tmp = join(dataDir, `${randomUUID()}.tmp`); await writeFile(tmp, data); await rename(tmp, path); }); return queue; }
  const present = j => ({ ...j, views: (j.views || []).map(({ file, ...v }) => ({ ...v, url: `/api/multiview/jobs/${j.id}/views/${v.view}` })) });
  const get = id => jobs.get(id) || fail(404, '四视图缓存不存在或已过期。');
  const key = () => getKey() || fail(400, '请先配置 Tripo 密钥。');
  async function set(j, state, message) { Object.assign(j, { state, message, updatedAt: new Date().toISOString() }); await persist(); }
  async function request(endpoint, options = {}) {
    const r = await fetchImpl(TRIPO_BASE + endpoint, { ...options, headers: { Authorization: `Bearer ${key()}`, ...options.headers }, redirect: 'error', signal: AbortSignal.timeout(60000) });
    const p = JSON.parse((await readLimited(r, 2 * 1024 * 1024)).toString('utf8'));
    if (!r.ok || p.code !== 0) { const e = new Error('Tripo request failed'); e.rejected = r.status < 500 && r.status !== 408; e.code = Number.isFinite(p.code) ? p.code : r.status; throw e; }
    return p.data;
  }
  async function download(url) {
    let u = new URL(url);
    for (let n = 0; n < 4; n++) {
      if (u.protocol !== 'https:' || u.username || u.password || (u.port && u.port !== '443')) throw new Error('Unsafe image URL');
      const addresses = await lookupImpl(u.hostname.replace(/^\[|\]$/g, ''), { all: true });
      if (!addresses.length || addresses.some(a => !publicAddress(a.address))) throw new Error('Unsafe image address');
      const r = await fetchImpl(u.href, { redirect: 'manual', signal: AbortSignal.timeout(120000) });
      if ([301,302,303,307,308].includes(r.status)) { await r.body?.cancel(); u = new URL(r.headers.get('location'), u); continue; }
      if (!r.ok) throw new Error('Image download failed');
      const bytes = await readLimited(r, 20 * 1024 * 1024), type = imageType(bytes);
      if (!type) throw new Error('Invalid view image');
      return { bytes, ...type };
    }
    throw new Error('Too many redirects');
  }
  async function poll(j) {
    const started = Date.now(); let errors = 0;
    while (!stopped && Date.now() - started < maxPollMs) {
      let result;
      try { result = await request(`/tasks/${encodeURIComponent(j.taskId)}`); errors = 0; }
      catch { if (++errors >= 3) return set(j, 'uncertain', '四视图查询暂时失败，可继续查询；不会重新生成。'); }
      if (result) {
        j.progress = Math.max(0, Math.min(100, Number(result.progress) || 0));
        if (Number.isFinite(result.credits_consumed)) j.credits = result.credits_consumed;
        if (result.status === 'success') {
          await set(j, 'downloading', '正在保存正、左、背、右四张视图。');
          try {
            // Domestic task queries wrap the views; older responses exposed them directly.
            const output = result.output?.generate_multiview_image || result.output;
            if (!VIEW_KEYS.every(view => typeof output?.[`${view}_view_url`] === 'string')) {
              j.errorCode = 'missing_view_urls';
              return set(j, 'download_failed', 'Tripo 已完成，但返回的四视图地址不完整。可继续查询原任务，不重新生成。');
            }
            const views = [];
            for (const view of VIEW_KEYS) {
              const image = await download(output[`${view}_view_url`]);
              const file = `${j.id}-${view}.${image.extension}`;
              await writeFile(join(dataDir, file + '.tmp'), image.bytes); await rename(join(dataDir, file + '.tmp'), join(dataDir, file));
              views.push({ view, file, mime: image.mime, bytes: image.bytes.length, sha256: createHash('sha256').update(image.bytes).digest('hex') });
              j.views = [...views];
              await set(j, 'downloading', `正在保存四视图 · ${views.length} / 4 张已就绪。`);
            }
            j.views = views; j.progress = 100; delete j.errorCode;
            if (new Set(views.map(v => v.sha256)).size !== 4) {
              j.errorCode = 'duplicate_views';
              return set(j, 'needs_review', '检测到完全相同的视图，暂不能建模。请整组重新生成，或更换清晰的正面参考。');
            }
            return set(j, 'success', '前、左、后、右已保存。请核对背面、侧面与姿态，再使用这一组视图建模。');
          } catch { j.errorCode = 'view_download_failed'; return set(j, 'download_failed', '四视图已生成，但图片下载或保存未完成。点击“找回已生成的四视图”，不会重新收费生成。'); }
        }
        if (['failed','cancelled','banned','expired'].includes(result.status)) return set(j, 'failed', 'Tripo 四视图任务未成功，请检查账户或稍后重试。');
        await set(j, 'running', 'Tripo 正在生成四视图，请稍候。');
      }
      await new Promise(r => setTimeout(r, pollMs));
    }
    await set(j, 'uncertain', '已暂停自动查询，可继续查询原任务。');
  }
  function launch(j, work) { const p = work().catch(async () => { await set(j, 'uncertain', '四视图处理中断，请先查询原任务。').catch(() => {}); }).finally(() => workers.delete(j.id)); workers.set(j.id, p); }
  async function directionImage(j, d, input, recover) {
    const options = {concurrencyGroup:j.id};
    let child = (await imageService.list()).find(item => item.requestId === d.requestId);
    if (child && recover && ['uncertain','download_failed'].includes(child.state) && child.upstreamTaskId) {
      try { child = await imageService.recover(child.id, options); } catch { /* Query only; never repeat POST. */ }
    }
    if (!child) {
      if (d.submitted) { d.state='uncertain'; return null; }
      // Save the request identity and submission boundary before provider work.
      d.submitted=true; await persist();
      try { child = await imageService.create(input, options); }
      catch(error) {
        if (error instanceof ImageError && [400,409,422].includes(error.status)) { d.submitted=false; d.state='unsubmitted'; }
        else d.state='uncertain';
        await persist(); return null;
      }
    }
    d.jobId=child.id; await persist();
    await imageService.waitForIdle(child.id); child=await imageService.get(child.id);
    d.state=child.state; d.taskId=child.upstreamTaskId; await persist();
    return child.state === 'success' && child.result ? child : null;
  }
  async function parallelDirections(j, process, message) {
    const pending=j.directions.filter(d=>!j.views.some(v=>v.view===d.view));
    await set(j,'running',`正在并行处理 ${pending.length} 个视角 · ${j.views.length} / 4 张已保存。`);
    // Network calls overlap. Serialize only file commits and duplicate checks,
    // so simultaneous equal results cannot both be accepted.
    let commits=Promise.resolve();
    const commit=work=>{ const result=commits.then(work); commits=result.catch(()=>{}); return result; };
    await Promise.allSettled(pending.map(async d=>{
      if(stopped){d.state='uncertain';return;}
      try { await process(d,commit); }
      catch { if(d.state!=='duplicate') d.state='uncertain'; await persist(); }
    }));
    if(j.views.length===4) return set(j,'success',message);
    const unfinished=j.directions.filter(d=>!j.views.some(v=>v.view===d.view));
    const state=unfinished.some(d=>d.state==='duplicate') ? 'needs_review'
      : unfinished.some(d=>d.state==='download_failed') ? 'download_failed' : 'uncertain';
    return set(j,state,`已保存 ${j.views.length} / 4 张。其余视角尚未就绪；查询原请求可恢复，已完成视角不会重复生成。`);
  }
  async function runDirections(j, recover = false) {
    const source=await imageService.asset(j.source.id), sourceHash=createHash('sha256').update(source.content).digest('hex');
    await parallelDirections(j, async(direction,commit)=>{
      const child=await directionImage(j,direction,{requestId:direction.requestId,mode:'edit',...(j.objective === 'photo' ? {objective:'photo',purpose:'view'} : {}),referenceIds:[j.source.id],prompt:directionPrompt(direction.view,j.objective),size:'1024x1024',quality:'high',workspace:j.workspace},recover);
      if(!child)return;
      const asset=await imageService.asset(child.result.id), sha256=createHash('sha256').update(asset.content).digest('hex');
      await commit(async()=>{
        if(j.views.some(v=>v.sha256===sha256)||sha256===sourceHash){direction.state='duplicate';await persist();return;}
        const type=imageType(asset.content);if(!type){direction.state='download_failed';await persist();return;}
        const file=`${j.id}-${direction.view}.${type.extension}`;
        await writeFile(join(dataDir,file+'.tmp'),asset.content);await rename(join(dataDir,file+'.tmp'),join(dataDir,file));
        j.views.push({view:direction.view,file,mime:asset.mime,bytes:asset.content.length,sha256});
        j.views.sort((a,b)=>DIRECTION_KEYS.indexOf(a.view)-DIRECTION_KEYS.indexOf(b.view));j.progress=j.views.length*25;
        await set(j,'running',`并行生成中 · ${j.views.length} / 4 张已保存，其余视角仍在处理。`);
      });
    },'俯视、仰视、左侧、右侧已保存，请核对视角与器形一致性。建模使用主图＋左右图，上下图用于审阅。');
  }
  const photoSides = ['left', 'back', 'right'];
  const photoLabels = {front:'正面',left:'左侧',back:'背面',right:'右侧'};
  function photoRequest(operation, input, priorId = null) {
    return JSON.stringify({operation,priorId,sourceAssetId:input.sourceAssetId || null,preparedJobId:input.preparedJobId || null,sourceJobId:input.sourceJobId || null,referenceViews:photoSides.map(view=>input.referenceViews?.[view] || null),notes:input.notes || '',views:Array.isArray(input.views)?[...input.views].sort():null,view:input.view || null,assetId:input.assetId || null});
  }
  function repeatedPhoto(existing, signature) {
    if (existing.photoRequest !== signature) fail(409,'该提交编号已用于不同的来源、视角或操作，请刷新后重新提交。');
    return present(existing);
  }
  async function original(id) {
    if (!UUID.test(id || '')) fail(400, '请提供已上传的原始照片。');
    const asset = await imageService.asset(id);
    if (asset.kind !== 'reference') fail(400, '照片视图必须使用上传的原始照片。');
    if (!imageType(asset.content) || asset.content.length > 20 * 1024 * 1024) fail(400, '原始照片格式或大小不受支持。');
    return asset;
  }
  async function preparedFront(sourceAssetId, preparedJobId) {
    if (!preparedJobId) return original(sourceAssetId);
    if (!UUID.test(preparedJobId)) fail(400, '优化参考任务编号无效。');
    const job = await imageService.get(preparedJobId);
    const roots = job.originalReferences || [];
    if (job.state !== 'success' || job.objective !== 'photo' || job.mode !== 'edit' || (job.purpose || 'reference') !== 'reference' || !job.result || roots.length !== 1 || roots[0].id !== sourceAssetId) fail(400, '优化参考图必须来自当前原始照片的成功照片任务。');
    return imageService.asset(job.result.id);
  }
  async function savePhoto(j, view, asset, provenance) {
    const type = imageType(asset.content);
    if (!type) fail(400, '视图图片格式无效。');
    const file = `${j.id}-${view}.${type.extension}`;
    await writeFile(join(dataDir, file + '.tmp'), asset.content);
    await rename(join(dataDir, file + '.tmp'), join(dataDir, file));
    j.views = j.views.filter(v => v.view !== view);
    j.views.push({view, file, mime:type.mime, bytes:asset.content.length, assetId:asset.id, provenance, sha256:createHash('sha256').update(asset.content).digest('hex')});
    j.views.sort((a,b) => VIEW_KEYS.indexOf(a.view) - VIEW_KEYS.indexOf(b.view));
    j.progress = j.views.length * 25;
    await persist();
  }
  async function runPhoto(j, recover = false) {
    // A restart may occur between copying supplied photos. Restore these locally before generating.
    if (!j.views.some(v => v.view === 'front')) await savePhoto(j,'front',await preparedFront(j.sourceAssetId,j.preparedJobId),j.preparedJobId ? 'generated' : 'original');
    for (const [view,id] of Object.entries(j.referenceViews)) if (!j.views.some(v => v.view === view)) await savePhoto(j,view,await original(id),'original');
    const front=j.views.find(v=>v.view==='front');
    const references=[['front',front.assetId],...(front.assetId!==j.sourceAssetId?[['front',j.sourceAssetId]]:[]),...photoSides.filter(view=>j.referenceViews[view]).map(view=>[view,j.referenceViews[view]])];
    const referenceLabels=references.map(([view,id],index)=>`第${index+1}张参考为${id===front.assetId&&j.preparedJobId?'AI优化的正面参考（非原始实拍）':photoLabels[view]+'实拍'}`).join('，');
    await parallelDirections(j,async(d,commit)=>{
      const camera={left:'左侧90度',back:'背面180度',right:'右侧90度'}[d.view];
      const child=await directionImage(j,d,{requestId:d.requestId,mode:'edit',objective:'photo',purpose:'view',referenceIds:references.map(([,id])=>id),prompt:`根据参考照片，对同一件器物进行空间换视角，输出${camera}单张视图。${referenceLabels}。严格保留器物当前的破损、缺口、裂纹、残缺状态、器形、比例、材质和纹饰。不得修复、复原、补全缺损或美化器物。不可见部分仅保守推测，不能镜像、旋转或裁切原图伪造视角。单件居中、浅灰背景，不要文字或拼图。${j.notes?'用户补充：'+j.notes:''}`,size:'1024x1024',quality:'high',workspace:j.workspace},recover);
      if(!child)return;
      const asset=await imageService.asset(child.result.id), hash=createHash('sha256').update(asset.content).digest('hex');
      await commit(async()=>{
        if(j.views.some(v=>v.sha256===hash)){d.state='duplicate';await persist();return;}
        await savePhoto(j,d.view,asset,'generated');
        await set(j,'running',`并行生成中 · ${j.views.length} / 4 张已保存，其余视角仍在处理。`);
      });
    },'照片视图已保存，请核对实拍与推测视角后再决定是否建模。');
  }
  async function derivePhoto(old, input, chosen, replacement) {
    if (live.has(old.state)) fail(409, '请等待原视图任务完成。');
    if ((!replacement || old.directions.some(d=>!chosen.includes(d.view) && !old.views.some(v=>v.view===d.view))) && !(await imageService.status()).configured) fail(400,'请先配置图像服务以生成视角。');
    const j = {...structuredClone(old), id:randomUUID(), requestId:input.requestId, priorId:old.id, state:'queued', views:[], progress:0, createdAt:new Date().toISOString(), updatedAt:new Date().toISOString(), recovering:false};
    delete j.resumedAt;
    j.message = replacement ? '替换照片已记录，正在保存并核对其余视角。' : '重做指定视角已记录，正在准备生成。';
    j.photoRequest = photoRequest(replacement ? 'replace' : 'refine',input,old.id);
    j.directions = photoSides.flatMap(view => {
      if (chosen.includes(view)) return replacement ? [] : [{view,requestId:randomUUID()}];
      const previous = old.directions.find(d=>d.view===view);
      return previous ? [structuredClone(previous)] : [];
    });
    for (const v of old.views) if (!chosen.includes(v.view)) {
      const file = v.file.replace(old.id,j.id); await copyFile(join(dataDir,v.file),join(dataDir,file)); j.views.push({...v,file});
    }
    if (replacement) { j.referenceViews[replacement.view] = replacement.asset.id; }
    else for (const view of chosen) delete j.referenceViews[view];
    jobs.set(j.id,j);
    try {
      if (replacement) await savePhoto(j,replacement.view,replacement.asset,'original');
      j.progress=j.views.length*25; await persist();
    } catch (e) { jobs.delete(j.id); throw e; }
    launch(j,()=>runPhoto(j)); return present(j);
  }
  async function run(j) {
    let submitted = false;
    try {
      await set(j, 'uploading', '正在把复原图上传到 Tripo 生成四视图。');
      const asset = await imageService.asset(j.source.id), form = new FormData();
      form.append('file', new Blob([asset.content], { type: asset.mime }), 'restoration.png');
      const uploaded = await request('/files', { method: 'POST', body: form });
      if (!uploaded.file_token) throw new Error('Missing token');
      await set(j, 'submitting', '正在提交四视图任务。'); submitted = true;
      const result = await request('/generation/image-to-multiview', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ input: uploaded.file_token }) });
      if (!TASK.test(result?.task_id || '')) throw new Error('Missing task ID');
      j.taskId = result.task_id; await set(j, 'running', '四视图任务已建立。'); await poll(j);
    } catch (e) { await set(j, submitted && !e.rejected ? 'uncertain' : 'failed', submitted && !e.rejected ? '提交响应中断，可能已计费，请核对原任务，不要重复生成。' : `四视图请求未成功${e.code ? `（${e.code}）` : ''}，请检查 Tripo 余额或配置。`); }
  }
  return {
    ready,
    async status() { await ready; return { configured: Boolean(getKey()), directionalConfigured: imageService.status ? (await imageService.status()).configured : false, activeJobId: [...workers.keys()][0] || null }; },
    async list() { await ready; return [...jobs.values()].reverse().map(present); },
    async get(id) { await ready; return present(get(id)); },
    async create(input) {
      await ready;
      if (input?.viewSet === 'photo') {
        if (!UUID.test(input.requestId || '')) fail(400,'缺少有效提交编号。');
        const signature = photoRequest('create',input);
        const existing = [...jobs.values()].find(j => j.requestId === input.requestId); if (existing) return repeatedPhoto(existing,signature);
        if (input.sourceJobId != null) fail(400,'照片视图请使用 sourceAssetId，不接受复原任务。');
        if (creating || workers.size) fail(409,'已有视图任务正在处理。');
        if (input.notes != null && (typeof input.notes !== 'string' || input.notes.length > 4000)) fail(400,'补充说明过长或格式无效。');
        const refs = input.referenceViews || {};
        if (typeof refs !== 'object' || Array.isArray(refs) || Object.keys(refs).some(v => !photoSides.includes(v))) fail(400,'补充照片方向无效。');
        creating = true;
        try {
          const source = await original(input.sourceAssetId), supplied = [];
          const front = await preparedFront(source.id,input.preparedJobId);
          for (const [view,id] of Object.entries(refs)) supplied.push({view,asset:await original(id)});
          const missing = photoSides.filter(view => !refs[view]);
          if (missing.length && !(await imageService.status()).configured) fail(400,'请先配置图像服务以补齐缺失视角。');
          const {content, ...metadata} = source;
          const j={id:randomUUID(),requestId:input.requestId,photoRequest:signature,sourceAssetId:source.id,preparedJobId:input.preparedJobId || null,source:metadata,referenceViews:{...refs},notes:input.notes || '',viewSet:'photo',workspace:'quick',directions:missing.map(view=>({view,requestId:randomUUID()})),views:[],state:'queued',progress:0,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
          jobs.set(j.id,j);
          try { await savePhoto(j,'front',front,input.preparedJobId ? 'generated' : 'original'); for (const item of supplied) await savePhoto(j,item.view,item.asset,'original'); await persist(); }
          catch(e) {jobs.delete(j.id);throw e;}
          launch(j,()=>runPhoto(j)); return present(j);
        } finally {creating=false;}
      }
      const directional=input?.viewSet==='vertical';
      if (!directional) key(); else if (!(await imageService.status()).configured) fail(400,'请先配置图像服务以生成上下左右四视图。');
      if (!UUID.test(input?.requestId || '')) fail(400, '缺少有效提交编号。');
      const old = [...jobs.values()].find(j => j.requestId === input.requestId); if (old) {
        if (old.viewSet === 'photo' || old.sourceJobId !== input.sourceJobId || (old.viewSet || 'horizontal') !== (directional ? 'vertical' : 'horizontal') || (old.regenerateOf || null) !== (input.regenerateOf || null)) fail(409,'该提交编号已用于不同的来源或视图操作。');
        return present(old);
      }
      if (creating || workers.size) fail(409, '已有四视图正在处理，请等待。');
      creating = true;
      try {
        const source = await imageService.get(input.sourceJobId);
        if (source.state !== 'success' || !source.result) fail(400, '请先生成满意的复原图。');
        if (source.result.bytes > 20 * 1024 * 1024) fail(400, '复原图超过 20 MB。');
        const sameSource = [...jobs.values()].filter(j => j.sourceJobId === source.id && (j.viewSet || 'horizontal') === (directional ? 'vertical' : 'horizontal'));
        if (input.regenerateOf) {
          const prior = get(input.regenerateOf);
          if (directional || prior.sourceJobId !== source.id || (prior.viewSet || 'horizontal') !== 'horizontal') fail(400,'整组重做必须对应当前主图的前左后右视图。');
          if (!['success','failed'].includes(prior.state) && !(prior.state === 'needs_review' && prior.errorCode === 'duplicate_views')) fail(409,'原任务尚未确认完成，请先查询原任务，避免重复计费。');
          const child = sameSource.find(j => j.regenerateOf === prior.id);
          if (child) return present(child);
          if (sameSource.some(j => !['success','failed','expired'].includes(j.state) && j.id !== prior.id && j.errorCode !== 'duplicate_views')) fail(409,'还有四视图任务待查询，请先恢复原任务。');
        } else {
          const duplicate = sameSource.reverse().find(j => !['failed','expired'].includes(j.state)); if (duplicate) return present(duplicate);
        }
        const j = { id: randomUUID(), requestId: input.requestId, sourceJobId: source.id, objective:source.objective || 'restore', source: source.result, viewSet:directional?'vertical':'horizontal', ...(directional ? {} : {orientationScheme:'turntable-v2',regenerateOf:input.regenerateOf || null}), directions:directional?DIRECTION_KEYS.map(view=>({view,requestId:randomUUID()})):[], state: 'queued', message: '四视图任务已记录。', taskId: null, views: [], progress: 0, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString(), workspace: source.workspace || null };
        jobs.set(j.id, j); try { await persist(); } catch { jobs.delete(j.id); fail(500, '四视图任务保存失败，未向服务商提交。'); }
        launch(j, () => directional ? runDirections(j) : run(j)); return present(j);
      } finally { creating = false; }
    },
    async recover(id, input = {}) {
      await ready; const j=get(id); if (j.state==='success'||workers.has(id)) return present(j);
      if(workers.size) fail(409,'请等待当前四视图任务完成。');
      j.resumedAt=new Date().toISOString();j.recovering=true;
      if(j.viewSet==='photo') { await set(j,'running','查询原视角请求并继续保存。');launch(j,()=>runPhoto(j,true));return present(j); }
      if(j.viewSet==='vertical') {
        if(input.retryFailed===true) for(const d of j.directions) if(['failed','duplicate'].includes(d.state)) {d.requestId=randomUUID();delete d.jobId;delete d.state;delete d.submitted;delete d.taskId;}
        await set(j,'running','继续完成上下左右视图；已完成方向会复用。');launch(j,()=>runDirections(j,true));return present(j);
      }
      key(); if(!j.taskId&&TASK.test(input.taskId||'')) j.taskId=input.taskId;
      if(!j.taskId) fail(400,'请填写服务商四视图任务号以找回；不要填写 API 密钥。');
      await set(j,'running','继续查询原四视图任务。');launch(j,()=>poll(j));return present(j);
    },
    async refine(id,input={}) {
      await ready;
      if(!UUID.test(input.requestId||'')) fail(400,'缺少重做请求编号。');
      const existing=[...jobs.values()].find(j=>j.requestId===input.requestId);if(existing) { if(existing.viewSet==='photo'||get(id).viewSet==='photo')return repeatedPhoto(existing,photoRequest('refine',input,id));return present(existing); }
      if(creating||workers.size||(await imageService.status()).activeJobId)fail(409,'请等待当前生成完成。');
      const old=get(id),chosen=input.views;
      if (old.viewSet === 'photo') {
        if (!Array.isArray(chosen) || !chosen.length || new Set(chosen).size !== chosen.length || chosen.some(v => !photoSides.includes(v))) fail(400,'请选择左侧、背面或右侧视角。');
        creating=true; try { return await derivePhoto(old,input,chosen); } finally {creating=false;}
      }
      if(old.viewSet!=='vertical'||!Array.isArray(chosen)||!chosen.length||chosen.length>4||new Set(chosen).size!==chosen.length||chosen.some(v=>!DIRECTION_KEYS.includes(v)))fail(400,'请选择需要重做的上下左右视角。');
      creating=true;
      try {
        const j={...structuredClone(old),id:randomUUID(),requestId:input.requestId,priorId:old.id,state:'queued',message:'保留满意视角，只重做指定方向。',views:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),recovering:false};
        delete j.resumedAt;
        j.directions=j.directions.map(d=>chosen.includes(d.view)?{view:d.view,requestId:randomUUID()}:d);
        for(const v of old.views) if(!chosen.includes(v.view)){const file=v.file.replace(old.id,j.id);await copyFile(join(dataDir,v.file),join(dataDir,file));j.views.push({...v,file});}
        j.progress=j.views.length*25;jobs.set(j.id,j);try {await persist();}catch {jobs.delete(j.id);fail(500,'未能保存重做请求，尚未提交生成。');}launch(j,()=>runDirections(j));return present(j);
      } finally {creating=false;}
    },
    async replace(id,input={}) {
      await ready;
      if (!UUID.test(input.requestId || '')) fail(400,'缺少有效提交编号。');
      const existing=[...jobs.values()].find(j=>j.requestId===input.requestId); if(existing)return repeatedPhoto(existing,photoRequest('replace',input,id));
      if(creating || workers.size) fail(409,'请等待当前视图任务完成。');
      const old=get(id);
      if(old.viewSet !== 'photo' || !photoSides.includes(input.view)) fail(400,'请选择照片左侧、背面或右侧。');
      creating=true;
      try {const asset=await original(input.assetId); return await derivePhoto(old,input,[input.view],{view:input.view,asset});} finally {creating=false;}
    },
    async asset(id, view) { await ready; const j = get(id), v = j.views.find(v => v.view === view); if (!v) fail(404, '视图尚未保存。'); return { content: await readFile(join(dataDir, v.file)), mime: v.mime }; },
    async prune(keepIds, cutoff) { await ready; if (creating || workers.size) return; for (const j of jobs.values()) if (j.workspace === 'quick' && !keepIds.has(j.id) && ['success','failed'].includes(j.state) && Date.parse(j.updatedAt) < cutoff) { for (const v of j.views) await unlink(join(dataDir, v.file)).catch(e => { if (e.code !== 'ENOENT') throw e; }); j.views = []; j.state = 'expired'; j.message = '临时四视图已过期。'; } await persist(); },
    async waitForIdle() { await ready; await Promise.all([...workers.values()]); },
    close() { stopped = true; },
  };
}
