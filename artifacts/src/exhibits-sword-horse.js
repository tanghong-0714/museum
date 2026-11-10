// Named museum originals inform the text; supplied model provenance remains separate.
export const swordHorseExhibits = {
 'goujian-sword': {
  id:'goujian-sword',theme:'sword',nickname:'藏锋',title:'越王勾践剑',english:'A QUIET EDGE THROUGH TIME',series:'重器新生',number:'08',category:'青铜剑 · 静观锋芒',
  poem:['一线微光穿过岁月，','锋芒留在沉静之中。'],description:['从剑首到剑尖，让目光慢慢走过。','纹样与轮廓，藏着另一种力量。'],tags:['循纹读剑','藏锋见心'],
  model:{desktop:'/models/goujian-sword-web-desktop.glb',mobile:'/models/goujian-sword-web-mobile.glb',rotationY:-Math.PI/2,roughness:.66,metalness:.16,exposure:1.08},
  focusTargets:['hilt','guard','blade'],anchors:[{label:'剑首与握柄',x:0,y:-1.12,copy:'从剑首与握柄看起，转过侧面，比较圆与直、宽与窄之间的收束。'},{label:'剑格的边界',x:0,y:-.8,copy:'剑格位于握柄与剑身之间。放慢转动，看这道横向的边界怎样连接两种轮廓。'},{label:'剑身与纹样',x:0,y:.32,copy:'沿剑身向下，比较中脊、两侧轮廓与表面纹样。细节能否辨认，以当前模型实际呈现为准。'}],
  welcome:'我是藏锋。先别急着问我锋利不锋利，把光转到剑身上，看看纹样怎样沿着轮廓延伸。你想读一段有据可查的往事，还是听一个关于藏锋的故事？',prompts:['越王勾践剑的铭文写了什么？','怎样欣赏这把剑？','讲一段关于藏锋的故事'],
  storyTitle:'锋芒，也可以安静',lead:'目光从剑首出发，经过剑格，沿一条长长的轮廓走向剑尖。静默的器物不急着证明力量；它把纹样、比例与一段有据可查的往事，留给愿意停下的人。',tabLabels:['循剑首','读剑身','听藏锋'],
  topics:{
   shape:{kind:'一握 · 圆与直',brief:'剑首收住目光，握柄引出方向。先看整体的节制，再看每一道轮廓如何相接。',action:'走近剑首 ↗',target:'hilt',paragraphs:['观看一把剑，不必先从剑尖开始。把视线留在握柄，比较它与剑身的长短关系；再稍稍侧转，观察圆形端部与细长轮廓的衔接。','湖北省博物馆对原器的介绍记载，剑首向外翻卷呈圆盘形，内铸十一道精细同心圆。这是馆方记录的原器特征；当前模型能呈现到什么程度，需要以屏幕上的实际细节为准。'],excerpt:'力量的起点，也可以是一道安静的圆。'},
   pattern:{kind:'一读 · 纹中有名',brief:'菱形纹样让长长的剑身有了节奏，铭文则为原器留下身份的线索。',action:'循着剑身细看 ↗',target:'blade',paragraphs:['根据湖北省博物馆的原器介绍，剑身饰有黑色菱形纹样，靠近剑格处有两行鸟篆铭文：“越王鸠浅 自作用剑”。馆方说明，经考证，“鸠浅”就是勾践。','让模型缓缓侧转，观察光如何经过剑身。这里的欣赏从可见的形与纹开始；如果模型纹理不能清晰显示文字，就回到馆方资料阅读，不把模糊纹理猜成铭文。'],excerpt:'纹样引导目光，文字留下名字。'},
   craft:{kind:'一念 · 藏锋的回答',brief:'故事里的藏锋说，真正想守住的东西，值得先想清楚，再向前一步。',action:'看看剑格 ↗',target:'guard',paragraphs:['在这个为藏锋创作的小故事里，一位赶路的人走进安静的展厅，问它：“你是不是从来不会犹豫？”藏锋没有立刻回答，只让一线光停在剑格上。','“我也喜欢先停一下。”它说，“先知道自己想守住什么，再决定下一步往哪里去。”人离开时，脚步比来时慢了一点；那并不是退后，而是终于找到了自己的方向。'],excerpt:'先看清想守住的，再决定走向哪里。'}
  },sourceTitle:'原器资料 · 湖北省博物馆',sourceUrl:'https://www.hbww.org.cn/zgzb/p/4694.html',boundary:'',motto:'心有方向，锋芒自藏。',identity:'用户提供文件题名为“越王勾践剑”。页面引用湖北省博物馆对同名原器的公开介绍；未取得此模型的扫描来源、授权及精度档案，不将原器尺寸或保存状况作为模型的测量结论。藏锋及其对话故事为项目创作。',
  decorHtml:'<div class="sword-edge-light"></div><div class="sword-lozenges"><i></i><i></i><i></i><i></i></div>'
 },
 'galloping-horse': {
  id:'galloping-horse',theme:'horse',nickname:'凌风',title:'马踏飞燕',english:'ONE STRIDE BEYOND THE WIND',series:'重器新生',number:'09',category:'青铜奔马 · 一瞬凌风',
  poem:['把奔跑留在一瞬，','把远方留给想象。'],description:['绕到侧面，看四肢展开的节奏。','再俯身细看，轻盈如何落向足下。'],tags:['侧观奔势','一步生风'],
  model:{desktop:'/models/galloping-horse-web-desktop.glb',mobile:'/models/galloping-horse-web-mobile.glb',rotationY:-Math.PI/2,roughness:.8,metalness:.12,exposure:1.15},
  focusTargets:['horsehead','legs','hoof'],anchors:[{label:'昂首的方向',x:-.72,y:.69,copy:'沿头颈的方向看去，比较头部、颈部与躯干之间的转折，让奔跑先有一个方向。'},{label:'四肢的节奏',x:0,y:-.48,copy:'转到侧面，观察四肢的伸展与间隔，再从另一侧比较遮挡关系。'},{label:'足下的飞鸟',x:-.14,y:-1.0,copy:'把视线落向足下，观察马蹄与鸟形之间的连接，以及它们与上方身躯的关系。'}],
  welcome:'我是凌风，停在奔跑的一瞬。你可以绕着我转一圈：从昂起的头，到舒展的四肢，再看足下那一点轻巧。今天的你，是想赶路，还是想先在风里歇一会儿？',prompts:['怎样欣赏马踏飞燕的姿态？','为什么要从侧面看奔马？','讲一段关于凌风的故事'],
  storyTitle:'风经过，奔跑留下',lead:'沿头颈的方向望去，四肢把一个瞬间拉开。再把目光放低，去看马蹄与足下鸟形的关系：向前的动势与落下的支点，在同一件器物里相遇。',tabLabels:['望远方','看奔势','听凌风'],
  topics:{
   shape:{kind:'一望 · 向前的方向',brief:'头颈先指向远方，身躯才有了追随的方向。绕过正面，让侧影慢慢展开。',action:'走近头颈 ↗',target:'horsehead',paragraphs:['先从完整轮廓看起。比较头颈与躯干的朝向，再轻轻旋转模型，看看同一姿态在正面与侧面有怎样不同的张力。','这份观看不需要先背下一串名词。留意轮廓在哪里上扬、在哪里收束，看看哪个角度最能让你感到“正在向前”，再把它转回来，与第一次的印象比较。'],excerpt:'先有一个方向，再把身体交给风。'},
   pattern:{kind:'一步 · 动与静之间',brief:'从四肢的间隔读出奔跑，再顺着马蹄找到足下的鸟形。轻盈不是没有落点，而是让落点成为观看的惊喜。',action:'看看四肢姿态 ↗',target:'legs',paragraphs:['侧面便于观察四肢前后的伸展；转到斜前或斜后方，又能看清原本重叠的轮廓。两个角度连起来，姿态的空间关系才慢慢完整。','继续把目光移向足下，看马蹄与鸟形如何相接。模型适合观察造型关系，但单凭屏幕外观无法推断原器内部结构、重心位置或铸造工序。'],excerpt:'奔跑的方向很远，目光的落点很近。'},
   craft:{kind:'一阵风 · 凌风的邀请',brief:'故事里的凌风并不催你更快。它说，奔跑也可以只是因为，前面的风很好。',action:'看看足下飞鸟 ↗',target:'hoof',paragraphs:['在为凌风创作的故事里，一个总在赶时间的人问它：“你这样跑，不累吗？”凌风想了一会儿，反问：“如果没有人催，你最想往哪里去？”','那人第一次没有立刻说出答案。凌风便陪他看了一会儿远方：“不急。等你想好了，我们再出发。”原来最自由的一步，不一定最快，却可以由自己决定。'],excerpt:'等你想好了，我们再出发。'}
  },sourceTitle:'馆方网站 · 甘肃省博物馆',sourceUrl:'https://www.gansumuseum.com/',boundary:'',motto:'不必追赶每一阵风。',identity:'用户提供文件题名为“马踏飞燕”。当前未取得该模型对应的扫描、测量及馆藏登记档案；页面以模型造型的观看引导为主，馆方网站链接仅作进一步查阅入口。凌风及其对话故事为项目创作，不据模型推断具体鸟种、年代、尺寸或铸造工艺。',
  decorHtml:'<div class="horse-wind"><i></i><i></i><i></i></div><div class="horse-horizon"></div>'
 }
};
