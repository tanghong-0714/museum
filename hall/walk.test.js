import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Vector3} from 'three';
import {GalleryWalk,WALK_SETTINGS} from './walk.js';
import {insideGallery,planRoute} from './navigation.js';
const manifest=JSON.parse(readFileSync(new URL('./public/scene_manifest.json',import.meta.url)));
function run(start,dir,seconds,speed=3){const walker=new GalleryWalk(manifest.colliders),position=new Vector3(...start),direction=new Vector3(...dir).normalize();walker.speed=speed;for(let i=0;i<Math.round(seconds*60);i++)walker.update(position,direction,1/60);return {position,walker};}
assert.equal(manifest.layout.shape,'axial_gallery');assert.equal(manifest.layout.sideExhibitCount,6);assert.equal(manifest.layout.centralExhibitCount,1);assert.equal(manifest.layout.doorLeafCount,2);
const central=manifest.colliders.find(c=>c.id==='COL_central_case');
const centralInscription=manifest.colliders.find(c=>c.id==='COL_central_inscription');
const centralFront=Math.max(central.size[2]/2,centralInscription.center[2]+centralInscription.size[2]/2);
for(const speed of [2.4,3,4.8]){
 const result=run([0,1.75,5],[0,0,-1],3,speed);assert(Math.abs(result.position.z-(centralFront+.25))<.002,'central showcase blocks walking at every speed');
}
for(const sign of [-1,1]){
 const result=run([sign*2.8,1.75,8],[sign,0,0],7);assert(Math.abs(Math.abs(result.position.x)-7.75)<.004,'side wall blocks walking');
}
const entrance=run([0,1.75,9.7],[0,0,1],3);assert(entrance.position.z<=10.751,'entrance boundary remains enclosed');
const corridor=run([0,1.75,-10],[0,0,-1],3);assert(corridor.position.z < -18,'rear enfilade is accessible');assert(insideGallery([corridor.position.x,corridor.position.z],manifest.layout));
for(const obstacle of manifest.colliders.filter(c=>/COL_(Left|Right) exhibit/.test(c.id))){
 const sign=Math.sign(obstacle.center[0]),x=obstacle.center[0]-sign*2.5;
 const result=run([x,1.75,obstacle.center[2]-.70],[sign,0,0],2);assert(Math.abs(Math.abs(result.position.x-obstacle.center[0])-(obstacle.size[0]/2+.25))<.003,'side display protects visitors');
}
console.log('PASS: central and six side showcases, side walls, entrance boundary and accessible rear gallery');
for(let i=0;i<72;i++){
 const a=i*Math.PI/36,result=run([0,1.75,6],[Math.cos(a),0,Math.sin(a)],15);
 assert(insideGallery([result.position.x,result.position.z],manifest.layout,.249),'hall boundary in 72 directions');
}
const viewpoints=[...Object.values(manifest.views),{p:[0,1.75,-16],t:[0,1.75,-20.7]}];
for(const from of viewpoints)for(const to of viewpoints){
 const path=planRoute(from.p,to.p,manifest);assert(path.length,'route exists');
 const w=new GalleryWalk(manifest.colliders),p=new Vector3(...from.p);
 for(const point of path){const end=new Vector3(...point),delta=end.clone().sub(p);const steps=Math.max(1,Math.ceil(delta.length()/.04));delta.divideScalar(steps);
  for(let n=0;n<steps;n++){p.add(delta);const expected=p.clone();w.resolve(p);assert(p.distanceTo(expected)<.001,'guide path is collision free');assert(insideGallery([p.x,p.z],manifest.layout),'guide path remains in room');}}
 assert(p.distanceTo(new Vector3(...to.p))<.002,'guide arrives at target');
}
console.log('PASS: complete rectangular hall/corridor boundaries; 25 collision-free guide routes');
for(const fps of [30,60,144,240]){
 const w=new GalleryWalk(manifest.colliders),p=new Vector3(2.8,1.75,5),before=p.clone();
 w.update(p,new Vector3(0,0,1),1/fps);assert(Math.abs(p.z-before.z-w.speed/fps)<1e-8,'immediate input response');
 const stopped=p.clone();w.update(p,new Vector3(),1/fps);assert.equal(stopped.distanceTo(p),0,'release stops immediately');assert.equal(p.y,1.75);
}
console.log('PASS: immediate movement/stop and fixed eye height at 30/60/144/240fps');
assert.equal(manifest.layout.artifactCount,7);
assert.deepEqual(manifest.informationPanels,[]);
assert.equal(manifest.layout.informationPanelCount,0);
assert(!manifest.colliders.some(c=>c.id.startsWith('COL_terminal_')),'removed information stands leave no invisible collisions');
assert.equal(manifest.storyEnabled,false);
console.log('PASS: seven artifacts in protected cabinets, no information panels and no leftover stand collisions');

assert.equal(WALK_SETTINGS.minSpeed,3);assert.equal(WALK_SETTINGS.maxSpeed,4);assert.equal(WALK_SETTINGS.speed,4);
assert.equal(manifest.centralPlatform.glass,false);assert.equal(manifest.centralPlatform.artifactCount,0);assert.equal(manifest.centralPlatform.inscription,'赋予文物新生');
for(const speed of [3,3.5,4])for(const fps of [30,60,144]){
 const w=new GalleryWalk(manifest.colliders),p=new Vector3(2.8,1.75,4);w.speed=speed;
 for(let i=0;i<fps;i++)w.update(p,new Vector3(0,0,1),1/fps);
 assert(Math.abs(p.z-4-speed)<1e-8,'actual one-second travel matches configured speed');
}
console.log('PASS: 3–4 m/s range and actual travel at 30/60/144fps; empty open central platform metadata');
