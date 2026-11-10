import * as THREE from 'three';
import './artifact-interaction.css';
import { createArtifactJourney } from './artifact-journey.js';

const CHANNEL = 'museum-artifact-v1';

export function createArtifactInteraction({
  canvas, camera, scene, assignments, colliders = [], getMode, isEntered,
  isBlocked = () => false, getPriorityTargets = () => [],
  onOpen = () => {}, onClose = () => {}, captureFrame,
  detailUrl = new URL('/', `${location.protocol}//${location.hostname}:5189`).href,
}) {
  const hint = document.createElement('button');
  hint.id = 'artifactHint';
  hint.className = 'artifact-entry';
  hint.hidden = true;
  const dialog = document.createElement('dialog');
  dialog.id = 'artifactDetail';
  dialog.className = 'artifact-detail';
  dialog.setAttribute('aria-label', '文物详情');
  dialog.innerHTML = `<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div>`;
  document.body.append(hint, dialog);
  const host = dialog.querySelector('.artifact-detail-host');
  const isReduced = () => document.querySelector('#motion')?.getAttribute('aria-pressed') === 'true' || matchMedia('(prefers-reduced-motion: reduce)').matches;
  const journey = createArtifactJourney({ captureFrame, isReduced });
  dialog.append(journey.element);
  const closeButton = dialog.querySelector('#closeArtifactDetail');
  const retryButton = journey.retryButton;
  const standalone = journey.standalone;
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const projected = new THREE.Vector3();
  const point = new THREE.Vector3();
  const sightRay = new THREE.Ray();
  const intersection = new THREE.Vector3();
  const events = new AbortController();
  const objects = new Map();
  const obstacles = colliders.map(collider => ({
    id: collider.id,
    box: new THREE.Box3().setFromCenterAndSize(new THREE.Vector3(...collider.center), new THREE.Vector3(...collider.size)),
  }));
  let active = null;
  let current = null;
  let frame = null;
  let timer = null;
  let ready = false;
  let entryFocus = { x: .5, y: .5 };
  let press = null, dragged = false;

  function record(assignment) {
    let cached = objects.get(assignment.artifactId);
    if (cached) return cached;
    const object = scene.getObjectByName(`HallArtifact_${assignment.artifactId}`);
    if (!object) return null;
    object.updateWorldMatrix(true, true);
    const bounds = new THREE.Box3().setFromObject(object);
    cached = { assignment, object, bounds, center: bounds.getCenter(new THREE.Vector3()) };
    objects.set(assignment.artifactId, cached);
    return cached;
  }

  function unobstructed(target, hitPoint = target.center) {
    const distance = camera.position.distanceTo(hitPoint);
    sightRay.set(camera.position, point.subVectors(hitPoint, camera.position).normalize());
    return !obstacles.some(({ id, box }) => {
      // A cabinet's glass is transparent. Other cabinets and all walls still occlude.
      if ((id.includes('exhibit') || id.includes('Far gallery')) && box.containsPoint(target.center)) return false;
      const hit = sightRay.intersectBox(box, intersection);
      return hit && camera.position.distanceTo(intersection) < distance - .05;
    });
  }

  function available() {
    return !dialog.open && isEntered() && !isBlocked() && ['walk', 'paused'].includes(getMode());
  }

  function visible(target, guided = false) {
    if (camera.position.distanceTo(target.center) > 4.8) return false;
    projected.copy(target.center).project(camera);
    if (projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > .92 || Math.abs(projected.y) > .82) return false;
    const pixels = Math.hypot(projected.x * canvas.clientWidth / 2, projected.y * canvas.clientHeight / 2);
    return (guided || pixels < 175) && unobstructed(target);
  }

  function clearHint() {
    active = null;
    hint.hidden = true;
    canvas.dataset.artifactAim = '';
  }

  function update({ selectedExhibit = null, observationPhase = canvas.dataset.observationPhase } = {}) {
    if (!available()) { clearHint(); return null; }
    const selectedId = selectedExhibit?.id ?? selectedExhibit;
    const guided = observationPhase === 'complete' && getMode() === 'paused';
    let candidate = null;
    if (guided) {
      const assignment = assignments.find(item => String(item.cabinetId) === String(selectedId));
      const target = assignment && record(assignment);
      if (target && visible(target, true)) candidate = target;
    }
    if (!candidate) {
      let nearest = Infinity;
      for (const assignment of assignments) {
        const target = record(assignment);
        if (!target || !visible(target)) continue;
        const distance = camera.position.distanceToSquared(target.center);
        if (distance < nearest) { nearest = distance; candidate = target; }
      }
    }
    active = candidate || null;
    hint.hidden = !active;
    canvas.dataset.artifactAim = active?.assignment.artifactId || '';
    if (active) {
      const { name, nickname } = active.assignment;
      hint.textContent = `${name}${nickname ? ` · ${nickname}` : ''}　查看详情 ↗`;
      hint.setAttribute('aria-label', `查看${name}详情`);
      hint.dataset.keyboard = matchMedia('(pointer: coarse)').matches ? '' : 'E';
    }
    return active?.assignment.artifactId || null;
  }

  function fail(message) {
    if (!dialog.open || !current) return;
    clearTimeout(timer);
    ready = false;
    dialog.dataset.phase = 'error';
    closeButton.hidden = false;
    journey.fail(message);
  }

  function load() {
    if (!dialog.open || !current) return;
    clearTimeout(timer);
    ready = false;
    closeButton.hidden = false;
    dialog.dataset.phase = 'approach';
    host.inert = true;
    host.setAttribute('aria-hidden', 'true');
    journey.start(current, entryFocus);
    const url = new URL(detailUrl, location.href);
    url.searchParams.set('artifact', current.artifactId);
    url.searchParams.set('museumEmbed', '1');
    url.searchParams.set('parentOrigin', location.origin);
    url.searchParams.set('returnUrl', location.href);
    const standaloneUrl = new URL(url);
    standaloneUrl.searchParams.delete('museumEmbed');
    standaloneUrl.searchParams.delete('parentOrigin');
    standalone.href = standaloneUrl.href;
    host.replaceChildren();
    frame = document.createElement('iframe');
    frame.title = `${current.name}互动详情`;
    frame.allow = 'autoplay';
    const loadingFrame = frame;
    frame.addEventListener('error', () => {
      if (frame === loadingFrame) fail('详情服务暂时无法连接。可重新载入，或返回展厅继续参观。');
    }, {once:true});
    frame.src = url.href;
    host.append(frame);
    timer = setTimeout(() => fail('详情尚未就绪。请确认文物服务已启动，再重新载入。'), 25000);
  }

  function open(artifactId = active?.assignment.artifactId, { focusPoint } = {}) {
    const assignment = assignments.find(item => item.artifactId === artifactId);
    if (!assignment || dialog.open) return false;
    current = assignment;
    const target = focusPoint || record(assignment)?.center;
    if (target) {
      projected.copy(target).project(camera);
      entryFocus = { x: (projected.x + 1) / 2, y: (1 - projected.y) / 2 };
    } else entryFocus = { x: .5, y: .5 };
    clearHint();
    onOpen(assignment);
    dialog.setAttribute('aria-label', `${assignment.name}详情`);
    dialog.showModal();
    document.body.classList.add('artifact-detail-open');
    load();
    closeButton.focus({ preventScroll: true });
    return true;
  }

  function close() {
    if (!dialog.open) return false;
    clearTimeout(timer);
    journey.cancel();
    host.replaceChildren();
    frame = null;
    ready = false;
    dialog.close();
    document.body.classList.remove('artifact-detail-open');
    onClose(current);
    current = null;
    canvas.focus({ preventScroll: true });
    return true;
  }

  hint.addEventListener('click', () => { if (active && available() && visible(active, true)) open(); });
  closeButton.addEventListener('click', close);
  retryButton.addEventListener('click', load);
  dialog.addEventListener('cancel', event => { event.preventDefault(); close(); });
  canvas.addEventListener('pointerdown', event => {
    if (press) return;
    press = {id:event.pointerId,x:event.clientX,y:event.clientY}; dragged = false;
  }, {signal:events.signal});
  canvas.addEventListener('pointermove', event => {
    if (press?.id === event.pointerId && Math.hypot(event.clientX-press.x,event.clientY-press.y)>7) dragged = true;
  }, {signal:events.signal});
  canvas.addEventListener('pointerup', event => { if (press?.id === event.pointerId) press = null; }, {signal:events.signal});
  canvas.addEventListener('pointercancel', event => { if (press?.id === event.pointerId) { press = null; dragged = true; } }, {signal:events.signal});
  canvas.addEventListener('lostpointercapture', event => { if (press?.id === event.pointerId) { press = null; dragged = true; } }, {signal:events.signal});
  canvas.addEventListener('click', event => {
    if (dragged) return;
    if (!available()) return;
    if (document.pointerLockElement === canvas) pointer.set(0, 0);
    else {
      const rect = canvas.getBoundingClientRect();
      pointer.set((event.clientX - rect.left) / rect.width * 2 - 1, -(event.clientY - rect.top) / rect.height * 2 + 1);
    }
    raycaster.setFromCamera(pointer, camera);
    if (raycaster.intersectObjects(getPriorityTargets(), false).some(hit => hit.distance < 12)) return;
    const targets = assignments.map(record).filter(Boolean);
    const hits = raycaster.intersectObjects(targets.map(target => target.object), true);
    const hit = hits[0];
    if (!hit || hit.distance > 4.8) return;
    const target = targets.find(item => item.assignment.artifactId === hit.object.userData.artifactId);
    if (target && unobstructed(target, hit.point) && open(target.assignment.artifactId)) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }, {capture:true,signal:events.signal});
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape' && dialog.open) {
      event.preventDefault(); event.stopImmediatePropagation(); close(); return;
    }
    if (event.code !== 'KeyE' || event.repeat || !active || !available()) return;
    if (/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)) return;
    if (visible(active, true) && open()) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, {capture:true,signal:events.signal});
  window.addEventListener('message', event => {
    const origin = new URL(detailUrl, location.href).origin;
    if (!dialog.open || event.origin !== origin || event.source !== frame?.contentWindow || event.data?.channel !== CHANNEL) return;
    const displayed = assignments.find(item => item.artifactId === event.data.artifactId);
    if (displayed) {
      current = displayed;
      dialog.setAttribute('aria-label', `${displayed.name}详情`);
    }
    if (event.data.type === 'loading') {
      ready = false;
      closeButton.hidden = false;
      // A directory change stays inside the detail page. Its own loader owns
      // this transition; never replay a captured view of the previous cabinet.
      if (['ready', 'switching'].includes(dialog.dataset.phase)) {
        dialog.dataset.phase = 'switching';
        journey.cancel();
        host.inert = false;
        host.removeAttribute('aria-hidden');
        closeButton.hidden = true;
      }
      clearTimeout(timer);
      timer = setTimeout(() => fail('详情尚未就绪。请确认文物服务已启动，再重新载入。'), 25000);
    }
    if (event.data.type === 'ready') {
      if (ready) return;
      ready = true;
      clearTimeout(timer);
      const readyFrame = frame;
      if (dialog.dataset.phase === 'switching') {
        dialog.dataset.phase = 'ready';
        host.inert = false;
        host.removeAttribute('aria-hidden');
        closeButton.hidden = true;
        readyFrame.title = `${current.name}互动详情`;
        readyFrame.contentWindow.postMessage({ channel: CHANNEL, type: 'enter', reduced: isReduced() }, origin);
        return;
      }
      journey.reveal(() => {
        if (frame !== readyFrame || !dialog.open) return;
        dialog.dataset.phase = 'reveal';
        readyFrame.contentWindow.postMessage({ channel: CHANNEL, type: 'enter', reduced: isReduced() }, origin);
      }, () => {
        if (frame !== readyFrame || !dialog.open) return;
        dialog.dataset.phase = 'ready';
        host.inert = false;
        host.removeAttribute('aria-hidden');
        closeButton.hidden = true;
        readyFrame.focus();
      });
    }
    if (event.data.type === 'error') fail('文物模型暂时无法载入。可重新载入，或返回展厅继续参观。');
    if (event.data.type === 'close') close();
  }, {signal:events.signal});
  return { update, open, close, dispose() { close(); clearTimeout(timer); events.abort(); objects.clear(); hint.remove(); dialog.remove(); }, isOpen: () => dialog.open, get state() { return { open: dialog.open, ready, artifactId: current?.artifactId || null, aimedArtifactId: active?.assignment.artifactId || null }; } };
}
