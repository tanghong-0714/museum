import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Static, batched tabletop props: no new lights, shadows, texture downloads,
// or per-frame mesh updates. The original hall GLB remains untouched.
export function createRestorationBench(position = [0, .92, 0], { label = true } = {}) {
  const group = new THREE.Group();
  group.name = 'Restoration atelier — tools and ceramic study';
  group.position.fromArray(position);
  const materials = {
    wood: new THREE.MeshStandardMaterial({ color: 0x594439, roughness: .72 }),
    felt: new THREE.MeshStandardMaterial({ color: 0x333b36, roughness: .96 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xb89c65, metalness: .65, roughness: .42, emissive: 0x6e4217, emissiveIntensity: .06 }),
    steel: new THREE.MeshStandardMaterial({ color: 0xbcc6c3, metalness: .8, roughness: .33 }),
    glaze: new THREE.MeshStandardMaterial({ color: 0x7daba5, metalness: .08, roughness: .3 }),
    clay: new THREE.MeshStandardMaterial({ color: 0xc3a27d, roughness: .86 }),
    paper: new THREE.MeshStandardMaterial({ color: 0xd9cdb0, roughness: .95 }),
    bristle: new THREE.MeshStandardMaterial({ color: 0xd6bd8b, roughness: 1 }),
  };
  const batches = new Map();
  function add(geometry, material, at, rotation = [0, 0, 0]) {
    const mesh = new THREE.Mesh(geometry);
    mesh.position.set(...at); mesh.rotation.set(...rotation); mesh.updateMatrix();
    let copy = geometry.index ? geometry.toNonIndexed() : geometry.clone();
    geometry.dispose(); copy.applyMatrix4(mesh.matrix);
    copy.deleteAttribute('uv');
    if (!batches.has(material)) batches.set(material, []);
    batches.get(material).push(copy);
  }
  const box = (m, size, at, rot) => add(new THREE.BoxGeometry(...size), m, at, rot);
  function rod(m, a, b, r1, r2 = r1) {
    const start = new THREE.Vector3(...a), end = new THREE.Vector3(...b);
    const delta = end.clone().sub(start);
    const rotation = new THREE.Euler().setFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.clone().normalize()));
    add(new THREE.CylinderGeometry(r2, r1, delta.length(), 10), m, start.add(end).multiplyScalar(.5).toArray(), [rotation.x, rotation.y, rotation.z]);
  }
  // A shallow walnut tray with suede inset, inset brass corners and a front label.
  box('wood', [2.5, .05, .80], [0, .028, 1.15]);
  box('felt', [2.40, .012, .70], [0, .059, 1.15]);
  for (const x of [-1.22, 1.22]) box('brass', [.014, .006, .70], [x, .06, 1.15]);
  for (const z of [.77, 1.53]) box('brass', [2.44, .006, .012], [0, .06, z]);
  box('paper', [.68, .006, .49], [-.73, .069, 1.12], [0, -.1, 0]);
  // A partially reassembled bowl: individual wall sectors and visible clay edges.
  function shard(cx, cz, start, arc, lift = 0, tilt = 0) {
    const segments = 12, verts = [], inside = [], edges = [];
    const point = (a, upper, inner) => {
      const radius = (upper ? .27 : .13) - (inner ? .016 : 0);
      return [Math.cos(a) * radius, upper ? .19 : .008, Math.sin(a) * radius];
    };
    const quad = (out, a, b, c, d) => out.push(...a, ...b, ...d, ...b, ...c, ...d);
    for (let i = 0; i < segments; i++) {
      const a = start + arc * i / segments, b = start + arc * (i + 1) / segments;
      quad(verts, point(a, false, false), point(a, true, false), point(b, true, false), point(b, false, false));
      quad(inside, point(a, false, true), point(b, false, true), point(b, true, true), point(a, true, true));
      quad(edges, point(a, true, false), point(a, true, true), point(b, true, true), point(b, true, false));
    }
    for (const a of [start, start + arc]) quad(edges, point(a, false, false), point(a, false, true), point(a, true, true), point(a, true, false));
    for (const [m, positions] of [['glaze', verts], ['glaze', inside], ['clay', edges]]) {
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); g.computeVertexNormals();
      add(g, m, [cx, .074 + lift, cz], [tilt, 0, 0]);
    }
  }
  shard(-.65, 1.13, .1, 1.45); shard(-.65, 1.13, 1.61, 1.25); shard(-.65, 1.13, 3.0, 1.05);
  add(new THREE.CylinderGeometry(.127,.127,.009,32), 'glaze', [-.65,.083,1.13]);
  function looseChip(x,z,angle,scale=1) {
    const points = [[-.12,-.07],[.08,-.09],[.14,.03],[.01,.1],[-.11,.04]].map(([a,b])=>[scale*(a*Math.cos(angle)-b*Math.sin(angle)),.014,-scale*(a*Math.sin(angle)+b*Math.cos(angle))]);
    const top=[], edges=[];
    for(let i=0;i<points.length;i++) {
      const a=points[i], b=points[(i+1)%points.length], lowA=[a[0],0,a[2]], lowB=[b[0],0,b[2]];
      top.push(0,.014,0,...a,...b);
      edges.push(...a,...lowA,...b,...b,...lowA,...lowB);
    }
    for(const [m,vertices] of [['glaze',top],['clay',edges]]) {
      const g=new THREE.BufferGeometry(); g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3)); g.computeVertexNormals(); add(g,m,[x,.07,z]);
    }
  }
  looseChip(-.10,1.00,.2); looseChip(-.02,1.31,1.2,.8); looseChip(-.30,1.29,2.2,.55);
  // Fine ruler beside the study, with real geometric graduation marks.
  box('brass', [.075, .01, .49], [.30, .078, 1.12]);
  for (let i = 0; i < 19; i++) box('wood', [i % 5 === 0 ? .043 : .022, .002, .002], [.313, .084, .9 + i * .024]);
  // Tool well: brush, precision spatula and open tweezers.
  box('wood', [.64, .026, .63], [.79, .078, 1.15]);
  box('felt', [.58, .008, .57], [.79, .095, 1.15]);
  rod('wood', [.59,.12,1.4], [.59,.12,1.08], .014,.011);
  rod('brass', [.59,.12,1.08], [.59,.12,1.02], .014);
  rod('bristle', [.59,.12,1.02], [.59,.12,.93], .017,.006);
  rod('wood', [.77,.12,1.4], [.77,.12,1.17], .016);
  rod('steel', [.77,.12,1.17], [.77,.12,1.05], .006);
  box('steel', [.04,.006,.11], [.77,.12,1.005]);
  rod('steel', [.94,.12,1.4], [.91,.12,.96], .006);
  rod('steel', [.94,.12,1.4], [.98,.12,.96], .006);
  // Small ceramic adhesive cup at the back of the tools.
  add(new THREE.CylinderGeometry(.06,.048,.06,20,1,true), 'paper', [1.08,.127,.98]);
  add(new THREE.CylinderGeometry(.043,.043,.004,20), 'wood', [1.08,.12,.98]);
  for (const [name, geometries] of batches) {
    const merged = mergeGeometries(geometries);
    geometries.forEach(g => g.dispose());
    const mesh = new THREE.Mesh(merged, materials[name]); mesh.name = `Atelier ${name}`; group.add(mesh);
  }
  let texture;
  if (label && typeof document !== 'undefined') {
    const canvas = document.createElement('canvas'); canvas.width = 768; canvas.height = 112;
    const ctx = canvas.getContext('2d'); ctx.fillStyle = '#d4c4a1'; ctx.fillRect(0,0,768,112);
    ctx.fillStyle = '#45392c'; ctx.textAlign = 'center'; ctx.font = '30px "Noto Serif SC", SimSun, serif';
    ctx.fillText('修 复 工 坊', 384, 44); ctx.font = '14px sans-serif'; ctx.fillText('RESTORATION ATELIER  ·  照片 / 修复 / 建模',384,80);
    texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const plate = new THREE.Mesh(new THREE.PlaneGeometry(.70,.102), new THREE.MeshBasicMaterial({map:texture}));
    plate.rotation.x = -Math.PI / 2; plate.position.set(-.30,.067,1.49); group.add(plate);
  }
  return {
    group,
    setActive(active) { materials.brass.emissiveIntensity = active ? .32 : .06; },
    dispose() { group.traverse(o => { if(o.isMesh) { o.geometry.dispose(); o.material.dispose(); } }); texture?.dispose(); group.removeFromParent(); },
  };
}
