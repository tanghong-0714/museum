import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import {answerPrefix,readStructuredStream} from '../server/stream.js';
import {answerChat} from '../server/chat.js';
import {loadArtifact} from '../server/knowledge.js';
import {handleApiRequest} from '../server/api.js';

const env={ARTIFACT_API_BASE_URL:'https://provider.example/v1',ARTIFACT_API_KEY:'test-key-not-real',ARTIFACT_MODEL:'mock-stream'};
function provider(content,{done=true,finish='stop',chunks=7}={}){
 const messages=[];for(let i=0;i<content.length;i+=chunks)messages.push(`data: ${JSON.stringify({choices:[{delta:{content:content.slice(i,i+chunks)}}]})}\r\n\r\n`);
 messages.push(`data: ${JSON.stringify({choices:[{delta:{},finish_reason:finish}]})}\n\n`);if(done)messages.push('data: [DONE]\n\n');
 const bytes=new TextEncoder().encode(messages.join(''));let offset=0;
 return new Response(new ReadableStream({pull(c){if(offset===bytes.length){c.close();return;}const end=Math.min(bytes.length,offset+11);c.enqueue(bytes.slice(offset,end));offset=end;}}),{headers:{'Content-Type':'text/event-stream'}});
}
test('incremental answer handles split escapes, Unicode and metadata without leaking JSON',()=>{
 const answer='青花\n他说：“你好” 🌿';const json=JSON.stringify({answer,sourceIds:['source']});let previous='';
 for(let i=1;i<=json.length;i++){const prefix=answerPrefix(json.slice(0,i));assert.ok(answer.startsWith(prefix));assert.ok(prefix.startsWith(previous));previous=prefix;}
 assert.equal(previous,answer);
 assert.equal(answerPrefix('{"answer":"\\u4f60\\u59'),'你');
});
test('provider SSE works across byte boundaries and exposes answer before metadata',async()=>{
 const value={answer:'我把凤凰留在青花里。\n看看我的凤首吧。',sourceIds:['museum']};const deltas=[];
 const raw=await readStructuredStream(provider(JSON.stringify(value)),s=>deltas.push(s));
 assert.deepEqual(JSON.parse(raw),value);assert.equal(deltas.join(''),value.answer);assert.ok(deltas.length>1);
});
test('truncated or token-limited provider output is never accepted as complete',async()=>{
 await assert.rejects(readStructuredStream(provider('{"answer":"青花"}',{done:false}),()=>{}),/truncated/);
 await assert.rejects(readStructuredStream(provider('{"answer":"青花"}',{finish:'length'}),()=>{}),/incomplete/);
});
test('streamed model retains source checks and final fallback replaces invalid provisional text',async()=>{
 const artifact=await loadArtifact('phoenix-ewer'),deltas=[];
 const good={answer:'我的凤首昂起，正好作壶流。',sourceIds:['capitalmuseum-collection'],cardIds:[]};
 const response=await answerChat(artifact,'为什么叫凤首扁壶？',[],{env,onDelta:t=>deltas.push(t),fetch:async(url,init)=>{assert.equal(JSON.parse(init.body).stream,true);return provider(JSON.stringify(good));}});
 assert.equal(response.mode,'model');assert.equal(deltas.join(''),good.answer);assert.ok(response.citations.length);
 const bad=await answerChat(artifact,'为什么叫凤首扁壶？',[],{env,onDelta:()=>{},fetch:async()=>provider(JSON.stringify({...good,sourceIds:['invented']}))});
 assert.equal(bad.mode,'local');assert.notEqual(bad.answer,good.answer);assert.match(bad.notice,/校验/);
});
test('client cancellation aborts streaming provider rather than starting fallback',async()=>{
 const artifact=await loadArtifact('phoenix-ewer'),controller=new AbortController();
 const answer=answerChat(artifact,'为什么叫凤首扁壶？',[],{env,signal:controller.signal,onDelta:()=>{},fetch:async(url,init)=>new Response(new ReadableStream({start(c){init.signal.addEventListener('abort',()=>c.error(new DOMException('aborted','AbortError')));}}),{headers:{'Content-Type':'text/event-stream'}})});
 controller.abort();await assert.rejects(answer,{code:'CLIENT_ABORT'});
});
test('HTTP SSE local fallback sends a complete final answer and keeps ordinary JSON clients',async()=>{
 const server=http.createServer((req,res)=>handleApiRequest(req,res,{env:{}}));await new Promise(r=>server.listen(0,'127.0.0.1',r));
 try{const url=`http://127.0.0.1:${server.address().port}/api/chat`,body=JSON.stringify({artifactId:'phoenix-ewer',message:'你来自哪个年代？'});
 const streaming=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json',Accept:'text/event-stream'},body});assert.match(streaming.headers.get('content-type'),/text\/event-stream/);const events=await streaming.text();assert.match(events,/event: start/);assert.match(events,/event: done/);assert.match(events,/1271/);
 const normal=await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body});assert.equal((await normal.json()).mode,'local');
 }finally{server.closeAllConnections();await new Promise(r=>server.close(r));}
});
