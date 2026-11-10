import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {exhibits,resolveExhibit} from '../src/exhibits.js';
import {loadArtifact,retrieve,actionsFor} from '../server/knowledge.js';
import {answerChat} from '../server/chat.js';

test('every display profile resolves to its own model and knowledge, with complete focus mappings',async()=>{
 assert.equal(resolveExhibit('').id,'phoenix-ewer');assert.equal(resolveExhibit('?artifact=bronze-head').id,'bronze-head');assert.equal(resolveExhibit('?artifact=missing'),null);
 for(const exhibit of Object.values(exhibits)){
  assert.equal((await loadArtifact(exhibit.id)).id,exhibit.id);
  for(const file of Object.values(exhibit.model).filter(x=>typeof x==='string'))await access('public'+file);
  assert.equal(exhibit.anchors.length,exhibit.focusTargets.length);
  for(const topic of Object.values(exhibit.topics))if(topic.target)assert.ok(exhibit.focusTargets.includes(topic.target));
 }
});
test('bronze observations and stories do not borrow phoenix knowledge or assert a museum identity',async()=>{
 const bronze=await loadArtifact('bronze-head');
 const eyes=await answerChat(bronze,'你想让我先看哪里？',[],{env:{}});
 assert.ok(eyes.actions.some(a=>a.target==='eyes'));assert.doesNotMatch(eyes.answer,/壶柄|凤首|元代/);
 const story=await answerChat(bronze,'讲一段关于凝望的小故事',[],{env:{}});
 assert.match(story.answer,/想象/);assert.match(story.answer,/闭馆/);assert.equal(story.citations.length,0);
 const unknown=await answerChat(bronze,'你的年代和出土地点确认了吗？',[],{env:{}});
 assert.match(unknown.answer,/还没有确认/);assert.equal(unknown.citations.length,0);
 const context=await answerChat(bronze,'三星堆的青铜头像有什么特点？',[],{env:{}});
 assert.ok(context.citations.every(c=>c.id.startsWith('scwwj-')));assert.ok(context.citations.length);assert.match(context.answer,/参考/);
 assert.ok(!retrieve(bronze,'凤首壶柄').some(c=>c.focusTarget==='handle'));
 const porcelain=await loadArtifact('phoenix-ewer');assert.ok(!retrieve(porcelain,'眼睛耳朵青铜头像').some(c=>c.id.startsWith('bronze')));
});
test('model request uses selected persona and only selected evidence',async()=>{
 const bronze=await loadArtifact('bronze-head');let sent;
 const result=await answerChat(bronze,'三星堆的青铜头像有什么特点？',[],{env:{ARTIFACT_API_BASE_URL:'https://test.example/v1',ARTIFACT_API_KEY:'unit-test-only',ARTIFACT_MODEL:'test'},fetch:async(url,init)=>{
  sent=JSON.parse(init.body);
  return new Response(JSON.stringify({choices:[{message:{content:JSON.stringify({answer:'相关参考头像的线条简洁明快，不能直接认定为当前模型的身份。',sourceIds:['scwwj-head-2'],cardIds:['bronze-context-round'],actions:[]})}}]}));
 }});
 assert.equal(result.mode,'model');assert.match(sent.messages[1].content,/守望/);assert.doesNotMatch(sent.messages[1].content,/capitalmuseum|phoenix-ewer/);assert.doesNotMatch(sent.messages[0].content,/文字伙伴青花/);
});
