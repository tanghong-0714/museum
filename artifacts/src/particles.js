import * as THREE from 'three';
import {sampleSurfaceData} from './surface-sampling.js';
export function seededRandom(seed=8841){return ()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};}
function surfaceAttributes(geometry) {
 const attributes = {};
 for (const name of ['position', 'normal', 'uv']) {
  const attribute = geometry.getAttribute(name);
  if (!attribute) continue;
  if (!attribute.isInterleavedBufferAttribute && !attribute.normalized) attributes[name] = attribute.array.slice();
  else {
   const values = new Float32Array(attribute.count * attribute.itemSize);
   for (let i = 0; i < attribute.count; i++) {
    values[i * attribute.itemSize] = attribute.getX(i);
    values[i * attribute.itemSize + 1] = attribute.getY(i);
    if (attribute.itemSize > 2) values[i * attribute.itemSize + 2] = attribute.getZ(i);
   }
   attributes[name] = values;
  }
 }
 if (geometry.index) attributes.index = geometry.index.array.slice();
 return attributes;
}
function sampleGeometry(samples) {
 const result = new THREE.BufferGeometry();
 result.setAttribute('position', new THREE.BufferAttribute(samples.positions, 3));
 result.setAttribute('normal', new THREE.BufferAttribute(samples.normals, 3));
 result.setAttribute('uv', new THREE.BufferAttribute(samples.uvs, 2));
 result.setAttribute('aSeed', new THREE.BufferAttribute(samples.seeds, 3));
 return result;
}
export function sampleSurface(geometry, count) {
 return sampleGeometry(sampleSurfaceData(surfaceAttributes(geometry), count));
}
export async function sampleSurfaceAsync(geometry, count) {
 if (typeof Worker === 'undefined') return sampleSurface(geometry, count);
 let worker;
 try {
  worker = new Worker(new URL('./surface-sampling.worker.js', import.meta.url), {type: 'module'});
  const attributes = surfaceAttributes(geometry);
  const samples = await new Promise((resolve, reject) => {
   worker.onmessage = ({data}) => data.error ? reject(new Error('Surface sampling failed')) : resolve(data);
   worker.onerror = reject;
   worker.postMessage({attributes, count}, Object.values(attributes).map(array => array.buffer));
  });
  return sampleGeometry(samples);
 } catch {
  // Browsers that disallow workers retain the same visual effect.
  return sampleSurface(geometry, count);
 } finally { worker?.terminate(); }
}
export function createParticles(geometry,texture,count,bounds,samples=null){
 texture.updateMatrix();
 const uniforms={uMap:{value:texture},uUvTransform:{value:texture.matrix},uAssembly:{value:0},uReveal:{value:0},uDissolve:{value:0},uTime:{value:0},uSurface:{value:1},uPixelRatio:{value:1},uMinY:{value:bounds.min.y},uHeight:{value:bounds.max.y-bounds.min.y}};
 const material=new THREE.ShaderMaterial({uniforms,transparent:true,depthWrite:false,blending:THREE.NormalBlending,
 vertexShader:`attribute vec3 aSeed; varying vec2 vUv; varying float vAlpha; uniform float uAssembly,uReveal,uDissolve,uTime,uSurface,uPixelRatio,uMinY,uHeight;
 uniform mat3 uUvTransform; void main(){vUv=(uUvTransform*vec3(uv,1.)).xy;float h=clamp((position.y-uMinY)/uHeight,0.,1.);float arrival=smoothstep(h*.64,h*.64+.36,uAssembly);float leave=smoothstep((1.-h)*.55,(1.-h)*.55+.45,uDissolve);float settled=arrival*(1.-leave);float angle=aSeed.x*6.283185+uTime*.035;vec3 scatter=vec3(cos(angle)*(1.35+aSeed.y*.85),-1.3+aSeed.z*2.8,sin(angle)*(1.35+aSeed.y*.85));float ghost=(1.-step(.12,aSeed.y))*(1.-uAssembly);vec3 pos=mix(scatter,position,max(settled,ghost));pos.x+=sin(settled*3.14159)*sin(angle+settled*4.)*.55;pos.y+=sin(settled*3.14159)*.45;float skin=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));vAlpha=mix(mix(.012,.16,ghost),.95,settled)*(1.-skin*uSurface*.97)*(1.-leave*.8);vec4 mv=modelViewMatrix*vec4(pos,1.);vAlpha*=mix(1.,smoothstep(-.1,.35,dot(normalize(normalMatrix*normal),normalize(-mv.xyz))),settled);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((1.1+aSeed.y*1.4)*uPixelRatio*5./(-mv.z),.6,4.5*uPixelRatio);}`,
 fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=texture2D(uMap,vUv).rgb;col=mix(col,vec3(.64,.78,.85),.12);gl_FragColor=vec4(col,vAlpha*(1.-smoothstep(.25,1.,d)));#include <tonemapping_fragment>\n#include <colorspace_fragment>}`.replace(';#include',';\n#include')});
 const points=new THREE.Points(samples||sampleSurface(geometry,count),material);points.frustumCulled=false;return {points,uniforms};
}
export function addReveal(material,bounds){
 const uniforms={uReveal:{value:0},uDissolve:{value:0},uMinY:{value:bounds.min.y},uHeight:{value:bounds.max.y-bounds.min.y}};
 material.onBeforeCompile=(shader)=>{
  Object.assign(shader.uniforms,uniforms);
  shader.vertexShader='varying float vObjectY;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvObjectY=position.y;');
  shader.fragmentShader='varying float vObjectY; uniform float uReveal,uDissolve,uMinY,uHeight;\n'+shader.fragmentShader.replace('#include <alphatest_fragment>',`#include <alphatest_fragment>
 float h=clamp((vObjectY-uMinY)/uHeight,0.,1.);float coverage=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));if(uReveal>=.999&&uDissolve<=.001)coverage=1.;if(uReveal<=.001)coverage=0.;float noise=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);if(noise>coverage)discard;`);
 };
 material.customProgramCacheKey=()=> 'porcelain-reveal-v1';return uniforms;
}
