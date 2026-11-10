import { artifactAssignments } from './artifact-layout.js';

export const WORKBENCH_URL = 'http://127.0.0.1:4317/images';

export function buildWorkbenchUrl(location = globalThis.location) {
  if (!location) return WORKBENCH_URL;
  const url = new URL('/images', location.href || `http://${location.hostname}/`);
  url.port = '4317';
  return url.href;
}

// The cabinet manifest is also the hologram playlist: one order and one identity.
export function normalizeModelLibrary({ mobile = globalThis.matchMedia?.('(max-width: 760px), (pointer: coarse)').matches ?? false } = {}) {
  return artifactAssignments.map(assignment => ({
    id: assignment.artifactId,
    artifactId: assignment.artifactId,
    name: assignment.name,
    nickname: assignment.nickname,
    modelUrl: mobile ? assignment.modelMobile : assignment.modelDesktop,
    modelDesktop: assignment.modelDesktop,
    modelMobile: assignment.modelMobile,
    objective: 'collection',
  }));
}

// Keep the asynchronous interface used by the hall, without contacting repair history.
export async function loadModelLibrary({ signal, mobile } = {}) {
  signal?.throwIfAborted();
  return normalizeModelLibrary({ mobile });
}

export function buildArtifactDetailUrl(artifactId, location = globalThis.location) {
  if (!artifactAssignments.some(item => item.artifactId === artifactId)) throw new Error('未知馆藏');
  const url = new URL(location.href);
  url.port = '5189';
  url.pathname = '/';
  url.search = '';
  url.hash = '';
  url.searchParams.set('artifact', artifactId);
  url.searchParams.set('museumEmbed', '1');
  url.searchParams.set('parentOrigin', location.origin);
  url.searchParams.set('returnUrl', location.href);
  return url;
}
