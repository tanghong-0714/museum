import QRCode from 'qrcode';
import {drawCardBackground} from './passport-background.js';

export function artifactShareUrl(id, publicBaseUrl = null) {
  const origin = globalThis.location?.origin || 'http://localhost';
  const base = new URL(publicBaseUrl || origin, origin);
  if (!['http:', 'https:'].includes(base.protocol)) throw new Error('分享地址必须使用 HTTP 或 HTTPS');
  base.username = '';
  base.password = '';
  base.pathname = '/';
  base.search = '';
  base.hash = '';
  base.searchParams.set('artifact', String(id));
  return base.href;
}

export function qrDataUrl(url, {ink = '#172824', transparent = false, width = 300} = {}) {
  return QRCode.toDataURL(String(url), {type: 'image/png', width, margin: 4, errorCorrectionLevel: 'M', color: {dark: ink, light: transparent ? '#00000000' : '#ffffff'}});
}

function lines(ctx, value, x, y, width, lineHeight, maxLines = 3) {
  const chars = Array.from(String(value || ''));
  const result = [];
  let current = '';
  for (const char of chars) {
    if (char === '\n' || ctx.measureText(current + char).width > width) {
      result.push(current);
      current = char === '\n' ? '' : char;
    } else current += char;
  }
  if (current) result.push(current);
  const shown = result.slice(0, maxLines);
  if (result.length > maxLines) {
    let last = shown.at(-1);
    while (last && ctx.measureText(last + '…').width > width) last = last.slice(0, -1);
    shown[shown.length - 1] = last + '…';
  }
  shown.forEach((line, index) => ctx.fillText(line, x, y + index * lineHeight));
}

function dateLabel(value) {
  const date = value ? new Date(value) : null;
  if (!date || !Number.isFinite(date.getTime())) return '日期未记录';
  return new Intl.DateTimeFormat('zh-CN', {timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit'}).format(date).replaceAll('/', '.');
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error('二维码图片加载失败'));
    image.src = src;
  });
}

function imageBounds(image) {
  const full = {x: 0, y: 0, width: image.width, height: image.height};
  try {
    const pixels = image.getContext('2d')?.getImageData(0, 0, image.width, image.height).data;
    if (!pixels) return full;
    let left = image.width, top = image.height, right = -1, bottom = -1;
    for (let y = 0; y < image.height; y++) {
      for (let x = 0; x < image.width; x++) {
        if (pixels[(y * image.width + x) * 4 + 3] <= 8) continue;
        left = Math.min(left, x);
        right = Math.max(right, x);
        top = Math.min(top, y);
        bottom = Math.max(bottom, y);
      }
    }
    if (right < left || bottom < top) return full;
    const paddingX = Math.ceil((right - left + 1) * 0.1);
    const paddingY = Math.ceil((bottom - top + 1) * 0.1);
    const x = Math.max(0, left - paddingX);
    const y = Math.max(0, top - paddingY);
    return {x, y, width: Math.min(image.width, right + paddingX + 1) - x, height: Math.min(image.height, bottom + paddingY + 1) - y};
  } catch {
    // A protected or unreadable canvas can still be drawn without inspecting pixels.
    return full;
  }
}

const CARD_THEMES = {
  'goujian-sword': {name:'藏锋铭',paper:'#16312f',ink:'#f0e6ce',accent:'#bea874',muted:'#a9bcb0',motto:'一线锋芒，静照千年。',motif:'angles'},
  'galloping-horse': {name:'凌风笺',paper:'#182e3e',ink:'#e4eee3',accent:'#88b8a9',muted:'#a9bdc2',motto:'一瞬凌空，万里生风。',motif:'arcs'},
  'four-ram-zun': {name:'肃礼铭',paper:'#302d24',ink:'#ede0bf',accent:'#c4a477',muted:'#b7aa8e',motto:'四角相望，一器凝章。',motif:'angles'},
  'zenghouyi-bells': {name:'和鸣笺',paper:'#352523',ink:'#f2e3ca',accent:'#d0ad75',muted:'#c0aa97',motto:'钟声入想，余韵相逢。',motif:'strings'},
  'speechless-buddha': {name: '默然笺', paper: '#e8eadd', ink: '#435144', accent: '#9a8b59', muted: '#707b68', motto: '不必多言，相逢已好。', motif: 'still'},
  'phoenix-ewer': {name: '青花笺', paper: '#f5f1e7', ink: '#193b66', accent: '#315f97', muted: '#737b87', motto: '一抹青蓝，留住此刻。', motif: 'waves'},
  'bronze-head': {name: '铜影铭', paper: '#123830', ink: '#f2e6c8', accent: '#c2a66c', muted: '#b9c5b4', motto: '铜色无言，目光有声。', motif: 'angles'},
  'cloud-mirror': {name: '照影笺', paper: '#f0e0c6', ink: '#634a37', accent: '#9c703f', muted: '#887668', motto: '照见流光，也照见相逢。', motif: 'arcs'},
  'liquan-bodhisattva': {name: '静观笺', paper: '#eeeae2', ink: '#514e48', accent: '#b4a078', muted: '#848075', motto: '静观一瞬，心有回响。', motif: 'halo'},
  'longquan-figure': {name: '青瓷笺', paper: '#dfece1', ink: '#2b5647', accent: '#5d8b73', muted: '#6d8274', motto: '梅子青里，时间温润。', motif: 'contours'},
  'pipa-figurine': {name: '遗音笺', paper: '#4a2932', ink: '#f5e4d1', accent: '#d6b581', muted: '#cbb8aa', motto: '弦声虽远，余韵犹在。', motif: 'strings'}
};

