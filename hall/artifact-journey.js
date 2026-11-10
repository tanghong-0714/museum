import { exhibitLabelCopy } from './exhibit-label-config.js';
import './artifact-journey.css';
import { createArrivalGate } from './arrival-gate.js';

export function createArtifactJourney({ captureFrame, isReduced }) {
  const element = document.createElement('section');
  element.className = 'artifact-journey';
  element.innerHTML = `<canvas class="journey-scene" aria-hidden="true"></canvas><div class="journey-shade" aria-hidden="true"></div><div class="journey-threshold" aria-hidden="true"></div><div class="journey-copy"><span class="journey-kicker">一器 · 一世界</span><h2></h2><p class="journey-line"></p><div class="journey-trace" aria-hidden="true"><i></i></div><p class="journey-note" role="status">光里的细节，正慢慢靠近。</p><div class="journey-actions" hidden><button type="button">重新载入</button><a target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>`;
  const surface = element.querySelector('canvas');
  const note = element.querySelector('.journey-note');
  const actions = element.querySelector('.journey-actions');
  const gate = createArrivalGate();
  let animation = 0, finishTimer = null, active = false;
  function cancel() {
    active = false; gate.cancel(); cancelAnimationFrame(animation); clearTimeout(finishTimer);
    surface.width = surface.height = 1; element.hidden = true;
  }
  function start(assignment, focus = { x: .5, y: .5 }) {
    cancel(); active = true; element.hidden = false;
    const reduced = isReduced();
    element.classList.toggle('journey-reduced', reduced);
    element.dataset.phase = 'start';
    element.style.setProperty('--focus-x', `${Math.max(.1, Math.min(.9, focus.x)) * 100}%`);
    element.style.setProperty('--focus-y', `${Math.max(.1, Math.min(.9, focus.y)) * 100}%`);
    element.querySelector('h2').textContent = assignment.name;
    element.querySelector('.journey-line').textContent = exhibitLabelCopy[assignment.artifactId] || '循着器物的轮廓，走进它的故事。';
    note.textContent = '光里的细节，正慢慢靠近。';
    actions.hidden = true;
    try {
      const source = captureFrame?.();
      if (source?.width && source?.height) {
        const scale = Math.min(1, 1600 / source.width);
        surface.width = Math.round(source.width * scale); surface.height = Math.round(source.height * scale);
        surface.getContext('2d').drawImage(source, 0, 0, surface.width, surface.height);
      }
    } catch { surface.width = surface.height = 1; }
    gate.start(reduced ? 0 : 1150);
    animation = requestAnimationFrame(() => { if (active) element.dataset.phase = 'approach'; });
  }
  return {
    element,
    retryButton: actions.querySelector('button'),
    standalone: actions.querySelector('a'),
    start, cancel,
    reveal(onEnter, onFinish) {
      gate.ready(() => {
        if (!active) return;
        element.dataset.phase = 'reveal';
        onEnter();
        finishTimer = setTimeout(() => {
          if (!active) return;
          element.hidden = true; surface.width = surface.height = 1; onFinish();
        }, isReduced() ? 120 : 950);
      });
    },
    fail(message) {
      gate.cancel(); clearTimeout(finishTimer); cancelAnimationFrame(animation);
      element.hidden = false; element.dataset.phase = 'error';
      note.textContent = message; actions.hidden = false;
    },
  };
}
