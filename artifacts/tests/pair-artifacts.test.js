import test from 'node:test';
import assert from 'node:assert/strict';
import {loadArtifact,unknownAnswer,actionsFor,retrieve} from '../server/knowledge.js';
import {answerChat} from '../server/chat.js';
import {exhibits} from '../src/exhibits.js';

test('new companions use isolated stories, sourced reference and working detail actions',async()=>{
 for(const id of ['cloud-mirror','liquan-bodhisattva']){
  const artifact=await loadArtifact(id),display=exhibits[id];
  const story=await answerChat(artifact,display.prompts[2],[],{env:{}});
  assert.match(story.answer,/想象/);assert.equal(story.citations.length,0);
  assert.doesNotMatch(story.answer,/凤首|三星堆|壶柄/);
  const reference=await answerChat(artifact,display.prompts[0],[],{env:{}});
  assert.ok(reference.citations.length);assert.match(reference.answer,/参考/);
  for(const target of display.focusTargets){
   const cards=artifact.cards.filter(card=>card.focusTarget===target);
   assert.ok(actionsFor(cards).some(action=>action.target===target));
  }
  assert.equal(retrieve(artifact,'凤首壶柄').some(card=>card.focusTarget==='handle'),false);
 }
});
test('reference provenance is answerable without transferring it to the uploaded statue',async()=>{
 const statue=await loadArtifact('liquan-bodhisattva');
 const result=await answerChat(statue,'礼泉寺参考残像在哪里出土？',[],{env:{}});
 assert.match(result.answer,/1987/);assert.match(result.answer,/外形不同/);assert.ok(result.citations.length);
 for(const q of ['你在哪里出土？','礼泉寺参考残像在哪里出土，经历了什么战争？','礼泉寺参考残像在哪里出土，谁修复的？'])assert.ok(unknownAnswer(statue,q));
 assert.ok(unknownAnswer({...statue,cards:[]},'礼泉寺参考残像在哪里出土？'));
 assert.ok(unknownAnswer({...statue,sources:[]},'礼泉寺参考残像在哪里出土？'));
 assert.match(exhibits[statue.id].identity,/完整立像/);
});
