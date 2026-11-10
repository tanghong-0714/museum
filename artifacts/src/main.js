import {mountAudioVolumeControl} from './audio-volume-control.js';
import {mountNarrator} from './narrator.js';
import './style.css';
import './themes.css';
import './theme-longquan.css';
import './theme-pipa.css';
import './theme-speechless.css';
import './themes-sword-horse.css';
import './themes-zun-bells.css';
import './loading.css';
import './feature-details.css';
import {getFeatureNote} from './feature-notes.js';
import {exhibits,resolveExhibit} from './exhibits.js';
import {applyExhibit} from './exhibit-page.js';
import {Manifestation} from './timeline.js';
import {createScene} from './scene.js';
import {createPerformanceAudio} from './performance-audio.js';
import {awakeningProfiles} from './awakening-profiles.js';
import {mountAwakeningInteraction} from './awakening-interaction.js';
import './awakening.css';
import {mountArtifactChat} from './companion.js';
import {mountArtifactGuide} from './guide.js';
import {mountArtifactJourney} from './journey.js';
import {mountPassport} from './passport.js';
import {getCardPortrait} from './passport-media.js';
import {dynamicModelProfile,loadDynamicModel} from './dynamic-model.js';
import './mobile-exhibit.css';
async function start(){
const $=s=>document.querySelector(s);
const modelParams=new URLSearchParams(location.search);
const dynamic=modelParams.has('modelJob');
let dynamicError=null, dynamicExhibit;
if(dynamic){document.title='正在载入数字模型';document.querySelector('.introduction').style.visibility='hidden';try{dynamicExhibit=await loadDynamicModel(modelParams.get('modelJob'));}catch(error){dynamicError=error;dynamicExhibit=dynamicModelProfile(modelParams.get('modelJob'));}}
const requested=dynamic?dynamicExhibit:resolveExhibit(location.search);
const exhibit=requested||exhibits['phoenix-ewer'];
if(awakeningProfiles[exhibit.id])exhibit.performance=awakeningProfiles[exhibit.id];
applyExhibit(exhibit,exhibits,!requested);
if(!dynamic)mountNarrator(exhibit);
if(dynamic)document.querySelector('.introduction').style.visibility='';
const reduced=matchMedia('(prefers-reduced-motion:reduce)'),motion=new Manifestation(reduced.matches);
const canvas=$('#canvas');
const experience=$('#experience');
const interactionNote=$('.stage-note');
interactionNote.firstChild.textContent='';
const desktopHint=document.createElement('span');desktopHint.className='desktop-instructions';desktopHint.textContent='拖动旋转 · 滚轮缩放';
const touchHint=document.createElement('span');touchHint.className='touch-instructions';touchHint.textContent='单指旋转 · 双指缩放';interactionNote.prepend(desktopHint,touchHint);
canvas.setAttribute('aria-busy','true');
const loadingOrbit=document.createElement('div');loadingOrbit.className='loading-orbit';loadingOrbit.setAttribute('aria-hidden','true');
const previewUrl=!dynamic&&getCardPortrait(exhibit.id);
if(previewUrl){const image=new Image();image.src=previewUrl;image.alt='';image.className='loading-specimen';image.onerror=()=>{image.hidden=true;};loadingOrbit.append(image);}
$('#loader').prepend(loadingOrbit);$('.loading-glyph').textContent=modelParams.get('viewTransition')==='artifact'?'下一器 · 慢慢相见':'一器 · 将至';
$('#load-text').textContent=`正在迎来${exhibit.nickname}`;$('#load-detail').textContent='光里的轮廓，正渐渐靠近。';
let world,ready=false,showHotspots=false,selectedDetail=-1,requestId,last=0,chatUI,guideUI,pendingFocus=null,lastState='',loadMs=0,playing=false,ambientPaused=reduced.matches;
let afterPerformance=null,performanceButton=null,performanceStatus=null,lastPerformanceState='';
let performanceAudio=null,awakeningInteraction=null;
document.addEventListener('narration-start',()=>{world?.performancePlayer?.stop();performanceAudio?.stop();awakeningInteraction?.stop();});
const wakeLabel=exhibit.performance?.label||'唤醒弦月',stopLabel=exhibit.performance?.stopLabel||'停止演奏';
function playAwakening(name,options){const player=world?.performancePlayer;if(!ready||!player||motion.busy||playing)return false;hideHotspots();const ok=player.play(name,options);if(ok)syncState();return ok;}
if(exhibit.performance){
 performanceButton=document.createElement('button');performanceButton.id='awaken-toggle';performanceButton.disabled=true;performanceButton.setAttribute('aria-pressed','false');
 performanceButton.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3 9 12c-4-1-7 4-4 7s8 0 7-4l9-9M12 8l4 4M8 15l2 2"/></svg><span>唤醒弦月</span>';
 performanceButton.querySelector('span').textContent=wakeLabel;
 if(exhibit.performance.kind)performanceButton.querySelector('svg').innerHTML='<path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>';
 performanceButton.onclick=()=>{const player=world?.performancePlayer;if(!ready||!player||motion.busy||playing)return;if(player.busy||awakeningInteraction?.autoPlaying){player.stop();awakeningInteraction?.stop();}else{afterPerformance=null;setMode('view');hideHotspots();player.play();performanceAudio?.start();awakeningInteraction?.onStart();}syncState();};
 $('.view-tools').prepend(performanceButton);
 performanceStatus=document.createElement('span');performanceStatus.id='performance-status';performanceStatus.setAttribute('role','status');performanceStatus.setAttribute('aria-live','polite');$('.view-tools').append(performanceStatus);
 if(exhibit.performance.kind)$('#info .info-note').textContent=exhibit.performance.kind==='bells'?'钟声为合成演示音色，不是原器录音；动作是基于现有模型的数字演绎。':'动作是基于现有模型的数字演绎，用于互动欣赏。';
 if(exhibit.performance.audio){
  const audioLabel=exhibit.performance.audioLabel||'琵琶音乐';
  const note=$('#info .info-note');note.textContent=exhibit.performance.audioCredit||'演奏配乐：Dancing Strings · prettysleepy1 / Pixabay。仅在唤醒时播放，可静音。';
  const credit=document.createElement('a');credit.href=exhibit.performance.audioSource||'https://pixabay.com/music/folk-dancing-strings-upbeat-pipa-solo-358048/';credit.textContent=' 音频来源 ↗';credit.target='_blank';credit.rel='noopener noreferrer';if(!exhibit.performance.audioCredit||exhibit.performance.audioSource)note.append(credit);if(exhibit.performance.audioLabel==='马嘶音效'){const license=document.createElement('a');license.href='https://creativecommons.org/licenses/by/4.0/';license.textContent=' CC BY 4.0';license.target='_blank';license.rel='noopener';note.append(license);}
  const audio=document.createElement('audio');audio.id='performance-audio';audio.src=exhibit.performance.audio;audio.hidden=true;experience.append(audio);
  performanceAudio=createPerformanceAudio(audio,{onError:()=>{performanceStatus.textContent='声音暂不可用，动画继续播放';}});
  const sound=document.createElement('button');sound.id='performance-sound';sound.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z M15 8q5 4 0 8 M18 4q9 8 0 16"/></svg>';sound.title='关闭'+audioLabel;sound.setAttribute('aria-label',sound.title);sound.setAttribute('aria-pressed','false');
  sound.onclick=()=>{const mute=sound.getAttribute('aria-pressed')!=='true';sound.setAttribute('aria-pressed',String(mute));sound.title=(mute?'开启':'关闭')+audioLabel;sound.setAttribute('aria-label',sound.title);performanceAudio.setMuted(mute);};$('.view-tools').append(sound);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)performanceAudio.sync(world?.performancePlayer?.state,world?.performancePlayer?.time||0,0,true);});
  window.addEventListener('pagehide',()=>performanceAudio.stop());
 }
}
mountAudioVolumeControl();
awakeningInteraction=mountAwakeningInteraction({exhibit,stage:$('#stage'),experience,getWorld:()=>world,play:playAwakening,onClose:()=>world?.performancePlayer?.stop()});
function syncPerformance(){
 if(!performanceButton)return;
 const player=world?.performancePlayer,state=!ready?'loading':!player?'unavailable':motion.busy||playing?'manifest':awakeningInteraction?.autoPlaying?'playing':player.state;
 if(state===lastPerformanceState)return;lastPerformanceState=state;
 const active=state==='playing'||state==='returning';performanceButton.disabled=['loading','unavailable','manifest','returning'].includes(state);
 performanceButton.setAttribute('aria-pressed',String(active));performanceButton.querySelector('span').textContent=state==='playing'?stopLabel:state==='returning'?'轻轻归位':wakeLabel;
 performanceButton.setAttribute('aria-label',state==='playing'?stopLabel:wakeLabel);experience.dataset.performance=state;
 performanceStatus.textContent=state==='playing'?(exhibit.performance.activeText||'轻拨一曲 · 可拖动观看'):state==='returning'?'正回到静止姿态':state==='unavailable'?'动画暂不可用，仍可观赏文物':'';
}
const labels={dormant:['微光正在汇聚成器…','微光演绎'],forming:['微光正在汇聚成器…','正在成形'],formed:['','微光演绎'],dissolving:['器物正在散作微光…','正在消散']};
function syncState(){
 syncPerformance();
 const state=ready?motion.state:'loading',stateKey=state+':'+(world?.performancePlayer?.state||'none');if(stateKey===lastState)return;lastState=stateKey;
 $('#experience').dataset.state=state;
 $('#manifest-status').textContent=ready?labels[state][0]:'正在准备器物…';
 $('#manifest-label').textContent=ready?labels[state][1]:'聚合成形';
 $('#manifest-toggle').disabled=!ready||motion.busy||playing;
 $('#hotspot-toggle').disabled=!ready||state!=='formed'||!!world?.performancePlayer?.busy;
 $('#reset').disabled=!ready;
 if($('#mirror-flip'))$('#mirror-flip').disabled=!ready||state!=='formed'||playing;
 canvas.setAttribute('aria-label',matchMedia('(max-width:760px)').matches?'单指拖动旋转文物，双指缩放':'拖动旋转文物，滚轮缩放；方向键旋转，加减键缩放');
}
function setHotspots(visible){
 showHotspots=visible;if(visible)awakeningInteraction?.stop();
 const toggle=$('#hotspot-toggle');toggle.setAttribute('aria-pressed',String(visible));
 toggle.setAttribute('aria-label',visible?'收起光点':'显示器形细节');toggle.title=visible?'收起光点与讲解':'显示细节光点';toggle.textContent=visible?'收起光点':'细节光点';
 if(!visible){selectedDetail=-1;pendingFocus=null;$('#detail').hidden=true;document.querySelectorAll('.hotspot').forEach(b=>{b.hidden=true;b.removeAttribute('data-active');b.setAttribute('aria-expanded','false');});}
}
function hideHotspots(){setHotspots(false);}
function openDetail(index){
 const a=world.anchors[index];if(!a||!ready||motion.state!=='formed')return;
 if(selectedDetail===index&&!$('#detail').hidden)return;
 const note=getFeatureNote(exhibit,index);setHotspots(true);selectedDetail=index;
 $('#detail-number').textContent='细看一处 / '+String(index+1).padStart(2,'0');$('#detail-title').textContent=a.label;$('#detail-copy').textContent=note.copy;$('#detail-look').textContent=note.look;$('#detail').hidden=false;
 document.querySelectorAll('.hotspot').forEach((b,i)=>{b.toggleAttribute('data-active',i===index);b.setAttribute('aria-expanded',String(i===index));});
}
function toggle(){if(!ready||motion.busy||playing)return;awakeningInteraction?.stop();if(world?.performancePlayer?.busy){world.performancePlayer.stop();afterPerformance=toggle;syncState();return;}setMode('view');pendingFocus=null;hideHotspots();if(motion.reduced){motion.present();$('#manifest-status').textContent='已开启减少动态效果，保持完整器物';return;}playing=true;motion.toggle();syncState();}
// The host starts manifestation only after the embedded scene is visible.
window.addEventListener('museum-enter',event=>{
 if(!ready)return;
 if(event.detail?.reduced){motion.reduced=true;setAmbient(true);}
 if(dynamic)motion.form();else motion.present();syncState();
});
function resolveFocus(){
 if(!ready||pendingFocus===null)return;
 if(world?.performancePlayer?.busy){world.performancePlayer.stop();return;}
 if(motion.state==='dormant'){motion.form();syncState();}
 if(motion.state!=='formed')return;
 const index=pendingFocus;pendingFocus=null;world.focusFeature(index);openDetail(index);
}
function focusArtifactDetail(target){const index=exhibit.focusTargets.indexOf(target);if(index<0)return;pendingFocus=index;resolveFocus();}
function setMode(mode){
 if(!['view','story','chat','journey'].includes(mode))return;
 if(mode!=='view'){awakeningInteraction?.stop();afterPerformance=null;world?.performancePlayer?.stop();}
 $('#experience').dataset.mode=mode;$('#story-panel').hidden=mode!=='story';chatUI?.setOpen(mode==='chat');world?.setViewingMode(mode);
 journeyUI?.setOpen(mode==='journey');
 document.querySelectorAll('.experience-nav [data-mode]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.mode===mode));if(b.dataset.mode!=='view')b.setAttribute('aria-expanded',String(b.dataset.mode===mode));});
 hideHotspots();
}
function setAmbient(paused){ambientPaused=paused||reduced.matches;$('#experience').classList.toggle('ambient-paused',ambientPaused);$('#ambient-toggle').setAttribute('aria-pressed',String(ambientPaused));$('#ambient-toggle').textContent=ambientPaused?'动效 · 静':'动效 · 开';$('#ambient-toggle').setAttribute('aria-label',ambientPaused?'开启背景动效':'暂停背景动效');world?.setAmbientPaused(ambientPaused);}
$('#ambient-toggle').onclick=()=>setAmbient(!ambientPaused);
const onReduced=()=>{motion.reduced=reduced.matches;if(reduced.matches){awakeningInteraction?.stop();world?.performancePlayer?.stop();afterPerformance=null;motion.present();playing=false;lastState='';syncState();}setAmbient(reduced.matches);};reduced.addEventListener('change',onReduced);setAmbient(ambientPaused);
for(let i=0;i<28;i++){const mote=document.createElement('i');mote.style.left=`${(i*37+7)%100}%`;mote.style.top=`${(i*23+13)%90}%`;mote.style.animationDelay=`-${i*1.37}s`;mote.style.animationDuration=`${17+i%9*2}s`;$('.ambient-dust').append(mote);}
document.querySelectorAll('.experience-nav [data-mode]').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('#close-story').onclick=()=>{setMode('view');document.querySelector('[data-mode="story"][aria-controls]').focus();};
document.addEventListener('keydown',e=>{if(e.key!=='Escape'||document.querySelector('dialog[open]'))return;if(showHotspots){e.preventDefault();hideHotspots();$('#hotspot-toggle').focus();return;}if($('#experience').dataset.mode!=='view'){e.preventDefault();setMode('view');document.querySelector('.experience-nav [data-mode="view"]').focus();}});
// Embedded return navigation is handled by museum-bridge.js.
$('#manifest-toggle').onclick=toggle;
$('#reset').onclick=()=>{if(ready){hideHotspots();world.reset();}};
 if($('#mirror-flip'))$('#mirror-flip').onclick=()=>{if(ready&&motion.state==='formed'&&!playing){hideHotspots();world.flip();}};
$('#hotspot-toggle').onclick=()=>{if(!ready||motion.state!=='formed')return;setHotspots(!showHotspots);};
$('#close-detail').onclick=()=>{hideHotspots();$('#hotspot-toggle').focus();};
$('#about').onclick=()=>$('#info').showModal();$('#close-info').onclick=()=>$('#info').close();
$('#info').onclick=e=>{if(e.target===$('#info')){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}};
$('#retry').onclick=()=>location.reload();
function animate(now){
 requestId=requestAnimationFrame(animate);const dt=last?Math.min((now-last)/1000,.08):0;last=now;const blocked=document.hidden||!!document.querySelector('dialog[open]');
 performanceAudio?.sync(world.performancePlayer?.state,world.performancePlayer?.time||0,dt,blocked);if(blocked){awakeningInteraction?.update({player:world.performancePlayer,visible:experience.dataset.mode==='view',blocked:true});return;}
 let frame=motion.tick(dt);
 if(playing&&motion.state==='dormant'){motion.form();frame=motion.tick(0);}
 else if(playing&&motion.state==='formed'){playing=false;lastState='';}
 world.update(frame,motion.visualTime,false,dt);
 awakeningInteraction?.update({player:world.performancePlayer,visible:experience.dataset.mode==='view'&&motion.state==='formed'&&!playing,blocked:false,dt});
 if(afterPerformance&&!world.performancePlayer?.busy){const next=afterPerformance;afterPerformance=null;next();}
 resolveFocus();syncState();
 if(showHotspots&&motion.state==='formed')world.projectAnchors().forEach((p,i)=>{const b=$('#hotspot-'+i);b.hidden=!p.visible;b.style.left=p.x+'px';b.style.top=p.y+'px';});
}
async function boot(){const started=performance.now();try{
 if(dynamicError)throw dynamicError;
 world=await createScene(canvas,e=>{
  const phases={preparing:['正在勾勒器形','让每一处纹理，慢慢清晰。'],lighting:['微光将至','正在为这次相逢，点亮最后一束光。']};
  if(e.phase){$('#load-text').textContent=phases[e.phase][0];$('#load-detail').textContent=phases[e.phase][1];$('#load-progress').value=e.phase==='lighting'?96:88;return;}
  const percent=e.total?Math.round(e.loaded/e.total*100):null;
  if(percent===null)$('#load-progress').removeAttribute('value');else $('#load-progress').value=percent*.82;
  $('#load-text').textContent=percent===100?'正在勾勒器形':`正在迎来${exhibit.nickname}`;$('#load-detail').textContent=percent===null?'光里的轮廓，正渐渐靠近。':percent===100?'让每一处纹理，慢慢清晰。':`器物已抵达 ${percent}%`;
 },()=>{},exhibit);
 if(!dynamic)motion.present();else if(!$('#experience').classList.contains('museum-embedded'))motion.form();world.setAmbientPaused(ambientPaused);world.setViewingMode($('#experience').dataset.mode);
 world.update(motion.tick(0),motion.visualTime,false);
 ready=true;canvas.setAttribute('aria-busy','false');$('#load-progress').value=100;
 await new Promise(resolve=>requestAnimationFrame(resolve));
 $('#experience').classList.add('scene-ready');$('#loader').classList.add('is-leaving');
 setTimeout(()=>{if(ready)$('#loader').hidden=true;},reduced.matches?0:450);
 loadMs=Math.round(performance.now()-started);performance.measure('artifact-ready',{start:started});
 world.anchors.forEach((a,i)=>{const b=document.createElement('button');b.className='hotspot';b.id='hotspot-'+i;const dot=document.createElement('span');dot.className='hotspot-light';dot.setAttribute('aria-hidden','true');const name=document.createElement('span');name.className='hotspot-name';name.textContent=a.label;name.setAttribute('aria-hidden','true');b.append(dot,name);b.setAttribute('aria-label',a.label);b.setAttribute('aria-controls','detail');b.setAttribute('aria-expanded','false');b.hidden=true;b.onclick=()=>openDetail(i);$('#hotspots').append(b);});
 syncState();resolveFocus();requestId=requestAnimationFrame(animate);
 window.__exhibit={get state(){return {ready,state:motion.state,progress:motion.progress,busy:motion.busy,showHotspots,loadMs,...world.stats};},get camera(){return world.camera.position.toArray();}};
 }catch(error){console.error('器物加载失败',error);$('#load-text').textContent=/WebGL|context/i.test(error.message)?'当前浏览器未能开启三维画面':'器物暂时无法载入';$('#load-detail').textContent=dynamic?(dynamicError?.message||'模型加载未完成，请检查工作台服务和模型文件后重试。'):'请确认浏览器支持 WebGL 2 与本地模型文件正常。';$('#retry').hidden=false;$('#load-progress').hidden=true;$('#manifest-status').textContent=dynamic?'当前模型尚未就绪，请重试或返回展厅。':`模型尚未就绪，仍可通过底部入口与${exhibit.nickname}对话。`;}}
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();ready=false;syncState();cancelAnimationFrame(requestId);$('#experience').classList.remove('scene-ready');$('#loader').classList.remove('is-leaving');$('#loader').hidden=false;$('#load-text').textContent='三维画面暂时中断';$('#load-detail').textContent='请重新加载以恢复器物。';$('#retry').hidden=false;});
document.addEventListener('visibilitychange',()=>{last=0;$('#experience').classList.toggle('page-hidden',document.hidden);});
window.addEventListener('pagehide',()=>{cancelAnimationFrame(requestId);reduced.removeEventListener('change',onReduced);chatUI?.destroy();guideUI?.destroy();journeyUI?.destroy();passportUI?.destroy();world?.dispose();});
const onFocus=target=>{setMode('view');focusArtifactDetail(target);};
if(!dynamic)chatUI=mountArtifactChat({onFocus,exhibit});
guideUI=mountArtifactGuide({onFocus,exhibit});
const journeyUI=dynamic?null:mountArtifactJourney({exhibit,onClose:()=>{setMode('view');document.querySelector('[data-mode="journey"]').focus();}});
const passportUI=requested&&!dynamic?mountPassport({exhibit,exhibits,isReady:()=>ready,captureArtifact:async()=>ready?world.captureArtifact():null}):null;
if(dynamic){
 for(const selector of ['[data-mode="chat"]','[data-mode="journey"]','#hotspot-toggle','#artifact-select']){const node=$(selector);if(node)node.style.display='none';}
 const storyButton=$('[data-mode="story"]');storyButton.lastChild.textContent='作品信息';
 const info=$('#info').querySelectorAll('dd');info[0].textContent=exhibit.identity;info[1].textContent='拖动旋转、滚轮或双指缩放，可播放微光聚合与消散。';info[2].textContent='微光动画是视觉演绎。作品来自 AI 辅助建模任务，生成结果需人工核对。';
}
syncState();boot();
}
start();
