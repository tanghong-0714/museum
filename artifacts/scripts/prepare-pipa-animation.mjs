import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder} from 'meshoptimizer';
import sharp from 'sharp';
import {readFile,writeFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';

const source=process.argv[2];
if(!source)throw Error('Provide the original animated GLB path.');
const hash=async()=>createHash('sha256').update(await readFile(source)).digest('hex');
const report={sourceSha256:await hash(),duration:6,variants:[]};
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
for(const [variant,size] of [['desktop',2048],['mobile',1024]]){
 const doc=await io.read(source),animation=doc.getRoot().listAnimations()[0];
 if(!animation||doc.getRoot().listSkins().length!==1)throw Error('Expected one rig and an animation.');
 // The exported timeline starts at frame 1 and omits Blender's closing frame 145.
 // Shift it to zero and explicitly append the first pose at six seconds.
 for(const sampler of animation.listSamplers()){
  const input=sampler.getInput(),output=sampler.getOutput(),times=input.getArray(),values=output.getArray(),width=output.getElementSize();
  const closedTimes=new Float32Array(times.length+1),closedValues=new Float32Array(values.length+width);
  for(let i=0;i<times.length;i++)closedTimes[i]=times[i]-times[0];
  closedTimes[times.length]=6;closedValues.set(values);closedValues.set(values.subarray(0,width),values.length);
  sampler.setInput(doc.createAccessor().setType('SCALAR').setBuffer(input.getBuffer()).setArray(closedTimes));
  sampler.setOutput(doc.createAccessor().setType(output.getType()).setBuffer(output.getBuffer()).setArray(closedValues));
 }
 await doc.transform(textureCompress({encoder:sharp,targetFormat:'jpeg',resize:[size,size],quality:90}),meshopt({encoder:MeshoptEncoder,level:'high'}));
 const file=`public/models/pipa-alive-${variant}-R31.glb`;await io.write(file,doc);
 const check=await io.read(file);
 for(const sampler of check.getRoot().listAnimations()[0].listSamplers()){
  const values=sampler.getOutput().getArray(),width=sampler.getOutput().getElementSize();
  if(values.subarray(0,width).some((v,i)=>Math.abs(v-values[values.length-width+i])>1e-6))throw Error('Animation loop is not closed.');
 }
 report.variants.push({file,bytes:(await stat(file)).size,skins:check.getRoot().listSkins().length,animations:check.getRoot().listAnimations().length});
}
if(report.sourceSha256!==await hash())throw Error('Original changed.');
await writeFile('docs/pipa-animation-assets-R31.json',JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
