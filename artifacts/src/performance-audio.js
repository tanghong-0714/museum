import {createMediaVolume} from './audio-volume.js';
// Only starts from the explicit performance gesture; follows its clock and pause state.
export function createPerformanceAudio(audio,{createContext=()=>new (window.AudioContext||window.webkitAudioContext)(),onError=()=>{}}={}){
 let active=false,paused=false,muted=false,returnTime=0,token=0;
 const volume=createMediaVolume(audio,{baseLevel:.65,createContext});
 audio.preload='auto';audio.dataset.playback='idle';
 const level=value=>volume.setLevel(value);
 function play(){
  const attempt=token;
  try{
   volume.unlock();
   Promise.resolve(audio.play()).catch(()=>{if(attempt!==token||!active)return;stop();audio.dataset.playback='error';onError();});
  }catch{stop();audio.dataset.playback='error';onError();}
 }
 function stop(){token++;active=false;paused=false;audio.pause();audio.currentTime=0;audio.dataset.playback='idle';level(.65);}
 return {
  start(){
   stop();active=true;returnTime=0;
   volume.unlock();
   level(.65);audio.dataset.playback='playing';play();
  },
  sync(state,time,dt,blocked){
   if(!active)return;
   if(state==='idle'||state==='unavailable'||state==='loading'){stop();return;}
   if(blocked){if(!paused){audio.pause();paused=true;audio.dataset.playback='paused';}return;}
   if(paused){paused=false;audio.currentTime=time;play();audio.dataset.playback='playing';}
   if(state==='returning'){returnTime+=dt;level(.65*Math.max(0,1-returnTime/.35));}
   else if(Math.abs(audio.currentTime-time)>.3&&audio.readyState>=2)audio.currentTime=Math.min(time,audio.duration||6);
  },
  setMuted(value){muted=value;volume.setMuted(value);level(.65*Math.max(0,1-returnTime/.35));},
  stop,
  dispose(){stop();volume.dispose();audio.remove();}
 };
}
