import './chat.css';

const ARTIFACT_ID = 'phoenix-ewer';
const FOCUS_TARGETS = new Set(['spout', 'handle', 'pattern', 'neck']);
const DEFAULT_PROMPTS = ['你是谁呀？', '凤首扁壶特别在哪里？', '这些青花纹样怎么做出来的？', '你来自哪个年代？', '带我看看凤首吧', '这件模型和馆藏是什么关系？'];

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function button(className, text, handler) {
  const node = element('button', className, text);
  node.type = 'button';
  if (handler) node.addEventListener('click', handler);
  return node;
}

function sourceUrl(value) {
  try {
    const url = new URL(value);
    return ['http:', 'https:'].includes(url.protocol) ? url.href : null;
  } catch { return null; }
}

// Keep complete recent turns within the API's count, per-item and total limits.
// Only the request copy is shortened; the displayed conversation stays intact.
function requestHistory(exchanges) {
  const suffix = '\n[较长内容已节略]';
  return exchanges.slice(-8).map(({ role, content }) => ({
    role,
    content: content.length > 1200 ? content.slice(0, 1200 - suffix.length) + suffix : content,
  }));
}

// Each mount owns one in-memory conversation. Nothing is stored or sent until asked.
export function mountArtifactChat({ onOpen = () => {}, onClose = () => {}, onFocus = () => {} } = {}) {
  const experience = document.querySelector('#experience');
  if (!experience) throw new Error('聊天界面需要 #experience');
  if (document.querySelector('#artifact-chat')) throw new Error('文物伙伴已挂载');

  let artifact = null;
  // Profile mode describes the configured service; a single guarded/local reply
  // must not relabel subsequent model-backed conversation as local retrieval.
  let serviceMode = null;
  let opened = false;
  let mobileOpen = false;
  const desktopQuery = window.matchMedia('(min-width: 761px)');
  const visualViewport = window.visualViewport;
  let destroyed = false;
  let busy = false;
  let profileLoading = false;
  let composing = false;
  let requestVersion = 0;
  let profileVersion = 0;
  let requestController = null;
  let profileController = null;
  let pending = null;
  let exchanges = [];
  let stickToBottom = true;

  const launch = button('chat-launch', '', open);
  launch.id = 'chat-launch';
  launch.setAttribute('aria-controls', 'artifact-chat');
  launch.setAttribute('aria-expanded', 'false');
  launch.append(element('span', 'chat-launch-mark', '聊'), element('span', '', '与青花聊一聊'), element('span', 'chat-launch-arrow', '↗'));
  experience.append(launch);

  const panel = element('section', 'artifact-chat');
  panel.id = 'artifact-chat';
  panel.hidden = true;
  panel.setAttribute('aria-labelledby', 'chat-title');
  const heading = element('header', 'chat-heading');
  const headingIdentity = element('div', 'chat-heading-identity');
  headingIdentity.append(element('span', 'chat-avatar', '青'));
  const headingCopy = element('div');
  const kicker = element('p', 'chat-kicker', '文物伙伴');
  const title = element('h2', '', '青花');
  title.id = 'chat-title';
  headingCopy.append(kicker, title);
  headingIdentity.append(headingCopy);
  const closeButton = button('chat-close', '收起 ⌄', close);
  closeButton.setAttribute('aria-label', '收起对话，继续观看器物');
  heading.append(headingIdentity, closeButton);

  const meta = element('div', 'chat-meta');
  const modeBadge = element('span', 'chat-mode', '连接资料中');
  const clearButton = button('chat-clear', '清空会话', clear);
  meta.append(modeBadge, clearButton);
  const identity = element('p', 'chat-identity', '馆藏资料讲述 · 模型为视觉演示');
  const log = element('div', 'chat-log');
  log.setAttribute('role', 'log');
  log.setAttribute('aria-label', '与青花的对话记录');
  log.setAttribute('aria-live', 'off');
  log.tabIndex = 0;
  const jump = button('chat-jump', '↓ 查看新消息', () => { stickToBottom = true; scrollBottom(); });
  jump.hidden = true;
  const recommendations = element('div', 'chat-recommendations');
  const promptLabel = element('p', 'chat-prompt-label', '从这里聊起');
  const prompts = element('div', 'chat-prompts');
  recommendations.append(promptLabel, prompts);
  const status = element('p', 'chat-status', '正在读取文物资料…');
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  const form = element('form', 'chat-composer');
  const inputLabel = element('label', 'chat-input-label', '想问青花什么？');
  inputLabel.htmlFor = 'chat-input';
  const input = element('textarea', 'chat-input');
  input.id = 'chat-input';
  input.rows = 2;
  input.maxLength = 2000;
  input.placeholder = '问问器形、青花，或它的年代…';
  const composerBottom = element('div', 'chat-composer-bottom');
  const keyHint = element('span', 'chat-key-hint', 'Enter 发送 · Shift + Enter 换行');
  const send = button('chat-send', '发送 ↗');
  send.type = 'submit';
  const stop = button('chat-stop', '停止等待', cancel);
  stop.hidden = true;
  composerBottom.append(keyHint, stop, send);
  form.append(inputLabel, input, composerBottom);
  const footnote = element('p', 'chat-footnote', '依据核查资料作答，未知之处会说明。');
  panel.append(heading, meta, identity, log, jump, recommendations, status, form, footnote);
  experience.append(panel);

  function scrollBottom() {
    log.scrollTop = log.scrollHeight;
    jump.hidden = true;
  }

  function updateScroll() {
    if (!opened) return;
    if (stickToBottom) scrollBottom();
    else jump.hidden = false;
  }

  log.addEventListener('scroll', () => {
    stickToBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 55;
    if (stickToBottom) jump.hidden = true;
  }, { passive: true });

  function setStatus(text) { status.textContent = text; }

  function updateControls() {
    send.disabled = busy || !artifact || !input.value.trim();
    stop.hidden = !busy;
    send.hidden = busy;
    clearButton.disabled = !exchanges.length && log.querySelectorAll('.chat-message').length < 2;
    prompts.querySelectorAll('button').forEach(node => { node.disabled = busy || !artifact; });
    log.querySelectorAll('.chat-retry').forEach(node => { node.disabled = busy || profileLoading; });
    panel.setAttribute('aria-busy', String(busy || profileLoading));
  }

  function setServiceMode(value) {
    serviceMode = value === 'model' ? 'model' : 'local';
    modeBadge.textContent = serviceMode === 'model' ? 'AI 对话' : '资料问答';
    modeBadge.dataset.mode = serviceMode;
    modeBadge.title = serviceMode === 'model' ? '由 AI 结合文物资料组织回答' : '从已核查知识库检索回答，支持范围内的问答';
    footnote.textContent = serviceMode === 'model' ? 'AI 结合核查资料回答，请通过出处核对事实。' : '当前为资料问答：检索知识库，支持范围内的提问。';
  }

  function setPrompts(items, initial = false) {
    prompts.replaceChildren();
    promptLabel.textContent = initial ? '从这里聊起' : '还可以这样问';
    const cleaned = items.filter(item => typeof item === 'string' && item.trim()).slice(0, initial ? 6 : 3);
    cleaned.forEach(text => {
      const choice = button('chat-prompt', text, () => submitMessage(text));
      choice.disabled = busy || !artifact;
      prompts.append(choice);
    });
    recommendations.hidden = !cleaned.length;
  }

  function appendMessage(role, text) {
    const article = element('article', `chat-message chat-message-${role}`);
    article.append(element('p', 'chat-speaker', role === 'user' ? '你' : '青花'));
    const content = element('div', 'chat-message-text', text);
    article.append(content);
    log.append(article);
    updateScroll();
    return { article, content };
  }

  function addSources(article, citations) {
    const usable = Array.isArray(citations) ? citations.filter(item => item && typeof item.title === 'string') : [];
    if (!usable.length) return;
    const details = element('details', 'chat-sources');
    details.append(element('summary', '', `查看出处 · ${usable.length}`));
    details.append(element('p', 'chat-source-note', '资料描述的是指定馆藏；当前三维模型与馆藏的身份对应尚未确证。'));
    usable.forEach((citation, index) => {
      const source = element('div', 'chat-source');
      const url = sourceUrl(citation.url);
      if (url) {
        const link = element('a', '', `${index + 1}. ${citation.title} ↗`);
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        source.append(link);
      } else source.append(element('span', '', `${index + 1}. ${citation.title}（无公开链接）`));
      if (typeof citation.excerpt === 'string' && citation.excerpt) source.append(element('p', '', citation.excerpt));
      details.append(source);
    });
    article.append(details);
  }

  function addActions(article, actions) {
    if (!Array.isArray(actions)) return;
    const row = element('div', 'chat-actions');
    actions.filter(action => action?.type === 'focus' && FOCUS_TARGETS.has(action.target)).slice(0, 4).forEach(action => {
      row.append(button('chat-focus', typeof action.label === 'string' && action.label ? action.label : '看看器形细节 ↗', () => onFocus(action.target)));
    });
    if (row.children.length) article.append(row);
  }

  function renderWelcome() {
    log.replaceChildren();
    if (artifact) appendMessage('assistant', artifact.opening || '你好，我是青花。一起看看我的凤首、卷柄和青花纹样吧。');
    const initial = artifact?.prompts?.map(item => typeof item === 'string' ? item : item?.text) || DEFAULT_PROMPTS;
    setPrompts(initial.length ? initial : DEFAULT_PROMPTS, true);
    updateControls();
  }

  function renderRetry(message, response, label) {
    response.article.classList.remove('chat-message-pending');
    response.content.textContent = label;
    response.article.append(button('chat-retry', '重新发送 ↗', () => {
      if (busy || !artifact) return;
      response.article.remove();
      requestAnswer(message);
    }));
  }

  async function requestAnswer(message) {
    if (busy || !artifact || destroyed) return;
    busy = true;
    const version = ++requestVersion;
    requestController = new AbortController();
    const responseMessage = appendMessage('assistant', serviceMode === 'model' ? '青花正在想一想…' : '青花正在翻阅资料…');
    responseMessage.article.classList.add('chat-message-pending');
    pending = { message, responseMessage };
    setStatus(serviceMode === 'model' ? '正在等待 AI 回答，可以随时停止。' : '正在检索文物资料，可以随时停止。');
    updateControls();
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: requestController.signal,
        body: JSON.stringify({ artifactId: ARTIFACT_ID, message, history: requestHistory(exchanges) }),
      });
      const payload = await response.json().catch(() => null);
      if (version !== requestVersion || destroyed) return;
      if (!response.ok) throw new Error(payload?.error?.message || '服务暂时没有回应，请稍后重试。');
      if (typeof payload?.answer !== 'string' || !payload.answer.trim()) throw new Error('暂时没有收到完整回答，请重试。');
      responseMessage.article.classList.remove('chat-message-pending');
      responseMessage.content.textContent = payload.answer;
      addSources(responseMessage.article, payload.citations);
      addActions(responseMessage.article, payload.actions);
      if (typeof payload.notice === 'string' && payload.notice) responseMessage.article.append(element('p', 'chat-notice', payload.notice));
      exchanges.push({ role: 'user', content: message }, { role: 'assistant', content: payload.answer });
      if (Array.isArray(payload.suggestions) && payload.suggestions.length) setPrompts(payload.suggestions);
      setStatus('回答已收到。可以继续追问，或查看出处。');
    } catch (error) {
      if (version !== requestVersion || destroyed) return;
      renderRetry(message, responseMessage, error.name === 'AbortError' ? '这次等待已停止。想继续时，可以重新发送。' : `暂时没能回答。${error.message || '请稍后重试。'}`);
      setStatus(error.name === 'AbortError' ? '已停止等待。' : '发送未完成，可以重试或继续提问。');
    } finally {
      if (version === requestVersion && !destroyed) {
        busy = false;
        pending = null;
        requestController = null;
        updateControls();
        updateScroll();
      }
    }
  }

  function submitMessage(text = input.value) {
    const message = text.trim();
    if (busy || !artifact || !message || destroyed) return;
    if (message.length > 2000) { setStatus('问题请控制在 2000 字以内。'); return; }
    input.value = '';
    stickToBottom = true;
    appendMessage('user', message);
    requestAnswer(message);
  }

  function cancel() {
    if (!busy) return;
    requestController?.abort();
    requestVersion += 1;
    if (pending) renderRetry(pending.message, pending.responseMessage, '这次等待已停止。想继续时，可以重新发送。');
    busy = false;
    pending = null;
    requestController = null;
    setStatus('已停止等待。');
    updateControls();
    updateScroll();
  }

  function clear() {
    cancel();
    exchanges = [];
    input.value = '';
    stickToBottom = true;
    renderWelcome();
    setStatus(artifact ? '会话已清空。可以重新认识青花。' : '文物资料尚未就绪，请重试连接。');
  }

  async function loadProfile() {
    profileController?.abort();
    const version = ++profileVersion;
    profileController = new AbortController();
    profileLoading = true;
    setStatus('正在读取文物资料…');
    modeBadge.textContent = '连接资料中';
    log.querySelector('.chat-profile-error')?.remove();
    updateControls();
    try {
      const response = await fetch(`/api/artifacts/${ARTIFACT_ID}`, { signal: profileController.signal });
      const payload = await response.json().catch(() => null);
      if (version !== profileVersion || destroyed) return;
      if (!response.ok || !payload?.artifact || payload.artifact.id !== ARTIFACT_ID) throw new Error('文物资料暂时无法连接');
      artifact = payload.artifact;
      title.textContent = artifact.nickname || '青花';
      title.title = artifact.name || '景德镇窑青花凤首扁壶';
      identity.title = artifact.identityNote || '馆藏资料讲述；当前模型与馆藏的身份对应尚未确证。';
      setServiceMode(payload.mode);
      renderWelcome();
      setStatus('选一个问题，或写下你的好奇。');
    } catch (error) {
      if (version !== profileVersion || destroyed || error.name === 'AbortError') return;
      modeBadge.textContent = '资料未连接';
      const box = element('div', 'chat-profile-error');
      box.append(element('p', '', '暂时没有连上文物资料，请确认本地服务已启动。'), button('chat-retry', '重试连接 ↗', loadProfile));
      log.append(box);
      setStatus('连接未完成，重试后即可开始对话。');
    } finally {
      if (version === profileVersion && !destroyed) {
        profileLoading = false;
        updateControls();
      }
    }
  }

  function updateViewport() {
    if (destroyed) return;
    const height = visualViewport?.height || window.innerHeight;
    const keyboardOffset = !desktopQuery.matches && mobileOpen
      ? Math.max(0, window.innerHeight - height - (visualViewport?.offsetTop || 0)) : 0;
    panel.style.setProperty('--chat-viewport-height', `${height}px`);
    panel.style.setProperty('--chat-keyboard-offset', `${keyboardOffset}px`);
    const compactViewport = !desktopQuery.matches && mobileOpen && height < 500;
    panel.classList.toggle('chat-keyboard-open', keyboardOffset > 80 || compactViewport);
    panel.classList.toggle('chat-viewport-tight', !desktopQuery.matches && height < 300);
    requestAnimationFrame(() => { if (!destroyed && opened && stickToBottom) scrollBottom(); });
  }

  function applyLayout() {
    if (destroyed) return;
    const wasOpen = opened;
    const desktop = desktopQuery.matches;
    opened = desktop || mobileOpen;
    panel.hidden = !opened;
    closeButton.hidden = desktop;
    launch.hidden = desktop || mobileOpen;
    launch.setAttribute('aria-expanded', String(opened));
    document.body.classList.toggle('artifact-chat-open', !desktop && mobileOpen);
    updateViewport();
    // These callbacks report UI visibility only; model animation is independent.
    if (opened && !wasOpen) onOpen();
    if (!opened && wasOpen) onClose();
    requestAnimationFrame(() => { if (!destroyed && opened && stickToBottom) scrollBottom(); });
  }

  function open() {
    if (destroyed) return;
    const wasOpen = opened;
    if (!desktopQuery.matches) mobileOpen = true;
    applyLayout();
    if (!desktopQuery.matches && !wasOpen) closeButton.focus({ preventScroll: true });
  }

  function close() {
    if (destroyed || desktopQuery.matches || !mobileOpen) return;
    mobileOpen = false;
    if (document.activeElement && panel.contains(document.activeElement)) document.activeElement.blur();
    applyLayout();
    launch.focus({ preventScroll: true });
  }

  form.addEventListener('submit', event => { event.preventDefault(); if (!composing) submitMessage(); });
  input.addEventListener('input', updateControls);
  input.addEventListener('compositionstart', () => { composing = true; });
  input.addEventListener('compositionend', () => { composing = false; });
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter' && !event.shiftKey && !event.isComposing && !composing && event.keyCode !== 229) {
      event.preventDefault();
      submitMessage();
    }
  });
  panel.addEventListener('keydown', event => {
    if (!desktopQuery.matches && event.key === 'Escape' && !event.isComposing && !composing) { event.preventDefault(); close(); }
  });
  desktopQuery.addEventListener('change', applyLayout);
  window.addEventListener('resize', updateViewport);
  visualViewport?.addEventListener('resize', updateViewport);
  visualViewport?.addEventListener('scroll', updateViewport);
  setPrompts(DEFAULT_PROMPTS, true);
  applyLayout();
  loadProfile();

  return {
    open,
    close,
    destroy() {
      if (destroyed) return;
      if (opened) onClose();
      destroyed = true;
      opened = false;
      document.body.classList.remove('artifact-chat-open');
      desktopQuery.removeEventListener('change', applyLayout);
      window.removeEventListener('resize', updateViewport);
      visualViewport?.removeEventListener('resize', updateViewport);
      visualViewport?.removeEventListener('scroll', updateViewport);
      requestVersion += 1;
      profileVersion += 1;
      requestController?.abort();
      profileController?.abort();
      panel.remove();
      launch.remove();
    },
  };
}
