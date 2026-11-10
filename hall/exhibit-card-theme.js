// Reused from 器生青花_R01/src/passport-media.js: seven existing passport themes and portrait paths.
const CARD_THEMES = {
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

