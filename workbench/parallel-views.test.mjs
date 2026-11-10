import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {randomUUID} from 'node:crypto';
import {createImageService} from './image-service.mjs';
import {createMultiviewService} from './multiview-service.mjs';

const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1cAAAAASUVORK5CYII=','base64');
const picture=n=>Buffer.concat([png,Buffer.from(String(n))]);
const response=n=>Response.json({data:[{b64_json:picture(n).toString('base64')}]});
async function until(check) {
 const deadline=Date.now()+3000;
 while(!await check()){if(Date.now()>deadline)assert.fail('Expected concurrent work did not start/finish');await new Promise(r=>setTimeout(r,5));}
}
async function fixture(t) {
 const root=await mkdtemp(join(tmpdir(),'parallel-views-')),pending=[];let hold=false,posts=0,queries=0;
 const images=createImageService({apiKey:'synthetic',dataDir:join(root,'images'),lookupImpl:async()=>[{address:'8.8.8.8'}],fetchImpl:async(url)=>{
  if(url.includes('/media/status')){queries++;return Response.json({data:{state:'success',result_url:'https://example.com/recovered.png'}});}
  if(url==='https://example.com/recovered.png')return new Response(picture('recovered'));
  posts++;
  if(!hold)return response('source');
  return new Promise(resolve=>pending.push(resolve));
 }});
 const source=await images.create({requestId:randomUUID(),mode:'generate',prompt:'test source'});await images.waitForIdle();
 const views=createMultiviewService({imageService:images,dataDir:join(root,'views')});hold=true;
 t.after(async()=>{pending.forEach((resolve,i)=>resolve(response(i)));await views.waitForIdle();await images.waitForIdle();});
 return {images,views,pending,source,input:{requestId:randomUUID(),sourceJobId:source.id,viewSet:'vertical'},counts:()=>({posts,queries})};
}

test('four real image workers overlap, save out of order, and recover a limited direction without another POST',async t=>{
 const f=await fixture(t),j=await f.views.create(f.input);
 // None of the upstream responses resolve until all four requests have arrived.
 await until(()=>f.pending.length===4);
 assert.equal((await f.images.status()).activeJobIds.length,4);
 const unrelated={requestId:randomUUID(),mode:'generate',prompt:'unrelated',concurrencyGroup:j.id};
 await assert.rejects(f.images.create(unrelated),{status:409}); // body cannot enable concurrency
 await assert.rejects(f.images.create(unrelated,{concurrencyGroup:j.id}),{status:409}); // fifth blocked
 await assert.rejects(f.images.create(unrelated,{concurrencyGroup:'other'}),{status:409});
 f.pending[2](response(2));
 await until(async()=>(await f.views.get(j.id)).views.length===1);
 assert.equal((await f.views.get(j.id)).state,'running');
 assert.equal((await f.images.status()).activeJobIds.length,3);
 f.pending[0](response(0));f.pending[3](response(3));
 f.pending[1](new Response('{}',{status:429,headers:{'x-task-id':'98765'}}));
 await f.views.waitForIdle();
 const partial=await f.views.get(j.id);assert.equal(partial.state,'uncertain');assert.equal(partial.views.length,3);
 assert.equal((await f.images.status()).activeJobId,null);
 await f.views.recover(j.id);await f.views.waitForIdle();
 const done=await f.views.get(j.id);assert.equal(done.state,'success');
 assert.deepEqual(done.views.map(v=>v.view),['top','bottom','left','right']);
 assert.deepEqual(f.counts(),{posts:5,queries:1}); // source + four original requests
 assert.equal((await f.views.create(f.input)).id,j.id);
 assert.equal(f.counts().posts,5);
});

test('simultaneous identical outputs are serialized for duplicate detection',async t=>{
 const f=await fixture(t),j=await f.views.create(f.input);await until(()=>f.pending.length===4);
 f.pending.forEach(resolve=>resolve(response('same')));await f.views.waitForIdle();
 const done=await f.views.get(j.id);assert.equal(done.state,'needs_review');assert.equal(done.views.length,1);
 assert.equal(done.directions.filter(d=>d.state==='duplicate').length,3);
 await f.views.recover(j.id);await f.views.waitForIdle();assert.equal(f.counts().posts,5);
});
