// A decorative animation accompanies real task states; it never invents progress.
export function createProcessingDisplay(host) {
  host.classList.add('processing-display'); host.hidden = true;
  host.innerHTML = `<div class="processing-art" aria-hidden="true"><div class="processing-orbit"></div><div class="processing-photo"><img alt=""><span class="processing-scan"></span><span class="processing-glyph">◇</span></div><span class="orbit-label">正</span><span class="orbit-label">右</span><span class="orbit-label">背</span><span class="orbit-label">左</span></div><div class="processing-copy"><div class="processing-top"><span class="processing-kicker">正在复原</span><span class="processing-elapsed"></span></div><h3></h3><p class="processing-detail"></p><ol class="processing-steps"></ol><progress max="100" aria-label="服务商返回的进度"></progress><p class="processing-note"></p></div>`;
  const find = selector => host.querySelector(selector);
  const particleCanvas = document.createElement('canvas'); particleCanvas.className='processing-particles'; particleCanvas.setAttribute('aria-hidden','true');
  find('.processing-art').append(particleCanvas);
  const controls = document.createElement('div'); controls.className = 'particle-controls';
  controls.innerHTML = '<div role="group" aria-label="粒子动效视角"><button type="button" data-angle="front">正面</button><button type="button" data-angle="side">侧面</button><button type="button" data-angle="top">俯视</button><button type="button" data-angle="auto" aria-pressed="true">暂停旋转</button></div><p>拖动或方向键转动 · 等待动效，非真实模型</p>';
  find('.processing-art').after(controls);
  const particles=createParticlePreview(particleCanvas, controls);
  let timer = null, finishTimer = null, start = null, identity = null, stepKey = '', config = {};
  function tick() {
    if (host.hidden) return;
    const seconds = Math.max(0, Math.floor((Date.now() - start) / 1000));
    find('.processing-elapsed').textContent = `已等待 ${Math.floor(seconds / 60).toString().padStart(2,'0')}:${(seconds % 60).toString().padStart(2,'0')}`;
    find('.processing-note').textContent = seconds >= 90
      ? '耗时取决于服务商队列与图像复杂度，正在查询原任务，请勿重复提交。'
      : config.note || '可以继续查看原图；刷新后会查询原任务，不会重复生成。';
  }
  return {
    update(next = {}) {
      clearTimeout(finishTimer); host.classList.remove('processing-finished');
      config = next; host.hidden = !next.active;
      if (!next.active) { clearInterval(timer); timer = null; identity = null; particles.stop(); return; }
      if (identity !== next.id) { identity = next.id; const date = Date.parse(next.startedAt); start = Number.isFinite(date) ? date : Date.now(); }
      host.dataset.kind = next.kind || 'image';
      find('.processing-art').setAttribute('aria-hidden', String(next.kind !== 'model'));
      if(next.kind==='model') particles.start(next.image); else particles.stop();
      [...host.querySelectorAll('.orbit-label')].forEach((label,i)=>{label.textContent=(next.labels || ['正','右','背','左'])[i];});
      find('.processing-kicker').textContent = next.kicker || '修复进行中';
      find('h3').textContent = next.title;
      find('.processing-detail').textContent = next.detail || '';
      const img = find('img'); img.hidden = !next.image;
      if (next.image && img.getAttribute('src') !== next.image) img.src = next.image;
      find('.processing-glyph').hidden = !!next.image;
      const key = JSON.stringify([next.steps, next.phase]);
      if (key !== stepKey) {
        stepKey = key; const list = find('ol'); list.replaceChildren();
        (next.steps || []).forEach((label, i) => {
          const li = document.createElement('li'); li.textContent = label;
          li.dataset.state = i < next.phase ? 'done' : i === next.phase ? 'active' : 'next';
          if (i === next.phase) li.setAttribute('aria-current','step'); list.append(li);
        });
      }
      const progress = find('progress');
      progress.setAttribute('aria-label',next.progressLabel || '服务商返回的进度');
      if (Number.isFinite(next.progress) && next.progress > 0 && next.progress < 100) {
        progress.value = next.progress; progress.setAttribute('aria-valuetext',next.progressText || `服务商进度 ${next.progress}%`);
      } else { progress.removeAttribute('value'); progress.setAttribute('aria-valuetext','服务商未提供当前阶段的确定进度'); }
      tick(); if (!timer) timer = setInterval(tick,1000);
    },
    finish() { clearInterval(timer);timer=null;host.classList.add('processing-finished');finishTimer=setTimeout(()=>{host.hidden=true;particles.stop();},450); }
  };
}

