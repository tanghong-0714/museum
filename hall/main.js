import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import './style.css';
import { GalleryWalk, WALK_SETTINGS } from './walk.js';
import { planRoute } from './navigation.js';
import { SlidingGlassDoor } from './door.js';
import {addReferenceAtmosphere} from './reference-atmosphere.js';
import {applyLookDelta,edgeYawRate,sampleLookPointer,sampleMouseLookPointer,releaseLookPointer,endsLookPointer,createCanvasClickGuard,resolveMouseLook,createPointerLockRequester} from './look.js';
import {ExhibitObservation,EntrySequence,exhibitObservation} from './exhibit-tour.js';
import {artifactAssignments,loadHallArtifacts,cloneHallArtifactForHologram} from './artifact-layout.js';
import {createArtifactInteraction} from './artifact-interaction.js';
import {createHologramStage} from './hologram-stage.js';
import {createHologramInteraction} from './hologram-interaction.js';
import {loadModelLibrary} from './model-library.js';
import {repairExhibitGeometry} from './exhibit-geometry-repair.js';
import {createExhibitLabels} from './exhibit-labels.js';
import {isLabelQrHit} from './exhibit-label-config.js';
const $=s=>document.querySelector(s), scene=new THREE.Scene();scene.background=new THREE.Color('#101611');
const renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.25));renderer.setSize(innerWidth,innerHeight);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.AgXToneMapping;renderer.toneMappingExposure=1.1;$('#canvas').appendChild(renderer.domElement);renderer.domElement.tabIndex=0;
const camera=new THREE.PerspectiveCamera(58,innerWidth/innerHeight,.05,140);camera.position.set(0,1.7,7.7);camera.rotation.order='YXZ';
const pmrem=new THREE.PMREMGenerator(renderer);const env=new RoomEnvironment();scene.environment=pmrem.fromScene(env,.02).texture;env.dispose();pmrem.dispose();scene.environmentIntensity=.48;
scene.add(new THREE.HemisphereLight(0xd7e5f2,0x171a24,.85));
const canvas=renderer.domElement;
canvas.setAttribute('aria-label','可交互数字展厅');
const ui={reticle:$('#reticle'),aim:$('#aimHint'),story:$('#story'),guide:$('#guide'),walk:$('#walk')};
const storyMaterials=[];
let glassDoor=null,doorAimed=false,atmosphere=null,doorReturnPending=false;
let visitReady=false,entrySequence=null,observation=null,pendingExhibit=null,selectedExhibit=null;
let artifactUI=null,labelUI=null,artifactRecords=[],artifactFailures=[];
let hologramStage=null,hologramUI=null,libraryError=null,librarySignature=null,libraryBusy=false;
const libraryAbort=new AbortController();
function detailOpen(){return Boolean(artifactUI?.isOpen()||hologramUI?.isOpen()||labelUI?.isOpen);}
async function refreshHologramLibrary(){
 if(libraryBusy||!hologramStage||(hologramUI?.isEngaged()&&hologramStage.getCurrent()))return;
 libraryBusy=true;
 try{const models=await loadModelLibrary({signal:libraryAbort.signal});
  if(libraryAbort.signal.aborted)return;
  const signature=JSON.stringify(models);
  if(signature!==librarySignature&&(!hologramUI?.isEngaged()||!hologramStage.getCurrent())){hologramStage.setModels(models);librarySignature=signature;}
  libraryError=null;
 }catch(error){if(error.name!=='AbortError')libraryError=error.message;}finally{libraryBusy=false;}
}
const numberMeshes=[],caseRaycaster=new THREE.Raycaster(),casePointer=new THREE.Vector2();
const initialViewQuaternion=new THREE.Quaternion();
const doorPoint=new THREE.Vector3(0,1.55,8.94),doorProjected=new THREE.Vector3();

