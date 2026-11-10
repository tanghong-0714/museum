import {assetDeleteButton,mountAssetTrash} from './asset-trash.js';
import { createProcessingDisplay } from './processing.js';
const $ = selector => document.querySelector(selector);
const imageWaitHost = document.createElement('section');
imageWaitHost.id = 'image-processing'; imageWaitHost.setAttribute('aria-label','图像处理进展');
$('#result-panel').before(imageWaitHost);
const imageWaiting = createProcessingDisplay(imageWaitHost);
const viewsWaitHost = document.createElement('section');
viewsWaitHost.id = 'views-processing'; viewsWaitHost.setAttribute('aria-label','四视图处理进展');
$('#views-grid').before(viewsWaitHost);
const viewsWaiting = createProcessingDisplay(viewsWaitHost);
function showView(name, focus = false) {
  if (!['result', 'analysis', 'history'].includes(name)) name = 'result';
  for (const tab of document.querySelectorAll('[data-view]')) {
    const selected = tab.dataset.view === name;
    tab.setAttribute('aria-selected', String(selected)); tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
    if (selected && focus) tab.focus();
  }
  try { sessionStorage.setItem('studio-view', name); } catch {}
}
for (const tab of document.querySelectorAll('[data-view]')) {
  tab.addEventListener('click', () => showView(tab.dataset.view));
  tab.addEventListener('keydown', event => {
    const tabs = [...document.querySelectorAll('[data-view]')], index = tabs.indexOf(tab);
    const next = event.key === 'ArrowRight' ? (index + 1) % tabs.length : event.key === 'ArrowLeft' ? (index + tabs.length - 1) % tabs.length : event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1 : -1;
    if (next >= 0) { event.preventDefault(); showView(tabs[next].dataset.view, true); }
  });
}
try { showView(sessionStorage.getItem('studio-view')); } catch { showView('result'); }
for (const button of document.querySelectorAll('[data-panel-open]')) {
  button.addEventListener('click', () => {
    focusImages(false);
    showView(button.dataset.panelOpen, true);
    if (matchMedia('(max-width: 1000px)').matches) document.querySelector('.inspector').scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}
function focusImages(active) {
  document.body.classList.toggle('focus-mode', active);
  $('#focus-image').setAttribute('aria-pressed', String(active));
  $('#focus-image').textContent = active ? '退出专注 · Esc' : '⛶ 专注查看';
}
$('#focus-image').addEventListener('click', () => focusImages(!document.body.classList.contains('focus-mode')));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !document.querySelector('dialog[open]')) focusImages(false);
});
const lightbox = $('#image-lightbox');
function zoomImage(stage) {
  const image = stage.querySelector('img'); if (!image) return;
  $('#lightbox-image').src = image.src; $('#lightbox-image').alt = image.alt;
  $('#lightbox-title').textContent = stage.getAttribute('aria-label').replace('放大', '');
  lightbox.showModal();
}
document.querySelectorAll('.zoomable').forEach(stage => {
  stage.addEventListener('click', () => zoomImage(stage));
  stage.addEventListener('keydown', event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); zoomImage(stage); } });
});
$('#close-lightbox').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => { if (event.target === lightbox) { const r = lightbox.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) lightbox.close(); } });
// The native dialog stays inside the form, so settings keep their original ownership.
const toolsDialog = $('#editor-tools-dialog');
for (const button of document.querySelectorAll('[data-tool]')) {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-tool-panel]').forEach(panel => { panel.hidden = panel.dataset.toolPanel !== button.dataset.tool; });
    document.querySelectorAll('[data-tool]').forEach(item => item.classList.toggle('active', item === button));
    $('#editor-tools-title').textContent = button.getAttribute('aria-label');
    toolsDialog.showModal();
  });
}
$('#close-editor-tools').addEventListener('click', () => toolsDialog.close());
toolsDialog.addEventListener('close', () => document.querySelectorAll('[data-tool]').forEach(item => item.classList.remove('active')));
toolsDialog.addEventListener('click', event => {
  if (event.target !== toolsDialog) return;
  const rect = toolsDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) toolsDialog.close();
});
const actionIcons = {
  zoom: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
  download: '<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
  redo: '<path d="M3 10a9 9 0 1 1 2 8M3 4v6h6"/>',
  replace: '<path d="M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4"/>'
};
function actionIcon(name) { return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${actionIcons[name]}</svg>`; }
function labelAction(element, label, icon) { element.className = 'icon-action'; element.title = label; element.setAttribute('aria-label', label); element.innerHTML = actionIcon(icon); }
const form = $('#image-form');
const modeInputs = [...document.querySelectorAll('[name="mode"]')];
const promptInput = $('#image-prompt');
const PHOTO_PROMPT = '提取照片中的主体文物，去除复杂背景、展柜反光和周围杂物，生成单件居中、浅灰纯色背景、柔和均匀光照的清晰建模图。保持原有器形、比例、材质、颜色、纹饰及真实缺损，不修复器物，不新增装饰。';
let loadingWorkspace = false;
let objective = 'restore', goalDrafts = {}, photoReferences = {}, preparedJobId = null, preservedModel = null;
let references = [];
let currentJob = null;
let jobs = [];
let service = null;
let uploading = false;
let submitting = false;
let pollTimer;
let toastTimer;
let pendingPayload = null;
let previewError = '', previewTimer, previewSequence = 0, previewKey = null, autoAnalysisRequestId = null, modelSubmitting = false;
let completedModels = [], activeCaseId = null, adoptedAnalysisId = null, hadSource = false, previewPayload = null;
const stateNames = { queued: '任务已记录', running: '正在生成图像', success: '生成完成 · 请审阅', failed: '任务未成功', uncertain: '执行结果待确认', download_failed: '图片待找回' };
const modeNames = { restore: '文物复原', edit: '参考图编辑', generate: '文字生图' };
try { pendingPayload = JSON.parse(sessionStorage.getItem('image-pending') || 'null'); } catch { /* 忽略损坏的草稿 */ }
function toast(message) {
  $('#toast').textContent = message; $('#toast').hidden = false;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 7000);
}
async function api(path, body) {
  const response = await fetch(path, body === undefined ? {} : { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await response.json();
  if (!response.ok) { const error = new Error(data.message || '本地请求未成功。'); error.status = response.status; throw error; }
  return data;
}
function mode() { return modeInputs.find(input => input.checked).value; }
function setImage(stage, asset, placeholder) {
  const old = stage.querySelector('img');
  if (asset && old?.dataset.assetId === String(asset.id || asset.assetId || asset.url)) return;
  stage.replaceChildren();
  if (asset) { const img = document.createElement('img'); img.src = asset.url; img.alt = asset.name || '当前视图'; img.dataset.assetId = asset.id || asset.assetId || asset.url; stage.append(img); }
  else { const p = document.createElement('p'); p.textContent = placeholder; stage.append(p); }
}
function saveDraft() {
  if (!activeCaseId || loadingWorkspace) return;
  const draft = { id: activeCaseId, mode: mode(), prompt: promptInput.value, size: $('#image-size').value, quality: $('#image-quality').value, references, context: readContext(), adoptedAnalysisId, autoAnalysisRequestId, expiresAt: Date.now() + 86400000 };
  draft.currentJob = currentJob; draft.viewCurrent = viewCurrent; draft.analysisCurrent = analysisCurrent; draft.photoReferences = photoReferences; draft.preparedJobId = preparedJobId; draft.model = preservedModel;
  goalDrafts[objective] = draft;
  try { sessionStorage.setItem('shared-workspace-v2', JSON.stringify({objective, goals:goalDrafts})); } catch { toast('无法缓存当前操作，刷新后可能需要重新上传。'); }
  schedulePreview();
}
function readContext() { return { category: $('#object-category').value, photoSide: $('#photo-side').value, targetView: $('#target-view').value, scope: $('#repair-scope').value, decision: $('#structure-decision').value.trim() }; }
function fillContext(c = {}) { $('#object-category').value = c.category || 'unknown'; $('#photo-side').value = c.photoSide || 'unknown'; $('#target-view').value = c.targetView || 'front'; $('#repair-scope').value = c.scope || 'complete'; $('#structure-decision').value = c.decision || ''; }
function caseBusy() { return !!sessionStorage.getItem('model-pending') || viewsSubmitting || viewsPending || viewStatus?.activeJobId || modelSubmitting || uploading || submitting || service?.activeJobId || analysisSubmitting || analysisServiceState?.activeJobId || pendingPayload || analysisPending; }
function resetResult() { currentJob = null; $('#result-error').hidden = true; $('#result-error').textContent = ''; setImage($('#original-stage'), references.find(a => a.kind !== 'result'), '请添加原始照片'); setImage($('#result-stage'), null, '复原完成后在此预览'); $('#result-actions').hidden = true; $('#recover-result').hidden = true; $('#submitted-prompt-details').hidden = true; $('#result-subtitle').textContent = '对照现存轮廓与纹饰 · 点击图片可放大查看'; $('#job-meta').textContent = ''; resetViews(); }
function loadWorkspace(d = {}) {
  loadingWorkspace = true;
  activeCaseId = d.id || crypto.randomUUID(); references = d.references || []; hadSource = !!references.length;
  adoptedAnalysisId = d.adoptedAnalysisId || null; autoAnalysisRequestId = d.autoAnalysisRequestId || null;
  promptInput.value = d.prompt === '保留照片中物体当前的形态、破损、材质、纹理及背景，仅改善清晰度和光照，不补全缺损，不改变结构。' ? PHOTO_PROMPT : d.prompt || ''; fillContext(d.context); $('#image-size').value = d.size || 'auto'; $('#image-quality').value = d.quality || 'auto';
  analysisCurrent = null; $('#analysis-output').hidden = true; $('#analysis-inputs').replaceChildren(); $('#analysis-state').textContent = '等待上传照片'; $('#analysis-message').textContent = '上传后自动识别缺损，准备修复方案。'; $('#analysis-meta').textContent = ''; $('#analysis-dot').hidden = true;
  delete $('#analysis-prompt').dataset.job;
  photoReferences = d.photoReferences || {}; preparedJobId = d.preparedJobId || null; preservedModel = d.model || null;
  setMode(objective === 'photo' ? 'edit' : d.mode || 'restore'); resetResult(); currentJob = d.currentJob || null; viewCurrent = d.viewCurrent || null; analysisCurrent = d.analysisCurrent || null;
  if (currentJob) renderJob(currentJob); if (analysisCurrent) renderAnalysis(analysisCurrent);
  renderReferences(); renderGoal(); renderViews(); renderHistory(); showView('result'); loadingWorkspace = false; saveDraft(); refreshAnalysis();
}
for (const id of ['object-category', 'photo-side', 'target-view', 'repair-scope', 'structure-decision']) $('#' + id).addEventListener('input', saveDraft);
async function resolveDraftReferences() {
  const owner = activeCaseId, ids = references.map(a => a.id).join(',');
  const result = await api('/api/images/resolve', { referenceIds: references.map(a => a.id) });
  if (owner !== activeCaseId || ids !== references.map(a => a.id).join(',')) return;
  if (result.references.length > 4) throw new Error('找回原图后超过 4 张，请移除多余 AI 图再继续。');
  references = result.references; renderReferences(); saveDraft();
}
function setMode(value) {
  modeInputs.forEach(input => { input.checked = input.value === value; });
  $('#references-section').hidden = value === 'generate';
  $('#restoration-context').hidden = value === 'generate';
  document.querySelector('[data-tool=analysis]').disabled = value === 'generate';
  $('#prompt-label').textContent = value === 'restore' ? 'AI 修复提示词 · 阅读后即可生成' : value === 'edit' ? '希望如何编辑参考图？' : '描述你想生成的画面';
  promptInput.placeholder = value === 'restore' ? '例如：补足缺失轮廓，生成完整器物；保留现存釉色、纹饰与正常开片，不增加没有依据的装饰。'
    : value === 'edit' ? '例如：保留雕像形态、面部和石材细节，将背景改为中性灰色影棚。' : '例如：一尊完整的石质人物雕塑，中性灰背景，柔和侧光，全身入镜，无文字与水印。';
  $('#mode-help').textContent = value === 'restore' ? '自动分析缺损并拟定补全方法。可直接使用，也可以修改；点击文档图标可查看完整发送要求。'
    : value === 'edit' ? '第一张为主要原图，后续图片作为参考。请写明需要保留的部分。' : '文字生图不发送参考图。画面内容由你的描述决定。';
  updateSubmit(); saveDraft();
}
function generationInput() {
  return { objective, caseId: activeCaseId, caseName: '', workspace: 'quick', context: readContext(), analysisId: adoptedAnalysisId, mode: objective === 'photo' ? 'edit' : mode(), prompt: promptInput.value.trim(), referenceIds: mode() === 'generate' ? [] : references.map(x => x.id), size: $('#image-size').value, quality: $('#image-quality').value };
}
function analysisInFlight() { return analysisSubmitting || !!analysisServiceState?.activeJobId || !!analysisPending; }
function schedulePreview() {
  clearTimeout(previewTimer); previewSequence++; previewPayload = null; previewKey = null; previewError = '';
  updateSubmit();
  if (!activeCaseId || !promptInput.value.trim() || uploading || analysisInFlight()) return;
  previewTimer = setTimeout(preparePreview, 350);
}
async function preparePreview() {
  const sequence = ++previewSequence, input = generationInput(), key = JSON.stringify(input);
  $('#preview-feedback').textContent = '正在整理完整发送要求…';
  try {
    const preview = await api('/api/images/preview', input);
    if (sequence !== previewSequence || key !== JSON.stringify(generationInput())) return;
    $('#effective-prompt').value = preview.effectivePrompt;
    $('#preview-feedback').textContent = [...preview.problems, ...preview.warnings].join(' ') || '已准备好，点击生成才会调用图像服务。';
    if (!preview.problems.length) { previewKey = key; previewPayload = { ...input, requestId: crypto.randomUUID(), previewHash: preview.previewHash }; }
    else { previewError = preview.problems.join(' '); $('#workflow-hint').textContent = previewError; }
  } catch (e) { if (sequence === previewSequence) { previewError = e.message; $('#preview-feedback').textContent = e.message; $('#workflow-hint').textContent = '提示词整理失败，请修改提示词或刷新重试。'; } }
  finally { updateSubmit(); }
}
function updateSubmit() {
  const busy = uploading || submitting || modelSubmitting || viewsSubmitting || !!viewStatus?.activeJobId || Boolean(service?.activeJobId) || analysisInFlight();
  $('#submit-image').disabled = busy || !service?.configured || (!pendingPayload && !previewError && (!previewPayload || previewKey !== JSON.stringify(generationInput())));
  $('#submit-image').textContent = uploading ? '正在保存照片…' : analysisInFlight() ? 'AI 正在准备修复方案…' : submitting ? '正在提交…' : service?.activeJobId ? '正在生成复原图…' : pendingPayload ? '核对上次生成提交' : !promptInput.value.trim() ? '等待 AI 修复提示词' : previewError ? '重新检查修复方案' : !previewPayload ? '正在准备提示词…' : '生成复原图';
  if (objective === 'photo') $('#submit-image').textContent = $('#submit-image').textContent.replaceAll('修复方案','净化方案').replaceAll('修复提示词','干净图提示词').replaceAll('复原图','干净图');
  renderProcessing();
}
function renderProcessing() {
  const image = references.find(a => a.kind !== 'result')?.url || references[0]?.url;
  const analyzing = analysisSubmitting || analysisServiceState?.activeJobId === analysisCurrent?.id && ['queued','running'].includes(analysisCurrent?.state);
  const generating = submitting || ['queued','running'].includes(currentJob?.state);
  const active = uploading || analyzing || generating || modelSubmitting;
  const job = analyzing ? analysisCurrent : currentJob;
  const phase = uploading || (analyzing ? analysisSubmitting : submitting) ? 0 : 1;
  imageWaiting.update({active, id: uploading ? 'upload' : modelSubmitting ? 'model-submit' : analysisSubmitting ? 'analysis-submit' : submitting ? 'image-submit' : job?.id, startedAt: uploading || modelSubmitting || analysisSubmitting || submitting ? null : job?.createdAt,
    image, kind:'image', kicker: analyzing ? objective === 'photo' ? 'AI 照片观察' : 'AI 观察与修复方案' : modelSubmitting ? '准备三维重建' : objective === 'photo' ? '干净图生成中' : '数字复原进行中',
    title: uploading ? '正在保存原始照片' : analyzing ? objective === 'photo' ? '正在观察照片现状与保留特征' : '正在识别缺损，拟定修复方案' : modelSubmitting ? '正在提交建模方案' : submitting ? objective === 'photo' ? '正在发送干净图生成要求' : '正在发送复原要求' : objective === 'photo' ? '正在生成干净建模图' : '正在让完整器形逐渐成形',
    detail: analyzing ? objective === 'photo' ? '分析主体、背景与反光，整理保留器物原貌的干净图提示词。' : '结合现存轮廓、纹饰与残缺位置，整理可供你审阅的提示词。' : modelSubmitting ? '接单成功后自动进入三维工作台。' : '保留原图作为对照，结果完成后自动展示。',
    steps: analyzing ? ['读取照片','分析与拟定方案','提示词就绪'] : ['提交要求','服务商生成','保存结果'], phase,
    note:'当前为等待动效，不代表生成结果；完成后请核对器形与细节。'});
}
function renderReferences() {
  document.body.classList.toggle('has-source', references.length > 0 || mode() === 'generate');
  queueMicrotask(() => document.dispatchEvent(new Event('analysis-context')));
  $('#reference-count').textContent = references.length ? '原始证据' : '单张照片';
  $('#reference-list').replaceChildren();
  $('#reference-provenance').hidden = !references.some(a => a.kind === 'result');
  $('#reference-provenance').textContent = '含已知 AI 生成图。可追溯的原始照片会自动放在前面；生成图只作辅助，不能作为实物证据。';
  references.forEach((asset, index) => {
    const card = document.createElement('div'); card.className = 'reference-card';
    const img = document.createElement('img'); img.src = asset.url; img.alt = asset.name;
    const label = document.createElement('span'); label.textContent = `${asset.kind === 'result' ? 'AI 辅助图' : '上传原始参考'} · ${asset.name}`;
    const remove = document.createElement('button'); remove.type = 'button'; remove.textContent = '×'; remove.setAttribute('aria-label', `移除参考图 ${index + 1}`);
    remove.addEventListener('click', () => { if (caseBusy()) return toast('请等待当前任务完成。'); references.splice(index, 1); adoptedAnalysisId = null; autoAnalysisRequestId = null; promptInput.value = ""; resetResult(); renderReferences(); saveDraft(); if (references.length && objective === 'restore') submitAnalysis("analyze"); });
    const preview = document.createElement('button'); preview.type = 'button'; preview.className = 'reference-preview';
    preview.setAttribute('aria-label', `放大${index ? '辅助参考图' : '上传原图'}`); preview.append(img);
    preview.addEventListener('click', () => zoomImage(preview));
    const actions = document.createElement('div'); actions.className = 'reference-actions';
    if (index === 0) {
      card.classList.add('primary-reference');
      const replace = document.createElement('button'); replace.type = 'button'; labelAction(replace, '更换原图', 'replace');
      replace.addEventListener('click', () => { if (caseBusy()) return toast('请等待当前任务完成。'); $('#reference-files').click(); });
      actions.append(replace);
    }
    remove.className = 'icon-action'; remove.title = `移除参考图 ${index + 1}`;
    actions.append(remove); card.append(preview, label, actions); $('#reference-list').append(card);
  });
  if (!currentJob) setImage($('#original-stage'), mode() === 'generate' ? null : references[0], '尚未添加原图');
}
function readAsDataURL(file) { return new Promise((resolve, reject) => { const reader = new FileReader(); reader.onload = () => resolve(reader.result); reader.onerror = () => reject(new Error('无法读取本地图片。')); reader.readAsDataURL(file); }); }
async function uploadFiles(files) {
  if (caseBusy()) return toast('请先等待当前任务完成或核对上次提交。');
  if (!files.length) return;
  if (files.length !== 1) return toast('请上传一张主要原图。四视图可以在复原图生成后自动生成。');
  if (files[0].size > 10 * 1024 * 1024 || !['image/png','image/jpeg','image/webp'].includes(files[0].type)) return toast('请上传 10 MB 以内的 PNG、JPEG 或 WebP 图片。');
  goalDrafts = {}; photoReferences = {}; preparedJobId = null;
  loadWorkspace({});
  uploading = true; let saved = 0; updateSubmit();
  try {
    for (const file of files) {
      if (file.size > 10 * 1024 * 1024) throw new Error(`${file.name} 超过单张 10 MB 上限。`);
      if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) throw new Error('只支持 PNG、JPEG 和 WebP 图片。');
      const asset = await api('/api/images/uploads', { name: file.name, dataUrl: await readAsDataURL(file), workspace: 'quick' });
      if (new URLSearchParams(location.search).has('image')) history.replaceState(null,'',location.pathname);
      references.push(asset); saved++; hadSource = true; adoptedAnalysisId = null; autoAnalysisRequestId = null; promptInput.value = ''; analysisCurrent = null; await resolveDraftReferences();
    }
    resetResult(); renderGoal(); renderViews(); saveDraft(); toast(objective === 'photo' ? '照片已保存，正在自动分析主体与背景并准备干净图提示词。' : '照片已保存，正在自动分析缺损并准备修复提示词。');
  } catch (error) { toast(error.message); }
  finally { uploading = false; $('#reference-files').value = ''; schedulePreview(); updateSubmit(); analysisControls(); }
  if (saved && mode() !== 'generate') { if (!analysisServiceState) await refreshAnalysis(); await submitAnalysis('analyze'); }
}
$('#reference-files').addEventListener('change', event => uploadFiles([...event.target.files]));
const uploadArea = $('#upload-area');
uploadArea.tabIndex = 0;
uploadArea.addEventListener('keydown', event => { if (['Enter', ' '].includes(event.key)) { event.preventDefault(); $('#reference-files').click(); } });
for (const eventName of ['dragenter', 'dragover']) $('#references-section').addEventListener(eventName, event => { event.preventDefault(); uploadArea.classList.add('dragging'); });
for (const eventName of ['dragleave', 'drop']) $('#references-section').addEventListener(eventName, event => { event.preventDefault(); uploadArea.classList.remove('dragging'); });
$('#references-section').addEventListener('drop', event => uploadFiles([...event.dataTransfer.files]));
modeInputs.forEach(input => input.addEventListener('change', () => { setMode(input.value); if (!currentJob) renderReferences(); }));
promptInput.addEventListener('input', saveDraft);
$('#image-size').addEventListener('change', saveDraft); $('#image-quality').addEventListener('change', saveDraft);
function renderJob(job) {
  const changed = currentJob?.id !== job.id;
  if (changed && currentJob) resetViews();
  currentJob = job;
  $('#multiview-panel').hidden = !job.result;
  if (changed || !viewCurrent) refreshViews();
  queueMicrotask(() => document.dispatchEvent(new Event('analysis-context')));
  const error = $('#result-error');
  error.hidden = !['failed', 'uncertain', 'download_failed'].includes(job.state);
  error.textContent = error.hidden ? '' : `${stateNames[job.state]} · ${job.message || '请检查任务状态后重试。'}`;
  setImage($('#original-stage'), job.originalReferences?.[0] || job.references[0], job.mode === 'generate' ? '本次为文字生图' : '没有参考图');
  $('#result-subtitle').textContent = job.references[0]?.kind === 'result' ? '此版本使用了 AI 图作输入；左侧优先展示追溯到的原始照片。' : '对照现存轮廓与纹饰 · 点击图片可放大查看';
  $('#submitted-prompt-details').hidden = false;
  $('#submitted-prompt').textContent = job.effectivePrompt || '旧记录未保存当时的完整系统规则，仅记录用户提示词；不能把当前规则当成当时的真实请求。\n用户提示词：\n' + job.prompt;
  setImage($('#result-stage'), job.result, ['queued', 'running'].includes(job.state) ? '图像正在生成，请稍候' : '暂无可预览结果');
  $('#result-actions').hidden = !job.result;
  $('#recover-result').hidden = !['uncertain', 'download_failed'].includes(job.state);
  if (job.result) $('#download-image').href = `${job.result.url}?download=1`;
  $('#select-result').textContent = '仅用主图建模';
  $('#select-result').disabled = modelSubmitting || job.state !== 'success';
  if (objective === 'photo') renderGoal();
  saveDraft();
  const elapsed = job.durationMs == null ? Math.max(0, Math.round((Date.now() - new Date(job.createdAt).getTime()) / 1000)) : Math.round(job.durationMs / 1000);
  $('#job-meta').textContent = `${job.objective === 'photo' ? '干净建模图' : modeNames[job.mode]} · ${new Date(job.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })} · ${elapsed} 秒${job.upstreamTaskId ? ' · 服务商任务 ' + job.upstreamTaskId : ''}`;
}
function renderHistory() {
  const list = $('#history-list'); list.replaceChildren();
  $('#history-count').textContent = completedModels.length;
  $('#selection-state').textContent = currentJob?.result ? (objective === 'photo' ? '干净图' : '复原图')+'已就绪，可直接建模或先生成四视图' : references.length ? '等待提示词与'+(objective === 'photo' ? '干净图' : '复原图') : '从一张'+(objective === 'photo' ? '实拍' : '破损')+'照片开始';
  $('#next-models').hidden = true;
  if (!completedModels.length) { const p = document.createElement('p'); p.className = 'empty-history'; p.textContent = '完成第一个模型后，作品会自动出现在这里。'; list.append(p); }
  for (const model of completedModels) {
    const link = document.createElement('a'); link.className = 'history-item'; link.href = `/models?job=${encodeURIComponent(model.id)}`;
    const img = document.createElement('img'); img.className = 'history-thumb'; img.src = model.source.url; img.alt = '已完成作品的复原图';
    const copy = document.createElement('div'); copy.className = 'history-copy'; const title = document.createElement('strong'); title.textContent = model.multiviewJobId ? '四视图复原作品' : '三维复原作品';
    const date = document.createElement('p'); date.textContent = new Date(model.createdAt).toLocaleString('zh-CN'); copy.append(title, date); link.append(img, copy); const row=document.createElement('div');row.className='asset-row';row.append(link,assetDeleteButton(model,()=>refresh()));list.append(row);
  }
}
$('#next-models').addEventListener('click', event => { if (event.currentTarget.getAttribute('aria-disabled') === 'true') { event.preventDefault(); toast('请先生成并选定本件文物的复原方案，避免把其他文物送去建模。'); } });
async function refresh() {
  const [status, history, models] = await Promise.all([api('/api/images/status'), api('/api/images/jobs'), api('/api/models/jobs')]);
  if (preservedModel) preservedModel = models.jobs.find(j => j.id === preservedModel.id) || preservedModel;
  completedModels = models.jobs.filter(j => j.state === 'success' && j.modelUrl);
  service = status; jobs = history.jobs;
  $('#service-status').textContent = status.lastCheck?.ok ? '图像服务已认证 · 模型可用' : status.configured ? '已读取本机图像服务配置' : '尚未配置图像服务';
  $('#service-dot').className = status.lastCheck ? status.lastCheck.ok ? 'good' : 'bad' : '';
  if (status.lastCheck) $('#check-feedback').textContent = status.lastCheck.message;
  if (pendingPayload) {
    const found = jobs.find(job => job.requestId === pendingPayload.requestId);
    if (found && found.caseId === activeCaseId) { pendingPayload = null; sessionStorage.removeItem('image-pending'); currentJob = found; }
  }
  if (!currentJob && jobs.length) currentJob = jobs.find(job => job.caseId === activeCaseId);
  if (currentJob) { const latest = jobs.find(job => job.id === currentJob.id); if (latest) renderJob(latest); }
  renderHistory(); renderGoal(); updateSubmit();
  clearTimeout(pollTimer);
  if (status.activeJobId || preservedModel && ['queued','running','uploading','submitting','downloading'].includes(preservedModel.state)) pollTimer = setTimeout(() => refresh().catch(() => { toast('暂时无法读取任务状态，请刷新记录；不会自动重新生成。'); }), 3000);
}
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (submitting || uploading || modelSubmitting || viewsSubmitting || viewStatus?.activeJobId || service?.activeJobId || analysisInFlight()) return;
  if (pendingPayload) return sendGeneration(pendingPayload);
  if (!previewPayload || previewKey !== JSON.stringify(generationInput())) { schedulePreview(); return toast('正在更新提示词，请稍候再生成。'); }
  await sendGeneration(previewPayload);
});
async function sendGeneration(payload) {
  submitting = true;
  pendingPayload = payload; sessionStorage.setItem('image-pending', JSON.stringify(payload)); updateSubmit();
  try {
    const job = await api('/api/images/jobs', payload);
    pendingPayload = null; sessionStorage.removeItem('image-pending');
    renderJob(job); showView('result'); await refresh();
    $('.review-workspace').scrollIntoView({ behavior: 'smooth', block: 'start' });
  } catch (error) {
    if ([400, 403, 404, 409, 413, 422].includes(error.status)) { pendingPayload = null; sessionStorage.removeItem('image-pending'); toast(error.message); }
    else toast(`${error.message} 再次点击将核对同一提交，不会自动新建付费任务。`);
  } finally { submitting = false; updateSubmit(); }
}
$('#check-service').addEventListener('click', async () => {
  $('#check-service').disabled = true; $('#check-feedback').textContent = '正在进行只读鉴权检查…';
  try { const result = await api('/api/images/check', {}); $('#check-feedback').textContent = result.message; await refresh(); if (objective === 'photo' && references[0]) await refreshViews(); }
  catch (error) { $('#check-feedback').textContent = error.message; }
  finally { $('#check-service').disabled = false; }
});
$('#refresh-history').addEventListener('click', () => refresh().catch(error => toast(error.message)));
$('#recover-result').addEventListener('click', async () => {
  if (!currentJob) return;
  $('#recover-result').disabled = true;
  try { renderJob(await api(`/api/images/jobs/${currentJob.id}/recover`, {})); await refresh(); if (objective === 'photo' && references[0]) await refreshViews(); }
  catch (error) { toast(error.message); }
  finally { $('#recover-result').disabled = false; }
});
async function startModel(multiviewJobId = null) {
  const legacyPhoto = !!multiviewJobId && viewCurrent?.viewSet === 'photo';
  if (modelSubmitting || (legacyPhoto ? !references[0] : currentJob?.state !== 'success' || !currentJob?.result)) return;
  if (multiviewJobId && viewCurrent?.viewSet !== 'photo' && (viewCurrent?.viewSet === 'vertical' || !viewsReviewed())) return toast('请先核对本组的前后方向、左右侧面与姿态。');
  const sourceId = legacyPhoto ? references[0].id : currentJob.id;
  modelSubmitting = true; $('#model-from-views').disabled = true; updateSubmit(); $('#select-result').disabled = true; $('#select-result').textContent = '正在提交建模…';
  try {
    const status = await api('/api/models/status');
    if (!status.configured) throw new Error('请先在服务设置中配置 Tripo。');
    if (status.activeJobId) throw new Error('已有建模任务进行中，请在三维建模页查看进度。');
    let pending = JSON.parse(sessionStorage.getItem('model-pending') || 'null');
    if (pending && ((pending.sourceJobId || pending.sourceAssetId) !== sourceId || (pending.multiviewJobId || null) !== multiviewJobId)) throw new Error('另一张图的建模提交尚待核对，请先进入三维建模页查看。');
    if (!legacyPhoto) await api(`/api/images/jobs/${sourceId}/select`, {});
    pending ||= { requestId: crypto.randomUUID(), ...(legacyPhoto ? {sourceAssetId:sourceId} : {sourceJobId:sourceId}), multiviewJobId, ...(multiviewJobId && !legacyPhoto ? {orientationReviewJobId:multiviewJobId} : {}), profile: 'web' };
    sessionStorage.setItem('model-pending', JSON.stringify(pending));
    const model = await api('/api/models/jobs', pending);
    preservedModel = model; saveDraft();
    sessionStorage.removeItem('model-pending');
    location.href = `/models?job=${encodeURIComponent(model.id)}`;
  } catch (error) {
    if ([400,403,404,409,413,422].includes(error.status)) sessionStorage.removeItem('model-pending');
    toast(error.message);
  } finally { modelSubmitting = false; renderViews(); updateSubmit(); $('#select-result').disabled = false; $('#select-result').textContent = '仅用主图建模'; }
}
$('#select-result').addEventListener('click', () => startModel());
$('#model-from-views').addEventListener('click', () => { if (viewCurrent?.state === 'success' && (viewCurrent.viewSet === 'photo' ? !currentJob && viewCurrent.sourceAssetId === references[0]?.id : viewCurrent.sourceJobId === currentJob?.id)) startModel(viewCurrent.id); });
$('#reuse-result').addEventListener('click', () => {
  if (!currentJob?.result) return;
  if (caseBusy()) return toast('请先等待当前任务完成。');
  const source = currentJob; saveDraft();
  loadWorkspace({ id: source.caseId || crypto.randomUUID(), references: [...(source.originalReferences || []), source.result].slice(0, 4), prompt: source.prompt, context: source.context || {} });
  toast('已带回该版本的原始照片与 AI 辅助图，请核对结构后修改要求。'); form.scrollIntoView({ behavior: 'smooth', block: 'start' });
});
$('#download-record').addEventListener('click', () => {
  if (!currentJob) return;
  const record = { ...currentJob, note: 'AI 数字复原推测，非历史真实性证明。' };
  const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a'); a.href = url; a.download = `image-record-${currentJob.id}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
});
// DeepSeek analysis is independent of image/model generation; applying a prompt never submits.
let analysisServiceState = null, analysisJobs = [], analysisCurrent = null, analysisSubmitting = false, analysisTimer, analysisPending = null;
try { analysisPending = JSON.parse(sessionStorage.getItem('analysis-pending') || 'null'); } catch { /* Ignore damaged draft */ }
const analysisNames = { queued: '分析已记录', running: '正在分析图片', success: '分析完成 · 请核对', failed: '分析未完成', uncertain: '分析结果待确认' };
function analysisControls() {
  const busy = uploading || analysisSubmitting || !!analysisServiceState?.activeJobId;
  $('#analyze-source').disabled = busy || !analysisServiceState?.configured || !references.length || mode() === 'generate' || !!analysisPending;
  $('#analysis-start').disabled = $('#analyze-source').disabled;
  $('#analysis-start').textContent = analysisSubmitting || analysisServiceState?.activeJobId ? '正在分析，请稍候…' : '重新分析当前原图';
  $('#analyze-source').textContent = busy ? 'AI 正在分析…' : '重新分析照片';
  $('#analysis-start-hint').textContent = uploading ? '图片正在保存，请稍候。' : busy ? '已有分析任务处理中，不会重复提交。' : !analysisServiceState ? '分析状态尚未读取，请稍候或点击刷新分析。' : !analysisServiceState.configured ? '请先配置 DeepSeek 密钥。' : analysisPending ? '上次提交需要核对，请点击“核对上次提交”。' : mode() === 'generate' ? '文字生图模式不分析原图，请切回文物复原或参考图编辑。' : !references.length ? '请先在左侧上传原始照片。' : '上传后自动分析；如果需要调整方案，可重新分析。';
  $('#review-result').disabled = busy || !analysisServiceState?.configured || currentJob?.state !== 'success' || !currentJob?.references?.length || !!analysisPending;
  $('#retry-analysis').hidden = !analysisPending; $('#retry-analysis').disabled = busy;
  $('#apply-analysis').disabled = uploading || submitting || !!service?.activeJobId || !!pendingPayload;
  promptInput.readOnly = busy;
  $('#reference-files').disabled = busy || submitting || !!service?.activeJobId;
  for (const el of document.querySelectorAll('#restoration-context select, #restoration-context textarea, [name=mode]')) el.disabled = busy;
  if (busy) $('#workflow-hint').textContent = '正在识别缺损 → 制定修复方案 → 自动生成提示词…';
  else if (!analysisServiceState) $('#workflow-hint').textContent = '正在读取分析服务状态…';
  else if (!analysisServiceState.configured) $('#workflow-hint').textContent = 'DeepSeek 尚未配置，请到服务设置检查。';
  else if (analysisCurrent && ['failed','uncertain'].includes(analysisCurrent.state)) $('#workflow-hint').textContent = analysisCurrent.message + ' 可点击重新分析。';
  else if (adoptedAnalysisId) $('#workflow-hint').textContent = '修复方案已准备好，阅读下方提示词后即可生成。';
  else if (!references.length) $('#workflow-hint').textContent = '上传一张破损照片，AI 会自动准备修复方案。';
  else if (!analysisInFlight()) $('#workflow-hint').textContent = promptInput.value.trim() ? '阅读下方修复提示词后即可生成；也可重新分析照片。' : '可点击重新分析，自动准备修复提示词。';
  if (objective === 'photo') {
    for (const id of ['workflow-hint','analysis-start-hint']) { const el=$('#'+id); el.textContent=el.textContent.replaceAll('识别缺损','识别主体与背景').replaceAll('修复方案','净化方案').replaceAll('修复提示词','干净图提示词').replaceAll('破损照片','实拍照片'); }
  }
  updateSubmit();
}
document.addEventListener('analysis-context', analysisControls);
modeInputs.forEach(input => input.addEventListener('change', analysisControls));
function analysisSection(title, values) {
  const section = document.createElement('section'), h = document.createElement('h3'), list = document.createElement('ul'); h.textContent = title;
  for (const value of values.length ? values : ['本次未列出。']) { const li = document.createElement('li'); li.textContent = value; list.append(li); }
  section.append(h, list); return section;
}
function renderAnalysis(job) {
  analysisCurrent = job;
  $('#analysis-dot').hidden = job.state !== 'success';
  try { sessionStorage.setItem('analysis-selected', job.id); } catch {}
  $('#analysis-state').textContent = analysisNames[job.state] || job.state; $('#analysis-message').textContent = job.message;
  $('#analysis-inputs').replaceChildren();
  job.images.forEach((asset, index) => { const figure = document.createElement('figure'), img = document.createElement('img'), caption = document.createElement('figcaption'); img.src = asset.url; img.alt = asset.name; caption.textContent = job.kind === 'review' && index === job.images.length - 1 ? job.objective === 'photo' ? '待评审的 AI 干净图' : '待评审的 AI 复原图' : `${asset.kind === 'result' ? 'AI 参考' : '原始参考'} ${index + 1}`; figure.append(img, caption); $('#analysis-inputs').append(figure); });
  $('#analysis-meta').textContent = `${job.kind === 'review' ? job.objective === 'photo' ? '原图 / 干净图对比' : '原图 / 复原图对比' : '原图分析'} · ${new Date(job.createdAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })} · ${job.returnedModel || job.model}${job.durationMs ? ' · ' + Math.round(job.durationMs / 1000) + ' 秒' : ''}${job.usage?.total_tokens ? ' · ' + job.usage.total_tokens + ' tokens' : ''}`;
  $('#analysis-output').hidden = !job.result;
  if (!job.result) return;
  if (job.kind === 'analyze' && job.requestId === autoAnalysisRequestId && job.id !== adoptedAnalysisId) adoptAnalysis(job);
  const questions = job.result.structuralQuestions ?? (job.result.uncertainties || []).filter(s => /口|足|正面|背面|形态|器形|轮廓|修复层/.test(s)).slice(0, 5);
  $('#structure-questions').replaceChildren();
  for (const q of questions.length ? questions : ['模型未列出关键歧义，仍请核对正反面及本次采用的结构。']) { const li = document.createElement('li'); li.textContent = q; $('#structure-questions').append(li); }
  $('#analysis-summary').textContent = job.result.summary;
  $('#analysis-findings').replaceChildren(analysisSection('照片特征 · 模型观察待核对', job.result.observations), analysisSection('建议保留的约束', job.result.constraints), analysisSection('推测与不确定性', job.result.uncertainties), analysisSection('建议人工核对的位置', job.result.landmarks));
  const issues = $('#analysis-issues'); issues.replaceChildren();
  if (job.result.issues.length) { const h = document.createElement('h3'); h.textContent = '模型提出的疑点 · 请逐项核对'; issues.append(h); }
  for (const issue of job.result.issues) { const card = document.createElement('div'); card.className = 'analysis-issue'; const title = document.createElement('strong'); title.textContent = `${issue.area} · ${issue.basis === 'visible_change' ? '模型认为可见变化，仍需核对' : '不确定，需人工确认'}`; const evidence = document.createElement('p'); evidence.textContent = '依据：' + issue.evidence; const suggestion = document.createElement('p'); suggestion.textContent = '建议：' + issue.suggestion; card.append(title, evidence, suggestion); issues.append(card); }
  if ($('#analysis-prompt').dataset.job !== job.id) { let preview = job.result.prompt; try { preview = sessionStorage.getItem('analysis-preview-' + job.id) ?? preview; } catch {} $('#analysis-prompt').value = preview; $('#analysis-prompt').dataset.job = job.id; $('#analysis-applied').textContent = ''; }
}
async function refreshAnalysis() {
  clearTimeout(analysisTimer);
  try {
    const [status, data] = await Promise.all([api('/api/analysis/status'), api('/api/analysis/jobs')]); analysisServiceState = status; analysisJobs = data.jobs;
    $('#analysis-service').textContent = status.lastCheck?.message || (status.configured ? '已读取 DeepSeek 配置 · 调用 deepseek-flash（官方当前 Flash，支持看图）' : '尚未配置 DeepSeek；原有生图与建模仍可使用。');
    if (analysisPending) { const found = analysisJobs.find(j => j.requestId === analysisPending.requestId); if (found) { analysisCurrent = found; analysisPending = null; sessionStorage.removeItem('analysis-pending'); } }
    if (!analysisCurrent && analysisJobs.length) analysisCurrent = analysisJobs.find(j => (!j.caseId || j.caseId === activeCaseId) && j.id === adoptedAnalysisId) || analysisJobs.find(j => j.caseId === activeCaseId);
    if (analysisCurrent) { const latest = analysisJobs.find(j => j.id === analysisCurrent.id); if (latest) renderAnalysis(latest); }
    analysisControls();
    if (!status.activeJobId && adoptedAnalysisId && !previewPayload && !analysisSubmitting) schedulePreview();
    if (status.activeJobId) analysisTimer = setTimeout(refreshAnalysis, 2500);
  } catch { $('#analysis-service').textContent = '暂时无法读取分析服务，请点击刷新分析。'; if (analysisServiceState?.activeJobId) analysisTimer = setTimeout(refreshAnalysis, 5000); }
}
async function submitAnalysis(kind) {
  if (uploading) return toast('请等待图片保存完成后再分析。');
  if (analysisSubmitting || analysisServiceState?.activeJobId) return;
  if (!analysisServiceState?.configured) return toast('DeepSeek 尚未配置，无法自动分析，请检查服务设置。');
  if (!analysisPending && kind === 'analyze' && !references.length) return toast('请先在编辑区上传原始照片。');
  if (!analysisPending && kind === 'review' && !currentJob?.references?.length) return toast('请选择一个带原始参考图的成功复原任务。');
  analysisPending ||= kind === 'review' ? { requestId: crypto.randomUUID(), kind, objective, imageJobId: currentJob.id, notes: currentJob.prompt, caseId: currentJob.caseId || activeCaseId, context: currentJob.context || readContext() } : { requestId: crypto.randomUUID(), kind, objective, referenceIds: references.map(r => r.id), notes: promptInput.value.trim(), caseId: activeCaseId, context: readContext(), workspace: 'quick' };
  if (analysisPending.kind === 'analyze') { autoAnalysisRequestId = analysisPending.requestId; saveDraft(); }
  sessionStorage.setItem('analysis-pending', JSON.stringify(analysisPending)); analysisSubmitting = true; analysisControls();
  if (kind === 'review') showView('analysis');
  else { showView('result'); }
  try { const job = await api('/api/analysis/jobs', analysisPending); analysisPending = null; sessionStorage.removeItem('analysis-pending'); renderAnalysis(job); await refreshAnalysis(); }
  catch (error) { if ([400,403,404,409,413].includes(error.status)) { analysisPending = null; sessionStorage.removeItem('analysis-pending'); } toast(error.message); }
  finally { analysisSubmitting = false; analysisControls(); if (adoptedAnalysisId) schedulePreview(); }
}
$('#analysis-prompt').addEventListener('input', () => { if (analysisCurrent) try { sessionStorage.setItem('analysis-preview-' + analysisCurrent.id, $('#analysis-prompt').value); } catch {} });
$('#analyze-source').addEventListener('click', () => submitAnalysis('analyze'));
$('#analysis-start').addEventListener('click', () => submitAnalysis('analyze'));
$('#review-result').addEventListener('click', () => submitAnalysis('review'));
$('#retry-analysis').addEventListener('click', () => submitAnalysis(analysisPending?.kind));
$('#refresh-analysis').addEventListener('click', refreshAnalysis);
$('#check-analysis').addEventListener('click', async () => { $('#check-analysis').disabled = true; try { const check = await api('/api/analysis/check', {}); toast(check.message); await refreshAnalysis(); } catch (error) { toast(error.message); } finally { $('#check-analysis').disabled = false; } });
function adoptAnalysis(job, editedPrompt = job.result?.prompt) {
  if (!job.result || job.caseId !== activeCaseId || (job.objective || 'restore') !== objective) return false;
  const sources = job.kind === 'review' ? job.images.slice(0, -1) : job.images;
  const ids = assets => assets.filter(a => a.kind !== 'result').map(a => a.id).sort().join(',');
  if (ids(sources) !== ids(references)) return false;
  const context = job.result.suggestedContext || { ...readContext(), category: readContext().category === 'unknown' ? 'other' : readContext().category, decision: ('AI 推测方案（非实物鉴定）：' + job.result.summary).slice(0, 1500) };
  fillContext(context); promptInput.value = editedPrompt; adoptedAnalysisId = job.id;
  saveDraft(); analysisControls(); schedulePreview();
  $('#workflow-hint').textContent = objective === 'photo' ? '干净图提示词已准备好，阅读后即可生成。' : '修复方案已准备好，阅读下方提示词后即可生成。';
  return true;
}
$('#apply-analysis').addEventListener('click', () => {
  if (caseBusy()) return toast('请等待当前任务完成。');
  if (!analysisCurrent || !adoptAnalysis(analysisCurrent, $('#analysis-prompt').value.trim())) return toast('这份分析与当前文物原图不一致，不能采用。');
  toast('已更新左侧提示词，阅读后即可生成。');
});
$('#download-analysis').addEventListener('click', () => { if (!analysisCurrent?.result) return; const record = { ...analysisCurrent, editedPrompt: $('#analysis-prompt').value, note: 'AI 视觉分析建议，不是历史鉴定、尺寸测量或自动缺损分割。' }; const url = URL.createObjectURL(new Blob([JSON.stringify(record, null, 2)], { type: 'application/json' })); const a = document.createElement('a'); a.href = url; a.download = `analysis-${analysisCurrent.id}.json`; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000); });
let viewCurrent = null, viewStatus = null, viewsSubmitting = false, viewsPending = null, viewTimer;
try { viewsPending = JSON.parse(sessionStorage.getItem('multiview-pending') || 'null'); } catch {}
let reviewedViewId = null;
const reviewInputs = ['#review-back','#review-sides','#review-shape'];
function viewsReviewed() { return reviewedViewId === viewCurrent?.id && reviewInputs.every(id => $(id).checked); }
reviewInputs.forEach(id => $(id).addEventListener('change', renderViews));
const viewLabels = { top: '俯视', bottom: '仰视', left: '左侧', right: '右侧', front:'正面', back:'背面' };
function resetViews() { clearTimeout(viewTimer); viewCurrent = null; viewsWaiting.update({active:false}); $('#multiview-panel').hidden = true; $('#views-grid').replaceChildren(); delete $('#views-grid').dataset.renderKey; $('#model-from-views').hidden = true; }
function renderViews() {
  const legacyPhoto = objective === 'photo' && !currentJob && viewCurrent?.viewSet === 'photo';
  const match = !!viewCurrent && (legacyPhoto ? viewCurrent.sourceAssetId === references[0]?.id && viewCurrent.viewSet === 'photo' : viewCurrent.sourceJobId === currentJob?.id);
  const success = match && viewCurrent.state === 'success';
  const vertical = match && viewCurrent.viewSet === 'vertical';
  const duplicate = match && viewCurrent.errorCode === 'duplicate_views';
  if (reviewedViewId !== viewCurrent?.id) { reviewedViewId = viewCurrent?.id; reviewInputs.forEach(id => { $(id).checked = false; }); }
  $('#views-review').hidden = !success || vertical || legacyPhoto;
  $('#regenerate-views').hidden = !match || vertical || legacyPhoto || !(success || duplicate || viewCurrent.state === 'failed');
  $('#regenerate-views').disabled = viewsSubmitting || !!viewStatus?.activeJobId || !!viewsPending;
  $('.multiview-heading .micro').textContent = vertical ? '旧版上下视图 · 保留查看' : '正面 / 左侧 / 背面 / 右侧 · 点击缩略图放大核对';
  $('.views-footnote').textContent = vertical ? '旧版视图缺少背面，请生成前左后右视图后建模。' : legacyPhoto ? '历史照片视图 · 保留原始参考' : 'Tripo 同组生成、同组建模 · 整组重做按次计费';
  const busy = viewsSubmitting || !!viewStatus?.activeJobId;
  const recoverable = match && ['uncertain','download_failed','needs_review'].includes(viewCurrent.state);
  $('#multiview-panel').hidden = legacyPhoto ? false : !currentJob?.result;
  $('#generate-views').disabled = busy || (legacyPhoto ? false : !currentJob?.result) || !viewsPending && (success && !vertical || duplicate);
  $('#generate-views').textContent = busy ? '正在处理四视图…' : viewsPending ? '核对四视图提交' : vertical && success ? '升级为前左后右四视图' : success ? '四视图已生成' : duplicate ? '视图重复，需重做' : recoverable ? viewCurrent.viewSet === 'vertical' ? viewCurrent.directions.some(d=>['failed','duplicate'].includes(d.state)) ? '重做失败视角（收费）' : '继续完成剩余视角' : viewCurrent.taskId ? '找回已生成的四视图' : '核对原任务' : viewsPending ? '核对四视图提交' : '生成前左后右四视图';
  $('#views-message').textContent = vertical && success ? '这组是旧版上下视图，缺少背面约束。点击升级，从当前主图生成完整四个方向。' : match ? viewCurrent.message : '使用清晰正面主图，主体完整、背景简洁。Tripo 一次生成四个方向，按服务商用量计费。';
  $('#views-recovery').hidden = duplicate || !match || !['uncertain','download_failed','needs_review'].includes(viewCurrent.state);
  $('#views-task-id').hidden = !!viewCurrent?.taskId || ['vertical','photo'].includes(viewCurrent?.viewSet);
  $('#recover-views').textContent = ['vertical','photo'].includes(viewCurrent?.viewSet) ? '查询已提交视角并继续剩余生成' : '继续查询四视图';
  $('#model-from-views').textContent = legacyPhoto ? '确认视图，开始 Tripo 建模' : '确认四视图，开始建模';
  $('#recover-views').disabled = busy;
  $('#model-from-views').hidden = !success || vertical;
  $('#model-from-views').disabled = !success || vertical || !legacyPhoto && !viewsReviewed() || modelSubmitting || !!preservedModel && !['failed','expired'].includes(preservedModel.state) && (preservedModel.state !== 'success' || preservedModel.multiviewJobId === viewCurrent?.id);
  updateSubmit();
  const active = viewsSubmitting || match && ['queued','uploading','submitting','running','downloading'].includes(viewCurrent.state);
  const downloading = match && viewCurrent.state === 'downloading';
  viewsWaiting.update({active, id:viewCurrent?.id || 'views-submit', startedAt: viewCurrent?.resumedAt || viewCurrent?.createdAt, kind:'views', image:legacyPhoto ? references[0]?.url : currentJob?.result?.url,
    kicker:'四个方向 · 同一件器物', labels:vertical ? ['上','下','左','右'] : ['前','左','后','右'], title:downloading ? '四视图已生成，正在保存' : viewCurrent?.recovering ? '正在找回原任务的四视图' : '正在推演器物的四个角度',
    detail:match ? viewCurrent.message : '正在提交当前建模图。', steps:[legacyPhoto ? '保留原始照片' : '上传主图','生成四视图','保存四张图'],
    phase:downloading ? 2 : match && viewCurrent.state === 'running' ? 1 : 0, progress:match ? viewCurrent.progress : null,
    progressLabel:viewCurrent?.viewSet === 'vertical' ? '视角完成进度' : '服务商返回的进度', progressText:viewCurrent?.viewSet === 'vertical' ? `已保存 ${viewCurrent.views.length} / 4 张` : undefined,
    note:legacyPhoto ? '实拍原图保留现状；未拍到的侧面为 AI 推测，确认后才建模。' : '保持同一主体与姿态，完成后核对前后方向和左右轮廓。'});
  if (legacyPhoto) {
    $('#generate-views').textContent = busy ? '正在准备四视图…' : success ? '四视图已就绪' : recoverable ? '恢复 / 继续四视图' : viewsPending ? '核对上次提交' : '准备四视图';
    $('#views-message').textContent = match ? viewCurrent.message : `原图作正面，补齐 ${3-Object.keys(photoReferences).length} 个未提供视角；未拍到的部分为 AI 推测。`;
  }
  if (legacyPhoto && !currentJob?.result) setImage($('#result-stage'), match ? viewCurrent.views.find(v=>v.view==='front') : references[0], '上传后在此预览');
  const grid = $('#views-grid');
  const gridKey = JSON.stringify([viewCurrent?.id, active, success, busy, viewCurrent?.views]);
  if (grid.dataset.renderKey !== gridKey) {
    grid.dataset.renderKey = gridKey; grid.replaceChildren();
    for (const key of (vertical ? ['top','bottom','left','right'] : ['front','left','back','right'])) {
      const v = match && viewCurrent.views.find(v => v.view === key);
      if (v) {
        const figure = document.createElement('figure'), img = document.createElement('img'), cap = document.createElement('figcaption');
        img.src = v.url; img.alt = viewLabels[v.view] + (v.provenance === 'original' ? ' · 实拍原图' : ' · AI 推测');
        const preview = document.createElement('button'); preview.type = 'button'; preview.className = 'view-preview';
        preview.setAttribute('aria-label', `放大${viewLabels[v.view]}图`); preview.append(img); preview.addEventListener('click', () => { setImage($('#result-stage'), v, '暂无图像'); $('#result-subtitle').textContent = viewLabels[v.view] + (v.provenance === 'original' ? ' · 实拍原图' : ' · AI 推测'); });
        cap.textContent = viewLabels[v.view] + (legacyPhoto ? v.provenance === 'original' ? ' · 实拍原图' : ' · AI 推测' : '');
        const actions = document.createElement('div'); actions.className = 'view-actions';
        const link = document.createElement('a'); link.href = v.url + '?download=1'; link.download = v.view; labelAction(link, `下载${viewLabels[v.view]}图`, 'download'); actions.append(link);
        if (viewCurrent.viewSet === 'photo' && v.view !== 'front') {
          const redo = document.createElement('button'); redo.type = 'button'; labelAction(redo, `重做${viewLabels[v.view]}图（收费）`, 'redo');
          redo.disabled = busy; redo.addEventListener('click', () => refineView(v.view)); actions.append(redo);
          if (legacyPhoto) { const label = document.createElement('label'); label.className = 'text-button'; label.textContent = '替换实拍'; const input = document.createElement('input'); input.type = 'file'; input.accept = 'image/png,image/jpeg,image/webp'; input.setAttribute('aria-label', '替换'+viewLabels[v.view]+'实拍'); input.addEventListener('change', () => replacePhotoView(v.view, input.files[0])); label.append(input); actions.append(label); }
        }
        figure.append(preview, cap, actions); grid.append(figure);
      }
      else if (active || legacyPhoto) {
        const card = document.createElement('div'); card.className = 'view-placeholder'; card.textContent = viewLabels[key] + ' · 待就绪';
        if (match && !busy && legacyPhoto && key !== 'front') { const redo=document.createElement('button');redo.type='button';redo.className='secondary-button';redo.textContent='重做'+viewLabels[key]+'（收费）';redo.addEventListener('click',()=>refineView(key));card.append(redo);const replace=document.createElement('input');replace.type='file';replace.accept='image/png,image/jpeg,image/webp';replace.setAttribute('aria-label','替换'+viewLabels[key]+'实拍');replace.addEventListener('change',()=>replacePhotoView(key,replace.files[0]));card.append(replace); }
        grid.append(card);
      }
    }
  }
}
async function refreshViews() {
  clearTimeout(viewTimer);
  const legacyPhoto = objective === 'photo' && !currentJob;
  const sourceId = legacyPhoto ? references[0]?.id : currentJob?.id, owner = activeCaseId; if (!sourceId) return;
  try {
    const [state, data] = await Promise.all([api('/api/multiview/status'), api('/api/multiview/jobs')]);
    if (activeCaseId !== owner || sourceId !== (objective === 'photo' && !currentJob ? references[0]?.id : currentJob?.id)) return;
    viewStatus = state;
    if (viewsPending) { const found = data.jobs.find(j => j.requestId === viewsPending.requestId); if (found) { viewCurrent = found; syncPhotoReferences(found); viewsPending = null; sessionStorage.removeItem('multiview-pending'); } }
    const desiredRefs = Object.fromEntries(Object.entries(photoReferences).map(([side,asset])=>[side,asset.id]));
    const photoMatch = j => j.sourceAssetId === sourceId && j.viewSet === 'photo' && (j.preparedJobId || null) === preparedJobId && ['left','back','right'].every(side => (j.referenceViews?.[side] || null) === (desiredRefs[side] || null));
    const available = data.jobs.filter(j => j.state !== 'expired' && (legacyPhoto ? photoMatch(j) : j.sourceJobId === sourceId && ['horizontal','vertical',undefined].includes(j.viewSet)));
    viewCurrent = available.find(j => j.id === viewCurrent?.id && j.viewSet !== 'vertical') || available.find(j => j.viewSet !== 'vertical') || available[0] || null;
    saveDraft();
    renderViews();
    if (state.activeJobId) viewTimer = setTimeout(refreshViews, 2500);
  } catch { $('#views-message').textContent = '暂时无法查询四视图。可重新打开页面继续查询，不会自动重提。'; if (viewStatus?.activeJobId) viewTimer = setTimeout(refreshViews, 5000); }
}
$('#generate-views').addEventListener('click', async () => {
  if (!currentJob && viewCurrent?.viewSet === 'photo') return preparePhotoViews();
  if (viewsSubmitting || viewStatus?.activeJobId || !currentJob?.result) return;
  if (!viewsPending && viewCurrent?.sourceJobId === currentJob.id && ['uncertain','download_failed','needs_review'].includes(viewCurrent.state)) {
    if (viewCurrent.viewSet === 'vertical') return recoverViews(viewCurrent.directions.some(d=>['failed','duplicate'].includes(d.state)));
    if (viewCurrent.taskId) return recoverViews();
    $('#views-task-id').focus(); return toast('请填写原任务号后继续查询，避免重复生成。');
  }
  if (viewsPending && viewsPending.sourceJobId !== currentJob.id) return toast('另一次四视图提交仍待核对，请先恢复原操作。');
  viewsPending ||= { requestId: crypto.randomUUID(), sourceJobId: currentJob.id, viewSet:'horizontal' };
  sessionStorage.setItem('multiview-pending', JSON.stringify(viewsPending)); viewsSubmitting = true; renderViews();
  try { viewCurrent = await api('/api/multiview/jobs', viewsPending); viewsPending = null; sessionStorage.removeItem('multiview-pending'); await refreshViews(); }
  catch (e) { if ([400,403,404,409,413,422].includes(e.status)) { viewsPending = null; sessionStorage.removeItem('multiview-pending'); } toast(e.message); }
  finally { viewsSubmitting = false; renderViews(); }
});
$('#regenerate-views').addEventListener('click', async () => {
  if (!viewCurrent || !currentJob?.result || viewsSubmitting || viewStatus?.activeJobId || viewsPending) return;
  if (!confirm('整组重做会提交一次新的 Tripo 四视图任务并计费。原来的四张图会保留。确定重新生成？')) return;
  viewsPending = {requestId:crypto.randomUUID(),sourceJobId:currentJob.id,viewSet:'horizontal',regenerateOf:viewCurrent.id};
  sessionStorage.setItem('multiview-pending',JSON.stringify(viewsPending));
  viewsSubmitting = true; renderViews();
  try { viewCurrent = await api('/api/multiview/jobs',viewsPending); viewsPending = null; sessionStorage.removeItem('multiview-pending'); await refreshViews(); }
  catch(e) { if([400,403,404,409,413,422].includes(e.status)){viewsPending=null;sessionStorage.removeItem('multiview-pending');} toast(e.message); }
  finally { viewsSubmitting = false; renderViews(); }
});
async function refineView(view) {
  if(!viewCurrent || viewsSubmitting || viewStatus?.activeJobId) return;
  if(viewsPending && (viewsPending.refineOf !== viewCurrent.id || viewsPending.views?.[0] !== view)) return toast('还有一次视角提交待核对，请先刷新或核对原视角。');
  viewsPending ||= {requestId:crypto.randomUUID(),...(viewCurrent.viewSet === 'photo' ? {sourceAssetId:references[0].id} : {sourceJobId:currentJob.id}),refineOf:viewCurrent.id,views:[view]};
  sessionStorage.setItem('multiview-pending',JSON.stringify(viewsPending));
  viewsSubmitting=true; renderViews();
  try { viewCurrent=await api(`/api/multiview/jobs/${viewsPending.refineOf}/refine`,viewsPending); syncPhotoReferences(viewCurrent); viewsPending=null;sessionStorage.removeItem('multiview-pending');await refreshViews(); }
  catch(e) {if([400,403,404,409,413,422].includes(e.status)){viewsPending=null;sessionStorage.removeItem('multiview-pending');}toast(e.message);} finally {viewsSubmitting=false;renderViews();}
}
async function recoverViews(retryFailed = false) { if (!viewCurrent || viewsSubmitting) return; viewsSubmitting = true; renderViews(); try { await api(`/api/multiview/jobs/${viewCurrent.id}/recover`, { taskId: $('#views-task-id').value.trim(), retryFailed: retryFailed === true }); await refreshViews(); } catch (e) { toast(e.message); } finally { viewsSubmitting = false; renderViews(); } }
$('#recover-views').addEventListener('click', recoverViews);
async function initializeWorkspace() {
  let draft; try {
    const shared = JSON.parse(sessionStorage.getItem('shared-workspace-v2') || 'null');
    if (shared) { goalDrafts = shared.goals || {}; objective = shared.objective === 'photo' ? 'photo' : 'restore'; draft = goalDrafts[objective]; }
    else {
      const repair = JSON.parse(sessionStorage.getItem('quick-workspace-v1') || 'null');
      const photo = JSON.parse(sessionStorage.getItem('photo-modeling-draft-v1') || 'null');
      if (repair) goalDrafts.restore = repair;
      if (photo?.source) goalDrafts.photo = {id:crypto.randomUUID(), references:[photo.source], prompt:photo.notes || PHOTO_PROMPT, photoReferences:photo.references, viewCurrent:photo.views, model:photo.model, expiresAt:Date.now()+86400000};
      draft = repair || goalDrafts.photo; objective = repair ? 'restore' : draft ? 'photo' : 'restore';
      if (photo?.source && sessionStorage.getItem('image-workflow') === 'photo' || photo?.model && !['success','failed','expired'].includes(photo.model.state)) { objective='photo';draft=goalDrafts.photo; }
      if (photo?.pending?.type === 'model') { sessionStorage.setItem('model-pending', JSON.stringify(photo.pending.body)); objective='photo';draft=goalDrafts.photo; }
      if (photo?.pending && !viewsPending && photo.pending.type === 'views') { viewsPending = {...photo.pending.body, ...(photo.pending.path?.includes('/refine') ? {refineOf:photo.pending.path.split('/')[4]} : {}), ...(photo.pending.path?.includes('/replace') ? {replaceOf:photo.pending.path.split('/')[4]} : {})}; sessionStorage.setItem('multiview-pending', JSON.stringify(viewsPending)); objective = 'photo'; draft = goalDrafts.photo; }
    }
  } catch {}
  const imageId = new URLSearchParams(location.search).get('image');
  if (imageId) {
    try {
      const image = await api(`/api/images/jobs/${encodeURIComponent(imageId)}`);
      if (image.state !== 'success' || !image.result) throw new Error('该复原图尚未就绪。');
      draft = {id:image.caseId || crypto.randomUUID(),mode:image.mode,prompt:image.prompt,references:image.references,context:image.context,adoptedAnalysisId:image.analysisId,size:image.size,quality:image.quality,expiresAt:Date.now()+86400000};
      objective = image.objective === 'photo' ? 'photo' : 'restore';
      draft.currentJob = image; loadWorkspace(draft);
      await refresh(); analysisControls(); return;
    } catch (e) { toast(e.message || '无法打开指定复原图。'); }
  }
  // No permanent draft library. A single tab-scoped cache only supports the current operation.
  loadWorkspace(draft && draft.expiresAt > Date.now() ? draft : {});
  try { if (references.length) await resolveDraftReferences(); await refresh(); if (objective === 'photo' && references[0]) await refreshViews(); }
  catch (e) { toast(e.message || '无法读取本地工作台。'); }
  analysisControls();
}
function renderGoal() {
  const photo = objective === 'photo', resultName = photo ? '干净图' : '复原图';
  const legacyPhoto = photo && !currentJob && viewCurrent?.viewSet === 'photo';
  document.querySelectorAll('[data-workflow]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.workflow === objective)));
  $('#shared-photo-references').hidden = true;
  const oldModel = $('#existing-photo-model'); oldModel.hidden = !preservedModel && !sessionStorage.getItem('model-pending');
  if (preservedModel) { oldModel.href='/models?job='+encodeURIComponent(preservedModel.id); oldModel.textContent='查看已有建模任务 · '+(preservedModel.message || preservedModel.state); }
  else if (sessionStorage.getItem('model-pending')) { oldModel.href='/models';oldModel.textContent='核对上次建模提交'; }
  document.querySelector('.viewport-header h2').textContent = photo ? '原图与干净图' : '原图与复原方案';
  const captions=document.querySelectorAll('.comparison figcaption'); captions[1].firstChild.textContent=photo ? '干净图 ' : '复原方案 '; captions[1].querySelector('span').textContent=photo ? 'AI 生成' : 'AI 推测';
  $('.editor-heading .title-badge').textContent=photo ? '清理背景 · 保留原貌' : 'AI 辅助推测';
  $('#mode-help').textContent = photo ? '自动分析主体与背景并拟定净化要求。可直接修改提示词；点击文档图标查看完整发送要求。' : '自动分析缺损并拟定补全方法。可直接使用，也可以修改；点击文档图标可查看完整发送要求。';
  document.querySelector('.next-step').hidden=false; document.querySelector('.workflow-guide').hidden=false;
  $('#selection-state').textContent=currentJob?.result ? resultName+'已就绪，可直接建模或先生成四视图' : references.length ? '等待提示词与'+resultName : '从一张'+(photo ? '实拍' : '破损')+'照片开始';
  $('.next-step p').textContent='人像及前后差异明显的文物，建议先生成前左后右四视图，核对后整组建模。“仅用主图建模”只提交当前'+resultName+'。';
  $('.workflow-guide h3').textContent=photo ? '从实拍到干净建模图' : '从残片到完整形体';
  const guide = document.querySelectorAll('.workflow-guide li');
  guide[0].querySelector('p').textContent=photo ? '上传照片，AI 自动识别主体与背景干扰。' : '上传照片，AI 自动识别现存部分与缺损。';
  guide[1].querySelector('strong').textContent=photo ? '审阅干净图' : '审阅复原假设';
  $('#select-result').hidden = false; $('#review-result').hidden = false; $('#reuse-result').hidden = false;
  $('.editor-heading h2').textContent = photo ? '照片建模' : '复原图像';
  $('.editor-heading .eyebrow').textContent = photo ? 'PHOTO MODELING' : 'RESTORE';
  $('#references-section label[for="reference-files"]').textContent = photo ? '上传实拍照片' : '上传破损原图';
  $('#upload-area strong').nextElementSibling.innerHTML = photo ? '拖入实拍照片，或 <b>选择图片</b>' : '拖入破损照片，或 <b>选择图片</b>';
  document.querySelector('.viewport-footer span:last-child').textContent=photo ? 'AI 净化图 · 请核对器形与细节' : 'AI 推测复原 · 非历史原貌证明';
  $('#result-stage').setAttribute('aria-label', photo ? '放大干净图' : '放大复原方案');
  $('#upload-area strong').textContent = photo ? '从一张实拍开始' : '从一张残片开始';
  $('#references-section > .micro').textContent = '上传后自动发送至 DeepSeek '+(photo ? '分析主体与背景并拟定干净图提示词' : '分析缺损并拟定修复提示词')+'，按用量计费。建模完成后才收录作品，中间资料临时缓存 24 小时。';
  $('#prompt-label').textContent = photo ? 'AI 干净图提示词 · 阅读后即可生成' : 'AI 修复提示词 · 阅读后即可生成';
  $('#submit-billing').textContent = '阅读上方提示词后点击生成，将提交 1 次收费生图任务。';
  document.querySelector('[data-tool="mode"]').hidden = photo;
  $('#restoration-context').hidden = photo || mode() === 'generate';
  if (!currentJob && !legacyPhoto) setImage($('#result-stage'), null, resultName+'生成后在此预览');
}
for (const button of document.querySelectorAll('[data-workflow]')) button.addEventListener('click', () => {
  if (button.dataset.workflow === objective) return;
  if (caseBusy() || preservedModel && !['success','failed','expired'].includes(preservedModel.state) || ['uncertain','download_failed'].includes(currentJob?.state) || ['uncertain','download_failed','needs_review'].includes(viewCurrent?.state)) return toast('请先完成或恢复当前任务，再切换目标。');
  saveDraft(); const original = references.find(a => a.kind !== 'result'); objective = button.dataset.workflow; sessionStorage.setItem('image-workflow', objective);
  const targetDraft = goalDrafts[objective];
  loadWorkspace(targetDraft?.references?.length ? targetDraft : {...targetDraft, references:original ? [original] : [], prompt:targetDraft?.prompt || ''});
  if (objective === 'photo') refreshViews();
});
async function uploadAsset(file) {
  if (!file || file.size > 10*1024*1024 || !['image/png','image/jpeg','image/webp'].includes(file.type)) throw new Error('请选择 10 MB 以内的 PNG、JPEG 或 WebP 图片。');
  return api('/api/images/uploads', {name:file.name,dataUrl:await readAsDataURL(file),workspace:'quick'});
}
for (const side of ['left','back','right']) {
  const label = document.createElement('label'); label.textContent = viewLabels[side]+'实拍原图';
  const input = document.createElement('input'); input.type='file'; input.accept='image/png,image/jpeg,image/webp'; input.dataset.sharedSide=side;
  const name = document.createElement('span'), remove = document.createElement('button'); remove.type='button'; remove.textContent='移除';
  input.addEventListener('change', async () => { if(caseBusy() || !input.files[0]) return; uploading=true; updateSubmit(); try { photoReferences[side]=await uploadAsset(input.files[0]); resetViews(); saveDraft(); } catch(e){toast(e.message);} finally{uploading=false;input.value='';schedulePreview();renderGoal();renderViews();updateSubmit();} });
  remove.addEventListener('click', () => { if(caseBusy()) return; delete photoReferences[side]; resetViews();saveDraft();renderGoal();renderViews(); });
  label.append(input,name,remove); $('#shared-reference-inputs').append(label);
}
function syncPhotoReferences(job) {
  if (objective !== 'photo' || job?.viewSet !== 'photo') return;
  photoReferences = Object.fromEntries(Object.entries(job.referenceViews || {}).map(([side,id])=>[side, photoReferences[side]?.id === id ? photoReferences[side] : {id,name:viewLabels[side]+'实拍原图'}]));
}
async function preparePhotoViews() {
  if (uploading || submitting || modelSubmitting || viewsSubmitting || viewStatus?.activeJobId || analysisInFlight() || !references[0]) return;
  if (!viewsPending && viewCurrent && ['uncertain','download_failed','needs_review'].includes(viewCurrent.state)) { const failed=viewCurrent.directions?.filter(d=>['failed','duplicate'].includes(d.state)).map(d=>d.view); if(failed?.length) return refineView(failed[0]); return recoverViews(); }
  if (viewCurrent?.state === 'success' && !viewsPending) return toast('四视图已就绪，请核对后开始建模。');
  viewsPending ||= {requestId:crypto.randomUUID(), viewSet:'photo', sourceAssetId:references[0].id, ...(preparedJobId ? {preparedJobId} : {}), referenceViews:Object.fromEntries(Object.entries(photoReferences).map(([side,asset])=>[side,asset.id])), notes:promptInput.value.trim(), workspace:'quick'};
  sessionStorage.setItem('multiview-pending', JSON.stringify(viewsPending)); viewsSubmitting=true; renderViews();
  try { viewCurrent=await api(viewsPending.replaceOf ? `/api/multiview/jobs/${viewsPending.replaceOf}/replace` : viewsPending.refineOf ? `/api/multiview/jobs/${viewsPending.refineOf}/refine` : '/api/multiview/jobs',viewsPending);syncPhotoReferences(viewCurrent);viewsPending=null;sessionStorage.removeItem('multiview-pending');await refreshViews(); }
  catch(e){if([400,403,404,409,413,422].includes(e.status)){viewsPending=null;sessionStorage.removeItem('multiview-pending');}toast(e.message);}
  finally{viewsSubmitting=false;saveDraft();renderViews();}
}
async function replacePhotoView(view,file) {
  if(caseBusy() || !file) return; uploading=true;updateSubmit();
  try { const asset=await uploadAsset(file); viewsPending={requestId:crypto.randomUUID(),replaceOf:viewCurrent.id,view,assetId:asset.id,sourceAssetId:references[0].id};sessionStorage.setItem('multiview-pending',JSON.stringify(viewsPending));viewCurrent=await api(`/api/multiview/jobs/${viewCurrent.id}/replace`,viewsPending);viewsPending=null;sessionStorage.removeItem('multiview-pending');photoReferences[view]=asset;await refreshViews(); }
  catch(e){if([400,403,404,409,413,422].includes(e.status)){viewsPending=null;sessionStorage.removeItem('multiview-pending');}toast(e.message);}finally{uploading=false;saveDraft();renderGoal();renderViews();}
}
initializeWorkspace();

mountAssetTrash(document.querySelector('#history-list'),()=>refresh());
