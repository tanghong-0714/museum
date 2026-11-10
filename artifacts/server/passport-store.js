import {mkdir, readFile, writeFile, rename, unlink} from 'node:fs/promises';
import {resolve, join} from 'node:path';
import {randomUUID} from 'node:crypto';

const stores = new Map();

/** Serialize the entire read/change/atomic-write transaction for each data directory. */
export function passportStore(directory) {
  const root = resolve(directory);
  if (stores.has(root)) return stores.get(root);
  let tail = Promise.resolve();
  const store = {
    transaction(change) {
      const operation = tail.then(async () => {
        await mkdir(root, {recursive: true, mode: 0o700});
        const file = join(root, 'passport.json');
        let state;
        try {
          state = JSON.parse(await readFile(file, 'utf8'));
          if (state.version !== 1 || !state.profiles || !state.accounts || !state.sessions) throw new Error('Invalid passport store');
        } catch (error) {
          if (error.code !== 'ENOENT') throw error;
          state = {version: 1, profiles: {}, accounts: {}, sessions: {}};
        }
        const result = await change(state);
        const temporary = join(root, `.passport-${randomUUID()}.tmp`);
        try {
          await writeFile(temporary, JSON.stringify(state), {encoding: 'utf8', mode: 0o600, flag: 'wx'});
          await rename(temporary, file);
        } finally {
          await unlink(temporary).catch(error => { if (error.code !== 'ENOENT') throw error; });
        }
        return result;
      });
      tail = operation.catch(() => {});
      return operation;
    },
  };
  stores.set(root, store);
  return store;
}
