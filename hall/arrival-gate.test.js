import assert from 'node:assert/strict';
import { createArrivalGate } from './arrival-gate.js';
let clock = 0, sequence = 0, calls = 0;
const jobs = new Map();
const gate = createArrivalGate({ now:()=>clock, schedule:(fn,delay)=>{const id=++sequence;jobs.set(id,{fn,at:clock+delay});return id;}, unschedule:id=>jobs.delete(id) });
function tick(time) { clock=time;for(const [id,job] of jobs)if(job.at<=clock){jobs.delete(id);job.fn();} }
gate.start(1150);gate.ready(()=>calls++);gate.ready(()=>calls++);
tick(1149);assert.equal(calls,0);tick(1150);assert.equal(calls,1);
gate.start(1150);tick(4000);gate.ready(()=>calls++);tick(4000);assert.equal(calls,2,'slow load should not incur another full delay');
gate.start(1150);gate.ready(()=>calls++);const stale=[...jobs.values()][0].fn;gate.cancel();stale();tick(6000);assert.equal(calls,2,'cancel must defeat even already-queued callbacks');
gate.ready(()=>calls++);tick(7000);assert.equal(calls,2,'late ready after close must be ignored');
gate.start(0);gate.ready(()=>calls++);tick(7000);assert.equal(calls,3,'reduced motion should reveal immediately');
gate.start(1150);gate.ready(()=>calls++);gate.start(0);gate.ready(()=>calls++);tick(9000);assert.equal(calls,4,'retry replaces the previous transition');
console.log('PASS: fast/slow readiness, exactly-once entry, close cancellation, late events, retry and reduced motion');