// Decorative point silhouette sampled from the reference photo, not reconstructed geometry.
function createParticlePreview(canvas, controls) {
  let frame=0, active=false, source=null, points=[], generation=0, last=0, elapsed=0;
  let yaw=0, pitch=-.12, targetYaw=0, targetPitch=-.12, auto=true, pointer=null;
  const ctx=canvas.getContext('2d');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  canvas.removeAttribute('aria-hidden'); canvas.tabIndex=0;
  canvas.setAttribute('role','img'); canvas.setAttribute('aria-label','可转动的粒子等待动效，非真实模型。拖动或按方向键改变视角。');
  const autoButton=controls.querySelector('[data-angle=auto]');
  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  function syncControls() {
    autoButton.textContent=reduced.matches?'减少动态已开启':auto?'暂停旋转':'自动环绕'; autoButton.setAttribute('aria-pressed',String(auto));autoButton.disabled=reduced.matches;
  }
  function schedule() { if(active&&!document.hidden&&!frame) frame=requestAnimationFrame(draw); }
  function view(name) {
    if(name==='auto') auto=!auto;
    else {
      auto=false; targetYaw=name==='side'?Math.PI/2:0; targetPitch=name==='top'?-1.15:-.12;
      // Take the shortest turn back to a preset after any number of orbits.
      yaw=Math.atan2(Math.sin(yaw),Math.cos(yaw));
    }
    syncControls(); schedule();
  }
  controls.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>view(button.dataset.angle)));
  canvas.addEventListener('pointerdown',event=>{
    if(!active||event.button!==0)return;
    pointer={id:event.pointerId,x:event.clientX,y:event.clientY}; auto=false;targetYaw=yaw;targetPitch=pitch;
    canvas.setPointerCapture(event.pointerId);canvas.classList.add('dragging');syncControls();
  });
  canvas.addEventListener('pointermove',event=>{
    if(!pointer||pointer.id!==event.pointerId)return;
    targetYaw+=(event.clientX-pointer.x)*.009;targetPitch=clamp(targetPitch+(event.clientY-pointer.y)*.007,-1.2,1.2);
    pointer.x=event.clientX;pointer.y=event.clientY;schedule();
  });
  function release(){pointer=null;canvas.classList.remove('dragging');}
  canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);canvas.addEventListener('lostpointercapture',release);
  canvas.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key))return;
    event.preventDefault();auto=false;
    targetYaw+=event.key==='ArrowLeft'?-.22:event.key==='ArrowRight'?.22:0;
    targetPitch=clamp(targetPitch+(event.key==='ArrowUp'?-.18:event.key==='ArrowDown'?.18:0),-1.2,1.2);syncControls();schedule();
  });
  document.addEventListener('visibilitychange',()=>{cancelAnimationFrame(frame);frame=0;last=0;schedule();});
  reduced.addEventListener('change',()=>{auto=!reduced.matches;syncControls();schedule();});
  new ResizeObserver(schedule).observe(canvas);
  function fallback() {
    points=Array.from({length:1100},(_,i)=>{
      const y=1-2*(i+.5)/1100,r=Math.sqrt(1-y*y)*.66,a=i*2.399963;
      return {x:Math.cos(a)*r,y:y*.8,z:Math.sin(a)*r,drift:a,color:'#bace93'};
    });
    canvas.dataset.source='ambient';
  }
  function load(url) {
    const revision=++generation, image=new Image();
    image.onload=()=>{
      if(revision!==generation)return;
      try {
      const sample=document.createElement('canvas');sample.width=sample.height=96;
      const sc=sample.getContext('2d',{willReadFrequently:true});
      const scale=88/Math.max(image.naturalWidth,image.naturalHeight),w=image.naturalWidth*scale,h=image.naturalHeight*scale;
      sc.drawImage(image,(96-w)/2,(96-h)/2,w,h);
      const data=sc.getImageData(0,0,96,96).data;
      const left=Math.min(94,Math.ceil((96-w)/2)+1),right=Math.max(left+1,Math.floor((96+w)/2)-2);
      const sampled=[];
      for(let y=0;y<96;y+=2)for(let x=0;x<96;x+=2){
        const i=(y*96+x)*4,r=data[i],g=data[i+1],b=data[i+2];
        const l=(y*96+left)*4,rr=(y*96+right)*4,mix=Math.max(0,Math.min(1,(x-left)/(right-left)));
        const bg=[0,1,2].map(c=>data[l+c]*(1-mix)+data[rr+c]*mix);
        // Row-wise edge colour also removes softly graded studio backgrounds.
        if(data[i+3]<100 || Math.hypot(r-bg[0],g-bg[1],b-bg[2])<32)continue;
        sampled.push({x:(x-48)/48,y:(y-48)/48,
          drift:Math.sin(x*12.9898+y*78.233)*Math.PI*2,color:`rgb(${Math.round(r*.55+95)},${Math.round(g*.55+105)},${Math.round(b*.5+78)})`});
      }
      if(sampled.length>40) {
        // Decorative depth only: the image silhouette is extruded into a layered cloud.
        // No inferred surface is exported or used as modelling input.
        const rows=new Map();
        for(const p of sampled){const row=rows.get(p.y)||{min:p.x,max:p.x};row.min=Math.min(row.min,p.x);row.max=Math.max(row.max,p.x);rows.set(p.y,row);}
        points=sampled.flatMap(p=>{
          const row=rows.get(p.y),half=Math.max(.04,(row.max-row.min)/2),u=(p.x-(row.min+row.max)/2)/half;
          const depth=Math.sqrt(Math.max(0,1-u*u))*Math.min(.5,half*.65)+.025;
          return [-1,0,1].map(layer=>({...p,z:depth*layer}));
        });
        canvas.dataset.source='photo';
      }
      } catch { fallback(); }
      schedule();
    };
    image.onerror=()=>{if(revision===generation){fallback();schedule();}};
    image.src=url;
  }
  function draw(now){
    frame=0;if(!active||!ctx)return;
    if(document.hidden){last=0;return;}
    if(last&&now-last<32){schedule();return;}
    const dt=last?Math.min((now-last)/1000,.06):0;last=now;elapsed+=dt;
    const width=canvas.clientWidth||380,height=canvas.clientHeight||260,ratio=Math.min(devicePixelRatio||1,1.5);
    if(canvas.width!==Math.round(width*ratio)||canvas.height!==Math.round(height*ratio)){canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);}
    ctx.setTransform(ratio,0,0,ratio,0,0);ctx.clearRect(0,0,width,height);
    const t=elapsed,settle=reduced.matches?1:Math.min(1,t/3.5),scatter=(1-settle)**3;
    if(auto&&!reduced.matches){targetYaw+=dt*.24;targetPitch=-.12+Math.sin(t*.21)*.27;}
    const ease=reduced.matches?1:1-Math.exp(-dt*9);
    yaw+=(targetYaw-yaw)*ease;pitch+=(targetPitch-pitch)*ease;
    const scale=Math.min(width*.32,height*.42),cy=Math.cos(yaw),sy=Math.sin(yaw),cp=Math.cos(pitch),sp=Math.sin(pitch);
    const project=(x,y,z)=>{const rx=x*cy+z*sy,rz=-x*sy+z*cy,ry=y*cp-rz*sp,depth=y*sp+rz*cp,perspective=3.5/(3.5-depth);return {x:width/2+rx*scale*perspective,y:height*.46+ry*scale*perspective,z:depth,k:perspective};};
    ctx.strokeStyle='#b8ce7635';ctx.lineWidth=1;
    for(const radius of [.95,1.12]){
      ctx.beginPath();for(let i=0;i<=80;i++){const a=i/80*Math.PI*2,p=project(Math.cos(a)*radius,.96,Math.sin(a)*radius);i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y);}ctx.stroke();
    }
    const projected=points.map(p=>({...project(p.x,p.y,p.z),p})).sort((a,b)=>a.z-b.z);
    for(const point of projected){
      const p=point.p,dx=Math.cos(p.drift+t*.3)*scatter*width*.42,dy=Math.sin(p.drift+t*.3)*scatter*height*.42;
      ctx.globalAlpha=clamp(.35+(point.z+1)*.28,.2,.95)*(.65+settle*.35);ctx.fillStyle=p.color;
      const size=clamp(scale/110,1,1.8)*point.k;ctx.fillRect(point.x+dx,point.y+dy,size,size);
    }
    // A soft scan band emphasizes depth without claiming generation progress.
    if(!reduced.matches&&auto){const scan=Math.sin(t*.8)*.8;ctx.fillStyle='#e6f7c5';ctx.globalAlpha=.7;for(const point of projected)if(Math.abs(point.p.y-scan)<.025)ctx.fillRect(point.x,point.y,2,2);}
    ctx.globalAlpha=1;
    canvas.dataset.yaw=yaw.toFixed(2);canvas.dataset.pitch=pitch.toFixed(2);
    const moving=Math.abs(targetYaw-yaw)+Math.abs(targetPitch-pitch)>.001;
    if(!reduced.matches&&(auto||settle<1||moving))schedule();
  }
  return {
    start(url){
      if(!active){active=true;last=0;elapsed=0;auto=!reduced.matches;yaw=targetYaw=0;pitch=targetPitch=-.12;syncControls();}
      if(source!==(url||'')){source=url||'';generation++;fallback();if(url)load(url);}
      schedule();
    },
    stop(){active=false;cancelAnimationFrame(frame);frame=0;last=0;if(pointer&&canvas.hasPointerCapture(pointer.id))canvas.releasePointerCapture(pointer.id);release();}
  };
}
