const keyInput = document.querySelector('#api-key');
const checkButton = document.querySelector('#check');
const clearButton = document.querySelector('#clear');
let configured = false;
function show(data) {
  document.querySelector('#result').className = `result ${data.ok ? 'success' : 'error'}`;
  document.querySelector('#status-label').textContent = data.ok ? '连接成功 · 已认证' : data.httpStatus ? 'API 已响应 · 校验未通过' : '尚未接通';
  document.querySelector('#message').textContent = data.message;
  document.querySelector('#balance').textContent = data.balance ?? '—';
  document.querySelector('#frozen').textContent = data.frozen ?? '—';
  document.querySelector('#duration').textContent = data.durationMs == null ? '—' : `${data.durationMs} ms`;
  document.querySelector('#codes').textContent = data.httpStatus == null ? '—' : `${data.httpStatus} / ${data.code ?? '—'}`;
  document.querySelector('#checked-at').textContent = data.checkedAt ? `检测时间：${new Date(data.checkedAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })}` : '尚未发起请求';
  document.querySelector('#save-state').textContent = data.saved === true ? '已保存到本机项目 .env；请勿将真实密钥放入评委交付包。' : data.saved === false ? 'API 已接通，但项目配置保存失败。' : '';
}
async function refresh() {
  const response = await fetch('/api/status');
  if (!response.ok) throw new Error('无法读取本地服务状态。');
  const state = await response.json();
  configured = state.configured;
  keyInput.placeholder = configured ? '已读取项目密钥，可留空再次检测' : '在此粘贴国内版 API Key';
  if (state.latest) show(state.latest);
}
document.querySelector('#connect-form').addEventListener('submit', async event => {
  event.preventDefault();
  const apiKey = keyInput.value.trim();
  if (!apiKey && !configured) return show({ message: '请先填入国内版 API Key。' });
  checkButton.disabled = clearButton.disabled = true;
  keyInput.disabled = true;
  document.querySelector('#result').className = 'result neutral';
  document.querySelector('#status-label').textContent = '正在请求国内 API…';
  document.querySelector('#message').textContent = '查询账户余额中，最长等待 25 秒。';
  try {
    const response = await fetch('/api/check', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ apiKey }) });
    const result = await response.json();
    keyInput.value = '';
    show(result);
    await refresh();
  } catch { keyInput.value = ''; show({ message: '无法连接本地服务，请确认服务仍在运行。' }); }
  finally { checkButton.disabled = clearButton.disabled = keyInput.disabled = false; }
});
clearButton.addEventListener('click', async () => {
  try {
    const response = await fetch('/api/clear', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{}' });
    if (!response.ok) throw new Error();
    configured = false;
    keyInput.value = '';
    show({ message: '项目配置和内存中的密钥已清除。' });
    document.querySelector('#result').className = 'result neutral';
    document.querySelector('#status-label').textContent = '等待检测';
    await refresh();
  } catch { show({ message: '清除失败，请确认本地服务仍在运行。' }); }
});
refresh().catch(() => show({ message: '无法读取本地服务状态，请确认服务仍在运行。' }));
