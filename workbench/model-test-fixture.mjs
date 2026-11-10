// Synthetic box used only for offline protocol/browser checks, never an AI restoration.
export function fixtureGlb(extra = {}) {
  const positions = [], normals = [];
  const faces = [ [[1,0,0],[[.4,-.8,-.3],[.4,.8,-.3],[.4,.8,.3],[.4,-.8,.3]]], [[-1,0,0],[[-.4,-.8,.3],[-.4,.8,.3],[-.4,.8,-.3],[-.4,-.8,-.3]]], [[0,1,0],[[-.4,.8,-.3],[-.4,.8,.3],[.4,.8,.3],[.4,.8,-.3]]], [[0,-1,0],[[-.4,-.8,.3],[-.4,-.8,-.3],[.4,-.8,-.3],[.4,-.8,.3]]], [[0,0,1],[[.4,-.8,.3],[.4,.8,.3],[-.4,.8,.3],[-.4,-.8,.3]]], [[0,0,-1],[[-.4,-.8,-.3],[-.4,.8,-.3],[.4,.8,-.3],[.4,-.8,-.3]]] ];
  for (const [normal, corners] of faces) for (const i of [0,1,2,0,2,3]) { positions.push(...corners[i]); normals.push(...normal); }
  const bin = Buffer.concat([Buffer.from(new Float32Array(positions).buffer), Buffer.from(new Float32Array(normals).buffer)]);
  const json = { asset: { version: '2.0', generator: 'SYNTHETIC TEST BOX - NOT AI GENERATED' }, scene: 0, scenes: [{ nodes: [0] }], nodes: [{ mesh: 0 }], meshes: [{ primitives: [{ attributes: { POSITION: 0, NORMAL: 1 }, material: 0 }] }], materials: [{ pbrMetallicRoughness: { baseColorFactor: [.65,.48,.28,1], metallicFactor: 0, roughnessFactor: .7 } }], buffers: [{ byteLength: bin.length }], bufferViews: [{ buffer: 0, byteOffset: 0, byteLength: positions.length * 4 }, { buffer: 0, byteOffset: positions.length * 4, byteLength: normals.length * 4 }], accessors: [{ bufferView: 0, componentType: 5126, count: 36, type: 'VEC3', min: [-.4,-.8,-.3], max: [.4,.8,.3] }, { bufferView: 1, componentType: 5126, count: 36, type: 'VEC3' }], ...extra };
  let text = JSON.stringify(json); text += ' '.repeat((4 - Buffer.byteLength(text) % 4) % 4); const body = Buffer.from(text);
  const header = Buffer.alloc(20); header.write('glTF'); header.writeUInt32LE(2, 4); header.writeUInt32LE(28 + body.length + bin.length, 8); header.writeUInt32LE(body.length, 12); header.writeUInt32LE(0x4e4f534a, 16);
  const binHeader = Buffer.alloc(8); binHeader.writeUInt32LE(bin.length); binHeader.writeUInt32LE(0x004e4942, 4);
  return Buffer.concat([header, body, binHeader, bin]);
}
