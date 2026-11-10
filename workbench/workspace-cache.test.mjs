import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { createImageService } from './image-service.mjs';
import { cleanWorkspaceCache } from './workspace-cache.mjs';
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jN1cAAAAASUVORK5CYII=', 'base64');
test('temporary image cleanup expires payloads but protects completed model sources and legacy records', async () => {
  const dataDir = await mkdtemp(join(tmpdir(), 'cache-test-'));
  const service = createImageService({ apiKey: 'synthetic', dataDir, fetchImpl: async () => Response.json({ data: [{ b64_json: png.toString('base64') }] }) });
  const a = await service.upload({ name: 'original.png', workspace: 'quick', dataUrl: 'data:image/png;base64,' + png.toString('base64') });
  const make = async workspace => { const j = await service.create({ requestId: randomUUID(), mode: 'edit', referenceIds: [a.id], prompt: 'test', workspace }); await service.waitForIdle(); return service.get(j.id); };
  const kept = await make('quick'), discarded = await make('quick'), legacy = await make(undefined);
  // Age only temporary test records, then reload to exercise the persisted lifecycle.
  const statePath = join(dataDir, 'state.json'), state = JSON.parse(await readFile(statePath, 'utf8'));
  for (const j of state.jobs) j.updatedAt = '2020-01-01T00:00:00Z';
  for (const asset of state.assets) asset.createdAt = '2020-01-01T00:00:00Z';
  await writeFile(statePath, JSON.stringify(state));
  const reloaded = createImageService({ dataDir }); await reloaded.ready;
  await reloaded.prune(new Set([kept.id]), new Set(), Date.now() - 86400000);
  assert.equal((await reloaded.get(discarded.id)).state, 'expired');
  assert.equal((await reloaded.get(discarded.id)).prompt, '');
  await assert.rejects(reloaded.asset(discarded.result.id), { status: 404 });
  assert.deepEqual((await reloaded.asset(kept.result.id)).content, png);
  assert.deepEqual((await reloaded.asset(legacy.result.id)).content, png);
  assert.deepEqual((await reloaded.asset(a.id)).content, png);
});
test('cache retention follows model -> four-view -> original and ancestor image analyses', async () => {
  const old = '2020-01-01T00:00:00Z'; let imagePins, analysisPins, viewPins;
  const idle = async () => ({ activeJobId: null });
  await cleanWorkspaceCache({
    modelService: { status: idle, list: async () => [{ state: 'success', sourceJobId: 'child', multiviewJobId: 'views' }] },
    multiviewService: { status: idle, list: async () => [{ id: 'views', sourceJobId: 'child', state: 'success', updatedAt: old }], prune: async ids => { viewPins = ids; } },
    imageService: { status: idle, list: async () => [{ id: 'child', workspace: 'quick', state: 'success', updatedAt: old, analysisId: 'a2', references: [{ id: 'parent-result' }] }, { id: 'parent', workspace: 'quick', state: 'success', updatedAt: old, analysisId: 'a1', result: { id: 'parent-result' }, references: [{ id: 'original' }] }, { id: 'unused', workspace: 'quick', state: 'success', updatedAt: old, references: [] }], prune: async ids => { imagePins = ids; } },
    analysisService: { status: idle, list: async () => [], prune: async ids => { analysisPins = ids; } },
  });
  assert.deepEqual([...imagePins].sort(), ['child','parent']); assert.deepEqual([...analysisPins].sort(), ['a1','a2']); assert.deepEqual([...viewPins], ['views']);
});

test('completed photo models retain old raw photos, replacement references and refinement ancestors', async () => {
  const old = '2020-01-01T00:00:00Z', idle = async () => ({ activeJobId: null });
  let assets, imageJobs, viewJobs;
  await cleanWorkspaceCache({
    modelService: { status: idle, list: async () => [{ state: 'success', sourceAssetId: 'raw', multiviewJobId: 'refined' }] },
    multiviewService: { status: idle, list: async () => [
      { id: 'refined', preparedJobId: 'prepared', priorId: 'original-views', sourceAssetId: 'raw', referenceViews: { left: 'replacement' }, views: [{ assetId: 'new-result' }], directions: [{ jobId: 'new-direction' }], state: 'success', updatedAt: old },
      { id: 'original-views', sourceAssetId: 'raw', views: [{ assetId: 'old-result' }], state: 'success', updatedAt: old },
    ], prune: async ids => { viewJobs = ids; } },
    imageService: { status: idle, list: async () => [
      { id: 'prepared', workspace: 'quick', state: 'success', updatedAt: old, references: [{ id: 'raw' }], result: { id: 'prepared-result' } },
      { id: 'new-direction', workspace: 'quick', state: 'success', updatedAt: old, references: [{ id: 'old-result' }], result: { id: 'new-result' } },
      { id: 'old-direction', workspace: 'quick', state: 'success', updatedAt: old, references: [{ id: 'raw' }], result: { id: 'old-result' } },
    ], prune: async (ids, pins) => { imageJobs = ids; assets = pins; } },
    analysisService: { status: idle, list: async () => [], prune: async () => {} },
  });
  assert.deepEqual([...viewJobs].sort(), ['original-views','refined']);
  assert.deepEqual([...imageJobs].sort(), ['new-direction','old-direction','prepared']);
  for (const id of ['raw','replacement','new-result','old-result']) assert.ok(assets.has(id));
});
