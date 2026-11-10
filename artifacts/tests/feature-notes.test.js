import test from 'node:test';
import assert from 'node:assert/strict';
import {exhibits} from '../src/exhibits.js';
import {featureNotes,getFeatureNote} from '../src/feature-notes.js';

test('all catalog artifacts have distinct close-looking notes for every real anchor',()=>{
 assert.ok(Object.keys(exhibits).length>=7);
 const copies=new Set();let count=0;
 for(const exhibit of Object.values(exhibits)){
  assert.deepEqual(Object.keys(featureNotes[exhibit.id]).sort(),[...exhibit.focusTargets].sort(),exhibit.id);
  exhibit.anchors.forEach((anchor,index)=>{
   const note=getFeatureNote(exhibit,index);
   assert.ok(note.copy.length>=65,`${exhibit.id}/${anchor.label}: meaningful description`);
   assert.ok(note.look.length>=20,`${exhibit.id}/${anchor.label}: concrete viewing instruction`);
   assert.ok(!copies.has(note.copy),'do not reuse another artifact explanation');
   copies.add(note.copy);count++;
  });
 }
 assert.equal(count,Object.values(exhibits).reduce((n,e)=>n+e.anchors.length,0));
});
test('unverified patina and character interpretations retain their evidence boundaries',()=>{
 assert.match(featureNotes['bronze-head'].patina.copy,/不能仅凭锈色判断/);
 assert.match(featureNotes['pipa-figurine'].pattern.copy,/不把它们当作原始彩绘/);
 assert.match(featureNotes['speechless-buddha'].face.copy,/不是对造像原始含义的定论/);
});
