import {loadEnv} from 'vite';
const env=loadEnv('development',process.cwd(),'ARTIFACT_');
const base=new URL(env.ARTIFACT_API_BASE_URL);
if(base.origin!=='https://api.deepseek.com')throw new Error('Unexpected provider; check destination before sending credentials.');
try{
 const response=await fetch(new URL('/models',base),{headers:{Authorization:`Bearer ${env.ARTIFACT_API_KEY}`},signal:AbortSignal.timeout(15000)});
 if(!response.ok){console.log(JSON.stringify({status:response.status,authenticated:false}));process.exitCode=1;}
 else {const body=await response.json();console.log(JSON.stringify({status:response.status,models:body.data?.map(item=>item.id)},null,2));}
}catch{console.log(JSON.stringify({error:'Model catalog request failed; credentials were not logged.'}));process.exitCode=1;}
