import { mkdtemp, copyFile, mkdir, readdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('.', import.meta.url));
const staging = await mkdtemp(join(tmpdir(), 'tripo-review-'));
const files = ['package.json', 'package-lock.json', 'server.mjs', 'server.test.mjs', 'config.mjs', 'analysis-service.mjs', 'analysis-service.test.mjs', 'DeepSeek接入验证记录.md', '前端交互验证_R05.md', 'restoration.mjs', '复原流程验证_R06.md', '工作台改版与REA记录_R07.md', '流程简化验证_R08.md', 'image-service.mjs', 'image-service.test.mjs', 'multiview-service.mjs', 'multiview-service.test.mjs', 'directional-views.test.mjs', '四视角与等待动效验证_R11.md', 'workspace-cache.mjs', 'workspace-cache.test.mjs', '上传与四视图验证_R10.md', 'model-service.mjs', 'model-service.test.mjs', 'model-test-fixture.mjs', 'viewer-source.mjs', 'THIRD-PARTY-LICENSES.txt', 'package-review.mjs', '.gitignore', '.env.example', 'README.md', '评委运行说明.md', '连通测试记录.md', '生图接入验证记录.md', '三维建模验证记录.md', '启动工作台.cmd'];
for (const name of files) await copyFile(join(root, name), join(staging, name));
await mkdir(join(staging, 'public'));
for (const name of ['processing.js', 'processing.css', 'museum-bridge.js', 'index.html', 'style.css', 'app.js', 'images.html', 'images.css', 'images.js', 'models.html', 'models.css', 'models.js', 'model-viewer.js', 'studio.css', 'image-workbench.css', 'model-workbench.css']) await copyFile(join(root, 'public', name), join(staging, 'public', name));
const names = await readdir(staging);
if (names.includes('.env')) throw new Error('打包被阻止：暂存目录包含真实配置。');
const output = join(root, 'deliverables');
await mkdir(output, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
const archive = join(output, `heritage-restoration-studio-review-R11-${stamp}.zip`);
// 压缩路径通过环境变量传入；脚本中不插值执行任何用户输入。
const result = spawnSync('powershell.exe', ['-NoProfile', '-Command', 'Add-Type -AssemblyName System.IO.Compression.FileSystem; [IO.Compression.ZipFile]::CreateFromDirectory($env:TRIPO_PACKAGE_STAGE, $env:TRIPO_PACKAGE_OUTPUT)'], { env: { ...process.env, TRIPO_PACKAGE_STAGE: staging, TRIPO_PACKAGE_OUTPUT: archive }, encoding: 'utf8' });
if (result.status !== 0) throw new Error('评委包压缩失败。');
console.log(`评委源码包已生成（不含 .env）：${archive}`);

