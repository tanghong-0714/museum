import * as THREE from 'three';

export function createAwakeningEffects({group,material,kind}){
 const uniforms={uWakePower:{value:0},uWakeHeight:{value:-1.5}};
 if(kind==='sword'){
  const prior=material.onBeforeCompile;
  material.onBeforeCompile=shader=>{
   prior?.call(material,shader);Object.assign(shader.uniforms,uniforms);
   shader.vertexShader='varying float vWakeHeight;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvWakeHeight=(modelMatrix*vec4(transformed,1.0)).y;');
   shader.fragmentShader='varying float vWakeHeight;uniform float uWakePower;uniform float uWakeHeight;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\nfloat wakeBand=exp(-pow((vWakeHeight-uWakeHeight)/0.13,2.0)); totalEmissiveRadiance+=vec3(1.0,0.72,0.31)*wakeBand*uWakePower;');
  };
  material.customProgramCacheKey=()=> 'sword-wake-R35';material.needsUpdate=true;
 }
 const trails=new THREE.Group();trails.visible=false;
 if(kind==='horse'){
  for(let i=0;i<5;i++){
   const pts=Array.from({length:48},(_,j)=>{const t=j/47;return new THREE.Vector3(-1.45+t*2.7,-.8+i*.09+Math.sin(t*Math.PI)*.09,-.35-i*.06);});
   const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts),new THREE.LineBasicMaterial({color:0x94d4df,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending}));trails.add(line);
  }group.add(trails);
 }
 return {update(player){const t=player?.time||0,active=player?.state==='playing',envelope=active?Math.sin(Math.PI*Math.min(1,t/Math.max(.1,player.duration))):0;
  uniforms.uWakePower.value=envelope*.9;uniforms.uWakeHeight.value=-1.45+2.9*Math.min(1,t/5.2);
  trails.visible=active;trails.children.forEach((line,i)=>{line.material.opacity=envelope*(.08+(i%2)*.07);line.position.x=Math.sin(t*1.8+i*.7)*.12;});
 }};
}
