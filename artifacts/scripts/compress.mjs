import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {dedup,prune,meshopt} from '@gltf-transform/functions';
import {MeshoptEncoder,MeshoptDecoder} from 'meshoptimizer';
import {readFile,writeFile,stat} from 'node:fs/promises';
await MeshoptEncoder.ready;await MeshoptDecoder.ready;
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.encoder':MeshoptEncoder,'meshopt.decoder':MeshoptDecoder});
const report=JSON.parse(await readFile(new URL('../asset-report.json',import.meta.url),'utf8'));
for(const v of report.variants){const url=new URL('../public/models/'+v.file,import.meta.url);const path=decodeURIComponent(url.pathname).replace(/^\/([A-Za-z]:)/,'$1');const doc=await io.read(path);await doc.transform(dedup(),prune(),meshopt({encoder:MeshoptEncoder,level:'high'}));await io.write(path,doc);v.compressedBytes=(await stat(path)).size;}
await writeFile(new URL('../asset-report.json',import.meta.url),JSON.stringify(report,null,2));console.log(report);
