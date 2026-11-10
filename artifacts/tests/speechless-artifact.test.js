import test from 'node:test';
import assert from 'node:assert/strict';
import {loadArtifact,retrieve,actionsFor} from '../server/knowledge.js';
import {answerChat} from '../server/chat.js';
import {resolveExhibit} from '../src/exhibits.js';

test('speechless companion preserves its persona, sources and provenance boundary',async()=>{
 const display=resolveExhibit('?artifact=speechless-buddha');
 const artifact=await loadArtifact(display.id);
 assert.deepEqual(artifact.prompts.map(p=>p.text),display.prompts);
 assert.equal(artifact.journey.entries.filter(e=>e.kind==='reference').length,0);
 assert.equal(display.focusTargets[2],'pedestal');
 assert.ok(artifact.journey.entries.some(e=>e.kind==='digital'));
 assert.equal(artifact.prompts[0].text,'你和网上的无语佛有什么关系？');
 assert.match(artifact.identityNote,/未取得/);
 for(const entry of artifact.journey.entries.filter(e=>e.kind==='reference'))assert.match(entry.note,/未归给当前上传模型/);
 for(const target of display.focusTargets)assert.ok(actionsFor(artifact.cards).some(a=>a.target===target));
 const meme=await answerChat(artifact,'无语佛怎么火的',[],{env:{}});
 assert.ok(meme.citations.some(c=>c.id==='redstar-2023'));
 const move=await answerChat(artifact,'十年首次职场调动搬家',[],{env:{}});
 assert.ok(move.citations.some(c=>c.id==='jingdezhen-2025'));
 const story=await answerChat(artifact,display.prompts[2],[],{env:{}});
 assert.match(story.answer,/淡淡/);
 assert.ok(retrieve(artifact,display.prompts[2]).every(c=>c.section!=='journey'));
 let evidence;
 await answerChat(artifact,'今天有点累',[],{env:{ARTIFACT_API_BASE_URL:'https://example.com/v1',ARTIFACT_API_KEY:'test-key',ARTIFACT_MODEL:'test'},fetch:async(_url,options)=>{
  evidence=JSON.parse(JSON.parse(options.body).messages[1].content.slice('EVIDENCE\n'.length));
  return new Response(JSON.stringify({choices:[{message:{content:JSON.stringify({answer:'今天已经很费电了。先歇一会儿，我听着。',sourceIds:[],cardIds:[],actions:[]})}}]}),{status:200});
 }});
 assert.equal(evidence.nickname,'淡淡');
 assert.ok(evidence.persona.style.some(s=>s.includes('先回应用户')));
 assert.ok(evidence.persona.boundaries.some(s=>s.includes('不冒充佛教权威')));
});
