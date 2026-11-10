import test from 'node:test';
import assert from 'node:assert/strict';
import {createPerformanceAudio} from '../src/performance-audio.js';
function fixture(){
 const audio={dataset:{},currentTime:0,duration:6,readyState:4,paused:true,play(){this.paused=false;return Promise.resolve();},pause(){this.paused=true;},remove(){}};
 const control=createPerformanceAudio(audio,{createContext:()=>{throw Error('native fallback');}});
 return {audio,control};
}
test('music starts only on gesture, follows pause/resume, stops and restarts at zero',()=>{
 const {audio,control}=fixture();control.sync('playing',1,.016,false);assert.equal(audio.paused,true);
 control.start();audio.currentTime=1;assert.equal(audio.paused,false);
 control.sync('playing',1,.016,true);assert.equal(audio.paused,true);
 control.sync('playing',1,.016,false);assert.equal(audio.paused,false);assert.equal(audio.currentTime,1);
 control.sync('idle',0,.016,false);assert.equal(audio.paused,true);assert.equal(audio.currentTime,0);
 control.start();assert.equal(audio.currentTime,0);assert.equal(audio.paused,false);
});
test('early stop fades, mute survives restart, and lagging media catches animation clock',()=>{
 const {audio,control}=fixture();control.start();control.sync('playing',2,.016,false);assert.equal(audio.currentTime,2);
 control.sync('returning',2.175,.175,false);assert.ok(audio.volume>0&&audio.volume<.65);
 control.setMuted(true);assert.equal(audio.volume,0);control.start();assert.equal(audio.volume,0);
 control.setMuted(false);assert.equal(audio.volume,.65);control.stop();assert.equal(audio.paused,true);
});
test('rejected playback is handled without leaving an active music state',async()=>{
 const {audio}=fixture();let errors=0;audio.play=()=>Promise.reject(Error('blocked'));
 const control=createPerformanceAudio(audio,{createContext:()=>{throw Error();},onError:()=>errors++});
 control.start();await Promise.resolve();assert.equal(audio.dataset.playback,'error');assert.equal(audio.paused,true);assert.equal(errors,1);
});
