import test from 'node:test';
import assert from 'node:assert/strict';
import {Manifestation} from '../src/timeline.js';
import {TapGesture} from '../src/gesture.js';
test('immersive entry presents the complete artifact and effect returns to complete form',()=>{const m=new Manifestation();m.present();assert.equal(m.state,'formed');assert.equal(m.tick(0).reveal,1);m.toggle();m.tick(1.8);assert.equal(m.state,'dormant');m.form();m.tick(2.5);assert.equal(m.state,'formed');m.present();assert.equal(m.busy,false);});
test('resting artifact never auto-starts, forms once and remains solid until requested',()=>{
 const m=new Manifestation();m.tick(100);assert.equal(m.state,'dormant');assert.equal(m.progress,0);
 assert.equal(m.toggle(),true);m.tick(1);assert.equal(m.busy,true);assert.ok(m.progress>0&&m.progress<1);
 assert.equal(m.toggle(),false);m.tick(1.5);assert.equal(m.state,'formed');assert.equal(m.progress,1);
 m.tick(100);assert.equal(m.state,'formed');m.toggle();m.tick(1.8);assert.equal(m.state,'dormant');assert.equal(m.progress,0);
});
test('repeated cycles return to identical endpoints with bounded particle uniforms',()=>{
 const m=new Manifestation();for(let cycle=0;cycle<5;cycle++){
  m.toggle();for(let i=0;i<160;i++){const f=m.tick(.02);for(const v of Object.values(f))assert.ok(v>=0&&v<=1);}
  assert.equal(m.state,'formed');m.toggle();m.tick(2);assert.equal(m.state,'dormant');assert.equal(m.progress,0);
 }
});
test('reduced motion switches directly without animated transitions',()=>{
 const m=new Manifestation(true);m.form();assert.equal(m.state,'formed');m.tick(10);assert.equal(m.visualTime,0);m.toggle();assert.equal(m.state,'dormant');
});
test('simple taps work but rotation, long holds, right buttons and cancelled gestures do not',()=>{
 const g=new TapGesture();g.down(1,10,10,0);assert.equal(g.up(1,12,10,150),true);
 g.down(1,10,10,0);g.move(1,100,10);assert.equal(g.up(1,10,10,150),false);
 g.down(1,10,10,0);assert.equal(g.up(1,10,10,700),false);
 g.down(1,10,10,0,2);assert.equal(g.up(1,10,10,100),false);
 g.down(1,10,10,0);g.cancel(1);assert.equal(g.up(1,10,10,100),false);
});
test('two-finger gestures never leave a single-finger tap behind',()=>{
 const g=new TapGesture();g.down(1,10,10,0);g.down(2,20,20,10);assert.equal(g.up(2,20,20,100),false);assert.equal(g.up(1,10,10,120),false);
 g.down(3,10,10,200);assert.equal(g.up(3,10,10,300),true);
});
