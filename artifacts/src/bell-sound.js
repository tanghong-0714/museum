import {createVolumeOutput} from './audio-volume.js';
// Original modal synthesis for the interactive demo, not a recording of the original bells.
export function createBellSound(){
 let context,master,output;const voices=new Set();let muted=false;
 function unlock(){try{context??=new (window.AudioContext||window.webkitAudioContext)();if(!master){output=createVolumeOutput(context,.45);master=output.input;output.setMuted(muted);}context.resume().catch(()=>{});return true;}catch{return false;}}
 function strike(index){if(!unlock())return;const now=context.currentTime,f=[261.63,293.66,329.63,392,440,523.25,587.33][index%7];
  if(voices.size>36)stop();
  for(const [ratio,volume,decay] of [[1,.22,1.8],[2.01,.13,1.1],[2.76,.055,.7],[4.12,.025,.4]]){
   const osc=context.createOscillator(),env=context.createGain();osc.type='sine';osc.frequency.value=f*ratio;
   env.gain.setValueAtTime(0,now);env.gain.linearRampToValueAtTime(volume,now+.006);env.gain.exponentialRampToValueAtTime(.0001,now+decay);
   osc.connect(env);env.connect(master);voices.add(osc);osc.onended=()=>{voices.delete(osc);osc.disconnect();env.disconnect();};osc.start(now);osc.stop(now+decay+.05);
  }
 }
 function stop(){for(const osc of voices){try{osc.stop();}catch{}}voices.clear();}
 return {unlock,strike,stop,setMuted(value){muted=value;output?.setMuted(value);},dispose(){stop();output?.dispose();context?.close();}};
}
