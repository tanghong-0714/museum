import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

// Measured in museum_R18.glb. The manifest slot is 1 cm above the actual pad.
const TABLETOP_Y = 0.79;
const MODEL_BASE = '/artifacts/';

export const artifactAssignments = [
  { artifactId: 'phoenix-ewer', name: '凤首扁壶', nickname: '青花', cabinetId: 1,
    position: [-5.6, TABLETOP_Y, 6.6], modelDesktop: `${MODEL_BASE}phoenix-web-desktop.glb`, modelMobile: `${MODEL_BASE}phoenix-web-mobile.glb`,
    rotationY: 0, height: 0.95, maxWidth: 1.04, roughness: 0.5, metalness: 0 },
  { artifactId: 'bronze-head', name: '青铜头像', nickname: '守望', cabinetId: 2,
    position: [-5.6, TABLETOP_Y, 0], modelDesktop: `${MODEL_BASE}bronze-head-web-desktop.glb`, modelMobile: `${MODEL_BASE}bronze-head-web-mobile.glb`,
    rotationY: 0, height: 1, maxWidth: 1.04, roughness: 0.86, metalness: 0.15 },
  { artifactId: 'cloud-mirror', name: '八连弧纹铜镜', nickname: '照影', cabinetId: 3,
    position: [-5.6, TABLETOP_Y, -6.6], modelDesktop: `${MODEL_BASE}cloud-mirror-web-desktop.glb`, modelMobile: `${MODEL_BASE}cloud-mirror-web-mobile.glb`,
    rotationY: 0, height: 0.97, maxWidth: 1.04, roughness: 0.72, metalness: 0.2 },
  { artifactId: 'liquan-bodhisattva', name: '菩萨立像', nickname: '静照', cabinetId: 4,
    position: [5.6, TABLETOP_Y, 6.6], modelDesktop: `${MODEL_BASE}liquan-bodhisattva-web-desktop.glb`, modelMobile: `${MODEL_BASE}liquan-bodhisattva-web-mobile.glb`,
    rotationY: -Math.PI, height: 1.15, maxWidth: 1.04, roughness: 0.94, metalness: 0 },
  { artifactId: 'longquan-figure', name: '龙泉窑青瓷露胎人物塑像', nickname: '青隐', cabinetId: 5,
    position: [5.6, TABLETOP_Y, 0], modelDesktop: `${MODEL_BASE}longquan-figure-web-desktop.glb`, modelMobile: `${MODEL_BASE}longquan-figure-web-mobile.glb`,
    rotationY: -Math.PI, height: 1.08, maxWidth: 1.04, roughness: 0.66, metalness: 0 },
  { artifactId: 'pipa-figurine', name: '彩绘陶弹琵琶女俑', nickname: '弦月', cabinetId: 6,
    position: [5.6, TABLETOP_Y, -6.6], modelDesktop: `${MODEL_BASE}pipa-figurine-web-desktop.glb`, modelMobile: `${MODEL_BASE}pipa-figurine-web-mobile.glb`,
    rotationY: -Math.PI, height: 1.04, maxWidth: 1.04, roughness: 0.9, metalness: 0 },
  { artifactId: 'speechless-buddha', name: '无语佛', nickname: '淡淡', cabinetId: 'story',
    position: [0, TABLETOP_Y, -20.7], modelDesktop: `${MODEL_BASE}speechless-buddha-web-desktop.glb`, modelMobile: `${MODEL_BASE}speechless-buddha-web-mobile.glb`,
    rotationY: -Math.PI / 2, height: 1.12, maxWidth: 1.04, roughness: 0.83, metalness: 0.03 },
];

