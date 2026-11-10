import {assetDeleteButton,mountAssetTrash} from './asset-trash.js';
import { createViewer } from './model-viewer.js';
import { createProcessingDisplay } from './processing.js';
const $ = selector => document.querySelector(selector);
const modelWaitHost = document.createElement('section');
modelWaitHost.id = 'model-processing'; modelWaitHost.setAttribute('aria-label','三维建模进展');
$('.canvas-wrap').append(modelWaitHost);
const modelWaiting = createProcessingDisplay(modelWaitHost);
function showTool(name, focus = false) {
  if (name !== 'marks') { $('#mark-mode').checked = false; viewer?.marking(false); }
  $('#open-marks').setAttribute('aria-pressed', String(name === 'marks'));
  $('#open-assets').setAttribute('aria-pressed', String(name === 'history'));
  for (const tab of document.querySelectorAll('[data-tool]')) {
    const selected = tab.dataset.tool === name;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    if (selected && focus) tab.focus();
  }
}
for (const tab of document.querySelectorAll('[data-tool]')) {
  tab.addEventListener('click', () => showTool(tab.dataset.tool));
  tab.addEventListener('keydown', event => {
    const tabs = [...document.querySelectorAll('[data-tool]')], i = tabs.indexOf(tab);
    const next = event.key === 'ArrowRight' ? (i + 1) % tabs.length : event.key === 'ArrowLeft' ? (i + tabs.length - 1) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
    if (next >= 0) { event.preventDefault(); showTool(tabs[next].dataset.tool, true); }
  });
}
function focusViewer(active) {
  if (active) { $('#mark-mode').checked = false; viewer?.marking(false); }
  document.body.classList.toggle('focus-mode', active);
  $('#focus-view').setAttribute('aria-pressed', String(active));
  $('#focus-view').textContent = active ? '退出专注 · Esc' : '⛶ 专注查看';
  if (active) document.querySelector('.page-heading').scrollIntoView({ behavior: 'smooth' });
}
$('#focus-view').addEventListener('click', () => focusViewer(!document.body.classList.contains('focus-mode')));
function openInspector(name, scroll = false) {
  focusViewer(false); showTool(name, true);
  if (scroll) document.querySelector('.model-inspector').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
$('#open-marks').addEventListener('click', () => openInspector('marks'));
$('#open-assets').addEventListener('click', () => openInspector('history'));
$('#mobile-assets').addEventListener('click', event => { event.preventDefault(); openInspector('history', true); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !$('#image-lightbox').open) focusViewer(false); });
const lightbox = $('#image-lightbox');
function zoomSource() {
  const img = $('#source-stage img'); if (!img) return;
  $('#lightbox-image').src = img.src; $('#lightbox-image').alt = img.alt;
  $('#lightbox-title').textContent = '当前选定的建模来源图'; lightbox.showModal();
}
$('#source-stage').addEventListener('click', zoomSource);
$('#source-stage').addEventListener('keydown', event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); zoomSource(); } });
$('#close-lightbox').addEventListener('click', () => lightbox.close());
const names = { queued: '任务已记录', uploading: '上传复原图', submitting: '提交建模', running: '正在建模', downloading: '保存模型', success: '模型已保存', failed: '任务未成功', uncertain: '需要继续查询', download_failed: '模型待找回' };
let sourceJob, current, jobs = [], imageJobs = [], status, viewer, loadedId, loadingId, submitting = false, pending, timer, toastTimer, regions = [], dirty = false;
// A tracked generation is independent of the historical model being inspected.
let trackedId = null, trackedState = null, refreshing = false, historyKey = '';
try { trackedId = sessionStorage.getItem('model-tracked-job'); } catch { /* Storage can be unavailable. */ }
const taskCard = document.createElement('div');
taskCard.className = 'current-task-card'; taskCard.hidden = true;
taskCard.setAttribute('aria-label', '当前建模任务');
taskCard.innerHTML = '<div class="current-task-heading"><span>当前任务</span><strong id="tracked-state"></strong></div><div class="current-task-source"><img id="tracked-image" alt="当前任务来源图"><div><strong id="tracked-name"></strong><small id="tracked-note"></small></div></div><progress id="tracked-progress" max="100" aria-label="当前任务进度"></progress><button id="return-current-task" type="button">返回当前任务 ↗</button>';
$('.inspector-heading').after(taskCard);
const taskShortcut = document.createElement('button');
taskShortcut.id = 'task-shortcut'; taskShortcut.type = 'button'; taskShortcut.className = 'task-shortcut'; taskShortcut.hidden = true;
$('.heading-actions').prepend(taskShortcut);
const mobileTask = document.createElement('button');
mobileTask.id = 'mobile-current-task'; mobileTask.type = 'button'; mobileTask.hidden = true;
$('.model-mobile-nav').append(mobileTask);
const liveStates = ['queued', 'uploading', 'submitting', 'running', 'downloading'];
function trackedJob() { return jobs.find(job => job.id === trackedId); }
function trackGeneration(id) {
  if (!id || id === trackedId) return;
  trackedId = id; trackedState = null;
  try { sessionStorage.setItem('model-tracked-job', id); } catch { /* Navigation still works without storage. */ }
}
function renderCurrentTask() {
  const job = trackedJob();
  taskCard.hidden = !job; mobileTask.hidden = !job;
  const away = Boolean(job && current?.id !== job.id);
  taskShortcut.hidden = !away;
  if (!job) return;
  const live = liveStates.includes(job.state), completed = job.state === 'success';
  const progress = Number.isFinite(job.progress) ? Math.max(0, Math.min(100, job.progress)) : null;
  const action = live ? '返回当前任务' : completed ? '查看生成结果' : '查看任务状态';
  taskCard.dataset.state = live ? 'running' : completed ? 'success' : 'error';
  $('.current-task-heading>span').textContent = live ? '当前任务' : '最近任务';
  $('#tracked-state').textContent = `${names[job.state] || '处理中'}${live && progress !== null ? ` · ${progress}%` : ''}`;
  const image = $('#tracked-image'); image.hidden = !job.source?.url;
  if (job.source?.url && image.getAttribute('src') !== job.source.url) image.src = job.source.url;
  $('#tracked-name').textContent = job.source?.name || '文物三维模型';
  $('#tracked-name').title = job.source?.name || '文物三维模型';
  $('#tracked-note').textContent = !away ? '正在查看此任务' : live ? '你可以先看作品，任务仍在继续' : completed ? '生成结果已保存，随时回来查看' : '保留任务记录，可返回查看详情';
  $('#tracked-progress').hidden = !live;
  if (progress === null) $('#tracked-progress').removeAttribute('value'); else $('#tracked-progress').value = progress;
  $('#return-current-task').textContent = away ? `${action} ↗` : '正在查看';
  $('#return-current-task').disabled = !away;
  taskShortcut.textContent = `${live && progress !== null ? `${progress}% · ` : ''}${action} ↗`;
  mobileTask.textContent = live ? `当前任务${progress === null ? '' : ` ${progress}%`}` : completed ? '生成结果' : '任务状态';
  mobileTask.setAttribute('aria-label', action);
  mobileTask.setAttribute('aria-current', away ? 'false' : 'true');
  if (away && liveStates.includes(trackedState) && !live) toast(completed ? '当前任务已完成，可点击“查看生成结果”。' : '当前任务状态已更新，可返回查看详情。');
  trackedState = job.state;
}
async function selectJob(job, scroll = false) {
  if (!job) return;
  if (dirty && job.id !== current?.id) return toast('请先保存当前模型的补全标记，再切换记录。');
  const displayPromise = display(job);
  history();
  if (scroll) $('.page-heading').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
  await displayPromise;
}
for (const button of [$('#return-current-task'), taskShortcut, mobileTask]) {
  button.addEventListener('click', () => selectJob(trackedJob(), true));
}
try { pending = JSON.parse(sessionStorage.getItem('model-pending') || 'null'); } catch { /* Ignore damaged local draft */ }
function toast(message) { $('#toast').textContent = message; $('#toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 7000); }
async function api(path, body) {
  const res = await fetch(path, body === undefined ? {} : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await res.json(); if (!res.ok) { const e = new Error(data.message || '请求失败'); e.status = res.status; throw e; } return data;
}
function updateButton() { $('#generate-model').disabled = submitting || !status?.configured || !!status?.activeJobId || (!pending && (!sourceJob || sourceJob.photo)); $('#generate-model').textContent = pending ? '核对上次提交（不重复生成）' : sourceJob?.photo ? '照片任务已提交' : '用此方案生成完整 3D ↗'; }
const photoCopy = {
  'source-title': '照片三维模型',
  'source-subtitle': '使用原始照片与对应四视图',
  'source-notes-label': '查看照片建模来源',
  'change-source': '更换建模照片 →',
  'model-purpose': '照片形体重建',
  'model-billing': '照片建模已在图像准备页提交。来源为原始照片与正、左、背、右四视图，费用以 Tripo 实际扣除积分为准。',
  'model-badge': 'AI 照片建模 · 非实测几何',
};
const legacyCopy = Object.fromEntries(Object.keys(photoCopy).map(id => [id, document.getElementById(id).textContent]));
function syncSource(job) {
  sourceJob = job?.sourceAssetId
    ? { id: job.sourceAssetId, photo: true, result: job.source, prompt: '正面使用上传的原始照片，其余方向使用对应实拍参考或 AI 生成参考。' }
    : job ? imageJobs.find(item => item.id === job.sourceJobId) || (job.source ? { id: job.sourceJobId, result: job.source, prompt: '此模型保存的复原图来源。' } : null)
      : imageJobs.find(item => item.selected && item.result);
  const photo = Boolean(sourceJob?.photo || sourceJob?.objective === 'photo' || job?.objective === 'photo');
  for (const [id, text] of Object.entries(photo ? photoCopy : legacyCopy)) document.getElementById(id).textContent = text;
  if (photo && !sourceJob?.photo) { $('#source-subtitle').textContent='使用已确认的干净建模图'; $('#model-billing').textContent='使用干净图建模；如选择四视图，将提交主图＋左右图，上下图供审阅。费用以 Tripo 实际扣除积分为准。'; }
  const stage = $('#source-stage');
  if (sourceJob?.result) {
    if (stage.dataset.id !== sourceJob.id) {
      stage.replaceChildren(); const img = document.createElement('img');
      img.src = sourceJob.result.url; img.alt = photo ? sourceJob?.photo ? '原始建模照片' : '干净建模图' : '已选定的复原方案';
      stage.append(img); stage.dataset.id = sourceJob.id;
    }
    $('#source-description').textContent = sourceJob.prompt;
  } else {
    stage.replaceChildren(); const p = document.createElement('p'); p.textContent = '尚未选择建模来源'; stage.append(p);
    delete stage.dataset.id; $('#source-description').textContent = '请先在图像准备页选择建模来源。';
  }
  updateButton();
}
function marksChanged() { dirty = true; viewer?.setMarks(regions); $('#mark-message').textContent = `${regions.length} 处示意标记 · 尚未保存`; }
function makeViewer() {
  if (viewer) return viewer;
  viewer = createViewer($('#viewer'), region => { if (regions.length >= 30) return toast('最多标记 30 处。'); regions.push(region); marksChanged(); }); return viewer;
}
let sourceViewsId = null;
async function loadSourceViews(job) {
  $('#model-source-views').hidden = !job.multiviewJobId;
  if (!job.multiviewJobId || sourceViewsId === job.multiviewJobId) return;
  const id = job.multiviewJobId;
  try {
    const data = await api(`/api/multiview/jobs/${id}`); if (current?.multiviewJobId !== id) return;
    $('#model-source-views summary').textContent = data.viewSet === 'vertical' ? '建模参考：主图＋左右图（上下图仅审阅）' : '查看建模使用的四视图';
    sourceViewsId = id; const grid = $('#model-views-grid'); grid.replaceChildren();
    for (const view of data.views) { const item = document.createElement('a'), img = document.createElement('img'), label = document.createElement('span'); img.src = view.url; img.alt = {front:'正面',left:'左侧',back:'背面',right:'右侧',top:'俯视（审阅）',bottom:'仰视（审阅）'}[view.view]; label.textContent = img.alt + (data.viewSet === 'photo' ? view.provenance === 'original' ? ' · 原始照片' : ' · AI 参考' : '') + ' · 下载'; item.href = view.url + '?download=1'; item.download = view.view; item.append(img,label); grid.append(item); }
  } catch { $('#model-views-grid').textContent = '暂时无法读取四视图，可刷新后重试。'; }
}
async function display(job) {
  current = job;
  const url = new URL(location.href);
  if (url.searchParams.get('job') !== job.id) { url.searchParams.set('job', job.id); window.history.replaceState(null, '', url); }
  renderCurrentTask();
  syncSource(job);
  void loadSourceViews(job);
  if (job.state === 'success' && job.modelUrl) { try { const cache = JSON.parse(sessionStorage.getItem('quick-workspace-v1') || 'null'); if (cache && sourceJob?.caseId === cache.id) sessionStorage.removeItem('quick-workspace-v1'); } catch {} }
  const mismatch = !!sourceJob && (job.sourceAssetId || job.sourceJobId) !== sourceJob.id;
  $('#model-source-notice').hidden = !mismatch;
  $('#model-source-notice').textContent = '正在查看历史模型，来源与左侧当前选定的复原图不同。点击“用此方案生成完整 3D”才会使用左侧图像。';
  $('#marks-empty').hidden = !!job.modelUrl;
  $('#model-state').closest('.job-status').className = `job-status ${['queued', 'uploading', 'submitting', 'running', 'downloading'].includes(job.state) ? 'running' : ['failed', 'uncertain', 'download_failed'].includes(job.state) ? 'error' : 'success'}`;
  $('#model-state').textContent = job.sourceAssetId && job.state === 'uploading' ? '上传照片与四视图' : names[job.state] || job.state; $('#model-message').textContent = job.message;
  const live = ['queued','uploading','submitting','running','downloading'].includes(job.state);
  const loadingPreview = !!job.modelUrl && loadedId !== job.id;
  modelWaiting.update({active:live || loadingPreview,id:job.id,startedAt:job.createdAt,image:job.source?.url,kind:'model',kicker:job.sourceAssetId ? '原始照片与四视图 → 三维形体' : job.multiviewJobId ? '多视角参考 → 三维形体' : job.objective === 'photo' ? '干净图 → 三维形体' : '复原图 → 三维形体',
    title:loadingPreview ? '模型已就绪，正在载入真实几何与材质' : job.state === 'downloading' ? '模型已生成，正在保存到本机' : job.state === 'running' ? '从轮廓粒子到完整形体' : '正在准备三维重建', detail:job.message,
    steps:['提交参考','生成模型','保存 GLB'],phase:job.state === 'downloading' ? 2 : job.state === 'running' ? 1 : 0,progress:job.progress,
    note:'当前为参考图轮廓的粒子动效，并非实时三维结果；模型就绪后自动切换。'});
  $('#progress').value = job.progress; $('#recovery').hidden = !['uncertain', 'download_failed'].includes(job.state);
  $('#recover-task').hidden = !!job.taskId; $('#recovery label').hidden = !!job.taskId;
  $('#model-meta').textContent = `${job.multiviewJobId ? '四视图建模' : '单图建模'} · ${new Date(job.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })} · ${job.profile === 'detail' ? '细节优先' : '网页流畅'}${job.taskId ? ' · 任务 ' + job.taskId : ''}${job.credits != null ? ' · 消耗 ' + job.credits + ' 积分' : ''}`;
  $('#download-record').hidden = false;
  if (!job.modelUrl) { $('#viewer-message').textContent = ''; $('#viewer-controls').hidden = true; $('#annotations').hidden = true; $('#viewer-empty').hidden = false; $('#viewer-empty').textContent = '当前任务尚无可预览模型'; $('#viewer canvas')?.setAttribute('hidden', ''); if (['uncertain', 'download_failed'].includes(job.state)) showTool('info'); return; }
  if (loadedId === job.id) { $('#viewer-controls').hidden = false; $('#annotations').hidden = false; $('#viewer-empty').hidden = true; $('#viewer canvas')?.removeAttribute('hidden'); return; }
  if (loadingId === job.id) return;
  const target = job.id; loadingId = target; loadedId = null;
  $('#viewer-controls').hidden = true; $('#annotations').hidden = true; $('#viewer-empty').hidden = false; $('#viewer-empty').textContent = '正在载入模型与材质…'; $('#viewer-message').textContent = '';
  try {
    const view = makeViewer(); $('#viewer canvas')?.removeAttribute('hidden'); await view.load(job.modelUrl);
    if (current?.id !== target) return;
    loadedId = target; regions = structuredClone(job.annotations || []); dirty = false;
    modelWaiting.finish();
    view.setMarks(regions); view.marking(false); view.showMarks(true); view.rotate(false); view.material('original');
    $('#mark-mode').checked = false; $('#show-marks').checked = true; $('#rotate').checked = false; $('#material').value = 'original';
    $('#viewer-empty').hidden = true; $('#viewer-controls').hidden = false; $('#annotations').hidden = false;
    $('#download-model').href = `${job.modelUrl}?download=1`;
    $('#viewer-message').textContent = '已加载本机 GLB。可旋转检查；成品图将采用当前视角与显示材质。';
    $('#mark-message').textContent = `${regions.length} 处已保存的补全示意标记`;
  } catch { if (current?.id === target) { modelWaiting.update({active:false}); $('#viewer-empty').hidden = false; $('#viewer-empty').textContent = '预览未能加载'; $('#viewer-message').textContent = '请检查浏览器是否支持 WebGL，或模型是否包含暂不支持的压缩扩展。可下载 GLB 使用其他三维软件查看。'; $('#download-model').href = `${job.modelUrl}?download=1`; $('#viewer-controls').hidden = false; } }
  finally { if (loadingId === target) loadingId = null; }
}
function history() {
  const list = $('#model-history');
  const works = jobs.filter(j => j.state === 'success' && j.modelUrl);
  const key = JSON.stringify(works.map(job => [job.id, job.modelUrl, job.source?.url, job.source?.name]));
  if (key === historyKey) {
    for (const button of list.querySelectorAll('[data-job-id]')) {
      const selected = button.dataset.jobId === current?.id;
      button.classList.toggle('active', selected); button.setAttribute('aria-pressed', String(selected));
    }
    return;
  }
  historyKey = key; list.replaceChildren();
  $('#model-count').textContent = String(works.length);
  if (!works.length) { const p = document.createElement('p'); p.className = 'empty-history'; p.textContent = '完成建模后，作品会自动保存在这里。'; list.append(p); }
  for (const job of works) {
    const button = document.createElement('button'); button.className = `history-item model-history-item${current?.id === job.id ? ' active' : ''}`;
    button.type = 'button'; button.setAttribute('aria-pressed', String(current?.id === job.id));
    button.dataset.jobId = job.id;
    if (job.source?.url) { const image = document.createElement('img'); image.src = job.source.url; image.alt = '模型来源图'; image.loading = 'lazy'; button.append(image); }
    const caption = document.createElement('div');
    const title = document.createElement('strong'); title.textContent = `${names[job.state]} · ${job.profile === 'detail' ? '细节优先' : '网页流畅'}`;
    const text = document.createElement('p'); text.textContent = `${new Date(job.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}\n${job.source?.name || '照片模型'}`;
    caption.append(title, text); button.append(caption); button.addEventListener('click', () => selectJob(jobs.find(item => item.id === job.id) || job)); const row=document.createElement('div');row.className='asset-row';row.append(button,assetDeleteButton(job,()=>{if(current?.id===job.id){location.replace('/models');return;}historyKey='';refresh();}));list.append(row);
  }
}
async function refresh() {
  if (refreshing) return;
  refreshing = true;
  clearTimeout(timer);
  try {
    const [service, modelList, imageList] = await Promise.all([api('/api/models/status'), api('/api/models/jobs'), api('/api/images/jobs')]);
    status = service; jobs = modelList.jobs; imageJobs = imageList.jobs;
    const recent = jobs[0];
    trackGeneration(service.activeJobId || jobs.find(job => liveStates.includes(job.state))?.id ||
      (trackedJob() && (!recent || trackedJob().createdAt >= recent.createdAt) ? trackedId : recent?.id));
    $('#service-status').textContent = service.configured ? '已读取本机 Tripo 配置 · H 系列' : '尚未配置 Tripo，请先前往连接页';
    if (pending) { const found = jobs.find(j => j.requestId === pending.requestId || j.sourceJobId === pending.sourceJobId && j.profile === pending.profile && (j.multiviewJobId || null) === (pending.multiviewJobId || null) && j.state !== 'failed'); if (found) { current = found; pending = null; sessionStorage.removeItem('model-pending'); } }
    if (!current && jobs.length) current = jobs.find(j => j.id === new URLSearchParams(location.search).get('job')) || trackedJob() || jobs.find(j => j.state === 'success' && j.modelUrl);
    if (current) { const latest = jobs.find(j => j.id === current.id); if (latest) void display(latest); } else syncSource(null);
    renderCurrentTask(); history(); updateButton();
    if (service.activeJobId || jobs.some(job => liveStates.includes(job.state))) timer = setTimeout(refresh, 2500);
  } catch { toast('暂时无法读取本地状态，稍后自动恢复查询；不会自动重新生成。'); timer = setTimeout(refresh, 5000); }
  finally { refreshing = false; }
}
$('#generate-model').addEventListener('click', async () => {
  if (submitting || status?.activeJobId) return;
  if (dirty) return toast('请先保存补全标记。');
  if (!pending && !sourceJob) return toast('请先选定复原方案。');
  pending ||= { requestId: crypto.randomUUID(), sourceJobId: sourceJob.id, multiviewJobId: current?.sourceJobId === sourceJob.id ? current.multiviewJobId : null, orientationReviewJobId: current?.sourceJobId === sourceJob.id ? current.orientationReviewJobId : null, profile: $('#profile').value };
  sessionStorage.setItem('model-pending', JSON.stringify(pending)); submitting = true; updateButton();
  try { const job = await api('/api/models/jobs', pending); pending = null; sessionStorage.removeItem('model-pending'); jobs = [job, ...jobs.filter(item => item.id !== job.id)]; trackGeneration(job.id); await display(job); await refresh(); }
  catch (error) { if ([400, 403, 404, 409, 413].includes(error.status)) { pending = null; sessionStorage.removeItem('model-pending'); } toast(error.message); }
  finally { submitting = false; updateButton(); }
});
$('#refresh').addEventListener('click', refresh);
$('#recover').addEventListener('click', async () => { if (!current) return; $('#recover').disabled = true; try { await display(await api(`/api/models/jobs/${current.id}/recover`, { taskId: $('#recover-task').value.trim() })); await refresh(); } catch (e) { toast(e.message); } finally { $('#recover').disabled = false; } });
$('#reset-view').addEventListener('click', () => viewer?.reset());
$('#rotate').addEventListener('change', e => viewer?.rotate(e.target.checked));
$('#material').addEventListener('change', e => viewer?.material(e.target.value));
$('#mark-mode').addEventListener('change', e => { viewer?.marking(e.target.checked); if (e.target.checked) { $('#rotate').checked = false; viewer?.rotate(false); } });
$('#mark-size').addEventListener('input', e => viewer?.radius(Number(e.target.value)));
$('#show-marks').addEventListener('change', e => viewer?.showMarks(e.target.checked));
$('#undo-mark').addEventListener('click', () => { regions.pop(); marksChanged(); });
$('#save-marks').addEventListener('click', async () => { if (!current || loadedId !== current.id) return; $('#save-marks').disabled = true; try { const snapshot = JSON.stringify(regions); const saved = await api(`/api/models/jobs/${current.id}/annotations`, { regions }); current = saved; dirty = JSON.stringify(regions) !== snapshot; $('#mark-message').textContent = dirty ? '标记已改变，请再次保存' : `${regions.length} 处标记已保存到本机`; } catch (e) { toast(e.message); } finally { $('#save-marks').disabled = false; } });
function download(blob, name) { const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); }
async function capture(marks) { if (!loadedId || loadedId !== current?.id) return toast('请等待模型载入。'); const blob = await viewer.capture(marks); if (blob) { download(blob, `restoration-${marks ? 'regions' : 'render'}-${current.id}.png`); toast(marks ? '补全示意图已导出。' : '已导出当前模型成品图，不含橙色示意标记。'); } }
$('#capture').addEventListener('click', () => capture(false)); $('#capture-marks').addEventListener('click', () => capture(true));
$('#download-record').addEventListener('click', () => { if (dirty) return toast('请先保存标记，再导出记录。'); if (current) download(new Blob([JSON.stringify({ ...current, coordinateSystem: '预览归一化坐标，最长边为 2，包围盒居中；原始 GLB 未更改', note: current.sourceAssetId ? '依据照片生成的 AI 模型，生成方向仅作为参考。' : 'AI 推测复原。标记为人工球形示意，非测量或网格分割结果。' }, null, 2)], { type: 'application/json' }), `model-record-${current.id}.json`); });
window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = ''; } });
showTool('history');
refresh();

mountAssetTrash(document.querySelector('#model-history'),()=>{historyKey='';refresh();});
