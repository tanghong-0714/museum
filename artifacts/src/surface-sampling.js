// Plain typed arrays keep the same surface sampling usable in a worker and on the main thread.
export function sampleSurfaceData({position, normal, uv, index}, count) {
  const triangles = (index ? index.length : position.length / 3) / 3;
  const areas = new Float64Array(triangles);
  const vertex = i => index ? index[i] : i;
  let total = 0;
  for (let triangle = 0; triangle < triangles; triangle++) {
    const a = vertex(triangle * 3) * 3;
    const b = vertex(triangle * 3 + 1) * 3;
    const c = vertex(triangle * 3 + 2) * 3;
    const abx = position[b] - position[a], aby = position[b + 1] - position[a + 1], abz = position[b + 2] - position[a + 2];
    const acx = position[c] - position[a], acy = position[c + 1] - position[a + 1], acz = position[c + 2] - position[a + 2];
    total += Math.hypot(aby * acz - abz * acy, abz * acx - abx * acz, abx * acy - aby * acx) * .5;
    areas[triangle] = total;
  }
  const positions = new Float32Array(count * 3), normals = new Float32Array(count * 3);
  const uvs = new Float32Array(count * 2), seeds = new Float32Array(count * 3);
  let seed = 8841;
  const random = () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < count; i++) {
    const area = random() * total;
    let low = 0, high = triangles - 1;
    while (low < high) {
      const middle = (low + high) >>> 1;
      if (areas[middle] < area) low = middle + 1;
      else high = middle;
    }
    const r = Math.sqrt(random()), s = random();
    const weights = [1 - r, r * (1 - s), r * s];
    for (let corner = 0; corner < 3; corner++) {
      const n = vertex(low * 3 + corner), weight = weights[corner];
      for (let axis = 0; axis < 3; axis++) {
        positions[i * 3 + axis] += position[n * 3 + axis] * weight;
        if (normal) normals[i * 3 + axis] += normal[n * 3 + axis] * weight;
      }
      if (uv) {
        uvs[i * 2] += uv[n * 2] * weight;
        uvs[i * 2 + 1] += uv[n * 2 + 1] * weight;
      }
    }
    seeds[i * 3] = random();
    seeds[i * 3 + 1] = random();
    seeds[i * 3 + 2] = random();
  }
  return {positions, normals, uvs, seeds};
}
