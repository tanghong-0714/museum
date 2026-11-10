import {Vector2, Vector3, Quaternion, MathUtils} from 'three';

// Fit the complete transformed bounds, including depth, at every orbit angle.
// Eight cached corners are enough; never traverse the model in the render loop.
export function createFrameLimiter(bounds, padding=.08){
 const corners=[];
 for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])corners.push(new Vector3(x,y,z));
 const aligned=corners.map(()=>new Vector3());
 const point=new Vector3(),inverse=new Quaternion();
 const measure=(camera,target,matrix,widthFraction=1,bottomAnchored=false)=>{
  inverse.copy(camera.quaternion).invert();
  const vertical=Math.tan(MathUtils.degToRad(camera.fov/2))*(1-padding);
  const horizontal=vertical*camera.aspect*widthFraction;
  let distance=.5;
  for(let i=0;i<corners.length;i++){
   point.copy(corners[i]).applyMatrix4(matrix).sub(target).applyQuaternion(inverse);aligned[i].copy(point);
   distance=Math.max(distance,point.z+Math.abs(point.x)/horizontal,bottomAnchored?0:point.z+Math.abs(point.y)/vertical,point.z+camera.near+.05);
  }
  if(bottomAnchored){
   const tangent=Math.tan(MathUtils.degToRad(camera.fov/2));
   const fits=d=>{let bottom=Infinity,top=-Infinity;for(const p of aligned){const y=p.y/Math.max(.001,(d-p.z)*tangent);bottom=Math.min(bottom,y);top=Math.max(top,y);}return top+Math.max(0,-.985-bottom)<=.985;};
   if(!fits(distance)){let low=distance,high=distance;while(!fits(high))high*=1.5;for(let i=0;i<12;i++){const middle=(low+high)/2;if(fits(middle))high=middle;else low=middle;}distance=high;}
  }
  return distance;
 };
 // Fit between the user-marked top and bottom boundaries, with a small breathing gap.
 // Compensate vertically only as the base approaches its lower boundary.
 measure.bottomOffset=(camera,matrix)=>{
  inverse.copy(camera.quaternion).invert();
  const tangent=Math.tan(MathUtils.degToRad(camera.fov/2));let bottom=Infinity;
  for(const corner of corners){point.copy(corner).applyMatrix4(matrix).sub(camera.position).applyQuaternion(inverse);bottom=Math.min(bottom,point.y/Math.max(.001,-point.z*tangent));}
  return Math.max(0,-.985-bottom);
 };
 const constrained=new Vector2();
 // Fit around a fixed screen-space pivot. Orbiting must not move that pivot
 // just because a different bounding-box corner reaches the frame edge.
 measure.fixedOffsetDistance=(camera,target,matrix,offset,widthFraction=1)=>{
  inverse.copy(camera.quaternion).invert();
  const tangent=Math.tan(MathUtils.degToRad(camera.fov/2)),side=(1-padding)*widthFraction;
  let distance=.5;
  for(const corner of corners){
   point.copy(corner).applyMatrix4(matrix).sub(target).applyQuaternion(inverse);
   const horizontal=Math.max(.001,side-(point.x>=0?offset.x:-offset.x));
   const vertical=Math.max(.001,.985-(point.y>=0?offset.y:-offset.y));
   distance=Math.max(distance,point.z+Math.abs(point.x)/(tangent*camera.aspect*horizontal),point.z+Math.abs(point.y)/(tangent*vertical),point.z+camera.near+.05);
  }
  return distance;
 };
 measure.constrainOffset=(camera,matrix,requested,widthFraction=1)=>{
  inverse.copy(camera.quaternion).invert();
  const tangent=Math.tan(MathUtils.degToRad(camera.fov/2));
  let left=Infinity,right=-Infinity,bottom=Infinity,top=-Infinity;
  for(const corner of corners){point.copy(corner).applyMatrix4(matrix).sub(camera.position).applyQuaternion(inverse);const depth=Math.max(.001,-point.z*tangent),x=point.x/(depth*camera.aspect),y=point.y/depth;left=Math.min(left,x);right=Math.max(right,x);bottom=Math.min(bottom,y);top=Math.max(top,y);}
  const side=(1-padding)*widthFraction;
  const limit=(value,low,high)=>low<=high?MathUtils.clamp(value,low,high):(low+high)/2;
  return constrained.set(limit(requested.x,-side-left,side-right),limit(requested.y,-.985-bottom,.985-top));
 };
 return measure;
}

export function easeZoom(current,target,dt,reduced=false){
 return reduced?target:current+(target-current)*-Math.expm1(-12*Math.min(.05,Math.max(0,dt)));
}

// A C1-continuous maximum: enter the boundary guard gradually, never inside it.
export function smoothFrameDistance(requested,required,margin=.16){
 const gap=Math.abs(requested-required);
 return Math.max(requested,required)+(gap<margin?(margin-gap)**2/(4*margin):0);
}
