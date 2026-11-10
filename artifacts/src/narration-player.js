import {createMediaVolume} from './audio-volume.js';
export function createNarrationPlayer(audio,onChange=()=>{}){
 const volume=createMediaVolume(audio);
 let queue=[],index=-1,state='idle',token=0,rate=1;
 const notify=()=>onChange({state,item:queue[index]||null,index,total:queue.length,time:audio.currentTime||0,duration:audio.duration||0});
 async function begin(){const ticket=++token;audio.pause();audio.src=queue[index].url;audio.playbackRate=rate;state='loading';notify();try{volume.unlock();await audio.play();if(ticket!==token)return;state='playing';notify();}catch{if(ticket!==token)return;state='error';notify();}}
 function stop(){token++;audio.pause();audio.currentTime=0;queue=[];index=-1;state='idle';notify();}
 const ended=()=>{if(state!=='playing')return;if(index+1<queue.length){index++;begin();}else stop();};
 const error=()=>{if(state==='idle')return;token++;audio.pause();state='error';notify();};
 audio.addEventListener('ended',ended);audio.addEventListener('error',error);audio.addEventListener('timeupdate',notify);
 return {play(items){if(!items.length)return;queue=items.slice();index=0;begin();},pause(){if(!['playing','loading'].includes(state))return;token++;audio.pause();state='paused';notify();},async resume(){if(state==='error'){begin();return;}if(state!=='paused')return;const ticket=++token;state='loading';notify();try{volume.unlock();await audio.play();if(ticket===token){state='playing';notify();}}catch{if(ticket===token){state='error';notify();}}},stop,setRate(value){rate=value;audio.playbackRate=rate;},get state(){return state;},destroy(){stop();volume.dispose();audio.removeEventListener('ended',ended);audio.removeEventListener('error',error);audio.removeEventListener('timeupdate',notify);}};
}
