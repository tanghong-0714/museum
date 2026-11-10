import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { artifactAssignments } from './artifact-layout.js';
import { normalizeModelLibrary, loadModelLibrary, buildWorkbenchUrl, buildArtifactDetailUrl } from './model-library.js';

for (const mobile of [false, true]) {
  const catalog = normalizeModelLibrary({ mobile });
  assert.equal(catalog.length, 7);
  assert.deepEqual(catalog.map(item => item.artifactId), artifactAssignments.map(item => item.artifactId));
  for (const [index, item] of catalog.entries()) {
    const assignment = artifactAssignments[index];
    assert.equal(item.id, assignment.artifactId);
    assert.equal(item.name, assignment.name);
    assert.equal(item.modelUrl, mobile ? assignment.modelMobile : assignment.modelDesktop);
    assert.equal(item.modelDesktop, assignment.modelDesktop);
    assert.equal(item.modelMobile, assignment.modelMobile);
    await access(new URL(`./public${item.modelUrl}`, import.meta.url));
  }
}
const originalFetch = globalThis.fetch;
try {
  globalThis.fetch = () => { throw new Error('Static catalog must never fetch repair history'); };
  assert.deepEqual(await loadModelLibrary({ mobile: false }), normalizeModelLibrary({ mobile: false }));
  const controller = new AbortController();
  controller.abort();
  await assert.rejects(loadModelLibrary({ signal: controller.signal }), { name: 'AbortError' });
} finally { globalThis.fetch = originalFetch; }
const first = await loadModelLibrary();
first[0].name = 'changed';
assert.equal((await loadModelLibrary())[0].name, artifactAssignments[0].name);
assert.equal(buildWorkbenchUrl({ hostname: 'localhost' }), 'http://localhost:4317/images');
assert.equal(buildWorkbenchUrl({ hostname: '192.168.1.10' }), 'http://192.168.1.10:4317/images');
console.log('Static seven-artifact catalog, local assets, abort and workbench URL checks passed.');

for (const host of ['127.0.0.1', '192.168.1.10']) {
  const location = new URL(`http://${host}:5173/hall?debug=1#entry`);
  const current = (await loadModelLibrary())[2];
  const selected = { ...current };
  current.artifactId = 'phoenix-ewer';
  const url = buildArtifactDetailUrl(selected.artifactId, location);
  assert.equal(url.host, `${host}:5189`);
  assert.equal(url.pathname, '/');
  assert.equal(url.searchParams.get('artifact'), 'cloud-mirror');
  assert.equal(url.searchParams.has('modelJob'), false);
  assert.equal(url.searchParams.get('parentOrigin'), location.origin);
  assert.equal(url.searchParams.get('returnUrl'), location.href);
  assert.equal(url.searchParams.get('museumEmbed'), '1');
  assert.equal(url.hash, '');
}
assert.throws(() => buildArtifactDetailUrl('repair-job', new URL('http://localhost:5173')), /未知馆藏/);
console.log('Captured artifact target and LAN detail URL checks passed.');
