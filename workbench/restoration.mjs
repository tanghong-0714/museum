// One server-side prompt builder for preview and submission.
export const categories = { plate: '盘、碟等浅腹器物', vessel: '瓶、罐等容器', sculpture: '人物或动物雕塑', other: '其他文物', unknown: '尚未确认' };
export const sides = { front: '正面或内面', back: '背面或底面', side: '侧面', unknown: '尚未确认' };
export const targets = { front: '完整成品正面，略带俯视', same: '沿用参考照片视角', back: '完整成品背面或底面' };
export function normalizeContext(value = {}) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('复原信息格式不正确。');
  const context = { category: value.category || 'unknown', photoSide: value.photoSide || 'unknown', targetView: value.targetView || 'front', scope: value.scope || 'complete', decision: String(value.decision || '').trim() };
  if (!Object.hasOwn(categories, context.category) || !Object.hasOwn(sides, context.photoSide) || !Object.hasOwn(targets, context.targetView) || !['complete', 'local'].includes(context.scope) || context.decision.length > 1500) throw new Error('请检查器物类别、视角和结构判断（最多 1500 字符）。');
  return context;
}
export function contextText(c) {
  return `器物类别：${categories[c.category]}。输入照片展示：${sides[c.photoSide]}。目标视角：${targets[c.targetView]}。目标：${c.scope === 'complete' ? '补全为完整器物' : '仅修补用户指定局部'}。\n本次拟采用的结构判断或复原假设（AI 推测不代表用户鉴定）：${c.decision || '未补充；不得把未知结构当作已确认事实。'}`;
}
export function buildRestorationPrompt(prompt, c, assets) {
  const goal = c.scope === 'complete'
    ? '根据参考照片中的破损文物，合理想象并补全缺失部分，还原成一件完整、自然、协调的文物。延续原有器形、材质、颜色和纹饰，修复缺口、断裂和拼接痕迹，使补全部分与原有部分融为一体。'
    : '根据参考照片，合理补全用户指定的缺损部位，延续原有器形、材质、颜色和纹饰，其他部位保持不变。';
  const structure = c.decision ? `结构补充：${c.decision.replace(/^AI 推测方案（非实物鉴定）：/, '')}` : '';
  const face = c.category === 'sculpture' ? '保留现存面部特征与姿态。' : '';
  const references = assets.some(a => a.kind === 'result') ? assets.map((a, i) => `图${i + 1}：${a.kind === 'result' ? '此前 AI 生成图，仅作辅助' : '原始照片，主要依据'}`).join('；') : '';
  return [goal, `照片视角：${sides[c.photoSide]}；输出视角：${targets[c.targetView]}。`, face, structure, prompt.trim(), references,
    '单件完整入镜，纯净背景，柔和光线，适合后续三维建模。',
    c.scope === 'complete' ? '最终呈现完整器物，资料中描述的缺损、拼接、透明补配是待修复状态，不在成品中照搬。' : '本次仅修复指定部位。'
  ].filter(Boolean).join('\n');
}
export function structuralQuestions(result) {
  if (!result) return [];
  // Old analyses did not have structured questions; never treat them as cleared.
  return result.structuralQuestions ?? (result.uncertainties || []).filter(s => /口|足|正面|背面|形态|器形|轮廓|修复层/.test(s)).slice(0, 5);
}
