import './passport.css';
import {artifactShareUrl, renderPassportPoster, getCardTheme, getCardThumbnail, getCardPortrait} from './passport-media.js';
import {renderAchievements} from './passport-achievements.js';
import {mountCardSave, needsImageSave} from './passport-save.js';

const dateText = value => value ? new Date(value).toLocaleString('zh-CN', {hour12:false}) : '尚未领取';
const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

export function mountPassport({exhibit, exhibits, isReady, captureArtifact}) {
  const launcher = el('button', 'pp-launcher', '文物打卡 ↗');
  launcher.type = 'button';
  launcher.setAttribute('aria-haspopup', 'dialog');
  const dialog = el('dialog', 'pp-dialog');
  dialog.setAttribute('aria-labelledby', 'pp-title');
  dialog.innerHTML = `<header class="pp-topbar"><div><span class="pp-eyebrow">A MOMENT, COLLECTED</span><h2 id="pp-title">文物打卡</h2></div><div class="pp-header-actions"><button class="pp-settings-open" type="button" aria-label="护照设置">⚙</button><button class="pp-close" type="button" aria-label="关闭文物打卡">×</button></div></header>
  <div class="pp-body"><section class="pp-page pp-card-page" data-page="card"><div class="pp-card-caption"><span>此刻相逢</span><span class="pp-card-name"></span></div><div class="pp-poster-stage"><div class="pp-placeholder"><span class="pp-loading-mark">印</span><p>正在准备这份相逢</p></div><img class="pp-preview" alt="当前文物收藏卡预览，含文物展页二维码" hidden></div><p class="pp-status" role="status" aria-live="polite"></p><button class="pp-retry" type="button" hidden>重试生成卡片</button><div class="pp-poster-actions"><a class="pp-download" download aria-disabled="true">保存图片</a><button class="pp-system-share" type="button" disabled>分享卡片 ↗</button></div><p class="pp-boundary">数字观展纪念 · 卡片二维码可回到这件文物</p><p class="pp-network"></p></section>
  <section class="pp-page pp-collection-page" data-page="collection" hidden><div class="pp-section-title"><div><span class="pp-eyebrow">YOUR LITTLE MUSEUM</span><h3>我的藏印</h3></div><span class="pp-count"></span></div><p class="pp-section-note">把每一次驻足，收进自己的小小博物馆。</p><div class="pp-stamps"></div><div class="pp-pagination"><button class="pp-prev" type="button" aria-label="上一页藏印">←</button><span class="pp-page-number"></span><button class="pp-next" type="button" aria-label="下一页藏印">→</button></div></section>
  <section class="pp-page pp-achievements-page" data-page="achievements" hidden><div class="pp-achievements"></div></section>
  <section data-page="settings" class="pp-page pp-settings" aria-label="护照设置" hidden><h3>保存这份相逢</h3><p class="pp-profile"></p><p class="pp-retention"></p><p class="pp-storage-note">护照身份保存在当前浏览器，清理浏览器数据可能失去身份。服务端记录不会随浏览器会话结束自动删除。可按需保管恢复码，在其他设备找回护照。</p>
    <form class="pp-nickname-form"><label>昵称（可选）<input name="nickname" autocomplete="nickname" maxlength="30" placeholder="留空使用“观展游客”"></label><button type="submit">保存昵称</button><p class="pp-settings-status" role="status"></p></form>
    <div class="pp-recovery"><h4>护照恢复码</h4><p>恢复码可找回这份护照，请私下保管。持有码的人可以访问护照，请勿放进公开分享内容。</p><button class="pp-recovery-generate" type="button">生成恢复码</button><div class="pp-rotation" hidden><p>重新生成会立即使旧恢复码失效。请确认你准备保存新码。</p><button class="pp-rotation-confirm" type="button">确认使旧码失效并生成新码</button><button class="pp-rotation-cancel" type="button">取消</button></div><p class="pp-recovery-status" role="status"></p><div class="pp-recovery-result" hidden><label>请下载或复制保存恢复码<textarea class="pp-recovery-code" readonly autocomplete="off" spellcheck="false"></textarea></label><div class="pp-recovery-actions"><a class="pp-recovery-download" download="观展护照恢复码.txt">下载恢复码文本</a><button class="pp-recovery-copy" type="button">复制恢复码</button></div><p>关闭护照后，此处明文会清除。遗失时可重新生成，新码将替代旧码。</p></div></div>
    <form class="pp-restore-form"><h4>恢复已有护照</h4><p>输入你保管的恢复码。当前游客藏印会合并到恢复的护照，同一文物保留一枚印章。</p><label>恢复码<input name="recoveryCode" required autocomplete="off" spellcheck="false" autocapitalize="none"></label><button type="submit">恢复并合并藏印</button><p class="pp-restore-status" role="status"></p></form></section>

  </div><nav class="pp-nav" aria-label="打卡页面"><button type="button" data-view="card" aria-current="page"><span>▣</span>文物打卡</button><button type="button" data-view="collection"><span>▦</span>我的藏印</button><button type="button" data-view="achievements"><span>✧</span>观展成就</button></nav>`;
  document.body.append(launcher, dialog);
  const $ = selector => dialog.querySelector(selector);
  $('.pp-card-name').textContent = exhibit.title;
  const theme = getCardTheme(exhibit.id);
  dialog.style.setProperty('--card-paper', theme.paper);
  dialog.style.setProperty('--card-ink', theme.ink);
  dialog.style.setProperty('--card-accent', theme.accent);
  const specimen = el('img', 'pp-loading-specimen');
  specimen.alt = '';
  const portraitUrl = getCardPortrait(exhibit.id);
  if (portraitUrl) specimen.src = portraitUrl;
  specimen.onerror = () => { specimen.hidden = true; };
  const portrait = new Image();
  if (portraitUrl) portrait.src = portraitUrl;
  const portraitReady = portraitUrl ? portrait.decode().then(() => portrait).catch(() => null) : Promise.resolve(null);
  $('.pp-placeholder').prepend(el('span', 'pp-loading-title', exhibit.title), specimen);
  $('.pp-loading-mark').textContent = '藏';
  $('.pp-placeholder p').textContent = '把这一眼相逢，收进藏印';
  $('.pp-poster-stage').setAttribute('aria-busy', 'true');
  let passport = null, busy = false, posterBlob = null, posterUrl = null, destroyed = false;
  let posterKey = null, openedAt = 0;
  const cardSave = mountCardSave({dialog, getBlob: () => posterBlob});
  $('.pp-download').onclick = event => {
    if (!posterBlob) { event.preventDefault(); return; }
    if (needsImageSave()) { event.preventDefault(); cardSave.open(); }
  };
  let recoveryUrl = null, viewVersion = 0, page = 'card', collectionPage = 0, automaticFailed = false;
  let pendingLoad = null, opening = false;
  const status = message => { $('.pp-status').textContent = message; };
  const getVisit = () => passport?.visits.find(visit => visit.artifactId === exhibit.id);
  const cardKey = () => JSON.stringify([getVisit()?.firstVisitedAt, collectionIndex(), artifactShareUrl(exhibit.id, passport?.publicBaseUrl)]);
  function collectionIndex() {
    return [...(passport?.visits || [])].sort((a,b) => a.firstVisitedAt.localeCompare(b.firstVisitedAt) || a.artifactId.localeCompare(b.artifactId)).findIndex(item => item.artifactId === exhibit.id) + 1;
  }
  const active = version => !destroyed && dialog.open && version === viewVersion;
  function switchPage(next) {
    if (next !== page) {
      ++viewVersion;
      if (page === 'settings') clearRecovery();
    }
    page = next;
    dialog.querySelectorAll('[data-page]').forEach(node => { node.hidden = node.dataset.page !== next; });
    dialog.querySelectorAll('[data-view]').forEach(node => {
      if (node.dataset.view === next) node.setAttribute('aria-current', 'page');
      else node.removeAttribute('aria-current');
    });
    $('#pp-title').textContent = {card:'文物打卡',collection:'我的藏印',achievements:'观展成就',settings:'护照设置'}[next];
    $('.pp-body').scrollTop = 0;
    if (next === 'card') ensureCard();
  }
  function setBusy(value) {
    busy = value;
    $('.pp-poster-stage').setAttribute('aria-busy', String(value && !posterBlob));
    dialog.querySelectorAll('.pp-settings input,.pp-settings button,.pp-retry').forEach(node => { node.disabled = value; });
  }
  async function request(path = '', data) {
    const response = await fetch(`/api/passport${path}`, {method:data === undefined ? 'GET' : 'POST', credentials:'same-origin', headers:data === undefined ? {} : {'Content-Type':'application/json'}, ...(data === undefined ? {} : {body:JSON.stringify(data)})});
    let body;
    try { body = await response.json(); } catch { throw new Error('护照服务返回异常，请稍后重试。'); }
    if (!response.ok) throw new Error(body.error?.message || '护照服务暂时不可用，请重试。');
    return body;
  }
  function clearPoster() {
    cardSave.reset();
    if (posterUrl) URL.revokeObjectURL(posterUrl);
    posterUrl = null;
    posterBlob = null;
    posterKey = null;
    dialog.dataset.cardState = 'loading';
    $('.pp-preview').removeAttribute('src');
    $('.pp-preview').hidden = true;
    $('.pp-placeholder').hidden = false;
    $('.pp-placeholder').removeAttribute('aria-hidden');
    $('.pp-download').removeAttribute('href');
    $('.pp-download').setAttribute('aria-disabled', 'true');
    $('.pp-system-share').disabled = true;
  }
  function clearRecovery() {
    if (recoveryUrl) URL.revokeObjectURL(recoveryUrl);
    recoveryUrl = null;
    $('.pp-recovery-code').value = '';
    $('.pp-recovery-download').removeAttribute('href');
    $('.pp-recovery-result').hidden = true;
    $('.pp-rotation').hidden = true;
    $('.pp-restore-form').reset();
    $('.pp-recovery-status').textContent = '';
    $('.pp-restore-status').textContent = '';
  }
  function renderCollection() {
    if (!passport) return;
    const items = Object.values(exhibits);
    const pages = Math.max(1, Math.ceil(items.length / 6));
    collectionPage = Math.min(collectionPage, pages - 1);
    $('.pp-count').textContent = `${passport.visits.length} / ${passport.artifactCount}`;
    const cards = items.slice(collectionPage * 6, collectionPage * 6 + 6).map(item => {
      const visit = passport.visits.find(record => record.artifactId === item.id);
      const theme = getCardTheme(item.id);
      const card = el(item.id === exhibit.id ? 'button' : 'a', `pp-stamp${visit ? ' pp-collected' : ''}`);
      if (card.tagName === 'BUTTON') {
        card.type = 'button';
        card.onclick = () => {
          dialog.close();
          document.querySelector('.experience-nav [data-mode="view"]')?.click();
        };
      } else {
        card.href = artifactShareUrl(item.id);
        if (window.parent !== window) { card.target = '_blank'; card.rel = 'noopener noreferrer'; }
      }
      card.style.setProperty('--stamp-paper', theme.paper);
      card.style.setProperty('--stamp-ink', theme.ink);
      card.style.setProperty('--stamp-accent', theme.accent);
      const mark = el('span','pp-stamp-mark', visit ? '藏' : '待');
      mark.setAttribute('aria-hidden','true');
      const visual = el('span', 'pp-stamp-visual');
      const image = el('img', 'pp-stamp-image');
      image.alt = '';
      image.loading = 'lazy';
      image.onerror = () => { image.hidden = true; visual.classList.add('pp-image-fallback'); };
        const thumbnail = getCardThumbnail(item.id);
        if (thumbnail) image.src = thumbnail;
        else { image.hidden = true; visual.classList.add('pp-image-fallback'); }
      visual.append(image, mark);
      card.append(visual, el('strong','',item.title), el('small','', visit ? '已收入藏印 · 点击查看' : '待相逢 · 前往观展'));
      return card;
    });
    while (cards.length < 6) { const empty = el('div','pp-stamp pp-empty','静候下一次相逢'); empty.setAttribute('aria-hidden','true'); cards.push(empty); }
    $('.pp-stamps').replaceChildren(...cards);
    $('.pp-page-number').textContent = `${collectionPage + 1} / ${pages}`;
    $('.pp-prev').disabled = collectionPage === 0;
    $('.pp-next').disabled = collectionPage === pages - 1;
  }
  function render(snapshot) {
    passport = snapshot;
    if (posterBlob && posterKey !== cardKey()) clearPoster();
    const host = new URL(artifactShareUrl(exhibit.id, snapshot.publicBaseUrl)).hostname;
    const local = /^(localhost|127\.|0\.0\.0\.0$|\[?::1\]?$)/i.test(host);
    const lan = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(host) || host.endsWith('.local');
    $('.pp-network').textContent = local ? '当前为本机展页，其他设备扫码暂不可访问。' : lan ? '当前为局域网展页，扫码设备需连接同一网络。' : '';
    renderCollection();
    renderAchievements($('.pp-achievements'), snapshot);
    $('.pp-profile').textContent = `${snapshot.profile.nickname}的数字观展护照`;
    $('.pp-nickname-form [name="nickname"]').value = snapshot.profile.nickname === '观展游客' ? '' : snapshot.profile.nickname;
    $('.pp-retention').textContent = snapshot.storage?.expiresAt ? `浏览器身份按最近使用滚动保存 ${snapshot.storage.retentionDays} 天，当前有效至 ${dateText(snapshot.storage.expiresAt)}。` : '正在确认浏览器身份保存期限。';
    $('.pp-recovery-generate').textContent = snapshot.storage?.hasRecoveryCode ? '重新生成恢复码' : '生成恢复码';
  }
  async function load() {
    if (pendingLoad) return pendingLoad;
    pendingLoad = (async () => {
      const result = await request();
      if (!destroyed) render(result.passport || result);
    })();
    try { await pendingLoad; } finally { pendingLoad = null; }
  }
  async function ensureCard(background = false) {
    if (destroyed || busy || opening || pendingLoad || automaticFailed || posterBlob) return;
    if (background ? !getVisit() || !isReady() : !dialog.open || page !== 'card') return;
    const version = viewVersion;
    const current = () => !destroyed && (background || active(version));
    if (!passport) return;
    if (!isReady() && !portraitUrl) { status('器物正在就绪，完成后会自动生成收藏卡…'); return; }
    setBusy(true);
    $('.pp-retry').hidden = true;
    try {
      if (!getVisit()) {
        status('正在将这次相逢收入藏印…');
        const result = await request('/checkin', {artifactId:exhibit.id});
        if (!destroyed) render(result.passport);
        if (!current()) return;
      }
      status('正在制作你的文物收藏卡…');
      await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
      if (!current()) return;
      const artifactImage = await portraitReady || (isReady() ? await captureArtifact() : null);
      if (!current()) return;
      if (!artifactImage && !isReady()) { status('器物正在就绪，完成后会自动生成收藏卡…'); return; }
      if (!artifactImage) throw new Error('暂时无法取得器物画面，请重试。');
      const key = cardKey();
      const blob = await renderPassportPoster({exhibit,visit:getVisit(),nickname:passport.profile.nickname,hideNickname:true,style:'artifact',shareUrl:artifactShareUrl(exhibit.id,passport.publicBaseUrl),artifactImage,collectionCount:collectionIndex()});
      if (!current() || key !== cardKey()) return;
      const url = URL.createObjectURL(blob);
      const preview = $('.pp-preview');
      preview.src = url;
      try { await preview.decode(); } catch (error) { URL.revokeObjectURL(url); throw error; }
      if (!current() || key !== cardKey()) { preview.removeAttribute('src'); URL.revokeObjectURL(url); return; }
      posterBlob = blob;
      posterKey = key;
      posterUrl = url;
      preview.hidden = false;
      dialog.dataset.cardState = 'ready';
      $('.pp-placeholder').setAttribute('aria-hidden', 'true');
      $('.pp-download').href = posterUrl;
      $('.pp-download').download = `${exhibit.id}-文物收藏卡.png`;
      $('.pp-download').removeAttribute('aria-disabled');
      $('.pp-system-share').disabled = false;
      status('已收入藏印，留住这一眼相逢。');
      if (dialog.open) performance.measure('passport-card-ready', {start:openedAt});
    } catch (error) {
      if (current()) { automaticFailed = true; status(error.message || '收藏卡制作失败，请重试。'); $('.pp-retry').hidden = false; }
    } finally { if (!destroyed) { setBusy(false); if (version !== viewVersion && dialog.open) ensureCard(); } }
  }
  async function open() {
    if (destroyed || dialog.open) return;
    ++viewVersion;
    automaticFailed = false;
    opening = true;
    openedAt = performance.now();
    dialog.showModal();
    document.body.classList.add('passport-open');
    switchPage('card');
    status(posterBlob ? '已收入藏印，留住这一眼相逢。' : '正在翻开你的藏印…');
    if (posterBlob) performance.measure('passport-card-cached', {start:openedAt});
    const version = viewVersion;
    try { await load(); if (!destroyed && dialog.open) { opening = false; ensureCard(); } }
    catch (error) { if (!destroyed && dialog.open) { opening = false; automaticFailed = true; status(error.message); $('.pp-retry').hidden = false; } }
  }
  async function mutate(path, data, message, target = '.pp-status', onSuccess) {
    if (busy) return;
    const version = viewVersion;
    setBusy(true);
    $(target).textContent = '正在保存…';
    try {
      const result = await request(path, data);
      if (destroyed) return;
      render(result.passport);
      if (path === '/restore') clearPoster();
      if (active(version)) { $(target).textContent = typeof message === 'function' ? message(result) : message; onSuccess?.(result); }
    } catch (error) { if (active(version)) $(target).textContent = error.message; }
    finally { if (!destroyed) { setBusy(false); ensureCard(); } }
  }
  launcher.onclick = open;
  $('.pp-close').onclick = () => dialog.close();
  $('.pp-settings-open').onclick = () => switchPage('settings');
  $('.pp-nav').onclick = event => { const button = event.target.closest('[data-view]'); if (button) switchPage(button.dataset.view); };
  $('.pp-prev').onclick = () => { collectionPage--; renderCollection(); };
  $('.pp-next').onclick = () => { collectionPage++; renderCollection(); };
  dialog.addEventListener('keydown', event => { if (event.key === 'Escape') event.stopPropagation(); });
  dialog.addEventListener('close', () => { ++viewVersion; clearRecovery(); document.body.classList.remove('passport-open'); launcher.focus(); });
  $('.pp-retry').onclick = async () => {
    automaticFailed = false;
    if (!passport) { try { await load(); } catch (error) { automaticFailed = true; status(error.message); return; } }
    ensureCard();
  };
  $('.pp-nickname-form').onsubmit = event => {
    event.preventDefault();
    mutate('/nickname', {nickname:$('.pp-nickname-form [name="nickname"]').value.trim()}, '昵称已保存。', '.pp-settings-status');
  };
  function generateRecovery() {
    if (busy) return;
    clearRecovery();
    mutate('/recovery-code', {}, '恢复码已生成，请现在保存。', '.pp-recovery-status', result => {
      $('.pp-recovery-code').value = result.recoveryCode;
      recoveryUrl = URL.createObjectURL(new Blob([`数字观展护照恢复码\n\n${result.recoveryCode}\n\n请私下保管。持有码的人可以访问此护照。重新生成后旧码失效。`], {type:'text/plain;charset=utf-8'}));
      $('.pp-recovery-download').href = recoveryUrl;
      $('.pp-recovery-result').hidden = false;
    });
  }
  $('.pp-recovery-generate').onclick = () => {
    if (busy || !passport) return;
    if (passport.storage?.hasRecoveryCode) { $('.pp-rotation').hidden = false; $('.pp-rotation-confirm').focus(); }
    else generateRecovery();
  };
  $('.pp-rotation-confirm').onclick = generateRecovery;
  $('.pp-rotation-cancel').onclick = () => { $('.pp-rotation').hidden = true; $('.pp-recovery-generate').focus(); };
  $('.pp-recovery-copy').onclick = async () => {
    const version = viewVersion;
    if (!navigator.clipboard?.writeText) { $('.pp-recovery-status').textContent = '此环境无法直接复制，请下载文本保存恢复码。'; return; }
    try { await navigator.clipboard.writeText($('.pp-recovery-code').value); if (version === viewVersion && dialog.open) $('.pp-recovery-status').textContent = '恢复码已复制，请私下保管。'; }
    catch { if (version === viewVersion && dialog.open) $('.pp-recovery-status').textContent = '复制未完成，请下载文本保存恢复码。'; }
  };
  $('.pp-restore-form').onsubmit = event => {
    event.preventDefault();
    const recoveryCode = $('.pp-restore-form [name="recoveryCode"]').value.trim();
    mutate('/restore', {recoveryCode}, '护照已恢复，当前游客藏印已合并。', '.pp-restore-status', () => { clearRecovery(); $('.pp-restore-status').textContent = '护照已恢复，当前游客藏印已合并。'; });
  };

  $('.pp-system-share').onclick = async () => {
    if (!posterBlob) return;
    if (/MicroMessenger/i.test(navigator.userAgent)) { cardSave.open(); return; }
    const version = viewVersion;
    const file = new File([posterBlob], `${exhibit.id}-文物收藏卡.png`, {type:'image/png'});
    if (!navigator.canShare?.({files:[file]}) || !navigator.share) { cardSave.open(); return; }
    try { await navigator.share({files:[file], title:`${exhibit.title} · 文物收藏卡`}); }
    catch (error) { if (error.name !== 'AbortError' && active(version)) cardSave.open(); }
  };
  // Prepare only cards already owned by this visitor. New visits still require opening the card.
  const readyTimer = setInterval(() => ensureCard(!dialog.open), 500);
  load().catch(() => {});
  return {destroy() { destroyed = true; ++viewVersion; clearInterval(readyTimer); clearRecovery(); clearPoster(); cardSave.destroy(); document.body.classList.remove('passport-open'); dialog.remove(); launcher.remove(); }};
}
