import * as THREE from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createParticles,addReveal,seededRandom,sampleSurfaceAsync} from './particles.js';
import {createArtifactPerformance} from './artifact-performance.js';
import {createAwakeningEffects} from './awakening-effects.js';


// Keep each mesh and its material groups intact. Particle batches use the same
// material/UV pairing as their source triangles, including untextured surfaces.
export function prepareDynamicExhibit(root,mobile=false,rotationY=0){
 root.updateMatrixWorld(true);
 const pieces=[],bounds=new THREE.Box3();
 root.traverse(source=>{
  if(!source.isMesh||!source.geometry.attributes.position)return;
  const geometry=source.geometry.clone();
  geometry.applyMatrix4(source.matrixWorld);geometry.rotateY(rotationY);
  if(!geometry.attributes.normal)geometry.computeVertexNormals();
  geometry.computeBoundingBox();bounds.union(geometry.boundingBox);
  pieces.push({source,geometry});
 });
 if(!pieces.length||bounds.isEmpty())throw new Error('模型中未找到可显示的网格');
 const center=bounds.getCenter(new THREE.Vector3()),size=bounds.getSize(new THREE.Vector3());
 const scale=2.65/Math.max(size.x,size.y,size.z,.00001);
 bounds.min.sub(center).multiplyScalar(scale);bounds.max.sub(center).multiplyScalar(scale);
 const mesh=new THREE.Group(),skins=[],particles=[],white=new THREE.DataTexture(new Uint8Array([255,255,255,255]),1,1);
 white.needsUpdate=true;
 let triangles=0;
 const totalTriangles=pieces.reduce((sum,piece)=>sum+(piece.geometry.index?.count??piece.geometry.attributes.position.count)/3,0);
 for(const {source,geometry} of pieces){
  geometry.translate(-center.x,-center.y,-center.z);geometry.scale(scale,scale,scale);geometry.computeBoundingSphere();
  const originals=Array.isArray(source.material)?source.material:[source.material];
  const materials=originals.map(material=>{const cloned=material.clone();skins.push(addReveal(cloned,bounds));return cloned;});
  mesh.add(new THREE.Mesh(geometry,Array.isArray(source.material)?materials:materials[0]));
  const ranges=Array.isArray(source.material)?geometry.groups:[{start:0,count:geometry.index?.count??geometry.attributes.position.count,materialIndex:0}];
  for(const range of ranges){
   const material=materials[range.materialIndex];if(!material||range.count<3)continue;
   const sampleGeometry=geometry.clone();
   const indices=geometry.index?Array.from({length:range.count},(_,i)=>geometry.index.getX(range.start+i)):Array.from({length:range.count},(_,i)=>range.start+i);
   sampleGeometry.setIndex(indices);
   const count=Math.max(1,Math.round((mobile?20000:60000)*(range.count/3)/Math.max(1,totalTriangles)));
   const particle=createParticles(sampleGeometry,material.map||white,count,bounds);
   particle.uniforms.uMaterialColor={value:material.color?.clone()||new THREE.Color(0xffffff)};
   particle.points.material.fragmentShader=particle.points.material.fragmentShader.replace('uniform sampler2D uMap;','uniform sampler2D uMap; uniform vec3 uMaterialColor;').replace('vec3 col=texture2D(uMap,vUv).rgb;','vec3 col=texture2D(uMap,vUv).rgb * uMaterialColor;');
   particles.push(particle);sampleGeometry.dispose();
  }
  triangles+=(geometry.index?.count??geometry.attributes.position.count)/3;
 }
 return {mesh,skins,particles,bounds,triangles,white};
}

