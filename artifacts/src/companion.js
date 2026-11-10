import './companion.css';

const el=(tag,cls,text)=>{const n=document.createElement(tag);n.className=cls;if(text!==undefined)n.textContent=text;return n;};
const btn=(cls,text,fn)=>{const b=el('button',cls,text);b.type='button';b.onclick=fn;return b;};

export async function consumeChatStream(response,onDelta){
 if(!response.ok){const payload=await response.json().catch(()=>null);throw Error(payload?.error?.message||'连接暂时中断，请稍后再试。');}
 if(!response.headers.get('content-type')?.includes('text/event-stream'))return response.json();
 const reader=response.body.getReader(),decoder=new TextDecoder();let buffer='',result=null;
 function event(block){
  const lines=block.split('\n'),type=lines.find(s=>s.startsWith('event:'))?.slice(6).trim();
  const data=lines.filter(s=>s.startsWith('data:')).map(s=>s.slice(5).trimStart()).join('\n');if(!data)return;
  const payload=JSON.parse(data);
  if(type==='delta'&&typeof payload.text==='string')onDelta(payload.text);
  if(type==='done')result=payload;
  if(type==='error')throw Error(payload.message||'回答暂时中断。');
 }
 try{
  while(true){const {done,value}=await reader.read();if(done)break;buffer+=decoder.decode(value,{stream:true}).replace(/\r/g,'');let i;while((i=buffer.indexOf('\n\n'))>=0){event(buffer.slice(0,i));buffer=buffer.slice(i+2);}if(buffer.length>100000)throw Error('回答内容过长。');}
  buffer+=decoder.decode();if(buffer.trim())event(buffer);
  if(!result||typeof result.answer!=='string')throw Error('回答尚未完整接收，请重试。');return result;
 }finally{await reader.cancel().catch(()=>{});reader.releaseLock();}
}

