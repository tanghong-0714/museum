import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

export function createViewer(host, onMark) {
  const scene = new THREE.Scene(); scene.background = new THREE.Color('#171d19');
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2)); renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = .95;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.append(renderer.domElement); renderer.domElement.setAttribute('aria-label', '三维模型：拖动旋转，滚轮缩放');
  const camera = new THREE.PerspectiveCamera(35, 1, .01, 100);
  const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; controls.minDistance = .4; controls.maxDistance = 9; controls.autoRotateSpeed = .6;
  const pmrem = new THREE.PMREMGenerator(renderer); const room = new RoomEnvironment(); const environment = pmrem.fromScene(room, .04); scene.environment = environment.texture; room.dispose(); pmrem.dispose();
  scene.environmentIntensity = .7;
  scene.add(new THREE.HemisphereLight(0xf4f3e8, 0x343a36, .7));
  const light = new THREE.DirectionalLight(0xffeed7, 2); light.position.set(3, 5, 4); light.castShadow = true;
  light.shadow.mapSize.set(2048, 2048); Object.assign(light.shadow.camera, { left: -3, right: 3, top: 3, bottom: -3, near: .1, far: 15 }); light.shadow.normalBias = .015; scene.add(light);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0x080d09, roughness: 1 })); floor.rotation.x = -Math.PI / 2; floor.position.y = -1.03; floor.receiveShadow = true; scene.add(floor);
  const marks = new THREE.Group(); scene.add(marks);
  const raycaster = new THREE.Raycaster(); let model = null, marking = false, radius = .1, loadVersion = 0, pointerStart;
  const materials = new Map();
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  const clay = new THREE.MeshStandardMaterial({ color: 0xd6cfb8, roughness: .78 });
  function reset() { camera.position.set(2.5, 1.2, 3.6); controls.target.set(0, 0, 0); controls.update(); }
  function disposeObject(object) { object?.traverse(child => { child.geometry?.dispose(); for (const material of (Array.isArray(child.material) ? child.material : [child.material])) { if (!material || material === clay) continue; for (const value of Object.values(material)) if (value?.isTexture) value.dispose(); material.dispose(); } }); }
  function setMarks(regions) {
    while (marks.children.length) { const mark = marks.children[0]; marks.remove(mark); disposeObject(mark); }
    for (const region of regions) { const mesh = new THREE.Mesh(new THREE.SphereGeometry(region.radius, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffb35a, transparent: true, opacity: .5, depthWrite: false })); mesh.position.fromArray(region.position); marks.add(mesh); }
  }
  renderer.domElement.addEventListener('pointerdown', e => { pointerStart = [e.clientX, e.clientY]; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!marking || !model || !pointerStart || Math.hypot(e.clientX - pointerStart[0], e.clientY - pointerStart[1]) > 5) return;
    const rect = renderer.domElement.getBoundingClientRect();
    raycaster.setFromCamera(new THREE.Vector2((e.clientX - rect.left) / rect.width * 2 - 1, -(e.clientY - rect.top) / rect.height * 2 + 1), camera);
    const hit = raycaster.intersectObject(model, true)[0]; if (hit) onMark({ position: hit.point.toArray(), radius });
  });
  const resize = new ResizeObserver(() => { const width = host.clientWidth, height = host.clientHeight; renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); }); resize.observe(host);
  renderer.setAnimationLoop(() => { controls.update(); renderer.render(scene, camera); }); reset();
  return {
    async load(url) {
      const version = ++loadVersion;
      if (model) { materials.forEach((m, mesh) => { mesh.material = m; }); scene.remove(model); disposeObject(model); model = null; materials.clear(); }
      setMarks([]);
      const gltf = await loader.loadAsync(url); if (version !== loadVersion) { disposeObject(gltf.scene); return; }
      model = gltf.scene;
      const box = new THREE.Box3().setFromObject(model), size = box.getSize(new THREE.Vector3());
      const scale = 2 / Math.max(size.x, size.y, size.z, .001); model.scale.multiplyScalar(scale);
      box.setFromObject(model); model.position.sub(box.getCenter(new THREE.Vector3()));
      model.traverse(child => { if (child.isMesh) { materials.set(child, child.material); child.castShadow = true; child.receiveShadow = true; } });
      scene.add(model); floor.position.y = new THREE.Box3().setFromObject(model).min.y - .02; reset();
    },
    setMarks,
    reset,
    rotate(value) { controls.autoRotate = value; },
    marking(value) { marking = value; controls.enableRotate = !value; renderer.domElement.style.cursor = value ? 'crosshair' : 'grab'; },
    radius(value) { radius = value; },
    showMarks(value) { marks.visible = value; },
    material(mode) { materials.forEach((original, mesh) => { mesh.material = mode === 'clay' ? clay : original; const list = Array.isArray(mesh.material) ? mesh.material : [mesh.material]; list.forEach(m => { m.wireframe = mode === 'wire'; }); }); },
    async capture(includeMarks = false) { const visible = marks.visible; marks.visible = includeMarks; renderer.render(scene, camera); const blob = await new Promise(resolve => renderer.domElement.toBlob(resolve, 'image/png')); marks.visible = visible; return blob; },
  };
}
