// One cancellable hand-off. Late iframe messages must never revive a closed visit.
export function createArrivalGate({ now = () => performance.now(), schedule = setTimeout, unschedule = clearTimeout } = {}) {
  let started = 0, minimum = 0, timer = null, generation = 0, committed = false;
  function cancel() { generation++; unschedule(timer); timer = null; committed = true; }
  return {
    start(duration) { cancel(); started = now(); minimum = duration; committed = false; },
    ready(callback) {
      if (committed) return;
      committed = true;
      const version = generation;
      timer = schedule(() => { timer = null; if (version === generation) callback(); }, Math.max(0, minimum - (now() - started)));
    },
    cancel,
  };
}
