import {Vector3,MathUtils} from 'three';

// Right/left are defined in the viewer's frame while facing the selected cabinet.
export function exhibitObservation(exhibit){
  const center=new Vector3(...exhibit.position);
  let front,right;
  if(exhibit.side==='front'){
    front=center.clone().add(new Vector3(0,0,exhibit.distance||3.15));
    right=new Vector3(1,0,0);
  }else{
    const sign=exhibit.side==='left'?-1:1;
    front=center.clone().add(new Vector3(-sign*3.15,0,0));
    right=new Vector3(0,0,sign);
  }
  front.y=1.65;
  const width=exhibit.lateral||1.18;
  const left=front.clone().addScaledVector(right,-width);
  const rightView=front.clone().addScaledVector(right,width);
  const target=center.clone();target.y=exhibit.targetHeight??.95;
  return {left,right:rightView,front,target};
}
export class ExhibitObservation{
  constructor(exhibit,{reduced=false}={}){
    this.views=exhibitObservation(exhibit);this.reduced=reduced;this.phase='left';this.elapsed=0;this.finished=false;
    this.steps=[{phase:'left',from:'left',to:'left',duration:.7},{phase:'right',from:'left',to:'right',duration:4.2},{phase:'right-hold',from:'right',to:'right',duration:.5},{phase:'front',from:'right',to:'front',duration:2.4}];this.index=0;
  }
  update(camera,dt){
    if(this.finished)return true;
    const step=this.steps[this.index];this.phase=step.phase;
    const duration=this.reduced?Math.min(step.duration,.22):step.duration;
    this.elapsed=Math.min(duration,this.elapsed+Math.max(0,dt));
    const t=MathUtils.smoothstep(this.elapsed/duration,0,1);
    camera.position.lerpVectors(this.views[step.from],this.views[step.to],t);camera.lookAt(this.views.target);
    if(this.elapsed>=duration){
      this.index++;this.elapsed=0;
      if(this.index===this.steps.length){this.finished=true;this.phase='complete';camera.position.copy(this.views.front);camera.lookAt(this.views.target);return true;}
    }
    return false;
  }
}
// Ingress and egress have distinct states: opening to ENTER never triggers the exit return action.
export class EntrySequence{
  constructor(spec){this.spec=spec;this.phase='opening';this.elapsed=0;this.finished=false;}
  update(camera,door,dt){
    const spec=this.spec;
    if(this.phase==='opening'){
      camera.position.fromArray(spec.outside);camera.lookAt(new Vector3(...spec.lookAt));
      if(door.progress===1&&door.target===1){this.phase='walking';this.elapsed=0;}
    }else if(this.phase==='walking'){
      this.elapsed=Math.min(spec.walkDuration,this.elapsed+Math.max(0,dt));
      const t=MathUtils.smoothstep(this.elapsed/spec.walkDuration,0,1);
      camera.position.lerpVectors(new Vector3(...spec.outside),new Vector3(...spec.inside),t);camera.lookAt(new Vector3(...spec.lookAt));
      if(this.elapsed>=spec.walkDuration){door.target=0;this.phase='closing';}
    }else if(this.phase==='closing'){
      camera.position.fromArray(spec.inside);camera.lookAt(new Vector3(...spec.lookAt));
      if(door.progress===0&&door.target===0){this.phase='complete';this.finished=true;return true;}
    }
    return this.finished;
  }
}
