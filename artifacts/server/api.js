import {answerChat, modelConfig} from './chat.js';
import {loadArtifact, publicArtifact} from './knowledge.js';

const MAX_BODY = 32768;
function fail(status, code, message) { return Object.assign(new Error(message), {status, code}); }
function send(res, status, value) {
  if (res.destroyed || res.writableEnded) return;
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(JSON.stringify(value));
}
async function readBody(req) {
  if (Number(req.headers['content-length']) > MAX_BODY) throw fail(413, 'BODY_TOO_LARGE', '请求内容过长，请缩短消息或清空部分历史。');
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += Buffer.byteLength(chunk);
    if (size > MAX_BODY) throw fail(413, 'BODY_TOO_LARGE', '请求内容过长，请缩短消息或清空部分历史。');
    chunks.push(Buffer.from(chunk));
  }
  try { return JSON.parse(Buffer.concat(chunks).toString('utf8')); } catch { throw fail(400, 'INVALID_JSON', '请求需要有效的 JSON。'); }
}
function validate(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body) || typeof body.artifactId !== 'string' || !/^[a-z0-9][a-z0-9-]{0,79}$/.test(body.artifactId)) throw fail(400, 'INVALID_ARTIFACT', '请提供有效的文物编号。');
  if (typeof body.message !== 'string' || !body.message.trim() || body.message.length > 2000) throw fail(400, 'INVALID_MESSAGE', '消息需要 1 至 2000 个字符。');
  const history = body.history ?? [];
  if (!Array.isArray(history) || history.length > 12 || history.some(item => !item || !['user', 'assistant'].includes(item.role) || typeof item.content !== 'string' || !item.content.trim() || item.content.length > 1500) || history.reduce((sum, item) => sum + item.content.length, 0) > 10000) throw fail(400, 'INVALID_HISTORY', '历史记录最多 12 条，每条不超过 1500 字，总计不超过 10000 字。');
  return {artifactId: body.artifactId, message: body.message.trim(), history: history.map(({role, content}) => ({role, content}))};
}

/** Node HTTP / Vite Connect middleware. Returns false only for non-API paths. */
export async function handleApiRequest(req, res, options = {}) {
  const pathname = new URL(req.url || '/', 'http://localhost').pathname;
  if (pathname !== '/api' && !pathname.startsWith('/api/')) return false;
  const controller = new AbortController();
  const abort = () => controller.abort();
  const close = () => { if (!res.writableEnded) abort(); };
  req.once('aborted', abort);
  res.once('close', close);
  try {
    if (pathname === '/api/status') {
      if (req.method !== 'GET') throw fail(405, 'METHOD_NOT_ALLOWED', '此接口仅支持 GET。');
      send(res, 200, {ok: true, mode: modelConfig(options.env) ? 'model' : 'local'});
    } else if (pathname.startsWith('/api/artifacts/')) {
      if (req.method !== 'GET') throw fail(405, 'METHOD_NOT_ALLOWED', '此接口仅支持 GET。');
      const artifact = await loadArtifact(pathname.slice('/api/artifacts/'.length), options);
      if (!artifact) throw fail(404, 'ARTIFACT_NOT_FOUND', '未找到这个文物的知识资料。');
      send(res, 200, {artifact: publicArtifact(artifact), mode: modelConfig(options.env) ? 'model' : 'local'});
    } else if (pathname === '/api/chat') {
      if (req.method !== 'POST') throw fail(405, 'METHOD_NOT_ALLOWED', '此接口仅支持 POST。');
      if (!String(req.headers['content-type'] || '').toLowerCase().startsWith('application/json')) throw fail(415, 'UNSUPPORTED_MEDIA_TYPE', '请使用 application/json 发送请求。');
      const {artifactId, message, history} = validate(await readBody(req));
      const artifact = await loadArtifact(artifactId, options);
      if (!artifact) throw fail(404, 'ARTIFACT_NOT_FOUND', '未找到这个文物的知识资料。');
      if(String(req.headers.accept || '').includes('text/event-stream')){
        res.statusCode=200;res.setHeader('Content-Type','text/event-stream; charset=utf-8');res.setHeader('Cache-Control','no-cache, no-transform');res.setHeader('X-Accel-Buffering','no');res.setHeader('X-Content-Type-Options','nosniff');res.flushHeaders?.();
        const emit=(type,value)=>{if(!res.destroyed&&!res.writableEnded)res.write(`event: ${type}\ndata: ${JSON.stringify(value)}\n\n`);};
        emit('start',{status:'thinking'});
        const answer=await answerChat(artifact,message,history,{...options,signal:controller.signal,onDelta:text=>emit('delta',{text})});
        // The final, source-checked response replaces any provisional streamed text.
        emit('done',answer);res.end();
      }else{
        const answer = await answerChat(artifact, message, history, {...options, signal: controller.signal});
        send(res, 200, answer);
      }
    } else throw fail(404, 'NOT_FOUND', '未找到这个接口。');
  } catch (error) {
    if (error.code !== 'CLIENT_ABORT' && !controller.signal.aborted) {
      if(res.headersSent){if(!res.destroyed&&!res.writableEnded)res.end('event: error\ndata: {"message":"文物服务暂时不可用，请稍后重试。"}\n\n');}
      else send(res, error.status || 500, {error: {code: error.status ? error.code : 'INTERNAL_ERROR', message: error.status ? error.message : '文物服务暂时不可用，请稍后重试。'}});
    }
  } finally {
    req.removeListener('aborted', abort);
    res.removeListener('close', close);
  }
  return true;
}
