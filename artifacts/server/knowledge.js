import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const defaultDirectory = fileURLToPath(new URL('../data/artifacts/', import.meta.url));
const targets = new Set(['spout', 'handle', 'pattern', 'neck', 'eyes', 'nose', 'ears', 'patina','boss','arcs','rim','face','ornaments','pedestal','hilt','guard','blade','horsehead','legs','hoof','zun-rim','ram','zun-pattern','zun-foot','bell-frame','bell-body','bell-hanging']);
const labels = {boss:'看看镜钮',arcs:'看看连弧',rim:'看看镜缘',face:'看看上部轮廓',ornaments:'看看衣饰',pedestal:'看看莲瓣底座',eyes:'看看眼部',nose:'看看鼻梁',ears:'看看耳部',patina:'看看表面',spout: '看看凤首壶流', handle: '看看壶柄', pattern: '看看纹饰', neck: '看看壶颈'};
Object.assign(labels,{hilt:'看看剑首与握柄',guard:'看看剑格',blade:'看看剑身纹样',horsehead:'看看昂首姿态',legs:'看看奔跑姿态',hoof:'看看足下飞鸟','zun-rim':'看看方形口沿',ram:'看看羊首','zun-pattern':'看看尊身纹饰','zun-foot':'看看圈足','bell-frame':'看看钟架','bell-body':'看看钟体','bell-hanging':'看看悬挂结构'});

export async function loadArtifact(id, options = {}) {
  if (!/^[a-z0-9][a-z0-9-]{0,79}$/.test(id || '')) return null;
  if (options.artifacts) {
    const artifact = options.artifacts instanceof Map ? options.artifacts.get(id) : Object.hasOwn(options.artifacts, id) ? options.artifacts[id] : null;
    return artifact?.id === id ? artifact : null;
  }
  try {
    const artifact = JSON.parse(await readFile(path.join(options.dataDirectory || defaultDirectory, `${id}.json`), 'utf8'));
    return artifact.id === id ? artifact : null;
  } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

export function safeUrl(value) {
  try { const url = new URL(value); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; }
}

export function publicArtifact(artifact) {
  const {id, name, nickname, personaSummary, opening, identityNote} = artifact;
  return {id, name, nickname, personaSummary, opening, identityNote,
    journey: artifact.journey ? {lead:artifact.journey.lead,entries:artifact.journey.entries.map(({id,time,title,text,kind,sourceIds,note})=>({id,time,title,text,kind,sourceIds,note}))} : null,
    prompts: (artifact.prompts || []).map(({id, text}) => ({id, text})),
    sources: (artifact.sources || []).map(({id, title, url, publisher, checkedAt}) => ({id, title, url: safeUrl(url), publisher, checkedAt}))};
}

function normalize(text) { return String(text || '').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ''); }
function tokens(text) {
  const result = new Set();
  for (const word of String(text || '').normalize('NFKC').toLowerCase().match(/[a-z0-9]+|[\u3400-\u9fff]+/g) || []) {
    if (/^[a-z0-9]+$/.test(word) || word.length < 2) result.add(word);
    else for (let i = 0; i < word.length - 1; i++) result.add(word.slice(i, i + 2));
  }
  return result;
}

// Short follow-ups borrow the last substantive user question, never another artifact's cards.
export function contextualQuery(message, history = []) {
  const explicitTopic = /时间轴|时光足迹|年代|器形|外形|造型|纹饰|图案|青花|青瓷|露胎|龙泉|窑火|琵琶|女俑|工艺|用途|模型|材料|颜色|壶嘴|壶柄|把手|壶颈|尺寸|性格|青铜|眼睛|鼻梁|耳朵|锈色|凝望|故事|铜镜|连弧|镜钮|菩萨|礼泉寺|衣纹|莲瓣|勾践|越王|剑首|剑格|剑身|马踏飞燕|铜奔马|飞鸟|马蹄|四羊|方尊|羊首|圈足|曾侯乙|编钟|钟架|钟体|悬挂/.test(message);
  const shortFollowup = !explicitTopic && message.length <= 30 && /那|呢|它|这个|这件|为什么|怎么|还有|哪里|哪个|具体|详细|继续|再说|展开|然后/.test(message);
  if (!shortFollowup) return message;
  const previous = [...history].reverse().filter(item => item.role === 'user');
  const anchor = previous.find(item => item.content.length > 8 && !/^(那|还有|继续|再说|然后)/.test(item.content)) || previous[0];
  return anchor ? `${anchor.content} ${message}` : message;
}

