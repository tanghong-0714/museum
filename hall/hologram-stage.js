import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { getHologramFrontRotation } from './hologram-orientation.js';
import { MeshSurfaceSampler } from 'three/addons/math/MeshSurfaceSampler.js';

export const HOLOGRAM_INTERVAL = 5;
export const HOLOGRAM_TRANSITION = .6;

export function hologramTiming(elapsed) {
  const time = Math.max(0, elapsed);
  return { due: time >= HOLOGRAM_INTERVAL, opacity: THREE.MathUtils.smoothstep(time, 0, HOLOGRAM_TRANSITION) * (1 - THREE.MathUtils.smoothstep(time, HOLOGRAM_INTERVAL - HOLOGRAM_TRANSITION, HOLOGRAM_INTERVAL)) };
}

function disposeObject(root, sharedResources = false) {
  const geometries = new Set();
  const materials = new Set();
  const textures = new Set();
  root.traverse(node => {
    if (node.geometry && (!sharedResources || node.isPoints)) geometries.add(node.geometry);
    for (const material of node.material ? (Array.isArray(node.material) ? node.material : [node.material]) : []) {
      materials.add(material);
      if (!sharedResources) for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  geometries.forEach(geometry => geometry.dispose());
  materials.forEach(material => material.dispose());
  textures.forEach(texture => { texture.dispose(); texture.source?.data?.close?.(); });
  root.removeFromParent();
}

async function buildSurfaceSampler(mesh, signal) {
  const sampler = new MeshSurfaceSampler(mesh);
  const positions = sampler.positionAttribute, indices = sampler.indexAttribute;
  const faces = (indices?.count ?? positions.count) / 3;
  const distribution = new Float32Array(faces);
  const triangle = new THREE.Triangle();
  let cumulative = 0;
  for (let start = 0; start < faces; start += 8192) {
    if (signal.aborted) throw new DOMException('模型采样已取消', 'AbortError');
    for (let i = start; i < Math.min(faces, start + 8192); i++) {
      const a = i * 3;
      triangle.a.fromBufferAttribute(positions, indices ? indices.getX(a) : a);
      triangle.b.fromBufferAttribute(positions, indices ? indices.getX(a + 1) : a + 1);
      triangle.c.fromBufferAttribute(positions, indices ? indices.getX(a + 2) : a + 2);
      cumulative += triangle.getArea();
      distribution[i] = cumulative;
    }
    // Let input/painting run between chunks without copying dense mesh buffers.
    if (start + 8192 < faces) await new Promise(resolve => setTimeout(resolve, 0));
  }
  sampler.distribution = distribution;
  return sampler;
}

async function prepareModel(root, mobile, signal) {
  root.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(root);
  const size = bounds.getSize(new THREE.Vector3());
  if (bounds.isEmpty() || !Number.isFinite(size.length()) || size.length() === 0) throw new Error('模型没有可展示的几何体');
  const scale = Math.min(1.5 / Math.max(size.y, .001), 1.6 / Math.max(size.x, size.z, .001));
  const center = bounds.getCenter(new THREE.Vector3());
  const content = new THREE.Group();
  content.add(root);
  root.position.sub(center);
  content.scale.setScalar(scale);
  content.position.y = .13 + size.y * scale / 2;
  content.updateMatrixWorld(true);
  const uniforms = { opacity: { value: 0 }, time: { value: 0 }, dispersion: { value: 1 } };
  const meshes = [];
  const surfaceMaterials = new Set();
  root.traverse(mesh => {
    if (!mesh.isMesh || !mesh.geometry.attributes.position) return;
    meshes.push(mesh);
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    for (const material of materials) {
      surfaceMaterials.add(material);
      material.transparent = true;
      material.depthWrite = false;
      material.onBeforeCompile = shader => {
        shader.uniforms.holoOpacity = uniforms.opacity;
        shader.uniforms.holoTime = uniforms.time;
        shader.vertexShader = 'varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;\n' + shader.vertexShader;
        shader.vertexShader = shader.vertexShader.replace('#include <project_vertex>', '#include <project_vertex>\n vHoloNormal = normalize(normalMatrix * normal); vHoloView = -mvPosition.xyz; vHoloHeight = (modelMatrix * vec4(transformed, 1.)).y;');
        shader.fragmentShader = 'uniform float holoOpacity; uniform float holoTime; varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;\n' + shader.fragmentShader;
        shader.fragmentShader = shader.fragmentShader.replace('#include <opaque_fragment>', `
          float holoEdge = pow(1.0 - abs(dot(normalize(vHoloNormal), normalize(vHoloView))), 2.5);
          float holoLine = .5 + .5 * sin(gl_FragCoord.y * .65 + holoTime * .6);
          float scanline = .5 + .5 * sin(vHoloHeight * 110.);
          float bandCenter = mod(holoTime * .13, 3.2) - .35;
          float scanBand = exp(-pow((vHoloHeight - bandCenter) / .16, 2.));
          float luminance = dot(outgoingLight, vec3(.2126, .7152, .0722));
          outgoingLight = mix(outgoingLight, vec3(.30, .88, .72) * (.25 + luminance * .9), .28);
          outgoingLight *= .94 + .06 * scanline;
          outgoingLight += vec3(.15, .76, .59) * (holoEdge * (.35 + .06 * holoLine) + scanBand * .13);
          diffuseColor.a *= holoOpacity * .88;
          if (diffuseColor.a < .004) discard;
          #include <opaque_fragment>`);
      };
      material.customProgramCacheKey = () => 'museum-jade-edge-v2';
      material.needsUpdate = true;
    }
  });
  // Bake world transforms into sampling geometry so separate mesh parts align exactly.
  const samples = [];
  const worldToContent = content.matrixWorld.clone().invert();
  const point = new THREE.Vector3();
  const count = mobile ? 550 : 1200;
  const totalVertices = meshes.reduce((sum, mesh) => sum + mesh.geometry.attributes.position.count, 0);
  for (const mesh of meshes) {
    const transform = new THREE.Matrix4().multiplyMatrices(worldToContent, mesh.matrixWorld);
    {
      // Sample the shared geometry directly, then transform only the bounded points.
      const sampler = await buildSurfaceSampler(mesh, signal);
      const meshCount = Math.max(1, Math.round(count * mesh.geometry.attributes.position.count / totalVertices));
      for (let i = 0; i < meshCount; i++) { sampler.sample(point); point.applyMatrix4(transform); samples.push(point.x, point.y, point.z); }
    }
  }
  const offsets = [];
  // A bounded, deterministic scatter keeps every fragment close to the artifact.
  for (let i = 0; i < samples.length / 3; i++) {
    const angle = i * 2.39996323;
    const radius = (.08 + .12 * ((i * .61803399) % 1)) / scale;
    offsets.push(Math.cos(angle) * radius, Math.sin(i * 1.37) * radius * .6, Math.sin(angle) * radius);
  }
  const particleGeometry = new THREE.BufferGeometry();
  particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(samples, 3));
  particleGeometry.setAttribute('scatterOffset', new THREE.Float32BufferAttribute(offsets, 3));
  const particleMaterial = new THREE.ShaderMaterial({
    uniforms: { opacity: uniforms.opacity, time: uniforms.time, dispersion: uniforms.dispersion },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: `uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}`,
    fragmentShader: `uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}`,
  });
  content.add(new THREE.Points(particleGeometry, particleMaterial));
  return { object: content, uniforms, surfaceMaterials };
}

export function createHologramStage({ scene, position = [0, .92, 0], mobile = false, loadModel = null, prepareForRender = null }) {
  const stage = new THREE.Group();
  stage.position.fromArray(position);
  scene.add(stage);
  for (const [radius, color, opacity] of [[.93, 0xbda66c, .6], [.83, 0x61d8b0, .44], [.67, 0x61d8b0, .18]]) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, .008, 6, 96), new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false }));
    ring.rotation.x = Math.PI / 2;
    ring.position.y = .025;
    stage.add(ring);
  }
  const glowMaterial = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}',
  });
  const glow = new THREE.Mesh(new THREE.PlaneGeometry(2.1, 2.1), glowMaterial);
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = .018;
  stage.add(glow);
  const coneMaterial = new THREE.ShaderMaterial({
    side: THREE.DoubleSide, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    vertexShader: 'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader: 'varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}',
  });
  const cone = new THREE.Mesh(new THREE.CylinderGeometry(.76, .91, 1.85, 48, 1, true), coneMaterial);
  cone.position.y = .96;
  stage.add(cone);
  let models = [], index = 0, current = null, next = null, pending = null;
  let elapsed = 0, clock = 0, shaderTime = 0, retryAt = 0, generation = 0, disposed = false, wasPaused = false, error = null;
  const loader = new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
  function release(item) { if (item) disposeObject(item.object, item.sharedResources); }
  function preload(target) {
    if (disposed || pending || next || !models.length || clock < retryAt) return;
    const record = models[target];
    const token = generation;
    const controller = new AbortController();
    pending = { controller, target };
    const url = new URL(record.modelUrl, globalThis.location?.href || 'http://localhost/');
    (async () => {
      let parsed, prepared;
      try {
        if (loadModel) {
          parsed = await loadModel(record, controller.signal);
        } else {
          const response = await fetch(url, { signal: controller.signal });
          if (!response.ok) throw new Error(`模型加载失败 (${response.status})`);
          parsed = await loader.parseAsync(await response.arrayBuffer(), new URL('.', url).href);
        }
        if (disposed || token !== generation) { disposeObject(parsed.scene, parsed.sharedResources); return; }
        prepared = await prepareModel(parsed.scene, mobile, controller.signal);
        if (disposed || token !== generation) { disposeObject(prepared.object, parsed.sharedResources); return; }
        // Keep the current program alive while its successor compiles. Otherwise
        // disposing the visible model can evict the shader just before reuse.
        prepared.object.rotation.y = getHologramFrontRotation(record);
        if (prepareForRender) await prepareForRender(prepared.object, controller.signal);
        controller.signal.throwIfAborted();
        if (disposed || token !== generation) { disposeObject(prepared.object, parsed.sharedResources); return; }
        next = { ...prepared, record, index: target, sharedResources: Boolean(parsed.sharedResources) };
        error = null;
      } catch (failure) {
        if (prepared) disposeObject(prepared.object, parsed.sharedResources);
        else if (parsed?.scene) disposeObject(parsed.scene, parsed.sharedResources);
        if (!disposed && token === generation && failure.name !== 'AbortError') {
          error = String(failure.message || failure);
          index = target;
          retryAt = clock + HOLOGRAM_INTERVAL;
        }
      } finally {
        if (token === generation) pending = null;
      }
    })();
  }
  function promote() {
    release(current);
    current = next;
    next = null;
    index = current.index;
    stage.add(current.object);
    elapsed = 0;
  }
  return {
    setModels(records) {
      generation++;
      pending?.controller.abort();
      pending = null;
      release(current); release(next);
      current = null; next = null;
      models = (records || []).filter(record => record?.id && record?.modelUrl).map(record => ({ ...record }));
      index = 0; elapsed = 0; retryAt = 0; error = null;
      if (!disposed) preload(0);
    },
    update(dt, { paused = false, reduced = false } = {}) {
      if (disposed) return;
      const delta = Number.isFinite(dt) ? Math.max(0, dt) : 0;
      if (wasPaused && !paused) elapsed = 0;
      wasPaused = paused;
      if (!current && next) promote();
      if (!paused) { clock += delta; elapsed += delta; }
      if (!reduced) shaderTime += Math.min(delta, .1);
      if (current) {
        const timing = hologramTiming(elapsed);
        // Retain a visible artifact if its successor is slow or failed.
        if (paused) {
          const blend = 1 - Math.exp(-delta * 12);
          current.uniforms.opacity.value = THREE.MathUtils.lerp(current.uniforms.opacity.value, 1, blend);
          current.uniforms.dispersion.value = THREE.MathUtils.lerp(current.uniforms.dispersion.value, 0, blend);
          for (const material of current.surfaceMaterials) material.depthWrite = false;
        } else {
          current.uniforms.opacity.value = models.length < 2 || !next ? 1 : timing.opacity;
          current.uniforms.dispersion.value = reduced ? 0 : 1 - current.uniforms.opacity.value;
          for (const material of current.surfaceMaterials) material.depthWrite = current.uniforms.opacity.value > .98;
        }
        current.uniforms.time.value = shaderTime;
        // A small bounded sway keeps the calibrated front facing the entrance.
        // Freeze the exact pose while visitors inspect or choose an action.
        if (!paused) current.object.rotation.y = getHologramFrontRotation(current.record) + (reduced ? 0 : Math.sin(elapsed * .7) * .07);
        if (!paused && timing.due && next) promote();
      }
      if (!next && !pending && models.length && (!current || models.length > 1)) {
        preload(current || error ? (index + 1) % models.length : index);
      }
    },
    getCurrent() { return current ? { ...current.record } : null; },
    getState() { return { status: disposed ? 'disposed' : current ? 'ready' : pending ? 'loading' : error ? 'error' : 'empty', error, currentId: current?.record.id ?? null, nextId: next?.record.id ?? null, loading: Boolean(pending), rotationY: current?.object.rotation.y ?? null, frontRotationY: current ? getHologramFrontRotation(current.record) : null, count: models.length, paused: wasPaused, elapsed, index: current?.index ?? index, phase: !current ? 'waiting' : elapsed < HOLOGRAM_TRANSITION ? 'forming' : elapsed >= HOLOGRAM_INTERVAL - HOLOGRAM_TRANSITION ? 'dispersing' : 'holding' }; },
    dispose() {
      if (disposed) return;
      disposed = true; generation++;
      pending?.controller.abort(); pending = null;
      release(current); release(next); current = null; next = null;
      disposeObject(stage);
    },
  };
}


