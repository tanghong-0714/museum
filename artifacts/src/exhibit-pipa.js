// A self-contained gallery profile; provenance is kept in identity and the knowledge file.
export const pipaExhibit = {
 id:'pipa-figurine',theme:'pipa',nickname:'弦月',title:'彩绘陶弹琵琶女俑',english:'A MELODY HELD IN CLAY',series:'重器新生',number:'06',category:'彩绘陶俑 · 怀抱弦音',
 poem:['指尖停在一曲之间，','余音刚好落向你。'],description:['陶色留住衣褶，也留住抱琴的姿态。','绕过一缕微光，听见静默中的回响。'],tags:['抱琴观姿','静中听弦'],
 model:{desktop:'/models/pipa-figurine-web-desktop.glb',mobile:'/models/pipa-figurine-web-mobile.glb',rotationY:-Math.PI/2,roughness:.9,metalness:0,exposure:1.12},
 performance:{rotationY:0,desktop:'/models/pipa-alive-desktop-R31.glb',mobile:'/models/pipa-alive-mobile-R31.glb',audio:'/audio/pipa-dancing-strings-6s-R32.mp3'},
 focusTargets:['face','ornaments','pattern'],anchors:[{label:'面容与发髻',x:0,y:.87,copy:'先看面容与发髻的轮廓，再转过一点，让侧光描出头部的起伏。'},{label:'怀中琵琶',x:.03,y:-.36,copy:'顺着双手与怀中乐器的关系，看抱持、停顿与倾斜组成的节奏。'},{label:'衣褶与陶色',x:0,y:-1.0,copy:'让目光沿衣褶向下，留意陶色在凸起与阴影之间的变化。'}],
 welcome:'我是弦月。你来得正好，这一曲还剩最后一个停顿。先别急着找声音，看看我怀里的琵琶，再把今天想说的话，轻轻放在这儿。',prompts:['琵琶的名字和弹奏有什么关系？','怎样欣赏这尊抱琴女俑？','讲一段关于弦月的故事'],
 storyTitle:'把一曲留给路过的人',lead:'指尖停住，衣褶仍像记得风的方向。她把琴抱得很近，却把一曲的余地留得很远：远到穿过安静的展厅，刚好让今天的你听见。',tabLabels:['望眉眼','循琴身','听弦月'],
 topics:{
  shape:{kind:'一眼 · 眉间月',brief:'她没有催促下一声弦响。微光先走过发髻，再落到眉眼，像是等一个迟来的人坐稳，才肯继续这一曲。',action:'走近眉眼 ↗',target:'face',paragraphs:['在故事里的小小庭院，月亮还没有升高。弦月先抬眼看看门口，又把视线放回琴上。她总觉得，一首曲子开始以前，应该给晚到的人留一个不慌不忙的位置。','走近些，沿面容、发髻与肩线看过去。转动女俑，明暗会重新组织这份安静：有些角度像在倾听，有些角度又像刚刚记起一句话。'],excerpt:'一曲未起，先为你留一个位置。'},
  pattern:{kind:'一抱 · 弦上风',brief:'怀中的琴把手势与身姿连成一句话。一只手留住方向，另一只手留住停顿，连沉默都像有了节拍。',action:'看看怀中琵琶 ↗',target:'ornaments',paragraphs:['想象晚风从门缝经过，琴声便追着它走出一点，又折回来。弦月不想把每个角落都填满；她知道，有时最动人的一瞬，是下一声还没有抵达。','顺着抱琴的动作看，手、琴身与衣褶彼此呼应。乐器成为姿态的中心，也让陶俑的静止有了方向。把模型轻轻侧转，再看这几个轮廓如何相接。'],excerpt:'让一声落下，也让另一声有地方开始。'},
  craft:{kind:'一曲 · 今夜来信',brief:'“如果今天没有好好说完一句话，就把它留在我的曲子里。”弦月把最后一个音放轻，等它慢慢走到你身旁。',action:'循着陶色细看 ↗',target:'pattern',paragraphs:['故事里，庭院最后一位听众迟迟不肯离开。他说，自己走了一整天，仍不知道该把心事放在哪里。弦月没有问缘由，只把那一段曲子重新弹了一次。这一次，停顿比旋律还要长。','想象他终于起身时，月光恰好落在衣袖边缘。心事没有突然消失，却也不再挤成一团。弦月把琴抱回怀里：原来陪一个人坐一会儿，也可以是一首曲子。'],excerpt:'陪一个人坐一会儿，也可以是一首曲子。'}
 },sourceTitle:'琵琶文化 · 克利夫兰艺术博物馆',sourceUrl:'https://www.clevelandart.org/art/1918.344',boundary:'',motto:'曲子可以停，倾听不必散场。',identity:'用户提供文件题名为“彩绘陶弹琵琶女俑”。未取得对应实物的馆藏登记、年代、尺寸及出土记录；不把器物类型或其他馆藏的记录归给本模型。弦月为本项目创作角色。',
 decorHtml:'<div class="pipa-strings"><i></i><i></i><i></i><i></i><b></b></div><div class="pipa-ribbon"></div>'
};
