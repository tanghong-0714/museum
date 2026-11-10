import test from 'node:test';
import assert from 'node:assert/strict';
import {getAudioVolume,setAudioVolume,createVolumeOutput,createMediaVolume} from '../src/audio-volume.js';
function context(){
 const nodes=[];const make=type=>{const node={type,connected:null,connect(other){this.connected=other;},disconnect(){this.disconnected=true;}};nodes.push(node);return node;};
 const c={currentTime:0,destination:{},nodes,resume:async()=>{},close(){},createGain(){const n=make('gain');n.gain={value:0,setTargetAtTime(value){this.value=value;}};return n;},createDynamicsCompressor(){const n=make('limiter');for(const k of ['threshold','knee','ratio','attack','release'])n[k]={value:0};return n;},createMediaElementSource(){return make('source');}};return c;
}
test('master volume clamps corrupt values and live gain reaches three times the original with limiter after gain',()=>{
 setAudioVolume(1);const c=context(),out=createVolumeOutput(c,.45);assert.equal(out.input.gain.value,.45);
 setAudioVolume(3);assert.ok(Math.abs(out.input.gain.value-1.35)<1e-9);assert.equal(out.input.connected.type,'limiter');assert.equal(out.input.connected.connected,c.destination);
 out.setMuted(true);setAudioVolume(2);assert.equal(out.input.gain.value,0);out.setMuted(false);assert.equal(out.input.gain.value,.9);
 out.setLevel(.225);assert.equal(out.input.gain.value,.45);out.dispose();setAudioVolume(99);assert.equal(getAudioVolume(),3);setAudioVolume(-1);assert.equal(getAudioVolume(),0);setAudioVolume(NaN);assert.equal(getAudioVolume(),1);
});
test('media keeps native volume legal, connects only once, and shares live volume while preserving its base level',()=>{
 setAudioVolume(1);const a={volume:1},c=context(),v=createMediaVolume(a,{baseLevel:.65,createContext:()=>c});v.unlock();v.unlock();assert.equal(a.volume,1);assert.equal(c.nodes.filter(n=>n.type==='source').length,1);
 setAudioVolume(3);assert.ok(Math.abs(c.nodes.find(n=>n.type==='gain').gain.value-1.95)<1e-9);v.setMuted(true);assert.equal(c.nodes.find(n=>n.type==='gain').gain.value,0);v.dispose();setAudioVolume(1);
});
test('native fallback remains playable and clamps its legal range if Web Audio is unavailable',()=>{
 const a={volume:1},v=createMediaVolume(a,{baseLevel:.65,createContext(){throw Error('no context');}});setAudioVolume(3);v.unlock();assert.equal(a.volume,1);v.setMuted(true);assert.equal(a.volume,0);v.setMuted(false);setAudioVolume(.5);assert.equal(a.volume,.325);v.dispose();setAudioVolume(1);
});
