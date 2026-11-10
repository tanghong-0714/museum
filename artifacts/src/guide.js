import './guide.css';
export function mountArtifactGuide({onFocus,exhibit}) {
 const topics=exhibit.topics;
 const more=document.querySelector('#guide-more'),panel=document.querySelector('#guide-panel'),action=document.querySelector('#guide-action');
 const tabs=[...document.querySelectorAll('[data-guide]')];let selected='shape';
 function select(key){selected=key;const topic=topics[key];tabs.forEach(tab=>{const active=tab.dataset.guide===key;tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});panel.setAttribute('aria-labelledby',`guide-${key}`);document.querySelector('#guide-kind').textContent=topic.kind;document.querySelector('#guide-brief').textContent=topic.brief;document.querySelector('#guide-excerpt').textContent=topic.excerpt;action.textContent=topic.action;document.querySelector('#guide-long').replaceChildren(...topic.paragraphs.map(text=>{const p=document.createElement('p');p.textContent=text;return p;}));}
 tabs.forEach((tab,index)=>{tab.onclick=()=>select(tab.dataset.guide);tab.onkeydown=e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;else if(e.key==='ArrowLeft')next=(index+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();select(tabs[next].dataset.guide);tabs[next].focus();};});
 action.onclick=()=>{const topic=topics[selected];if(topic.target)onFocus(topic.target);else{more.open=true;requestAnimationFrame(()=>document.querySelector('#guide-source-link').focus());}};
 select('shape');return {destroy(){tabs.forEach(t=>{t.onclick=null;t.onkeydown=null;});action.onclick=null;}};
}
