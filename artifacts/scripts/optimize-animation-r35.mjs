import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder} from 'meshoptimizer';
import sharp from 'sharp';
import {readFile,writeFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const [id,source,revision="R35"]=process.argv.slice(2);if(!id||!source)throw Error('Usage: id source.glb');
const hash=()=>readFile(source).then(b=>createHash('sha256').update(b).digest('hex'));
const before=await hash(),report={id,source,sha256:before,variants:[]};
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
for(const [variant,size] of [['desktop',2048],['mobile',1024]]){
 const doc=await io.read(source);if(!doc.getRoot().listSkins().length||!doc.getRoot().listAnimations().length)throw Error('Missing rig or animation');
 // Blender export is sampled. Normalize the time origin and verify a closed rest pose.
 const clips=[],originalTimes=new Map(doc.getRoot().listAccessors().map(a=>[a,a.getArray()?.slice()]));
 for(const a of doc.getRoot().listAnimations()){
  const samplers=a.listSamplers(),start=Math.min(...samplers.map(s=>originalTimes.get(s.getInput())[0]));
  for(const s of samplers){const input=s.getInput(),times=originalTimes.get(input);s.setInput(input.clone().setArray(Float32Array.from(times,t=>t-start)));const values=s.getOutput().getArray(),width=s.getOutput().getElementSize();
   if(s.getInterpolation()==='CUBICSPLINE')throw Error('Sample export before optimization');
   if(values.subarray(0,width).some((v,i)=>Math.abs(v-values[values.length-width+i])>.0001))throw Error(`Non-closed clip ${a.getName()}`);
  }
  clips.push({name:a.getName(),duration:Math.max(...samplers.map(s=>s.getInput().getArray().at(-1)))});
 }
 await doc.transform(textureCompress({encoder:sharp,targetFormat:'jpeg',resize:[size,size],quality:90}),meshopt({encoder:MeshoptEncoder,level:'high'}));
 const file=`public/models/${id}-alive-${variant}-${revision}.glb`;await io.write(file,doc);const check=await io.read(file);
 report.variants.push({file,bytes:(await stat(file)).size,skins:check.getRoot().listSkins().length,meshes:check.getRoot().listMeshes().length,clips});
}
if(before!==await hash())throw Error('Source changed');
await writeFile(`docs/${id}-animation-${revision}.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
