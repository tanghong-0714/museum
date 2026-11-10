const clamp = value => Math.max(0, Math.min(1, value));
export class Manifestation {
 constructor(reduced=false){this.reduced=reduced;this.formDuration=2.5;this.state='dormant';this.progress=0;this.elapsed=0;this.visualTime=0;}
 get busy(){return this.state==='forming'||this.state==='dissolving';}
 present(){this.state='formed';this.progress=1;this.elapsed=0;}
 form(){if(this.state!=='dormant')return false;this.elapsed=0;this.state=this.reduced?'formed':'forming';this.progress=this.reduced?1:0;return true;}
 toggle(){if(this.busy)return false;if(this.state==='dormant')return this.form();this.elapsed=0;this.state=this.reduced?'dormant':'dissolving';this.progress=this.reduced?0:1;return true;}
 tick(dt){
  const step=Math.max(0,Number.isFinite(dt)?dt:0);
  if(!this.reduced)this.visualTime+=step;
  if(this.busy){this.elapsed+=step;const forming=this.state==='forming',t=clamp(this.elapsed/(forming?this.formDuration:1.8)),smooth=t*t*(3-2*t);this.progress=forming?smooth:1-smooth;if(t===1)this.state=forming?'formed':'dormant';}
  return {assembly:this.progress,reveal:clamp((this.progress-.38)/.62),dissolve:0};
 }
}
