// Rotation, extra fingers, zoom and cancelled pointers must not become a tap.
export class TapGesture {
 constructor(){this.pointers=new Set();this.tap=null;}
 down(id,x,y,time,button=0){this.pointers.add(id);if(this.pointers.size!==1||button!==0){this.tap=null;return;}this.tap={id,x,y,time};}
 move(id,x,y){if(this.tap?.id===id&&Math.hypot(x-this.tap.x,y-this.tap.y)>8)this.tap=null;}
 cancel(id){this.pointers.delete(id);this.tap=null;}
 up(id,x,y,time){this.move(id,x,y);const valid=this.tap?.id===id&&time-this.tap.time<600&&this.pointers.size===1;this.cancel(id);return Boolean(valid);}
}
