// Extract only the answer string while a structured JSON response is arriving.
// Incomplete escapes are held back; metadata is validated by chat.js at completion.
export function answerPrefix(json) {
 const match=/"answer"\s*:\s*"/.exec(json);if(!match)return '';
 let result='';
 for(let i=match.index+match[0].length;i<json.length;i++){
  const c=json[i];if(c==='"')break;
  if(c!=='\\'){result+=c;continue;}
  const next=json[++i];if(next===undefined)break;
  if(next==='u'){
   const code=json.slice(i+1,i+5);if(!/^[0-9a-f]{4}$/i.test(code))break;
   result+=String.fromCharCode(parseInt(code,16));i+=4;
  }else{const escaped={'"':'"','\\':'\\','/':'/','n':'\n','r':'\r','t':'\t','b':'\b','f':'\f'};if(!(next in escaped))break;result+=escaped[next];}
 }
 // Don't expose a lone high surrogate at a chunk boundary.
 return result.replace(/[\uD800-\uDBFF]$/, '');
}

export async function readStructuredStream(response,onDelta){
 if(!response.body)throw Error('provider_empty_response');
 const reader=response.body.getReader(),decoder=new TextDecoder();
 let buffer='',content='',size=0,emitted='',finished=false;
 function line(value){
  if(!value.startsWith('data:'))return;
  const data=value.slice(5).trim();if(!data)return;
  if(data==='[DONE]'){finished=true;return;}
  const event=JSON.parse(data);if(event.error)throw Error('provider_stream_error');
  const choice=event.choices?.[0];
  if(choice?.finish_reason&&choice.finish_reason!=='stop')throw Error('provider_incomplete');
  const delta=choice?.delta?.content;if(typeof delta!=='string')return;
  content+=delta;const prefix=answerPrefix(content);
  if(prefix.length>5000)throw Error('provider_output_too_large');
  if(prefix.length>emitted.length){onDelta(prefix.slice(emitted.length));emitted=prefix;}
 }
 try{
  while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>100000)throw Error('provider_output_too_large');buffer+=decoder.decode(value,{stream:true});let index;while((index=buffer.indexOf('\n'))>=0){line(buffer.slice(0,index).replace(/\r$/,''));buffer=buffer.slice(index+1);}}
  buffer+=decoder.decode();if(buffer.trim())line(buffer);
  if(!finished)throw Error('provider_truncated');return content;
 }finally{await reader.cancel().catch(()=>{});reader.releaseLock();}
}
