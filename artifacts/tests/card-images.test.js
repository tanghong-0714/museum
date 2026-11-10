import test from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import sharp from 'sharp';
import {createCardImageHandler} from '../server/card-images.js';
import {needsImageSave} from '../src/passport-save.js';

test('WeChat and phones use image saving; desktop retains download', () => {
  assert.equal(needsImageSave('Mozilla/5.0 MicroMessenger/8.0'), true);
  assert.equal(needsImageSave('Mozilla/5.0 (iPhone)'), true);
  assert.equal(needsImageSave('Mozilla/5.0 Android'), true);
  assert.equal(needsImageSave('Mozilla/5.0 Windows Chrome/130'), false);
});

test('PNG transport enforces origin, size, format, bounded retention and expiry', async t => {
  let clock = 1000;
  const handler = createCardImageHandler({now:()=>clock,ttl:1000,maxBytes:100_000,maxEntries:1});
  const server = createServer(async (req,res) => { if (!await handler(req,res)) {res.statusCode=404;res.end();} });
  await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
  t.after(()=>new Promise(resolve=>server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const png = await sharp({create:{width:1080,height:1440,channels:3,background:'#dfece1'}}).png().toBuffer();
  // Match the browser's binary Blob upload; avoid Buffer-to-text coercion in fetch adapters.
  const post = (body=png,headers={})=>fetch(origin+'/api/card-images',{method:'POST',body:new Blob([body],{type:'image/png'}),headers:{Origin:origin,'Content-Type':'image/png',...headers}});
  assert.equal((await post(png,{Origin:'https://foreign.example'})).status,403);
  assert.equal((await post(png,{'Content-Type':'image/svg+xml'})).status,415);
  assert.equal((await post(Buffer.alloc(100_001))).status,413);
  assert.equal((await post(Buffer.from('not a PNG'))).status,400);
  const response = await post(); assert.equal(response.status,201);
  const first = await response.json();
  const image = await fetch(origin+first.url);
  assert.equal(image.status,200); assert.equal(image.headers.get('content-type'),'image/png');
  assert.match(image.headers.get('content-disposition'),/^inline/);
  assert.deepEqual(Buffer.from(await image.arrayBuffer()),png);
  const head = await fetch(origin+first.url,{method:'HEAD'}); assert.equal(head.status,200); assert.equal((await head.text()).length,0);
  const second = await (await post()).json();
  assert.equal((await fetch(origin+first.url)).status,404);
  assert.equal((await fetch(origin+second.url)).status,200);
  clock += 1001;
  assert.equal((await fetch(origin+second.url)).status,404);
});
