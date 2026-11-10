import assert from 'node:assert/strict';
import { hologramTiming, createHologramStage } from './hologram-stage.js';
import { Scene, Vector3 } from 'three';
assert.equal(hologramTiming(0).opacity, 0);
assert.equal(hologramTiming(.6).opacity, 1);
assert.equal(hologramTiming(4.4).opacity, 1);
assert.equal(hologramTiming(5).opacity, 0);
assert.equal(hologramTiming(5).due, true);
assert.equal(hologramTiming(4.99).due, false);
const scene = new Scene();
const stage = createHologramStage({ scene });
assert.equal(stage.getState().status, 'empty');
stage.setModels([]);
stage.update(.016, { paused: true });
assert.equal(stage.getState().paused, true);
assert.equal(stage.getCurrent(), null);
stage.dispose();
stage.dispose();
assert.equal(scene.children.length, 0);
assert.equal(stage.getState().status, 'disposed');
console.log('hologram-stage tests passed');

// Exercise the actual async playlist with small in-memory GLTF-like scenes.
const { Group, Mesh, BoxGeometry, MeshStandardMaterial } = await import('three');
function modelScene() {
  const group = new Group();
  group.add(new Mesh(new BoxGeometry(.4, 1, .4), new MeshStandardMaterial()));
  return { scene: group };
}
const flush = () => new Promise(resolve => setTimeout(resolve, 0));
const loaded = [];
const playlist = createHologramStage({ scene: new Scene(), mobile: true, loadModel: async record => {
  loaded.push(record.id);
  if (record.id === 'bad') throw new Error('test failure');
  return modelScene();
} });
playlist.setModels([{ id: 'a', modelUrl: '/a.glb' }, { id: 'b', modelUrl: '/b.glb' }]);
await flush();
playlist.update(0);
assert.equal(playlist.getCurrent().id, 'a');
await flush();
assert.deepEqual(loaded, ['a', 'b']);
playlist.update(4);
assert.equal(playlist.getState().elapsed, 4);
playlist.update(20, { paused: true });
assert.equal(playlist.getState().elapsed, 4);
assert.equal(playlist.getCurrent().id, 'a');
playlist.update(0);
assert.equal(playlist.getState().elapsed, 0);
playlist.update(4.9);
assert.equal(playlist.getCurrent().id, 'a');
playlist.update(.1);
assert.equal(playlist.getCurrent().id, 'b');
assert.equal(playlist.getState().index, 1);
playlist.dispose();
await flush();
assert.equal(playlist.getState().status, 'disposed');
playlist.setModels([{ id: 'bad', modelUrl: '/bad.glb' }]);
assert.equal(playlist.getState().status, 'disposed');
const failing = createHologramStage({ scene: new Scene(), loadModel: async () => { throw new Error('isolated failure'); } });
failing.setModels([{ id: 'bad', modelUrl: '/bad.glb' }]);
await flush();
assert.equal(failing.getState().status, 'error');
assert.match(failing.getState().error, /isolated failure/);
failing.dispose();
let resolveLate;
let geometryDisposed = false;
const lateModel = modelScene();
lateModel.scene.children[0].geometry.addEventListener('dispose', () => { geometryDisposed = true; });
const late = createHologramStage({ scene: new Scene(), loadModel: () => new Promise(resolve => { resolveLate = resolve; }) });
late.setModels([{ id: 'late', modelUrl: '/late.glb' }]);
late.dispose();
resolveLate(lateModel);
await flush();
assert.equal(geometryDisposed, true);
assert.equal(late.getCurrent(), null);
console.log('hologram async playlist, pause, failure and late disposal tests passed');

const compileQueue=[];
const warmStage=createHologramStage({scene:new Scene(),loadModel:async()=>modelScene(),
 prepareForRender:(object,signal)=>new Promise(resolve=>compileQueue.push({object,signal,resolve}))});
warmStage.setModels([{id:'warm-a',modelUrl:'/a.glb'},{id:'warm-b',modelUrl:'/b.glb'}]);
await flush();
warmStage.update(0);
assert.equal(warmStage.getCurrent(),null,'uncompiled first model is not drawn');
compileQueue[0].resolve();await flush();warmStage.update(0);await flush();
assert.equal(warmStage.getCurrent().id,'warm-a');
warmStage.update(6);
assert.equal(warmStage.getCurrent().id,'warm-a','visible model stays alive until successor shaders are ready');
compileQueue[1].resolve();await flush();warmStage.update(0);
assert.equal(warmStage.getCurrent().id,'warm-b');
warmStage.dispose();await flush();
// Compilation can finish after a playlist is replaced or the stage is disposed.
let finishCompile, pendingParticlesDisposed=0;
const cancelWarm=createHologramStage({scene:new Scene(),loadModel:async()=>modelScene(),
 prepareForRender:object=>new Promise(resolve=>{finishCompile=resolve;object.traverse(node=>{
  if(node.isPoints)node.geometry.addEventListener('dispose',()=>pendingParticlesDisposed++);
 })})});
cancelWarm.setModels([{id:'late-warm',modelUrl:'/late.glb'}]);await flush();
cancelWarm.dispose();finishCompile();await flush();
assert.equal(cancelWarm.getCurrent(),null);
assert.equal(pendingParticlesDisposed,1,'cancelled warm-up releases particle resources exactly once');
console.log('hologram async shader warm-up, uninterrupted switch and cancelled warm-up cleanup passed');

