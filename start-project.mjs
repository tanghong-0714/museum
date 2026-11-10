import {spawn} from 'node:child_process';
import {createServer} from 'node:net';
import {fileURLToPath} from 'node:url';
import {dirname, join} from 'node:path';
import {writeFileSync, existsSync, readFileSync, unlinkSync} from 'node:fs';
const root=dirname(fileURLToPath(import.meta.url));
const pidFile=join(root,'.museum-session.json');
const offsetArg=process.argv.find(arg=>arg.startsWith('--test-offset='));
const offset=offsetArg?Number(offsetArg.split('=')[1]):0;
if(!Number.isInteger(offset)||offset<0||offset>40000)throw Error('Invalid test offset');
const ports={workbench:4317+offset,artifacts:5189+offset,hall:5192+offset};
const children=[];
let stopping=false;
async function stop(code=0){
  if(stopping)return; stopping=true;
  for(const child of children)if(child.exitCode===null)child.kill();
  await new Promise(resolve=>setTimeout(resolve,500));
  try{if(JSON.parse(readFileSync(pidFile,'utf8')).pid===process.pid)unlinkSync(pidFile);}catch{}
  process.exit(code);
}
process.on('SIGINT',()=>stop()); process.on('SIGTERM',()=>stop());
async function checkPort(port){
  await new Promise((resolve,reject)=>{const s=createServer();s.once('error',()=>reject(Error(`端口 ${port} 被占用，请先关闭另一个项目实例。`)));s.listen(port,'127.0.0.1',()=>s.close(resolve));});
}
try{
  for(const port of Object.values(ports))await checkPort(port);
  if(existsSync(pidFile)){
    let live=false;try{process.kill(JSON.parse(readFileSync(pidFile,'utf8')).pid,0);live=true;}catch{}
    if(live)throw Error('本目录已有启动进程，请先运行停止脚本。');
  }
  const env={...process.env,MUSEUM_WORKBENCH_ORIGIN:`http://127.0.0.1:${ports.workbench}`,TRIPO_TEST_PORT:String(ports.workbench)};
  function launch(folder,args){
    const child=spawn(process.execPath,args,{cwd:join(root,folder),env,stdio:'inherit',windowsHide:true});
    children.push(child);
    child.on('error',()=>{console.error(`${folder} 启动失败。`);stop(1);});
    child.on('exit',code=>{if(!stopping){console.error(`${folder} 已退出 (${code})，停止本次其他服务。`);stop(1);}});
  }
  launch('workbench',['--use-env-proxy','server.mjs']);
  for(const folder of ['artifacts','hall'])launch(folder,[join(root,'web-server.mjs'),folder,String(ports[folder])]);
  writeFileSync(pidFile,JSON.stringify({pid:process.pid,children:children.map(c=>c.pid),ports}));
  for(const [name,port]of Object.entries(ports)){
    let ready=false;
    for(let attempt=0;attempt<120;attempt++){
      try{const res=await fetch(`http://127.0.0.1:${port}/${name==='workbench'?'images':''}`,{signal:AbortSignal.timeout(1500)});if(res.ok){ready=true;break;}}catch{}
      await new Promise(resolve=>setTimeout(resolve,500));
    }
    if(!ready)throw Error(`${name} 未能启动，请查看上方错误。`);
  }
  console.log(`\n启动完成（保持本窗口打开）\n展厅：http://127.0.0.1:${ports.hall}/\n文物：http://127.0.0.1:${ports.artifacts}/\n修复台：http://127.0.0.1:${ports.workbench}/images\n按 Ctrl+C 停止本次服务。`);
  if(offset)console.log('验证模式：端口已偏移；页面内跨应用入口仍使用正式端口，仅验证独立服务。');
  if(!process.argv.includes('--no-browser'))spawn('explorer.exe',[`http://127.0.0.1:${ports.hall}/`],{stdio:'ignore',windowsHide:true});
}catch(error){console.error(error.message);await stop(1);}
