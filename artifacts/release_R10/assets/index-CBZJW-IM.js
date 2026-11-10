(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const Iu={"cloud-mirror":{id:"cloud-mirror",theme:"mirror",nickname:"照影",title:"八连弧纹铜镜",english:"EIGHT ARCS · ONE REFLECTION",series:"器 生 · 照 影",number:"03",category:"云纹地八连弧纹铜镜",poem:["把云收进一轮圆，","把相逢留给你。"],description:["连弧相接，细纹在铜色中回旋。","翻过这一面，去看一轮圆的两种神情。"],tags:["一面观纹","一面照影"],model:{desktop:"/models/cloud-mirror-web-desktop.glb",mobile:"/models/cloud-mirror-web-mobile.glb",rotationY:-Math.PI/2,roughness:.72,metalness:.2,exposure:1.12},flip:!0,focusTargets:["boss","arcs","rim"],anchors:[{label:"中央镜钮",x:0,y:0,copy:"圆心处的凸起将视线收拢。转过侧面，看看镜钮与镜背的高度差。"},{label:"连弧与地纹",x:-.6,y:.45,copy:"把目光沿弧线缓缓移动，比较大轮廓与细密底纹的节奏。"},{label:"镜缘轮廓",x:.99,y:.3,copy:"靠近圆周，再转动模型：薄薄的侧缘把两个面连在一起。"}],welcome:"我是照影。别急着寻找镜中的自己，先看看我背面的云与弧线。转过一面，一轮圆，也可以有两种心情。",prompts:["八连弧纹是什么？","我该先看铜镜的哪里？","讲一段关于照影的故事"],storyTitle:"一轮圆里的相逢",lead:"一面向人，一面向纹。目光从圆心启程，循着连弧走过一圈，又回到最初的相逢。翻动铜镜，像翻开一封没有署名的信。",tabLabels:["循弧线","翻两面","听照影"],topics:{shape:{kind:"纹样观察 · 文学演绎 / 01",brief:"一段弧线牵住下一段，围出一圈安静的节奏。细纹在其间铺开，仿佛云影经过水面，轻轻一动，又停在了铜上。",action:"沿着连弧看 ↗",target:"arcs",paragraphs:["先别急着看完整个圆。挑一段弧线，顺着它的方向慢慢走：弧与弧在相接处转身，细小的纹理则填满轮廓之间的空隙。大的曲线让目光停住，小的纹样让目光继续。","如果把圆心想作一处安静的岸，围绕它的连弧便像一圈水湾。每一湾都朝向中心，又与邻近的一湾相连。转动时，光替你重新描过这条路。"],excerpt:"近名类型参考：广东大观博物馆藏“战国-云雷纹地八连弧纹镜”，材质为青铜。"},pattern:{kind:"器形观察 · 文学演绎 / 02",brief:"圆的两面，藏着不同的相见方式。纹样的一面让目光向内走，另一面则把想象送回观看它的人。轻轻翻面，故事便转了一页。",action:"看看中央镜钮 ↗",target:"boss",paragraphs:["将铜镜略微转侧，先看薄薄的边缘，再看镜背中央凸起的镜钮。原先平铺的纹样突然有了高度，圆面也显出起伏。","不妨想象一个尚未明亮的清晨：有人将一轮圆托在掌中，整理衣襟，再匆匆出门。镜子留在原处，背面的花纹却像刚刚醒来，把清晨的光又留了一会儿。"],excerpt:"圆的两面，藏着不同的相见方式。"},craft:{kind:"照影的来信 · 原创故事 / 03",brief:"“你问我记住过多少张脸。我更愿意记住，那些认真看向自己的时刻。”照影把答案放在一轮圆里，等你再转过来。",action:"查看故事取材 ↗",paragraphs:["想象闭馆后的一个夜晚。照影问窗外的月亮：“你每天被那么多人望着，会不会累？”月亮没有回答，只把一小片光放在它的边缘。照影便明白，有些陪伴，不需要把话说满。","第二天，有人在它面前停下，第一次认真看清那些细细的纹。照影想：原来相见也有两面，一面是我被你看见，一面是你愿意慢下来。"],excerpt:"相见也有两面：一面是我被你看见，一面是你愿意慢下来。"}},sourceTitle:"相关类型 · 广东大观博物馆",sourceUrl:"https://gddaguanmuseum.com/pd.jsp?m2382pageno=2&id=449",boundary:"近名馆藏作类型参考；模型身份尚未确证。故事为文学演绎。",motto:"一面看见纹，一面遇见你。",identity:"用户文件名为“云纹地八连弧纹铜镜”。近名馆藏条目记为战国青铜镜，尚未确认与本模型为同一件；不套用该条目的年代、尺寸或收藏地点。"},"liquan-bodhisattva":{id:"liquan-bodhisattva",theme:"stone",nickname:"静照",title:"菩萨立像",english:"STILLNESS HELD IN STONE",series:"器 生 · 静 照",number:"04",category:"数字造像 · 石色清光",poem:["让光走过石的纹理，","让心停留片刻。"],description:["雕痕承接微光，轮廓向静处延伸。","衣纹层层垂落，静立也有从容的姿态。"],tags:["循光观石","静处有声"],model:{desktop:"/models/liquan-bodhisattva-web-desktop.glb",mobile:"/models/liquan-bodhisattva-web-mobile.glb",rotationY:-Math.PI/2,roughness:.94,metalness:0,exposure:1.16},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"造像上部",x:0,y:.8,copy:"让光从侧面走过，观察上部轮廓和雕刻的转折。"},{label:"衣饰与雕痕",x:0,y:.1,copy:"沿着衣饰的线条向下看，比较浅刻、凸起与阴影的层次。"},{label:"莲瓣底座",x:0,y:-1.13,copy:"低头看看底座的层叠莲瓣，再从侧面观察足部与底座相接的轮廓。"}],welcome:"我是静照。你可以先不问我什么，让目光沿着石上的线条走一会儿。等你愿意，我再陪你读一段造像的故事。",prompts:["礼泉寺的参考造像有什么特点？","怎样欣赏这尊立像？","讲一段关于静照的故事"],storyTitle:"石上的微光",lead:"石的表面并非沉默。转折接住明暗，线条引导视线，舒展的姿态留下想象的余地。看一尊造像，也是在学习如何停下来。",tabLabels:["观轮廓","循衣纹","听静照"],topics:{shape:{kind:"造像观察 · 文学演绎 / 01",brief:"光从一侧缓缓经过，先照亮突起的轮廓，再沉入细小的雕痕。石没有移动，表情却随着你的观看一点点舒展开来。",action:"看看上部轮廓 ↗",target:"face",paragraphs:["想象一束清晨的光进入安静的空间。它不急着照亮所有地方，只先落在一处凸起上，再慢慢滑向凹处。石面由此有了不同的深浅，原来平静的轮廓也有了呼吸般的节奏。","沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。最后看向脚下层叠的莲瓣，整个身形便在这次观看里连成一体。"],excerpt:"石没有移动，表情却随着观看一点点舒展开来。"},pattern:{kind:"石雕之美 · 观察故事 / 02",brief:"一道线从光里起笔，另一道线在阴影里收尾。衣饰不曾随风摆动，却让石头有了轻与重、疏与密的变化。",action:"沿衣饰细看 ↗",target:"ornaments",paragraphs:["看衣饰时，试着把目光放慢：突起的地方先亮起来，低处则留住暗色。雕刻以这样的高低差，让坚硬的材料生出层次。","在想象中的工坊里，匠人收起工具，退后一步。刚才还显得繁密的线条，隔着一段距离忽然连成整体。你今天转动模型时，也在重复这种由近及远、重新看见的动作。"],excerpt:"相关馆藏参考：故宫展览资料描述礼泉寺出土菩萨像的花冠、璎珞与精细雕刻。"},craft:{kind:"静照的片刻 · 原创故事 / 03",brief:"“如果今天有些事还没想明白，先陪我站一会儿。”静照不急着补全你的句子，只把一小片安静留在光里。",action:"查看相关馆藏资料 ↗",paragraphs:["想象一个阴天的下午，有人带着没解开的心事来到这里。他沿着石上的线条看了很久，忽然问：“一直安静着，也能被好好看见吗？”静照没有替他回答，只让那束微光停在低垂的衣纹上。","离开的时候，他又回头看了一眼。心事仍在那里，微光也仍在那里。他终于发觉，自己不必先变得毫无缺憾，才能被温柔地对待。"],excerpt:"不必先变得毫无缺憾，才能被温柔地对待。"}},sourceTitle:"相关馆藏 · 故宫博物院展览资料",sourceUrl:"https://www.dpm.org.cn/subject_sino/project/china/98564.html",boundary:"模型为完整立像，与礼泉寺参考残像外形不同；资料作相关参照。叙事为文学演绎。",motto:"循着石上的光，留一刻安静。",identity:"原文件题名为“隋代礼泉寺遗址出土菩萨残像”，实际模型为带莲瓣底座的完整立像，与故宫资料中腰以上的礼泉寺残像不同。页面按模型展示为菩萨立像；参考残像的隋代年代、1987年出土记录及馆藏信息不归给本模型。"}},wc={titleLines:["龙泉窑青瓷","露胎人物塑像"],id:"longquan-figure",theme:"celadon",nickname:"青隐",title:"龙泉窑青瓷露胎人物塑像",english:"CELADON · EARTH AND EMBER",series:"器 生 · 青 隐",number:"05",category:"龙泉青瓷 · 釉与胎的相逢",poem:["一半青山，一半泥土，","窑火替我留住温柔。"],description:["青釉如山色，露胎似暖土。","转过一寸光，看两种质地如何相依。"],tags:["青釉流光","露胎见真"],model:{desktop:"/models/longquan-figure-web-desktop.glb",mobile:"/models/longquan-figure-web-mobile.glb",rotationY:-Math.PI/2,roughness:.66,metalness:0,exposure:1.12},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"人物面容",x:0,y:.8,copy:"从眉眼的起伏看向两侧轮廓。转过一点，让光描出面庞与头饰的层次。"},{label:"釉色与衣纹",x:0,y:-.35,copy:"沿衣纹看青色的深浅，在转折与凹处寻找积釉带来的层次。"},{label:"足下与底部",x:0,y:-1.13,copy:"将目光向下移，比较底部的胎色、釉色和整体的承托关系。"}],welcome:"我是青隐。身上的青，替我留住山色；露出的泥土，替我记得来处。你愿意陪我等一束光，慢慢经过衣纹吗？",prompts:["龙泉青瓷怎样烧成？","我该先看塑像的哪里？","讲一段青隐与窑火的故事"],storyTitle:"从泥土到一抹青",lead:"泥土先学会安静，窑火再教它发光。青色沿着衣纹停驻，暖褐从釉外探出头来。一冷一暖之间，青隐把漫长的等待，讲成一个温柔的故事。",tabLabels:["观胎釉","循窑火","听青隐"],topics:{shape:{kind:"胎釉之间 / 01",brief:"青色并没有覆盖一切。露出的胎土像一小段山路，让目光从清凉的釉面，走回温暖的土地。",action:"走近人物面容 ↗",target:"face",paragraphs:["先看面容，再看衣饰。把目光停在两种颜色相遇的边缘，光滑与朴拙、清凉与温暖，便有了各自的声音。","青隐说：“不必把所有地方都染成同一种颜色。那些留白，也能替我说话。”你轻轻转动它，原本平静的轮廓便在光里有了新的神情。"],excerpt:"釉色与胎色相接，像青山与泥土相依。"},pattern:{kind:"青色诞生 / 02",brief:"火把泥土送进漫长的变化。火色、温度与等待，合力留下青釉如玉的光泽。",action:"沿着衣纹看釉色 ↗",target:"ornaments",paragraphs:["龙泉青瓷的传统烧制技艺，来自浙江龙泉。匠人对火候的把握，既依靠温度，也依靠对火焰颜色的观察。青色的出现，连着一代代人的经验。","青隐把窑想作一场长夜。火光在外面奔走，它在里面慢慢安静。等窑门再次打开，风从青色的衣纹上经过，像山间第一次吹来的晨风。"],excerpt:"2009年，龙泉青瓷传统烧制技艺列入联合国教科文组织人类非物质文化遗产代表作名录。"},craft:{kind:"青隐的山色 / 03",brief:"“你问我最喜欢哪一种青。我喜欢雨停之后，山还没有完全醒来的那一种。”",action:"看看青色背后的技艺 ↗",paragraphs:["有一天，青隐收到一片落叶。叶子问：“你经过那么热的火，为什么还是这样温柔？”青隐想了很久，答道：“也许是因为，火离开以后，我终于懂得珍惜每一阵凉风。”","于是它把落叶留在身旁。白天听光走过，夜里听风绕行。等你走近，它便把这份慢慢积攒的安静，分一点给你。"],excerpt:"经过火，也依然愿意温柔。"}},sourceTitle:"龙泉青瓷传统烧制技艺 · UNESCO",sourceUrl:"https://ich.unesco.org/en/RL/traditional-firing-technology-of-longquan-celadon-00205",boundary:"",motto:"让青色安放目光，让泥土留住温度。",identity:"用户文件题名为“元代龙泉窑青瓷露胎人物塑像”。本展示未核实模型对应的具体馆藏原物，元代仅为文件题名信息，不扩展具体窑址、人物身份、出土地点与尺寸。",decorHtml:'<div class="celadon-glaze"><i></i><i></i><i></i><b></b><span></span></div>'},Ac={id:"pipa-figurine",theme:"pipa",nickname:"弦月",title:"彩绘陶弹琵琶女俑",english:"A MELODY HELD IN CLAY",series:"器 生 · 弦 月",number:"06",category:"彩绘陶俑 · 怀抱弦音",poem:["指尖停在一曲之间，","余音刚好落向你。"],description:["陶色留住衣褶，也留住抱琴的姿态。","绕过一缕微光，听见静默中的回响。"],tags:["抱琴观姿","静中听弦"],model:{desktop:"/models/pipa-figurine-web-desktop.glb",mobile:"/models/pipa-figurine-web-mobile.glb",rotationY:-Math.PI/2,roughness:.9,metalness:0,exposure:1.12},focusTargets:["face","ornaments","pattern"],anchors:[{label:"面容与发髻",x:0,y:.87,copy:"先看面容与发髻的轮廓，再转过一点，让侧光描出头部的起伏。"},{label:"怀中琵琶",x:.03,y:-.36,copy:"顺着双手与怀中乐器的关系，看抱持、停顿与倾斜组成的节奏。"},{label:"衣褶与陶色",x:0,y:-1,copy:"让目光沿衣褶向下，留意陶色在凸起与阴影之间的变化。"}],welcome:"我是弦月。你来得正好，这一曲还剩最后一个停顿。先别急着找声音，看看我怀里的琵琶，再把今天想说的话，轻轻放在这儿。",prompts:["琵琶的名字和弹奏有什么关系？","怎样欣赏这尊抱琴女俑？","讲一段关于弦月的故事"],storyTitle:"把一曲留给路过的人",lead:"指尖停住，衣褶仍像记得风的方向。她把琴抱得很近，却把一曲的余地留得很远：远到穿过安静的展厅，刚好让今天的你听见。",tabLabels:["望眉眼","循琴身","听弦月"],topics:{shape:{kind:"一眼 · 眉间月",brief:"她没有催促下一声弦响。微光先走过发髻，再落到眉眼，像是等一个迟来的人坐稳，才肯继续这一曲。",action:"走近眉眼 ↗",target:"face",paragraphs:["在故事里的小小庭院，月亮还没有升高。弦月先抬眼看看门口，又把视线放回琴上。她总觉得，一首曲子开始以前，应该给晚到的人留一个不慌不忙的位置。","走近些，沿面容、发髻与肩线看过去。转动女俑，明暗会重新组织这份安静：有些角度像在倾听，有些角度又像刚刚记起一句话。"],excerpt:"一曲未起，先为你留一个位置。"},pattern:{kind:"一抱 · 弦上风",brief:"怀中的琴把手势与身姿连成一句话。一只手留住方向，另一只手留住停顿，连沉默都像有了节拍。",action:"看看怀中琵琶 ↗",target:"ornaments",paragraphs:["想象晚风从门缝经过，琴声便追着它走出一点，又折回来。弦月不想把每个角落都填满；她知道，有时最动人的一瞬，是下一声还没有抵达。","顺着抱琴的动作看，手、琴身与衣褶彼此呼应。乐器成为姿态的中心，也让陶俑的静止有了方向。把模型轻轻侧转，再看这几个轮廓如何相接。"],excerpt:"让一声落下，也让另一声有地方开始。"},craft:{kind:"一曲 · 今夜来信",brief:"“如果今天没有好好说完一句话，就把它留在我的曲子里。”弦月把最后一个音放轻，等它慢慢走到你身旁。",action:"循着陶色细看 ↗",target:"pattern",paragraphs:["故事里，庭院最后一位听众迟迟不肯离开。他说，自己走了一整天，仍不知道该把心事放在哪里。弦月没有问缘由，只把那一段曲子重新弹了一次。这一次，停顿比旋律还要长。","想象他终于起身时，月光恰好落在衣袖边缘。心事没有突然消失，却也不再挤成一团。弦月把琴抱回怀里：原来陪一个人坐一会儿，也可以是一首曲子。"],excerpt:"陪一个人坐一会儿，也可以是一首曲子。"}},sourceTitle:"琵琶文化 · 克利夫兰艺术博物馆",sourceUrl:"https://www.clevelandart.org/art/1918.344",boundary:"",motto:"曲子可以停，倾听不必散场。",identity:"用户提供文件题名为“彩绘陶弹琵琶女俑”。未取得对应实物的馆藏登记、年代、尺寸及出土记录；不把器物类型或其他馆藏的记录归给本模型。弦月为本项目创作角色。",decorHtml:'<div class="pipa-strings"><i></i><i></i><i></i><i></i><b></b></div><div class="pipa-ribbon"></div>'},Ar={[wc.id]:wc,[Ac.id]:Ac,...Iu,"phoenix-ewer":{id:"phoenix-ewer",theme:"porcelain",nickname:"青花",title:"凤首扁壶",english:"PHOENIX-HEADED EWER",series:"器 生 · 青 花",number:"01",category:"数字文物 · 青花",poem:["一器青花，藏一只","欲飞的凤凰。"],description:["凤首昂起，卷尾成柄。","双翼轻拢，将花影与风留在瓷上。"],tags:["凤鸟为形","青花为衣"],model:{desktop:"/models/phoenix-web-desktop.glb",mobile:"/models/phoenix-web-mobile.glb",rotationY:-Math.PI/2,roughness:.5,metalness:0,exposure:1.12},focusTargets:["spout","handle","pattern","neck"],anchors:[{label:"凤首壶流",x:-1.03,y:.96,copy:"凤首从壶肩探出，流口随颈部曲线向上延伸。转到侧面，可观察头部与壶腹连接处的起伏。"},{label:"卷曲壶柄",x:1.16,y:.72,copy:"壶柄从肩部卷起，形成通透的环形空间。内卷的末端与凤首相呼应，侧面能看清柄孔及连接位置。"},{label:"青花纹饰",x:-.08,y:-.15,copy:"蓝色纹样沿扁圆壶腹铺展，白瓷底色与青花形成层次。缓慢转动，可比较两侧纹饰与器身曲面的关系。"},{label:"短颈口沿",x:-.1,y:1.12,copy:"短颈从肩部向上收起，口沿略向外展。颈部的几何纹饰与壶腹纹样形成疏密对照。"}],welcome:"你好，我是青花。你看，凤首是我的壶流，卷起的凤尾是我的壶柄。想先听听我的来历，还是看看这一身青花？",prompts:["你来自哪个年代？","为什么叫凤首扁壶？","壶身上画了什么？"],storyTitle:"青花里的故事",lead:"一只凤凰，将飞翔的姿态留在了青花里。昂首是流，卷尾是柄，双翼垂向牡丹丛。从器形到纹饰，再到指间成形的泥，循着三段小故事，走近它的世界。",tabLabels:["看器形","读纹饰","知工艺"],topics:{shape:{kind:"据馆藏资料创作 · 器形 / 01",brief:"一只凤凰收拢双翼，停在了壶上。昂起的头化作壶流，卷起的尾成为壶柄；仿佛只等一双手将它轻轻托起，它便要再次振翅。",action:"定位凤首 ↗",target:"spout",paragraphs:["若把这件元代青花壶看作一只暂歇的凤凰，它的姿态便有了故事：头颈向前探出，尾羽向后回旋，扁圆的身躯把两端轻轻连起。飞翔没有消失，只是被收进一道安静的轮廓。","想象一次缓缓的倾注：手握凤尾，壶身微侧，水从凤首流出。原本遥远的祥禽，忽然与人的动作有了呼应。再将壶放稳，它又停在那里，守着下一次相逢。"],excerpt:"“该壶以昂起的凤首作流” · “以卷起的凤尾作柄”"},pattern:{kind:"据馆藏资料创作 · 纹饰 / 02",brief:"凤凰把双翼垂向壶身两侧，牡丹在下方铺开。青与白之间，像有一阵风经过：花枝轻摇，羽翼将展，一整个春天停在了瓷上。",action:"看看纹饰 ↗",target:"pattern",paragraphs:["目光沿着青花向下走，先遇见凤身，再遇见垂向两侧的双翅，最后落入壶腹下方的牡丹丛。器物的弧面像一卷尚未展尽的画，转过一点，又露出一段花与羽的相逢。","不妨想象，凤凰正从花间掠过。羽尖带起的风尚未散去，花朵还留着摇动的姿态，画面便被留在了瓷面上。你转动壶身时，那场没有画出起点与终点的飞翔，又向前延续了一小段。"],excerpt:"“凤身绘在圆形壶体上部，双翅垂至壶体两侧”"},craft:{kind:"据馆藏资料创作 · 工艺 / 03",brief:"成为凤凰之前，它是等待成形的泥。模制的凤首、手捏的卷柄、雕镶成型的壶身，在匠人的手中相遇，才有了这一身顾盼的姿态。",action:"查看资料出处 ↗",paragraphs:["把目光带回想象中的制瓷作坊：凤首借模具获得轮廓，卷柄在指间捏塑出弧度，扁圆的壶体以雕镶之法成形。各自成形的部分，还像一句话里尚未相连的字，等待着被琢成一个整体。","当凤首与壶肩相接，卷尾与壶身相连，一团泥便有了抬头的神情。匠人的手离开了，手留下的心思却仍在：让出水的地方成为鸟喙，让提握的地方成为凤尾，让一件日用之器，也藏得下一只欲飞的凤凰。"],excerpt:"“壶流采用模制成型，壶柄以手捏塑成型，壶体为雕镶成型法，最后琢成整体。”"}},sourceTitle:"故事取材 · 首都博物馆",sourceUrl:"https://www.capitalmuseum.org.cn/collection/fd9ddca5658f41b8a089c4b8109e3d11",boundary:"景德镇窑青花凤首扁壶 · 元代；文学演绎，非文物经历实录。",motto:"聚微光成器，听青花有声。",identity:"馆藏资料讲述 · 模型为视觉演示；当前模型与指定馆藏的身份对应尚未确证。"},"bronze-head":{id:"bronze-head",theme:"bronze",nickname:"守望",title:"青铜头像",english:"THE BRONZE GAZE",series:"器 生 · 青 铜",number:"02",category:"数字文物 · 青铜",poem:["将未说出口的话，","留在一眼凝望里。"],description:["轮廓在光中显现，锈色层层铺开。","绕过正面，让沉默有了另一种表情。"],tags:["以铜为形","以目相逢"],model:{desktop:"/models/bronze-head-web-desktop.glb",mobile:"/models/bronze-head-web-mobile.glb",rotationY:-Math.PI/2,roughness:.86,metalness:.15,exposure:1.05},focusTargets:["eyes","nose","ears","patina"],anchors:[{label:"眼部轮廓",x:-.45,y:.45,copy:"从正面看眼眶的轮廓，再转过一个角度，观察眼部起伏怎样接住光。"},{label:"鼻梁与面部",x:0,y:0,copy:"鼻梁形成面部中央的纵向转折，侧光让高低起伏更加清楚。"},{label:"耳部结构",x:.85,y:.12,copy:"从正面到侧面，比较耳部与头部的连接和轮廓变化。"},{label:"表面锈色",x:-.4,y:-.65,copy:"深浅色层沿面庞交错铺开。缓缓转动，让光从锈色间走过，看看同一张面孔如何显出不同的晨昏。"}],welcome:"我是守望。名字是你们为我取的，凝望却是我的模样。先靠近一点，看看我的眼睛；也可以问我，青铜头像为什么如此令人难忘。",prompts:["你想让我先看哪里？","三星堆的青铜头像有什么特点？","讲一段关于凝望的小故事"],storyTitle:"凝望里的故事",lead:"从一道眼眶的起伏，到一片深浅交错的锈色，头像的表情在光里缓缓变化。你向左一步，它便显出另一副神情；你停下来，凝望才真正开始。",tabLabels:["观其貌","读锈色","听回响"],topics:{shape:{kind:"器形观察 · 文学演绎 / 01",brief:"它不急着说话。眉眼与鼻梁把光分成了几道，面庞的轮廓便从暗处浮现。你转动它，刚才还沉在阴影里的地方，又悄悄亮了起来。",action:"靠近眼部 ↗",target:"eyes",paragraphs:["把它想作一位安静的守望者：目光停在前方，话语藏在轮廓之中。你靠近时，不必先猜它的身份，先看看光如何经过眼眶、鼻梁和两侧的耳部。","展厅渐渐安静下来，最后一道光落在眼角。若沉默也有声音，那大概就是有人停下脚步时，一句轻轻的“原来你在这里”。"],excerpt:"相关类型参考：官方条目形容另一件青铜人头像“造型简洁明快，线条分明”。"},pattern:{kind:"表面观察 · 文学演绎 / 02",brief:"锈色像一幅没有题字的地图。深处收住光，浅处泛起微亮。沿着斑驳慢慢看，不必急着给每一道痕迹取一个年代。",action:"看看表面 ↗",target:"patina",paragraphs:["想象微光沿着额头落下，在面庞的凹凸间停驻。颜色并不整齐，也正因为不整齐，一张沉默的面孔有了更丰富的层次。","若把深色想成夜，把浅色想成微明，那么这张面孔便有自己的晨昏。你转动它，微光沿鼻梁走过，像一次不必说出姓名的相逢。"],excerpt:"微光沿鼻梁走过，像一次不必说出姓名的相逢。"},craft:{kind:"相关文物 · 类型参照 / 03",brief:"三星堆的青铜人头像给我们另一种看人的方式：面孔可以由鲜明的线条组成，神情也可以藏在简练的起伏里。先看清每一件的不同，再去想象古人的创造。",action:"查看相关文物资料 ↗",paragraphs:["四川省文物局收录的“青铜人头像（2）”，来源标注为三星堆博物馆，记载其为商代青铜器，头顶较圆、面部戴有面罩，头顶盖与颅腔分铸。","沿着眉眼与鼻梁看去，鲜明的线条将一张面孔留在青铜里。目光跨过漫长的时间，仍能让今天的观看者停下脚步。"],excerpt:"“该人头像头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。”"}},sourceTitle:"相关类型资料 · 四川省文物局 / 三星堆博物馆",sourceUrl:"https://wwj.sc.gov.cn/scwwj/sdai/2020/10/30/d3e376d89f384e418e62cbc06a3b2bb4.shtml",boundary:"参考条目与当前模型尚未建立身份对应；观察故事为文学演绎。",motto:"以一眼凝望，遇见无声的回响。",identity:"使用用户提供的青铜头雕模型。具体馆藏名称、年代与出土信息尚待确认；三星堆资料只作相关类型参考。"}};function Nu(r=""){const e=new URLSearchParams(r).get("artifact")||"phoenix-ewer";return Object.hasOwn(Ar,e)?Ar[e]:null}function Uu(r,e,t=!1){const n=b=>document.querySelector(b),i=(b,m)=>{n(b).textContent=m};n("#experience").dataset.theme=r.theme,document.title=`器生 · ${r.title} — 一器一世界`;const s=n("h1"),a=document.createElement("span");a.textContent=r.english,a.setAttribute("translate","no");const o=(r.titleLines||[r.title]).flatMap((b,m)=>m?[document.createElement("br"),document.createTextNode(b)]:[document.createTextNode(b)]);s.replaceChildren(...o,a);const c=n(".brand>span:last-child"),l=document.createElement("small");l.textContent="Q I S H E N G",c.replaceChildren(document.createTextNode(r.series),l),n(".brand").href=location.href,i(".collection-number",r.number);const u=n(".introduction .eyebrow");u.lastChild.textContent=" "+r.category;const h=document.createElement("span");h.textContent=r.poem[1],n(".hero-poem").replaceChildren(document.createTextNode(r.poem[0]),h),n(".hero-description").replaceChildren(document.createTextNode(r.description[0]),document.createElement("br"),document.createTextNode(r.description[1])),n(".hero-tags").querySelectorAll("span").forEach((b,m)=>b.textContent=r.tags[m]),n("#stage").setAttribute("aria-label",`可旋转的${r.title}三维模型`),i("#story-title",r.storyTitle),i(".guide-lead",r.lead),i(".guide-motto",r.motto),i("#story-panel .panel-heading .eyebrow",`${r.nickname} · 慢慢道来`),document.querySelectorAll("[data-guide]").forEach((b,m)=>b.textContent=r.tabLabels[m]),i(".guide-source>span",r.sourceTitle),n("#guide-source-link").href=r.sourceUrl,n(".guide-boundary").remove(),i(".bottom-line>span:first-child",`${r.series.replaceAll(" ","")} / A DIGITAL REIMAGINING`),i("#info h2",`器生 · ${r.title}`),i("#info>p:not(.eyebrow):not(.info-note)",r.lead);const f=n("#info").querySelectorAll("dd");f[0].textContent=`${r.title} · ${r.nickname}`,f[2].textContent="微光汇聚，器物显形。点击底部“微光演绎”，观看光粒消散与重新成形。";const g=document.createElement("select");if(g.id="artifact-select",g.setAttribute("aria-label","切换文物"),Object.values(e).sort((b,m)=>b.number.localeCompare(m.number)).forEach(b=>{const m=document.createElement("option");m.value=b.id,m.textContent=b.title,m.selected=b.id===r.id,g.append(m)}),g.onchange=()=>{const b=new URL(location.href);b.searchParams.set("artifact",g.value),location.href=b.href},n(".header-actions").prepend(g),r.decorHtml){const b=document.createElement("div");b.className="exhibit-decor",b.setAttribute("aria-hidden","true"),b.innerHTML=r.decorHtml,n(".atmosphere").append(b)}if(r.flip){const b=document.createElement("button");b.id="mirror-flip",b.textContent="翻面",b.disabled=!0,b.setAttribute("aria-label","翻看铜镜另一面"),n(".view-tools").prepend(b)}if(["mirror","stone"].includes(r.theme)){const b=document.createElement("div");b.className=r.theme==="mirror"?"mirror-orbits":"stone-light",b.setAttribute("aria-hidden","true"),b.innerHTML=r.theme==="mirror"?"<i></i><i></i><i></i><b></b><span></span>":"<i></i><i></i><i></i><b></b>",n(".atmosphere").append(b)}if(t){const b=document.createElement("p");b.className="artifact-notice",b.setAttribute("role","status"),b.textContent="未找到指定文物，已显示凤首扁壶。",n("#experience").append(b)}if(r.theme==="bronze"){const b=document.createElement("div");b.className="bronze-orbit",b.innerHTML="<i></i><i></i><i></i><b></b>";const m=document.createElement("div");m.className="bronze-beam",n(".atmosphere").append(b,m)}}const Rc=r=>Math.max(0,Math.min(1,r));class Fu{constructor(e=!1){this.reduced=e,this.formDuration=2.5,this.state="dormant",this.progress=0,this.elapsed=0,this.visualTime=0}get busy(){return this.state==="forming"||this.state==="dissolving"}present(){this.state="formed",this.progress=1,this.elapsed=0}form(){return this.state!=="dormant"?!1:(this.elapsed=0,this.state=this.reduced?"formed":"forming",this.progress=this.reduced?1:0,!0)}toggle(){return this.busy?!1:this.state==="dormant"?this.form():(this.elapsed=0,this.state=this.reduced?"dormant":"dissolving",this.progress=this.reduced?0:1,!0)}tick(e){const t=Math.max(0,Number.isFinite(e)?e:0);if(this.reduced||(this.visualTime+=t),this.busy){this.elapsed+=t;const n=this.state==="forming",i=Rc(this.elapsed/(n?this.formDuration:1.8)),s=i*i*(3-2*i);this.progress=n?s:1-s,i===1&&(this.state=n?"formed":"dormant")}return{assembly:this.progress,reveal:Rc((this.progress-.38)/.62),dissolve:0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jo="180",Gi={ROTATE:0,DOLLY:1,PAN:2},Hi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ou=0,Cc=1,ku=2,Ph=1,Bu=2,Rn=3,Fn=0,Ut=1,pn=2,Zn=0,pi=1,Pc=2,Lc=3,Dc=4,Hu=5,ui=100,zu=101,Gu=102,Vu=103,Wu=104,ju=200,qu=201,Xu=202,Yu=203,Xa=204,Ya=205,Ku=206,Ju=207,Zu=208,$u=209,Qu=210,ed=211,td=212,nd=213,id=214,Ka=0,Ja=1,Za=2,ji=3,$a=4,Qa=5,eo=6,to=7,qo=0,rd=1,sd=2,$n=0,ad=1,od=2,cd=3,Lh=4,ld=5,hd=6,ud=7,Ic="attached",dd="detached",Dh=300,qi=301,Xi=302,no=303,io=304,Ls=306,Yi=1e3,Yn=1001,Ts=1002,Ft=1003,Ih=1004,vr=1005,jt=1006,gs=1007,Pn=1008,gn=1009,Nh=1010,Uh=1011,Rr=1012,Xo=1013,gi=1014,rn=1015,Fr=1016,Yo=1017,Ko=1018,Cr=1020,Fh=35902,Oh=35899,kh=1021,Bh=1022,Zt=1023,Pr=1026,Lr=1027,Jo=1028,Zo=1029,Hh=1030,$o=1031,Qo=1033,bs=33776,_s=33777,xs=33778,vs=33779,ro=35840,so=35841,ao=35842,oo=35843,co=36196,lo=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,bo=37813,_o=37814,xo=37815,vo=37816,yo=37817,Mo=37818,So=37819,Eo=37820,To=37821,wo=36492,Ao=36494,Ro=36495,Co=36283,Po=36284,Lo=36285,Do=36286,Dr=2300,Ir=2301,ks=2302,Nc=2400,Uc=2401,Fc=2402,fd=2500,pd=0,zh=1,Io=2,md=3200,gd=3201,ec=0,bd=1,Xn="",wt="srgb",Ot="srgb-linear",ws="linear",it="srgb",Mi=7680,Oc=519,_d=512,xd=513,vd=514,Gh=515,yd=516,Md=517,Sd=518,Ed=519,No=35044,kc="300 es",mn=2e3,As=2001;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bc=1234567;const Mr=Math.PI/180,Ki=180/Math.PI;function sn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[r&255]+Ct[r>>8&255]+Ct[r>>16&255]+Ct[r>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function tc(r,e){return(r%e+e)%e}function Td(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function wd(r,e,t){return r!==e?(t-r)/(e-r):0}function Sr(r,e,t){return(1-t)*r+t*e}function Ad(r,e,t,n){return Sr(r,e,1-Math.exp(-t*n))}function Rd(r,e=1){return e-Math.abs(tc(r,e*2)-e)}function Cd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Pd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ld(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Dd(r,e){return r+Math.random()*(e-r)}function Id(r){return r*(.5-Math.random())}function Nd(r){r!==void 0&&(Bc=r);let e=Bc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ud(r){return r*Mr}function Fd(r){return r*Ki}function Od(r){return(r&r-1)===0&&r!==0}function kd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Hd(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*h,c*d,o*l);break;case"YZY":r.set(c*d,o*u,c*h,o*l);break;case"ZXZ":r.set(c*h,c*d,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*f,o*l);break;case"YXY":r.set(c*f,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function et(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Er={DEG2RAD:Mr,RAD2DEG:Ki,generateUUID:sn,clamp:je,euclideanModulo:tc,mapLinear:Td,inverseLerp:wd,lerp:Sr,damp:Ad,pingpong:Rd,smoothstep:Cd,smootherstep:Pd,randInt:Ld,randFloat:Dd,randFloatSpread:Id,seededRandom:Nd,degToRad:Ud,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:kd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:Hd,normalize:et,denormalize:tn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=s[a+0],f=s[a+1],g=s[a+2],b=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*b,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const T=Math.sqrt(M),A=Math.atan2(T,p*S);m=Math.sin(m*A)/T,o=Math.sin(o*A)/T}const x=o*S;if(c=c*m+d*x,l=l*m+f*x,u=u*m+g*x,h=h*m+b*x,m===1-o){const T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=i+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bs.copy(this).projectOnVector(e),this.sub(Bs)}reflect(e){return this.sub(Bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new N,Hc=new bn;class ze{constructor(e,t,n,i,s,a,o,c,l){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],b=i[0],m=i[3],p=i[6],S=i[1],M=i[4],x=i[7],T=i[2],A=i[5],R=i[8];return s[0]=a*b+o*S+c*T,s[3]=a*m+o*M+c*A,s[6]=a*p+o*x+c*R,s[1]=l*b+u*S+h*T,s[4]=l*m+u*M+h*A,s[7]=l*p+u*x+h*R,s[2]=d*b+f*S+g*T,s[5]=d*m+f*M+g*A,s[8]=d*p+f*x+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=d*b,e[4]=(u*t-i*c)*b,e[5]=(i*s-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new ze;function Vh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zd(){const r=Nr("canvas");return r.style.display="block",r}const zc={};function Ur(r){r in zc||(zc[r]=!0,console.warn(r))}function Gd(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Gc=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vc=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const r={enabled:!0,workingColorSpace:Ot,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(i.r=Dn(i.r),i.g=Dn(i.g),i.b=Dn(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(i.r=Vi(i.r),i.g=Vi(i.g),i.b=Vi(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xn?ws:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ur("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ur("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ot]:{primaries:e,whitePoint:n,transfer:ws,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:wt},outputColorSpaceConfig:{drawingBufferColorSpace:wt}},[wt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Gc,fromXYZ:Vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:wt}}}),r}const Je=Vd();function Dn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Si;class Wd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Nr("canvas")),Si.width=e.width,Si.height=e.height;const i=Si.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jd=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(zs(i[a].image)):s.push(zs(i[a]))}else s=zs(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function zs(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;const Gs=new N;class Rt extends _i{constructor(e=Rt.DEFAULT_IMAGE,t=Rt.DEFAULT_MAPPING,n=Yn,i=Yn,s=jt,a=Pn,o=Zt,c=gn,l=Rt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=sn(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gs).x}get height(){return this.source.getSize(Gs).y}get depth(){return this.source.getSize(Gs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yi:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ts:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yi:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ts:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Dh;Rt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,x=(f+1)/2,T=(p+1)/2,A=(u+d)/4,R=(h+b)/4,P=(g+m)/4;return M>x&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=A/n,s=R/n):x>T?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=A/i,s=P/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=R/s,i=P/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-b)/S,this.z=(d-u)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xd extends _i{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Rt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new nc(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends Xd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Wh extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yd extends Rt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class On{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(e.matrixWorld),this.union(zr)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),Gr.subVectors(this.max,lr),Ei.subVectors(e.a,lr),Ti.subVectors(e.b,lr),wi.subVectors(e.c,lr),kn.subVectors(Ti,Ei),Bn.subVectors(wi,Ti),ii.subVectors(Ei,wi);let t=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-ii.z,ii.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,ii.z,0,-ii.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-ii.y,ii.x,0];return!Vs(t,Ei,Ti,wi,Gr)||(t=[1,0,0,0,1,0,0,0,1],!Vs(t,Ei,Ti,wi,Gr))?!1:(Vr.crossVectors(kn,Bn),t=[Vr.x,Vr.y,Vr.z],Vs(t,Ei,Ti,wi,Gr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mn=[new N,new N,new N,new N,new N,new N,new N,new N],$t=new N,zr=new On,Ei=new N,Ti=new N,wi=new N,kn=new N,Bn=new N,ii=new N,lr=new N,Gr=new N,Vr=new N,ri=new N;function Vs(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ri.fromArray(r,s);const o=i.x*Math.abs(ri.x)+i.y*Math.abs(ri.y)+i.z*Math.abs(ri.z),c=e.dot(ri),l=t.dot(ri),u=n.dot(ri);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Kd=new On,hr=new N,Ws=new N;class xn{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);const t=hr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(Ws)),this.expandByPoint(hr.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new N,js=new N,Wr=new N,Hn=new N,qs=new N,jr=new N,Xs=new N;class tr{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){js.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Hn.copy(this.origin).sub(js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Hn.dot(this.direction),c=-Hn.dot(Wr),l=Hn.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(js).addScaledVector(Wr,d),f}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),i=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,i,s){qs.subVectors(t,e),jr.subVectors(n,e),Xs.crossVectors(qs,jr);let a=this.direction.dot(Xs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hn.subVectors(this.origin,e);const c=o*this.direction.dot(jr.crossVectors(Hn,jr));if(c<0)return null;const l=o*this.direction.dot(qs.cross(Hn));if(l<0||c+l>a)return null;const u=-o*Hn.dot(Xs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,i,s,a,o,c,l,u,h,d,f,g,b,m){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,h,d,f,g,b,m)}set(e,t,n,i,s,a,o,c,l,u,h,d,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-b*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jd,e,Zd)}lookAt(e,t,n){const i=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),zn.crossVectors(n,Gt),zn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),zn.crossVectors(n,Gt)),zn.normalize(),qr.crossVectors(Gt,zn),i[0]=zn.x,i[4]=qr.x,i[8]=Gt.x,i[1]=zn.y,i[5]=qr.y,i[9]=Gt.y,i[2]=zn.z,i[6]=qr.z,i[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],S=n[3],M=n[7],x=n[11],T=n[15],A=i[0],R=i[4],P=i[8],y=i[12],_=i[1],w=i[5],L=i[9],I=i[13],O=i[2],z=i[6],X=i[10],J=i[14],q=i[3],Q=i[7],oe=i[11],me=i[15];return s[0]=a*A+o*_+c*O+l*q,s[4]=a*R+o*w+c*z+l*Q,s[8]=a*P+o*L+c*X+l*oe,s[12]=a*y+o*I+c*J+l*me,s[1]=u*A+h*_+d*O+f*q,s[5]=u*R+h*w+d*z+f*Q,s[9]=u*P+h*L+d*X+f*oe,s[13]=u*y+h*I+d*J+f*me,s[2]=g*A+b*_+m*O+p*q,s[6]=g*R+b*w+m*z+p*Q,s[10]=g*P+b*L+m*X+p*oe,s[14]=g*y+b*I+m*J+p*me,s[3]=S*A+M*_+x*O+T*q,s[7]=S*R+M*w+x*z+T*Q,s[11]=S*P+M*L+x*X+T*oe,s[15]=S*y+M*I+x*J+T*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+s*c*h-i*l*h-s*o*d+n*l*d+i*o*f-n*c*f)+b*(+t*c*f-t*l*d+s*a*d-i*a*f+i*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+n*a*f+s*o*u-n*l*u)+p*(-i*o*u-t*c*h+t*o*d+i*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],S=h*m*l-b*d*l+b*c*f-o*m*f-h*c*p+o*d*p,M=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,x=u*b*l-g*h*l+g*o*f-a*b*f-u*o*p+a*h*p,T=g*h*c-u*b*c-g*o*d+a*b*d+u*o*m-a*h*m,A=t*S+n*M+i*x+s*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=S*R,e[1]=(b*d*s-h*m*s-b*i*f+n*m*f+h*i*p-n*d*p)*R,e[2]=(o*m*s-b*c*s+b*i*l-n*m*l-o*i*p+n*c*p)*R,e[3]=(h*c*s-o*d*s-h*i*l+n*d*l+o*i*f-n*c*f)*R,e[4]=M*R,e[5]=(u*m*s-g*d*s+g*i*f-t*m*f-u*i*p+t*d*p)*R,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*R,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*f+t*c*f)*R,e[8]=x*R,e[9]=(g*h*s-u*b*s-g*n*f+t*b*f+u*n*p-t*h*p)*R,e[10]=(a*b*s-g*o*s+g*n*l-t*b*l-a*n*p+t*o*p)*R,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*f-t*o*f)*R,e[12]=T*R,e[13]=(u*b*i-g*h*i+g*n*d-t*b*d-u*n*m+t*h*m)*R,e[14]=(g*o*i-a*b*i-g*n*c+t*b*c+a*n*m-t*o*m)*R,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,b=a*u,m=a*h,p=o*h,S=c*l,M=c*u,x=c*h,T=n.x,A=n.y,R=n.z;return i[0]=(1-(b+p))*T,i[1]=(f+x)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-x)*A,i[5]=(1-(d+p))*A,i[6]=(m+S)*A,i[7]=0,i[8]=(g+M)*R,i[9]=(m-S)*R,i[10]=(1-(d+b))*R,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ai.set(i[0],i[1],i[2]).length();const a=Ai.set(i[4],i[5],i[6]).length(),o=Ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Qt.copy(this);const l=1/s,u=1/a,h=1/o;return Qt.elements[0]*=l,Qt.elements[1]*=l,Qt.elements[2]*=l,Qt.elements[4]*=u,Qt.elements[5]*=u,Qt.elements[6]*=u,Qt.elements[8]*=h,Qt.elements[9]*=h,Qt.elements[10]*=h,t.setFromRotationMatrix(Qt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=mn,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let g,b;if(c)g=s/(a-s),b=a*s/(a-s);else if(o===mn)g=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(o===As)g=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=mn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let g,b;if(c)g=1/(a-s),b=a/(a-s);else if(o===mn)g=-2/(a-s),b=-(a+s)/(a-s);else if(o===As)g=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new N,Qt=new Ge,Jd=new N(0,0,0),Zd=new N(1,1,1),zn=new N,qr=new N,Gt=new N,Wc=new Ge,jc=new bn;class on{constructor(e=0,t=0,n=0,i=on.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jc.setFromEuler(this),this.setFromQuaternion(jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const qc=new N,Ri=new bn,En=new Ge,Xr=new N,ur=new N,Qd=new N,ef=new bn,Xc=new N(1,0,0),Yc=new N(0,1,0),Kc=new N(0,0,1),Jc={type:"added"},tf={type:"removed"},Ci={type:"childadded",child:null},Ys={type:"childremoved",child:null};class ut extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new N,t=new on,n=new bn,i=new N(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ge},normalMatrix:{value:new ze}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Xc,e)}rotateY(e){return this.rotateOnAxis(Yc,e)}rotateZ(e){return this.rotateOnAxis(Kc,e)}translateOnAxis(e,t){return qc.copy(e).applyQuaternion(this.quaternion),this.position.add(qc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xc,e)}translateY(e){return this.translateOnAxis(Yc,e)}translateZ(e){return this.translateOnAxis(Kc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xr.copy(e):Xr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ur,Xr,this.up):En.lookAt(Xr,ur,this.up),this.quaternion.setFromRotationMatrix(En),i&&(En.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(En),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tf),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,Qd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,ef,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ut.DEFAULT_UP=new N(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new N,Tn=new N,Ks=new N,wn=new N,Pi=new N,Li=new N,Zc=new N,Js=new N,Zs=new N,$s=new N,Qs=new $e,ea=new $e,ta=new $e;class nn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),en.subVectors(e,t),i.cross(en);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){en.subVectors(i,t),Tn.subVectors(n,t),Ks.subVectors(e,t);const a=en.dot(en),o=en.dot(Tn),c=en.dot(Ks),l=Tn.dot(Tn),u=Tn.dot(Ks),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wn.x),c.addScaledVector(a,wn.y),c.addScaledVector(o,wn.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return Qs.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qs.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,n),ta.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Qs,s.x),a.addScaledVector(ea,s.y),a.addScaledVector(ta,s.z),a}static isFrontFacing(e,t,n,i){return en.subVectors(n,t),Tn.subVectors(e,t),en.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return en.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),en.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Pi.subVectors(i,n),Li.subVectors(s,n),Js.subVectors(e,n);const c=Pi.dot(Js),l=Li.dot(Js);if(c<=0&&l<=0)return t.copy(n);Zs.subVectors(e,i);const u=Pi.dot(Zs),h=Li.dot(Zs);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pi,a);$s.subVectors(e,s);const f=Pi.dot($s),g=Li.dot($s);if(g>=0&&f<=g)return t.copy(s);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Li,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Zc.subVectors(s,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Zc,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function na(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Je.workingColorSpace){if(e=tc(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return Je.colorSpaceToWorking(this,i),this}setStyle(e,t=wt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=wt){const n=jh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wt){return Je.workingToColorSpace(Pt.copy(this),e),Math.round(je(Pt.r*255,0,255))*65536+Math.round(je(Pt.g*255,0,255))*256+Math.round(je(Pt.b*255,0,255))}getHexString(e=wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,i=Pt.g,s=Pt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-s)/h+(i<s?6:0);break;case i:c=(s-n)/h+2;break;case s:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=wt){Je.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,i=Pt.b;return e!==wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Yr);const n=Sr(Gn.h,Yr.h,t),i=Sr(Gn.s,Yr.s,t),s=Sr(Gn.l,Yr.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new Oe;Oe.NAMES=jh;let nf=0;class an extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=pi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=Ya,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ya&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fi extends an{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new N,Kr=new De;let rf=0;class xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==No&&(e.usage=this.usage),e}}class qh extends xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xh extends xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class In extends xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sf=0;const Kt=new Ge,ia=new ut,Di=new N,Vt=new On,dr=new On,Tt=new N;class qt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vh(e)?Xh:qh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new In(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Vt.min,dr.min),Vt.expandByPoint(Tt),Tt.addVectors(Vt.max,dr.max),Vt.expandByPoint(Tt)):(Vt.expandByPoint(dr.min),Vt.expandByPoint(dr.max))}Vt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Tt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Tt.fromBufferAttribute(o,l),c&&(Di.fromBufferAttribute(e,l),Tt.add(Di)),i=Math.max(i,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new N,c[P]=new N;const l=new N,u=new N,h=new N,d=new De,f=new De,g=new De,b=new N,m=new N;function p(P,y,_){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,y),h.fromBufferAttribute(n,_),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,_),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(w),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),o[P].add(b),o[y].add(b),o[_].add(b),c[P].add(m),c[y].add(m),c[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let P=0,y=S.length;P<y;++P){const _=S[P],w=_.start,L=_.count;for(let I=w,O=w+L;I<O;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const M=new N,x=new N,T=new N,A=new N;function R(P){T.fromBufferAttribute(i,P),A.copy(T);const y=o[P];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),x.crossVectors(A,y);const w=x.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,w)}for(let P=0,y=S.length;P<y;++P){const _=S[P],w=_.start,L=_.count;for(let I=w,O=w+L;I<O;I+=3)R(e.getX(I+0)),R(e.getX(I+1)),R(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new xt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new Ge,si=new tr,Jr=new xn,Qc=new N,Zr=new N,$r=new N,Qr=new N,ra=new N,es=new N,el=new N,ts=new N;class mt extends ut{constructor(e=new qt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){es.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ra.fromBufferAttribute(h,e),a?es.addScaledVector(ra,u):es.addScaledVector(ra.sub(t),u))}t.add(es)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),si.copy(e.ray).recast(e.near),!(Jr.containsPoint(si.origin)===!1&&(si.intersectSphere(Jr,Qc)===null||si.origin.distanceToSquared(Qc)>(e.far-e.near)**2))&&($c.copy(s).invert(),si.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,si)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=M;x<T;x+=3){const A=o.getX(x),R=o.getX(x+1),P=o.getX(x+2);i=ns(this,p,e,n,l,u,h,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const S=o.getX(m),M=o.getX(m+1),x=o.getX(m+2);i=ns(this,a,e,n,l,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=S,T=M;x<T;x+=3){const A=x,R=x+1,P=x+2;i=ns(this,p,e,n,l,u,h,A,R,P),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const S=m,M=m+1,x=m+2;i=ns(this,a,e,n,l,u,h,S,M,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function af(r,e,t,n,i,s,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Fn,o),c===null)return null;ts.copy(o),ts.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(ts);return l<t.near||l>t.far?null:{distance:l,point:ts.clone(),object:r}}function ns(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Zr),r.getVertexPosition(c,$r),r.getVertexPosition(l,Qr);const u=af(r,e,t,n,Zr,$r,Qr,el);if(u){const h=new N;nn.getBarycoord(el,Zr,$r,Qr,h),i&&(u.uv=nn.getInterpolatedAttribute(i,o,c,l,h,new De)),s&&(u.uv1=nn.getInterpolatedAttribute(s,o,c,l,h,new De)),a&&(u.normal=nn.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};nn.getNormal(Zr,$r,Qr,d.normal),u.face=d,u.barycoord=h}return u}class nr extends qt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new In(l,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function g(b,m,p,S,M,x,T,A,R,P,y){const _=x/R,w=T/P,L=x/2,I=T/2,O=A/2,z=R+1,X=P+1;let J=0,q=0;const Q=new N;for(let oe=0;oe<X;oe++){const me=oe*w-I;for(let Ue=0;Ue<z;Ue++){const Ye=Ue*_-L;Q[b]=Ye*S,Q[m]=me*M,Q[p]=O,l.push(Q.x,Q.y,Q.z),Q[b]=0,Q[m]=0,Q[p]=A>0?1:-1,u.push(Q.x,Q.y,Q.z),h.push(Ue/R),h.push(1-oe/P),J+=1}}for(let oe=0;oe<P;oe++)for(let me=0;me<R;me++){const Ue=d+me+z*oe,Ye=d+me+z*(oe+1),We=d+(me+1)+z*(oe+1),Ie=d+(me+1)+z*oe;c.push(Ue,Ye,Ie),c.push(Ye,We,Ie),q+=6}o.addGroup(f,q,y),f+=q,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ji(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Nt(r){const e={};for(let t=0;t<r.length;t++){const n=Ji(r[t]);for(const i in n)e[i]=n[i]}return e}function of(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Yh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cf={clone:Ji,merge:Nt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends an{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ji(e.uniforms),this.uniformsGroups=of(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kh extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vn=new N,tl=new De,nl=new De;class Lt extends Kh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ki*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ki*2*Math.atan(Math.tan(Mr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Vn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z),Vn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vn.x,Vn.y).multiplyScalar(-e/Vn.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ii=-90,Ni=1;class uf extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(Ii,Ni,e,t);i.layers=this.layers,this.add(i);const s=new Lt(Ii,Ni,e,t);s.layers=this.layers,this.add(s);const a=new Lt(Ii,Ni,e,t);a.layers=this.layers,this.add(a);const o=new Lt(Ii,Ni,e,t);o.layers=this.layers,this.add(o);const c=new Lt(Ii,Ni,e,t);c.layers=this.layers,this.add(c);const l=new Lt(Ii,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Jh extends Rt{constructor(e=[],t=qi,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class df extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Jh(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new nr(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:Zn});s.uniforms.tEquirect.value=t;const a=new mt(i,s),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=jt),new uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class Kn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class sa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Uo extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class pf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const It=new N;class rc{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),i=et(i,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const il=new N,rl=new $e,sl=new $e,mf=new N,al=new Ge,is=new N,aa=new xn,ol=new Ge,oa=new tr;class gf extends mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ic,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new On),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,is),this.boundingBox.expandByPoint(is)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,is),this.boundingSphere.expandByPoint(is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),aa.copy(this.boundingSphere),aa.applyMatrix4(i),e.ray.intersectsSphere(aa)!==!1&&(ol.copy(i).invert(),oa.copy(e.ray).applyMatrix4(ol),!(this.boundingBox!==null&&oa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ic?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===dd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rl.fromBufferAttribute(i.attributes.skinIndex,e),sl.fromBufferAttribute(i.attributes.skinWeight,e),il.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=sl.getComponent(s);if(a!==0){const o=rl.getComponent(s);al.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mf.copy(il).applyMatrix4(al),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Zh extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class $h extends Rt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Ft,u=Ft,h,d){super(null,a,o,c,l,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new Ge,bf=new Ge;class sc{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:bf;cl.multiplyMatrices(o,t[s]),cl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new $h(t,e,e,Zt,rn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Zh),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Fo extends xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new Ge,ll=new Ge,rs=[],hl=new On,_f=new Ge,fr=new mt,pr=new xn;class Qh extends mt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_f)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new On),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),hl.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(hl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),pr.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ui),ll.multiplyMatrices(n,Ui),fr.matrixWorld=ll,fr.raycast(e,rs);for(let a=0,o=rs.length;a<o;a++){const c=rs[a];c.instanceId=s,c.object=this,t.push(c)}rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $h(new Float32Array(i*this.count),i,this.count,Jo,rn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ca=new N,xf=new N,vf=new ze;class qn{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=ca.subVectors(n,t).cross(xf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),i=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ai=new xn,yf=new De(.5,.5),ss=new N;class ac{constructor(e=new qn,t=new qn,n=new qn,i=new qn,s=new qn,a=new qn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],b=s[9],m=s[10],p=s[11],S=s[12],M=s[13],x=s[14],T=s[15];if(i[0].setComponents(l-a,f-u,p-g,T-S).normalize(),i[1].setComponents(l+a,f+u,p+g,T+S).normalize(),i[2].setComponents(l+o,f+h,p+b,T+M).normalize(),i[3].setComponents(l-o,f-h,p-b,T-M).normalize(),n)i[4].setComponents(c,d,m,x).normalize(),i[5].setComponents(l-c,f-d,p-m,T-x).normalize();else if(i[4].setComponents(l-c,f-d,p-m,T-x).normalize(),t===mn)i[5].setComponents(l+c,f+d,p+m,T+x).normalize();else if(t===As)i[5].setComponents(c,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ai)}intersectsSprite(e){ai.center.set(0,0,0);const t=yf.distanceTo(e.center);return ai.radius=.7071067811865476+t,ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(ai)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ss.x=i.normal.x>0?e.max.x:e.min.x,ss.y=i.normal.y>0?e.max.y:e.min.y,ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eu extends an{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rs=new N,Cs=new N,ul=new Ge,mr=new tr,as=new xn,la=new N,dl=new N;class oc extends ut{constructor(e=new qt,t=new eu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Rs.fromBufferAttribute(t,i-1),Cs.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Rs.distanceTo(Cs);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;ul.copy(i).invert(),mr.copy(e.ray).applyMatrix4(ul);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=u.getX(b),S=u.getX(b+1),M=os(this,e,mr,c,p,S,b);M&&t.push(M)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(f),p=os(this,e,mr,c,b,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=os(this,e,mr,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=os(this,e,mr,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function os(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Rs.fromBufferAttribute(o,i),Cs.fromBufferAttribute(o,s),t.distanceSqToSegment(Rs,Cs,la,dl)>n)return;la.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(la);if(!(l<e.near||l>e.far))return{distance:l,point:dl.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const fl=new N,pl=new N;class Mf extends oc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);e.setAttribute("lineDistance",new In(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sf extends oc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class cc extends an{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new Ge,Oo=new tr,cs=new xn,ls=new N;class lc extends ut{constructor(e=new qt,t=new cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(i),cs.radius+=s,e.ray.intersectsSphere(cs)===!1)return;ml.copy(i).invert(),Oo.copy(e.ray).applyMatrix4(ml);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);ls.fromBufferAttribute(h,m),gl(ls,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++)ls.fromBufferAttribute(h,g),gl(ls,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function gl(r,e,t,n,i,s,a){const o=Oo.distanceSqToPoint(r);if(o<t){const c=new N;Oo.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class tu extends Rt{constructor(e,t,n=gi,i,s,a,o=Ft,c=Ft,l,u=Pr,h=1){if(u!==Pr&&u!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nu extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends qt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){const S=p*d-a;for(let M=0;M<l;M++){const x=M*h-s;g.push(x,-S,0),b.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const M=S+l*p,x=S+l*(p+1),T=S+1+l*(p+1),A=S+1+l*p;f.push(M,x,A),f.push(x,T,A)}this.setIndex(f),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(b,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zi extends an{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vn extends Zi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ef extends an{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tf extends an{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wf extends an{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function hs(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Af(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Rf(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function iu(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class kr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Cf extends kr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nc,endingEnd:Nc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uc:s=e,o=2*t-n;break;case Fc:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uc:a=e,c=2*n-t;break;case Fc:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,S=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*b+.5*g,x=f*m-f*b;for(let T=0;T!==o;++T)s[T]=p*a[u+T]+S*a[l+T]+M*a[c+T]+x*a[h+T];return s}}class Pf extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class Lf extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class cn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=hs(t,this.TimeBufferType),this.values=hs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:hs(e.times,Array),values:hs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Lf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Pf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case ks:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return ks}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Af(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ks,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Ir;class ir extends cn{constructor(e,t,n){super(e,t,n)}}ir.prototype.ValueTypeName="bool";ir.prototype.ValueBufferType=Array;ir.prototype.DefaultInterpolation=Dr;ir.prototype.InterpolantFactoryMethodLinear=void 0;ir.prototype.InterpolantFactoryMethodSmooth=void 0;class ru extends cn{constructor(e,t,n,i){super(e,t,n,i)}}ru.prototype.ValueTypeName="color";class $i extends cn{constructor(e,t,n,i){super(e,t,n,i)}}$i.prototype.ValueTypeName="number";class Df extends kr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)bn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class Qi extends cn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Df(this.times,this.values,this.getValueSize(),e)}}Qi.prototype.ValueTypeName="quaternion";Qi.prototype.InterpolantFactoryMethodSmooth=void 0;class rr extends cn{constructor(e,t,n){super(e,t,n)}}rr.prototype.ValueTypeName="string";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Dr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends cn{constructor(e,t,n,i){super(e,t,n,i)}}er.prototype.ValueTypeName="vector";class If{constructor(e="",t=-1,n=[],i=fd){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Uf(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(cn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Rf(c);c=bl(c,1,u),l=bl(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new $i(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,b){if(f.length!==0){const m=[],p=[];iu(f,m,p,g),m.length!==0&&b.push(new h(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let S=0;S!==d[g].morphTargets.length;++S){const M=d[g];m.push(M.time),p.push(M.morphTarget===b?1:0)}i.push(new $i(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(er,f+".position",d,"pos",i),n(Qi,f+".quaternion",d,"rot",i),n(er,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Nf(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $i;case"vector":case"vector2":case"vector3":case"vector4":return er;case"color":return ru;case"quaternion":return Qi;case"bool":case"boolean":return ir;case"string":return rr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Uf(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Nf(r.type);if(r.times===void 0){const t=[],n=[];iu(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ln={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Ff{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Of=new Ff;class sr{constructor(e){this.manager=e!==void 0?e:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}sr.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class kf extends Error{constructor(e,t){super(e),this.response=t}}class su extends sr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ln.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=An[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){S();function S(){h.read().then(({done:M,value:x})=>{if(M)p.close();else{b+=x.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let A=0,R=u.length;A<R;A++){const P=u[A];P.onProgress&&P.onProgress(T)}p.enqueue(x),S()}},M=>{p.error(M)})}}});return new Response(m)}else throw new kf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ln.add(`file:${e}`,l);const u=An[e];delete An[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),l;delete An[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=new WeakMap;class Bf extends sr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ln.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Fi.get(a);h===void 0&&(h=[],Fi.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=Nr("img");function c(){u(),t&&t(this);const h=Fi.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Fi.delete(this),s.manager.itemEnd(e)}function l(h){u(),i&&i(h),Ln.remove(`image:${e}`);const d=Fi.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Fi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ln.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Hf extends sr{constructor(e){super(e)}load(e,t,n,i){const s=new Rt,a=new Bf(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ds extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class zf extends Ds{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ha=new Ge,_l=new N,xl=new N;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ac,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_l.setFromMatrixPosition(e.matrixWorld),t.position.copy(_l),xl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xl),t.updateMatrixWorld(),ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ha,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Gf extends hc{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ki*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Vf extends Ds{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Gf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const vl=new Ge,gr=new N,ua=new N;class Wf extends hc{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),ua.copy(n.position),ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-gr.x,-gr.y,-gr.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,n.coordinateSystem,n.reversedDepth)}}class au extends Ds{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Wf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uc extends Kh{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jf extends hc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ko extends Ds{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new jf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const da=new WeakMap;class qf extends sr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ln.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(da.has(a)===!0)i&&i(da.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ln.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),da.set(c,l),Ln.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ln.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Xf extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dc="\\[\\]\\.:\\/",Yf=new RegExp("["+dc+"]","g"),fc="[^"+dc+"]",Kf="[^"+dc.replace("\\.","")+"]",Jf=/((?:WC+[\/:])*)/.source.replace("WC",fc),Zf=/(WCOD+)?/.source.replace("WCOD",Kf),$f=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fc),Qf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fc),ep=new RegExp("^"+Jf+Zf+$f+Qf+"$"),tp=["material","materials","bones","map"];class np{constructor(e,t,n){const i=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yf,"")}static parseTrackName(e){const t=ep.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);tp.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=np;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yl=new Ge;class ip{constructor(e,t,n=0,i=1/0){this.ray=new tr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(e,t=!0,n=[]){return Bo(e,this,n,t),n.sort(Ml),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Bo(e[i],this,n,t);return n.sort(Ml),n}}function Ml(r,e){return r.distance-e.distance}function Bo(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)Bo(s[a],e,t,!0)}}class Ho{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rp extends _i{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Sl(r,e,t,n){const i=sp(n);switch(t){case kh:return r*e;case Jo:return r*e/i.components*i.byteLength;case Zo:return r*e/i.components*i.byteLength;case Hh:return r*e*2/i.components*i.byteLength;case $o:return r*e*2/i.components*i.byteLength;case Bh:return r*e*3/i.components*i.byteLength;case Zt:return r*e*4/i.components*i.byteLength;case Qo:return r*e*4/i.components*i.byteLength;case bs:case _s:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xs:case vs:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case so:case oo:return Math.max(r,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(r,8)*Math.max(e,8)/2;case co:case lo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ho:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case go:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case bo:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case To:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wo:case Ao:case Ro:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Co:case Po:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Lo:case Do:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sp(r){switch(r){case gn:case Nh:return{byteLength:1,components:1};case Rr:case Uh:case Fr:return{byteLength:2,components:1};case Yo:case Ko:return{byteLength:2,components:4};case gi:case Xo:case rn:return{byteLength:4,components:1};case Fh:case Oh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ou(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ap(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(r.bindBuffer(l,o),h.length===0)r.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],b=h[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const b=h[f];r.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var op=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Pp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,em=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,im=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,am=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,om=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_m=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ym=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Um=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,km=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Km=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,og=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_g=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ag=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ug=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:op,alphahash_pars_fragment:cp,alphamap_fragment:lp,alphamap_pars_fragment:hp,alphatest_fragment:up,alphatest_pars_fragment:dp,aomap_fragment:fp,aomap_pars_fragment:pp,batching_pars_vertex:mp,batching_vertex:gp,begin_vertex:bp,beginnormal_vertex:_p,bsdfs:xp,iridescence_fragment:vp,bumpmap_pars_fragment:yp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Sp,clipping_planes_pars_vertex:Ep,clipping_planes_vertex:Tp,color_fragment:wp,color_pars_fragment:Ap,color_pars_vertex:Rp,color_vertex:Cp,common:Pp,cube_uv_reflection_fragment:Lp,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Ip,displacementmap_vertex:Np,emissivemap_fragment:Up,emissivemap_pars_fragment:Fp,colorspace_fragment:Op,colorspace_pars_fragment:kp,envmap_fragment:Bp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:zp,envmap_pars_vertex:Gp,envmap_physical_pars_fragment:Qp,envmap_vertex:Vp,fog_vertex:Wp,fog_pars_vertex:jp,fog_fragment:qp,fog_pars_fragment:Xp,gradientmap_pars_fragment:Yp,lightmap_pars_fragment:Kp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Zp,lights_pars_begin:$p,lights_toon_fragment:em,lights_toon_pars_fragment:tm,lights_phong_fragment:nm,lights_phong_pars_fragment:im,lights_physical_fragment:rm,lights_physical_pars_fragment:sm,lights_fragment_begin:am,lights_fragment_maps:om,lights_fragment_end:cm,logdepthbuf_fragment:lm,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:dm,map_fragment:fm,map_pars_fragment:pm,map_particle_fragment:mm,map_particle_pars_fragment:gm,metalnessmap_fragment:bm,metalnessmap_pars_fragment:_m,morphinstance_vertex:xm,morphcolor_vertex:vm,morphnormal_vertex:ym,morphtarget_pars_vertex:Mm,morphtarget_vertex:Sm,normal_fragment_begin:Em,normal_fragment_maps:Tm,normal_pars_fragment:wm,normal_pars_vertex:Am,normal_vertex:Rm,normalmap_pars_fragment:Cm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Lm,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Im,opaque_fragment:Nm,packing:Um,premultiplied_alpha_fragment:Fm,project_vertex:Om,dithering_fragment:km,dithering_pars_fragment:Bm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Gm,shadowmap_pars_vertex:Vm,shadowmap_vertex:Wm,shadowmask_pars_fragment:jm,skinbase_vertex:qm,skinning_pars_vertex:Xm,skinning_vertex:Ym,skinnormal_vertex:Km,specularmap_fragment:Jm,specularmap_pars_fragment:Zm,tonemapping_fragment:$m,tonemapping_pars_fragment:Qm,transmission_fragment:eg,transmission_pars_fragment:tg,uv_pars_fragment:ng,uv_pars_vertex:ig,uv_vertex:rg,worldpos_vertex:sg,background_vert:ag,background_frag:og,backgroundCube_vert:cg,backgroundCube_frag:lg,cube_vert:hg,cube_frag:ug,depth_vert:dg,depth_frag:fg,distanceRGBA_vert:pg,distanceRGBA_frag:mg,equirect_vert:gg,equirect_frag:bg,linedashed_vert:_g,linedashed_frag:xg,meshbasic_vert:vg,meshbasic_frag:yg,meshlambert_vert:Mg,meshlambert_frag:Sg,meshmatcap_vert:Eg,meshmatcap_frag:Tg,meshnormal_vert:wg,meshnormal_frag:Ag,meshphong_vert:Rg,meshphong_frag:Cg,meshphysical_vert:Pg,meshphysical_frag:Lg,meshtoon_vert:Dg,meshtoon_frag:Ig,points_vert:Ng,points_frag:Ug,shadow_vert:Fg,shadow_frag:Og,sprite_vert:kg,sprite_frag:Bg},le={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},fn={basic:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([le.points,le.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([le.common,le.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([le.sprite,le.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Nt([le.common,le.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Nt([le.lights,le.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};fn.physical={uniforms:Nt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const us={r:0,b:0,g:0},oi=new on,Hg=new Ge;function zg(r,e,t,n,i,s,a){const o=new Oe(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function b(M){let x=!1;const T=g(M);T===null?p(o,c):T&&T.isColor&&(p(T,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,x){const T=g(x);T&&(T.isCubeTexture||T.mapping===Ls)?(u===void 0&&(u=new mt(new nr(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Ji(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),oi.copy(x.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(oi)),u.material.toneMapped=Je.getTransfer(T.colorSpace)!==it,(h!==T||d!==T.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new mt(new Or(2,2),new _n({name:"BackgroundMaterial",uniforms:Ji(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Je.getTransfer(T.colorSpace)!==it,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,x){M.getRGB(us,Yh(r)),n.buffers.color.setClear(us.r,us.g,us.b,x,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:b,addToRenderList:m,dispose:S}}function Gg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(_,w,L,I,O){let z=!1;const X=h(I,L,w);s!==X&&(s=X,l(s.object)),z=f(_,I,L,O),z&&g(_,I,L,O),O!==null&&e.update(O,r.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,x(_,w,L,I),O!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return r.createVertexArray()}function l(_){return r.bindVertexArray(_)}function u(_){return r.deleteVertexArray(_)}function h(_,w,L){const I=L.wireframe===!0;let O=n[_.id];O===void 0&&(O={},n[_.id]=O);let z=O[w.id];z===void 0&&(z={},O[w.id]=z);let X=z[I];return X===void 0&&(X=d(c()),z[I]=X),X}function d(_){const w=[],L=[],I=[];for(let O=0;O<t;O++)w[O]=0,L[O]=0,I[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:L,attributeDivisors:I,object:_,attributes:{},index:null}}function f(_,w,L,I){const O=s.attributes,z=w.attributes;let X=0;const J=L.getAttributes();for(const q in J)if(J[q].location>=0){const oe=O[q];let me=z[q];if(me===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;X++}return s.attributesNum!==X||s.index!==I}function g(_,w,L,I){const O={},z=w.attributes;let X=0;const J=L.getAttributes();for(const q in J)if(J[q].location>=0){let oe=z[q];oe===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(oe=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(oe=_.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),O[q]=me,X++}s.attributes=O,s.attributesNum=X,s.index=I}function b(){const _=s.newAttributes;for(let w=0,L=_.length;w<L;w++)_[w]=0}function m(_){p(_,0)}function p(_,w){const L=s.newAttributes,I=s.enabledAttributes,O=s.attributeDivisors;L[_]=1,I[_]===0&&(r.enableVertexAttribArray(_),I[_]=1),O[_]!==w&&(r.vertexAttribDivisor(_,w),O[_]=w)}function S(){const _=s.newAttributes,w=s.enabledAttributes;for(let L=0,I=w.length;L<I;L++)w[L]!==_[L]&&(r.disableVertexAttribArray(L),w[L]=0)}function M(_,w,L,I,O,z,X){X===!0?r.vertexAttribIPointer(_,w,L,O,z):r.vertexAttribPointer(_,w,L,I,O,z)}function x(_,w,L,I){b();const O=I.attributes,z=L.getAttributes(),X=w.defaultAttributeValues;for(const J in z){const q=z[J];if(q.location>=0){let Q=O[J];if(Q===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),Q!==void 0){const oe=Q.normalized,me=Q.itemSize,Ue=e.get(Q);if(Ue===void 0)continue;const Ye=Ue.buffer,We=Ue.type,Ie=Ue.bytesPerElement,Y=We===r.INT||We===r.UNSIGNED_INT||Q.gpuType===Xo;if(Q.isInterleavedBufferAttribute){const K=Q.data,ce=K.stride,Te=Q.offset;if(K.isInstancedInterleavedBuffer){for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe,K.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let xe=0;xe<q.locationSize;xe++)M(q.location+xe,me/q.locationSize,We,oe,ce*Ie,(Te+me/q.locationSize*xe)*Ie,Y)}else{if(Q.isInstancedBufferAttribute){for(let K=0;K<q.locationSize;K++)p(q.location+K,Q.meshPerAttribute);_.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let K=0;K<q.locationSize;K++)m(q.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let K=0;K<q.locationSize;K++)M(q.location+K,me/q.locationSize,We,oe,me*Ie,me/q.locationSize*K*Ie,Y)}}else if(X!==void 0){const oe=X[J];if(oe!==void 0)switch(oe.length){case 2:r.vertexAttrib2fv(q.location,oe);break;case 3:r.vertexAttrib3fv(q.location,oe);break;case 4:r.vertexAttrib4fv(q.location,oe);break;default:r.vertexAttrib1fv(q.location,oe)}}}}S()}function T(){P();for(const _ in n){const w=n[_];for(const L in w){const I=w[L];for(const O in I)u(I[O].object),delete I[O];delete w[L]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const w=n[_.id];for(const L in w){const I=w[L];for(const O in I)u(I[O].object),delete I[O];delete w[L]}delete n[_.id]}function R(_){for(const w in n){const L=n[w];if(L[_.id]===void 0)continue;const I=L[_.id];for(const O in I)u(I[O].object),delete I[O];delete L[_.id]}}function P(){y(),a=!0,s!==i&&(s=i,l(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:S}}function Vg(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(r.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*d[b];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Zt&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==gn&&n.convert(R)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==rn&&!P)}function c(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),S=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:x,vertexTextures:T,maxSamples:A}}function jg(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new qn,o=new ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:n,M=S*4;let x=p.clippingState||null;c.value=x,x=u(g,d,M,f);for(let T=0;T!==M;++T)x[T]=t[T];p.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,x=f;M!==b;++M,x+=4)a.copy(h[M]).applyMatrix4(S,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function qg(r){let e=new WeakMap;function t(a,o){return o===no?a.mapping=qi:o===io&&(a.mapping=Xi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===no||o===io)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new df(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const zi=4,El=[.125,.215,.35,.446,.526,.582],di=20,fa=new uc,Tl=new Oe;let pa=null,ma=0,ga=0,ba=!1;const hi=(1+Math.sqrt(5))/2,Oi=1/hi,wl=[new N(-hi,Oi,0),new N(hi,Oi,0),new N(-Oi,0,hi),new N(Oi,0,hi),new N(0,hi,-Oi),new N(0,hi,Oi),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],Xg=new N;class zo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=Xg}=s;pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(pa,ma,ga),this._renderer.xr.enabled=ba,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qi||e.mapping===Xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pa=this._renderer.getRenderTarget(),ma=this._renderer.getActiveCubeFace(),ga=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:Fr,format:Zt,colorSpace:Ot,depthBuffer:!1},i=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yg(s)),this._blurMaterial=Kg(s,e,t)}return i}_compileMaterial(e){const t=new mt(this._lodPlanes[0],e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,i,s){const c=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Tl),h.toneMapping=$n,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null));const b=new fi({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),m=new mt(new nr,b);let p=!1;const S=e.background;S?S.isColor&&(b.color.copy(S),e.background=null,p=!0):(b.color.copy(Tl),p=!0);for(let M=0;M<6;M++){const x=M%3;x===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):x===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));const T=this._cubeSize;ds(i,x*T,M>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===qi||e.mapping===Xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ds(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wl[(i-s-1)%wl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new mt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*di-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):di;m>di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${di}`);const p=[];let S=0;for(let R=0;R<di;++R){const P=R/b,y=Math.exp(-P*P/2);p.push(y),R===0?S+=y:R<m&&(S+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const x=this._sizeLods[i],T=3*x*(i>M-zi?i-M+zi:0),A=4*(this._cubeSize-x);ds(t,T,A,3*x,2*x),c.setRenderTarget(t),c.render(h,fa)}}function Yg(r){const e=[],t=[],n=[];let i=r;const s=r-zi+1+El.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-zi?c=El[a-r+zi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,b=3,m=2,p=1,S=new Float32Array(b*g*f),M=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let A=0;A<f;A++){const R=A%3*2/3-1,P=A>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];S.set(y,b*g*A),M.set(d,m*g*A);const _=[A,A,A,A,A,A];x.set(_,p*g*A)}const T=new qt;T.setAttribute("position",new xt(S,b)),T.setAttribute("uv",new xt(M,m)),T.setAttribute("faceIndex",new xt(x,p)),e.push(T),i>zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(r,e,t){const n=new bi(r,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ds(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kg(r,e,t){const n=new Float32Array(di),i=new N(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Rl(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Cl(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jg(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===no||c===io,u=c===qi||c===Xi;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new zo(r)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new zo(r)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ur("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $g(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let b=0;if(f!==null){const S=f.array;b=f.version;for(let M=0,x=S.length;M<x;M+=3){const T=S[M+0],A=S[M+1],R=S[M+2];d.push(T,A,A,R,R,T)}}else if(g!==void 0){const S=g.array;b=g.version;for(let M=0,x=S.length/3-1;M<x;M+=3){const T=M+0,A=M+1,R=M+2;d.push(T,A,A,R,R,T)}}else return;const m=new(Vh(d)?Xh:qh)(d,1);m.version=b;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Qg(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,b,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*b[S];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function eb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tb(r,e,t){const n=new WeakMap,i=new $e;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let _=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var f=_;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),b===!0&&(x=2),m===!0&&(x=3);let T=o.attributes.position.count*x,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*A*4*h),P=new Wh(R,T,A,h);P.type=rn,P.needsUpdate=!0;const y=x*4;for(let w=0;w<h;w++){const L=p[w],I=S[w],O=M[w],z=T*A*4*w;for(let X=0;X<L.count;X++){const J=X*y;g===!0&&(i.fromBufferAttribute(L,X),R[z+J+0]=i.x,R[z+J+1]=i.y,R[z+J+2]=i.z,R[z+J+3]=0),b===!0&&(i.fromBufferAttribute(I,X),R[z+J+4]=i.x,R[z+J+5]=i.y,R[z+J+6]=i.z,R[z+J+7]=0),m===!0&&(i.fromBufferAttribute(O,X),R[z+J+8]=i.x,R[z+J+9]=i.y,R[z+J+10]=i.z,R[z+J+11]=O.itemSize===4?i.w:1)}}d={count:h,texture:P,size:new De(T,A)},n.set(o,d),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const b=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",b),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function nb(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const cu=new Rt,Pl=new tu(1,1),lu=new Wh,hu=new Yd,uu=new Jh,Ll=[],Dl=[],Il=new Float32Array(16),Nl=new Float32Array(9),Ul=new Float32Array(4);function ar(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ll[i];if(s===void 0&&(s=new Float32Array(i),Ll[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function St(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Et(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Is(r,e){let t=Dl[e];t===void 0&&(t=new Int32Array(e),Dl[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ib(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2fv(this.addr,e),Et(t,e)}}function sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;r.uniform3fv(this.addr,e),Et(t,e)}}function ab(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4fv(this.addr,e),Et(t,e)}}function ob(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Ul.set(n),r.uniformMatrix2fv(this.addr,!1,Ul),Et(t,n)}}function cb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Nl.set(n),r.uniformMatrix3fv(this.addr,!1,Nl),Et(t,n)}}function lb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(St(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(St(t,n))return;Il.set(n),r.uniformMatrix4fv(this.addr,!1,Il),Et(t,n)}}function hb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2iv(this.addr,e),Et(t,e)}}function db(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3iv(this.addr,e),Et(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4iv(this.addr,e),Et(t,e)}}function pb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;r.uniform2uiv(this.addr,e),Et(t,e)}}function gb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;r.uniform3uiv(this.addr,e),Et(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;r.uniform4uiv(this.addr,e),Et(t,e)}}function _b(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Pl.compareFunction=Gh,s=Pl):s=cu,t.setTexture2D(e||s,i)}function xb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hu,i)}function vb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uu,i)}function yb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lu,i)}function Mb(r){switch(r){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return cb;case 35676:return lb;case 5124:case 35670:return hb;case 35667:case 35671:return ub;case 35668:case 35672:return db;case 35669:case 35673:return fb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return yb}}function Sb(r,e){r.uniform1fv(this.addr,e)}function Eb(r,e){const t=ar(e,this.size,2);r.uniform2fv(this.addr,t)}function Tb(r,e){const t=ar(e,this.size,3);r.uniform3fv(this.addr,t)}function wb(r,e){const t=ar(e,this.size,4);r.uniform4fv(this.addr,t)}function Ab(r,e){const t=ar(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Rb(r,e){const t=ar(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Cb(r,e){const t=ar(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Pb(r,e){r.uniform1iv(this.addr,e)}function Lb(r,e){r.uniform2iv(this.addr,e)}function Db(r,e){r.uniform3iv(this.addr,e)}function Ib(r,e){r.uniform4iv(this.addr,e)}function Nb(r,e){r.uniform1uiv(this.addr,e)}function Ub(r,e){r.uniform2uiv(this.addr,e)}function Fb(r,e){r.uniform3uiv(this.addr,e)}function Ob(r,e){r.uniform4uiv(this.addr,e)}function kb(r,e,t){const n=this.cache,i=e.length,s=Is(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||cu,s[a])}function Bb(r,e,t){const n=this.cache,i=e.length,s=Is(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||hu,s[a])}function Hb(r,e,t){const n=this.cache,i=e.length,s=Is(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||uu,s[a])}function zb(r,e,t){const n=this.cache,i=e.length,s=Is(t,i);St(n,s)||(r.uniform1iv(this.addr,s),Et(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lu,s[a])}function Gb(r){switch(r){case 5126:return Sb;case 35664:return Eb;case 35665:return Tb;case 35666:return wb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Lb;case 35668:case 35672:return Db;case 35669:case 35673:return Ib;case 5125:return Nb;case 36294:return Ub;case 36295:return Fb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return zb}}class Vb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mb(t.type)}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gb(t.type)}}class jb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Fl(r,e){r.seq.push(e),r.map[e.id]=e}function qb(r,e,t){const n=r.name,i=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),a=_a.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Fl(t,l===void 0?new Vb(o,r,e):new Wb(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new jb(o),Fl(t,h)),t=h}}}class ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);qb(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ol(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Xb=37297;let Yb=0;function Kb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const kl=new ze;function Jb(r){Je._getMatrix(kl,Je.workingColorSpace,r);const e=`mat3( ${kl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(r)){case ws:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bl(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Kb(r.getShaderSource(e),o)}else return s}function Zb(r,e){const t=Jb(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function $b(r,e){let t;switch(e){case ad:t="Linear";break;case od:t="Reinhard";break;case cd:t="Cineon";break;case Lh:t="ACESFilmic";break;case hd:t="AgX";break;case ud:t="Neutral";break;case ld:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fs=new N;function Qb(){Je.getLuminanceCoefficients(fs);const r=fs.x.toFixed(4),e=fs.y.toFixed(4),t=fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e_(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function t_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function yr(r){return r!==""}function Hl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const i_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(r){return r.replace(i_,s_)}const r_=new Map;function s_(r,e){let t=Ve[e];if(t===void 0){const n=r_.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Go(t)}const a_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(r){return r.replace(a_,o_)}function o_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function c_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Rn&&(e="SHADOWMAP_TYPE_VSM"),e}function l_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case qi:case Xi:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Xi:e="ENVMAP_MODE_REFRACTION";break}return e}function u_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case sd:e="ENVMAP_BLENDING_ADD";break}return e}function d_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function f_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=c_(t),l=l_(t),u=h_(t),h=u_(t),d=d_(t),f=e_(t),g=t_(s),b=i.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(yr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$n?"#define TONE_MAPPING":"",t.toneMapping!==$n?Ve.tonemapping_pars_fragment:"",t.toneMapping!==$n?$b("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),Qb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),a=Go(a),a=Hl(a,t),a=zl(a,t),o=Go(o),o=Hl(o,t),o=zl(o,t),a=Gl(a),o=Gl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+m+a,x=S+p+o,T=Ol(i,i.VERTEX_SHADER,M),A=Ol(i,i.FRAGMENT_SHADER,x);i.attachShader(b,T),i.attachShader(b,A),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function R(w){if(r.debug.checkShaderErrors){const L=i.getProgramInfoLog(b)||"",I=i.getShaderInfoLog(T)||"",O=i.getShaderInfoLog(A)||"",z=L.trim(),X=I.trim(),J=O.trim();let q=!0,Q=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,b,T,A);else{const oe=Bl(i,T,"vertex"),me=Bl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+oe+`
`+me)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(X===""||J==="")&&(Q=!1);Q&&(w.diagnostics={runnable:q,programLog:z,vertexShader:{log:X,prefix:m},fragmentShader:{log:J,prefix:p}})}i.deleteShader(T),i.deleteShader(A),P=new ys(i,b),y=n_(i,b)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(b,Xb)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=T,this.fragmentShader=A,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new g_(e),t.set(e,n)),n}}class g_{constructor(e){this.id=p_++,this.code=e,this.usedTimes=0}}function b_(r,e,t,n,i,s,a){const o=new ic,c=new m_,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,_,w,L,I){const O=L.fog,z=I.geometry,X=y.isMeshStandardMaterial?L.environment:null,J=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),q=J&&J.mapping===Ls?J.image.height:null,Q=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const oe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,me=oe!==void 0?oe.length:0;let Ue=0;z.morphAttributes.position!==void 0&&(Ue=1),z.morphAttributes.normal!==void 0&&(Ue=2),z.morphAttributes.color!==void 0&&(Ue=3);let Ye,We,Ie,Y;if(Q){const Qe=fn[Q];Ye=Qe.vertexShader,We=Qe.fragmentShader}else Ye=y.vertexShader,We=y.fragmentShader,c.update(y),Ie=c.getVertexShaderID(y),Y=c.getFragmentShaderID(y);const K=r.getRenderTarget(),ce=r.state.buffers.depth.getReversed(),Te=I.isInstancedMesh===!0,xe=I.isBatchedMesh===!0,ke=!!y.map,gt=!!y.matcap,D=!!J,pe=!!y.aoMap,se=!!y.lightMap,ge=!!y.bumpMap,he=!!y.normalMap,qe=!!y.displacementMap,be=!!y.emissiveMap,Fe=!!y.metalnessMap,lt=!!y.roughnessMap,at=y.anisotropy>0,C=y.clearcoat>0,v=y.dispersion>0,H=y.iridescence>0,U=y.sheen>0,G=y.transmission>0,V=at&&!!y.anisotropyMap,$=C&&!!y.clearcoatMap,ne=C&&!!y.clearcoatNormalMap,ye=C&&!!y.clearcoatRoughnessMap,we=H&&!!y.iridescenceMap,ee=H&&!!y.iridescenceThicknessMap,ue=U&&!!y.sheenColorMap,Pe=U&&!!y.sheenRoughnessMap,Ae=!!y.specularMap,de=!!y.specularColorMap,He=!!y.specularIntensityMap,F=G&&!!y.transmissionMap,re=G&&!!y.thicknessMap,ae=!!y.gradientMap,ve=!!y.alphaMap,te=y.alphaTest>0,Z=!!y.alphaHash,Ee=!!y.extensions;let Be=$n;y.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Be=r.toneMapping);const ot={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Ye,fragmentShader:We,defines:y.defines,customVertexShaderID:Ie,customFragmentShaderID:Y,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:xe,batchingColor:xe&&I._colorsTexture!==null,instancing:Te,instancingColor:Te&&I.instanceColor!==null,instancingMorph:Te&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Ot,alphaToCoverage:!!y.alphaToCoverage,map:ke,matcap:gt,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:se,bumpMap:ge,normalMap:he,displacementMap:d&&qe,emissiveMap:be,normalMapObjectSpace:he&&y.normalMapType===bd,normalMapTangentSpace:he&&y.normalMapType===ec,metalnessMap:Fe,roughnessMap:lt,anisotropy:at,anisotropyMap:V,clearcoat:C,clearcoatMap:$,clearcoatNormalMap:ne,clearcoatRoughnessMap:ye,dispersion:v,iridescence:H,iridescenceMap:we,iridescenceThicknessMap:ee,sheen:U,sheenColorMap:ue,sheenRoughnessMap:Pe,specularMap:Ae,specularColorMap:de,specularIntensityMap:He,transmission:G,transmissionMap:F,thicknessMap:re,gradientMap:ae,opaque:y.transparent===!1&&y.blending===pi&&y.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:Z,combine:y.combine,mapUv:ke&&b(y.map.channel),aoMapUv:pe&&b(y.aoMap.channel),lightMapUv:se&&b(y.lightMap.channel),bumpMapUv:ge&&b(y.bumpMap.channel),normalMapUv:he&&b(y.normalMap.channel),displacementMapUv:qe&&b(y.displacementMap.channel),emissiveMapUv:be&&b(y.emissiveMap.channel),metalnessMapUv:Fe&&b(y.metalnessMap.channel),roughnessMapUv:lt&&b(y.roughnessMap.channel),anisotropyMapUv:V&&b(y.anisotropyMap.channel),clearcoatMapUv:$&&b(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&b(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&b(y.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&b(y.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&b(y.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&b(y.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&b(y.sheenRoughnessMap.channel),specularMapUv:Ae&&b(y.specularMap.channel),specularColorMapUv:de&&b(y.specularColorMap.channel),specularIntensityMapUv:He&&b(y.specularIntensityMap.channel),transmissionMapUv:F&&b(y.transmissionMap.channel),thicknessMapUv:re&&b(y.thicknessMap.channel),alphaMapUv:ve&&b(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(he||at),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(ke||ve),fog:!!O,useFog:y.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ue,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:Be,decodeVideoTexture:ke&&y.map.isVideoTexture===!0&&Je.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Je.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pn,flipSided:y.side===Ut,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function p(y){const _=[];if(y.shaderID?_.push(y.shaderID):(_.push(y.customVertexShaderID),_.push(y.customFragmentShaderID)),y.defines!==void 0)for(const w in y.defines)_.push(w),_.push(y.defines[w]);return y.isRawShaderMaterial===!1&&(S(_,y),M(_,y),_.push(r.outputColorSpace)),_.push(y.customProgramCacheKey),_.join()}function S(y,_){y.push(_.precision),y.push(_.outputColorSpace),y.push(_.envMapMode),y.push(_.envMapCubeUVHeight),y.push(_.mapUv),y.push(_.alphaMapUv),y.push(_.lightMapUv),y.push(_.aoMapUv),y.push(_.bumpMapUv),y.push(_.normalMapUv),y.push(_.displacementMapUv),y.push(_.emissiveMapUv),y.push(_.metalnessMapUv),y.push(_.roughnessMapUv),y.push(_.anisotropyMapUv),y.push(_.clearcoatMapUv),y.push(_.clearcoatNormalMapUv),y.push(_.clearcoatRoughnessMapUv),y.push(_.iridescenceMapUv),y.push(_.iridescenceThicknessMapUv),y.push(_.sheenColorMapUv),y.push(_.sheenRoughnessMapUv),y.push(_.specularMapUv),y.push(_.specularColorMapUv),y.push(_.specularIntensityMapUv),y.push(_.transmissionMapUv),y.push(_.thicknessMapUv),y.push(_.combine),y.push(_.fogExp2),y.push(_.sizeAttenuation),y.push(_.morphTargetsCount),y.push(_.morphAttributeCount),y.push(_.numDirLights),y.push(_.numPointLights),y.push(_.numSpotLights),y.push(_.numSpotLightMaps),y.push(_.numHemiLights),y.push(_.numRectAreaLights),y.push(_.numDirLightShadows),y.push(_.numPointLightShadows),y.push(_.numSpotLightShadows),y.push(_.numSpotLightShadowsWithMaps),y.push(_.numLightProbes),y.push(_.shadowMapType),y.push(_.toneMapping),y.push(_.numClippingPlanes),y.push(_.numClipIntersection),y.push(_.depthPacking)}function M(y,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),_.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reversedDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),y.push(o.mask)}function x(y){const _=g[y.type];let w;if(_){const L=fn[_];w=cf.clone(L.uniforms)}else w=y.uniforms;return w}function T(y,_){let w;for(let L=0,I=u.length;L<I;L++){const O=u[L];if(O.cacheKey===_){w=O,++w.usedTimes;break}}return w===void 0&&(w=new f_(r,_,y,s),u.push(w)),w}function A(y){if(--y.usedTimes===0){const _=u.indexOf(y);u[_]=u[u.length-1],u.pop(),y.destroy()}}function R(y){c.remove(y)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:A,releaseShaderCache:R,programs:u,dispose:P}}function __(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function x_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function jl(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,b,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,d,f,g,b,m){const p=a(h,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,b,m){const p=a(h,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Wl),i.length>1&&i.sort(d||Wl)}function u(){for(let h=e,d=r.length;h<d;h++){const f=r[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function v_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new jl,r.set(n,[a])):i>=s.length?(a=new jl,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function y_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Oe};break;case"SpotLight":t={position:new N,direction:new N,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new N,halfWidth:new N,halfHeight:new N};break}return r[e.id]=t,t}}}function M_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let S_=0;function E_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function T_(r){const e=new y_,t=M_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const i=new N,s=new Ge,a=new Ge;function o(l){let u=0,h=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,S=0,M=0,x=0,T=0,A=0,R=0;l.sort(E_);for(let y=0,_=l.length;y<_;y++){const w=l[y],L=w.color,I=w.intensity,O=w.distance,z=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=L.r*I,h+=L.g*I,d+=L.b*I;else if(w.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(w.sh.coefficients[X],I);R++}else if(w.isDirectionalLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,q=t.get(w);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=w.shadow.matrix,S++}n.directional[f]=X,f++}else if(w.isSpotLight){const X=e.get(w);X.position.setFromMatrixPosition(w.matrixWorld),X.color.copy(L).multiplyScalar(I),X.distance=O,X.coneCos=Math.cos(w.angle),X.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),X.decay=w.decay,n.spot[b]=X;const J=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,J.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[b]=J.matrix,w.castShadow){const q=t.get(w);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[b]=q,n.spotShadowMap[b]=z,x++}b++}else if(w.isRectAreaLight){const X=e.get(w);X.color.copy(L).multiplyScalar(I),X.halfWidth.set(w.width*.5,0,0),X.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=X,m++}else if(w.isPointLight){const X=e.get(w);if(X.color.copy(w.color).multiplyScalar(w.intensity),X.distance=w.distance,X.decay=w.decay,w.castShadow){const J=w.shadow,q=t.get(w);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=w.shadow.matrix,M++}n.point[g]=X,g++}else if(w.isHemisphereLight){const X=e.get(w);X.skyColor.copy(w.color).multiplyScalar(I),X.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[p]=X,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==x||P.numSpotMaps!==T||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=x+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=b,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=x,P.numSpotMaps=T,P.numLightProbes=R,n.version=S_++)}function c(l,u){let h=0,d=0,f=0,g=0,b=0;const m=u.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(M.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),x.halfWidth.set(M.width*.5,0,0),x.halfHeight.set(0,M.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(M.matrixWorld),x.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const x=n.hemi[b];x.direction.setFromMatrixPosition(M.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function ql(r){const e=new T_(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function w_(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ql(r),e.set(i,[o])):s>=a.length?(o=new ql(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C_(r,e,t){let n=new ac;const i=new De,s=new De,a=new $e,o=new Tf({depthPacking:gd}),c=new wf,l={},u=t.maxTextureSize,h={[Fn]:Ut,[Ut]:Fn,[pn]:pn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:A_,fragmentShader:R_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new mt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let p=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=r.getRenderTarget(),_=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Zn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=p!==Rn&&this.type===Rn,O=p===Rn&&this.type!==Rn;for(let z=0,X=A.length;z<X;z++){const J=A[z],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const Q=q.getFrameExtents();if(i.multiply(Q),s.copy(q.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Q.x),i.x=s.x*Q.x,q.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Q.y),i.y=s.y*Q.y,q.mapSize.y=s.y)),q.map===null||I===!0||O===!0){const me=this.type!==Rn?{minFilter:Ft,magFilter:Ft}:{};q.map!==null&&q.map.dispose(),q.map=new bi(i.x,i.y,me),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}r.setRenderTarget(q.map),r.clear();const oe=q.getViewportCount();for(let me=0;me<oe;me++){const Ue=q.getViewport(me);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),L.viewport(a),q.updateMatrices(J,me),n=q.getFrustum(),x(R,P,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Rn&&S(q,P),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,_,w)};function S(A,R){const P=e.update(b);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new bi(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(R,null,P,d,b,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(R,null,P,f,b,null)}function M(A,R,P,y){let _=null;const w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)_=w;else if(_=P.isPointLight===!0?c:o,r.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=_.uuid,I=R.uuid;let O=l[L];O===void 0&&(O={},l[L]=O);let z=O[I];z===void 0&&(z=_.clone(),O[I]=z,R.addEventListener("dispose",T)),_=z}if(_.visible=R.visible,_.wireframe=R.wireframe,y===Rn?_.side=R.shadowSide!==null?R.shadowSide:R.side:_.side=R.shadowSide!==null?R.shadowSide:h[R.side],_.alphaMap=R.alphaMap,_.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,_.map=R.map,_.clipShadows=R.clipShadows,_.clippingPlanes=R.clippingPlanes,_.clipIntersection=R.clipIntersection,_.displacementMap=R.displacementMap,_.displacementScale=R.displacementScale,_.displacementBias=R.displacementBias,_.wireframeLinewidth=R.wireframeLinewidth,_.linewidth=R.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const L=r.properties.get(_);L.light=P}return _}function x(A,R,P,y,_){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===Rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const I=e.update(A),O=A.material;if(Array.isArray(O)){const z=I.groups;for(let X=0,J=z.length;X<J;X++){const q=z[X],Q=O[q.materialIndex];if(Q&&Q.visible){const oe=M(A,Q,y,_);A.onBeforeShadow(r,A,R,P,I,oe,q),r.renderBufferDirect(P,null,I,oe,A,q),A.onAfterShadow(r,A,R,P,I,oe,q)}}}else if(O.visible){const z=M(A,O,y,_);A.onBeforeShadow(r,A,R,P,I,z,null),r.renderBufferDirect(P,null,I,z,A,null),A.onAfterShadow(r,A,R,P,I,z,null)}}const L=A.children;for(let I=0,O=L.length;I<O;I++)x(L[I],R,P,y,_)}function T(A){A.target.removeEventListener("dispose",T);for(const P in l){const y=l[P],_=A.target.uuid;_ in y&&(y[_].dispose(),delete y[_])}}}const P_={[Ka]:Ja,[Za]:eo,[$a]:to,[ji]:Qa,[Ja]:Ka,[eo]:Za,[to]:$a,[Qa]:ji};function L_(r,e){function t(){let F=!1;const re=new $e;let ae=null;const ve=new $e(0,0,0,0);return{setMask:function(te){ae!==te&&!F&&(r.colorMask(te,te,te,te),ae=te)},setLocked:function(te){F=te},setClear:function(te,Z,Ee,Be,ot){ot===!0&&(te*=Be,Z*=Be,Ee*=Be),re.set(te,Z,Ee,Be),ve.equals(re)===!1&&(r.clearColor(te,Z,Ee,Be),ve.copy(re))},reset:function(){F=!1,ae=null,ve.set(-1,0,0,0)}}}function n(){let F=!1,re=!1,ae=null,ve=null,te=null;return{setReversed:function(Z){if(re!==Z){const Ee=e.get("EXT_clip_control");Z?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),re=Z;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return re},setTest:function(Z){Z?K(r.DEPTH_TEST):ce(r.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!F&&(r.depthMask(Z),ae=Z)},setFunc:function(Z){if(re&&(Z=P_[Z]),ve!==Z){switch(Z){case Ka:r.depthFunc(r.NEVER);break;case Ja:r.depthFunc(r.ALWAYS);break;case Za:r.depthFunc(r.LESS);break;case ji:r.depthFunc(r.LEQUAL);break;case $a:r.depthFunc(r.EQUAL);break;case Qa:r.depthFunc(r.GEQUAL);break;case eo:r.depthFunc(r.GREATER);break;case to:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=Z}},setLocked:function(Z){F=Z},setClear:function(Z){te!==Z&&(re&&(Z=1-Z),r.clearDepth(Z),te=Z)},reset:function(){F=!1,ae=null,ve=null,te=null,re=!1}}}function i(){let F=!1,re=null,ae=null,ve=null,te=null,Z=null,Ee=null,Be=null,ot=null;return{setTest:function(Qe){F||(Qe?K(r.STENCIL_TEST):ce(r.STENCIL_TEST))},setMask:function(Qe){re!==Qe&&!F&&(r.stencilMask(Qe),re=Qe)},setFunc:function(Qe,yn,ln){(ae!==Qe||ve!==yn||te!==ln)&&(r.stencilFunc(Qe,yn,ln),ae=Qe,ve=yn,te=ln)},setOp:function(Qe,yn,ln){(Z!==Qe||Ee!==yn||Be!==ln)&&(r.stencilOp(Qe,yn,ln),Z=Qe,Ee=yn,Be=ln)},setLocked:function(Qe){F=Qe},setClear:function(Qe){ot!==Qe&&(r.clearStencil(Qe),ot=Qe)},reset:function(){F=!1,re=null,ae=null,ve=null,te=null,Z=null,Ee=null,Be=null,ot=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,S=null,M=null,x=null,T=null,A=null,R=new Oe(0,0,0),P=0,y=!1,_=null,w=null,L=null,I=null,O=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(q)[1]),X=J>=1):q.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),X=J>=2);let Q=null,oe={};const me=r.getParameter(r.SCISSOR_BOX),Ue=r.getParameter(r.VIEWPORT),Ye=new $e().fromArray(me),We=new $e().fromArray(Ue);function Ie(F,re,ae,ve){const te=new Uint8Array(4),Z=r.createTexture();r.bindTexture(F,Z),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ae;Ee++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(re+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Z}const Y={};Y[r.TEXTURE_2D]=Ie(r.TEXTURE_2D,r.TEXTURE_2D,1),Y[r.TEXTURE_CUBE_MAP]=Ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[r.TEXTURE_2D_ARRAY]=Ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Y[r.TEXTURE_3D]=Ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(ji),ge(!1),he(Cc),K(r.CULL_FACE),pe(Zn);function K(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function ce(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function Te(F,re){return h[F]!==re?(r.bindFramebuffer(F,re),h[F]=re,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=re),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=re),!0):!1}function xe(F,re){let ae=f,ve=!1;if(F){ae=d.get(re),ae===void 0&&(ae=[],d.set(re,ae));const te=F.textures;if(ae.length!==te.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let Z=0,Ee=te.length;Z<Ee;Z++)ae[Z]=r.COLOR_ATTACHMENT0+Z;ae.length=te.length,ve=!0}}else ae[0]!==r.BACK&&(ae[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ae)}function ke(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const gt={[ui]:r.FUNC_ADD,[zu]:r.FUNC_SUBTRACT,[Gu]:r.FUNC_REVERSE_SUBTRACT};gt[Vu]=r.MIN,gt[Wu]=r.MAX;const D={[ju]:r.ZERO,[qu]:r.ONE,[Xu]:r.SRC_COLOR,[Xa]:r.SRC_ALPHA,[Qu]:r.SRC_ALPHA_SATURATE,[Zu]:r.DST_COLOR,[Ku]:r.DST_ALPHA,[Yu]:r.ONE_MINUS_SRC_COLOR,[Ya]:r.ONE_MINUS_SRC_ALPHA,[$u]:r.ONE_MINUS_DST_COLOR,[Ju]:r.ONE_MINUS_DST_ALPHA,[ed]:r.CONSTANT_COLOR,[td]:r.ONE_MINUS_CONSTANT_COLOR,[nd]:r.CONSTANT_ALPHA,[id]:r.ONE_MINUS_CONSTANT_ALPHA};function pe(F,re,ae,ve,te,Z,Ee,Be,ot,Qe){if(F===Zn){b===!0&&(ce(r.BLEND),b=!1);return}if(b===!1&&(K(r.BLEND),b=!0),F!==Hu){if(F!==m||Qe!==y){if((p!==ui||x!==ui)&&(r.blendEquation(r.FUNC_ADD),p=ui,x=ui),Qe)switch(F){case pi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFunc(r.ONE,r.ONE);break;case Lc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Dc:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case pi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pc:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Lc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,M=null,T=null,A=null,R.set(0,0,0),P=0,m=F,y=Qe}return}te=te||re,Z=Z||ae,Ee=Ee||ve,(re!==p||te!==x)&&(r.blendEquationSeparate(gt[re],gt[te]),p=re,x=te),(ae!==S||ve!==M||Z!==T||Ee!==A)&&(r.blendFuncSeparate(D[ae],D[ve],D[Z],D[Ee]),S=ae,M=ve,T=Z,A=Ee),(Be.equals(R)===!1||ot!==P)&&(r.blendColor(Be.r,Be.g,Be.b,ot),R.copy(Be),P=ot),m=F,y=!1}function se(F,re){F.side===pn?ce(r.CULL_FACE):K(r.CULL_FACE);let ae=F.side===Ut;re&&(ae=!ae),ge(ae),F.blending===pi&&F.transparent===!1?pe(Zn):pe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ve=F.stencilWrite;o.setTest(ve),ve&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),be(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):ce(r.SAMPLE_ALPHA_TO_COVERAGE)}function ge(F){_!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),_=F)}function he(F){F!==Ou?(K(r.CULL_FACE),F!==w&&(F===Cc?r.cullFace(r.BACK):F===ku?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ce(r.CULL_FACE),w=F}function qe(F){F!==L&&(X&&r.lineWidth(F),L=F)}function be(F,re,ae){F?(K(r.POLYGON_OFFSET_FILL),(I!==re||O!==ae)&&(r.polygonOffset(re,ae),I=re,O=ae)):ce(r.POLYGON_OFFSET_FILL)}function Fe(F){F?K(r.SCISSOR_TEST):ce(r.SCISSOR_TEST)}function lt(F){F===void 0&&(F=r.TEXTURE0+z-1),Q!==F&&(r.activeTexture(F),Q=F)}function at(F,re,ae){ae===void 0&&(Q===null?ae=r.TEXTURE0+z-1:ae=Q);let ve=oe[ae];ve===void 0&&(ve={type:void 0,texture:void 0},oe[ae]=ve),(ve.type!==F||ve.texture!==re)&&(Q!==ae&&(r.activeTexture(ae),Q=ae),r.bindTexture(F,re||Y[F]),ve.type=F,ve.texture=re)}function C(){const F=oe[Q];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function v(){try{r.compressedTexImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{r.texSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function G(){try{r.texSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function V(){try{r.compressedTexSubImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{r.compressedTexSubImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{r.texStorage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{r.texStorage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{r.texImage2D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.texImage3D(...arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(F){Ye.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Ye.copy(F))}function Pe(F){We.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),We.copy(F))}function Ae(F,re){let ae=l.get(re);ae===void 0&&(ae=new WeakMap,l.set(re,ae));let ve=ae.get(F);ve===void 0&&(ve=r.getUniformBlockIndex(re,F.name),ae.set(F,ve))}function de(F,re){const ve=l.get(re).get(F);c.get(re)!==ve&&(r.uniformBlockBinding(re,ve,F.__bindingPointIndex),c.set(re,ve))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Q=null,oe={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,S=null,M=null,x=null,T=null,A=null,R=new Oe(0,0,0),P=0,y=!1,_=null,w=null,L=null,I=null,O=null,Ye.set(0,0,r.canvas.width,r.canvas.height),We.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ce,bindFramebuffer:Te,drawBuffers:xe,useProgram:ke,setBlending:pe,setMaterial:se,setFlipSided:ge,setCullFace:he,setLineWidth:qe,setPolygonOffset:be,setScissorTest:Fe,activeTexture:lt,bindTexture:at,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:we,texImage3D:ee,updateUBOMapping:Ae,uniformBlockBinding:de,texStorage2D:ne,texStorage3D:ye,texSubImage2D:U,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:$,scissor:ue,viewport:Pe,reset:He}}function D_(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new De,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return f?new OffscreenCanvas(C,v):Nr("canvas")}function b(C,v,H){let U=1;const G=at(C);if((G.width>H||G.height>H)&&(U=H/Math.max(G.width,G.height)),U<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const V=Math.floor(U*G.width),$=Math.floor(U*G.height);h===void 0&&(h=g(V,$));const ne=v?g(V,$):h;return ne.width=V,ne.height=$,ne.getContext("2d").drawImage(C,0,0,V,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+$+")."),ne}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(C,v,H,U,G=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let V=v;if(v===r.RED&&(H===r.FLOAT&&(V=r.R32F),H===r.HALF_FLOAT&&(V=r.R16F),H===r.UNSIGNED_BYTE&&(V=r.R8)),v===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&(V=r.R8UI),H===r.UNSIGNED_SHORT&&(V=r.R16UI),H===r.UNSIGNED_INT&&(V=r.R32UI),H===r.BYTE&&(V=r.R8I),H===r.SHORT&&(V=r.R16I),H===r.INT&&(V=r.R32I)),v===r.RG&&(H===r.FLOAT&&(V=r.RG32F),H===r.HALF_FLOAT&&(V=r.RG16F),H===r.UNSIGNED_BYTE&&(V=r.RG8)),v===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&(V=r.RG8UI),H===r.UNSIGNED_SHORT&&(V=r.RG16UI),H===r.UNSIGNED_INT&&(V=r.RG32UI),H===r.BYTE&&(V=r.RG8I),H===r.SHORT&&(V=r.RG16I),H===r.INT&&(V=r.RG32I)),v===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&(V=r.RGB8UI),H===r.UNSIGNED_SHORT&&(V=r.RGB16UI),H===r.UNSIGNED_INT&&(V=r.RGB32UI),H===r.BYTE&&(V=r.RGB8I),H===r.SHORT&&(V=r.RGB16I),H===r.INT&&(V=r.RGB32I)),v===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&(V=r.RGBA8UI),H===r.UNSIGNED_SHORT&&(V=r.RGBA16UI),H===r.UNSIGNED_INT&&(V=r.RGBA32UI),H===r.BYTE&&(V=r.RGBA8I),H===r.SHORT&&(V=r.RGBA16I),H===r.INT&&(V=r.RGBA32I)),v===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&(V=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&(V=r.R11F_G11F_B10F)),v===r.RGBA){const $=G?ws:Je.getTransfer(U);H===r.FLOAT&&(V=r.RGBA32F),H===r.HALF_FLOAT&&(V=r.RGBA16F),H===r.UNSIGNED_BYTE&&(V=$===it?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&(V=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&(V=r.RGB5_A1)}return(V===r.R16F||V===r.R32F||V===r.RG16F||V===r.RG32F||V===r.RGBA16F||V===r.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function x(C,v){let H;return C?v===null||v===gi||v===Cr?H=r.DEPTH24_STENCIL8:v===rn?H=r.DEPTH32F_STENCIL8:v===Rr&&(H=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===gi||v===Cr?H=r.DEPTH_COMPONENT24:v===rn?H=r.DEPTH_COMPONENT32F:v===Rr&&(H=r.DEPTH_COMPONENT16),H}function T(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ft&&C.minFilter!==jt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&u.delete(v)}function R(C){const v=C.target;v.removeEventListener("dispose",R),_(v)}function P(C){const v=n.get(C);if(v.__webglInit===void 0)return;const H=C.source,U=d.get(H);if(U){const G=U[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&y(C),Object.keys(U).length===0&&d.delete(H)}n.remove(C)}function y(C){const v=n.get(C);r.deleteTexture(v.__webglTexture);const H=C.source,U=d.get(H);delete U[v.__cacheKey],a.memory.textures--}function _(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(v.__webglFramebuffer[U]))for(let G=0;G<v.__webglFramebuffer[U].length;G++)r.deleteFramebuffer(v.__webglFramebuffer[U][G]);else r.deleteFramebuffer(v.__webglFramebuffer[U]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[U])}else{if(Array.isArray(v.__webglFramebuffer))for(let U=0;U<v.__webglFramebuffer.length;U++)r.deleteFramebuffer(v.__webglFramebuffer[U]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let U=0;U<v.__webglColorRenderbuffer.length;U++)v.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[U]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=C.textures;for(let U=0,G=H.length;U<G;U++){const V=n.get(H[U]);V.__webglTexture&&(r.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(H[U])}n.remove(C)}let w=0;function L(){w=0}function I(){const C=w;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),w+=1,C}function O(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function z(C,v){const H=n.get(C);if(C.isVideoTexture&&Fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){const U=C.image;if(U===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,C,v);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+v)}function X(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Y(H,C,v);return}t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+v)}function J(C,v){const H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Y(H,C,v);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+v)}function q(C,v){const H=n.get(C);if(C.version>0&&H.__version!==C.version){K(H,C,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+v)}const Q={[Yi]:r.REPEAT,[Yn]:r.CLAMP_TO_EDGE,[Ts]:r.MIRRORED_REPEAT},oe={[Ft]:r.NEAREST,[Ih]:r.NEAREST_MIPMAP_NEAREST,[vr]:r.NEAREST_MIPMAP_LINEAR,[jt]:r.LINEAR,[gs]:r.LINEAR_MIPMAP_NEAREST,[Pn]:r.LINEAR_MIPMAP_LINEAR},me={[_d]:r.NEVER,[Ed]:r.ALWAYS,[xd]:r.LESS,[Gh]:r.LEQUAL,[vd]:r.EQUAL,[Sd]:r.GEQUAL,[yd]:r.GREATER,[Md]:r.NOTEQUAL};function Ue(C,v){if(v.type===rn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===jt||v.magFilter===gs||v.magFilter===vr||v.magFilter===Pn||v.minFilter===jt||v.minFilter===gs||v.minFilter===vr||v.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,Q[v.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,Q[v.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,Q[v.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,oe[v.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,oe[v.minFilter]),v.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,me[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ft||v.minFilter!==vr&&v.minFilter!==Pn||v.type===rn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ye(C,v){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const U=v.source;let G=d.get(U);G===void 0&&(G={},d.set(U,G));const V=O(v);if(V!==C.__cacheKey){G[V]===void 0&&(G[V]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),G[V].usedTimes++;const $=G[C.__cacheKey];$!==void 0&&(G[C.__cacheKey].usedTimes--,$.usedTimes===0&&y(v)),C.__cacheKey=V,C.__webglTexture=G[V].texture}return H}function We(C,v,H){return Math.floor(Math.floor(C/H)/v)}function Ie(C,v,H,U){const V=C.updateRanges;if(V.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,H,U,v.data);else{V.sort((ee,ue)=>ee.start-ue.start);let $=0;for(let ee=1;ee<V.length;ee++){const ue=V[$],Pe=V[ee],Ae=ue.start+ue.count,de=We(Pe.start,v.width,4),He=We(ue.start,v.width,4);Pe.start<=Ae+1&&de===He&&We(Pe.start+Pe.count-1,v.width,4)===de?ue.count=Math.max(ue.count,Pe.start+Pe.count-ue.start):(++$,V[$]=Pe)}V.length=$+1;const ne=r.getParameter(r.UNPACK_ROW_LENGTH),ye=r.getParameter(r.UNPACK_SKIP_PIXELS),we=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let ee=0,ue=V.length;ee<ue;ee++){const Pe=V[ee],Ae=Math.floor(Pe.start/4),de=Math.ceil(Pe.count/4),He=Ae%v.width,F=Math.floor(Ae/v.width),re=de,ae=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,He,F,re,ae,H,U,v.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,we)}}function Y(C,v,H){let U=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(U=r.TEXTURE_3D);const G=Ye(C,v),V=v.source;t.bindTexture(U,C.__webglTexture,r.TEXTURE0+H);const $=n.get(V);if(V.version!==$.__version||G===!0){t.activeTexture(r.TEXTURE0+H);const ne=Je.getPrimaries(Je.workingColorSpace),ye=v.colorSpace===Xn?null:Je.getPrimaries(v.colorSpace),we=v.colorSpace===Xn||ne===ye?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=b(v.image,!1,i.maxTextureSize);ee=lt(v,ee);const ue=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type);let Ae=M(v.internalFormat,ue,Pe,v.colorSpace,v.isVideoTexture);Ue(U,v);let de;const He=v.mipmaps,F=v.isVideoTexture!==!0,re=$.__version===void 0||G===!0,ae=V.dataReady,ve=T(v,ee);if(v.isDepthTexture)Ae=x(v.format===Lr,v.type),re&&(F?t.texStorage2D(r.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ue,Pe,null));else if(v.isDataTexture)if(He.length>0){F&&re&&t.texStorage2D(r.TEXTURE_2D,ve,Ae,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)de=He[te],F?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(r.TEXTURE_2D,te,Ae,de.width,de.height,0,ue,Pe,de.data);v.generateMipmaps=!1}else F?(re&&t.texStorage2D(r.TEXTURE_2D,ve,Ae,ee.width,ee.height),ae&&Ie(v,ee,ue,Pe)):t.texImage2D(r.TEXTURE_2D,0,Ae,ee.width,ee.height,0,ue,Pe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){F&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Ae,He[0].width,He[0].height,ee.depth);for(let te=0,Z=He.length;te<Z;te++)if(de=He[te],v.format!==Zt)if(ue!==null)if(F){if(ae)if(v.layerUpdates.size>0){const Ee=Sl(de.width,de.height,v.format,v.type);for(const Be of v.layerUpdates){const ot=de.data.subarray(Be*Ee/de.data.BYTES_PER_ELEMENT,(Be+1)*Ee/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Be,de.width,de.height,1,ue,ot)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ue,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,ee.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?ae&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,de.width,de.height,ee.depth,ue,Pe,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ae,de.width,de.height,ee.depth,0,ue,Pe,de.data)}else{F&&re&&t.texStorage2D(r.TEXTURE_2D,ve,Ae,He[0].width,He[0].height);for(let te=0,Z=He.length;te<Z;te++)de=He[te],v.format!==Zt?ue!==null?F?ae&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ue,de.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,de.width,de.height,ue,Pe,de.data):t.texImage2D(r.TEXTURE_2D,te,Ae,de.width,de.height,0,ue,Pe,de.data)}else if(v.isDataArrayTexture)if(F){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Ae,ee.width,ee.height,ee.depth),ae)if(v.layerUpdates.size>0){const te=Sl(ee.width,ee.height,v.format,v.type);for(const Z of v.layerUpdates){const Ee=ee.data.subarray(Z*te/ee.data.BYTES_PER_ELEMENT,(Z+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,ue,Pe,Ee)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Pe,ee.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,ue,Pe,ee.data);else if(v.isData3DTexture)F?(re&&t.texStorage3D(r.TEXTURE_3D,ve,Ae,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Pe,ee.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,ue,Pe,ee.data);else if(v.isFramebufferTexture){if(re)if(F)t.texStorage2D(r.TEXTURE_2D,ve,Ae,ee.width,ee.height);else{let te=ee.width,Z=ee.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Ae,te,Z,0,ue,Pe,null),te>>=1,Z>>=1}}else if(He.length>0){if(F&&re){const te=at(He[0]);t.texStorage2D(r.TEXTURE_2D,ve,Ae,te.width,te.height)}for(let te=0,Z=He.length;te<Z;te++)de=He[te],F?ae&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue,Pe,de):t.texImage2D(r.TEXTURE_2D,te,Ae,ue,Pe,de);v.generateMipmaps=!1}else if(F){if(re){const te=at(ee);t.texStorage2D(r.TEXTURE_2D,ve,Ae,te.width,te.height)}ae&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Pe,ee)}else t.texImage2D(r.TEXTURE_2D,0,Ae,ue,Pe,ee);m(v)&&p(U),$.__version=V.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function K(C,v,H){if(v.image.length!==6)return;const U=Ye(C,v),G=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+H);const V=n.get(G);if(G.version!==V.__version||U===!0){t.activeTexture(r.TEXTURE0+H);const $=Je.getPrimaries(Je.workingColorSpace),ne=v.colorSpace===Xn?null:Je.getPrimaries(v.colorSpace),ye=v.colorSpace===Xn||$===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,ue=[];for(let Z=0;Z<6;Z++)!we&&!ee?ue[Z]=b(v.image[Z],!0,i.maxCubemapSize):ue[Z]=ee?v.image[Z].image:v.image[Z],ue[Z]=lt(v,ue[Z]);const Pe=ue[0],Ae=s.convert(v.format,v.colorSpace),de=s.convert(v.type),He=M(v.internalFormat,Ae,de,v.colorSpace),F=v.isVideoTexture!==!0,re=V.__version===void 0||U===!0,ae=G.dataReady;let ve=T(v,Pe);Ue(r.TEXTURE_CUBE_MAP,v);let te;if(we){F&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,He,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){te=ue[Z].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const Be=te[Ee];v.format!==Zt?Ae!==null?F?ae&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Be.width,Be.height,Ae,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,He,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,0,0,Be.width,Be.height,Ae,de,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee,He,Be.width,Be.height,0,Ae,de,Be.data)}}}else{if(te=v.mipmaps,F&&re){te.length>0&&ve++;const Z=at(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ue[Z].width,ue[Z].height,Ae,de,ue[Z].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,ue[Z].width,ue[Z].height,0,Ae,de,ue[Z].data);for(let Ee=0;Ee<te.length;Ee++){const ot=te[Ee].image[Z].image;F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,ot.width,ot.height,Ae,de,ot.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,He,ot.width,ot.height,0,Ae,de,ot.data)}}else{F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ae,de,ue[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Ae,de,ue[Z]);for(let Ee=0;Ee<te.length;Ee++){const Be=te[Ee];F?ae&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,0,0,Ae,de,Be.image[Z]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ee+1,He,Ae,de,Be.image[Z])}}}m(v)&&p(r.TEXTURE_CUBE_MAP),V.__version=G.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ce(C,v,H,U,G,V){const $=s.convert(H.format,H.colorSpace),ne=s.convert(H.type),ye=M(H.internalFormat,$,ne,H.colorSpace),we=n.get(v),ee=n.get(H);if(ee.__renderTarget=v,!we.__hasExternalTextures){const ue=Math.max(1,v.width>>V),Pe=Math.max(1,v.height>>V);G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?t.texImage3D(G,V,ye,ue,Pe,v.depth,0,$,ne,null):t.texImage2D(G,V,ye,ue,Pe,0,$,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,G,ee.__webglTexture,0,qe(v)):(G===r.TEXTURE_2D||G>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,G,ee.__webglTexture,V),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(C,v,H){if(r.bindRenderbuffer(r.RENDERBUFFER,C),v.depthBuffer){const U=v.depthTexture,G=U&&U.isDepthTexture?U.type:null,V=x(v.stencilBuffer,G),$=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=qe(v);be(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ne,V,v.width,v.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,ne,V,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,V,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,C)}else{const U=v.textures;for(let G=0;G<U.length;G++){const V=U[G],$=s.convert(V.format,V.colorSpace),ne=s.convert(V.type),ye=M(V.internalFormat,$,ne,V.colorSpace),we=qe(v);H&&be(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,ye,v.width,v.height):be(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,ye,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ye,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xe(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const U=n.get(v.depthTexture);U.__renderTarget=v,(!U.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),z(v.depthTexture,0);const G=U.__webglTexture,V=qe(v);if(v.depthTexture.format===Pr)be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,G,0);else if(v.depthTexture.format===Lr)be(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0,V):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function ke(C){const v=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const U=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),U){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,U.removeEventListener("dispose",G)};U.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=U}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const U=C.texture.mipmaps;U&&U.length>0?xe(v.__webglFramebuffer[0],C):xe(v.__webglFramebuffer,C)}else if(H){v.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[U]),v.__webglDepthbuffer[U]===void 0)v.__webglDepthbuffer[U]=r.createRenderbuffer(),Te(v.__webglDepthbuffer[U],C,!1);else{const G=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,G,r.RENDERBUFFER,V)}}else{const U=C.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Te(v.__webglDepthbuffer,C,!1);else{const G=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,V=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,V),r.framebufferRenderbuffer(r.FRAMEBUFFER,G,r.RENDERBUFFER,V)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function gt(C,v,H){const U=n.get(C);v!==void 0&&ce(U.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&ke(C)}function D(C){const v=C.texture,H=n.get(C),U=n.get(v);C.addEventListener("dispose",R);const G=C.textures,V=C.isWebGLCubeRenderTarget===!0,$=G.length>1;if($||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=v.version,a.memory.textures++),V){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let ye=0;ye<v.mipmaps.length;ye++)H.__webglFramebuffer[ne][ye]=r.createFramebuffer()}else H.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)H.__webglFramebuffer[ne]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if($)for(let ne=0,ye=G.length;ne<ye;ne++){const we=n.get(G[ne]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&be(C)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<G.length;ne++){const ye=G[ne];H.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);const we=s.convert(ye.format,ye.colorSpace),ee=s.convert(ye.type),ue=M(ye.internalFormat,we,ee,ye.colorSpace,C.isXRRenderTarget===!0),Pe=qe(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,ue,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(V){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),Ue(r.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ce(H.__webglFramebuffer[ne][ye],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ye);else ce(H.__webglFramebuffer[ne],C,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);m(v)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let ne=0,ye=G.length;ne<ye;ne++){const we=G[ne],ee=n.get(we);let ue=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),Ue(ue,we),ce(H.__webglFramebuffer,C,we,r.COLOR_ATTACHMENT0+ne,ue,0),m(we)&&p(ue)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,U.__webglTexture),Ue(ne,v),v.mipmaps&&v.mipmaps.length>0)for(let ye=0;ye<v.mipmaps.length;ye++)ce(H.__webglFramebuffer[ye],C,v,r.COLOR_ATTACHMENT0,ne,ye);else ce(H.__webglFramebuffer,C,v,r.COLOR_ATTACHMENT0,ne,0);m(v)&&p(ne),t.unbindTexture()}C.depthBuffer&&ke(C)}function pe(C){const v=C.textures;for(let H=0,U=v.length;H<U;H++){const G=v[H];if(m(G)){const V=S(C),$=n.get(G).__webglTexture;t.bindTexture(V,$),p(V),t.unbindTexture()}}}const se=[],ge=[];function he(C){if(C.samples>0){if(be(C)===!1){const v=C.textures,H=C.width,U=C.height;let G=r.COLOR_BUFFER_BIT;const V=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=n.get(C),ne=v.length>1;if(ne)for(let we=0;we<v.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,$.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const ye=C.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let we=0;we<v.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(G|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(G|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const ee=n.get(v[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ee,0)}r.blitFramebuffer(0,0,H,U,0,0,H,U,G,r.NEAREST),c===!0&&(se.length=0,ge.length=0,se.push(r.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(V),ge.push(V),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ge)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let we=0;we<v.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,$.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const ee=n.get(v[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,$.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const v=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function qe(C){return Math.min(i.maxSamples,C.samples)}function be(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Fe(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function lt(C,v){const H=C.colorSpace,U=C.format,G=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Ot&&H!==Xn&&(Je.getTransfer(H)===it?(U!==Zt||G!==gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function at(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=L,this.setTexture2D=z,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=q,this.rebindTextures=gt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=he,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=be}function I_(r,e){function t(n,i=Xn){let s;const a=Je.getTransfer(i);if(n===gn)return r.UNSIGNED_BYTE;if(n===Yo)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ko)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Nh)return r.BYTE;if(n===Uh)return r.SHORT;if(n===Rr)return r.UNSIGNED_SHORT;if(n===Xo)return r.INT;if(n===gi)return r.UNSIGNED_INT;if(n===rn)return r.FLOAT;if(n===Fr)return r.HALF_FLOAT;if(n===kh)return r.ALPHA;if(n===Bh)return r.RGB;if(n===Zt)return r.RGBA;if(n===Pr)return r.DEPTH_COMPONENT;if(n===Lr)return r.DEPTH_STENCIL;if(n===Jo)return r.RED;if(n===Zo)return r.RED_INTEGER;if(n===Hh)return r.RG;if(n===$o)return r.RG_INTEGER;if(n===Qo)return r.RGBA_INTEGER;if(n===bs||n===_s||n===xs||n===vs)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===ao||n===oo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ro)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===lo||n===ho)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===co||n===lo)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ho)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===bo||n===_o||n===xo||n===vo||n===yo||n===Mo||n===So||n===Eo||n===To)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===uo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===To)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===Ao||n===Ro)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ao)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Co||n===Po||n===Lo||n===Do)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Do)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const N_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class F_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new nu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:N_,fragmentShader:U_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mt(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends _i{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const b=typeof XRWebGLBinding<"u",m=new F_,p={},S=t.getContextAttributes();let M=null,x=null;const T=[],A=[],R=new De;let P=null;const y=new Lt;y.viewport=new $e;const _=new Lt;_.viewport=new $e;const w=[y,_],L=new Xf;let I=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let K=T[Y];return K===void 0&&(K=new sa,T[Y]=K),K.getTargetRaySpace()},this.getControllerGrip=function(Y){let K=T[Y];return K===void 0&&(K=new sa,T[Y]=K),K.getGripSpace()},this.getHand=function(Y){let K=T[Y];return K===void 0&&(K=new sa,T[Y]=K),K.getHandSpace()};function z(Y){const K=A.indexOf(Y.inputSource);if(K===-1)return;const ce=T[K];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,l||a),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let Y=0;Y<T.length;Y++){const K=A[Y];K!==null&&(A[Y]=null,T[Y].disconnect(K))}I=null,O=null,m.reset();for(const Y in p)delete p[Y];e.setRenderTarget(M),f=null,d=null,h=null,i=null,x=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Te=null,xe=null;S.depth&&(xe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Lr:Pr,Te=S.stencil?Cr:gi);const ke={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new bi(d.textureWidth,d.textureHeight,{format:Zt,type:gn,depthTexture:new tu(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,ce),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new bi(f.framebufferWidth,f.framebufferHeight,{format:Zt,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ie.setContext(i),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(Y){for(let K=0;K<Y.removed.length;K++){const ce=Y.removed[K],Te=A.indexOf(ce);Te>=0&&(A[Te]=null,T[Te].disconnect(ce))}for(let K=0;K<Y.added.length;K++){const ce=Y.added[K];let Te=A.indexOf(ce);if(Te===-1){for(let ke=0;ke<T.length;ke++)if(ke>=A.length){A.push(ce),Te=ke;break}else if(A[ke]===null){A[ke]=ce,Te=ke;break}if(Te===-1)break}const xe=T[Te];xe&&xe.connect(ce)}}const q=new N,Q=new N;function oe(Y,K,ce){q.setFromMatrixPosition(K.matrixWorld),Q.setFromMatrixPosition(ce.matrixWorld);const Te=q.distanceTo(Q),xe=K.projectionMatrix.elements,ke=ce.projectionMatrix.elements,gt=xe[14]/(xe[10]-1),D=xe[14]/(xe[10]+1),pe=(xe[9]+1)/xe[5],se=(xe[9]-1)/xe[5],ge=(xe[8]-1)/xe[0],he=(ke[8]+1)/ke[0],qe=gt*ge,be=gt*he,Fe=Te/(-ge+he),lt=Fe*-ge;if(K.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(lt),Y.translateZ(Fe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),xe[10]===-1)Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const at=gt+Fe,C=D+Fe,v=qe-lt,H=be+(Te-lt),U=pe*D/C*at,G=se*D/C*at;Y.projectionMatrix.makePerspective(v,H,U,G,at,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function me(Y,K){K===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(K.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let K=Y.near,ce=Y.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),L.near=_.near=y.near=K,L.far=_.far=y.far=ce,(I!==L.near||O!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),I=L.near,O=L.far),L.layers.mask=Y.layers.mask|6,y.layers.mask=L.layers.mask&3,_.layers.mask=L.layers.mask&5;const Te=Y.parent,xe=L.cameras;me(L,Te);for(let ke=0;ke<xe.length;ke++)me(xe[ke],Te);xe.length===2?oe(L,y,_):L.projectionMatrix.copy(y.projectionMatrix),Ue(Y,L,Te)};function Ue(Y,K,ce){ce===null?Y.matrix.copy(K.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(K.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(K.projectionMatrix),Y.projectionMatrixInverse.copy(K.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ki*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(Y){return p[Y]};let Ye=null;function We(Y,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const ce=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let Te=!1;ce.length!==L.cameras.length&&(L.cameras.length=0,Te=!0);for(let D=0;D<ce.length;D++){const pe=ce[D];let se=null;if(f!==null)se=f.getViewport(pe);else{const he=h.getViewSubImage(d,pe);se=he.viewport,D===0&&(e.setRenderTargetTextures(x,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(x))}let ge=w[D];ge===void 0&&(ge=new Lt,ge.layers.enable(D),ge.viewport=new $e,w[D]=ge),ge.matrix.fromArray(pe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(pe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(se.x,se.y,se.width,se.height),D===0&&(L.matrix.copy(ge.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Te===!0&&L.cameras.push(ge)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const D=h.getDepthInformation(ce[0]);D&&D.isValid&&D.texture&&m.init(D,i.renderState)}if(xe&&xe.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let D=0;D<ce.length;D++){const pe=ce[D].camera;if(pe){let se=p[pe];se||(se=new nu,p[pe]=se);const ge=h.getCameraImage(pe);se.sourceTexture=ge}}}}for(let ce=0;ce<T.length;ce++){const Te=A[ce],xe=T[ce];Te!==null&&xe!==void 0&&xe.update(Te,K,l||a)}Ye&&Ye(Y,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ie=new ou;Ie.setAnimationLoop(We),this.setAnimationLoop=function(Y){Ye=Y},this.dispose=function(){}}}const ci=new on,k_=new Ge;function B_(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Yh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,S,M,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),M=S.envMap,x=S.envMapRotation;M&&(m.envMap.value=M,ci.copy(x),ci.x*=-1,ci.y*=-1,ci.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),m.envMapRotation.value.setFromMatrix4(k_.makeRotationFromEuler(ci)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function H_(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const x=M.program;n.uniformBlockBinding(S,x)}function l(S,M){let x=i[S.id];x===void 0&&(g(S),x=u(S),i[S.id]=x,S.addEventListener("dispose",m));const T=M.program;n.updateUBOMapping(S,T);const A=e.render.frame;s[S.id]!==A&&(d(S),s[S.id]=A)}function u(S){const M=h();S.__bindingPointIndex=M;const x=r.createBuffer(),T=S.__size,A=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,T,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,x),x}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=i[S.id],x=S.uniforms,T=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let A=0,R=x.length;A<R;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let y=0,_=P.length;y<_;y++){const w=P[y];if(f(w,A,y,T)===!0){const L=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let O=0;for(let z=0;z<I.length;z++){const X=I[z],J=b(X);typeof X=="number"||typeof X=="boolean"?(w.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,L+O,w.__data)):X.isMatrix3?(w.__data[0]=X.elements[0],w.__data[1]=X.elements[1],w.__data[2]=X.elements[2],w.__data[3]=0,w.__data[4]=X.elements[3],w.__data[5]=X.elements[4],w.__data[6]=X.elements[5],w.__data[7]=0,w.__data[8]=X.elements[6],w.__data[9]=X.elements[7],w.__data[10]=X.elements[8],w.__data[11]=0):(X.toArray(w.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(S,M,x,T){const A=S.value,R=M+"_"+x;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const P=T[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(S){const M=S.uniforms;let x=0;const T=16;for(let R=0,P=M.length;R<P;R++){const y=Array.isArray(M[R])?M[R]:[M[R]];for(let _=0,w=y.length;_<w;_++){const L=y[_],I=Array.isArray(L.value)?L.value:[L.value];for(let O=0,z=I.length;O<z;O++){const X=I[O],J=b(X),q=x%T,Q=q%J.boundary,oe=q+Q;x+=Q,oe!==0&&T-oe<J.storage&&(x+=T-oe),L.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=x,x+=J.storage}}}const A=x%T;return A>0&&(x+=T-A),S.__size=x,S.__cache={},this}function b(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){const M=S.target;M.removeEventListener("dispose",m);const x=a.indexOf(M.__bindingPointIndex);a.splice(x,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class z_{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const S=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$n,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=wt;let A=0,R=0,P=null,y=-1,_=null;const w=new $e,L=new $e;let I=null;const O=new Oe(0);let z=0,X=t.width,J=t.height,q=1,Q=null,oe=null;const me=new $e(0,0,X,J),Ue=new $e(0,0,X,J);let Ye=!1;const We=new ac;let Ie=!1,Y=!1;const K=new Ge,ce=new N,Te=new $e,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function gt(){return P===null?q:1}let D=n;function pe(E,k){return t.getContext(E,k)}try{const E={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${jo}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),D===null){const k="webgl2";if(D=pe(k,E),D===null)throw pe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,ge,he,qe,be,Fe,lt,at,C,v,H,U,G,V,$,ne,ye,we,ee,ue,Pe,Ae,de,He;function F(){se=new Zg(D),se.init(),Ae=new I_(D,se),ge=new Wg(D,se,e,Ae),he=new L_(D,se),ge.reversedDepthBuffer&&d&&he.buffers.depth.setReversed(!0),qe=new eb(D),be=new __,Fe=new D_(D,se,he,be,ge,Ae,qe),lt=new qg(x),at=new Jg(x),C=new ap(D),de=new Gg(D,C),v=new $g(D,C,qe,de),H=new nb(D,v,C,qe),ee=new tb(D,ge,Fe),ne=new jg(be),U=new b_(x,lt,at,se,ge,de,ne),G=new B_(x,be),V=new v_,$=new w_(se),we=new zg(x,lt,at,he,H,f,c),ye=new C_(x,H,ge),He=new H_(D,qe,ge,he),ue=new Vg(D,se,qe),Pe=new Qg(D,se,qe),qe.programs=U.programs,x.capabilities=ge,x.extensions=se,x.properties=be,x.renderLists=V,x.shadowMap=ye,x.state=he,x.info=qe}F();const re=new O_(x,D);this.xr=re,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(E){E!==void 0&&(q=E,this.setSize(X,J,!1))},this.getSize=function(E){return E.set(X,J)},this.setSize=function(E,k,W=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,J=k,t.width=Math.floor(E*q),t.height=Math.floor(k*q),W===!0&&(t.style.width=E+"px",t.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(X*q,J*q).floor()},this.setDrawingBufferSize=function(E,k,W){X=E,J=k,q=W,t.width=Math.floor(E*W),t.height=Math.floor(k*W),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(me)},this.setViewport=function(E,k,W,j){E.isVector4?me.set(E.x,E.y,E.z,E.w):me.set(E,k,W,j),he.viewport(w.copy(me).multiplyScalar(q).round())},this.getScissor=function(E){return E.copy(Ue)},this.setScissor=function(E,k,W,j){E.isVector4?Ue.set(E.x,E.y,E.z,E.w):Ue.set(E,k,W,j),he.scissor(L.copy(Ue).multiplyScalar(q).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(E){he.setScissorTest(Ye=E)},this.setOpaqueSort=function(E){Q=E},this.setTransparentSort=function(E){oe=E},this.getClearColor=function(E){return E.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,W=!0){let j=0;if(E){let B=!1;if(P!==null){const ie=P.texture.format;B=ie===Qo||ie===$o||ie===Zo}if(B){const ie=P.texture.type,fe=ie===gn||ie===gi||ie===Rr||ie===Cr||ie===Yo||ie===Ko,Se=we.getClearColor(),_e=we.getClearAlpha(),Le=Se.r,Ne=Se.g,Re=Se.b;fe?(g[0]=Le,g[1]=Ne,g[2]=Re,g[3]=_e,D.clearBufferuiv(D.COLOR,0,g)):(b[0]=Le,b[1]=Ne,b[2]=Re,b[3]=_e,D.clearBufferiv(D.COLOR,0,b))}else j|=D.COLOR_BUFFER_BIT}k&&(j|=D.DEPTH_BUFFER_BIT),W&&(j|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),we.dispose(),V.dispose(),$.dispose(),be.dispose(),lt.dispose(),at.dispose(),H.dispose(),de.dispose(),He.dispose(),U.dispose(),re.dispose(),re.removeEventListener("sessionstart",ln),re.removeEventListener("sessionend",vc),ti.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=qe.autoReset,k=ye.enabled,W=ye.autoUpdate,j=ye.needsUpdate,B=ye.type;F(),qe.autoReset=E,ye.enabled=k,ye.autoUpdate=W,ye.needsUpdate=j,ye.type=B}function te(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Z(E){const k=E.target;k.removeEventListener("dispose",Z),Ee(k)}function Ee(E){Be(E),be.remove(E)}function Be(E){const k=be.get(E).programs;k!==void 0&&(k.forEach(function(W){U.releaseProgram(W)}),E.isShaderMaterial&&U.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,W,j,B,ie){k===null&&(k=xe);const fe=B.isMesh&&B.matrixWorld.determinant()<0,Se=Au(E,k,W,j,B);he.setMaterial(j,fe);let _e=W.index,Le=1;if(j.wireframe===!0){if(_e=v.getWireframeAttribute(W),_e===void 0)return;Le=2}const Ne=W.drawRange,Re=W.attributes.position;let Ke=Ne.start*Le,nt=(Ne.start+Ne.count)*Le;ie!==null&&(Ke=Math.max(Ke,ie.start*Le),nt=Math.min(nt,(ie.start+ie.count)*Le)),_e!==null?(Ke=Math.max(Ke,0),nt=Math.min(nt,_e.count)):Re!=null&&(Ke=Math.max(Ke,0),nt=Math.min(nt,Re.count));const bt=nt-Ke;if(bt<0||bt===1/0)return;de.setup(B,j,Se,W,_e);let ht,st=ue;if(_e!==null&&(ht=C.get(_e),st=Pe,st.setIndex(ht)),B.isMesh)j.wireframe===!0?(he.setLineWidth(j.wireframeLinewidth*gt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(B.isLine){let Ce=j.linewidth;Ce===void 0&&(Ce=1),he.setLineWidth(Ce*gt()),B.isLineSegments?st.setMode(D.LINES):B.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else B.isPoints?st.setMode(D.POINTS):B.isSprite&&st.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,dt=B._multiDrawCounts,Ze=B._multiDrawCount,Ht=_e?C.get(_e).bytesPerElement:1,yi=be.get(j).currentProgram.getUniforms();for(let zt=0;zt<Ze;zt++)yi.setValue(D,"_gl_DrawID",zt),st.render(Ce[zt]/Ht,dt[zt])}else if(B.isInstancedMesh)st.renderInstances(Ke,bt,B.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,dt=Math.min(W.instanceCount,Ce);st.renderInstances(Ke,bt,dt)}else st.render(Ke,bt)};function ot(E,k,W){E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=Ut,E.needsUpdate=!0,Hr(E,k,W),E.side=Fn,E.needsUpdate=!0,Hr(E,k,W),E.side=pn):Hr(E,k,W)}this.compile=function(E,k,W=null){W===null&&(W=E),p=$.get(W),p.init(k),M.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const j=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ie=B.material;if(ie)if(Array.isArray(ie))for(let fe=0;fe<ie.length;fe++){const Se=ie[fe];ot(Se,W,B),j.add(Se)}else ot(ie,W,B),j.add(ie)}),p=M.pop(),j},this.compileAsync=function(E,k,W=null){const j=this.compile(E,k,W);return new Promise(B=>{function ie(){if(j.forEach(function(fe){be.get(fe).currentProgram.isReady()&&j.delete(fe)}),j.size===0){B(E);return}setTimeout(ie,10)}se.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let Qe=null;function yn(E){Qe&&Qe(E)}function ln(){ti.stop()}function vc(){ti.start()}const ti=new ou;ti.setAnimationLoop(yn),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(E){Qe=E,re.setAnimationLoop(E),E===null?ti.stop():ti.start()},re.addEventListener("sessionstart",ln),re.addEventListener("sessionend",vc),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(k),k=re.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,k,P),p=$.get(E,M.length),p.init(k),M.push(p),K.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),We.setFromProjectionMatrix(K,mn,k.reversedDepth),Y=this.localClippingEnabled,Ie=ne.init(this.clippingPlanes,Y),m=V.get(E,S.length),m.init(),S.push(m),re.enabled===!0&&re.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&Fs(ie,k,-1/0,x.sortObjects)}Fs(E,k,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Q,oe),ke=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ke&&we.addToRenderList(m,E),this.info.render.frame++,Ie===!0&&ne.beginShadows();const W=p.state.shadowsArray;ye.render(W,E,k),Ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ie=k.cameras;if(B.length>0)for(let fe=0,Se=ie.length;fe<Se;fe++){const _e=ie[fe];Mc(j,B,E,_e)}ke&&we.render(E);for(let fe=0,Se=ie.length;fe<Se;fe++){const _e=ie[fe];yc(m,E,_e,_e.viewport)}}else B.length>0&&Mc(j,B,E,k),ke&&we.render(E),yc(m,E,k);P!==null&&R===0&&(Fe.updateMultisampleRenderTarget(P),Fe.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(x,E,k),de.resetDefaultState(),y=-1,_=null,M.pop(),M.length>0?(p=M[M.length-1],Ie===!0&&ne.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Fs(E,k,W,j){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||We.intersectsSprite(E)){j&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(K);const fe=H.update(E),Se=E.material;Se.visible&&m.push(E,fe,Se,W,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||We.intersectsObject(E))){const fe=H.update(E),Se=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Te.copy(fe.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const _e=fe.groups;for(let Le=0,Ne=_e.length;Le<Ne;Le++){const Re=_e[Le],Ke=Se[Re.materialIndex];Ke&&Ke.visible&&m.push(E,fe,Ke,W,Te.z,Re)}}else Se.visible&&m.push(E,fe,Se,W,Te.z,null)}}const ie=E.children;for(let fe=0,Se=ie.length;fe<Se;fe++)Fs(ie[fe],k,W,j)}function yc(E,k,W,j){const B=E.opaque,ie=E.transmissive,fe=E.transparent;p.setupLightsView(W),Ie===!0&&ne.setGlobalState(x.clippingPlanes,W),j&&he.viewport(w.copy(j)),B.length>0&&Br(B,k,W),ie.length>0&&Br(ie,k,W),fe.length>0&&Br(fe,k,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Mc(E,k,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new bi(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Fr:gn,minFilter:Pn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ie=p.state.transmissionRenderTarget[j.id],fe=j.viewport||w;ie.setSize(fe.z*x.transmissionResolutionScale,fe.w*x.transmissionResolutionScale);const Se=x.getRenderTarget(),_e=x.getActiveCubeFace(),Le=x.getActiveMipmapLevel();x.setRenderTarget(ie),x.getClearColor(O),z=x.getClearAlpha(),z<1&&x.setClearColor(16777215,.5),x.clear(),ke&&we.render(W);const Ne=x.toneMapping;x.toneMapping=$n;const Re=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),Ie===!0&&ne.setGlobalState(x.clippingPlanes,j),Br(E,W,j),Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let nt=0,bt=k.length;nt<bt;nt++){const ht=k[nt],st=ht.object,Ce=ht.geometry,dt=ht.material,Ze=ht.group;if(dt.side===pn&&st.layers.test(j.layers)){const Ht=dt.side;dt.side=Ut,dt.needsUpdate=!0,Sc(st,W,j,Ce,dt,Ze),dt.side=Ht,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Fe.updateMultisampleRenderTarget(ie),Fe.updateRenderTargetMipmap(ie))}x.setRenderTarget(Se,_e,Le),x.setClearColor(O,z),Re!==void 0&&(j.viewport=Re),x.toneMapping=Ne}function Br(E,k,W){const j=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ie=E.length;B<ie;B++){const fe=E[B],Se=fe.object,_e=fe.geometry,Le=fe.group;let Ne=fe.material;Ne.allowOverride===!0&&j!==null&&(Ne=j),Se.layers.test(W.layers)&&Sc(Se,k,W,_e,Ne,Le)}}function Sc(E,k,W,j,B,ie){E.onBeforeRender(x,k,W,j,B,ie),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,k,W,j,E,ie),B.transparent===!0&&B.side===pn&&B.forceSinglePass===!1?(B.side=Ut,B.needsUpdate=!0,x.renderBufferDirect(W,k,j,B,E,ie),B.side=Fn,B.needsUpdate=!0,x.renderBufferDirect(W,k,j,B,E,ie),B.side=pn):x.renderBufferDirect(W,k,j,B,E,ie),E.onAfterRender(x,k,W,j,B,ie)}function Hr(E,k,W){k.isScene!==!0&&(k=xe);const j=be.get(E),B=p.state.lights,ie=p.state.shadowsArray,fe=B.state.version,Se=U.getParameters(E,B.state,ie,k,W),_e=U.getProgramCacheKey(Se);let Le=j.programs;j.environment=E.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(E.isMeshStandardMaterial?at:lt).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",Z),Le=new Map,j.programs=Le);let Ne=Le.get(_e);if(Ne!==void 0){if(j.currentProgram===Ne&&j.lightsStateVersion===fe)return Tc(E,Se),Ne}else Se.uniforms=U.getUniforms(E),E.onBeforeCompile(Se,x),Ne=U.acquireProgram(Se,_e),Le.set(_e,Ne),j.uniforms=Se.uniforms;const Re=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Re.clippingPlanes=ne.uniform),Tc(E,Se),j.needsLights=Cu(E),j.lightsStateVersion=fe,j.needsLights&&(Re.ambientLightColor.value=B.state.ambient,Re.lightProbe.value=B.state.probe,Re.directionalLights.value=B.state.directional,Re.directionalLightShadows.value=B.state.directionalShadow,Re.spotLights.value=B.state.spot,Re.spotLightShadows.value=B.state.spotShadow,Re.rectAreaLights.value=B.state.rectArea,Re.ltc_1.value=B.state.rectAreaLTC1,Re.ltc_2.value=B.state.rectAreaLTC2,Re.pointLights.value=B.state.point,Re.pointLightShadows.value=B.state.pointShadow,Re.hemisphereLights.value=B.state.hemi,Re.directionalShadowMap.value=B.state.directionalShadowMap,Re.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Re.spotShadowMap.value=B.state.spotShadowMap,Re.spotLightMatrix.value=B.state.spotLightMatrix,Re.spotLightMap.value=B.state.spotLightMap,Re.pointShadowMap.value=B.state.pointShadowMap,Re.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Ne,j.uniformsList=null,Ne}function Ec(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=ys.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function Tc(E,k){const W=be.get(E);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Au(E,k,W,j,B){k.isScene!==!0&&(k=xe),Fe.resetTextureUnits();const ie=k.fog,fe=j.isMeshStandardMaterial?k.environment:null,Se=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ot,_e=(j.isMeshStandardMaterial?at:lt).get(j.envMap||fe),Le=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Re=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,nt=!!W.morphAttributes.color;let bt=$n;j.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(bt=x.toneMapping);const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,st=ht!==void 0?ht.length:0,Ce=be.get(j),dt=p.state.lights;if(Ie===!0&&(Y===!0||E!==_)){const Dt=E===_&&j.id===y;ne.setState(j,E,Dt)}let Ze=!1;j.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==dt.state.version||Ce.outputColorSpace!==Se||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==_e||j.fog===!0&&Ce.fog!==ie||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ne.numPlanes||Ce.numIntersection!==ne.numIntersection)||Ce.vertexAlphas!==Le||Ce.vertexTangents!==Ne||Ce.morphTargets!==Re||Ce.morphNormals!==Ke||Ce.morphColors!==nt||Ce.toneMapping!==bt||Ce.morphTargetsCount!==st)&&(Ze=!0):(Ze=!0,Ce.__version=j.version);let Ht=Ce.currentProgram;Ze===!0&&(Ht=Hr(j,k,B));let yi=!1,zt=!1,cr=!1;const ft=Ht.getUniforms(),Xt=Ce.uniforms;if(he.useProgram(Ht.program)&&(yi=!0,zt=!0,cr=!0),j.id!==y&&(y=j.id,zt=!0),yi||_!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ft.setValue(D,"projectionMatrix",E.projectionMatrix),ft.setValue(D,"viewMatrix",E.matrixWorldInverse);const kt=ft.map.cameraPosition;kt!==void 0&&kt.setValue(D,ce.setFromMatrixPosition(E.matrixWorld)),ge.logarithmicDepthBuffer&&ft.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,zt=!0,cr=!0)}if(B.isSkinnedMesh){ft.setOptional(D,B,"bindMatrix"),ft.setOptional(D,B,"bindMatrixInverse");const Dt=B.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),ft.setValue(D,"boneTexture",Dt.boneTexture,Fe))}B.isBatchedMesh&&(ft.setOptional(D,B,"batchingTexture"),ft.setValue(D,"batchingTexture",B._matricesTexture,Fe),ft.setOptional(D,B,"batchingIdTexture"),ft.setValue(D,"batchingIdTexture",B._indirectTexture,Fe),ft.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&ft.setValue(D,"batchingColorTexture",B._colorsTexture,Fe));const Yt=W.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&ee.update(B,W,Ht),(zt||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ft.setValue(D,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Xt.envMap.value=_e,Xt.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Xt.envMapIntensity.value=k.environmentIntensity),zt&&(ft.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ce.needsLights&&Ru(Xt,cr),ie&&j.fog===!0&&G.refreshFogUniforms(Xt,ie),G.refreshMaterialUniforms(Xt,j,q,J,p.state.transmissionRenderTarget[E.id]),ys.upload(D,Ec(Ce),Xt,Fe)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ys.upload(D,Ec(Ce),Xt,Fe),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(D,"center",B.center),ft.setValue(D,"modelViewMatrix",B.modelViewMatrix),ft.setValue(D,"normalMatrix",B.normalMatrix),ft.setValue(D,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Dt=j.uniformsGroups;for(let kt=0,Os=Dt.length;kt<Os;kt++){const ni=Dt[kt];He.update(ni,Ht),He.bind(ni,Ht)}}return Ht}function Ru(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,k,W){const j=be.get(E);j.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),be.get(E.texture).__webglTexture=k,be.get(E.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:W,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const W=be.get(E);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const Pu=D.createFramebuffer();this.setRenderTarget=function(E,k=0,W=0){P=E,A=k,R=W;let j=!0,B=null,ie=!1,fe=!1;if(E){const _e=be.get(E);if(_e.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(D.FRAMEBUFFER,null),j=!1;else if(_e.__webglFramebuffer===void 0)Fe.setupRenderTarget(E);else if(_e.__hasExternalTextures)Fe.rebindTextures(E,be.get(E.texture).__webglTexture,be.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Re=E.depthTexture;if(_e.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(E.width!==Re.image.width||E.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Fe.setupDepthRenderbuffer(E)}}const Le=E.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(fe=!0);const Ne=be.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?B=Ne[k][W]:B=Ne[k],ie=!0):E.samples>0&&Fe.useMultisampledRTT(E)===!1?B=be.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[W]:B=Ne,w.copy(E.viewport),L.copy(E.scissor),I=E.scissorTest}else w.copy(me).multiplyScalar(q).floor(),L.copy(Ue).multiplyScalar(q).floor(),I=Ye;if(W!==0&&(B=Pu),he.bindFramebuffer(D.FRAMEBUFFER,B)&&j&&he.drawBuffers(E,B),he.viewport(w),he.scissor(L),he.setScissorTest(I),ie){const _e=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,W)}else if(fe){const _e=k;for(let Le=0;Le<E.textures.length;Le++){const Ne=be.get(E.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Ne.__webglTexture,W,_e)}}else if(E!==null&&W!==0){const _e=be.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,W)}y=-1},this.readRenderTargetPixels=function(E,k,W,j,B,ie,fe,Se=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e){he.bindFramebuffer(D.FRAMEBUFFER,_e);try{const Le=E.textures[Se],Ne=Le.format,Re=Le.type;if(!ge.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-j&&W>=0&&W<=E.height-B&&(E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(k,W,j,B,Ae.convert(Ne),Ae.convert(Re),ie))}finally{const Le=P!==null?be.get(P).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,k,W,j,B,ie,fe,Se=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(_e=_e[fe]),_e)if(k>=0&&k<=E.width-j&&W>=0&&W<=E.height-B){he.bindFramebuffer(D.FRAMEBUFFER,_e);const Le=E.textures[Se],Ne=Le.format,Re=Le.type;if(!ge.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.bufferData(D.PIXEL_PACK_BUFFER,ie.byteLength,D.STREAM_READ),E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Se),D.readPixels(k,W,j,B,Ae.convert(Ne),Ae.convert(Re),0);const nt=P!==null?be.get(P).__webglFramebuffer:null;he.bindFramebuffer(D.FRAMEBUFFER,nt);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Gd(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ke),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ie),D.deleteBuffer(Ke),D.deleteSync(bt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,W=0){const j=Math.pow(2,-W),B=Math.floor(E.image.width*j),ie=Math.floor(E.image.height*j),fe=k!==null?k.x:0,Se=k!==null?k.y:0;Fe.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,fe,Se,B,ie),he.unbindTexture()};const Lu=D.createFramebuffer(),Du=D.createFramebuffer();this.copyTextureToTexture=function(E,k,W=null,j=null,B=0,ie=null){ie===null&&(B!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=B,B=0):ie=0);let fe,Se,_e,Le,Ne,Re,Ke,nt,bt;const ht=E.isCompressedTexture?E.mipmaps[ie]:E.image;if(W!==null)fe=W.max.x-W.min.x,Se=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Le=W.min.x,Ne=W.min.y,Re=W.isBox3?W.min.z:0;else{const Yt=Math.pow(2,-B);fe=Math.floor(ht.width*Yt),Se=Math.floor(ht.height*Yt),E.isDataArrayTexture?_e=ht.depth:E.isData3DTexture?_e=Math.floor(ht.depth*Yt):_e=1,Le=0,Ne=0,Re=0}j!==null?(Ke=j.x,nt=j.y,bt=j.z):(Ke=0,nt=0,bt=0);const st=Ae.convert(k.format),Ce=Ae.convert(k.type);let dt;k.isData3DTexture?(Fe.setTexture3D(k,0),dt=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Fe.setTexture2DArray(k,0),dt=D.TEXTURE_2D_ARRAY):(Fe.setTexture2D(k,0),dt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=D.getParameter(D.UNPACK_ROW_LENGTH),Ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),yi=D.getParameter(D.UNPACK_SKIP_PIXELS),zt=D.getParameter(D.UNPACK_SKIP_ROWS),cr=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);const ft=E.isDataArrayTexture||E.isData3DTexture,Xt=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const Yt=be.get(E),Dt=be.get(k),kt=be.get(Yt.__renderTarget),Os=be.get(Dt.__renderTarget);he.bindFramebuffer(D.READ_FRAMEBUFFER,kt.__webglFramebuffer),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Os.__webglFramebuffer);for(let ni=0;ni<_e;ni++)ft&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(E).__webglTexture,B,Re+ni),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(k).__webglTexture,ie,bt+ni)),D.blitFramebuffer(Le,Ne,fe,Se,Ke,nt,fe,Se,D.DEPTH_BUFFER_BIT,D.NEAREST);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||E.isRenderTargetTexture||be.has(E)){const Yt=be.get(E),Dt=be.get(k);he.bindFramebuffer(D.READ_FRAMEBUFFER,Lu),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,Du);for(let kt=0;kt<_e;kt++)ft?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Yt.__webglTexture,B,Re+kt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Yt.__webglTexture,B),Xt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Dt.__webglTexture,ie,bt+kt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Dt.__webglTexture,ie),B!==0?D.blitFramebuffer(Le,Ne,fe,Se,Ke,nt,fe,Se,D.COLOR_BUFFER_BIT,D.NEAREST):Xt?D.copyTexSubImage3D(dt,ie,Ke,nt,bt+kt,Le,Ne,fe,Se):D.copyTexSubImage2D(dt,ie,Ke,nt,Le,Ne,fe,Se);he.bindFramebuffer(D.READ_FRAMEBUFFER,null),he.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Xt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(dt,ie,Ke,nt,bt,fe,Se,_e,st,Ce,ht.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(dt,ie,Ke,nt,bt,fe,Se,_e,st,ht.data):D.texSubImage3D(dt,ie,Ke,nt,bt,fe,Se,_e,st,Ce,ht):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ie,Ke,nt,fe,Se,st,Ce,ht.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ie,Ke,nt,ht.width,ht.height,st,ht.data):D.texSubImage2D(D.TEXTURE_2D,ie,Ke,nt,fe,Se,st,Ce,ht);D.pixelStorei(D.UNPACK_ROW_LENGTH,Ze),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yi),D.pixelStorei(D.UNPACK_SKIP_ROWS,zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,cr),ie===0&&k.generateMipmaps&&D.generateMipmap(dt),he.unbindTexture()},this.initRenderTarget=function(E){be.get(E).__webglFramebuffer===void 0&&Fe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Fe.setTextureCube(E,0):E.isData3DTexture?Fe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Fe.setTexture2DArray(E,0):Fe.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){A=0,R=0,P=null,he.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function Xl(r,e){if(e===pd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Io||e===zh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===Io)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class G_ extends sr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new X_(t)}),this.register(function(t){return new Y_(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new q_(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new W_(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new o0(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Tr.extractUrlBase(e);a=Tr.resolveURL(l,this.path)}else a=Tr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new su(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===du){try{a[Xe.KHR_BINARY_GLTF]=new c0(e)}catch(h){i&&i(h);return}s=JSON.parse(a[Xe.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new y0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Xe.KHR_MATERIALS_UNLIT:a[h]=new j_;break;case Xe.KHR_DRACO_MESH_COMPRESSION:a[h]=new l0(s,this.dracoLoader);break;case Xe.KHR_TEXTURE_TRANSFORM:a[h]=new h0;break;case Xe.KHR_MESH_QUANTIZATION:a[h]=new u0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function V_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Xe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class W_{constructor(e){this.parser=e,this.name=Xe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Ot);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new ko(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new au(u),l.distance=h;break;case"spot":l=new Vf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),dn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class j_{constructor(){this.name=Xe.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Ot),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,wt))}return Promise.all(i)}}class q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class X_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(o,o)}return Promise.all(s)}}class Y_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class K_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class J_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Ot)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,wt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class $_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],Ot),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class e0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],Ot),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,wt)),Promise.all(s)}}class t0{constructor(e){this.parser=e,this.name=Xe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=Xe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=Xe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class r0{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class s0{constructor(e){this.parser=e,this.name=Xe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class a0{constructor(e){this.name=Xe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}}class o0{constructor(e){this.name=Xe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Jt.TRIANGLES&&l.mode!==Jt.TRIANGLE_STRIP&&l.mode!==Jt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const b=new Ge,m=new N,p=new bn,S=new N(1,1,1),M=new Qh(g.geometry,g.material,d);for(let x=0;x<d;x++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,x),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,x),c.SCALE&&S.fromBufferAttribute(c.SCALE,x),M.setMatrixAt(x,b.compose(m,p,S));for(const x in c)if(x==="_COLOR_0"){const T=c[x];M.instanceColor=new Fo(T.array,T.itemSize,T.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,c[x]);ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const du="glTF",br=12,Yl={JSON:1313821514,BIN:5130562};class c0{constructor(e){this.name=Xe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==du)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-br,s=new DataView(e,br);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Yl.JSON){const l=new Uint8Array(e,br+a,o);this.content=n.decode(l)}else if(c===Yl.BIN){const l=br+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class l0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Xe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Vo[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Vo[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Wi[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}h(f)},o,l,Ot,d)})})}}class h0{constructor(){this.name=Xe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class u0{constructor(){this.name=Xe.KHR_MESH_QUANTIZATION}}class fu extends kr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,S=1-m,M=p-d+h;for(let x=0;x!==o;x++){const T=a[b+x+o],A=a[b+x+c]*u,R=a[g+x+o],P=a[g+x]*u;s[x]=S*T+M*A+m*R+p*P}return s}}const d0=new bn;class f0 extends fu{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return d0.fromArray(s).normalize().toArray(s),s}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Wi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Kl={9728:Ft,9729:jt,9984:Ih,9985:gs,9986:vr,9987:Pn},Jl={33071:Yn,33648:Ts,10497:Yi},xa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Vo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},p0={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Dr},va={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function m0(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Zi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fn})),r.DefaultMaterial}function li(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function dn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function g0(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):r.attributes.position;a.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=h),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function b0(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function _0(r){let e;const t=r.extensions&&r.extensions[Xe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ya(t.attributes):e=r.indices+":"+ya(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+ya(r.targets[n]);return e}function ya(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function Wo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x0(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const v0=new Ge;class y0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new V_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Hf(this.options.manager):this.textureLoader=new qf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new su(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return li(s,o,i),dn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Xe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Tr.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=xa[i.type],o=Wi[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new xt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=xa[i.type],l=Wi[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let b,m;if(f&&f!==h){const p=Math.floor(d/f),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let M=t.cache.get(S);M||(b=new l(o,p*f,i.count*f/u),M=new pf(b,f/u),t.cache.add(S,M)),m=new rc(M,c,d%f/u,g)}else o===null?b=new l(i.count*c):b=new l(o,d,i.count*c),m=new xt(b,c,g);if(i.sparse!==void 0){const p=xa.SCALAR,S=Wi[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,T=new S(a[1],M,i.sparse.count*p),A=new l(a[2],x,i.sparse.count*c);o!==null&&(m=new xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=T.length;R<P;R++){const y=T[R];if(m.setX(y,A[R*c]),c>=2&&m.setY(y,A[R*c+1]),c>=3&&m.setZ(y,A[R*c+2]),c>=4&&m.setW(y,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Kl[d.magFilter]||jt,u.minFilter=Kl[d.minFilter]||Pn,u.wrapS=Jl[d.wrapS]||Yi,u.wrapT=Jl[d.wrapT]||Yi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Ft&&u.minFilter!==jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Rt(b);m.needsUpdate=!0,d(m)}),t.load(Tr.resolveURL(h,s.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),dn(h,a),h.userData.mimeType=a.mimeType||x0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Xe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Xe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Xe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new cc,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new eu,an.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Zi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Xe.KHR_MATERIALS_UNLIT]){const h=i[Xe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Ot),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,wt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=pn);const u=s.alphaMode||va.OPAQUE;if(u===va.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===va.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==fi&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==fi&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==fi){const h=s.emissiveFactor;o.emissive=new Oe().setRGB(h[0],h[1],h[2],Ot)}return s.emissiveTexture!==void 0&&a!==fi&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,wt)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),dn(h,s),t.associations.set(h,{materials:e}),s.extensions&&li(i,h,s),h})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Xe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Zl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=_0(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Xe.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Zl(new qt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?m0(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const b=u[f],m=a[f];let p;const S=l[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new gf(b,S):new mt(b,S),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=Xl(p.geometry,zh):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=Xl(p.geometry,Io));else if(m.mode===Jt.LINES)p=new Mf(b,S);else if(m.mode===Jt.LINE_STRIP)p=new oc(b,S);else if(m.mode===Jt.LINE_LOOP)p=new Sf(b,S);else if(m.mode===Jt.POINTS)p=new lc(b,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&b0(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),dn(p,s),m.extensions&&li(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return s.extensions&&li(i,h[0],s),h[0];const d=new Kn;s.extensions&&li(i,d,s),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Er.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new uc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),dn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Ge;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new sc(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const f=i.channels[h],g=i.samplers[f.sampler],b=f.target,m=b.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,S=i.parameters!==void 0?i.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",S)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],b=h[3],m=h[4],p=[];for(let M=0,x=d.length;M<x;M++){const T=d[M],A=f[M],R=g[M],P=b[M],y=m[M];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const _=n._createAnimationTracks(T,A,R,P,y);if(_)for(let w=0;w<_.length;w++)p.push(_[w])}const S=new If(s,void 0,p);return dn(S,i),S})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,v0)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new Zh:l.length>1?u=new Kn:l.length===1?u=l[0]:u=new ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),dn(u,s),s.extensions&&li(n,u,s),s.matrix!==void 0){const h=new Ge;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Kn;n.name&&(s.name=i.createUniqueName(n.name)),dn(s,n),n.extensions&&li(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of i.associations)(d instanceof an||d instanceof Rt)&&h.set(d,f);return u.traverse(d=>{const f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Wn[s.path]===Wn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Wn[s.path]){case Wn.weights:l=$i;break;case Wn.rotation:l=Qi;break;case Wn.translation:case Wn.scale:l=er;break;default:switch(n.itemSize){case 1:l=$i;break;case 2:case 3:default:l=er;break}break}const u=i.interpolation!==void 0?p0[i.interpolation]:Ir,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Wn[s.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Wo(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Qi?f0:fu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function M0(r,e,t){const n=e.attributes,i=new On;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){const u=Wo(Wi[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new N,c=new N;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=Wo(Wi[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new xn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Zl(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=Vo[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Je.workingColorSpace!==Ot&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),dn(r,e),M0(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?g0(r,e.targets,t):r})}const $l={type:"change"},mc={type:"start"},pu={type:"end"},ps=new tr,Ql=new qn,S0=Math.cos(70*Er.DEG2RAD),Mt=new N,Bt=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ma=1e-6;class E0 extends rp{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gi.ROTATE,MIDDLE:Gi.DOLLY,RIGHT:Gi.PAN},this.touches={ONE:Hi.ROTATE,TWO:Hi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new bn,this._lastTargetPosition=new N,this._quat=new bn().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ho,this._sphericalDelta=new Ho,this._scale=1,this._panOffset=new N,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new N,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w0.bind(this),this._onPointerDown=T0.bind(this),this._onPointerUp=A0.bind(this),this._onContextMenu=N0.bind(this),this._onMouseWheel=P0.bind(this),this._onKeyDown=L0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=I0.bind(this),this._onMouseDown=R0.bind(this),this._onMouseMove=C0.bind(this),this._interceptControlDown=U0.bind(this),this._interceptControlUp=F0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent($l),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;Mt.copy(t).sub(this.target),Mt.applyQuaternion(this._quat),this._spherical.setFromVector3(Mt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Bt:n>Math.PI&&(n-=Bt),i<-Math.PI?i+=Bt:i>Math.PI&&(i-=Bt),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Mt.setFromSpherical(this._spherical),Mt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Mt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Mt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new N(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Mt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ps.origin.copy(this.object.position),ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ps.direction))<S0?this.object.lookAt(this.target):(Ql.setFromNormalAndCoplanarPoint(this.object.up,this.target),ps.intersectPlane(Ql,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ma||this._lastTargetPosition.distanceToSquared(this.target)>Ma?(this.dispatchEvent($l),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Bt/60*this.autoRotateSpeed*e:Bt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Mt.setFromMatrixColumn(t,0),Mt.multiplyScalar(-e),this._panOffset.add(Mt)}_panUp(e,t){this.screenSpacePanning===!0?Mt.setFromMatrixColumn(t,1):(Mt.setFromMatrixColumn(t,0),Mt.crossVectors(this.object.up,Mt)),Mt.multiplyScalar(e),this._panOffset.add(Mt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Mt.copy(i).sub(this.target);let s=Mt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Bt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Bt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Bt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,s=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new De,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function T0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function w0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function A0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function R0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Gi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=rt.DOLLY;break;case Gi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}break;case Gi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mc)}function C0(r){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function P0(r){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(r.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(pu))}function L0(r){this.enabled!==!1&&this._handleKeyDown(r)}function D0(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Hi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=rt.TOUCH_ROTATE;break;case Hi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Hi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=rt.TOUCH_DOLLY_PAN;break;case Hi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(mc)}function I0(r){switch(this._trackPointer(r),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=rt.NONE}}function N0(r){this.enabled!==!1&&r.preventDefault()}function U0(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F0(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var O0=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var S=new Uint8Array(p.length),M=0;M<p.length;++M){var x=p.charCodeAt(M);S[M]=x>96?x-97:x>64?x-39:x+4}for(var T=0,M=0;M<p.length;++M)S[T++]=S[M]<60?n[S[M]]:(S[M]-60)*64+S[++M];return S.buffer.slice(0,T)}function c(p,S,M,x,T,A,R){var P=p.exports.sbrk,y=x+3&-4,_=P(y*T),w=P(A.length),L=new Uint8Array(p.exports.memory.buffer);L.set(A,w);var I=S(_,x,T,w,A.length);if(I==0&&R&&R(_,y,T),M.set(L.subarray(_,_+x*T)),P(_-P(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var S={object:new Worker(p),pending:0,requests:{}};return S.object.onmessage=function(M){var x=M.data;S.pending-=x.count,S.requests[x.id][x.action](x.value),delete S.requests[x.id]},S}function g(p){for(var S="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([S],{type:"text/javascript"}),x=URL.createObjectURL(M),T=h.length;T<p;++T)h[T]=f(x);for(var T=p;T<h.length;++T)h[T].object.postMessage({});h.length=p,URL.revokeObjectURL(x)}function b(p,S,M,x,T){for(var A=h[0],R=1;R<h.length;++R)h[R].pending<A.pending&&(A=h[R]);return new Promise(function(P,y){var _=new Uint8Array(M),w=++d;A.pending+=p,A.requests[w]={resolve:P,reject:y},A.object.postMessage({id:w,count:p,size:S,source:_,mode:x,filter:T},[_.buffer])})}function m(p){var S=p.data;if(!S.id)return self.close();self.ready.then(function(M){try{var x=new Uint8Array(S.count*S.size);c(M,M.exports[S.mode],x,S.count,S.size,S.source,M.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:x},[x.buffer])}catch(T){self.postMessage({id:S.id,count:S.count,action:"reject",value:T})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,S,M,x,T){c(s,s.exports.meshopt_decodeVertexBuffer,p,S,M,x,s.exports[l[T]])},decodeIndexBuffer:function(p,S,M,x){c(s,s.exports.meshopt_decodeIndexBuffer,p,S,M,x)},decodeIndexSequence:function(p,S,M,x){c(s,s.exports.meshopt_decodeIndexSequence,p,S,M,x)},decodeGltfBuffer:function(p,S,M,x,T,A){c(s,s.exports[u[T]],p,S,M,x,s.exports[l[A]])},decodeGltfBufferAsync:function(p,S,M,x,T){return h.length>0?b(p,S,M,u[x],l[T]):a.then(function(){var A=new Uint8Array(p*S);return c(s,s.exports[u[x]],A,p,S,M,s.exports[l[T]]),A})}}})();class k0 extends Uo{constructor(){super();const e=new nr;e.deleteAttribute("uv");const t=new Zi({side:Ut}),n=new Zi,i=new au(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new mt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Qh(e,n,6),o=new ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new mt(e,ki(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new mt(e,ki(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new mt(e,ki(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new mt(e,ki(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new mt(e,ki(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new mt(e,ki(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ki(r){return new Ef({color:0,emissive:16777215,emissiveIntensity:r})}function mu(r=8841){return()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296)}function B0(r,e){const t=r.attributes.position,n=r.attributes.uv,i=r.attributes.normal,s=r.index,a=(s?s.count:t.count)/3,o=new Float64Array(a),c=new N,l=new N,u=new N,h=new N,d=new N;let f=0;const g=T=>s?s.getX(T):T;for(let T=0;T<a;T++)c.fromBufferAttribute(t,g(T*3)),l.fromBufferAttribute(t,g(T*3+1)),u.fromBufferAttribute(t,g(T*3+2)),f+=h.subVectors(l,c).cross(d.subVectors(u,c)).length()*.5,o[T]=f;const b=mu(),m=new Float32Array(e*3),p=new Float32Array(e*2),S=new Float32Array(e*3),M=new Float32Array(e*3);for(let T=0;T<e;T++){const A=b()*f;let R=0,P=a-1;for(;R<P;){const I=R+P>>>1;o[I]<A?R=I+1:P=I}const y=[g(R*3),g(R*3+1),g(R*3+2)],_=Math.sqrt(b()),w=b(),L=[1-_,_*(1-w),_*w];for(let I=0;I<3;I++){const O=y[I],z=L[I];i&&(M[T*3]+=i.getX(O)*z,M[T*3+1]+=i.getY(O)*z,M[T*3+2]+=i.getZ(O)*z),m[T*3]+=t.getX(O)*z,m[T*3+1]+=t.getY(O)*z,m[T*3+2]+=t.getZ(O)*z,n&&(p[T*2]+=n.getX(O)*z,p[T*2+1]+=n.getY(O)*z)}S.set([b(),b(),b()],T*3)}const x=new qt;return x.setAttribute("position",new xt(m,3)),x.setAttribute("uv",new xt(p,2)),x.setAttribute("normal",new xt(M,3)),x.setAttribute("aSeed",new xt(S,3)),x}function H0(r,e,t,n){e.updateMatrix();const i={uMap:{value:e},uUvTransform:{value:e.matrix},uAssembly:{value:0},uReveal:{value:0},uDissolve:{value:0},uTime:{value:0},uSurface:{value:1},uPixelRatio:{value:1},uMinY:{value:n.min.y},uHeight:{value:n.max.y-n.min.y}},s=new _n({uniforms:i,transparent:!0,depthWrite:!1,blending:pi,vertexShader:`attribute vec3 aSeed; varying vec2 vUv; varying float vAlpha; uniform float uAssembly,uReveal,uDissolve,uTime,uSurface,uPixelRatio,uMinY,uHeight;
 uniform mat3 uUvTransform; void main(){vUv=(uUvTransform*vec3(uv,1.)).xy;float h=clamp((position.y-uMinY)/uHeight,0.,1.);float arrival=smoothstep(h*.64,h*.64+.36,uAssembly);float leave=smoothstep((1.-h)*.55,(1.-h)*.55+.45,uDissolve);float settled=arrival*(1.-leave);float angle=aSeed.x*6.283185+uTime*.035;vec3 scatter=vec3(cos(angle)*(1.35+aSeed.y*.85),-1.3+aSeed.z*2.8,sin(angle)*(1.35+aSeed.y*.85));float ghost=(1.-step(.12,aSeed.y))*(1.-uAssembly);vec3 pos=mix(scatter,position,max(settled,ghost));pos.x+=sin(settled*3.14159)*sin(angle+settled*4.)*.55;pos.y+=sin(settled*3.14159)*.45;float skin=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));vAlpha=mix(mix(.012,.16,ghost),.95,settled)*(1.-skin*uSurface*.97)*(1.-leave*.8);vec4 mv=modelViewMatrix*vec4(pos,1.);vAlpha*=mix(1.,smoothstep(-.1,.35,dot(normalize(normalMatrix*normal),normalize(-mv.xyz))),settled);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((1.1+aSeed.y*1.4)*uPixelRatio*5./(-mv.z),.6,4.5*uPixelRatio);}`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=texture2D(uMap,vUv).rgb;col=mix(col,vec3(.64,.78,.85),.12);gl_FragColor=vec4(col,vAlpha*(1.-smoothstep(.25,1.,d)));#include <tonemapping_fragment>
#include <colorspace_fragment>}`.replace(";#include",`;
#include`)}),a=new lc(B0(r,t),s);return a.frustumCulled=!1,{points:a,uniforms:i}}function z0(r,e){const t={uReveal:{value:0},uDissolve:{value:0},uMinY:{value:e.min.y},uHeight:{value:e.max.y-e.min.y}};return r.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=`varying float vObjectY;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vObjectY=position.y;`),n.fragmentShader=`varying float vObjectY; uniform float uReveal,uDissolve,uMinY,uHeight;
`+n.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 float h=clamp((vObjectY-uMinY)/uHeight,0.,1.);float coverage=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));if(uReveal>=.999&&uDissolve<=.001)coverage=1.;if(uReveal<=.001)coverage=0.;float noise=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);if(noise>coverage)discard;`)},r.customProgramCacheKey=()=>"porcelain-reveal-v1",t}async function G0(r,e,t,n){const i=matchMedia("(max-width:760px)").matches,s=new z_({canvas:r,alpha:!0,antialias:!0,powerPreference:"high-performance"});s.setPixelRatio(Math.min(devicePixelRatio,i?1.4:1.7)),s.outputColorSpace=wt,s.toneMapping=Lh,s.toneMappingExposure=n.model.exposure;const a=new Uo,o=new Lt(35,1,.1,60);let c=null,l=null,u=!1,h=0,d=0,f="view";const g=new E0(o,r);g.enableDamping=!0,g.dampingFactor=.075,g.enablePan=!1,g.minDistance=3.3,g.maxDistance=9,g.maxPolarAngle=Math.PI*.82,g.minPolarAngle=.2,g.addEventListener("start",()=>{c=null}),r.style.touchAction="none";const b=new Kn;a.add(b);const m=new zo(s),p=new k0,S=m.fromScene(p,.04);a.environment=S.texture,a.environmentIntensity=.32,p.dispose(),m.dispose(),a.add(new zf(14018554,3162970,1.65));const M=new ko(16774107,3);M.position.set(-3,5,5),a.add(M);const x=new ko(9156829,1.4);x.position.set(4,1,-2),a.add(x);const T=new G_().setMeshoptDecoder(O0);let A;try{A=await T.loadAsync(n.model[i?"mobile":"desktop"],e)}catch(U){throw g.dispose(),S.dispose(),s.dispose(),U}A.scene.updateMatrixWorld(!0);const R=[];A.scene.traverse(U=>{U.isMesh&&R.push(U)});const P=R[0];if(R.length!==1||Array.isArray(P==null?void 0:P.material)||!(P!=null&&P.material.map))throw new Error("请先将模型预处理为单网格、单贴图的网页资产");if(!P)throw new Error("模型中未找到可显示的网格");const y=new qt;for(const U of["position","normal","uv"]){const G=P.geometry.getAttribute(U);if(!G)continue;const V=new Float32Array(G.count*G.itemSize);for(let $=0;$<G.count;$++)V[$*G.itemSize]=G.getX($),V[$*G.itemSize+1]=G.getY($),G.itemSize>2&&(V[$*G.itemSize+2]=G.getZ($));y.setAttribute(U,new xt(V,G.itemSize))}P.geometry.index&&y.setIndex(P.geometry.index.clone()),y.applyMatrix4(P.matrixWorld),y.rotateY(n.model.rotationY),y.computeBoundingBox();const _=y.boundingBox.getCenter(new N),w=y.boundingBox.getSize(new N),L=2.65/Math.max(w.x,w.y,w.z);y.translate(-_.x,-_.y,-_.z),y.scale(L,L,L),y.computeBoundingBox(),y.computeBoundingSphere();const I=P.material.clone();I.roughness=n.model.roughness,I.metalness=n.model.metalness,I.envMapIntensity=.42;const O=new mt(y,I);b.add(O);const z=y.boundingBox,X=z0(I,z),J=H0(y,I.map,i?2e4:6e4,z);b.add(J.points),J.uniforms.uPixelRatio.value=s.getPixelRatio(),A.scene.traverse(U=>{U.isMesh&&(U.geometry.dispose(),Array.isArray(U.material)?U.material.forEach(G=>G.dispose()):U.material.dispose())});const q=mu(821),Q=new Float32Array((i?180:450)*3);for(let U=0;U<Q.length;U+=3)Q[U]=(q()-.5)*11,Q[U+1]=(q()-.5)*6,Q[U+2]=-2-q()*5;const oe=new qt;oe.setAttribute("position",new xt(Q,3));const me=new lc(oe,new cc({color:7640744,size:.012,transparent:!0,opacity:.38,depthWrite:!1}));a.add(me);const Ue={uTime:{value:0}},Ye=new mt(new Or(10,1.4),new _n({transparent:!0,depthWrite:!1,uniforms:Ue,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float uTime; void main(){float band=exp(-pow((vUv.y-.5)*5.,2.));float wave=.5+.22*sin(vUv.x*17.+uTime*.07)+.18*sin(vUv.x*31.-uTime*.05+vUv.y*5.);float edge=smoothstep(0.,.2,vUv.x)*(1.-smoothstep(.8,1.,vUv.x));gl_FragColor=vec4(.34,.47,.55,band*wave*edge*.075);}"}));Ye.position.set(0,-1.5,-2.5),a.add(Ye);const We=n.anchors.map(U=>({...U})),Ie=new ip,Y=new N(0,0,1);for(const U of We){Ie.set(new N(U.x,U.y,4),new N(0,0,-1));const G=Ie.intersectObject(O)[0];U.position=G?G.point:new N(U.x,U.y,.25),U.normal=G?G.face.normal.clone():Y.clone()}function K(){c=null,l=null,b.rotation.set(0,-.12,0),o.position.set(.24,.24,i?5.9:5.5),g.target.set(0,0,0),g.update()}function ce(){if(l)return;const U=o.position.clone().sub(g.target),G=b.rotation.y-Math.atan2(U.x,U.z)+Math.atan2(.24,i?5.9:5.5);if(K(),b.rotation.y=G,matchMedia("(prefers-reduced-motion:reduce)").matches){b.rotation.y=G+Math.PI;return}l={started:performance.now(),from:G,to:G+Math.PI}}function Te(U){if(!We[U])return;l=null,b.rotation.set(0,-.12,0),b.updateMatrixWorld(!0);const G=We[U].position.clone().applyMatrix4(b.matrixWorld).multiplyScalar(.32),V=G.clone().add(new N(U===0?-.28:U===1?.28:.1,.15,i?5.3:4.8));if(matchMedia("(prefers-reduced-motion:reduce)").matches){c=null,o.position.copy(V),g.target.copy(G),g.update();return}c={started:performance.now(),fromCamera:o.position.clone(),fromTarget:g.target.clone(),position:V,target:G}}function xe(U,G){return b.updateMatrixWorld(!0),o.updateMatrixWorld(!0),Ie.setFromCamera(new De(U*2-1,1-G*2),o),Ie.intersectObject(O).length>0}function ke(){g.minDistance=f==="chat"&&r.clientWidth>760?Math.max(3.3,2.7/(2*Math.tan(Er.degToRad(o.fov/2))*Math.min(1,r.clientWidth*.36/Math.max(1,r.clientHeight)))):3.3;const U=o.position.clone().sub(g.target);U.length()<g.minDistance&&o.position.copy(g.target).add(U.setLength(g.minDistance)),g.update()}function gt(){const{width:U,height:G}=r.getBoundingClientRect();!U||!G||(s.setSize(U,G,!1),o.aspect=U/G,o.updateProjectionMatrix(),ke())}const D=new ResizeObserver(gt);D.observe(r.parentElement),K(),gt();let pe=!0;const se=new N,ge=new N,he=new N,qe=new N;function be(U,G,V){if(l){const $=Math.min(1,(performance.now()-l.started)/850),ne=$*$*(3-2*$);b.rotation.y=Er.lerp(l.from,l.to,ne),$===1&&(l=null)}if(c){const $=Math.min(1,(performance.now()-c.started)/650),ne=$*$*(3-2*$);o.position.lerpVectors(c.fromCamera,c.position,ne),g.target.lerpVectors(c.fromTarget,c.target,ne),$===1&&(c=null)}for(const $ of[X,J.uniforms])$.uReveal.value=U.reveal,$.uDissolve.value=U.dissolve;J.uniforms.uAssembly.value=U.assembly,J.uniforms.uTime.value=G,J.uniforms.uSurface.value=pe?1:0,O.visible=pe,V&&(b.rotation.y=-.12+Math.sin(G*.15)*.12),u||(h+=Math.max(0,G-d)),d=G,me.rotation.y=h*.007,me.position.y=Math.sin(h*.1)*.06,Ue.uTime.value=h,g.update(),s.render(a,o)}let Fe="",lt=[];function at(){const U=o.position.toArray().join(",")+o.quaternion.toArray().join(",")+o.aspect+b.rotation.y+r.clientWidth+","+r.clientHeight;return U===Fe||(Fe=U,lt=We.map(G=>{ge.copy(G.position).applyMatrix4(b.matrixWorld),he.copy(G.normal).transformDirection(b.matrixWorld),qe.subVectors(o.position,ge).normalize(),se.copy(ge).project(o),Ie.set(o.position,qe.clone().negate());const V=Ie.intersectObject(O)[0],$=V&&V.distance<o.position.distanceTo(ge)-.065;return{x:(se.x*.5+.5)*r.clientWidth,y:(-.5*se.y+.5)*r.clientHeight,visible:he.dot(qe)>.12&&!$&&Math.abs(se.x)<.94&&Math.abs(se.y)<.93&&se.z<1}})),lt}function C(U){if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-"].includes(U.key))return;U.preventDefault(),c=null;const V=o.position.clone().sub(g.target),$=new Ho().setFromVector3(V);U.key==="ArrowLeft"&&($.theta-=.12),U.key==="ArrowRight"&&($.theta+=.12),U.key==="ArrowUp"&&($.phi=Math.max(.2,$.phi-.1)),U.key==="ArrowDown"&&($.phi=Math.min(Math.PI*.82,$.phi+.1)),["+","="].includes(U.key)&&($.radius=Math.max(g.minDistance,$.radius*.9)),U.key==="-"&&($.radius=Math.min(9,$.radius*1.1)),o.position.copy(g.target).add(new N().setFromSpherical($)),g.update()}r.addEventListener("keydown",C);function v(){const U=document.createElement("canvas");U.width=960,U.height=960;const G=U.getContext("2d");if(!G)return null;const V=new Uo;V.environment=a.environment,V.environmentIntensity=a.environmentIntensity;for(const Pe of a.children.filter(Ae=>Ae.isLight))V.add(Pe.clone());const $=new Zi({map:I.map,roughness:I.roughness,metalness:I.metalness,envMapIntensity:I.envMapIntensity}),ne=new mt(y,$);ne.rotation.copy(b.rotation),V.add(ne);const ye=new Lt(35,1,.1,60),we=y.boundingSphere.radius/Math.sin(Er.degToRad(17.5))*1.12;ye.position.set(.24,.24,we),ye.lookAt(0,0,0);const ee=s.getSize(new De),ue=s.getPixelRatio();try{return s.setPixelRatio(1),s.setSize(960,960,!1),s.render(V,ye),G.drawImage(r,0,0),U}finally{$.dispose(),s.setPixelRatio(ue),s.setSize(ee.x,ee.y,!1),s.render(a,o)}}function H(){var U;D.disconnect(),r.removeEventListener("keydown",C),g.dispose(),a.traverse(G=>{var V;(V=G.geometry)==null||V.dispose(),G.material&&G.material.dispose()}),(U=I.map)==null||U.dispose(),S.dispose(),s.dispose()}return{captureArtifact:v,update:be,reset:K,flip:ce,focusFeature:Te,hitTest:xe,anchors:We,projectAnchors:at,setViewingMode(U){f=U,ke()},setAmbientPaused(U){u=U},setSurface(U){pe=U},dispose:H,stats:{triangles:y.index?y.index.count/3:y.attributes.position.count/3,particles:J.points.geometry.attributes.position.count,asset:i?"mobile":"desktop"},renderer:s,camera:o,group:b}}const pt=(r,e,t)=>{const n=document.createElement(r);return n.className=e,t!==void 0&&(n.textContent=t),n},hn=(r,e,t)=>{const n=pt("button",r,e);return n.type="button",n.onclick=t,n};async function V0(r,e){var o,c;if(!r.ok){const l=await r.json().catch(()=>null);throw Error(((o=l==null?void 0:l.error)==null?void 0:o.message)||"连接暂时中断，请稍后再试。")}if(!((c=r.headers.get("content-type"))!=null&&c.includes("text/event-stream")))return r.json();const t=r.body.getReader(),n=new TextDecoder;let i="",s=null;function a(l){var g;const u=l.split(`
`),h=(g=u.find(b=>b.startsWith("event:")))==null?void 0:g.slice(6).trim(),d=u.filter(b=>b.startsWith("data:")).map(b=>b.slice(5).trimStart()).join(`
`);if(!d)return;const f=JSON.parse(d);if(h==="delta"&&typeof f.text=="string"&&e(f.text),h==="done"&&(s=f),h==="error")throw Error(f.message||"回答暂时中断。")}try{for(;;){const{done:l,value:u}=await t.read();if(l)break;i+=n.decode(u,{stream:!0}).replace(/\r/g,"");let h;for(;(h=i.indexOf(`

`))>=0;)a(i.slice(0,h)),i=i.slice(h+2);if(i.length>1e5)throw Error("回答内容过长。")}if(i+=n.decode(),i.trim()&&a(i),!s||typeof s.answer!="string")throw Error("回答尚未完整接收，请重试。");return s}finally{await t.cancel().catch(()=>{}),t.releaseLock()}}function W0({onFocus:r=()=>{},exhibit:e}){var gt,D;const t=e.welcome,n=e.prompts,i=e.nickname,s=document.querySelector("#experience");let a=!1,o=!1,c=null,l=!1,u=null,h=0,d=[],f=null,g="",b=!1;const m=new AbortController,p=pt("aside","artifact-speech");p.id="artifact-chat",p.hidden=!0,p.setAttribute("aria-label",`${i}的回答`);const S=pt("p","speech-status",`${i} · 与你相遇`);S.setAttribute("role","status");const M=pt("div","speech-copy",t);M.id="speech-copy",M.tabIndex=0;const x=pt("div","speech-actions"),T=pt("div","speech-tools"),A=hn("speech-link","对话记录 ↗",()=>Ue()),R=hn("speech-link","资料出处 ↗",()=>Ue(!0));R.hidden=!0,T.append(A,R),p.append(S,M,x,T),s.append(p);const P=pt("section","chat-dock");P.id="chat-dock",P.hidden=!0,P.setAttribute("aria-label",`向${i}提问`);const y=pt("form","chat-composer"),_=pt("textarea","chat-input");_.id="chat-input",_.rows=1,_.maxLength=2e3,_.placeholder="想问我什么？",_.setAttribute("aria-label",`想问${i}什么？`);const w=hn("chat-send","↗",()=>{});w.type="submit",w.setAttribute("aria-label","发送");const L=hn("chat-stop","停止",()=>u==null?void 0:u.abort());L.hidden=!0,L.setAttribute("aria-label","停止生成"),y.append(_,w,L);const I=pt("div","chat-prompts"),O=pt("p","composer-hint","Enter 发送 · Shift + Enter 换行");P.append(y,I,O),s.append(P);const z=pt("dialog","conversation-dialog");z.id="conversation-history",z.setAttribute("aria-labelledby","conversation-title");const X=pt("div","conversation-heading"),J=pt("h2","",`与${i}的对话`);J.id="conversation-title";const q=hn("dialog-close","×",()=>z.close());q.setAttribute("aria-label","关闭对话记录"),X.append(J,q);const Q=pt("div","chat-log");Q.setAttribute("role","log"),Q.setAttribute("aria-label","对话记录"),Q.setAttribute("aria-live","off");const oe=hn("clear-chat","清空会话",()=>{u==null||u.abort(),h++,o=!1,d=[],f=null,Q.replaceChildren(),g="",We(t),S.textContent=`${i} · 重新认识你`,R.hidden=!0,x.replaceChildren(),Y(n),Ie(),z.close()});z.append(X,Q,oe),s.append(z);let me=null;function Ue(pe=!1){if(me=document.activeElement,z.open||z.showModal(),pe){const se=Q.querySelector("article:last-child details");se&&(se.open=!0,se.scrollIntoView({block:"nearest"}))}else Q.scrollTop=Q.scrollHeight}z.addEventListener("close",()=>{me!=null&&me.isConnected&&!me.closest("[hidden]")&&me.focus({preventScroll:!0})});function Ye(pe,se){const ge=pt("article",`chat-message chat-message-${pe}`);ge.append(pt("p","chat-speaker",pe==="user"?"你":i));const he=pt("div","chat-message-text",se);return ge.append(he),Q.append(ge),{article:ge,copy:he}}function We(pe){M.textContent=pe}function Ie(){w.disabled=o||!c||!_.value.trim(),w.hidden=o,L.hidden=!o,I.querySelectorAll("button").forEach(pe=>pe.disabled=o||!c),p.classList.toggle("speaking",o),p.setAttribute("aria-busy",String(o)),oe.disabled=o||!Q.children.length,A.hidden=!Q.children.length}function Y(pe){I.replaceChildren(...pe.slice(0,3).map(se=>hn("chat-prompt",se,()=>Te(se))))}function K(pe,se){if(!(se!=null&&se.length))return;const ge=pt("details","chat-sources");ge.append(pt("summary","",`资料出处 · ${se.length}`));for(const he of se)try{const qe=new URL(he.url);if(!["http:","https:"].includes(qe.protocol))continue;const be=pt("a","",he.title+" ↗");be.href=qe.href,be.target="_blank",be.rel="noopener noreferrer",ge.append(be),he.excerpt&&ge.append(pt("p","",he.excerpt))}catch{}pe.append(ge)}function ce(pe){x.replaceChildren();for(const se of(pe||[]).slice(0,2))se.type==="focus"&&e.focusTargets.includes(se.target)&&x.append(hn("speech-focus",se.label||"看看这个细节 ↗",()=>r(se.target)))}async function Te(pe=_.value){var Fe,lt,at;const se=pe.trim();if(!se||o||!c||l)return;if(se.length>2e3){O.textContent="问题请控制在 2000 字以内。";return}g=se,_.value="",o=!0;const ge=++h;u=new AbortController;const he=u;Ye("user",se);const qe=Ye("assistant","");let be="";p.scrollTop=0,S.textContent=`${i} · 让我想一想`,We("你的话我听见了，让我慢慢说给你听……"),x.replaceChildren(),R.hidden=!0,O.textContent="正在回应，文字将逐步呈现",Ie();try{const C=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},signal:he.signal,body:JSON.stringify({artifactId:e.id,message:se,history:d.slice(-8).map(H=>({...H,content:H.content.slice(0,1200)}))})}),v=await V0(C,H=>{ge!==h||l||(be+=H,We(be),qe.copy.textContent=be,S.textContent=`${i} · 正在讲述`)});if(ge!==h||l)return;if(!((Fe=v.answer)!=null&&Fe.trim()))throw Error("没有收到完整回答。");f=v,We(v.answer),qe.copy.textContent=v.answer,K(qe.article,v.citations),ce(v.actions),R.hidden=!((lt=v.citations)!=null&&lt.length),v.notice&&/超时|不可用|中断/.test(v.notice)&&qe.article.append(pt("p","chat-notice",v.notice)),d.push({role:"user",content:se},{role:"assistant",content:v.answer}),S.textContent=v.mode==="model"?`${i} · 说给你听`:`${i} · 资料与故事`,O.textContent="回答已完成 · 可以继续追问",(at=v.suggestions)!=null&&at.length&&Y(v.suggestions)}catch{if(ge!==h||l)return;const v=he.signal.aborted;S.textContent=v?`${i} · 已停止`:`${i} · 暂时未能回答`,We(v?"这次讲述先停在这里。想继续时，再问我一次吧。":"连接暂时中断了，你的问题我还留着。请稍后重试。"),qe.copy.textContent=v?"[已停止，本轮未完成]":"[本轮未完成，请重试]",x.replaceChildren(hn("speech-focus","重新发送 ↗",()=>Te(g))),O.textContent=v?"已停止生成":"发送未完成，可重试"}finally{ge===h&&!l&&(o=!1,u=null,Ie())}}async function xe(){var pe;try{const se=await fetch(`/api/artifacts/${e.id}`,{signal:m.signal}),ge=await se.json();if(!se.ok||((pe=ge.artifact)==null?void 0:pe.id)!==e.id)throw Error();if(l)return;c=ge.artifact,Ie()}catch{if(l)return;S.textContent=`${i} · 资料尚未连接`,We("还没连上我的资料，稍后再试试看。"),x.replaceChildren(hn("speech-focus","重试连接 ↗",()=>{x.replaceChildren(),xe()}))}}y.onsubmit=pe=>{pe.preventDefault(),b||Te()},_.oninput=Ie,_.oncompositionstart=()=>{b=!0},_.oncompositionend=()=>{b=!1},_.onkeydown=pe=>{pe.key==="Enter"&&!pe.shiftKey&&!pe.isComposing&&!b&&pe.keyCode!==229&&(pe.preventDefault(),Te())};function ke(){const pe=window.visualViewport,se=a&&innerWidth<=760?Math.max(0,innerHeight-((pe==null?void 0:pe.height)||innerHeight)-((pe==null?void 0:pe.offsetTop)||0)):0;s.style.setProperty("--keyboard-offset",`${se}px`),s.classList.toggle("keyboard-open",a&&se>100)}return(gt=window.visualViewport)==null||gt.addEventListener("resize",ke),(D=window.visualViewport)==null||D.addEventListener("scroll",ke),Y(n),Ie(),xe(),{setOpen(pe){a=pe,p.hidden=!pe,P.hidden=!pe,!pe&&P.contains(document.activeElement)&&document.activeElement.blur(),ke()},destroy(){var pe,se;l=!0,u==null||u.abort(),m.abort(),(pe=window.visualViewport)==null||pe.removeEventListener("resize",ke),(se=window.visualViewport)==null||se.removeEventListener("scroll",ke),p.remove(),P.remove(),z.remove()}}}function j0({onFocus:r,exhibit:e}){const t=e.topics,n=document.querySelector("#guide-more"),i=document.querySelector("#guide-panel"),s=document.querySelector("#guide-action"),a=[...document.querySelectorAll("[data-guide]")];let o="shape";function c(l){o=l;const u=t[l];a.forEach(h=>{const d=h.dataset.guide===l;h.setAttribute("aria-selected",String(d)),h.tabIndex=d?0:-1}),i.setAttribute("aria-labelledby",`guide-${l}`),document.querySelector("#guide-kind").textContent=u.kind,document.querySelector("#guide-brief").textContent=u.brief,document.querySelector("#guide-excerpt").textContent=u.excerpt,s.textContent=u.action,document.querySelector("#guide-long").replaceChildren(...u.paragraphs.map(h=>{const d=document.createElement("p");return d.textContent=h,d}))}return a.forEach((l,u)=>{l.onclick=()=>c(l.dataset.guide),l.onkeydown=h=>{let d;if(h.key==="ArrowRight")d=(u+1)%a.length;else if(h.key==="ArrowLeft")d=(u+a.length-1)%a.length;else if(h.key==="Home")d=0;else if(h.key==="End")d=a.length-1;else return;h.preventDefault(),c(a[d].dataset.guide),a[d].focus()}}),s.onclick=()=>{const l=t[o];l.target?r(l.target):(n.open=!0,requestAnimationFrame(()=>document.querySelector("#guide-source-link").focus()))},c("shape"),{destroy(){a.forEach(l=>{l.onclick=null,l.onkeydown=null}),s.onclick=null}}}const yt=(r,e,t)=>{const n=document.createElement(r);return n.className=e,t!==void 0&&(n.textContent=t),n},q0={reference:"史料参照",creative:"艺术创作",digital:"数字记录"};function X0({exhibit:r,onClose:e}){const t=yt("aside","story-panel artifact-journey");t.id="journey-panel",t.hidden=!0,t.setAttribute("aria-labelledby","journey-title");const n=yt("div","panel-heading"),i=yt("div","");i.append(yt("p","eyebrow","TRACES THROUGH TIME"));const s=yt("h2","",`${r.nickname}的时光足迹`);s.id="journey-title",i.append(s);const a=yt("button","","×");a.type="button",a.setAttribute("aria-label","收起时光足迹"),a.onclick=e,n.append(i,a);const o=yt("div","journey-body");o.tabIndex=0,o.setAttribute("aria-label","时间轴内容，可上下滚动"),t.append(n,o),document.querySelector("#experience").append(t);const c=new AbortController;let l=!1;async function u(){var h,d,f;o.replaceChildren(yt("p","guide-lead","正在整理时光中的线索……"));try{const g=await fetch(`/api/artifacts/${r.id}`,{signal:c.signal}),b=await g.json();if(!g.ok||((h=b.artifact)==null?void 0:h.id)!==r.id||!((f=(d=b.artifact.journey)==null?void 0:d.entries)!=null&&f.length))throw Error("journey_unavailable");if(l)return;const{journey:m,sources:p}=b.artifact,S=yt("p","guide-lead",m.lead),M=yt("ol","journey-track");for(const x of m.entries){const T=yt("li",`journey-node journey-${x.kind}`),A=yt("div","journey-meta");A.append(yt("span","journey-date",x.time),yt("span","journey-kind",q0[x.kind])),T.append(A,yt("h3","",x.title),yt("p","journey-copy",x.text));for(const R of x.sourceIds){const P=p.find(_=>_.id===R);if(!(P!=null&&P.url))continue;const y=yt("a","journey-source",`${P.publisher} · 查阅原文 ↗`);y.href=P.url,y.target="_blank",y.rel="noopener noreferrer",T.append(y)}M.append(T)}o.replaceChildren(S,M,yt("p","journey-end","故事走到这里，与你相逢。"))}catch{if(l)return;const g=yt("button","guide-action","重新加载时间轴 ↗");g.onclick=u,o.replaceChildren(yt("p","guide-lead","时光资料暂未连接，请重试。"),g)}}return u(),{setOpen(h){t.hidden=!h},destroy(){l=!0,c.abort(),t.remove()}}}function Y0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Bi={},Sa,eh;function K0(){return eh||(eh=1,Sa=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Sa}var Ea={},jn={},th;function xi(){if(th)return jn;th=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return jn.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},jn.getSymbolTotalCodewords=function(n){return e[n]},jn.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},jn.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},jn.isKanjiModeEnabled=function(){return typeof r<"u"},jn.toSJIS=function(n){return r(n)},jn}var Ta={},nh;function gc(){return nh||(nh=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Ta)),Ta}var wa,ih;function J0(){if(ih)return wa;ih=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},wa=r,wa}var Aa,rh;function Z0(){if(rh)return Aa;rh=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Aa=r,Aa}var Ra={},sh;function $0(){return sh||(sh=1,(function(r){const e=xi().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*i-2))*2,o=[s-7];for(let c=1;c<i-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||i.push([s[o],s[c]]);return i}})(Ra)),Ra}var Ca={},ah;function Q0(){if(ah)return Ca;ah=1;const r=xi().getSymbolSize,e=7;return Ca.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},Ca}var Pa={},oh;function ex(){return oh||(oh=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let a=0,o=0,c=0,l=null,u=null;for(let h=0;h<s;h++){o=c=0,l=u=null;for(let d=0;d<s;d++){let f=i.get(h,d);f===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=f,o=1),f=i.get(d,h),f===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=f,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},r.getPenaltyN2=function(i){const s=i.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=i.get(o,c)+i.get(o,c+1)+i.get(o+1,c)+i.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},r.getPenaltyN3=function(i){const s=i.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|i.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},r.getPenaltyN4=function(i){let s=0;const a=i.data.length;for(let c=0;c<a;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(i,c,o))},r.getBestMask=function(i,s){const a=Object.keys(r.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,o=l)}return o}})(Pa)),Pa}var ms={},ch;function gu(){if(ch)return ms;ch=1;const r=gc(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ms.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},ms.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},ms}var La={},_r={},lh;function tx(){if(lh)return _r;lh=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),_r.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},_r.exp=function(n){return r[n]},_r.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},_r}var hh;function nx(){return hh||(hh=1,(function(r){const e=tx();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<i.length;o++)s[a+o]^=e.mul(n[a],i[o]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const a=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(La)),La}var Da,uh;function ix(){if(uh)return Da;uh=1;const r=nx();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Da=e,Da}var Ia={},Na={},Ua={},dh;function bu(){return dh||(dh=1,Ua.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ua}var un={},fh;function _u(){if(fh)return un;fh=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;un.KANJI=new RegExp(t,"g"),un.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),un.BYTE=new RegExp(n,"g"),un.NUMERIC=new RegExp(r,"g"),un.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return un.testKanji=function(c){return i.test(c)},un.testNumeric=function(c){return s.test(c)},un.testAlphanumeric=function(c){return a.test(c)},un}var ph;function vi(){return ph||(ph=1,(function(r){const e=bu(),t=_u();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,a){if(r.isValid(s))return s;try{return n(s)}catch{return a}}})(Na)),Na}var mh;function rx(){return mh||(mh=1,(function(r){const e=xi(),t=gu(),n=gc(),i=vi(),s=bu(),a=7973,o=e.getBCHDigit(a);function c(d,f,g){for(let b=1;b<=40;b++)if(f<=r.getCapacity(b,g,d))return b}function l(d,f){return i.getCharCountIndicator(d,f)+4}function u(d,f){let g=0;return d.forEach(function(b){const m=l(b.mode,f);g+=m+b.getBitsLength()}),g}function h(d,f){for(let g=1;g<=40;g++)if(u(d,g)<=r.getCapacity(g,f,i.MIXED))return g}r.from=function(f,g){return s.isValid(f)?parseInt(f,10):g},r.getCapacity=function(f,g,b){if(!s.isValid(f))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=i.BYTE);const m=e.getSymbolTotalCodewords(f),p=t.getTotalCodewordsCount(f,g),S=(m-p)*8;if(b===i.MIXED)return S;const M=S-l(b,f);switch(b){case i.NUMERIC:return Math.floor(M/10*3);case i.ALPHANUMERIC:return Math.floor(M/11*2);case i.KANJI:return Math.floor(M/13);case i.BYTE:default:return Math.floor(M/8)}},r.getBestVersionForData=function(f,g){let b;const m=n.from(g,n.M);if(Array.isArray(f)){if(f.length>1)return h(f,m);if(f.length===0)return 1;b=f[0]}else b=f;return c(b.mode,b.getLength(),m)},r.getEncodedBits=function(f){if(!s.isValid(f)||f<7)throw new Error("Invalid QR Code version");let g=f<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return f<<12|g}})(Ia)),Ia}var Fa={},gh;function sx(){if(gh)return Fa;gh=1;const r=xi(),e=1335,t=21522,n=r.getBCHDigit(e);return Fa.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(o<<10|c)^t},Fa}var Oa={},ka,bh;function ax(){if(bh)return ka;bh=1;const r=vi();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,a;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-i;o>0&&(s=this.data.substr(i),a=parseInt(s,10),n.put(a,o*3+1))},ka=e,ka}var Ba,_h;function ox(){if(_h)return Ba;_h=1;const r=vi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},Ba=t,Ba}var Ha,xh;function cx(){if(xh)return Ha;xh=1;const r=vi();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},Ha=e,Ha}var za,vh;function lx(){if(vh)return za;vh=1;const r=vi(),e=xi();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},za=t,za}var Ga={exports:{}},yh;function hx(){return yh||(yh=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,h,d,f,g,b,m;!o.empty();){c=o.pop(),l=c.value,h=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],g=h+f,b=a[u],m=typeof a[u]>"u",(m||b>g)&&(a[u]=g,o.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof a[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(Ga)),Ga.exports}var Mh;function ux(){return Mh||(Mh=1,(function(r){const e=vi(),t=ax(),n=ox(),i=cx(),s=lx(),a=_u(),o=xi(),c=hx();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,S,M){const x=[];let T;for(;(T=p.exec(M))!==null;)x.push({data:T[0],index:T.index,mode:S,length:T[0].length});return x}function h(p){const S=u(a.NUMERIC,e.NUMERIC,p),M=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let x,T;return o.isKanjiModeEnabled()?(x=u(a.BYTE,e.BYTE,p),T=u(a.KANJI,e.KANJI,p)):(x=u(a.BYTE_KANJI,e.BYTE,p),T=[]),S.concat(M,x,T).sort(function(R,P){return R.index-P.index}).map(function(R){return{data:R.data,mode:R.mode,length:R.length}})}function d(p,S){switch(S){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function f(p){return p.reduce(function(S,M){const x=S.length-1>=0?S[S.length-1]:null;return x&&x.mode===M.mode?(S[S.length-1].data+=M.data,S):(S.push(M),S)},[])}function g(p){const S=[];for(let M=0;M<p.length;M++){const x=p[M];switch(x.mode){case e.NUMERIC:S.push([x,{data:x.data,mode:e.ALPHANUMERIC,length:x.length},{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.ALPHANUMERIC:S.push([x,{data:x.data,mode:e.BYTE,length:x.length}]);break;case e.KANJI:S.push([x,{data:x.data,mode:e.BYTE,length:l(x.data)}]);break;case e.BYTE:S.push([{data:x.data,mode:e.BYTE,length:l(x.data)}])}}return S}function b(p,S){const M={},x={start:{}};let T=["start"];for(let A=0;A<p.length;A++){const R=p[A],P=[];for(let y=0;y<R.length;y++){const _=R[y],w=""+A+y;P.push(w),M[w]={node:_,lastCount:0},x[w]={};for(let L=0;L<T.length;L++){const I=T[L];M[I]&&M[I].node.mode===_.mode?(x[I][w]=d(M[I].lastCount+_.length,_.mode)-d(M[I].lastCount,_.mode),M[I].lastCount+=_.length):(M[I]&&(M[I].lastCount=_.length),x[I][w]=d(_.length,_.mode)+4+e.getCharCountIndicator(_.mode,S))}}T=P}for(let A=0;A<T.length;A++)x[T[A]].end=0;return{map:x,table:M}}function m(p,S){let M;const x=e.getBestModeForData(p);if(M=e.from(S,x),M!==e.BYTE&&M.bit<x.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(M)+`.
 Suggested mode is: `+e.toString(x));switch(M===e.KANJI&&!o.isKanjiModeEnabled()&&(M=e.BYTE),M){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(S){return S.reduce(function(M,x){return typeof x=="string"?M.push(m(x,null)):x.data&&M.push(m(x.data,x.mode)),M},[])},r.fromString=function(S,M){const x=h(S,o.isKanjiModeEnabled()),T=g(x),A=b(T,M),R=c.find_path(A.map,"start","end"),P=[];for(let y=1;y<R.length-1;y++)P.push(A.table[R[y]].node);return r.fromArray(f(P))},r.rawSplit=function(S){return r.fromArray(h(S,o.isKanjiModeEnabled()))}})(Oa)),Oa}var Sh;function dx(){if(Sh)return Ea;Sh=1;const r=xi(),e=gc(),t=J0(),n=Z0(),i=$0(),s=Q0(),a=ex(),o=gu(),c=ix(),l=rx(),u=sx(),h=vi(),d=ux();function f(A,R){const P=A.size,y=s.getPositions(R);for(let _=0;_<y.length;_++){const w=y[_][0],L=y[_][1];for(let I=-1;I<=7;I++)if(!(w+I<=-1||P<=w+I))for(let O=-1;O<=7;O++)L+O<=-1||P<=L+O||(I>=0&&I<=6&&(O===0||O===6)||O>=0&&O<=6&&(I===0||I===6)||I>=2&&I<=4&&O>=2&&O<=4?A.set(w+I,L+O,!0,!0):A.set(w+I,L+O,!1,!0))}}function g(A){const R=A.size;for(let P=8;P<R-8;P++){const y=P%2===0;A.set(P,6,y,!0),A.set(6,P,y,!0)}}function b(A,R){const P=i.getPositions(R);for(let y=0;y<P.length;y++){const _=P[y][0],w=P[y][1];for(let L=-2;L<=2;L++)for(let I=-2;I<=2;I++)L===-2||L===2||I===-2||I===2||L===0&&I===0?A.set(_+L,w+I,!0,!0):A.set(_+L,w+I,!1,!0)}}function m(A,R){const P=A.size,y=l.getEncodedBits(R);let _,w,L;for(let I=0;I<18;I++)_=Math.floor(I/3),w=I%3+P-8-3,L=(y>>I&1)===1,A.set(_,w,L,!0),A.set(w,_,L,!0)}function p(A,R,P){const y=A.size,_=u.getEncodedBits(R,P);let w,L;for(w=0;w<15;w++)L=(_>>w&1)===1,w<6?A.set(w,8,L,!0):w<8?A.set(w+1,8,L,!0):A.set(y-15+w,8,L,!0),w<8?A.set(8,y-w-1,L,!0):w<9?A.set(8,15-w-1+1,L,!0):A.set(8,15-w-1,L,!0);A.set(y-8,8,1,!0)}function S(A,R){const P=A.size;let y=-1,_=P-1,w=7,L=0;for(let I=P-1;I>0;I-=2)for(I===6&&I--;;){for(let O=0;O<2;O++)if(!A.isReserved(_,I-O)){let z=!1;L<R.length&&(z=(R[L]>>>w&1)===1),A.set(_,I-O,z),w--,w===-1&&(L++,w=7)}if(_+=y,_<0||P<=_){_-=y,y=-y;break}}}function M(A,R,P){const y=new t;P.forEach(function(O){y.put(O.mode.bit,4),y.put(O.getLength(),h.getCharCountIndicator(O.mode,A)),O.write(y)});const _=r.getSymbolTotalCodewords(A),w=o.getTotalCodewordsCount(A,R),L=(_-w)*8;for(y.getLengthInBits()+4<=L&&y.put(0,4);y.getLengthInBits()%8!==0;)y.putBit(0);const I=(L-y.getLengthInBits())/8;for(let O=0;O<I;O++)y.put(O%2?17:236,8);return x(y,A,R)}function x(A,R,P){const y=r.getSymbolTotalCodewords(R),_=o.getTotalCodewordsCount(R,P),w=y-_,L=o.getBlocksCount(R,P),I=y%L,O=L-I,z=Math.floor(y/L),X=Math.floor(w/L),J=X+1,q=z-X,Q=new c(q);let oe=0;const me=new Array(L),Ue=new Array(L);let Ye=0;const We=new Uint8Array(A.buffer);for(let Te=0;Te<L;Te++){const xe=Te<O?X:J;me[Te]=We.slice(oe,oe+xe),Ue[Te]=Q.encode(me[Te]),oe+=xe,Ye=Math.max(Ye,xe)}const Ie=new Uint8Array(y);let Y=0,K,ce;for(K=0;K<Ye;K++)for(ce=0;ce<L;ce++)K<me[ce].length&&(Ie[Y++]=me[ce][K]);for(K=0;K<q;K++)for(ce=0;ce<L;ce++)Ie[Y++]=Ue[ce][K];return Ie}function T(A,R,P,y){let _;if(Array.isArray(A))_=d.fromArray(A);else if(typeof A=="string"){let z=R;if(!z){const X=d.rawSplit(A);z=l.getBestVersionForData(X,P)}_=d.fromString(A,z||40)}else throw new Error("Invalid data");const w=l.getBestVersionForData(_,P);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!R)R=w;else if(R<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const L=M(R,P,_),I=r.getSymbolSize(R),O=new n(I);return f(O,R),g(O),b(O,R),p(O,P,0),R>=7&&m(O,R),S(O,L),isNaN(y)&&(y=a.getBestMask(O,p.bind(null,O,P))),a.applyMask(y,O),p(O,P,y),{modules:O,version:R,errorCorrectionLevel:P,maskPattern:y,segments:_}}return Ea.create=function(R,P){if(typeof R>"u"||R==="")throw new Error("No input text");let y=e.M,_,w;return typeof P<"u"&&(y=e.from(P.errorCorrectionLevel,e.M),_=l.from(P.version),w=a.from(P.maskPattern),P.toSJISFunc&&r.setToSJISFunction(P.toSJISFunc)),T(R,_,y,w)},Ea}var Va={},Wa={},Eh;function xu(){return Eh||(Eh=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const a=i.modules.size,o=i.modules.data,c=r.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let g=(d*l+f)*4,b=s.color.light;if(d>=u&&f>=u&&d<l-u&&f<l-u){const m=Math.floor((d-u)/c),p=Math.floor((f-u)/c);b=h[o[m*a+p]?1:0]}n[g++]=b.r,n[g++]=b.g,n[g++]=b.b,n[g]=b.a}}})(Wa)),Wa}var Th;function fx(){return Th||(Th=1,(function(r){const e=xu();function t(i,s,a){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),d=h.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(h,l,u),h.putImageData(d,0,0),l},r.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=r.render(s,a,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(Va)),Va}var ja={},wh;function px(){if(wh)return ja;wh=1;const r=xu();function e(i,s){const a=i.a/255,o=s+'="'+i.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(i,s,a){let o=i+s;return typeof a<"u"&&(o+=" "+a),o}function n(i,s,a){let o="",c=0,l=!1,u=0;for(let h=0;h<i.length;h++){const d=Math.floor(h%s),f=Math.floor(h/s);!d&&!l&&(l=!0),i[h]?(u++,h>0&&d>0&&i[h-1]||(o+=l?t("M",d+a,.5+f+a):t("m",c,0),c=0,l=!1),d+1<s&&i[h+1]||(o+=t("h",u),u=0)):c++}return o}return ja.render=function(s,a,o){const c=r.getOptions(a),l=s.modules.size,u=s.modules.data,h=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",f="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+h+" "+h+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+f+`</svg>
`;return typeof o=="function"&&o(null,m),m},ja}var Ah;function mx(){if(Ah)return Bi;Ah=1;const r=K0(),e=dx(),t=fx(),n=px();function i(s,a,o,c,l){const u=[].slice.call(arguments,1),h=u.length,d=typeof u[h-1]=="function";if(!d&&!r())throw new Error("Callback required as last argument");if(d){if(h<2)throw new Error("Too few arguments provided");h===2?(l=o,o=a,a=c=void 0):h===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(o=a,a=c=void 0):h===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(f,g){try{const b=e.create(o,c);f(s(b,a,c))}catch(b){g(b)}})}try{const f=e.create(o,c);l(null,s(f,a,c))}catch(f){l(f)}}return Bi.create=e.create,Bi.toCanvas=i.bind(null,t.render),Bi.toDataURL=i.bind(null,t.renderToDataURL),Bi.toString=i.bind(null,function(s,a,o){return n.render(s,o)}),Bi}var gx=mx();const bx=Y0(gx);function Ms(r,e=null){var i;const t=((i=globalThis.location)==null?void 0:i.origin)||"http://localhost",n=new URL(e||t,t);if(!["http:","https:"].includes(n.protocol))throw new Error("分享地址必须使用 HTTP 或 HTTPS");return n.username="",n.password="",n.pathname="/",n.search="",n.hash="",n.searchParams.set("artifact",String(r)),n.href}function vu(r){return bx.toDataURL(String(r),{type:"image/png",width:300,margin:4,errorCorrectionLevel:"M",color:{dark:"#172824",light:"#ffffff"}})}function xr(r,e,t,n,i,s,a=3){const o=Array.from(String(e||"")),c=[];let l="";for(const h of o)h===`
`||r.measureText(l+h).width>i?(c.push(l),l=h===`
`?"":h):l+=h;l&&c.push(l);const u=c.slice(0,a);if(c.length>a){let h=u.at(-1);for(;h&&r.measureText(h+"…").width>i;)h=h.slice(0,-1);u[u.length-1]=h+"…"}u.forEach((h,d)=>r.fillText(h,t,n+d*s))}function _x(r){const e=r?new Date(r):null;return!e||!Number.isFinite(e.getTime())?"日期未记录":new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(e).replaceAll("/",".")}function xx(r){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("二维码图片加载失败")),n.src=r})}function vx(r){var t;const e={x:0,y:0,width:r.width,height:r.height};try{const n=(t=r.getContext("2d"))==null?void 0:t.getImageData(0,0,r.width,r.height).data;if(!n)return e;let i=r.width,s=r.height,a=-1,o=-1;for(let d=0;d<r.height;d++)for(let f=0;f<r.width;f++)n[(d*r.width+f)*4+3]<=8||(i=Math.min(i,f),a=Math.max(a,f),s=Math.min(s,d),o=Math.max(o,d));if(a<i||o<s)return e;const c=Math.ceil((a-i+1)*.1),l=Math.ceil((o-s+1)*.1),u=Math.max(0,i-c),h=Math.max(0,s-l);return{x:u,y:h,width:Math.min(r.width,a+c+1)-u,height:Math.min(r.height,o+l+1)-h}}catch{return e}}async function yx({exhibit:r={},visit:e={},nickname:t="",hideNickname:n=!1,style:i="label",shareUrl:s,artifactImage:a=null,collectionCount:o=1}={}){var M;(M=document.fonts)!=null&&M.ready&&await document.fonts.ready;const c=i==="memory",l=c?"#123c36":"#f2eee4",u=c?"#eee0b9":"#262b29",h=c?"#b6c3b3":"#67736b",d=document.createElement("canvas");d.width=1080,d.height=1440;const f=d.getContext("2d");if(!f)throw new Error("当前浏览器无法生成海报");const g=(x,T=u,A=!1)=>{f.fillStyle=T,f.font=`${x}px ${A?'"Noto Serif SC", "Songti SC", SimSun, serif':'"Microsoft YaHei", sans-serif'}`};f.fillStyle=l,f.fillRect(0,0,1080,1440),f.strokeStyle=c?"#ad9c6860":"#263c3328",f.lineWidth=1,f.strokeRect(32,32,1016,1376),g(19,h),f.fillText("器 生 · 数 字 博 物 馆",76,94),f.textAlign="right",f.fillText(c?"A MEMORY TO KEEP":"DIGITAL COLLECTION",1004,94),f.textAlign="left",g(66,u,!0),xr(f,r.title||"数字文物",76,198,790,76,2),g(18,h),xr(f,r.english||"AN ENCOUNTER ACROSS TIME",80,316,880,24,1);const b=Array.from(r.title||"观展").slice(0,4);if(f.save(),f.translate(937,210),f.rotate(-.06),f.strokeStyle=c?"#d2b779":"#9a463c",f.lineWidth=3,f.strokeRect(-45,-45,90,90),g(27,c?"#d2b779":"#9a463c",!0),f.textAlign="center",b.forEach((x,T)=>f.fillText(x,T%2?22:-22,T<2?-7:28)),f.restore(),a&&a.width>0&&a.height>0){const x=vx(a),T=Math.min(940/x.width,610/x.height),A=x.width*T,R=x.height*T;f.drawImage(a,x.x,x.y,x.width,x.height,(1080-A)/2,366+(610-R)/2,A,R)}else g(42,u,!0),f.textAlign="center",xr(f,r.title||"数字文物",540,625,820,60,3),g(22,h),f.fillText("文物影像暂未载入",540,814),f.textAlign="left";g(18,h),f.fillText(c?"把这一眼，收进时光。":"数字观展纪念 · 文物模型展示",76,1012),f.beginPath(),f.moveTo(76,1042),f.lineTo(1004,1042),f.stroke(),g(19,h),f.fillText("数字观展日期",76,1092),g(34,u,!0),f.fillText(_x(e.firstVisitedAt),76,1139);const m=Number.isFinite(Number(o))?Math.max(1,Math.floor(Number(o))):1;g(22,u),f.fillText(`我的数字收藏 · 第 ${m} 件`,76,1190),!n&&t&&(g(23,u),xr(f,`${t} 的观展记忆`,76,1236,620,32,2));const p=Ms(r.id||e.artifactId||"",s),S=await xx(await vu(p));return f.drawImage(S,790,1072,214,214),g(16,h),f.textAlign="center",f.fillText("扫码走近这件文物",897,1312),f.textAlign="left",g(17,h),xr(f,r.identity||r.boundary||"数字模型展示，具体馆藏身份以资料核实为准。",76,1330,660,24,2),g(16,h),f.fillText("数字阅览记录 · 非现场到访证明",76,1390),new Promise((x,T)=>d.toBlob(A=>A?x(A):T(new Error("海报导出失败")),"image/png"))}const Mx=r=>r?new Date(r).toLocaleString("zh-CN",{hour12:!1}):"尚未领取",Wt=(r,e,t)=>{const n=document.createElement(r);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Sx({exhibit:r,exhibits:e,isReady:t,captureArtifact:n}){const i=Wt("button","pp-launcher","观展护照 ↗");i.type="button",i.setAttribute("aria-haspopup","dialog");const s=Wt("dialog","pp-dialog");s.setAttribute("aria-labelledby","pp-title"),s.innerHTML=`<div class="pp-topbar"><div class="pp-heading"><div><span class="pp-eyebrow">MY DIGITAL COLLECTION</span><h2 id="pp-title">观展护照</h2></div><button type="button" class="pp-close" aria-label="关闭观展护照">×</button></div><nav class="pp-shortcuts" aria-label="护照快捷导航"><button type="button" data-pp-section="pp-collection">藏印</button><button type="button" data-pp-section="pp-account">账户</button><button type="button" data-pp-section="pp-sharing">二维码与海报</button></nav></div>
    <p class="pp-boundary">收藏一次数字相逢。数字观展记录不等同于现场到访证明。</p>
    <p class="pp-status" role="status" aria-live="polite"></p><button class="pp-retry" type="button" hidden>重新加载护照</button>
    <section class="pp-current"><span class="pp-eyebrow">本次相逢</span><h3></h3><p class="pp-ready"></p><button class="pp-checkin pp-primary" type="button" disabled>领取数字印章</button></section>
    <section id="pp-collection" tabindex="-1" aria-label="我的藏印"><div class="pp-section-title"><h3>我的藏印</h3><span class="pp-count"></span></div><div class="pp-stamps"></div></section>
    <section><h3>观展成就</h3><div class="pp-achievements"></div></section>
    <section id="pp-account" class="pp-account" tabindex="-1" aria-label="护照账户"><h3>保存这份相逢</h3><p class="pp-profile"></p><p class="pp-guest">游客记录依赖当前浏览器会话。注册或登录可将本次游客藏印合并到账号，换设备后登录查看。</p><div class="pp-auth-tabs"><button type="button" data-auth="login" aria-pressed="true">登录</button><button type="button" data-auth="register" aria-pressed="false">注册</button></div>
    <form class="pp-form"><label>账号<input name="username" autocomplete="username" required minlength="3" maxlength="40" autocapitalize="none" spellcheck="false"></label><label class="pp-nickname" hidden>昵称<input name="nickname" autocomplete="nickname" maxlength="40"></label><label>密码<input name="password" type="password" autocomplete="current-password" required minlength="8" maxlength="128"></label><button type="submit" class="pp-primary">登录并合并藏印</button></form><button class="pp-logout" type="button" hidden>退出账号</button></section>
    <section id="pp-sharing" class="pp-share" tabindex="-1" aria-label="二维码与海报"><h3>把相逢带走</h3><p>二维码直达这件文物的数字展页。</p><img class="pp-qr" alt="当前文物数字展页二维码" hidden><a class="pp-qr-download" hidden>下载文物二维码</a><a class="pp-share-link" target="_blank" rel="noopener noreferrer"></a><p class="pp-network"></p><button class="pp-qr-retry" type="button" hidden>重试二维码</button><div class="pp-poster-options"><label>纪念海报<select name="posterStyle"><option value="label">米白藏签</option><option value="memory">深色记忆卡</option></select></label><label class="pp-checkbox"><input type="checkbox" name="hideNickname" checked>隐藏昵称</label></div><button class="pp-generate" type="button" disabled>生成纪念海报</button><p class="pp-media-status" role="status"></p><img class="pp-preview" alt="观展纪念海报预览" hidden><div class="pp-poster-actions" hidden><a class="pp-download" download>下载海报</a><button class="pp-system-share" type="button">系统分享</button></div></section>`,document.body.append(i,s);const a=_=>s.querySelector(_);a(".pp-shortcuts").onclick=_=>{const w=_.target.closest("[data-pp-section]");if(!w)return;const L=a(`#${w.dataset.ppSection}`);L.focus({preventScroll:!0}),L.scrollIntoView({block:"start",behavior:"instant"})},a(".pp-current h3").textContent=r.title;const o=a('.pp-form [name="username"]');o.maxLength=32,o.pattern="[a-zA-Z0-9_]{3,32}",o.title="3–32 位字母、数字或下划线",o.placeholder="3–32 位字母、数字或下划线",a('.pp-form [name="nickname"]').maxLength=30,a('.pp-form [name="password"]').placeholder="8–128 个字符";let c=null,l=!1,u="login",h=null,d=null,f=!1,g=0;const b=_=>{a(".pp-status").textContent=_},m=()=>c==null?void 0:c.visits.find(_=>_.artifactId===r.id);function p(){const _=!!t();a(".pp-checkin").disabled=l||!c||!_,a(".pp-ready").textContent=_?m()?"这件文物已在你的护照里，可再次查看领取结果。":"器物已就绪，留下这次数字观展的印记。":"器物模型准备完成后，即可主动领取印章。",a(".pp-generate").disabled=l||!m()||!_}function S(_){l=_,s.querySelectorAll(".pp-form input,.pp-form button,.pp-auth-tabs button,.pp-logout,.pp-retry,.pp-poster-options input,.pp-poster-options select").forEach(w=>{w.disabled=_}),p()}async function M(_="",w){var O;const L=await fetch(`/api/passport${_}`,{method:w===void 0?"GET":"POST",credentials:"same-origin",headers:w===void 0?{}:{"Content-Type":"application/json"},...w===void 0?{}:{body:JSON.stringify(w)}});let I;try{I=await L.json()}catch{throw new Error("护照服务返回异常，请稍后重试。")}if(!L.ok)throw new Error(((O=I.error)==null?void 0:O.message)||"护照服务暂时不可用，请重试。");return I}async function x(){const _=++g,w=Ms(r.id,c==null?void 0:c.publicBaseUrl);a(".pp-share-link").href=w,a(".pp-share-link").textContent=w;const L=new URL(w).hostname,I=/^(localhost|127\.|0\.0\.0\.0$|\[?::1\]?$)/i.test(L),O=/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(L)||L.endsWith(".local");a(".pp-network").textContent=I?"当前是本机地址，其他设备扫码无法访问。需配置公网地址后才能对外分享。":O?"当前是局域网地址，通常仅同一网络内可访问，尚未配置公网分享。":"接收者需能访问此地址，二维码中不包含账号或会话信息。",a(".pp-qr-retry").hidden=!0;try{const z=await vu(w);if(f||_!==g)return;a(".pp-qr").src=z,a(".pp-qr").hidden=!1,a(".pp-qr-download").href=z,a(".pp-qr-download").download=`${r.id}-文物二维码.png`,a(".pp-qr-download").hidden=!1}catch{if(f||_!==g)return;a(".pp-qr").hidden=!0,a(".pp-qr-download").hidden=!0,a(".pp-qr-retry").hidden=!1,a(".pp-network").textContent+=" 二维码生成失败，可重试。"}}function T(){d&&URL.revokeObjectURL(d),d=null,h=null,a(".pp-preview").hidden=!0,a(".pp-poster-actions").hidden=!0,a(".pp-media-status").textContent=""}function A(_){c=_,T(),a(".pp-count").textContent=`${_.visits.length} / ${_.artifactCount}`,a(".pp-stamps").replaceChildren(...Object.values(e).map(L=>{const I=_.visits.find(X=>X.artifactId===L.id),O=Wt("div",`pp-stamp${I?" pp-collected":""}`),z=Wt("a","",L.id===r.id?"正在观展":"前往观展 ↗");return z.href=Ms(L.id),window.parent!==window&&(z.target="_blank",z.rel="noopener noreferrer"),O.append(Wt("span","pp-stamp-mark",I?"已藏":"待藏"),Wt("strong","",L.title),Wt("small","",I?`首次 ${Mx(I.firstVisitedAt)}`:"尚未领取数字印章"),z),O})),a(".pp-achievements").replaceChildren(..._.achievements.map(L=>{const I=Wt("div","pp-achievement"),O=Wt("progress");return O.max=L.target,O.value=L.progress,O.setAttribute("aria-label",L.title),I.append(Wt("strong","",`${L.unlocked?"✦ ":""}${L.title}`),Wt("p","",L.description),O,Wt("small","",`${L.progress} / ${L.target}${L.unlocked?" · 已达成":""}`)),L.reward&&I.append(Wt("small","",`纪念奖励 · ${L.reward}`)),I}));const w=_.profile.kind==="account";a(".pp-profile").textContent=w?`${_.profile.nickname} · ${_.profile.username}`:"当前以游客身份观展",a(".pp-guest").hidden=w,a(".pp-auth-tabs").hidden=w,a(".pp-form").hidden=w,a(".pp-logout").hidden=!w,p(),x()}async function R(){if(!l){S(!0),b("正在翻开你的观展护照…"),a(".pp-retry").hidden=!0;try{const _=await M();f||(A(_.passport||_),b(""))}catch(_){b(_.message),a(".pp-retry").hidden=!1}finally{f||S(!1)}}}async function P(_,w,L){if(!l){S(!0),b("正在保存…");try{const I=await M(_,w);if(f)return;A(I.passport),b(typeof L=="function"?L(I):L),a('.pp-form input[name="password"]').value=""}catch(I){b(I.message),a(".pp-status").scrollIntoView({block:"nearest"})}finally{f||S(!1)}}}i.onclick=()=>{s.showModal(),p(),R()},a(".pp-close").onclick=()=>s.close(),s.addEventListener("keydown",_=>{_.key==="Escape"&&_.stopPropagation()}),s.addEventListener("close",()=>i.focus()),a(".pp-retry").onclick=R,a(".pp-qr-retry").onclick=x,a(".pp-checkin").onclick=()=>{t()&&P("/checkin",{artifactId:r.id},_=>_.created?"数字印章已收入护照。愿这次相逢留在记忆里。":"这枚印章已经领取过，首次观展时间为你保留。")},a(".pp-auth-tabs").onclick=_=>{const w=_.target.closest("[data-auth]");!w||l||(u=w.dataset.auth,a(".pp-nickname").hidden=u!=="register",a('.pp-form [name="nickname"]').required=u==="register",a('.pp-form [name="password"]').autocomplete=u==="register"?"new-password":"current-password",a(".pp-form button").textContent=u==="register"?"注册并保存藏印":"登录并合并藏印",s.querySelectorAll("[data-auth]").forEach(L=>L.setAttribute("aria-pressed",String(L===w))))},a(".pp-form").onsubmit=_=>{_.preventDefault();const w=Object.fromEntries(new FormData(_.currentTarget));u==="login"&&delete w.nickname,P(`/${u}`,w,"已登录，当前游客藏印已合并到账号。")},a(".pp-logout").onclick=()=>P("/logout",{},"已退出，现为新的游客护照。登录可查看账号中的藏印。"),a(".pp-generate").onclick=async()=>{if(!(l||!m()||!t())){S(!0),T(),a(".pp-media-status").textContent="正在记录当前器物视角并制作海报…";try{const _=await n();if(!_)throw new Error("当前无法取得器物画面，请等待模型就绪后重试。");const L=[...c.visits].sort((O,z)=>O.firstVisitedAt.localeCompare(z.firstVisitedAt)||O.artifactId.localeCompare(z.artifactId)).findIndex(O=>O.artifactId===r.id)+1,I=await yx({exhibit:r,visit:m(),nickname:c.profile.nickname,hideNickname:a('[name="hideNickname"]').checked,style:a('[name="posterStyle"]').value,shareUrl:Ms(r.id,c.publicBaseUrl),artifactImage:_,collectionCount:L});if(f)return;h=I,d=URL.createObjectURL(I),a(".pp-preview").src=d,a(".pp-preview").hidden=!1,a(".pp-download").href=d,a(".pp-download").download=`${r.id}-数字观展纪念.png`,a(".pp-poster-actions").hidden=!1,a(".pp-media-status").textContent="海报已生成，可预览后下载或分享。"}catch(_){a(".pp-media-status").textContent=_.message||"海报生成失败，请重试。"}finally{f||S(!1)}}},a(".pp-system-share").onclick=async()=>{var w;if(!h)return;const _=new File([h],`${r.id}-数字观展纪念.png`,{type:"image/png"});if(!((w=navigator.canShare)!=null&&w.call(navigator,{files:[_]}))){a(".pp-media-status").textContent="当前浏览器不支持图片系统分享，请下载海报后分享。";return}try{await navigator.share({files:[_],title:`${r.title} · 数字观展纪念`})}catch(L){L.name!=="AbortError"&&(a(".pp-media-status").textContent="系统分享未完成，可重试或下载海报。")}},a(".pp-poster-options").onchange=()=>{T(),a(".pp-media-status").textContent="设置已更改，请重新生成海报。"};const y=setInterval(()=>{s.open&&p()},500);return{destroy(){f=!0,++g,clearInterval(y),T(),s.remove(),i.remove()}}}const Me=r=>document.querySelector(r),bc=Nu(location.search),Nn=bc||Ar["phoenix-ewer"];Uu(Nn,Ar,!bc);const Qn=matchMedia("(prefers-reduced-motion:reduce)"),ct=new Fu(Qn.matches),_c=Me("#canvas");let _t,At=!1,Jn=!1,Ns,Ss=0,mi,Es,wr=null,Ps="",Rh=0,Un=!1,Cn=Qn.matches;const Ch={dormant:["微光正在汇聚成器…","微光演绎"],forming:["微光正在汇聚成器…","正在成形"],formed:["","微光演绎"],dissolving:["器物正在散作微光…","正在消散"]};function ei(){const r=At?ct.state:"loading";r!==Ps&&(Ps=r,Me("#experience").dataset.state=r,Me("#manifest-status").textContent=At?Ch[r][0]:"正在准备器物…",Me("#manifest-label").textContent=At?Ch[r][1]:"聚合成形",Me("#manifest-toggle").disabled=!At||ct.busy||Un,Me("#hotspot-toggle").disabled=!At||r!=="formed",Me("#reset").disabled=!At,Me("#mirror-flip")&&(Me("#mirror-flip").disabled=!At||r!=="formed"||Un),_c.setAttribute("aria-label","拖动旋转文物，滚轮缩放；方向键旋转，加减键缩放"))}function yu(){Jn=!1,Me("#hotspot-toggle").setAttribute("aria-pressed","false"),Me("#detail").hidden=!0,document.querySelectorAll(".hotspot").forEach(r=>{r.hidden=!0,r.removeAttribute("data-active")})}function Mu(r){const e=_t.anchors[r];Me("#detail-number").textContent="DETAIL / "+String(r+1).padStart(2,"0"),Me("#detail-title").textContent=e.label,Me("#detail-copy").textContent=e.copy,Me("#detail").hidden=!1}function Ex(){if(!(!At||ct.busy||Un)){if(or("view"),wr=null,yu(),ct.reduced){ct.present(),Me("#manifest-status").textContent="已开启减少动态效果，保持完整器物";return}Un=!0,ct.toggle(),ei()}}window.addEventListener("museum-enter",r=>{var e;At&&((e=r.detail)!=null&&e.reduced&&(ct.reduced=!0,Us(!0)),ct.present(),ei())});function xc(){if(!At||wr===null||(ct.state==="dormant"&&(ct.form(),ei()),ct.state!=="formed"))return;const r=wr;wr=null,_t.focusFeature(r),Jn=!0,Me("#hotspot-toggle").setAttribute("aria-pressed","true"),document.querySelectorAll(".hotspot").forEach((e,t)=>e.toggleAttribute("data-active",t===r)),Mu(r)}function Tx(r){const e=Nn.focusTargets.indexOf(r);e<0||(wr=e,xc())}function or(r){["view","story","chat","journey"].includes(r)&&(Me("#experience").dataset.mode=r,Me("#story-panel").hidden=r!=="story",mi==null||mi.setOpen(r==="chat"),_t==null||_t.setViewingMode(r),wu.setOpen(r==="journey"),document.querySelectorAll(".experience-nav [data-mode]").forEach(e=>{e.setAttribute("aria-pressed",String(e.dataset.mode===r)),e.dataset.mode!=="view"&&e.setAttribute("aria-expanded",String(e.dataset.mode===r))}),Me("#detail").hidden=!0)}function Us(r){Cn=r||Qn.matches,Me("#experience").classList.toggle("ambient-paused",Cn),Me("#ambient-toggle").setAttribute("aria-pressed",String(Cn)),Me("#ambient-toggle").textContent=Cn?"动效 · 静":"动效 · 开",Me("#ambient-toggle").setAttribute("aria-label",Cn?"开启背景动效":"暂停背景动效"),_t==null||_t.setAmbientPaused(Cn)}Me("#ambient-toggle").onclick=()=>Us(!Cn);const Su=()=>{ct.reduced=Qn.matches,Qn.matches&&(ct.present(),Un=!1,Ps="",ei()),Us(Qn.matches)};Qn.addEventListener("change",Su);Us(Cn);for(let r=0;r<28;r++){const e=document.createElement("i");e.style.left=`${(r*37+7)%100}%`,e.style.top=`${(r*23+13)%90}%`,e.style.animationDelay=`-${r*1.37}s`,e.style.animationDuration=`${17+r%9*2}s`,Me(".ambient-dust").append(e)}document.querySelectorAll(".experience-nav [data-mode]").forEach(r=>r.onclick=()=>or(r.dataset.mode));Me("#close-story").onclick=()=>{or("view"),document.querySelector('[data-mode="story"][aria-controls]').focus()};document.addEventListener("keydown",r=>{r.key==="Escape"&&!document.querySelector("dialog[open]")&&Me("#experience").dataset.mode!=="view"&&(r.preventDefault(),or("view"),document.querySelector('.experience-nav [data-mode="view"]').focus())});Me("#return-hall").onclick=r=>{const e=new URLSearchParams(location.search),t=e.get("parentOrigin");e.get("museumEmbed")==="1"&&window.parent!==window&&["http://127.0.0.1:5174","http://localhost:5174"].includes(t)&&(r.preventDefault(),parent.postMessage({channel:"museum-artifact-v1",type:"close"},t))};Me("#manifest-toggle").onclick=Ex;Me("#reset").onclick=()=>{At&&_t.reset()};Me("#mirror-flip")&&(Me("#mirror-flip").onclick=()=>{At&&ct.state==="formed"&&!Un&&(yu(),_t.flip())});Me("#hotspot-toggle").onclick=()=>{!At||ct.state!=="formed"||(Jn=!Jn,Me("#hotspot-toggle").setAttribute("aria-pressed",Jn),Jn||(Me("#detail").hidden=!0))};Me("#close-detail").onclick=()=>{Me("#detail").hidden=!0};Me("#about").onclick=()=>Me("#info").showModal();Me("#close-info").onclick=()=>Me("#info").close();Me("#info").onclick=r=>{if(r.target===Me("#info")){const e=r.target.getBoundingClientRect();(r.clientX<e.left||r.clientX>e.right||r.clientY<e.top||r.clientY>e.bottom)&&r.target.close()}};Me("#retry").onclick=()=>location.reload();function Eu(r){Ns=requestAnimationFrame(Eu);const e=Ss?Math.min((r-Ss)/1e3,.08):0;if(Ss=r,document.hidden)return;let t=ct.tick(e);Un&&ct.state==="dormant"?(ct.form(),t=ct.tick(0)):Un&&ct.state==="formed"&&(Un=!1,Ps=""),xc(),ei(),_t.update(t,ct.visualTime,!1),Jn&&ct.state==="formed"&&_t.projectAnchors().forEach((n,i)=>{const s=Me("#hotspot-"+i);s.hidden=!n.visible,s.style.left=n.x+"px",s.style.top=n.y+"px"})}async function wx(){const r=performance.now();try{_t=await G0(_c,e=>{const t=e.total?Math.round(e.loaded/e.total*100):null;Me("#load-progress").value=t??0,Me("#load-text").textContent=t===100?`正在准备${Nn.title}`:"正在载入器物",Me("#load-detail").textContent=t===null?"正在读取模型":`${t}% · ${(e.loaded/1048576).toFixed(1)} MB`},()=>{},Nn),At=!0,ct.present(),_t.setAmbientPaused(Cn),_t.setViewingMode(Me("#experience").dataset.mode),Me("#loader").hidden=!0,Rh=Math.round(performance.now()-r),_t.anchors.forEach((e,t)=>{const n=document.createElement("button");n.className="hotspot",n.id="hotspot-"+t,n.textContent=String(t+1).padStart(2,"0"),n.setAttribute("aria-label",e.label),n.hidden=!0,n.onclick=()=>Mu(t),Me("#hotspots").append(n)}),ei(),xc(),Ns=requestAnimationFrame(Eu),window.__exhibit={get state(){return{ready:At,state:ct.state,progress:ct.progress,busy:ct.busy,showHotspots:Jn,loadMs:Rh,..._t.stats}},get camera(){return _t.camera.position.toArray()}}}catch(e){console.error("器物加载失败",e),Me("#load-text").textContent=/WebGL|context/i.test(e.message)?"当前浏览器未能开启三维画面":"器物暂时无法载入",Me("#load-detail").textContent="请确认浏览器支持 WebGL 2 与本地模型文件正常。",Me("#retry").hidden=!1,Me("#load-progress").hidden=!0,Me("#manifest-status").textContent=`模型尚未就绪，仍可通过底部入口与${Nn.nickname}对话。`}}_c.addEventListener("webglcontextlost",r=>{r.preventDefault(),At=!1,ei(),cancelAnimationFrame(Ns),Me("#loader").hidden=!1,Me("#load-text").textContent="三维画面暂时中断",Me("#load-detail").textContent="请重新加载以恢复器物。",Me("#retry").hidden=!1});document.addEventListener("visibilitychange",()=>{Ss=0,Me("#experience").classList.toggle("page-hidden",document.hidden)});window.addEventListener("pagehide",()=>{cancelAnimationFrame(Ns),Qn.removeEventListener("change",Su),mi==null||mi.destroy(),Es==null||Es.destroy(),wu.destroy(),qa==null||qa.destroy(),_t==null||_t.dispose()});const Tu=r=>{or("view"),Tx(r)};mi=W0({onFocus:Tu,exhibit:Nn});Es=j0({onFocus:Tu,exhibit:Nn});const wu=X0({exhibit:Nn,onClose:()=>{or("view"),document.querySelector('[data-mode="journey"]').focus()}}),qa=bc?Sx({exhibit:Nn,exhibits:Ar,isReady:()=>At,captureArtifact:async()=>At?_t.captureArtifact():null}):null;ei();wx();
