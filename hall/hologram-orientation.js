// Calibrated independently of cabinet placement. The source models face +X.
// Their detail viewers use -PI/2 with a camera on +Z (src/exhibit*.js).
export const hologramFrontRotation = Object.freeze({
  'phoenix-ewer': -Math.PI / 2,
  'bronze-head': -Math.PI / 2,
  'cloud-mirror': -Math.PI / 2,
  'liquan-bodhisattva': -Math.PI / 2,
  'longquan-figure': -Math.PI / 2,
  'pipa-figurine': -Math.PI / 2,
  'speechless-buddha': -Math.PI / 2,
});

export function getHologramFrontRotation(record) {
  // An explicit override also supports future, independently authored models.
  if (Number.isFinite(record.frontRotationY)) return record.frontRotationY;
  return hologramFrontRotation[record.artifactId || record.id] ?? 0;
}
