import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import { saveEnvSetting } from './config.mjs';
import { createImageService, IMAGE_BASE } from './image-service.mjs';
import { createModelService } from './model-service.mjs';
import { createAnalysisService } from './analysis-service.mjs';
import { cleanWorkspaceCache } from './workspace-cache.mjs';
import { createMultiviewService } from './multiview-service.mjs';

export const ENDPOINT = 'https://openapi.tripo3d.com/v3/account/balance';
const publicDir = new URL('./public/', import.meta.url);

export function createApp({ fetchImpl = fetch, initialKey = '', saveKey = async () => {}, imageService = null, modelService = null, analysisService = null, multiviewService = null, qaMode = false } = {}) {
  let apiKey = initialKey;
  let latest = null;
  let busy = false;
  const server = http.createServer(async (req, res) => {
    const port = server.address().port;
    const origin = `http://127.0.0.1:${port}`;
    const headers = {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'no-referrer',
      'Content-Security-Policy': "default-src 'self'; connect-src 'self' blob: data:; img-src 'self' data: blob:; style-src 'self'; script-src 'self' 'wasm-unsafe-eval'; worker-src 'self' blob:; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
    };
    function send(status, data) {
      res.writeHead(status, { ...headers, 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify(data));
    }
    if (req.headers.host !== `127.0.0.1:${port}`) return send(403, { message: '请使用 127.0.0.1 地址打开测试页。' });
    const researchPath = new URL(req.url, origin).pathname;
    if (['/images','/models'].includes(researchPath)) headers['Content-Security-Policy'] = headers['Content-Security-Policy'].replace("frame-ancestors 'none'", "frame-ancestors 'self' http://127.0.0.1:5174");
    if (req.url.startsWith('/api/analysis/')) {
      if (!analysisService) return send(503, { message: '图片分析服务未启用。' });
      try {
        const path = new URL(req.url, origin).pathname;
        const parts = path.split('/').filter(Boolean);
        if (req.method === 'GET' && path === '/api/analysis/status') return send(200, await analysisService.status());
        if (req.method === 'GET' && path === '/api/analysis/jobs') return send(200, { jobs: await analysisService.list() });
        if (req.method === 'GET' && parts.length === 4 && parts[2] === 'jobs') return send(200, await analysisService.get(parts[3]));
        if (req.method !== 'POST') return send(404, { message: '分析接口不存在。' });
        if (req.headers.origin !== origin || req.headers['content-type'] !== 'application/json') return send(403, { message: '仅接受本地页面发送的请求。' });
        const chunks = []; let size = 0;
        for await (const chunk of req) { size += chunk.length; if (size > 48 * 1024) return send(413, { message: '分析要求过长。' }); chunks.push(chunk); }
        let input; try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return send(400, { message: '请求格式错误。' }); }
        if (path === '/api/analysis/check') return send(200, await analysisService.check());
        if (path === '/api/analysis/jobs') return send(202, await analysisService.create(input));
        return send(404, { message: '分析接口不存在。' });
      } catch (error) { return send(Number.isInteger(error.status) ? error.status : 500, { message: Number.isInteger(error.status) ? error.message : '本地分析服务发生错误，请检查数据目录。' }); }
    }
    if (req.url.startsWith('/api/multiview/')) {
      if (!multiviewService) return send(503, { message: '四视图服务未启用。' });
      try {
        const path = new URL(req.url, origin), parts = path.pathname.split('/').filter(Boolean);
        if (req.method === 'GET' && path.pathname === '/api/multiview/status') return send(200, await multiviewService.status());
        if (req.method === 'GET' && path.pathname === '/api/multiview/jobs') return send(200, { jobs: await multiviewService.list() });
        if (req.method === 'GET' && parts.length === 4 && parts[2] === 'jobs') return send(200, await multiviewService.get(parts[3]));
        if (req.method === 'GET' && parts.length === 6 && parts[2] === 'jobs' && parts[4] === 'views') {
          const asset = await multiviewService.asset(parts[3], parts[5]);
          res.writeHead(200, { ...headers, 'Content-Type': asset.mime, 'Content-Length': asset.content.length, ...(path.searchParams.has('download') ? { 'Content-Disposition': `attachment; filename="${parts[5]}.${asset.mime === 'image/jpeg' ? 'jpg' : asset.mime.split('/')[1]}"` } : {}) }); return res.end(asset.content);
        }
        if (req.method !== 'POST') return send(404, { message: '四视图接口不存在。' });
        if (req.headers.origin !== origin || req.headers['content-type'] !== 'application/json') return send(403, { message: '仅接受本地页面发送的请求。' });
        const chunks = []; let size = 0; for await (const c of req) { size += c.length; if (size > 32768) return send(413, { message: '请求过大。' }); chunks.push(c); }
        let input; try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return send(400, { message: '请求格式错误。' }); }
        if (path.pathname === '/api/multiview/jobs') return send(202, await multiviewService.create(input));
        if (parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'recover') return send(202, await multiviewService.recover(parts[3], input));
        if (parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'replace') return send(202, await multiviewService.replace(parts[3], input));
        if (parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'refine') return send(202, await multiviewService.refine(parts[3], input));
        return send(404, { message: '四视图接口不存在。' });
      } catch (e) { return send(e.status || 500, { message: e.status ? e.message : '四视图服务发生错误，请检查本地缓存。' }); }
    }
    if (req.url.startsWith('/api/models/')) {
      if (!modelService) return send(503, { message: '建模服务未启用。' });
      try {
        const path = new URL(req.url, origin);
        const parts = path.pathname.split('/').filter(Boolean);
        if (req.method === 'GET' && path.pathname === '/api/models/status') return send(200, await modelService.status());
        if (req.method === 'GET' && path.pathname === '/api/models/jobs') return send(200, { jobs: (await modelService.list({includeDeleted:path.searchParams.get('trash')==='1'})).filter(j=>path.searchParams.get('trash')==='1'?j.deletedAt:!j.deletedAt) });
        if (req.method === 'GET' && parts.length === 4 && parts[2] === 'jobs') return send(200, await modelService.get(parts[3]));
        if (req.method === 'GET' && parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'model') {
          const bytes = await modelService.asset(parts[3]);
          res.writeHead(200, { ...headers, 'Content-Type': 'model/gltf-binary', 'Content-Length': bytes.length, ...(path.searchParams.has('download') ? { 'Content-Disposition': 'attachment; filename="restored-artifact.glb"' } : {}) });
          return res.end(bytes);
        }
        if (req.method !== 'POST') return send(404, { message: '建模接口不存在。' });
        if (req.headers.origin !== origin || req.headers['content-type'] !== 'application/json') return send(403, { message: '仅接受本地页面发送的请求。' });
        const chunks = []; let size = 0;
        for await (const chunk of req) { size += chunk.length; if (size > 32768) return send(413, { message: '请求内容过大。' }); chunks.push(chunk); }
        let input; try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { return send(400, { message: '请求格式错误。' }); }
        if(parts.length===5&&parts[2]==='jobs'&&['trash','restore'].includes(parts[4]))return send(200,await modelService.trash(parts[3],parts[4]==='restore'));
        if (path.pathname === '/api/models/jobs') return send(202, await modelService.create(input));
        if (parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'recover') return send(202, await modelService.recover(parts[3], input));
        if (parts.length === 5 && parts[2] === 'jobs' && parts[4] === 'annotations') return send(200, await modelService.annotate(parts[3], input));
        return send(404, { message: '建模接口不存在。' });
      } catch (error) { return send(Number.isInteger(error.status) ? error.status : 500, { message: Number.isInteger(error.status) ? error.message : '本地建模服务发生错误，请检查数据目录。' }); }
    }
    if (req.url.startsWith('/api/images/')) {
      if (!imageService) return send(503, { message: '图像服务未启用。' });
      try {
        const path = new URL(req.url, origin);
        const pieces = path.pathname.split('/').filter(Boolean);
        if (req.method === 'GET' && path.pathname === '/api/images/status') return send(200, await imageService.status());
        if (req.method === 'GET' && path.pathname === '/api/images/jobs') return send(200, { jobs: await imageService.list() });
        if (req.method === 'GET' && pieces.length === 4 && pieces[2] === 'jobs') return send(200, await imageService.get(pieces[3]));
        if (req.method === 'GET' && pieces.length === 4 && pieces[2] === 'assets') {
          const asset = await imageService.asset(pieces[3]);
          res.writeHead(200, { ...headers, 'Content-Type': asset.mime, ...(path.searchParams.get('download') === '1' ? { 'Content-Disposition': `attachment; filename="image-${asset.id}.${asset.mime === 'image/png' ? 'png' : asset.mime === 'image/jpeg' ? 'jpg' : 'webp'}"` } : {}) });
          return res.end(asset.content);
        }
        if (req.method !== 'POST') return send(404, { message: '图像接口不存在。' });
        if (req.headers.origin !== origin || req.headers['content-type'] !== 'application/json') return send(403, { message: '仅接受本地页面发送的请求。' });
        const limit = path.pathname === '/api/images/uploads' ? 15 * 1024 * 1024 : 64 * 1024;
        let size = 0;
        const chunks = [];
        for await (const chunk of req) {
          size += chunk.length;
          if (size > limit) return send(413, { message: '请求内容过大，请缩小图片或提示词。' });
          chunks.push(chunk);
        }
        let input;
        try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
        catch { return send(400, { message: '请求格式不正确。' }); }
        if (path.pathname === '/api/images/check') return send(200, await imageService.check());
        if (path.pathname === '/api/images/uploads') return send(201, await imageService.upload(input));
        if (path.pathname === '/api/images/resolve') return send(200, { references: await imageService.resolveReferences(input.referenceIds) });
        if (path.pathname === '/api/images/preview' || path.pathname === '/api/images/jobs') {
          if (input.analysisId) {
            if (!analysisService) return send(422, { message: '分析服务不可用，请重新核对本次任务。' });
            const analysis = await analysisService.get(input.analysisId);
            if ((analysis.objective || 'restore') !== (input.objective || 'restore')) return send(422, { message: '分析与当前任务目标不一致，请重新分析。' });
            const originals = (await imageService.resolveReferences(input.referenceIds || [])).filter(a => a.kind !== 'result').map(a => a.id).sort();
            const sourceImages = analysis.kind === 'review' ? analysis.images.slice(0, -1) : analysis.images;
            const expected = (await imageService.resolveReferences(sourceImages.map(a => a.id))).filter(a => a.kind !== 'result').map(a => a.id).sort();
            if (analysis.state !== 'success' || analysis.caseId && analysis.caseId !== input.caseId || JSON.stringify(originals) !== JSON.stringify(expected)) return send(422, { message: '分析与当前文物原图不一致，请使用本件文物的分析。' });
            // Require a concrete plan (AI-labelled or manually edited), not a manual form step.
            if ((input.objective || 'restore') === 'restore' && !input.context?.decision?.trim()) return send(422, { message: '修复方案缺少结构假设，请重新分析或补充方案。' });
          }
          if (path.pathname === '/api/images/preview') return send(200, await imageService.preview(input));
          return send(202, await imageService.create(input));
        }
        if (pieces.length === 5 && pieces[2] === 'jobs' && pieces[4] === 'recover') return send(200, await imageService.recover(pieces[3]));
        if (pieces.length === 5 && pieces[2] === 'jobs' && pieces[4] === 'select') return send(200, await imageService.select(pieces[3]));
        return send(404, { message: '图像接口不存在。' });
      } catch (error) { return send(Number.isInteger(error.status) ? error.status : 500, { message: Number.isInteger(error.status) ? error.message : '本地图像服务发生错误，请检查数据目录或稍后重试。' }); }
    }
    if (req.method === 'GET' && req.url === '/api/status') {
      return send(200, { configured: Boolean(apiKey), busy, latest, endpoint: ENDPOINT });
    }
    if (req.method === 'POST') {
      if (req.headers.origin !== origin || req.headers['content-type'] !== 'application/json') {
        return send(403, { message: '仅接受本地测试页发送的请求。' });
      }
      if (req.url === '/api/clear') {
        if (busy) return send(409, { message: '检测正在进行，请稍候。' });
        try { await saveKey(''); }
        catch { return send(500, { message: '无法清除项目配置，请检查 .env 文件权限。' }); }
        apiKey = ''; latest = null;
        return send(200, { message: '项目配置和内存中的密钥已清除。' });
      }
      if (req.url !== '/api/check') return send(404, { message: '接口不存在。' });
      if (busy) return send(409, { message: '检测正在进行，请稍候。' });
      busy = true;
      try {
        const chunks = [];
        let size = 0;
        for await (const chunk of req) {
          size += chunk.length;
          if (size > 4096) return send(413, { message: '请求内容过长。' });
          chunks.push(chunk);
        }
        let input;
        try { input = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
        catch { return send(400, { message: '请求格式不正确。' }); }
        const candidate = typeof input?.apiKey === 'string' ? input.apiKey.trim() || apiKey : apiKey;
        if (!candidate) return send(400, { message: '请先填入国内版 API Key。' });
        if (!/^[\x21-\x7e]{8,512}$/.test(candidate)) return send(400, { message: '密钥格式不正确，请检查是否复制完整或包含空格。' });
        const started = performance.now();
        try {
          const response = await fetchImpl(ENDPOINT, {
            headers: { Authorization: `Bearer ${candidate}`, Accept: 'application/json' },
            signal: AbortSignal.timeout(25000),
            redirect: 'error',
          });
          const payload = await response.json().catch(() => null);
          const validBalance = typeof payload?.data?.balance === 'number' && Number.isFinite(payload.data.balance);
          const ok = response.ok && payload?.code === 0 && validBalance;
          const authFailed = response.status === 401 || response.status === 403;
          latest = {
            ok,
            checkedAt: new Date().toISOString(),
            durationMs: Math.round(performance.now() - started),
            httpStatus: response.status,
            code: Number.isFinite(payload?.code) ? payload.code : null,
            balance: ok ? payload.data.balance : null,
            frozen: ok && Number.isFinite(payload.data.frozen) ? payload.data.frozen : null,
            message: ok ? '已接通国内 Tripo API，密钥认证成功。' : authFailed
              ? '已收到国内 API 响应，但密钥认证被拒绝。请检查密钥是否来自国内开发者平台。'
              : response.status === 429 ? '国内 API 正在限流，请稍后重试。'
              : '已收到 API 响应，但未通过业务校验，请核对密钥、账户权限及业务码。',
          };
          if (ok) {
            apiKey = candidate;
            try { await saveKey(candidate); latest.saved = true; }
            catch { latest.saved = false; latest.message += ' 但 .env 保存失败，请检查项目文件权限。'; }
          }
          return send(200, latest);
        } catch (error) {
          latest = {
            ok: false, checkedAt: new Date().toISOString(),
            durationMs: Math.round(performance.now() - started), httpStatus: null,
            code: null, balance: null, frozen: null,
            message: error.name === 'TimeoutError' ? '请求在 25 秒后超时。请检查网络后重试。' : '未能取得 API 响应，请检查网络或本机代理配置。',
          };
          return send(200, latest);
        }
      } finally { busy = false; }
    }
    const files = { '/asset-trash.css':['asset-trash.css','text/css'], '/asset-trash.js': ['asset-trash.js','text/javascript'], '/': ['index.html', 'text/html'], '/app.js': ['app.js', 'text/javascript'], '/style.css': ['style.css', 'text/css'],
      '/images': ['images.html', 'text/html'], '/museum-bridge.js': ['museum-bridge.js', 'text/javascript'],
      '/photo-modeling.js': ['photo-modeling.js', 'text/javascript'], '/photo-modeling.css': ['photo-modeling.css', 'text/css'],
      '/images.js': ['images.js', 'text/javascript'], '/images.css': ['images.css', 'text/css'],
      '/processing.js': ['processing.js', 'text/javascript'], '/processing.css': ['processing.css', 'text/css'],
      '/models': ['models.html', 'text/html'], '/models.js': ['models.js', 'text/javascript'], '/models.css': ['models.css', 'text/css'], '/model-viewer.js': ['model-viewer.js', 'text/javascript'],
      '/studio.css': ['studio.css', 'text/css'], '/image-workbench.css': ['image-workbench.css', 'text/css'], '/model-workbench.css': ['model-workbench.css', 'text/css'] };
    const pagePath = new URL(req.url, origin).pathname;
    if (req.method !== 'GET' || !files[pagePath]) return send(404, { message: '页面不存在。' });
    try {
      const [file, type] = files[pagePath];
      let content = await readFile(new URL(file, publicDir));
      // The gallery bridge is separate from workbench business logic.
      if (['/images','/models'].includes(pagePath)) content = content.toString('utf8').replace('</head>', '<script src="/museum-bridge.js" defer></script></head>');
      if (qaMode && ['/images','/models'].includes(pagePath)) content=content.toString('utf8').replace(/(<body[^>]*>)/,'$1<div class="qa-notice" role="status">本地模拟测试 · 不调用收费服务 · 测试图片与模型不代表生成结果</div>');
      res.writeHead(200, { ...headers, 'Content-Type': `${type}; charset=utf-8` });
      res.end(content);
    } catch { send(500, { message: '读取本地页面失败。' }); }
  });
  return server;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const envFile = new URL('./.env', import.meta.url);
  try { process.loadEnvFile(fileURLToPath(envFile)); }
  catch (error) { if (error.code !== 'ENOENT') { console.error('无法读取 .env 配置。'); process.exit(1); } }
  const port = Number(process.env.TRIPO_TEST_PORT || 4317);
  const imageService = createImageService({
    apiKey: process.env.LK_IMAGE_API_KEY || '',
    baseUrl: process.env.LK_IMAGE_API_URL || IMAGE_BASE,
    dataDir: fileURLToPath(new URL('./data/images/', import.meta.url)),
  });
  await imageService.ready;
  let tripoKey = process.env.TRIPO_API_KEY || '';
  const multiviewService = createMultiviewService({ getKey: () => tripoKey, imageService, dataDir: fileURLToPath(new URL('./data/multiview/', import.meta.url)) });
  await multiviewService.ready;
  const modelService = createModelService({ getKey: () => tripoKey, imageService, multiviewService, dataDir: fileURLToPath(new URL('./data/models/', import.meta.url)) });
  await modelService.ready;
  const analysisService = createAnalysisService({ apiKey: process.env.DEEPSEEK_API_KEY || '', imageService, dataDir: fileURLToPath(new URL('./data/analysis/', import.meta.url)) });
  await analysisService.ready;
  let cleaning = false;
  const cleanCache = async () => { if (cleaning) return; cleaning = true; try { await cleanWorkspaceCache({ imageService, analysisService, multiviewService, modelService }); } catch { console.error('Temporary workspace cleanup deferred; existing jobs remain available.'); } finally { cleaning = false; } };
  await cleanCache();
  const cacheTimer = setInterval(cleanCache, 60 * 60 * 1000); cacheTimer.unref();
  const app = createApp({
    initialKey: tripoKey,
    saveKey: async value => { await saveEnvSetting(fileURLToPath(envFile), 'TRIPO_API_KEY', value); tripoKey = value; },
    imageService, modelService, analysisService, multiviewService,
  });
  app.listen(port, '127.0.0.1', () => console.log(`Local image studio: http://127.0.0.1:${port}/images\nTripo connection test: http://127.0.0.1:${port}`));
  app.on('error', error => { console.error(error.code === 'EADDRINUSE' ? '端口被占用，请设置 TRIPO_TEST_PORT 后重启。' : '本地服务启动失败。'); process.exitCode = 1; });
}
