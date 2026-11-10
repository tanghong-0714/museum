import {readFileSync} from 'node:fs';
import {networkInterfaces} from 'node:os';

const hotspotFile = new URL('../../../mobile-preview/share-origin.json', import.meta.url);

// An explicitly deployed public URL takes precedence. Hotspot state is written
// only by the local gateway after its detail-page listener is ready.
export function resolveShareOrigin(env = {}, {read = () => JSON.parse(readFileSync(hotspotFile, 'utf8')), interfaces = networkInterfaces, isAlive = pid => process.kill(pid, 0)} = {}) {
  try {
    const url = new URL(env.ARTIFACT_PUBLIC_BASE_URL);
    if (['http:', 'https:'].includes(url.protocol) && !url.username && !url.password) return url.origin + url.pathname;
  } catch {}
  try {
    const state = read();
    const url = new URL(state.origin);
    if (url.protocol !== 'http:' || url.port !== '5189' || url.username || url.password || !Number.isInteger(state.pid) || state.pid <= 0) return null;
    if (!Object.values(interfaces()).flat().some(item => item && !item.internal && item.address === url.hostname)) return null;
    isAlive(state.pid);
    return url.origin;
  } catch { return null; }
}
