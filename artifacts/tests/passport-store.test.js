import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import {passportStore} from '../server/passport-store.js';

test('store serializes concurrent callers, rolls back rejected changes and preserves corrupt evidence', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'passport-store-'));
  try {
    const store = passportStore(directory);
    await Promise.all(Array.from({length: 25}, () => store.transaction(async state => {
      const previous = state.counter || 0;
      await new Promise(resolve => setTimeout(resolve, 1));
      state.counter = previous + 1;
    })));
    const file = join(directory, 'passport.json');
    assert.equal(JSON.parse(await readFile(file, 'utf8')).counter, 25);
    await assert.rejects(store.transaction(state => { state.counter = -1; throw new Error('rollback'); }), /rollback/);
    assert.equal(JSON.parse(await readFile(file, 'utf8')).counter, 25);
    await store.transaction(state => { state.counter += 1; });
    assert.equal(JSON.parse(await readFile(file, 'utf8')).counter, 26);
    await writeFile(file, '{corrupt');
    await assert.rejects(store.transaction(() => {}));
    assert.equal(await readFile(file, 'utf8'), '{corrupt');
  } finally {
    await rm(directory, {recursive: true, force: true});
  }
});
