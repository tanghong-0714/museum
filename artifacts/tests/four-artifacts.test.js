import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {exhibits,resolveExhibit} from '../src/exhibits.js';
import {loadArtifact,actionsFor,contextualQuery,publicArtifact} from '../server/knowledge.js';
import {answerChat} from '../server/chat.js';
import {getCardPortrait,getCardThumbnail,getCardTheme} from '../src/passport-media.js';

const ids=['goujian-sword','galloping-horse','four-ram-zun','zenghouyi-bells'];
for(const id of ids){
 test(`${id}: route, real model assets, portraits and knowledge form a complete exhibit`,async()=>{
  const exhibit=exhibits[id],artifact=await loadArtifact(id);
  assert.equal(resolveExhibit(`?artifact=${id}`),exhibit);
  assert.equal(artifact.name,exhibit.title);
  assert.deepEqual(artifact.prompts.map(p=>p.text),exhibit.prompts);
  assert.equal(exhibit.anchors.length,exhibit.focusTargets.length);
  for(const asset of [exhibit.model.desktop,exhibit.model.mobile,getCardPortrait(id),getCardThumbnail(id)]){
   assert.ok(asset?.includes(id));
   const file=new URL(`../public${asset}`,import.meta.url);
   assert.ok((await stat(file)).size>1000);
   if(asset.endsWith('.glb'))assert.equal((await readFile(file)).subarray(0,4).toString(),'glTF');
  }
  assert.notEqual(getCardTheme(id).name,getCardTheme('phoenix-ewer').name);
  for(const target of exhibit.focusTargets){
   const cards=artifact.cards.filter(c=>c.focusTarget===target);
   assert.ok(actionsFor(cards).some(a=>a.target===target),`missing focus action: ${target}`);
  }
  for(const topic of Object.values(exhibit.topics))assert.ok(exhibit.focusTargets.includes(topic.target));
  assert.ok(publicArtifact(artifact).journey.entries.length>=3);
  const sourceIds=new Set(artifact.sources.map(s=>s.id));
  for(const card of artifact.cards)for(const source of card.sourceIds||[])assert.ok(sourceIds.has(source));
  const story=await answerChat(artifact,exhibit.prompts[2],[],{env:{}});
  assert.match(story.answer,new RegExp(exhibit.nickname));
  assert.match(story.answer,/想象|故事|创作/);
  assert.doesNotMatch(story.answer,/凤首壶|三星堆|礼泉寺/);
  assert.equal(story.citations.length,0);
 });
}
test('new artifact questions replace unrelated earlier context',()=>{
 for(const message of ['越王勾践剑的纹样呢？','马踏飞燕为什么昂首？','四羊方尊的羊首在哪里？','编钟怎么悬挂？'])
  assert.equal(contextualQuery(message,[{role:'user',content:'你是哪一年在哪里出土的？'}]),message);
});
