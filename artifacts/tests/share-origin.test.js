import test from 'node:test';
import assert from 'node:assert/strict';
import {resolveShareOrigin} from '../server/share-origin.js';
import {artifactShareUrl} from '../src/passport-media.js';

const live = {
  read: () => ({origin: 'http://192.168.145.45:5189', pid: 123}),
  interfaces: () => ({WLAN: [{address: '192.168.145.45', internal: false}]}),
  isAlive: () => {},
};
test('desktop and phone cards share the active hotspot detail URL', () => {
  const base = resolveShareOrigin({}, live);
  for (const origin of ['http://127.0.0.1:5194', 'http://127.0.0.1:5189', 'http://192.168.145.45:5189']) {
    globalThis.location = {origin};
    try { assert.equal(artifactShareUrl('bronze-head', base), 'http://192.168.145.45:5189/?artifact=bronze-head'); }
    finally { delete globalThis.location; }
  }
});
test('explicit public deployment wins; stale or missing hotspot is not advertised', () => {
  assert.equal(resolveShareOrigin({ARTIFACT_PUBLIC_BASE_URL:'https://museum.example/?secret=discard'}, live), 'https://museum.example/');
  assert.equal(resolveShareOrigin({}, {...live, interfaces: () => ({})}), null);
  assert.equal(resolveShareOrigin({}, {...live, isAlive: () => { throw Error('stopped'); }}), null);
  assert.equal(resolveShareOrigin({}, {...live, read: () => { throw Error('missing'); }}), null);
  assert.equal(resolveShareOrigin({}, {...live, read: () => ({origin: 'http://user:secret@192.168.145.45:5189', pid:123})}), null);
});
