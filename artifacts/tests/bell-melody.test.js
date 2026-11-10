import test from 'node:test';
import assert from 'node:assert/strict';
import {bellMelody,createBellMelody} from '../src/bell-melody.js';
test('original tune plays ordered notes once and ends after eight bars',()=>{const heard=[];let ended=0;const p=createBellMelody((bell)=>heard.push(bell),()=>ended++);p.start();for(let i=0;i<2401;i++)p.update(.01);assert.deepEqual(heard,bellMelody.notes.map(n=>n[1]));assert.equal(ended,1);assert.equal(p.active,false);assert.ok(heard.every(n=>n>=0&&n<5));});
test('stop cancels later notes and replay starts from the beginning',()=>{const heard=[];const p=createBellMelody(n=>heard.push(n),()=>{});p.start();p.update(.01);p.stop();p.update(10);assert.deepEqual(heard,[0]);p.start();p.update(.01);assert.deepEqual(heard,[0,0]);});
