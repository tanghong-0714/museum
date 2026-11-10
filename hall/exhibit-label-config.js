import QRCode from 'qrcode';

// Observation copy is quoted from 器生青花_R01/src/exhibits*.js and exhibit-*.js.
// Titles and numbers follow artifactAssignments. Historical attribution is intentionally absent.
export const exhibitLabelCopy = {
  'phoenix-ewer': '凤首昂起，卷尾成柄。',
  'bronze-head': '轮廓在光中显现，锈色层层铺开。',
  'cloud-mirror': '连弧相接，细纹在铜色中回旋。',
  'liquan-bodhisattva': '沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。',
  'longquan-figure': '青釉如山色，露胎似暖土。',
  'pipa-figurine': '陶色留住衣褶，也留住抱琴的姿态。',
  'speechless-buddha': '靠近眉眼，看眼睑与嘴角如何组成这一份淡定。',
};

export function artifactStandaloneUrl(artifactId, location = globalThis.location) {
  const url = new URL(location.href);
  url.port = '5189';
  url.pathname = '/';
  url.search = '';
  url.hash = '';
  url.username = '';
  url.password = '';
  url.searchParams.set('artifact', artifactId);
  return url.href;
}

export function isLoopbackUrl(url) {
  return ['localhost', '127.0.0.1', '[::1]'].includes(new URL(url).hostname);
}

// Texture-space QR + caption, including a modest touch margin.
export function isLabelQrHit(uv) {
  if (!uv) return false;
  const x = uv.x * 1024, y = (1 - uv.y) * 248;
  return x >= 777 && x <= 995 && y >= 10 && y <= 240;
}

// A single integer scale preserves crisp square modules and a four-module quiet zone.
export function createLabelQr(url, scale = 8) {
  const qr = QRCode.create(url, { errorCorrectionLevel: 'M' });
  const modules = qr.modules.size;
  const quiet = 4;
  const size = (modules + quiet * 2) * scale;
  const pixels = new Uint8ClampedArray(size * size * 4).fill(255);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const mx = Math.floor(x / scale) - quiet;
      const my = Math.floor(y / scale) - quiet;
      if (mx < 0 || my < 0 || mx >= modules || my >= modules || !qr.modules.get(my, mx)) continue;
      const offset = (y * size + x) * 4;
      pixels[offset] = pixels[offset + 1] = pixels[offset + 2] = 0;
    }
  }
  return { size, pixels, quiet, modules, scale };
}

export function labelPlacement(assignment) {
  const [x, , z] = assignment.position;
  if (assignment.cabinetId === 'story') return { position: [x, .705, z + .935], rotationY: 0, rotationX: -65 * Math.PI / 180 };
  const side = x < 0 ? 1 : -1;
  return { position: [x + side * .935, .705, z], rotationY: side * Math.PI / 2, rotationX: -65 * Math.PI / 180 };
}
