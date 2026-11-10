import { defineConfig } from 'vite';

const MODEL_PATH = /^\/api\/models\/jobs(?:\/[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}\/model)?$/;

export function isAllowedModelRequest(method, url) {
  return method === 'GET' && MODEL_PATH.test(url || '');
}

function readOnlyModels() {
  const install = server => { server.middlewares.use((req, res, next) => {
    if (!req.url?.startsWith('/api/models')) return next();
    if (isAllowedModelRequest(req.method, req.url)) return next();
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify({ message: '展厅只允许读取已保存的模型。' }));
  }); };
  return { name: 'read-only-model-library', configureServer: install, configurePreviewServer: install };
}

const proxy = { '/api/models': { target: process.env.MUSEUM_WORKBENCH_ORIGIN || 'http://127.0.0.1:4317', changeOrigin: true } };

export default defineConfig({
  plugins: [readOnlyModels()],
  server: { proxy },
  preview: { proxy },
});
