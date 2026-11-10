import assert from 'node:assert/strict';
import {PerspectiveCamera} from 'three';
import {applyLookDelta,edgeYawRate,sampleLookPointer,sampleMouseLookPointer,releaseLookPointer,endsLookPointer,createCanvasClickGuard,resolveMouseLook,createPointerLockRequester} from './look.js';
const camera=new PerspectiveCamera();
assert(applyLookDelta(camera,10,-10));
assert(Math.abs(camera.rotation.y+.017)<1e-12,'mouse motion changes the camera synchronously');
assert(Math.abs(camera.rotation.x-.017)<1e-12);
const previous=camera.rotation.y;
applyLookDelta(camera,400,0);
assert(Math.abs(camera.rotation.y-previous+.68)<1e-12,'fast mouse motion is preserved instead of discarded');
applyLookDelta(camera,-400,0);assert(Math.abs(camera.rotation.y-previous)<1e-12,'reverse movement has no smoothing tail');
applyLookDelta(camera,0,10000);assert.equal(camera.rotation.x,-1.15);
const before=camera.quaternion.clone();assert.equal(applyLookDelta(camera,NaN,0),false);assert(camera.quaternion.equals(before));
console.log('PASS: immediate camera response, large relative deltas, reversal, pitch limit and invalid input guard');

const unlimited=new PerspectiveCamera();
for(let i=0;i<2000;i++)applyLookDelta(unlimited,10,0);
assert(Math.abs(unlimited.rotation.y+34)<1e-8,'horizontal yaw continues through multiple complete turns');
assert.equal(edgeYawRate(720,1440),0);
assert(edgeYawRate(1439,1440)>1.3);assert(edgeYawRate(1,1440)<-1.3);
let rightYaw=0,leftYaw=0;
for(let i=0;i<600;i++){rightYaw-=edgeYawRate(1439,1440)/60;leftYaw-=edgeYawRate(1,1440)/60;}
assert(rightYaw<-Math.PI*4&&leftYaw>Math.PI*4,'cursor can continue rotating at either screen edge without further mouse movement');
console.log('PASS: unlimited horizontal rotation and continuous screen-edge fallback');

const first=sampleLookPointer(null,{clientX:1200,clientY:700,movementX:900});
assert.equal(first.dx,0,'first sample after focus/lock reset must not turn');
const second=sampleLookPointer(first.point,{clientX:1207,clientY:696});
assert.deepEqual([second.dx,second.dy],[7,-4]);
const finger={id:11,x:20,y:30};
assert.equal(sampleLookPointer(finger,{pointerId:12,clientX:600,clientY:500}),null,'second finger must not steer active gesture');
assert.equal(endsLookPointer(finger,{pointerId:12}),false,'another finger ending must not clear active gesture');
assert.equal(endsLookPointer(finger,{pointerId:11}),true,'lost capture ends matching gesture');
const released=[];
const capture={hasPointerCapture:id=>id===11,releasePointerCapture:id=>released.push(id)};
releaseLookPointer(capture,finger);
releaseLookPointer(capture,null);
releaseLookPointer(capture,{id:12});
assert.deepEqual(released,[11],'blur/dialog reset releases only held pointer capture');
assert.equal(sampleLookPointer(null,{pointerId:11,clientX:900,clientY:900}).dx,0,'new gesture after lost capture starts without stale coordinates');
console.log('PASS: reset first sample, touch identity, lost capture and reset capture release');

