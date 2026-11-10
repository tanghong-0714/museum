import {createArtifactMenu} from './artifact-menu.js';

export function applyExhibit(exhibit,all,missing=false){
 const $=s=>document.querySelector(s),text=(s,value)=>{$(s).textContent=value;};
 $('#experience').dataset.theme=exhibit.theme;
 document.title=`重器新生 · ${exhibit.title}`;
 const heading=$('h1'),english=document.createElement('span');english.textContent=exhibit.english;english.setAttribute('translate','no');
 const titleNodes=(exhibit.titleLines||[exhibit.title]).flatMap((line,index)=>index?[document.createElement('br'),document.createTextNode(line)]:[document.createTextNode(line)]);
 heading.replaceChildren(...titleNodes,english);
 $('.brand').href=location.href;
 text('.collection-number',exhibit.number);
 const eyebrow=$('.introduction .eyebrow');eyebrow.lastChild.textContent=' '+exhibit.category;
 const accent=document.createElement('span');accent.textContent=exhibit.poem[1];$('.hero-poem').replaceChildren(document.createTextNode(exhibit.poem[0]),accent);
 $('.hero-description').replaceChildren(document.createTextNode(exhibit.description[0]),document.createElement('br'),document.createTextNode(exhibit.description[1]));
 const tags=$('.hero-tags').querySelectorAll('span');tags.forEach((t,i)=>t.textContent=exhibit.tags[i]);
 $('#stage').setAttribute('aria-label',`可旋转的${exhibit.title}三维模型`);
 text('#story-title',exhibit.storyTitle);text('.guide-lead',exhibit.lead);text('.guide-motto',exhibit.motto);
 text('#story-panel .panel-heading .eyebrow',`${exhibit.nickname} · 慢慢道来`);
 document.querySelectorAll('[data-guide]').forEach((tab,i)=>tab.textContent=exhibit.tabLabels[i]);
 text('.guide-source>span',exhibit.sourceTitle);$('#guide-source-link').href=exhibit.sourceUrl;$('.guide-boundary').remove();
 text('.bottom-line>span:first-child',`${exhibit.series.replaceAll(' ','')} / A DIGITAL REIMAGINING`);
 text('#info h2',`重器新生 · ${exhibit.title}`);text('#info>p:not(.eyebrow):not(.info-note)',exhibit.lead);
 const info=$('#info').querySelectorAll('dd');info[0].textContent=`${exhibit.title} · ${exhibit.nickname}`;info[2].textContent='微光汇聚，器物显形。点击底部“微光演绎”，观看光粒消散与重新成形。';
 $('.header-actions').prepend(createArtifactMenu(exhibit,all));
 if(exhibit.decorHtml){
  // Locally authored decoration from the display profile, never model/API text.
  const decor=document.createElement('div');decor.className='exhibit-decor';decor.setAttribute('aria-hidden','true');decor.innerHTML=exhibit.decorHtml;$('.atmosphere').append(decor);
 }
 if(exhibit.flip){const flip=document.createElement('button');flip.id='mirror-flip';flip.textContent='翻面';flip.disabled=true;flip.setAttribute('aria-label','翻看铜镜另一面');$('.view-tools').prepend(flip);}
 if(['mirror','stone'].includes(exhibit.theme)){
  const decor=document.createElement('div');decor.className=exhibit.theme==='mirror'?'mirror-orbits':'stone-light';decor.setAttribute('aria-hidden','true');
  decor.innerHTML=exhibit.theme==='mirror'?'<i></i><i></i><i></i><b></b><span></span>':'<i></i><i></i><i></i><b></b>';
  $('.atmosphere').append(decor);
 }
 if(missing){const notice=document.createElement('p');notice.className='artifact-notice';notice.setAttribute('role','status');notice.textContent='未找到指定文物，已显示凤首扁壶。';$('#experience').append(notice);}
 if(exhibit.theme==='bronze'){
  const orbit=document.createElement('div');orbit.className='bronze-orbit';orbit.innerHTML='<i></i><i></i><i></i><b></b>';
  const beam=document.createElement('div');beam.className='bronze-beam';$('.atmosphere').append(orbit,beam);
 }
}
