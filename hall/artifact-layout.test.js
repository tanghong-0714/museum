import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { artifactAssignments, loadHallArtifacts, placeHallArtifact } from './artifact-layout.js';

// Decode the real compressed geometry in Node. Image references are checked below.
const parser = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).register(() => ({
  name: 'HEADLESS_TEXTURES', loadTexture: () => Promise.resolve(null),
}));
async function readAsset(url) {
  const data = await readFile(new URL(`./public${url}`, import.meta.url));
  const jsonLength = data.readUInt32LE(12);
  const json = JSON.parse(data.subarray(20, 20 + jsonLength).toString());
  assert.equal(json.images.length, 1, `${url} must retain its embedded texture`);
  assert.ok(json.images[0].bufferView >= 0);
  assert.ok(json.materials[0].pbrMetallicRoughness.baseColorTexture);
  return parser.parseAsync(data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength), '');
}

assert.equal(artifactAssignments.length, 7);
assert.equal(new Set(artifactAssignments.map(item => item.artifactId)).size, 7);
assert.deepEqual(artifactAssignments.map(item => item.cabinetId), [1, 2, 3, 4, 5, 6, 'story']);
assert.deepEqual(artifactAssignments.map(item => item.rotationY), [0, 0, 0, -Math.PI, -Math.PI, -Math.PI, -Math.PI / 2]);
const manifest = JSON.parse(await readFile(new URL('./public/scene_manifest.json', import.meta.url), 'utf8'));
const hallData = await readFile(new URL(`./public/${manifest.model}`, import.meta.url));
const hall = await parser.parseAsync(hallData.buffer.slice(hallData.byteOffset, hallData.byteOffset + hallData.byteLength), '');
hall.scene.updateMatrixWorld(true);
const architecture = [];
const glass = [];
hall.scene.traverse(object => {
  if (!object.isMesh) return;
  if (object.name.includes('Baked_Architecture')) architecture.push(object);
  if (object.material.name.includes('display glass')) glass.push(object);
});
for (const assignment of artifactAssignments) {
  const [x, y, z] = assignment.position;
  const ray = new THREE.Raycaster(new THREE.Vector3(x, 1.2, z), new THREE.Vector3(0, -1, 0), 0, 0.7);
  const support = ray.intersectObjects(architecture, false)[0];
  assert.ok(support, `${assignment.artifactId} cabinet pad must exist`);
  assert.ok(Math.abs(support.point.y - y) < 1e-6, `${assignment.artifactId} must use the measured cabinet top`);
  const glassBounds = new THREE.Box3();
  const vertex = new THREE.Vector3();
  for (const mesh of glass) {
    const positions = mesh.geometry.attributes.position;
    for (let index = 0; index < positions.count; index++) {
      vertex.fromBufferAttribute(positions, index).applyMatrix4(mesh.matrixWorld);
      if (Math.abs(vertex.x - x) < 1.2 && Math.abs(vertex.z - z) < 1.2) glassBounds.expandByPoint(vertex);
    }
  }
  assert.ok(!glassBounds.isEmpty());
  assert.ok(Math.abs(glassBounds.max.y - 2.234) < 1e-6);
  assert.ok(Math.abs(glassBounds.min.x - (x - 0.714)) < 2e-6, 'glass left edge is measured from real vertices');
  assert.ok(Math.abs(glassBounds.max.x - (x + 0.714)) < 2e-6, 'glass right edge is measured from real vertices');
  // The complete maximum artifact footprint lies inside the 1.47 m support pad.
  for (const dx of [-0.52, 0.52]) for (const dz of [-0.52, 0.52]) {
    ray.ray.origin.set(x + dx, 1.2, z + dz);
    const edgeSupport = ray.intersectObjects(architecture, false)[0];
    assert.ok(edgeSupport && Math.abs(edgeSupport.point.y - y) < 1e-6, 'artifact footprint remains supported above the cabinet body');
  }
}
const totals = {};
for (const profile of ['Desktop', 'Mobile']) {
  let triangles = 0;
  for (const assignment of artifactAssignments) {
    const gltf = await readAsset(assignment[`model${profile}`]);
    gltf.scene.updateMatrixWorld(true);
    const originalMatrix = gltf.scene.matrix.clone();
    const record = placeHallArtifact(gltf.scene, assignment);
    const [x, y, z] = assignment.position;
    assert.ok(Math.abs(record.bounds.min.y - y) < 1e-6, `${assignment.artifactId} bottom must touch the pad`);
    assert.ok(record.bounds.min.x >= x - 0.565 && record.bounds.max.x <= x + 0.565);
    assert.ok(record.bounds.min.z >= z - 0.565 && record.bounds.max.z <= z + 0.565);
    assert.ok(record.bounds.max.y < 2.234);
    assert.ok(record.size.y >= 0.85 && record.size.y <= 1.151);
    assert.equal(record.meshCount, 1);
    assert.ok(gltf.scene.matrix.equals(originalMatrix), 'source node transform must be preserved');
    record.object.traverse(object => {
      if (!object.isMesh) return;
      assert.equal(object.userData.artifactId, assignment.artifactId);
      assert.ok(object.geometry.attributes.uv);
      assert.ok(object.geometry.attributes.normal);
    });
    triangles += record.triangleCount;
    console.log(`${profile} ${assignment.artifactId}: ${record.triangleCount} triangles, size ${record.size.toArray().map(value => value.toFixed(4)).join(' × ')}, bottom ${record.bounds.min.y.toFixed(4)}`);
  }
  totals[profile] = triangles;
}

const loadedUrls = [];
const appeared = [];
const scene = new THREE.Scene();
const result = await loadHallArtifacts({
  scene, mobile: true, manifest: {}, onArtifact: record => appeared.push(record.assignment.artifactId),
  loader: { loadAsync: async url => {
    loadedUrls.push(url);
    if (url.includes('bronze-head')) throw new Error('模拟单件资源失败');
    return readAsset(url);
  } },
});
assert.equal(result.records.length, 6);
assert.equal(result.failures.length, 1);
assert.equal(result.failures[0].artifactId, 'bronze-head');
assert.equal(scene.children.length, 6);
assert.equal(appeared.length, 6);
assert.ok(loadedUrls.every(url => url.endsWith('-mobile.glb')));
console.log(`PASS. Desktop total ${totals.Desktop}, mobile total ${totals.Mobile}. Single failure isolated, 6 remaining artifacts loaded.`);