function configureArtifactMaterials(object, assignment, renderer) {
  const anisotropy = Math.min(8, renderer?.capabilities.getMaxAnisotropy() ?? 1);
  object.traverse(child => {
    if (!child.isMesh) return;
    child.userData.artifactId = assignment.artifactId;
    for (const material of Array.isArray(child.material) ? child.material : [child.material]) {
      material.roughness = assignment.roughness;
      material.metalness = assignment.metalness;
      material.envMapIntensity = 0.42;
      for (const value of Object.values(material)) {
        if (!value?.isTexture) continue;
        value.magFilter = THREE.LinearFilter;
        value.minFilter = THREE.LinearMipmapLinearFilter;
        value.generateMipmaps = true;
        value.anisotropy = anisotropy;
        value.needsUpdate = true;
      }
    }
  });
}

export function placeHallArtifact(source, assignment) {
  const object = new THREE.Group();
  object.name = `HallArtifact_${assignment.artifactId}`;
  object.userData.artifactId = assignment.artifactId;
  // Preserve every original node matrix. Rotate outside the supplied glTF scene.
  const oriented = new THREE.Group();
  oriented.rotation.y = assignment.rotationY;
  oriented.add(source);
  object.add(oriented);
  object.updateMatrixWorld(true);
  const sourceBounds = new THREE.Box3().setFromObject(oriented, true);
  const sourceSize = sourceBounds.getSize(new THREE.Vector3());
  if (sourceBounds.isEmpty() || sourceSize.y <= 0) {
    throw new Error('文物模型没有可展示的有效网格');
  }
  const scale = Math.min(assignment.height / sourceSize.y, assignment.maxWidth / Math.max(sourceSize.x, sourceSize.z));
  const sourceCenter = sourceBounds.getCenter(new THREE.Vector3());
  oriented.scale.setScalar(scale);
  oriented.position.set(-sourceCenter.x * scale, -sourceBounds.min.y * scale, -sourceCenter.z * scale);
  object.position.fromArray(assignment.position);
  object.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(object, true);
  let triangleCount = 0;
  let meshCount = 0;
  object.traverse(child => {
    if (!child.isMesh) return;
    child.userData.artifactId = assignment.artifactId;
    meshCount++;
    triangleCount += (child.geometry.index?.count ?? child.geometry.attributes.position.count) / 3;
  });
  return { object, assignment, bounds, center: bounds.getCenter(new THREE.Vector3()), size: bounds.getSize(new THREE.Vector3()), triangleCount, meshCount };
}

export async function loadHallArtifacts({ scene, renderer, manifest, onArtifact,
  mobile = globalThis.matchMedia?.('(max-width: 760px), (pointer: coarse)').matches ?? false,
  loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder) }) {
  const records = [];
  const failures = [];
  // Seven independent requests allow a broken asset to leave the remaining cases usable.
  await Promise.all(artifactAssignments.map(async assignment => {
    const modelUrl = mobile ? assignment.modelMobile : assignment.modelDesktop;
    let record;
    try {
      const gltf = await loader.loadAsync(modelUrl);
      configureArtifactMaterials(gltf.scene, assignment, renderer);
      record = { ...placeHallArtifact(gltf.scene, assignment), modelUrl };
      scene.add(record.object);
      records.push(record);
    } catch (error) {
      failures.push({ artifactId: assignment.artifactId, name: assignment.name, modelUrl, message: error.message });
      return;
    }
    onArtifact?.(record);
  }));
  records.sort((a, b) => artifactAssignments.indexOf(a.assignment) - artifactAssignments.indexOf(b.assignment));
  return { records, failures };
}

// The hall owns geometry/textures for its lifetime. The hologram owns cloned
// nodes/materials only and must release with sharedResources semantics.
export function cloneHallArtifactForHologram(record) {
  const source = record?.object?.children[0]?.children[0];
  if (!source) throw new Error('馆藏模型尚未就绪');
  const scene = source.clone(true);
  const materials = new Map();
  scene.traverse(node => {
    if (!node.isMesh) return;
    const cloneMaterial = material => {
      if (!materials.has(material)) materials.set(material, material.clone());
      return materials.get(material);
    };
    node.material = Array.isArray(node.material) ? node.material.map(cloneMaterial) : cloneMaterial(node.material);
  });
  return { scene, sharedResources: true };
}
