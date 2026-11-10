// Original pentatonic miniature, 8 bars in 4/4 at 80 BPM.
export const bellMelody = {title:'钟庭微风', bpm:80, beats:32,
 notes:[[0,0],[1,2],[2,3],[3,2],[4,1],[5,0],[6,1],[7,2],
 [8,3],[9,4],[10,3],[11,2],[12,1],[13,2],[14,0],
 [16,2],[17,3],[18,4],[19,3],[20,2],[21,1],[22,2],[23,3],
 [24,4],[25,3],[26,2],[27,1],[28,2],[29,1],[30,0]]};
export function createBellMelody(onNote,onEnd){
 let elapsed=0,index=0,active=false;
 return {get active(){return active;},start(){elapsed=0;index=0;active=true;},stop(){active=false;},
 update(dt){if(!active)return;elapsed+=Math.max(0,dt);const beat=elapsed*bellMelody.bpm/60;
 while(index<bellMelody.notes.length&&bellMelody.notes[index][0]<=beat){const [at,bell]=bellMelody.notes[index++];onNote(bell,{beat:at,index,total:bellMelody.notes.length});if(!active)return;}
 if(beat>=bellMelody.beats){active=false;onEnd();}}};
}
