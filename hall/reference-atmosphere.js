import * as THREE from 'three';
import {Reflector} from 'three/addons/objects/Reflector.js';

// One shared planar reflection provides the polished stone response in the references.
// Static architecture retains its denoised baked light and contact shadows underneath it.
export function addReferenceAtmosphere(scene,renderer,root){
  const shader={...Reflector.ReflectorShader,
    vertexShader:Reflector.ReflectorShader.vertexShader
      .replace('varying vec4 vUv;','varying vec4 vUv;\nvarying vec3 vFloorWorld;')
      .replace('vUv = textureMatrix * vec4( position, 1.0 );','vUv = textureMatrix * vec4( position, 1.0 );\nvFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;'),
    fragmentShader:Reflector.ReflectorShader.fragmentShader
      .replace('varying vec4 vUv;','varying vec4 vUv;\nvarying vec3 vFloorWorld;')
      .replace('vec4 base = texture2DProj( tDiffuse, vUv );',`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`)
      .replace('gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );',
        'gl_FragColor=vec4(base.rgb*.85,.26);')
  };
  const reflector=new Reflector(new THREE.PlaneGeometry(16,33),{
    textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader
  });
  reflector.name='R11 polished marble floor reflection';reflector.rotation.x=-Math.PI/2;
  reflector.position.set(0,.016,-5.5);reflector.material.transparent=true;reflector.material.depthWrite=false;
  reflector.renderOrder=1;scene.add(reflector);
  const animated=[],glassMeshes=[];
  // A camera change always refreshes the reflection in the current frame. Static views reuse it briefly.
  const reflectionPose={position:new THREE.Vector3(Infinity,Infinity,Infinity),quaternion:new THREE.Quaternion(),time:-Infinity};
  const renderReflection=reflector.onBeforeRender;
  reflector.onBeforeRender=function(activeRenderer,activeScene,activeCamera,...rest){
    const now=performance.now();
    const changed=reflectionPose.position.distanceToSquared(activeCamera.position)>1e-10||1-Math.abs(reflectionPose.quaternion.dot(activeCamera.quaternion))>1e-10;
    if(!changed&&now-reflectionPose.time<100)return;
    reflectionPose.position.copy(activeCamera.position);reflectionPose.quaternion.copy(activeCamera.quaternion);reflectionPose.time=now;
    const visible=glassMeshes.map(mesh=>mesh.visible);
    for(const mesh of glassMeshes)mesh.visible=false;
    try{return renderReflection.call(this,activeRenderer,activeScene,activeCamera,...rest);}
    finally{glassMeshes.forEach((mesh,i)=>mesh.visible=visible[i]);}
  };

  root.traverse(o=>{
    if(!o.isMesh)return;
    const materials=Array.isArray(o.material)?o.material:[o.material];
    if(materials.some(material=>material.name.toLowerCase().includes('glass')))glassMeshes.push(o);
    for(const m of materials){
      if(m.name.includes('hologram data curtain')){
        const curtain=new THREE.ShaderMaterial({
          uniforms:{pattern:{value:m.map},phase:{value:0}},
          transparent:true,depthWrite:false,side:THREE.DoubleSide,
          blending:THREE.AdditiveBlending,
          vertexShader:'varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',
          fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`
        });
        o.material=curtain;o.renderOrder=3;animated.push(curtain);
      }
      if(m.name.includes('cyan edge light')){
        m.color.set(0x0578ff);m.emissive.set(0x0578ff);m.emissiveIntensity=2.0;
      }
    }
  });
  // Empty showcases use their baked exhibit lighting; the removed artifacts need no live spotlights.
  let phase=0;
  return {reflector,update(dt,reduced){
    if(reduced)return;
    phase+=dt*.026;for(const material of animated)material.uniforms.phase.value=phase;
  }};
}
