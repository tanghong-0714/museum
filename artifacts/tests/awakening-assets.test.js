import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {Vector3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {MeshoptDecoder} from 'meshoptimizer';
import {createArtifactPerformance} from '../src/artifact-performance.js';

const ids=['zenghouyi-bells','galloping-horse','goujian-sword','speechless-buddha'];

// Preserve geometry, skins and animation bytes; only strip image dependencies
// from this memory-only copy so Node can exercise Three's real glTF loader.
async function loadRig(url){
 const original=await readFile(url),length=original.readUInt32LE(12);
 const json=JSON.parse(original.subarray(20,20+length));
 json.images=[];json.textures=[];json.materials=[{pbrMetallicRoughness:{}}];
 for(const mesh of json.meshes)for(const primitive of mesh.primitives)primitive.material=0;
 const text=Buffer.from(JSON.stringify(json)),padded=Buffer.alloc(Math.ceil(text.length/4)*4,32);text.copy(padded);
 const header=Buffer.alloc(20);header.write('glTF');header.writeUInt32LE(2,4);
 header.writeUInt32LE(20+padded.length+original.length-20-length,8);
 header.writeUInt32LE(padded.length,12);header.writeUInt32LE(0x4e4f534a,16);
 const binary=Buffer.concat([header,padded,original.subarray(20+length)]);
 return new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
}

for(const id of ids)for(const variant of ['desktop','mobile']){
 const url=new URL(`../public/models/${id}-alive-${variant}-${id==='galloping-horse'?'R36':'R35'}.glb`,import.meta.url);
 test(`${id} ${variant}: actual asset has valid skinning and closed six-second performance`,async()=>{
  await MeshoptDecoder.ready;
  const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
  const doc=await io.read(fileURLToPath(url)),root=doc.getRoot();
  assert.equal(root.listScenes().length,1,'Export must exclude unrelated Blender scenes');
  assert.equal(root.listSkins().length,1);
  const joints=root.listSkins()[0].listJoints();assert.ok(joints.length>=1);
  const skinned=root.listNodes().filter(node=>node.getSkin());assert.ok(skinned.length>0);
  for(const node of skinned)for(const p of node.getMesh().listPrimitives()){
   const positions=p.getAttribute('POSITION'),ji=p.getAttribute('JOINTS_0'),weights=p.getAttribute('WEIGHTS_0');
   assert.ok(ji&&weights,'Every skinned primitive must contain joints and weights');
   assert.equal(positions.getCount(),ji.getCount());assert.equal(positions.getCount(),weights.getCount());
   const indices=[],values=[];
   for(let i=0;i<weights.getCount();i++){
    ji.getElement(i,indices);weights.getElement(i,values);
    assert.ok(values.every(v=>Number.isFinite(v)&&v>=0));
    assert.ok(Math.abs(values.reduce((a,b)=>a+b,0)-1)<.015,`Vertex ${i} has invalid weight sum`);
    assert.ok(indices.every(v=>Number.isInteger(v)&&v>=0&&v<joints.length));
   }
  }
  const animations=root.listAnimations();assert.ok(animations.length>0);
  if(id==='zenghouyi-bells')for(const name of ['bell_demo','bell_01','bell_02','bell_03','bell_04','bell_05'])assert.ok(animations.some(a=>a.getName()===name),`Missing ${name}`);
  for(const animation of animations){
   let end=0;
   for(const sampler of animation.listSamplers()){
    const times=sampler.getInput().getArray(),output=sampler.getOutput(),v=output.getArray(),width=output.getElementSize();
    assert.ok(Math.abs(times[0])<1e-6,'Clip starts at time zero');
    for(let i=1;i<times.length;i++)assert.ok(times[i]>times[i-1]);
    assert.ok(v.every(Number.isFinite));end=Math.max(end,times.at(-1));
    for(let i=0;i<width;i++)assert.ok(Math.abs(v[i]-v[v.length-width+i])<1e-5,`${animation.getName()} does not close`);
   }
   const expected=id==='zenghouyi-bells'&&/^bell_\d+$/.test(animation.getName())?1:6;
   assert.ok(Math.abs(end-expected)<1e-5,`${animation.getName()} duration ${end}, expected ${expected}`);
  }
 });
 test(`${id} ${variant}: exported animation moves real vertices and stop/end restore the surface`,async()=>{
  await MeshoptDecoder.ready;
  const gltf=await loadRig(url),meshes=[];gltf.scene.traverse(o=>{if(o.isSkinnedMesh)meshes.push(o);});
  assert.ok(meshes.length>0);
  const samples=meshes.map(mesh=>{
   const count=mesh.geometry.attributes.position.count;
   return {mesh,indices:Array.from({length:Math.min(1024,count)},(_,i)=>Math.floor(i*count/Math.min(1024,count)))};
  });
  const sample=()=>{
   gltf.scene.updateMatrixWorld(true);
   return samples.flatMap(({mesh,indices})=>{mesh.skeleton.update();return indices.map(i=>mesh.getVertexPosition(i,new Vector3()).applyMatrix4(mesh.matrixWorld));});
  };
  for(const clip of gltf.animations){
   const player=createArtifactPerformance(gltf.scene,clip),before=sample();
   try{
    assert.equal(player.play(),true);let movement=0;
    for(let i=0;i<24;i++){
     player.update(clip.duration/24);
     const during=sample();for(let j=0;j<during.length;j++)movement=Math.max(movement,during[j].distanceTo(before[j]));
    }
    assert.ok(movement>1e-5,`${clip.name}: animation exists but real surface never moves (${movement})`);
    player.update(.1);assert.equal(player.state,'idle');
    assert.ok(sample().every((v,i)=>v.distanceTo(before[i])<1e-6),`${clip.name}: natural end does not restore surface`);
    player.play();player.update(clip.duration*.37);player.stop();player.update(.4);
    assert.equal(player.state,'idle');
    assert.ok(sample().every((v,i)=>v.distanceTo(before[i])<1e-6),`${clip.name}: early stop does not restore surface`);
    assert.equal(player.play(),true,'Completed action must replay');
   }finally{player.dispose();}
  }
  for(const mesh of meshes){mesh.geometry.dispose();for(const mat of Array.isArray(mesh.material)?mesh.material:[mesh.material])mat.dispose();}
 });
}
