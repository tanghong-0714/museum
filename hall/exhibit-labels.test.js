import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import jsQR from 'jsqr';
import { Euler, Vector3 } from 'three';
import { artifactAssignments } from './artifact-layout.js';
import { artifactStandaloneUrl, createLabelQr, exhibitLabelCopy, isLoopbackUrl, labelPlacement, isLabelQrHit } from './exhibit-label-config.js';
import {getCardTheme,getCardPortrait} from './exhibit-card-theme.js';

const manifest = JSON.parse(readFileSync(new URL('./public/scene_manifest.json', import.meta.url)));
for (const assignment of artifactAssignments) {
  assert.ok(exhibitLabelCopy[assignment.artifactId], `${assignment.artifactId} has sourced observation copy`);
  assert.ok(getCardTheme(assignment.artifactId).motto);
  assert.ok(readFileSync(new URL(`./public${getCardPortrait(assignment.artifactId)}`,import.meta.url)).length>1000);
  for (const origin of ['http://localhost:5188/?museumEmbed=1#hall', 'http://192.168.0.103:5188/?parent=ignored', 'http://museum.local:5188/']) {
    const url = artifactStandaloneUrl(assignment.artifactId, { href: origin });
    const parsed = new URL(url);
    assert.equal(parsed.hostname, new URL(origin).hostname);
    assert.equal(parsed.port, '5189');
    assert.equal(parsed.pathname, '/');
    assert.equal(parsed.searchParams.size, 1);
    assert.equal(parsed.searchParams.get('artifact'), assignment.artifactId);
    assert.equal(parsed.hash, '');
    const qr = createLabelQr(url);
    const decoded = jsQR(qr.pixels, qr.size, qr.size);
    assert.equal(decoded?.data, url, `Actual raster decode ${assignment.artifactId}`);
    const quietPixels = qr.quiet * qr.scale;
    for (let y = 0; y < qr.size; y++) {
      for (let x = 0; x < qr.size; x++) {
        if (x < quietPixels || y < quietPixels || x >= qr.size - quietPixels || y >= qr.size - quietPixels) {
          assert.equal(qr.pixels[(y * qr.size + x) * 4], 255, 'Four modules of white quiet zone');
        }
      }
    }
  }
  const placement = labelPlacement(assignment);
  const normal = new Vector3(0, 0, 1).applyEuler(new Euler(placement.rotationX, placement.rotationY, 0, 'YXZ'));
  assert.ok(normal.y > .9, 'Board slopes upward');
  if (assignment.cabinetId === 'story') assert.ok(normal.z > 0);
  else assert.ok(normal.x * -Math.sign(assignment.position[0]) > 0, 'Both side rows face the aisle');
  const collider = manifest.colliders.find(item => /exhibit|Far gallery/i.test(item.id) && item.center[0] === assignment.position[0] && item.center[2] === assignment.position[2]);
  assert.ok(collider);
  // Full plate width plus depth offset remains inside the original cabinet footprint.
  const halfWidth = .62;
  const radialExtent = Math.sin(Math.abs(placement.rotationX)) * .15;
  const extentX = Math.abs(Math.cos(placement.rotationY)) * halfWidth + Math.abs(Math.sin(placement.rotationY)) * radialExtent;
  const extentZ = Math.abs(Math.sin(placement.rotationY)) * halfWidth + Math.abs(Math.cos(placement.rotationY)) * radialExtent;
  assert.ok(placement.position[1] - Math.cos(placement.rotationX) * .15 > .612);
  assert.ok(.935 - radialExtent > .735);
  assert.ok(Math.abs(placement.position[0] - collider.center[0]) + extentX <= collider.size[0] / 2);
  assert.ok(Math.abs(placement.position[2] - collider.center[2]) + extentZ <= collider.size[2] / 2);
}
assert.equal(isLoopbackUrl('http://localhost:5189/'), true);
assert.equal(isLoopbackUrl('http://127.0.0.1:5189/'), true);
assert.equal(isLoopbackUrl('http://[::1]:5189/'), true);
assert.equal(isLoopbackUrl('http://museum.local:5189/'), false);
assert.equal(isLabelQrHit({x:886/1024,y:1-128/248}),true,'QR center opens the card');
assert.equal(isLabelQrHit({x:886/1024,y:1-231/248}),true,'caption opens the card');
assert.equal(isLabelQrHit({x:.5,y:.5}),false,'plaque center is no longer an action');
assert.equal(isLabelQrHit({x:.1,y:.8}),false,'artifact title is not a QR hotspot');
assert.equal(isLabelQrHit(null),false);
console.log('exhibit labels: seven placements, 21 QR raster decodes, URL identity and four-module quiet zones passed');