const pauseScene = new Scene();
const pauseStage = createHologramStage({ scene: pauseScene, loadModel: async () => modelScene() });
pauseStage.setModels([{ id: 'p1', modelUrl: '/p1.glb' }, { id: 'p2', modelUrl: '/p2.glb' }]);
await flush();
pauseStage.update(0);
await flush();
pauseStage.update(4.7);
let particleUniforms;
pauseScene.traverse(node => { if (node.isPoints) particleUniforms = node.material.uniforms; });
assert.ok(particleUniforms.opacity.value < .6);
const beforePauseShaderTime = particleUniforms.time.value;
pauseStage.update(.5, { paused: true });
assert.equal(pauseStage.getCurrent().id, 'p1');
assert.ok(particleUniforms.opacity.value > .99);
assert.ok(particleUniforms.dispersion.value < .01);
assert.ok(particleUniforms.time.value > beforePauseShaderTime);
const beforeReducedTime = particleUniforms.time.value;
pauseStage.update(.5, { paused: true, reduced: true });
assert.equal(particleUniforms.time.value, beforeReducedTime);
pauseStage.dispose();
console.log('hologram paused materialization and reduced-motion shader tests passed');

// Shared hall geometry/textures must survive hologram replacement/disposal.
const { cloneHallArtifactForHologram, placeHallArtifact, artifactAssignments } = await import('./artifact-layout.js');
const { Texture } = await import('three');
const sharedSource = modelScene().scene;
const sourceMesh = sharedSource.children[0];
sourceMesh.material.map = new Texture();
const hallRecord = placeHallArtifact(sharedSource, artifactAssignments[0]);
let sharedGeometryDisposals = 0, sharedTextureDisposals = 0, clonedMaterialDisposals = 0;
sourceMesh.geometry.addEventListener('dispose', () => sharedGeometryDisposals++);
sourceMesh.material.map.addEventListener('dispose', () => sharedTextureDisposals++);
const sharingScene = new Scene();
const sharingStage = createHologramStage({ scene: sharingScene, loadModel: async () => {
  const cloned = cloneHallArtifactForHologram(hallRecord);
  const clonedMesh = cloned.scene.children[0];
  assert.equal(clonedMesh.geometry, sourceMesh.geometry);
  assert.equal(clonedMesh.material.map, sourceMesh.material.map);
  assert.notEqual(clonedMesh.material, sourceMesh.material);
  clonedMesh.material.addEventListener('dispose', () => clonedMaterialDisposals++);
  return cloned;
} });
sharingStage.setModels([{ id: 'shared', modelUrl: '/shared.glb' }]);
await flush();
sharingStage.update(0);
assert.equal(sourceMesh.material.transparent, false);
assert.equal(sharedGeometryDisposals, 0, 'particle sampling must not dispose shared geometry');
sharingStage.dispose();
assert.equal(clonedMaterialDisposals, 1);
assert.equal(sharedGeometryDisposals, 0);
assert.equal(sharedTextureDisposals, 0);
assert.equal(sharedSource.parent.parent, hallRecord.object);
console.log('hologram shared geometry/texture ownership tests passed');

// Cancellation while a dense sampler yields must release only owned materials.
const { PlaneGeometry } = await import('three');
const denseRoot = new Group();
const denseGeometry = new PlaneGeometry(1, 1, 100, 100);
let denseDisposed = 0, cancelledMaterialDisposed = 0;
denseGeometry.addEventListener('dispose', () => denseDisposed++);
denseRoot.add(new Mesh(denseGeometry, new MeshStandardMaterial()));
const denseRecord = placeHallArtifact(denseRoot, artifactAssignments[0]);
const cancelling = createHologramStage({ scene: new Scene(), loadModel: async () => {
  const result = cloneHallArtifactForHologram(denseRecord);
  result.scene.children[0].material.addEventListener('dispose', () => cancelledMaterialDisposed++);
  return result;
} });
cancelling.setModels([{ id: 'dense', modelUrl: '/dense.glb' }]);
await Promise.resolve();
cancelling.dispose();
await flush();
await flush();
assert.equal(denseDisposed, 0);
assert.equal(cancelledMaterialDisposed, 1);
assert.equal(cancelling.getState().status, 'disposed');
console.log('hologram chunked sampling cancellation ownership tests passed');
// Front orientation must be applied before asynchronous GPU warm-up.
const { getHologramFrontRotation, hologramFrontRotation } = await import('./hologram-orientation.js');
assert.equal(Object.keys(hologramFrontRotation).length, 7);
for (const assignment of artifactAssignments) {
  const angle = getHologramFrontRotation(assignment);
  const front = new Vector3(1, 0, 0).applyAxisAngle(new Vector3(0, 1, 0), angle);
  assert.ok(front.distanceTo(new Vector3(0, 0, 1)) < 1e-8);
}
assert.equal(getHologramFrontRotation({ id: 'future', frontRotationY: .4 }), .4);
assert.equal(getHologramFrontRotation({ id: 'unknown' }), 0);
let orientedObject;
const orientedStage = createHologramStage({scene: new Scene(), loadModel: async () => modelScene(),
 prepareForRender: async object => { orientedObject = object; assert.equal(object.rotation.y, -Math.PI / 2); }});
orientedStage.setModels([{id:'phoenix-ewer', modelUrl:'/a.glb'}]);
await flush(); orientedStage.update(0); await flush();
assert.equal(orientedObject.rotation.y, -Math.PI / 2);
orientedStage.update(2);
assert.ok(Math.abs(orientedObject.rotation.y + Math.PI / 2) <= .07);
const heldAngle = orientedObject.rotation.y;
orientedStage.update(10, {paused:true});
assert.equal(orientedObject.rotation.y, heldAngle);
orientedStage.update(0, {reduced:true});
assert.equal(orientedObject.rotation.y, -Math.PI / 2);
orientedStage.dispose();
console.log('hologram entrance calibration, precompile orientation and frozen pose tests passed');