let walker,manifest,loaded=false,loadedAt=0,entered=false,mode='paused',mouseLook=false;
let reduced=matchMedia('(prefers-reduced-motion: reduce)').matches,route=[],lookTarget=null,storyReturn=null;
let yaw=0,pitch=0,mousePoint=null,touchPoint=null,wasLocked=false,dragLook=false,edgeTurn=$('#edgeTurn').checked;
const requestCanvasLock=createPointerLockRequester(()=>canvas.requestPointerLock());
let last=performance.now(),uiTime=0,qualityTime=0,aimed=false,aimSince=0,lastAim=false;
let walkSpeed=WALK_SETTINGS.speed,bobOffset=0,bobPhase=0,bobEnvelope=0,bobPeak=0,maxWalkSpeed=0;
const movementPointers=new Map();
const keys=new Set(),player=camera.position.clone(),direction=new THREE.Vector3();
const projected=new THREE.Vector3(),storyPoint=new THREE.Vector3(3.7,1.35,7.6),toStory=new THREE.Vector3(),ray=new THREE.Ray();
const oldQ=new THREE.Quaternion(),wantedQ=new THREE.Quaternion();
const frameTimes=[],updateTimes=[],renderTimes=[];
let resolution=Math.min(devicePixelRatio,1.25),pendingResolution=null,slowWindows=0;
const views={entrance:{label:'入口总览'},cases:{label:'山水展廊'},hero:{label:'中央主展位'},story:{label:'后方展廊'}};
function syncAngles(){yaw=camera.rotation.y;pitch=camera.rotation.x;}
function clearTouch(){const point=touchPoint;touchPoint=null;releaseLookPointer(canvas,point);}
function resetInput(){camera.position.y-=bobOffset;bobOffset=0;bobEnvelope=0;keys.clear();for(const [button,id] of movementPointers){releaseLookPointer(button,{id});}movementPointers.clear();mousePoint=null;clearTouch();walker?.stop();player.copy(camera.position);syncAngles();}
function updateLookUI(){
 const locked=document.pointerLockElement===canvas;
 canvas.dataset.lookMode=mode==='walk'&&mouseLook?(locked?'pointer-lock':dragLook?'right-drag':'mouse-follow'):'paused';
 ui.walk.textContent=mode==='walk'&&mouseLook?(locked?'暂停环顾 · Esc':'点击锁定鼠标 · 连续转向'):'继续鼠标环顾';
 $('#walkHint').textContent=locked?'WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情':'点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停';
}
function changeMode(next,follow){
  if(next!=='story')storyReturn=null;
  if(next!=='guide'){route=[];lookTarget=null;}
  if(next!=='observe')observation=null;
  if(next!=='guide')pendingExhibit=null;
  mode=next;mouseLook=resolveMouseLook(next,follow,matchMedia('(pointer:coarse)').matches);resetInput();
  if(next!=='walk'&&document.pointerLockElement===canvas)document.exitPointerLock();
  document.body.classList.toggle('mouse-look',mouseLook);
  document.body.classList.toggle('free-visit',next==='walk');
  document.querySelector('footer').inert=next==='walk'||next==='entering';
  $('#caseChoices').inert=next==='walk'||next==='entering';
  canvas.dataset.mode=mode;updateLookUI();
  ui.story.hidden=next!=='story';
}
let noticeTimer;
function notify(t){clearTimeout(noticeTimer);$('#status').textContent=t;$('#status').classList.add('show');noticeTimer=setTimeout(()=>$('#status').classList.remove('show'),2600);}
function enter(){if(!loaded)return;entered=true;$('#intro').classList.add('dismissed');$('#intro').inert=true;canvas.focus();}
function setEntryControls(disabled){
  for(const button of document.querySelectorAll('nav button,#caseChoices button,#enter,#walk,#help,#motion'))button.disabled=disabled;
  document.body.classList.toggle('entering-gallery',disabled);
}
function beginEntry(){
  enter();changeMode('entering');visitReady=false;doorReturnPending=false;selectedExhibit=null;
  glassDoor.reset();glassDoor.target=1;entrySequence=new EntrySequence(manifest.entrySequence);
  camera.position.fromArray(manifest.entrySequence.outside);camera.lookAt(new THREE.Vector3(...manifest.entrySequence.lookAt));
  syncAngles();setEntryControls(true);$('#caseChoices').hidden=true;
  $('#location').textContent='推门入馆 · 正在打开玻璃门';canvas.dataset.entryPhase='opening';
  if(!matchMedia('(pointer:coarse)').matches)void requestLookLock();
}
async function startWalk(){
  if(!loaded||detailOpen()||mode==='story'||mode==='entering'||ui.guide.open)return;
  if(!visitReady){beginEntry();return;}
  if(mode==='walk'&&mouseLook&&document.pointerLockElement===canvas){changeMode('paused');return;}
  enter();changeMode('walk',!matchMedia('(pointer:coarse)').matches);
  if(mouseLook)await requestLookLock();
}
async function requestLookLock(){
  if(document.pointerLockElement===canvas||!['walk','entering'].includes(mode)||detailOpen()||ui.guide.open)return;
  try{await requestCanvasLock();}
  catch(error){canvas.dataset.lockError=error.name||'Unavailable';if(['walk','entering'].includes(mode)&&!detailOpen())notify('鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身');}
  updateLookUI();
}
function returnToWelcome(){
  // The previous frame displayed both fully opened leaves before resetting the visit.
  doorReturnPending=false;changeMode('paused');entered=false;visitReady=false;entrySequence=null;selectedExhibit=null;setEntryControls(false);$('#caseChoices').hidden=true;
  glassDoor.reset();camera.position.fromArray(views.entrance.p);camera.quaternion.copy(initialViewQuaternion);
  player.copy(camera.position);syncAngles();bobPhase=0;
  walkSpeed=WALK_SETTINGS.speed;walker.speed=walkSpeed;
  $('#speed').value=walkSpeed;$('#speedValue').textContent=walkSpeed.toFixed(1)+' 米/秒';
  aimed=false;doorAimed=false;aimSince=0;lastAim=false;
  hotspot.hidden=true;doorHotspot.hidden=true;ui.aim.textContent='';ui.reticle.classList.remove('target');
  document.body.classList.remove('walking','mouse-look','free-visit');
  $('#location').textContent='入口序厅';
  document.querySelectorAll('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view==='entrance'));
  clearTimeout(noticeTimer);$('#status').classList.remove('show');
  if(ui.guide.open)ui.guide.close();
  $('#intro').inert=false;$('#intro').classList.remove('dismissed');$('#enter').focus({preventScroll:true});
}
function exitWalk(){if(mode==='entering'){keys.clear();mousePoint=null;clearTouch();return;}if(mode==='story'){resetInput();return;}changeMode('paused');}
function navigate(id){
  if(!loaded||detailOpen()||mode==='entering')return;
  if(id==='cases'){$('#caseChoices').hidden=false;selectExhibit(Number.isInteger(selectedExhibit?.id)?selectedExhibit.id:1);return;}
  if(id==='hero'||id==='story'){selectObservation(manifest.observationTargets[id],id);return;}
  $('#caseChoices').hidden=true;selectedExhibit=null;pendingExhibit=null;
  document.querySelectorAll('button[data-exhibit]').forEach(button=>button.classList.remove('active'));
  enter();changeMode('guide');
  const v=views[id];lookTarget=new THREE.Vector3(...v.t);
  if(reduced){camera.position.fromArray(v.p);camera.lookAt(lookTarget);changeMode('paused');}
  else{
    const path=planRoute(camera.position.toArray(),v.p,manifest);
    if(!path.length){notify('请先离开展柜边缘，再选择参观点');changeMode('paused');return;}
    route=path.map(p=>new THREE.Vector3(...p));
  }
  $('#location').textContent=v.label;document.querySelectorAll('[data-view]').forEach(b=>b.classList.toggle('active',b.dataset.view===id));
}
function beginObservation(exhibit){
  changeMode('observe');selectedExhibit=exhibit;observation=new ExhibitObservation(exhibit,{reduced});
  camera.position.copy(observation.views.left);camera.lookAt(observation.views.target);
  canvas.dataset.selectedExhibit=String(exhibit.id);canvas.dataset.observationPhase='left';
  $('#location').textContent=exhibit.label+' · 左侧观察';
}
function selectExhibit(id){
  if(!loaded||detailOpen()||mode==='entering')return;
  const exhibit=manifest.exhibits.find(item=>item.id===Number(id));if(!exhibit)return;
  selectObservation(exhibit,'cases');
}
function selectObservation(exhibit,navId){
  if(!loaded||detailOpen()||mode==='entering')return;
  enter();changeMode('guide');selectedExhibit=exhibit;$('#caseChoices').hidden=navId!=='cases';
  const observationViews=exhibitObservation(exhibit);lookTarget=observationViews.target;
  document.querySelectorAll('[data-view]').forEach(button=>button.classList.toggle('active',button.dataset.view===navId));
  document.querySelectorAll('button[data-exhibit]').forEach(button=>{const active=Number(button.dataset.exhibit)===exhibit.id;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
  $('#location').textContent=exhibit.label+' · 前往左侧观察位';canvas.dataset.selectedExhibit=String(exhibit.id);canvas.dataset.observationPhase='approach';
  if(reduced){beginObservation(exhibit);return;}
  const path=planRoute(camera.position.toArray(),observationViews.left.toArray(),manifest);
  if(!path.length){notify('请先离开展柜边缘，再选择观察位置');changeMode('paused');return;}
  pendingExhibit=exhibit;route=path.map(point=>new THREE.Vector3(...point));
}
$('#enter').onclick=startWalk;ui.walk.onclick=startWalk;
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>navigate(b.dataset.view));
document.querySelectorAll('button[data-exhibit]').forEach(button=>button.onclick=()=>selectExhibit(button.dataset.exhibit));
$('#help').onclick=()=>{if(detailOpen()||mode==='story'||mode==='entering')return;changeMode('paused');ui.guide.showModal();};
$('#closeHelp').onclick=()=>ui.guide.close();
function updateMotion(){$('#motion').setAttribute('aria-pressed',String(reduced));$('#motion').textContent=reduced?'动态已减弱':'减弱动态';}
updateMotion();$('#motion').onclick=()=>{reduced=!reduced;updateMotion();};
$('#speed').min=WALK_SETTINGS.minSpeed;$('#speed').max=WALK_SETTINGS.maxSpeed;$('#speed').step=WALK_SETTINGS.step;$('#speed').value=walkSpeed;$('#speedValue').textContent=walkSpeed.toFixed(1)+' 米/秒';
$('#speed').oninput=e=>{const value=Number(e.target.value);walkSpeed=THREE.MathUtils.clamp(Number.isFinite(value)?value:WALK_SETTINGS.speed,WALK_SETTINGS.minSpeed,WALK_SETTINGS.maxSpeed);e.target.value=walkSpeed;walker&&(walker.speed=walkSpeed);$('#speedValue').textContent=walkSpeed.toFixed(1)+' 米/秒';};
$('#edgeTurn').onchange=e=>{edgeTurn=e.target.checked;mousePoint=null;};
const hotspot=document.createElement('button');hotspot.className='hotspot';hotspot.textContent='＋ 开启故事';hotspot.hidden=true;$('#hotspots').appendChild(hotspot);
function openStory(){
  if(mode==='story'||ui.guide.open||!loaded)return;
  const saved={p:camera.position.clone(),q:camera.quaternion.clone()};saved.p.y-=bobOffset;
  changeMode('story');storyReturn=saved;
}
hotspot.onclick=openStory;
const doorHotspot=document.createElement('button');doorHotspot.className='hotspot';doorHotspot.id='doorHotspot';doorHotspot.textContent='推开玻璃门';doorHotspot.hidden=true;$('#hotspots').appendChild(doorHotspot);
function toggleDoor(){if(!loaded||!visitReady||mode==='story'||mode==='entering'||ui.guide.open)return;glassDoor.toggle();}
doorHotspot.onclick=toggleDoor;
function closeStory(){
  if(mode!=='story')return;
  if(storyReturn){camera.position.copy(storyReturn.p);bobOffset=0;camera.quaternion.copy(storyReturn.q);}
  changeMode('paused');canvas.focus();
}
$('#closeStory').onclick=closeStory;$('#returnStory').onclick=closeStory;
function queueLook(dx,dy){
  if(detailOpen())return;
  if(applyLookDelta(camera,dx,dy))syncAngles();
}
document.addEventListener('mousemove',e=>{
  if(mode!=='walk'||!mouseLook||detailOpen()||ui.guide.open)return;
  const locked=document.pointerLockElement===canvas;
  if(!locked&&dragLook&&!(e.buttons&2)){mousePoint=null;return;}
  const sample=sampleMouseLookPointer(mousePoint,e,performance.now(),locked);
  queueLook(sample.dx,sample.dy);mousePoint=sample.point;
});
window.addEventListener('mouseout',event=>{if(!event.relatedTarget)mousePoint=null;});
const canvasClickGuard=createCanvasClickGuard();
canvas.addEventListener('pointerdown',event=>canvasClickGuard.down(event),true);
canvas.addEventListener('pointermove',event=>{
 if(document.pointerLockElement!==canvas)canvasClickGuard.move(event);
},true);
canvas.addEventListener('pointerup',event=>canvasClickGuard.end(event),true);
canvas.addEventListener('pointercancel',event=>canvasClickGuard.end(event,true),true);
canvas.addEventListener('lostpointercapture',event=>{
 if(event.pointerType==='touch')canvasClickGuard.end(event,true);
},true);
canvas.addEventListener('click',event=>{
 if(!canvasClickGuard.click(document.pointerLockElement===canvas))return;
 event.preventDefault();event.stopImmediatePropagation();
},true);
canvas.addEventListener('pointerdown',e=>{
  if(!loaded||detailOpen()||!visitReady||mode==='story'||mode==='entering'||ui.guide.open)return;canvas.focus();
  if(e.pointerType==='mouse'&&e.button===2&&document.pointerLockElement!==canvas){
    if(mode!=='walk'||!mouseLook)changeMode('walk',true);
    dragLook=true;mousePoint={x:e.clientX,y:e.clientY};updateLookUI();
  }else if(e.pointerType==='mouse'&&e.button===0&&e.isTrusted&&mode==='walk'&&mouseLook)void requestLookLock();
  if(e.pointerType==='touch'&&!touchPoint){if(mode!=='walk')changeMode('walk',false);touchPoint={id:e.pointerId,x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);}
});
canvas.addEventListener('contextmenu',event=>{if(mode==='walk')event.preventDefault();});
window.addEventListener('pointerup',event=>{if(event.pointerType==='mouse'&&event.button===2)mousePoint=null;});
canvas.addEventListener('pointermove',e=>{if(!touchPoint||mode!=='walk'||detailOpen())return;const sample=sampleLookPointer(touchPoint,e);if(!sample)return;queueLook(sample.dx,sample.dy);touchPoint=sample.point;});
for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,e=>{if(endsLookPointer(touchPoint,e))touchPoint=null;});
canvas.addEventListener('click',event=>{
  if(!loaded||detailOpen()||mode==='entering'||ui.guide.open)return;
  if(mode==='walk'&&aimed){openStory();return;}
  if((mode==='walk'||mode==='paused')&&doorAimed){toggleDoor();return;}
  if(document.pointerLockElement===canvas)casePointer.set(0,0);
  else{const rect=canvas.getBoundingClientRect();casePointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);}
  caseRaycaster.setFromCamera(casePointer,camera);
  const labelHit=labelUI&&caseRaycaster.intersectObjects(labelUI.records.map(record=>record.mesh),false)[0];
  if(labelHit&&labelHit.distance<4.8&&isLabelQrHit(labelHit.uv)&&labelUI.openLabel(labelHit.object.userData.artifactId)){
    event.preventDefault();event.stopImmediatePropagation();return;
  }
  const hit=caseRaycaster.intersectObjects(numberMeshes,false)[0];
  if(hit&&hit.distance<12)selectExhibit(hit.object.userData.exhibitId);
});
document.addEventListener('pointerlockchange',()=>{
  const locked=document.pointerLockElement===canvas;
  document.body.classList.toggle('walking',locked);canvas.dataset.locked=String(locked);
  if(locked&&!['walk','entering'].includes(mode)){document.exitPointerLock();return;}
  mousePoint=null;clearTouch();
  if(locked){dragLook=false;delete canvas.dataset.lockError;}
  else if(wasLocked&&mode==='walk')changeMode('paused');
  wasLocked=locked;
  updateLookUI();
});
document.addEventListener('pointerlockerror',()=>{mousePoint=null;updateLookUI();});
const movementKeys=new Set(['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight']);
window.addEventListener('keydown',e=>{
  if(detailOpen())return;
  if(mode==='entering'){if(movementKeys.has(e.code)||e.key==='Escape')e.preventDefault();return;}
  if(e.key==='Escape'){if(mode==='story')closeStory();else changeMode('paused');return;}
  if(ui.guide.open||mode==='story')return;
  if(e.code==='KeyE'&&aimed){openStory();return;}
  if(e.code==='KeyE'&&doorAimed){if(!e.repeat)toggleDoor();return;}
  if(document.activeElement!==canvas||!entered||!visitReady||!movementKeys.has(e.code))return;
  e.preventDefault();if(mode!=='walk'){changeMode('walk');if(mouseLook)void requestLookLock();}keys.add(e.code);
});
window.addEventListener('keyup',e=>keys.delete(e.code));
window.addEventListener('blur',exitWalk);
document.addEventListener('visibilitychange',()=>{if(document.hidden)exitWalk();last=performance.now();});
for(const b of document.querySelectorAll('[data-move]')){
  b.addEventListener('pointerdown',e=>{if(!loaded||detailOpen()||!visitReady||ui.guide.open||mode==='story'||mode==='entering'||movementPointers.has(b))return;e.preventDefault();enter();if(mode!=='walk')changeMode('walk');movementPointers.set(b,e.pointerId);keys.add(b.dataset.move);b.setPointerCapture(e.pointerId);});
  for(const event of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(event,e=>{if(movementPointers.get(b)!==e.pointerId)return;movementPointers.delete(b);keys.delete(b.dataset.move);});
}
function updateAim(now){
  projected.copy(storyPoint).project(camera);toStory.subVectors(storyPoint,camera.position);
  const distance=toStory.length();
  let available=manifest.storyEnabled!==false&&entered&&mode!=='story'&&mode!=='guide'&&mode!=='entering'&&mode!=='observe'&&!ui.guide.open&&distance<3.5&&projected.z<1&&Math.abs(projected.x)<1&&Math.abs(projected.y)<1;
  if(available){ray.set(camera.position,toStory.normalize());const hit=walker.bvh.raycastFirst(ray,THREE.DoubleSide);if(hit&&hit.distance<distance-.5)available=false;}
  hotspot.hidden=!available;
  let candidate=available&&Math.hypot(projected.x*innerWidth,projected.y*innerHeight)<(aimed?110:80);
  if(!candidate)aimSince=0;else if(!aimSince)aimSince=now;
  aimed=candidate&&now-aimSince>100;
  doorProjected.copy(doorPoint).project(camera);
  const doorAvailable=visitReady&&entered&&mode!=='story'&&mode!=='guide'&&mode!=='entering'&&mode!=='observe'&&!ui.guide.open&&camera.position.distanceTo(doorPoint)<4.2&&doorProjected.z<1&&Math.abs(doorProjected.x)<.95&&Math.abs(doorProjected.y)<.95;
  doorAimed=doorAvailable&&Math.hypot(doorProjected.x*innerWidth,doorProjected.y*innerHeight)<140;
  doorHotspot.hidden=!doorAvailable;
  if(doorAvailable){doorHotspot.textContent=glassDoor.target?'合上玻璃门':'推开玻璃门';doorHotspot.style.left=`${(doorProjected.x*.5+.5)*innerWidth}px`;doorHotspot.style.top=`${(-doorProjected.y*.5+.5)*innerHeight+65}px`;}
  ui.reticle.classList.toggle('target',aimed||doorAimed);
  ui.aim.textContent=aimed?'点击 / E · 开启故事':doorAimed?`点击 / E · ${glassDoor.target?'合上':'推开'}玻璃门`:'';
  lastAim=aimed;
  if(available&&!mouseLook){hotspot.style.left=`${(projected.x*.5+.5)*innerWidth}px`;hotspot.style.top=`${(-projected.y*.5+.5)*innerHeight}px`;}

}
function percentile(values,p){if(!values.length)return 0;const sorted=[...values].sort((a,b)=>a-b);return sorted[Math.floor((sorted.length-1)*p)];}
function metrics(){return {frameP50:percentile(frameTimes,.5),frameP95:percentile(frameTimes,.95),updateP95:percentile(updateTimes,.95),renderP95:percentile(renderTimes,.95),sampleCount:frameTimes.length,resolution};}
// Smooth sampling preserves baked edges; anisotropy helps oblique floor/wall views.
function configureMaterialTextures(material){
 for(const key of ['map','normalMap','roughnessMap','metalnessMap','emissiveMap']){
  const texture=material[key];if(!texture)continue;
  texture.magFilter=THREE.LinearFilter;
  texture.minFilter=THREE.LinearMipmapLinearFilter;
  texture.generateMipmaps=true;
  texture.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  texture.needsUpdate=true;
 }
}
async function load(){try{manifest=await(await fetch('/scene_manifest.json')).json();for(const [id,view] of Object.entries(manifest.views))Object.assign(views[id],view);camera.position.fromArray(views.entrance.p);const storyAnchor=manifest.anchors.find(a=>a.id==='HOTSPOT_Story');storyPoint.fromArray(storyAnchor.position);doorPoint.fromArray(manifest.layout.doorPoint);const gltf=await new GLTFLoader().loadAsync('/'+manifest.model,e=>{if(e.total)$('#load').textContent=`载入模型 ${Math.round(e.loaded/e.total*100)}%`});
 const geometryRepair=repairExhibitGeometry(gltf.scene,manifest,{replaceNumberPlates:true});
 walker=new GalleryWalk(manifest.colliders);
 gltf.scene.traverse(o=>{if(!o.isMesh)return;if(o.visible&&o.userData.exhibitId)numberMeshes.push(o);if(o.material?.name.startsWith('Baked diffuse')){o.material=new THREE.MeshBasicMaterial({map:o.material.emissiveMap,color:o.material.emissive.clone().multiplyScalar(.79)});}const mats=Array.isArray(o.material)?o.material:[o.material];for(const m of mats){if(!m.transparent)m.side=THREE.FrontSide;if(m.name.toLowerCase().includes('glass')){m.transmission=0;m.forceSinglePass=true;m.transparent=true;m.opacity=.055;m.depthWrite=false;m.roughness=.035;m.envMapIntensity=.45;m.color.set(0xcde5ee);m.needsUpdate=true;}if(m.name.includes('Idle screen')){m.color.set(0x52695c);m.emissive.set(0x71876f);m.emissiveIntensity=.35;storyMaterials.push(m);}configureMaterialTextures(m);}});scene.add(gltf.scene);glassDoor=new SlidingGlassDoor(gltf.scene);atmosphere=addReferenceAtmosphere(scene,renderer,gltf.scene);scene.background=new THREE.Color(0x07121d);
 for(const l of manifest.lights.filter(l=>l.type==='SPOT'&&l.name.includes('Gallery')).slice(0,4)){const light=new THREE.SpotLight(new THREE.Color(...l.color),10,8,Math.PI/5,.6,2);light.position.fromArray(l.position);light.target.position.set(l.position[0],.5,l.position[2]);scene.add(light,light.target);}
 loaded=true;loadedAt=performance.now();initialViewQuaternion.copy(camera.quaternion);player.copy(camera.position);document.body.dataset.ready='true';canvas.dataset.collision='BVH capsule';$('#walk').disabled=false;$('#enter').disabled=false;$('#enter').textContent='进入展厅 →';$('#load').textContent='光影已就绪 · 可自由参观';window.museum={ready:true,renderer,scene,camera,navigate,selectExhibit,door:glassDoor,getVisitState:()=>({entered,visitReady,mode,entryPhase:entrySequence?.phase,observationPhase:observation?.phase,selectedExhibit:selectedExhibit?.id}),getMetrics:()=>({...metrics(),drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,position:camera.position.toArray()})};
 artifactUI=createArtifactInteraction({
   canvas,camera,scene,assignments:artifactAssignments,
   captureFrame:()=>{renderer.render(scene,camera);return canvas;},
   getMode:()=>mode,
   isEntered:()=>entered,
   isBlocked:()=>labelUI?.isOpen||hologramUI?.isEngaged()||!loaded||mode==='entering'||mode==='story'||ui.guide.open||doorAimed||aimed,
   colliders:manifest.colliders,
   getPriorityTargets:()=>[...numberMeshes,...(labelUI?.records.map(record=>record.mesh)||[])],
   onOpen:()=>changeMode('paused'),
   onClose:()=>{changeMode('paused');last=performance.now();canvas.focus({preventScroll:true});}
 });
 // Keep central tour framed on the floating artifact, with room outside its collider.
 manifest.observationTargets.hero.distance=3;
 manifest.observationTargets.hero.targetHeight=1.8;
 const stagePosition=manifest.centralPlatform.position;
 hologramStage=createHologramStage({scene,position:stagePosition,mobile:matchMedia('(pointer:coarse)').matches||innerWidth<700,
  prepareForRender:async(object,signal)=>{
   signal.throwIfAborted();
   await renderer.compileAsync(object,camera,scene);
   signal.throwIfAborted();
   // The floor uses linear offscreen shading, a different shader variant from
   // the screen. Warm it too, restoring the render target before yielding.
   const reflectionTarget=atmosphere?.reflector.getRenderTarget();
   if(reflectionTarget){
    const previousTarget=renderer.getRenderTarget();let ready;
    try{renderer.setRenderTarget(reflectionTarget);ready=renderer.compileAsync(object,camera,scene);}
    finally{renderer.setRenderTarget(previousTarget);}
    await ready;signal.throwIfAborted();
   }
  },
  loadModel:async(record,signal)=>{
   await hallArtifactsReady;
   signal.throwIfAborted();
   const artifact=artifactRecords.find(item=>item.assignment.artifactId===record.artifactId);
   if(!artifact)throw new Error('馆藏模型暂未载入');
   return cloneHallArtifactForHologram(artifact);
  }
 });
 const stageView={getCurrent:()=>hologramStage.getCurrent(),getState:()=>({...hologramStage.getState(),...(libraryError&&!hologramStage.getCurrent()?{status:'error',error:libraryError}:{}),libraryLoading:libraryBusy})};
 hologramUI=createHologramInteraction({canvas,camera,scene,stage:stageView,position:stagePosition,colliders:manifest.colliders,
  isAvailable:()=>loaded&&entered&&(visitReady||canvas.dataset.observationPhase==='complete')&&['walk','paused'].includes(mode)&&!artifactUI?.isOpen()&&!labelUI?.isOpen&&!ui.guide.open&&!doorAimed&&!aimed,
  onOpen:()=>{changeMode('paused');hotspot.hidden=true;doorHotspot.hidden=true;},
  onView:(id,options)=>artifactUI.open(id,options)
 });
 window.museum.getHologram=()=>({...stageView.getState(),interaction:hologramUI.getState(),model:hologramStage.getCurrent()});
 window.museum.getGeometryRepair=()=>geometryRepair;
 labelUI=createExhibitLabels({scene,camera,canvas,assignments:artifactAssignments,
  isAvailable:()=>loaded&&entered&&visitReady&&['walk','paused'].includes(mode)&&!artifactUI?.isOpen()&&!hologramUI?.isOpen()&&!ui.guide.open,
  onOpen:()=>{changeMode('paused');hotspot.hidden=true;doorHotspot.hidden=true;},
  onClose:()=>{changeMode('paused');last=performance.now();},
  onView:id=>artifactUI.open(id)
 });
 window.museum.getLabels=()=>({open:labelUI.isOpen,records:labelUI.records.map(record=>({artifactId:record.assignment.artifactId,url:record.url,position:record.mesh.position.toArray()}))});
 window.museum.artifactsReady=false;
 const hallArtifactsReady=loadHallArtifacts({scene,renderer,manifest,onArtifact:record=>{
   artifactRecords.push(record);
   canvas.dataset.artifactCount=String(artifactRecords.length);
   const target=record.assignment.cabinetId==='story'
     ?manifest.observationTargets.story
     :manifest.exhibits.find(exhibit=>exhibit.id===record.assignment.cabinetId);
   if(target)target.targetHeight=record.center.y;
 }}).then(({records,failures})=>{
   artifactRecords=records;artifactFailures=failures;
   window.museum.artifactsReady=true;
   canvas.dataset.artifactCount=String(records.length);
   canvas.dataset.artifactFailures=String(failures.length);
   if(failures.length)notify('部分文物暂未载入，可以继续参观或刷新重试');
 }).catch(error=>{
   canvas.dataset.artifactFailures='7';
   console.error('文物载入失败',error);
   notify('文物暂未载入，请刷新重试');
 });
 refreshHologramLibrary();
 window.museum.getArtifacts=()=>({records:artifactRecords.map(record=>({
   artifactId:record.assignment.artifactId,cabinetId:record.assignment.cabinetId,
   bounds:{min:record.bounds.min.toArray(),max:record.bounds.max.toArray()}
 })),failures:artifactFailures});
 }catch(e){console.error(e);$('#load').textContent='展厅加载失败，请刷新重试';$('#status').textContent=e.message;}}
load();
let frameRequest=0;
function frame(now){
  frameRequest=requestAnimationFrame(frame);
  const elapsed=(now-last)/1000,dt=Math.min(elapsed,.06);last=now;
  if(document.hidden||detailOpen())return;
  if(loaded&&doorReturnPending){
    doorReturnPending=false;
    if(mode!=='entering'&&glassDoor.target===1&&glassDoor.progress===1)returnToWelcome();
  }
  camera.position.y-=bobOffset;bobOffset=0;
  const beforeX=camera.position.x,beforeZ=camera.position.z;
  const updateStart=performance.now();
  if(!loaded){renderer.render(scene,camera);return;}
  if(mode==='entering'){
    if(entrySequence.update(camera,glassDoor,dt)){
      entrySequence=null;visitReady=true;setEntryControls(false);changeMode('walk',!matchMedia('(pointer:coarse)').matches);
      canvas.focus();canvas.dataset.entryPhase='complete';$('#location').textContent='入口序厅 · 可自由参观';
    }else{
      canvas.dataset.entryPhase=entrySequence.phase;
      $('#location').textContent=entrySequence.phase==='opening'?'推门入馆 · 正在打开玻璃门':entrySequence.phase==='walking'?'推门入馆 · 正在走入展厅':'推门入馆 · 正在合上玻璃门';
    }
  }else if(mode==='observe'){
    const finished=observation.update(camera,dt),phase=observation.phase;
    canvas.dataset.observationPhase=phase;
    $('#location').textContent=selectedExhibit.label+' · '+(phase==='left'?'左侧观察':phase.startsWith('right')?'右侧观察':phase==='front'?'移向正视位置':'正视图');
    if(finished){changeMode('paused');canvas.dataset.observationPhase='complete';}
  }else if(mode==='guide'&&route.length){
    const target=route[0],distance=camera.position.distanceTo(target);
    camera.position.lerp(target,Math.min(1,1-Math.exp(-3*dt),dt*2.6/Math.max(distance,.001)));
    oldQ.copy(camera.quaternion);camera.lookAt(lookTarget);wantedQ.copy(camera.quaternion);camera.quaternion.copy(oldQ).slerp(wantedQ,1-Math.exp(-5*dt));
    if(distance<.008){camera.position.copy(target);route.shift();}
    if(!route.length){camera.lookAt(lookTarget);if(pendingExhibit)beginObservation(pendingExhibit);else changeMode('paused');}
  }else if(mode==='walk'){
    if(edgeTurn&&mouseLook&&mousePoint&&document.pointerLockElement!==canvas){
      yaw-=edgeYawRate(mousePoint.x,innerWidth)*dt;
    }
    // Render this frame with the latest mouse/touch input, without a smoothing tail.
    camera.rotation.set(pitch,yaw,0);
    const f=Number(keys.has('KeyW')||keys.has('ArrowUp'))-Number(keys.has('KeyS')||keys.has('ArrowDown'));
    const r=Number(keys.has('KeyD')||keys.has('ArrowRight'))-Number(keys.has('KeyA')||keys.has('ArrowLeft'));
    walker.speed=walkSpeed;
    direction.set(-Math.sin(yaw)*f+Math.cos(yaw)*r,0,-Math.cos(yaw)*f-Math.sin(yaw)*r).normalize();
    // Subdivide collisions at <= 1/120 s, then show the current resolved position.
    walker.update(player,direction,dt);
    camera.position.copy(player);
  }
  const travelled=Math.hypot(camera.position.x-beforeX,camera.position.z-beforeZ);
  const walkingNow=mode==='walk'&&travelled>.0001;
  if(reduced){bobEnvelope=0;bobOffset=0;}
  else{
    const strength=walkingNow?Math.min(1,travelled/Math.max(dt,.001)/WALK_SETTINGS.speed):0;
    bobEnvelope=THREE.MathUtils.lerp(bobEnvelope,strength,1-Math.exp(-16*dt));
    if(walkingNow)bobPhase=(bobPhase+travelled*Math.PI*2/2.2)%(Math.PI*2);
    bobOffset=Math.sin(bobPhase)*.008*bobEnvelope;
    if(Math.abs(bobOffset)<.00001)bobOffset=0;
  }
  bobPeak=Math.max(bobPeak,Math.abs(bobOffset));maxWalkSpeed=Math.max(maxWalkSpeed,walker.speed);
  camera.position.y+=bobOffset;
  uiTime+=dt;
  if(uiTime>.05){
    updateAim(now);
    hologramUI?.update();
    labelUI?.update();
    artifactUI?.update({selectedExhibit,observationPhase:canvas.dataset.observationPhase});
  if(hologramStage){const hs=hologramStage.getState();Object.assign(canvas.dataset,{hologramId:hs.currentId||'',hologramPhase:hs.phase||hs.status,hologramPaused:String(hs.paused),hologramCount:String(hs.count)});}
    uiTime=0;
  }
  for(const material of storyMaterials)material.emissiveIntensity=THREE.MathUtils.lerp(material.emissiveIntensity,mode==='story'?.8:.35,1-Math.exp(-3*dt));
  if(glassDoor.update(dt)&&mode!=='entering')doorReturnPending=true;
  atmosphere?.update(dt,reduced);
  hologramStage?.update(dt,{paused:Boolean(hologramUI?.isEngaged()||ui.guide.open||mode==='story'),reduced});

  const cost=performance.now()-updateStart;
  // Resizing clears the drawing buffer. Do it immediately BEFORE drawing, never
  // after the completed frame; setPixelRatio already resizes to the current size.
  if(pendingResolution!==null){
    resolution=pendingResolution;pendingResolution=null;
    renderer.setPixelRatio(resolution);
  }
  const renderStart=performance.now();renderer.render(scene,camera);const renderCost=performance.now()-renderStart;
  if(!document.hidden&&now-loadedAt>2500&&elapsed<.25){
    frameTimes.push(elapsed*1000);updateTimes.push(cost);renderTimes.push(renderCost);
    if(frameTimes.length>180){frameTimes.shift();updateTimes.shift();renderTimes.shift();}
  }
  qualityTime+=dt;
  if(qualityTime>1){
    const m=metrics();
    if(m.sampleCount>=30&&m.frameP95>24)slowWindows++;else slowWindows=0;
    if(slowWindows>=2&&resolution>1){pendingResolution=1;frameTimes.length=0;updateTimes.length=0;renderTimes.length=0;slowWindows=0;}
    else if(slowWindows>=3&&m.frameP95>35&&resolution>.85){pendingResolution=.85;frameTimes.length=0;updateTimes.length=0;renderTimes.length=0;slowWindows=0;}
    Object.assign(canvas.dataset,{position:camera.position.toArray().map(v=>v.toFixed(3)).join(','),direction:[yaw,pitch].map(v=>v.toFixed(4)).join(','),mode,bob:bobOffset.toFixed(4),bobPeak:bobPeak.toFixed(4),maxWalkSpeed,speed:walker.speed,contacts:walker.contacts,queries:walker.queries,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,frameP50:m.frameP50.toFixed(2),frameP95:m.frameP95.toFixed(2),updateP95:m.updateP95.toFixed(2),renderP95:m.renderP95.toFixed(2),samples:m.sampleCount,dpr:resolution});
    qualityTime=0;
  }
}
frameRequest=requestAnimationFrame(frame);
window.addEventListener('resize',()=>{mousePoint=null;camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});

window.addEventListener('pagehide',event=>{
 cancelAnimationFrame(frameRequest);frameRequest=0;resetInput();
 if(event.persisted)return;
 libraryAbort.abort();labelUI?.dispose();artifactUI?.dispose();hologramUI?.dispose();hologramStage?.dispose();
});
window.addEventListener('pageshow',event=>{
 if(!event.persisted)return;
 last=performance.now();
 if(!frameRequest)frameRequest=requestAnimationFrame(frame);
});
