import {randomBytes} from 'node:crypto';

// Short-lived, unguessable PNG URLs let embedded browsers save an actual image
// instead of asking the native downloader to resolve a JavaScript blob URL.
export function createCardImageHandler({now = Date.now, ttl = 15 * 60_000, maxBytes = 8 * 1024 * 1024, maxTotal = 32 * 1024 * 1024, maxEntries = 16} = {}) {
  const images = new Map();
  let total = 0, uploading = 0;
  const remove = key => { total -= images.get(key).body.length; images.delete(key); };
  const prune = () => { for (const [key, item] of images) if (item.expiresAt <= now()) remove(key); };
  const timer = setInterval(prune, 60_000); timer.unref();
  const json = (res, status, value) => { res.writeHead(status, {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}); res.end(JSON.stringify(value)); };
  return async (req, res) => {
    const path = new URL(req.url, 'http://localhost').pathname;
    if (path !== '/api/card-images' && !path.startsWith('/api/card-images/')) return false;
    prune();
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Referrer-Policy', 'no-referrer');
    if (req.method === 'GET' || req.method === 'HEAD') {
      const match = /^\/api\/card-images\/([a-f0-9]{48})\.png$/.exec(path);
      const item = match && images.get(match[1]);
      if (!item) { json(res, 404, {message:'图片已过期，请返回打卡页重新打开。'}); return true; }
      res.writeHead(200, {'Content-Type':'image/png','Content-Length':item.body.length,'Cache-Control':'private, no-store','Content-Disposition':'inline; filename="museum-card.png"'});
      res.end(req.method === 'HEAD' ? undefined : item.body); return true;
    }
    if (req.method !== 'POST' || path !== '/api/card-images') { json(res, 405, {message:'请求方法不支持。'}); return true; }
    const expected = `${req.socket.encrypted ? 'https' : 'http'}://${req.headers.host}`;
    if (req.headers.origin !== expected || (req.headers['sec-fetch-site'] && !['same-origin','none'].includes(req.headers['sec-fetch-site']))) { json(res, 403, {message:'请从文物打卡页生成图片。'}); return true; }
    if (req.headers['content-type']?.split(';')[0] !== 'image/png') { json(res, 415, {message:'仅支持 PNG 收藏卡。'}); return true; }
    if (Number(req.headers['content-length']) > maxBytes) { json(res, 413, {message:'图片过大，请重新生成。'}); return true; }
    if (uploading >= 3) { json(res, 429, {message:'图片正在准备中，请稍后重试。'}); return true; }
    uploading++;
    try {
      const chunks = []; let size = 0;
      for await (const chunk of req) {
        size += chunk.length;
        if (size > maxBytes) { json(res, 413, {message:'图片过大，请重新生成。'}); req.resume(); return true; }
        chunks.push(chunk);
      }
      const body = Buffer.concat(chunks);
      if (body.length < 33 || body.subarray(0,8).toString('hex') !== '89504e470d0a1a0a' || body.toString('ascii',12,16) !== 'IHDR' || body.readUInt32BE(16) !== 1080 || body.readUInt32BE(20) !== 1440) {
        json(res, 400, {message:'收藏卡图片无效，请重新生成。'}); return true;
      }
      if (size > maxTotal) { json(res, 413, {message:'图片过大。'}); return true; }
      while (images.size >= maxEntries || total + size > maxTotal) remove(images.keys().next().value);
      const key = randomBytes(24).toString('hex');
      const expiresAt = now() + ttl;
      images.set(key, {body,expiresAt}); total += size;
      json(res, 201, {url:`/api/card-images/${key}.png`,expiresAt});
    } catch { if (!res.headersSent && !res.destroyed) json(res, 400, {message:'图片传输未完成，请重试。'}); }
    finally { uploading--; }
    return true;
  };
}
