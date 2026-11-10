import test from 'node:test';
import assert from 'node:assert/strict';
import {loadArtifact,actionsFor,contextualQuery,retrieve} from '../server/knowledge.js';
import {answerChat} from '../server/chat.js';
import {exhibits} from '../src/exhibits.js';

for(const id of ['longquan-figure','pipa-figurine']){
 test(`${id}: prompts, sourced answers, stories and focus labels stay within this artifact`,async()=>{
  const artifact=await loadArtifact(id),display=exhibits[id];
  assert.deepEqual(artifact.prompts.map(p=>p.text),display.prompts);
  const fact=await answerChat(artifact,display.prompts[0],[],{env:{}});
  assert.ok(fact.citations.length);
  assert.ok(fact.citations.every(c=>artifact.sources.some(s=>s.id===c.id)));
  const story=await answerChat(artifact,display.prompts[2],[],{env:{}});
  assert.equal(story.citations.length,0);
  assert.match(story.answer,new RegExp(display.nickname));
  assert.doesNotMatch(story.answer,/三星堆|凤首壶|礼泉寺/);
  assert.ok(retrieve(artifact,display.prompts[2]).every(c=>c.section!=='journey'));
  for(const target of display.focusTargets){
   const cards=artifact.cards.filter(c=>c.focusTarget===target);
   const action=actionsFor(cards).find(a=>a.target===target);
   assert.ok(action);assert.equal(action.label,cards.find(c=>c.focusLabel).focusLabel);
  }
  assert.deepEqual(actionsFor(artifact.cards,[{type:'focus',target:'handle'}]),[]);
 });
}
test('new artifact topics do not inherit an unrelated provenance question',()=>{
 for(const message of ['龙泉青瓷怎样烧成？','琵琶为什么叫这个名字？','女俑哪里最好看？'])
  assert.equal(contextualQuery(message,[{role:'user',content:'你是哪一年在哪里出土的？'}]),message);
});
