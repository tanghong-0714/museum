// The glass, meeting stiles and paired handles all share the same leaf motion.
export class SlidingGlassDoor {
  constructor(root,{duration=1.15}={}) {
    this.duration=duration;this.progress=0;this.target=0;this.parts=[];
    root.traverse(mesh=>{
      if(!mesh.isMesh||![-1,1].includes(mesh.userData.doorLeaf))return;
      this.parts.push({mesh,sign:mesh.userData.doorLeaf,closedX:mesh.position.x,travel:mesh.userData.slideDistance||2.26});
    });
    if(![-1,1].every(sign=>this.parts.some(part=>part.sign===sign)))throw new Error('双扇玻璃门模型缺少门扇');
  }
  toggle(){this.target=1-this.target;return this.target===1;}
  update(dt) {
    if(this.progress===this.target)return false;
    const step=Math.max(0,dt)/this.duration;
    this.progress=this.target>this.progress?Math.min(this.target,this.progress+step):Math.max(this.target,this.progress-step);
    const eased=this.progress*this.progress*(3-2*this.progress);
    for(const part of this.parts)part.mesh.position.x=part.closedX+part.sign*part.travel*eased;
    return this.target===1&&this.progress===1;
  }
  reset(){
    this.progress=0;this.target=0;
    for(const part of this.parts)part.mesh.position.x=part.closedX;
  }
  getState(){return {open:this.target===1,progress:this.progress,leaves:[-1,1].map(sign=>({side:sign,offset:this.parts.find(part=>part.sign===sign).mesh.position.x-this.parts.find(part=>part.sign===sign).closedX}))};}
}
