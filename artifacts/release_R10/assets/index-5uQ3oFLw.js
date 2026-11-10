(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Th={"goujian-sword":{hilt:{copy:"把视线从剑尖暂时收回来，先看握柄与剑首。细长的柄与端部的圆形变化，把向外延伸的轮廓稳稳收住；它既是整把剑的起点，也提供了一个观察比例的尺度。模型能辨认到哪些细节，还需以实际画面为准。",look:"转到斜侧面，比较剑首、握柄与剑身的宽窄和衔接。"},guard:{copy:"剑格横在握柄与剑身之间，像给一条长线加上了一次停顿。沿它的边缘观察，两侧的展开与中间的收束，使上下两段轮廓有了清楚分界。稍微转动，原先只见宽度的部位，还会显出厚薄与前后关系。",look:"绕过正面，看看这道横向边界的侧缘，再沿握柄回到剑身。"},blade:{copy:"长长的剑身很容易让目光一口气滑向剑尖，不妨先停在中段。比较中脊与两侧的明暗，再辨认表面纹样怎样重复。如果模型没有清楚记录铭文，就不要把模糊色块猜作文字，原器文字应回到馆方资料核对。",look:"让剑身缓慢侧转，先追踪中脊的光，再观察两侧边线的变化。"}},"galloping-horse":{horsehead:{copy:"头颈先给奔跑指出一个方向，躯干再顺势延伸。正面看较为集中，转到侧面，颈部上扬与身体前行的关系才真正展开。像读一句话的开头，先找到这道朝向，再顺着轮廓看向整个身姿。",look:"从正面绕到侧面，比较头、颈、肩之间哪一道转折最醒目。"},legs:{copy:"四肢的伸展与间隔，把一个静止模型变成了有节奏的瞬间。侧面能读出前后方向，斜前方则会出现新的遮挡和留白。把两个角度连起来看，你会发现奔跑感不只来自肢体本身，也来自肢体之间的空间。",look:"先看完整侧影，再略转一点，数一数哪些轮廓重叠、哪些分开。"},hoof:{copy:"目光最终落向足下，马蹄与鸟形的相接处成为整件造型的一个惊喜。上方展开的奔势，在这里收成很小的观看落点。模型可以帮助比较形体关系，但不能单凭画面推断原器内部支撑或实际重心。",look:"靠近足下连接处，再退回整体视角，比较这一点与上方身躯的大小。"}},"four-ram-zun":{"zun-rim":{copy:"方形口沿先把器物的方向交代出来。正面看是一道展开的边，转到斜上方，前后边线交错，开口的空间才慢慢显现。它像给复杂的器身立下一条清楚的秩序，让目光有一个可以返回的起点。",look:"稍微抬高视角，找齐四边，再比较口沿与下方器身的宽度。"},ram:{copy:"四隅的羊首让方器的转角变得生动。不要只盯着脸部，沿头部向后看，轮廓怎样与器肩相接，才是这一处最值得细读的关系。转至斜侧面，让羊首脱离器身背景，突出与收束便会更容易辨认。",look:"把一角转向自己，沿羊首外缘观察，再比较相邻一角的朝向。"},"zun-pattern":{copy:"器壁上的纹饰随着方形结构展开，重复的线条与局部转折组成繁密的层次。先看较大的分区，再选一小片纹样细读，像先找到篇章、再读字句。侧光经过时，高低起伏会比正面颜色更有提示作用。",look:"选一处清晰纹样，慢慢侧转，比较它的凸起与周围凹处。"},"zun-foot":{copy:"从舒展的上部向下看，器身逐渐收束，最后落向承托的位置。这一段不如羊首醒目，却让整体比例安定下来。将上部和下部放在一起比较，方形轮廓中的宽窄变化，也会变成可以感受到的节奏。",look:"先看完整侧影，再移向下方，比较器足与器肩的宽窄关系。"}},"zenghouyi-bells":{"bell-frame":{copy:"面对整组编钟，先别急着找某一枚钟。让视线沿横向钟架走过，再看上下的层次与钟体之间的间隔，整组的秩序便会浮现。像在乐声响起之前先看见座次，静止的排列也有疏密、重复与变化。",look:"先将整组收进视野，再选择相邻两枚钟，比较它们的位置和间距。"},"bell-body":{copy:"从整组中选一枚钟，观察外轮廓怎样从上部延伸到底缘，再看表面可辨认的起伏。转过一点，原本重叠的线条会分开，钟体的体积也更清楚。屏幕上的大小和颜色不能直接换算成真实音高。",look:"选一枚轮廓清楚的钟，比较正面与斜侧面，再回看它在整组中的位置。"},"bell-hanging":{copy:"沿着钟体向上看，悬挂位置把钟与支架联系起来，也在两者之间留下空隙。真正有意思的不只是连接的一点，还有邻近钟体如何避开、钟架如何延伸。这里引导观察模型关系，不据外观判断原器的承重细节。",look:"追踪一枚钟到上方支架的连接，再转动模型，看看被遮住的间隙。"}},"phoenix-ewer":{spout:{copy:"先沿着壶肩看向前方：凤颈抬起，鸟喙顺势成为出水的壶流。一条线既交代了器物的用途，也留下了昂首的姿态。转到侧面，凤首、细颈与饱满壶腹之间的大小对比会更清楚。",look:"轻轻转到侧面，试着用目光描一遍“壶肩—凤颈—鸟喙”的轮廓。"},handle:{copy:"另一端的壶柄像一笔回旋的线，把凤尾卷成了可以穿过手指的空间。别只看外缘，柄孔里的留白同样参与了造型；它与前方伸出的凤首，一收一放，让扁圆壶身显得轻巧。",look:"从斜侧面看柄孔，比较卷曲末端与壶身相接的位置。"},pattern:{copy:"白瓷像展开的纸，青花沿着鼓起的壶腹延伸。远看先读出花与羽的整体节奏，靠近再辨认浓淡与线条。纹样会随着曲面转向、收窄，仿佛一幅需要你亲手展开的画。",look:"缓慢转动壶身，找一处密集纹样，再比较旁边的白色留空。"},neck:{copy:"目光回到壶肩上方，短颈把宽阔的腹部收束起来，口沿又轻轻向外打开。这里的细小转折很容易被凤首抢走注意，却决定了器物顶部的节奏，也让不同部位的纹饰有了分界。",look:"稍微抬高视角，看口沿、短颈与肩部怎样一层层衔接。"}},"bronze-head":{eyes:{copy:"先不急着猜它的表情。眉线在上方压出一道阴影，眼眶的凸起又把光托了起来，凝望感便从这些起伏中出现。正面看较为对称，转过一点，一侧眼角会先沉入暗处，同一张面孔也像换了神情。",look:"左右缓慢转动，比较两侧眼眶何时变亮、何时落入阴影。"},nose:{copy:"鼻梁像面庞中央的一道脊线，将左右两侧分开。鼻翼与面颊的交接并不只靠颜色，而是靠高低转折形成明暗。顺着这条线向下看，你会发现简练的轮廓也能让面孔很有力量。",look:"转到三分之二侧面，看看鼻梁突出多少、面颊又怎样向后收。"},ears:{copy:"耳部位于正面与侧面的交界，像给这张面孔加上了两处停顿。正面只能看到一部分，绕到侧面，耳缘与头部的连接才慢慢展开。它提醒我们：一张头像的形体，远不止正面的眉眼。",look:"绕向一侧，沿耳缘向下看，再回到正面比较轮廓的变化。"},patina:{copy:"青绿、浅褐与深色斑块交错在表面，像一幅没有标注的地形图。转动时，凸起处先接住光，凹处保留阴影，颜色与体积便叠在一起。这里展示的是模型记录的色层，不能仅凭锈色判断年代或埋藏经历。",look:"选一块浅色斑痕，转动前后比较：变化来自表面颜色，还是光照？"}},"cloud-mirror":{boss:{copy:"镜背中央的凸起先把目光收向圆心，周围纹样再从这里向外展开。它不是画在表面的一枚圆点，而是有高度的结构；从斜侧面看，镜钮与平缓镜背之间的起伏尤其清楚。",look:"斜着看中央凸起的侧缘，再用“翻面”比较镜子的另一面。"},arcs:{copy:"连绵的弧线把圆形镜背分出了节奏：大弧线负责组织轮廓，细密地纹填入其中。像读一段有轻重的乐句，先看大的转折，再回到细部，才不容易被满面的纹样带走。",look:"沿圆周追踪相邻弧线，找出它们如何连接，再观察弧线内侧的细纹。"},rim:{copy:"目光移到最外侧，镜缘像一道边界，把繁密的镜背收在圆形之内。转到侧面，原本宽阔的圆面会逐渐收成一条薄线；再转回来，纹样重新展开，器物的厚度与平面感形成鲜明对比。",look:"从正面转向侧面，留意边缘厚度与圆周轮廓；也可翻面比较两侧。"}},"liquan-bodhisattva":{face:{copy:"先看头部外轮廓，再把目光收回眉眼与面庞。头饰的层次较密，面容的转折相对舒缓，两种节奏并置，让视线自然停在脸上。稍微转向侧面，正面不明显的高低关系会逐渐显露。",look:"沿“头饰—额头—眉眼—面颊”向下看，比较繁与简的变化。"},ornaments:{copy:"衣饰线条沿身体向下延伸，有的凸起接住光，有的浅刻留在阴影里。它们既是表面的细节，也帮助我们读懂身体的姿态。不要急着数纹样，先找出线条怎样绕过肩部、怎样在下方聚拢。",look:"转一点角度，跟随一条衣纹，看它在何处转弯、分开或消失。"},pedestal:{copy:"层叠的莲瓣把人物与底部连接起来：上方的竖向身姿，在这里转成向外铺开的轮廓。每片瓣缘的明暗又带出前后关系，像为造像安排了一次稳稳的落脚。",look:"放低视角，比较前后两层莲瓣，再看足部怎样落到底座上。"}},"longquan-figure":{face:{copy:"人物的面容被包在青色的整体之中，眉眼不必用很重的线条，也能借细微起伏显出神情。先看正面，再稍转一点，让侧光把额头、鼻部与面颊逐次描出来，安静的表情便有了层次。",look:"慢慢左右转动，寻找眉眼最清楚的角度，再比较头饰的轮廓。"},ornaments:{copy:"青色在衣纹的转折间并不完全相同：凸起与凹处、受光与背光，让表面有了深浅变化。衣褶把颜色引向不同方向，好像一层青色的水沿着形体缓缓流过；具体釉层情况仍需对照实物观察。",look:"选一条衣褶，对比它的脊线与凹槽，分辨颜色和光影各起什么作用。"},pedestal:{copy:"向下看，人物的轮廓最终在底部收住。这里不像面容那样醒目，却能看清整体如何获得稳定的承托；模型中底部与衣饰的色层、形状变化，也给观看留下了另一组线索。",look:"从侧面比较底部宽度与上方身形，留意相接处的转折。"}},"pipa-figurine":{face:{copy:"发髻先勾出头部轮廓，面容再从下方显露。头部微微倾向怀中的乐器，让这件静止的陶俑有了正在倾听的感觉。那是观看时产生的联想，真正可细看的，是头、颈与肩之间如何相接。",look:"沿发髻向面庞看，再比较头部倾斜方向与琵琶的方向。"},ornaments:{copy:"琵琶斜抱在身前，双手与乐器围出一组紧凑的关系。器身、琴颈和手臂的方向并不相同，却一起把视线带向演奏的位置。声音没有留下，姿态却让人忍不住想象下一下拨弦。",look:"先找出琴颈与琴身，再沿两只手的方向，看它们分别停在哪里。"},pattern:{copy:"衣褶从身体转折处展开，到了下方又汇成较密的起伏。陶色在凸起处显亮、在缝隙里变深，像给衣料留下了轻重。现有色斑与纹理只按模型观看，不把它们当作原始彩绘的完整复原。",look:"沿一条衣褶向下，看看它如何与相邻褶线相遇，再转到侧面比较。"}},"speechless-buddha":{face:{copy:"眼睑的弧度、嘴角的走向与脸颊的起伏，共同组成了这份“淡定”。轻轻转动，同一张脸有时像在听，有时像欲言又止。这些是今天观看者的趣味联想，不是对造像原始含义的定论。",look:"先遮去心里的表情包印象，只看眼睑与嘴角，再说说你读到了什么。"},ornaments:{copy:"橙色、青色与浅色衣饰相互衬托，先在远处形成大块配色，靠近才看见衣纹的转折。顺着颜色交界慢慢走，能发现色块与形体并不总是重合，也因此多了一层可以细看的节奏。",look:"找一处颜色交界，比较它是否沿着衣褶延伸，再看光影怎样穿过。"},pedestal:{copy:"端坐的身姿最终落在起伏的岩石底座上。上方轮廓较为集中，下方石面则向两侧展开，给人物一个稳妥的支撑。绕到侧面，座面、衣饰与岩石之间的前后关系会比正面更清楚。",look:"从衣摆向下看，找出人物与岩石相接的地方，再比较两侧轮廓。"}}};function wh(i,e){var t,n;return((t=Th[i.id])==null?void 0:t[i.focusTargets[e]])||{copy:((n=i.anchors[e])==null?void 0:n.copy)||"",look:"转动模型，从不同角度观察这一处细节。"}}const Ah={"cloud-mirror":{id:"cloud-mirror",theme:"mirror",nickname:"照影",title:"八连弧纹铜镜",english:"EIGHT ARCS · ONE REFLECTION",series:"重器新生",number:"03",category:"云纹地八连弧纹铜镜",poem:["把云收进一轮圆，","把相逢留给你。"],description:["连弧相接，细纹在铜色中回旋。","翻过这一面，去看一轮圆的两种神情。"],tags:["一面观纹","一面照影"],model:{desktop:"/models/cloud-mirror-web-desktop.glb",mobile:"/models/cloud-mirror-web-mobile.glb",rotationY:-Math.PI/2,roughness:.72,metalness:.2,exposure:1.12},flip:!0,focusTargets:["boss","arcs","rim"],anchors:[{label:"中央镜钮",x:0,y:0,copy:"圆心处的凸起将视线收拢。转过侧面，看看镜钮与镜背的高度差。"},{label:"连弧与地纹",x:-.6,y:.45,copy:"把目光沿弧线缓缓移动，比较大轮廓与细密底纹的节奏。"},{label:"镜缘轮廓",x:.99,y:.3,copy:"靠近圆周，再转动模型：薄薄的侧缘把两个面连在一起。"}],welcome:"我是照影。别急着寻找镜中的自己，先看看我背面的云与弧线。转过一面，一轮圆，也可以有两种心情。",prompts:["八连弧纹是什么？","我该先看铜镜的哪里？","讲一段关于照影的故事"],storyTitle:"一轮圆里的相逢",lead:"一面向人，一面向纹。目光从圆心启程，循着连弧走过一圈，又回到最初的相逢。翻动铜镜，像翻开一封没有署名的信。",tabLabels:["循弧线","翻两面","听照影"],topics:{shape:{kind:"纹样观察 · 文学演绎 / 01",brief:"一段弧线牵住下一段，围出一圈安静的节奏。细纹在其间铺开，仿佛云影经过水面，轻轻一动，又停在了铜上。",action:"沿着连弧看 ↗",target:"arcs",paragraphs:["先别急着看完整个圆。挑一段弧线，顺着它的方向慢慢走：弧与弧在相接处转身，细小的纹理则填满轮廓之间的空隙。大的曲线让目光停住，小的纹样让目光继续。","如果把圆心想作一处安静的岸，围绕它的连弧便像一圈水湾。每一湾都朝向中心，又与邻近的一湾相连。转动时，光替你重新描过这条路。"],excerpt:"近名类型参考：广东大观博物馆藏“战国-云雷纹地八连弧纹镜”，材质为青铜。"},pattern:{kind:"器形观察 · 文学演绎 / 02",brief:"圆的两面，藏着不同的相见方式。纹样的一面让目光向内走，另一面则把想象送回观看它的人。轻轻翻面，故事便转了一页。",action:"看看中央镜钮 ↗",target:"boss",paragraphs:["将铜镜略微转侧，先看薄薄的边缘，再看镜背中央凸起的镜钮。原先平铺的纹样突然有了高度，圆面也显出起伏。","不妨想象一个尚未明亮的清晨：有人将一轮圆托在掌中，整理衣襟，再匆匆出门。镜子留在原处，背面的花纹却像刚刚醒来，把清晨的光又留了一会儿。"],excerpt:"圆的两面，藏着不同的相见方式。"},craft:{kind:"照影的来信 · 原创故事 / 03",brief:"“你问我记住过多少张脸。我更愿意记住，那些认真看向自己的时刻。”照影把答案放在一轮圆里，等你再转过来。",action:"查看故事取材 ↗",paragraphs:["想象闭馆后的一个夜晚。照影问窗外的月亮：“你每天被那么多人望着，会不会累？”月亮没有回答，只把一小片光放在它的边缘。照影便明白，有些陪伴，不需要把话说满。","第二天，有人在它面前停下，第一次认真看清那些细细的纹。照影想：原来相见也有两面，一面是我被你看见，一面是你愿意慢下来。"],excerpt:"相见也有两面：一面是我被你看见，一面是你愿意慢下来。"}},sourceTitle:"相关类型 · 广东大观博物馆",sourceUrl:"https://gddaguanmuseum.com/pd.jsp?m2382pageno=2&id=449",boundary:"近名馆藏作类型参考；模型身份尚未确证。故事为文学演绎。",motto:"一面看见纹，一面遇见你。",identity:"用户文件名为“云纹地八连弧纹铜镜”。近名馆藏条目记为战国青铜镜，尚未确认与本模型为同一件；不套用该条目的年代、尺寸或收藏地点。"},"liquan-bodhisattva":{id:"liquan-bodhisattva",theme:"stone",nickname:"静照",title:"菩萨立像",english:"STILLNESS HELD IN STONE",series:"重器新生",number:"04",category:"数字造像 · 石色清光",poem:["让光走过石的纹理，","让心停留片刻。"],description:["雕痕承接微光，轮廓向静处延伸。","衣纹层层垂落，静立也有从容的姿态。"],tags:["循光观石","静处有声"],model:{desktop:"/models/liquan-bodhisattva-web-desktop.glb",mobile:"/models/liquan-bodhisattva-web-mobile.glb",rotationY:-Math.PI/2,roughness:.94,metalness:0,exposure:1.16},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"造像上部",x:0,y:.8,copy:"让光从侧面走过，观察上部轮廓和雕刻的转折。"},{label:"衣饰与雕痕",x:0,y:.1,copy:"沿着衣饰的线条向下看，比较浅刻、凸起与阴影的层次。"},{label:"莲瓣底座",x:0,y:-1.13,copy:"低头看看底座的层叠莲瓣，再从侧面观察足部与底座相接的轮廓。"}],welcome:"我是静照。你可以先不问我什么，让目光沿着石上的线条走一会儿。等你愿意，我再陪你读一段造像的故事。",prompts:["礼泉寺的参考造像有什么特点？","怎样欣赏这尊立像？","讲一段关于静照的故事"],storyTitle:"石上的微光",lead:"石的表面并非沉默。转折接住明暗，线条引导视线，舒展的姿态留下想象的余地。看一尊造像，也是在学习如何停下来。",tabLabels:["观轮廓","循衣纹","听静照"],topics:{shape:{kind:"造像观察 · 文学演绎 / 01",brief:"光从一侧缓缓经过，先照亮突起的轮廓，再沉入细小的雕痕。石没有移动，表情却随着你的观看一点点舒展开来。",action:"看看上部轮廓 ↗",target:"face",paragraphs:["想象一束清晨的光进入安静的空间。它不急着照亮所有地方，只先落在一处凸起上，再慢慢滑向凹处。石面由此有了不同的深浅，原来平静的轮廓也有了呼吸般的节奏。","沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。最后看向脚下层叠的莲瓣，整个身形便在这次观看里连成一体。"],excerpt:"石没有移动，表情却随着观看一点点舒展开来。"},pattern:{kind:"石雕之美 · 观察故事 / 02",brief:"一道线从光里起笔，另一道线在阴影里收尾。衣饰不曾随风摆动，却让石头有了轻与重、疏与密的变化。",action:"沿衣饰细看 ↗",target:"ornaments",paragraphs:["看衣饰时，试着把目光放慢：突起的地方先亮起来，低处则留住暗色。雕刻以这样的高低差，让坚硬的材料生出层次。","在想象中的工坊里，匠人收起工具，退后一步。刚才还显得繁密的线条，隔着一段距离忽然连成整体。你今天转动模型时，也在重复这种由近及远、重新看见的动作。"],excerpt:"相关馆藏参考：故宫展览资料描述礼泉寺出土菩萨像的花冠、璎珞与精细雕刻。"},craft:{kind:"静照的片刻 · 原创故事 / 03",brief:"“如果今天有些事还没想明白，先陪我站一会儿。”静照不急着补全你的句子，只把一小片安静留在光里。",action:"查看相关馆藏资料 ↗",paragraphs:["想象一个阴天的下午，有人带着没解开的心事来到这里。他沿着石上的线条看了很久，忽然问：“一直安静着，也能被好好看见吗？”静照没有替他回答，只让那束微光停在低垂的衣纹上。","离开的时候，他又回头看了一眼。心事仍在那里，微光也仍在那里。他终于发觉，自己不必先变得毫无缺憾，才能被温柔地对待。"],excerpt:"不必先变得毫无缺憾，才能被温柔地对待。"}},sourceTitle:"相关馆藏 · 故宫博物院展览资料",sourceUrl:"https://www.dpm.org.cn/subject_sino/project/china/98564.html",boundary:"模型为完整立像，与礼泉寺参考残像外形不同；资料作相关参照。叙事为文学演绎。",motto:"循着石上的光，留一刻安静。",identity:"原文件题名为“隋代礼泉寺遗址出土菩萨残像”，实际模型为带莲瓣底座的完整立像，与故宫资料中腰以上的礼泉寺残像不同。页面按模型展示为菩萨立像；参考残像的隋代年代、1987年出土记录及馆藏信息不归给本模型。"}},_c={titleLines:["龙泉窑青瓷","露胎人物塑像"],id:"longquan-figure",theme:"celadon",nickname:"青隐",title:"龙泉窑青瓷露胎人物塑像",english:"CELADON · EARTH AND EMBER",series:"重器新生",number:"05",category:"龙泉青瓷 · 釉与胎的相逢",poem:["一半青山，一半泥土，","窑火替我留住温柔。"],description:["青釉如山色，露胎似暖土。","转过一寸光，看两种质地如何相依。"],tags:["青釉流光","露胎见真"],model:{desktop:"/models/longquan-figure-web-desktop.glb",mobile:"/models/longquan-figure-web-mobile.glb",rotationY:-Math.PI/2,roughness:.66,metalness:0,exposure:1.12},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"人物面容",x:0,y:.8,copy:"从眉眼的起伏看向两侧轮廓。转过一点，让光描出面庞与头饰的层次。"},{label:"釉色与衣纹",x:0,y:-.35,copy:"沿衣纹看青色的深浅，在转折与凹处寻找积釉带来的层次。"},{label:"足下与底部",x:0,y:-1.13,copy:"将目光向下移，比较底部的胎色、釉色和整体的承托关系。"}],welcome:"我是青隐。身上的青，替我留住山色；露出的泥土，替我记得来处。你愿意陪我等一束光，慢慢经过衣纹吗？",prompts:["龙泉青瓷怎样烧成？","我该先看塑像的哪里？","讲一段青隐与窑火的故事"],storyTitle:"从泥土到一抹青",lead:"泥土先学会安静，窑火再教它发光。青色沿着衣纹停驻，暖褐从釉外探出头来。一冷一暖之间，青隐把漫长的等待，讲成一个温柔的故事。",tabLabels:["观胎釉","循窑火","听青隐"],topics:{shape:{kind:"胎釉之间 / 01",brief:"青色并没有覆盖一切。露出的胎土像一小段山路，让目光从清凉的釉面，走回温暖的土地。",action:"走近人物面容 ↗",target:"face",paragraphs:["先看面容，再看衣饰。把目光停在两种颜色相遇的边缘，光滑与朴拙、清凉与温暖，便有了各自的声音。","青隐说：“不必把所有地方都染成同一种颜色。那些留白，也能替我说话。”你轻轻转动它，原本平静的轮廓便在光里有了新的神情。"],excerpt:"釉色与胎色相接，像青山与泥土相依。"},pattern:{kind:"青色诞生 / 02",brief:"火把泥土送进漫长的变化。火色、温度与等待，合力留下青釉如玉的光泽。",action:"沿着衣纹看釉色 ↗",target:"ornaments",paragraphs:["龙泉青瓷的传统烧制技艺，来自浙江龙泉。匠人对火候的把握，既依靠温度，也依靠对火焰颜色的观察。青色的出现，连着一代代人的经验。","青隐把窑想作一场长夜。火光在外面奔走，它在里面慢慢安静。等窑门再次打开，风从青色的衣纹上经过，像山间第一次吹来的晨风。"],excerpt:"2009年，龙泉青瓷传统烧制技艺列入联合国教科文组织人类非物质文化遗产代表作名录。"},craft:{kind:"青隐的山色 / 03",brief:"“你问我最喜欢哪一种青。我喜欢雨停之后，山还没有完全醒来的那一种。”",action:"看看青色背后的技艺 ↗",paragraphs:["有一天，青隐收到一片落叶。叶子问：“你经过那么热的火，为什么还是这样温柔？”青隐想了很久，答道：“也许是因为，火离开以后，我终于懂得珍惜每一阵凉风。”","于是它把落叶留在身旁。白天听光走过，夜里听风绕行。等你走近，它便把这份慢慢积攒的安静，分一点给你。"],excerpt:"经过火，也依然愿意温柔。"}},sourceTitle:"龙泉青瓷传统烧制技艺 · UNESCO",sourceUrl:"https://ich.unesco.org/en/RL/traditional-firing-technology-of-longquan-celadon-00205",boundary:"",motto:"让青色安放目光，让泥土留住温度。",identity:"用户文件题名为“元代龙泉窑青瓷露胎人物塑像”。本展示未核实模型对应的具体馆藏原物，元代仅为文件题名信息，不扩展具体窑址、人物身份、出土地点与尺寸。",decorHtml:'<div class="celadon-glaze"><i></i><i></i><i></i><b></b><span></span></div>'},vc={id:"pipa-figurine",theme:"pipa",nickname:"弦月",title:"彩绘陶弹琵琶女俑",english:"A MELODY HELD IN CLAY",series:"重器新生",number:"06",category:"彩绘陶俑 · 怀抱弦音",poem:["指尖停在一曲之间，","余音刚好落向你。"],description:["陶色留住衣褶，也留住抱琴的姿态。","绕过一缕微光，听见静默中的回响。"],tags:["抱琴观姿","静中听弦"],model:{desktop:"/models/pipa-figurine-web-desktop.glb",mobile:"/models/pipa-figurine-web-mobile.glb",rotationY:-Math.PI/2,roughness:.9,metalness:0,exposure:1.12},performance:{rotationY:0,desktop:"/models/pipa-alive-desktop-R31.glb",mobile:"/models/pipa-alive-mobile-R31.glb"},focusTargets:["face","ornaments","pattern"],anchors:[{label:"面容与发髻",x:0,y:.87,copy:"先看面容与发髻的轮廓，再转过一点，让侧光描出头部的起伏。"},{label:"怀中琵琶",x:.03,y:-.36,copy:"顺着双手与怀中乐器的关系，看抱持、停顿与倾斜组成的节奏。"},{label:"衣褶与陶色",x:0,y:-1,copy:"让目光沿衣褶向下，留意陶色在凸起与阴影之间的变化。"}],welcome:"我是弦月。你来得正好，这一曲还剩最后一个停顿。先别急着找声音，看看我怀里的琵琶，再把今天想说的话，轻轻放在这儿。",prompts:["琵琶的名字和弹奏有什么关系？","怎样欣赏这尊抱琴女俑？","讲一段关于弦月的故事"],storyTitle:"把一曲留给路过的人",lead:"指尖停住，衣褶仍像记得风的方向。她把琴抱得很近，却把一曲的余地留得很远：远到穿过安静的展厅，刚好让今天的你听见。",tabLabels:["望眉眼","循琴身","听弦月"],topics:{shape:{kind:"一眼 · 眉间月",brief:"她没有催促下一声弦响。微光先走过发髻，再落到眉眼，像是等一个迟来的人坐稳，才肯继续这一曲。",action:"走近眉眼 ↗",target:"face",paragraphs:["在故事里的小小庭院，月亮还没有升高。弦月先抬眼看看门口，又把视线放回琴上。她总觉得，一首曲子开始以前，应该给晚到的人留一个不慌不忙的位置。","走近些，沿面容、发髻与肩线看过去。转动女俑，明暗会重新组织这份安静：有些角度像在倾听，有些角度又像刚刚记起一句话。"],excerpt:"一曲未起，先为你留一个位置。"},pattern:{kind:"一抱 · 弦上风",brief:"怀中的琴把手势与身姿连成一句话。一只手留住方向，另一只手留住停顿，连沉默都像有了节拍。",action:"看看怀中琵琶 ↗",target:"ornaments",paragraphs:["想象晚风从门缝经过，琴声便追着它走出一点，又折回来。弦月不想把每个角落都填满；她知道，有时最动人的一瞬，是下一声还没有抵达。","顺着抱琴的动作看，手、琴身与衣褶彼此呼应。乐器成为姿态的中心，也让陶俑的静止有了方向。把模型轻轻侧转，再看这几个轮廓如何相接。"],excerpt:"让一声落下，也让另一声有地方开始。"},craft:{kind:"一曲 · 今夜来信",brief:"“如果今天没有好好说完一句话，就把它留在我的曲子里。”弦月把最后一个音放轻，等它慢慢走到你身旁。",action:"循着陶色细看 ↗",target:"pattern",paragraphs:["故事里，庭院最后一位听众迟迟不肯离开。他说，自己走了一整天，仍不知道该把心事放在哪里。弦月没有问缘由，只把那一段曲子重新弹了一次。这一次，停顿比旋律还要长。","想象他终于起身时，月光恰好落在衣袖边缘。心事没有突然消失，却也不再挤成一团。弦月把琴抱回怀里：原来陪一个人坐一会儿，也可以是一首曲子。"],excerpt:"陪一个人坐一会儿，也可以是一首曲子。"}},sourceTitle:"琵琶文化 · 克利夫兰艺术博物馆",sourceUrl:"https://www.clevelandart.org/art/1918.344",boundary:"",motto:"曲子可以停，倾听不必散场。",identity:"用户提供文件题名为“彩绘陶弹琵琶女俑”。未取得对应实物的馆藏登记、年代、尺寸及出土记录；不把器物类型或其他馆藏的记录归给本模型。弦月为本项目创作角色。",decorHtml:'<div class="pipa-strings"><i></i><i></i><i></i><i></i><b></b></div><div class="pipa-ribbon"></div>'},xc={id:"speechless-buddha",theme:"speechless",nickname:"淡淡",title:"无语佛",english:"A CALM FACE, A BUSY MIND",series:"重器新生",number:"07",category:"众生表情 · 默默接住",poem:["表面风平浪静，","内心弹幕经过。"],description:["眉眼替你保持淡定。","没说出口的那句，来这儿慢慢说。"],tags:["淡定接话","温柔吐槽"],model:{desktop:"/models/speechless-buddha-web-desktop.glb",mobile:"/models/speechless-buddha-web-mobile.glb",rotationY:-1.5707963267948966,roughness:.83,metalness:.03,exposure:1.03},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"淡定的眉眼",x:0,y:.87,copy:"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。转一点角度，同一张脸又像正在默默接话。"},{label:"衣饰与配色",x:0,y:-.23,copy:"沿着橙色、青色与浅色衣饰看过去，留意颜色之间的交接，以及衣褶怎样接住光。"},{label:"岩石底座",x:0,y:-1.05,copy:"目光沿着端坐的身姿向下，看看岩石底座的轮廓与起伏。缓缓转到侧面，留意座面怎样托住人物。"}],welcome:"我是淡淡。表情没什么波澜，心里已经打完一段草稿。今天想吐槽什么？你先说，我听着。人生偶尔卡一下，也不用立刻刷新。",prompts:["你和网上的无语佛有什么关系？","今天有点累，陪我吐槽两句","讲一段淡淡的下班故事"],storyTitle:"淡淡的人间观察",lead:"有些话，不必急着讲通。有些天，能好好走完就已经很忙。淡淡把表情留在原处，把一小块安静留给你。坐一会儿，让心里的弹幕先飘过去。",tabLabels:["看这表情","今日缓冲","终于下班"],topics:{shape:{kind:"一眼 · 情绪缓冲",brief:"有人问他是不是心如止水。淡淡想了想：水面挺稳，水下的弹幕另算。然后他往旁边让了让，给今天有点累的人留出一个位置。",action:"看看这张表情 ↗",target:"face",paragraphs:["展厅里来了个赶时间的人。他一边看手机，一边问淡淡：你怎么什么事都不急？淡淡沉默了两秒。心里那句“急也没有给我装轮子”转了一圈，出口只剩下：先站稳，慢一点也能看清。","那个人终于把手机放低。灯光走过眉眼，他忽然觉得，这张脸像极了开完一场长会的自己。淡淡没有追问，只把沉默留成了一把椅子。"],excerpt:"水面挺稳，水下的弹幕另算。"},pattern:{kind:"一身 · 认真下班",brief:"淡淡的衣饰很有精神，精神本人想先歇会儿。颜色替他把场面撑住，他负责陪你把今天那些绕不过去的小事，一件一件放下。",action:"沿衣饰看一看 ↗",target:"ornaments",paragraphs:["有个故事里，淡淡收到一份“快乐计划”：清晨要元气，午后要高效，晚上还要成为更好的自己。他读完，认真把纸叠好。今天先成为吃过饭的自己，应该也算推进。","窗边的人笑出了声，才想起午饭还没有吃。淡淡看着衣袖上的光，没有再讲道理。等那个人回来的时候，今天的难题还在，肚子却已经有了答案。"],excerpt:"今天先成为吃过饭的自己。"},craft:{kind:"一歇 · 人间弹幕",brief:"下班铃响了，淡淡没有动。倒不是热爱加班，只是故事里的他暂时还没有腿部自由。于是他把一句“辛苦了”，留给每个终于停下来的人。",action:"看看岩石底座 ↗",target:"pedestal",paragraphs:["故事里，最后一位参观者站在门口，问淡淡：今天什么都没做好，算不算白过了？淡淡在心里数了数：起床，出门，走到这里。行程还挺满。","他最后只说：你已经把今天走到这里了。剩下的，明天再排队。灯一盏盏暗下来，参观者笑着道别。淡淡继续留在原地，心里补上最后一句：这回真下班了。"],excerpt:"剩下的，明天再排队。"}},sourceTitle:"网络形象背景 · 景德镇市融媒体中心",sourceUrl:"https://www.thepaper.cn/newsDetail_forward_30749742",boundary:"",motto:"心里的弹幕，慢慢说也来得及。",identity:"用户提供文件题名为“无语佛”。模型为戴冠端坐人物，具有浅色披衣、橙色衣袍、蓝色膝部与岩石底座。经浏览器观察，其外形不对应网络上托腮偏头的沉思罗汉。未取得对应实物的馆藏登记、年代、出土、尺寸与正式名称。无语佛为本项目展示名，淡淡为创作伙伴。沉思罗汉资料只用于网络称呼背景，不归给此模型。",decorHtml:'<div class="speechless-halo"><i></i><b></b></div><div class="speechless-pause"><i></i><i></i></div>'},Rh={"goujian-sword":{id:"goujian-sword",theme:"sword",nickname:"藏锋",title:"越王勾践剑",english:"A QUIET EDGE THROUGH TIME",series:"重器新生",number:"08",category:"青铜剑 · 静观锋芒",poem:["一线微光穿过岁月，","锋芒留在沉静之中。"],description:["从剑首到剑尖，让目光慢慢走过。","纹样与轮廓，藏着另一种力量。"],tags:["循纹读剑","藏锋见心"],model:{desktop:"/models/goujian-sword-web-desktop.glb",mobile:"/models/goujian-sword-web-mobile.glb",rotationY:-Math.PI/2,roughness:.66,metalness:.16,exposure:1.08},focusTargets:["hilt","guard","blade"],anchors:[{label:"剑首与握柄",x:0,y:-1.12,copy:"从剑首与握柄看起，转过侧面，比较圆与直、宽与窄之间的收束。"},{label:"剑格的边界",x:0,y:-.8,copy:"剑格位于握柄与剑身之间。放慢转动，看这道横向的边界怎样连接两种轮廓。"},{label:"剑身与纹样",x:0,y:.32,copy:"沿剑身向下，比较中脊、两侧轮廓与表面纹样。细节能否辨认，以当前模型实际呈现为准。"}],welcome:"我是藏锋。先别急着问我锋利不锋利，把光转到剑身上，看看纹样怎样沿着轮廓延伸。你想读一段有据可查的往事，还是听一个关于藏锋的故事？",prompts:["越王勾践剑的铭文写了什么？","怎样欣赏这把剑？","讲一段关于藏锋的故事"],storyTitle:"锋芒，也可以安静",lead:"目光从剑首出发，经过剑格，沿一条长长的轮廓走向剑尖。静默的器物不急着证明力量；它把纹样、比例与一段有据可查的往事，留给愿意停下的人。",tabLabels:["循剑首","读剑身","听藏锋"],topics:{shape:{kind:"一握 · 圆与直",brief:"剑首收住目光，握柄引出方向。先看整体的节制，再看每一道轮廓如何相接。",action:"走近剑首 ↗",target:"hilt",paragraphs:["观看一把剑，不必先从剑尖开始。把视线留在握柄，比较它与剑身的长短关系；再稍稍侧转，观察圆形端部与细长轮廓的衔接。","湖北省博物馆对原器的介绍记载，剑首向外翻卷呈圆盘形，内铸十一道精细同心圆。这是馆方记录的原器特征；当前模型能呈现到什么程度，需要以屏幕上的实际细节为准。"],excerpt:"力量的起点，也可以是一道安静的圆。"},pattern:{kind:"一读 · 纹中有名",brief:"菱形纹样让长长的剑身有了节奏，铭文则为原器留下身份的线索。",action:"循着剑身细看 ↗",target:"blade",paragraphs:["根据湖北省博物馆的原器介绍，剑身饰有黑色菱形纹样，靠近剑格处有两行鸟篆铭文：“越王鸠浅 自作用剑”。馆方说明，经考证，“鸠浅”就是勾践。","让模型缓缓侧转，观察光如何经过剑身。这里的欣赏从可见的形与纹开始；如果模型纹理不能清晰显示文字，就回到馆方资料阅读，不把模糊纹理猜成铭文。"],excerpt:"纹样引导目光，文字留下名字。"},craft:{kind:"一念 · 藏锋的回答",brief:"故事里的藏锋说，真正想守住的东西，值得先想清楚，再向前一步。",action:"看看剑格 ↗",target:"guard",paragraphs:["在这个为藏锋创作的小故事里，一位赶路的人走进安静的展厅，问它：“你是不是从来不会犹豫？”藏锋没有立刻回答，只让一线光停在剑格上。","“我也喜欢先停一下。”它说，“先知道自己想守住什么，再决定下一步往哪里去。”人离开时，脚步比来时慢了一点；那并不是退后，而是终于找到了自己的方向。"],excerpt:"先看清想守住的，再决定走向哪里。"}},sourceTitle:"原器资料 · 湖北省博物馆",sourceUrl:"https://www.hbww.org.cn/zgzb/p/4694.html",boundary:"",motto:"心有方向，锋芒自藏。",identity:"用户提供文件题名为“越王勾践剑”。页面引用湖北省博物馆对同名原器的公开介绍；未取得此模型的扫描来源、授权及精度档案，不将原器尺寸或保存状况作为模型的测量结论。藏锋及其对话故事为项目创作。",decorHtml:'<div class="sword-edge-light"></div><div class="sword-lozenges"><i></i><i></i><i></i><i></i></div>'},"galloping-horse":{id:"galloping-horse",theme:"horse",nickname:"凌风",title:"马踏飞燕",english:"ONE STRIDE BEYOND THE WIND",series:"重器新生",number:"09",category:"青铜奔马 · 一瞬凌风",poem:["把奔跑留在一瞬，","把远方留给想象。"],description:["绕到侧面，看四肢展开的节奏。","再俯身细看，轻盈如何落向足下。"],tags:["侧观奔势","一步生风"],model:{desktop:"/models/galloping-horse-web-desktop.glb",mobile:"/models/galloping-horse-web-mobile.glb",rotationY:-Math.PI/2,roughness:.8,metalness:.12,exposure:1.15},focusTargets:["horsehead","legs","hoof"],anchors:[{label:"昂首的方向",x:-.72,y:.69,copy:"沿头颈的方向看去，比较头部、颈部与躯干之间的转折，让奔跑先有一个方向。"},{label:"四肢的节奏",x:0,y:-.48,copy:"转到侧面，观察四肢的伸展与间隔，再从另一侧比较遮挡关系。"},{label:"足下的飞鸟",x:-.14,y:-1,copy:"把视线落向足下，观察马蹄与鸟形之间的连接，以及它们与上方身躯的关系。"}],welcome:"我是凌风，停在奔跑的一瞬。你可以绕着我转一圈：从昂起的头，到舒展的四肢，再看足下那一点轻巧。今天的你，是想赶路，还是想先在风里歇一会儿？",prompts:["怎样欣赏马踏飞燕的姿态？","为什么要从侧面看奔马？","讲一段关于凌风的故事"],storyTitle:"风经过，奔跑留下",lead:"沿头颈的方向望去，四肢把一个瞬间拉开。再把目光放低，去看马蹄与足下鸟形的关系：向前的动势与落下的支点，在同一件器物里相遇。",tabLabels:["望远方","看奔势","听凌风"],topics:{shape:{kind:"一望 · 向前的方向",brief:"头颈先指向远方，身躯才有了追随的方向。绕过正面，让侧影慢慢展开。",action:"走近头颈 ↗",target:"horsehead",paragraphs:["先从完整轮廓看起。比较头颈与躯干的朝向，再轻轻旋转模型，看看同一姿态在正面与侧面有怎样不同的张力。","这份观看不需要先背下一串名词。留意轮廓在哪里上扬、在哪里收束，看看哪个角度最能让你感到“正在向前”，再把它转回来，与第一次的印象比较。"],excerpt:"先有一个方向，再把身体交给风。"},pattern:{kind:"一步 · 动与静之间",brief:"从四肢的间隔读出奔跑，再顺着马蹄找到足下的鸟形。轻盈不是没有落点，而是让落点成为观看的惊喜。",action:"看看四肢姿态 ↗",target:"legs",paragraphs:["侧面便于观察四肢前后的伸展；转到斜前或斜后方，又能看清原本重叠的轮廓。两个角度连起来，姿态的空间关系才慢慢完整。","继续把目光移向足下，看马蹄与鸟形如何相接。模型适合观察造型关系，但单凭屏幕外观无法推断原器内部结构、重心位置或铸造工序。"],excerpt:"奔跑的方向很远，目光的落点很近。"},craft:{kind:"一阵风 · 凌风的邀请",brief:"故事里的凌风并不催你更快。它说，奔跑也可以只是因为，前面的风很好。",action:"看看足下飞鸟 ↗",target:"hoof",paragraphs:["在为凌风创作的故事里，一个总在赶时间的人问它：“你这样跑，不累吗？”凌风想了一会儿，反问：“如果没有人催，你最想往哪里去？”","那人第一次没有立刻说出答案。凌风便陪他看了一会儿远方：“不急。等你想好了，我们再出发。”原来最自由的一步，不一定最快，却可以由自己决定。"],excerpt:"等你想好了，我们再出发。"}},sourceTitle:"馆方网站 · 甘肃省博物馆",sourceUrl:"https://www.gansumuseum.com/",boundary:"",motto:"不必追赶每一阵风。",identity:"用户提供文件题名为“马踏飞燕”。当前未取得该模型对应的扫描、测量及馆藏登记档案；页面以模型造型的观看引导为主，馆方网站链接仅作进一步查阅入口。凌风及其对话故事为项目创作，不据模型推断具体鸟种、年代、尺寸或铸造工艺。",decorHtml:'<div class="horse-wind"><i></i><i></i><i></i></div><div class="horse-horizon"></div>'}},Ch={"four-ram-zun":{id:"four-ram-zun",theme:"zun",nickname:"肃礼",title:"四羊方尊",english:"FOUR RAMS · BRONZE AND ORDER",series:"重器新生",number:"10",category:"青铜之形 · 方圆有度",poem:["四角守住一方天地，","一束光，照见沉静的力量。"],description:["沿着方形口沿，看向四隅的羊首。","转至斜侧，让器身与纹饰慢慢分开。"],tags:["方器秩序","四隅羊首"],model:{desktop:"/models/four-ram-zun-web-desktop.glb",mobile:"/models/four-ram-zun-web-mobile.glb",rotationY:-Math.PI/4,roughness:.68,metalness:.28,exposure:1.05},focusTargets:["zun-rim","ram","zun-pattern","zun-foot"],anchors:[{label:"方形口沿",x:0,y:1.05,copy:"从斜上方观察开口。方形边线在转动中前后交错，先读清整体的方向。"},{label:"四隅羊首",x:.65,y:.28,copy:"转至一角，让羊首轮廓离开器身背景；比较头部与肩部的衔接。"},{label:"器身纹饰",x:0,y:-.25,copy:"让侧光经过器壁，沿纹样的重复与转折，观察方器表面的层次。"},{label:"器足与承托",x:0,y:-1.03,copy:"向下看器身如何收束，比较上部舒展与下部承托的比例。"}],welcome:"我是肃礼。先别急着读懂每一道纹。绕过一个角，看羊首怎样从器身里迎向你，我们再慢慢聊。",prompts:["我该先看四羊方尊的哪里？","为什么要转到斜侧看？","讲一段肃礼守夜的故事"],storyTitle:"把目光交给四个角",lead:"正面让你看见秩序，斜侧让你看见生命。方形的边线、羊首的曲线和器壁上的纹样，在一次缓慢的转动里，逐渐成为一个整体。",tabLabels:["观方圆","循纹路","听肃礼"],topics:{shape:{kind:"方圆相遇 / 01",brief:"从一个角开始。让羊首的曲线越过方器的边线，立体的关系便清楚起来。",action:"看向四隅羊首 ↗",target:"ram",paragraphs:["先看整体轮廓，再转到斜侧。比较口沿、肩部、器腹和底部的宽窄变化，避免一开始就被细密纹样带走目光。","羊首不是单独悬浮的装饰。观察它与器肩的连接，再把视线移回方形边界，就能读出动物形象与器物结构之间的配合。"],excerpt:"从方形看秩序，从曲线看生气。"},pattern:{kind:"纹样的节奏 / 02",brief:"把模型稍稍转动，让明暗沿器壁移动；凸起、凹陷与重复，会比正面照明更容易辨认。",action:"沿器身看纹路 ↗",target:"zun-pattern",paragraphs:["先找一组重复的线，再看它在哪里转折、在哪里遇见边角。不必给每一道纹立刻命名，观察本身就能建立对器物的认识。","当前呈现来自用户提供的数字模型。贴图中的颜色和表面痕迹可以帮助观看，但不能据此判断青铜原物的成分、锈蚀年代或具体修复经过。"],excerpt:"让光读出起伏，让距离读出整体。"},craft:{kind:"肃礼的守夜 / 03",brief:"“我站得很安静，不是没有话说，是想把四个方向的风都听完。”",action:"回看方形口沿 ↗",target:"zun-rim",paragraphs:["想象展厅熄灯以后，肃礼把四个角当作四扇小窗。第一扇留给风，第二扇留给月亮，第三扇留给尚未讲完的故事。","最后一扇，它留给明天的观众。“你不必懂很多才来见我，”肃礼说，“只要愿意绕过一个角，就会发现新的样子。”"],excerpt:"此段为器物拟人原创故事。"}},sourceTitle:"馆藏资料入口 · 中国国家博物馆",sourceUrl:"https://www.chnmuseum.cn/zp/",boundary:"",motto:"绕过一个角，再认识一次。",identity:"展示名称沿用用户文件“ 四羊方尊.glb ”。模型与馆藏原物的精确对应、比例、尺寸和采集信息尚未核实；昵称“肃礼”与故事为本项目创作。",decorHtml:'<div class="zun-order"><i></i><i></i><i></i><b></b></div>'},"zenghouyi-bells":{id:"zenghouyi-bells",theme:"bells",nickname:"和鸣",title:"曾侯乙编钟",english:"BRONZE BELLS · AN ORDER OF SOUND",series:"重器新生",number:"11",category:"钟架之间 · 静听有序",poem:["把高低排成一行，","让沉默，也有回响。"],description:["先看整组钟架，再走近一枚钟。","在悬挂与间隔之间，读出有序的节奏。"],tags:["整组全景","钟体细看"],model:{desktop:"/models/zenghouyi-bells-web-desktop.glb",mobile:"/models/zenghouyi-bells-web-mobile.glb",rotationY:-Math.PI/2,roughness:.72,metalness:.22,exposure:1.08,distanceDesktop:4.1},focusTargets:["bell-frame","bell-body","bell-hanging"],anchors:[{label:"整组钟架",x:-.46,y:.35,copy:"先把整组收进视野，观察横向展开与上下层次，再选择一枚钟细看。"},{label:"钟体轮廓",x:0,y:-.24,copy:"看一枚钟的轮廓与表面起伏。图像中的大小和颜色不能直接换算成真实音高。"},{label:"悬挂关系",x:.65,y:.06,copy:"沿钟体向上观察悬挂位置，看看钟与支架之间怎样留出空间。"}],welcome:"我是和鸣。今天先不用敲响我。退后一步看整组，再走近一枚钟，安静的排列里也藏着节奏。",prompts:["我该怎样欣赏这组编钟？","能从模型听出音高吗？","讲一段和鸣等待开场的故事"],storyTitle:"未响起的合奏",lead:"整组看，是横向铺开的秩序；走近看，是一枚枚各有轮廓的钟。让目光先远后近，在钟体与钟架之间，完成一次安静的巡游。",tabLabels:["观全景","看悬钟","听和鸣"],topics:{shape:{kind:"先远后近 / 01",brief:"先完整地看见，再选择一个细节。让钟架的横向展开成为这次观看的起点。",action:"看整组钟架 ↗",target:"bell-frame",paragraphs:["这件模型适合横向展开观看。先保留两端的呼吸空间，比较支架与钟体之间的层次，再逐步靠近中央或一侧的钟。","转到斜侧，观察钟体前后的错落与悬挂空间；回到正面，再看钟与钟之间的间隔。两种视角可以互相补充。"],excerpt:"全景看秩序，近景看关系。"},pattern:{kind:"一枚钟的停顿 / 02",brief:"沿着悬挂位置往下看：支架、钟体、空隙，各自占据一个位置，也为彼此留出余地。",action:"走近钟体 ↗",target:"bell-body",paragraphs:["选择一枚轮廓清楚的钟，观察外形、表面起伏以及与相邻钟体的差别，再向上找它的悬挂位置。无需一次把全部细节看完。","这份数字模型没有经过声学测量。当前页面提供视觉观看，不把模型尺寸、颜色或动画转换成原物音高，也不把合成音效当作文物原声。"],excerpt:"看得见的结构，不等于已经测得的声音。"},craft:{kind:"和鸣的开场 / 03",brief:"“最好的开场，也许是大家先安静一会儿，听见彼此还没有发出的声音。”",action:"看看悬挂的位置 ↗",target:"bell-hanging",paragraphs:["想象一个尚未开场的清晨，和鸣正在为风留座。小钟问：“我们什么时候开始？”大钟说：“等最后一位听众找到自己的位置。”","你走进来，脚步轻轻停下。和鸣没有急着响起，只把这片刻的安静交给你。“现在，”它说，“你也在这场合奏里面了。”"],excerpt:"此段为器物拟人原创故事，并非历史演出记录。"}},sourceTitle:"馆方资料入口 · 湖北省博物馆",sourceUrl:"https://www.hbww.org.cn/",boundary:"",motto:"先听见安静，再想象回响。",identity:"展示名称沿用用户文件“曾侯乙编钟.glb”。已确认文件呈现多层钟架与钟体，但模型对应的原物范围、钟数、比例、采集与声学信息尚未核实；不将其视为整套原物的完整复刻。昵称“和鸣”与故事为本项目创作。",decorHtml:'<div class="bells-resonance"><i></i><i></i><i></i><i></i><b></b></div>'}},Mr={...Rh,...Ch,[xc.id]:xc,[_c.id]:_c,[vc.id]:vc,...Ah,"phoenix-ewer":{id:"phoenix-ewer",theme:"porcelain",nickname:"青花",title:"凤首扁壶",english:"PHOENIX-HEADED EWER",series:"重器新生",number:"01",category:"数字文物 · 青花",poem:["一器青花，藏一只","欲飞的凤凰。"],description:["凤首昂起，卷尾成柄。","双翼轻拢，将花影与风留在瓷上。"],tags:["凤鸟为形","青花为衣"],model:{desktop:"/models/phoenix-web-desktop.glb",mobile:"/models/phoenix-web-mobile.glb",rotationY:-Math.PI/2,roughness:.5,metalness:0,exposure:1.12},focusTargets:["spout","handle","pattern","neck"],anchors:[{label:"凤首壶流",x:-1.03,y:.96,copy:"凤首从壶肩探出，流口随颈部曲线向上延伸。转到侧面，可观察头部与壶腹连接处的起伏。"},{label:"卷曲壶柄",x:1.16,y:.72,copy:"壶柄从肩部卷起，形成通透的环形空间。内卷的末端与凤首相呼应，侧面能看清柄孔及连接位置。"},{label:"青花纹饰",x:-.08,y:-.15,copy:"蓝色纹样沿扁圆壶腹铺展，白瓷底色与青花形成层次。缓慢转动，可比较两侧纹饰与器身曲面的关系。"},{label:"短颈口沿",x:-.1,y:1.12,copy:"短颈从肩部向上收起，口沿略向外展。颈部的几何纹饰与壶腹纹样形成疏密对照。"}],welcome:"你好，我是青花。你看，凤首是我的壶流，卷起的凤尾是我的壶柄。想先听听我的来历，还是看看这一身青花？",prompts:["你来自哪个年代？","为什么叫凤首扁壶？","壶身上画了什么？"],storyTitle:"青花里的故事",lead:"一只凤凰，将飞翔的姿态留在了青花里。昂首是流，卷尾是柄，双翼垂向牡丹丛。从器形到纹饰，再到指间成形的泥，循着三段小故事，走近它的世界。",tabLabels:["看器形","读纹饰","知工艺"],topics:{shape:{kind:"据馆藏资料创作 · 器形 / 01",brief:"一只凤凰收拢双翼，停在了壶上。昂起的头化作壶流，卷起的尾成为壶柄；仿佛只等一双手将它轻轻托起，它便要再次振翅。",action:"定位凤首 ↗",target:"spout",paragraphs:["若把这件元代青花壶看作一只暂歇的凤凰，它的姿态便有了故事：头颈向前探出，尾羽向后回旋，扁圆的身躯把两端轻轻连起。飞翔没有消失，只是被收进一道安静的轮廓。","想象一次缓缓的倾注：手握凤尾，壶身微侧，水从凤首流出。原本遥远的祥禽，忽然与人的动作有了呼应。再将壶放稳，它又停在那里，守着下一次相逢。"],excerpt:"“该壶以昂起的凤首作流” · “以卷起的凤尾作柄”"},pattern:{kind:"据馆藏资料创作 · 纹饰 / 02",brief:"凤凰把双翼垂向壶身两侧，牡丹在下方铺开。青与白之间，像有一阵风经过：花枝轻摇，羽翼将展，一整个春天停在了瓷上。",action:"看看纹饰 ↗",target:"pattern",paragraphs:["目光沿着青花向下走，先遇见凤身，再遇见垂向两侧的双翅，最后落入壶腹下方的牡丹丛。器物的弧面像一卷尚未展尽的画，转过一点，又露出一段花与羽的相逢。","不妨想象，凤凰正从花间掠过。羽尖带起的风尚未散去，花朵还留着摇动的姿态，画面便被留在了瓷面上。你转动壶身时，那场没有画出起点与终点的飞翔，又向前延续了一小段。"],excerpt:"“凤身绘在圆形壶体上部，双翅垂至壶体两侧”"},craft:{kind:"据馆藏资料创作 · 工艺 / 03",brief:"成为凤凰之前，它是等待成形的泥。模制的凤首、手捏的卷柄、雕镶成型的壶身，在匠人的手中相遇，才有了这一身顾盼的姿态。",action:"查看资料出处 ↗",paragraphs:["把目光带回想象中的制瓷作坊：凤首借模具获得轮廓，卷柄在指间捏塑出弧度，扁圆的壶体以雕镶之法成形。各自成形的部分，还像一句话里尚未相连的字，等待着被琢成一个整体。","当凤首与壶肩相接，卷尾与壶身相连，一团泥便有了抬头的神情。匠人的手离开了，手留下的心思却仍在：让出水的地方成为鸟喙，让提握的地方成为凤尾，让一件日用之器，也藏得下一只欲飞的凤凰。"],excerpt:"“壶流采用模制成型，壶柄以手捏塑成型，壶体为雕镶成型法，最后琢成整体。”"}},sourceTitle:"故事取材 · 首都博物馆",sourceUrl:"https://www.capitalmuseum.org.cn/collection/fd9ddca5658f41b8a089c4b8109e3d11",boundary:"景德镇窑青花凤首扁壶 · 元代；文学演绎，非文物经历实录。",motto:"聚微光成器，听青花有声。",identity:"馆藏资料讲述 · 模型为视觉演示；当前模型与指定馆藏的身份对应尚未确证。"},"bronze-head":{id:"bronze-head",theme:"bronze",nickname:"守望",title:"青铜头像",english:"THE BRONZE GAZE",series:"重器新生",number:"02",category:"数字文物 · 青铜",poem:["将未说出口的话，","留在一眼凝望里。"],description:["轮廓在光中显现，锈色层层铺开。","绕过正面，让沉默有了另一种表情。"],tags:["以铜为形","以目相逢"],model:{desktop:"/models/bronze-head-web-desktop.glb",mobile:"/models/bronze-head-web-mobile.glb",rotationY:-Math.PI/2,roughness:.86,metalness:.15,exposure:1.05},focusTargets:["eyes","nose","ears","patina"],anchors:[{label:"眼部轮廓",x:-.45,y:.45,copy:"从正面看眼眶的轮廓，再转过一个角度，观察眼部起伏怎样接住光。"},{label:"鼻梁与面部",x:0,y:0,copy:"鼻梁形成面部中央的纵向转折，侧光让高低起伏更加清楚。"},{label:"耳部结构",x:.85,y:.12,copy:"从正面到侧面，比较耳部与头部的连接和轮廓变化。"},{label:"表面锈色",x:-.4,y:-.65,copy:"深浅色层沿面庞交错铺开。缓缓转动，让光从锈色间走过，看看同一张面孔如何显出不同的晨昏。"}],welcome:"我是守望。名字是你们为我取的，凝望却是我的模样。先靠近一点，看看我的眼睛；也可以问我，青铜头像为什么如此令人难忘。",prompts:["你想让我先看哪里？","三星堆的青铜头像有什么特点？","讲一段关于凝望的小故事"],storyTitle:"凝望里的故事",lead:"从一道眼眶的起伏，到一片深浅交错的锈色，头像的表情在光里缓缓变化。你向左一步，它便显出另一副神情；你停下来，凝望才真正开始。",tabLabels:["观其貌","读锈色","听回响"],topics:{shape:{kind:"器形观察 · 文学演绎 / 01",brief:"它不急着说话。眉眼与鼻梁把光分成了几道，面庞的轮廓便从暗处浮现。你转动它，刚才还沉在阴影里的地方，又悄悄亮了起来。",action:"靠近眼部 ↗",target:"eyes",paragraphs:["把它想作一位安静的守望者：目光停在前方，话语藏在轮廓之中。你靠近时，不必先猜它的身份，先看看光如何经过眼眶、鼻梁和两侧的耳部。","展厅渐渐安静下来，最后一道光落在眼角。若沉默也有声音，那大概就是有人停下脚步时，一句轻轻的“原来你在这里”。"],excerpt:"相关类型参考：官方条目形容另一件青铜人头像“造型简洁明快，线条分明”。"},pattern:{kind:"表面观察 · 文学演绎 / 02",brief:"锈色像一幅没有题字的地图。深处收住光，浅处泛起微亮。沿着斑驳慢慢看，不必急着给每一道痕迹取一个年代。",action:"看看表面 ↗",target:"patina",paragraphs:["想象微光沿着额头落下，在面庞的凹凸间停驻。颜色并不整齐，也正因为不整齐，一张沉默的面孔有了更丰富的层次。","若把深色想成夜，把浅色想成微明，那么这张面孔便有自己的晨昏。你转动它，微光沿鼻梁走过，像一次不必说出姓名的相逢。"],excerpt:"微光沿鼻梁走过，像一次不必说出姓名的相逢。"},craft:{kind:"相关文物 · 类型参照 / 03",brief:"三星堆的青铜人头像给我们另一种看人的方式：面孔可以由鲜明的线条组成，神情也可以藏在简练的起伏里。先看清每一件的不同，再去想象古人的创造。",action:"查看相关文物资料 ↗",paragraphs:["四川省文物局收录的“青铜人头像（2）”，来源标注为三星堆博物馆，记载其为商代青铜器，头顶较圆、面部戴有面罩，头顶盖与颅腔分铸。","沿着眉眼与鼻梁看去，鲜明的线条将一张面孔留在青铜里。目光跨过漫长的时间，仍能让今天的观看者停下脚步。"],excerpt:"“该人头像头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。”"}},sourceTitle:"相关类型资料 · 四川省文物局 / 三星堆博物馆",sourceUrl:"https://wwj.sc.gov.cn/scwwj/sdai/2020/10/30/d3e376d89f384e418e62cbc06a3b2bb4.shtml",boundary:"参考条目与当前模型尚未建立身份对应；观察故事为文学演绎。",motto:"以一眼凝望，遇见无声的回响。",identity:"使用用户提供的青铜头雕模型。具体馆藏名称、年代与出土信息尚待确认；三星堆资料只作相关类型参考。"}};function Ph(i=""){const e=new URLSearchParams(i).get("artifact")||"phoenix-ewer";return Object.hasOwn(Mr,e)?Mr[e]:null}function Lh(i,e){const t=document.createElement("div");t.className="artifact-picker";const n=document.createElement("button");n.id="artifact-select",n.type="button",n.setAttribute("aria-label",`切换文物，当前为${i.title}`),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-controls","artifact-directory");const r=document.createElement("span");r.textContent=i.title;const s=document.createElement("i");s.setAttribute("aria-hidden","true"),n.append(r,s);const a=document.createElement("nav");a.id="artifact-directory",a.className="artifact-directory",a.setAttribute("aria-label","藏品目录"),a.hidden=!0;const o=Object.values(e).sort((g,m)=>g.number.localeCompare(m.number)),c=document.createElement("div");c.className="artifact-directory-heading";const l=document.createElement("span");l.textContent="藏品目录";const u=document.createElement("small");u.textContent=`${String(o.length).padStart(2,"0")} 件珍藏`,c.append(l,u);const h=document.createElement("div");h.className="artifact-directory-list";const d=o.map(g=>{const m=document.createElement("a");m.className="artifact-directory-item";const f=new URL(location.href);f.searchParams.set("artifact",g.id),f.searchParams.delete("checkin"),m.href=f.href,g.id===i.id&&m.setAttribute("aria-current","page");const v=document.createElement("img");v.src=`/images/checkin/portraits/${encodeURIComponent(g.id)}.webp`,v.alt="",v.loading="lazy",v.decoding="async";const x=document.createElement("span");x.className="artifact-directory-copy";const _=document.createElement("strong");_.textContent=g.title;const A=document.createElement("small");A.textContent=`${g.number} / ${g.nickname}`,x.append(_,A);const T=document.createElement("span");return T.className="artifact-directory-marker",T.textContent=g.id===i.id?"当前":"↗",m.append(v,x,T),m.addEventListener("click",R=>{var L;g.id===i.id&&!R.ctrlKey&&!R.metaKey&&!R.shiftKey&&!R.altKey&&(R.preventDefault(),(L=document.querySelector('button[data-mode="view"]'))==null||L.click(),p(!0))}),h.append(m),m});a.append(c,h),t.append(n,a);function p(g=!1){a.hidden=!0,n.setAttribute("aria-expanded","false"),g&&n.focus()}function b(g=!1){a.hidden=!1,n.setAttribute("aria-expanded","true"),g&&(d.find(m=>m.hasAttribute("aria-current"))||d[0]).focus()}return n.addEventListener("click",()=>a.hidden?b():p()),n.addEventListener("keydown",g=>{["ArrowDown","ArrowUp"].includes(g.key)&&(g.preventDefault(),g.stopPropagation(),b(!0))}),t.addEventListener("keydown",g=>{if(a.hidden)return;if(g.key==="Escape"){g.preventDefault(),g.stopPropagation(),p(!0);return}const m=d.indexOf(document.activeElement);if(m<0)return;let f;if(g.key==="ArrowDown")f=(m+1)%d.length;else if(g.key==="ArrowUp")f=(m+d.length-1)%d.length;else if(g.key==="Home")f=0;else if(g.key==="End")f=d.length-1;else return;g.preventDefault(),d[f].focus()}),document.addEventListener("pointerdown",g=>{t.contains(g.target)||p()}),document.addEventListener("focusin",g=>{t.contains(g.target)||p()}),t}function Ih(i,e,t=!1){const n=d=>document.querySelector(d),r=(d,p)=>{n(d).textContent=p};n("#experience").dataset.theme=i.theme,document.title=`重器新生 · ${i.title}`;const s=n("h1"),a=document.createElement("span");a.textContent=i.english,a.setAttribute("translate","no");const o=(i.titleLines||[i.title]).flatMap((d,p)=>p?[document.createElement("br"),document.createTextNode(d)]:[document.createTextNode(d)]);s.replaceChildren(...o,a),n(".brand").href=location.href,r(".collection-number",i.number);const c=n(".introduction .eyebrow");c.lastChild.textContent=" "+i.category;const l=document.createElement("span");l.textContent=i.poem[1],n(".hero-poem").replaceChildren(document.createTextNode(i.poem[0]),l),n(".hero-description").replaceChildren(document.createTextNode(i.description[0]),document.createElement("br"),document.createTextNode(i.description[1])),n(".hero-tags").querySelectorAll("span").forEach((d,p)=>d.textContent=i.tags[p]),n("#stage").setAttribute("aria-label",`可旋转的${i.title}三维模型`),r("#story-title",i.storyTitle),r(".guide-lead",i.lead),r(".guide-motto",i.motto),r("#story-panel .panel-heading .eyebrow",`${i.nickname} · 慢慢道来`),document.querySelectorAll("[data-guide]").forEach((d,p)=>d.textContent=i.tabLabels[p]),r(".guide-source>span",i.sourceTitle),n("#guide-source-link").href=i.sourceUrl,n(".guide-boundary").remove(),r(".bottom-line>span:first-child",`${i.series.replaceAll(" ","")} / A DIGITAL REIMAGINING`),r("#info h2",`重器新生 · ${i.title}`),r("#info>p:not(.eyebrow):not(.info-note)",i.lead);const h=n("#info").querySelectorAll("dd");if(h[0].textContent=`${i.title} · ${i.nickname}`,h[2].textContent="微光汇聚，器物显形。点击底部“微光演绎”，观看光粒消散与重新成形。",n(".header-actions").prepend(Lh(i,e)),i.decorHtml){const d=document.createElement("div");d.className="exhibit-decor",d.setAttribute("aria-hidden","true"),d.innerHTML=i.decorHtml,n(".atmosphere").append(d)}if(i.flip){const d=document.createElement("button");d.id="mirror-flip",d.textContent="翻面",d.disabled=!0,d.setAttribute("aria-label","翻看铜镜另一面"),n(".view-tools").prepend(d)}if(["mirror","stone"].includes(i.theme)){const d=document.createElement("div");d.className=i.theme==="mirror"?"mirror-orbits":"stone-light",d.setAttribute("aria-hidden","true"),d.innerHTML=i.theme==="mirror"?"<i></i><i></i><i></i><b></b><span></span>":"<i></i><i></i><i></i><b></b>",n(".atmosphere").append(d)}if(t){const d=document.createElement("p");d.className="artifact-notice",d.setAttribute("role","status"),d.textContent="未找到指定文物，已显示凤首扁壶。",n("#experience").append(d)}if(i.theme==="bronze"){const d=document.createElement("div");d.className="bronze-orbit",d.innerHTML="<i></i><i></i><i></i><b></b>";const p=document.createElement("div");p.className="bronze-beam",n(".atmosphere").append(d,p)}}const yc=i=>Math.max(0,Math.min(1,i));class Dh{constructor(e=!1){this.reduced=e,this.formDuration=2.5,this.state="dormant",this.progress=0,this.elapsed=0,this.visualTime=0}get busy(){return this.state==="forming"||this.state==="dissolving"}present(){this.state="formed",this.progress=1,this.elapsed=0}form(){return this.state!=="dormant"?!1:(this.elapsed=0,this.state=this.reduced?"formed":"forming",this.progress=this.reduced?1:0,!0)}toggle(){return this.busy?!1:this.state==="dormant"?this.form():(this.elapsed=0,this.state=this.reduced?"dormant":"dissolving",this.progress=this.reduced?0:1,!0)}tick(e){const t=Math.max(0,Number.isFinite(e)?e:0);if(this.reduced||(this.visualTime+=t),this.busy){this.elapsed+=t;const n=this.state==="forming",r=yc(this.elapsed/(n?this.formDuration:1.8)),s=r*r*(3-2*r);this.progress=n?s:1-s,r===1&&(this.state=n?"formed":"dormant")}return{assembly:this.progress,reveal:yc((this.progress-.38)/.62),dissolve:0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wo="180",Wi={ROTATE:0,DOLLY:1,PAN:2},zi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,Mc=1,Uh=2,Eu=1,Fh=2,On=3,Vn=0,Vt=1,wn=2,ei=0,gi=1,Sc=2,Ec=3,Tc=4,Oh=5,fi=100,kh=101,Bh=102,zh=103,Hh=104,Gh=200,Vh=201,Wh=202,jh=203,Ha=204,Ga=205,qh=206,Xh=207,Yh=208,Kh=209,Jh=210,$h=211,Zh=212,Qh=213,ed=214,Va=0,Wa=1,ja=2,Xi=3,qa=4,Xa=5,Ya=6,Ka=7,jo=0,td=1,nd=2,ti=0,id=1,rd=2,sd=3,Tu=4,ad=5,od=6,cd=7,wc="attached",ld="detached",wu=300,Yi=301,Ki=302,Ja=303,$a=304,As=306,Ji=1e3,Qn=1001,ys=1002,Wt=1003,Au=1004,vr=1005,tn=1006,ms=1007,Bn=1008,Rn=1009,Ru=1010,Cu=1011,Ar=1012,qo=1013,bi=1014,pn=1015,Fr=1016,Xo=1017,Yo=1018,Rr=1020,Pu=35902,Lu=35899,Iu=1021,Du=1022,on=1023,Cr=1026,Pr=1027,Ko=1028,Jo=1029,Nu=1030,$o=1031,Zo=1033,gs=33776,bs=33777,_s=33778,vs=33779,Za=35840,Qa=35841,eo=35842,to=35843,no=36196,io=37492,ro=37496,so=37808,ao=37809,oo=37810,co=37811,lo=37812,uo=37813,ho=37814,fo=37815,po=37816,mo=37817,go=37818,bo=37819,_o=37820,vo=37821,xo=36492,yo=36494,Mo=36495,So=36283,Eo=36284,To=36285,wo=36286,Uu=2200,ud=2201,hd=2202,Lr=2300,Ir=2301,Ls=2302,Hi=2400,Gi=2401,Ms=2402,Qo=2500,dd=2501,fd=0,Fu=1,Ao=2,pd=3200,md=3201,ec=0,gd=1,Zn="",Ut="srgb",jt="srgb-linear",Ss="linear",ut="srgb",Mi=7680,Ac=519,bd=512,_d=513,vd=514,Ou=515,xd=516,yd=517,Md=518,Sd=519,Ro=35044,Rc="300 es",An=2e3,Es=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const Sr=Math.PI/180,$i=180/Math.PI;function gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function tc(i,e){return(i%e+e)%e}function Ed(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Td(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function wd(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function Ad(i,e=1){return e-Math.abs(tc(i,e*2)-e)}function Rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ld(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(Cc=i);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(i){return i*Sr}function Ud(i){return i*$i}function Fd(i){return(i&i-1)===0&&i!==0}function Od(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),b=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*b,c*p,o*l);break;case"YXY":i.set(c*p,o*u,c*b,o*l);break;case"ZYZ":i.set(c*b,c*p,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const en={DEG2RAD:Sr,RAD2DEG:$i,generateUUID:gn,clamp:$e,euclideanModulo:tc,mapLinear:Ed,inverseLerp:Td,lerp:Er,damp:wd,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Ld,randFloatSpread:Id,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Fd,ceilPowerOfTwo:Od,floorPowerOfTwo:kd,setQuaternionFromProperEuler:Bd,normalize:at,denormalize:dn};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],b=s[a+2],g=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=b,e[t+3]=g;return}if(h!==g||c!==d||l!==p||u!==b){let m=1-o;const f=c*d+l*p+u*b+h*g,v=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const A=Math.sqrt(x),T=Math.atan2(A,f*v);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}const _=o*v;if(c=c*m+d*_,l=l*m+p*_,u=u*m+b*_,h=h*m+g*_,m===1-o){const A=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=A,l*=A,u*=A,h*=A}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[a],d=s[a+1],p=s[a+2],b=s[a+3];return e[t]=o*b+u*h+c*p-l*d,e[t+1]=c*b+u*d+l*h-o*p,e[t+2]=l*b+u*p+o*d-c*h,e[t+3]=u*b-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),b=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*p*b,this._y=l*p*h-d*u*b,this._z=l*u*b+d*p*h,this._w=l*u*h-d*p*b;break;case"YXZ":this._x=d*u*h+l*p*b,this._y=l*p*h-d*u*b,this._z=l*u*b-d*p*h,this._w=l*u*h+d*p*b;break;case"ZXY":this._x=d*u*h-l*p*b,this._y=l*p*h+d*u*b,this._z=l*u*b+d*p*h,this._w=l*u*h-d*p*b;break;case"ZYX":this._x=d*u*h-l*p*b,this._y=l*p*h+d*u*b,this._z=l*u*b-d*p*h,this._w=l*u*h+d*p*b;break;case"YZX":this._x=d*u*h+l*p*b,this._y=l*p*h+d*u*b,this._z=l*u*b-d*p*h,this._w=l*u*h-d*p*b;break;case"XZY":this._x=d*u*h-l*p*b,this._y=l*p*h-d*u*b,this._z=l*u*b+d*p*h,this._w=l*u*h+d*p*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Is.copy(this).projectOnVector(e),this.sub(Is)}reflect(e){return this.sub(Is.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Is=new D,Pc=new Yt;class Ye{constructor(e,t,n,r,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],b=n[8],g=r[0],m=r[3],f=r[6],v=r[1],x=r[4],_=r[7],A=r[2],T=r[5],R=r[8];return s[0]=a*g+o*v+c*A,s[3]=a*m+o*x+c*T,s[6]=a*f+o*_+c*R,s[1]=l*g+u*v+h*A,s[4]=l*m+u*x+h*T,s[7]=l*f+u*_+h*R,s[2]=d*g+p*v+b*A,s[5]=d*m+p*x+b*T,s[8]=d*f+p*_+b*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,p=l*s-a*c,b=t*h+n*d+r*p;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/b;return e[0]=h*g,e[1]=(r*l-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Ye;function ku(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){const i=Dr("canvas");return i.style.display="block",i}const Lc={};function Nr(i){i in Lc||(Lc[i]=!0,console.warn(i))}function Hd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Ic=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){const i={enabled:!0,workingColorSpace:jt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Zn?Ss:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Nr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Nr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[jt]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const et=Gd();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Si;class Vd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Si===void 0&&(Si=Dr("canvas")),Si.width=e.width,Si.height=e.height;const r=Si.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wd=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ns(r[a].image)):s.push(Ns(r[a]))}else s=Ns(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ns(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;const Us=new D;class Ft extends ni{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Qn,r=Qn,s=tn,a=Bn,o=on,c=Rn,l=Ft.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=gn(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Us).x}get height(){return this.source.getSize(Us).y}get depth(){return this.source.getSize(Us).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case ys:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case ys:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=wu;Ft.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,n=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],b=c[9],g=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(b-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(b+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,_=(p+1)/2,A=(f+1)/2,T=(u+d)/4,R=(h+g)/4,L=(b+m)/4;return x>_&&x>A?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=R/n):_>A?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=L/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=R/s,r=L/s),this.set(n,r,s,t),this}let v=Math.sqrt((m-b)*(m-b)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-b)/v,this.y=(h-g)/v,this.z=(d-u)/v,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Ft(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xd extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Br.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(e.matrixWorld),this.union(Br)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),zr.subVectors(this.max,lr),Ei.subVectors(e.a,lr),Ti.subVectors(e.b,lr),wi.subVectors(e.c,lr),Wn.subVectors(Ti,Ei),jn.subVectors(wi,Ti),si.subVectors(Ei,wi);let t=[0,-Wn.z,Wn.y,0,-jn.z,jn.y,0,-si.z,si.y,Wn.z,0,-Wn.x,jn.z,0,-jn.x,si.z,0,-si.x,-Wn.y,Wn.x,0,-jn.y,jn.x,0,-si.y,si.x,0];return!Fs(t,Ei,Ti,wi,zr)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,Ei,Ti,wi,zr))?!1:(Hr.crossVectors(Wn,jn),t=[Hr.x,Hr.y,Hr.z],Fs(t,Ei,Ti,wi,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ln),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ln=[new D,new D,new D,new D,new D,new D,new D,new D],cn=new D,Br=new vn,Ei=new D,Ti=new D,wi=new D,Wn=new D,jn=new D,si=new D,lr=new D,zr=new D,Hr=new D,ai=new D;function Fs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ai.fromArray(i,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),c=e.dot(ai),l=t.dot(ai),u=n.dot(ai);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Yd=new vn,ur=new D,Os=new D;class xn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yd.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Os)),this.expandByPoint(ur.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const In=new D,ks=new D,Gr=new D,qn=new D,Bs=new D,Vr=new D,zs=new D;class nr{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,In)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=In.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(In.copy(this.origin).addScaledVector(this.direction,t),In.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ks.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(ks);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Gr),o=qn.dot(this.direction),c=-qn.dot(Gr),l=qn.lengthSq(),u=Math.abs(1-a*a);let h,d,p,b;if(u>0)if(h=a*c-o,d=a*o-c,b=s*u,h>=0)if(d>=-b)if(d<=b){const g=1/u;h*=g,d*=g,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-b?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=b?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ks).addScaledVector(Gr,d),p}intersectSphere(e,t){In.subVectors(e.center,this.origin);const n=In.dot(this.direction),r=In.dot(In)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,In)!==null}intersectTriangle(e,t,n,r,s){Bs.subVectors(t,e),Vr.subVectors(n,e),zs.crossVectors(Bs,Vr);let a=this.direction.dot(zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const c=o*this.direction.dot(Vr.crossVectors(qn,Vr));if(c<0)return null;const l=o*this.direction.dot(Bs.cross(qn));if(l<0||c+l>a)return null;const u=-o*qn.dot(zs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(e,t,n,r,s,a,o,c,l,u,h,d,p,b,g,m){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,h,d,p,b,g,m)}set(e,t,n,r,s,a,o,c,l,u,h,d,p,b,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=b,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ai.setFromMatrixColumn(e,0).length(),s=1/Ai.setFromMatrixColumn(e,1).length(),a=1/Ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*h,b=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=p+b*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=b+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*h,b=l*u,g=l*h;t[0]=d+g*o,t[4]=b*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-b,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*h,b=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=b+p*o,t[1]=p+b*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*h,b=o*u,g=o*h;t[0]=c*u,t[4]=b*l-p,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=p*l-b,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=b*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*h+b,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,p=a*l,b=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=p*h-b,t[2]=b*h-p,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kd,e,Jd)}lookAt(e,t,n){const r=this.elements;return Zt.subVectors(e,t),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),Xn.crossVectors(n,Zt),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),Xn.crossVectors(n,Zt)),Xn.normalize(),Wr.crossVectors(Zt,Xn),r[0]=Xn.x,r[4]=Wr.x,r[8]=Zt.x,r[1]=Xn.y,r[5]=Wr.y,r[9]=Zt.y,r[2]=Xn.z,r[6]=Wr.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],b=n[2],g=n[6],m=n[10],f=n[14],v=n[3],x=n[7],_=n[11],A=n[15],T=r[0],R=r[4],L=r[8],M=r[12],y=r[1],C=r[5],I=r[9],N=r[13],k=r[2],q=r[6],Y=r[10],se=r[14],z=r[3],ne=r[7],ae=r[11],me=r[15];return s[0]=a*T+o*y+c*k+l*z,s[4]=a*R+o*C+c*q+l*ne,s[8]=a*L+o*I+c*Y+l*ae,s[12]=a*M+o*N+c*se+l*me,s[1]=u*T+h*y+d*k+p*z,s[5]=u*R+h*C+d*q+p*ne,s[9]=u*L+h*I+d*Y+p*ae,s[13]=u*M+h*N+d*se+p*me,s[2]=b*T+g*y+m*k+f*z,s[6]=b*R+g*C+m*q+f*ne,s[10]=b*L+g*I+m*Y+f*ae,s[14]=b*M+g*N+m*se+f*me,s[3]=v*T+x*y+_*k+A*z,s[7]=v*R+x*C+_*q+A*ne,s[11]=v*L+x*I+_*Y+A*ae,s[15]=v*M+x*N+_*se+A*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],p=e[14],b=e[3],g=e[7],m=e[11],f=e[15];return b*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+g*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*u-n*l*u)+f*(-r*o*u-t*c*h+t*o*d+r*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],p=e[11],b=e[12],g=e[13],m=e[14],f=e[15],v=h*m*l-g*d*l+g*c*p-o*m*p-h*c*f+o*d*f,x=b*d*l-u*m*l-b*c*p+a*m*p+u*c*f-a*d*f,_=u*g*l-b*h*l+b*o*p-a*g*p-u*o*f+a*h*f,A=b*h*c-u*g*c-b*o*d+a*g*d+u*o*m-a*h*m,T=t*v+n*x+r*_+s*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(g*d*s-h*m*s-g*r*p+n*m*p+h*r*f-n*d*f)*R,e[2]=(o*m*s-g*c*s+g*r*l-n*m*l-o*r*f+n*c*f)*R,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*R,e[4]=x*R,e[5]=(u*m*s-b*d*s+b*r*p-t*m*p-u*r*f+t*d*f)*R,e[6]=(b*c*s-a*m*s-b*r*l+t*m*l+a*r*f-t*c*f)*R,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*p+t*c*p)*R,e[8]=_*R,e[9]=(b*h*s-u*g*s-b*n*p+t*g*p+u*n*f-t*h*f)*R,e[10]=(a*g*s-b*o*s+b*n*l-t*g*l-a*n*f+t*o*f)*R,e[11]=(u*o*s-a*h*s-u*n*l+t*h*l+a*n*p-t*o*p)*R,e[12]=A*R,e[13]=(u*g*r-b*h*r+b*n*d-t*g*d-u*n*m+t*h*m)*R,e[14]=(b*o*r-a*g*r-b*n*c+t*g*c+a*n*m-t*o*m)*R,e[15]=(a*h*r-u*o*r+u*n*c-t*h*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,p=s*u,b=s*h,g=a*u,m=a*h,f=o*h,v=c*l,x=c*u,_=c*h,A=n.x,T=n.y,R=n.z;return r[0]=(1-(g+f))*A,r[1]=(p+_)*A,r[2]=(b-x)*A,r[3]=0,r[4]=(p-_)*T,r[5]=(1-(d+f))*T,r[6]=(m+v)*T,r[7]=0,r[8]=(b+x)*R,r[9]=(m-v)*R,r[10]=(1-(d+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ai.set(r[0],r[1],r[2]).length();const a=Ai.set(r[4],r[5],r[6]).length(),o=Ai.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const l=1/s,u=1/a,h=1/o;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=h,ln.elements[9]*=h,ln.elements[10]*=h,t.setFromRotationMatrix(ln),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=An,c=!1){const l=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let b,g;if(c)b=s/(a-s),g=a*s/(a-s);else if(o===An)b=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Es)b=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=An,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let b,g;if(c)b=1/(a-s),g=a/(a-s);else if(o===An)b=-2/(a-s),g=-(a+s)/(a-s);else if(o===Es)b=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=b,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ai=new D,ln=new Ke,Kd=new D(0,0,0),Jd=new D(1,1,1),Xn=new D,Wr=new D,Zt=new D,Nc=new Ke,Uc=new Yt;class _n{constructor(e=0,t=0,n=0,r=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class ic{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const Fc=new D,Ri=new Yt,Dn=new Ke,jr=new D,hr=new D,Zd=new D,Qd=new Yt,Oc=new D(1,0,0),kc=new D(0,1,0),Bc=new D(0,0,1),zc={type:"added"},ef={type:"removed"},Ci={type:"childadded",child:null},Hs={type:"childremoved",child:null};class pt extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new D,t=new _n,n=new Yt,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(e,t){return Ri.setFromAxisAngle(e,t),this.quaternion.premultiply(Ri),this}rotateX(e){return this.rotateOnAxis(Oc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(hr,jr,this.up):Dn.lookAt(jr,hr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ri.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),Ci.child=e,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),b=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),b.length>0&&(n.nodes=b)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,Nn=new D,Gs=new D,Un=new D,Pi=new D,Li=new D,Hc=new D,Vs=new D,Ws=new D,js=new D,qs=new rt,Xs=new rt,Ys=new rt;class fn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),un.subVectors(e,t),r.cross(un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){un.subVectors(r,t),Nn.subVectors(n,t),Gs.subVectors(e,t);const a=un.dot(un),o=un.dot(Nn),c=un.dot(Gs),l=Nn.dot(Nn),u=Nn.dot(Gs),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*u)*d,b=(a*u-o*c)*d;return s.set(1-p-b,b,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Un.x),c.addScaledVector(a,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return qs.setScalar(0),Xs.setScalar(0),Ys.setScalar(0),qs.fromBufferAttribute(e,t),Xs.fromBufferAttribute(e,n),Ys.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qs,s.x),a.addScaledVector(Xs,s.y),a.addScaledVector(Ys,s.z),a}static isFrontFacing(e,t,n,r){return un.subVectors(n,t),Nn.subVectors(e,t),un.cross(Nn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),un.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Pi.subVectors(r,n),Li.subVectors(s,n),Vs.subVectors(e,n);const c=Pi.dot(Vs),l=Li.dot(Vs);if(c<=0&&l<=0)return t.copy(n);Ws.subVectors(e,r);const u=Pi.dot(Ws),h=Li.dot(Ws);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pi,a);js.subVectors(e,s);const p=Pi.dot(js),b=Li.dot(js);if(b>=0&&p<=b)return t.copy(s);const g=p*l-c*b;if(g<=0&&l>=0&&b<=0)return o=l/(l-b),t.copy(n).addScaledVector(Li,o);const m=u*b-p*h;if(m<=0&&h-u>=0&&p-b>=0)return Hc.subVectors(s,r),o=(h-u)/(h-u+(p-b)),t.copy(r).addScaledVector(Hc,o);const f=1/(m+g+d);return a=g*f,o=d*f,t.copy(n).addScaledVector(Pi,a).addScaledVector(Li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},qr={h:0,s:0,l:0};function Ks(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=tc(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Ks(a,s,e+1/3),this.g=Ks(a,s,e),this.b=Ks(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Ut){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.workingToColorSpace(kt.copy(this),e),Math.round($e(kt.r*255,0,255))*65536+Math.round($e(kt.g*255,0,255))*256+Math.round($e(kt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(kt.copy(this),t);const n=kt.r,r=kt.g,s=kt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Ut){et.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,r=kt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Yn),this.setHSL(Yn.h+e,Yn.s+t,Yn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yn),e.getHSL(qr);const n=Er(Yn.h,qr.h,t),r=Er(Yn.s,qr.s,t),s=Er(Yn.l,qr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new je;je.NAMES=zu;let tf=0;class bn extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=gn(),this.name="",this.type="Material",this.blending=gi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ha,this.blendDst=Ga,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ac,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mi,this.stencilZFail=Mi,this.stencilZPass=Mi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ha&&(n.blendSrc=this.blendSrc),this.blendDst!==Ga&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ac&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class mi extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new D,Xr=new Be;let nf=0;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ro,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xr.fromBufferAttribute(this,t),Xr.applyMatrix3(e),this.setXY(t,Xr.x,Xr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ro&&(e.usage=this.usage),e}}class Hu extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gu extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gn extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let rf=0;const sn=new Ke,Js=new pt,Ii=new D,Qt=new vn,dr=new vn,Nt=new D;class Kt extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ku(e)?Gu:Hu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return Js.lookAt(e),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Qt.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Qt.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Qt.min),this.boundingBox.expandByPoint(Qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(Qt.min,dr.min),Qt.expandByPoint(Nt),Nt.addVectors(Qt.max,dr.max),Qt.expandByPoint(Nt)):(Qt.expandByPoint(dr.min),Qt.expandByPoint(dr.max))}Qt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Nt.fromBufferAttribute(o,l),c&&(Ii.fromBufferAttribute(e,l),Nt.add(Ii)),r=Math.max(r,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new D,c[L]=new D;const l=new D,u=new D,h=new D,d=new Be,p=new Be,b=new Be,g=new D,m=new D;function f(L,M,y){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(s,L),p.fromBufferAttribute(s,M),b.fromBufferAttribute(s,y),u.sub(l),h.sub(l),p.sub(d),b.sub(d);const C=1/(p.x*b.y-b.x*p.y);isFinite(C)&&(g.copy(u).multiplyScalar(b.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-b.x).multiplyScalar(C),o[L].add(g),o[M].add(g),o[y].add(g),c[L].add(m),c[M].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,M=v.length;L<M;++L){const y=v[L],C=y.start,I=y.count;for(let N=C,k=C+I;N<k;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new D,_=new D,A=new D,T=new D;function R(L){A.fromBufferAttribute(r,L),T.copy(A);const M=o[L];x.copy(M),x.sub(A.multiplyScalar(A.dot(M))).normalize(),_.crossVectors(T,M);const C=_.dot(c[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,C)}for(let L=0,M=v.length;L<M;++L){const y=v[L],C=y.start,I=y.count;for(let N=C,k=C+I;N<k;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,p=e.count;d<p;d+=3){const b=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,b),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(b,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let p=0,b=0;for(let g=0,m=c.length;g<m;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let f=0;f<u;f++)d[b++]=l[p++]}return new St(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new Ke,oi=new nr,Yr=new xn,Vc=new D,Kr=new D,Jr=new D,$r=new D,$s=new D,Zr=new D,Wc=new D,Qr=new D;class _t extends pt{constructor(e=new Kt,t=new mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&($s.fromBufferAttribute(h,e),a?Zr.addScaledVector($s,u):Zr.addScaledVector($s.sub(t),u))}t.add(Zr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),oi.copy(e.ray).recast(e.near),!(Yr.containsPoint(oi.origin)===!1&&(oi.intersectSphere(Yr,Vc)===null||oi.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(s).invert(),oi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,oi)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){const m=d[b],f=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,A=x;_<A;_+=3){const T=o.getX(_),R=o.getX(_+1),L=o.getX(_+2);r=es(this,f,e,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){const v=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);r=es(this,a,e,n,l,u,h,v,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let b=0,g=d.length;b<g;b++){const m=d[b],f=a[m.materialIndex],v=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let _=v,A=x;_<A;_+=3){const T=_,R=_+1,L=_+2;r=es(this,f,e,n,l,u,h,T,R,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const b=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let m=b,f=g;m<f;m+=3){const v=m,x=m+1,_=m+2;r=es(this,a,e,n,l,u,h,v,x,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function sf(i,e,t,n,r,s,a,o){let c;if(e.side===Vt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Vn,o),c===null)return null;Qr.copy(o),Qr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Qr);return l<t.near||l>t.far?null:{distance:l,point:Qr.clone(),object:i}}function es(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Kr),i.getVertexPosition(c,Jr),i.getVertexPosition(l,$r);const u=sf(i,e,t,n,Kr,Jr,$r,Wc);if(u){const h=new D;fn.getBarycoord(Wc,Kr,Jr,$r,h),r&&(u.uv=fn.getInterpolatedAttribute(r,o,c,l,h,new Be)),s&&(u.uv1=fn.getInterpolatedAttribute(s,o,c,l,h,new Be)),a&&(u.normal=fn.getInterpolatedAttribute(a,o,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};fn.getNormal(Kr,Jr,$r,d.normal),u.face=d,u.barycoord=h}return u}class ir extends Kt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,p=0;b("z","y","x",-1,-1,n,t,e,a,s,0),b("z","y","x",1,-1,n,t,-e,a,s,1),b("x","z","y",1,1,e,n,t,r,a,2),b("x","z","y",1,-1,e,n,-t,r,a,3),b("x","y","z",1,-1,e,t,n,r,s,4),b("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Gn(l,3)),this.setAttribute("normal",new Gn(u,3)),this.setAttribute("uv",new Gn(h,2));function b(g,m,f,v,x,_,A,T,R,L,M){const y=_/R,C=A/L,I=_/2,N=A/2,k=T/2,q=R+1,Y=L+1;let se=0,z=0;const ne=new D;for(let ae=0;ae<Y;ae++){const me=ae*C-N;for(let Ie=0;Ie<q;Ie++){const Se=Ie*y-I;ne[g]=Se*v,ne[m]=me*x,ne[f]=k,l.push(ne.x,ne.y,ne.z),ne[g]=0,ne[m]=0,ne[f]=T>0?1:-1,u.push(ne.x,ne.y,ne.z),h.push(Ie/R),h.push(1-ae/L),se+=1}}for(let ae=0;ae<L;ae++)for(let me=0;me<R;me++){const Ie=d+me+q*ae,Se=d+me+q*(ae+1),ke=d+(me+1)+q*(ae+1),de=d+(me+1)+q*ae;c.push(Ie,Se,de),c.push(Se,ke,de),z+=6}o.addGroup(p,z,M),p+=z,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=Zi(i[t]);for(const r in n)e[r]=n[r]}return e}function af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const of={clone:Zi,merge:Gt};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new D,jc=new Be,qc=new Be;class Bt extends Wu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,jc,qc),t.subVectors(qc,jc)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Di=-90,Ni=1;class uf extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Bt(Di,Ni,e,t);r.layers=this.layers,this.add(r);const s=new Bt(Di,Ni,e,t);s.layers=this.layers,this.add(s);const a=new Bt(Di,Ni,e,t);a.layers=this.layers,this.add(a);const o=new Bt(Di,Ni,e,t);o.layers=this.layers,this.add(o);const c=new Bt(Di,Ni,e,t);c.layers=this.layers,this.add(c);const l=new Bt(Di,Ni,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Es)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=b,n.texture.needsPMREMUpdate=!0}}class ju extends Ft{constructor(e=[],t=Yi,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends _i{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ju(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ir(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ei});s.uniforms.tEquirect.value=t;const a=new _t(r,s),o=t.minFilter;return t.minFilter===Bn&&(t.minFilter=tn),new uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class mn extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class Zs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),f=this._getHandJoint(l,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,b=.005;l.inputState.pinching&&d>p+b?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-b&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Co extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ht=new D;class rc{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),r=at(r,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xc=new D,Yc=new rt,Kc=new rt,pf=new D,Jc=new Ke,ts=new D,Qs=new xn,$c=new Ke,ea=new nr;class mf extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=wc,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ts),this.boundingBox.expandByPoint(ts)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new xn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ts),this.boundingSphere.expandByPoint(ts)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(r),e.ray.intersectsSphere(Qs)!==!1&&($c.copy(r).invert(),ea.copy(e.ray).applyMatrix4($c),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===wc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Yc.fromBufferAttribute(r.attributes.skinIndex,e),Kc.fromBufferAttribute(r.attributes.skinWeight,e),Xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Kc.getComponent(s);if(a!==0){const o=Yc.getComponent(s);Jc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(pf.copy(Xc).applyMatrix4(Jc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qu extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sc extends Ft{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Wt,u=Wt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new Ke,gf=new Ke;class ac{constructor(e=[],t=[]){this.uuid=gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:gf;Zc.multiplyMatrices(o,t[s]),Zc.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ac(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new sc(t,e,e,on,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new qu),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class Po extends St{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ui=new Ke,Qc=new Ke,ns=[],el=new vn,bf=new Ke,fr=new _t,pr=new xn;class Xu extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Po(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),el.copy(e.boundingBox).applyMatrix4(Ui),this.boundingBox.union(el)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ui),pr.copy(e.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(n),e.ray.intersectsSphere(pr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ui),Qc.multiplyMatrices(n,Ui),fr.matrixWorld=Qc,fr.raycast(e,ns);for(let a=0,o=ns.length;a<o;a++){const c=ns[a];c.instanceId=s,c.object=this,t.push(c)}ns.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Po(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(r*this.count),r,this.count,Ko,pn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ta=new D,_f=new D,vf=new Ye;class kn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ta.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),r=this.coplanarPoint(ta).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new xn,xf=new Be(.5,.5),is=new D;class oc{constructor(e=new kn,t=new kn,n=new kn,r=new kn,s=new kn,a=new kn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],b=s[8],g=s[9],m=s[10],f=s[11],v=s[12],x=s[13],_=s[14],A=s[15];if(r[0].setComponents(l-a,p-u,f-b,A-v).normalize(),r[1].setComponents(l+a,p+u,f+b,A+v).normalize(),r[2].setComponents(l+o,p+h,f+g,A+x).normalize(),r[3].setComponents(l-o,p-h,f-g,A-x).normalize(),n)r[4].setComponents(c,d,m,_).normalize(),r[5].setComponents(l-c,p-d,f-m,A-_).normalize();else if(r[4].setComponents(l-c,p-d,f-m,A-_).normalize(),t===An)r[5].setComponents(l+c,p+d,f+m,A+_).normalize();else if(t===Es)r[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(e){ci.center.set(0,0,0);const t=xf.distanceTo(e.center);return ci.radius=.7071067811865476+t,ci.applyMatrix4(e.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yu extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ts=new D,ws=new D,tl=new Ke,mr=new nr,rs=new xn,na=new D,nl=new D;class cc extends pt{constructor(e=new Kt,t=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ts.fromBufferAttribute(t,r-1),ws.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ts.distanceTo(ws);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere),rs.applyMatrix4(r),rs.radius+=s,e.ray.intersectsSphere(rs)===!1)return;tl.copy(r).invert(),mr.copy(e.ray).applyMatrix4(tl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),b=Math.min(u.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=l){const f=u.getX(g),v=u.getX(g+1),x=ss(this,e,mr,c,f,v,g);x&&t.push(x)}if(this.isLineLoop){const g=u.getX(b-1),m=u.getX(p),f=ss(this,e,mr,c,g,m,b-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),b=Math.min(d.count,a.start+a.count);for(let g=p,m=b-1;g<m;g+=l){const f=ss(this,e,mr,c,g,g+1,g);f&&t.push(f)}if(this.isLineLoop){const g=ss(this,e,mr,c,b-1,p,b-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ss(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ts.fromBufferAttribute(o,r),ws.fromBufferAttribute(o,s),t.distanceSqToSegment(Ts,ws,na,nl)>n)return;na.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(na);if(!(l<e.near||l>e.far))return{distance:l,point:nl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const il=new D,rl=new D;class yf extends cc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)il.fromBufferAttribute(t,r),rl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+il.distanceTo(rl);e.setAttribute("lineDistance",new Gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends cc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class lc extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sl=new Ke,Lo=new nr,as=new xn,os=new D;class uc extends pt{constructor(e=new Kt,t=new lc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;sl.copy(r).invert(),Lo.copy(e.ray).applyMatrix4(sl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let b=d,g=p;b<g;b++){const m=l.getX(b);os.fromBufferAttribute(h,m),al(os,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let b=d,g=p;b<g;b++)os.fromBufferAttribute(h,b),al(os,b,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function al(i,e,t,n,r,s,a){const o=Lo.distanceSqToPoint(i);if(o<t){const c=new D;Lo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ku extends Ft{constructor(e,t,n=bi,r,s,a,o=Wt,c=Wt,l,u=Cr,h=1){if(u!==Cr&&u!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ju extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,p=[],b=[],g=[],m=[];for(let f=0;f<u;f++){const v=f*d-a;for(let x=0;x<l;x++){const _=x*h-s;b.push(_,-v,0),g.push(0,0,1),m.push(x/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<o;v++){const x=v+l*f,_=v+l*(f+1),A=v+1+l*(f+1),T=v+1+l*f;p.push(x,_,T),p.push(_,A,T)}this.setIndex(p),this.setAttribute("position",new Gn(b,3)),this.setAttribute("normal",new Gn(g,3)),this.setAttribute("uv",new Gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ur extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pn extends Ur{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sf extends bn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=jo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ef extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tf extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function cs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Af(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function ol(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function $u(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class kr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rf extends kr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hi,endingEnd:Hi}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gi:s=e,o=2*t-n;break;case Ms:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gi:a=e,c=2*n-t;break;case Ms:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,b=(n-t)/(r-t),g=b*b,m=g*b,f=-d*m+2*d*g-d*b,v=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*b+1,x=(-1-p)*m+(1.5+p)*g+.5*b,_=p*m-p*g;for(let A=0;A!==o;++A)s[A]=f*a[u+A]+v*a[l+A]+x*a[c+A]+_*a[h+A];return s}}class Zu extends kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*h+a[c+d]*u;return s}}class Cf extends kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class yn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Lr:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Ls:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Lr;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Ls}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&wf(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ls,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const h=o*n,d=h-n,p=h+n;for(let b=0;b!==n;++b){const g=t[h+b];if(g!==t[d+b]||g!==t[p+b]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=Ir;class rr extends yn{constructor(e,t,n){super(e,t,n)}}rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Lr;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends yn{constructor(e,t,n,r){super(e,t,n,r)}}Qu.prototype.ValueTypeName="color";class Qi extends yn{constructor(e,t,n,r){super(e,t,n,r)}}Qi.prototype.ValueTypeName="number";class Pf extends kr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Yt.slerpFlat(s,0,a,l-o,a,l,c);return s}}class er extends yn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Pf(this.times,this.values,this.getValueSize(),e)}}er.prototype.ValueTypeName="quaternion";er.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends yn{constructor(e,t,n){super(e,t,n)}}sr.prototype.ValueTypeName="string";sr.prototype.ValueBufferType=Array;sr.prototype.DefaultInterpolation=Lr;sr.prototype.InterpolantFactoryMethodLinear=void 0;sr.prototype.InterpolantFactoryMethodSmooth=void 0;class tr extends yn{constructor(e,t,n,r){super(e,t,n,r)}}tr.prototype.ValueTypeName="vector";class Io{constructor(e="",t=-1,n=[],r=Qo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(If(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(yn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=Af(c);c=ol(c,1,u),l=ol(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new Qi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,b,g){if(p.length!==0){const m=[],f=[];$u(p,m,f,b),m.length!==0&&g.push(new h(d,m,f))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let b;for(b=0;b<d.length;b++)if(d[b].morphTargets)for(let g=0;g<d[b].morphTargets.length;g++)p[d[b].morphTargets[g]]=-1;for(const g in p){const m=[],f=[];for(let v=0;v!==d[b].morphTargets.length;++v){const x=d[b];m.push(x.time),f.push(x.morphTarget===g?1:0)}r.push(new Qi(".morphTargetInfluence["+g+"]",m,f))}c=p.length*a}else{const p=".bones["+t[h].name+"]";n(tr,p+".position",d,"pos",r),n(er,p+".quaternion",d,"rot",r),n(tr,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return tr;case"color":return Qu;case"quaternion":return er;case"bool":case"boolean":return rr;case"string":return sr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function If(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lf(i.type);if(i.times===void 0){const t=[],n=[];$u(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const zn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Df{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const p=l[h],b=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return b}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nf=new Df;class ar{constructor(e){this.manager=e!==void 0?e:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ar.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fn={};class Uf extends Error{constructor(e,t){super(e),this.response=t}}class eh extends ar{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=zn.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fn[e]!==void 0){Fn[e].push({onLoad:t,onProgress:n,onError:r});return}Fn[e]=[],Fn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Fn[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),p=d?parseInt(d):0,b=p!==0;let g=0;const m=new ReadableStream({start(f){v();function v(){h.read().then(({done:x,value:_})=>{if(x)f.close();else{g+=_.byteLength;const A=new ProgressEvent("progress",{lengthComputable:b,loaded:g,total:p});for(let T=0,R=u.length;T<R;T++){const L=u[T];L.onProgress&&L.onProgress(A)}f.enqueue(_),v()}},x=>{f.error(x)})}}});return new Response(m)}else throw new Uf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return l.arrayBuffer().then(b=>p.decode(b))}}}).then(l=>{zn.add(`file:${e}`,l);const u=Fn[e];delete Fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(l)}}).catch(l=>{const u=Fn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Fn[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fi=new WeakMap;class Ff extends ar{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Fi.get(a);h===void 0&&(h=[],Fi.set(a,h)),h.push({onLoad:t,onError:r})}return a}const o=Dr("img");function c(){u(),t&&t(this);const h=Fi.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onLoad&&p.onLoad(this)}Fi.delete(this),s.manager.itemEnd(e)}function l(h){u(),r&&r(h),zn.remove(`image:${e}`);const d=Fi.get(this)||[];for(let p=0;p<d.length;p++){const b=d[p];b.onError&&b.onError(h)}Fi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),zn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Of extends ar{constructor(e){super(e)}load(e,t,n,r){const s=new Ft,a=new Ff(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Rs extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class kf extends Rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ia=new Ke,cl=new D,ll=new D;class hc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Rn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oc,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bf extends hc{constructor(){super(new Bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=$i*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zf extends Rs{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ul=new Ke,gr=new D,ra=new D;class Hf extends hc{constructor(){super(new Bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),n.position.copy(gr),ra.copy(n.position),ra.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ra),n.updateMatrixWorld(),r.makeTranslation(-gr.x,-gr.y,-gr.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,n.coordinateSystem,n.reversedDepth)}}class th extends Rs{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dc extends Wu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gf extends hc{constructor(){super(new dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Do extends Rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const sa=new WeakMap;class Vf extends ar{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=zn.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(sa.has(a)===!0)r&&r(sa.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return zn.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),sa.set(c,l),zn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});zn.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wf extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jf{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const c=t*this._origIndex;this._mixBufferRegion(n,r,c,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){Yt.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;Yt.multiplyQuaternionsFlat(e,a,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const fc="\\[\\]\\.:\\/",qf=new RegExp("["+fc+"]","g"),pc="[^"+fc+"]",Xf="[^"+fc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",pc),Kf=/(WCOD+)?/.source.replace("WCOD",Xf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pc),Zf=new RegExp("^"+Yf+Kf+Jf+$f+"$"),Qf=["material","materials","bones","map"];class ep{constructor(e,t,n){const r=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qf,"")}static parseTrackName(e){const t=Zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Qf.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=ep;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tp{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),c={endingStart:Hi,endingEnd:Hi};for(let l=0;l!==a;++l){const u=s[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=s,c[1]=s+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const c=(e-s)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case dd:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Qo:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===hd;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===Uu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const c=this.repetitions-s;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Gi,r.endingEnd=Gi):(e?r.endingStart=this.zeroSlopeAtStart?Gi:Hi:r.endingStart=Ms,t?r.endingEnd=this.zeroSlopeAtEnd?Gi:Hi:r.endingEnd=Ms)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=s,c[0]=t,o[1]=s+e,c[1]=n,this}}const np=new Float32Array(1);class ip extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==s;++h){const d=r[h],p=d.name;let b=u[p];if(b!==void 0)++b.referenceCount,a[h]=b;else{if(b=a[h],b!==void 0){b._cacheIndex===null&&(++b.referenceCount,this._addInactiveBinding(b,c,p));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;b=new jf(st.create(n,p,g),d.ValueTypeName,d.getValueSize()),++b.referenceCount,this._addInactiveBinding(b,c,p),a[h]=b}o[h].resultBuffer=b.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zu(new Float32Array(2),new Float32Array(2),1,np),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?Io.findByName(r,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Qo),c!==void 0){const h=c.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new tp(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?Io.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(r,e,s,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const hl=new Ke;class rp{constructor(e,t,n=0,r=1/0){this.ray=new nr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(e,t=!0,n=[]){return No(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)No(e[r],this,n,t);return n.sort(dl),n}}function dl(i,e){return i.distance-e.distance}function No(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)No(s[a],e,t,!0)}}class Uo{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class sp extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fl(i,e,t,n){const r=ap(n);switch(t){case Iu:return i*e;case Ko:return i*e/r.components*r.byteLength;case Jo:return i*e/r.components*r.byteLength;case Nu:return i*e*2/r.components*r.byteLength;case $o:return i*e*2/r.components*r.byteLength;case Du:return i*e*3/r.components*r.byteLength;case on:return i*e*4/r.components*r.byteLength;case Zo:return i*e*4/r.components*r.byteLength;case gs:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _s:case vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:case to:return Math.max(i,16)*Math.max(e,8)/4;case Za:case eo:return Math.max(i,8)*Math.max(e,8)/2;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case fo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case xo:case yo:case Mo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case So:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case To:case wo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(i){switch(i){case Rn:case Ru:return{byteLength:1,components:1};case Ar:case Cu:case Fr:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case bi:case qo:case pn:return{byteLength:4,components:1};case Pu:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function op(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,b)=>p.start-b.start);let d=0;for(let p=1;p<h.length;p++){const b=h[d],g=h[p];g.start<=b.start+b.count+1?b.count=Math.max(b.count,g.start+g.count-b.start):(++d,h[d]=g)}h.length=d+1;for(let p=0,b=h.length;p<b;p++){const g=h[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lp=`#ifdef USE_ALPHAHASH
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
#endif`,up=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pp=`#ifdef USE_AOMAP
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
#endif`,mp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gp=`#ifdef USE_BATCHING
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
#endif`,bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vp=`vec3 objectNormal = vec3( normal );
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
} // validated`,yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Mp=`#ifdef USE_BUMPMAP
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
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ap=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Lp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Op=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zp=`#ifdef USE_ENVMAP
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
	
#endif`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Jp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$p=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qp=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,tm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,im=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,om=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,um=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,bm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ym=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sm=`#ifdef USE_MORPHTARGETS
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
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Lm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,Nm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Om=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zm=`#ifdef DITHERING
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
#endif`,Gm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qm=`float getShadowMask() {
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
}`,Xm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ym=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,$m=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tg=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const og=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`#include <common>
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
}`,pg=`#if DEPTH_PACKING == 3200
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
}`,mg=`#define DISTANCE
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
}`,gg=`#define DISTANCE
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
}`,bg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vg=`uniform float scale;
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
}`,yg=`#include <common>
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
}`,Mg=`uniform vec3 diffuse;
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
}`,Sg=`#define LAMBERT
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
}`,Eg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,wg=`#define MATCAP
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
}`,Ag=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Lg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,Fg=`uniform vec3 diffuse;
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
}`,Og=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Je={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:bp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:wp,color_fragment:Ap,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:Op,colorspace_fragment:kp,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:jp,fog_pars_vertex:qp,fog_fragment:Xp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Zp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:bm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:wm,normal_pars_fragment:Am,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:Om,project_vertex:km,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:jm,shadowmask_pars_fragment:qm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:Zm,tonemapping_fragment:Qm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:ag,background_vert:og,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:bg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:wg,meshnormal_vert:Ag,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:Og,shadow_frag:kg,sprite_vert:Bg,sprite_frag:zg},ve={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Tn={basic:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:Gt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:Gt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:Gt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new je(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:Gt([ve.points,ve.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:Gt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:Gt([ve.common,ve.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:Gt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:Gt([ve.sprite,ve.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:Gt([ve.common,ve.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:Gt([ve.lights,ve.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Tn.physical={uniforms:Gt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const ls={r:0,b:0,g:0},li=new _n,Hg=new Ke;function Gg(i,e,t,n,r,s,a){const o=new je(0);let c=s===!0?0:1,l,u,h=null,d=0,p=null;function b(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function g(x){let _=!1;const A=b(x);A===null?f(o,c):A&&A.isColor&&(f(A,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,_){const A=b(_);A&&(A.isCubeTexture||A.mapping===As)?(u===void 0&&(u=new _t(new ir(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Zi(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),li.copy(_.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(li)),u.material.toneMapped=et.getTransfer(A.colorSpace)!==ut,(h!==A||d!==A.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new _t(new Or(2,2),new Cn({name:"BackgroundMaterial",uniforms:Zi(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=et.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function f(x,_){x.getRGB(ls,Vu(i)),n.buffers.color.setClear(ls.r,ls.g,ls.b,_,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),c=_,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,f(o,c)},render:g,addToRenderList:m,dispose:v}}function Vg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(y,C,I,N,k){let q=!1;const Y=h(N,I,C);s!==Y&&(s=Y,l(s.object)),q=p(y,N,I,k),q&&b(y,N,I,k),k!==null&&e.update(k,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(y,C,I,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,I){const N=I.wireframe===!0;let k=n[y.id];k===void 0&&(k={},n[y.id]=k);let q=k[C.id];q===void 0&&(q={},k[C.id]=q);let Y=q[N];return Y===void 0&&(Y=d(c()),q[N]=Y),Y}function d(y){const C=[],I=[],N=[];for(let k=0;k<t;k++)C[k]=0,I[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:N,object:y,attributes:{},index:null}}function p(y,C,I,N){const k=s.attributes,q=C.attributes;let Y=0;const se=I.getAttributes();for(const z in se)if(se[z].location>=0){const ae=k[z];let me=q[z];if(me===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),ae===void 0||ae.attribute!==me||me&&ae.data!==me.data)return!0;Y++}return s.attributesNum!==Y||s.index!==N}function b(y,C,I,N){const k={},q=C.attributes;let Y=0;const se=I.getAttributes();for(const z in se)if(se[z].location>=0){let ae=q[z];ae===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor));const me={};me.attribute=ae,ae&&ae.data&&(me.data=ae.data),k[z]=me,Y++}s.attributes=k,s.attributesNum=Y,s.index=N}function g(){const y=s.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const I=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;I[y]=1,N[y]===0&&(i.enableVertexAttribArray(y),N[y]=1),k[y]!==C&&(i.vertexAttribDivisor(y,C),k[y]=C)}function v(){const y=s.newAttributes,C=s.enabledAttributes;for(let I=0,N=C.length;I<N;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function x(y,C,I,N,k,q,Y){Y===!0?i.vertexAttribIPointer(y,C,I,k,q):i.vertexAttribPointer(y,C,I,N,k,q)}function _(y,C,I,N){g();const k=N.attributes,q=I.getAttributes(),Y=C.defaultAttributeValues;for(const se in q){const z=q[se];if(z.location>=0){let ne=k[se];if(ne===void 0&&(se==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),se==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),ne!==void 0){const ae=ne.normalized,me=ne.itemSize,Ie=e.get(ne);if(Ie===void 0)continue;const Se=Ie.buffer,ke=Ie.type,de=Ie.bytesPerElement,H=ke===i.INT||ke===i.UNSIGNED_INT||ne.gpuType===qo;if(ne.isInterleavedBufferAttribute){const J=ne.data,fe=J.stride,G=ne.offset;if(J.isInstancedInterleavedBuffer){for(let ee=0;ee<z.locationSize;ee++)f(z.location+ee,J.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ee=0;ee<z.locationSize;ee++)m(z.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ee=0;ee<z.locationSize;ee++)x(z.location+ee,me/z.locationSize,ke,ae,fe*de,(G+me/z.locationSize*ee)*de,H)}else{if(ne.isInstancedBufferAttribute){for(let J=0;J<z.locationSize;J++)f(z.location+J,ne.meshPerAttribute);y.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let J=0;J<z.locationSize;J++)m(z.location+J);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let J=0;J<z.locationSize;J++)x(z.location+J,me/z.locationSize,ke,ae,me*de,me/z.locationSize*J*de,H)}}else if(Y!==void 0){const ae=Y[se];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(z.location,ae);break;case 3:i.vertexAttrib3fv(z.location,ae);break;case 4:i.vertexAttrib4fv(z.location,ae);break;default:i.vertexAttrib1fv(z.location,ae)}}}}v()}function A(){L();for(const y in n){const C=n[y];for(const I in C){const N=C[I];for(const k in N)u(N[k].object),delete N[k];delete C[I]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const I in C){const N=C[I];for(const k in N)u(N[k].object),delete N[k];delete C[I]}delete n[y.id]}function R(y){for(const C in n){const I=n[C];if(I[y.id]===void 0)continue;const N=I[y.id];for(const k in N)u(N[k].object),delete N[k];delete I[y.id]}}function L(){M(),a=!0,s!==r&&(s=r,l(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function Wg(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let p=0;for(let b=0;b<h;b++)p+=u[b];t.update(p,n,1)}function c(l,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let b=0;b<l.length;b++)a(l[b],u[b],d[b]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let b=0;for(let g=0;g<h;g++)b+=u[g]*d[g];t.update(b,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jg(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==on&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const L=R===Fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!L)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=b>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:b,maxTextureSize:g,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:A,maxSamples:T}}function qg(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new kn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const b=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||b===null||b.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,x=v*4;let _=f.clippingState||null;c.value=_,_=u(b,d,x,p);for(let A=0;A!==x;++A)_[A]=t[A];f.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,b){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=c.value,b!==!0||m===null){const f=p+g*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,_=p;x!==g;++x,_+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Xg(i){let e=new WeakMap;function t(a,o){return o===Ja?a.mapping=Yi:o===$a&&(a.mapping=Ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ja||o===$a)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Vi=4,pl=[.125,.215,.35,.446,.526,.582],pi=20,aa=new dc,ml=new je;let oa=null,ca=0,la=0,ua=!1;const di=(1+Math.sqrt(5))/2,Oi=1/di,gl=[new D(-di,Oi,0),new D(di,Oi,0),new D(-Oi,0,di),new D(Oi,0,di),new D(0,di,-Oi),new D(0,di,Oi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],Yg=new D;class Fo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Yg}=s;oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(oa,ca,la),this._renderer.xr.enabled=ua,e.scissorTest=!1,us(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oa=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),la=this._renderer.getActiveMipmapLevel(),ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Fr,format:on,colorSpace:jt,depthBuffer:!1},r=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(s)),this._blurMaterial=Jg(s,e,t)}return r}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,n,r,s){const c=new Bt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(ml),h.toneMapping=ti,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const g=new mi({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),m=new _t(new ir,g);let f=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,f=!0):(g.color.copy(ml),f=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):_===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const A=this._cubeSize;us(r,_*A,x>2?A:0,A,A),h.setRenderTarget(r),f&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Yi||e.mapping===Ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;us(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,aa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gl[(r-s-1)%gl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new _t(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,b=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*pi-1),g=s/b,m=isFinite(s)?1+Math.floor(u*g):pi;m>pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${pi}`);const f=[];let v=0;for(let R=0;R<pi;++R){const L=R/g,M=Math.exp(-L*L/2);f.push(M),R===0?v+=M:R<m&&(v+=2*M)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=b,d.mipInt.value=x-n;const _=this._sizeLods[r],A=3*_*(r>x-Vi?r-x+Vi:0),T=4*(this._cubeSize-_);us(t,A,T,3*_,2*_),c.setRenderTarget(t),c.render(h,aa)}}function Kg(i){const e=[],t=[],n=[];let r=i;const s=i-Vi+1+pl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Vi?c=pl[a-i+Vi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,b=6,g=3,m=2,f=1,v=new Float32Array(g*b*p),x=new Float32Array(m*b*p),_=new Float32Array(f*b*p);for(let T=0;T<p;T++){const R=T%3*2/3-1,L=T>2?0:-1,M=[R,L,0,R+2/3,L,0,R+2/3,L+1,0,R,L,0,R+2/3,L+1,0,R,L+1,0];v.set(M,g*b*T),x.set(d,m*b*T);const y=[T,T,T,T,T,T];_.set(y,f*b*T)}const A=new Kt;A.setAttribute("position",new St(v,g)),A.setAttribute("uv",new St(x,m)),A.setAttribute("faceIndex",new St(_,f)),e.push(A),r>Vi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(i,e,t){const n=new _i(i,e,t);return n.texture.mapping=As,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function us(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Jg(i,e,t){const n=new Float32Array(pi),r=new D(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function _l(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function vl(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function $g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ja||c===$a,u=c===Yi||c===Ki;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fo(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Fo(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Nr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Qg(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const b in d.attributes)e.remove(d.attributes[b]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,b=h.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let x=0,_=v.length;x<_;x+=3){const A=v[x+0],T=v[x+1],R=v[x+2];d.push(A,T,T,R,R,A)}}else if(b!==void 0){const v=b.array;g=b.version;for(let x=0,_=v.length/3-1;x<_;x+=3){const A=x+0,T=x+1,R=x+2;d.push(A,T,T,R,R,A)}}else return;const m=new(ku(d)?Gu:Hu)(d,1);m.version=g;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function eb(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,b){b!==0&&(i.drawElementsInstanced(n,p,s,d*a,b),t.update(p,n,b))}function u(d,p,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,b);let m=0;for(let f=0;f<b;f++)m+=p[f];t.update(m,n,1)}function h(d,p,b,g){if(b===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/a,p[f],g[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,b);let f=0;for(let v=0;v<b;v++)f+=p[v]*g[v];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function nb(i,e,t){const n=new WeakMap,r=new rt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,b=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),b===!0&&(x=2),g===!0&&(x=3);let _=o.attributes.position.count*x,A=1;_>e.maxTextureSize&&(A=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*A*4*h),R=new Bu(T,_,A,h);R.type=pn,R.needsUpdate=!0;const L=x*4;for(let y=0;y<h;y++){const C=m[y],I=f[y],N=v[y],k=_*A*4*y;for(let q=0;q<C.count;q++){const Y=q*L;p===!0&&(r.fromBufferAttribute(C,q),T[k+Y+0]=r.x,T[k+Y+1]=r.y,T[k+Y+2]=r.z,T[k+Y+3]=0),b===!0&&(r.fromBufferAttribute(I,q),T[k+Y+4]=r.x,T[k+Y+5]=r.y,T[k+Y+6]=r.z,T[k+Y+7]=0),g===!0&&(r.fromBufferAttribute(N,q),T[k+Y+8]=r.x,T[k+Y+9]=r.y,T[k+Y+10]=r.z,T[k+Y+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Be(_,A)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const b=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function ib(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const ih=new Ft,xl=new Ku(1,1),rh=new Bu,sh=new Xd,ah=new ju,yl=[],Ml=[],Sl=new Float32Array(16),El=new Float32Array(9),Tl=new Float32Array(4);function or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=yl[r];if(s===void 0&&(s=new Float32Array(r),yl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Lt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function It(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cs(i,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2fv(this.addr,e),It(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;i.uniform3fv(this.addr,e),It(t,e)}}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4fv(this.addr,e),It(t,e)}}function cb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Tl.set(n),i.uniformMatrix2fv(this.addr,!1,Tl),It(t,n)}}function lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;El.set(n),i.uniformMatrix3fv(this.addr,!1,El),It(t,n)}}function ub(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Lt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Lt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),It(t,n)}}function hb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2iv(this.addr,e),It(t,e)}}function fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3iv(this.addr,e),It(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4iv(this.addr,e),It(t,e)}}function mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;i.uniform2uiv(this.addr,e),It(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;i.uniform3uiv(this.addr,e),It(t,e)}}function _b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;i.uniform4uiv(this.addr,e),It(t,e)}}function vb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=Ou,s=xl):s=ih,t.setTexture2D(e||s,r)}function xb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||sh,r)}function yb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ah,r)}function Mb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||rh,r)}function Sb(i){switch(i){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return bb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Eb(i,e){i.uniform1fv(this.addr,e)}function Tb(i,e){const t=or(e,this.size,2);i.uniform2fv(this.addr,t)}function wb(i,e){const t=or(e,this.size,3);i.uniform3fv(this.addr,t)}function Ab(i,e){const t=or(e,this.size,4);i.uniform4fv(this.addr,t)}function Rb(i,e){const t=or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cb(i,e){const t=or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pb(i,e){const t=or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lb(i,e){i.uniform1iv(this.addr,e)}function Ib(i,e){i.uniform2iv(this.addr,e)}function Db(i,e){i.uniform3iv(this.addr,e)}function Nb(i,e){i.uniform4iv(this.addr,e)}function Ub(i,e){i.uniform1uiv(this.addr,e)}function Fb(i,e){i.uniform2uiv(this.addr,e)}function Ob(i,e){i.uniform3uiv(this.addr,e)}function kb(i,e){i.uniform4uiv(this.addr,e)}function Bb(i,e,t){const n=this.cache,r=e.length,s=Cs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ih,s[a])}function zb(i,e,t){const n=this.cache,r=e.length,s=Cs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||sh,s[a])}function Hb(i,e,t){const n=this.cache,r=e.length,s=Cs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ah,s[a])}function Gb(i,e,t){const n=this.cache,r=e.length,s=Cs(t,r);Lt(n,s)||(i.uniform1iv(this.addr,s),It(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||rh,s[a])}function Vb(i){switch(i){case 5126:return Eb;case 35664:return Tb;case 35665:return wb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ib;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Ub;case 36294:return Fb;case 36295:return Ob;case 36296:return kb;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function wl(i,e){i.seq.push(e),i.map[e.id]=e}function Xb(i,e,t){const n=i.name,r=n.length;for(ha.lastIndex=0;;){const s=ha.exec(n),a=ha.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){wl(t,l===void 0?new Wb(o,i,e):new jb(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qb(o),wl(t,h)),t=h}}}class xs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Xb(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Al(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yb=37297;let Kb=0;function Jb(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rl=new Ye;function $b(i){et._getMatrix(Rl,et.workingColorSpace,i);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Ss:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Jb(i.getShaderSource(e),o)}else return s}function Zb(i,e){const t=$b(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qb(i,e){let t;switch(e){case id:t="Linear";break;case rd:t="Reinhard";break;case sd:t="Cineon";break;case Tu:t="ACESFilmic";break;case od:t="AgX";break;case cd:t="Neutral";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hs=new D;function e_(){et.getLuminanceCoefficients(hs);const i=hs.x.toFixed(4),e=hs.y.toFixed(4),t=hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function n_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function xr(i){return i!==""}function Pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const r_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(i){return i.replace(r_,a_)}const s_=new Map;function a_(i,e){let t=Je[e];if(t===void 0){const n=s_.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(i){return i.replace(o_,c_)}function c_(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function l_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===On&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Yi:case Ki:e="ENVMAP_TYPE_CUBE";break;case As:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jo:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function f_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=l_(t),l=u_(t),u=h_(t),h=d_(t),d=f_(t),p=t_(t),b=n_(s),g=r.createProgram();let m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(xr).join(`
`),f.length>0&&(f+=`
`)):(m=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),f=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ti?"#define TONE_MAPPING":"",t.toneMapping!==ti?Je.tonemapping_pars_fragment:"",t.toneMapping!==ti?Qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xr).join(`
`)),a=Oo(a),a=Pl(a,t),a=Ll(a,t),o=Oo(o),o=Pl(o,t),o=Ll(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=v+m+a,_=v+f+o,A=Al(r,r.VERTEX_SHADER,x),T=Al(r,r.FRAGMENT_SHADER,_);r.attachShader(g,A),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(C){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(g)||"",N=r.getShaderInfoLog(A)||"",k=r.getShaderInfoLog(T)||"",q=I.trim(),Y=N.trim(),se=k.trim();let z=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,A,T);else{const ae=Cl(r,A,"vertex"),me=Cl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+ae+`
`+me)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(Y===""||se==="")&&(ne=!1);ne&&(C.diagnostics={runnable:z,programLog:q,vertexShader:{log:Y,prefix:m},fragmentShader:{log:se,prefix:f}})}r.deleteShader(A),r.deleteShader(T),L=new xs(r,g),M=i_(r,g)}let L;this.getUniforms=function(){return L===void 0&&R(this),L};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,Yb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=T,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b_(e),t.set(e,n)),n}}class b_{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function __(i,e,t,n,r,s,a){const o=new ic,c=new g_,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,C,I,N){const k=I.fog,q=N.geometry,Y=M.isMeshStandardMaterial?I.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||Y),z=se&&se.mapping===As?se.image.height:null,ne=b[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ae=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,me=ae!==void 0?ae.length:0;let Ie=0;q.morphAttributes.position!==void 0&&(Ie=1),q.morphAttributes.normal!==void 0&&(Ie=2),q.morphAttributes.color!==void 0&&(Ie=3);let Se,ke,de,H;if(ne){const tt=Tn[ne];Se=tt.vertexShader,ke=tt.fragmentShader}else Se=M.vertexShader,ke=M.fragmentShader,c.update(M),de=c.getVertexShaderID(M),H=c.getFragmentShaderID(M);const J=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),G=N.isInstancedMesh===!0,ee=N.isBatchedMesh===!0,ye=!!M.map,De=!!M.matcap,E=!!se,Q=!!M.aoMap,V=!!M.lightMap,Z=!!M.bumpMap,ie=!!M.normalMap,Ne=!!M.displacementMap,he=!!M.emissiveMap,Ue=!!M.metalnessMap,mt=!!M.roughnessMap,ot=M.anisotropy>0,P=M.clearcoat>0,S=M.dispersion>0,F=M.iridescence>0,K=M.sheen>0,re=M.transmission>0,$=ot&&!!M.anisotropyMap,Le=P&&!!M.clearcoatMap,pe=P&&!!M.clearcoatNormalMap,Ee=P&&!!M.clearcoatRoughnessMap,Ae=F&&!!M.iridescenceMap,le=F&&!!M.iridescenceThicknessMap,xe=K&&!!M.sheenColorMap,Fe=K&&!!M.sheenRoughnessMap,Re=!!M.specularMap,be=!!M.specularColorMap,qe=!!M.specularIntensityMap,U=re&&!!M.transmissionMap,ce=re&&!!M.thicknessMap,ge=!!M.gradientMap,Te=!!M.alphaMap,oe=M.alphaTest>0,te=!!M.alphaHash,Ce=!!M.extensions;let Ve=ti;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const ct={shaderID:ne,shaderType:M.type,shaderName:M.name,vertexShader:Se,fragmentShader:ke,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:H,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ee,batchingColor:ee&&N._colorsTexture!==null,instancing:G,instancingColor:G&&N.instanceColor!==null,instancingMorph:G&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:jt,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:De,envMap:E,envMapMode:E&&se.mapping,envMapCubeUVHeight:z,aoMap:Q,lightMap:V,bumpMap:Z,normalMap:ie,displacementMap:d&&Ne,emissiveMap:he,normalMapObjectSpace:ie&&M.normalMapType===gd,normalMapTangentSpace:ie&&M.normalMapType===ec,metalnessMap:Ue,roughnessMap:mt,anisotropy:ot,anisotropyMap:$,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ee,dispersion:S,iridescence:F,iridescenceMap:Ae,iridescenceThicknessMap:le,sheen:K,sheenColorMap:xe,sheenRoughnessMap:Fe,specularMap:Re,specularColorMap:be,specularIntensityMap:qe,transmission:re,transmissionMap:U,thicknessMap:ce,gradientMap:ge,opaque:M.transparent===!1&&M.blending===gi&&M.alphaToCoverage===!1,alphaMap:Te,alphaTest:oe,alphaHash:te,combine:M.combine,mapUv:ye&&g(M.map.channel),aoMapUv:Q&&g(M.aoMap.channel),lightMapUv:V&&g(M.lightMap.channel),bumpMapUv:Z&&g(M.bumpMap.channel),normalMapUv:ie&&g(M.normalMap.channel),displacementMapUv:Ne&&g(M.displacementMap.channel),emissiveMapUv:he&&g(M.emissiveMap.channel),metalnessMapUv:Ue&&g(M.metalnessMap.channel),roughnessMapUv:mt&&g(M.roughnessMap.channel),anisotropyMapUv:$&&g(M.anisotropyMap.channel),clearcoatMapUv:Le&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&g(M.sheenRoughnessMap.channel),specularMapUv:Re&&g(M.specularMap.channel),specularColorMapUv:be&&g(M.specularColorMap.channel),specularIntensityMapUv:qe&&g(M.specularIntensityMap.channel),transmissionMapUv:U&&g(M.transmissionMap.channel),thicknessMapUv:ce&&g(M.thicknessMap.channel),alphaMapUv:Te&&g(M.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ie||ot),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ye||Te),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ut,decodeVideoTextureEmissive:he&&M.emissiveMap.isVideoTexture===!0&&et.getTransfer(M.emissiveMap.colorSpace)===ut,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===wn,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ce&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&M.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)y.push(C),y.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(v(y,M),x(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function v(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function _(M){const y=b[M.type];let C;if(y){const I=Tn[y];C=of.clone(I.uniforms)}else C=M.uniforms;return C}function A(M,y){let C;for(let I=0,N=u.length;I<N;I++){const k=u[I];if(k.cacheKey===y){C=k,++C.usedTimes;break}}return C===void 0&&(C=new p_(i,y,M,s),u.push(C)),C}function T(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function R(M){c.remove(M)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:u,dispose:L}}function v_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function x_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ul(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,b,g,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:b,renderOrder:h.renderOrder,z:g,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=b,f.renderOrder=h.renderOrder,f.z=g,f.group=m),e++,f}function o(h,d,p,b,g,m){const f=a(h,d,p,b,g,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function c(h,d,p,b,g,m){const f=a(h,d,p,b,g,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Nl),r.length>1&&r.sort(d||Nl)}function u(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function y_(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ul,i.set(n,[a])):r>=s.length?(a=new Ul,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function M_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function S_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let E_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function w_(i){const e=new M_,t=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const r=new D,s=new Ke,a=new Ke;function o(l){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,b=0,g=0,m=0,f=0,v=0,x=0,_=0,A=0,T=0,R=0;l.sort(T_);for(let M=0,y=l.length;M<y;M++){const C=l[M],I=C.color,N=C.intensity,k=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*N,h+=I.g*N,d+=I.b*N;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],N);R++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const se=C.shadow,z=t.get(C);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=Y,p++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(I).multiplyScalar(N),Y.distance=k,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[g]=Y;const se=C.shadow;if(C.map&&(n.spotLightMap[A]=C.map,A++,se.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[g]=se.matrix,C.castShadow){const z=t.get(C);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,n.spotShadow[g]=z,n.spotShadowMap[g]=q,_++}g++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(I).multiplyScalar(N),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=Y,m++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const se=C.shadow,z=t.get(C);z.shadowIntensity=se.intensity,z.shadowBias=se.bias,z.shadowNormalBias=se.normalBias,z.shadowRadius=se.radius,z.shadowMapSize=se.mapSize,z.shadowCameraNear=se.camera.near,z.shadowCameraFar=se.camera.far,n.pointShadow[b]=z,n.pointShadowMap[b]=q,n.pointShadowMatrix[b]=C.shadow.matrix,x++}n.point[b]=Y,b++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(N),Y.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[f]=Y,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==p||L.pointLength!==b||L.spotLength!==g||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==_||L.numSpotMaps!==A||L.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=m,n.point.length=b,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,L.directionalLength=p,L.pointLength=b,L.spotLength=g,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=_,L.numSpotMaps=A,L.numLightProbes=R,n.version=E_++)}function c(l,u){let h=0,d=0,p=0,b=0,g=0;const m=u.matrixWorldInverse;for(let f=0,v=l.length;f<v;f++){const x=l[f];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(x.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const _=n.rectArea[b];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),b++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const _=n.hemi[g];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),g++}}}return{setup:o,setupView:c,state:n}}function Fl(i){const e=new w_(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function A_(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Fl(i),e.set(r,[o])):s>=a.length?(o=new Fl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`;function P_(i,e,t){let n=new oc;const r=new Be,s=new Be,a=new rt,o=new Ef({depthPacking:md}),c=new Tf,l={},u=t.maxTextureSize,h={[Vn]:Vt,[Vt]:Vn,[wn]:wn},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const b=new Kt;b.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new _t(b,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let f=this.type;this.render=function(T,R,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ei),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=f!==On&&this.type===On,k=f===On&&this.type!==On;for(let q=0,Y=T.length;q<Y;q++){const se=T[q],z=se.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const ne=z.getFrameExtents();if(r.multiply(ne),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,z.mapSize.y=s.y)),z.map===null||N===!0||k===!0){const me=this.type!==On?{minFilter:Wt,magFilter:Wt}:{};z.map!==null&&z.map.dispose(),z.map=new _i(r.x,r.y,me),z.map.texture.name=se.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const ae=z.getViewportCount();for(let me=0;me<ae;me++){const Ie=z.getViewport(me);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),I.viewport(a),z.updateMatrices(se,me),n=z.getFrustum(),_(R,L,z.camera,se,this.type)}z.isPointLightShadow!==!0&&this.type===On&&v(z,L),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,C)};function v(T,R){const L=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _i(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,L,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,L,p,g,null)}function x(T,R,L,M){let y=null;const C=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=L.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=y.uuid,N=R.uuid;let k=l[I];k===void 0&&(k={},l[I]=k);let q=k[N];q===void 0&&(q=y.clone(),k[N]=q,R.addEventListener("dispose",A)),y=q}if(y.visible=R.visible,y.wireframe=R.wireframe,M===On?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:h[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=L}return y}function _(T,R,L,M,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===On)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const N=e.update(T),k=T.material;if(Array.isArray(k)){const q=N.groups;for(let Y=0,se=q.length;Y<se;Y++){const z=q[Y],ne=k[z.materialIndex];if(ne&&ne.visible){const ae=x(T,ne,M,y);T.onBeforeShadow(i,T,R,L,N,ae,z),i.renderBufferDirect(L,null,N,ae,T,z),T.onAfterShadow(i,T,R,L,N,ae,z)}}}else if(k.visible){const q=x(T,k,M,y);T.onBeforeShadow(i,T,R,L,N,q,null),i.renderBufferDirect(L,null,N,q,T,null),T.onAfterShadow(i,T,R,L,N,q,null)}}const I=T.children;for(let N=0,k=I.length;N<k;N++)_(I[N],R,L,M,y)}function A(T){T.target.removeEventListener("dispose",A);for(const L in l){const M=l[L],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const L_={[Va]:Wa,[ja]:Ya,[qa]:Ka,[Xi]:Xa,[Wa]:Va,[Ya]:ja,[Ka]:qa,[Xa]:Xi};function I_(i,e){function t(){let U=!1;const ce=new rt;let ge=null;const Te=new rt(0,0,0,0);return{setMask:function(oe){ge!==oe&&!U&&(i.colorMask(oe,oe,oe,oe),ge=oe)},setLocked:function(oe){U=oe},setClear:function(oe,te,Ce,Ve,ct){ct===!0&&(oe*=Ve,te*=Ve,Ce*=Ve),ce.set(oe,te,Ce,Ve),Te.equals(ce)===!1&&(i.clearColor(oe,te,Ce,Ve),Te.copy(ce))},reset:function(){U=!1,ge=null,Te.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,ge=null,Te=null,oe=null;return{setReversed:function(te){if(ce!==te){const Ce=e.get("EXT_clip_control");te?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),ce=te;const Ve=oe;oe=null,this.setClear(Ve)}},getReversed:function(){return ce},setTest:function(te){te?J(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(te){ge!==te&&!U&&(i.depthMask(te),ge=te)},setFunc:function(te){if(ce&&(te=L_[te]),Te!==te){switch(te){case Va:i.depthFunc(i.NEVER);break;case Wa:i.depthFunc(i.ALWAYS);break;case ja:i.depthFunc(i.LESS);break;case Xi:i.depthFunc(i.LEQUAL);break;case qa:i.depthFunc(i.EQUAL);break;case Xa:i.depthFunc(i.GEQUAL);break;case Ya:i.depthFunc(i.GREATER);break;case Ka:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Te=te}},setLocked:function(te){U=te},setClear:function(te){oe!==te&&(ce&&(te=1-te),i.clearDepth(te),oe=te)},reset:function(){U=!1,ge=null,Te=null,oe=null,ce=!1}}}function r(){let U=!1,ce=null,ge=null,Te=null,oe=null,te=null,Ce=null,Ve=null,ct=null;return{setTest:function(tt){U||(tt?J(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(tt){ce!==tt&&!U&&(i.stencilMask(tt),ce=tt)},setFunc:function(tt,X,_e){(ge!==tt||Te!==X||oe!==_e)&&(i.stencilFunc(tt,X,_e),ge=tt,Te=X,oe=_e)},setOp:function(tt,X,_e){(te!==tt||Ce!==X||Ve!==_e)&&(i.stencilOp(tt,X,_e),te=tt,Ce=X,Ve=_e)},setLocked:function(tt){U=tt},setClear:function(tt){ct!==tt&&(i.clearStencil(tt),ct=tt)},reset:function(){U=!1,ce=null,ge=null,Te=null,oe=null,te=null,Ce=null,Ve=null,ct=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,f=null,v=null,x=null,_=null,A=null,T=null,R=new je(0,0,0),L=0,M=!1,y=null,C=null,I=null,N=null,k=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=se>=1):z.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=se>=2);let ne=null,ae={};const me=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Se=new rt().fromArray(me),ke=new rt().fromArray(Ie);function de(U,ce,ge,Te){const oe=new Uint8Array(4),te=i.createTexture();i.bindTexture(U,te),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<ge;Ce++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Te,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(ce+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return te}const H={};H[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(Xi),Z(!1),ie(Mc),J(i.CULL_FACE),Q(ei);function J(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function fe(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function G(U,ce){return h[U]!==ce?(i.bindFramebuffer(U,ce),h[U]=ce,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function ee(U,ce){let ge=p,Te=!1;if(U){ge=d.get(ce),ge===void 0&&(ge=[],d.set(ce,ge));const oe=U.textures;if(ge.length!==oe.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Ce=oe.length;te<Ce;te++)ge[te]=i.COLOR_ATTACHMENT0+te;ge.length=oe.length,Te=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Te=!0);Te&&i.drawBuffers(ge)}function ye(U){return b!==U?(i.useProgram(U),b=U,!0):!1}const De={[fi]:i.FUNC_ADD,[kh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};De[zh]=i.MIN,De[Hh]=i.MAX;const E={[Gh]:i.ZERO,[Vh]:i.ONE,[Wh]:i.SRC_COLOR,[Ha]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Ga]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function Q(U,ce,ge,Te,oe,te,Ce,Ve,ct,tt){if(U===ei){g===!0&&(fe(i.BLEND),g=!1);return}if(g===!1&&(J(i.BLEND),g=!0),U!==Oh){if(U!==m||tt!==M){if((f!==fi||_!==fi)&&(i.blendEquation(i.FUNC_ADD),f=fi,_=fi),tt)switch(U){case gi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}v=null,x=null,A=null,T=null,R.set(0,0,0),L=0,m=U,M=tt}return}oe=oe||ce,te=te||ge,Ce=Ce||Te,(ce!==f||oe!==_)&&(i.blendEquationSeparate(De[ce],De[oe]),f=ce,_=oe),(ge!==v||Te!==x||te!==A||Ce!==T)&&(i.blendFuncSeparate(E[ge],E[Te],E[te],E[Ce]),v=ge,x=Te,A=te,T=Ce),(Ve.equals(R)===!1||ct!==L)&&(i.blendColor(Ve.r,Ve.g,Ve.b,ct),R.copy(Ve),L=ct),m=U,M=!1}function V(U,ce){U.side===wn?fe(i.CULL_FACE):J(i.CULL_FACE);let ge=U.side===Vt;ce&&(ge=!ge),Z(ge),U.blending===gi&&U.transparent===!1?Q(ei):Q(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Te=U.stencilWrite;o.setTest(Te),Te&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),he(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(U){y!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),y=U)}function ie(U){U!==Nh?(J(i.CULL_FACE),U!==C&&(U===Mc?i.cullFace(i.BACK):U===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),C=U}function Ne(U){U!==I&&(Y&&i.lineWidth(U),I=U)}function he(U,ce,ge){U?(J(i.POLYGON_OFFSET_FILL),(N!==ce||k!==ge)&&(i.polygonOffset(ce,ge),N=ce,k=ge)):fe(i.POLYGON_OFFSET_FILL)}function Ue(U){U?J(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function mt(U){U===void 0&&(U=i.TEXTURE0+q-1),ne!==U&&(i.activeTexture(U),ne=U)}function ot(U,ce,ge){ge===void 0&&(ne===null?ge=i.TEXTURE0+q-1:ge=ne);let Te=ae[ge];Te===void 0&&(Te={type:void 0,texture:void 0},ae[ge]=Te),(Te.type!==U||Te.texture!==ce)&&(ne!==ge&&(i.activeTexture(ge),ne=ge),i.bindTexture(U,ce||H[U]),Te.type=U,Te.texture=ce)}function P(){const U=ae[ne];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function re(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(U){Se.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Se.copy(U))}function Fe(U){ke.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),ke.copy(U))}function Re(U,ce){let ge=l.get(ce);ge===void 0&&(ge=new WeakMap,l.set(ce,ge));let Te=ge.get(U);Te===void 0&&(Te=i.getUniformBlockIndex(ce,U.name),ge.set(U,Te))}function be(U,ce){const Te=l.get(ce).get(U);c.get(ce)!==Te&&(i.uniformBlockBinding(ce,Te,U.__bindingPointIndex),c.set(ce,Te))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ne=null,ae={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,f=null,v=null,x=null,_=null,A=null,T=null,R=new je(0,0,0),L=0,M=!1,y=null,C=null,I=null,N=null,k=null,Se.set(0,0,i.canvas.width,i.canvas.height),ke.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:fe,bindFramebuffer:G,drawBuffers:ee,useProgram:ye,setBlending:Q,setMaterial:V,setFlipSided:Z,setCullFace:ie,setLineWidth:Ne,setPolygonOffset:he,setScissorTest:Ue,activeTexture:mt,bindTexture:ot,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:Ae,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:be,texStorage2D:pe,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:re,compressedTexSubImage2D:$,compressedTexSubImage3D:Le,scissor:xe,viewport:Fe,reset:qe}}function D_(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Be,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,S){return p?new OffscreenCanvas(P,S):Dr("canvas")}function g(P,S,F){let K=1;const re=ot(P);if((re.width>F||re.height>F)&&(K=F/Math.max(re.width,re.height)),K<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const $=Math.floor(K*re.width),Le=Math.floor(K*re.height);h===void 0&&(h=b($,Le));const pe=S?b($,Le):h;return pe.width=$,pe.height=Le,pe.getContext("2d").drawImage(P,0,0,$,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+$+"x"+Le+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){i.generateMipmap(P)}function v(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(P,S,F,K,re=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let $=S;if(S===i.RED&&(F===i.FLOAT&&($=i.R32F),F===i.HALF_FLOAT&&($=i.R16F),F===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.R8UI),F===i.UNSIGNED_SHORT&&($=i.R16UI),F===i.UNSIGNED_INT&&($=i.R32UI),F===i.BYTE&&($=i.R8I),F===i.SHORT&&($=i.R16I),F===i.INT&&($=i.R32I)),S===i.RG&&(F===i.FLOAT&&($=i.RG32F),F===i.HALF_FLOAT&&($=i.RG16F),F===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RG8UI),F===i.UNSIGNED_SHORT&&($=i.RG16UI),F===i.UNSIGNED_INT&&($=i.RG32UI),F===i.BYTE&&($=i.RG8I),F===i.SHORT&&($=i.RG16I),F===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGB8UI),F===i.UNSIGNED_SHORT&&($=i.RGB16UI),F===i.UNSIGNED_INT&&($=i.RGB32UI),F===i.BYTE&&($=i.RGB8I),F===i.SHORT&&($=i.RGB16I),F===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&($=i.RGBA8UI),F===i.UNSIGNED_SHORT&&($=i.RGBA16UI),F===i.UNSIGNED_INT&&($=i.RGBA32UI),F===i.BYTE&&($=i.RGBA8I),F===i.SHORT&&($=i.RGBA16I),F===i.INT&&($=i.RGBA32I)),S===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const Le=re?Ss:et.getTransfer(K);F===i.FLOAT&&($=i.RGBA32F),F===i.HALF_FLOAT&&($=i.RGBA16F),F===i.UNSIGNED_BYTE&&($=Le===ut?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(P,S){let F;return P?S===null||S===bi||S===Rr?F=i.DEPTH24_STENCIL8:S===pn?F=i.DEPTH32F_STENCIL8:S===Ar&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===bi||S===Rr?F=i.DEPTH_COMPONENT24:S===pn?F=i.DEPTH_COMPONENT32F:S===Ar&&(F=i.DEPTH_COMPONENT16),F}function A(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==tn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function T(P){const S=P.target;S.removeEventListener("dispose",T),L(S),S.isVideoTexture&&u.delete(S)}function R(P){const S=P.target;S.removeEventListener("dispose",R),y(S)}function L(P){const S=n.get(P);if(S.__webglInit===void 0)return;const F=P.source,K=d.get(F);if(K){const re=K[S.__cacheKey];re.usedTimes--,re.usedTimes===0&&M(P),Object.keys(K).length===0&&d.delete(F)}n.remove(P)}function M(P){const S=n.get(P);i.deleteTexture(S.__webglTexture);const F=P.source,K=d.get(F);delete K[S.__cacheKey],a.memory.textures--}function y(P){const S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let re=0;re<S.__webglFramebuffer[K].length;re++)i.deleteFramebuffer(S.__webglFramebuffer[K][re]);else i.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)i.deleteFramebuffer(S.__webglFramebuffer[K]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=P.textures;for(let K=0,re=F.length;K<re;K++){const $=n.get(F[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(F[K])}n.remove(P)}let C=0;function I(){C=0}function N(){const P=C;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),C+=1,P}function k(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function q(P,S){const F=n.get(P);if(P.isVideoTexture&&Ue(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&F.__version!==P.version){const K=P.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(F,P,S);return}}else P.isExternalTexture&&(F.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function Y(P,S){const F=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){H(F,P,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function se(P,S){const F=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&F.__version!==P.version){H(F,P,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function z(P,S){const F=n.get(P);if(P.version>0&&F.__version!==P.version){J(F,P,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}const ne={[Ji]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[ys]:i.MIRRORED_REPEAT},ae={[Wt]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[vr]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ms]:i.LINEAR_MIPMAP_NEAREST,[Bn]:i.LINEAR_MIPMAP_LINEAR},me={[bd]:i.NEVER,[Sd]:i.ALWAYS,[_d]:i.LESS,[Ou]:i.LEQUAL,[vd]:i.EQUAL,[Md]:i.GEQUAL,[xd]:i.GREATER,[yd]:i.NOTEQUAL};function Ie(P,S){if(S.type===pn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===tn||S.magFilter===ms||S.magFilter===vr||S.magFilter===Bn||S.minFilter===tn||S.minFilter===ms||S.minFilter===vr||S.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ne[S.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ne[S.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ne[S.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ae[S.minFilter]),S.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==vr&&S.minFilter!==Bn||S.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Se(P,S){let F=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",T));const K=S.source;let re=d.get(K);re===void 0&&(re={},d.set(K,re));const $=k(S);if($!==P.__cacheKey){re[$]===void 0&&(re[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),re[$].usedTimes++;const Le=re[P.__cacheKey];Le!==void 0&&(re[P.__cacheKey].usedTimes--,Le.usedTimes===0&&M(S)),P.__cacheKey=$,P.__webglTexture=re[$].texture}return F}function ke(P,S,F){return Math.floor(Math.floor(P/F)/S)}function de(P,S,F,K){const $=P.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,F,K,S.data);else{$.sort((le,xe)=>le.start-xe.start);let Le=0;for(let le=1;le<$.length;le++){const xe=$[Le],Fe=$[le],Re=xe.start+xe.count,be=ke(Fe.start,S.width,4),qe=ke(xe.start,S.width,4);Fe.start<=Re+1&&be===qe&&ke(Fe.start+Fe.count-1,S.width,4)===be?xe.count=Math.max(xe.count,Fe.start+Fe.count-xe.start):(++Le,$[Le]=Fe)}$.length=Le+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let le=0,xe=$.length;le<xe;le++){const Fe=$[le],Re=Math.floor(Fe.start/4),be=Math.ceil(Fe.count/4),qe=Re%S.width,U=Math.floor(Re/S.width),ce=be,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,qe,U,ce,ge,F,K,S.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function H(P,S,F){let K=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=i.TEXTURE_3D);const re=Se(P,S),$=S.source;t.bindTexture(K,P.__webglTexture,i.TEXTURE0+F);const Le=n.get($);if($.version!==Le.__version||re===!0){t.activeTexture(i.TEXTURE0+F);const pe=et.getPrimaries(et.workingColorSpace),Ee=S.colorSpace===Zn?null:et.getPrimaries(S.colorSpace),Ae=S.colorSpace===Zn||pe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let le=g(S.image,!1,r.maxTextureSize);le=mt(S,le);const xe=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type);let Re=x(S.internalFormat,xe,Fe,S.colorSpace,S.isVideoTexture);Ie(K,S);let be;const qe=S.mipmaps,U=S.isVideoTexture!==!0,ce=Le.__version===void 0||re===!0,ge=$.dataReady,Te=A(S,le);if(S.isDepthTexture)Re=_(S.format===Pr,S.type),ce&&(U?t.texStorage2D(i.TEXTURE_2D,1,Re,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Re,le.width,le.height,0,xe,Fe,null));else if(S.isDataTexture)if(qe.length>0){U&&ce&&t.texStorage2D(i.TEXTURE_2D,Te,Re,qe[0].width,qe[0].height);for(let oe=0,te=qe.length;oe<te;oe++)be=qe[oe],U?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,xe,Fe,be.data):t.texImage2D(i.TEXTURE_2D,oe,Re,be.width,be.height,0,xe,Fe,be.data);S.generateMipmaps=!1}else U?(ce&&t.texStorage2D(i.TEXTURE_2D,Te,Re,le.width,le.height),ge&&de(S,le,xe,Fe)):t.texImage2D(i.TEXTURE_2D,0,Re,le.width,le.height,0,xe,Fe,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){U&&ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Re,qe[0].width,qe[0].height,le.depth);for(let oe=0,te=qe.length;oe<te;oe++)if(be=qe[oe],S.format!==on)if(xe!==null)if(U){if(ge)if(S.layerUpdates.size>0){const Ce=fl(be.width,be.height,S.format,S.type);for(const Ve of S.layerUpdates){const ct=be.data.subarray(Ve*Ce/be.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ve,be.width,be.height,1,xe,ct)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,le.depth,xe,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Re,be.width,be.height,le.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,be.width,be.height,le.depth,xe,Fe,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Re,be.width,be.height,le.depth,0,xe,Fe,be.data)}else{U&&ce&&t.texStorage2D(i.TEXTURE_2D,Te,Re,qe[0].width,qe[0].height);for(let oe=0,te=qe.length;oe<te;oe++)be=qe[oe],S.format!==on?xe!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,xe,be.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Re,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,be.width,be.height,xe,Fe,be.data):t.texImage2D(i.TEXTURE_2D,oe,Re,be.width,be.height,0,xe,Fe,be.data)}else if(S.isDataArrayTexture)if(U){if(ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Re,le.width,le.height,le.depth),ge)if(S.layerUpdates.size>0){const oe=fl(le.width,le.height,S.format,S.type);for(const te of S.layerUpdates){const Ce=le.data.subarray(te*oe/le.data.BYTES_PER_ELEMENT,(te+1)*oe/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,le.width,le.height,1,xe,Fe,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,Fe,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,le.width,le.height,le.depth,0,xe,Fe,le.data);else if(S.isData3DTexture)U?(ce&&t.texStorage3D(i.TEXTURE_3D,Te,Re,le.width,le.height,le.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,Fe,le.data)):t.texImage3D(i.TEXTURE_3D,0,Re,le.width,le.height,le.depth,0,xe,Fe,le.data);else if(S.isFramebufferTexture){if(ce)if(U)t.texStorage2D(i.TEXTURE_2D,Te,Re,le.width,le.height);else{let oe=le.width,te=le.height;for(let Ce=0;Ce<Te;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Re,oe,te,0,xe,Fe,null),oe>>=1,te>>=1}}else if(qe.length>0){if(U&&ce){const oe=ot(qe[0]);t.texStorage2D(i.TEXTURE_2D,Te,Re,oe.width,oe.height)}for(let oe=0,te=qe.length;oe<te;oe++)be=qe[oe],U?ge&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,xe,Fe,be):t.texImage2D(i.TEXTURE_2D,oe,Re,xe,Fe,be);S.generateMipmaps=!1}else if(U){if(ce){const oe=ot(le);t.texStorage2D(i.TEXTURE_2D,Te,Re,oe.width,oe.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,xe,Fe,le)}else t.texImage2D(i.TEXTURE_2D,0,Re,xe,Fe,le);m(S)&&f(K),Le.__version=$.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function J(P,S,F){if(S.image.length!==6)return;const K=Se(P,S),re=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+F);const $=n.get(re);if(re.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+F);const Le=et.getPrimaries(et.workingColorSpace),pe=S.colorSpace===Zn?null:et.getPrimaries(S.colorSpace),Ee=S.colorSpace===Zn||Le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let te=0;te<6;te++)!Ae&&!le?xe[te]=g(S.image[te],!0,r.maxCubemapSize):xe[te]=le?S.image[te].image:S.image[te],xe[te]=mt(S,xe[te]);const Fe=xe[0],Re=s.convert(S.format,S.colorSpace),be=s.convert(S.type),qe=x(S.internalFormat,Re,be,S.colorSpace),U=S.isVideoTexture!==!0,ce=$.__version===void 0||K===!0,ge=re.dataReady;let Te=A(S,Fe);Ie(i.TEXTURE_CUBE_MAP,S);let oe;if(Ae){U&&ce&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,qe,Fe.width,Fe.height);for(let te=0;te<6;te++){oe=xe[te].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];S.format!==on?Re!==null?U?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,qe,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,0,0,Ve.width,Ve.height,Re,be,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce,qe,Ve.width,Ve.height,0,Re,be,Ve.data)}}}else{if(oe=S.mipmaps,U&&ce){oe.length>0&&Te++;const te=ot(xe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,qe,te.width,te.height)}for(let te=0;te<6;te++)if(le){U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,xe[te].width,xe[te].height,Re,be,xe[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,xe[te].width,xe[te].height,0,Re,be,xe[te].data);for(let Ce=0;Ce<oe.length;Ce++){const ct=oe[Ce].image[te].image;U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,ct.width,ct.height,Re,be,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,qe,ct.width,ct.height,0,Re,be,ct.data)}}else{U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Re,be,xe[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,qe,Re,be,xe[te]);for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];U?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,0,0,Re,be,Ve.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ce+1,qe,Re,be,Ve.image[te])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),$.__version=re.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function fe(P,S,F,K,re,$){const Le=s.convert(F.format,F.colorSpace),pe=s.convert(F.type),Ee=x(F.internalFormat,Le,pe,F.colorSpace),Ae=n.get(S),le=n.get(F);if(le.__renderTarget=S,!Ae.__hasExternalTextures){const xe=Math.max(1,S.width>>$),Fe=Math.max(1,S.height>>$);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,$,Ee,xe,Fe,S.depth,0,Le,pe,null):t.texImage2D(re,$,Ee,xe,Fe,0,Le,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,re,le.__webglTexture,0,Ne(S)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,re,le.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function G(P,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,P),S.depthBuffer){const K=S.depthTexture,re=K&&K.isDepthTexture?K.type:null,$=_(S.stencilBuffer,re),Le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Ne(S);he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,$,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,P)}else{const K=S.textures;for(let re=0;re<K.length;re++){const $=K[re],Le=s.convert($.format,$.colorSpace),pe=s.convert($.type),Ee=x($.internalFormat,Le,pe,$.colorSpace),Ae=Ne(S);F&&he(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Ee,S.width,S.height):he(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,Ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(S.depthTexture);K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const re=K.__webglTexture,$=Ne(S);if(S.depthTexture.format===Cr)he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===Pr)he(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ye(P){const S=n.get(P),F=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const K=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const re=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",re)};K.addEventListener("dispose",re),S.__depthDisposeCallback=re}S.__boundDepthTexture=K}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const K=P.texture.mipmaps;K&&K.length>0?ee(S.__webglFramebuffer[0],P):ee(S.__webglFramebuffer,P)}else if(F){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=i.createRenderbuffer(),G(S.__webglDepthbuffer[K],P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,$)}}else{const K=P.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),G(S.__webglDepthbuffer,P,!1);else{const re=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(P,S,F){const K=n.get(P);S!==void 0&&fe(K.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ye(P)}function E(P){const S=P.texture,F=n.get(P),K=n.get(S);P.addEventListener("dispose",R);const re=P.textures,$=P.isWebGLCubeRenderTarget===!0,Le=re.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=S.version,a.memory.textures++),$){F.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[pe]=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)F.__webglFramebuffer[pe][Ee]=i.createFramebuffer()}else F.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)F.__webglFramebuffer[pe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Le)for(let pe=0,Ee=re.length;pe<Ee;pe++){const Ae=n.get(re[pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&he(P)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const Ee=re[pe];F.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[pe]);const Ae=s.convert(Ee.format,Ee.colorSpace),le=s.convert(Ee.type),xe=x(Ee.internalFormat,Ae,le,Ee.colorSpace,P.isXRRenderTarget===!0),Fe=Ne(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,xe,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,F.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),G(F.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)fe(F.__webglFramebuffer[pe][Ee],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ee);else fe(F.__webglFramebuffer[pe],P,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,Ee=re.length;pe<Ee;pe++){const Ae=re[pe],le=n.get(Ae);let xe=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(xe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,le.__webglTexture),Ie(xe,Ae),fe(F.__webglFramebuffer,P,Ae,i.COLOR_ATTACHMENT0+pe,xe,0),m(Ae)&&f(xe)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,K.__webglTexture),Ie(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let Ee=0;Ee<S.mipmaps.length;Ee++)fe(F.__webglFramebuffer[Ee],P,S,i.COLOR_ATTACHMENT0,pe,Ee);else fe(F.__webglFramebuffer,P,S,i.COLOR_ATTACHMENT0,pe,0);m(S)&&f(pe),t.unbindTexture()}P.depthBuffer&&ye(P)}function Q(P){const S=P.textures;for(let F=0,K=S.length;F<K;F++){const re=S[F];if(m(re)){const $=v(P),Le=n.get(re).__webglTexture;t.bindTexture($,Le),f($),t.unbindTexture()}}}const V=[],Z=[];function ie(P){if(P.samples>0){if(he(P)===!1){const S=P.textures,F=P.width,K=P.height;let re=i.COLOR_BUFFER_BIT;const $=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(P),pe=S.length>1;if(pe)for(let Ae=0;Ae<S.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ee=P.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ae=0;Ae<S.length;Ae++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);const le=n.get(S[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,F,K,0,0,F,K,re,i.NEAREST),c===!0&&(V.length=0,Z.length=0,V.push(i.COLOR_ATTACHMENT0+Ae),P.depthBuffer&&P.resolveDepthBuffer===!1&&(V.push($),Z.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Z)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,V))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ae=0;Ae<S.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ae]);const le=n.get(S[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){const S=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ne(P){return Math.min(r.maxSamples,P.samples)}function he(P){const S=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ue(P){const S=a.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function mt(P,S){const F=P.colorSpace,K=P.format,re=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||F!==jt&&F!==Zn&&(et.getTransfer(F)===ut?(K!==on||re!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=q,this.setTexture2DArray=Y,this.setTexture3D=se,this.setTextureCube=z,this.rebindTextures=De,this.setupRenderTarget=E,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=he}function N_(i,e){function t(n,r=Zn){let s;const a=et.getTransfer(r);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return i.BYTE;if(n===Cu)return i.SHORT;if(n===Ar)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Fr)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Du)return i.RGB;if(n===on)return i.RGBA;if(n===Cr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Ko)return i.RED;if(n===Jo)return i.RED_INTEGER;if(n===Nu)return i.RG;if(n===$o)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===gs||n===bs||n===_s||n===vs)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===Qa||n===eo||n===to)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===to)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===no||n===io||n===ro)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===no||n===io)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ro)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===so||n===ao||n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===go||n===bo||n===_o||n===vo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===so)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ao)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===oo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===co)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===po)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===go)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_o)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xo||n===yo||n===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===xo)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===So||n===Eo||n===To||n===wo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===So)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Eo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===To)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
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

}`;class O_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends ni{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,b=null;const g=typeof XRWebGLBinding<"u",m=new O_,f={},v=t.getContextAttributes();let x=null,_=null;const A=[],T=[],R=new Be;let L=null;const M=new Bt;M.viewport=new rt;const y=new Bt;y.viewport=new rt;const C=[M,y],I=new Wf;let N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let J=A[H];return J===void 0&&(J=new Zs,A[H]=J),J.getTargetRaySpace()},this.getControllerGrip=function(H){let J=A[H];return J===void 0&&(J=new Zs,A[H]=J),J.getGripSpace()},this.getHand=function(H){let J=A[H];return J===void 0&&(J=new Zs,A[H]=J),J.getHandSpace()};function q(H){const J=T.indexOf(H.inputSource);if(J===-1)return;const fe=A[J];fe!==void 0&&(fe.update(H.inputSource,H.frame,l||a),fe.dispatchEvent({type:H.type,data:H.inputSource}))}function Y(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",se);for(let H=0;H<A.length;H++){const J=T[H];J!==null&&(T[H]=null,A[H].disconnect(J))}N=null,k=null,m.reset();for(const H in f)delete f[H];e.setRenderTarget(x),p=null,d=null,h=null,r=null,_=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return b},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",se),v.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,G=null,ee=null;v.depth&&(ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?Pr:Cr,G=v.stencil?Rr:bi);const ye={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new _i(d.textureWidth,d.textureHeight,{format:on,type:Rn,depthTexture:new Ku(d.textureWidth,d.textureHeight,G,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new _i(p.framebufferWidth,p.framebufferHeight,{format:on,type:Rn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(H){for(let J=0;J<H.removed.length;J++){const fe=H.removed[J],G=T.indexOf(fe);G>=0&&(T[G]=null,A[G].disconnect(fe))}for(let J=0;J<H.added.length;J++){const fe=H.added[J];let G=T.indexOf(fe);if(G===-1){for(let ye=0;ye<A.length;ye++)if(ye>=T.length){T.push(fe),G=ye;break}else if(T[ye]===null){T[ye]=fe,G=ye;break}if(G===-1)break}const ee=A[G];ee&&ee.connect(fe)}}const z=new D,ne=new D;function ae(H,J,fe){z.setFromMatrixPosition(J.matrixWorld),ne.setFromMatrixPosition(fe.matrixWorld);const G=z.distanceTo(ne),ee=J.projectionMatrix.elements,ye=fe.projectionMatrix.elements,De=ee[14]/(ee[10]-1),E=ee[14]/(ee[10]+1),Q=(ee[9]+1)/ee[5],V=(ee[9]-1)/ee[5],Z=(ee[8]-1)/ee[0],ie=(ye[8]+1)/ye[0],Ne=De*Z,he=De*ie,Ue=G/(-Z+ie),mt=Ue*-Z;if(J.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(mt),H.translateZ(Ue),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ee[10]===-1)H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ot=De+Ue,P=E+Ue,S=Ne-mt,F=he+(G-mt),K=Q*E/P*ot,re=V*E/P*ot;H.projectionMatrix.makePerspective(S,F,K,re,ot,P),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function me(H,J){J===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(J.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let J=H.near,fe=H.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(fe=m.depthFar)),I.near=y.near=M.near=J,I.far=y.far=M.far=fe,(N!==I.near||k!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),N=I.near,k=I.far),I.layers.mask=H.layers.mask|6,M.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const G=H.parent,ee=I.cameras;me(I,G);for(let ye=0;ye<ee.length;ye++)me(ee[ye],G);ee.length===2?ae(I,M,y):I.projectionMatrix.copy(M.projectionMatrix),Ie(H,I,G)};function Ie(H,J,fe){fe===null?H.matrix.copy(J.matrixWorld):(H.matrix.copy(fe.matrixWorld),H.matrix.invert(),H.matrix.multiply(J.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(J.projectionMatrix),H.projectionMatrixInverse.copy(J.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=$i*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(H){c=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(H){return f[H]};let Se=null;function ke(H,J){if(u=J.getViewerPose(l||a),b=J,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let G=!1;fe.length!==I.cameras.length&&(I.cameras.length=0,G=!0);for(let E=0;E<fe.length;E++){const Q=fe[E];let V=null;if(p!==null)V=p.getViewport(Q);else{const ie=h.getViewSubImage(d,Q);V=ie.viewport,E===0&&(e.setRenderTargetTextures(_,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(_))}let Z=C[E];Z===void 0&&(Z=new Bt,Z.layers.enable(E),Z.viewport=new rt,C[E]=Z),Z.matrix.fromArray(Q.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(V.x,V.y,V.width,V.height),E===0&&(I.matrix.copy(Z.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),G===!0&&I.cameras.push(Z)}const ee=r.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const E=h.getDepthInformation(fe[0]);E&&E.isValid&&E.texture&&m.init(E,r.renderState)}if(ee&&ee.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let E=0;E<fe.length;E++){const Q=fe[E].camera;if(Q){let V=f[Q];V||(V=new Ju,f[Q]=V);const Z=h.getCameraImage(Q);V.sourceTexture=Z}}}}for(let fe=0;fe<A.length;fe++){const G=T[fe],ee=A[fe];G!==null&&ee!==void 0&&ee.update(G,J,l||a)}Se&&Se(H,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),b=null}const de=new nh;de.setAnimationLoop(ke),this.setAnimationLoop=function(H){Se=H},this.dispose=function(){}}}const ui=new _n,B_=new Ke;function z_(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Vu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,v,x,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),b(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,v,x):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Vt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Vt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const v=e.get(f),x=v.envMap,_=v.envMapRotation;x&&(m.envMap.value=x,ui.copy(_),ui.x*=-1,ui.y*=-1,ui.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(ui)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,v,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function b(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function H_(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const _=x.program;n.uniformBlockBinding(v,_)}function l(v,x){let _=r[v.id];_===void 0&&(b(v),_=u(v),r[v.id]=_,v.addEventListener("dispose",m));const A=x.program;n.updateUBOMapping(v,A);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const x=h();v.__bindingPointIndex=x;const _=i.createBuffer(),A=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],_=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,R=_.length;T<R;T++){const L=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,y=L.length;M<y;M++){const C=L[M];if(p(C,T,M,A)===!0){const I=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let q=0;q<N.length;q++){const Y=N[q],se=g(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,I+k,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,k),k+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,x,_,A){const T=v.value,R=x+"_"+_;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{const L=A[R];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return A[R]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function b(v){const x=v.uniforms;let _=0;const A=16;for(let R=0,L=x.length;R<L;R++){const M=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,C=M.length;y<C;y++){const I=M[y],N=Array.isArray(I.value)?I.value:[I.value];for(let k=0,q=N.length;k<q;k++){const Y=N[k],se=g(Y),z=_%A,ne=z%se.boundary,ae=z+ne;_+=ne,ae!==0&&A-ae<se.storage&&(_+=A-ae),I.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=se.storage}}}const T=_%A;return T>0&&(_+=A-T),v.__size=_,v.__cache={},this}function g(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const v in r)i.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:l,dispose:f}}class G_{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const b=new Uint32Array(4),g=new Int32Array(4);let m=null,f=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let A=!1;this._outputColorSpace=Ut;let T=0,R=0,L=null,M=-1,y=null;const C=new rt,I=new rt;let N=null;const k=new je(0);let q=0,Y=t.width,se=t.height,z=1,ne=null,ae=null;const me=new rt(0,0,Y,se),Ie=new rt(0,0,Y,se);let Se=!1;const ke=new oc;let de=!1,H=!1;const J=new Ke,fe=new D,G=new rt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function De(){return L===null?z:1}let E=n;function Q(w,O){return t.getContext(w,O)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wo}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",oe,!1),E===null){const O="webgl2";if(E=Q(O,w),E===null)throw Q(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let V,Z,ie,Ne,he,Ue,mt,ot,P,S,F,K,re,$,Le,pe,Ee,Ae,le,xe,Fe,Re,be,qe;function U(){V=new Zg(E),V.init(),Re=new N_(E,V),Z=new jg(E,V,e,Re),ie=new I_(E,V),Z.reversedDepthBuffer&&d&&ie.buffers.depth.setReversed(!0),Ne=new tb(E),he=new v_,Ue=new D_(E,V,ie,he,Z,Re,Ne),mt=new Xg(_),ot=new $g(_),P=new op(E),be=new Vg(E,P),S=new Qg(E,P,Ne,be),F=new ib(E,S,P,Ne),le=new nb(E,Z,Ue),pe=new qg(he),K=new __(_,mt,ot,V,Z,be,pe),re=new z_(_,he),$=new y_,Le=new A_(V),Ae=new Gg(_,mt,ot,ie,F,p,c),Ee=new P_(_,F,Z),qe=new H_(E,Ne,Z,ie),xe=new Wg(E,V,Ne),Fe=new eb(E,V,Ne),Ne.programs=K.programs,_.capabilities=Z,_.extensions=V,_.properties=he,_.renderLists=$,_.shadowMap=Ee,_.state=ie,_.info=Ne}U();const ce=new k_(_,E);this.xr=ce,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const w=V.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=V.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(Y,se,!1))},this.getSize=function(w){return w.set(Y,se)},this.setSize=function(w,O,W=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=w,se=O,t.width=Math.floor(w*z),t.height=Math.floor(O*z),W===!0&&(t.style.width=w+"px",t.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Y*z,se*z).floor()},this.setDrawingBufferSize=function(w,O,W){Y=w,se=O,z=W,t.width=Math.floor(w*W),t.height=Math.floor(O*W),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,O,W,j){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,O,W,j),ie.viewport(C.copy(me).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(Ie)},this.setScissor=function(w,O,W,j){w.isVector4?Ie.set(w.x,w.y,w.z,w.w):Ie.set(w,O,W,j),ie.scissor(I.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(w){ie.setScissorTest(Se=w)},this.setOpaqueSort=function(w){ne=w},this.setTransparentSort=function(w){ae=w},this.getClearColor=function(w){return w.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,W=!0){let j=0;if(w){let B=!1;if(L!==null){const ue=L.texture.format;B=ue===Zo||ue===$o||ue===Jo}if(B){const ue=L.texture.type,Me=ue===Rn||ue===bi||ue===Ar||ue===Rr||ue===Xo||ue===Yo,Pe=Ae.getClearColor(),we=Ae.getClearAlpha(),Ge=Pe.r,We=Pe.g,Oe=Pe.b;Me?(b[0]=Ge,b[1]=We,b[2]=Oe,b[3]=we,E.clearBufferuiv(E.COLOR,0,b)):(g[0]=Ge,g[1]=We,g[2]=Oe,g[3]=we,E.clearBufferiv(E.COLOR,0,g))}else j|=E.COLOR_BUFFER_BIT}O&&(j|=E.DEPTH_BUFFER_BIT),W&&(j|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),Ae.dispose(),$.dispose(),Le.dispose(),he.dispose(),mt.dispose(),ot.dispose(),F.dispose(),be.dispose(),qe.dispose(),K.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",_e),ce.removeEventListener("sessionend",He),Xe.stop()};function ge(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const w=Ne.autoReset,O=Ee.enabled,W=Ee.autoUpdate,j=Ee.needsUpdate,B=Ee.type;U(),Ne.autoReset=w,Ee.enabled=O,Ee.autoUpdate=W,Ee.needsUpdate=j,Ee.type=B}function oe(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function te(w){const O=w.target;O.removeEventListener("dispose",te),Ce(O)}function Ce(w){Ve(w),he.remove(w)}function Ve(w){const O=he.get(w).programs;O!==void 0&&(O.forEach(function(W){K.releaseProgram(W)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,W,j,B,ue){O===null&&(O=ee);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Pe=vh(w,O,W,j,B);ie.setMaterial(j,Me);let we=W.index,Ge=1;if(j.wireframe===!0){if(we=S.getWireframeAttribute(W),we===void 0)return;Ge=2}const We=W.drawRange,Oe=W.attributes.position;let Qe=We.start*Ge,lt=(We.start+We.count)*Ge;ue!==null&&(Qe=Math.max(Qe,ue.start*Ge),lt=Math.min(lt,(ue.start+ue.count)*Ge)),we!==null?(Qe=Math.max(Qe,0),lt=Math.min(lt,we.count)):Oe!=null&&(Qe=Math.max(Qe,0),lt=Math.min(lt,Oe.count));const Mt=lt-Qe;if(Mt<0||Mt===1/0)return;be.setup(B,j,Pe,W,we);let ft,dt=xe;if(we!==null&&(ft=P.get(we),dt=Fe,dt.setIndex(ft)),B.isMesh)j.wireframe===!0?(ie.setLineWidth(j.wireframeLinewidth*De()),dt.setMode(E.LINES)):dt.setMode(E.TRIANGLES);else if(B.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),ie.setLineWidth(ze*De()),B.isLineSegments?dt.setMode(E.LINES):B.isLineLoop?dt.setMode(E.LINE_LOOP):dt.setMode(E.LINE_STRIP)}else B.isPoints?dt.setMode(E.POINTS):B.isSprite&&dt.setMode(E.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Nr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),dt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))dt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const ze=B._multiDrawStarts,vt=B._multiDrawCounts,it=B._multiDrawCount,Jt=we?P.get(we).bytesPerElement:1,yi=he.get(j).currentProgram.getUniforms();for(let $t=0;$t<it;$t++)yi.setValue(E,"_gl_DrawID",$t),dt.render(ze[$t]/Jt,vt[$t])}else if(B.isInstancedMesh)dt.renderInstances(Qe,Mt,B.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,ze);dt.renderInstances(Qe,Mt,vt)}else dt.render(Qe,Mt)};function ct(w,O,W){w.transparent===!0&&w.side===wn&&w.forceSinglePass===!1?(w.side=Vt,w.needsUpdate=!0,yt(w,O,W),w.side=Vn,w.needsUpdate=!0,yt(w,O,W),w.side=wn):yt(w,O,W)}this.compile=function(w,O,W=null){W===null&&(W=w),f=Le.get(W),f.init(O),x.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==W&&w.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const j=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ue=B.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){const Pe=ue[Me];ct(Pe,W,B),j.add(Pe)}else ct(ue,W,B),j.add(ue)}),f=x.pop(),j},this.compileAsync=function(w,O,W=null){const j=this.compile(w,O,W);return new Promise(B=>{function ue(){if(j.forEach(function(Me){he.get(Me).currentProgram.isReady()&&j.delete(Me)}),j.size===0){B(w);return}setTimeout(ue,10)}V.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let tt=null;function X(w){tt&&tt(w)}function _e(){Xe.stop()}function He(){Xe.start()}const Xe=new nh;Xe.setAnimationLoop(X),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){tt=w,ce.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},ce.addEventListener("sessionstart",_e),ce.addEventListener("sessionend",He),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,O,L),f=Le.get(w,x.length),f.init(O),x.push(f),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ke.setFromProjectionMatrix(J,An,O.reversedDepth),H=this.localClippingEnabled,de=pe.init(this.clippingPlanes,H),m=$.get(w,v.length),m.init(),v.push(m),ce.enabled===!0&&ce.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&gt(ue,O,-1/0,_.sortObjects)}gt(w,O,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ne,ae),ye=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ye&&Ae.addToRenderList(m,w),this.info.render.frame++,de===!0&&pe.beginShadows();const W=f.state.shadowsArray;Ee.render(W,w,O),de===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,B=m.transmissive;if(f.setupLights(),O.isArrayCamera){const ue=O.cameras;if(B.length>0)for(let Me=0,Pe=ue.length;Me<Pe;Me++){const we=ue[Me];nt(j,B,w,we)}ye&&Ae.render(w);for(let Me=0,Pe=ue.length;Me<Pe;Me++){const we=ue[Me];Et(m,w,we,we.viewport)}}else B.length>0&&nt(j,B,w,O),ye&&Ae.render(w),Et(m,w,O);L!==null&&R===0&&(Ue.updateMultisampleRenderTarget(L),Ue.updateRenderTargetMipmap(L)),w.isScene===!0&&w.onAfterRender(_,w,O),be.resetDefaultState(),M=-1,y=null,x.pop(),x.length>0?(f=x[x.length-1],de===!0&&pe.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function gt(w,O,W,j){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ke.intersectsSprite(w)){j&&G.setFromMatrixPosition(w.matrixWorld).applyMatrix4(J);const Me=F.update(w),Pe=w.material;Pe.visible&&m.push(w,Me,Pe,W,G.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ke.intersectsObject(w))){const Me=F.update(w),Pe=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),G.copy(w.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),G.copy(Me.boundingSphere.center)),G.applyMatrix4(w.matrixWorld).applyMatrix4(J)),Array.isArray(Pe)){const we=Me.groups;for(let Ge=0,We=we.length;Ge<We;Ge++){const Oe=we[Ge],Qe=Pe[Oe.materialIndex];Qe&&Qe.visible&&m.push(w,Me,Qe,W,G.z,Oe)}}else Pe.visible&&m.push(w,Me,Pe,W,G.z,null)}}const ue=w.children;for(let Me=0,Pe=ue.length;Me<Pe;Me++)gt(ue[Me],O,W,j)}function Et(w,O,W,j){const B=w.opaque,ue=w.transmissive,Me=w.transparent;f.setupLightsView(W),de===!0&&pe.setGlobalState(_.clippingPlanes,W),j&&ie.viewport(C.copy(j)),B.length>0&&Tt(B,O,W),ue.length>0&&Tt(ue,O,W),Me.length>0&&Tt(Me,O,W),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function nt(w,O,W,j){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[j.id]===void 0&&(f.state.transmissionRenderTarget[j.id]=new _i(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?Fr:Rn,minFilter:Bn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ue=f.state.transmissionRenderTarget[j.id],Me=j.viewport||C;ue.setSize(Me.z*_.transmissionResolutionScale,Me.w*_.transmissionResolutionScale);const Pe=_.getRenderTarget(),we=_.getActiveCubeFace(),Ge=_.getActiveMipmapLevel();_.setRenderTarget(ue),_.getClearColor(k),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),ye&&Ae.render(W);const We=_.toneMapping;_.toneMapping=ti;const Oe=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),f.setupLightsView(j),de===!0&&pe.setGlobalState(_.clippingPlanes,j),Tt(w,W,j),Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue),V.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let lt=0,Mt=O.length;lt<Mt;lt++){const ft=O[lt],dt=ft.object,ze=ft.geometry,vt=ft.material,it=ft.group;if(vt.side===wn&&dt.layers.test(j.layers)){const Jt=vt.side;vt.side=Vt,vt.needsUpdate=!0,Ct(dt,W,j,ze,vt,it),vt.side=Jt,vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue))}_.setRenderTarget(Pe,we,Ge),_.setClearColor(k,q),Oe!==void 0&&(j.viewport=Oe),_.toneMapping=We}function Tt(w,O,W){const j=O.isScene===!0?O.overrideMaterial:null;for(let B=0,ue=w.length;B<ue;B++){const Me=w[B],Pe=Me.object,we=Me.geometry,Ge=Me.group;let We=Me.material;We.allowOverride===!0&&j!==null&&(We=j),Pe.layers.test(W.layers)&&Ct(Pe,O,W,we,We,Ge)}}function Ct(w,O,W,j,B,ue){w.onBeforeRender(_,O,W,j,B,ue),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(_,O,W,j,w,ue),B.transparent===!0&&B.side===wn&&B.forceSinglePass===!1?(B.side=Vt,B.needsUpdate=!0,_.renderBufferDirect(W,O,j,B,w,ue),B.side=Vn,B.needsUpdate=!0,_.renderBufferDirect(W,O,j,B,w,ue),B.side=wn):_.renderBufferDirect(W,O,j,B,w,ue),w.onAfterRender(_,O,W,j,B,ue)}function yt(w,O,W){O.isScene!==!0&&(O=ee);const j=he.get(w),B=f.state.lights,ue=f.state.shadowsArray,Me=B.state.version,Pe=K.getParameters(w,B.state,ue,O,W),we=K.getProgramCacheKey(Pe);let Ge=j.programs;j.environment=w.isMeshStandardMaterial?O.environment:null,j.fog=O.fog,j.envMap=(w.isMeshStandardMaterial?ot:mt).get(w.envMap||j.environment),j.envMapRotation=j.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",te),Ge=new Map,j.programs=Ge);let We=Ge.get(we);if(We!==void 0){if(j.currentProgram===We&&j.lightsStateVersion===Me)return ii(w,Pe),We}else Pe.uniforms=K.getUniforms(w),w.onBeforeCompile(Pe,_),We=K.acquireProgram(Pe,we),Ge.set(we,We),j.uniforms=Pe.uniforms;const Oe=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=pe.uniform),ii(w,Pe),j.needsLights=yh(w),j.lightsStateVersion=Me,j.needsLights&&(Oe.ambientLightColor.value=B.state.ambient,Oe.lightProbe.value=B.state.probe,Oe.directionalLights.value=B.state.directional,Oe.directionalLightShadows.value=B.state.directionalShadow,Oe.spotLights.value=B.state.spot,Oe.spotLightShadows.value=B.state.spotShadow,Oe.rectAreaLights.value=B.state.rectArea,Oe.ltc_1.value=B.state.rectAreaLTC1,Oe.ltc_2.value=B.state.rectAreaLTC2,Oe.pointLights.value=B.state.point,Oe.pointLightShadows.value=B.state.pointShadow,Oe.hemisphereLights.value=B.state.hemi,Oe.directionalShadowMap.value=B.state.directionalShadowMap,Oe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Oe.spotShadowMap.value=B.state.spotShadowMap,Oe.spotLightMatrix.value=B.state.spotLightMatrix,Oe.spotLightMap.value=B.state.spotLightMap,Oe.pointShadowMap.value=B.state.pointShadowMap,Oe.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=We,j.uniformsList=null,We}function Dt(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=xs.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function ii(w,O){const W=he.get(w);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function vh(w,O,W,j,B){O.isScene!==!0&&(O=ee),Ue.resetTextureUnits();const ue=O.fog,Me=j.isMeshStandardMaterial?O.environment:null,Pe=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:jt,we=(j.isMeshStandardMaterial?ot:mt).get(j.envMap||Me),Ge=j.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,We=!!W.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Oe=!!W.morphAttributes.position,Qe=!!W.morphAttributes.normal,lt=!!W.morphAttributes.color;let Mt=ti;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,dt=ft!==void 0?ft.length:0,ze=he.get(j),vt=f.state.lights;if(de===!0&&(H===!0||w!==y)){const zt=w===y&&j.id===M;pe.setState(j,w,zt)}let it=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==vt.state.version||ze.outputColorSpace!==Pe||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isBatchedMesh&&ze.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&ze.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&ze.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&ze.instancingMorph===!1&&B.morphTexture!==null||ze.envMap!==we||j.fog===!0&&ze.fog!==ue||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==pe.numPlanes||ze.numIntersection!==pe.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==We||ze.morphTargets!==Oe||ze.morphNormals!==Qe||ze.morphColors!==lt||ze.toneMapping!==Mt||ze.morphTargetsCount!==dt)&&(it=!0):(it=!0,ze.__version=j.version);let Jt=ze.currentProgram;it===!0&&(Jt=yt(j,O,B));let yi=!1,$t=!1,cr=!1;const xt=Jt.getUniforms(),nn=ze.uniforms;if(ie.useProgram(Jt.program)&&(yi=!0,$t=!0,cr=!0),j.id!==M&&(M=j.id,$t=!0),yi||y!==w){ie.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xt.setValue(E,"projectionMatrix",w.projectionMatrix),xt.setValue(E,"viewMatrix",w.matrixWorldInverse);const qt=xt.map.cameraPosition;qt!==void 0&&qt.setValue(E,fe.setFromMatrixPosition(w.matrixWorld)),Z.logarithmicDepthBuffer&&xt.setValue(E,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&xt.setValue(E,"isOrthographic",w.isOrthographicCamera===!0),y!==w&&(y=w,$t=!0,cr=!0)}if(B.isSkinnedMesh){xt.setOptional(E,B,"bindMatrix"),xt.setOptional(E,B,"bindMatrixInverse");const zt=B.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),xt.setValue(E,"boneTexture",zt.boneTexture,Ue))}B.isBatchedMesh&&(xt.setOptional(E,B,"batchingTexture"),xt.setValue(E,"batchingTexture",B._matricesTexture,Ue),xt.setOptional(E,B,"batchingIdTexture"),xt.setValue(E,"batchingIdTexture",B._indirectTexture,Ue),xt.setOptional(E,B,"batchingColorTexture"),B._colorsTexture!==null&&xt.setValue(E,"batchingColorTexture",B._colorsTexture,Ue));const rn=W.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&le.update(B,W,Jt),($t||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,xt.setValue(E,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(nn.envMap.value=we,nn.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),$t&&(xt.setValue(E,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&xh(nn,cr),ue&&j.fog===!0&&re.refreshFogUniforms(nn,ue),re.refreshMaterialUniforms(nn,j,z,se,f.state.transmissionRenderTarget[w.id]),xs.upload(E,Dt(ze),nn,Ue)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(xs.upload(E,Dt(ze),nn,Ue),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&xt.setValue(E,"center",B.center),xt.setValue(E,"modelViewMatrix",B.modelViewMatrix),xt.setValue(E,"normalMatrix",B.normalMatrix),xt.setValue(E,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const zt=j.uniformsGroups;for(let qt=0,Ps=zt.length;qt<Ps;qt++){const ri=zt[qt];qe.update(ri,Jt),qe.bind(ri,Jt)}}return Jt}function xh(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function yh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,O,W){const j=he.get(w);j.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),he.get(w.texture).__webglTexture=O,he.get(w.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:W,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const W=he.get(w);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};const Mh=E.createFramebuffer();this.setRenderTarget=function(w,O=0,W=0){L=w,T=O,R=W;let j=!0,B=null,ue=!1,Me=!1;if(w){const we=he.get(w);if(we.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(E.FRAMEBUFFER,null),j=!1;else if(we.__webglFramebuffer===void 0)Ue.setupRenderTarget(w);else if(we.__hasExternalTextures)Ue.rebindTextures(w,he.get(w.texture).__webglTexture,he.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Oe=w.depthTexture;if(we.__boundDepthTexture!==Oe){if(Oe!==null&&he.has(Oe)&&(w.width!==Oe.image.width||w.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(w)}}const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Me=!0);const We=he.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(We[O])?B=We[O][W]:B=We[O],ue=!0):w.samples>0&&Ue.useMultisampledRTT(w)===!1?B=he.get(w).__webglMultisampledFramebuffer:Array.isArray(We)?B=We[W]:B=We,C.copy(w.viewport),I.copy(w.scissor),N=w.scissorTest}else C.copy(me).multiplyScalar(z).floor(),I.copy(Ie).multiplyScalar(z).floor(),N=Se;if(W!==0&&(B=Mh),ie.bindFramebuffer(E.FRAMEBUFFER,B)&&j&&ie.drawBuffers(w,B),ie.viewport(C),ie.scissor(I),ie.setScissorTest(N),ue){const we=he.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,W)}else if(Me){const we=O;for(let Ge=0;Ge<w.textures.length;Ge++){const We=he.get(w.textures[Ge]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Ge,We.__webglTexture,W,we)}}else if(w!==null&&W!==0){const we=he.get(w.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,we.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(w,O,W,j,B,ue,Me,Pe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we){ie.bindFramebuffer(E.FRAMEBUFFER,we);try{const Ge=w.textures[Pe],We=Ge.format,Oe=Ge.type;if(!Z.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-j&&W>=0&&W<=w.height-B&&(w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Pe),E.readPixels(O,W,j,B,Re.convert(We),Re.convert(Oe),ue))}finally{const Ge=L!==null?he.get(L).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(w,O,W,j,B,ue,Me,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=he.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Me!==void 0&&(we=we[Me]),we)if(O>=0&&O<=w.width-j&&W>=0&&W<=w.height-B){ie.bindFramebuffer(E.FRAMEBUFFER,we);const Ge=w.textures[Pe],We=Ge.format,Oe=Ge.type;if(!Z.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.bufferData(E.PIXEL_PACK_BUFFER,ue.byteLength,E.STREAM_READ),w.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+Pe),E.readPixels(O,W,j,B,Re.convert(We),Re.convert(Oe),0);const lt=L!==null?he.get(L).__webglFramebuffer:null;ie.bindFramebuffer(E.FRAMEBUFFER,lt);const Mt=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Hd(E,Mt,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Qe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,ue),E.deleteBuffer(Qe),E.deleteSync(Mt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,W=0){const j=Math.pow(2,-W),B=Math.floor(w.image.width*j),ue=Math.floor(w.image.height*j),Me=O!==null?O.x:0,Pe=O!==null?O.y:0;Ue.setTexture2D(w,0),E.copyTexSubImage2D(E.TEXTURE_2D,W,0,0,Me,Pe,B,ue),ie.unbindTexture()};const Sh=E.createFramebuffer(),Eh=E.createFramebuffer();this.copyTextureToTexture=function(w,O,W=null,j=null,B=0,ue=null){ue===null&&(B!==0?(Nr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=B,B=0):ue=0);let Me,Pe,we,Ge,We,Oe,Qe,lt,Mt;const ft=w.isCompressedTexture?w.mipmaps[ue]:w.image;if(W!==null)Me=W.max.x-W.min.x,Pe=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Ge=W.min.x,We=W.min.y,Oe=W.isBox3?W.min.z:0;else{const rn=Math.pow(2,-B);Me=Math.floor(ft.width*rn),Pe=Math.floor(ft.height*rn),w.isDataArrayTexture?we=ft.depth:w.isData3DTexture?we=Math.floor(ft.depth*rn):we=1,Ge=0,We=0,Oe=0}j!==null?(Qe=j.x,lt=j.y,Mt=j.z):(Qe=0,lt=0,Mt=0);const dt=Re.convert(O.format),ze=Re.convert(O.type);let vt;O.isData3DTexture?(Ue.setTexture3D(O,0),vt=E.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ue.setTexture2DArray(O,0),vt=E.TEXTURE_2D_ARRAY):(Ue.setTexture2D(O,0),vt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,O.unpackAlignment);const it=E.getParameter(E.UNPACK_ROW_LENGTH),Jt=E.getParameter(E.UNPACK_IMAGE_HEIGHT),yi=E.getParameter(E.UNPACK_SKIP_PIXELS),$t=E.getParameter(E.UNPACK_SKIP_ROWS),cr=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,ft.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,ft.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Ge),E.pixelStorei(E.UNPACK_SKIP_ROWS,We),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Oe);const xt=w.isDataArrayTexture||w.isData3DTexture,nn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const rn=he.get(w),zt=he.get(O),qt=he.get(rn.__renderTarget),Ps=he.get(zt.__renderTarget);ie.bindFramebuffer(E.READ_FRAMEBUFFER,qt.__webglFramebuffer),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,Ps.__webglFramebuffer);for(let ri=0;ri<we;ri++)xt&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,he.get(w).__webglTexture,B,Oe+ri),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,he.get(O).__webglTexture,ue,Mt+ri)),E.blitFramebuffer(Ge,We,Me,Pe,Qe,lt,Me,Pe,E.DEPTH_BUFFER_BIT,E.NEAREST);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||he.has(w)){const rn=he.get(w),zt=he.get(O);ie.bindFramebuffer(E.READ_FRAMEBUFFER,Sh),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,Eh);for(let qt=0;qt<we;qt++)xt?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rn.__webglTexture,B,Oe+qt):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,rn.__webglTexture,B),nn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,zt.__webglTexture,ue,Mt+qt):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,zt.__webglTexture,ue),B!==0?E.blitFramebuffer(Ge,We,Me,Pe,Qe,lt,Me,Pe,E.COLOR_BUFFER_BIT,E.NEAREST):nn?E.copyTexSubImage3D(vt,ue,Qe,lt,Mt+qt,Ge,We,Me,Pe):E.copyTexSubImage2D(vt,ue,Qe,lt,Ge,We,Me,Pe);ie.bindFramebuffer(E.READ_FRAMEBUFFER,null),ie.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?E.texSubImage3D(vt,ue,Qe,lt,Mt,Me,Pe,we,dt,ze,ft.data):O.isCompressedArrayTexture?E.compressedTexSubImage3D(vt,ue,Qe,lt,Mt,Me,Pe,we,dt,ft.data):E.texSubImage3D(vt,ue,Qe,lt,Mt,Me,Pe,we,dt,ze,ft):w.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,ue,Qe,lt,Me,Pe,dt,ze,ft.data):w.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,ue,Qe,lt,ft.width,ft.height,dt,ft.data):E.texSubImage2D(E.TEXTURE_2D,ue,Qe,lt,Me,Pe,dt,ze,ft);E.pixelStorei(E.UNPACK_ROW_LENGTH,it),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,Jt),E.pixelStorei(E.UNPACK_SKIP_PIXELS,yi),E.pixelStorei(E.UNPACK_SKIP_ROWS,$t),E.pixelStorei(E.UNPACK_SKIP_IMAGES,cr),ue===0&&O.generateMipmaps&&E.generateMipmap(vt),ie.unbindTexture()},this.initRenderTarget=function(w){he.get(w).__webglFramebuffer===void 0&&Ue.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ue.setTextureCube(w,0):w.isData3DTexture?Ue.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ue.setTexture2DArray(w,0):Ue.setTexture2D(w,0),ie.unbindTexture()},this.resetState=function(){T=0,R=0,L=null,ie.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function Ol(i,e){if(e===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ao||e===Fu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Ao)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class V_ extends ar{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new c0(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Tr.extractUrlBase(e);a=Tr.resolveURL(l,this.path)}else a=Tr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new eh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===oh){try{a[Ze.KHR_BINARY_GLTF]=new l0(e)}catch(h){r&&r(h);return}s=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new M0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new q_;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new u0(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new h0;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new d0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function W_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class j_{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],jt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Do(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new th(u),l.distance=h;break;case"spot":l=new zf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),En(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class q_{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return mi}extendParams(e,t,n){const r=[];e.color=new je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],jt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ut))}return Promise.all(r)}}class X_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(o,o)}return Promise.all(s)}}class K_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class $_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new je(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Z_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Q_{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new je().setRGB(o[0],o[1],o[2],jt),Promise.all(s)}}class e0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class t0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new je().setRGB(o[0],o[1],o[2],jt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(s)}}class n0{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class i0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pn}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class r0{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class s0{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class a0{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class o0{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,h=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,d,r.mode,r.filter),p})})}else return null}}class c0{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==an.TRIANGLES&&l.mode!==an.TRIANGLE_STRIP&&l.mode!==an.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,p=[];for(const b of h){const g=new Ke,m=new D,f=new Yt,v=new D(1,1,1),x=new Xu(b.geometry,b.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),x.setMatrixAt(_,g.compose(m,f,v));for(const _ in c)if(_==="_COLOR_0"){const A=c[_];x.instanceColor=new Po(A.array,A.itemSize,A.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&b.geometry.setAttribute(_,c[_]);pt.prototype.copy.call(x,b),this.parser.assignFinalMaterial(x),p.push(x)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const oh="glTF",br=12,kl={JSON:1313821514,BIN:5130562};class l0{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,br),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-br,s=new DataView(e,br);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===kl.JSON){const l=new Uint8Array(e,br+a,o);this.content=n.decode(l)}else if(c===kl.BIN){const l=br+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=ko[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=ko[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],p=qi[d.componentType];l[h]=p.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h,d){r.decodeDracoFile(u,function(p){for(const b in p.attributes){const g=p.attributes[b],m=c[b];m!==void 0&&(g.normalized=m)}h(p)},o,l,jt,d)})})}}class h0{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class d0{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class ch extends kr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,h=(n-t)/u,d=h*h,p=d*h,b=e*l,g=b-l,m=-2*p+3*d,f=p-d,v=1-m,x=f-d+h;for(let _=0;_!==o;_++){const A=a[g+_+o],T=a[g+_+c]*u,R=a[b+_+o],L=a[b+_]*u;s[_]=v*A+x*T+m*R+f*L}return s}}const f0=new Yt;class p0 extends ch{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return f0.fromArray(s).normalize().toArray(s),s}}const an={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bl={9728:Wt,9729:tn,9984:Au,9985:ms,9986:vr,9987:Bn},zl={33071:Qn,33648:ys,10497:Ji},da={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ko={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m0={CUBICSPLINE:void 0,LINEAR:Ir,STEP:Lr},fa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ur({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vn})),i.DefaultMaterial}function hi(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function En(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function b0(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(r){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v0(i){let e;const t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+pa(t.attributes):e=i.indices+":"+pa(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+pa(i.targets[n]);return e}function pa(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Bo(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const y0=new Ke;class M0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new Of(this.options.manager):this.textureLoader=new Vf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return hi(s,o,r),En(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(Tr.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=da[r.type],o=qi[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new St(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=da[r.type],l=qi[r.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,b=r.normalized===!0;let g,m;if(p&&p!==h){const f=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+f+":"+r.count;let x=t.cache.get(v);x||(g=new l(o,f*p,r.count*p/u),x=new ff(g,p/u),t.cache.add(v,x)),m=new rc(x,c,d%p/u,b)}else o===null?g=new l(r.count*c):g=new l(o,d,r.count*c),m=new St(g,c,b);if(r.sparse!==void 0){const f=da.SCALAR,v=qi[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,_=r.sparse.values.byteOffset||0,A=new v(a[1],x,r.sparse.count*f),T=new l(a[2],_,r.sparse.count*c);o!==null&&(m=new St(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,L=A.length;R<L;R++){const M=A[R];if(m.setX(M,T[R*c]),c>=2&&m.setY(M,T[R*c+1]),c>=3&&m.setZ(M,T[R*c+2]),c>=4&&m.setW(M,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=b}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Bl[d.magFilter]||tn,u.minFilter=Bl[d.minFilter]||Bn,u.wrapS=zl[d.wrapS]||Ji,u.wrapT=zl[d.wrapT]||Ji,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==tn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,p){let b=d;t.isImageBitmapLoader===!0&&(b=function(g){const m=new Ft(g);m.needsUpdate=!0,d(m)}),t.load(Tr.resolveURL(h,s.path),b,void 0,p)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),En(h,a),h.userData.mimeType=a.mimeType||x0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new lc,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Yu,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ur}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Ze.KHR_MATERIALS_UNLIT]){const h=r[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new je(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],jt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=wn);const u=s.alphaMode||fa.OPAQUE;if(u===fa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===fa.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==mi&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}if(s.occlusionTexture!==void 0&&a!==mi&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==mi){const h=s.emissiveFactor;o.emissive=new je().setRGB(h[0],h[1],h[2],jt)}return s.emissiveTexture!==void 0&&a!==mi&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ut)),Promise.all(l).then(function(){const h=new a(o);return s.name&&(h.name=s.name),En(h,s),t.associations.set(h,{materials:e}),s.extensions&&hi(r,h,s),h})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=v0(l),h=r[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Hl(new Kt,l,t),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?g0(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let p=0,b=u.length;p<b;p++){const g=u[p],m=a[p];let f;const v=l[p];if(m.mode===an.TRIANGLES||m.mode===an.TRIANGLE_STRIP||m.mode===an.TRIANGLE_FAN||m.mode===void 0)f=s.isSkinnedMesh===!0?new mf(g,v):new _t(g,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===an.TRIANGLE_STRIP?f.geometry=Ol(f.geometry,Fu):m.mode===an.TRIANGLE_FAN&&(f.geometry=Ol(f.geometry,Ao));else if(m.mode===an.LINES)f=new yf(g,v);else if(m.mode===an.LINE_STRIP)f=new cc(g,v);else if(m.mode===an.LINE_LOOP)f=new Mf(g,v);else if(m.mode===an.POINTS)f=new uc(g,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&_0(f,s),f.name=t.createUniqueName(s.name||"mesh_"+e),En(f,s),m.extensions&&hi(r,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,b=h.length;p<b;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&hi(r,h[0],s),h[0];const d=new mn;s.extensions&&hi(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,b=h.length;p<b;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Bt(en.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new dc(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),En(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Ke;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ac(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=r.channels.length;h<d;h++){const p=r.channels[h],b=r.samplers[p.sampler],g=p.target,m=g.node,f=r.parameters!==void 0?r.parameters[b.input]:b.input,v=r.parameters!==void 0?r.parameters[b.output]:b.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",v)),l.push(b),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],b=h[2],g=h[3],m=h[4],f=[];for(let x=0,_=d.length;x<_;x++){const A=d[x],T=p[x],R=b[x],L=g[x],M=m[x];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();const y=n._createAnimationTracks(A,T,R,L,M);if(y)for(let C=0;C<y.length;C++)f.push(y[C])}const v=new Io(s,void 0,f);return En(v,r),v})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,y0)});for(let p=0,b=h.length;p<b;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new qu:l.length>1?u=new mn:l.length===1?u=l[0]:u=new pt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=a),En(u,s),s.extensions&&hi(n,u,s),s.matrix!==void 0){const h=new Ke;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const h=r.associations.get(u);r.associations.set(u,{...h})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new mn;n.name&&(s.name=r.createUniqueName(n.name)),En(s,n),n.extensions&&hi(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)s.add(c[u]);const l=u=>{const h=new Map;for(const[d,p]of r.associations)(d instanceof bn||d instanceof Ft)&&h.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&h.set(d,p)}),h};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];Jn[s.path]===Jn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Jn[s.path]){case Jn.weights:l=Qi;break;case Jn.rotation:l=er;break;case Jn.translation:case Jn.scale:l=tr;break;default:switch(n.itemSize){case 1:l=Qi;break;case 2:case 3:default:l=tr;break}break}const u=r.interpolation!==void 0?m0[r.interpolation]:Ir,h=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const b=new l(c[d]+"."+Jn[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(b),a.push(b)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Bo(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof er?p0:ch;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function S0(i,e,t){const n=e.attributes,r=new vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),o.normalized){const u=Bo(qi[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new D,c=new D;for(let l=0,u=s.length;l<u;l++){const h=s[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,b=d.max;if(p!==void 0&&b!==void 0){if(c.setX(Math.max(Math.abs(p[0]),Math.abs(b[0]))),c.setY(Math.max(Math.abs(p[1]),Math.abs(b[1]))),c.setZ(Math.max(Math.abs(p[2]),Math.abs(b[2]))),d.normalized){const g=Bo(qi[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new xn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Hl(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=ko[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return et.workingColorSpace!==jt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),En(i,e),S0(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?b0(i,e.targets,t):i})}const Gl={type:"change"},gc={type:"start"},lh={type:"end"},ds=new nr,Vl=new kn,E0=Math.cos(70*en.DEG2RAD),Pt=new D,Xt=2*Math.PI,ht={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ma=1e-6;class T0 extends sp{constructor(e,t=null){super(e,t),this.state=ht.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Wi.ROTATE,MIDDLE:Wi.DOLLY,RIGHT:Wi.PAN},this.touches={ONE:zi.ROTATE,TWO:zi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new Yt,this._lastTargetPosition=new D,this._quat=new Yt().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uo,this._sphericalDelta=new Uo,this._scale=1,this._panOffset=new D,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new D,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=A0.bind(this),this._onPointerDown=w0.bind(this),this._onPointerUp=R0.bind(this),this._onContextMenu=U0.bind(this),this._onMouseWheel=L0.bind(this),this._onKeyDown=I0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=N0.bind(this),this._onMouseDown=C0.bind(this),this._onMouseMove=P0.bind(this),this._interceptControlDown=F0.bind(this),this._interceptControlUp=O0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gl),this.update(),this.state=ht.NONE}update(e=null){const t=this.object.position;Pt.copy(t).sub(this.target),Pt.applyQuaternion(this._quat),this._spherical.setFromVector3(Pt),this.autoRotate&&this.state===ht.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Xt:n>Math.PI&&(n-=Xt),r<-Math.PI?r+=Xt:r>Math.PI&&(r-=Xt),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Pt.setFromSpherical(this._spherical),Pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Pt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new D(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ds.origin.copy(this.object.position),ds.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ds.direction))<E0?this.object.lookAt(this.target):(Vl.setFromNormalAndCoplanarPoint(this.object.up,this.target),ds.intersectPlane(Vl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ma||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ma||this._lastTargetPosition.distanceToSquared(this.target)>ma?(this.dispatchEvent(Gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Xt/60*this.autoRotateSpeed*e:Xt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Pt.setFromMatrixColumn(t,0),Pt.multiplyScalar(-e),this._panOffset.add(Pt)}_panUp(e,t){this.screenSpacePanning===!0?Pt.setFromMatrixColumn(t,1):(Pt.setFromMatrixColumn(t,0),Pt.crossVectors(this.object.up,Pt)),Pt.multiplyScalar(e),this._panOffset.add(Pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Pt.copy(r).sub(this.target);let s=Pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Xt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Xt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Xt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function w0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function A0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function R0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=ht.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function C0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Wi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ht.DOLLY;break;case Wi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}break;case Wi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ht.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ht.PAN}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(gc)}function P0(i){switch(this.state){case ht.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ht.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ht.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function L0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ht.NONE||(i.preventDefault(),this.dispatchEvent(gc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function I0(i){this.enabled!==!1&&this._handleKeyDown(i)}function D0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case zi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ht.TOUCH_ROTATE;break;case zi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ht.TOUCH_PAN;break;default:this.state=ht.NONE}break;case 2:switch(this.touches.TWO){case zi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ht.TOUCH_DOLLY_PAN;break;case zi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ht.TOUCH_DOLLY_ROTATE;break;default:this.state=ht.NONE}break;default:this.state=ht.NONE}this.state!==ht.NONE&&this.dispatchEvent(gc)}function N0(i){switch(this._trackPointer(i),this.state){case ht.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ht.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ht.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ht.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ht.NONE}}function U0(i){this.enabled!==!1&&i.preventDefault()}function F0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function O0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var k0=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?o(e):o(i),s,a=WebAssembly.instantiate(r,{}).then(function(f){s=f.instance,s.exports.__wasm_call_ctors()});function o(f){for(var v=new Uint8Array(f.length),x=0;x<f.length;++x){var _=f.charCodeAt(x);v[x]=_>96?_-97:_>64?_-39:_+4}for(var A=0,x=0;x<f.length;++x)v[A++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,A)}function c(f,v,x,_,A,T,R){var L=f.exports.sbrk,M=_+3&-4,y=L(M*A),C=L(T.length),I=new Uint8Array(f.exports.memory.buffer);I.set(T,C);var N=v(y,_,A,C,T.length);if(N==0&&R&&R(y,M,A),x.set(I.subarray(y,y+_*A)),L(y-L(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function p(f){var v={object:new Worker(f),pending:0,requests:{}};return v.object.onmessage=function(x){var _=x.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function b(f){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(x),A=h.length;A<f;++A)h[A]=p(_);for(var A=f;A<h.length;++A)h[A].object.postMessage({});h.length=f,URL.revokeObjectURL(_)}function g(f,v,x,_,A){for(var T=h[0],R=1;R<h.length;++R)h[R].pending<T.pending&&(T=h[R]);return new Promise(function(L,M){var y=new Uint8Array(x),C=++d;T.pending+=f,T.requests[C]={resolve:L,reject:M},T.object.postMessage({id:C,count:f,size:v,source:y,mode:_,filter:A},[y.buffer])})}function m(f){var v=f.data;if(!v.id)return self.close();self.ready.then(function(x){try{var _=new Uint8Array(v.count*v.size);c(x,x.exports[v.mode],_,v.count,v.size,v.source,x.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(A){self.postMessage({id:v.id,count:v.count,action:"reject",value:A})}})}return{ready:a,supported:!0,useWorkers:function(f){b(f)},decodeVertexBuffer:function(f,v,x,_,A){c(s,s.exports.meshopt_decodeVertexBuffer,f,v,x,_,s.exports[l[A]])},decodeIndexBuffer:function(f,v,x,_){c(s,s.exports.meshopt_decodeIndexBuffer,f,v,x,_)},decodeIndexSequence:function(f,v,x,_){c(s,s.exports.meshopt_decodeIndexSequence,f,v,x,_)},decodeGltfBuffer:function(f,v,x,_,A,T){c(s,s.exports[u[A]],f,v,x,_,s.exports[l[T]])},decodeGltfBufferAsync:function(f,v,x,_,A){return h.length>0?g(f,v,x,u[_],l[A]):a.then(function(){var T=new Uint8Array(f*v);return c(s,s.exports[u[_]],T,f,v,x,s.exports[l[A]]),T})}}})();class B0 extends Co{constructor(){super();const e=new ir;e.deleteAttribute("uv");const t=new Ur({side:Vt}),n=new Ur,r=new th(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new _t(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Xu(e,n,6),o=new pt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new _t(e,ki(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new _t(e,ki(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new _t(e,ki(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new _t(e,ki(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new _t(e,ki(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const p=new _t(e,ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function ki(i){return new Sf({color:0,emissive:16777215,emissiveIntensity:i})}function z0({position:i,normal:e,uv:t,index:n},r){const s=(n?n.length:i.length/3)/3,a=new Float64Array(s),o=g=>n?n[g]:g;let c=0;for(let g=0;g<s;g++){const m=o(g*3)*3,f=o(g*3+1)*3,v=o(g*3+2)*3,x=i[f]-i[m],_=i[f+1]-i[m+1],A=i[f+2]-i[m+2],T=i[v]-i[m],R=i[v+1]-i[m+1],L=i[v+2]-i[m+2];c+=Math.hypot(_*L-A*R,A*T-x*L,x*R-_*T)*.5,a[g]=c}const l=new Float32Array(r*3),u=new Float32Array(r*3),h=new Float32Array(r*2),d=new Float32Array(r*3);let p=8841;const b=()=>(p=Math.imul(p,1664525)+1013904223>>>0,p/4294967296);for(let g=0;g<r;g++){const m=b()*c;let f=0,v=s-1;for(;f<v;){const T=f+v>>>1;a[T]<m?f=T+1:v=T}const x=Math.sqrt(b()),_=b(),A=[1-x,x*(1-_),x*_];for(let T=0;T<3;T++){const R=o(f*3+T),L=A[T];for(let M=0;M<3;M++)l[g*3+M]+=i[R*3+M]*L,e&&(u[g*3+M]+=e[R*3+M]*L);t&&(h[g*2]+=t[R*2]*L,h[g*2+1]+=t[R*2+1]*L)}d[g*3]=b(),d[g*3+1]=b(),d[g*3+2]=b()}return{positions:l,normals:u,uvs:h,seeds:d}}function H0(i=8841){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function uh(i){const e={};for(const t of["position","normal","uv"]){const n=i.getAttribute(t);if(n)if(!n.isInterleavedBufferAttribute&&!n.normalized)e[t]=n.array.slice();else{const r=new Float32Array(n.count*n.itemSize);for(let s=0;s<n.count;s++)r[s*n.itemSize]=n.getX(s),r[s*n.itemSize+1]=n.getY(s),n.itemSize>2&&(r[s*n.itemSize+2]=n.getZ(s));e[t]=r}}return i.index&&(e.index=i.index.array.slice()),e}function hh(i){const e=new Kt;return e.setAttribute("position",new St(i.positions,3)),e.setAttribute("normal",new St(i.normals,3)),e.setAttribute("uv",new St(i.uvs,2)),e.setAttribute("aSeed",new St(i.seeds,3)),e}function zo(i,e){return hh(z0(uh(i),e))}async function Wl(i,e){if(typeof Worker>"u")return zo(i,e);let t;try{t=new Worker(new URL("/assets/surface-sampling.worker-DaMJReTM.js",import.meta.url),{type:"module"});const n=uh(i),r=await new Promise((s,a)=>{t.onmessage=({data:o})=>o.error?a(new Error("Surface sampling failed")):s(o),t.onerror=a,t.postMessage({attributes:n,count:e},Object.values(n).map(o=>o.buffer))});return hh(r)}catch{return zo(i,e)}finally{t==null||t.terminate()}}function Ho(i,e,t,n,r=null){e.updateMatrix();const s={uMap:{value:e},uUvTransform:{value:e.matrix},uAssembly:{value:0},uReveal:{value:0},uDissolve:{value:0},uTime:{value:0},uSurface:{value:1},uPixelRatio:{value:1},uMinY:{value:n.min.y},uHeight:{value:n.max.y-n.min.y}},a=new Cn({uniforms:s,transparent:!0,depthWrite:!1,blending:gi,vertexShader:`attribute vec3 aSeed; varying vec2 vUv; varying float vAlpha; uniform float uAssembly,uReveal,uDissolve,uTime,uSurface,uPixelRatio,uMinY,uHeight;
 uniform mat3 uUvTransform; void main(){vUv=(uUvTransform*vec3(uv,1.)).xy;float h=clamp((position.y-uMinY)/uHeight,0.,1.);float arrival=smoothstep(h*.64,h*.64+.36,uAssembly);float leave=smoothstep((1.-h)*.55,(1.-h)*.55+.45,uDissolve);float settled=arrival*(1.-leave);float angle=aSeed.x*6.283185+uTime*.035;vec3 scatter=vec3(cos(angle)*(1.35+aSeed.y*.85),-1.3+aSeed.z*2.8,sin(angle)*(1.35+aSeed.y*.85));float ghost=(1.-step(.12,aSeed.y))*(1.-uAssembly);vec3 pos=mix(scatter,position,max(settled,ghost));pos.x+=sin(settled*3.14159)*sin(angle+settled*4.)*.55;pos.y+=sin(settled*3.14159)*.45;float skin=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));vAlpha=mix(mix(.012,.16,ghost),.95,settled)*(1.-skin*uSurface*.97)*(1.-leave*.8);vec4 mv=modelViewMatrix*vec4(pos,1.);vAlpha*=mix(1.,smoothstep(-.1,.35,dot(normalize(normalMatrix*normal),normalize(-mv.xyz))),settled);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((1.1+aSeed.y*1.4)*uPixelRatio*5./(-mv.z),.6,4.5*uPixelRatio);}`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=texture2D(uMap,vUv).rgb;col=mix(col,vec3(.64,.78,.85),.12);gl_FragColor=vec4(col,vAlpha*(1.-smoothstep(.25,1.,d)));#include <tonemapping_fragment>
#include <colorspace_fragment>}`.replace(";#include",`;
#include`)}),o=new uc(r||zo(i,t),a);return o.frustumCulled=!1,{points:o,uniforms:s}}function Go(i,e){const t={uReveal:{value:0},uDissolve:{value:0},uMinY:{value:e.min.y},uHeight:{value:e.max.y-e.min.y}};return i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=`varying float vObjectY;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vObjectY=position.y;`),n.fragmentShader=`varying float vObjectY; uniform float uReveal,uDissolve,uMinY,uHeight;
`+n.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 float h=clamp((vObjectY-uMinY)/uHeight,0.,1.);float coverage=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));if(uReveal>=.999&&uDissolve<=.001)coverage=1.;if(uReveal<=.001)coverage=0.;float noise=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);if(noise>coverage)discard;`)},i.customProgramCacheKey=()=>"porcelain-reveal-v1",t}function G0(i,e=.08){const t=[];for(const c of[i.min.x,i.max.x])for(const l of[i.min.y,i.max.y])for(const u of[i.min.z,i.max.z])t.push(new D(c,l,u));const n=t.map(()=>new D),r=new D,s=new Yt,a=(c,l,u,h=1,d=!1)=>{s.copy(c.quaternion).invert();const p=Math.tan(en.degToRad(c.fov/2))*(1-e),b=p*c.aspect*h;let g=.5;for(let m=0;m<t.length;m++)r.copy(t[m]).applyMatrix4(u).sub(l).applyQuaternion(s),n[m].copy(r),g=Math.max(g,r.z+Math.abs(r.x)/b,d?0:r.z+Math.abs(r.y)/p,r.z+c.near+.05);if(d){const m=Math.tan(en.degToRad(c.fov/2)),f=v=>{let x=1/0,_=-1/0;for(const A of n){const T=A.y/Math.max(.001,(v-A.z)*m);x=Math.min(x,T),_=Math.max(_,T)}return _+Math.max(0,-.985-x)<=.985};if(!f(g)){let v=g,x=g;for(;!f(x);)x*=1.5;for(let _=0;_<12;_++){const A=(v+x)/2;f(A)?x=A:v=A}g=x}}return g};a.bottomOffset=(c,l)=>{s.copy(c.quaternion).invert();const u=Math.tan(en.degToRad(c.fov/2));let h=1/0;for(const d of t)r.copy(d).applyMatrix4(l).sub(c.position).applyQuaternion(s),h=Math.min(h,r.y/Math.max(.001,-r.z*u));return Math.max(0,-.985-h)};const o=new Be;return a.constrainOffset=(c,l,u,h=1)=>{s.copy(c.quaternion).invert();const d=Math.tan(en.degToRad(c.fov/2));let p=1/0,b=-1/0,g=1/0,m=-1/0;for(const x of t){r.copy(x).applyMatrix4(l).sub(c.position).applyQuaternion(s);const _=Math.max(.001,-r.z*d),A=r.x/(_*c.aspect),T=r.y/_;p=Math.min(p,A),b=Math.max(b,A),g=Math.min(g,T),m=Math.max(m,T)}const f=(1-e)*h,v=(x,_,A)=>_<=A?en.clamp(x,_,A):(_+A)/2;return o.set(v(u.x,-f-p,f-b),v(u.y,-.985-g,.985-m))},a}function V0(i,e,t,n=!1){return n?e:i+(e-i)*-Math.expm1(-12*Math.min(.05,Math.max(0,t)))}function W0(i,e){const t=new ip(i),n=t.clipAction(e);n.setLoop(Uu,1),n.clampWhenFinished=!0,n.play(),t.update(0);const r=[];i.traverse(h=>r.push({node:h,position:h.position.clone(),quaternion:h.quaternion.clone(),scale:h.scale.clone()})),n.stop();const s=()=>{for(const h of r)h.node.position.copy(h.position),h.node.quaternion.copy(h.quaternion),h.node.scale.copy(h.scale);i.updateMatrixWorld(!0)};s();let a="idle",o=0,c=!1;const l=h=>{h.action===n&&(c=!0)};t.addEventListener("finished",l);function u(){n.stop(),s(),a="idle",c=!1}return{get state(){return a},get busy(){return a!=="idle"},play(){return a!=="idle"?!1:(c=!1,a="playing",n.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.3).play(),!0)},stop(){a==="playing"&&(a="returning",o=0,n.fadeOut(.35))},update(h){a!=="idle"&&(t.update(Math.max(0,h)),a==="returning"&&(o+=Math.max(0,h)),(c||a==="returning"&&o>=.35)&&u(),i.updateMatrixWorld(!0))},dispose(){u(),t.removeEventListener("finished",l),t.uncacheRoot(i)}}}function j0(i,e=!1,t=0){var b,g,m;i.updateMatrixWorld(!0);const n=[],r=new vn;if(i.traverse(f=>{if(!f.isMesh||!f.geometry.attributes.position)return;const v=f.geometry.clone();v.applyMatrix4(f.matrixWorld),v.rotateY(t),v.attributes.normal||v.computeVertexNormals(),v.computeBoundingBox(),r.union(v.boundingBox),n.push({source:f,geometry:v})}),!n.length||r.isEmpty())throw new Error("模型中未找到可显示的网格");const s=r.getCenter(new D),a=r.getSize(new D),o=2.65/Math.max(a.x,a.y,a.z,1e-5);r.min.sub(s).multiplyScalar(o),r.max.sub(s).multiplyScalar(o);const c=new mn,l=[],u=[],h=new sc(new Uint8Array([255,255,255,255]),1,1);h.needsUpdate=!0;let d=0;const p=n.reduce((f,v)=>{var x;return f+(((x=v.geometry.index)==null?void 0:x.count)??v.geometry.attributes.position.count)/3},0);for(const{source:f,geometry:v}of n){v.translate(-s.x,-s.y,-s.z),v.scale(o,o,o),v.computeBoundingSphere();const _=(Array.isArray(f.material)?f.material:[f.material]).map(T=>{const R=T.clone();return l.push(Go(R,r)),R});c.add(new _t(v,Array.isArray(f.material)?_:_[0]));const A=Array.isArray(f.material)?v.groups:[{start:0,count:((b=v.index)==null?void 0:b.count)??v.attributes.position.count,materialIndex:0}];for(const T of A){const R=_[T.materialIndex];if(!R||T.count<3)continue;const L=v.clone(),M=v.index?Array.from({length:T.count},(I,N)=>v.index.getX(T.start+N)):Array.from({length:T.count},(I,N)=>T.start+N);L.setIndex(M);const y=Math.max(1,Math.round((e?2e4:6e4)*(T.count/3)/Math.max(1,p))),C=Ho(L,R.map||h,y,r);C.uniforms.uMaterialColor={value:((g=R.color)==null?void 0:g.clone())||new je(16777215)},C.points.material.fragmentShader=C.points.material.fragmentShader.replace("uniform sampler2D uMap;","uniform sampler2D uMap; uniform vec3 uMaterialColor;").replace("vec3 col=texture2D(uMap,vUv).rgb;","vec3 col=texture2D(uMap,vUv).rgb * uMaterialColor;"),u.push(C),L.dispose()}d+=(((m=v.index)==null?void 0:m.count)??v.attributes.position.count)/3}return{mesh:c,skins:l,particles:u,bounds:r,triangles:d,white:h}}async function q0(i,e,t,n){await new Promise(X=>requestAnimationFrame(()=>setTimeout(X,0)));const r=matchMedia("(max-width:760px)").matches,s=n.model[r?"distanceMobile":"distanceDesktop"]??(r?5.9:5.5),a=Math.min(r?5.3:4.8,s*.9),o=new G_({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,r?1.4:1.7)),o.outputColorSpace=Ut,o.toneMapping=Tu,o.toneMappingExposure=n.model.exposure;const c=new Co,l=new Bt(35,1,.1,60);let u=null,h=null,d=!1,p=0,b=0,g="view";const m=new T0(l,i);m.enableDamping=!0,m.dampingFactor=.075,m.enablePan=!1,m.enableZoom=!1,m.minDistance=.5,m.maxDistance=9,m.maxPolarAngle=Math.PI*.82,m.minPolarAngle=.2,m.addEventListener("start",()=>{u=null,h=null,_=null});let f=s,v=0,x=1,_=null;const A=new Be,T=new D,R=new kn,L=new D,M=new D,y=matchMedia("(prefers-reduced-motion:reduce)"),C=()=>y.matches;i.style.touchAction="none";const I=new mn;c.add(I);const N=new Fo(o),k=new B0,q=N.fromScene(k,.04);c.environment=q.texture,c.environmentIntensity=.32,k.dispose(),N.dispose(),c.add(new kf(14018554,3162970,1.65));const Y=new Do(16774107,3);Y.position.set(-3,5,5),c.add(Y);const se=new Do(9156829,1.4);se.position.set(4,1,-2),c.add(se);const z=new V_().setMeshoptDecoder(k0);let ne,ae=null,me=null;try{if(n.performance)try{if(ne=await z.loadAsync(n.performance[r?"mobile":"desktop"],e),!ne.animations.length)throw Error("Animation missing")}catch{ne=null}ne??(ne=await z.loadAsync(n.model[r?"mobile":"desktop"],e))}catch(X){throw m.dispose(),q.dispose(),o.dispose(),X}e({phase:"preparing"}),await new Promise(X=>requestAnimationFrame(()=>setTimeout(X,0))),ne.scene.updateMatrixWorld(!0);const Ie=[];ne.scene.traverse(X=>{X.isMesh&&Ie.push(X)});const Se=Ie[0];let ke,de,H,J,fe,G,ee,ye;if(n.performance&&ne.animations.length&&(Se!=null&&Se.isSkinnedMesh)){ae=W0(ne.scene,ne.animations[0]);const X=new mn;X.rotation.y=n.performance.rotationY??n.model.rotationY,X.add(ne.scene),me=new mn,me.add(X),me.updateMatrixWorld(!0);const _e=new vn().setFromObject(me,!0),He=_e.getCenter(new D),Xe=_e.getSize(new D),gt=2.65/Math.max(Xe.x,Xe.y,Xe.z);me.scale.setScalar(gt),me.position.copy(He).multiplyScalar(-gt),me.updateMatrixWorld(!0),Se.skeleton.update(),de=new Kt;const Et=new Float32Array(Se.geometry.attributes.position.count*3),nt=new D;for(let ii=0;ii<Et.length/3;ii++)Se.getVertexPosition(ii,nt).applyMatrix4(Se.matrixWorld),nt.toArray(Et,ii*3);de.setAttribute("position",new St(Et,3)),de.setAttribute("uv",Se.geometry.attributes.uv.clone()),Se.geometry.index&&de.setIndex(Se.geometry.index.clone()),de.computeVertexNormals(),de.computeBoundingBox(),de.computeBoundingSphere(),H=Se.material.clone(),H.roughness=n.model.roughness,H.metalness=n.model.metalness,H.envMapIntensity=.42,Se.material=H.clone(),Se.frustumCulled=!1,ke=new _t(de,H),I.add(ke,me),me.visible=!1,J=de.boundingBox.clone();const Tt=r?2e4:6e4,Ct=await Wl(de,Tt),yt=Go(H,J),Dt=Ho(de,H.map,Tt,J,Ct);fe=[yt],G=[Dt],I.add(Dt.points),ee=de.index?de.index.count/3:de.attributes.position.count/3}else if(n.dynamic){const X=j0(ne.scene,r,n.model.rotationY||0);({mesh:ke,skins:fe,particles:G,bounds:J}=X),ee=X.triangles,ye=X.white,I.add(ke);for(const _e of G)I.add(_e.points)}else{if(Ie.length!==1||Array.isArray(Se==null?void 0:Se.material)||!(Se!=null&&Se.material.map))throw new Error("请先将模型预处理为单网格、单贴图的网页资产");if(!Se)throw new Error("模型中未找到可显示的网格");de=new Kt;for(const Tt of["position","normal","uv"]){const Ct=Se.geometry.getAttribute(Tt);if(!Ct)continue;const yt=new Float32Array(Ct.count*Ct.itemSize);for(let Dt=0;Dt<Ct.count;Dt++)yt[Dt*Ct.itemSize]=Ct.getX(Dt),yt[Dt*Ct.itemSize+1]=Ct.getY(Dt),Ct.itemSize>2&&(yt[Dt*Ct.itemSize+2]=Ct.getZ(Dt));de.setAttribute(Tt,new St(yt,Ct.itemSize))}Se.geometry.index&&de.setIndex(Se.geometry.index.clone()),de.applyMatrix4(Se.matrixWorld),de.rotateY(n.model.rotationY),de.computeBoundingBox();const X=de.boundingBox.getCenter(new D),_e=de.boundingBox.getSize(new D),He=2.65/Math.max(_e.x,_e.y,_e.z);de.translate(-X.x,-X.y,-X.z),de.scale(He,He,He),de.computeBoundingBox(),de.computeBoundingSphere(),H=Se.material.clone(),H.roughness=n.model.roughness,H.metalness=n.model.metalness,H.envMapIntensity=.42,ke=new _t(de,H),I.add(ke),J=de.boundingBox;const Xe=r?2e4:6e4,gt=await Wl(de,Xe),Et=Go(H,J),nt=Ho(de,H.map,Xe,J,gt);I.add(nt.points),fe=[Et],G=[nt],ee=de.index?de.index.count/3:de.attributes.position.count/3}for(const X of G)X.uniforms.uPixelRatio.value=o.getPixelRatio();ae||ne.scene.traverse(X=>{X.isMesh&&(X.geometry.dispose(),Array.isArray(X.material)?X.material.forEach(_e=>_e.dispose()):X.material.dispose())});const De=H0(821),E=new Float32Array((r?180:450)*3);for(let X=0;X<E.length;X+=3)E[X]=(De()-.5)*11,E[X+1]=(De()-.5)*6,E[X+2]=-2-De()*5;const Q=new Kt;Q.setAttribute("position",new St(E,3));const V=new uc(Q,new lc({color:7640744,size:.012,transparent:!0,opacity:.38,depthWrite:!1}));c.add(V);const Z={uTime:{value:0}},ie=new _t(new Or(10,1.4),new Cn({transparent:!0,depthWrite:!1,uniforms:Z,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float uTime; void main(){float band=exp(-pow((vUv.y-.5)*5.,2.));float wave=.5+.22*sin(vUv.x*17.+uTime*.07)+.18*sin(vUv.x*31.-uTime*.05+vUv.y*5.);float edge=smoothstep(0.,.2,vUv.x)*(1.-smoothstep(.8,1.,vUv.x));gl_FragColor=vec4(.34,.47,.55,band*wave*edge*.075);}"}));ie.position.set(0,-1.5,-2.5),c.add(ie);const Ne=n.anchors.map(X=>({...X})),he=new rp,Ue=new D(0,0,1);for(const X of Ne){he.set(new D(X.x,X.y,4),new D(0,0,-1));const _e=he.intersectObject(ke,!0)[0];X.position=_e?_e.point:new D(X.x,X.y,.25),X.normal=_e?_e.face.normal.clone():Ue.clone()}const mt=G0(J);function ot(X=!1){const _e=new D(.24,.24,s),He=new D;if(f=_e.length(),_=null,X||C()){A.set(0,0),u=null,h=null,I.rotation.set(0,-.12,0),l.position.copy(_e),m.target.copy(He),m.update(),K();return}u={started:performance.now(),fromCamera:l.position.clone(),fromTarget:m.target.clone(),fromOffset:A.clone(),position:_e,target:He},h={started:performance.now(),from:I.rotation.y,to:-.12}}function P(){if(h)return;const X=l.position.clone().sub(m.target),_e=I.rotation.y-Math.atan2(X.x,X.z)+Math.atan2(.24,s);if(ot(!0),I.rotation.y=_e,matchMedia("(prefers-reduced-motion:reduce)").matches){I.rotation.y=_e+Math.PI;return}h={started:performance.now(),from:_e,to:_e+Math.PI}}function S(X){if(!Ne[X])return;_=null,A.set(0,0),h=null,I.rotation.set(0,-.12,0),I.updateMatrixWorld(!0);const _e=Ne[X].position.clone().applyMatrix4(I.matrixWorld).multiplyScalar(.32),He=_e.clone().add(new D(X===0?-.28:X===1?.28:.1,.15,a));if(f=He.distanceTo(_e),matchMedia("(prefers-reduced-motion:reduce)").matches){u=null,l.position.copy(He),m.target.copy(_e),m.update();return}u={started:performance.now(),fromCamera:l.position.clone(),fromTarget:m.target.clone(),position:He,target:_e}}function F(X,_e){return I.updateMatrixWorld(!0),l.updateMatrixWorld(!0),he.setFromCamera(new Be(X*2-1,1-_e*2),l),he.intersectObject(ke,!0).length>0}function K(){I.updateMatrixWorld(!0);const X=g==="view"&&i.clientWidth>760;m.minDistance=Math.max(X?Math.max(2.8,s*.62):.5,mt(l,m.target,I.matrixWorld,g==="chat"&&i.clientWidth>760?.36:X?x:1,X)),m.maxDistance=Math.max(9,m.minDistance*1.6),f=en.clamp(f,m.minDistance,m.maxDistance),M.copy(l.position).sub(m.target),M.length()<m.minDistance&&l.position.copy(m.target).add(M.setLength(m.minDistance))}function re(){var gt;const{width:X,height:_e,left:He}=i.getBoundingClientRect();if(!X||!_e)return;const Xe=(gt=document.querySelector(".introduction"))==null?void 0:gt.getBoundingClientRect();x=X>760&&Xe?en.clamp((X*.5-(Xe.right-He)-24)/(X*.5),.3,1):1,o.setSize(X,_e,!1),l.aspect=X/_e,l.updateProjectionMatrix(),K()}const $=new ResizeObserver(re);$.observe(i),ot(!0),re();function Le(X,_e,He){if(u=null,h=null,_=null,K(),g==="view"&&Number.isFinite(_e)&&Number.isFinite(He)){const Xe=i.getBoundingClientRect(),gt=new Be((_e-Xe.left)/Xe.width*2-1,1-(He-Xe.top)/Xe.height*2);l.updateMatrixWorld(!0),he.setFromCamera(gt,l);const Et=he.intersectObject(ke,!0)[0];R.setFromNormalAndCoplanarPoint(l.getWorldDirection(L),m.target);const nt=Et?Et.point.clone():he.ray.intersectPlane(R,new D);nt&&(_={point:nt,ndc:gt})}f=en.clamp(f*X,m.minDistance,m.maxDistance)}function pe(X){X.preventDefault();const _e=X.deltaY*(X.deltaMode===1?16:X.deltaMode===2?i.clientHeight:1);Le(Math.exp(en.clamp(_e*.0016,-.6,.6)),X.clientX,X.clientY)}const Ee=new Map;let Ae=0;function le(X){if(X.pointerType==="touch"&&(Ee.set(X.pointerId,[X.clientX,X.clientY]),Ae=0,Ee.size===2)){const[_e,He]=Ee.values();Ae=Math.hypot(_e[0]-He[0],_e[1]-He[1])}}function xe(X){if(!Ee.has(X.pointerId)||(Ee.set(X.pointerId,[X.clientX,X.clientY]),Ee.size!==2))return;const[_e,He]=Ee.values(),Xe=Math.hypot(_e[0]-He[0],_e[1]-He[1]);Ae>0&&Xe>0&&Le(Ae/Xe,(_e[0]+He[0])/2,(_e[1]+He[1])/2),Ae=Xe}function Fe(X){Ee.delete(X.pointerId),Ae=0}i.addEventListener("wheel",pe,{passive:!1}),i.addEventListener("pointerdown",le),i.addEventListener("pointermove",xe),i.addEventListener("pointerup",Fe),i.addEventListener("pointercancel",Fe),i.addEventListener("lostpointercapture",Fe);let Re=!0;const be=new D,qe=new D,U=new D,ce=new D;function ge(X,_e,He,Xe=0){if(ae==null||ae.update(Xe),h){const nt=Math.min(1,(performance.now()-h.started)/850),Tt=nt*nt*(3-2*nt);I.rotation.y=en.lerp(h.from,h.to,Tt),nt===1&&(h=null)}if(u){const nt=Math.min(1,(performance.now()-u.started)/650),Tt=nt*nt*(3-2*nt);l.position.lerpVectors(u.fromCamera,u.position,Tt),m.target.lerpVectors(u.fromTarget,u.target,Tt),u.fromOffset&&A.copy(u.fromOffset).multiplyScalar(1-Tt),nt===1&&(u=null)}for(const nt of[...fe,...G.map(Tt=>Tt.uniforms)])nt.uReveal.value=X.reveal,nt.uDissolve.value=X.dissolve;for(const nt of G)nt.uniforms.uAssembly.value=X.assembly,nt.uniforms.uTime.value=_e,nt.uniforms.uSurface.value=Re?1:0,nt.points.visible=!Re||X.reveal<.999||X.dissolve>.001;ke.visible=Re,me&&(me.visible=Re&&ae.busy&&X.reveal>=.999&&X.dissolve<=.001,me.visible&&(ke.visible=!1)),He&&(I.rotation.y=-.12+Math.sin(_e*.15)*.12),d||(p+=Math.max(0,_e-b)),b=_e,V.rotation.y=p*.007,V.position.y=Math.sin(p*.1)*.06,Z.uTime.value=p,m.update(),K();const gt=performance.now(),Et=v?(gt-v)/1e3:1/60;v=gt,u||(M.copy(l.position).sub(m.target),l.position.copy(m.target).add(M.setLength(V0(M.length(),f,Et,C())))),l.projectionMatrix.elements[8]=0,l.projectionMatrix.elements[9]=0,l.updateMatrixWorld(!0),g==="view"&&(_&&(T.copy(_.point).project(l),A.set(_.ndc.x-T.x,_.ndc.y-T.y)),A.copy(mt.constrainOffset(l,I.matrixWorld,A,x)),l.projectionMatrix.elements[8]=-A.x,l.projectionMatrix.elements[9]=-A.y),l.projectionMatrixInverse.copy(l.projectionMatrix).invert(),o.render(c,l)}let Te="",oe=[];function te(){const X=l.position.toArray().join(",")+l.quaternion.toArray().join(",")+l.aspect+l.projectionMatrix.elements[8]+","+l.projectionMatrix.elements[9]+I.rotation.y+i.clientWidth+","+i.clientHeight;return X===Te||(Te=X,oe=Ne.map(_e=>{qe.copy(_e.position).applyMatrix4(I.matrixWorld),U.copy(_e.normal).transformDirection(I.matrixWorld),ce.subVectors(l.position,qe).normalize(),be.copy(qe).project(l),he.set(l.position,ce.clone().negate());const He=he.intersectObject(ke,!0)[0],Xe=He&&He.distance<l.position.distanceTo(qe)-.065;return{x:(be.x*.5+.5)*i.clientWidth,y:(-.5*be.y+.5)*i.clientHeight,visible:U.dot(ce)>.12&&!Xe&&Math.abs(be.x)<.94&&Math.abs(be.y)<.93&&be.z<1}})),oe}function Ce(X){if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-"].includes(X.key))return;if(X.preventDefault(),["+","=","-"].includes(X.key)){Le(X.key==="-"?1.12:1/1.12);return}u=null,_=null;const He=l.position.clone().sub(m.target),Xe=new Uo().setFromVector3(He);X.key==="ArrowLeft"&&(Xe.theta-=.12),X.key==="ArrowRight"&&(Xe.theta+=.12),X.key==="ArrowUp"&&(Xe.phi=Math.max(.2,Xe.phi-.1)),X.key==="ArrowDown"&&(Xe.phi=Math.min(Math.PI*.82,Xe.phi+.1)),l.position.copy(m.target).add(new D().setFromSpherical(Xe)),m.update(),K()}i.addEventListener("keydown",Ce);let Ve=null;function ct(){if(Ve)return Ve;const X=document.createElement("canvas");X.width=960,X.height=960;const _e=X.getContext("2d");if(!_e)return null;const He=new Co;He.environment=c.environment,He.environmentIntensity=c.environmentIntensity;for(const yt of c.children.filter(Dt=>Dt.isLight))He.add(yt.clone());const Xe=ke.clone(!0);Xe.visible=!0,Xe.rotation.set(0,-.12,0),He.add(Xe);const gt=new Bt(35,1,.1,60),Et=(n.dynamic?J.getBoundingSphere(new xn).radius:de.boundingSphere.radius)/Math.sin(en.degToRad(17.5))*1.12;gt.position.set(.24,.24,Et),gt.lookAt(0,0,0);const nt=o.getSize(new Be),Tt=o.getPixelRatio(),Ct=fe.map(yt=>[yt.uReveal.value,yt.uDissolve.value]);try{return fe.forEach(yt=>{yt.uReveal.value=1,yt.uDissolve.value=0}),o.setPixelRatio(1),o.setSize(960,960,!1),o.render(He,gt),_e.drawImage(i,0,0),Ve=X,Ve}finally{fe.forEach((yt,Dt)=>{[yt.uReveal.value,yt.uDissolve.value]=Ct[Dt]}),o.setPixelRatio(Tt),o.setSize(nt.x,nt.y,!1),o.render(c,l)}}function tt(){var _e;ae==null||ae.dispose(),(_e=Se==null?void 0:Se.skeleton)==null||_e.dispose(),$.disconnect(),i.removeEventListener("keydown",Ce),i.removeEventListener("wheel",pe),i.removeEventListener("pointerdown",le),i.removeEventListener("pointermove",xe),i.removeEventListener("pointerup",Fe),i.removeEventListener("pointercancel",Fe),i.removeEventListener("lostpointercapture",Fe),m.dispose();const X=new Set;c.traverse(He=>{var Xe;(Xe=He.geometry)==null||Xe.dispose();for(const gt of He.material?Array.isArray(He.material)?He.material:[He.material]:[]){for(const Et of Object.values(gt))Et!=null&&Et.isTexture&&X.add(Et);gt.dispose()}}),X.forEach(He=>He.dispose()),ye==null||ye.dispose(),q.dispose(),o.dispose()}return e({phase:"lighting"}),await o.compileAsync(c,l),{performancePlayer:ae,captureArtifact:ct,update:ge,reset:ot,flip:P,focusFeature:S,hitTest:F,anchors:Ne,projectAnchors:te,setViewingMode(X){g=X,_=null,A.set(0,0),K()},setAmbientPaused(X){d=X},setSurface(X){Re=X},dispose:tt,stats:{get zoom(){return{distance:l.position.distanceTo(m.target),target:f,offset:A.toArray(),pointer:(_==null?void 0:_.ndc.toArray())??null,anchored:_?_.point.clone().project(l).toArray().slice(0,2):null}},triangles:ee,particles:G.reduce((X,_e)=>X+_e.points.geometry.attributes.position.count,0),asset:r?"mobile":"desktop"},renderer:o,camera:l,group:I}}const bt=(i,e,t)=>{const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n},Mn=(i,e,t)=>{const n=bt("button",i,e);return n.type="button",n.onclick=t,n};async function X0(i,e){var o,c;if(!i.ok){const l=await i.json().catch(()=>null);throw Error(((o=l==null?void 0:l.error)==null?void 0:o.message)||"连接暂时中断，请稍后再试。")}if(!((c=i.headers.get("content-type"))!=null&&c.includes("text/event-stream")))return i.json();const t=i.body.getReader(),n=new TextDecoder;let r="",s=null;function a(l){var b;const u=l.split(`
`),h=(b=u.find(g=>g.startsWith("event:")))==null?void 0:b.slice(6).trim(),d=u.filter(g=>g.startsWith("data:")).map(g=>g.slice(5).trimStart()).join(`
`);if(!d)return;const p=JSON.parse(d);if(h==="delta"&&typeof p.text=="string"&&e(p.text),h==="done"&&(s=p),h==="error")throw Error(p.message||"回答暂时中断。")}try{for(;;){const{done:l,value:u}=await t.read();if(l)break;r+=n.decode(u,{stream:!0}).replace(/\r/g,"");let h;for(;(h=r.indexOf(`

`))>=0;)a(r.slice(0,h)),r=r.slice(h+2);if(r.length>1e5)throw Error("回答内容过长。")}if(r+=n.decode(),r.trim()&&a(r),!s||typeof s.answer!="string")throw Error("回答尚未完整接收，请重试。");return s}finally{await t.cancel().catch(()=>{}),t.releaseLock()}}function Y0({onFocus:i=()=>{},exhibit:e}){var E,Q;const t=e.welcome,n=e.prompts,r=e.nickname,s=document.querySelector("#experience");let a=!1,o=!1,c=null,l=!1,u=null,h=0,d=[],p=null,b="",g=!1;const m=new AbortController,f=bt("aside","artifact-speech");f.id="artifact-chat",f.hidden=!0,f.setAttribute("aria-label",`${r}的回答`);const v=bt("p","speech-status",`${r} · 与你相遇`);v.setAttribute("role","status");const x=bt("div","speech-copy",t);x.id="speech-copy",x.tabIndex=0;const _=bt("div","speech-actions"),A=bt("div","speech-tools"),T=Mn("speech-link","对话记录 ↗",()=>Se()),R=Mn("speech-link","资料出处 ↗",()=>Se(!0));R.hidden=!0,A.append(T,R),f.append(v,x,_,A),s.append(f);const L=bt("section","chat-dock");L.id="chat-dock",L.hidden=!0,L.setAttribute("aria-label",`向${r}提问`);const M=bt("form","chat-composer"),y=bt("textarea","chat-input");y.id="chat-input",y.rows=1,y.maxLength=2e3,y.placeholder="想问我什么？",y.setAttribute("aria-label",`想问${r}什么？`);const C=Mn("chat-send","↗",()=>{});C.type="submit",C.setAttribute("aria-label","发送");const I=Mn("chat-stop","停止",()=>u==null?void 0:u.abort());I.hidden=!0,I.setAttribute("aria-label","停止生成"),M.append(y,C,I);const N=bt("div","chat-prompts"),k=bt("p","composer-hint","Enter 发送 · Shift + Enter 换行");L.append(M,N,k),s.append(L);const q=bt("dialog","conversation-dialog");q.id="conversation-history",q.setAttribute("aria-labelledby","conversation-title");const Y=bt("div","conversation-heading"),se=bt("h2","",`与${r}的对话`);se.id="conversation-title";const z=Mn("dialog-close","×",()=>q.close());z.setAttribute("aria-label","关闭对话记录"),Y.append(se,z);const ne=bt("div","chat-log");ne.setAttribute("role","log"),ne.setAttribute("aria-label","对话记录"),ne.setAttribute("aria-live","off");const ae=Mn("clear-chat","清空会话",()=>{u==null||u.abort(),h++,o=!1,d=[],p=null,ne.replaceChildren(),b="",de(t),v.textContent=`${r} · 重新认识你`,R.hidden=!0,_.replaceChildren(),J(n),H(),q.close()}),me=bt("div","conversation-footer");me.append(ae),q.append(Y,ne,me),s.append(q);let Ie=null;function Se(V=!1){if(Ie=document.activeElement,q.open||q.showModal(),V){const Z=ne.querySelector("article:last-child details");Z&&(Z.open=!0,Z.scrollIntoView({block:"nearest"}))}else ne.scrollTop=ne.scrollHeight}q.addEventListener("close",()=>{Ie!=null&&Ie.isConnected&&!Ie.closest("[hidden]")&&Ie.focus({preventScroll:!0})});function ke(V,Z){const ie=bt("article",`chat-message chat-message-${V}`);ie.append(bt("p","chat-speaker",V==="user"?"你":r));const Ne=bt("div","chat-message-text",Z);return ie.append(Ne),ne.append(ie),{article:ie,copy:Ne}}function de(V){x.textContent=V}function H(){C.disabled=o||!c||!y.value.trim(),C.hidden=o,I.hidden=!o,N.querySelectorAll("button").forEach(V=>V.disabled=o||!c),f.classList.toggle("speaking",o),f.setAttribute("aria-busy",String(o)),ae.disabled=o||!ne.children.length,T.hidden=!ne.children.length}function J(V){N.replaceChildren(...V.slice(0,3).map(Z=>Mn("chat-prompt",Z,()=>ee(Z))))}function fe(V,Z){if(!(Z!=null&&Z.length))return;const ie=bt("details","chat-sources");ie.append(bt("summary","",`资料出处 · ${Z.length}`));for(const Ne of Z)try{const he=new URL(Ne.url);if(!["http:","https:"].includes(he.protocol))continue;const Ue=bt("a","",Ne.title+" ↗");Ue.href=he.href,Ue.target="_blank",Ue.rel="noopener noreferrer",ie.append(Ue),Ne.excerpt&&ie.append(bt("p","",Ne.excerpt))}catch{}V.append(ie)}function G(V){_.replaceChildren();for(const Z of(V||[]).slice(0,2))Z.type==="focus"&&e.focusTargets.includes(Z.target)&&_.append(Mn("speech-focus",Z.label||"看看这个细节 ↗",()=>i(Z.target)))}async function ee(V=y.value){var mt,ot,P;const Z=V.trim();if(!Z||o||!c||l)return;if(Z.length>2e3){k.textContent="问题请控制在 2000 字以内。";return}b=Z,y.value="",o=!0;const ie=++h;u=new AbortController;const Ne=u;ke("user",Z);const he=ke("assistant","");let Ue="";f.scrollTop=0,v.textContent=`${r} · 让我想一想`,de("你的话我听见了，让我慢慢说给你听……"),_.replaceChildren(),R.hidden=!0,k.textContent="正在回应，文字将逐步呈现",H();try{const S=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},signal:Ne.signal,body:JSON.stringify({artifactId:e.id,message:Z,history:d.slice(-8).map(K=>({...K,content:K.content.slice(0,1200)}))})}),F=await X0(S,K=>{ie!==h||l||(Ue+=K,de(Ue),he.copy.textContent=Ue,v.textContent=`${r} · 正在讲述`)});if(ie!==h||l)return;if(!((mt=F.answer)!=null&&mt.trim()))throw Error("没有收到完整回答。");p=F,de(F.answer),he.copy.textContent=F.answer,fe(he.article,F.citations),G(F.actions),R.hidden=!((ot=F.citations)!=null&&ot.length),F.notice&&/超时|不可用|中断/.test(F.notice)&&he.article.append(bt("p","chat-notice",F.notice)),d.push({role:"user",content:Z},{role:"assistant",content:F.answer}),v.textContent=F.mode==="model"?`${r} · 说给你听`:`${r} · 资料与故事`,k.textContent="回答已完成 · 可以继续追问",(P=F.suggestions)!=null&&P.length&&J(F.suggestions)}catch{if(ie!==h||l)return;const F=Ne.signal.aborted;v.textContent=F?`${r} · 已停止`:`${r} · 暂时未能回答`,de(F?"这次讲述先停在这里。想继续时，再问我一次吧。":"连接暂时中断了，你的问题我还留着。请稍后重试。"),he.copy.textContent=F?"[已停止，本轮未完成]":"[本轮未完成，请重试]",_.replaceChildren(Mn("speech-focus","重新发送 ↗",()=>ee(b))),k.textContent=F?"已停止生成":"发送未完成，可重试"}finally{ie===h&&!l&&(o=!1,u=null,H())}}async function ye(){var V;try{const Z=await fetch(`/api/artifacts/${e.id}`,{signal:m.signal}),ie=await Z.json();if(!Z.ok||((V=ie.artifact)==null?void 0:V.id)!==e.id)throw Error();if(l)return;c=ie.artifact,H()}catch{if(l)return;v.textContent=`${r} · 资料尚未连接`,de("还没连上我的资料，稍后再试试看。"),_.replaceChildren(Mn("speech-focus","重试连接 ↗",()=>{_.replaceChildren(),ye()}))}}M.onsubmit=V=>{V.preventDefault(),g||ee()},y.oninput=H,y.oncompositionstart=()=>{g=!0},y.oncompositionend=()=>{g=!1},y.onkeydown=V=>{V.key==="Enter"&&!V.shiftKey&&!V.isComposing&&!g&&V.keyCode!==229&&(V.preventDefault(),ee())};function De(){const V=window.visualViewport,Z=a&&innerWidth<=760?Math.max(0,innerHeight-((V==null?void 0:V.height)||innerHeight)-((V==null?void 0:V.offsetTop)||0)):0;s.style.setProperty("--keyboard-offset",`${Z}px`),s.classList.toggle("keyboard-open",a&&Z>100)}return(E=window.visualViewport)==null||E.addEventListener("resize",De),(Q=window.visualViewport)==null||Q.addEventListener("scroll",De),J(n),H(),ye(),{setOpen(V){a=V,f.hidden=!V,L.hidden=!V,!V&&L.contains(document.activeElement)&&document.activeElement.blur(),De()},destroy(){var V,Z;l=!0,u==null||u.abort(),m.abort(),(V=window.visualViewport)==null||V.removeEventListener("resize",De),(Z=window.visualViewport)==null||Z.removeEventListener("scroll",De),f.remove(),L.remove(),q.remove()}}}function K0({onFocus:i,exhibit:e}){const t=e.topics,n=document.querySelector("#guide-more"),r=document.querySelector("#guide-panel"),s=document.querySelector("#guide-action"),a=[...document.querySelectorAll("[data-guide]")];let o="shape";function c(l){o=l;const u=t[l];a.forEach(h=>{const d=h.dataset.guide===l;h.setAttribute("aria-selected",String(d)),h.tabIndex=d?0:-1}),r.setAttribute("aria-labelledby",`guide-${l}`),document.querySelector("#guide-kind").textContent=u.kind,document.querySelector("#guide-brief").textContent=u.brief,document.querySelector("#guide-excerpt").textContent=u.excerpt,s.textContent=u.action,document.querySelector("#guide-long").replaceChildren(...u.paragraphs.map(h=>{const d=document.createElement("p");return d.textContent=h,d}))}return a.forEach((l,u)=>{l.onclick=()=>c(l.dataset.guide),l.onkeydown=h=>{let d;if(h.key==="ArrowRight")d=(u+1)%a.length;else if(h.key==="ArrowLeft")d=(u+a.length-1)%a.length;else if(h.key==="Home")d=0;else if(h.key==="End")d=a.length-1;else return;h.preventDefault(),c(a[d].dataset.guide),a[d].focus()}}),s.onclick=()=>{const l=t[o];l.target?i(l.target):(n.open=!0,requestAnimationFrame(()=>document.querySelector("#guide-source-link").focus()))},c("shape"),{destroy(){a.forEach(l=>{l.onclick=null,l.onkeydown=null}),s.onclick=null}}}const At=(i,e,t)=>{const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n},J0={reference:"史料参照",creative:"艺术创作",digital:"数字记录"};function $0({exhibit:i,onClose:e}){const t=At("aside","story-panel artifact-journey");t.id="journey-panel",t.hidden=!0,t.setAttribute("aria-labelledby","journey-title");const n=At("div","panel-heading"),r=At("div","");r.append(At("p","eyebrow","TRACES THROUGH TIME"));const s=At("h2","",`${i.nickname}的时光足迹`);s.id="journey-title",r.append(s);const a=At("button","","×");a.type="button",a.setAttribute("aria-label","收起时光足迹"),a.onclick=e,n.append(r,a);const o=At("div","journey-body");o.tabIndex=0,o.setAttribute("aria-label","时间轴内容，可上下滚动"),t.append(n,o),document.querySelector("#experience").append(t);const c=new AbortController;let l=!1;async function u(){var h,d,p;o.replaceChildren(At("p","guide-lead","正在整理时光中的线索……"));try{const b=await fetch(`/api/artifacts/${i.id}`,{signal:c.signal}),g=await b.json();if(!b.ok||((h=g.artifact)==null?void 0:h.id)!==i.id||!((p=(d=g.artifact.journey)==null?void 0:d.entries)!=null&&p.length))throw Error("journey_unavailable");if(l)return;const{journey:m,sources:f}=g.artifact,v=At("p","guide-lead",m.lead),x=At("ol","journey-track");for(const _ of m.entries){const A=At("li",`journey-node journey-${_.kind}`),T=At("div","journey-meta");T.append(At("span","journey-date",_.time),At("span","journey-kind",J0[_.kind])),A.append(T,At("h3","",_.title),At("p","journey-copy",_.text));for(const R of _.sourceIds){const L=f.find(y=>y.id===R);if(!(L!=null&&L.url))continue;const M=At("a","journey-source",`${L.publisher} · 查阅原文 ↗`);M.href=L.url,M.target="_blank",M.rel="noopener noreferrer",A.append(M)}x.append(A)}o.replaceChildren(v,x,At("p","journey-end","故事走到这里，与你相逢。"))}catch{if(l)return;const b=At("button","guide-action","重新加载时间轴 ↗");b.onclick=u,o.replaceChildren(At("p","guide-lead","时光资料暂未连接，请重试。"),b)}}return u(),{setOpen(h){t.hidden=!h},destroy(){l=!0,c.abort(),t.remove()}}}function Z0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Bi={},ga,jl;function Q0(){return jl||(jl=1,ga=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),ga}var ba={},$n={},ql;function vi(){if(ql)return $n;ql=1;let i;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return $n.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},$n.getSymbolTotalCodewords=function(n){return e[n]},$n.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},$n.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},$n.isKanjiModeEnabled=function(){return typeof i<"u"},$n.toSJIS=function(n){return i(n)},$n}var _a={},Xl;function bc(){return Xl||(Xl=1,(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,r){if(i.isValid(n))return n;try{return e(n)}catch{return r}}})(_a)),_a}var va,Yl;function ev(){if(Yl)return va;Yl=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},va=i,va}var xa,Kl;function tv(){if(Kl)return xa;Kl=1;function i(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return i.prototype.set=function(e,t,n,r){const s=e*this.size+t;this.data[s]=n,r&&(this.reservedBit[s]=!0)},i.prototype.get=function(e,t){return this.data[e*this.size+t]},i.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},i.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},xa=i,xa}var ya={},Jl;function nv(){return Jl||(Jl=1,(function(i){const e=vi().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const r=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let c=1;c<r-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},i.getPositions=function(n){const r=[],s=i.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||r.push([s[o],s[c]]);return r}})(ya)),ya}var Ma={},$l;function iv(){if($l)return Ma;$l=1;const i=vi().getSymbolSize,e=7;return Ma.getPositions=function(n){const r=i(n);return[[0,0],[r-e,0],[0,r-e]]},Ma}var Sa={},Zl;function rv(){return Zl||(Zl=1,(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},i.from=function(r){return i.isValid(r)?parseInt(r,10):void 0},i.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,c=0,l=null,u=null;for(let h=0;h<s;h++){o=c=0,l=u=null;for(let d=0;d<s;d++){let p=r.get(h,d);p===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=p,o=1),p=r.get(d,h),p===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=p,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},i.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=r.get(o,c)+r.get(o,c+1)+r.get(o+1,c)+r.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},i.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|r.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},i.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,r,s){switch(n){case i.Patterns.PATTERN000:return(r+s)%2===0;case i.Patterns.PATTERN001:return r%2===0;case i.Patterns.PATTERN010:return s%3===0;case i.Patterns.PATTERN011:return(r+s)%3===0;case i.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case i.Patterns.PATTERN101:return r*s%2+r*s%3===0;case i.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case i.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(r,c,o))},i.getBestMask=function(r,s){const a=Object.keys(i.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),i.applyMask(l,r);const u=i.getPenaltyN1(r)+i.getPenaltyN2(r)+i.getPenaltyN3(r)+i.getPenaltyN4(r);i.applyMask(l,r),u<c&&(c=u,o=l)}return o}})(Sa)),Sa}var fs={},Ql;function dh(){if(Ql)return fs;Ql=1;const i=bc(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return fs.getBlocksCount=function(r,s){switch(s){case i.L:return e[(r-1)*4+0];case i.M:return e[(r-1)*4+1];case i.Q:return e[(r-1)*4+2];case i.H:return e[(r-1)*4+3];default:return}},fs.getTotalCodewordsCount=function(r,s){switch(s){case i.L:return t[(r-1)*4+0];case i.M:return t[(r-1)*4+1];case i.Q:return t[(r-1)*4+2];case i.H:return t[(r-1)*4+3];default:return}},fs}var Ea={},_r={},eu;function sv(){if(eu)return _r;eu=1;const i=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let r=0;r<255;r++)i[r]=n,e[n]=r,n<<=1,n&256&&(n^=285);for(let r=255;r<512;r++)i[r]=i[r-255]})(),_r.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},_r.exp=function(n){return i[n]},_r.mul=function(n,r){return n===0||r===0?0:i[e[n]+e[r]]},_r}var tu;function av(){return tu||(tu=1,(function(i){const e=sv();i.mul=function(n,r){const s=new Uint8Array(n.length+r.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(n[a],r[o]);return s},i.mod=function(n,r){let s=new Uint8Array(n);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=e.mul(r[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},i.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let s=0;s<n;s++)r=i.mul(r,new Uint8Array([1,e.exp(s)]));return r}})(Ea)),Ea}var Ta,nu;function ov(){if(nu)return Ta;nu=1;const i=av();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(n.length+this.degree);r.set(n);const s=i.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Ta=e,Ta}var wa={},Aa={},Ra={},iu;function fh(){return iu||(iu=1,Ra.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ra}var Sn={},ru;function ph(){if(ru)return Sn;ru=1;const i="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Sn.KANJI=new RegExp(t,"g"),Sn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Sn.BYTE=new RegExp(n,"g"),Sn.NUMERIC=new RegExp(i,"g"),Sn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Sn.testKanji=function(c){return r.test(c)},Sn.testNumeric=function(c){return s.test(c)},Sn.testAlphanumeric=function(c){return a.test(c)},Sn}var su;function xi(){return su||(su=1,(function(i){const e=fh(),t=ph();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},i.getBestModeForData=function(s){return t.testNumeric(s)?i.NUMERIC:t.testAlphanumeric(s)?i.ALPHANUMERIC:t.testKanji(s)?i.KANJI:i.BYTE},i.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},i.isValid=function(s){return s&&s.bit&&s.ccBits};function n(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+r)}}i.from=function(s,a){if(i.isValid(s))return s;try{return n(s)}catch{return a}}})(Aa)),Aa}var au;function cv(){return au||(au=1,(function(i){const e=vi(),t=dh(),n=bc(),r=xi(),s=fh(),a=7973,o=e.getBCHDigit(a);function c(d,p,b){for(let g=1;g<=40;g++)if(p<=i.getCapacity(g,b,d))return g}function l(d,p){return r.getCharCountIndicator(d,p)+4}function u(d,p){let b=0;return d.forEach(function(g){const m=l(g.mode,p);b+=m+g.getBitsLength()}),b}function h(d,p){for(let b=1;b<=40;b++)if(u(d,b)<=i.getCapacity(b,p,r.MIXED))return b}i.from=function(p,b){return s.isValid(p)?parseInt(p,10):b},i.getCapacity=function(p,b,g){if(!s.isValid(p))throw new Error("Invalid QR Code version");typeof g>"u"&&(g=r.BYTE);const m=e.getSymbolTotalCodewords(p),f=t.getTotalCodewordsCount(p,b),v=(m-f)*8;if(g===r.MIXED)return v;const x=v-l(g,p);switch(g){case r.NUMERIC:return Math.floor(x/10*3);case r.ALPHANUMERIC:return Math.floor(x/11*2);case r.KANJI:return Math.floor(x/13);case r.BYTE:default:return Math.floor(x/8)}},i.getBestVersionForData=function(p,b){let g;const m=n.from(b,n.M);if(Array.isArray(p)){if(p.length>1)return h(p,m);if(p.length===0)return 1;g=p[0]}else g=p;return c(g.mode,g.getLength(),m)},i.getEncodedBits=function(p){if(!s.isValid(p)||p<7)throw new Error("Invalid QR Code version");let b=p<<12;for(;e.getBCHDigit(b)-o>=0;)b^=a<<e.getBCHDigit(b)-o;return p<<12|b}})(wa)),wa}var Ca={},ou;function lv(){if(ou)return Ca;ou=1;const i=vi(),e=1335,t=21522,n=i.getBCHDigit(e);return Ca.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;i.getBCHDigit(c)-n>=0;)c^=e<<i.getBCHDigit(c)-n;return(o<<10|c)^t},Ca}var Pa={},La,cu;function uv(){if(cu)return La;cu=1;const i=xi();function e(t){this.mode=i.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),n.put(a,o*3+1))},La=e,La}var Ia,lu;function hv(){if(lu)return Ia;lu=1;const i=xi(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=i.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},Ia=t,Ia}var Da,uu;function dv(){if(uu)return Da;uu=1;const i=xi();function e(t){this.mode=i.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,r=this.data.length;n<r;n++)t.put(this.data[n],8)},Da=e,Da}var Na,hu;function fv(){if(hu)return Na;hu=1;const i=xi(),e=vi();function t(n){this.mode=i.KANJI,this.data=n}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},Na=t,Na}var Ua={exports:{}},du;function pv(){return du||(du=1,(function(i){var e={single_source_shortest_paths:function(t,n,r){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,h,d,p,b,g,m;!o.empty();){c=o.pop(),l=c.value,h=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(p=d[u],b=h+p,g=a[u],m=typeof a[u]>"u",(m||g>b)&&(a[u]=b,o.push(u,b),s[u]=l))}if(typeof r<"u"&&typeof a[r]>"u"){var f=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(f)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var r=[],s=n;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,n,r){var s=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,r={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r.queue=[],r.sorter=t.sorter||n.default_sorter,r},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var r={value:t,cost:n};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})(Ua)),Ua.exports}var fu;function mv(){return fu||(fu=1,(function(i){const e=xi(),t=uv(),n=hv(),r=dv(),s=fv(),a=ph(),o=vi(),c=pv();function l(f){return unescape(encodeURIComponent(f)).length}function u(f,v,x){const _=[];let A;for(;(A=f.exec(x))!==null;)_.push({data:A[0],index:A.index,mode:v,length:A[0].length});return _}function h(f){const v=u(a.NUMERIC,e.NUMERIC,f),x=u(a.ALPHANUMERIC,e.ALPHANUMERIC,f);let _,A;return o.isKanjiModeEnabled()?(_=u(a.BYTE,e.BYTE,f),A=u(a.KANJI,e.KANJI,f)):(_=u(a.BYTE_KANJI,e.BYTE,f),A=[]),v.concat(x,_,A).sort(function(R,L){return R.index-L.index}).map(function(R){return{data:R.data,mode:R.mode,length:R.length}})}function d(f,v){switch(v){case e.NUMERIC:return t.getBitsLength(f);case e.ALPHANUMERIC:return n.getBitsLength(f);case e.KANJI:return s.getBitsLength(f);case e.BYTE:return r.getBitsLength(f)}}function p(f){return f.reduce(function(v,x){const _=v.length-1>=0?v[v.length-1]:null;return _&&_.mode===x.mode?(v[v.length-1].data+=x.data,v):(v.push(x),v)},[])}function b(f){const v=[];for(let x=0;x<f.length;x++){const _=f[x];switch(_.mode){case e.NUMERIC:v.push([_,{data:_.data,mode:e.ALPHANUMERIC,length:_.length},{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.ALPHANUMERIC:v.push([_,{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.KANJI:v.push([_,{data:_.data,mode:e.BYTE,length:l(_.data)}]);break;case e.BYTE:v.push([{data:_.data,mode:e.BYTE,length:l(_.data)}])}}return v}function g(f,v){const x={},_={start:{}};let A=["start"];for(let T=0;T<f.length;T++){const R=f[T],L=[];for(let M=0;M<R.length;M++){const y=R[M],C=""+T+M;L.push(C),x[C]={node:y,lastCount:0},_[C]={};for(let I=0;I<A.length;I++){const N=A[I];x[N]&&x[N].node.mode===y.mode?(_[N][C]=d(x[N].lastCount+y.length,y.mode)-d(x[N].lastCount,y.mode),x[N].lastCount+=y.length):(x[N]&&(x[N].lastCount=y.length),_[N][C]=d(y.length,y.mode)+4+e.getCharCountIndicator(y.mode,v))}}A=L}for(let T=0;T<A.length;T++)_[A[T]].end=0;return{map:_,table:x}}function m(f,v){let x;const _=e.getBestModeForData(f);if(x=e.from(v,_),x!==e.BYTE&&x.bit<_.bit)throw new Error('"'+f+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(_));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(f);case e.ALPHANUMERIC:return new n(f);case e.KANJI:return new s(f);case e.BYTE:return new r(f)}}i.fromArray=function(v){return v.reduce(function(x,_){return typeof _=="string"?x.push(m(_,null)):_.data&&x.push(m(_.data,_.mode)),x},[])},i.fromString=function(v,x){const _=h(v,o.isKanjiModeEnabled()),A=b(_),T=g(A,x),R=c.find_path(T.map,"start","end"),L=[];for(let M=1;M<R.length-1;M++)L.push(T.table[R[M]].node);return i.fromArray(p(L))},i.rawSplit=function(v){return i.fromArray(h(v,o.isKanjiModeEnabled()))}})(Pa)),Pa}var pu;function gv(){if(pu)return ba;pu=1;const i=vi(),e=bc(),t=ev(),n=tv(),r=nv(),s=iv(),a=rv(),o=dh(),c=ov(),l=cv(),u=lv(),h=xi(),d=mv();function p(T,R){const L=T.size,M=s.getPositions(R);for(let y=0;y<M.length;y++){const C=M[y][0],I=M[y][1];for(let N=-1;N<=7;N++)if(!(C+N<=-1||L<=C+N))for(let k=-1;k<=7;k++)I+k<=-1||L<=I+k||(N>=0&&N<=6&&(k===0||k===6)||k>=0&&k<=6&&(N===0||N===6)||N>=2&&N<=4&&k>=2&&k<=4?T.set(C+N,I+k,!0,!0):T.set(C+N,I+k,!1,!0))}}function b(T){const R=T.size;for(let L=8;L<R-8;L++){const M=L%2===0;T.set(L,6,M,!0),T.set(6,L,M,!0)}}function g(T,R){const L=r.getPositions(R);for(let M=0;M<L.length;M++){const y=L[M][0],C=L[M][1];for(let I=-2;I<=2;I++)for(let N=-2;N<=2;N++)I===-2||I===2||N===-2||N===2||I===0&&N===0?T.set(y+I,C+N,!0,!0):T.set(y+I,C+N,!1,!0)}}function m(T,R){const L=T.size,M=l.getEncodedBits(R);let y,C,I;for(let N=0;N<18;N++)y=Math.floor(N/3),C=N%3+L-8-3,I=(M>>N&1)===1,T.set(y,C,I,!0),T.set(C,y,I,!0)}function f(T,R,L){const M=T.size,y=u.getEncodedBits(R,L);let C,I;for(C=0;C<15;C++)I=(y>>C&1)===1,C<6?T.set(C,8,I,!0):C<8?T.set(C+1,8,I,!0):T.set(M-15+C,8,I,!0),C<8?T.set(8,M-C-1,I,!0):C<9?T.set(8,15-C-1+1,I,!0):T.set(8,15-C-1,I,!0);T.set(M-8,8,1,!0)}function v(T,R){const L=T.size;let M=-1,y=L-1,C=7,I=0;for(let N=L-1;N>0;N-=2)for(N===6&&N--;;){for(let k=0;k<2;k++)if(!T.isReserved(y,N-k)){let q=!1;I<R.length&&(q=(R[I]>>>C&1)===1),T.set(y,N-k,q),C--,C===-1&&(I++,C=7)}if(y+=M,y<0||L<=y){y-=M,M=-M;break}}}function x(T,R,L){const M=new t;L.forEach(function(k){M.put(k.mode.bit,4),M.put(k.getLength(),h.getCharCountIndicator(k.mode,T)),k.write(M)});const y=i.getSymbolTotalCodewords(T),C=o.getTotalCodewordsCount(T,R),I=(y-C)*8;for(M.getLengthInBits()+4<=I&&M.put(0,4);M.getLengthInBits()%8!==0;)M.putBit(0);const N=(I-M.getLengthInBits())/8;for(let k=0;k<N;k++)M.put(k%2?17:236,8);return _(M,T,R)}function _(T,R,L){const M=i.getSymbolTotalCodewords(R),y=o.getTotalCodewordsCount(R,L),C=M-y,I=o.getBlocksCount(R,L),N=M%I,k=I-N,q=Math.floor(M/I),Y=Math.floor(C/I),se=Y+1,z=q-Y,ne=new c(z);let ae=0;const me=new Array(I),Ie=new Array(I);let Se=0;const ke=new Uint8Array(T.buffer);for(let G=0;G<I;G++){const ee=G<k?Y:se;me[G]=ke.slice(ae,ae+ee),Ie[G]=ne.encode(me[G]),ae+=ee,Se=Math.max(Se,ee)}const de=new Uint8Array(M);let H=0,J,fe;for(J=0;J<Se;J++)for(fe=0;fe<I;fe++)J<me[fe].length&&(de[H++]=me[fe][J]);for(J=0;J<z;J++)for(fe=0;fe<I;fe++)de[H++]=Ie[fe][J];return de}function A(T,R,L,M){let y;if(Array.isArray(T))y=d.fromArray(T);else if(typeof T=="string"){let q=R;if(!q){const Y=d.rawSplit(T);q=l.getBestVersionForData(Y,L)}y=d.fromString(T,q||40)}else throw new Error("Invalid data");const C=l.getBestVersionForData(y,L);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!R)R=C;else if(R<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const I=x(R,L,y),N=i.getSymbolSize(R),k=new n(N);return p(k,R),b(k),g(k,R),f(k,L,0),R>=7&&m(k,R),v(k,I),isNaN(M)&&(M=a.getBestMask(k,f.bind(null,k,L))),a.applyMask(M,k),f(k,L,M),{modules:k,version:R,errorCorrectionLevel:L,maskPattern:M,segments:y}}return ba.create=function(R,L){if(typeof R>"u"||R==="")throw new Error("No input text");let M=e.M,y,C;return typeof L<"u"&&(M=e.from(L.errorCorrectionLevel,e.M),y=l.from(L.version),C=a.from(L.maskPattern),L.toSJISFunc&&i.setToSJISFunction(L.toSJISFunc)),A(R,y,M,C)},ba}var Fa={},Oa={},mu;function mh(){return mu||(mu=1,(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const r=parseInt(n.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const r=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,r){return r.width&&r.width>=n+r.margin*2?r.width/(n+r.margin*2):r.scale},i.getImageWidth=function(n,r){const s=i.getScale(n,r);return Math.floor((n+r.margin*2)*s)},i.qrToImageData=function(n,r,s){const a=r.modules.size,o=r.modules.data,c=i.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,h=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let p=0;p<l;p++){let b=(d*l+p)*4,g=s.color.light;if(d>=u&&p>=u&&d<l-u&&p<l-u){const m=Math.floor((d-u)/c),f=Math.floor((p-u)/c);g=h[o[m*a+f]?1:0]}n[b++]=g.r,n[b++]=g.g,n[b++]=g.b,n[b]=g.a}}})(Oa)),Oa}var gu;function bv(){return gu||(gu=1,(function(i){const e=mh();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),h=l.getContext("2d"),d=h.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(h,l,u),h.putImageData(d,0,0),l},i.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=i.render(s,a,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(Fa)),Fa}var ka={},bu;function _v(){if(bu)return ka;bu=1;const i=mh();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function n(r,s,a){let o="",c=0,l=!1,u=0;for(let h=0;h<r.length;h++){const d=Math.floor(h%s),p=Math.floor(h/s);!d&&!l&&(l=!0),r[h]?(u++,h>0&&d>0&&r[h-1]||(o+=l?t("M",d+a,.5+p+a):t("m",c,0),c=0,l=!1),d+1<s&&r[h+1]||(o+=t("h",u),u=0)):c++}return o}return ka.render=function(s,a,o){const c=i.getOptions(a),l=s.modules.size,u=s.modules.data,h=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",p="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',b='viewBox="0 0 '+h+" "+h+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+b+' shape-rendering="crispEdges">'+d+p+`</svg>
`;return typeof o=="function"&&o(null,m),m},ka}var _u;function vv(){if(_u)return Bi;_u=1;const i=Q0(),e=gv(),t=bv(),n=_v();function r(s,a,o,c,l){const u=[].slice.call(arguments,1),h=u.length,d=typeof u[h-1]=="function";if(!d&&!i())throw new Error("Callback required as last argument");if(d){if(h<2)throw new Error("Too few arguments provided");h===2?(l=o,o=a,a=c=void 0):h===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(o=a,a=c=void 0):h===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(p,b){try{const g=e.create(o,c);p(s(g,a,c))}catch(g){b(g)}})}try{const p=e.create(o,c);l(null,s(p,a,c))}catch(p){l(p)}}return Bi.create=e.create,Bi.toCanvas=r.bind(null,t.render),Bi.toDataURL=r.bind(null,t.renderToDataURL),Bi.toString=r.bind(null,function(s,a,o){return n.render(s,o)}),Bi}var xv=vv();const yv=Z0(xv);function Ba(i,e,t,n,r){i.save(),i.translate(e,t),i.rotate(n),i.scale(r,r),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-92,110,-100,-76,0,-210),i.bezierCurveTo(100,-76,92,110,0,210),i.stroke(),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-8,70,6,-100,0,-210);for(let s=0;s<7;s++){const a=-135+s*45;i.moveTo(0,a+36),i.quadraticCurveTo(-42,a+20,-62,a-8),i.moveTo(0,a+36),i.quadraticCurveTo(42,a+20,62,a-8)}i.stroke(),i.restore()}function Mv(i,e,t,n){i.save(),i.translate(e,t),i.scale(n/400,n/400);for(let r=-4;r<=4;r++)i.save(),i.rotate(r*.25),i.beginPath(),i.moveTo(0,72),i.bezierCurveTo(-60,8,-48,-64,0,-112),i.bezierCurveTo(48,-64,60,8,0,72),i.stroke(),i.restore();i.restore()}function gh(i,e){i.strokeStyle=e.accent,i.globalAlpha=.3,i.lineWidth=3,Ba(i,152,686,-.26,1.2),Ba(i,900,696,.28,1.25),Ba(i,1012,690,.45,1.05),i.globalAlpha=.25;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(-30,925+t*15),i.bezierCurveTo(200,840+t*14,288,1040+t*12,530,953+t*13),i.bezierCurveTo(760,860+t*12,910,1030+t*12,1120,925+t*15),i.stroke()}function Sv(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.lineWidth=3;for(let t=0;t<3;t++){const n=t*36;i.beginPath(),i.moveTo(540,385+n),i.lineTo(958-n,555+n/3),i.lineTo(958-n,907-n/3),i.lineTo(540,1045-n),i.lineTo(122+n,907-n/3),i.lineTo(122+n,555+n/3),i.closePath(),i.globalAlpha=t===0?.07:.03,i.fill(),i.globalAlpha=.32-t*.06,i.stroke()}i.globalAlpha=.34;for(let t=0;t<22;t++){const n=t*Math.PI*2/22;i.beginPath(),i.moveTo(540+Math.cos(n)*305,713+Math.sin(n)*305),i.lineTo(540+Math.cos(n)*330,713+Math.sin(n)*330),i.stroke()}for(const t of[78,1002])for(let n=440;n<1020;n+=88)i.beginPath(),i.moveTo(t,n),i.lineTo(t+28,n),i.lineTo(t+28,n+50),i.lineTo(t+10,n+50),i.lineTo(t+10,n+22),i.stroke()}function Ev(i,e){i.strokeStyle=e.accent,i.lineWidth=3,i.globalAlpha=.4;for(const t of[230,265,290,310])i.beginPath(),i.arc(540,710,t,0,Math.PI*2),i.stroke();i.globalAlpha=.32;for(let t=0;t<8;t++){const n=t*Math.PI/4;i.beginPath(),i.arc(540+Math.cos(n)*208,710+Math.sin(n)*208,83,0,Math.PI*2),i.stroke()}i.lineWidth=2,i.globalAlpha=.22;for(let t=0;t<48;t++){const n=t*Math.PI/24;i.beginPath(),i.moveTo(540+Math.cos(n)*295,710+Math.sin(n)*295),i.lineTo(540+Math.cos(n)*305,710+Math.sin(n)*305),i.stroke()}}function Tv(i,e){i.strokeStyle=e.accent,i.lineWidth=3;for(let t=0;t<4;t++){const n=194+t*27;i.globalAlpha=.36-t*.045,i.beginPath(),i.moveTo(540-n,1040),i.lineTo(540-n,690),i.arc(540,690,n,Math.PI,Math.PI*2),i.lineTo(540+n,1040),i.stroke()}i.globalAlpha=.3,Mv(i,540,970,710),i.lineWidth=2,i.globalAlpha=.16;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(70+t*13,410),i.lineTo(70+t*13,985),i.moveTo(1010-t*13,410),i.lineTo(1010-t*13,985),i.stroke()}function wv(i,e){i.fillStyle=e.accent,i.strokeStyle=e.accent;for(let t=0;t<6;t++){const n=t*62;i.beginPath(),i.moveTo(-80,665+n),i.bezierCurveTo(130,330+n,235,940+n,475,615+n),i.bezierCurveTo(680,345+n,870,810+n,1160,500+n),i.lineTo(1160,1090),i.lineTo(-80,1090),i.closePath(),i.globalAlpha=.045+t*.012,i.fill(),i.globalAlpha=.21,i.lineWidth=2,i.stroke()}i.strokeStyle="#b69965",i.globalAlpha=.42,i.beginPath(),i.moveTo(998,395),i.lineTo(949,495),i.lineTo(976,580),i.lineTo(906,650),i.lineTo(925,754),i.lineTo(860,843),i.lineTo(883,953),i.stroke()}function Av(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.globalAlpha=.1,i.beginPath(),i.arc(832,574,170,0,Math.PI*2),i.fill(),i.globalAlpha=.44,i.lineWidth=2,i.stroke();for(let t=0;t<4;t++){const n=113+t*25;i.beginPath(),i.moveTo(n,378),i.bezierCurveTo(n+250,560,n-70,800,n+200,1030),i.stroke()}i.globalAlpha=.22;for(let t=0;t<6;t++)i.beginPath(),i.moveTo(805+t*18,700),i.bezierCurveTo(610+t*23,830,978+t*23,913,870+t*21,1040),i.stroke()}function Rv(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent;for(let t=0;t<3;t++)i.beginPath(),i.arc(540,695,245+t*30,0,Math.PI*2),i.globalAlpha=t===0?.085:.035,i.fill(),i.globalAlpha=.3-t*.055,i.lineWidth=t===0?3:2,i.stroke();i.globalAlpha=.46;for(let t=0;t<3;t++)i.beginPath(),i.arc(864+t*35,429,6,0,Math.PI*2),i.fill();i.lineWidth=5;for(const t of[914,935])i.beginPath(),i.moveTo(t,856),i.lineTo(t+5,896),i.stroke();i.globalAlpha=.24,i.lineWidth=2;for(let t=0;t<4;t++)i.beginPath(),i.moveTo(55,926+t*19),i.bezierCurveTo(110,894+t*19,175,961+t*19,246,924+t*19),i.stroke()}const Cv={waves:gh,angles:Sv,arcs:Ev,halo:Tv,contours:wv,strings:Av,still:Rv};function Pv(i,e){i.save();const t=i.createRadialGradient(1010,545,20,540,690,1050);t.addColorStop(0,e.accent+"38"),t.addColorStop(.62,e.accent+"0c"),t.addColorStop(1,e.accent+"00"),i.fillStyle=t,i.fillRect(0,0,1080,1440),i.fillStyle=e.ink,i.globalAlpha=.027;for(let r=0;r<1600;r++)i.fillRect(r*73%1080,r*137%1440,1+r%3*.35,.8);i.globalAlpha=1,i.beginPath(),i.rect(44,378,992,650),i.clip(),(Cv[e.motif]||gh)(i,e);const n=i.createRadialGradient(540,710,80,540,710,345);n.addColorStop(0,e.paper+"e6"),n.addColorStop(.65,e.paper+"99"),n.addColorStop(1,e.paper+"00"),i.globalAlpha=1,i.fillStyle=n,i.fillRect(44,378,992,650),i.restore()}function yr(i,e=null){var r;const t=((r=globalThis.location)==null?void 0:r.origin)||"http://localhost",n=new URL(e||t,t);if(!["http:","https:"].includes(n.protocol))throw new Error("分享地址必须使用 HTTP 或 HTTPS");return n.username="",n.password="",n.pathname="/",n.search="",n.hash="",n.searchParams.set("artifact",String(i)),n.href}function Lv(i,{ink:e="#172824",transparent:t=!1,width:n=300}={}){return yv.toDataURL(String(i),{type:"image/png",width:n,margin:4,errorCorrectionLevel:"M",color:{dark:e,light:t?"#00000000":"#ffffff"}})}function ps(i,e,t,n,r,s,a=3){const o=Array.from(String(e||"")),c=[];let l="";for(const h of o)h===`
`||i.measureText(l+h).width>r?(c.push(l),l=h===`
`?"":h):l+=h;l&&c.push(l);const u=c.slice(0,a);if(c.length>a){let h=u.at(-1);for(;h&&i.measureText(h+"…").width>r;)h=h.slice(0,-1);u[u.length-1]=h+"…"}u.forEach((h,d)=>i.fillText(h,t,n+d*s))}function Iv(i){const e=i?new Date(i):null;return!e||!Number.isFinite(e.getTime())?"日期未记录":new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(e).replaceAll("/",".")}function Dv(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("二维码图片加载失败")),n.src=i})}function Nv(i){var t;const e={x:0,y:0,width:i.width,height:i.height};try{const n=(t=i.getContext("2d"))==null?void 0:t.getImageData(0,0,i.width,i.height).data;if(!n)return e;let r=i.width,s=i.height,a=-1,o=-1;for(let d=0;d<i.height;d++)for(let p=0;p<i.width;p++)n[(d*i.width+p)*4+3]<=8||(r=Math.min(r,p),a=Math.max(a,p),s=Math.min(s,d),o=Math.max(o,d));if(a<r||o<s)return e;const c=Math.ceil((a-r+1)*.1),l=Math.ceil((o-s+1)*.1),u=Math.max(0,r-c),h=Math.max(0,s-l);return{x:u,y:h,width:Math.min(i.width,a+c+1)-u,height:Math.min(i.height,o+l+1)-h}}catch{return e}}const wr={"goujian-sword":{name:"藏锋铭",paper:"#16312f",ink:"#f0e6ce",accent:"#bea874",muted:"#a9bcb0",motto:"一线锋芒，静照千年。",motif:"angles"},"galloping-horse":{name:"凌风笺",paper:"#182e3e",ink:"#e4eee3",accent:"#88b8a9",muted:"#a9bdc2",motto:"一瞬凌空，万里生风。",motif:"arcs"},"four-ram-zun":{name:"肃礼铭",paper:"#302d24",ink:"#ede0bf",accent:"#c4a477",muted:"#b7aa8e",motto:"四角相望，一器凝章。",motif:"angles"},"zenghouyi-bells":{name:"和鸣笺",paper:"#352523",ink:"#f2e3ca",accent:"#d0ad75",muted:"#c0aa97",motto:"钟声入想，余韵相逢。",motif:"strings"},"speechless-buddha":{name:"默然笺",paper:"#e8eadd",ink:"#435144",accent:"#9a8b59",muted:"#707b68",motto:"不必多言，相逢已好。",motif:"still"},"phoenix-ewer":{name:"青花笺",paper:"#f5f1e7",ink:"#193b66",accent:"#315f97",muted:"#737b87",motto:"一抹青蓝，留住此刻。",motif:"waves"},"bronze-head":{name:"铜影铭",paper:"#123830",ink:"#f2e6c8",accent:"#c2a66c",muted:"#b9c5b4",motto:"铜色无言，目光有声。",motif:"angles"},"cloud-mirror":{name:"照影笺",paper:"#f0e0c6",ink:"#634a37",accent:"#9c703f",muted:"#887668",motto:"照见流光，也照见相逢。",motif:"arcs"},"liquan-bodhisattva":{name:"静观笺",paper:"#eeeae2",ink:"#514e48",accent:"#b4a078",muted:"#848075",motto:"静观一瞬，心有回响。",motif:"halo"},"longquan-figure":{name:"青瓷笺",paper:"#dfece1",ink:"#2b5647",accent:"#5d8b73",muted:"#6d8274",motto:"梅子青里，时间温润。",motif:"contours"},"pipa-figurine":{name:"遗音笺",paper:"#4a2932",ink:"#f5e4d1",accent:"#d6b581",muted:"#cbb8aa",motto:"弦声虽远，余韵犹在。",motif:"strings"}};function Vo(i){return{...Object.hasOwn(wr,i)?wr[i]:wr["phoenix-ewer"]}}function Uv(i){return Object.hasOwn(wr,i)?`/images/checkin/${encodeURIComponent(i)}.webp`:null}function bh(i){return Object.hasOwn(wr,i)?`/images/checkin/portraits/${encodeURIComponent(i)}.webp`:null}async function Fv({exhibit:i={},visit:e={},nickname:t="",hideNickname:n=!0,style:r="artifact",shareUrl:s,artifactImage:a=null,collectionCount:o=1}={}){var f;(f=document.fonts)!=null&&f.ready&&await document.fonts.ready;const c=Vo(i.id||e.artifactId);r==="memory"&&Object.assign(c,{paper:"#183a33",ink:"#f2e6c8",muted:"#b9c5b4",accent:"#c2a66c"});const l=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1080,1440):document.createElement("canvas");l.width=1080,l.height=1440;const u=l.getContext("2d");if(!u)throw new Error("当前浏览器无法生成海报");const h=(v,x=c.ink,_=!1)=>{u.fillStyle=x,u.font=`${v}px ${_?'"Noto Serif SC", "Songti SC", SimSun, serif':'"Microsoft YaHei", sans-serif'}`};if(u.fillStyle=c.paper,u.fillRect(0,0,1080,1440),u.strokeStyle=c.accent,u.globalAlpha=.4,u.lineWidth=1,u.strokeRect(30,30,1020,1380),u.globalAlpha=1,Pv(u,c),h(24,c.muted),u.fillText("重器新生  /  数字博物馆",76,94),u.textAlign="right",u.fillText(c.name,1004,94),u.textAlign="left",h(70,c.ink,!0),ps(u,i.title||"数字文物",76,181,820,80,2),h(30,c.accent,!0),u.fillText(c.motto,78,318),h(20,c.muted),ps(u,i.english||"AN ENCOUNTER ACROSS TIME",78,354,890,26,1),u.save(),u.translate(963,210),u.rotate(-.035),u.strokeStyle=c.accent,u.lineWidth=2,u.strokeRect(-38,-48,76,96),u.strokeRect(-33,-43,66,86),h(24,c.accent,!0),u.textAlign="center",["观","展","留","念"].forEach((v,x)=>u.fillText(v,x%2?16:-16,x<2?-8:25)),u.restore(),a&&a.width>0&&a.height>0){const v=Nv(a),x=Math.min(880/v.width,650/v.height),_=v.width*x,A=v.height*x;u.drawImage(a,v.x,v.y,v.width,v.height,(1080-_)/2,380+(650-A)/2,_,A)}else h(24,c.muted,!0),u.textAlign="center",u.fillText("文物影像暂未载入",540,710),u.textAlign="left";u.strokeStyle=c.accent,u.globalAlpha=.4,u.beginPath(),u.moveTo(76,1060),u.lineTo(1004,1060),u.stroke(),u.globalAlpha=1,h(24,c.muted),u.fillText("初 次 相 遇",76,1103),h(46,c.ink,!0),u.fillText(Iv(e.firstVisitedAt),76,1165);const d=Number.isFinite(Number(o))?Math.max(1,Math.floor(Number(o))):1;h(26,c.muted),u.fillText(`我的数字收藏 · 第 ${d} 件`,78,1207);const p=!!(!n&&t);p&&(h(26),ps(u,`${t} 的观展记忆`,78,1244,580,32,1));const b=yr(i.id||e.artifactId||"",s),g=await Dv(await Lv(b,{ink:c.ink,transparent:!0,width:224}));u.drawImage(g,766,1097,224,224),h(20,c.muted),u.textAlign="center",u.fillText("扫码走近这件文物",878,1362),u.textAlign="left";const m=Array.isArray(i.description)?i.description.filter(Boolean).join(""):i.lead||c.motto;return h(36,c.ink,!0),ps(u,m,76,p?1296:1252,620,44,p?2:3),h(18,c.muted),u.fillText("数字阅览记录 · 非现场到访证明",76,1385),typeof l.convertToBlob=="function"?l.convertToBlob({type:"image/png"}):new Promise((v,x)=>l.toBlob(_=>_?v(_):x(new Error("海报导出失败")),"image/png"))}const vu=new WeakMap,za="http://www.w3.org/2000/svg",xu={first:"M41 28h18l-3 9c13 10 16 21 12 31-5 13-31 13-36 0-4-10-1-21 12-31z M40 28h20 M39 53q11-9 22 0 M37 61q13 10 26 0 M42 73h16 M46 21h8",three:"M50 24c-3 13-18 15-18 28 0 10 8 16 18 23 10-7 18-13 18-23 0-13-15-15-18-28z M50 39v33 M50 55q-17-3-19-14 M50 61q16-4 19-15 M37 75q13 8 26 0 M25 63q-7-12 0-24 M75 63q7-12 0-24",all:"M26 42l24-17 24 17z M30 46h40 M34 47v23 M45 47v23 M55 47v23 M66 47v23 M28 72h44 M24 78h52 M43 35h14 M20 56h5 M75 56h5"};function Rt(i,e,t){const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}function yu(i,e,t=!1){const n=Rt("div",`pp-aw-seal${t?" pp-aw-seal-large":""}${e?" pp-aw-lit":""}`),r=document.createElementNS(za,"svg");r.setAttribute("viewBox","0 0 100 100"),r.setAttribute("aria-hidden","true");for(const a of[44,39]){const o=document.createElementNS(za,"circle");for(const[c,l]of Object.entries({cx:50,cy:50,r:a}))o.setAttribute(c,l);r.append(o)}const s=document.createElementNS(za,"path");return s.setAttribute("d",xu[i]||xu.first),r.append(s),n.append(r),n}function Mu(i){const e=new Date(i);return i&&Number.isFinite(e.getTime())?new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"Asia/Shanghai"}).format(e).replaceAll("/","."):"已获得"}function Ov(i,e){const t=e.achievements||[],n=JSON.stringify(t);if(vu.get(i)===n&&i.firstChild)return;vu.set(i,n);const r=t.filter(h=>h.unlocked),s=[...r].sort((h,d)=>String(d.unlockedAt||"").localeCompare(String(h.unlockedAt||""))||d.target-h.target)[0],a=s||t[0],o=Rt("section","pp-aw-gallery");o.setAttribute("aria-label","观展成就");const c=Rt("div","pp-aw-hero");c.append(Rt("p","pp-aw-eyebrow",s?"最新珍藏 · LATEST HONOUR":"待启的珍藏 · YOUR COLLECTION")),c.append(yu((a==null?void 0:a.id)||"first",!!s,!0)),c.append(Rt("h2","pp-aw-title",(s==null?void 0:s.title)||"每一次相逢，皆有印记")),c.append(Rt("p","pp-aw-caption",s?`${Mu(s.unlockedAt)} · ${s.reward||"观展纪念章"}`:"参观文物并打卡，点亮你的第一枚纪念章"));const l=Rt("div","pp-aw-heading");l.append(Rt("h3","pp-aw-heading-title","我的纪念章"),Rt("span","pp-aw-total",`${r.length} / ${t.length} 已获得`)),o.append(c,l);const u=Rt("div","pp-aw-list");for(const h of t){const d=Rt("article",`pp-aw-card${h.unlocked?" pp-aw-earned":""}`);d.append(yu(h.id,h.unlocked));const p=Rt("div","pp-aw-copy");p.append(Rt("h4","pp-aw-card-title",h.title),Rt("p","pp-aw-description",h.description));const b=Rt("div","pp-aw-progress"),g=Rt("span","pp-aw-progress-fill");g.style.width=`${Math.max(0,Math.min(100,h.target>0?h.progress/h.target*100:0))}%`,b.setAttribute("aria-hidden","true"),b.append(g),h.unlocked||p.append(b);const m=Rt("div","pp-aw-status");m.append(Rt("span","pp-aw-state",h.unlocked?"已珍藏":"待点亮"),Rt("span","pp-aw-date",h.unlocked?Mu(h.unlockedAt):`${h.progress} / ${h.target} 件`)),d.append(p,m),u.append(d)}o.append(u,Rt("p","pp-aw-footnote","循器而行 · 将相逢珍藏")),i.replaceChildren(o)}const kv=(i=navigator.userAgent)=>/MicroMessenger|Android|iPhone|iPad|iPod/i.test(i);function Bv({dialog:i,getBlob:e}){const t=document.createElement("section");t.className="pp-save-sheet",t.hidden=!0,t.setAttribute("aria-label","保存收藏卡原图"),t.innerHTML='<header><h3>保存收藏卡</h3><button type="button" class="pp-save-back">返回打卡</button></header><p class="pp-save-message" role="status"></p><img class="pp-save-image" alt="文物收藏卡原图，长按图片保存到手机" hidden><button type="button" class="pp-save-retry" hidden>重新准备图片</button><a class="pp-save-original" target="_blank" rel="noopener noreferrer" hidden>打开原图 ↗</a><p class="pp-save-note">长按图片，选择“保存到手机”或“保存图片”。没有菜单时，可打开原图再长按，或用手机浏览器打开当前页面。</p>',i.append(t);const n=l=>t.querySelector(l);let r=null,s=null,a=0;function o(){++a,r==null||r.abort(),r=null,t.hidden=!0;for(const l of i.children)l!==t&&(l.inert=!1)}async function c(){const l=e();if(!l)return;o();const u=a;t.hidden=!1;for(const p of i.children)p!==t&&(p.inert=!0);n(".pp-save-back").focus(),n(".pp-save-image").hidden=!0,n(".pp-save-original").hidden=!0,n(".pp-save-retry").hidden=!0,n(".pp-save-message").textContent="正在准备可保存的原图…";const h=new AbortController;r=h;const d=setTimeout(()=>h.abort(),2e4);try{if(!s||s.blob!==l||s.expiresAt<Date.now()+6e4){const b=await fetch("/api/card-images",{method:"POST",headers:{"Content-Type":"image/png"},body:l,credentials:"same-origin",signal:h.signal}),g=await b.json();if(!b.ok)throw new Error(g.message||"原图准备失败，请重试。");if(u!==a)return;if(!/^\/api\/card-images\/[a-f0-9]{48}\.png$/.test(g.url))throw new Error("图片地址异常，请重试。");s={blob:l,url:g.url,expiresAt:g.expiresAt}}const p=n(".pp-save-image");if(p.src=s.url,await p.decode(),u!==a)return;p.hidden=!1,n(".pp-save-original").href=s.url,n(".pp-save-original").hidden=!1,n(".pp-save-message").textContent="长按下方图片，保存到手机相册"}catch(p){if(u!==a)return;s=null,n(".pp-save-message").textContent=p.name==="AbortError"?"连接超时，请确认电脑服务仍在运行后重试。":"原图暂未准备好，请重试。",n(".pp-save-retry").hidden=!1}finally{clearTimeout(d)}}return n(".pp-save-back").onclick=o,n(".pp-save-retry").onclick=c,t.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),o())}),i.addEventListener("close",o),{open:c,reset(){o(),s=null,n(".pp-save-image").removeAttribute("src")},destroy(){o(),i.removeEventListener("close",o),t.remove()}}}const zv=i=>i?new Date(i).toLocaleString("zh-CN",{hour12:!1}):"尚未领取",hn=(i,e,t)=>{const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function Hv({exhibit:i,exhibits:e,isReady:t,captureArtifact:n}){const r=hn("button","pp-launcher","文物打卡 ↗");r.type="button",r.setAttribute("aria-haspopup","dialog");const s=hn("dialog","pp-dialog");s.setAttribute("aria-labelledby","pp-title"),s.innerHTML=`<header class="pp-topbar"><div><span class="pp-eyebrow">A MOMENT, COLLECTED</span><h2 id="pp-title">文物打卡</h2></div><div class="pp-header-actions"><button class="pp-settings-open" type="button" aria-label="护照设置">⚙</button><button class="pp-close" type="button" aria-label="关闭文物打卡">×</button></div></header>
  <div class="pp-body"><section class="pp-page pp-card-page" data-page="card"><div class="pp-card-caption"><span>此刻相逢</span><span class="pp-card-name"></span></div><div class="pp-poster-stage"><div class="pp-placeholder"><span class="pp-loading-mark">印</span><p>正在准备这份相逢</p></div><img class="pp-preview" alt="当前文物收藏卡预览，含文物展页二维码" hidden></div><p class="pp-status" role="status" aria-live="polite"></p><button class="pp-retry" type="button" hidden>重试生成卡片</button><div class="pp-poster-actions"><a class="pp-download" download aria-disabled="true">保存图片</a><button class="pp-system-share" type="button" disabled>分享卡片 ↗</button></div><p class="pp-boundary">数字观展纪念 · 卡片二维码可回到这件文物</p><p class="pp-network"></p></section>
  <section class="pp-page pp-collection-page" data-page="collection" hidden><div class="pp-section-title"><div><span class="pp-eyebrow">YOUR LITTLE MUSEUM</span><h3>我的藏印</h3></div><span class="pp-count"></span></div><p class="pp-section-note">把每一次驻足，收进自己的小小博物馆。</p><div class="pp-stamps"></div><div class="pp-pagination"><button class="pp-prev" type="button" aria-label="上一页藏印">←</button><span class="pp-page-number"></span><button class="pp-next" type="button" aria-label="下一页藏印">→</button></div></section>
  <section class="pp-page pp-achievements-page" data-page="achievements" hidden><div class="pp-achievements"></div></section>
  <section data-page="settings" class="pp-page pp-settings" aria-label="护照设置" hidden><h3>保存这份相逢</h3><p class="pp-profile"></p><p class="pp-retention"></p><p class="pp-storage-note">护照身份保存在当前浏览器，清理浏览器数据可能失去身份。服务端记录不会随浏览器会话结束自动删除。可按需保管恢复码，在其他设备找回护照。</p>
    <form class="pp-nickname-form"><label>昵称（可选）<input name="nickname" autocomplete="nickname" maxlength="30" placeholder="留空使用“观展游客”"></label><button type="submit">保存昵称</button><p class="pp-settings-status" role="status"></p></form>
    <div class="pp-recovery"><h4>护照恢复码</h4><p>恢复码可找回这份护照，请私下保管。持有码的人可以访问护照，请勿放进公开分享内容。</p><button class="pp-recovery-generate" type="button">生成恢复码</button><div class="pp-rotation" hidden><p>重新生成会立即使旧恢复码失效。请确认你准备保存新码。</p><button class="pp-rotation-confirm" type="button">确认使旧码失效并生成新码</button><button class="pp-rotation-cancel" type="button">取消</button></div><p class="pp-recovery-status" role="status"></p><div class="pp-recovery-result" hidden><label>请下载或复制保存恢复码<textarea class="pp-recovery-code" readonly autocomplete="off" spellcheck="false"></textarea></label><div class="pp-recovery-actions"><a class="pp-recovery-download" download="观展护照恢复码.txt">下载恢复码文本</a><button class="pp-recovery-copy" type="button">复制恢复码</button></div><p>关闭护照后，此处明文会清除。遗失时可重新生成，新码将替代旧码。</p></div></div>
    <form class="pp-restore-form"><h4>恢复已有护照</h4><p>输入你保管的恢复码。当前游客藏印会合并到恢复的护照，同一文物保留一枚印章。</p><label>恢复码<input name="recoveryCode" required autocomplete="off" spellcheck="false" autocapitalize="none"></label><button type="submit">恢复并合并藏印</button><p class="pp-restore-status" role="status"></p></form></section>

  </div><nav class="pp-nav" aria-label="打卡页面"><button type="button" data-view="card" aria-current="page"><span>▣</span>文物打卡</button><button type="button" data-view="collection"><span>▦</span>我的藏印</button><button type="button" data-view="achievements"><span>✧</span>观展成就</button></nav>`,document.body.append(r,s);const a=G=>s.querySelector(G);a(".pp-card-name").textContent=i.title;const o=Vo(i.id);s.style.setProperty("--card-paper",o.paper),s.style.setProperty("--card-ink",o.ink),s.style.setProperty("--card-accent",o.accent);const c=hn("img","pp-loading-specimen");c.alt="";const l=bh(i.id);l&&(c.src=l),c.onerror=()=>{c.hidden=!0};const u=new Image;l&&(u.src=l);const h=l?u.decode().then(()=>u).catch(()=>null):Promise.resolve(null);a(".pp-placeholder").prepend(hn("span","pp-loading-title",i.title),c),a(".pp-loading-mark").textContent="藏",a(".pp-placeholder p").textContent="把这一眼相逢，收进藏印",a(".pp-poster-stage").setAttribute("aria-busy","true");let d=null,p=!1,b=null,g=null,m=!1,f=null,v=0;const x=Bv({dialog:s,getBlob:()=>b});a(".pp-download").onclick=G=>{if(!b){G.preventDefault();return}kv()&&(G.preventDefault(),x.open())};let _=null,A=0,T="card",R=0,L=!1,M=null,y=!1;const C=G=>{a(".pp-status").textContent=G},I=()=>d==null?void 0:d.visits.find(G=>G.artifactId===i.id),N=()=>{var G;return JSON.stringify([(G=I())==null?void 0:G.firstVisitedAt,k(),yr(i.id,d==null?void 0:d.publicBaseUrl)])};function k(){return[...(d==null?void 0:d.visits)||[]].sort((G,ee)=>G.firstVisitedAt.localeCompare(ee.firstVisitedAt)||G.artifactId.localeCompare(ee.artifactId)).findIndex(G=>G.artifactId===i.id)+1}const q=G=>!m&&s.open&&G===A;function Y(G){G!==T&&(++A,T==="settings"&&ae()),T=G,s.querySelectorAll("[data-page]").forEach(ee=>{ee.hidden=ee.dataset.page!==G}),s.querySelectorAll("[data-view]").forEach(ee=>{ee.dataset.view===G?ee.setAttribute("aria-current","page"):ee.removeAttribute("aria-current")}),a("#pp-title").textContent={card:"文物打卡",collection:"我的藏印",achievements:"观展成就",settings:"护照设置"}[G],a(".pp-body").scrollTop=0,G==="card"&&ke()}function se(G){p=G,a(".pp-poster-stage").setAttribute("aria-busy",String(G&&!b)),s.querySelectorAll(".pp-settings input,.pp-settings button,.pp-retry").forEach(ee=>{ee.disabled=G})}async function z(G="",ee){var E;const ye=await fetch(`/api/passport${G}`,{method:ee===void 0?"GET":"POST",credentials:"same-origin",headers:ee===void 0?{}:{"Content-Type":"application/json"},...ee===void 0?{}:{body:JSON.stringify(ee)}});let De;try{De=await ye.json()}catch{throw new Error("护照服务返回异常，请稍后重试。")}if(!ye.ok)throw new Error(((E=De.error)==null?void 0:E.message)||"护照服务暂时不可用，请重试。");return De}function ne(){x.reset(),g&&URL.revokeObjectURL(g),g=null,b=null,f=null,s.dataset.cardState="loading",a(".pp-preview").removeAttribute("src"),a(".pp-preview").hidden=!0,a(".pp-placeholder").hidden=!1,a(".pp-placeholder").removeAttribute("aria-hidden"),a(".pp-download").removeAttribute("href"),a(".pp-download").setAttribute("aria-disabled","true"),a(".pp-system-share").disabled=!0}function ae(){_&&URL.revokeObjectURL(_),_=null,a(".pp-recovery-code").value="",a(".pp-recovery-download").removeAttribute("href"),a(".pp-recovery-result").hidden=!0,a(".pp-rotation").hidden=!0,a(".pp-restore-form").reset(),a(".pp-recovery-status").textContent="",a(".pp-restore-status").textContent=""}function me(){if(!d)return;const G=Object.values(e),ee=Math.max(1,Math.ceil(G.length/6));R=Math.min(R,ee-1),a(".pp-count").textContent=`${d.visits.length} / ${d.artifactCount}`;const ye=G.slice(R*6,R*6+6).map(De=>{const E=d.visits.find(Ue=>Ue.artifactId===De.id),Q=Vo(De.id),V=hn(De.id===i.id?"button":"a",`pp-stamp${E?" pp-collected":""}`);V.tagName==="BUTTON"?(V.type="button",V.onclick=()=>{var Ue;s.close(),(Ue=document.querySelector('.experience-nav [data-mode="view"]'))==null||Ue.click()}):(V.href=yr(De.id),window.parent!==window&&(V.target="_blank",V.rel="noopener noreferrer")),V.style.setProperty("--stamp-paper",Q.paper),V.style.setProperty("--stamp-ink",Q.ink),V.style.setProperty("--stamp-accent",Q.accent);const Z=hn("span","pp-stamp-mark",E?"藏":"待");Z.setAttribute("aria-hidden","true");const ie=hn("span","pp-stamp-visual"),Ne=hn("img","pp-stamp-image");Ne.alt="",Ne.loading="lazy",Ne.onerror=()=>{Ne.hidden=!0,ie.classList.add("pp-image-fallback")};const he=Uv(De.id);return he?Ne.src=he:(Ne.hidden=!0,ie.classList.add("pp-image-fallback")),ie.append(Ne,Z),V.append(ie,hn("strong","",De.title),hn("small","",E?"已收入藏印 · 点击查看":"待相逢 · 前往观展")),V});for(;ye.length<6;){const De=hn("div","pp-stamp pp-empty","静候下一次相逢");De.setAttribute("aria-hidden","true"),ye.push(De)}a(".pp-stamps").replaceChildren(...ye),a(".pp-page-number").textContent=`${R+1} / ${ee}`,a(".pp-prev").disabled=R===0,a(".pp-next").disabled=R===ee-1}function Ie(G){var E,Q;d=G,b&&f!==N()&&ne();const ee=new URL(yr(i.id,G.publicBaseUrl)).hostname,ye=/^(localhost|127\.|0\.0\.0\.0$|\[?::1\]?$)/i.test(ee),De=/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ee)||ee.endsWith(".local");a(".pp-network").textContent=ye?"当前为本机展页，其他设备扫码暂不可访问。":De?"当前为局域网展页，扫码设备需连接同一网络。":"",me(),Ov(a(".pp-achievements"),G),a(".pp-profile").textContent=`${G.profile.nickname}的数字观展护照`,a('.pp-nickname-form [name="nickname"]').value=G.profile.nickname==="观展游客"?"":G.profile.nickname,a(".pp-retention").textContent=(E=G.storage)!=null&&E.expiresAt?`浏览器身份按最近使用滚动保存 ${G.storage.retentionDays} 天，当前有效至 ${zv(G.storage.expiresAt)}。`:"正在确认浏览器身份保存期限。",a(".pp-recovery-generate").textContent=(Q=G.storage)!=null&&Q.hasRecoveryCode?"重新生成恢复码":"生成恢复码"}async function Se(){if(M)return M;M=(async()=>{const G=await z();m||Ie(G.passport||G)})();try{await M}finally{M=null}}async function ke(G=!1){if(m||p||y||M||L||b||(G?!I()||!t():!s.open||T!=="card"))return;const ee=A,ye=()=>!m&&(G||q(ee));if(d){if(!t()&&!l){C("器物正在就绪，完成后会自动生成收藏卡…");return}se(!0),a(".pp-retry").hidden=!0;try{if(!I()){C("正在将这次相逢收入藏印…");const ie=await z("/checkin",{artifactId:i.id});if(m||Ie(ie.passport),!ye())return}if(C("正在制作你的文物收藏卡…"),await new Promise(ie=>requestAnimationFrame(()=>setTimeout(ie,0))),!ye())return;const De=await h||(t()?await n():null);if(!ye())return;if(!De&&!t()){C("器物正在就绪，完成后会自动生成收藏卡…");return}if(!De)throw new Error("暂时无法取得器物画面，请重试。");const E=N(),Q=await Fv({exhibit:i,visit:I(),nickname:d.profile.nickname,hideNickname:!0,style:"artifact",shareUrl:yr(i.id,d.publicBaseUrl),artifactImage:De,collectionCount:k()});if(!ye()||E!==N())return;const V=URL.createObjectURL(Q),Z=a(".pp-preview");Z.src=V;try{await Z.decode()}catch(ie){throw URL.revokeObjectURL(V),ie}if(!ye()||E!==N()){Z.removeAttribute("src"),URL.revokeObjectURL(V);return}b=Q,f=E,g=V,Z.hidden=!1,s.dataset.cardState="ready",a(".pp-placeholder").setAttribute("aria-hidden","true"),a(".pp-download").href=g,a(".pp-download").download=`${i.id}-文物收藏卡.png`,a(".pp-download").removeAttribute("aria-disabled"),a(".pp-system-share").disabled=!1,C("已收入藏印，留住这一眼相逢。"),s.open&&performance.measure("passport-card-ready",{start:v})}catch(De){ye()&&(L=!0,C(De.message||"收藏卡制作失败，请重试。"),a(".pp-retry").hidden=!1)}finally{m||(se(!1),ee!==A&&s.open&&ke())}}}async function de(){if(!(m||s.open)){++A,L=!1,y=!0,v=performance.now(),s.showModal(),document.body.classList.add("passport-open"),Y("card"),C(b?"已收入藏印，留住这一眼相逢。":"正在翻开你的藏印…"),b&&performance.measure("passport-card-cached",{start:v});try{await Se(),!m&&s.open&&(y=!1,ke())}catch(G){!m&&s.open&&(y=!1,L=!0,C(G.message),a(".pp-retry").hidden=!1)}}}async function H(G,ee,ye,De=".pp-status",E){if(p)return;const Q=A;se(!0),a(De).textContent="正在保存…";try{const V=await z(G,ee);if(m)return;Ie(V.passport),G==="/restore"&&ne(),q(Q)&&(a(De).textContent=typeof ye=="function"?ye(V):ye,E==null||E(V))}catch(V){q(Q)&&(a(De).textContent=V.message)}finally{m||(se(!1),ke())}}r.onclick=de,a(".pp-close").onclick=()=>s.close(),a(".pp-settings-open").onclick=()=>Y("settings"),a(".pp-nav").onclick=G=>{const ee=G.target.closest("[data-view]");ee&&Y(ee.dataset.view)},a(".pp-prev").onclick=()=>{R--,me()},a(".pp-next").onclick=()=>{R++,me()},s.addEventListener("keydown",G=>{G.key==="Escape"&&G.stopPropagation()}),s.addEventListener("close",()=>{++A,ae(),document.body.classList.remove("passport-open"),r.focus()}),a(".pp-retry").onclick=async()=>{if(L=!1,!d)try{await Se()}catch(G){L=!0,C(G.message);return}ke()},a(".pp-nickname-form").onsubmit=G=>{G.preventDefault(),H("/nickname",{nickname:a('.pp-nickname-form [name="nickname"]').value.trim()},"昵称已保存。",".pp-settings-status")};function J(){p||(ae(),H("/recovery-code",{},"恢复码已生成，请现在保存。",".pp-recovery-status",G=>{a(".pp-recovery-code").value=G.recoveryCode,_=URL.createObjectURL(new Blob([`数字观展护照恢复码

${G.recoveryCode}

请私下保管。持有码的人可以访问此护照。重新生成后旧码失效。`],{type:"text/plain;charset=utf-8"})),a(".pp-recovery-download").href=_,a(".pp-recovery-result").hidden=!1}))}a(".pp-recovery-generate").onclick=()=>{var G;p||!d||((G=d.storage)!=null&&G.hasRecoveryCode?(a(".pp-rotation").hidden=!1,a(".pp-rotation-confirm").focus()):J())},a(".pp-rotation-confirm").onclick=J,a(".pp-rotation-cancel").onclick=()=>{a(".pp-rotation").hidden=!0,a(".pp-recovery-generate").focus()},a(".pp-recovery-copy").onclick=async()=>{var ee;const G=A;if(!((ee=navigator.clipboard)!=null&&ee.writeText)){a(".pp-recovery-status").textContent="此环境无法直接复制，请下载文本保存恢复码。";return}try{await navigator.clipboard.writeText(a(".pp-recovery-code").value),G===A&&s.open&&(a(".pp-recovery-status").textContent="恢复码已复制，请私下保管。")}catch{G===A&&s.open&&(a(".pp-recovery-status").textContent="复制未完成，请下载文本保存恢复码。")}},a(".pp-restore-form").onsubmit=G=>{G.preventDefault();const ee=a('.pp-restore-form [name="recoveryCode"]').value.trim();H("/restore",{recoveryCode:ee},"护照已恢复，当前游客藏印已合并。",".pp-restore-status",()=>{ae(),a(".pp-restore-status").textContent="护照已恢复，当前游客藏印已合并。"})},a(".pp-system-share").onclick=async()=>{var ye;if(!b)return;if(/MicroMessenger/i.test(navigator.userAgent)){x.open();return}const G=A,ee=new File([b],`${i.id}-文物收藏卡.png`,{type:"image/png"});if(!((ye=navigator.canShare)!=null&&ye.call(navigator,{files:[ee]}))||!navigator.share){x.open();return}try{await navigator.share({files:[ee],title:`${i.title} · 文物收藏卡`})}catch(De){De.name!=="AbortError"&&q(G)&&x.open()}};const fe=setInterval(()=>ke(!s.open),500);return Se().catch(()=>{}),{destroy(){m=!0,++A,clearInterval(fe),ae(),ne(),x.destroy(),document.body.classList.remove("passport-open"),s.remove(),r.remove()}}}const Su=/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;function _h(i,e){const t=(e==null?void 0:e.name)||"数字复原作品",n=(e==null?void 0:e.modelUrl)||"",r="该作品来自本机建模任务。名称、年代、馆藏身份与真实修复过程尚未核实。",s=(a,o)=>({kind:a,brief:o,action:"查看任务来源",paragraphs:[o,r],excerpt:"AI 辅助数字建模 · 生成形体供观察与审阅"});return{dynamic:!0,id:`model-${i}`,theme:"porcelain",nickname:t,title:t,english:"DIGITAL MODEL",number:"MODEL",series:"重器新生",category:"本机作品 · 数字建模",poem:["由一张图像出发，","在微光中观察形体。"],description:["本机任务保存的数字模型，可旋转与缩放查看。","生成的形体与纹理仍需人工核对。"],tags:["数字建模",(e==null?void 0:e.objective)==="photo"?"照片来源":"复原方案来源"],model:{desktop:n,mobile:n,rotationY:0,roughness:.65,metalness:0,exposure:1.1},anchors:[],focusTargets:[],storyTitle:"作品信息",lead:r,motto:"保留来源，审阅形体。",tabLabels:["看模型","查来源","知边界"],topics:{shape:s("数字模型 · 形体观察","拖动模型查看不同方向，使用滚轮或双指缩放。微光演绎展示模型的聚合与消散。"),pattern:s("本机任务 · 来源记录",`任务编号 ${i}。${e!=null&&e.sourceAssetId?`原始图片编号 ${e.sourceAssetId}。`:e!=null&&e.sourceJobId?`图像任务编号 ${e.sourceJobId}。`:"当前记录未提供图片来源编号。"}`),craft:s("AI 辅助建模 · 审阅边界","模型的背面、内部结构与缺失部分可能包含生成推测，需要结合原始照片和实物资料核对。")},sourceTitle:"查看本机建模工作台",sourceUrl:Gv(),identity:r}}function Gv(){var e;const i=new URL("/models",((e=globalThis.location)==null?void 0:e.href)||"http://127.0.0.1/");return i.port="4317",i.href}async function Vv(i){var h;if(!Su.test(i||"")||typeof i!="string")throw new Error("模型任务编号无效。");const e=await fetch("/api/models/jobs",{credentials:"same-origin",redirect:"error",signal:AbortSignal.timeout(15e3)});if(!e.ok)throw new Error(`模型库暂时不可用（${e.status}）。`);const t=await e.json();if(!Array.isArray(t==null?void 0:t.jobs))throw new Error("模型库返回格式不正确。");const n=t.jobs.filter(d=>(d==null?void 0:d.state)==="success"&&typeof d.id=="string"&&Su.test(d.id)&&d.modelUrl===`/api/models/jobs/${d.id}/model`),r=n.findIndex(d=>d.id===i);if(r<0)throw new Error("未找到这个已完成的模型任务，请返回展厅刷新模型库。");const s=n[r],o=(typeof((h=s.source)==null?void 0:h.name)=="string"?s.source.name.trim():"").replace(/\.(?:png|jpe?g|webp|gif|avif|heic|bmp|tiff?)$/i,""),c=/^(?:复原方案|建模图|result)(?:[-_][a-f\d]{8})?$/i.test(o),l=s.objective==="photo"?"photo":"restore",u=o&&!/[\u0000-\u001f\u007f]/.test(o)&&!c?o.slice(0,100):`${l==="photo"?"照片建模作品":"复原作品"} ${String(r+1).padStart(2,"0")}`;return _h(i,{...s,objective:l,name:u})}async function Wv(){const i=E=>document.querySelector(E),e=new URLSearchParams(location.search),t=e.has("modelJob");let n=null,r;if(t){document.title="正在载入数字模型",document.querySelector(".introduction").style.visibility="hidden";try{r=await Vv(e.get("modelJob"))}catch(E){n=E,r=_h(e.get("modelJob"))}}const s=t?r:Ph(location.search),a=s||Mr["phoenix-ewer"];Ih(a,Mr,!s),t&&(document.querySelector(".introduction").style.visibility="");const o=matchMedia("(prefers-reduced-motion:reduce)"),c=new Dh(o.matches),l=i("#canvas"),u=i("#experience");function h(){const E=u.getBoundingClientRect(),Q=i(".introduction").getBoundingClientRect(),V=i(".header").getBoundingClientRect(),Z=i(".stage-note").getBoundingClientRect(),ie=E.width<=760,Ne={top:Math.ceil(ie?Math.max(V.bottom,Q.bottom)+14-E.top:Math.max(64,V.bottom-E.top-19)),bottom:Math.ceil(E.bottom-Z.top+(ie?12:26)),left:ie?14:0,right:ie?14:0};for(const[he,Ue]of Object.entries(Ne))u.style.setProperty("--model-"+he,Ue+"px")}const d=new ResizeObserver(h);for(const E of[u,i(".introduction"),i(".header"),i(".stage-note")])d.observe(E);h(),l.setAttribute("aria-busy","true");const p=document.createElement("div");p.className="loading-orbit",p.setAttribute("aria-hidden","true");const b=!t&&bh(a.id);if(b){const E=new Image;E.src=b,E.alt="",E.className="loading-specimen",E.onerror=()=>{E.hidden=!0},p.append(E)}i("#loader").prepend(p),i(".loading-glyph").textContent="一器 · 将至",i("#load-text").textContent=`正在迎来${a.nickname}`,i("#load-detail").textContent="光里的轮廓，正渐渐靠近。";let g,m=!1,f=!1,v=-1,x,_=0,A,T,R=null,L="",M=0,y=!1,C=o.matches,I=null,N=null,k=null,q="";a.performance&&(N=document.createElement("button"),N.id="awaken-toggle",N.disabled=!0,N.setAttribute("aria-pressed","false"),N.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3 9 12c-4-1-7 4-4 7s8 0 7-4l9-9M12 8l4 4M8 15l2 2"/></svg><span>唤醒弦月</span>',N.onclick=()=>{const E=g==null?void 0:g.performancePlayer;!m||!E||c.busy||y||(E.busy?E.stop():(I=null,de("view"),ae(),E.play()),z())},i(".view-tools").prepend(N),k=document.createElement("span"),k.id="performance-status",k.setAttribute("role","status"),k.setAttribute("aria-live","polite"),i(".view-tools").append(k));function Y(){if(!N)return;const E=g==null?void 0:g.performancePlayer,Q=m?E?c.busy||y?"manifest":E.state:"unavailable":"loading";if(Q===q)return;q=Q;const V=Q==="playing"||Q==="returning";N.disabled=["loading","unavailable","manifest","returning"].includes(Q),N.setAttribute("aria-pressed",String(V)),N.querySelector("span").textContent=Q==="playing"?"停止演奏":Q==="returning"?"轻轻归位":"唤醒弦月",N.setAttribute("aria-label",Q==="playing"?"停止演奏":"唤醒弦月"),u.dataset.performance=Q,k.textContent=Q==="playing"?"轻拨一曲 · 可拖动观看":Q==="returning"?"正回到静止姿态":Q==="unavailable"?"动画暂不可用，仍可观赏文物":""}const se={dormant:["微光正在汇聚成器…","微光演绎"],forming:["微光正在汇聚成器…","正在成形"],formed:["","微光演绎"],dissolving:["器物正在散作微光…","正在消散"]};function z(){var V,Z;Y();const E=m?c.state:"loading",Q=E+":"+(((V=g==null?void 0:g.performancePlayer)==null?void 0:V.state)||"none");Q!==L&&(L=Q,i("#experience").dataset.state=E,i("#manifest-status").textContent=m?se[E][0]:"正在准备器物…",i("#manifest-label").textContent=m?se[E][1]:"聚合成形",i("#manifest-toggle").disabled=!m||c.busy||y,i("#hotspot-toggle").disabled=!m||E!=="formed"||!!((Z=g==null?void 0:g.performancePlayer)!=null&&Z.busy),i("#reset").disabled=!m,i("#mirror-flip")&&(i("#mirror-flip").disabled=!m||E!=="formed"||y),l.setAttribute("aria-label","拖动旋转文物，滚轮缩放；方向键旋转，加减键缩放"))}function ne(E){f=E;const Q=i("#hotspot-toggle");Q.setAttribute("aria-pressed",String(E)),Q.setAttribute("aria-label",E?"收起光点":"显示器形细节"),Q.title=E?"收起光点与讲解":"显示细节光点",Q.textContent=E?"收起光点":"细节光点",E||(v=-1,R=null,i("#detail").hidden=!0,document.querySelectorAll(".hotspot").forEach(V=>{V.hidden=!0,V.removeAttribute("data-active"),V.setAttribute("aria-expanded","false")}))}function ae(){ne(!1)}function me(E){const Q=g.anchors[E];if(!Q||!m||c.state!=="formed"||v===E&&!i("#detail").hidden)return;const V=wh(a,E);ne(!0),v=E,i("#detail-number").textContent="细看一处 / "+String(E+1).padStart(2,"0"),i("#detail-title").textContent=Q.label,i("#detail-copy").textContent=V.copy,i("#detail-look").textContent=V.look,i("#detail").hidden=!1,document.querySelectorAll(".hotspot").forEach((Z,ie)=>{Z.toggleAttribute("data-active",ie===E),Z.setAttribute("aria-expanded",String(ie===E))})}function Ie(){var E;if(!(!m||c.busy||y)){if((E=g==null?void 0:g.performancePlayer)!=null&&E.busy){g.performancePlayer.stop(),I=Ie,z();return}if(de("view"),R=null,ae(),c.reduced){c.present(),i("#manifest-status").textContent="已开启减少动态效果，保持完整器物";return}y=!0,c.toggle(),z()}}window.addEventListener("museum-enter",E=>{var Q;m&&((Q=E.detail)!=null&&Q.reduced&&(c.reduced=!0,H(!0)),t?c.form():c.present(),z())});function Se(){var Q;if(!m||R===null)return;if((Q=g==null?void 0:g.performancePlayer)!=null&&Q.busy){g.performancePlayer.stop();return}if(c.state==="dormant"&&(c.form(),z()),c.state!=="formed")return;const E=R;R=null,g.focusFeature(E),me(E)}function ke(E){const Q=a.focusTargets.indexOf(E);Q<0||(R=Q,Se())}function de(E){var Q;["view","story","chat","journey"].includes(E)&&(E!=="view"&&(I=null,(Q=g==null?void 0:g.performancePlayer)==null||Q.stop()),i("#experience").dataset.mode=E,i("#story-panel").hidden=E!=="story",A==null||A.setOpen(E==="chat"),g==null||g.setViewingMode(E),ye==null||ye.setOpen(E==="journey"),document.querySelectorAll(".experience-nav [data-mode]").forEach(V=>{V.setAttribute("aria-pressed",String(V.dataset.mode===E)),V.dataset.mode!=="view"&&V.setAttribute("aria-expanded",String(V.dataset.mode===E))}),ae())}function H(E){C=E||o.matches,i("#experience").classList.toggle("ambient-paused",C),i("#ambient-toggle").setAttribute("aria-pressed",String(C)),i("#ambient-toggle").textContent=C?"动效 · 静":"动效 · 开",i("#ambient-toggle").setAttribute("aria-label",C?"开启背景动效":"暂停背景动效"),g==null||g.setAmbientPaused(C)}i("#ambient-toggle").onclick=()=>H(!C);const J=()=>{var E;c.reduced=o.matches,o.matches&&((E=g==null?void 0:g.performancePlayer)==null||E.stop(),I=null,c.present(),y=!1,L="",z()),H(o.matches)};o.addEventListener("change",J),H(C);for(let E=0;E<28;E++){const Q=document.createElement("i");Q.style.left=`${(E*37+7)%100}%`,Q.style.top=`${(E*23+13)%90}%`,Q.style.animationDelay=`-${E*1.37}s`,Q.style.animationDuration=`${17+E%9*2}s`,i(".ambient-dust").append(Q)}document.querySelectorAll(".experience-nav [data-mode]").forEach(E=>E.onclick=()=>de(E.dataset.mode)),i("#close-story").onclick=()=>{de("view"),document.querySelector('[data-mode="story"][aria-controls]').focus()},document.addEventListener("keydown",E=>{if(!(E.key!=="Escape"||document.querySelector("dialog[open]"))){if(f){E.preventDefault(),ae(),i("#hotspot-toggle").focus();return}i("#experience").dataset.mode!=="view"&&(E.preventDefault(),de("view"),document.querySelector('.experience-nav [data-mode="view"]').focus())}}),i("#manifest-toggle").onclick=Ie,i("#reset").onclick=()=>{m&&(ae(),g.reset())},i("#mirror-flip")&&(i("#mirror-flip").onclick=()=>{m&&c.state==="formed"&&!y&&(ae(),g.flip())}),i("#hotspot-toggle").onclick=()=>{!m||c.state!=="formed"||ne(!f)},i("#close-detail").onclick=()=>{ae(),i("#hotspot-toggle").focus()},i("#about").onclick=()=>i("#info").showModal(),i("#close-info").onclick=()=>i("#info").close(),i("#info").onclick=E=>{if(E.target===i("#info")){const Q=E.target.getBoundingClientRect();(E.clientX<Q.left||E.clientX>Q.right||E.clientY<Q.top||E.clientY>Q.bottom)&&E.target.close()}},i("#retry").onclick=()=>location.reload();function fe(E){var Z;x=requestAnimationFrame(fe);const Q=_?Math.min((E-_)/1e3,.08):0;if(_=E,document.hidden||document.querySelector("dialog[open]"))return;let V=c.tick(Q);if(y&&c.state==="dormant"?(c.form(),V=c.tick(0)):y&&c.state==="formed"&&(y=!1,L=""),g.update(V,c.visualTime,!1,Q),I&&!((Z=g.performancePlayer)!=null&&Z.busy)){const ie=I;I=null,ie()}Se(),z(),f&&c.state==="formed"&&g.projectAnchors().forEach((ie,Ne)=>{const he=i("#hotspot-"+Ne);he.hidden=!ie.visible,he.style.left=ie.x+"px",he.style.top=ie.y+"px"})}async function G(){const E=performance.now();try{if(n)throw n;g=await q0(l,Q=>{const V={preparing:["正在勾勒器形","让每一处纹理，慢慢清晰。"],lighting:["微光将至","正在为这次相逢，点亮最后一束光。"]};if(Q.phase){i("#load-text").textContent=V[Q.phase][0],i("#load-detail").textContent=V[Q.phase][1],i("#load-progress").value=Q.phase==="lighting"?96:88;return}const Z=Q.total?Math.round(Q.loaded/Q.total*100):null;Z===null?i("#load-progress").removeAttribute("value"):i("#load-progress").value=Z*.82,i("#load-text").textContent=Z===100?"正在勾勒器形":`正在迎来${a.nickname}`,i("#load-detail").textContent=Z===null?"光里的轮廓，正渐渐靠近。":Z===100?"让每一处纹理，慢慢清晰。":`器物已抵达 ${Z}%`},()=>{},a),t?i("#experience").classList.contains("museum-embedded")||c.form():c.present(),g.setAmbientPaused(C),g.setViewingMode(i("#experience").dataset.mode),g.update(c.tick(0),c.visualTime,!1),m=!0,l.setAttribute("aria-busy","false"),i("#load-progress").value=100,await new Promise(Q=>requestAnimationFrame(Q)),i("#experience").classList.add("scene-ready"),i("#loader").classList.add("is-leaving"),setTimeout(()=>{m&&(i("#loader").hidden=!0)},o.matches?0:450),M=Math.round(performance.now()-E),performance.measure("artifact-ready",{start:E}),g.anchors.forEach((Q,V)=>{const Z=document.createElement("button");Z.className="hotspot",Z.id="hotspot-"+V;const ie=document.createElement("span");ie.className="hotspot-light",ie.setAttribute("aria-hidden","true");const Ne=document.createElement("span");Ne.className="hotspot-name",Ne.textContent=Q.label,Ne.setAttribute("aria-hidden","true"),Z.append(ie,Ne),Z.setAttribute("aria-label",Q.label),Z.setAttribute("aria-controls","detail"),Z.setAttribute("aria-expanded","false"),Z.hidden=!0,Z.onclick=()=>me(V),i("#hotspots").append(Z)}),z(),Se(),x=requestAnimationFrame(fe),window.__exhibit={get state(){return{ready:m,state:c.state,progress:c.progress,busy:c.busy,showHotspots:f,loadMs:M,...g.stats}},get camera(){return g.camera.position.toArray()}}}catch(Q){console.error("器物加载失败",Q),i("#load-text").textContent=/WebGL|context/i.test(Q.message)?"当前浏览器未能开启三维画面":"器物暂时无法载入",i("#load-detail").textContent=t?(n==null?void 0:n.message)||"模型加载未完成，请检查工作台服务和模型文件后重试。":"请确认浏览器支持 WebGL 2 与本地模型文件正常。",i("#retry").hidden=!1,i("#load-progress").hidden=!0,i("#manifest-status").textContent=t?"当前模型尚未就绪，请重试或返回展厅。":`模型尚未就绪，仍可通过底部入口与${a.nickname}对话。`}}l.addEventListener("webglcontextlost",E=>{E.preventDefault(),m=!1,z(),cancelAnimationFrame(x),i("#experience").classList.remove("scene-ready"),i("#loader").classList.remove("is-leaving"),i("#loader").hidden=!1,i("#load-text").textContent="三维画面暂时中断",i("#load-detail").textContent="请重新加载以恢复器物。",i("#retry").hidden=!1}),document.addEventListener("visibilitychange",()=>{_=0,i("#experience").classList.toggle("page-hidden",document.hidden)}),window.addEventListener("pagehide",()=>{d.disconnect(),cancelAnimationFrame(x),o.removeEventListener("change",J),A==null||A.destroy(),T==null||T.destroy(),ye==null||ye.destroy(),De==null||De.destroy(),g==null||g.dispose()});const ee=E=>{de("view"),ke(E)};t||(A=Y0({onFocus:ee,exhibit:a})),T=K0({onFocus:ee,exhibit:a});const ye=t?null:$0({exhibit:a,onClose:()=>{de("view"),document.querySelector('[data-mode="journey"]').focus()}}),De=s&&!t?Hv({exhibit:a,exhibits:Mr,isReady:()=>m,captureArtifact:async()=>m?g.captureArtifact():null}):null;if(t){for(const V of['[data-mode="chat"]','[data-mode="journey"]',"#hotspot-toggle","#artifact-select"]){const Z=i(V);Z&&(Z.style.display="none")}const E=i('[data-mode="story"]');E.lastChild.textContent="作品信息";const Q=i("#info").querySelectorAll("dd");Q[0].textContent=a.identity,Q[1].textContent="拖动旋转、滚轮或双指缩放，可播放微光聚合与消散。",Q[2].textContent="微光动画是视觉演绎。作品来自 AI 辅助建模任务，生成结果需人工核对。"}z(),G()}Wv();
