import './narrator.css';
import {createNarrationPlayer} from './narration-player.js';
export async function mountNarrator(exhibit){
 const launch=document.createElement('button');launch.id='narrator-launch';launch.textContent='♫ 语音讲解';launch.setAttribute('aria-expanded','false');document.querySelector('.header-actions').prepend(launch);
 const panel=document.createElement('aside');panel.id='narrator-panel';panel.hidden=true;panel.setAttribute('aria-label','文物语音讲解');panel.innerHTML='<header><div><small>文物讲解员 · 青年男声</small><h2>听见器物的故事</h2></div><button class="nr-close" aria-label="收起语音讲解">×</button></header><p class="nr-voice">云希 · 普通话 · AI 合成语音</p><div class="nr-controls"><button class="nr-all">▶ 全部播放</button><button class="nr-pause" disabled>暂停</button><button class="nr-stop" disabled>停止</button><select class="nr-rate" aria-label="讲解语速"><option value="0.85">0.85 倍</option><option value="1" selected>1 倍</option><option value="1.15">1.15 倍</option></select></div><p class="nr-status" role="status">正在准备讲解…</p><progress class="nr-progress" value="0" max="1" aria-label="当前段落播放进度"></progress><nav class="nr-tabs" aria-label="讲解章节"><button data-section="view" aria-pressed="true">观器</button><button data-section="story" aria-pressed="false">器物故事</button><button data-section="journey" aria-pressed="false">时光足迹</button></nav><div class="nr-list"></div><p class="nr-foot">全部播放依次朗读三个章节；点击段落可单独听。</p>';
 document.body.append(panel);const audio=new Audio();audio.id='narration-audio';audio.preload='auto';audio.hidden=true;document.body.append(audio);
 const $=s=>panel.querySelector(s);let items=[],section='view',activeId=null;
 function show(open){panel.hidden=!open;launch.setAttribute('aria-expanded',String(open));if(open)panel.querySelector('.nr-close').focus();else launch.focus();}
 launch.onclick=()=>show(panel.hidden);$('.nr-close').onclick=()=>show(false);
 const player=createNarrationPlayer(audio,s=>{
  const changed=activeId!==s.item?.id;activeId=s.item?.id;$('.nr-status').textContent=s.state==='idle'?'选择全部播放，或点击下面的段落':s.state==='error'?'这一段暂时无法播放，点击“重试”或选择其他段落':`${s.state==='paused'?'已暂停':s.state==='loading'?'正在载入':'正在讲解'} · ${s.index+1}/${s.total} · ${s.item.label}`;
  $('.nr-pause').disabled=s.state==='idle';$('.nr-pause').textContent=s.state==='paused'?'继续':s.state==='error'?'重试':'暂停';$('.nr-stop').disabled=s.state==='idle';$('.nr-progress').value=s.duration>0?s.time/s.duration:0;
  launch.textContent=['playing','loading'].includes(s.state)?'♫ 正在讲解':'♫ 语音讲解';
  if(changed&&s.item&&section!==s.item.section){section=s.item.section;render();}
  panel.querySelectorAll('[data-paragraph]').forEach(b=>{const active=b.dataset.paragraph===activeId;b.classList.toggle('is-reading',active);b.setAttribute('aria-pressed',String(active));});
  document.querySelectorAll('[data-narration-id]').forEach(n=>n.classList.toggle('is-narrated',n.dataset.narrationId===activeId));
 });
 const announce=()=>document.dispatchEvent(new Event('narration-start'));
 function play(chosen){announce();player.play(chosen);}
 function render(){panel.querySelectorAll('[data-section]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.section===section)));$('.nr-list').replaceChildren(...items.filter(i=>i.section===section).map(i=>{const b=document.createElement('button');b.className='nr-paragraph';b.dataset.paragraph=i.id;b.setAttribute('aria-label','播放段落：'+i.label);const label=document.createElement('strong');label.textContent='▷ '+i.label;const p=document.createElement('span');p.textContent=i.text;b.append(label,p);b.onclick=()=>play([i]);return b;}));}
 $('.nr-all').onclick=()=>play(items);$('.nr-pause').onclick=()=>{if(['paused','error'].includes(player.state)){announce();player.resume();}else player.pause();};$('.nr-stop').onclick=()=>player.stop();$('.nr-rate').onchange=e=>player.setRate(Number(e.target.value));
 panel.querySelectorAll('[data-section]').forEach(b=>b.onclick=()=>{section=b.dataset.section;render();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)player.pause();});window.addEventListener('pagehide',()=>player.destroy());
 document.addEventListener('click',e=>{if(e.target.closest('#awaken-toggle,.bell-demo,.bell-pads,.bell-hit'))player.stop();if(e.target.closest('#about,[data-mode="chat"]'))player.pause();},true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){show(false);e.preventDefault();}});
 try{const r=await fetch(`/narration/${exhibit.id}.json`);if(!r.ok)throw Error();items=(await r.json()).items;render();$('.nr-status').textContent='选择全部播放，或点击下面的段落';
  const normalize=s=>s.replace(/\s/g,'');
  const decorate=()=>{for(const el of document.querySelectorAll('.hero-poem,.hero-description,#detail-copy,#detail-look,.guide-lead,#guide-brief,#guide-long p,#guide-excerpt,.guide-motto,.journey-copy,.journey-end')){const text=normalize(el.textContent);const wanted=el.closest('#journey-panel')?'journey':el.closest('#story-panel')?'story':'view';const i=items.find(i=>i.section===wanted&&(normalize(i.text)===text||(el.matches('.journey-copy,.journey-end')&&normalize(i.text).endsWith(text))));if(!i||el.dataset.narrationId===i.id)continue;el.dataset.narrationId=i.id;el.classList.add('narratable');el.tabIndex=0;el.setAttribute('role','button');el.setAttribute('aria-label','朗读：'+i.label);el.title='点击朗读本段';el.onclick=()=>play([i]);el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();play([i]);}};}}
  decorate();const observer=new MutationObserver(decorate);observer.observe(document.querySelector('#experience'),{childList:true,subtree:true,characterData:true});window.addEventListener('pagehide',()=>observer.disconnect(),{once:true});
 }catch{$('.nr-status').textContent='讲解目录载入失败，请刷新重试';$('.nr-all').disabled=true;}
}
