import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import jsQR from 'jsqr';
import {artifactShareUrl, qrDataUrl, renderPassportPoster, getCardTheme} from '../src/passport-media.js';

test('canonical URLs strip credentials, query tokens, hashes and embedding routes', () => {
  assert.equal(artifactShareUrl('bronze-head', 'https://user:secret@museum.example/embed?token=secret&parentOrigin=private#secret'), 'https://museum.example/?artifact=bronze-head');
  assert.equal(artifactShareUrl('中文 /?&', 'https://museum.example'), 'https://museum.example/?artifact=%E4%B8%AD%E6%96%87+%2F%3F%26');
  globalThis.location = {origin: 'http://192.168.1.2:5188'};
  try {
    assert.equal(artifactShareUrl('phoenix-ewer'), 'http://192.168.1.2:5188/?artifact=phoenix-ewer');
  } finally { delete globalThis.location; }
  assert.throws(() => artifactShareUrl('x', 'javascript:alert(1)'));
});

test('PNG QR decodes exactly to the canonical public artifact URL', async () => {
  const url = artifactShareUrl('phoenix-ewer', 'https://museum.example');
  const dataUrl = await qrDataUrl(url);
  assert.match(dataUrl, /^data:image\/png;base64,/);
  const {data, info} = await sharp(Buffer.from(dataUrl.split(',')[1], 'base64')).ensureAlpha().raw().toBuffer({resolveWithObject: true});
  const decoded = jsQR(new Uint8ClampedArray(data), info.width, info.height);
  assert.equal(decoded?.data, url);
});

test('poster handles unknown styles, malformed dates, hidden names and missing image', async () => {
  const rendered = [];
  const fills = [];
  const images = [];
  const ctx = {
    fillRect() { fills.push(this.fillStyle); }, strokeRect() {}, rect() {}, clip() {}, closePath() {}, fill() {}, scale() {}, quadraticCurveTo() {}, createRadialGradient() { return {addColorStop() {}}; }, beginPath() {}, arc() {}, bezierCurveTo() {}, moveTo() {}, lineTo() {}, stroke() {}, save() {}, restore() {}, translate() {}, rotate() {}, drawImage(...args) { images.push(args); },
    measureText(value) { return {width: Array.from(value).length * 24}; },
    fillText(value) { rendered.push(value); }
  };
  const canvas = {getContext: () => ctx, toBlob: callback => callback(new Blob(['png'], {type: 'image/png'}))};
  globalThis.document = {createElement: () => canvas};
  globalThis.Image = class {set src(value) { this.onload(); }};
  try {
    const blob = await renderPassportPoster({exhibit: {id: 'x', title: '测试文物'}, visit: {firstVisitedAt: 'broken date'}, style: 'unknown', nickname: '秘密昵称', hideNickname: true, collectionCount: NaN, shareUrl: 'https://museum.example/?token=private'});
    assert.equal(blob.type, 'image/png');
    assert.equal(canvas.width, 1080);
    assert.equal(canvas.height, 1440);
    assert.equal(fills[0], '#f5f1e7');
    assert.ok(rendered.includes('日期未记录'));
    assert.ok(rendered.includes('文物影像暂未载入'));
    assert.ok(rendered.includes('我的数字收藏 · 第 1 件'));
    assert.ok(!rendered.some(value => value.includes('秘密昵称')));
    const pixels = new Uint8ClampedArray(100 * 100 * 4);
    for (let y = 30; y < 70; y++) for (let x = 20; x < 80; x++) pixels[(y * 100 + x) * 4 + 3] = 255;
    const artifactImage = {width: 100, height: 100, getContext: () => ({getImageData: () => ({data: pixels})})};
    await renderPassportPoster({artifactImage, shareUrl: 'https://museum.example', exhibit: {id: 'x'}});
    assert.deepEqual(images.find(args => args[0] === artifactImage).slice(1, 5), [14, 26, 72, 48]);
    const protectedImage = {width: 100, height: 100, getContext() { throw new Error('protected'); }};
    await renderPassportPoster({artifactImage: protectedImage, shareUrl: 'https://museum.example', exhibit: {id: 'x'}});
    assert.deepEqual(images.find(args => args[0] === protectedImage).slice(1, 5), [0, 0, 100, 100]);
  } finally { delete globalThis.document; delete globalThis.Image; }
});


