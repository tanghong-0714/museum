import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,simplify,meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import {readFile,writeFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const source=fileURLToPath(new URL('../source-assets/bronze-head-original.glb',import.meta.url));
const report={source_sha256:createHash('sha256').update(await readFile(source)).digest('hex'),source_triangles:1936142,method:'UV-aware meshoptimizer simplification + meshopt compression; source normals retained',variants:[]};
for(const [name,ratio,error,texture] of [['desktop',.1,.001,2048],['mobile',.04,.003,1536]]){
 const doc=await io.read(source);
 await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio,error}),textureCompress({encoder:sharp,targetFormat:'jpeg',resize:[texture,texture],quality:88}));
 const triangles=doc.getRoot().listMeshes()[0].listPrimitives()[0].getIndices().getCount()/3;
 await doc.transform(meshopt({encoder:MeshoptEncoder,level:'high'}));
 const file='bronze-head-web-'+name+'.glb',path=fileURLToPath(new URL('../public/models/'+file,import.meta.url));await io.write(path,doc);
 report.variants.push({file,triangles,bytes:(await stat(path)).size});console.log(report.variants.at(-1));
}
await writeFile(new URL('../asset-report-bronze.json',import.meta.url),JSON.stringify(report,null,2));
