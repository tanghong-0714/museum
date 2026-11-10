// Gallery integration only. Workbench features and persistence are owned by its app.
(() => {
  if (window.parent === window) return;
  const origin = 'http://127.0.0.1:5174';
  const channel = 'museum-research-v1';
  const send = type => parent.postMessage({ channel, type }, origin);
  let closing = false;
  async function close() {
    if (closing) return;
    closing = true;
    const pending = [];
    // Optional app hook: detail.waitUntil(savePromise) delays the return transition.
    // preventDefault() keeps the workbench open for its own confirmation UI.
    const event = new CustomEvent('museum:before-close', { cancelable: true, detail: { waitUntil(promise) { pending.push(Promise.resolve(promise)); } } });
    if (!window.dispatchEvent(event)) { closing = false; return; }
    try { await Promise.all(pending); send('close-ready'); }
    catch { send('close-blocked'); }
    finally { closing = false; }
  }
  window.addEventListener('message', event => {
    if (event.origin !== origin || event.source !== parent || event.data?.channel !== channel) return;
    if (event.data.type === 'request-close') void close();
  });
  window.addEventListener('keydown', event => { if (event.key === 'Escape' && !document.querySelector('dialog[open]')) void close(); });
  send('ready');
})();
