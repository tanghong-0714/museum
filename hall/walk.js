import { Box3, BoxGeometry, Line3, Matrix4, Vector3 } from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { MeshBVH } from 'three-mesh-bvh';

// 默认行走速度统一在此调整，单位：米/秒。
export const WALK_SETTINGS = Object.freeze({ speed: 4.0, minSpeed: 3.0, maxSpeed: 4.0, step: .1 });

// Static architectural collision proxies, independent of baked visual geometry.
// Flat gallery: fixed eye height, no jumping or stepping onto museum cases.
export class GalleryWalk {
  constructor(colliders) {
    const boxes = colliders.filter(c => c.id !== 'COL_floor');
    const parts = boxes.map(c => new BoxGeometry(...c.size)
      .applyMatrix4(new Matrix4().makeRotationY(c.rotationY || 0))
      .translate(...c.center));
    this.geometry = mergeGeometries(parts);
    parts.forEach(g => g.dispose());
    this.bvh = new MeshBVH(this.geometry);
    this.radius = .25;
    this.velocity = new Vector3();
    this.segment = new Line3();
    this.bounds = new Box3();
    this.onTriangle = new Vector3();
    this.onCapsule = new Vector3();
    this.normal = new Vector3();
    this.contacts = 0;
    this.speed = WALK_SETTINGS.speed;
    this.correction = new Vector3();
    this.queries = 0;
  }
  stop() { this.velocity.set(0,0,0); }
  resolve(position) {
    this.queries++;
    this.segment.start.set(position.x,.25,position.z);
    this.segment.end.set(position.x,1.45,position.z);
    for (let pass=0;pass<4;pass++) {
      let hit=false;
      this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius);
      this.bvh.shapecast({
        intersectsBounds: box => box.intersectsBox(this.bounds),
        intersectsTriangle: tri => {
          tri.getNormal(this.normal);
          if (Math.abs(this.normal.y)>.9) return false;
          const distance=tri.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);
          if(distance>=this.radius) return false;
          this.normal.subVectors(this.onCapsule,this.onTriangle);this.normal.y=0;
          if(this.normal.lengthSq()<1e-12) tri.getNormal(this.normal);
          this.normal.normalize();
          const correction=this.correction.copy(this.normal).multiplyScalar(this.radius-distance+1e-5);
          this.segment.start.add(correction);this.segment.end.add(correction);
          const inward=this.velocity.dot(this.normal);
          if(inward<0)this.velocity.addScaledVector(this.normal,-inward);
          this.contacts++;hit=true;return false;
        }
      });
      if(!hit)break;
    }
    position.x=this.segment.start.x;position.z=this.segment.start.z;
  }
  step(position,direction,h) {
    if(direction.lengthSq()===0){this.stop();return;}
    // Apply input immediately; collision resolution still removes inward velocity.
    this.velocity.copy(direction).multiplyScalar(this.speed);
    position.addScaledVector(this.velocity,h);
    this.resolve(position);
  }
  update(position,direction,dt) {
    const steps=Math.max(1,Math.ceil(dt/(1/120))),h=dt/steps;
    for(let i=0;i<steps;i++)this.step(position,direction,h);
  }
}
