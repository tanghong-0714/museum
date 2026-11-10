import {test} from 'node:test';
import assert from 'node:assert/strict';
import {Box3,Vector2,Vector3,PerspectiveCamera,Matrix4,Euler} from 'three';
import {createFrameLimiter,easeZoom,smoothFrameDistance} from '../src/view-framing.js';

test('orbit preserves its screen pivot and all four limits over continuous turns',()=>{
 for(const size of [[.4,2.65,.4],[2.65,1.6,.9],[2.2,2.65,2.1]])for(const aspect of [.65,2.4]){
  const bounds=new Box3(new Vector3(...size).multiplyScalar(-.5),new Vector3(...size).multiplyScalar(.5)),frame=createFrameLimiter(bounds);
  const camera=new PerspectiveCamera(35,aspect,.1,60),target=new Vector3(),matrix=new Matrix4(),offset=new Vector2(.08,.09);
  let last=null;
  for(let i=0;i<=720;i++){
   const angle=i*Math.PI/360,direction=new Vector3(Math.sin(angle),.3*Math.sin(angle*2),Math.cos(angle)).normalize();
   camera.position.copy(direction).multiplyScalar(8);camera.lookAt(target);
   const distance=smoothFrameDistance(4,frame.fixedOffsetDistance(camera,target,matrix,offset,.75));
   camera.position.copy(direction).multiplyScalar(distance);camera.updateMatrixWorld();
   camera.projectionMatrix.elements[8]=-offset.x;camera.projectionMatrix.elements[9]=-offset.y;
   const pivot=target.clone().project(camera);assert.ok(Math.abs(pivot.x-offset.x)<1e-9&&Math.abs(pivot.y-offset.y)<1e-9);
   if(last!==null)assert.ok(Math.abs(distance-last)<.12,'no discontinuous radius jumps');last=distance;
   for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new Vector3(x,y,z).project(camera);assert.ok(Math.abs(p.x)<=.690001&&Math.abs(p.y)<=.985001);}
  }
 }
});

test('tall, wide and deep exhibits remain inside the safe frame after orbit and focus',()=>{
 for(const size of [[.45,2.65,.35],[2.65,1.8,.9],[2.4,2.65,2.2]]){
  const bounds=new Box3(new Vector3(...size).multiplyScalar(-.5),new Vector3(...size).multiplyScalar(.5));
  const minimum=createFrameLimiter(bounds);
  for(const aspect of [.58,1,2.2])for(const yaw of [0,.7,1.57,3.14])for(const pitch of [-.4,0,.65]){
   const camera=new PerspectiveCamera(35,aspect,.1,60),target=new Vector3(.12,.2,0),direction=new Vector3(Math.sin(yaw),pitch,Math.cos(yaw)).normalize();
   camera.position.copy(target).addScaledVector(direction,7);camera.lookAt(target);
   const matrix=new Matrix4().makeRotationFromEuler(new Euler(.1,-.12,.1));
   camera.position.copy(target).addScaledVector(direction,minimum(camera,target,matrix));camera.updateMatrixWorld();
   for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){
    const point=new Vector3(x,y,z).applyMatrix4(matrix).project(camera);
    assert.ok(Math.abs(point.x)<=.920001&&Math.abs(point.y)<=.920001&&point.z<1,JSON.stringify({size,aspect,yaw,pitch,point}));
   }
  }
 }
});
test('zoom easing is monotonic and consistent at 30, 60 and 120 fps',()=>{
 const results=[];
 for(const fps of [30,60,120]){
  let value=8;
  for(let i=0;i<fps/2;i++){const next=easeZoom(value,4,1/fps);assert.ok(next<=value&&next>=4);value=next;}
  results.push(value);
 }
 assert.ok(Math.max(...results)-Math.min(...results)<1e-8);
 assert.equal(easeZoom(8,4,.01,true),4);
});

