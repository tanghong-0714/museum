import sharp from 'sharp';
import { mkdir, access } from 'node:fs/promises';
import path from 'node:path';

// Inputs are transparent, textured Three.js mesh renders exported from the app.
const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/encode-four-artifact-portraits.mjs <PNG directory>');
const out = path.resolve('public/images/checkin');
await mkdir(path.join(out, 'portraits'), { recursive: true });
const ids = ['goujian-sword', 'galloping-horse', 'four-ram-zun', 'zenghouyi-bells'];
for (const id of ids) {
  const input = path.join(source, `${id}.png`);
  const portrait = path.join(out, 'portraits', `${id}.webp`);
  const thumb = path.join(out, `${id}.webp`);
  for (const file of [portrait, thumb]) {
    try { await access(file); throw new Error(`Refusing to overwrite ${file}`); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  const meta = await sharp(input).metadata();
  if (!meta.hasAlpha) throw new Error(`${id}: source must have transparency`);
  const stats = await sharp(input).stats();
  if (stats.channels[3].max === 0) throw new Error(`${id}: blank source`);
  const trimmed = await sharp(input).trim({ threshold: 8 }).png().toBuffer();
  await sharp(trimmed).resize({ width: 888, height: 888, fit: 'inside', withoutEnlargement: true })
    .extend({ top: 36, bottom: 36, left: 36, right: 36, background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .webp({ quality: 92, alphaQuality: 100 }).toFile(portrait);
  await sharp(trimmed).resize(260, 212, { fit: 'contain', background: '#f4f1e6' })
    .extend({ top: 14, bottom: 14, left: 14, right: 14, background: '#f4f1e6' })
    .flatten({ background: '#f4f1e6' }).webp({ quality: 91 }).toFile(thumb);
  for (const file of [portrait, thumb]) {
    const result = await sharp(file).metadata();
    console.log(JSON.stringify({ file, width: result.width, height: result.height, hasAlpha: result.hasAlpha, bytes: result.size }));
  }
}
