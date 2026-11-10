import {AnimationMixer,LoopOnce} from 'three';

// A single action, with a stable frame-zero resting pose and a cancellable return.
export function createArtifactPerformance(root,clip,clips=[]){
 const mixer=new AnimationMixer(root);let action=mixer.clipAction(clip),currentClip=clip;
 const available=new Map([clip,...clips].map(item=>[item.name,item]));
 action.setLoop(LoopOnce,1);action.clampWhenFinished=true;
 action.play();mixer.update(0);
 const pose=[];root.traverse(node=>pose.push({node,position:node.position.clone(),quaternion:node.quaternion.clone(),scale:node.scale.clone()}));
 action.stop();
 const restore=()=>{for(const p of pose){p.node.position.copy(p.position);p.node.quaternion.copy(p.quaternion);p.node.scale.copy(p.scale);}root.updateMatrixWorld(true);};
 restore();
 let state='idle',returnElapsed=0,finished=false;
 const onFinished=event=>{if(event.action===action)finished=true;};
 mixer.addEventListener('finished',onFinished);
 function finish(){mixer.stopAllAction();restore();state='idle';finished=false;}
 return {
  get state(){return state;},get busy(){return state!=='idle';},get time(){return action.time;},get clipName(){return currentClip.name;},get duration(){return currentClip.duration;},
  play(name=clip.name,{interrupt=false}={}){const next=available.get(name);if(!next||state!=='idle'&&!interrupt)return false;if(state!=='idle')finish();currentClip=next;action=mixer.clipAction(next);action.setLoop(LoopOnce,1);action.clampWhenFinished=true;finished=false;state='playing';action.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(next.duration<2?.035:.3).play();return true;},
  stop(){if(state!=='playing')return;state='returning';returnElapsed=0;action.fadeOut(.35);},
  update(dt){if(state==='idle')return;mixer.update(Math.max(0,dt));if(state==='returning')returnElapsed+=Math.max(0,dt);if(finished||(state==='returning'&&returnElapsed>=.35))finish();root.updateMatrixWorld(true);},
  dispose(){finish();mixer.removeEventListener('finished',onFinished);mixer.uncacheRoot(root);}
 };
}
