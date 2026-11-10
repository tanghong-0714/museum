import {mkdir,writeFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import QRCode from 'qrcode';
import {exhibits} from '../src/exhibits.js';
import {artifactShareUrl} from '../src/passport-media.js';

const base=process.argv[2];
if(!base)throw new Error('Usage: node scripts/export-passport-qr.mjs https://your-domain.example [output-directory]');
const destination=resolve(process.argv[3]||'verification/passport-qr');await mkdir(destination,{recursive:true});
const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const records=[];
for(const exhibit of Object.values(exhibits)){
 const url=artifactShareUrl(exhibit.id,base),file=`${exhibit.id}.png`;
 await QRCode.toFile(join(destination,file),url,{width:600,margin:4,errorCorrectionLevel:'M'});
 records.push({id:exhibit.id,title:exhibit.title,url,file});
}
await writeFile(join(destination,'二维码目录.json'),JSON.stringify(records,null,2));
await writeFile(join(destination,'打印展签.html'),`<!doctype html><html lang="zh-CN"><meta charset="utf-8"><title>数字文物扫码展签</title><style>body{font:16px "Microsoft YaHei",sans-serif;color:#20372d;padding:24px;background:#f5f1e8}header{margin-bottom:24px}main{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}article{break-inside:avoid;background:white;border:1px solid #a99f87;padding:24px;text-align:center}img{width:220px;max-width:100%}h2{font-size:20px}small{display:block;overflow-wrap:anywhere;color:#657368}@media print{body{padding:0;background:white}header p{font-size:12px}article{padding:14px}img{width:180px}}</style><header><h1>一件文物，一次数字相逢</h1><p>扫码观看三维文物，在观展护照中领取印章与纪念海报。</p><p>当前地址：${escape(new URL(base).origin)}。本机或局域网地址仅限测试；对外印制前请使用正式 HTTPS 域名重新生成。</p></header><main>${records.map(r=>`<article><h2>${escape(r.title)}</h2><img src="${escape(r.file)}" alt="${escape(r.title)}二维码"><p>扫码观展 · 领取数字印章</p><small>${escape(r.url)}</small></article>`).join('')}</main></html>`);
console.log(`Exported ${records.length} artifact QR codes to ${destination}`);
