import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Box3, Vector3, Mesh, PlaneGeometry, Raycaster } from 'three';
import { repairExhibitGeometry } from './exhibit-geometry-repair.js';
import { GalleryWalk } from './walk.js';
import { artifactAssignments } from './artifact-layout.js';
import { labelPlacement } from './exhibit-label-config.js';
const manifest = JSON.parse(await readFile('public/scene_manifest.json', 'utf8'));
const bytes = await readFile(`public/${manifest.model}`);
const loader = new GLTFLoader().register(() => ({ name: 'HEADLESS_TEXTURES', loadTexture: () => Promise.resolve(null) }));
const hall = await loader.parseAsync(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength), '');
const original = new Map();
hall.scene.traverse(node => { if (node.isMesh) original.set(node, { geometry: node.geometry, material: node.material, metadata: {...node.userData} }); });
const report = repairExhibitGeometry(hall.scene, manifest);
assert.equal(report.modelModified, true);
assert.equal(report.repairedNodes.length, 12);
for (const [node, source] of original) {
  assert.equal(node.geometry, source.geometry, 'source geometry remains shared and unmodified');
  assert.equal(node.material, source.material, 'source materials remain unchanged');
  assert.deepEqual(node.userData, source.metadata, 'number picking metadata is preserved');
}
for (const exhibit of manifest.exhibits) {
  const plaque = hall.scene.getObjectByName(`Web_R17_Exhibit_${exhibit.id}_number_plaque`);
  const direction = exhibit.side === 'left' ? 1 : -1;
  const bounds = new Box3().setFromObject(plaque, true);
  const back = direction > 0 ? bounds.min.x : bounds.max.x;
  assert(Math.abs(direction * (back - exhibit.position[0]) - 1.154) < 1e-6, 'plaque back clears the entire tapered body by 4mm');
}

assert.equal(report.measurements.length, 8);
assert.equal(report.measurements.filter(caseBounds => caseBounds.glassBounds).length, 7);
for (const measured of report.measurements) {
  const collider = manifest.colliders.find(item => item.id === measured.id);
  // Source float32 coordinates introduce micrometre-scale discrepancies.
  for (const axis of [0, 2]) {
    const isInscriptionFront = measured.id === 'COL_central_case' && axis === 2;
    assert(measured.bounds.min[axis] >= collider.center[axis] - collider.size[axis] / 2 - 0.00001);
    if (!isInscriptionFront) assert(measured.bounds.max[axis] <= collider.center[axis] + collider.size[axis] / 2 + 0.00001);
  }
  for (const fps of [5, 15, 30, 60, 144]) {
    for (let angle = 0; angle < 8; angle++) {
      const direction = new Vector3(Math.cos(angle * Math.PI / 4), 0, Math.sin(angle * Math.PI / 4));
      const position = new Vector3(collider.center[0], 1.75, collider.center[2]).addScaledVector(direction, 4);
      const walker = new GalleryWalk([collider]);
      for (let frame = 0; frame < fps * 2; frame++) {
        walker.update(position, direction.clone().negate(), 1 / fps);
        const dx = Math.max(Math.abs(position.x - collider.center[0]) - collider.size[0] / 2, 0);
        const dz = Math.max(Math.abs(position.z - collider.center[2]) - collider.size[2] / 2, 0);
        assert(Math.hypot(dx, dz) >= walker.radius - 0.0002, `${collider.id} ${fps}fps approach ${angle}`);
      }
    }
  }
}
const inscription = report.addedColliders.find(collider => collider.id === 'COL_central_inscription');
assert(inscription, 'real central inscription must be measured');
assert(inscription.center[2] + inscription.size[2] / 2 > 1.7075);
assert(inscription.size[2] < 0.006, 'only the measured 1.2mm lettering plus 2mm padding per face');
const beforeCount = manifest.colliders.length;
repairExhibitGeometry(hall.scene, manifest);
assert.equal(manifest.colliders.length, beforeCount, 'repair is idempotent');
const walker = new GalleryWalk(manifest.colliders);
const position = new Vector3(0, 1.75, 4);
for (let frame = 0; frame < 20; frame++) walker.update(position, new Vector3(0, 0, -1), .2);
assert(Math.abs(position.z - (inscription.center[2] + inscription.size[2] / 2 + walker.radius)) < .002);
if (process.argv.includes('--write-report')) await writeFile('qa/exhibit-geometry-audit-20261107.json', JSON.stringify(report, null, 2) + '\n');
if (process.argv.includes('--update-manifest')) await writeFile('public/scene_manifest.json', JSON.stringify(manifest, null, 2) + '\n');
// Test the new inclined labels against the actual GLB shoulder and glass,
// not only their 2D collision footprint. Sample the complete board surface.
const surfaces = [];
hall.scene.traverse(node => { if (node.isMesh && !node.userData.exhibitId) surfaces.push(node); });
for (const assignment of artifactAssignments) {
  const placement = labelPlacement(assignment);
  const board = new Mesh(new PlaneGeometry(1.24, .30));
  board.position.fromArray(placement.position);
  board.rotation.order = 'YXZ';
  board.rotation.set(placement.rotationX, placement.rotationY, 0);
  board.updateMatrixWorld(true);
  for (let row = 0; row <= 6; row++) for (let column = 0; column <= 12; column++) {
    const point = new Vector3(-.62 + column * 1.24 / 12, -.15 + row * .30 / 6, 0).applyMatrix4(board.matrixWorld);
    const ray = new Raycaster(new Vector3(point.x, 2.45, point.z), new Vector3(0, -1, 0), 0, 2.45);
    const support = ray.intersectObjects(surfaces, false)[0];
    assert(support, 'inclined board remains above the visible cabinet shoulder');
    assert(point.y - support.point.y > .01, `${assignment.artifactId}: label must clear every real shoulder/glass surface`);
    assert(Math.abs(point.x - assignment.position[0]) < 1.15 && Math.abs(point.z - assignment.position[2]) < 1.15, 'inclined board remains inside existing cabinet footprint');
  }
  board.geometry.dispose();
  board.material.dispose();
}
const hidden = repairExhibitGeometry(hall.scene, manifest, { replaceNumberPlates: true });
assert.equal(hidden.repairedNodes.length, 12);
for (const name of hidden.repairedNodes) {
  const node = hall.scene.getObjectByName(name);
  assert.equal(node.visible, false);
  assert.ok(node.userData.exhibitId, 'hidden originals retain interaction metadata');
}
assert(!manifest.colliders.some(collider => collider.kind === 'exhibit_number_plaque'), 'hidden old plaques leave no invisible barriers');
console.log('PASS: real GLB audit of eight platforms, seven glass cabinets, 320 eight-direction/fps cases and exact inscription protection. Twelve original numbered nodes repositioned without replacing geometry/materials or metadata.');
