// Public display configuration only. Never import server settings or credentials here.
import {pairExhibits} from './exhibits-pair.js';
import {longquanExhibit} from './exhibit-longquan.js';
import {pipaExhibit} from './exhibit-pipa.js';
import {speechlessExhibit} from './exhibit-speechless.js';
import {swordHorseExhibits} from './exhibits-sword-horse.js';
import {zunBellsExhibits} from './exhibits-zun-bells.js';
export const exhibits = {
 ...swordHorseExhibits,
 ...zunBellsExhibits,
 [speechlessExhibit.id]:speechlessExhibit,
 [longquanExhibit.id]:longquanExhibit,
 [pipaExhibit.id]:pipaExhibit,
 ...pairExhibits,
 'phoenix-ewer': {
  id:'phoenix-ewer', theme:'porcelain', nickname:'青花', title:'凤首扁壶', english:'PHOENIX-HEADED EWER', series:'重器新生', number:'01', category:'数字文物 · 青花',
  poem:['一器青花，藏一只','欲飞的凤凰。'], description:['凤首昂起，卷尾成柄。','双翼轻拢，将花影与风留在瓷上。'], tags:['凤鸟为形','青花为衣'],
  model:{desktop:'/models/phoenix-web-desktop.glb',mobile:'/models/phoenix-web-mobile.glb',rotationY:-Math.PI/2,roughness:.5,metalness:0,exposure:1.12},
  focusTargets:['spout','handle','pattern','neck'], anchors:[{label:'凤首壶流',x:-1.03,y:.96,copy:'凤首从壶肩探出，流口随颈部曲线向上延伸。转到侧面，可观察头部与壶腹连接处的起伏。'}, {label:'卷曲壶柄',x:1.16,y:.72,copy:'壶柄从肩部卷起，形成通透的环形空间。内卷的末端与凤首相呼应，侧面能看清柄孔及连接位置。'}, {label:'青花纹饰',x:-.08,y:-.15,copy:'蓝色纹样沿扁圆壶腹铺展，白瓷底色与青花形成层次。缓慢转动，可比较两侧纹饰与器身曲面的关系。'}, {label:'短颈口沿',x:-.1,y:1.12,copy:'短颈从肩部向上收起，口沿略向外展。颈部的几何纹饰与壶腹纹样形成疏密对照。'}],
  welcome:'你好，我是青花。你看，凤首是我的壶流，卷起的凤尾是我的壶柄。想先听听我的来历，还是看看这一身青花？',
  prompts:['你来自哪个年代？','为什么叫凤首扁壶？','壶身上画了什么？'],
  storyTitle:'青花里的故事', lead:'一只凤凰，将飞翔的姿态留在了青花里。昂首是流，卷尾是柄，双翼垂向牡丹丛。从器形到纹饰，再到指间成形的泥，循着三段小故事，走近它的世界。',
  tabLabels:['看器形','读纹饰','知工艺'], topics:{
 shape: {
  kind: '据馆藏资料创作 · 器形 / 01',
  brief: '一只凤凰收拢双翼，停在了壶上。昂起的头化作壶流，卷起的尾成为壶柄；仿佛只等一双手将它轻轻托起，它便要再次振翅。',
  action: '定位凤首 ↗', target: 'spout',
  paragraphs: ['若把这件元代青花壶看作一只暂歇的凤凰，它的姿态便有了故事：头颈向前探出，尾羽向后回旋，扁圆的身躯把两端轻轻连起。飞翔没有消失，只是被收进一道安静的轮廓。', '想象一次缓缓的倾注：手握凤尾，壶身微侧，水从凤首流出。原本遥远的祥禽，忽然与人的动作有了呼应。再将壶放稳，它又停在那里，守着下一次相逢。'],
  excerpt: '“该壶以昂起的凤首作流” · “以卷起的凤尾作柄”',
 },
 pattern: {
  kind: '据馆藏资料创作 · 纹饰 / 02',
  brief: '凤凰把双翼垂向壶身两侧，牡丹在下方铺开。青与白之间，像有一阵风经过：花枝轻摇，羽翼将展，一整个春天停在了瓷上。',
  action: '看看纹饰 ↗', target: 'pattern',
  paragraphs: ['目光沿着青花向下走，先遇见凤身，再遇见垂向两侧的双翅，最后落入壶腹下方的牡丹丛。器物的弧面像一卷尚未展尽的画，转过一点，又露出一段花与羽的相逢。', '不妨想象，凤凰正从花间掠过。羽尖带起的风尚未散去，花朵还留着摇动的姿态，画面便被留在了瓷面上。你转动壶身时，那场没有画出起点与终点的飞翔，又向前延续了一小段。'],
  excerpt: '“凤身绘在圆形壶体上部，双翅垂至壶体两侧”',
 },
 craft: {
  kind: '据馆藏资料创作 · 工艺 / 03',
  brief: '成为凤凰之前，它是等待成形的泥。模制的凤首、手捏的卷柄、雕镶成型的壶身，在匠人的手中相遇，才有了这一身顾盼的姿态。',
  action: '查看资料出处 ↗',
  paragraphs: ['把目光带回想象中的制瓷作坊：凤首借模具获得轮廓，卷柄在指间捏塑出弧度，扁圆的壶体以雕镶之法成形。各自成形的部分，还像一句话里尚未相连的字，等待着被琢成一个整体。', '当凤首与壶肩相接，卷尾与壶身相连，一团泥便有了抬头的神情。匠人的手离开了，手留下的心思却仍在：让出水的地方成为鸟喙，让提握的地方成为凤尾，让一件日用之器，也藏得下一只欲飞的凤凰。'],
  excerpt: '“壶流采用模制成型，壶柄以手捏塑成型，壶体为雕镶成型法，最后琢成整体。”',
 },
},
  sourceTitle:'故事取材 · 首都博物馆', sourceUrl:'https://www.capitalmuseum.org.cn/collection/fd9ddca5658f41b8a089c4b8109e3d11', boundary:'景德镇窑青花凤首扁壶 · 元代；文学演绎，非文物经历实录。', motto:'聚微光成器，听青花有声。',
  identity:'馆藏资料讲述 · 模型为视觉演示；当前模型与指定馆藏的身份对应尚未确证。',
 },
 'bronze-head': {
  id:'bronze-head',theme:'bronze',nickname:'守望',title:'青铜头像',english:'THE BRONZE GAZE',series:'重器新生',number:'02',category:'数字文物 · 青铜',
  poem:['将未说出口的话，','留在一眼凝望里。'],description:['轮廓在光中显现，锈色层层铺开。','绕过正面，让沉默有了另一种表情。'],tags:['以铜为形','以目相逢'],
  model:{desktop:'/models/bronze-head-web-desktop.glb',mobile:'/models/bronze-head-web-mobile.glb',rotationY:-Math.PI/2,roughness:.86,metalness:.15,exposure:1.05},
  focusTargets:['eyes','nose','ears','patina'],
  anchors:[{label:'眼部轮廓',x:-.45,y:.45,copy:'从正面看眼眶的轮廓，再转过一个角度，观察眼部起伏怎样接住光。'},{label:'鼻梁与面部',x:0,y:.0,copy:'鼻梁形成面部中央的纵向转折，侧光让高低起伏更加清楚。'},{label:'耳部结构',x:.85,y:.12,copy:'从正面到侧面，比较耳部与头部的连接和轮廓变化。'},{label:'表面锈色',x:-.4,y:-.65,copy:'深浅色层沿面庞交错铺开。缓缓转动，让光从锈色间走过，看看同一张面孔如何显出不同的晨昏。'}],
  welcome:'我是守望。名字是你们为我取的，凝望却是我的模样。先靠近一点，看看我的眼睛；也可以问我，青铜头像为什么如此令人难忘。',
  prompts:['你想让我先看哪里？','三星堆的青铜头像有什么特点？','讲一段关于凝望的小故事'],
  storyTitle:'凝望里的故事',lead:'从一道眼眶的起伏，到一片深浅交错的锈色，头像的表情在光里缓缓变化。你向左一步，它便显出另一副神情；你停下来，凝望才真正开始。',
  tabLabels:['观其貌','读锈色','听回响'],
  topics:{
   shape:{kind:'器形观察 · 文学演绎 / 01',brief:'它不急着说话。眉眼与鼻梁把光分成了几道，面庞的轮廓便从暗处浮现。你转动它，刚才还沉在阴影里的地方，又悄悄亮了起来。',action:'靠近眼部 ↗',target:'eyes',paragraphs:['把它想作一位安静的守望者：目光停在前方，话语藏在轮廓之中。你靠近时，不必先猜它的身份，先看看光如何经过眼眶、鼻梁和两侧的耳部。','展厅渐渐安静下来，最后一道光落在眼角。若沉默也有声音，那大概就是有人停下脚步时，一句轻轻的“原来你在这里”。'],excerpt:'相关类型参考：官方条目形容另一件青铜人头像“造型简洁明快，线条分明”。'},
   pattern:{kind:'表面观察 · 文学演绎 / 02',brief:'锈色像一幅没有题字的地图。深处收住光，浅处泛起微亮。沿着斑驳慢慢看，不必急着给每一道痕迹取一个年代。',action:'看看表面 ↗',target:'patina',paragraphs:['想象微光沿着额头落下，在面庞的凹凸间停驻。颜色并不整齐，也正因为不整齐，一张沉默的面孔有了更丰富的层次。','若把深色想成夜，把浅色想成微明，那么这张面孔便有自己的晨昏。你转动它，微光沿鼻梁走过，像一次不必说出姓名的相逢。'],excerpt:'微光沿鼻梁走过，像一次不必说出姓名的相逢。'},
   craft:{kind:'相关文物 · 类型参照 / 03',brief:'三星堆的青铜人头像给我们另一种看人的方式：面孔可以由鲜明的线条组成，神情也可以藏在简练的起伏里。先看清每一件的不同，再去想象古人的创造。',action:'查看相关文物资料 ↗',paragraphs:['四川省文物局收录的“青铜人头像（2）”，来源标注为三星堆博物馆，记载其为商代青铜器，头顶较圆、面部戴有面罩，头顶盖与颅腔分铸。','沿着眉眼与鼻梁看去，鲜明的线条将一张面孔留在青铜里。目光跨过漫长的时间，仍能让今天的观看者停下脚步。'],excerpt:'“该人头像头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。”'}
  },
  sourceTitle:'相关类型资料 · 四川省文物局 / 三星堆博物馆',sourceUrl:'https://wwj.sc.gov.cn/scwwj/sdai/2020/10/30/d3e376d89f384e418e62cbc06a3b2bb4.shtml',boundary:'参考条目与当前模型尚未建立身份对应；观察故事为文学演绎。',motto:'以一眼凝望，遇见无声的回响。',
  identity:'使用用户提供的青铜头雕模型。具体馆藏名称、年代与出土信息尚待确认；三星堆资料只作相关类型参考。'
 }
};
export function resolveExhibit(search='') {
 const id=new URLSearchParams(search).get('artifact')||'phoenix-ewer';
 return Object.hasOwn(exhibits,id)?exhibits[id]:null;
}
