import './journey.css';

const element=(tag,className,text)=>{const node=document.createElement(tag);node.className=className;if(text!==undefined)node.textContent=text;return node;};
const kinds={reference:'史料参照',creative:'艺术创作',digital:'数字记录'};

export function mountArtifactJourney({exhibit,onClose}){
 const panel=element('aside','story-panel artifact-journey');panel.id='journey-panel';panel.hidden=true;panel.setAttribute('aria-labelledby','journey-title');
 const heading=element('div','panel-heading'),titles=element('div','');
 titles.append(element('p','eyebrow','TRACES THROUGH TIME'));
 const title=element('h2','',`${exhibit.nickname}的时光足迹`);title.id='journey-title';titles.append(title);
 const close=element('button','','×');close.type='button';close.setAttribute('aria-label','收起时光足迹');close.onclick=onClose;heading.append(titles,close);
 const body=element('div','journey-body');body.tabIndex=0;body.setAttribute('aria-label','时间轴内容，可上下滚动');
 panel.append(heading,body);document.querySelector('#experience').append(panel);
 const controller=new AbortController();let destroyed=false;
 async function load(){
  body.replaceChildren(element('p','guide-lead','正在整理时光中的线索……'));
  try{
   const response=await fetch(`/api/artifacts/${exhibit.id}`,{signal:controller.signal}),data=await response.json();
   if(!response.ok||data.artifact?.id!==exhibit.id||!data.artifact.journey?.entries?.length)throw Error('journey_unavailable');
   if(destroyed)return;
   const {journey,sources}=data.artifact,lead=element('p','guide-lead',journey.lead),list=element('ol','journey-track');
   for(const entry of journey.entries){
    const node=element('li',`journey-node journey-${entry.kind}`),meta=element('div','journey-meta');
    meta.append(element('span','journey-date',entry.time),element('span','journey-kind',kinds[entry.kind]));
    node.append(meta,element('h3','',entry.title),element('p','journey-copy',entry.text));
    for(const id of entry.sourceIds){
     const source=sources.find(source=>source.id===id);if(!source?.url)continue;
     const link=element('a','journey-source',`${source.publisher} · 查阅原文 ↗`);link.href=source.url;link.target='_blank';link.rel='noopener noreferrer';node.append(link);
    }
    list.append(node);
   }
   body.replaceChildren(lead,list,element('p','journey-end','故事走到这里，与你相逢。'));
  }catch{
   if(destroyed)return;
   const retry=element('button','guide-action','重新加载时间轴 ↗');retry.onclick=load;
   body.replaceChildren(element('p','guide-lead','时光资料暂未连接，请重试。'),retry);
  }
 }
 load();
 return {setOpen(open){panel.hidden=!open;},destroy(){destroyed=true;controller.abort();panel.remove();}};
}
