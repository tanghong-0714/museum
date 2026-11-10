export const longquanExhibit = {
 titleLines:['龙泉窑青瓷','露胎人物塑像'],
 id:'longquan-figure',theme:'celadon',nickname:'青隐',title:'龙泉窑青瓷露胎人物塑像',english:'CELADON · EARTH AND EMBER',series:'重器新生',number:'05',category:'龙泉青瓷 · 釉与胎的相逢',
 poem:['一半青山，一半泥土，','窑火替我留住温柔。'],description:['青釉如山色，露胎似暖土。','转过一寸光，看两种质地如何相依。'],tags:['青釉流光','露胎见真'],
 model:{desktop:'/models/longquan-figure-web-desktop.glb',mobile:'/models/longquan-figure-web-mobile.glb',rotationY:-Math.PI/2,roughness:.66,metalness:0,exposure:1.12},
 focusTargets:['face','ornaments','pedestal'],anchors:[{label:'人物面容',x:0,y:.8,copy:'从眉眼的起伏看向两侧轮廓。转过一点，让光描出面庞与头饰的层次。'},{label:'釉色与衣纹',x:0,y:-.35,copy:'沿衣纹看青色的深浅，在转折与凹处寻找积釉带来的层次。'},{label:'足下与底部',x:0,y:-1.13,copy:'将目光向下移，比较底部的胎色、釉色和整体的承托关系。'}],
 welcome:'我是青隐。身上的青，替我留住山色；露出的泥土，替我记得来处。你愿意陪我等一束光，慢慢经过衣纹吗？',prompts:['龙泉青瓷怎样烧成？','我该先看塑像的哪里？','讲一段青隐与窑火的故事'],
 storyTitle:'从泥土到一抹青',lead:'泥土先学会安静，窑火再教它发光。青色沿着衣纹停驻，暖褐从釉外探出头来。一冷一暖之间，青隐把漫长的等待，讲成一个温柔的故事。',tabLabels:['观胎釉','循窑火','听青隐'],
 topics:{
 shape:{kind:'胎釉之间 / 01',brief:'青色并没有覆盖一切。露出的胎土像一小段山路，让目光从清凉的釉面，走回温暖的土地。',action:'走近人物面容 ↗',target:'face',paragraphs:['先看面容，再看衣饰。把目光停在两种颜色相遇的边缘，光滑与朴拙、清凉与温暖，便有了各自的声音。','青隐说：“不必把所有地方都染成同一种颜色。那些留白，也能替我说话。”你轻轻转动它，原本平静的轮廓便在光里有了新的神情。'],excerpt:'釉色与胎色相接，像青山与泥土相依。'},
 pattern:{kind:'青色诞生 / 02',brief:'火把泥土送进漫长的变化。火色、温度与等待，合力留下青釉如玉的光泽。',action:'沿着衣纹看釉色 ↗',target:'ornaments',paragraphs:['龙泉青瓷的传统烧制技艺，来自浙江龙泉。匠人对火候的把握，既依靠温度，也依靠对火焰颜色的观察。青色的出现，连着一代代人的经验。','青隐把窑想作一场长夜。火光在外面奔走，它在里面慢慢安静。等窑门再次打开，风从青色的衣纹上经过，像山间第一次吹来的晨风。'],excerpt:'2009年，龙泉青瓷传统烧制技艺列入联合国教科文组织人类非物质文化遗产代表作名录。'},
 craft:{kind:'青隐的山色 / 03',brief:'“你问我最喜欢哪一种青。我喜欢雨停之后，山还没有完全醒来的那一种。”',action:'看看青色背后的技艺 ↗',paragraphs:['有一天，青隐收到一片落叶。叶子问：“你经过那么热的火，为什么还是这样温柔？”青隐想了很久，答道：“也许是因为，火离开以后，我终于懂得珍惜每一阵凉风。”','于是它把落叶留在身旁。白天听光走过，夜里听风绕行。等你走近，它便把这份慢慢积攒的安静，分一点给你。'],excerpt:'经过火，也依然愿意温柔。'}
 },sourceTitle:'龙泉青瓷传统烧制技艺 · UNESCO',sourceUrl:'https://ich.unesco.org/en/RL/traditional-firing-technology-of-longquan-celadon-00205',boundary:'',motto:'让青色安放目光，让泥土留住温度。',identity:'用户文件题名为“元代龙泉窑青瓷露胎人物塑像”。本展示未核实模型对应的具体馆藏原物，元代仅为文件题名信息，不扩展具体窑址、人物身份、出土地点与尺寸。',
 decorHtml:'<div class="celadon-glaze"><i></i><i></i><i></i><b></b><span></span></div>'
};
