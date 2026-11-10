import sys,asyncio,socket,json
from pathlib import Path
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'.tts-runtime'))
import edge_tts,aiohttp
ROOT=Path(__file__).resolve().parents[1]
async def main():
 jobs=json.loads((ROOT/'scripts/narration-jobs.json').read_text(encoding='utf-8'));sem=asyncio.Semaphore(4);done=0;failed=[]
 # Start with the artifact currently used for testing.
 preferred=json.loads((ROOT/'public/narration/zenghouyi-bells.json').read_text(encoding='utf-8'))['items'];priority={p['id'] for p in preferred};jobs.sort(key=lambda j:j['id'] not in priority)
 async def run(j):
  nonlocal done
  out=ROOT/'public/audio/narration'/f"{j['id']}.mp3"
  if out.exists() and out.stat().st_size>1000:done+=1;return
  async with sem:
   for attempt in range(3):
    try:
     part=out.with_suffix('.tmp');await edge_tts.Communicate(j['text'],voice='zh-CN-YunxiNeural',rate='-8%',connector=aiohttp.TCPConnector(family=socket.AF_INET),receive_timeout=45).save(str(part));assert part.stat().st_size>1000;part.replace(out);done+=1
     if done%10==0:print(f'{done}/{len(jobs)}',flush=True)
     return
    except Exception as e:
     if attempt==2:failed.append({'id':j['id'],'error':type(e).__name__});print('FAILED',j['id'],type(e).__name__,flush=True)
     else:await asyncio.sleep(2)
 await asyncio.gather(*(run(j) for j in jobs));(ROOT/'docs/narration-generation.json').write_text(json.dumps({'voice':'zh-CN-YunxiNeural','rate':'-8%','success':done,'total':len(jobs),'failed':failed},indent=2));print('FINISHED',done,'failed',len(failed),flush=True)
asyncio.run(main())

