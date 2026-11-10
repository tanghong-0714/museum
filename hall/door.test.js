import assert from 'node:assert/strict';
import {SlidingGlassDoor} from './door.js';
const make=()=>{
 const meshes=[-1,1].flatMap(sign=>[0,1,2].map(i=>({isMesh:true,userData:{doorLeaf:sign,slideDistance:2.26},position:{x:sign*(1.135+i*.02)}})));
 return {meshes,door:new SlidingGlassDoor({traverse:fn=>meshes.forEach(fn)})};
};
for(const fps of [30,60,144]){
 const {meshes,door}=make(),original=meshes.map(m=>m.position.x);
 door.toggle();for(let i=0;i<fps*2;i++)door.update(1/fps);
 assert.equal(door.progress,1);
 meshes.forEach((mesh,i)=>assert(Math.abs(mesh.position.x-original[i]-mesh.userData.doorLeaf*2.26)<1e-9));
 door.toggle();for(let i=0;i<fps*2;i++)door.update(1/fps);
 assert.equal(door.progress,0);meshes.forEach((mesh,i)=>assert.equal(mesh.position.x,original[i]));
}
const {door}=make();door.toggle();door.update(.3);const before=door.getState();door.toggle();door.update(0);assert.deepEqual(door.getState().leaves,before.leaves);
door.update(.1);assert(door.progress<before.progress,'mid-animation reversal is continuous');
console.log('PASS: paired sliding leaves and handles, frame-rate independence, full close, continuous reversal');

for(const fps of [30,60,144]){
 const {door,meshes}=make(),closed=meshes.map(m=>m.position.x);
 door.toggle();let completions=0;
 for(let i=0;i<fps*3;i++){
  const completed=door.update(1/fps);
  if(door.progress<1)assert.equal(completed,false,'never complete before both leaves reach full travel');
  if(completed)completions++;
 }
 assert.equal(completions,1,'opening completion fires exactly once');
 door.reset();assert.equal(door.progress,0);assert.equal(door.target,0);
 meshes.forEach((mesh,i)=>assert.equal(mesh.position.x,closed[i]));
 door.toggle();assert.equal(door.update(.1),false);door.toggle();
 for(let i=0;i<fps*2;i++)assert.equal(door.update(1/fps),false,'cancelled opening must not return home');
}
console.log('PASS: exactly-once full-open completion, no premature/cancelled completion and repeatable visit reset');
