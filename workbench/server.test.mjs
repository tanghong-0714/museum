import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createApp, ENDPOINT } from './server.mjs';

async function fixture(t, fetchImpl, options = {}) {
  const server = createApp({ fetchImpl, ...options });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  async function post(path, body, requestOrigin = origin) {
    return fetch(`${origin}${path}`, { method: 'POST', headers: { Origin: requestOrigin, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  }
  return { origin, post };
}

test('缺少密钥或跨站请求不会访问供应商', async t => {
  let calls = 0;
  const { post } = await fixture(t, async () => { calls++; throw new Error(); });
  assert.equal((await post('/api/check', {})).status, 400);
  assert.equal((await post('/api/check', { apiKey: 'synthetic-key' }, 'https://example.com')).status, 403);
  assert.equal(calls, 0);
});

test('认证成功只返回余额白名单，密钥可复用且可清除', async t => {
  const key = 'synthetic-secret-not-a-real-key';
  let calls = 0;
  const { origin, post } = await fixture(t, async (url, options) => {
    calls++;
    assert.equal(url, ENDPOINT);
    assert.equal(options.headers.Authorization, `Bearer ${key}`);
    return Response.json({ code: 0, data: { balance: 0, frozen: 2, private_account: 'not-for-browser' } });
  });
  const response = await post('/api/check', { apiKey: key });
  const raw = await response.text();
  const result = JSON.parse(raw);
  assert.equal(result.ok, true);
  assert.equal(result.balance, 0);
  assert.ok(!raw.includes(key));
  assert.ok(!raw.includes('private_account'));
  assert.equal((await (await post('/api/check', {})).json()).ok, true);
  assert.equal(calls, 2);
  await post('/api/clear', {});
  const status = await (await fetch(`${origin}/api/status`)).json();
  assert.equal(status.configured, false);
  assert.equal(status.latest, null);
  assert.equal((await post('/api/check', {})).status, 400);
});

test('认证拒绝不会误报成功或回显上游敏感信息', async t => {
  const key = 'synthetic-invalid-secret';
  const { post, origin } = await fixture(t, async () => Response.json({ code: 2000, message: key }, { status: 401 }));
  const raw = await (await post('/api/check', { apiKey: key })).text();
  assert.equal(JSON.parse(raw).ok, false);
  assert.equal(JSON.parse(raw).httpStatus, 401);
  assert.ok(!raw.includes(key));
  assert.equal((await (await fetch(`${origin}/api/status`)).json()).configured, false);
});

test('HTTP 200 的业务错误与缺少余额都不能算接通', async t => {
  let calls = 0;
  const { post } = await fixture(t, async () => Response.json(++calls === 1 ? { code: 1004 } : { code: 0, data: {} }));
  assert.equal((await (await post('/api/check', { apiKey: 'synthetic-key' })).json()).ok, false);
  assert.equal((await (await post('/api/check', { apiKey: 'synthetic-key' })).json()).ok, false);
});

test('网络错误不会暴露密钥或堆栈', async t => {
  const { post } = await fixture(t, async () => { throw new Error('synthetic-private-secret'); });
  const raw = await (await post('/api/check', { apiKey: 'synthetic-key' })).text();
  assert.equal(JSON.parse(raw).httpStatus, null);
  assert.equal(JSON.parse(raw).ok, false);
  assert.ok(!raw.includes('synthetic-private-secret'));
});

test('只有认证成功才保存配置，清除功能同时清除配置', async t => {
  const saved = [];
  let calls = 0;
  const { post } = await fixture(t, async () => ++calls === 1
    ? Response.json({ code: 2 }, { status: 401 })
    : Response.json({ code: 0, data: { balance: 10, frozen: 0 } }),
    { saveKey: async value => saved.push(value) });
  await post('/api/check', { apiKey: 'synthetic-invalid-key' });
  assert.deepEqual(saved, []);
  const result = await (await post('/api/check', { apiKey: 'synthetic-valid-key' })).json();
  assert.equal(result.saved, true);
  assert.deepEqual(saved, ['synthetic-valid-key']);
  await post('/api/clear', {});
  assert.deepEqual(saved, ['synthetic-valid-key', '']);
});

test('配置写入失败不冒充已保存，也不丢失真实认证结果', async t => {
  const { post } = await fixture(t, async () => Response.json({ code: 0, data: { balance: 10, frozen: 0 } }),
    { saveKey: async () => { throw new Error('private filesystem details'); } });
  const result = await (await post('/api/check', { apiKey: 'synthetic-valid-key' })).json();
  assert.equal(result.ok, true);
  assert.equal(result.saved, false);
  assert.ok(!JSON.stringify(result).includes('private filesystem details'));
});
