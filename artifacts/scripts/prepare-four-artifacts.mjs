// Additive asset preparation: source GLBs remain untouched, existing outputs are never overwritten.
import {NodeIO,getBounds} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {weld,simplify,meshopt,textureCompress} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder,MeshoptSimplifier} from 'meshoptimizer';
import sharp from 'sharp';
import {readFile,writeFile,stat,mkdir,access} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';

const project=fileURLToPath(new URL('../',import.meta.url));
const sourceDirectory=process.argv[2];
if(!sourceDirectory)throw new Error('Usage: node scripts/prepare-four-artifacts.mjs <source-directory>');
const items=[['goujian-sword','越王勾践剑'],['galloping-horse','马踏飞燕'],['four-ram-zun','四羊方尊'],['zenghouyi-bells','曾侯乙编钟']];
const variants=[{name:'desktop',ratio:.10,error:.0006,texture:2048,quality:90},{name:'mobile',ratio:.05,error:.0015,texture:1536,quality:88}];
for(const [id] of items)for(const {name} of variants){
 const output=join(project,`public/models/${id}-web-${name}.glb`);
 try{await access(output);}catch(e){if(e.code==='ENOENT')continue;throw e;}
 throw new Error(`Refusing to overwrite existing output: ${output}`);
}
await mkdir(join(project,'public/models'),{recursive:true});await mkdir(join(project,'docs'),{recursive:true});
await Promise.all([MeshoptEncoder.ready,MeshoptDecoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
const report={preparedDate:'2026-11-07',method:'UV-preserving meshoptimizer simplification, JPEG texture resize, meshopt high compression; source geometry retained in original files',boundary:'Geometry metrics are checked locally; recommended front views require in-app browser review.',artifacts:[]};
for(const [id,title] of items){
 const source=resolve(sourceDirectory,title+'.glb'),sourceBytes=await readFile(source),original=await io.read(source),root=original.getRoot(),meshes=root.listMeshes();
 if(meshes.length!==1||meshes[0].listPrimitives().length!==1||!meshes[0].listPrimitives()[0].getMaterial()?.getBaseColorTexture())throw new Error(`Unexpected source structure for ${id}`);
 const primitive=meshes[0].listPrimitives()[0],pos=primitive.getAttribute('POSITION'),data=pos.getArray();
 const min=[Infinity,Infinity,Infinity],max=[-Infinity,-Infinity,-Infinity];
 for(let i=0;i<data.length;i+=3)for(let axis=0;axis<3;axis++){min[axis]=Math.min(min[axis],data[i+axis]);max[axis]=Math.max(max[axis],data[i+axis]);}
 const texture=primitive.getMaterial().getBaseColorTexture(),meta=await sharp(texture.getImage()).metadata();
 const item={id,title,sourceFile:source,sourceSha256:hash(sourceBytes),sourceBytes:sourceBytes.length,sourceTriangles:(primitive.getIndices()?.getCount()||pos.getCount())/3,sourceVertices:pos.getCount(),bounds:{min,max,size:max.map((v,i)=>v-min[i])},nodes:root.listNodes().map(n=>({name:n.getName(),translation:n.getTranslation(),rotation:n.getRotation(),scale:n.getScale()})),sourceTexture:{name:texture.getName(),width:meta.width,height:meta.height,format:meta.format},variants:[]};
 for(const settings of variants){
  const doc=await io.read(source);
  await doc.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:settings.ratio,error:settings.error}),textureCompress({encoder:sharp,targetFormat:'jpeg',resize:[settings.texture,settings.texture],quality:settings.quality}));
  const p=doc.getRoot().listMeshes()[0].listPrimitives()[0],triangles=p.getIndices().getCount()/3,vertices=p.getAttribute('POSITION').getCount();
  await doc.transform(meshopt({encoder:MeshoptEncoder,level:'high'}));
  const file=`public/models/${id}-web-${settings.name}.glb`,absolute=join(project,file);
  await io.write(absolute,doc);
  const decoded=await io.read(absolute),decodedP=decoded.getRoot().listMeshes()[0].listPrimitives()[0];
  if(decodedP.getIndices().getCount()/3!==triangles||!decodedP.getMaterial().getBaseColorTexture())throw new Error(`Round-trip validation failed: ${file}`);
  const texInfo=await sharp(decodedP.getMaterial().getBaseColorTexture().getImage()).metadata();
  const worldBounds=getBounds(decoded.getRoot().listScenes()[0]);
  const maxBoundsDeviation=Math.max(...worldBounds.min.map((v,i)=>Math.abs(v-min[i])),...worldBounds.max.map((v,i)=>Math.abs(v-max[i])));
  const entry={...settings,file,triangles,vertices,bytes:(await stat(absolute)).size,textureDimensions:[texInfo.width,texInfo.height],worldBounds,maxBoundsDeviationRelativeToLongestAxis:maxBoundsDeviation/Math.max(...item.bounds.size),roundTrip:'passed'};
  item.variants.push(entry);console.log(JSON.stringify({id,...entry}));
 }
 item.sourceUnchanged=hash(await readFile(source))===item.sourceSha256;
 item.rotationRecommendation={rotationY:id==='four-ram-zun'?-Math.PI/4:-Math.PI/2,status:'Geometry-and-texture point projection inspected offline; confirm in browser with production lighting and framing.'};
 if(id==='zenghouyi-bells')item.sourceMetadataNote='Embedded base-color texture is misnamed 铠甲道具3d模型_basecolor; offline geometry preview shows a multi-tier bell rack. File identity is not an archaeological authenticity claim.';
 if(!item.sourceUnchanged)throw new Error('Source hash changed unexpectedly: '+id);
 report.artifacts.push(item);await writeFile(join(project,'docs/four-artifacts-asset-report.json'),JSON.stringify(report,null,2));
}
console.log('Asset preparation and source-hash validation completed.');
