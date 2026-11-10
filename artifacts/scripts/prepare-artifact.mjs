import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,simplify,meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import {readFile,writeFile,stat,mkdir,access} from 'node:fs/promises';
import {resolve} from 'node:path';
import {createHash} from 'node:crypto';
const [id,source]=process.argv.slice(2);
if(id==='--help'){console.log('node scripts/prepare-artifact.mjs <new-artifact-id> <source.glb>\nCreates desktop/mobile single-mesh textured assets; never overwrites existing outputs.');process.exit(0);}
if(!/^[a-z0-9][a-z0-9-]{0,79}$/.test(id||'')||!source)throw Error('Provide a lowercase artifact ID and source GLB path. Use --help.');
const outputs=['desktop','mobile'].map(t=>resolve(`public/models/${id}-web-${t}.glb`));
for(const p of outputs){try{await access(p);}catch(e){if(e.code==='ENOENT')continue;throw e;}throw Error('Output already exists; choose a new revision ID: '+p);}
await mkdir('public/models',{recursive:true});await mkdir('docs',{recursive:true});
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const report={id,sha256:createHash('sha256').update(await readFile(source)).digest('hex'),variants:[]};
for(const [name,ratio,error,size] of [['desktop',.1,.001,2048],['mobile',.04,.003,1536]]){
 const doc=await io.read(resolve(source)),meshes=doc.getRoot().listMeshes();
 if(meshes.length!==1||meshes[0].listPrimitives().length!==1||!meshes[0].listPrimitives()[0].getMaterial()?.getBaseColorTexture())throw Error('Preprocess as a single mesh/primitive with a base-color texture before using this template.');
 report.sourceTriangles=meshes[0].listPrimitives()[0].getIndices()?.getCount()/3||meshes[0].listPrimitives()[0].getAttribute('POSITION').getCount()/3;
 await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio,error}),textureCompress({encoder:sharp,targetFormat:'jpeg',resize:[size,size],quality:88}));
 const triangles=doc.getRoot().listMeshes()[0].listPrimitives()[0].getIndices().getCount()/3;
 await doc.transform(meshopt({encoder:MeshoptEncoder,level:'high'}));
 const file=`public/models/${id}-web-${name}.glb`;await io.write(file,doc);report.variants.push({file,triangles,bytes:(await stat(file)).size});
}
await writeFile(`docs/${id}-asset-report.json`,JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