export async function createScene(canvas,onProgress,onInteract,exhibit){
 await new Promise(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
 const mobile=matchMedia('(max-width:760px)').matches;
 const viewingDistance=exhibit.model[mobile?'distanceMobile':'distanceDesktop']??(mobile?5.9:5.5);
 const detailDistance=Math.min(mobile?5.3:4.8,viewingDistance*.9);
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,mobile?1.4:1.7));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=exhibit.model.exposure;
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(35,1,.1,60);
 let focusTransition=null,rotationTransition=null,ambientPaused=false,ambientTime=0,previousTime=0,viewingMode='view';
 const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;controls.dampingFactor=.075;controls.enablePan=false;controls.minDistance=3.3;controls.maxDistance=9;controls.maxPolarAngle=Math.PI*.82;controls.minPolarAngle=.2;controls.addEventListener('start',()=>{focusTransition=null;onInteract();});
 canvas.style.touchAction='none';
 const group=new THREE.Group();scene.add(group);
 const pmrem=new THREE.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.04);scene.environment=env.texture;scene.environmentIntensity=.32;room.dispose();pmrem.dispose();
 scene.add(new THREE.HemisphereLight(0xd5e7fa,0x30435a,1.65));
 const key=new THREE.DirectionalLight(0xfff3db,3.0);key.position.set(-3,5,5);scene.add(key);
 const fill=new THREE.DirectionalLight(0x8bb8dd,1.4);fill.position.set(4,1,-2);scene.add(fill);
 const loader=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
 let gltf,performancePlayer=null,animatedMesh=null,awakeningEffects=null,performanceTransform=null;
 try{
  if(exhibit.performance){
   try{gltf=await loader.loadAsync(exhibit.performance[mobile?'mobile':'desktop'],onProgress);if(!gltf.animations.length)throw Error('Animation missing');}
   catch{gltf=null;}
  }
  gltf??=await loader.loadAsync(exhibit.model[mobile?'mobile':'desktop'],onProgress);
 }catch(error){controls.dispose();env.dispose();renderer.dispose();throw error;}
 onProgress({phase:'preparing'});
 await new Promise(resolve=>requestAnimationFrame(()=>setTimeout(resolve,0)));
 gltf.scene.updateMatrixWorld(true);const meshes=[];gltf.scene.traverse(o=>{if(o.isMesh)meshes.push(o);});const source=meshes[0];
 let mesh,geometry,material,bounds,skins,particles,triangleCount,dynamicWhite;
 if(exhibit.performance&&gltf.animations.length&&source?.isSkinnedMesh){
 const primary=gltf.animations.find(a=>a.name===exhibit.performance.defaultClip)||gltf.animations[0];
 performancePlayer=createArtifactPerformance(gltf.scene,primary,gltf.animations);
 const oriented=new THREE.Group();oriented.rotation.y=exhibit.performance.rotationY??exhibit.model.rotationY;oriented.add(gltf.scene);
 animatedMesh=new THREE.Group();animatedMesh.add(oriented);animatedMesh.updateMatrixWorld(true);
 const sourceBounds=new THREE.Box3().setFromObject(animatedMesh,true),center=sourceBounds.getCenter(new THREE.Vector3()),size=sourceBounds.getSize(new THREE.Vector3()),scale=2.65/Math.max(size.x,size.y,size.z);
 animatedMesh.scale.setScalar(scale);animatedMesh.position.copy(center).multiplyScalar(-scale);animatedMesh.updateMatrixWorld(true);source.skeleton.update();
 performanceTransform=gltf.scene.matrixWorld.clone();
 geometry=new THREE.BufferGeometry();const positions=new Float32Array(source.geometry.attributes.position.count*3),vertex=new THREE.Vector3();
 for(let i=0;i<positions.length/3;i++){source.getVertexPosition(i,vertex).applyMatrix4(source.matrixWorld);vertex.toArray(positions,i*3);}
 geometry.setAttribute('position',new THREE.BufferAttribute(positions,3));geometry.setAttribute('uv',source.geometry.attributes.uv.clone());
 if(source.geometry.index)geometry.setIndex(source.geometry.index.clone());geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
 material=source.material.clone();material.roughness=exhibit.model.roughness;material.metalness=exhibit.model.metalness;material.envMapIntensity=.42;
 source.material=material.clone();source.frustumCulled=false;
 awakeningEffects=createAwakeningEffects({group,material:source.material,kind:exhibit.performance.kind});
 mesh=new THREE.Mesh(geometry,material);group.add(mesh,animatedMesh);animatedMesh.visible=false;
 bounds=geometry.boundingBox.clone();
 const count=mobile?20000:60000,samples=await sampleSurfaceAsync(geometry,count),skin=addReveal(material,bounds),particle=createParticles(geometry,material.map,count,bounds,samples);
 skins=[skin];particles=[particle];group.add(particle.points);triangleCount=geometry.index?geometry.index.count/3:geometry.attributes.position.count/3;
 }else if(exhibit.dynamic){
  const prepared=prepareDynamicExhibit(gltf.scene,mobile,exhibit.model.rotationY||0);
  ({mesh,skins,particles,bounds}=prepared);triangleCount=prepared.triangles;dynamicWhite=prepared.white;
  group.add(mesh);for(const particle of particles)group.add(particle.points);
 }else{
 if(meshes.length!==1||Array.isArray(source?.material)||!source?.material.map)throw new Error('请先将模型预处理为单网格、单贴图的网页资产');
 if(!source)throw new Error('模型中未找到可显示的网格');
 geometry=new THREE.BufferGeometry();
 for(const name of ['position','normal','uv']){const a=source.geometry.getAttribute(name);if(!a)continue;const values=new Float32Array(a.count*a.itemSize);for(let i=0;i<a.count;i++){values[i*a.itemSize]=a.getX(i);values[i*a.itemSize+1]=a.getY(i);if(a.itemSize>2)values[i*a.itemSize+2]=a.getZ(i);}geometry.setAttribute(name,new THREE.BufferAttribute(values,a.itemSize));}
 if(source.geometry.index)geometry.setIndex(source.geometry.index.clone());
 geometry.applyMatrix4(source.matrixWorld);geometry.rotateY(exhibit.model.rotationY);geometry.computeBoundingBox();
 const center=geometry.boundingBox.getCenter(new THREE.Vector3()),size=geometry.boundingBox.getSize(new THREE.Vector3()),scale=2.65/Math.max(size.x,size.y,size.z);
 geometry.translate(-center.x,-center.y,-center.z);geometry.scale(scale,scale,scale);geometry.computeBoundingBox();geometry.computeBoundingSphere();
 material=source.material.clone();material.roughness=exhibit.model.roughness;material.metalness=exhibit.model.metalness;material.envMapIntensity=.42;
 mesh=new THREE.Mesh(geometry,material);group.add(mesh);
 bounds=geometry.boundingBox;
 const count=mobile?20000:60000;
 const samples=await sampleSurfaceAsync(geometry,count);
 const skin=addReveal(material,bounds),particle=createParticles(geometry,material.map,count,bounds,samples);group.add(particle.points);
 skins=[skin];particles=[particle];triangleCount=geometry.index?geometry.index.count/3:geometry.attributes.position.count/3;
 }
 for(const particle of particles)particle.uniforms.uPixelRatio.value=renderer.getPixelRatio();
 if(!performancePlayer)gltf.scene.traverse(o=>{if(o.isMesh){o.geometry.dispose();if(Array.isArray(o.material))o.material.forEach(m=>m.dispose());else o.material.dispose();}});
 // Quiet atmospheric dust; all motion is tied to the same pausable clock.
 const rng=seededRandom(821),dustPositions=new Float32Array((mobile?180:450)*3);
 for(let i=0;i<dustPositions.length;i+=3){dustPositions[i]=(rng()-.5)*11;dustPositions[i+1]=(rng()-.5)*6;dustPositions[i+2]=-2-rng()*5;}
 const dustGeo=new THREE.BufferGeometry();dustGeo.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));
 const dust=new THREE.Points(dustGeo,new THREE.PointsMaterial({color:0x7496a8,size:.012,transparent:true,opacity:.38,depthWrite:false}));scene.add(dust);
 const mistUniform={uTime:{value:0}};
 const mist=new THREE.Mesh(new THREE.PlaneGeometry(10,1.4),new THREE.ShaderMaterial({transparent:true,depthWrite:false,uniforms:mistUniform,vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',fragmentShader:'varying vec2 vUv; uniform float uTime; void main(){float band=exp(-pow((vUv.y-.5)*5.,2.));float wave=.5+.22*sin(vUv.x*17.+uTime*.07)+.18*sin(vUv.x*31.-uTime*.05+vUv.y*5.);float edge=smoothstep(0.,.2,vUv.x)*(1.-smoothstep(.8,1.,vUv.x));gl_FragColor=vec4(.34,.47,.55,band*wave*edge*.075);}'}));mist.position.set(0,-1.5,-2.5);scene.add(mist);
 // Local-space surface anchors, obtained by casting onto the supplied mesh.
 const anchors=exhibit.anchors.map(a=>({...a}));
 const ray=new THREE.Raycaster(),fallbackNormal=new THREE.Vector3(0,0,1);
 for(const a of anchors){ray.set(new THREE.Vector3(a.x,a.y,4),new THREE.Vector3(0,0,-1));const hit=ray.intersectObject(mesh,true)[0];a.position=hit?hit.point:new THREE.Vector3(a.x,a.y,.25);a.normal=hit?hit.face.normal.clone():fallbackNormal.clone();}
 function reset(){focusTransition=null;rotationTransition=null;group.rotation.set(0,-.12,0);camera.position.set(.24,.24,viewingDistance);controls.target.set(0,0,0);controls.update();}
 function flip(){
  if(rotationTransition)return;
  const offset=camera.position.clone().sub(controls.target),frontAngle=group.rotation.y-Math.atan2(offset.x,offset.z)+Math.atan2(.24,viewingDistance);
  // Return the camera to its front framing so a prior orbit cannot turn a flip edge-on.
  reset();group.rotation.y=frontAngle;
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){group.rotation.y=frontAngle+Math.PI;return;}
  rotationTransition={started:performance.now(),from:frontAngle,to:frontAngle+Math.PI};
 }
 function focusFeature(index){
  if(!anchors[index])return;
  rotationTransition=null;group.rotation.set(0,-.12,0);group.updateMatrixWorld(true);
  const target=anchors[index].position.clone().applyMatrix4(group.matrixWorld).multiplyScalar(.32);
  const position=target.clone().add(new THREE.Vector3(index===0?-.28:index===1?.28:.1,.15,detailDistance));
  if(matchMedia('(prefers-reduced-motion:reduce)').matches){focusTransition=null;camera.position.copy(position);controls.target.copy(target);controls.update();return;}
  focusTransition={started:performance.now(),fromCamera:camera.position.clone(),fromTarget:controls.target.clone(),position,target};
 }
 function hitTest(x,y){group.updateMatrixWorld(true);camera.updateMatrixWorld(true);ray.setFromCamera(new THREE.Vector2(x*2-1,1-y*2),camera);return ray.intersectObject(mesh,true).length>0;}
 function safeFrame(){
  controls.minDistance=viewingMode==='chat'&&canvas.clientWidth>760?Math.max(3.3,2.7/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*Math.min(1,canvas.clientWidth*.36/Math.max(1,canvas.clientHeight)))):3.3;
  const offset=camera.position.clone().sub(controls.target);if(offset.length()<controls.minDistance)camera.position.copy(controls.target).add(offset.setLength(controls.minDistance));controls.update();
 }
 function resize(){const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();safeFrame();}
 const observer=new ResizeObserver(resize);observer.observe(canvas.parentElement);observer.observe(canvas);reset();resize();
 let surface=true;const projected=new THREE.Vector3(),world=new THREE.Vector3(),normal=new THREE.Vector3(),toward=new THREE.Vector3();
 function update(frame,time,auto,dt=0){
  performancePlayer?.update(dt);
  awakeningEffects?.update(performancePlayer);
  if(rotationTransition){const t=Math.min(1,(performance.now()-rotationTransition.started)/850),p=t*t*(3-2*t);group.rotation.y=THREE.MathUtils.lerp(rotationTransition.from,rotationTransition.to,p);if(t===1)rotationTransition=null;}
  if(focusTransition){const t=Math.min(1,(performance.now()-focusTransition.started)/650),p=t*t*(3-2*t);camera.position.lerpVectors(focusTransition.fromCamera,focusTransition.position,p);controls.target.lerpVectors(focusTransition.fromTarget,focusTransition.target,p);if(t===1)focusTransition=null;}
  for(const u of [...skins,...particles.map(particle=>particle.uniforms)]){u.uReveal.value=frame.reveal;u.uDissolve.value=frame.dissolve;}
  for(const particle of particles){particle.uniforms.uAssembly.value=frame.assembly;particle.uniforms.uTime.value=time;particle.uniforms.uSurface.value=surface?1:0;particle.points.visible=!surface||frame.reveal<.999||frame.dissolve>.001;}mesh.visible=surface;
  if(animatedMesh){animatedMesh.visible=surface&&performancePlayer.busy&&frame.reveal>=.999&&frame.dissolve<=.001;if(animatedMesh.visible)mesh.visible=false;}
  if(auto)group.rotation.y=-.12+Math.sin(time*.15)*.12;
  if(!ambientPaused)ambientTime+=Math.max(0,time-previousTime);previousTime=time;
  dust.rotation.y=ambientTime*.007;dust.position.y=Math.sin(ambientTime*.1)*.06;mistUniform.uTime.value=ambientTime;
  controls.update();  renderer.render(scene,camera);
 }
 let anchorStamp='',anchorCache=[];
 function projectAnchors(){const stamp=camera.position.toArray().join(',')+camera.quaternion.toArray().join(',')+camera.aspect+group.rotation.y+canvas.clientWidth+','+canvas.clientHeight;if(stamp===anchorStamp)return anchorCache;anchorStamp=stamp;anchorCache=anchors.map(a=>{world.copy(a.position).applyMatrix4(group.matrixWorld);normal.copy(a.normal).transformDirection(group.matrixWorld);toward.subVectors(camera.position,world).normalize();projected.copy(world).project(camera);
  ray.set(camera.position,toward.clone().negate());const hit=ray.intersectObject(mesh,true)[0];const occluded=hit&&hit.distance<camera.position.distanceTo(world)-.065;
  return {x:(projected.x*.5+.5)*canvas.clientWidth,y:(-.5*projected.y+.5)*canvas.clientHeight,visible:normal.dot(toward)>.12&&!occluded&&Math.abs(projected.x)<.94&&Math.abs(projected.y)<.93&&projected.z<1};});return anchorCache;}
 function keyboard(e){const keys=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-'];if(!keys.includes(e.key))return;e.preventDefault();focusTransition=null;onInteract();const offset=camera.position.clone().sub(controls.target),s=new THREE.Spherical().setFromVector3(offset);if(e.key==='ArrowLeft')s.theta-=.12;if(e.key==='ArrowRight')s.theta+=.12;if(e.key==='ArrowUp')s.phi=Math.max(.2,s.phi-.1);if(e.key==='ArrowDown')s.phi=Math.min(Math.PI*.82,s.phi+.1);if(['+','='].includes(e.key))s.radius=Math.max(controls.minDistance,s.radius*.9);if(e.key==='-')s.radius=Math.min(9,s.radius*1.1);camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(s));controls.update();}
 canvas.addEventListener('keydown',keyboard);
 // Reuse the live material programs and a single portrait throughout this exhibit.
 let portrait=null;
 function captureArtifact(){
  if(portrait)return portrait;
  const photo=document.createElement('canvas');photo.width=960;photo.height=960;
  const context=photo.getContext('2d');if(!context)return null;
  const photoScene=new THREE.Scene();photoScene.environment=scene.environment;photoScene.environmentIntensity=scene.environmentIntensity;
  for(const light of scene.children.filter(o=>o.isLight))photoScene.add(light.clone());
  // A consistent front three-quarter portrait keeps collectible cards readable after orbiting or flipping the exhibit.
  const specimen=mesh.clone(true);
  specimen.visible=true;specimen.rotation.set(0,-.12,0);photoScene.add(specimen);
  const photoCamera=new THREE.PerspectiveCamera(35,1,.1,60);
  const distance=(exhibit.dynamic?bounds.getBoundingSphere(new THREE.Sphere()).radius:geometry.boundingSphere.radius)/Math.sin(THREE.MathUtils.degToRad(17.5))*1.12;
  photoCamera.position.set(.24,.24,distance);photoCamera.lookAt(0,0,0);
  const savedSize=renderer.getSize(new THREE.Vector2()),savedRatio=renderer.getPixelRatio();
  const savedSkins=skins.map(skin=>[skin.uReveal.value,skin.uDissolve.value]);
  try{skins.forEach(skin=>{skin.uReveal.value=1;skin.uDissolve.value=0;});renderer.setPixelRatio(1);renderer.setSize(960,960,false);renderer.render(photoScene,photoCamera);context.drawImage(canvas,0,0);portrait=photo;return portrait;}
  finally{skins.forEach((skin,i)=>{[skin.uReveal.value,skin.uDissolve.value]=savedSkins[i];});renderer.setPixelRatio(savedRatio);renderer.setSize(savedSize.x,savedSize.y,false);renderer.render(scene,camera);}
 }
 function dispose(){performancePlayer?.dispose();source?.skeleton?.dispose();observer.disconnect();canvas.removeEventListener('keydown',keyboard);controls.dispose();const textures=new Set();scene.traverse(o=>{o.geometry?.dispose();for(const material of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){for(const value of Object.values(material))if(value?.isTexture)textures.add(value);material.dispose();}});textures.forEach(texture=>texture.dispose());dynamicWhite?.dispose();env.dispose();renderer.dispose();}
 onProgress({phase:'lighting'});
 await renderer.compileAsync(scene,camera);
 return {performancePlayer,projectPerformancePoint(point){const v=new THREE.Vector3(...point);if(performanceTransform)v.applyMatrix4(performanceTransform);v.applyMatrix4(group.matrixWorld).project(camera);return {x:canvas.offsetLeft+(v.x*.5+.5)*canvas.clientWidth,y:canvas.offsetTop+(-.5*v.y+.5)*canvas.clientHeight,visible:Math.abs(v.x)<.98&&Math.abs(v.y)<.98&&v.z<1};},captureArtifact,update,reset,flip,focusFeature,hitTest,anchors,projectAnchors,setViewingMode(value){viewingMode=value;safeFrame();},setAmbientPaused(value){ambientPaused=value;},setSurface(value){surface=value;},dispose,stats:{triangles:triangleCount,particles:particles.reduce((sum,particle)=>sum+particle.points.geometry.attributes.position.count,0),asset:mobile?'mobile':'desktop'},renderer,camera,group};
}
