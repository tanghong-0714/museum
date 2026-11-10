import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Vector3} from 'three';
import {GalleryWalk} from './walk.js';
const manifest=JSON.parse(readFileSync(new URL('./public/scene_manifest.json',import.meta.url)));
const pillars=manifest.colliders.filter(c=>c.sources);
assert.equal(pillars.length,34);
const radius=.25;
function penetrates(p,c){
 const dx=Math.max(Math.abs(p.x-c.center[0])-c.size[0]/2,0);
 const dz=Math.max(Math.abs(p.z-c.center[2])-c.size[2]/2,0);
 return Math.hypot(dx,dz)<radius-2e-4;
}
let contacts=0;
for(const pillar of pillars.filter(c=>c.kind!=='column_base')){
 for(const axis of [0,2])for(const sign of [-1,1])for(const fps of [15,30,60,144]){
  const walker=new GalleryWalk([pillar]);walker.speed=4;
  const p=new Vector3(...pillar.center);p.y=1.75;
  p.setComponent(axis,pillar.center[axis]+sign*(pillar.size[axis]/2+1));
  const dir=new Vector3().setComponent(axis,-sign);
  for(let i=0;i<fps;i++){walker.update(p,dir,1/fps);assert(!penetrates(p,pillar),'capsule remains outside '+pillar.id);}
  assert(Math.abs(p.getComponent(axis)-(pillar.center[axis]+sign*(pillar.size[axis]/2+radius)))<.002,'no tunneling at max speed: '+pillar.id);
  contacts+=walker.contacts;
 }
 // Walking around the end of a pillar must remain possible, without oversized invisible walls.
 const walker=new GalleryWalk([pillar]);walker.speed=4;
 const p=new Vector3(pillar.center[0]-pillar.size[0]/2-.8,1.75,pillar.center[2]+pillar.size[2]/2+radius+.03);
 for(let i=0;i<60;i++)walker.update(p,new Vector3(1,0,0),1/60);
 assert(p.x>pillar.center[0]+pillar.size[0]/2,'near-miss path stays clear');
 // A diagonal approach must slide and then clear the corner, rather than stick or pass through it.
 const q=new Vector3(pillar.center[0]-pillar.size[0]/2-.5,1.75,pillar.center[2]);
 const diagonal=new Vector3(1,0,.5).normalize();
 for(let i=0;i<60;i++){walker.update(q,diagonal,1/60);assert(!penetrates(q,pillar),'diagonal corner protection');}
 assert(q.z>pillar.center[2]+pillar.size[2]/2+.25,'diagonal movement slides past the pillar');
}
function run(colliders,start,dir){const w=new GalleryWalk(colliders),p=new Vector3(...start);w.speed=4;for(let i=0;i<120;i++)w.update(p,new Vector3(...dir),1/60);return p;}
const old=manifest.colliders.filter(c=>!c.sources);
const portal=manifest.colliders.find(c=>c.id==='COL_portal_pier_1_1');
const oldPortal=run(old,[2.2,1.75,-12.8],[0,0,-1]),newPortal=run(manifest.colliders,[2.2,1.75,-12.8],[0,0,-1]);
assert(oldPortal.z<portal.center[2]-portal.size[2]/2,'old state reproduces passing through rear pier');
assert(newPortal.z>=portal.center[2]+portal.size[2]/2+radius-.002,'rear portal pillar blocks forward walk');
const blue=manifest.colliders.find(c=>c.id==='COL_blue_column_1_1');
const oldBlue=run(old,[5.8,1.75,3.55],[1,0,0]),newBlue=run(manifest.colliders,[5.8,1.75,3.55],[1,0,0]);
assert(oldBlue.x>blue.center[0],'old state reproduces passing through blue column');
assert(newBlue.x<=blue.center[0]-blue.size[0]/2-radius+.002,'blue column blocks inward contact');
console.log('PASS: 26 column bodies from four sides at 4 m/s and 15/30/60/144fps; diagonal sliding, clear bypasses and two reproduced screenshot failures');
console.log(JSON.stringify({pillarProxyCount:pillars.length,contacts,portal:{before:oldPortal.toArray(),after:newPortal.toArray()},blueColumn:{before:oldBlue.toArray(),after:newBlue.toArray()}}));
