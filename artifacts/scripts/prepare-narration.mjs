import {exhibits} from '../src/exhibits.js';
import {getFeatureNote} from '../src/feature-notes.js';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
await mkdir('public/narration',{recursive:true});const all=[];
for(const e of Object.values(exhibits)){
 const data=JSON.parse(await readFile(`data/artifacts/${e.id}.json`,'utf8'));const items=[];
 function add(section,label,text){if(!text?.trim())return;const id=createHash('sha256').update('Yunxi|-8%|'+text).digest('hex').slice(0,20);items.push({id,section,label,text,url:`/audio/narration/${id}.mp3`});}
 add('view',e.title,e.poem.join(''));add('view','观器引导',e.description.join(''));
 e.anchors.forEach((a,i)=>{const n=getFeatureNote(e,i);add('view',a.label,n.copy);add('view',a.label+' · 试着这样看',n.look);});
 add('story',e.storyTitle,e.lead);
 for(const [i,key] of ['shape','pattern','craft'].entries()){const t=e.topics[key];add('story',e.tabLabels[i],t.brief);t.paragraphs.forEach((p,j)=>add('story',e.tabLabels[i]+' · '+(j+1),p));add('story',e.tabLabels[i]+' · 说明',t.excerpt);}
 add('story','结语',e.motto);add('journey','时光足迹',data.journey.lead);
 for(const entry of data.journey.entries)add('journey',entry.time+' · '+entry.title,entry.time+'。'+entry.title+'。'+entry.text);
 add('journey','结语','故事走到这里，与你相逢。');
 const manifest={artifact:e.id,title:e.title,voice:'云希 · 青年男声',items};await writeFile(`public/narration/${e.id}.json`,JSON.stringify(manifest,null,2));all.push(...items);
}
await writeFile('scripts/narration-jobs.json',JSON.stringify([...new Map(all.map(x=>[x.id,x])).values()],null,2));console.log(all.length,'paragraphs');
