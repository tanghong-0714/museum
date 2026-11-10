import {defineConfig,loadEnv} from 'vite';
import {handleApiRequest} from './server/api.js';
import {handlePassportRequest} from './server/passport-api.js';
import {createCardImageHandler} from './server/card-images.js';
export default defineConfig(({mode})=>{
  const env={...process.env,...loadEnv(mode,process.cwd(),'ARTIFACT_')};
  const handleCardImage = createCardImageHandler();
  const middleware=(server)=>{server.middlewares.use((req,res,next)=>{
    if(req.url?.startsWith('/api/models')){
      if(req.method==='GET'&&/^\/api\/models\/jobs(?:\/[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}\/model)?$/.test(req.url))return next();
      res.statusCode=403;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify({message:'只允许读取已完成的模型。'}));return;
    }
    handleCardImage(req,res).then(handled=>handled||handlePassportRequest(req,res,{env})).then(handled=>handled||handleApiRequest(req,res,{env})).then(handled=>{if(!handled)next();}).catch(()=>{
      if(!res.headersSent&&!res.destroyed){res.statusCode=500;res.setHeader('Content-Type','application/json; charset=utf-8');res.end(JSON.stringify({error:{code:'SERVICE_ERROR',message:'文物服务暂时不可用，请稍后重试。'}}));}
    });
  });};
  const proxy={'/api/models':{target:process.env.MUSEUM_WORKBENCH_ORIGIN || 'http://127.0.0.1:4317',changeOrigin:true}};
  return {server:{proxy},preview:{proxy},plugins:[{name:'artifact-dialogue-api',configureServer:middleware,configurePreviewServer:middleware}],build:{outDir:'release_R10',emptyOutDir:false}};
});
