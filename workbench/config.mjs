import { readFile, writeFile, rename } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';

// 只更新指定变量，保留同一 .env 内其他服务的配置。
export async function saveEnvSetting(file, name, value) {
  if (!/^[A-Z][A-Z0-9_]*$/.test(name) || /[\r\n]/.test(value)) throw new Error('Invalid configuration');
  let original = '';
  try { original = await readFile(file, 'utf8'); } catch (error) { if (error.code !== 'ENOENT') throw error; }
  const pattern = new RegExp(`^${name}=.*$`, 'gm');
  const line = `${name}=${value}`;
  const content = pattern.test(original) ? original.replace(pattern, () => line) : `${original.trimEnd()}\n${line}\n`;
  const temporary = `${file}.pending-${randomUUID()}`;
  await writeFile(temporary, content, { mode: 0o600, flag: 'wx' });
  await rename(temporary, file);
}
