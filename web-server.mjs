// Runtime server for prebuilt pages. No compiler or native addon is required.
import {createServer, request} from 'node:http';
import {createReadStream} from 'node:fs';
import {stat} from 'node:fs/promises';
import {resolve, sep, extname, join} from 'node:path';
import {pathToFileURL} from 'node:url';
const [kind,portText]=process.argv.slice(2);
if(!['hall','artifacts'].includes(kind))throw Error('Unknown app');
const port=Number(portText);
const root=resolve(kind==='hall'?'dist':'release_R10');
let handlers=[];
if(kind==='artifacts'){
  try{process.loadEnvFile(join(process.cwd(),'.env.local'));}catch(e){if(e.code!=='ENOENT')throw e;}
  const module=name=>import(pathToFileURL(join(process.cwd(),'server',name)).href);
  const {handleApiRequest}=await module('api.js');
  const {handlePassportRequest}=await module('passport-api.js');
  const {createCardImageHandler}=await module('card-images.js');
  handlers=[createCardImageHandler(),(req,res)=>handlePassportRequest(req,res,{env:process.env}),(req,res)=>handleApiRequest(req,res,{env:process.env})];
}
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.glb':'model/gltf-binary','.gltf':'model/gltf+json','.wasm':'application/wasm','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.mp3':'audio/mpeg','.ogg':'audio/ogg','.wav':'audio/wav','.mp4':'video/mp4','.woff2':'font/woff2'};
function fail(res,code,text){res.writeHead(code,{'Content-Type':'text/plain; charset=utf-8'});res.end(text);}
const app=createServer(async(req,res)=>{
  try{
    if(![`127.0.0.1:${port}`,`localhost:${port}`].includes(req.headers.host)){fail(res,403,'Invalid host');return;}
    res.setHeader('X-Content-Type-Options','nosniff');
    if(req.url.startsWith('/api/models')){
      if(req.method!=='GET'||!/^\/api\/models\/jobs(?:\/[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}\/model)?$/.test(req.url)){fail(res,403,'Read-only model library');return;}
      const target=new URL(req.url,process.env.MUSEUM_WORKBENCH_ORIGIN||'http://127.0.0.1:4317');
      const upstream=request(target,{method:'GET',headers:{accept:req.headers.accept||'*/*'}},incoming=>{res.writeHead(incoming.statusCode,incoming.headers);incoming.pipe(res);});
      upstream.on('error',()=>{if(!res.headersSent)fail(res,502,'Workbench unavailable');else res.destroy();});
      res.on('close',()=>upstream.destroy());upstream.end();return;
    }
    for(const handler of handlers)if(await handler(req,res))return;
    if(req.method!=='GET'&&req.method!=='HEAD'){fail(res,405,'Method not allowed');return;}
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    if(pathname.includes('\0')||pathname.includes('\\')||pathname.split('/').some(part=>part.startsWith('.'))){fail(res,403,'Forbidden');return;}
    const file=resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!file.startsWith(root+sep)){fail(res,403,'Forbidden');return;}
    let info;try{info=await stat(file);}catch{fail(res,404,'Not found');return;}
    if(!info.isFile()){fail(res,404,'Not found');return;}
    const headers={'Content-Type':types[extname(file).toLowerCase()]||'application/octet-stream','Accept-Ranges':'bytes','Cache-Control':'no-cache'};
    let start=0,end=info.size-1,status=200;
    if(req.headers.range){
      const range=/^bytes=(\d*)-(\d*)$/.exec(req.headers.range);
      if(!range||(!range[1]&&!range[2])){res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}
      if(range[1]){start=Number(range[1]);if(range[2])end=Math.min(Number(range[2]),end);}else start=Math.max(0,info.size-Number(range[2]));
      if(start>end||start>=info.size){res.writeHead(416,{'Content-Range':`bytes */${info.size}`});res.end();return;}
      status=206;headers['Content-Range']=`bytes ${start}-${end}/${info.size}`;
    }
    headers['Content-Length']=Math.max(0,end-start+1);res.writeHead(status,headers);
    if(req.method==='HEAD'||!info.size){res.end();return;}
    const stream=createReadStream(file,{start,end});stream.on('error',()=>res.destroy());res.on('close',()=>stream.destroy());stream.pipe(res);
  }catch{if(!res.headersSent)fail(res,500,'Service error');else res.destroy();}
});
app.listen(port,'127.0.0.1',()=>console.log(`${kind}: http://127.0.0.1:${port}/`));
app.on('error',()=>{console.error(`${kind}: cannot start HTTP service`);process.exit(1);});