export function getCardTheme(id) {
  return {...(Object.hasOwn(CARD_THEMES, id) ? CARD_THEMES[id] : CARD_THEMES['phoenix-ewer'])};
}

export function getCardThumbnail(id) {
  return Object.hasOwn(CARD_THEMES, id) ? `/images/checkin/${encodeURIComponent(id)}.webp` : null;
}

export function getCardPortrait(id) {
  return Object.hasOwn(CARD_THEMES, id) ? `/images/checkin/portraits/${encodeURIComponent(id)}.webp` : null;
}

export async function renderPassportPoster({exhibit = {}, visit = {}, nickname = '', hideNickname = true, style = 'artifact', shareUrl, artifactImage = null, collectionCount = 1} = {}) {
  if (document.fonts?.ready) await document.fonts.ready;
  const theme = getCardTheme(exhibit.id || visit.artifactId);
  if (style === 'memory') Object.assign(theme, {paper: '#183a33', ink: '#f2e6c8', muted: '#b9c5b4', accent: '#c2a66c'});
  const canvas = typeof OffscreenCanvas === 'function' ? new OffscreenCanvas(1080, 1440) : document.createElement('canvas');
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('当前浏览器无法生成海报');
  const text = (size, color = theme.ink, serif = false) => {
    ctx.fillStyle = color;
    ctx.font = `${size}px ${serif ? '"Noto Serif SC", "Songti SC", SimSun, serif' : '"Microsoft YaHei", sans-serif'}`;
  };
  ctx.fillStyle = theme.paper;
  ctx.fillRect(0, 0, 1080, 1440);
  ctx.strokeStyle = theme.accent;
  ctx.globalAlpha = 0.4;
  ctx.lineWidth = 1;
  ctx.strokeRect(30, 30, 1020, 1380);
  ctx.globalAlpha = 1;
  drawCardBackground(ctx, theme);
  text(24, theme.muted);
  ctx.fillText('重器新生  /  数字博物馆', 76, 94);
  ctx.textAlign = 'right';
  ctx.fillText(theme.name, 1004, 94);
  ctx.textAlign = 'left';
  text(70, theme.ink, true);
  lines(ctx, exhibit.title || '数字文物', 76, 181, 820, 80, 2);
  text(30, theme.accent, true);
  ctx.fillText(theme.motto, 78, 318);
  text(20, theme.muted);
  lines(ctx, exhibit.english || 'AN ENCOUNTER ACROSS TIME', 78, 354, 890, 26, 1);

  ctx.save();
  ctx.translate(963, 210);
  ctx.rotate(-0.035);
  ctx.strokeStyle = theme.accent;
  ctx.lineWidth = 2;
  ctx.strokeRect(-38, -48, 76, 96);
  ctx.strokeRect(-33, -43, 66, 86);
  text(24, theme.accent, true);
  ctx.textAlign = 'center';
  ['观', '展', '留', '念'].forEach((char, index) => ctx.fillText(char, index % 2 ? 16 : -16, index < 2 ? -8 : 25));
  ctx.restore();

  if (artifactImage && artifactImage.width > 0 && artifactImage.height > 0) {
    const bounds = imageBounds(artifactImage);
    const scale = Math.min(880 / bounds.width, 650 / bounds.height);
    const width = bounds.width * scale;
    const height = bounds.height * scale;
    ctx.drawImage(artifactImage, bounds.x, bounds.y, bounds.width, bounds.height, (1080 - width) / 2, 380 + (650 - height) / 2, width, height);
  } else {
    text(24, theme.muted, true);
    ctx.textAlign = 'center';
    ctx.fillText('文物影像暂未载入', 540, 710);
    ctx.textAlign = 'left';
  }
  ctx.strokeStyle = theme.accent;
  ctx.globalAlpha = 0.4;
  ctx.beginPath(); ctx.moveTo(76, 1060); ctx.lineTo(1004, 1060); ctx.stroke();
  ctx.globalAlpha = 1;
  text(24, theme.muted);
  ctx.fillText('初 次 相 遇', 76, 1103);
  text(46, theme.ink, true);
  ctx.fillText(dateLabel(visit.firstVisitedAt), 76, 1165);
  const count = Number.isFinite(Number(collectionCount)) ? Math.max(1, Math.floor(Number(collectionCount))) : 1;
  text(26, theme.muted);
  ctx.fillText(`我的数字收藏 · 第 ${count} 件`, 78, 1207);
  const showNickname = Boolean(!hideNickname && nickname);
  if (showNickname) {
    text(26);
    lines(ctx, `${nickname} 的观展记忆`, 78, 1244, 580, 32, 1);
  }
  const safeUrl = artifactShareUrl(exhibit.id || visit.artifactId || '', shareUrl);
  // Print directly onto the card paper. The four-module quiet zone remains
  // transparent, away from text and motifs; light ink suits dark card themes.
  const qr = await loadImage(await qrDataUrl(safeUrl, {ink: theme.ink, transparent: true, width: 224}));
  ctx.drawImage(qr, 766, 1097, 224, 224);
  text(20, theme.muted);
  ctx.textAlign = 'center';
  ctx.fillText('扫码走近这件文物', 878, 1362);
  ctx.textAlign = 'left';
  const cardCopy = Array.isArray(exhibit.description) ? exhibit.description.filter(Boolean).join('') : exhibit.lead || theme.motto;
  text(36, theme.ink, true);
  lines(ctx, cardCopy, 76, showNickname ? 1296 : 1252, 620, 44, showNickname ? 2 : 3);
  text(18, theme.muted);
  ctx.fillText('数字阅览记录 · 非现场到访证明', 76, 1385);
  if (typeof canvas.convertToBlob === 'function') return canvas.convertToBlob({type:'image/png'});
  return new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error('海报导出失败')), 'image/png'));
}
