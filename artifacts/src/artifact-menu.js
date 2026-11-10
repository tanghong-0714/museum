import './artifact-menu.css';

// These are navigation links, so keep native link semantics and browser shortcuts.
export function createArtifactMenu(exhibit, all) {
  const root = document.createElement('div');
  root.className = 'artifact-picker';
  const trigger = document.createElement('button');
  trigger.id = 'artifact-select';
  trigger.type = 'button';
  trigger.setAttribute('aria-label', `切换文物，当前为${exhibit.title}`);
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', 'artifact-directory');
  const label = document.createElement('span');
  label.textContent = exhibit.title;
  const chevron = document.createElement('i');
  chevron.setAttribute('aria-hidden', 'true');
  trigger.append(label, chevron);

  const panel = document.createElement('nav');
  panel.id = 'artifact-directory';
  panel.className = 'artifact-directory';
  panel.setAttribute('aria-label', '藏品目录');
  panel.hidden = true;
  const items = Object.values(all).sort((a, b) => a.number.localeCompare(b.number));
  const heading = document.createElement('div');
  heading.className = 'artifact-directory-heading';
  const title = document.createElement('span');
  title.textContent = '藏品目录';
  const count = document.createElement('small');
  count.textContent = `${String(items.length).padStart(2, '0')} 件珍藏`;
  heading.append(title, count);
  const list = document.createElement('div');
  list.className = 'artifact-directory-list';
  const links = items.map(item => {
    const link = document.createElement('a');
    link.className = 'artifact-directory-item';
    const url = new URL(location.href);
    url.searchParams.set('artifact', item.id);
    url.searchParams.delete('checkin');
    url.searchParams.delete('modelJob');
    url.searchParams.set('viewTransition', 'artifact');
    link.href = url.href;
    if (item.id === exhibit.id) link.setAttribute('aria-current', 'page');
    const image = document.createElement('img');
    image.src = `/images/checkin/portraits/${encodeURIComponent(item.id)}.webp`;
    image.alt = '';
    image.loading = 'lazy';
    image.decoding = 'async';
    const copy = document.createElement('span');
    copy.className = 'artifact-directory-copy';
    const name = document.createElement('strong');
    name.textContent = item.title;
    const subtitle = document.createElement('small');
    subtitle.textContent = `${item.number} / ${item.nickname}`;
    copy.append(name, subtitle);
    const marker = document.createElement('span');
    marker.className = 'artifact-directory-marker';
    marker.textContent = item.id === exhibit.id ? '当前' : '↗';
    link.append(image, copy, marker);
    link.addEventListener('click', event => {
      if (item.id === exhibit.id && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
        event.preventDefault();
        document.querySelector('button[data-mode="view"]')?.click();
        close(true);
      }
    });
    list.append(link);
    return link;
  });
  panel.append(heading, list);
  root.append(trigger, panel);

  function close(restoreFocus = false) {
    panel.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus();
  }
  function open(focusLink = false) {
    panel.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    if (focusLink) (links.find(link => link.hasAttribute('aria-current')) || links[0]).focus();
  }
  trigger.addEventListener('click', () => panel.hidden ? open() : close());
  trigger.addEventListener('keydown', event => {
    if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); event.stopPropagation(); open(true); }
  });
  root.addEventListener('keydown', event => {
    if (panel.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); close(true); return; }
    const index = links.indexOf(document.activeElement);
    if (index < 0) return;
    let next;
    if (event.key === 'ArrowDown') next = (index + 1) % links.length;
    else if (event.key === 'ArrowUp') next = (index + links.length - 1) % links.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = links.length - 1;
    else return;
    event.preventDefault();
    links[next].focus();
  });
  document.addEventListener('pointerdown', event => { if (!root.contains(event.target)) close(); });
  document.addEventListener('focusin', event => { if (!root.contains(event.target)) close(); });
  return root;
}
