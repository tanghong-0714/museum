// Only these local exhibition hosts may control an embedded artifact page.
const params = new URLSearchParams(location.search);
const allowedOrigins = new Set([
  'http://127.0.0.1:5174', 'http://localhost:5174',
  'http://127.0.0.1:5192', 'http://localhost:5192',
]);
// The phone gateway serves both the hall and detail page on the same host.
for (const port of ['5174', '5192']) { const host = new URL(location.origin); host.port = port; allowedOrigins.add(host.origin); }
const origin = params.get('parentOrigin');
const embedded = params.get('museumEmbed') === '1' && window.parent !== window && allowedOrigins.has(origin);
const returnLink = document.querySelector('#return-hall');
const returnUrl = params.get('returnUrl');
if (returnLink && returnUrl) {
  try {
    const destination = new URL(returnUrl);
    if (allowedOrigins.has(destination.origin) && !destination.username && !destination.password) returnLink.href = destination.href;
  } catch {}
}
if (embedded) {
  const send = type => parent.postMessage({ channel: 'museum-artifact-v1', type, artifactId: params.has('modelJob') ? `model-${params.get('modelJob')}` : params.get('artifact') }, origin);
  send('loading');
  const root = document.querySelector('#experience');
  let sent = false, entered = false, failed = false, presentTimer;
  root.classList.add('museum-entry', 'museum-embedded');
  // Directory navigation has its own specimen loader; keep the detail chrome visible.
  if (params.get('viewTransition') === 'artifact') root.classList.add('museum-presented');
  if (returnLink) {
    returnLink.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span>';
    returnLink.setAttribute('aria-label', '返回展厅');
  }
  const style = document.createElement('style');
  style.textContent = `.museum-entry .header,.museum-entry .introduction,.museum-entry #artifact-chat,.museum-entry .manifest-controls,.museum-entry .bottom-line,.museum-entry .stage-tools,.museum-entry .experience-nav,.museum-entry #chat-dock{opacity:0;visibility:hidden;transition:opacity .4s ease;}
  .museum-entry.museum-presented .header,.museum-entry.museum-presented .introduction,.museum-entry.museum-presented #artifact-chat,.museum-entry.museum-presented .manifest-controls,.museum-entry.museum-presented .bottom-line,.museum-entry.museum-presented .stage-tools,.museum-entry.museum-presented .experience-nav,.museum-entry.museum-presented #chat-dock{opacity:1;visibility:visible;}`;
  style.textContent += `
  .museum-embedded #return-hall{display:inline-flex;align-items:center;gap:7px;min-height:38px;box-sizing:border-box;padding:8px 14px;border:1px solid #c8b68566;border-radius:24px;background:#10231e70;color:#ded6b8;white-space:nowrap;transition:background .2s,border-color .2s;}
  .museum-embedded #return-hall svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round;stroke-linejoin:round;}
  .museum-embedded #return-hall:hover{background:#233a30b8;border-color:#cfbb86;}
  .museum-embedded #return-hall:focus-visible{outline:2px solid #ddc893;outline-offset:4px;}
  @media(max-width:760px){.museum-embedded .header-actions{gap:8px}.museum-embedded .brand{font-size:12px;letter-spacing:1px}.museum-embedded #artifact-select{max-width:80px}.museum-embedded #return-hall{gap:4px;min-height:42px;padding:8px 10px;font-size:10px}.museum-embedded #return-hall svg{width:14px;height:14px;}}`;
  document.head.append(style);
  window.addEventListener('message', event => {
    if (event.origin !== origin || event.source !== parent || event.data?.channel !== 'museum-artifact-v1' || event.data.type !== 'enter' || entered) return;
    entered = true;
    window.dispatchEvent(new CustomEvent('museum-enter', { detail: { reduced: Boolean(event.data.reduced) } }));
    presentTimer = setTimeout(() => root.classList.add('museum-presented'), 0);
  });
  const check = () => {
    if (root.dataset.state && root.dataset.state !== 'loading' && !sent) { sent = true; send('ready'); }
    if (!failed && root.querySelector('#retry:not([hidden])')) { failed = true; send('error'); }
  };
  const observer = new MutationObserver(check);
  observer.observe(root, { attributes: true, subtree: true, attributeFilter: ['data-state', 'hidden'] });
  check();
  const home = document.querySelector('.brand');
  if (home) home.href = location.href;
  if (returnLink) returnLink.addEventListener('click', event => { event.preventDefault(); send('close'); });
  window.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || event.defaultPrevented || document.querySelector('dialog[open]')) return;
    event.preventDefault();
    send('close');
  });
  window.addEventListener('pagehide', () => { observer.disconnect(); clearTimeout(presentTimer); }, { once: true });
}
