import test from 'node:test';
import assert from 'node:assert/strict';
import {loadArtifact,publicArtifact,retrieve} from '../server/knowledge.js';
import {exhibits} from '../src/exhibits.js';

test('each timeline exposes its own traceable references and explicitly undated creative chapters',async()=>{
 for(const id of Object.keys(exhibits)){
  const artifact=await loadArtifact(id),published=publicArtifact(artifact),entries=published.journey.entries;
  assert.ok(entries.length>=4);
  assert.equal(new Set(entries.map(e=>e.id)).size,entries.length);
  for(const entry of entries){
   assert.ok(['reference','creative','digital'].includes(entry.kind));
   if(entry.kind==='reference'){
    assert.ok(entry.sourceIds.length);
    assert.ok(entry.note);
    for(const sourceId of entry.sourceIds)assert.ok(published.sources.some(source=>source.id===sourceId&&source.url?.startsWith('https://')));
   }
   if(entry.kind==='creative'){assert.equal(entry.sourceIds.length,0);assert.doesNotMatch(entry.time,/\d/);assert.match(entry.text,/想象|故事/);}
  }
  assert.equal(published.cards,undefined);
  assert.ok(retrieve(artifact,'时光足迹时间轴').some(card=>card.id.startsWith(id+'-journey-')));
  assert.ok(retrieve(artifact,exhibits[id].prompts[2]).every(card=>card.section!=='journey'));
 }
});
test('the 1987 discovery belongs to the reference remnant, not the full statue model',async()=>{
 const statue=publicArtifact(await loadArtifact('liquan-bodhisattva'));
 const discovery=statue.journey.entries.find(e=>e.time.includes('1987'));
 assert.equal(discovery.kind,'reference');assert.match(discovery.text,/礼泉寺遗址出土的菩萨残像/);assert.match(discovery.note,/不归给当前立像模型/);
});