test('artifact themes are distinct, complete and safe to reuse', () => {
  const ids = ['phoenix-ewer', 'bronze-head', 'cloud-mirror', 'liquan-bodhisattva', 'longquan-figure', 'pipa-figurine', 'speechless-buddha'];
  const themes = ids.map(getCardTheme);
  assert.equal(new Set(themes.map(theme => theme.name)).size, ids.length);
  assert.equal(new Set(themes.map(theme => theme.motif)).size, ids.length);
  for (const theme of themes) {
    assert.deepEqual(Object.keys(theme).sort(), ['accent', 'ink', 'motto', 'muted', 'name', 'paper', 'motif'].sort());
    for (const key of ['paper', 'ink', 'accent', 'muted']) assert.match(theme[key], /^#[0-9a-f]{6}$/);
  }
  assert.deepEqual(getCardTheme('missing'), getCardTheme('phoenix-ewer'));
  assert.deepEqual(getCardTheme('__proto__'), getCardTheme('phoenix-ewer'));
  const changed = getCardTheme('phoenix-ewer'); changed.paper = 'red';
  assert.notEqual(getCardTheme('phoenix-ewer').paper, 'red');
});

test('long title stays in its reserved header, default nickname is private and QR has no white panel', async () => {
  const texts = [], images = [], rects = [];
  const ctx = {
    fillRect(...args) { rects.push({color: this.fillStyle, args}); }, strokeRect() {}, rect() {}, clip() {}, closePath() {}, fill() {}, scale() {}, quadraticCurveTo() {}, createRadialGradient() { return {addColorStop() {}}; }, beginPath() {}, arc() {}, bezierCurveTo() {}, moveTo() {}, lineTo() {}, stroke() {}, save() {}, restore() {}, translate() {}, rotate() {},
    drawImage(...args) { images.push(args); },
    measureText(value) { return {width: Array.from(value).length * parseInt(this.font, 10)}; },
    fillText(value, x, y) { texts.push({value, x, y, font: this.font}); }
  };
  const canvas = {getContext: () => ctx, toBlob: callback => callback(new Blob(['png'], {type: 'image/png'}))};
  globalThis.document = {createElement: () => canvas};
  globalThis.Image = class {set src(value) { this.onload(); }};
  try {
    await renderPassportPoster({exhibit: {id: 'pipa-figurine', title: '很长的文物名称'.repeat(20)}, nickname: 'PRIVATE', visit: {recoveryCode: 'SECRET'}, shareUrl: 'https://museum.example/embed?recoveryCode=SECRET'});
    const titleLines = texts.filter(item => item.font.startsWith('70px'));
    assert.equal(titleLines.length, 2);
    assert.ok(titleLines.every(item => item.y <= 261));
    assert.ok(titleLines.at(-1).value.endsWith('…'));
    assert.ok(texts.every(item => !item.value.includes('PRIVATE') && !item.value.includes('SECRET')));
    assert.ok(!rects.some(rect => rect.color === '#ffffff'));
    assert.deepEqual(images.at(-1).slice(1), [766, 1097, 224, 224]);
  } finally { delete globalThis.document; delete globalThis.Image; }
});

test('transparent themed QR decodes on all seven card papers including dark themes', async () => {
  const url = artifactShareUrl('longquan-figure', 'http://192.168.145.45:5189');
  for (const id of ['phoenix-ewer', 'bronze-head', 'cloud-mirror', 'liquan-bodhisattva', 'longquan-figure', 'pipa-figurine', 'speechless-buddha']) {
    const theme = getCardTheme(id);
    const png = Buffer.from((await qrDataUrl(url, {ink:theme.ink, transparent:true, width:224})).split(',')[1], 'base64');
    const transparent = await sharp(png).ensureAlpha().raw().toBuffer();
    assert.equal(transparent[3], 0, `${id}: quiet zone is transparent`);
    for (const width of [224, 112]) {
      const {data, info} = await sharp(png).flatten({background:theme.paper}).resize(width, width).ensureAlpha().raw().toBuffer({resolveWithObject:true});
      assert.equal(jsQR(new Uint8ClampedArray(data), info.width, info.height)?.data, url, `${id} at ${width}px`);
    }
  }
});
