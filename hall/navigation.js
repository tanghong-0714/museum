// Build walking routes around the same oriented obstacles used by collision detection.
const CLEARANCE = .36;
function localPoint(point, obstacle) {
  const x=point[0]-obstacle.center[0],z=point[1]-obstacle.center[2];
  const angle=obstacle.rotationY||0,c=Math.cos(angle),s=Math.sin(angle);
  return [c*x-s*z,s*x+c*z];
}
function blocksSegment(a,b,obstacle,clearance=CLEARANCE) {
  const p=localPoint(a,obstacle),q=localPoint(b,obstacle);
  const half=[obstacle.size[0]/2+clearance-1e-5,obstacle.size[2]/2+clearance-1e-5];
  let lo=0,hi=1;
  for(let i=0;i<2;i++) {
    const delta=q[i]-p[i];
    if(Math.abs(delta)<1e-10){if(Math.abs(p[i])>=half[i])return false;continue;}
    let t0=(-half[i]-p[i])/delta,t1=(half[i]-p[i])/delta;
    if(t0>t1)[t0,t1]=[t1,t0];lo=Math.max(lo,t0);hi=Math.min(hi,t1);
    if(lo>=hi)return false;
  }
  return hi>0&&lo<1;
}
export function insideGallery(point,layout,margin=.27) {
  if(layout.shape==='axial_gallery') {
    const [x,z]=point;
    const inMain=x>=-8+margin&&x<=8-margin&&z>=-11&&z<=11-margin;
    const inCorridor=x>=-2.6+margin&&x<=2.6-margin&&z>=-22+margin&&z<=-11;
    return inMain||inCorridor;
  }
  return Math.abs(point[1])<=layout.apothem-margin&&
    Math.sqrt(3)/2*Math.abs(point[0])+.5*Math.abs(point[1])<=layout.apothem-margin;
}
export function planRoute(start,end,manifest) {
  const a=[start[0],start[2]],b=[end[0],end[2]];
  const obstacles=manifest.colliders.filter(c=>c.id!=='COL_floor');
  // Start/end may be at the walking radius; interior route vertices use more clearance.
  const clear=(p,q)=>!obstacles.some(o=>blocksSegment(p,q,o,.27));
  if(clear(a,b))return [[...end]];
  const nodes=[a,b];
  for(const o of obstacles) {
    const c=Math.cos(o.rotationY||0),s=Math.sin(o.rotationY||0);
    for(const sx of [-1,1])for(const sz of [-1,1]) {
      const x=sx*(o.size[0]/2+CLEARANCE),z=sz*(o.size[2]/2+CLEARANCE);
      const p=[o.center[0]+c*x+s*z,o.center[2]-s*x+c*z];
      if(insideGallery(p,manifest.layout)&&!obstacles.some(other=>blocksSegment(p,p,other,.27)))nodes.push(p);
    }
  }
  const distances=nodes.map(()=>Infinity),previous=nodes.map(()=>-1),visited=new Set();distances[0]=0;
  while(visited.size<nodes.length) {
    let next=-1;
    for(let i=0;i<nodes.length;i++)if(!visited.has(i)&&(next<0||distances[i]<distances[next]))next=i;
    if(next<0||!Number.isFinite(distances[next]))return [];
    if(next===1)break;visited.add(next);
    for(let i=0;i<nodes.length;i++) {
      if(visited.has(i)||!clear(nodes[next],nodes[i]))continue;
      const distance=distances[next]+Math.hypot(nodes[next][0]-nodes[i][0],nodes[next][1]-nodes[i][1]);
      if(distance<distances[i]){distances[i]=distance;previous[i]=next;}
    }
  }
  const route=[];
  for(let at=1;at!==0;at=previous[at]){if(at<0)return [];route.unshift([nodes[at][0],end[1],nodes[at][1]]);}
  return route;
}
