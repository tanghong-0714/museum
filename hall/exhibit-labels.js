import * as THREE from 'three';
import { artifactStandaloneUrl, createLabelQr, exhibitLabelCopy, isLoopbackUrl, labelPlacement } from './exhibit-label-config.js';
import './exhibit-labels.css';
import { getCardTheme, getCardPortrait } from './exhibit-card-theme.js';
import { drawCardBackground } from './exhibit-card-background.js';

function qrCanvas(qr) {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = qr.size;
  canvas.getContext('2d').putImageData(new ImageData(qr.pixels, qr.size, qr.size), 0, 0);
  return canvas;
}

function wrapText(context, text, x, y, width, lineHeight) {
  let line = '';
  for (const character of text) {
    if (context.measureText(line + character).width > width) {
      context.fillText(line, x, y);
      line = '';
      y += lineHeight;
    }
    line += character;
  }
  context.fillText(line, x, y);
}

export function createExhibitLabels({ scene, camera, canvas, assignments, onView = () => {},
  isAvailable = () => true, onOpen = () => {}, onClose = () => {}, location = globalThis.location,
  maxDistance = 4.8 }) {
  const group = new THREE.Group();
  group.name = 'ExhibitLabels';
  scene.add(group);
  const geometry = new THREE.PlaneGeometry(1.24, .30);
  const projected = new THREE.Vector3();
  const direction = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const qrPoint = new THREE.Vector3();
  const controller = new AbortController();
  const dialog = document.createElement('dialog');
  dialog.className = 'exhibit-label-dialog';
  dialog.setAttribute('aria-label', '文物高清二维码');
  dialog.innerHTML = '<canvas class="exhibit-card-background" aria-hidden="true"></canvas><button class="exhibit-label-close" type="button" aria-label="关闭二维码卡片">×</button><div class="exhibit-card-content"><p class="exhibit-label-kicker"></p><h2></h2><p class="exhibit-card-motto"></p><div class="exhibit-card-portrait"><img alt=""><span class="exhibit-card-image-fallback" hidden>文物影像暂未载入</span></div><div class="exhibit-card-rule"><span>一器 · 一世界</span><span class="exhibit-card-theme-name"></span></div><div class="exhibit-label-qr"></div><p class="exhibit-label-scan">高清二维码 · 扫码查看文物</p><p class="exhibit-label-network"></p><button class="exhibit-label-view" type="button">走进文物的世界 ↗</button></div>';
  document.body.append(dialog);
  const portrait = dialog.querySelector('.exhibit-card-portrait img');
  portrait.addEventListener('error', () => { portrait.hidden = true; dialog.querySelector('.exhibit-card-image-fallback').hidden = false; }, { signal: controller.signal });
  const background = dialog.querySelector('.exhibit-card-background');
  background.width = 540; background.height = 720;
  let active = null;
  let disposed = false;
  const records = assignments.map((assignment, index) => {
    const url = artifactStandaloneUrl(assignment.artifactId, location);
    const qr = qrCanvas(createLabelQr(url));
    const sheet = document.createElement('canvas');
    sheet.width = 1024;
    sheet.height = 248;
    const context = sheet.getContext('2d');
    context.fillStyle = '#f5f0e4';
    context.fillRect(0, 0, 1024, 248);
    context.strokeStyle = '#ad894c';
    context.lineWidth = 3;
    context.strokeRect(14, 14, 996, 220);
    context.fillStyle = '#826638';
    context.font = '20px sans-serif';
    context.fillText(`${String(index + 1).padStart(2, '0')}  /  重器新生 · 馆藏`, 36, 44);
    context.fillStyle = '#242723';
    context.font = 'bold 31px "Microsoft YaHei", sans-serif';
    wrapText(context, assignment.name, 36, 94, 700, 40);
    context.font = '22px "Microsoft YaHei", sans-serif';
    wrapText(context, exhibitLabelCopy[assignment.artifactId] ?? '', 36, 149, 675, 29);
    context.imageSmoothingEnabled = false;
    context.drawImage(qr, 797, 30, 178, 178);
    context.fillStyle = '#826638';
    context.font = '16px "Microsoft YaHei", sans-serif';
    context.textAlign = 'center';
    context.fillText('点击查看高清二维码', 886, 231);
    const texture = new THREE.CanvasTexture(sheet);
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial({ map: texture, toneMapped: false });
    const mesh = new THREE.Mesh(geometry, material);
    const placement = labelPlacement(assignment);
    mesh.position.fromArray(placement.position);
    mesh.rotation.order = 'YXZ';
    mesh.rotation.set(placement.rotationX, placement.rotationY, 0);
    mesh.userData.cabinetId = assignment.cabinetId;
    mesh.userData.artifactId = assignment.artifactId;
    mesh.name = `ExhibitLabel_${assignment.artifactId}`;
    group.add(mesh);
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'exhibit-qr-hit';
    button.setAttribute('aria-label', `查看${assignment.name}高清二维码`);
    button.setAttribute('aria-haspopup', 'dialog');
    button.hidden = true;
    document.body.append(button);
    const record = { assignment, url, qr, mesh, material, texture, button, index };
    button.addEventListener('click', event => {
      event.stopPropagation();
      if (isAvailable()) open(record);
    }, { signal: controller.signal });
    return record;
  });

  function open(record) {
    active = record;
    const theme = getCardTheme(record.assignment.artifactId);
    dialog.dataset.artifactId = record.assignment.artifactId;
    for (const key of ['paper', 'ink', 'accent', 'muted']) dialog.style.setProperty(`--card-${key}`, theme[key]);
    const ctx = background.getContext('2d');
    ctx.clearRect(0, 0, background.width, background.height);
    ctx.save();ctx.scale(.5,.5);drawCardBackground(ctx,theme);ctx.restore();
    portrait.hidden = false;
    dialog.querySelector('.exhibit-card-image-fallback').hidden = true;
    portrait.alt = record.assignment.name;
    portrait.src = getCardPortrait(record.assignment.artifactId);
    dialog.querySelector('.exhibit-label-kicker').textContent = `${String(record.index + 1).padStart(2, '0')} / 重器新生 · 文物观览卡`;
    dialog.querySelector('h2').textContent = record.assignment.name;
    dialog.querySelector('.exhibit-card-motto').textContent = theme.motto;
    dialog.querySelector('.exhibit-card-theme-name').textContent = theme.name;
    dialog.querySelector('.exhibit-label-qr').replaceChildren(record.qr);
    dialog.querySelector('.exhibit-label-network').textContent = isLoopbackUrl(record.url)
      ? '当前是本机地址，手机无法直接扫码。请用电脑的局域网地址进入展厅，并确保手机与电脑连接同一网络。'
      : '手机与电脑连接同一网络即可扫码浏览。';
    records.forEach(item => { item.button.hidden = true; });
    onOpen(record.assignment);
    dialog.showModal();
  }
  function finishClose() {
    if (!active || dialog.open) return;
    active = null;
    onClose();
  }
  function close() {
    if (dialog.open) dialog.close();
    finishClose();
  }
  dialog.querySelector('.exhibit-label-close').addEventListener('click', close, { signal: controller.signal });
  dialog.addEventListener('close', finishClose, { signal: controller.signal });
  dialog.querySelector('.exhibit-label-view').addEventListener('click', () => {
    const assignment = active?.assignment;
    close();
    if (assignment) onView(assignment.artifactId);
  }, { signal: controller.signal });

  return {
    group, records,
    openLabel(artifactId) {
      if (disposed || dialog.open || !isAvailable()) return false;
      const record = records.find(item => item.assignment.artifactId === artifactId);
      if (!record) return false;
      open(record);
      return true;
    },
    get isOpen() { return dialog.open; },
    close,
    update() {
      if (disposed) return;
      const rect = canvas.getBoundingClientRect();
      let readable = false;
      for (const record of records) {
        const { mesh, button } = record;
        mesh.getWorldPosition(projected);
        direction.subVectors(camera.position, projected);
        forward.set(0, 0, 1).applyQuaternion(mesh.quaternion);
        const visible = !dialog.open && isAvailable() && direction.length() <= maxDistance && direction.dot(forward) > 0;
        // Transparent, keyboard-accessible hit area sits on the printed QR;
        // no floating button is drawn over the center of the plaque.
        qrPoint.set((886 / 1024 - .5) * 1.24, (.5 - 128 / 248) * .30, 0);
        mesh.localToWorld(qrPoint);
        projected.copy(qrPoint).project(camera);
        button.hidden = !visible || projected.z < -1 || projected.z > 1 || Math.abs(projected.x) > .84 || Math.abs(projected.y) > .85;
        if (!button.hidden) {
          readable = true;
          const distance = camera.position.distanceTo(qrPoint);
          const pixelsPerMeter = rect.height / (2 * Math.tan(camera.fov * Math.PI / 360) * distance);
          const size = Math.max(36, Math.min(150, .23 * pixelsPerMeter));
          button.style.width = `${size}px`;
          button.style.height = `${Math.max(36,size * .85)}px`;
          button.style.left = `${rect.left + (projected.x + 1) * rect.width / 2}px`;
          button.style.top = `${rect.top + (1 - projected.y) * rect.height / 2}px`;
        }
      }
      document.body.classList.toggle('has-readable-label',readable);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      close();
      controller.abort();
      dialog.remove();
      document.body.classList.remove('has-readable-label');
      for (const record of records) {
        record.button.remove();
        record.texture.dispose();
        record.material.dispose();
      }
      geometry.dispose();
      group.removeFromParent();
    },
  };
}


