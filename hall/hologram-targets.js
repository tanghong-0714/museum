import { Box3, Vector3 } from 'three';

// A shallow interaction patch on the entrance-facing part of the real tabletop.
// It sits above the .92 m surface, below the floating artifact, and inside the
// 3.6 x 3.3 m base. It must not be a sphere shared with the artifact.
export function createWorkbenchTarget(position = [0, .92, 0]) {
  const [x, y, z] = position;
  return {
    anchor: new Vector3(x, y + .12, z + 1.1),
    box: new Box3(new Vector3(x - 1.26, y + .005, z + .72), new Vector3(x + 1.26, y + .30, z + 1.58)),
  };
}

// One active destination. Briefly retain it across the gap to its UI, but an
// explicit hit on the other physical zone always switches immediately.
export function selectHologramEntry({ available, target, hovered, active, lastHit, now, holdMs = 450 }) {
  if (!available) return { active: null, lastHit: -Infinity };
  if (hovered && hovered === active) return { active, lastHit: now };
  if (target) return { active: target, lastHit: now };
  return { active: now - lastHit < holdMs ? active : null, lastHit };
}

export function resolveHologramTarget(ray, modelSphere, workbenchBox) {
  const model = ray.intersectSphere(modelSphere, new Vector3());
  const workbench = ray.intersectBox(workbenchBox, new Vector3());
  if (workbench && (!model || ray.origin.distanceToSquared(workbench) <= ray.origin.distanceToSquared(model))) return 'workbench';
  return model ? 'artifact' : null;
}
