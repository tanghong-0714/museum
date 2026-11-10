import { Box3, Vector3 } from 'three';

const INSCRIPTION_COLLIDER_ID = 'COL_central_inscription';
const INSCRIPTION_NODE = 'Web_R14_Central_front_inscription';
const PADDING = 0.002;

// Read the loaded, baked mesh in world coordinates. Run once after GLTF loading.
// This intentionally preserves source geometry, materials, and node transforms.
export function repairExhibitGeometry(root, manifest, { replaceNumberPlates = false } = {}) {
  root.updateMatrixWorld(true);
  const vertex = new Vector3();
  const cases = manifest.colliders.filter(collider =>
    collider.id === 'COL_central_case' || /COL_(Left|Right) exhibit/.test(collider.id)
      || collider.id === 'COL_Far gallery porcelain');
  const measurements = cases.map(collider => ({
    id: collider.id,
    center: collider.center,
    bounds: new Box3(),
    glassBounds: new Box3(),
  }));
  let inscription = null;
  root.traverse(node => {
    if (!node.isMesh) return;
    if (node.name === INSCRIPTION_NODE || node.name === 'Web_R14_Central front inscription') inscription = node;
    const materials = Array.isArray(node.material) ? node.material : [node.material];
    const isGlass = materials.some(material => material.name.toLowerCase().includes('display glass'));
    const positions = node.geometry.attributes.position;
    for (let index = 0; index < positions.count; index++) {
      vertex.fromBufferAttribute(positions, index).applyMatrix4(node.matrixWorld);
      if (vertex.y < 0.05 || vertex.y > 2.5) continue;
      for (const measurement of measurements) {
        const central = measurement.id === 'COL_central_case';
        const radius = central ? 2.1 : 1.25;
        if (Math.abs(vertex.x - measurement.center[0]) > radius
          || Math.abs(vertex.z - measurement.center[2]) > radius) continue;
        measurement.bounds.expandByPoint(vertex);
        if (isGlass) measurement.glassBounds.expandByPoint(vertex);
      }
    }
  });
  const addedColliders = [];
  const repairedNodes = [];
  // The old vertical plaques intersect the tapered black plinth. Keep the
  // original numbered meshes (including picking metadata), clear the widest
  // plinth edge by 4 mm, and move the text with its backing plate.
  for (const exhibit of manifest.exhibits ?? []) {
    const plaque = root.getObjectByName(`Web_R17_Exhibit_${exhibit.id}_number_plaque`);
    const label = root.getObjectByName(`Web_R17_Exhibit_${exhibit.id}_number_label`);
    if (!plaque || !label) continue;
    if (replaceNumberPlates) {
      plaque.visible = false;
      label.visible = false;
      repairedNodes.push(plaque.name, label.name);
      const oldCollider = manifest.colliders.findIndex(item => item.id === `COL_exhibit_plaque_${exhibit.id}`);
      if (oldCollider !== -1) manifest.colliders.splice(oldCollider, 1);
      continue;
    }
    plaque.visible = true;
    label.visible = true;
    const direction = exhibit.side === 'left' ? 1 : -1;
    const centerX = exhibit.position[0];
    const bounds = new Box3().setFromObject(plaque, true);
    const back = direction > 0 ? bounds.min.x : bounds.max.x;
    const target = centerX + direction * 1.154;
    const shift = direction * Math.max(0, direction * (target - back));
    for (const node of [plaque, label]) {
      const world = node.getWorldPosition(new Vector3());
      world.x += shift;
      node.position.copy(node.parent.worldToLocal(world));
      node.updateMatrixWorld(true);
      repairedNodes.push(node.name);
    }
    const plaqueBounds = new Box3().setFromObject(plaque, true);
    plaqueBounds.union(new Box3().setFromObject(label, true)).expandByScalar(PADDING);
    const collider = {
      id: `COL_exhibit_plaque_${exhibit.id}`,
      kind: 'exhibit_number_plaque',
      center: plaqueBounds.getCenter(new Vector3()).toArray(),
      size: plaqueBounds.getSize(new Vector3()).toArray(),
      rotationY: 0,
      measuredNode: plaque.name,
    };
    const existing = manifest.colliders.findIndex(item => item.id === collider.id);
    if (existing === -1) manifest.colliders.push(collider);
    else manifest.colliders[existing] = collider;
    addedColliders.push(collider);
  }
  if (inscription) {
    const bounds = new Box3().setFromObject(inscription, true).expandByScalar(PADDING);
    const collider = {
      id: INSCRIPTION_COLLIDER_ID,
      kind: 'exhibit_inscription',
      center: bounds.getCenter(new Vector3()).toArray(),
      size: bounds.getSize(new Vector3()).toArray(),
      rotationY: 0,
      measuredNode: inscription.name,
    };
    const existing = manifest.colliders.findIndex(item => item.id === INSCRIPTION_COLLIDER_ID);
    if (existing === -1) manifest.colliders.push(collider);
    else manifest.colliders[existing] = collider;
    addedColliders.push(collider);
  }
  return {
    modelModified: repairedNodes.length > 0,
    repairedNodes,
    addedColliders,
    measurements: measurements.map(measurement => ({
      id: measurement.id,
      bounds: { min: measurement.bounds.min.toArray(), max: measurement.bounds.max.toArray() },
      glassBounds: measurement.glassBounds.isEmpty() ? null
        : { min: measurement.glassBounds.min.toArray(), max: measurement.glassBounds.max.toArray() },
    })),
  };
}