test('close inspection fills the marked frame without crossing either boundary',()=>{
 const bounds=new Box3(new Vector3(-.5,-1.325,-.4),new Vector3(.5,1.325,.4)),frame=createFrameLimiter(bounds);
 const camera=new PerspectiveCamera(35,2,.1,60),matrix=new Matrix4(),target=new Vector3();camera.position.set(0,0,3.4);camera.lookAt(target);
 const full=frame(camera,target,matrix),close=frame(camera,target,matrix,1,true);
 assert.ok(close<full);
 camera.position.z=Math.max(3.4,close);
 camera.projectionMatrix.elements[9]=-frame.bottomOffset(camera,matrix);camera.updateMatrixWorld();
 let lowest=Infinity,highest=-Infinity;
 for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new Vector3(x,y,z).project(camera);lowest=Math.min(lowest,p.y);highest=Math.max(highest,p.y);}
 assert.ok(lowest>=-.985001);assert.ok(highest<=.985001&&highest>.92);
 assert.equal(camera.projectionMatrix.elements[8],0);
});

test('marked framing keeps every rotated top, base and side inside its safe region',()=>{
 for(const size of [[.4,2.65,.4],[2.65,1.6,.9],[2.2,2.65,2.1]])for(const aspect of [.65,2.4])for(const yaw of [0,.9,1.8]){
  const bounds=new Box3(new Vector3(...size).multiplyScalar(-.5),new Vector3(...size).multiplyScalar(.5)),frame=createFrameLimiter(bounds);
  const camera=new PerspectiveCamera(35,aspect,.1,60),target=new Vector3(.12,-.1,0),direction=new Vector3(Math.sin(yaw),.2,Math.cos(yaw)).normalize(),matrix=new Matrix4().makeRotationFromEuler(new Euler(.1,-.12,0));
  camera.position.copy(target).addScaledVector(direction,7);camera.lookAt(target);
  const distance=Math.max(3.4,frame(camera,target,matrix,.75,true));camera.position.copy(target).addScaledVector(direction,distance);
  camera.projectionMatrix.elements[9]=-frame.bottomOffset(camera,matrix);camera.updateMatrixWorld();
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new Vector3(x,y,z).applyMatrix4(matrix).project(camera);assert.ok(p.y>=-.985001&&p.y<=.985001&&Math.abs(p.x)<=.690001);}
 }
});

test('cursor-centered zoom keeps the picked surface point at the same screen position',()=>{
 const bounds=new Box3(new Vector3(-.5,-1,-.4),new Vector3(.5,1,.4)),frame=createFrameLimiter(bounds),matrix=new Matrix4();
 const camera=new PerspectiveCamera(35,1.8,.1,60);camera.position.z=8;camera.lookAt(0,0,0);camera.updateMatrixWorld();
 const picked=new Vector3(.3,.6,.3),before=picked.clone().project(camera);
 camera.position.z=6;camera.updateMatrixWorld();const after=picked.clone().project(camera);
 const offset=frame.constrainOffset(camera,matrix,new Vector2(before.x-after.x,before.y-after.y));
 camera.projectionMatrix.elements[8]=-offset.x;camera.projectionMatrix.elements[9]=-offset.y;
 const final=picked.clone().project(camera);assert.ok(Math.abs(final.x-before.x)<1e-8&&Math.abs(final.y-before.y)<1e-8);
});

test('cursor framing cannot move the object beyond the marked edges',()=>{
 const bounds=new Box3(new Vector3(-.8,-1.325,-.4),new Vector3(.8,1.325,.4)),frame=createFrameLimiter(bounds),matrix=new Matrix4(),camera=new PerspectiveCamera(35,1.8,.1,60);
 camera.position.z=6;camera.lookAt(0,0,0);camera.updateMatrixWorld();
 for(const direction of [-5,5]){
  const offset=frame.constrainOffset(camera,matrix,new Vector2(direction,direction),.75);
  camera.projectionMatrix.elements[8]=-offset.x;camera.projectionMatrix.elements[9]=-offset.y;
  for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z]){const p=new Vector3(x,y,z).project(camera);assert.ok(Math.abs(p.x)<=.690001&&Math.abs(p.y)<=.985001);}
 }
});
