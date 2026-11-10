import * as THREE from 'three';
import { buildWorkbenchUrl } from './model-library.js';
import { exhibitLabelCopy } from './exhibit-label-config.js';
import { createWorkbenchTarget, resolveHologramTarget, selectHologramEntry } from './hologram-targets.js';
import { createRestorationBench } from './restoration-bench.js';
import './hologram-interaction.css';

export function createHologramInteraction({
  canvas, camera, scene, stage, position = [0, .92, 0], colliders = [],
  isAvailable = () => true, onOpen = () => {}, onView = () => false,
}) {
  const abort = new AbortController();
  const listen = (target, type, handler, options = {}) => target.addEventListener(type, handler, { ...options, signal: abort.signal });
  const card = document.createElement('section');
  card.className = 'hologram-entry'; card.hidden = true;
  card.setAttribute('aria-label', '全息文物简介');
  card.innerHTML = '<small>全息馆藏 <span class="hologram-cycle"></span></small><strong></strong><p></p><button type="button" aria-label="进入当前文物的世界">走进文物的世界 <span>↗</span></button><span class="hologram-key">点击投影 / 按 E 进入</span>';
  const workbench = document.createElement('a');
  workbench.className = 'hologram-workbench'; workbench.hidden = true;
  workbench.href = buildWorkbenchUrl(); workbench.target = '_blank'; workbench.rel = 'noopener';
  workbench.setAttribute('aria-label', '打开文物修复工作台，新标签页打开');
  workbench.innerHTML = '<span class="hologram-workbench-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M10 29c5 2 10 2 14 0M10 31v-9m16 8v-8M14 21l11-13 5 4-12 12-6 2zM23 10l5 4"/></svg></span><span class="hologram-workbench-copy"><small>修复工坊 · RESTORATION</small><strong>文物修复工作台</strong><span>上传照片 · 修复与建模</span></span><span class="hologram-workbench-action"><span aria-hidden="true">↗</span><small>点击开启</small></span>';
  document.body.append(card, workbench);
  const atelier = createRestorationBench(position);
  scene.add(atelier.group);
  const center = new THREE.Vector3(...position);
  const aimCenter = center.clone().add(new THREE.Vector3(0, .88, 0));
  const workbenchTarget = createWorkbenchTarget(position);
  const basePoint = workbenchTarget.anchor;
  const sphere = new THREE.Sphere(aimCenter, .85);
  const pointer = new THREE.Vector2(), reticle = new THREE.Vector2();
  const projected = new THREE.Vector3(), direction = new THREE.Vector3(), intersection = new THREE.Vector3();
  const raycaster = new THREE.Raycaster(), sightRay = new THREE.Ray();
  const obstacles = colliders.map(item => new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(...item.center), new THREE.Vector3(...item.size))).filter(box => !box.containsPoint(center));
  let engaged = false, nearby = false, hovering = false, workbenchHovered = false, workbenchAimed = false, disposed = false, selectedId = null;
  let entry = { active: null, lastHit: -Infinity };
  let pointerStart = null, dragDistance = 0;
  function visible(target) {
    projected.copy(target).project(camera);
    if (projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > .95 || Math.abs(projected.y) > .95) return false;
    const distance = camera.position.distanceTo(target);
    sightRay.set(camera.position, direction.subVectors(target, camera.position).normalize());
    return !obstacles.some(box => sightRay.intersectBox(box, intersection) && camera.position.distanceTo(intersection) < distance - .1);
  }
  function targetAt(point = pointer) {
    raycaster.setFromCamera(point, camera);
    return resolveHologramTarget(raycaster.ray, sphere, workbenchTarget.box);
  }
  function onWorkbenchSurface(point) {
    if (workbench.hidden) return false;
    const view = canvas.getBoundingClientRect(), box = workbench.getBoundingClientRect();
    const x = view.left + (point.x + 1) * view.width / 2;
    const y = view.top + (1 - point.y) * view.height / 2;
    return x >= box.left && x <= box.right && y >= box.top && y <= box.bottom;
  }
  function useReticle() { return document.pointerLockElement === canvas || canvas.dataset.mode === 'walk' || matchMedia('(pointer:coarse)').matches; }
  function update() {
    if (disposed) return;
    nearby = isAvailable() && Math.hypot(camera.position.x-center.x,camera.position.z-center.z) < 4.5 && (visible(aimCenter) || visible(basePoint));
    if (!nearby) { hovering = false; workbenchHovered = false; workbenchAimed = false; engaged = false; card.hidden = true; workbench.hidden = true; entry = {active:null,lastHit:-Infinity}; atelier.setActive(false); return; }
    const rect = canvas.getBoundingClientRect();
    projected.copy(basePoint).project(camera);
    const mobile = innerWidth < 700;
    workbench.style.top = `${mobile ? Math.min(innerHeight - 204, Math.max(innerHeight * .55, rect.top + (1-projected.y)*rect.height/2)) : Math.max(135, innerHeight * .30)}px`;
    const aimPoint = useReticle() ? reticle : pointer;
    const target = targetAt(aimPoint);
    workbenchAimed = target === 'workbench' || onWorkbenchSurface(aimPoint);
    const hovered = useReticle() ? null : (!workbench.hidden && workbenchHovered ? 'workbench' : !card.hidden && hovering ? 'artifact' : null);
    entry = selectHologramEntry({available:nearby,target:workbenchAimed ? 'workbench' : target,hovered,active:entry.active,lastHit:entry.lastHit,now:performance.now()});
    engaged = entry.active === 'artifact';
    card.hidden = !engaged;
    workbench.hidden = entry.active !== 'workbench';
    if (card.hidden) hovering = false;
    if (workbench.hidden) workbenchHovered = false;
    atelier.setActive(entry.active === 'workbench');
    workbench.dataset.aimed = String(workbenchAimed || workbenchHovered);
    workbench.querySelector('.hologram-workbench-action small').textContent = matchMedia('(pointer:coarse)').matches ? '轻触开启' : workbenchAimed ? '点击 / E' : '点击开启';
    if (!engaged) return;
    const current = stage.getCurrent(), state = stage.getState();
    card.dataset.modelId = current?.artifactId || '';
    card.querySelector('strong').textContent = current?.name || '等待一件器物到来';
    card.querySelector('.hologram-cycle').textContent = current ? `${String(state.index + 1).padStart(2,'0')} / ${String(state.count).padStart(2,'0')}` : '';
    card.querySelector('p').textContent = current ? exhibitLabelCopy[current.artifactId] || '循着轮廓，走进器物的故事。' : '光影正在准备，稍候即可走近。';
    card.querySelector('button').disabled = !current?.artifactId;
  }
  function view() {
    if (!engaged || !isAvailable()) return false;
    const current = stage.getCurrent();
    if (!current?.artifactId) return false;
    selectedId = current.artifactId;
    const opened = onView(selectedId, { focusPoint: aimCenter });
    if (opened) { card.hidden = true; workbench.hidden = true; hovering = false; }
    return opened;
  }
  listen(card, 'pointerenter', () => { hovering = true; });
  listen(card, 'pointerleave', () => { hovering = false; });
  listen(card.querySelector('button'), 'click', view);
  listen(workbench, 'pointerenter', () => { workbenchHovered = true; });
  listen(workbench, 'pointerleave', () => { workbenchHovered = false; });
  // Native anchors retain browser user activation. Canvas/key routes invoke the
  // same link synchronously; no await, delayed popup, or noopener-null fallback.
  listen(workbench, 'click', event => {
    if (!nearby || !isAvailable()) { event.preventDefault(); return; }
    onOpen();
  });
  function openWorkbench() {
    if (!nearby || !isAvailable()) return false;
    workbench.click();
    return true;
  }
  listen(canvas, 'pointermove', event => {
    const rect = canvas.getBoundingClientRect();
    pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
    if (pointerStart?.id === event.pointerId) dragDistance = Math.max(dragDistance,Math.hypot(event.clientX-pointerStart.x,event.clientY-pointerStart.y));
  });
  listen(canvas, 'pointerdown', event => { if (!pointerStart) { pointerStart = {id:event.pointerId,x:event.clientX,y:event.clientY}; dragDistance = 0; } });
  listen(canvas, 'pointerup', event => { if (pointerStart?.id === event.pointerId) pointerStart = null; });
  listen(canvas, 'pointercancel', () => { pointerStart = null; dragDistance = Infinity; });
  listen(canvas, 'click', event => {
    if (dragDistance > 7 || !nearby || !isAvailable()) return;
    const rect = canvas.getBoundingClientRect();
    const clickPoint = document.pointerLockElement === canvas ? reticle : new THREE.Vector2((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
    const target = targetAt(clickPoint);
    if (target === 'workbench' || onWorkbenchSurface(clickPoint)) {
      if (openWorkbench()) { event.preventDefault(); event.stopImmediatePropagation(); }
      return;
    }
    if (target !== 'artifact') return;
    engaged = true;
    if (view()) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, { capture:true });
  listen(window, 'keydown', event => {
    if (event.code !== 'KeyE' || event.repeat || /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) return;
    const point = useReticle() ? reticle : pointer;
    if (nearby && (workbenchHovered || targetAt(point) === 'workbench' || onWorkbenchSurface(point))) {
      if (openWorkbench()) { event.preventDefault(); event.stopImmediatePropagation(); }
      return;
    }
    if (view()) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, { capture:true });
  return {
    update, isOpen: () => false, isEngaged: () => entry.active !== null && nearby,
    getState: () => ({ engaged, nearby, workbenchAimed, activeTarget:entry.active, open:false, modelId:selectedId, viewing:false }),
    dispose() { disposed = true; abort.abort(); card.remove(); workbench.remove(); atelier.dispose(); },
  };
}
