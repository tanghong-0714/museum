export const zunBellsExhibits = {
 'four-ram-zun': {
  id:'four-ram-zun',theme:'zun',nickname:'肃礼',title:'四羊方尊',english:'FOUR RAMS · BRONZE AND ORDER',series:'重器新生',number:'10',category:'青铜之形 · 方圆有度',
  poem:['四角守住一方天地，','一束光，照见沉静的力量。'],description:['沿着方形口沿，看向四隅的羊首。','转至斜侧，让器身与纹饰慢慢分开。'],tags:['方器秩序','四隅羊首'],
  model:{desktop:'/models/four-ram-zun-web-desktop.glb',mobile:'/models/four-ram-zun-web-mobile.glb',rotationY:-Math.PI/4,roughness:.68,metalness:.28,exposure:1.05},
  focusTargets:['zun-rim','ram','zun-pattern','zun-foot'],
  anchors:[{label:'方形口沿',x:0,y:1.05,copy:'从斜上方观察开口。方形边线在转动中前后交错，先读清整体的方向。'},{label:'四隅羊首',x:.65,y:.28,copy:'转至一角，让羊首轮廓离开器身背景；比较头部与肩部的衔接。'},{label:'器身纹饰',x:0,y:-.25,copy:'让侧光经过器壁，沿纹样的重复与转折，观察方器表面的层次。'},{label:'器足与承托',x:0,y:-1.03,copy:'向下看器身如何收束，比较上部舒展与下部承托的比例。'}],
  welcome:'我是肃礼。先别急着读懂每一道纹。绕过一个角，看羊首怎样从器身里迎向你，我们再慢慢聊。',prompts:['我该先看四羊方尊的哪里？','为什么要转到斜侧看？','讲一段肃礼守夜的故事'],
  storyTitle:'把目光交给四个角',lead:'正面让你看见秩序，斜侧让你看见生命。方形的边线、羊首的曲线和器壁上的纹样，在一次缓慢的转动里，逐渐成为一个整体。',tabLabels:['观方圆','循纹路','听肃礼'],
  topics:{
   shape:{kind:'方圆相遇 / 01',brief:'从一个角开始。让羊首的曲线越过方器的边线，立体的关系便清楚起来。',action:'看向四隅羊首 ↗',target:'ram',paragraphs:['先看整体轮廓，再转到斜侧。比较口沿、肩部、器腹和底部的宽窄变化，避免一开始就被细密纹样带走目光。','羊首不是单独悬浮的装饰。观察它与器肩的连接，再把视线移回方形边界，就能读出动物形象与器物结构之间的配合。'],excerpt:'从方形看秩序，从曲线看生气。'},
   pattern:{kind:'纹样的节奏 / 02',brief:'把模型稍稍转动，让明暗沿器壁移动；凸起、凹陷与重复，会比正面照明更容易辨认。',action:'沿器身看纹路 ↗',target:'zun-pattern',paragraphs:['先找一组重复的线，再看它在哪里转折、在哪里遇见边角。不必给每一道纹立刻命名，观察本身就能建立对器物的认识。','当前呈现来自用户提供的数字模型。贴图中的颜色和表面痕迹可以帮助观看，但不能据此判断青铜原物的成分、锈蚀年代或具体修复经过。'],excerpt:'让光读出起伏，让距离读出整体。'},
   craft:{kind:'肃礼的守夜 / 03',brief:'“我站得很安静，不是没有话说，是想把四个方向的风都听完。”',action:'回看方形口沿 ↗',target:'zun-rim',paragraphs:['想象展厅熄灯以后，肃礼把四个角当作四扇小窗。第一扇留给风，第二扇留给月亮，第三扇留给尚未讲完的故事。','最后一扇，它留给明天的观众。“你不必懂很多才来见我，”肃礼说，“只要愿意绕过一个角，就会发现新的样子。”'],excerpt:'此段为器物拟人原创故事。'}
  },sourceTitle:'馆藏资料入口 · 中国国家博物馆',sourceUrl:'https://www.chnmuseum.cn/zp/',boundary:'',motto:'绕过一个角，再认识一次。',identity:'展示名称沿用用户文件“ 四羊方尊.glb ”。模型与馆藏原物的精确对应、比例、尺寸和采集信息尚未核实；昵称“肃礼”与故事为本项目创作。',
  decorHtml:'<div class="zun-order"><i></i><i></i><i></i><b></b></div>'
 },
 'zenghouyi-bells': {
  id:'zenghouyi-bells',theme:'bells',nickname:'和鸣',title:'曾侯乙编钟',english:'BRONZE BELLS · AN ORDER OF SOUND',series:'重器新生',number:'11',category:'钟架之间 · 静听有序',
  poem:['把高低排成一行，','让沉默，也有回响。'],description:['先看整组钟架，再走近一枚钟。','在悬挂与间隔之间，读出有序的节奏。'],tags:['整组全景','钟体细看'],
  model:{desktop:'/models/zenghouyi-bells-web-desktop.glb',mobile:'/models/zenghouyi-bells-web-mobile.glb',rotationY:-Math.PI/2,roughness:.72,metalness:.22,exposure:1.08,distanceDesktop:4.1},
  focusTargets:['bell-frame','bell-body','bell-hanging'],anchors:[{label:'整组钟架',x:-.46,y:.35,copy:'先把整组收进视野，观察横向展开与上下层次，再选择一枚钟细看。'},{label:'钟体轮廓',x:0,y:-.24,copy:'看一枚钟的轮廓与表面起伏。图像中的大小和颜色不能直接换算成真实音高。'},{label:'悬挂关系',x:.65,y:.06,copy:'沿钟体向上观察悬挂位置，看看钟与支架之间怎样留出空间。'}],
  welcome:'我是和鸣。今天先不用敲响我。退后一步看整组，再走近一枚钟，安静的排列里也藏着节奏。',prompts:['我该怎样欣赏这组编钟？','能从模型听出音高吗？','讲一段和鸣等待开场的故事'],
  storyTitle:'未响起的合奏',lead:'整组看，是横向铺开的秩序；走近看，是一枚枚各有轮廓的钟。让目光先远后近，在钟体与钟架之间，完成一次安静的巡游。',tabLabels:['观全景','看悬钟','听和鸣'],
  topics:{
   shape:{kind:'先远后近 / 01',brief:'先完整地看见，再选择一个细节。让钟架的横向展开成为这次观看的起点。',action:'看整组钟架 ↗',target:'bell-frame',paragraphs:['这件模型适合横向展开观看。先保留两端的呼吸空间，比较支架与钟体之间的层次，再逐步靠近中央或一侧的钟。','转到斜侧，观察钟体前后的错落与悬挂空间；回到正面，再看钟与钟之间的间隔。两种视角可以互相补充。'],excerpt:'全景看秩序，近景看关系。'},
   pattern:{kind:'一枚钟的停顿 / 02',brief:'沿着悬挂位置往下看：支架、钟体、空隙，各自占据一个位置，也为彼此留出余地。',action:'走近钟体 ↗',target:'bell-body',paragraphs:['选择一枚轮廓清楚的钟，观察外形、表面起伏以及与相邻钟体的差别，再向上找它的悬挂位置。无需一次把全部细节看完。','这份数字模型没有经过声学测量。当前页面提供视觉观看，不把模型尺寸、颜色或动画转换成原物音高，也不把合成音效当作文物原声。'],excerpt:'看得见的结构，不等于已经测得的声音。'},
   craft:{kind:'和鸣的开场 / 03',brief:'“最好的开场，也许是大家先安静一会儿，听见彼此还没有发出的声音。”',action:'看看悬挂的位置 ↗',target:'bell-hanging',paragraphs:['想象一个尚未开场的清晨，和鸣正在为风留座。小钟问：“我们什么时候开始？”大钟说：“等最后一位听众找到自己的位置。”','你走进来，脚步轻轻停下。和鸣没有急着响起，只把这片刻的安静交给你。“现在，”它说，“你也在这场合奏里面了。”'],excerpt:'此段为器物拟人原创故事，并非历史演出记录。'}
  },sourceTitle:'馆方资料入口 · 湖北省博物馆',sourceUrl:'https://www.hbww.org.cn/',boundary:'',motto:'先听见安静，再想象回响。',identity:'展示名称沿用用户文件“曾侯乙编钟.glb”。已确认文件呈现多层钟架与钟体，但模型对应的原物范围、钟数、比例、采集与声学信息尚未核实；不将其视为整套原物的完整复刻。昵称“和鸣”与故事为本项目创作。',
  decorHtml:'<div class="bells-resonance"><i></i><i></i><i></i><i></i><b></b></div>'
 }
};