export function mountArtifactChat({onFocus=()=>{},exhibit}){
 const welcome=exhibit.welcome,initial=exhibit.prompts,name=exhibit.nickname;
 const root=document.querySelector('#experience');let active=false,busy=false,artifact=null,destroyed=false,controller=null,request=0,exchanges=[],latest=null,lastQuestion='',composing=false;
 const profileController=new AbortController();
 const speech=el('aside','artifact-speech');speech.id='artifact-chat';speech.hidden=true;speech.setAttribute('aria-label',`${name}的回答`);
 const status=el('p','speech-status',`${name} · 与你相遇`);status.setAttribute('role','status');
 const text=el('div','speech-copy',welcome);text.id='speech-copy';text.tabIndex=0;
 const actions=el('div','speech-actions');
 const tools=el('div','speech-tools');
 const historyButton=btn('speech-link','对话记录 ↗',()=>showHistory());
 const sourceButton=btn('speech-link','资料出处 ↗',()=>showHistory(true));sourceButton.hidden=true;
 tools.append(historyButton,sourceButton);speech.append(status,text,actions,tools);root.append(speech);
 const dock=el('section','chat-dock');dock.id='chat-dock';dock.hidden=true;dock.setAttribute('aria-label',`向${name}提问`);
 const form=el('form','chat-composer'),input=el('textarea','chat-input');input.id='chat-input';input.rows=1;input.maxLength=2000;input.placeholder='想问我什么？';input.setAttribute('aria-label',`想问${name}什么？`);
 const send=btn('chat-send','↗',()=>{});send.type='submit';send.setAttribute('aria-label','发送');
 const stop=btn('chat-stop','停止',()=>controller?.abort());stop.hidden=true;stop.setAttribute('aria-label','停止生成');
 form.append(input,send,stop);const prompts=el('div','chat-prompts');
 const hint=el('p','composer-hint','Enter 发送 · Shift + Enter 换行');dock.append(form,prompts,hint);root.append(dock);
 const dialog=el('dialog','conversation-dialog');dialog.id='conversation-history';dialog.setAttribute('aria-labelledby','conversation-title');
 const head=el('div','conversation-heading'),title=el('h2','',`与${name}的对话`);title.id='conversation-title';
 const close=btn('dialog-close','×',()=>dialog.close());close.setAttribute('aria-label','关闭对话记录');head.append(title,close);
 const log=el('div','chat-log');log.setAttribute('role','log');log.setAttribute('aria-label','对话记录');log.setAttribute('aria-live','off');
 const clear=btn('clear-chat','清空会话',()=>{controller?.abort();request++;busy=false;exchanges=[];latest=null;log.replaceChildren();lastQuestion='';render(welcome);status.textContent=`${name} · 重新认识你`;sourceButton.hidden=true;actions.replaceChildren();setPrompts(initial);update();dialog.close();});
 // Keep secondary actions out of the dialog's direct-button close selector.
 const footer=el('div','conversation-footer');footer.append(clear);
 dialog.append(head,log,footer);root.append(dialog);
 let historyOrigin=null;
 function showHistory(sources=false){historyOrigin=document.activeElement;if(!dialog.open)dialog.showModal();if(sources){const last=log.querySelector('article:last-child details');if(last){last.open=true;last.scrollIntoView({block:'nearest'});}}else log.scrollTop=log.scrollHeight;}
 dialog.addEventListener('close',()=>{if(historyOrigin?.isConnected&&!historyOrigin.closest('[hidden]'))historyOrigin.focus({preventScroll:true});});
 function append(role,content){const article=el('article',`chat-message chat-message-${role}`);article.append(el('p','chat-speaker',role==='user'?'你':name));const copy=el('div','chat-message-text',content);article.append(copy);log.append(article);return {article,copy};}
 function render(value){text.textContent=value;}
 function update(){send.disabled=busy||!artifact||!input.value.trim();send.hidden=busy;stop.hidden=!busy;prompts.querySelectorAll('button').forEach(b=>b.disabled=busy||!artifact);speech.classList.toggle('speaking',busy);speech.setAttribute('aria-busy',String(busy));clear.disabled=busy||!log.children.length;historyButton.hidden=!log.children.length;}
 function setPrompts(items){prompts.replaceChildren(...items.slice(0,3).map(s=>btn('chat-prompt',s,()=>submit(s))));}
 function citations(article,items){
  if(!items?.length)return;
  const details=el('details','chat-sources');details.append(el('summary','',`资料出处 · ${items.length}`));
  for(const item of items){try{const url=new URL(item.url);if(!['http:','https:'].includes(url.protocol))continue;const a=el('a','',item.title+' ↗');a.href=url.href;a.target='_blank';a.rel='noopener noreferrer';details.append(a);if(item.excerpt)details.append(el('p','',item.excerpt));}catch{}}
  article.append(details);
 }
 function focusButtons(items){actions.replaceChildren();for(const a of (items||[]).slice(0,2)){if(a.type==='focus'&&exhibit.focusTargets.includes(a.target))actions.append(btn('speech-focus',a.label||'看看这个细节 ↗',()=>onFocus(a.target)));}}
 async function submit(value=input.value){
  const message=value.trim();if(!message||busy||!artifact||destroyed)return;
  if(message.length>2000){hint.textContent='问题请控制在 2000 字以内。';return;}
  lastQuestion=message;input.value='';busy=true;const version=++request;controller=new AbortController();const ownController=controller;
  append('user',message);const reply=append('assistant','');let streamed='';
  speech.scrollTop=0;
  status.textContent=`${name} · 让我想一想`;render('你的话我听见了，让我慢慢说给你听……');actions.replaceChildren();sourceButton.hidden=true;hint.textContent='正在回应，文字将逐步呈现';update();
  try{
   const response=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json',Accept:'text/event-stream'},signal:ownController.signal,body:JSON.stringify({artifactId:exhibit.id,message,history:exchanges.slice(-8).map(x=>({...x,content:x.content.slice(0,1200)}))})});
   const payload=await consumeChatStream(response,delta=>{if(version!==request||destroyed)return;streamed+=delta;render(streamed);reply.copy.textContent=streamed;status.textContent=`${name} · 正在讲述`;});
   if(version!==request||destroyed)return;
   if(!payload.answer?.trim())throw Error('没有收到完整回答。');
   latest=payload;render(payload.answer);reply.copy.textContent=payload.answer;citations(reply.article,payload.citations);focusButtons(payload.actions);sourceButton.hidden=!payload.citations?.length;
   if(payload.notice&&/超时|不可用|中断/.test(payload.notice))reply.article.append(el('p','chat-notice',payload.notice));
   exchanges.push({role:'user',content:message},{role:'assistant',content:payload.answer});
   status.textContent=payload.mode==='model'?`${name} · 说给你听`:`${name} · 资料与故事`;
   hint.textContent='回答已完成 · 可以继续追问';
   if(payload.suggestions?.length)setPrompts(payload.suggestions);
  }catch(error){
   if(version!==request||destroyed)return;
   const cancelled=ownController.signal.aborted;
   status.textContent=cancelled?`${name} · 已停止`:`${name} · 暂时未能回答`;
   render(cancelled?'这次讲述先停在这里。想继续时，再问我一次吧。':'连接暂时中断了，你的问题我还留着。请稍后重试。');
   reply.copy.textContent=cancelled?'[已停止，本轮未完成]':'[本轮未完成，请重试]';
   // Partial model output is not treated as a verified answer or conversation history.
   actions.replaceChildren(btn('speech-focus','重新发送 ↗',()=>submit(lastQuestion)));
   hint.textContent=cancelled?'已停止生成':'发送未完成，可重试';
  }finally{if(version===request&&!destroyed){busy=false;controller=null;update();}}
 }
 async function load(){
  try{const response=await fetch(`/api/artifacts/${exhibit.id}`,{signal:profileController.signal});const data=await response.json();if(!response.ok||data.artifact?.id!==exhibit.id)throw Error();if(destroyed)return;artifact=data.artifact;update();}
  catch{if(destroyed)return;status.textContent=`${name} · 资料尚未连接`;render('还没连上我的资料，稍后再试试看。');actions.replaceChildren(btn('speech-focus','重试连接 ↗',()=>{actions.replaceChildren();load();}));}
 }
 form.onsubmit=e=>{e.preventDefault();if(!composing)submit();};input.oninput=update;input.oncompositionstart=()=>{composing=true;};input.oncompositionend=()=>{composing=false;};input.onkeydown=e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing&&!composing&&e.keyCode!==229){e.preventDefault();submit();}};
 function viewport(){const vv=window.visualViewport;const offset=active&&innerWidth<=760?Math.max(0,innerHeight-(vv?.height||innerHeight)-(vv?.offsetTop||0)):0;root.style.setProperty('--keyboard-offset',`${offset}px`);root.classList.toggle('keyboard-open',active&&offset>100);}
 window.visualViewport?.addEventListener('resize',viewport);window.visualViewport?.addEventListener('scroll',viewport);
 setPrompts(initial);update();load();
 return {setOpen(value){active=value;speech.hidden=!value;dock.hidden=!value;if(!value&&dock.contains(document.activeElement))document.activeElement.blur();viewport();},destroy(){destroyed=true;controller?.abort();profileController.abort();window.visualViewport?.removeEventListener('resize',viewport);window.visualViewport?.removeEventListener('scroll',viewport);speech.remove();dock.remove();dialog.remove();}};
}
