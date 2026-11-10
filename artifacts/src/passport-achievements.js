import './passport-achievements.css';

const signatures = new WeakMap();
const SVG_NS = 'http://www.w3.org/2000/svg';
const motifs = {
  first: 'M41 28h18l-3 9c13 10 16 21 12 31-5 13-31 13-36 0-4-10-1-21 12-31z M40 28h20 M39 53q11-9 22 0 M37 61q13 10 26 0 M42 73h16 M46 21h8',
  three: 'M50 24c-3 13-18 15-18 28 0 10 8 16 18 23 10-7 18-13 18-23 0-13-15-15-18-28z M50 39v33 M50 55q-17-3-19-14 M50 61q16-4 19-15 M37 75q13 8 26 0 M25 63q-7-12 0-24 M75 63q7-12 0-24',
  all: 'M26 42l24-17 24 17z M30 46h40 M34 47v23 M45 47v23 M55 47v23 M66 47v23 M28 72h44 M24 78h52 M43 35h14 M20 56h5 M75 56h5',
};

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function medallion(id, unlocked, large = false) {
  const seal = element('div', `pp-aw-seal${large ? ' pp-aw-seal-large' : ''}${unlocked ? ' pp-aw-lit' : ''}`);
  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('aria-hidden', 'true');
  for (const radius of [44, 39]) {
    const circle = document.createElementNS(SVG_NS, 'circle');
    for (const [name, value] of Object.entries({cx: 50, cy: 50, r: radius})) circle.setAttribute(name, value);
    svg.append(circle);
  }
  const path = document.createElementNS(SVG_NS, 'path');
  path.setAttribute('d', motifs[id] || motifs.first);
  svg.append(path);
  seal.append(svg);
  return seal;
}

function dateLabel(value) {
  const date = new Date(value);
  return value && Number.isFinite(date.getTime())
    ? new Intl.DateTimeFormat('zh-CN', {year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'Asia/Shanghai'}).format(date).replaceAll('/', '.')
    : '已获得';
}

/** Render a passive achievement view. Identical snapshots preserve the existing DOM. */
export function renderAchievements(container, snapshot) {
  const achievements = snapshot.achievements || [];
  const signature = JSON.stringify(achievements);
  if (signatures.get(container) === signature && container.firstChild) return;
  signatures.set(container, signature);
  const unlocked = achievements.filter(item => item.unlocked);
  const latest = [...unlocked].sort((a, b) => String(b.unlockedAt || '').localeCompare(String(a.unlockedAt || '')) || b.target - a.target)[0];
  const featured = latest || achievements[0];
  const section = element('section', 'pp-aw-gallery');
  section.setAttribute('aria-label', '观展成就');
  const hero = element('div', 'pp-aw-hero');
  hero.append(element('p', 'pp-aw-eyebrow', latest ? '最新珍藏 · LATEST HONOUR' : '待启的珍藏 · YOUR COLLECTION'));
  hero.append(medallion(featured?.id || 'first', Boolean(latest), true));
  hero.append(element('h2', 'pp-aw-title', latest?.title || '每一次相逢，皆有印记'));
  hero.append(element('p', 'pp-aw-caption', latest ? `${dateLabel(latest.unlockedAt)} · ${latest.reward || '观展纪念章'}` : '参观文物并打卡，点亮你的第一枚纪念章'));
  const heading = element('div', 'pp-aw-heading');
  heading.append(element('h3', 'pp-aw-heading-title', '我的纪念章'), element('span', 'pp-aw-total', `${unlocked.length} / ${achievements.length} 已获得`));
  section.append(hero, heading);
  const list = element('div', 'pp-aw-list');
  for (const item of achievements) {
    const card = element('article', `pp-aw-card${item.unlocked ? ' pp-aw-earned' : ''}`);
    card.append(medallion(item.id, item.unlocked));
    const copy = element('div', 'pp-aw-copy');
    copy.append(element('h4', 'pp-aw-card-title', item.title), element('p', 'pp-aw-description', item.description));
    const progress = element('div', 'pp-aw-progress');
    const fill = element('span', 'pp-aw-progress-fill');
    fill.style.width = `${Math.max(0, Math.min(100, item.target > 0 ? item.progress / item.target * 100 : 0))}%`;
    progress.setAttribute('aria-hidden', 'true');
    progress.append(fill);
    if (!item.unlocked) copy.append(progress);
    const status = element('div', 'pp-aw-status');
    status.append(element('span', 'pp-aw-state', item.unlocked ? '已珍藏' : '待点亮'), element('span', 'pp-aw-date', item.unlocked ? dateLabel(item.unlockedAt) : `${item.progress} / ${item.target} 件`));
    card.append(copy, status);
    list.append(card);
  }
  section.append(list, element('p', 'pp-aw-footnote', '循器而行 · 将相逢珍藏'));
  container.replaceChildren(section);
}
