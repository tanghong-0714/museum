import test from 'node:test';
import assert from 'node:assert/strict';
import {loadDynamicModel,dynamicModelProfile} from '../src/dynamic-model.js';

test('dynamic model preserves task identity without artifact knowledge',async()=>{
 const original=globalThis.fetch;
 const id='240e9611-abc';
 try{
  globalThis.fetch=async url=>{
   assert.equal(url,'/api/models/jobs');
   return {ok:true,json:async()=>({jobs:[{id,state:'success',objective:'restore',source:{name:'复原方案-240e9611.png'},modelUrl:`/api/models/jobs/${id}/model`}]})};
  };
  const profile=await loadDynamicModel(id);
  assert.equal(profile.id,`model-${id}`);
  assert.equal(profile.dynamic,true);
  assert.equal(profile.title,'复原作品 01');
  assert.equal(profile.model.desktop,`/api/models/jobs/${id}/model`);
  assert.deepEqual(profile.anchors,[]);
  assert.deepEqual(profile.focusTargets,[]);
  assert.match(profile.identity,/尚未核实/);
  await assert.rejects(loadDynamicModel('missing'),/未找到/);
  await assert.rejects(loadDynamicModel('../secret'),/编号无效/);
  globalThis.fetch=async()=>({ok:true,json:async()=>({jobs:[{id,state:'success',modelUrl:'https://example.com/private.glb'}]})});
  await assert.rejects(loadDynamicModel(id),/未找到/);
  globalThis.fetch=async()=>({ok:false,status:503});
  await assert.rejects(loadDynamicModel(id),/503/);
 }finally{globalThis.fetch=original;}
});

test('dynamic placeholder never chooses an unrelated static model',()=>{
 const profile=dynamicModelProfile('missing');
 assert.equal(profile.model.desktop,'');
 assert.equal(profile.model.mobile,'');
 assert.equal(profile.dynamic,true);
 assert.equal(profile.title,'数字复原作品');
});
