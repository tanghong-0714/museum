import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {PerspectiveCamera,Vector3} from 'three';
import {ExhibitObservation,EntrySequence,exhibitObservation} from './exhibit-tour.js';
import {GalleryWalk} from './walk.js';
import {planRoute} from './navigation.js';
import {SlidingGlassDoor} from './door.js';
const manifest=JSON.parse(readFileSync(new URL('./public/scene_manifest.json',import.meta.url)));
assert.deepEqual(manifest.exhibits.map(e=>e.id),[1,2,3,4,5,6]);
for(const exhibit of manifest.exhibits){
 for(const fps of [30,60,144]){
  const tour=new ExhibitObservation(exhibit),camera=new PerspectiveCamera(),walker=new GalleryWalk(manifest.colliders),phases=[];
  for(let i=0;i<fps*9;i++){
   const done=tour.update(camera,1/fps);
   if(!phases.includes(tour.phase))phases.push(tour.phase);
   const expected=camera.position.clone();walker.resolve(camera.position);
   assert(camera.position.distanceTo(expected)<.001,'observation camera stays outside all showcases/columns');
   if(done)break;
  }
  assert.deepEqual(phases,['left','right','right-hold','front','complete']);
  const views=exhibitObservation(exhibit);assert(camera.position.distanceTo(views.front)<1e-9,'tour finishes at exact front center');
  const forward=new Vector3();camera.getWorldDirection(forward);assert(forward.dot(views.target.clone().sub(camera.position).normalize())>.999999,'final camera faces cabinet center');
 }
 for(const from of [...Object.values(manifest.views),...manifest.exhibits.map(e=>({p:exhibitObservation(e).front.toArray()}))]){
  const route=planRoute(from.p,exhibitObservation(exhibit).left.toArray(),manifest);assert(route.length,'every selected-case approach is reachable');
  const walker=new GalleryWalk(manifest.colliders),position=new Vector3(...from.p);
  for(const point of route){const end=new Vector3(...point),delta=end.clone().sub(position),steps=Math.max(1,Math.ceil(delta.length()/.03));delta.divideScalar(steps);
   for(let i=0;i<steps;i++){position.add(delta);const expected=position.clone();walker.resolve(position);assert(position.distanceTo(expected)<.001,'approach route is collision free');}}
 }
}
console.log('PASS: six numbered cabinets; left→right→center at 30/60/144fps; 60 collision-free approach routes');
for(const fps of [30,60,144]){
 const meshes=[-1,1].map(sign=>({isMesh:true,userData:{doorLeaf:sign},position:{x:sign*1.135}}));
 const door=new SlidingGlassDoor({traverse:fn=>meshes.forEach(fn)}),entry=new EntrySequence(manifest.entrySequence),camera=new PerspectiveCamera();door.target=1;
 const phases=[];let completed=false;
 for(let i=0;i<fps*6;i++){
  if(!phases.includes(entry.phase))phases.push(entry.phase);
  const done=entry.update(camera,door,1/fps);
  if(entry.phase==='opening')assert(camera.position.distanceTo(new Vector3(...manifest.entrySequence.outside))<1e-9,'no crossing while door is opening');
  if(entry.phase==='walking')assert.equal(door.progress,1,'walk through only after both leaves fully open');
  door.update(1/fps);
  if(done){completed=true;break;}
 }
 assert(completed);assert.deepEqual(phases,['opening','walking','closing']);assert.equal(door.progress,0);
 assert(camera.position.distanceTo(new Vector3(...manifest.entrySequence.inside))<1e-9,'finish inside at entrance spawn');
}
console.log('PASS: open→walk through→close→free-control entry state sequence across frame rates');

for(const target of Object.values(manifest.observationTargets)){
 const tour=new ExhibitObservation(target),camera=new PerspectiveCamera(),walker=new GalleryWalk(manifest.colliders),phases=[];
 const route=planRoute(manifest.views.entrance.p,exhibitObservation(target).left.toArray(),manifest);assert(route.length,'main/rear approach is reachable');
 for(let i=0;i<600;i++){
  const done=tour.update(camera,1/60);if(!phases.includes(tour.phase))phases.push(tour.phase);
  const expected=camera.position.clone();walker.resolve(camera.position);assert(camera.position.distanceTo(expected)<.001,'main/rear observation avoids colliders');
  if(done)break;
 }
 assert.deepEqual(phases,['left','right','right-hold','front','complete']);
 assert(camera.position.distanceTo(exhibitObservation(target).front)<1e-9);
 assert.equal(camera.position.x,0,'main/rear final view is centered on the cabinet');
}
assert.equal(manifest.paintings.length,4);
assert.deepEqual(manifest.paintings.map(p=>p.title),['高逸图轴','菊石图','林和靖诗意画轴','踏歌画轴']);
assert.equal(manifest.paintings.filter(p=>p.side==='left').length,2);assert.equal(manifest.paintings.filter(p=>p.side==='right').length,2);
console.log('PASS: central/rear left→right→center sequences; four user-ordered paintings split two per side');
