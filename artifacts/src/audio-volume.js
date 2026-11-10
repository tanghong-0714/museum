const storageKey='artifact-audio-volume-v1';
export const MAX_AUDIO_VOLUME=3;
export function clampAudioVolume(value){const n=Number(value);return Number.isFinite(n)?Math.max(0,Math.min(MAX_AUDIO_VOLUME,n)):1;}
let volume=1;try{const saved=globalThis.localStorage?.getItem(storageKey);if(saved!==null&&saved!==undefined)volume=clampAudioVolume(saved);}catch{}
const listeners=new Set();
export const getAudioVolume=()=>volume;
export function setAudioVolume(value){volume=clampAudioVolume(value);try{globalThis.localStorage?.setItem(storageKey,String(volume));}catch{}for(const listener of listeners)listener(volume);return volume;}
export function subscribeAudioVolume(listener){listeners.add(listener);listener(volume);return ()=>listeners.delete(listener);}
// Gentle peak limiting follows the adjustable gain. 300% is gain, not perceived loudness.
export function createVolumeOutput(context,baseLevel=1){
 const gain=context.createGain(),limiter=context.createDynamicsCompressor();
 limiter.threshold.value=-3;limiter.knee.value=3;limiter.ratio.value=20;limiter.attack.value=.003;limiter.release.value=.15;
 gain.connect(limiter);limiter.connect(context.destination);
 let level=baseLevel,muted=false;
 const apply=()=>{const value=muted?0:level*getAudioVolume();if(gain.gain.setTargetAtTime)gain.gain.setTargetAtTime(value,context.currentTime,.015);else gain.gain.value=value;};
 const unsubscribe=subscribeAudioVolume(apply);
 return {input:gain,setLevel(value){level=value;apply();},setMuted(value){muted=value;apply();},dispose(){unsubscribe();gain.disconnect();limiter.disconnect();}};
}
export function createMediaVolume(audio,{baseLevel=1,createContext=()=>new (window.AudioContext||window.webkitAudioContext)()}={}){
 let context,output,source,attempted=false,level=baseLevel,muted=false;
 const fallback=()=>{if(!output)audio.volume=muted?0:Math.min(1,level*getAudioVolume());};
 const unsubscribe=subscribeAudioVolume(fallback);
 return {unlock(){
  if(!attempted){attempted=true;try{context=createContext();output=createVolumeOutput(context,level);source=context.createMediaElementSource(audio);source.connect(output.input);audio.volume=1;output.setMuted(muted);}catch{output?.dispose();output=null;context?.close();context=null;fallback();}}
  context?.resume().catch(()=>{});
 },setLevel(value){level=value;if(output)output.setLevel(value);else fallback();},setMuted(value){muted=value;if(output)output.setMuted(value);else fallback();},dispose(){unsubscribe();source?.disconnect();output?.dispose();context?.close();}};
}
