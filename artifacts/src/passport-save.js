export const needsImageSave = (ua = navigator.userAgent) => /MicroMessenger|Android|iPhone|iPad|iPod/i.test(ua);

export function mountCardSave({dialog, getBlob}) {
  const sheet = document.createElement('section');
  sheet.className = 'pp-save-sheet'; sheet.hidden = true;
  sheet.setAttribute('aria-label', '保存收藏卡原图');
  sheet.innerHTML = '<header><h3>保存收藏卡</h3><button type="button" class="pp-save-back">返回打卡</button></header><p class="pp-save-message" role="status"></p><img class="pp-save-image" alt="文物收藏卡原图，长按图片保存到手机" hidden><button type="button" class="pp-save-retry" hidden>重新准备图片</button><a class="pp-save-original" target="_blank" rel="noopener noreferrer" hidden>打开原图 ↗</a><p class="pp-save-note">长按图片，选择“保存到手机”或“保存图片”。没有菜单时，可打开原图再长按，或用手机浏览器打开当前页面。</p>';
  dialog.append(sheet);
  const $ = selector => sheet.querySelector(selector);
  let controller = null, cached = null, version = 0;
  function close() {
    ++version; controller?.abort(); controller = null;
    sheet.hidden = true;
    for (const node of dialog.children) if (node !== sheet) node.inert = false;
  }
  async function open() {
    const blob = getBlob(); if (!blob) return;
    close(); const current = version;
    sheet.hidden = false;
    for (const node of dialog.children) if (node !== sheet) node.inert = true;
    $('.pp-save-back').focus();
    $('.pp-save-image').hidden = true; $('.pp-save-original').hidden = true; $('.pp-save-retry').hidden = true;
    $('.pp-save-message').textContent = '正在准备可保存的原图…';
    const requestController = new AbortController();
    controller = requestController;
    const timeout = setTimeout(() => requestController.abort(), 20_000);
    try {
      if (!cached || cached.blob !== blob || cached.expiresAt < Date.now() + 60_000) {
        const response = await fetch('/api/card-images', {method:'POST',headers:{'Content-Type':'image/png'},body:blob,credentials:'same-origin',signal:requestController.signal});
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || '原图准备失败，请重试。');
        if (current !== version) return;
        if (!/^\/api\/card-images\/[a-f0-9]{48}\.png$/.test(result.url)) throw new Error('图片地址异常，请重试。');
        cached = {blob,url:result.url,expiresAt:result.expiresAt};
      }
      const image = $('.pp-save-image'); image.src = cached.url;
      await image.decode();
      if (current !== version) return;
      image.hidden = false;
      $('.pp-save-original').href = cached.url; $('.pp-save-original').hidden = false;
      $('.pp-save-message').textContent = '长按下方图片，保存到手机相册';
    } catch (error) {
      if (current !== version) return;
      cached = null;
      $('.pp-save-message').textContent = error.name === 'AbortError' ? '连接超时，请确认电脑服务仍在运行后重试。' : '原图暂未准备好，请重试。';
      $('.pp-save-retry').hidden = false;
    } finally { clearTimeout(timeout); }
  }
  $('.pp-save-back').onclick = close;
  $('.pp-save-retry').onclick = open;
  sheet.addEventListener('keydown', event => { if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(); } });
  dialog.addEventListener('close', close);
  return {open, reset() { close(); cached = null; $('.pp-save-image').removeAttribute('src'); }, destroy() { close(); dialog.removeEventListener('close',close); sheet.remove(); }};
}
