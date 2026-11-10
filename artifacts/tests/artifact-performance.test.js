import test from 'node:test';
import {fileURLToPath} from 'node:url';
import {readFile} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {Group,Bone,AnimationClip,VectorKeyframeTrack,Vector3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {MeshoptDecoder} from 'meshoptimizer';
import {createArtifactPerformance} from '../src/artifact-performance.js';

function fixture(){const root=new Group(),bone=new Bone();bone.name='Pluck';root.add(bone);const clip=new AnimationClip('performance',6,[new VectorKeyframeTrack('Pluck.position',[0,3,6],[1,0,0,2,0,0,1,0,0])]);return {bone,player:createArtifactPerformance(root,clip)};}
test('click playback actually moves a bone, finishes at frame zero and can replay',()=>{
 const {bone,player}=fixture();assert.equal(bone.position.x,1);assert.equal(player.play(),true);assert.equal(player.play(),false);
 for(let i=0;i<30;i++)player.update(.1);assert.ok(bone.position.x>1.9);
 for(let i=0;i<32;i++)player.update(.1);assert.equal(player.state,'idle');assert.equal(bone.position.x,1);
 assert.equal(player.play(),true);player.update(1);assert.ok(bone.position.x>1);player.dispose();assert.equal(bone.position.x,1);
});
test('early cancellation fades back, rejects duplicate starts, zero delta does not advance',()=>{
 const {bone,player}=fixture();player.play();player.update(2);const before=bone.position.x;player.update(0);assert.equal(bone.position.x,before);
 player.stop();assert.equal(player.state,'returning');assert.equal(player.play(),false);player.update(.15);assert.ok(bone.position.x>1);player.stop();player.update(.21);assert.equal(player.state,'idle');assert.equal(bone.position.x,1);
});
for(const variant of ['desktop','mobile'])test(`${variant} asset retains joints, weights and an exactly closed six-second clip`,async()=>{
 await MeshoptDecoder.ready;const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder});
 const doc=await io.read(fileURLToPath(new URL(`../public/models/pipa-alive-${variant}-R31.glb`,import.meta.url)));
 assert.equal(doc.getRoot().listSkins().length,1);assert.equal(doc.getRoot().listSkins()[0].listJoints().length,4);
 const primitive=doc.getRoot().listMeshes()[0].listPrimitives()[0];assert.ok(primitive.getAttribute('JOINTS_0'));assert.ok(primitive.getAttribute('WEIGHTS_0'));
 for(const s of doc.getRoot().listAnimations()[0].listSamplers()){
  const times=s.getInput().getArray(),v=s.getOutput().getArray(),width=s.getOutput().getElementSize();assert.equal(times[0],0);assert.equal(times.at(-1),6);
  for(let i=1;i<times.length;i++)assert.ok(times[i]>times[i-1]);
  for(let i=0;i<width;i++)assert.ok(Math.abs(v[i]-v[v.length-width+i])<1e-6);
 }
});
test('real exported rig deforms vertices and returns to the identical resting surface',async()=>{
 const original=await readFile(new URL('../public/models/pipa-alive-desktop-R31.glb',import.meta.url));
 const jsonLength=original.readUInt32LE(12),json=JSON.parse(original.subarray(20,20+jsonLength));
 // Omit only textures in this in-memory copy, so the actual rig can load without a DOM.
 json.images=[];json.textures=[];json.materials=[{pbrMetallicRoughness:{}}];for(const mesh of json.meshes)for(const primitive of mesh.primitives)primitive.material=0;
 const text=Buffer.from(JSON.stringify(json)),padded=Buffer.alloc(Math.ceil(text.length/4)*4,32);text.copy(padded);
 const header=Buffer.alloc(20);header.write('glTF');header.writeUInt32LE(2,4);header.writeUInt32LE(20+padded.length+original.length-20-jsonLength,8);header.writeUInt32LE(padded.length,12);header.writeUInt32LE(0x4e4f534a,16);
 const binary=Buffer.concat([header,padded,original.subarray(20+jsonLength)]);
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(binary.buffer.slice(binary.byteOffset,binary.byteOffset+binary.byteLength),'');
 const player=createArtifactPerformance(gltf.scene,gltf.animations[0]);let mesh;gltf.scene.traverse(o=>{if(o.isSkinnedMesh)mesh=o;});
 const indices=Array.from({length:300},(_,i)=>Math.floor(i*mesh.geometry.attributes.position.count/300));
 const sample=()=>{gltf.scene.updateMatrixWorld(true);mesh.skeleton.update();return indices.map(i=>mesh.getVertexPosition(i,new Vector3()));};
 const before=sample();player.play();for(let i=0;i<13;i++)player.update(.1);const during=sample();
 const displacement=Math.max(...during.map((p,i)=>p.distanceTo(before[i])));assert.ok(displacement>.001,`No visible deformation: ${displacement}`);
 player.stop();player.update(.4);const after=sample();assert.ok(after.every((p,i)=>p.distanceTo(before[i])<1e-6));player.dispose();
});

test('independent bell clips interrupt immediately and default demo remains replayable',()=>{
 const root=new Group(),bone=new Bone();bone.name='Bell';root.add(bone);
 const make=(name,axis)=>new AnimationClip(name,1,[new VectorKeyframeTrack('Bell.position',[0,.5,1],[0,0,0,...axis,0,0,0])]);
 const demo=make('demo',[1,0,0]),strike=make('strike',[0,2,0]);
 const player=createArtifactPerformance(root,demo,[strike]);
 assert.equal(player.play('missing'),false);player.play();player.update(.5);assert.ok(bone.position.x>.9);
 assert.equal(player.play('strike',{interrupt:true}),true);player.update(.5);assert.equal(player.clipName,'strike');assert.ok(bone.position.y>1.9);assert.equal(bone.position.x,0);
 player.stop();player.update(.4);assert.equal(bone.position.length(),0);assert.equal(player.play(),true);assert.equal(player.clipName,'demo');player.dispose();
});
