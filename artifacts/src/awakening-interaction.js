import {bellMelody,createBellMelody} from './bell-melody.js';
import {createBellSound} from './bell-sound.js';

export function mountAwakeningInteraction({exhibit,stage,experience,getWorld,play,onClose}){
 const kind=exhibit.performance?.kind;
 if(!['bells','buddha'].includes(kind))return {update(){},onStart(){},stop(){}};
 if(kind==='buddha'){
  const line=document.createElement('p');line.className='awakening-reply';line.hidden=true;line.setAttribute('role','status');stage.append(line);
  const replies=['先别急，容我淡定一下。','看开一点，肩膀也轻一点。','今天的烦恼，先放一会儿。'];let index=0;
  return {onStart(){line.textContent=replies[index++%replies.length];},stop(){line.hidden=true;},update({player,visible}){line.hidden=!visible||player?.state!=='playing'||player.time<1.4||player.time>4.8;}};
 }
 const sound=createBellSound();let metadata=null,opened=false,follow=false,step=0,lastTime=-1,previousClip='',lastState='',demoIndex=0;
 const panel=document.createElement('section');panel.className='bell-console';panel.hidden=true;panel.setAttribute('aria-label','编钟试奏');
 panel.innerHTML='<div class="bell-console-head"><span>指尖奏一曲</span><button type="button" class="bell-close" aria-label="收起编钟试奏">×</button></div><p class="bell-instruction" role="status">点击光点，听见一声回应</p><div class="bell-pads"></div><p class="bell-keyboard-hint">键盘 1—5 敲钟 · 宫 商 角 徵 羽</p><div class="bell-console-actions"><button type="button" class="bell-demo">演绎《钟庭微风》</button><button type="button" class="bell-follow">跟着奏</button><button type="button" class="bell-mute" aria-pressed="false">声音 · 开</button></div><small>合成演示音色 · 非原器录音</small>';
 stage.append(panel);
 const overlay=document.createElement('div');overlay.className='bell-hit-layer';overlay.hidden=true;stage.append(overlay);
 const instruction=panel.querySelector('.bell-instruction'),pads=panel.querySelector('.bell-pads');
 const phrase=[0,2,3,2,1,0,1,2];
 const demo=panel.querySelector('.bell-demo');
 const melody=createBellMelody((index,cue)=>{
  if(!metadata)return;
  play(metadata.bells[index].clip,{interrupt:true});sound.strike(index);setLights(index);
  instruction.textContent=`《${bellMelody.title}》 · 第 ${Math.floor(cue.beat/4)+1}/8 小节`;
 },()=>{demo.textContent='再听《钟庭微风》';setLights(-1);instruction.textContent='一曲终了，余音轻落。也可以点钟自由试奏。';});
 function endMelody(){melody.stop();demo.textContent='演绎《钟庭微风》';}

 const buttons=[],hits=[];
 const setLights=index=>{buttons.forEach((b,i)=>{b.dataset.lit=String(i===index);b.setAttribute('aria-label',`${metadata.bells[i].label||`第${i+1}钟`}${follow&&i===index?'，下一音':''}`);});hits.forEach((b,i)=>b.dataset.lit=String(i===index));};
 function strike(index){
  if(!metadata||!opened)return;
  endMelody();sound.stop();
  if(follow&&index!==phrase[step]%metadata.bells.length){instruction.textContent='试试亮起的这一口钟';return;}
  const b=metadata.bells[index];if(!play(b.clip,{interrupt:true}))return;sound.strike(index);lastTime=0;previousClip=b.clip;
  if(follow){step++;if(step>=phrase.length){follow=false;instruction.textContent='这一曲，完成了。再来一次？';setLights(-1);}else{instruction.textContent=`跟着光点奏 · ${step}/${phrase.length}`;setLights(phrase[step]%metadata.bells.length);}}
  else{instruction.textContent=`${b.label||`第${index+1}钟`} · 余音轻落`;setLights(index);}
 }
 fetch(exhibit.performance.metadata).then(r=>{if(!r.ok)throw Error('metadata');return r.json();}).then(data=>{
  if(!Array.isArray(data.bells)||data.bells.length<5||data.bells.some(b=>!b.clip||!Array.isArray(b.center)||b.center.length!==3||!b.center.every(Number.isFinite)))throw Error('Invalid bell positions');
  metadata=data;demo.disabled=false;if(opened)melody.start();
  data.bells.forEach((bell,i)=>{
   const button=document.createElement('button');button.type='button';button.textContent=['宫','商','角','徵','羽','清宫','清商'][i]||String(i+1);button.onclick=()=>strike(i);button.setAttribute('aria-keyshortcuts',String(i+1));const key=document.createElement('kbd');key.textContent=String(i+1);button.append(key);pads.append(button);buttons.push(button);
   const hit=document.createElement('button');hit.type='button';hit.className='bell-hit';hit.textContent=String(i+1);hit.setAttribute('aria-label',bell.label||`敲第${i+1}口钟`);hit.onclick=()=>strike(i);overlay.append(hit);hits.push(hit);
  });setLights(-1);
 }).catch(()=>{instruction.textContent='钟位暂未载入，可先观看演绎';panel.querySelector('.bell-follow').disabled=true;});
 const onKey=e=>{
  if(!opened||panel.hidden||!matchMedia('(min-width:761px)').matches||experience.dataset.mode!=='view'||document.hidden||document.querySelector('dialog[open]'))return;
  if(e.defaultPrevented||e.repeat||e.isComposing||e.ctrlKey||e.altKey||e.metaKey||e.shiftKey)return;
  const target=e.target;if(target instanceof Element&&(target.closest('input,textarea,select,[role=slider],[role=textbox]')||target.isContentEditable))return;
  if(!/^[1-5]$/.test(e.key))return;
  const button=buttons[Number(e.key)-1];if(!button)return;e.preventDefault();button.click();
 };
 document.addEventListener('keydown',onKey);window.addEventListener('pagehide',()=>document.removeEventListener('keydown',onKey),{once:true});
 panel.querySelector('.bell-close').onclick=()=>{stop();onClose();};
 demo.disabled=true;demo.onclick=()=>{if(melody.active){endMelody();sound.stop();getWorld()?.performancePlayer?.stop();setLights(-1);instruction.textContent='演绎已停止，可点钟试奏';}else start();};
 panel.querySelector('.bell-follow').onclick=()=>{endMelody();getWorld()?.performancePlayer?.stop();sound.stop();follow=true;step=0;instruction.textContent=`跟着光点奏 · 0/${phrase.length}`;setLights(phrase[0]);};
 panel.querySelector('.bell-mute').onclick=e=>{const b=e.currentTarget,mute=b.getAttribute('aria-pressed')!=='true';b.setAttribute('aria-pressed',String(mute));b.textContent=mute?'声音 · 关':'声音 · 开';sound.setMuted(mute);};
 function start(){opened=true;panel.hidden=false;overlay.hidden=false;follow=false;demoIndex=0;lastTime=-1;previousClip='';sound.unlock();instruction.textContent=metadata?'《钟庭微风》 · 准备演绎':'正在准备钟位…';if(metadata){melody.start();demo.textContent='停止演绎';}}
 function stop(){endMelody();opened=false;follow=false;panel.hidden=true;overlay.hidden=true;sound.stop();setLights(-1);}
 document.addEventListener('visibilitychange',()=>{if(document.hidden){endMelody();sound.stop();getWorld()?.performancePlayer?.stop();}});window.addEventListener('pagehide',()=>sound.stop());
 return {get autoPlaying(){return melody.active;},onStart:start,stop,update({player,visible,blocked,dt=0}){
  if(!visible){if(opened)stop();return;}if(!opened)return;
  if(blocked){endMelody();sound.stop();return;}
  const wasAuto=melody.active;melody.update(dt);
  if(player?.state==='returning'){sound.stop();}
  const clip=player?.clipName||'',time=player?.time||0;
  if(clip!==previousClip||time<lastTime-.05){demoIndex=0;previousClip=clip;}
  if(!wasAuto&&player?.state==='playing'&&clip===exhibit.performance.defaultClip&&metadata){
   const sequence=metadata.sequence||phrase.map((bell,i)=>({time:.2+i*.7,bell:bell%metadata.bells.length}));
   while(demoIndex<sequence.length&&time>=sequence[demoIndex].time){const cue=sequence[demoIndex++];sound.strike(cue.bell);setLights(cue.bell);}
  }
  if(player?.state==='idle'&&lastState!=='idle'&&!follow&&!wasAuto){setLights(-1);instruction.textContent='点钟自由试奏，或选择“跟着奏”';}
  lastState=player?.state;lastTime=time;
  metadata?.bells.forEach((bell,i)=>{const p=getWorld()?.projectPerformancePoint(bell.center);hits[i].hidden=!p?.visible;if(p){hits[i].style.left=p.x+'px';hits[i].style.top=p.y+'px';}});
 }};
}
