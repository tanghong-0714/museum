const SAFE_ID = /^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;

export function dynamicModelProfile(jobId, record) {
  const title = record?.name || '数字复原作品';
  const modelUrl = record?.modelUrl || '';
  const explanation = '该作品来自本机建模任务。名称、年代、馆藏身份与真实修复过程尚未核实。';
  const topic = (kind, brief) => ({ kind, brief, action: '查看任务来源', paragraphs: [brief, explanation], excerpt: 'AI 辅助数字建模 · 生成形体供观察与审阅' });
  return {
    dynamic: true, id: `model-${jobId}`, theme: 'porcelain', nickname: title, title,
    english: 'DIGITAL MODEL', number: 'MODEL', series: '重器新生', category: '本机作品 · 数字建模',
    poem: ['由一张图像出发，', '在微光中观察形体。'],
    description: ['本机任务保存的数字模型，可旋转与缩放查看。', '生成的形体与纹理仍需人工核对。'],
    tags: ['数字建模', record?.objective === 'photo' ? '照片来源' : '复原方案来源'],
    model: { desktop: modelUrl, mobile: modelUrl, rotationY: 0, roughness: .65, metalness: 0, exposure: 1.1 },
    anchors: [], focusTargets: [], storyTitle: '作品信息', lead: explanation,
    motto: '保留来源，审阅形体。', tabLabels: ['看模型', '查来源', '知边界'],
    topics: {
      shape: topic('数字模型 · 形体观察', '拖动模型查看不同方向，使用滚轮或双指缩放。微光演绎展示模型的聚合与消散。'),
      pattern: topic('本机任务 · 来源记录', `任务编号 ${jobId}。${record?.sourceAssetId ? `原始图片编号 ${record.sourceAssetId}。` : record?.sourceJobId ? `图像任务编号 ${record.sourceJobId}。` : '当前记录未提供图片来源编号。'}`),
      craft: topic('AI 辅助建模 · 审阅边界', '模型的背面、内部结构与缺失部分可能包含生成推测，需要结合原始照片和实物资料核对。'),
    },
    sourceTitle: '查看本机建模工作台', sourceUrl: workbenchUrl(), identity: explanation,
  };
}

function workbenchUrl() {
  const url = new URL('/models', globalThis.location?.href || 'http://127.0.0.1/');
  url.port = '4317';
  return url.href;
}

export async function loadDynamicModel(jobId) {
  if (!SAFE_ID.test(jobId || '') || typeof jobId !== 'string') throw new Error('模型任务编号无效。');
  const response = await fetch('/api/models/jobs', { credentials: 'same-origin', redirect: 'error', signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`模型库暂时不可用（${response.status}）。`);
  const data = await response.json();
  if (!Array.isArray(data?.jobs)) throw new Error('模型库返回格式不正确。');
  const valid = data.jobs.filter(job => job?.state === 'success' && typeof job.id === 'string' && SAFE_ID.test(job.id) && job.modelUrl === `/api/models/jobs/${job.id}/model`);
  const index = valid.findIndex(job => job.id === jobId);
  if (index < 0) throw new Error('未找到这个已完成的模型任务，请返回展厅刷新模型库。');
  const job = valid[index];
  const rawName = typeof job.source?.name === 'string' ? job.source.name.trim() : '';
  const cleanName = rawName.replace(/\.(?:png|jpe?g|webp|gif|avif|heic|bmp|tiff?)$/i, '');
  const generated = /^(?:复原方案|建模图|result)(?:[-_][a-f\d]{8})?$/i.test(cleanName);
  const objective = job.objective === 'photo' ? 'photo' : 'restore';
  const name = cleanName && !/[\u0000-\u001f\u007f]/.test(cleanName) && !generated
    ? cleanName.slice(0, 100) : `${objective === 'photo' ? '照片建模作品' : '复原作品'} ${String(index + 1).padStart(2, '0')}`;
  return dynamicModelProfile(jobId, { ...job, objective, name });
}
