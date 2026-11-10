import './audio-volume-control.css';
import {setAudioVolume,subscribeAudioVolume} from './audio-volume.js';
export function mountAudioVolumeControl(){
 if(document.querySelector('#audio-volume-control'))return;
 const mobile=matchMedia('(max-width:760px)');
 const control=document.createElement('label');control.id='audio-volume-control';control.innerHTML='<span aria-hidden="true">♫</span><input id="audio-master-volume" type="range" min="0" max="300" step="5" aria-label="总音量，最高原音量三倍"><output for="audio-master-volume">100%</output>';
 control.title='总音量：统一调节音乐、音效与语音讲解';
 const input=control.querySelector('input'),output=control.querySelector('output');
 const unsubscribe=subscribeAudioVolume(value=>{input.value=String(Math.round(value*100));output.textContent=input.value+'%';input.setAttribute('aria-valuetext',input.value+'%，100%为原音量');});
 input.oninput=()=>setAudioVolume(Number(input.value)/100);
 let trigger=document.querySelector('#performance-sound');const created=!trigger;
 if(created){trigger=document.createElement('button');trigger.id='audio-volume-toggle';trigger.type='button';trigger.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z M15 8q5 4 0 8 M18 4q9 8 0 16"/></svg>';document.querySelector('.view-tools').append(trigger);}
 const oldLabel=trigger.getAttribute('aria-label'),oldTitle=trigger.title;
 function close(){control.classList.remove('is-open');trigger.setAttribute('aria-expanded','false');}
 function position(){const r=trigger.getBoundingClientRect();control.style.setProperty('--volume-right',Math.max(12,innerWidth-r.right)+'px');control.style.setProperty('--volume-bottom',Math.max(12,innerHeight-r.top+10)+'px');}
 function sync(){close();if(mobile.matches){trigger.removeAttribute('aria-pressed');trigger.setAttribute('aria-label','调节音量');trigger.title='调节音量';trigger.setAttribute('aria-controls',control.id);}else{trigger.removeAttribute('aria-expanded');trigger.removeAttribute('aria-controls');if(!created){trigger.setAttribute('aria-label',oldLabel);trigger.title=oldTitle;trigger.setAttribute('aria-pressed','false');}}}
 function toggle(e){if(!mobile.matches)return;e.preventDefault();e.stopImmediatePropagation();const open=!control.classList.contains('is-open');close();if(open){position();control.classList.add('is-open');trigger.setAttribute('aria-expanded','true');input.focus();}}
 trigger.addEventListener('click',toggle,true);
 const outside=e=>{if(!control.contains(e.target)&&!trigger.contains(e.target))close();};
 const escape=e=>{if(e.key==='Escape'&&control.classList.contains('is-open')){close();trigger.focus();}};
 document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);mobile.addEventListener('change',sync);window.addEventListener('resize',position);
 document.body.append(control);sync();window.addEventListener('pagehide',unsubscribe,{once:true});
 return {destroy(){unsubscribe();control.remove();trigger.removeEventListener('click',toggle,true);document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);mobile.removeEventListener('change',sync);window.removeEventListener('resize',position);if(created)trigger.remove();}};
}