// Actual reported rollback: a 560 ms stale event, then a 679 px client jump
// whose relative movement was only 57 px. It previously turned the view 66 deg.
const rollbackTrace=[
  [394226,394103.1,1182,594,4,1],
  [394897.7,394337.6,1182,593,0,-1],
  [394924.1,394892.2,1181,593,-622,-38],
  [394949.1,394944.5,502,550,-57,-5],
  [394954.5,394946.7,501,550,-2,0],
  [394973.2,394969.4,485,547,-16,-3],
];
let mouse=null;
const replay=rollbackTrace.map(([now,timeStamp,clientX,clientY,movementX,movementY])=>{
 const sample=sampleMouseLookPointer(mouse,{timeStamp,clientX,clientY,movementX,movementY},now);
 mouse=sample.point;return [sample.dx,sample.dy];
});
assert.deepEqual(replay,[[0,0],[0,0],[0,0],[0,0],[-1,0],[-16,-3]],'delayed queue recovery never replays the 66-degree catch-up turn');
const fresh={timeStamp:395000,clientX:885,clientY:547,movementX:400,movementY:0};
assert.equal(sampleMouseLookPointer(mouse,fresh,395005).dx,400,'timely 400 px turns are not capped');
const timely=sampleMouseLookPointer(mouse,fresh,395005);
assert.equal(sampleMouseLookPointer(timely.point,{...fresh,timeStamp:394999,clientX:1},395006).dx,0,'out-of-order input cannot restore an older cursor position');
assert.equal(sampleMouseLookPointer(mouse,{...fresh,timeStamp:394000},395005,true).dx,0,'pointer lock also rejects stale relative input');
assert.equal(sampleMouseLookPointer(timely.point,{...fresh,timeStamp:395010,movementX:-400},395011,true).dx,-400,'timely locked turns retain their full relative delta');
assert.equal(sampleMouseLookPointer({x:0,y:0,recovery:'align'},{timeStamp:10,clientX:40,clientY:0,movementX:80,movementY:0},11).dx,40,'recovery tolerates CSS/device pixel scaling without freezing mouse look');
console.log('PASS: recorded delayed rollback, coordinate recovery, out-of-order events and fast locked/unlocked turns');

const clickGuard=createCanvasClickGuard();
const down={pointerId:1,isPrimary:true,clientX:100,clientY:100};
clickGuard.down(down);
clickGuard.move({...down,clientX:108});
clickGuard.end(down);
assert.equal(clickGuard.click(),true,'drag-generated click must not start exhibit tour');
assert.equal(clickGuard.click(),false,'suppression consumes only one click');
clickGuard.down(down);
clickGuard.move({...down,clientX:107});
clickGuard.end(down);
assert.equal(clickGuard.click(),false,'normal tap with small movement remains clickable');
clickGuard.down(down);
clickGuard.down({...down,pointerId:2,isPrimary:false,clientX:500});
clickGuard.move({...down,pointerId:2,clientX:900});
clickGuard.end({...down,pointerId:2},true);
assert.equal(clickGuard.click(),false,'secondary pointer cannot change primary click guard');
clickGuard.down(down);clickGuard.end(down,true);
assert.equal(clickGuard.click(),true,'cancel or lost active capture suppresses its click');
clickGuard.down(down);clickGuard.move({...down,clientX:150});
assert.equal(clickGuard.click(true),false,'pointer locked clicks remain available');
clickGuard.down(down);clickGuard.end(down,true);clickGuard.down(down);
assert.equal(clickGuard.click(),false,'new gesture clears cancellation without a generated click');
console.log('PASS: canvas drag click suppression, taps, secondary pointers, cancellation and pointer lock');

assert.equal(resolveMouseLook('walk',undefined,false),true,'WASD resume on desktop must restore mouse look');
assert.equal(resolveMouseLook('walk',undefined,true),false,'touch movement must not enable mouse follow');
assert.equal(resolveMouseLook('walk',false,false),false,'explicit touch gestures remain separate');
assert.equal(resolveMouseLook('paused',true,false),false);
let attempts=0;
const retryLock=createPointerLockRequester(async()=>{if(++attempts===1)throw new Error('temporary permission denial');return 'locked';});
await assert.rejects(retryLock());
assert.equal(await retryLock(),'locked','a subsequent user gesture can retry a rejected lock');
let finish, calls=0;
const delayed=createPointerLockRequester(()=>{calls++;return new Promise(resolve=>finish=resolve);});
const pending=delayed();assert.equal(delayed(),pending);
await Promise.resolve();assert.equal(calls,1);finish();await pending;
console.log('PASS: desktop resume restores look; pointer lock retries after denial and deduplicates pending attempts');
