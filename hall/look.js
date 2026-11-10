import {MathUtils} from 'three';

export function resolveMouseLook(mode, follow, coarse) {
  return mode === 'walk' && (follow ?? !coarse);
}

// A denied request (for example just after Esc) must not disable future gestures.
export function createPointerLockRequester(request) {
  let pending = null;
  return () => {
    if (pending) return pending;
    pending = Promise.resolve().then(request).finally(() => { pending = null; });
    return pending;
  };
}

// Apply relative input directly to the visible camera. No dead zone, velocity or smoothing tail.
export function applyLookDelta(camera,dx,dy,sensitivity=.0017){
  if(!Number.isFinite(dx)||!Number.isFinite(dy))return false;
  camera.rotation.order='YXZ';
  camera.rotation.y-=dx*sensitivity;
  camera.rotation.x=MathUtils.clamp(camera.rotation.x-dy*sensitivity,-1.15,1.15);
  camera.rotation.z=0;
  return true;
}

// Cursor-follow cannot receive relative deltas beyond the desktop edge. Continue turning there
// until the cursor leaves the edge zone; pointer lock still uses unconstrained raw deltas.
export function edgeYawRate(clientX,viewportWidth){
  if(!Number.isFinite(clientX)||!Number.isFinite(viewportWidth)||viewportWidth<=0)return 0;
  const x=MathUtils.clamp(clientX/viewportWidth,0,1),zone=.08;
  if(x<zone)return -(zone-x)/zone*1.35;
  if(x>1-zone)return (x-(1-zone))/zone*1.35;
  return 0;
}

// A reset deliberately consumes the first absolute sample without turning.
export function sampleLookPointer(previous, event) {
  const point = {id:event.pointerId, x:event.clientX, y:event.clientY};
  if (!previous) return {point, dx:0, dy:0};
  if (previous.id !== undefined && previous.id !== event.pointerId) return null;
  return {point, dx:point.x-previous.x, dy:point.y-previous.y};
}

// A stalled input queue can deliver an old client position followed by a large
// catch-up jump. Rebase only during recovery; timely fast turns stay unfiltered.
export function sampleMouseLookPointer(previous,event,now,locked=false){
  const stamp=Number.isFinite(event.timeStamp)?event.timeStamp:now;
  const point={x:event.clientX,y:event.clientY,stamp};
  const idle={point,dx:0,dy:0};
  if(previous?.stamp>stamp)return {...idle,point:previous};
  if(now-stamp>150){point.recovery='fresh';return idle;}
  if(!previous)return idle;
  const dx=point.x-previous.x,dy=point.y-previous.y;
  if(previous.recovery){
    const relativeKnown=Number.isFinite(event.movementX)&&Number.isFinite(event.movementY);
    // CSS/device-pixel scaling and event coalescing can cause modest differences.
    const tolerance=Math.max(32,.5*Math.max(Math.hypot(dx,dy),Math.hypot(event.movementX,event.movementY)));
    const mismatch=!locked&&relativeKnown&&Math.hypot(dx-event.movementX,dy-event.movementY)>tolerance;
    if(mismatch)point.recovery='align';
    if(previous.recovery==='fresh'||mismatch)return idle;
  }
  return {point,dx:locked?event.movementX:dx,dy:locked?event.movementY:dy};
}

export function releaseLookPointer(canvas, point) {
  if (point?.id !== undefined && canvas.hasPointerCapture(point.id)) {
    canvas.releasePointerCapture(point.id);
  }
}

export function endsLookPointer(point, event) {
  return point?.id !== undefined && point.id === event.pointerId;
}

// Capture-phase guard shared by every canvas click listener.
export function createCanvasClickGuard(threshold=7) {
  let gesture=null;
  let suppressClick=false;
  return {
    down(event) {
      if(event.isPrimary===false)return;
      gesture={id:event.pointerId,x:event.clientX,y:event.clientY,active:true};
      suppressClick=false;
    },
    move(event) {
      if(!gesture?.active||gesture.id!==event.pointerId)return;
      if(Math.hypot(event.clientX-gesture.x,event.clientY-gesture.y)>threshold)suppressClick=true;
    },
    end(event,cancelled=false) {
      if(!gesture?.active||gesture.id!==event.pointerId)return;
      gesture.active=false;
      if(cancelled)suppressClick=true;
    },
    click(locked=false) {
      const blocked=suppressClick&&!locked;
      gesture=null;suppressClick=false;
      return blocked;
    }
  };
}
