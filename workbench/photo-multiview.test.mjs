import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {randomUUID} from 'node:crypto';
import {ImageError} from './image-service.mjs';
import {createMultiviewService} from './multiview-service.mjs';
const png=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1cAAAAASUVORK5CYII=','base64');
async function fixture({ambiguous=false}={}) {
  const assets=new Map(), children=[], calls=[];
  function add(kind='reference') {const id=randomUUID();const a={id,kind,mime:'image/png',bytes:png.length+assets.size,content:Buffer.concat([png,Buffer.from(String(assets.size))])};assets.set(id,a);return id;}
  const ids={front:add(),left:add(),back:add(),right:add()};
  const images={status:async()=>({configured:true}),asset:async id=>{if(!assets.has(id))throw Error('missing');return assets.get(id);},list:async()=>children,get:async id=>children.find(j=>j.id===id),waitForIdle:async()=>{},create:async input=>{calls.push(input);if(ambiguous)throw Error('timeout');const result={id:add('result')};const child={id:randomUUID(),requestId:input.requestId,state:'success',result};children.push(child);return child;}};
  const dataDir=await mkdtemp(join(tmpdir(),'photo-views-'));
  const service=createMultiviewService({imageService:images,dataDir,fetchImpl:()=>assert.fail('No Tripo requests')});
  const input=(refs={})=>({requestId:randomUUID(),viewSet:'photo',sourceAssetId:ids.front,referenceViews:refs,workspace:'quick',notes:'保留裂纹'});
  return {service,images,ids,calls,input,dataDir,add};
}
test('four original photos copy bytes and provenance without generation',async()=>{
 const f=await fixture(),req=f.input({left:f.ids.left,back:f.ids.back,right:f.ids.right});const j=await f.service.create(req);await f.service.waitForIdle();const done=await f.service.get(j.id);
 assert.equal(done.state,'success');assert.deepEqual(done.views.map(v=>v.view),['front','left','back','right']);assert.ok(done.views.every(v=>v.provenance==='original'));assert.equal(f.calls.length,0);
 assert.deepEqual((await f.service.asset(j.id,'left')).content,(await f.images.asset(f.ids.left)).content);assert.equal((await f.service.create(req)).id,j.id);
});
test('missing directions generate edits preserving damage and source labels',async()=>{
 const f=await fixture();const j=await f.service.create(f.input({left:f.ids.left}));await f.service.waitForIdle();const done=await f.service.get(j.id);
 assert.equal(done.state,'success');assert.equal(f.calls.length,2);assert.deepEqual(done.views.map(v=>v.provenance),['original','original','generated','generated']);assert.ok(f.calls.every(c=>c.mode==='edit'&&c.prompt.includes('不得修复')&&c.referenceIds.includes(f.ids.front)));
});
test('derived regeneration and replacement preserve originals and prior job',async()=>{
 const f=await fixture();const first=await f.service.create(f.input({left:f.ids.left,back:f.ids.back,right:f.ids.right}));await f.service.waitForIdle();
 const refined=await f.service.refine(first.id,{requestId:randomUUID(),views:['left']});await f.service.waitForIdle();assert.equal((await f.service.get(refined.id)).views.find(v=>v.view==='left').provenance,'generated');
 const replacement=f.add();const replaced=await f.service.replace(refined.id,{requestId:randomUUID(),view:'left',assetId:replacement});await f.service.waitForIdle();const done=await f.service.get(replaced.id);assert.equal(done.views.find(v=>v.view==='left').assetId,replacement);assert.equal(done.views.find(v=>v.view==='back').assetId,f.ids.back);assert.equal((await f.service.get(first.id)).views.find(v=>v.view==='left').assetId,f.ids.left);assert.equal(f.calls.length,1);
});
test('ambiguous submission is not resubmitted on recover or restart',async()=>{
 const f=await fixture({ambiguous:true});const req=f.input({left:f.ids.left,back:f.ids.back});const j=await f.service.create(req);await f.service.waitForIdle();assert.equal((await f.service.get(j.id)).state,'uncertain');
 const service=createMultiviewService({imageService:f.images,dataDir:f.dataDir});await service.recover(j.id);await service.waitForIdle();assert.equal(f.calls.length,1);assert.equal((await service.create(req)).id,j.id);assert.equal((await service.get(j.id)).views.length,3);
});
test('reject restoration outputs, ambiguous source jobs and invalid directions',async()=>{
 const f=await fixture();await assert.rejects(f.service.create({...f.input(),sourceAssetId:f.add('result')}),{status:400});await assert.rejects(f.service.create({...f.input(),sourceJobId:randomUUID()}),{status:400});await assert.rejects(f.service.create(f.input({top:f.ids.left})),{status:400});assert.equal(f.calls.length,0);
});
test('refining failed direction preserves successful parallel siblings',async()=>{
 const f=await fixture();const create=f.images.create;let count=0;
 f.images.create=async input=>{const child=await create(input);if(++count===2){child.state='failed';delete child.result;}return child;};
 const j=await f.service.create(f.input());await f.service.waitForIdle();assert.equal((await f.service.get(j.id)).views.length,3);
 const derived=await f.service.refine(j.id,{requestId:randomUUID(),views:['back']});await f.service.waitForIdle();const done=await f.service.get(derived.id);
 assert.equal(done.state,'success');assert.equal(done.views.length,4);assert.equal(f.calls.length,4);assert.equal(done.views.find(v=>v.view==='left').assetId,(await f.service.get(j.id)).views.find(v=>v.view==='left').assetId);
});
test('photo request identifiers reject changed inputs and cross operations',async()=>{
 const f=await fixture();const req=f.input({left:f.ids.left,back:f.ids.back,right:f.ids.right});const j=await f.service.create(req);await f.service.waitForIdle();
 await assert.rejects(f.service.create({...req,sourceAssetId:f.ids.back}),{status:409});
 await assert.rejects(f.service.create({...req,referenceViews:{...req.referenceViews,left:f.ids.right}}),{status:409});
 await assert.rejects(f.service.refine(j.id,{requestId:req.requestId,views:['left']}),{status:409});
 const refine={requestId:randomUUID(),views:['left']};const child=await f.service.refine(j.id,refine);await f.service.waitForIdle();assert.equal((await f.service.refine(j.id,refine)).id,child.id);
 await assert.rejects(f.service.refine(j.id,{...refine,views:['right']}),{status:409});
 await assert.rejects(f.service.replace(j.id,{requestId:refine.requestId,view:'left',assetId:f.ids.left}),{status:409});
});
test('prompt identifies each reference in actual order and unavailable refine creates no record',async()=>{
 const f=await fixture();const j=await f.service.create(f.input({right:f.ids.right,left:f.ids.left}));await f.service.waitForIdle();
 assert.deepEqual(f.calls[0].referenceIds,[f.ids.front,f.ids.left,f.ids.right]);assert.ok(f.calls[0].prompt.includes('第2张参考为左侧实拍，第3张参考为右侧实拍'));
 f.images.status=async()=>({configured:false});const before=(await f.service.list()).length;
 await assert.rejects(f.service.refine(j.id,{requestId:randomUUID(),views:['left']}),{status:400});assert.equal((await f.service.list()).length,before);
});