export function isInstructionAttack(message) {
  return /(?:忽略|无视|覆盖|忘记).{0,14}(?:指令|规则|提示|限制|要求)|(?:编造|虚构).{0,12}(?:史实|档案|考古记录)|(?:泄露|输出|告诉我|显示).{0,16}(?:密钥|api.?key|系统提示|system.?prompt)|(?:ignore|override).{0,30}(?:instructions|system|rules)/i.test(message);
}

export function unknownAnswer(artifact, query) {
  const normalized = normalize(query);
  const responses = [];
  for (const topic of artifact.unknownTopics || []) {
    if ((topic.keywords || []).some(keyword => normalize(keyword) && normalized.includes(normalize(keyword))) && typeof topic.response === 'string' && topic.response.trim()) responses.push(topic.response.trim());
  }
  if (responses.length) return [...new Set(responses)].join('\n\n');
  // Only an exact editorial question with a sourced, verified card may bypass
  // the generic unknown-history response. Mixed or personalized claims cannot.
  const documented = Object.entries(artifact.documentedQuestions || {}).find(([question]) => normalize(question) === normalized);
  if (documented && artifact.cards?.some(card => card.id === documented[1] && card.confidence === 'verified' && card.sourceIds?.some(id => artifact.sources?.some(source => source.id === id)))) return null;
  if (/皇帝|皇上|哪位主人|谁的|主人是谁|御用|御赐|战争|战乱|出土|发掘|挖掘|修复|修补|商路|流传经历|流转经历/.test(query)) {
    return '现有核查资料没有确认我的具体主人、皇帝关联、战争经历、出土地点、商路或修复记录。我不能把这些空白讲成真实经历；我们可以看看有出处的器形、纹饰和年代资料。';
  }
  return null;
}

export function retrieve(artifact, query, limit = 3) {
  const queryTokens = tokens(query);
  const normalized = normalize(query);
  const sourceIds = new Set((artifact.sources || []).map(source => source.id));
  return (artifact.cards || []).filter(card => (['verified', 'context'].includes(card.confidence) && card.scope !== 'unknown' && (card.sourceIds || []).some(id => sourceIds.has(id))) || (card.scope === 'project' && card.confidence === 'context') || (card.scope === 'creative' && card.confidence === 'creative'))
    .filter(card => card.section !== 'journey' || /时间轴|时光足迹/.test(query))
    .map(card => {
      const titleTokens = tokens(card.title);
      const bodyTokens = tokens(card.text);
      let score = 0;
      for (const token of queryTokens) score += (titleTokens.has(token) ? 3 : 0) + (bodyTokens.has(token) ? 1 : 0);
      for (const keyword of card.keywords || []) {
        const clean = normalize(keyword);
        if (clean.length >= 2 && normalized.includes(clean)) score += clean.length > 2 ? 8 : 5;
      }
      return {card, score};
    }).filter(item => item.score >= 3).sort((a, b) => b.score - a.score).slice(0, limit).map(item => item.card);
}

export function citationsFor(artifact, cards, allowedIds) {
  const allowed = allowedIds ? new Set(allowedIds) : null;
  const citations = [];
  for (const source of artifact.sources || []) {
    const sourceCards = cards.filter(card => (card.sourceIds || []).includes(source.id));
    if (!sourceCards.length || (allowed && !allowed.has(source.id))) continue;
    citations.push({id: source.id, title: source.title, url: safeUrl(source.url), excerpt: sourceCards.map(card => card.excerpt || card.text).join('\n').slice(0, 1800)});
  }
  return citations;
}

export function actionsFor(cards, requested) {
  const available = new Set(cards.map(card => card.focusTarget).filter(target => targets.has(target)));
  const selected = requested ? requested.filter(action => action?.type === 'focus' && available.has(action.target)).map(action => action.target) : [...available];
  return [...new Set(selected)].slice(0, 3).map(target => ({type: 'focus', target, label: cards.find(card=>card.focusTarget===target&&typeof card.focusLabel==='string')?.focusLabel || labels[target]}));
}

export function suggestionsFor(artifact, message = '') {
  return (artifact.prompts || []).map(item => item.text).filter(text => text && text !== message).slice(0, 3);
}