test('known busy rejection can recover after image service is released',async()=>{
 const f=await fixture();const create=f.images.create;let busy=true;
 f.images.create=async input=>{if(busy)throw new ImageError(409,'busy');return create(input);};
 const j=await f.service.create(f.input({left:f.ids.left,back:f.ids.back}));await f.service.waitForIdle();
 const failed=await f.service.get(j.id);assert.equal(failed.state,'uncertain');assert.equal(failed.directions[0].submitted,false);assert.equal(failed.views.length,3);
 busy=false;await f.service.recover(j.id);await f.service.waitForIdle();assert.equal((await f.service.get(j.id)).state,'success');assert.equal(f.calls.length,1);
});


test('prepared photo front preserves raw evidence and four-reference limit through refinement', async () => {
  const f = await fixture();
  const preparedJobId = randomUUID(), preparedId = f.add('result');
  const previousGet = f.images.get;
  f.images.get = async id => id === preparedJobId ? { id, state:'success', objective:'photo', mode:'edit', originalReferences:[{id:f.ids.front}], result:{id:preparedId} } : previousGet(id);
  const request = { ...f.input({left:f.ids.left,back:f.ids.back}), preparedJobId };
  const first = await f.service.create(request); await f.service.waitForIdle();
  const done = await f.service.get(first.id);
  assert.equal(done.state,'success'); assert.equal(done.sourceAssetId,f.ids.front);
  assert.equal(done.views[0].assetId,preparedId); assert.equal(done.views[0].provenance,'generated');
  assert.deepEqual(f.calls[0].referenceIds,[preparedId,f.ids.front,f.ids.left,f.ids.back]);
  assert.equal(f.calls[0].objective,'photo');
  const refined = await f.service.refine(first.id,{requestId:randomUUID(),views:['right']}); await f.service.waitForIdle();
  assert.equal((await f.service.get(refined.id)).views[0].assetId,preparedId);
  await assert.rejects(f.service.create({...request,preparedJobId:randomUUID()}),{status:409});
  const foreign = f.add();
  await assert.rejects(f.service.create({...request,requestId:randomUUID(),sourceAssetId:foreign}),{status:400});
});
