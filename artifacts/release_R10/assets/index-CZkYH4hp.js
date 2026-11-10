(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Th={"goujian-sword":{hilt:{copy:"把视线从剑尖暂时收回来，先看握柄与剑首。细长的柄与端部的圆形变化，把向外延伸的轮廓稳稳收住；它既是整把剑的起点，也提供了一个观察比例的尺度。模型能辨认到哪些细节，还需以实际画面为准。",look:"转到斜侧面，比较剑首、握柄与剑身的宽窄和衔接。"},guard:{copy:"剑格横在握柄与剑身之间，像给一条长线加上了一次停顿。沿它的边缘观察，两侧的展开与中间的收束，使上下两段轮廓有了清楚分界。稍微转动，原先只见宽度的部位，还会显出厚薄与前后关系。",look:"绕过正面，看看这道横向边界的侧缘，再沿握柄回到剑身。"},blade:{copy:"长长的剑身很容易让目光一口气滑向剑尖，不妨先停在中段。比较中脊与两侧的明暗，再辨认表面纹样怎样重复。如果模型没有清楚记录铭文，就不要把模糊色块猜作文字，原器文字应回到馆方资料核对。",look:"让剑身缓慢侧转，先追踪中脊的光，再观察两侧边线的变化。"}},"galloping-horse":{horsehead:{copy:"头颈先给奔跑指出一个方向，躯干再顺势延伸。正面看较为集中，转到侧面，颈部上扬与身体前行的关系才真正展开。像读一句话的开头，先找到这道朝向，再顺着轮廓看向整个身姿。",look:"从正面绕到侧面，比较头、颈、肩之间哪一道转折最醒目。"},legs:{copy:"四肢的伸展与间隔，把一个静止模型变成了有节奏的瞬间。侧面能读出前后方向，斜前方则会出现新的遮挡和留白。把两个角度连起来看，你会发现奔跑感不只来自肢体本身，也来自肢体之间的空间。",look:"先看完整侧影，再略转一点，数一数哪些轮廓重叠、哪些分开。"},hoof:{copy:"目光最终落向足下，马蹄与鸟形的相接处成为整件造型的一个惊喜。上方展开的奔势，在这里收成很小的观看落点。模型可以帮助比较形体关系，但不能单凭画面推断原器内部支撑或实际重心。",look:"靠近足下连接处，再退回整体视角，比较这一点与上方身躯的大小。"}},"four-ram-zun":{"zun-rim":{copy:"方形口沿先把器物的方向交代出来。正面看是一道展开的边，转到斜上方，前后边线交错，开口的空间才慢慢显现。它像给复杂的器身立下一条清楚的秩序，让目光有一个可以返回的起点。",look:"稍微抬高视角，找齐四边，再比较口沿与下方器身的宽度。"},ram:{copy:"四隅的羊首让方器的转角变得生动。不要只盯着脸部，沿头部向后看，轮廓怎样与器肩相接，才是这一处最值得细读的关系。转至斜侧面，让羊首脱离器身背景，突出与收束便会更容易辨认。",look:"把一角转向自己，沿羊首外缘观察，再比较相邻一角的朝向。"},"zun-pattern":{copy:"器壁上的纹饰随着方形结构展开，重复的线条与局部转折组成繁密的层次。先看较大的分区，再选一小片纹样细读，像先找到篇章、再读字句。侧光经过时，高低起伏会比正面颜色更有提示作用。",look:"选一处清晰纹样，慢慢侧转，比较它的凸起与周围凹处。"},"zun-foot":{copy:"从舒展的上部向下看，器身逐渐收束，最后落向承托的位置。这一段不如羊首醒目，却让整体比例安定下来。将上部和下部放在一起比较，方形轮廓中的宽窄变化，也会变成可以感受到的节奏。",look:"先看完整侧影，再移向下方，比较器足与器肩的宽窄关系。"}},"zenghouyi-bells":{"bell-frame":{copy:"面对整组编钟，先别急着找某一枚钟。让视线沿横向钟架走过，再看上下的层次与钟体之间的间隔，整组的秩序便会浮现。像在乐声响起之前先看见座次，静止的排列也有疏密、重复与变化。",look:"先将整组收进视野，再选择相邻两枚钟，比较它们的位置和间距。"},"bell-body":{copy:"从整组中选一枚钟，观察外轮廓怎样从上部延伸到底缘，再看表面可辨认的起伏。转过一点，原本重叠的线条会分开，钟体的体积也更清楚。屏幕上的大小和颜色不能直接换算成真实音高。",look:"选一枚轮廓清楚的钟，比较正面与斜侧面，再回看它在整组中的位置。"},"bell-hanging":{copy:"沿着钟体向上看，悬挂位置把钟与支架联系起来，也在两者之间留下空隙。真正有意思的不只是连接的一点，还有邻近钟体如何避开、钟架如何延伸。这里引导观察模型关系，不据外观判断原器的承重细节。",look:"追踪一枚钟到上方支架的连接，再转动模型，看看被遮住的间隙。"}},"phoenix-ewer":{spout:{copy:"先沿着壶肩看向前方：凤颈抬起，鸟喙顺势成为出水的壶流。一条线既交代了器物的用途，也留下了昂首的姿态。转到侧面，凤首、细颈与饱满壶腹之间的大小对比会更清楚。",look:"轻轻转到侧面，试着用目光描一遍“壶肩—凤颈—鸟喙”的轮廓。"},handle:{copy:"另一端的壶柄像一笔回旋的线，把凤尾卷成了可以穿过手指的空间。别只看外缘，柄孔里的留白同样参与了造型；它与前方伸出的凤首，一收一放，让扁圆壶身显得轻巧。",look:"从斜侧面看柄孔，比较卷曲末端与壶身相接的位置。"},pattern:{copy:"白瓷像展开的纸，青花沿着鼓起的壶腹延伸。远看先读出花与羽的整体节奏，靠近再辨认浓淡与线条。纹样会随着曲面转向、收窄，仿佛一幅需要你亲手展开的画。",look:"缓慢转动壶身，找一处密集纹样，再比较旁边的白色留空。"},neck:{copy:"目光回到壶肩上方，短颈把宽阔的腹部收束起来，口沿又轻轻向外打开。这里的细小转折很容易被凤首抢走注意，却决定了器物顶部的节奏，也让不同部位的纹饰有了分界。",look:"稍微抬高视角，看口沿、短颈与肩部怎样一层层衔接。"}},"bronze-head":{eyes:{copy:"先不急着猜它的表情。眉线在上方压出一道阴影，眼眶的凸起又把光托了起来，凝望感便从这些起伏中出现。正面看较为对称，转过一点，一侧眼角会先沉入暗处，同一张面孔也像换了神情。",look:"左右缓慢转动，比较两侧眼眶何时变亮、何时落入阴影。"},nose:{copy:"鼻梁像面庞中央的一道脊线，将左右两侧分开。鼻翼与面颊的交接并不只靠颜色，而是靠高低转折形成明暗。顺着这条线向下看，你会发现简练的轮廓也能让面孔很有力量。",look:"转到三分之二侧面，看看鼻梁突出多少、面颊又怎样向后收。"},ears:{copy:"耳部位于正面与侧面的交界，像给这张面孔加上了两处停顿。正面只能看到一部分，绕到侧面，耳缘与头部的连接才慢慢展开。它提醒我们：一张头像的形体，远不止正面的眉眼。",look:"绕向一侧，沿耳缘向下看，再回到正面比较轮廓的变化。"},patina:{copy:"青绿、浅褐与深色斑块交错在表面，像一幅没有标注的地形图。转动时，凸起处先接住光，凹处保留阴影，颜色与体积便叠在一起。这里展示的是模型记录的色层，不能仅凭锈色判断年代或埋藏经历。",look:"选一块浅色斑痕，转动前后比较：变化来自表面颜色，还是光照？"}},"cloud-mirror":{boss:{copy:"镜背中央的凸起先把目光收向圆心，周围纹样再从这里向外展开。它不是画在表面的一枚圆点，而是有高度的结构；从斜侧面看，镜钮与平缓镜背之间的起伏尤其清楚。",look:"斜着看中央凸起的侧缘，再用“翻面”比较镜子的另一面。"},arcs:{copy:"连绵的弧线把圆形镜背分出了节奏：大弧线负责组织轮廓，细密地纹填入其中。像读一段有轻重的乐句，先看大的转折，再回到细部，才不容易被满面的纹样带走。",look:"沿圆周追踪相邻弧线，找出它们如何连接，再观察弧线内侧的细纹。"},rim:{copy:"目光移到最外侧，镜缘像一道边界，把繁密的镜背收在圆形之内。转到侧面，原本宽阔的圆面会逐渐收成一条薄线；再转回来，纹样重新展开，器物的厚度与平面感形成鲜明对比。",look:"从正面转向侧面，留意边缘厚度与圆周轮廓；也可翻面比较两侧。"}},"liquan-bodhisattva":{face:{copy:"先看头部外轮廓，再把目光收回眉眼与面庞。头饰的层次较密，面容的转折相对舒缓，两种节奏并置，让视线自然停在脸上。稍微转向侧面，正面不明显的高低关系会逐渐显露。",look:"沿“头饰—额头—眉眼—面颊”向下看，比较繁与简的变化。"},ornaments:{copy:"衣饰线条沿身体向下延伸，有的凸起接住光，有的浅刻留在阴影里。它们既是表面的细节，也帮助我们读懂身体的姿态。不要急着数纹样，先找出线条怎样绕过肩部、怎样在下方聚拢。",look:"转一点角度，跟随一条衣纹，看它在何处转弯、分开或消失。"},pedestal:{copy:"层叠的莲瓣把人物与底部连接起来：上方的竖向身姿，在这里转成向外铺开的轮廓。每片瓣缘的明暗又带出前后关系，像为造像安排了一次稳稳的落脚。",look:"放低视角，比较前后两层莲瓣，再看足部怎样落到底座上。"}},"longquan-figure":{face:{copy:"人物的面容被包在青色的整体之中，眉眼不必用很重的线条，也能借细微起伏显出神情。先看正面，再稍转一点，让侧光把额头、鼻部与面颊逐次描出来，安静的表情便有了层次。",look:"慢慢左右转动，寻找眉眼最清楚的角度，再比较头饰的轮廓。"},ornaments:{copy:"青色在衣纹的转折间并不完全相同：凸起与凹处、受光与背光，让表面有了深浅变化。衣褶把颜色引向不同方向，好像一层青色的水沿着形体缓缓流过；具体釉层情况仍需对照实物观察。",look:"选一条衣褶，对比它的脊线与凹槽，分辨颜色和光影各起什么作用。"},pedestal:{copy:"向下看，人物的轮廓最终在底部收住。这里不像面容那样醒目，却能看清整体如何获得稳定的承托；模型中底部与衣饰的色层、形状变化，也给观看留下了另一组线索。",look:"从侧面比较底部宽度与上方身形，留意相接处的转折。"}},"pipa-figurine":{face:{copy:"发髻先勾出头部轮廓，面容再从下方显露。头部微微倾向怀中的乐器，让这件静止的陶俑有了正在倾听的感觉。那是观看时产生的联想，真正可细看的，是头、颈与肩之间如何相接。",look:"沿发髻向面庞看，再比较头部倾斜方向与琵琶的方向。"},ornaments:{copy:"琵琶斜抱在身前，双手与乐器围出一组紧凑的关系。器身、琴颈和手臂的方向并不相同，却一起把视线带向演奏的位置。声音没有留下，姿态却让人忍不住想象下一下拨弦。",look:"先找出琴颈与琴身，再沿两只手的方向，看它们分别停在哪里。"},pattern:{copy:"衣褶从身体转折处展开，到了下方又汇成较密的起伏。陶色在凸起处显亮、在缝隙里变深，像给衣料留下了轻重。现有色斑与纹理只按模型观看，不把它们当作原始彩绘的完整复原。",look:"沿一条衣褶向下，看看它如何与相邻褶线相遇，再转到侧面比较。"}},"speechless-buddha":{face:{copy:"眼睑的弧度、嘴角的走向与脸颊的起伏，共同组成了这份“淡定”。轻轻转动，同一张脸有时像在听，有时像欲言又止。这些是今天观看者的趣味联想，不是对造像原始含义的定论。",look:"先遮去心里的表情包印象，只看眼睑与嘴角，再说说你读到了什么。"},ornaments:{copy:"橙色、青色与浅色衣饰相互衬托，先在远处形成大块配色，靠近才看见衣纹的转折。顺着颜色交界慢慢走，能发现色块与形体并不总是重合，也因此多了一层可以细看的节奏。",look:"找一处颜色交界，比较它是否沿着衣褶延伸，再看光影怎样穿过。"},pedestal:{copy:"端坐的身姿最终落在起伏的岩石底座上。上方轮廓较为集中，下方石面则向两侧展开，给人物一个稳妥的支撑。绕到侧面，座面、衣饰与岩石之间的前后关系会比正面更清楚。",look:"从衣摆向下看，找出人物与岩石相接的地方，再比较两侧轮廓。"}}};function Ah(i,e){var t,n;return((t=Th[i.id])==null?void 0:t[i.focusTargets[e]])||{copy:((n=i.anchors[e])==null?void 0:n.copy)||"",look:"转动模型，从不同角度观察这一处细节。"}}const wh={"cloud-mirror":{id:"cloud-mirror",theme:"mirror",nickname:"照影",title:"八连弧纹铜镜",english:"EIGHT ARCS · ONE REFLECTION",series:"重器新生",number:"03",category:"云纹地八连弧纹铜镜",poem:["把云收进一轮圆，","把相逢留给你。"],description:["连弧相接，细纹在铜色中回旋。","翻过这一面，去看一轮圆的两种神情。"],tags:["一面观纹","一面照影"],model:{desktop:"/models/cloud-mirror-web-desktop.glb",mobile:"/models/cloud-mirror-web-mobile.glb",rotationY:-Math.PI/2,roughness:.72,metalness:.2,exposure:1.12},flip:!0,focusTargets:["boss","arcs","rim"],anchors:[{label:"中央镜钮",x:0,y:0,copy:"圆心处的凸起将视线收拢。转过侧面，看看镜钮与镜背的高度差。"},{label:"连弧与地纹",x:-.6,y:.45,copy:"把目光沿弧线缓缓移动，比较大轮廓与细密底纹的节奏。"},{label:"镜缘轮廓",x:.99,y:.3,copy:"靠近圆周，再转动模型：薄薄的侧缘把两个面连在一起。"}],welcome:"我是照影。别急着寻找镜中的自己，先看看我背面的云与弧线。转过一面，一轮圆，也可以有两种心情。",prompts:["八连弧纹是什么？","我该先看铜镜的哪里？","讲一段关于照影的故事"],storyTitle:"一轮圆里的相逢",lead:"一面向人，一面向纹。目光从圆心启程，循着连弧走过一圈，又回到最初的相逢。翻动铜镜，像翻开一封没有署名的信。",tabLabels:["循弧线","翻两面","听照影"],topics:{shape:{kind:"纹样观察 · 文学演绎 / 01",brief:"一段弧线牵住下一段，围出一圈安静的节奏。细纹在其间铺开，仿佛云影经过水面，轻轻一动，又停在了铜上。",action:"沿着连弧看 ↗",target:"arcs",paragraphs:["先别急着看完整个圆。挑一段弧线，顺着它的方向慢慢走：弧与弧在相接处转身，细小的纹理则填满轮廓之间的空隙。大的曲线让目光停住，小的纹样让目光继续。","如果把圆心想作一处安静的岸，围绕它的连弧便像一圈水湾。每一湾都朝向中心，又与邻近的一湾相连。转动时，光替你重新描过这条路。"],excerpt:"近名类型参考：广东大观博物馆藏“战国-云雷纹地八连弧纹镜”，材质为青铜。"},pattern:{kind:"器形观察 · 文学演绎 / 02",brief:"圆的两面，藏着不同的相见方式。纹样的一面让目光向内走，另一面则把想象送回观看它的人。轻轻翻面，故事便转了一页。",action:"看看中央镜钮 ↗",target:"boss",paragraphs:["将铜镜略微转侧，先看薄薄的边缘，再看镜背中央凸起的镜钮。原先平铺的纹样突然有了高度，圆面也显出起伏。","不妨想象一个尚未明亮的清晨：有人将一轮圆托在掌中，整理衣襟，再匆匆出门。镜子留在原处，背面的花纹却像刚刚醒来，把清晨的光又留了一会儿。"],excerpt:"圆的两面，藏着不同的相见方式。"},craft:{kind:"照影的来信 · 原创故事 / 03",brief:"“你问我记住过多少张脸。我更愿意记住，那些认真看向自己的时刻。”照影把答案放在一轮圆里，等你再转过来。",action:"查看故事取材 ↗",paragraphs:["想象闭馆后的一个夜晚。照影问窗外的月亮：“你每天被那么多人望着，会不会累？”月亮没有回答，只把一小片光放在它的边缘。照影便明白，有些陪伴，不需要把话说满。","第二天，有人在它面前停下，第一次认真看清那些细细的纹。照影想：原来相见也有两面，一面是我被你看见，一面是你愿意慢下来。"],excerpt:"相见也有两面：一面是我被你看见，一面是你愿意慢下来。"}},sourceTitle:"相关类型 · 广东大观博物馆",sourceUrl:"https://gddaguanmuseum.com/pd.jsp?m2382pageno=2&id=449",boundary:"近名馆藏作类型参考；模型身份尚未确证。故事为文学演绎。",motto:"一面看见纹，一面遇见你。",identity:"用户文件名为“云纹地八连弧纹铜镜”。近名馆藏条目记为战国青铜镜，尚未确认与本模型为同一件；不套用该条目的年代、尺寸或收藏地点。"},"liquan-bodhisattva":{id:"liquan-bodhisattva",theme:"stone",nickname:"静照",title:"菩萨立像",english:"STILLNESS HELD IN STONE",series:"重器新生",number:"04",category:"数字造像 · 石色清光",poem:["让光走过石的纹理，","让心停留片刻。"],description:["雕痕承接微光，轮廓向静处延伸。","衣纹层层垂落，静立也有从容的姿态。"],tags:["循光观石","静处有声"],model:{desktop:"/models/liquan-bodhisattva-web-desktop.glb",mobile:"/models/liquan-bodhisattva-web-mobile.glb",rotationY:-Math.PI/2,roughness:.94,metalness:0,exposure:1.16},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"造像上部",x:0,y:.8,copy:"让光从侧面走过，观察上部轮廓和雕刻的转折。"},{label:"衣饰与雕痕",x:0,y:.1,copy:"沿着衣饰的线条向下看，比较浅刻、凸起与阴影的层次。"},{label:"莲瓣底座",x:0,y:-1.13,copy:"低头看看底座的层叠莲瓣，再从侧面观察足部与底座相接的轮廓。"}],welcome:"我是静照。你可以先不问我什么，让目光沿着石上的线条走一会儿。等你愿意，我再陪你读一段造像的故事。",prompts:["礼泉寺的参考造像有什么特点？","怎样欣赏这尊立像？","讲一段关于静照的故事"],storyTitle:"石上的微光",lead:"石的表面并非沉默。转折接住明暗，线条引导视线，舒展的姿态留下想象的余地。看一尊造像，也是在学习如何停下来。",tabLabels:["观轮廓","循衣纹","听静照"],topics:{shape:{kind:"造像观察 · 文学演绎 / 01",brief:"光从一侧缓缓经过，先照亮突起的轮廓，再沉入细小的雕痕。石没有移动，表情却随着你的观看一点点舒展开来。",action:"看看上部轮廓 ↗",target:"face",paragraphs:["想象一束清晨的光进入安静的空间。它不急着照亮所有地方，只先落在一处凸起上，再慢慢滑向凹处。石面由此有了不同的深浅，原来平静的轮廓也有了呼吸般的节奏。","沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。最后看向脚下层叠的莲瓣，整个身形便在这次观看里连成一体。"],excerpt:"石没有移动，表情却随着观看一点点舒展开来。"},pattern:{kind:"石雕之美 · 观察故事 / 02",brief:"一道线从光里起笔，另一道线在阴影里收尾。衣饰不曾随风摆动，却让石头有了轻与重、疏与密的变化。",action:"沿衣饰细看 ↗",target:"ornaments",paragraphs:["看衣饰时，试着把目光放慢：突起的地方先亮起来，低处则留住暗色。雕刻以这样的高低差，让坚硬的材料生出层次。","在想象中的工坊里，匠人收起工具，退后一步。刚才还显得繁密的线条，隔着一段距离忽然连成整体。你今天转动模型时，也在重复这种由近及远、重新看见的动作。"],excerpt:"相关馆藏参考：故宫展览资料描述礼泉寺出土菩萨像的花冠、璎珞与精细雕刻。"},craft:{kind:"静照的片刻 · 原创故事 / 03",brief:"“如果今天有些事还没想明白，先陪我站一会儿。”静照不急着补全你的句子，只把一小片安静留在光里。",action:"查看相关馆藏资料 ↗",paragraphs:["想象一个阴天的下午，有人带着没解开的心事来到这里。他沿着石上的线条看了很久，忽然问：“一直安静着，也能被好好看见吗？”静照没有替他回答，只让那束微光停在低垂的衣纹上。","离开的时候，他又回头看了一眼。心事仍在那里，微光也仍在那里。他终于发觉，自己不必先变得毫无缺憾，才能被温柔地对待。"],excerpt:"不必先变得毫无缺憾，才能被温柔地对待。"}},sourceTitle:"相关馆藏 · 故宫博物院展览资料",sourceUrl:"https://www.dpm.org.cn/subject_sino/project/china/98564.html",boundary:"模型为完整立像，与礼泉寺参考残像外形不同；资料作相关参照。叙事为文学演绎。",motto:"循着石上的光，留一刻安静。",identity:"原文件题名为“隋代礼泉寺遗址出土菩萨残像”，实际模型为带莲瓣底座的完整立像，与故宫资料中腰以上的礼泉寺残像不同。页面按模型展示为菩萨立像；参考残像的隋代年代、1987年出土记录及馆藏信息不归给本模型。"}},_c={titleLines:["龙泉窑青瓷","露胎人物塑像"],id:"longquan-figure",theme:"celadon",nickname:"青隐",title:"龙泉窑青瓷露胎人物塑像",english:"CELADON · EARTH AND EMBER",series:"重器新生",number:"05",category:"龙泉青瓷 · 釉与胎的相逢",poem:["一半青山，一半泥土，","窑火替我留住温柔。"],description:["青釉如山色，露胎似暖土。","转过一寸光，看两种质地如何相依。"],tags:["青釉流光","露胎见真"],model:{desktop:"/models/longquan-figure-web-desktop.glb",mobile:"/models/longquan-figure-web-mobile.glb",rotationY:-Math.PI/2,roughness:.66,metalness:0,exposure:1.12},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"人物面容",x:0,y:.8,copy:"从眉眼的起伏看向两侧轮廓。转过一点，让光描出面庞与头饰的层次。"},{label:"釉色与衣纹",x:0,y:-.35,copy:"沿衣纹看青色的深浅，在转折与凹处寻找积釉带来的层次。"},{label:"足下与底部",x:0,y:-1.13,copy:"将目光向下移，比较底部的胎色、釉色和整体的承托关系。"}],welcome:"我是青隐。身上的青，替我留住山色；露出的泥土，替我记得来处。你愿意陪我等一束光，慢慢经过衣纹吗？",prompts:["龙泉青瓷怎样烧成？","我该先看塑像的哪里？","讲一段青隐与窑火的故事"],storyTitle:"从泥土到一抹青",lead:"泥土先学会安静，窑火再教它发光。青色沿着衣纹停驻，暖褐从釉外探出头来。一冷一暖之间，青隐把漫长的等待，讲成一个温柔的故事。",tabLabels:["观胎釉","循窑火","听青隐"],topics:{shape:{kind:"胎釉之间 / 01",brief:"青色并没有覆盖一切。露出的胎土像一小段山路，让目光从清凉的釉面，走回温暖的土地。",action:"走近人物面容 ↗",target:"face",paragraphs:["先看面容，再看衣饰。把目光停在两种颜色相遇的边缘，光滑与朴拙、清凉与温暖，便有了各自的声音。","青隐说：“不必把所有地方都染成同一种颜色。那些留白，也能替我说话。”你轻轻转动它，原本平静的轮廓便在光里有了新的神情。"],excerpt:"釉色与胎色相接，像青山与泥土相依。"},pattern:{kind:"青色诞生 / 02",brief:"火把泥土送进漫长的变化。火色、温度与等待，合力留下青釉如玉的光泽。",action:"沿着衣纹看釉色 ↗",target:"ornaments",paragraphs:["龙泉青瓷的传统烧制技艺，来自浙江龙泉。匠人对火候的把握，既依靠温度，也依靠对火焰颜色的观察。青色的出现，连着一代代人的经验。","青隐把窑想作一场长夜。火光在外面奔走，它在里面慢慢安静。等窑门再次打开，风从青色的衣纹上经过，像山间第一次吹来的晨风。"],excerpt:"2009年，龙泉青瓷传统烧制技艺列入联合国教科文组织人类非物质文化遗产代表作名录。"},craft:{kind:"青隐的山色 / 03",brief:"“你问我最喜欢哪一种青。我喜欢雨停之后，山还没有完全醒来的那一种。”",action:"看看青色背后的技艺 ↗",paragraphs:["有一天，青隐收到一片落叶。叶子问：“你经过那么热的火，为什么还是这样温柔？”青隐想了很久，答道：“也许是因为，火离开以后，我终于懂得珍惜每一阵凉风。”","于是它把落叶留在身旁。白天听光走过，夜里听风绕行。等你走近，它便把这份慢慢积攒的安静，分一点给你。"],excerpt:"经过火，也依然愿意温柔。"}},sourceTitle:"龙泉青瓷传统烧制技艺 · UNESCO",sourceUrl:"https://ich.unesco.org/en/RL/traditional-firing-technology-of-longquan-celadon-00205",boundary:"",motto:"让青色安放目光，让泥土留住温度。",identity:"用户文件题名为“元代龙泉窑青瓷露胎人物塑像”。本展示未核实模型对应的具体馆藏原物，元代仅为文件题名信息，不扩展具体窑址、人物身份、出土地点与尺寸。",decorHtml:'<div class="celadon-glaze"><i></i><i></i><i></i><b></b><span></span></div>'},vc={id:"pipa-figurine",theme:"pipa",nickname:"弦月",title:"彩绘陶弹琵琶女俑",english:"A MELODY HELD IN CLAY",series:"重器新生",number:"06",category:"彩绘陶俑 · 怀抱弦音",poem:["指尖停在一曲之间，","余音刚好落向你。"],description:["陶色留住衣褶，也留住抱琴的姿态。","绕过一缕微光，听见静默中的回响。"],tags:["抱琴观姿","静中听弦"],model:{desktop:"/models/pipa-figurine-web-desktop.glb",mobile:"/models/pipa-figurine-web-mobile.glb",rotationY:-Math.PI/2,roughness:.9,metalness:0,exposure:1.12},performance:{rotationY:0,desktop:"/models/pipa-alive-desktop-R31.glb",mobile:"/models/pipa-alive-mobile-R31.glb",audio:"/audio/pipa-dancing-strings-6s-R32.mp3"},focusTargets:["face","ornaments","pattern"],anchors:[{label:"面容与发髻",x:0,y:.87,copy:"先看面容与发髻的轮廓，再转过一点，让侧光描出头部的起伏。"},{label:"怀中琵琶",x:.03,y:-.36,copy:"顺着双手与怀中乐器的关系，看抱持、停顿与倾斜组成的节奏。"},{label:"衣褶与陶色",x:0,y:-1,copy:"让目光沿衣褶向下，留意陶色在凸起与阴影之间的变化。"}],welcome:"我是弦月。你来得正好，这一曲还剩最后一个停顿。先别急着找声音，看看我怀里的琵琶，再把今天想说的话，轻轻放在这儿。",prompts:["琵琶的名字和弹奏有什么关系？","怎样欣赏这尊抱琴女俑？","讲一段关于弦月的故事"],storyTitle:"把一曲留给路过的人",lead:"指尖停住，衣褶仍像记得风的方向。她把琴抱得很近，却把一曲的余地留得很远：远到穿过安静的展厅，刚好让今天的你听见。",tabLabels:["望眉眼","循琴身","听弦月"],topics:{shape:{kind:"一眼 · 眉间月",brief:"她没有催促下一声弦响。微光先走过发髻，再落到眉眼，像是等一个迟来的人坐稳，才肯继续这一曲。",action:"走近眉眼 ↗",target:"face",paragraphs:["在故事里的小小庭院，月亮还没有升高。弦月先抬眼看看门口，又把视线放回琴上。她总觉得，一首曲子开始以前，应该给晚到的人留一个不慌不忙的位置。","走近些，沿面容、发髻与肩线看过去。转动女俑，明暗会重新组织这份安静：有些角度像在倾听，有些角度又像刚刚记起一句话。"],excerpt:"一曲未起，先为你留一个位置。"},pattern:{kind:"一抱 · 弦上风",brief:"怀中的琴把手势与身姿连成一句话。一只手留住方向，另一只手留住停顿，连沉默都像有了节拍。",action:"看看怀中琵琶 ↗",target:"ornaments",paragraphs:["想象晚风从门缝经过，琴声便追着它走出一点，又折回来。弦月不想把每个角落都填满；她知道，有时最动人的一瞬，是下一声还没有抵达。","顺着抱琴的动作看，手、琴身与衣褶彼此呼应。乐器成为姿态的中心，也让陶俑的静止有了方向。把模型轻轻侧转，再看这几个轮廓如何相接。"],excerpt:"让一声落下，也让另一声有地方开始。"},craft:{kind:"一曲 · 今夜来信",brief:"“如果今天没有好好说完一句话，就把它留在我的曲子里。”弦月把最后一个音放轻，等它慢慢走到你身旁。",action:"循着陶色细看 ↗",target:"pattern",paragraphs:["故事里，庭院最后一位听众迟迟不肯离开。他说，自己走了一整天，仍不知道该把心事放在哪里。弦月没有问缘由，只把那一段曲子重新弹了一次。这一次，停顿比旋律还要长。","想象他终于起身时，月光恰好落在衣袖边缘。心事没有突然消失，却也不再挤成一团。弦月把琴抱回怀里：原来陪一个人坐一会儿，也可以是一首曲子。"],excerpt:"陪一个人坐一会儿，也可以是一首曲子。"}},sourceTitle:"琵琶文化 · 克利夫兰艺术博物馆",sourceUrl:"https://www.clevelandart.org/art/1918.344",boundary:"",motto:"曲子可以停，倾听不必散场。",identity:"用户提供文件题名为“彩绘陶弹琵琶女俑”。未取得对应实物的馆藏登记、年代、尺寸及出土记录；不把器物类型或其他馆藏的记录归给本模型。弦月为本项目创作角色。",decorHtml:'<div class="pipa-strings"><i></i><i></i><i></i><i></i><b></b></div><div class="pipa-ribbon"></div>'},xc={id:"speechless-buddha",theme:"speechless",nickname:"淡淡",title:"无语佛",english:"A CALM FACE, A BUSY MIND",series:"重器新生",number:"07",category:"众生表情 · 默默接住",poem:["表面风平浪静，","内心弹幕经过。"],description:["眉眼替你保持淡定。","没说出口的那句，来这儿慢慢说。"],tags:["淡定接话","温柔吐槽"],model:{desktop:"/models/speechless-buddha-web-desktop.glb",mobile:"/models/speechless-buddha-web-mobile.glb",rotationY:-1.5707963267948966,roughness:.83,metalness:.03,exposure:1.03},focusTargets:["face","ornaments","pedestal"],anchors:[{label:"淡定的眉眼",x:0,y:.87,copy:"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。转一点角度，同一张脸又像正在默默接话。"},{label:"衣饰与配色",x:0,y:-.23,copy:"沿着橙色、青色与浅色衣饰看过去，留意颜色之间的交接，以及衣褶怎样接住光。"},{label:"岩石底座",x:0,y:-1.05,copy:"目光沿着端坐的身姿向下，看看岩石底座的轮廓与起伏。缓缓转到侧面，留意座面怎样托住人物。"}],welcome:"我是淡淡。表情没什么波澜，心里已经打完一段草稿。今天想吐槽什么？你先说，我听着。人生偶尔卡一下，也不用立刻刷新。",prompts:["你和网上的无语佛有什么关系？","今天有点累，陪我吐槽两句","讲一段淡淡的下班故事"],storyTitle:"淡淡的人间观察",lead:"有些话，不必急着讲通。有些天，能好好走完就已经很忙。淡淡把表情留在原处，把一小块安静留给你。坐一会儿，让心里的弹幕先飘过去。",tabLabels:["看这表情","今日缓冲","终于下班"],topics:{shape:{kind:"一眼 · 情绪缓冲",brief:"有人问他是不是心如止水。淡淡想了想：水面挺稳，水下的弹幕另算。然后他往旁边让了让，给今天有点累的人留出一个位置。",action:"看看这张表情 ↗",target:"face",paragraphs:["展厅里来了个赶时间的人。他一边看手机，一边问淡淡：你怎么什么事都不急？淡淡沉默了两秒。心里那句“急也没有给我装轮子”转了一圈，出口只剩下：先站稳，慢一点也能看清。","那个人终于把手机放低。灯光走过眉眼，他忽然觉得，这张脸像极了开完一场长会的自己。淡淡没有追问，只把沉默留成了一把椅子。"],excerpt:"水面挺稳，水下的弹幕另算。"},pattern:{kind:"一身 · 认真下班",brief:"淡淡的衣饰很有精神，精神本人想先歇会儿。颜色替他把场面撑住，他负责陪你把今天那些绕不过去的小事，一件一件放下。",action:"沿衣饰看一看 ↗",target:"ornaments",paragraphs:["有个故事里，淡淡收到一份“快乐计划”：清晨要元气，午后要高效，晚上还要成为更好的自己。他读完，认真把纸叠好。今天先成为吃过饭的自己，应该也算推进。","窗边的人笑出了声，才想起午饭还没有吃。淡淡看着衣袖上的光，没有再讲道理。等那个人回来的时候，今天的难题还在，肚子却已经有了答案。"],excerpt:"今天先成为吃过饭的自己。"},craft:{kind:"一歇 · 人间弹幕",brief:"下班铃响了，淡淡没有动。倒不是热爱加班，只是故事里的他暂时还没有腿部自由。于是他把一句“辛苦了”，留给每个终于停下来的人。",action:"看看岩石底座 ↗",target:"pedestal",paragraphs:["故事里，最后一位参观者站在门口，问淡淡：今天什么都没做好，算不算白过了？淡淡在心里数了数：起床，出门，走到这里。行程还挺满。","他最后只说：你已经把今天走到这里了。剩下的，明天再排队。灯一盏盏暗下来，参观者笑着道别。淡淡继续留在原地，心里补上最后一句：这回真下班了。"],excerpt:"剩下的，明天再排队。"}},sourceTitle:"网络形象背景 · 景德镇市融媒体中心",sourceUrl:"https://www.thepaper.cn/newsDetail_forward_30749742",boundary:"",motto:"心里的弹幕，慢慢说也来得及。",identity:"用户提供文件题名为“无语佛”。模型为戴冠端坐人物，具有浅色披衣、橙色衣袍、蓝色膝部与岩石底座。经浏览器观察，其外形不对应网络上托腮偏头的沉思罗汉。未取得对应实物的馆藏登记、年代、出土、尺寸与正式名称。无语佛为本项目展示名，淡淡为创作伙伴。沉思罗汉资料只用于网络称呼背景，不归给此模型。",decorHtml:'<div class="speechless-halo"><i></i><b></b></div><div class="speechless-pause"><i></i><i></i></div>'},Rh={"goujian-sword":{id:"goujian-sword",theme:"sword",nickname:"藏锋",title:"越王勾践剑",english:"A QUIET EDGE THROUGH TIME",series:"重器新生",number:"08",category:"青铜剑 · 静观锋芒",poem:["一线微光穿过岁月，","锋芒留在沉静之中。"],description:["从剑首到剑尖，让目光慢慢走过。","纹样与轮廓，藏着另一种力量。"],tags:["循纹读剑","藏锋见心"],model:{desktop:"/models/goujian-sword-web-desktop.glb",mobile:"/models/goujian-sword-web-mobile.glb",rotationY:-Math.PI/2,roughness:.66,metalness:.16,exposure:1.08},focusTargets:["hilt","guard","blade"],anchors:[{label:"剑首与握柄",x:0,y:-1.12,copy:"从剑首与握柄看起，转过侧面，比较圆与直、宽与窄之间的收束。"},{label:"剑格的边界",x:0,y:-.8,copy:"剑格位于握柄与剑身之间。放慢转动，看这道横向的边界怎样连接两种轮廓。"},{label:"剑身与纹样",x:0,y:.32,copy:"沿剑身向下，比较中脊、两侧轮廓与表面纹样。细节能否辨认，以当前模型实际呈现为准。"}],welcome:"我是藏锋。先别急着问我锋利不锋利，把光转到剑身上，看看纹样怎样沿着轮廓延伸。你想读一段有据可查的往事，还是听一个关于藏锋的故事？",prompts:["越王勾践剑的铭文写了什么？","怎样欣赏这把剑？","讲一段关于藏锋的故事"],storyTitle:"锋芒，也可以安静",lead:"目光从剑首出发，经过剑格，沿一条长长的轮廓走向剑尖。静默的器物不急着证明力量；它把纹样、比例与一段有据可查的往事，留给愿意停下的人。",tabLabels:["循剑首","读剑身","听藏锋"],topics:{shape:{kind:"一握 · 圆与直",brief:"剑首收住目光，握柄引出方向。先看整体的节制，再看每一道轮廓如何相接。",action:"走近剑首 ↗",target:"hilt",paragraphs:["观看一把剑，不必先从剑尖开始。把视线留在握柄，比较它与剑身的长短关系；再稍稍侧转，观察圆形端部与细长轮廓的衔接。","湖北省博物馆对原器的介绍记载，剑首向外翻卷呈圆盘形，内铸十一道精细同心圆。这是馆方记录的原器特征；当前模型能呈现到什么程度，需要以屏幕上的实际细节为准。"],excerpt:"力量的起点，也可以是一道安静的圆。"},pattern:{kind:"一读 · 纹中有名",brief:"菱形纹样让长长的剑身有了节奏，铭文则为原器留下身份的线索。",action:"循着剑身细看 ↗",target:"blade",paragraphs:["根据湖北省博物馆的原器介绍，剑身饰有黑色菱形纹样，靠近剑格处有两行鸟篆铭文：“越王鸠浅 自作用剑”。馆方说明，经考证，“鸠浅”就是勾践。","让模型缓缓侧转，观察光如何经过剑身。这里的欣赏从可见的形与纹开始；如果模型纹理不能清晰显示文字，就回到馆方资料阅读，不把模糊纹理猜成铭文。"],excerpt:"纹样引导目光，文字留下名字。"},craft:{kind:"一念 · 藏锋的回答",brief:"故事里的藏锋说，真正想守住的东西，值得先想清楚，再向前一步。",action:"看看剑格 ↗",target:"guard",paragraphs:["在这个为藏锋创作的小故事里，一位赶路的人走进安静的展厅，问它：“你是不是从来不会犹豫？”藏锋没有立刻回答，只让一线光停在剑格上。","“我也喜欢先停一下。”它说，“先知道自己想守住什么，再决定下一步往哪里去。”人离开时，脚步比来时慢了一点；那并不是退后，而是终于找到了自己的方向。"],excerpt:"先看清想守住的，再决定走向哪里。"}},sourceTitle:"原器资料 · 湖北省博物馆",sourceUrl:"https://www.hbww.org.cn/zgzb/p/4694.html",boundary:"",motto:"心有方向，锋芒自藏。",identity:"用户提供文件题名为“越王勾践剑”。页面引用湖北省博物馆对同名原器的公开介绍；未取得此模型的扫描来源、授权及精度档案，不将原器尺寸或保存状况作为模型的测量结论。藏锋及其对话故事为项目创作。",decorHtml:'<div class="sword-edge-light"></div><div class="sword-lozenges"><i></i><i></i><i></i><i></i></div>'},"galloping-horse":{id:"galloping-horse",theme:"horse",nickname:"凌风",title:"马踏飞燕",english:"ONE STRIDE BEYOND THE WIND",series:"重器新生",number:"09",category:"青铜奔马 · 一瞬凌风",poem:["把奔跑留在一瞬，","把远方留给想象。"],description:["绕到侧面，看四肢展开的节奏。","再俯身细看，轻盈如何落向足下。"],tags:["侧观奔势","一步生风"],model:{desktop:"/models/galloping-horse-web-desktop.glb",mobile:"/models/galloping-horse-web-mobile.glb",rotationY:-Math.PI/2,roughness:.8,metalness:.12,exposure:1.15},focusTargets:["horsehead","legs","hoof"],anchors:[{label:"昂首的方向",x:-.72,y:.69,copy:"沿头颈的方向看去，比较头部、颈部与躯干之间的转折，让奔跑先有一个方向。"},{label:"四肢的节奏",x:0,y:-.48,copy:"转到侧面，观察四肢的伸展与间隔，再从另一侧比较遮挡关系。"},{label:"足下的飞鸟",x:-.14,y:-1,copy:"把视线落向足下，观察马蹄与鸟形之间的连接，以及它们与上方身躯的关系。"}],welcome:"我是凌风，停在奔跑的一瞬。你可以绕着我转一圈：从昂起的头，到舒展的四肢，再看足下那一点轻巧。今天的你，是想赶路，还是想先在风里歇一会儿？",prompts:["怎样欣赏马踏飞燕的姿态？","为什么要从侧面看奔马？","讲一段关于凌风的故事"],storyTitle:"风经过，奔跑留下",lead:"沿头颈的方向望去，四肢把一个瞬间拉开。再把目光放低，去看马蹄与足下鸟形的关系：向前的动势与落下的支点，在同一件器物里相遇。",tabLabels:["望远方","看奔势","听凌风"],topics:{shape:{kind:"一望 · 向前的方向",brief:"头颈先指向远方，身躯才有了追随的方向。绕过正面，让侧影慢慢展开。",action:"走近头颈 ↗",target:"horsehead",paragraphs:["先从完整轮廓看起。比较头颈与躯干的朝向，再轻轻旋转模型，看看同一姿态在正面与侧面有怎样不同的张力。","这份观看不需要先背下一串名词。留意轮廓在哪里上扬、在哪里收束，看看哪个角度最能让你感到“正在向前”，再把它转回来，与第一次的印象比较。"],excerpt:"先有一个方向，再把身体交给风。"},pattern:{kind:"一步 · 动与静之间",brief:"从四肢的间隔读出奔跑，再顺着马蹄找到足下的鸟形。轻盈不是没有落点，而是让落点成为观看的惊喜。",action:"看看四肢姿态 ↗",target:"legs",paragraphs:["侧面便于观察四肢前后的伸展；转到斜前或斜后方，又能看清原本重叠的轮廓。两个角度连起来，姿态的空间关系才慢慢完整。","继续把目光移向足下，看马蹄与鸟形如何相接。模型适合观察造型关系，但单凭屏幕外观无法推断原器内部结构、重心位置或铸造工序。"],excerpt:"奔跑的方向很远，目光的落点很近。"},craft:{kind:"一阵风 · 凌风的邀请",brief:"故事里的凌风并不催你更快。它说，奔跑也可以只是因为，前面的风很好。",action:"看看足下飞鸟 ↗",target:"hoof",paragraphs:["在为凌风创作的故事里，一个总在赶时间的人问它：“你这样跑，不累吗？”凌风想了一会儿，反问：“如果没有人催，你最想往哪里去？”","那人第一次没有立刻说出答案。凌风便陪他看了一会儿远方：“不急。等你想好了，我们再出发。”原来最自由的一步，不一定最快，却可以由自己决定。"],excerpt:"等你想好了，我们再出发。"}},sourceTitle:"馆方网站 · 甘肃省博物馆",sourceUrl:"https://www.gansumuseum.com/",boundary:"",motto:"不必追赶每一阵风。",identity:"用户提供文件题名为“马踏飞燕”。当前未取得该模型对应的扫描、测量及馆藏登记档案；页面以模型造型的观看引导为主，馆方网站链接仅作进一步查阅入口。凌风及其对话故事为项目创作，不据模型推断具体鸟种、年代、尺寸或铸造工艺。",decorHtml:'<div class="horse-wind"><i></i><i></i><i></i></div><div class="horse-horizon"></div>'}},Ch={"four-ram-zun":{id:"four-ram-zun",theme:"zun",nickname:"肃礼",title:"四羊方尊",english:"FOUR RAMS · BRONZE AND ORDER",series:"重器新生",number:"10",category:"青铜之形 · 方圆有度",poem:["四角守住一方天地，","一束光，照见沉静的力量。"],description:["沿着方形口沿，看向四隅的羊首。","转至斜侧，让器身与纹饰慢慢分开。"],tags:["方器秩序","四隅羊首"],model:{desktop:"/models/four-ram-zun-web-desktop.glb",mobile:"/models/four-ram-zun-web-mobile.glb",rotationY:-Math.PI/4,roughness:.68,metalness:.28,exposure:1.05},focusTargets:["zun-rim","ram","zun-pattern","zun-foot"],anchors:[{label:"方形口沿",x:0,y:1.05,copy:"从斜上方观察开口。方形边线在转动中前后交错，先读清整体的方向。"},{label:"四隅羊首",x:.65,y:.28,copy:"转至一角，让羊首轮廓离开器身背景；比较头部与肩部的衔接。"},{label:"器身纹饰",x:0,y:-.25,copy:"让侧光经过器壁，沿纹样的重复与转折，观察方器表面的层次。"},{label:"器足与承托",x:0,y:-1.03,copy:"向下看器身如何收束，比较上部舒展与下部承托的比例。"}],welcome:"我是肃礼。先别急着读懂每一道纹。绕过一个角，看羊首怎样从器身里迎向你，我们再慢慢聊。",prompts:["我该先看四羊方尊的哪里？","为什么要转到斜侧看？","讲一段肃礼守夜的故事"],storyTitle:"把目光交给四个角",lead:"正面让你看见秩序，斜侧让你看见生命。方形的边线、羊首的曲线和器壁上的纹样，在一次缓慢的转动里，逐渐成为一个整体。",tabLabels:["观方圆","循纹路","听肃礼"],topics:{shape:{kind:"方圆相遇 / 01",brief:"从一个角开始。让羊首的曲线越过方器的边线，立体的关系便清楚起来。",action:"看向四隅羊首 ↗",target:"ram",paragraphs:["先看整体轮廓，再转到斜侧。比较口沿、肩部、器腹和底部的宽窄变化，避免一开始就被细密纹样带走目光。","羊首不是单独悬浮的装饰。观察它与器肩的连接，再把视线移回方形边界，就能读出动物形象与器物结构之间的配合。"],excerpt:"从方形看秩序，从曲线看生气。"},pattern:{kind:"纹样的节奏 / 02",brief:"把模型稍稍转动，让明暗沿器壁移动；凸起、凹陷与重复，会比正面照明更容易辨认。",action:"沿器身看纹路 ↗",target:"zun-pattern",paragraphs:["先找一组重复的线，再看它在哪里转折、在哪里遇见边角。不必给每一道纹立刻命名，观察本身就能建立对器物的认识。","当前呈现来自用户提供的数字模型。贴图中的颜色和表面痕迹可以帮助观看，但不能据此判断青铜原物的成分、锈蚀年代或具体修复经过。"],excerpt:"让光读出起伏，让距离读出整体。"},craft:{kind:"肃礼的守夜 / 03",brief:"“我站得很安静，不是没有话说，是想把四个方向的风都听完。”",action:"回看方形口沿 ↗",target:"zun-rim",paragraphs:["想象展厅熄灯以后，肃礼把四个角当作四扇小窗。第一扇留给风，第二扇留给月亮，第三扇留给尚未讲完的故事。","最后一扇，它留给明天的观众。“你不必懂很多才来见我，”肃礼说，“只要愿意绕过一个角，就会发现新的样子。”"],excerpt:"此段为器物拟人原创故事。"}},sourceTitle:"馆藏资料入口 · 中国国家博物馆",sourceUrl:"https://www.chnmuseum.cn/zp/",boundary:"",motto:"绕过一个角，再认识一次。",identity:"展示名称沿用用户文件“ 四羊方尊.glb ”。模型与馆藏原物的精确对应、比例、尺寸和采集信息尚未核实；昵称“肃礼”与故事为本项目创作。",decorHtml:'<div class="zun-order"><i></i><i></i><i></i><b></b></div>'},"zenghouyi-bells":{id:"zenghouyi-bells",theme:"bells",nickname:"和鸣",title:"曾侯乙编钟",english:"BRONZE BELLS · AN ORDER OF SOUND",series:"重器新生",number:"11",category:"钟架之间 · 静听有序",poem:["把高低排成一行，","让沉默，也有回响。"],description:["先看整组钟架，再走近一枚钟。","在悬挂与间隔之间，读出有序的节奏。"],tags:["整组全景","钟体细看"],model:{desktop:"/models/zenghouyi-bells-web-desktop.glb",mobile:"/models/zenghouyi-bells-web-mobile.glb",rotationY:-Math.PI/2,roughness:.72,metalness:.22,exposure:1.08,distanceDesktop:4.1},focusTargets:["bell-frame","bell-body","bell-hanging"],anchors:[{label:"整组钟架",x:-.46,y:.35,copy:"先把整组收进视野，观察横向展开与上下层次，再选择一枚钟细看。"},{label:"钟体轮廓",x:0,y:-.24,copy:"看一枚钟的轮廓与表面起伏。图像中的大小和颜色不能直接换算成真实音高。"},{label:"悬挂关系",x:.65,y:.06,copy:"沿钟体向上观察悬挂位置，看看钟与支架之间怎样留出空间。"}],welcome:"我是和鸣。今天先不用敲响我。退后一步看整组，再走近一枚钟，安静的排列里也藏着节奏。",prompts:["我该怎样欣赏这组编钟？","能从模型听出音高吗？","讲一段和鸣等待开场的故事"],storyTitle:"未响起的合奏",lead:"整组看，是横向铺开的秩序；走近看，是一枚枚各有轮廓的钟。让目光先远后近，在钟体与钟架之间，完成一次安静的巡游。",tabLabels:["观全景","看悬钟","听和鸣"],topics:{shape:{kind:"先远后近 / 01",brief:"先完整地看见，再选择一个细节。让钟架的横向展开成为这次观看的起点。",action:"看整组钟架 ↗",target:"bell-frame",paragraphs:["这件模型适合横向展开观看。先保留两端的呼吸空间，比较支架与钟体之间的层次，再逐步靠近中央或一侧的钟。","转到斜侧，观察钟体前后的错落与悬挂空间；回到正面，再看钟与钟之间的间隔。两种视角可以互相补充。"],excerpt:"全景看秩序，近景看关系。"},pattern:{kind:"一枚钟的停顿 / 02",brief:"沿着悬挂位置往下看：支架、钟体、空隙，各自占据一个位置，也为彼此留出余地。",action:"走近钟体 ↗",target:"bell-body",paragraphs:["选择一枚轮廓清楚的钟，观察外形、表面起伏以及与相邻钟体的差别，再向上找它的悬挂位置。无需一次把全部细节看完。","这份数字模型没有经过声学测量。当前页面提供视觉观看，不把模型尺寸、颜色或动画转换成原物音高，也不把合成音效当作文物原声。"],excerpt:"看得见的结构，不等于已经测得的声音。"},craft:{kind:"和鸣的开场 / 03",brief:"“最好的开场，也许是大家先安静一会儿，听见彼此还没有发出的声音。”",action:"看看悬挂的位置 ↗",target:"bell-hanging",paragraphs:["想象一个尚未开场的清晨，和鸣正在为风留座。小钟问：“我们什么时候开始？”大钟说：“等最后一位听众找到自己的位置。”","你走进来，脚步轻轻停下。和鸣没有急着响起，只把这片刻的安静交给你。“现在，”它说，“你也在这场合奏里面了。”"],excerpt:"此段为器物拟人原创故事，并非历史演出记录。"}},sourceTitle:"馆方资料入口 · 湖北省博物馆",sourceUrl:"https://www.hbww.org.cn/",boundary:"",motto:"先听见安静，再想象回响。",identity:"展示名称沿用用户文件“曾侯乙编钟.glb”。已确认文件呈现多层钟架与钟体，但模型对应的原物范围、钟数、比例、采集与声学信息尚未核实；不将其视为整套原物的完整复刻。昵称“和鸣”与故事为本项目创作。",decorHtml:'<div class="bells-resonance"><i></i><i></i><i></i><i></i><b></b></div>'}},ds={...Rh,...Ch,[xc.id]:xc,[_c.id]:_c,[vc.id]:vc,...wh,"phoenix-ewer":{id:"phoenix-ewer",theme:"porcelain",nickname:"青花",title:"凤首扁壶",english:"PHOENIX-HEADED EWER",series:"重器新生",number:"01",category:"数字文物 · 青花",poem:["一器青花，藏一只","欲飞的凤凰。"],description:["凤首昂起，卷尾成柄。","双翼轻拢，将花影与风留在瓷上。"],tags:["凤鸟为形","青花为衣"],model:{desktop:"/models/phoenix-web-desktop.glb",mobile:"/models/phoenix-web-mobile.glb",rotationY:-Math.PI/2,roughness:.5,metalness:0,exposure:1.12},focusTargets:["spout","handle","pattern","neck"],anchors:[{label:"凤首壶流",x:-1.03,y:.96,copy:"凤首从壶肩探出，流口随颈部曲线向上延伸。转到侧面，可观察头部与壶腹连接处的起伏。"},{label:"卷曲壶柄",x:1.16,y:.72,copy:"壶柄从肩部卷起，形成通透的环形空间。内卷的末端与凤首相呼应，侧面能看清柄孔及连接位置。"},{label:"青花纹饰",x:-.08,y:-.15,copy:"蓝色纹样沿扁圆壶腹铺展，白瓷底色与青花形成层次。缓慢转动，可比较两侧纹饰与器身曲面的关系。"},{label:"短颈口沿",x:-.1,y:1.12,copy:"短颈从肩部向上收起，口沿略向外展。颈部的几何纹饰与壶腹纹样形成疏密对照。"}],welcome:"你好，我是青花。你看，凤首是我的壶流，卷起的凤尾是我的壶柄。想先听听我的来历，还是看看这一身青花？",prompts:["你来自哪个年代？","为什么叫凤首扁壶？","壶身上画了什么？"],storyTitle:"青花里的故事",lead:"一只凤凰，将飞翔的姿态留在了青花里。昂首是流，卷尾是柄，双翼垂向牡丹丛。从器形到纹饰，再到指间成形的泥，循着三段小故事，走近它的世界。",tabLabels:["看器形","读纹饰","知工艺"],topics:{shape:{kind:"据馆藏资料创作 · 器形 / 01",brief:"一只凤凰收拢双翼，停在了壶上。昂起的头化作壶流，卷起的尾成为壶柄；仿佛只等一双手将它轻轻托起，它便要再次振翅。",action:"定位凤首 ↗",target:"spout",paragraphs:["若把这件元代青花壶看作一只暂歇的凤凰，它的姿态便有了故事：头颈向前探出，尾羽向后回旋，扁圆的身躯把两端轻轻连起。飞翔没有消失，只是被收进一道安静的轮廓。","想象一次缓缓的倾注：手握凤尾，壶身微侧，水从凤首流出。原本遥远的祥禽，忽然与人的动作有了呼应。再将壶放稳，它又停在那里，守着下一次相逢。"],excerpt:"“该壶以昂起的凤首作流” · “以卷起的凤尾作柄”"},pattern:{kind:"据馆藏资料创作 · 纹饰 / 02",brief:"凤凰把双翼垂向壶身两侧，牡丹在下方铺开。青与白之间，像有一阵风经过：花枝轻摇，羽翼将展，一整个春天停在了瓷上。",action:"看看纹饰 ↗",target:"pattern",paragraphs:["目光沿着青花向下走，先遇见凤身，再遇见垂向两侧的双翅，最后落入壶腹下方的牡丹丛。器物的弧面像一卷尚未展尽的画，转过一点，又露出一段花与羽的相逢。","不妨想象，凤凰正从花间掠过。羽尖带起的风尚未散去，花朵还留着摇动的姿态，画面便被留在了瓷面上。你转动壶身时，那场没有画出起点与终点的飞翔，又向前延续了一小段。"],excerpt:"“凤身绘在圆形壶体上部，双翅垂至壶体两侧”"},craft:{kind:"据馆藏资料创作 · 工艺 / 03",brief:"成为凤凰之前，它是等待成形的泥。模制的凤首、手捏的卷柄、雕镶成型的壶身，在匠人的手中相遇，才有了这一身顾盼的姿态。",action:"查看资料出处 ↗",paragraphs:["把目光带回想象中的制瓷作坊：凤首借模具获得轮廓，卷柄在指间捏塑出弧度，扁圆的壶体以雕镶之法成形。各自成形的部分，还像一句话里尚未相连的字，等待着被琢成一个整体。","当凤首与壶肩相接，卷尾与壶身相连，一团泥便有了抬头的神情。匠人的手离开了，手留下的心思却仍在：让出水的地方成为鸟喙，让提握的地方成为凤尾，让一件日用之器，也藏得下一只欲飞的凤凰。"],excerpt:"“壶流采用模制成型，壶柄以手捏塑成型，壶体为雕镶成型法，最后琢成整体。”"}},sourceTitle:"故事取材 · 首都博物馆",sourceUrl:"https://www.capitalmuseum.org.cn/collection/fd9ddca5658f41b8a089c4b8109e3d11",boundary:"景德镇窑青花凤首扁壶 · 元代；文学演绎，非文物经历实录。",motto:"聚微光成器，听青花有声。",identity:"馆藏资料讲述 · 模型为视觉演示；当前模型与指定馆藏的身份对应尚未确证。"},"bronze-head":{id:"bronze-head",theme:"bronze",nickname:"守望",title:"青铜头像",english:"THE BRONZE GAZE",series:"重器新生",number:"02",category:"数字文物 · 青铜",poem:["将未说出口的话，","留在一眼凝望里。"],description:["轮廓在光中显现，锈色层层铺开。","绕过正面，让沉默有了另一种表情。"],tags:["以铜为形","以目相逢"],model:{desktop:"/models/bronze-head-web-desktop.glb",mobile:"/models/bronze-head-web-mobile.glb",rotationY:-Math.PI/2,roughness:.86,metalness:.15,exposure:1.05},focusTargets:["eyes","nose","ears","patina"],anchors:[{label:"眼部轮廓",x:-.45,y:.45,copy:"从正面看眼眶的轮廓，再转过一个角度，观察眼部起伏怎样接住光。"},{label:"鼻梁与面部",x:0,y:0,copy:"鼻梁形成面部中央的纵向转折，侧光让高低起伏更加清楚。"},{label:"耳部结构",x:.85,y:.12,copy:"从正面到侧面，比较耳部与头部的连接和轮廓变化。"},{label:"表面锈色",x:-.4,y:-.65,copy:"深浅色层沿面庞交错铺开。缓缓转动，让光从锈色间走过，看看同一张面孔如何显出不同的晨昏。"}],welcome:"我是守望。名字是你们为我取的，凝望却是我的模样。先靠近一点，看看我的眼睛；也可以问我，青铜头像为什么如此令人难忘。",prompts:["你想让我先看哪里？","三星堆的青铜头像有什么特点？","讲一段关于凝望的小故事"],storyTitle:"凝望里的故事",lead:"从一道眼眶的起伏，到一片深浅交错的锈色，头像的表情在光里缓缓变化。你向左一步，它便显出另一副神情；你停下来，凝望才真正开始。",tabLabels:["观其貌","读锈色","听回响"],topics:{shape:{kind:"器形观察 · 文学演绎 / 01",brief:"它不急着说话。眉眼与鼻梁把光分成了几道，面庞的轮廓便从暗处浮现。你转动它，刚才还沉在阴影里的地方，又悄悄亮了起来。",action:"靠近眼部 ↗",target:"eyes",paragraphs:["把它想作一位安静的守望者：目光停在前方，话语藏在轮廓之中。你靠近时，不必先猜它的身份，先看看光如何经过眼眶、鼻梁和两侧的耳部。","展厅渐渐安静下来，最后一道光落在眼角。若沉默也有声音，那大概就是有人停下脚步时，一句轻轻的“原来你在这里”。"],excerpt:"相关类型参考：官方条目形容另一件青铜人头像“造型简洁明快，线条分明”。"},pattern:{kind:"表面观察 · 文学演绎 / 02",brief:"锈色像一幅没有题字的地图。深处收住光，浅处泛起微亮。沿着斑驳慢慢看，不必急着给每一道痕迹取一个年代。",action:"看看表面 ↗",target:"patina",paragraphs:["想象微光沿着额头落下，在面庞的凹凸间停驻。颜色并不整齐，也正因为不整齐，一张沉默的面孔有了更丰富的层次。","若把深色想成夜，把浅色想成微明，那么这张面孔便有自己的晨昏。你转动它，微光沿鼻梁走过，像一次不必说出姓名的相逢。"],excerpt:"微光沿鼻梁走过，像一次不必说出姓名的相逢。"},craft:{kind:"相关文物 · 类型参照 / 03",brief:"三星堆的青铜人头像给我们另一种看人的方式：面孔可以由鲜明的线条组成，神情也可以藏在简练的起伏里。先看清每一件的不同，再去想象古人的创造。",action:"查看相关文物资料 ↗",paragraphs:["四川省文物局收录的“青铜人头像（2）”，来源标注为三星堆博物馆，记载其为商代青铜器，头顶较圆、面部戴有面罩，头顶盖与颅腔分铸。","沿着眉眼与鼻梁看去，鲜明的线条将一张面孔留在青铜里。目光跨过漫长的时间，仍能让今天的观看者停下脚步。"],excerpt:"“该人头像头顶较圆，面部戴有面罩，头顶盖和颅腔分铸。”"}},sourceTitle:"相关类型资料 · 四川省文物局 / 三星堆博物馆",sourceUrl:"https://wwj.sc.gov.cn/scwwj/sdai/2020/10/30/d3e376d89f384e418e62cbc06a3b2bb4.shtml",boundary:"参考条目与当前模型尚未建立身份对应；观察故事为文学演绎。",motto:"以一眼凝望，遇见无声的回响。",identity:"使用用户提供的青铜头雕模型。具体馆藏名称、年代与出土信息尚待确认；三星堆资料只作相关类型参考。"}};function Ph(i=""){const e=new URLSearchParams(i).get("artifact")||"phoenix-ewer";return Object.hasOwn(ds,e)?ds[e]:null}function Lh(i,e){const t=document.createElement("div");t.className="artifact-picker";const n=document.createElement("button");n.id="artifact-select",n.type="button",n.setAttribute("aria-label",`切换文物，当前为${i.title}`),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-controls","artifact-directory");const s=document.createElement("span");s.textContent=i.title;const r=document.createElement("i");r.setAttribute("aria-hidden","true"),n.append(s,r);const a=document.createElement("nav");a.id="artifact-directory",a.className="artifact-directory",a.setAttribute("aria-label","藏品目录"),a.hidden=!0;const o=Object.values(e).sort((b,m)=>b.number.localeCompare(m.number)),c=document.createElement("div");c.className="artifact-directory-heading";const l=document.createElement("span");l.textContent="藏品目录";const u=document.createElement("small");u.textContent=`${String(o.length).padStart(2,"0")} 件珍藏`,c.append(l,u);const h=document.createElement("div");h.className="artifact-directory-list";const d=o.map(b=>{const m=document.createElement("a");m.className="artifact-directory-item";const p=new URL(location.href);p.searchParams.set("artifact",b.id),p.searchParams.delete("checkin"),m.href=p.href,b.id===i.id&&m.setAttribute("aria-current","page");const v=document.createElement("img");v.src=`/images/checkin/portraits/${encodeURIComponent(b.id)}.webp`,v.alt="",v.loading="lazy",v.decoding="async";const M=document.createElement("span");M.className="artifact-directory-copy";const _=document.createElement("strong");_.textContent=b.title;const R=document.createElement("small");R.textContent=`${b.number} / ${b.nickname}`,M.append(_,R);const T=document.createElement("span");return T.className="artifact-directory-marker",T.textContent=b.id===i.id?"当前":"↗",m.append(v,M,T),m.addEventListener("click",w=>{var P;b.id===i.id&&!w.ctrlKey&&!w.metaKey&&!w.shiftKey&&!w.altKey&&(w.preventDefault(),(P=document.querySelector('button[data-mode="view"]'))==null||P.click(),f(!0))}),h.append(m),m});a.append(c,h),t.append(n,a);function f(b=!1){a.hidden=!0,n.setAttribute("aria-expanded","false"),b&&n.focus()}function g(b=!1){a.hidden=!1,n.setAttribute("aria-expanded","true"),b&&(d.find(m=>m.hasAttribute("aria-current"))||d[0]).focus()}return n.addEventListener("click",()=>a.hidden?g():f()),n.addEventListener("keydown",b=>{["ArrowDown","ArrowUp"].includes(b.key)&&(b.preventDefault(),b.stopPropagation(),g(!0))}),t.addEventListener("keydown",b=>{if(a.hidden)return;if(b.key==="Escape"){b.preventDefault(),b.stopPropagation(),f(!0);return}const m=d.indexOf(document.activeElement);if(m<0)return;let p;if(b.key==="ArrowDown")p=(m+1)%d.length;else if(b.key==="ArrowUp")p=(m+d.length-1)%d.length;else if(b.key==="Home")p=0;else if(b.key==="End")p=d.length-1;else return;b.preventDefault(),d[p].focus()}),document.addEventListener("pointerdown",b=>{t.contains(b.target)||f()}),document.addEventListener("focusin",b=>{t.contains(b.target)||f()}),t}function Ih(i,e,t=!1){const n=d=>document.querySelector(d),s=(d,f)=>{n(d).textContent=f};n("#experience").dataset.theme=i.theme,document.title=`重器新生 · ${i.title}`;const r=n("h1"),a=document.createElement("span");a.textContent=i.english,a.setAttribute("translate","no");const o=(i.titleLines||[i.title]).flatMap((d,f)=>f?[document.createElement("br"),document.createTextNode(d)]:[document.createTextNode(d)]);r.replaceChildren(...o,a),n(".brand").href=location.href,s(".collection-number",i.number);const c=n(".introduction .eyebrow");c.lastChild.textContent=" "+i.category;const l=document.createElement("span");l.textContent=i.poem[1],n(".hero-poem").replaceChildren(document.createTextNode(i.poem[0]),l),n(".hero-description").replaceChildren(document.createTextNode(i.description[0]),document.createElement("br"),document.createTextNode(i.description[1])),n(".hero-tags").querySelectorAll("span").forEach((d,f)=>d.textContent=i.tags[f]),n("#stage").setAttribute("aria-label",`可旋转的${i.title}三维模型`),s("#story-title",i.storyTitle),s(".guide-lead",i.lead),s(".guide-motto",i.motto),s("#story-panel .panel-heading .eyebrow",`${i.nickname} · 慢慢道来`),document.querySelectorAll("[data-guide]").forEach((d,f)=>d.textContent=i.tabLabels[f]),s(".guide-source>span",i.sourceTitle),n("#guide-source-link").href=i.sourceUrl,n(".guide-boundary").remove(),s(".bottom-line>span:first-child",`${i.series.replaceAll(" ","")} / A DIGITAL REIMAGINING`),s("#info h2",`重器新生 · ${i.title}`),s("#info>p:not(.eyebrow):not(.info-note)",i.lead);const h=n("#info").querySelectorAll("dd");if(h[0].textContent=`${i.title} · ${i.nickname}`,h[2].textContent="微光汇聚，器物显形。点击底部“微光演绎”，观看光粒消散与重新成形。",n(".header-actions").prepend(Lh(i,e)),i.decorHtml){const d=document.createElement("div");d.className="exhibit-decor",d.setAttribute("aria-hidden","true"),d.innerHTML=i.decorHtml,n(".atmosphere").append(d)}if(i.flip){const d=document.createElement("button");d.id="mirror-flip",d.textContent="翻面",d.disabled=!0,d.setAttribute("aria-label","翻看铜镜另一面"),n(".view-tools").prepend(d)}if(["mirror","stone"].includes(i.theme)){const d=document.createElement("div");d.className=i.theme==="mirror"?"mirror-orbits":"stone-light",d.setAttribute("aria-hidden","true"),d.innerHTML=i.theme==="mirror"?"<i></i><i></i><i></i><b></b><span></span>":"<i></i><i></i><i></i><b></b>",n(".atmosphere").append(d)}if(t){const d=document.createElement("p");d.className="artifact-notice",d.setAttribute("role","status"),d.textContent="未找到指定文物，已显示凤首扁壶。",n("#experience").append(d)}if(i.theme==="bronze"){const d=document.createElement("div");d.className="bronze-orbit",d.innerHTML="<i></i><i></i><i></i><b></b>";const f=document.createElement("div");f.className="bronze-beam",n(".atmosphere").append(d,f)}}const yc=i=>Math.max(0,Math.min(1,i));class Dh{constructor(e=!1){this.reduced=e,this.formDuration=2.5,this.state="dormant",this.progress=0,this.elapsed=0,this.visualTime=0}get busy(){return this.state==="forming"||this.state==="dissolving"}present(){this.state="formed",this.progress=1,this.elapsed=0}form(){return this.state!=="dormant"?!1:(this.elapsed=0,this.state=this.reduced?"formed":"forming",this.progress=this.reduced?1:0,!0)}toggle(){return this.busy?!1:this.state==="dormant"?this.form():(this.elapsed=0,this.state=this.reduced?"dormant":"dissolving",this.progress=this.reduced?0:1,!0)}tick(e){const t=Math.max(0,Number.isFinite(e)?e:0);if(this.reduced||(this.visualTime+=t),this.busy){this.elapsed+=t;const n=this.state==="forming",s=yc(this.elapsed/(n?this.formDuration:1.8)),r=s*s*(3-2*s);this.progress=n?r:1-r,s===1&&(this.state=n?"formed":"dormant")}return{assembly:this.progress,reveal:yc((this.progress-.38)/.62),dissolve:0}}}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="180",Ni={ROTATE:0,DOLLY:1,PAN:2},Pi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nh=0,Mc=1,Uh=2,Eu=1,Fh=2,wn=3,In=0,It=1,mn=2,Wn=0,ai=1,Sc=2,Ec=3,Tc=4,kh=5,ii=100,Oh=101,Bh=102,zh=103,Hh=104,Gh=200,Vh=201,Wh=202,jh=203,Ua=204,Fa=205,qh=206,Xh=207,Yh=208,Kh=209,Jh=210,$h=211,Zh=212,Qh=213,ed=214,ka=0,Oa=1,Ba=2,ki=3,za=4,Ha=5,Ga=6,Va=7,Bo=0,td=1,nd=2,jn=0,id=1,sd=2,rd=3,Tu=4,ad=5,od=6,cd=7,Ac="attached",ld="detached",Au=300,Oi=301,Bi=302,Wa=303,ja=304,xr=306,zi=1e3,Vn=1001,pr=1002,Dt=1003,wu=1004,ls=1005,Gt=1006,cr=1007,Rn=1008,bn=1009,Ru=1010,Cu=1011,_s=1012,zo=1013,oi=1014,tn=1015,ws=1016,Ho=1017,Go=1018,vs=1020,Pu=35902,Lu=35899,Iu=1021,Du=1022,Yt=1023,xs=1026,ys=1027,Vo=1028,Wo=1029,Nu=1030,jo=1031,qo=1033,lr=33776,ur=33777,hr=33778,dr=33779,qa=35840,Xa=35841,Ya=35842,Ka=35843,Ja=36196,$a=37492,Za=37496,Qa=37808,eo=37809,to=37810,no=37811,io=37812,so=37813,ro=37814,ao=37815,oo=37816,co=37817,lo=37818,uo=37819,ho=37820,fo=37821,po=36492,mo=36494,go=36495,bo=36283,_o=36284,vo=36285,xo=36286,Uu=2200,ud=2201,hd=2202,Ms=2300,Ss=2301,Tr=2302,Li=2400,Ii=2401,mr=2402,Xo=2500,dd=2501,fd=0,Fu=1,yo=2,pd=3200,md=3201,Yo=0,gd=1,Gn="",Et="srgb",Nt="srgb-linear",gr="linear",st="srgb",di=7680,wc=519,bd=512,_d=513,vd=514,ku=515,xd=516,yd=517,Md=518,Sd=519,Mo=35044,Rc="300 es",gn=2e3,br=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cc=1234567;const fs=Math.PI/180,Hi=180/Math.PI;function sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Xe(i,e,t){return Math.max(e,Math.min(t,i))}function Ko(i,e){return(i%e+e)%e}function Ed(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Td(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function Ad(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function wd(i,e=1){return e-Math.abs(Ko(i,e*2)-e)}function Rd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Cd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Ld(i,e){return i+Math.random()*(e-i)}function Id(i){return i*(.5-Math.random())}function Dd(i){i!==void 0&&(Cc=i);let e=Cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nd(i){return i*fs}function Ud(i){return i*Hi}function Fd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Od(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bd(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ms={DEG2RAD:fs,RAD2DEG:Hi,generateUUID:sn,clamp:Xe,euclideanModulo:Ko,mapLinear:Ed,inverseLerp:Td,lerp:ps,damp:Ad,pingpong:wd,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Ld,randFloatSpread:Id,seededRandom:Dd,degToRad:Nd,radToDeg:Ud,isPowerOfTwo:Fd,ceilPowerOfTwo:kd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:Bd,normalize:nt,denormalize:Qt};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[a+0],f=r[a+1],g=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=b;return}if(h!==b||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*b,v=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),T=Math.atan2(R,p*v);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}const _=o*v;if(c=c*m+d*_,l=l*m+f*_,u=u*m+g*_,h=h*m+b*_,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Xe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new F,Pc=new Vt;class We{constructor(e,t,n,s,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],b=s[0],m=s[3],p=s[6],v=s[1],M=s[4],_=s[7],R=s[2],T=s[5],w=s[8];return r[0]=a*b+o*v+c*R,r[3]=a*m+o*M+c*T,r[6]=a*p+o*_+c*w,r[1]=l*b+u*v+h*R,r[4]=l*m+u*M+h*T,r[7]=l*p+u*_+h*w,r[2]=d*b+f*v+g*R,r[5]=d*m+f*M+g*T,r[8]=d*p+f*_+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=h*b,e[1]=(s*l-u*n)*b,e[2]=(o*n-s*a)*b,e[3]=d*b,e[4]=(u*t-s*c)*b,e[5]=(s*r-o*t)*b,e[6]=f*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(wr.makeScale(e,t)),this}rotate(e){return this.premultiply(wr.makeRotation(-e)),this}translate(e,t){return this.premultiply(wr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new We;function Ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){const i=Es("canvas");return i.style.display="block",i}const Lc={};function Ts(i){i in Lc||(Lc[i]=!0,console.warn(i))}function Hd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Ic=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dc=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gd(){const i={enabled:!0,workingColorSpace:Nt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===st&&(s.r=Pn(s.r),s.g=Pn(s.g),s.b=Pn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(s.r=Ui(s.r),s.g=Ui(s.g),s.b=Ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Gn?gr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ts("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Nt]:{primaries:e,whitePoint:n,transfer:gr,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Et},outputColorSpaceConfig:{drawingBufferColorSpace:Et}},[Et]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Ic,fromXYZ:Dc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Et}}}),i}const Je=Gd();function Pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let fi;class Vd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fi===void 0&&(fi=Es("canvas")),fi.width=e.width,fi.height=e.height;const s=fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pn(t[n]/255)*255):t[n]=Pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wd=0;class Jo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=sn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Rr(s[a].image)):r.push(Rr(s[a]))}else r=Rr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Rr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;const Cr=new F;class Tt extends qn{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,n=Vn,s=Vn,r=Gt,a=Rn,o=Yt,c=bn,l=Tt.DEFAULT_ANISOTROPY,u=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=sn(),this.name="",this.source=new Jo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cr).x}get height(){return this.source.getSize(Cr).y}get depth(){return this.source.getSize(Cr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zi:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zi:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Au;Tt.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,n=0,s=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],b=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,_=(f+1)/2,R=(p+1)/2,T=(u+d)/4,w=(h+b)/4,P=(g+m)/4;return M>_&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=w/n):_>R?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-b)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Xe(this.x,e.x,t.x),this.y=Xe(this.y,e.y,t.y),this.z=Xe(this.z,e.z,t.z),this.w=Xe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Xe(this.x,e,t),this.y=Xe(this.y,e,t),this.z=Xe(this.z,e,t),this.w=Xe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Tt(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends qd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bu extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xd extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class on{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(r,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Is.copy(n.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Ds.subVectors(this.max,Qi),pi.subVectors(e.a,Qi),mi.subVectors(e.b,Qi),gi.subVectors(e.c,Qi),Dn.subVectors(mi,pi),Nn.subVectors(gi,mi),Kn.subVectors(pi,gi);let t=[0,-Dn.z,Dn.y,0,-Nn.z,Nn.y,0,-Kn.z,Kn.y,Dn.z,0,-Dn.x,Nn.z,0,-Nn.x,Kn.z,0,-Kn.x,-Dn.y,Dn.x,0,-Nn.y,Nn.x,0,-Kn.y,Kn.x,0];return!Pr(t,pi,mi,gi,Ds)||(t=[1,0,0,0,1,0,0,0,1],!Pr(t,pi,mi,gi,Ds))?!1:(Ns.crossVectors(Dn,Nn),t=[Ns.x,Ns.y,Ns.z],Pr(t,pi,mi,gi,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new F,new F,new F,new F,new F,new F,new F,new F],Kt=new F,Is=new on,pi=new F,mi=new F,gi=new F,Dn=new F,Nn=new F,Kn=new F,Qi=new F,Ds=new F,Ns=new F,Jn=new F;function Pr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Jn.fromArray(i,r);const o=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),c=e.dot(Jn),l=t.dot(Jn),u=n.dot(Jn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Yd=new on,es=new F,Lr=new F;class cn{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(es,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Lr)),this.expandByPoint(es.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Mn=new F,Ir=new F,Us=new F,Un=new F,Dr=new F,Fs=new F,Nr=new F;class qi{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ir.copy(e).add(t).multiplyScalar(.5),Us.copy(t).sub(e).normalize(),Un.copy(this.origin).sub(Ir);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Us),o=Un.dot(this.direction),c=-Un.dot(Us),l=Un.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const b=1/u;h*=b,d*=b,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ir).addScaledVector(Us,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,s,r){Dr.subVectors(t,e),Fs.subVectors(n,e),Nr.crossVectors(Dr,Fs);let a=this.direction.dot(Nr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Un.subVectors(this.origin,e);const c=o*this.direction.dot(Fs.crossVectors(Un,Fs));if(c<0)return null;const l=o*this.direction.dot(Dr.cross(Un));if(l<0||c+l>a)return null;const u=-o*Un.dot(Nr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class je{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m){je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,g,b,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new je().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/bi.setFromMatrixColumn(e,0).length(),r=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-b*l,t[9]=-o*c,t[2]=b-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d+b*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=b+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,b=l*h;t[0]=d-b*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=b-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,b=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+b,t[1]=c*h,t[5]=b*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=b-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-b*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+b,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=b*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kd,e,Jd)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Fn.crossVectors(n,zt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Fn.crossVectors(n,zt)),Fn.normalize(),ks.crossVectors(zt,Fn),s[0]=Fn.x,s[4]=ks.x,s[8]=zt.x,s[1]=Fn.y,s[5]=ks.y,s[9]=zt.y,s[2]=Fn.z,s[6]=ks.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],b=n[6],m=n[10],p=n[14],v=n[3],M=n[7],_=n[11],R=n[15],T=s[0],w=s[4],P=s[8],x=s[12],y=s[1],C=s[5],I=s[9],U=s[13],N=s[2],W=s[6],q=s[10],te=s[14],V=s[3],re=s[7],de=s[11],xe=s[15];return r[0]=a*T+o*y+c*N+l*V,r[4]=a*w+o*C+c*W+l*re,r[8]=a*P+o*I+c*q+l*de,r[12]=a*x+o*U+c*te+l*xe,r[1]=u*T+h*y+d*N+f*V,r[5]=u*w+h*C+d*W+f*re,r[9]=u*P+h*I+d*q+f*de,r[13]=u*x+h*U+d*te+f*xe,r[2]=g*T+b*y+m*N+p*V,r[6]=g*w+b*C+m*W+p*re,r[10]=g*P+b*I+m*q+p*de,r[14]=g*x+b*U+m*te+p*xe,r[3]=v*T+M*y+_*N+R*V,r[7]=v*w+M*C+_*W+R*re,r[11]=v*P+M*I+_*q+R*de,r[15]=v*x+M*U+_*te+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],b=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+b*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+m*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],b=e[13],m=e[14],p=e[15],v=h*m*l-b*d*l+b*c*f-o*m*f-h*c*p+o*d*p,M=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,_=u*b*l-g*h*l+g*o*f-a*b*f-u*o*p+a*h*p,R=g*h*c-u*b*c-g*o*d+a*b*d+u*o*m-a*h*m,T=t*v+n*M+s*_+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=v*w,e[1]=(b*d*r-h*m*r-b*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(o*m*r-b*c*r+b*s*l-n*m*l-o*s*p+n*c*p)*w,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*w,e[4]=M*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*w,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*w,e[8]=_*w,e[9]=(g*h*r-u*b*r-g*n*f+t*b*f+u*n*p-t*h*p)*w,e[10]=(a*b*r-g*o*r+g*n*l-t*b*l-a*n*p+t*o*p)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*w,e[12]=R*w,e[13]=(u*b*s-g*h*s+g*n*d-t*b*d-u*n*m+t*h*m)*w,e[14]=(g*o*s-a*b*s-g*n*c+t*b*c+a*n*m-t*o*m)*w,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,b=a*u,m=a*h,p=o*h,v=c*l,M=c*u,_=c*h,R=n.x,T=n.y,w=n.z;return s[0]=(1-(b+p))*R,s[1]=(f+_)*R,s[2]=(g-M)*R,s[3]=0,s[4]=(f-_)*T,s[5]=(1-(d+p))*T,s[6]=(m+v)*T,s[7]=0,s[8]=(g+M)*w,s[9]=(m-v)*w,s[10]=(1-(d+b))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=bi.set(s[0],s[1],s[2]).length();const a=bi.set(s[4],s[5],s[6]).length(),o=bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jt.copy(this);const l=1/r,u=1/a,h=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let g,b;if(c)g=r/(a-r),b=a*r/(a-r);else if(o===gn)g=-(a+r)/(a-r),b=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),b=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let g,b;if(c)g=1/(a-r),b=a/(a-r);else if(o===gn)g=-2/(a-r),b=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),b=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const bi=new F,Jt=new je,Kd=new F(0,0,0),Jd=new F(1,1,1),Fn=new F,ks=new F,zt=new F,Nc=new je,Uc=new Vt;class an{constructor(e=0,t=0,n=0,s=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Uc.setFromEuler(this),this.setFromQuaternion(Uc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $d=0;const Fc=new F,_i=new Vt,Sn=new je,Os=new F,ts=new F,Zd=new F,Qd=new Vt,kc=new F(1,0,0),Oc=new F(0,1,0),Bc=new F(0,0,1),zc={type:"added"},ef={type:"removed"},vi={type:"childadded",child:null},Ur={type:"childremoved",child:null};class ut extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ut.DEFAULT_UP.clone();const e=new F,t=new an,n=new Vt,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new je},normalMatrix:{value:new We}}),this.matrix=new je,this.matrixWorld=new je,this.matrixAutoUpdate=ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(kc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Fc.copy(e).applyQuaternion(this.quaternion),this.position.add(Fc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Os.copy(e):Os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(ts,Os,this.up):Sn.lookAt(Os,ts,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),_i.setFromRotationMatrix(Sn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zc),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zc),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,Zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,Qd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ut.DEFAULT_UP=new F(0,1,0);ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new F,En=new F,Fr=new F,Tn=new F,xi=new F,yi=new F,Hc=new F,kr=new F,Or=new F,Br=new F,zr=new Ze,Hr=new Ze,Gr=new Ze;class en{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$t.subVectors(e,t),s.cross($t);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$t.subVectors(s,t),En.subVectors(n,t),Fr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(En),c=$t.dot(Fr),l=En.dot(En),u=En.dot(Fr),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return zr.setScalar(0),Hr.setScalar(0),Gr.setScalar(0),zr.fromBufferAttribute(e,t),Hr.fromBufferAttribute(e,n),Gr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(zr,r.x),a.addScaledVector(Hr,r.y),a.addScaledVector(Gr,r.z),a}static isFrontFacing(e,t,n,s){return $t.subVectors(n,t),En.subVectors(e,t),$t.cross(En).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),En.subVectors(this.a,this.b),$t.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;xi.subVectors(s,n),yi.subVectors(r,n),kr.subVectors(e,n);const c=xi.dot(kr),l=yi.dot(kr);if(c<=0&&l<=0)return t.copy(n);Or.subVectors(e,s);const u=xi.dot(Or),h=yi.dot(Or);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(xi,a);Br.subVectors(e,r);const f=xi.dot(Br),g=yi.dot(Br);if(g>=0&&f<=g)return t.copy(r);const b=f*l-c*g;if(b<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(yi,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Hc.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Hc,o);const p=1/(m+b+d);return a=b*p,o=d*p,t.copy(n).addScaledVector(xi,a).addScaledVector(yi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Bs={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Et){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=Ko(e,1),t=Xe(t,0,1),n=Xe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Vr(a,r,e+1/3),this.g=Vr(a,r,e),this.b=Vr(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,t=Et){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Et){const n=zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pn(e.r),this.g=Pn(e.g),this.b=Pn(e.b),this}copyLinearToSRGB(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Et){return Je.workingToColorSpace(wt.copy(this),e),Math.round(Xe(wt.r*255,0,255))*65536+Math.round(Xe(wt.g*255,0,255))*256+Math.round(Xe(wt.b*255,0,255))}getHexString(e=Et){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(wt.copy(this),t);const n=wt.r,s=wt.g,r=wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Et){Je.workingToColorSpace(wt.copy(this),e);const t=wt.r,n=wt.g,s=wt.b;return e!==Et?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(kn),this.setHSL(kn.h+e,kn.s+t,kn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(kn),e.getHSL(Bs);const n=ps(kn.h,Bs.h,t),s=ps(kn.s,Bs.s,t),r=ps(kn.l,Bs.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wt=new He;He.NAMES=zu;let tf=0;class rn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=sn(),this.name="",this.type="Material",this.blending=ai,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ua,this.blendDst=Fa,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ai&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ua&&(n.blendSrc=this.blendSrc),this.blendDst!==Fa&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ri extends rn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new F,zs=new Oe;let nf=0;class gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mo,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zs.fromBufferAttribute(this,t),zs.applyMatrix3(e),this.setXY(t,zs.x,zs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qt(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qt(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qt(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mo&&(e.usage=this.usage),e}}class Hu extends gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gu extends gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ln extends gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sf=0;const qt=new je,Wr=new ut,Mi=new F,Ht=new on,ns=new on,St=new F;class kt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=sn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Gu:Hu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,n){return qt.makeTranslation(e,t,n),this.applyMatrix4(qt),this}scale(e,t,n){return qt.makeScale(e,t,n),this.applyMatrix4(qt),this}lookAt(e){return Wr.lookAt(e),Wr.updateMatrix(),this.applyMatrix4(Wr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ln(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ht.setFromBufferAttribute(r),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ht.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ht.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ht.min),this.boundingBox.expandByPoint(Ht.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Ht.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(St.addVectors(Ht.min,ns.min),Ht.expandByPoint(St),St.addVectors(Ht.max,ns.max),Ht.expandByPoint(St)):(Ht.expandByPoint(ns.min),Ht.expandByPoint(ns.max))}Ht.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)St.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(St));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)St.fromBufferAttribute(o,l),c&&(Mi.fromBufferAttribute(e,l),St.add(Mi)),s=Math.max(s,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new F,c[P]=new F;const l=new F,u=new F,h=new F,d=new Oe,f=new Oe,g=new Oe,b=new F,m=new F;function p(P,x,y){l.fromBufferAttribute(n,P),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,x),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(C),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(C),o[P].add(b),o[x].add(b),o[y].add(b),c[P].add(m),c[x].add(m),c[y].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,x=v.length;P<x;++P){const y=v[P],C=y.start,I=y.count;for(let U=C,N=C+I;U<N;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new F,_=new F,R=new F,T=new F;function w(P){R.fromBufferAttribute(s,P),T.copy(R);const x=o[P];M.copy(x),M.sub(R.multiplyScalar(R.dot(x))).normalize(),_.crossVectors(T,x);const C=_.dot(c[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,C)}for(let P=0,x=v.length;P<x;++P){const y=v[P],C=y.start,I=y.count;for(let U=C,N=C+I;U<N;U+=3)w(e.getX(U+0)),w(e.getX(U+1)),w(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),b=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?f=c[b]*o.data.stride+o.offset:f=c[b]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gc=new je,$n=new qi,Hs=new cn,Vc=new F,Gs=new F,Vs=new F,Ws=new F,jr=new F,js=new F,Wc=new F,qs=new F;class dt extends ut{constructor(e=new kt,t=new ri){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){js.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(jr.fromBufferAttribute(h,e),a?js.addScaledVector(jr,u):js.addScaledVector(jr.sub(t),u))}t.add(js)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Hs.copy(n.boundingSphere),Hs.applyMatrix4(r),$n.copy(e.ray).recast(e.near),!(Hs.containsPoint($n.origin)===!1&&($n.intersectSphere(Hs,Vc)===null||$n.origin.distanceToSquared(Vc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),$n.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$n)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,R=M;_<R;_+=3){const T=o.getX(_),w=o.getX(_+1),P=o.getX(_+2);s=Xs(this,p,e,n,l,u,h,T,w,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),b=Math.min(o.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const v=o.getX(m),M=o.getX(m+1),_=o.getX(m+2);s=Xs(this,a,e,n,l,u,h,v,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,b=d.length;g<b;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let _=v,R=M;_<R;_+=3){const T=_,w=_+1,P=_+2;s=Xs(this,p,e,n,l,u,h,T,w,P),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),b=Math.min(c.count,f.start+f.count);for(let m=g,p=b;m<p;m+=3){const v=m,M=m+1,_=m+2;s=Xs(this,a,e,n,l,u,h,v,M,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function rf(i,e,t,n,s,r,a,o){let c;if(e.side===It?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===In,o),c===null)return null;qs.copy(o),qs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(qs);return l<t.near||l>t.far?null:{distance:l,point:qs.clone(),object:i}}function Xs(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Gs),i.getVertexPosition(c,Vs),i.getVertexPosition(l,Ws);const u=rf(i,e,t,n,Gs,Vs,Ws,Wc);if(u){const h=new F;en.getBarycoord(Wc,Gs,Vs,Ws,h),s&&(u.uv=en.getInterpolatedAttribute(s,o,c,l,h,new Oe)),r&&(u.uv1=en.getInterpolatedAttribute(r,o,c,l,h,new Oe)),a&&(u.normal=en.getInterpolatedAttribute(a,o,c,l,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};en.getNormal(Gs,Vs,Ws,d.normal),u.face=d,u.barycoord=h}return u}class Xi extends kt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ln(l,3)),this.setAttribute("normal",new Ln(u,3)),this.setAttribute("uv",new Ln(h,2));function g(b,m,p,v,M,_,R,T,w,P,x){const y=_/w,C=R/P,I=_/2,U=R/2,N=T/2,W=w+1,q=P+1;let te=0,V=0;const re=new F;for(let de=0;de<q;de++){const xe=de*C-U;for(let we=0;we<W;we++){const Ve=we*y-I;re[b]=Ve*v,re[m]=xe*M,re[p]=N,l.push(re.x,re.y,re.z),re[b]=0,re[m]=0,re[p]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(we/w),h.push(1-de/P),te+=1}}for(let de=0;de<P;de++)for(let xe=0;xe<w;xe++){const we=d+xe+W*de,Ve=d+xe+W*(de+1),Be=d+(xe+1)+W*(de+1),Ue=d+(xe+1)+W*de;c.push(we,Ve,Ue),c.push(Ve,Be,Ue),V+=6}o.addGroup(f,V,x),f+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Lt(i){const e={};for(let t=0;t<i.length;t++){const n=Gi(i[t]);for(const s in n)e[s]=n[s]}return e}function af(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const of={clone:Gi,merge:Lt};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends rn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Wu extends ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new je,this.projectionMatrix=new je,this.projectionMatrixInverse=new je,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new F,jc=new Oe,qc=new Oe;class Rt extends Wu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hi*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,jc,qc),t.subVectors(qc,jc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Ei=1;class uf extends ut{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rt(Si,Ei,e,t);s.layers=this.layers,this.add(s);const r=new Rt(Si,Ei,e,t);r.layers=this.layers,this.add(r);const a=new Rt(Si,Ei,e,t);a.layers=this.layers,this.add(a);const o=new Rt(Si,Ei,e,t);o.layers=this.layers,this.add(o);const c=new Rt(Si,Ei,e,t);c.layers=this.layers,this.add(c);const l=new Rt(Si,Ei,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ju extends Tt{constructor(e=[],t=Oi,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hf extends ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ju(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xi(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:It,blending:Wn});r.uniforms.tEquirect.value=t;const a=new dt(s,r),o=t.minFilter;return t.minFilter===Rn&&(t.minFilter=Gt),new uf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class nn extends ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const df={type:"move"};class qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),p=this._getHandJoint(l,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(df)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class So extends ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ff{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mo,this.updateRanges=[],this.version=0,this.uuid=sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pt=new F;class Zo{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Qt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=nt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),n=nt(n,this.array),s=nt(s,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xc=new F,Yc=new Ze,Kc=new Ze,pf=new F,Jc=new je,Ys=new F,Xr=new cn,$c=new je,Yr=new qi;class mf extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ac,this.bindMatrix=new je,this.bindMatrixInverse=new je,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingBox.expandByPoint(Ys)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ys),this.boundingSphere.expandByPoint(Ys)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(s),e.ray.intersectsSphere(Xr)!==!1&&($c.copy(s).invert(),Yr.copy(e.ray).applyMatrix4($c),!(this.boundingBox!==null&&Yr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ac?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ld?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Yc.fromBufferAttribute(s.attributes.skinIndex,e),Kc.fromBufferAttribute(s.attributes.skinWeight,e),Xc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Kc.getComponent(r);if(a!==0){const o=Yc.getComponent(r);Jc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(pf.copy(Xc).applyMatrix4(Jc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class qu extends ut{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qo extends Tt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Dt,u=Dt,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zc=new je,gf=new je;class ec{constructor(e=[],t=[]){this.uuid=sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new je)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new je;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:gf;Zc.multiplyMatrices(o,t[r]),Zc.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new ec(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qo(t,e,e,Yt,tn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new qu),this.bones.push(a),this.boneInverses.push(new je().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Eo extends gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ti=new je,Qc=new je,Ks=[],el=new on,bf=new je,is=new dt,ss=new cn;class Xu extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Eo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,bf)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),el.copy(e.boundingBox).applyMatrix4(Ti),this.boundingBox.union(el)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ti),ss.copy(e.boundingSphere).applyMatrix4(Ti),this.boundingSphere.union(ss)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(is.geometry=this.geometry,is.material=this.material,is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ss.copy(this.boundingSphere),ss.applyMatrix4(n),e.ray.intersectsSphere(ss)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ti),Qc.multiplyMatrices(n,Ti),is.matrixWorld=Qc,is.raycast(e,Ks);for(let a=0,o=Ks.length;a<o;a++){const c=Ks[a];c.instanceId=r,c.object=this,t.push(c)}Ks.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(s*this.count),s,this.count,Vo,tn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Kr=new F,_f=new F,vf=new We;class Hn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Kr.subVectors(n,t).cross(_f.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vf.getNormalMatrix(e),s=this.coplanarPoint(Kr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zn=new cn,xf=new Oe(.5,.5),Js=new F;class tc{constructor(e=new Hn,t=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],b=r[9],m=r[10],p=r[11],v=r[12],M=r[13],_=r[14],R=r[15];if(s[0].setComponents(l-a,f-u,p-g,R-v).normalize(),s[1].setComponents(l+a,f+u,p+g,R+v).normalize(),s[2].setComponents(l+o,f+h,p+b,R+M).normalize(),s[3].setComponents(l-o,f-h,p-b,R-M).normalize(),n)s[4].setComponents(c,d,m,_).normalize(),s[5].setComponents(l-c,f-d,p-m,R-_).normalize();else if(s[4].setComponents(l-c,f-d,p-m,R-_).normalize(),t===gn)s[5].setComponents(l+c,f+d,p+m,R+_).normalize();else if(t===br)s[5].setComponents(c,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(e){Zn.center.set(0,0,0);const t=xf.distanceTo(e.center);return Zn.radius=.7071067811865476+t,Zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Js.x=s.normal.x>0?e.max.x:e.min.x,Js.y=s.normal.y>0?e.max.y:e.min.y,Js.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yu extends rn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _r=new F,vr=new F,tl=new je,rs=new qi,$s=new cn,Jr=new F,nl=new F;class nc extends ut{constructor(e=new kt,t=new Yu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_r.fromBufferAttribute(t,s-1),vr.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_r.distanceTo(vr);e.setAttribute("lineDistance",new Ln(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(s),$s.radius+=r,e.ray.intersectsSphere($s)===!1)return;tl.copy(s).invert(),rs.copy(e.ray).applyMatrix4(tl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=u.getX(b),v=u.getX(b+1),M=Zs(this,e,rs,c,p,v,b);M&&t.push(M)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(f),p=Zs(this,e,rs,c,b,m,g-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let b=f,m=g-1;b<m;b+=l){const p=Zs(this,e,rs,c,b,b+1,b);p&&t.push(p)}if(this.isLineLoop){const b=Zs(this,e,rs,c,g-1,f,g-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Zs(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(_r.fromBufferAttribute(o,s),vr.fromBufferAttribute(o,r),t.distanceSqToSegment(_r,vr,Jr,nl)>n)return;Jr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Jr);if(!(l<e.near||l>e.far))return{distance:l,point:nl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const il=new F,sl=new F;class yf extends nc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)il.fromBufferAttribute(t,s),sl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+il.distanceTo(sl);e.setAttribute("lineDistance",new Ln(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mf extends nc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ic extends rn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const rl=new je,To=new qi,Qs=new cn,er=new F;class sc extends ut{constructor(e=new kt,t=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(s),Qs.radius+=r,e.ray.intersectsSphere(Qs)===!1)return;rl.copy(s).invert(),To.copy(e.ray).applyMatrix4(rl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,b=f;g<b;g++){const m=l.getX(g);er.fromBufferAttribute(h,m),al(er,m,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,b=f;g<b;g++)er.fromBufferAttribute(h,g),al(er,g,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function al(i,e,t,n,s,r,a){const o=To.distanceSqToPoint(i);if(o<t){const c=new F;To.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ku extends Tt{constructor(e,t,n=oi,s,r,a,o=Dt,c=Dt,l,u=xs,h=1){if(u!==xs&&u!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ju extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends kt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],b=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let M=0;M<l;M++){const _=M*h-r;g.push(_,-v,0),b.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const M=v+l*p,_=v+l*(p+1),R=v+1+l*(p+1),T=v+1+l*p;f.push(M,_,T),f.push(_,R,T)}this.setIndex(f),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(b,3)),this.setAttribute("uv",new Ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class As extends rn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vn extends As{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Sf extends rn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yo,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ef extends rn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tf extends rn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function tr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Af(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function wf(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ol(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function $u(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class Cs{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Rf extends Cs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Li,endingEnd:Li}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ii:r=e,o=2*t-n;break;case mr:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ii:a=e,c=2*n-t;break;case mr:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),b=g*g,m=b*g,p=-d*m+2*d*b-d*g,v=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*b+.5*g,_=f*m-f*b;for(let R=0;R!==o;++R)r[R]=p*a[u+R]+v*a[l+R]+M*a[c+R]+_*a[h+R];return r}}class Zu extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class Cf extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ln{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=tr(t,this.TimeBufferType),this.values=tr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:tr(e.times,Array),values:tr(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ss:t=this.InterpolantFactoryMethodLinear;break;case Tr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ss;case this.InterpolantFactoryMethodSmooth:return Tr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Af(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Tr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){const b=t[h+g];if(b!==t[d+g]||b!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ln.prototype.ValueTypeName="";ln.prototype.TimeBufferType=Float32Array;ln.prototype.ValueBufferType=Float32Array;ln.prototype.DefaultInterpolation=Ss;class Yi extends ln{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Ms;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Qu extends ln{constructor(e,t,n,s){super(e,t,n,s)}}Qu.prototype.ValueTypeName="color";class Vi extends ln{constructor(e,t,n,s){super(e,t,n,s)}}Vi.prototype.ValueTypeName="number";class Pf extends Cs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Vt.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Wi extends ln{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Pf(this.times,this.values,this.getValueSize(),e)}}Wi.prototype.ValueTypeName="quaternion";Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends ln{constructor(e,t,n){super(e,t,n)}}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Ms;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends ln{constructor(e,t,n,s){super(e,t,n,s)}}ji.prototype.ValueTypeName="vector";class Ao{constructor(e="",t=-1,n=[],s=Xo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=sn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(If(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(ln.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=wf(c);c=ol(c,1,u),l=ol(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Vi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,g,b){if(f.length!==0){const m=[],p=[];$u(f,m,p,g),m.length!==0&&b.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let b=0;b<d[g].morphTargets.length;b++)f[d[g].morphTargets[b]]=-1;for(const b in f){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const M=d[g];m.push(M.time),p.push(M.morphTarget===b?1:0)}s.push(new Vi(".morphTargetInfluence["+b+"]",m,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(ji,f+".position",d,"pos",s),n(Wi,f+".quaternion",d,"rot",s),n(ji,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Lf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vi;case"vector":case"vector2":case"vector3":case"vector4":return ji;case"color":return Qu;case"quaternion":return Wi;case"bool":case"boolean":return Yi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function If(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Lf(i.type);if(i.times===void 0){const t=[],n=[];$u(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Cn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Df{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nf=new Df;class Ji{constructor(e){this.manager=e!==void 0?e:Nf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const An={};class Uf extends Error{constructor(e,t){super(e),this.response=t}}class eh extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Cn.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:s});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=An[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let b=0;const m=new ReadableStream({start(p){v();function v(){h.read().then(({done:M,value:_})=>{if(M)p.close();else{b+=_.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:b,total:f});for(let T=0,w=u.length;T<w;T++){const P=u[T];P.onProgress&&P.onProgress(R)}p.enqueue(_),v()}},M=>{p.error(M)})}}});return new Response(m)}else throw new Uf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Cn.add(`file:${e}`,l);const u=An[e];delete An[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=An[e];if(u===void 0)throw this.manager.itemError(e),l;delete An[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Ai=new WeakMap;class Ff extends Ji{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Cn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ai.get(a);h===void 0&&(h=[],Ai.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Es("img");function c(){u(),t&&t(this);const h=Ai.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ai.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Cn.remove(`image:${e}`);const d=Ai.get(this)||[];for(let f=0;f<d.length;f++){const g=d[f];g.onError&&g.onError(h)}Ai.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class kf extends Ji{constructor(e){super(e)}load(e,t,n,s){const r=new Tt,a=new Ff(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class yr extends ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Of extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new je,cl=new F,ll=new F;class rc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tc,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cl.setFromMatrixPosition(e.matrixWorld),t.position.copy(cl),ll.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ll),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Bf extends rc{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Hi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zf extends yr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ul=new je,as=new F,Zr=new F;class Hf extends rc{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),as.setFromMatrixPosition(e.matrixWorld),n.position.copy(as),Zr.copy(n.position),Zr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Zr),n.updateMatrixWorld(),s.makeTranslation(-as.x,-as.y,-as.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,n.coordinateSystem,n.reversedDepth)}}class th extends yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ac extends Wu{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gf extends rc{constructor(){super(new ac(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class wo extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ut.DEFAULT_UP),this.updateMatrix(),this.target=new ut,this.shadow=new Gf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qr=new WeakMap;class Vf extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Cn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Qr.has(a)===!0)s&&s(Qr.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Cn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Qr.set(c,l),Cn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Cn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wf extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class jf{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){Vt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;Vt.multiplyQuaternionsFlat(e,a,e,t,e,n),Vt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const oc="\\[\\]\\.:\\/",qf=new RegExp("["+oc+"]","g"),cc="[^"+oc+"]",Xf="[^"+oc.replace("\\.","")+"]",Yf=/((?:WC+[\/:])*)/.source.replace("WC",cc),Kf=/(WCOD+)?/.source.replace("WCOD",Xf),Jf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cc),$f=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cc),Zf=new RegExp("^"+Yf+Kf+Jf+$f+"$"),Qf=["material","materials","bones","map"];class ep{constructor(e,t,n){const s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qf,"")}static parseTrackName(e){const t=Zf.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Qf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=ep;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tp{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Li,endingEnd:Li};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ud,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case dd:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Xo:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===hd;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===Uu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=Ii,s.endingEnd=Ii):(e?s.endingStart=this.zeroSlopeAtStart?Ii:Li:s.endingStart=mr,t?s.endingEnd=this.zeroSlopeAtEnd?Ii:Li:s.endingEnd=mr)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const np=new Float32Array(1);class ip extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}const b=t&&t._propertyBindings[h].binding.parsedPath;g=new jf(et.create(n,f,b),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Zu(new Float32Array(2),new Float32Array(2),1,np),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Ao.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Xo),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new tp(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?Ao.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const hl=new je;class sp{constructor(e,t,n=0,s=1/0){this.ray=new qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new $o,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hl),this}intersectObject(e,t=!0,n=[]){return Ro(e,this,n,t),n.sort(dl),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ro(e[s],this,n,t);return n.sort(dl),n}}function dl(i,e){return i.distance-e.distance}function Ro(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ro(r[a],e,t,!0)}}class Co{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Xe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Xe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rp extends qn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function fl(i,e,t,n){const s=ap(n);switch(t){case Iu:return i*e;case Vo:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case Nu:return i*e*2/s.components*s.byteLength;case jo:return i*e*2/s.components*s.byteLength;case Du:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case lr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hr:case dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:case Ka:return Math.max(i,16)*Math.max(e,8)/4;case qa:case Ya:return Math.max(i,8)*Math.max(e,8)/2;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case io:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case po:case mo:case go:return Math.ceil(i/4)*Math.ceil(e/4)*16;case bo:case _o:return Math.ceil(i/4)*Math.ceil(e/4)*8;case vo:case xo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(i){switch(i){case bn:case Ru:return{byteLength:1,components:1};case _s:case Cu:case ws:return{byteLength:2,components:1};case Ho:case Go:return{byteLength:2,components:4};case oi:case zo:case tn:return{byteLength:4,components:1};case Pu:case Lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nh(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function op(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],b=h[f];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const b=h[f];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var cp=`#ifdef USE_ALPHAHASH
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
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
material.specularStrength = specularStrength;`,sm=`varying vec3 vViewPosition;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,Ag=`#define MATCAP
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
}`,kg=`#include <common>
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
}`,qe={alphahash_fragment:cp,alphahash_pars_fragment:lp,alphamap_fragment:up,alphamap_pars_fragment:hp,alphatest_fragment:dp,alphatest_pars_fragment:fp,aomap_fragment:pp,aomap_pars_fragment:mp,batching_pars_vertex:gp,batching_vertex:bp,begin_vertex:_p,beginnormal_vertex:vp,bsdfs:xp,iridescence_fragment:yp,bumpmap_pars_fragment:Mp,clipping_planes_fragment:Sp,clipping_planes_pars_fragment:Ep,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:wp,color_pars_fragment:Rp,color_pars_vertex:Cp,color_vertex:Pp,common:Lp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Dp,displacementmap_pars_vertex:Np,displacementmap_vertex:Up,emissivemap_fragment:Fp,emissivemap_pars_fragment:kp,colorspace_fragment:Op,colorspace_pars_fragment:Bp,envmap_fragment:zp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:Gp,envmap_pars_vertex:Vp,envmap_physical_pars_fragment:em,envmap_vertex:Wp,fog_vertex:jp,fog_pars_vertex:qp,fog_fragment:Xp,fog_pars_fragment:Yp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Jp,lights_lambert_fragment:$p,lights_lambert_pars_fragment:Zp,lights_pars_begin:Qp,lights_toon_fragment:tm,lights_toon_pars_fragment:nm,lights_phong_fragment:im,lights_phong_pars_fragment:sm,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:om,lights_fragment_maps:cm,lights_fragment_end:lm,logdepthbuf_fragment:um,logdepthbuf_pars_fragment:hm,logdepthbuf_pars_vertex:dm,logdepthbuf_vertex:fm,map_fragment:pm,map_pars_fragment:mm,map_particle_fragment:gm,map_particle_pars_fragment:bm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:vm,morphinstance_vertex:xm,morphcolor_vertex:ym,morphnormal_vertex:Mm,morphtarget_pars_vertex:Sm,morphtarget_vertex:Em,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:wm,normal_pars_vertex:Rm,normal_vertex:Cm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Lm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Dm,iridescence_pars_fragment:Nm,opaque_fragment:Um,packing:Fm,premultiplied_alpha_fragment:km,project_vertex:Om,dithering_fragment:Bm,dithering_pars_fragment:zm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Gm,shadowmap_pars_fragment:Vm,shadowmap_pars_vertex:Wm,shadowmap_vertex:jm,shadowmask_pars_fragment:qm,skinbase_vertex:Xm,skinning_pars_vertex:Ym,skinning_vertex:Km,skinnormal_vertex:Jm,specularmap_fragment:$m,specularmap_pars_fragment:Zm,tonemapping_fragment:Qm,tonemapping_pars_fragment:eg,transmission_fragment:tg,transmission_pars_fragment:ng,uv_pars_fragment:ig,uv_pars_vertex:sg,uv_vertex:rg,worldpos_vertex:ag,background_vert:og,background_frag:cg,backgroundCube_vert:lg,backgroundCube_frag:ug,cube_vert:hg,cube_frag:dg,depth_vert:fg,depth_frag:pg,distanceRGBA_vert:mg,distanceRGBA_frag:gg,equirect_vert:bg,equirect_frag:_g,linedashed_vert:vg,linedashed_frag:xg,meshbasic_vert:yg,meshbasic_frag:Mg,meshlambert_vert:Sg,meshlambert_frag:Eg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:wg,meshnormal_frag:Rg,meshphong_vert:Cg,meshphong_frag:Pg,meshphysical_vert:Lg,meshphysical_frag:Ig,meshtoon_vert:Dg,meshtoon_frag:Ng,points_vert:Ug,points_frag:Fg,shadow_vert:kg,shadow_frag:Og,sprite_vert:Bg,sprite_frag:zg},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pn={basic:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Lt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Lt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Lt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Lt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Lt([ve.points,ve.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Lt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Lt([ve.common,ve.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Lt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Lt([ve.sprite,ve.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Lt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Lt([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};pn.physical={uniforms:Lt([pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const nr={r:0,b:0,g:0},Qn=new an,Hg=new je;function Gg(i,e,t,n,s,r,a){const o=new He(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function b(M){let _=!1;const R=g(M);R===null?p(o,c):R&&R.isColor&&(p(R,1),_=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,_){const R=g(_);R&&(R.isCubeTexture||R.mapping===xr)?(u===void 0&&(u=new dt(new Xi(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Gi(pn.backgroundCube.uniforms),vertexShader:pn.backgroundCube.vertexShader,fragmentShader:pn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qn.copy(_.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(Qn)),u.material.toneMapped=Je.getTransfer(R.colorSpace)!==st,(h!==R||d!==R.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new dt(new Rs(2,2),new _n({name:"BackgroundMaterial",uniforms:Gi(pn.background.uniforms),vertexShader:pn.background.vertexShader,fragmentShader:pn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=Je.getTransfer(R.colorSpace)!==st,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(h!==R||d!==R.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=R,d=R.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,_){M.getRGB(nr,Vu(i)),n.buffers.color.setClear(nr.r,nr.g,nr.b,_,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:b,addToRenderList:m,dispose:v}}function Vg(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(y,C,I,U,N){let W=!1;const q=h(U,I,C);r!==q&&(r=q,l(r.object)),W=f(y,U,I,N),W&&g(y,U,I,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,_(y,C,I,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,C,I){const U=I.wireframe===!0;let N=n[y.id];N===void 0&&(N={},n[y.id]=N);let W=N[C.id];W===void 0&&(W={},N[C.id]=W);let q=W[U];return q===void 0&&(q=d(c()),W[U]=q),q}function d(y){const C=[],I=[],U=[];for(let N=0;N<t;N++)C[N]=0,I[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:I,attributeDivisors:U,object:y,attributes:{},index:null}}function f(y,C,I,U){const N=r.attributes,W=C.attributes;let q=0;const te=I.getAttributes();for(const V in te)if(te[V].location>=0){const de=N[V];let xe=W[V];if(xe===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(xe=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(xe=y.instanceColor)),de===void 0||de.attribute!==xe||xe&&de.data!==xe.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(y,C,I,U){const N={},W=C.attributes;let q=0;const te=I.getAttributes();for(const V in te)if(te[V].location>=0){let de=W[V];de===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(de=y.instanceColor));const xe={};xe.attribute=de,de&&de.data&&(xe.data=de.data),N[V]=xe,q++}r.attributes=N,r.attributesNum=q,r.index=U}function b(){const y=r.newAttributes;for(let C=0,I=y.length;C<I;C++)y[C]=0}function m(y){p(y,0)}function p(y,C){const I=r.newAttributes,U=r.enabledAttributes,N=r.attributeDivisors;I[y]=1,U[y]===0&&(i.enableVertexAttribArray(y),U[y]=1),N[y]!==C&&(i.vertexAttribDivisor(y,C),N[y]=C)}function v(){const y=r.newAttributes,C=r.enabledAttributes;for(let I=0,U=C.length;I<U;I++)C[I]!==y[I]&&(i.disableVertexAttribArray(I),C[I]=0)}function M(y,C,I,U,N,W,q){q===!0?i.vertexAttribIPointer(y,C,I,N,W):i.vertexAttribPointer(y,C,I,U,N,W)}function _(y,C,I,U){b();const N=U.attributes,W=I.getAttributes(),q=C.defaultAttributeValues;for(const te in W){const V=W[te];if(V.location>=0){let re=N[te];if(re===void 0&&(te==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),te==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const de=re.normalized,xe=re.itemSize,we=e.get(re);if(we===void 0)continue;const Ve=we.buffer,Be=we.type,Ue=we.bytesPerElement,K=Be===i.INT||Be===i.UNSIGNED_INT||re.gpuType===zo;if(re.isInterleavedBufferAttribute){const Z=re.data,pe=Z.stride,X=re.offset;if(Z.isInstancedInterleavedBuffer){for(let ee=0;ee<V.locationSize;ee++)p(V.location+ee,Z.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<V.locationSize;ee++)m(V.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ee=0;ee<V.locationSize;ee++)M(V.location+ee,xe/V.locationSize,Be,de,pe*Ue,(X+xe/V.locationSize*ee)*Ue,K)}else{if(re.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)p(V.location+Z,re.meshPerAttribute);y.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Z=0;Z<V.locationSize;Z++)M(V.location+Z,xe/V.locationSize,Be,de,xe*Ue,xe/V.locationSize*Z*Ue,K)}}else if(q!==void 0){const de=q[te];if(de!==void 0)switch(de.length){case 2:i.vertexAttrib2fv(V.location,de);break;case 3:i.vertexAttrib3fv(V.location,de);break;case 4:i.vertexAttrib4fv(V.location,de);break;default:i.vertexAttrib1fv(V.location,de)}}}}v()}function R(){P();for(const y in n){const C=n[y];for(const I in C){const U=C[I];for(const N in U)u(U[N].object),delete U[N];delete C[I]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const C=n[y.id];for(const I in C){const U=C[I];for(const N in U)u(U[N].object),delete U[N];delete C[I]}delete n[y.id]}function w(y){for(const C in n){const I=n[C];if(I[y.id]===void 0)continue;const U=I[y.id];for(const N in U)u(U[N].object),delete U[N];delete I[y.id]}}function P(){x(),a=!0,r!==s&&(r=s,l(r.object))}function x(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:x,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:v}}function Wg(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let b=0;b<h;b++)g+=u[b]*d[b];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function jg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Yt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===ws&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==bn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==tn&&!P)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:_,vertexTextures:R,maxSamples:T}}function qg(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Hn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:n,M=v*4;let _=p.clippingState||null;c.value=_,_=u(g,d,M,f);for(let R=0;R!==M;++R)_[R]=t[R];p.clippingState=_,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,g!==!0||m===null){const p=f+b*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,_=f;M!==b;++M,_+=4)a.copy(h[M]).applyMatrix4(v,o),a.normal.toArray(m,_),m[_+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Xg(i){let e=new WeakMap;function t(a,o){return o===Wa?a.mapping=Oi:o===ja&&(a.mapping=Bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wa||o===ja)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Di=4,pl=[.125,.215,.35,.446,.526,.582],si=20,ea=new ac,ml=new He;let ta=null,na=0,ia=0,sa=!1;const ni=(1+Math.sqrt(5))/2,wi=1/ni,gl=[new F(-ni,wi,0),new F(ni,wi,0),new F(-wi,0,ni),new F(wi,0,ni),new F(0,ni,-wi),new F(0,ni,wi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Yg=new F;class Po{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=Yg}=r;ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ta,na,ia),this._renderer.xr.enabled=sa,e.scissorTest=!1,ir(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oi||e.mapping===Bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ta=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:ws,format:Yt,colorSpace:Nt,depthBuffer:!1},s=bl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Jg(r,e,t)}return s}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,ea)}_sceneToCubeUV(e,t,n,s,r){const c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ml),h.toneMapping=jn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));const b=new ri({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),m=new dt(new Xi,b);let p=!1;const v=e.background;v?v.isColor&&(b.color.copy(v),e.background=null,p=!0):(b.color.copy(ml),p=!0);for(let M=0;M<6;M++){const _=M%3;_===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):_===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));const R=this._cubeSize;ir(s,_*R,M>2?R:0,R,R),h.setRenderTarget(s),p&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Oi||e.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_l());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ir(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ea)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gl[(s-r-1)%gl.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*si-1),b=r/g,m=isFinite(r)?1+Math.floor(u*b):si;m>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${si}`);const p=[];let v=0;for(let w=0;w<si;++w){const P=w/b,x=Math.exp(-P*P/2);p.push(x),w===0?v+=x:w<m&&(v+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const _=this._sizeLods[s],R=3*_*(s>M-Di?s-M+Di:0),T=4*(this._cubeSize-_);ir(t,R,T,3*_,2*_),c.setRenderTarget(t),c.render(h,ea)}}function Kg(i){const e=[],t=[],n=[];let s=i;const r=i-Di+1+pl.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-Di?c=pl[a-i+Di-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,b=3,m=2,p=1,v=new Float32Array(b*g*f),M=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,P=T>2?0:-1,x=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(x,b*g*T),M.set(d,m*g*T);const y=[T,T,T,T,T,T];_.set(y,p*g*T)}const R=new kt;R.setAttribute("position",new gt(v,b)),R.setAttribute("uv",new gt(M,m)),R.setAttribute("faceIndex",new gt(_,p)),e.push(R),s>Di&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function bl(i,e,t){const n=new ci(i,e,t);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Jg(i,e,t){const n=new Float32Array(si),s=new F(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function _l(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vl(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function lc(){return`

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
	`}function $g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Wa||c===ja,u=c===Oi||c===Bi;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Po(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Po(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zg(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Qg(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,g=h.attributes.position;let b=0;if(f!==null){const v=f.array;b=f.version;for(let M=0,_=v.length;M<_;M+=3){const R=v[M+0],T=v[M+1],w=v[M+2];d.push(R,T,T,w,w,R)}}else if(g!==void 0){const v=g.array;b=g.version;for(let M=0,_=v.length/3-1;M<_;M+=3){const R=M+0,T=M+1,w=M+2;d.push(R,T,T,w,w,R)}}else return;const m=new(Ou(d)?Gu:Hu)(d,1);m.version=b;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function eb(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],b[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,b,0,g);let p=0;for(let v=0;v<g;v++)p+=f[v]*b[v];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function tb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function nb(i,e,t){const n=new WeakMap,s=new Ze;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let x=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;f===!0&&(M=1),g===!0&&(M=2),b===!0&&(M=3);let _=o.attributes.position.count*M,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*R*4*h),w=new Bu(T,_,R,h);w.type=tn,w.needsUpdate=!0;const P=M*4;for(let y=0;y<h;y++){const C=m[y],I=p[y],U=v[y],N=_*R*4*y;for(let W=0;W<C.count;W++){const q=W*P;f===!0&&(s.fromBufferAttribute(C,W),T[N+q+0]=s.x,T[N+q+1]=s.y,T[N+q+2]=s.z,T[N+q+3]=0),g===!0&&(s.fromBufferAttribute(I,W),T[N+q+4]=s.x,T[N+q+5]=s.y,T[N+q+6]=s.z,T[N+q+7]=0),b===!0&&(s.fromBufferAttribute(U,W),T[N+q+8]=s.x,T[N+q+9]=s.y,T[N+q+10]=s.z,T[N+q+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:w,size:new Oe(_,R)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let b=0;b<l.length;b++)f+=l[b];const g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ib(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const ih=new Tt,xl=new Ku(1,1),sh=new Bu,rh=new Xd,ah=new ju,yl=[],Ml=[],Sl=new Float32Array(16),El=new Float32Array(9),Tl=new Float32Array(4);function $i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=yl[s];if(r===void 0&&(r=new Float32Array(s),yl[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function yt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mr(i,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function ab(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function cb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Tl.set(n),i.uniformMatrix2fv(this.addr,!1,Tl),Mt(t,n)}}function lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;El.set(n),i.uniformMatrix3fv(this.addr,!1,El),Mt(t,n)}}function ub(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;Sl.set(n),i.uniformMatrix4fv(this.addr,!1,Sl),Mt(t,n)}}function hb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function mb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function bb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function _b(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function vb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(xl.compareFunction=ku,r=xl):r=ih,t.setTexture2D(e||r,s)}function xb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||rh,s)}function yb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||ah,s)}function Mb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||sh,s)}function Sb(i){switch(i){case 5126:return sb;case 35664:return rb;case 35665:return ab;case 35666:return ob;case 35674:return cb;case 35675:return lb;case 35676:return ub;case 5124:case 35670:return hb;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return bb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return Mb}}function Eb(i,e){i.uniform1fv(this.addr,e)}function Tb(i,e){const t=$i(e,this.size,2);i.uniform2fv(this.addr,t)}function Ab(i,e){const t=$i(e,this.size,3);i.uniform3fv(this.addr,t)}function wb(i,e){const t=$i(e,this.size,4);i.uniform4fv(this.addr,t)}function Rb(i,e){const t=$i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cb(i,e){const t=$i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pb(i,e){const t=$i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lb(i,e){i.uniform1iv(this.addr,e)}function Ib(i,e){i.uniform2iv(this.addr,e)}function Db(i,e){i.uniform3iv(this.addr,e)}function Nb(i,e){i.uniform4iv(this.addr,e)}function Ub(i,e){i.uniform1uiv(this.addr,e)}function Fb(i,e){i.uniform2uiv(this.addr,e)}function kb(i,e){i.uniform3uiv(this.addr,e)}function Ob(i,e){i.uniform4uiv(this.addr,e)}function Bb(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||ih,r[a])}function zb(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||rh,r[a])}function Hb(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||ah,r[a])}function Gb(i,e,t){const n=this.cache,s=e.length,r=Mr(t,s);yt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||sh,r[a])}function Vb(i){switch(i){case 5126:return Eb;case 35664:return Tb;case 35665:return Ab;case 35666:return wb;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Lb;case 35667:case 35671:return Ib;case 35668:case 35672:return Db;case 35669:case 35673:return Nb;case 5125:return Ub;case 36294:return Fb;case 36295:return kb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Bb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Hb;case 36289:case 36303:case 36311:case 36292:return Gb}}class Wb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Sb(t.type)}}class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vb(t.type)}}class qb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Al(i,e){i.seq.push(e),i.map[e.id]=e}function Xb(i,e,t){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),a=ra.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Al(t,l===void 0?new Wb(o,i,e):new jb(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new qb(o),Al(t,h)),t=h}}}class fr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Xb(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function wl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yb=37297;let Kb=0;function Jb(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Rl=new We;function $b(i){Je._getMatrix(Rl,Je.workingColorSpace,i);const e=`mat3( ${Rl.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case gr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Cl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Jb(i.getShaderSource(e),o)}else return r}function Zb(i,e){const t=$b(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qb(i,e){let t;switch(e){case id:t="Linear";break;case sd:t="Reinhard";break;case rd:t="Cineon";break;case Tu:t="ACESFilmic";break;case od:t="AgX";break;case cd:t="Neutral";break;case ad:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sr=new F;function e_(){Je.getLuminanceCoefficients(sr);const i=sr.x.toFixed(4),e=sr.y.toFixed(4),t=sr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function t_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function n_(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function i_(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function us(i){return i!==""}function Pl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ll(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(i){return i.replace(s_,a_)}const r_=new Map;function a_(i,e){let t=qe[e];if(t===void 0){const n=r_.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Lo(t)}const o_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(i){return i.replace(o_,c_)}function c_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function l_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function u_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Oi:case Bi:e="ENVMAP_TYPE_CUBE";break;case xr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Bi:e="ENVMAP_MODE_REFRACTION";break}return e}function d_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bo:e="ENVMAP_BLENDING_MULTIPLY";break;case td:e="ENVMAP_BLENDING_MIX";break;case nd:e="ENVMAP_BLENDING_ADD";break}return e}function f_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function p_(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=l_(t),l=u_(t),u=h_(t),h=d_(t),d=f_(t),f=t_(t),g=n_(r),b=s.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?qe.tonemapping_pars_fragment:"",t.toneMapping!==jn?Qb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Zb("linearToOutputTexel",t.outputColorSpace),e_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),a=Lo(a),a=Pl(a,t),a=Ll(a,t),o=Lo(o),o=Pl(o,t),o=Ll(o,t),a=Il(a),o=Il(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=v+m+a,_=v+p+o,R=wl(s,s.VERTEX_SHADER,M),T=wl(s,s.FRAGMENT_SHADER,_);s.attachShader(b,R),s.attachShader(b,T),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function w(C){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(b)||"",U=s.getShaderInfoLog(R)||"",N=s.getShaderInfoLog(T)||"",W=I.trim(),q=U.trim(),te=N.trim();let V=!0,re=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,R,T);else{const de=Cl(s,R,"vertex"),xe=Cl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+de+`
`+xe)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(q===""||te==="")&&(re=!1);re&&(C.diagnostics={runnable:V,programLog:W,vertexShader:{log:q,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(R),s.deleteShader(T),P=new fr(s,b),x=i_(s,b)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(b,Yb)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Kb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=T,this}let m_=0;class g_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new b_(e),t.set(e,n)),n}}class b_{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}}function __(i,e,t,n,s,r,a){const o=new $o,c=new g_,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(x){return l.add(x),x===0?"uv":`uv${x}`}function m(x,y,C,I,U){const N=I.fog,W=U.geometry,q=x.isMeshStandardMaterial?I.environment:null,te=(x.isMeshStandardMaterial?t:e).get(x.envMap||q),V=te&&te.mapping===xr?te.image.height:null,re=g[x.type];x.precision!==null&&(f=s.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const de=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=de!==void 0?de.length:0;let we=0;W.morphAttributes.position!==void 0&&(we=1),W.morphAttributes.normal!==void 0&&(we=2),W.morphAttributes.color!==void 0&&(we=3);let Ve,Be,Ue,K;if(re){const Qe=pn[re];Ve=Qe.vertexShader,Be=Qe.fragmentShader}else Ve=x.vertexShader,Be=x.fragmentShader,c.update(x),Ue=c.getVertexShaderID(x),K=c.getFragmentShaderID(x);const Z=i.getRenderTarget(),pe=i.state.buffers.depth.getReversed(),X=U.isInstancedMesh===!0,ee=U.isBatchedMesh===!0,Se=!!x.map,H=!!x.matcap,A=!!te,_e=!!x.aoMap,G=!!x.lightMap,ne=!!x.bumpMap,ae=!!x.normalMap,De=!!x.displacementMap,ge=!!x.emissiveMap,Pe=!!x.metalnessMap,tt=!!x.roughnessMap,ot=x.anisotropy>0,L=x.clearcoat>0,S=x.dispersion>0,O=x.iridescence>0,J=x.sheen>0,ce=x.transmission>0,$=ot&&!!x.anisotropyMap,Le=L&&!!x.clearcoatMap,k=L&&!!x.clearcoatNormalMap,se=L&&!!x.clearcoatRoughnessMap,fe=O&&!!x.iridescenceMap,Q=O&&!!x.iridescenceThicknessMap,le=J&&!!x.sheenColorMap,Me=J&&!!x.sheenRoughnessMap,Ee=!!x.specularMap,be=!!x.specularColorMap,Ie=!!x.specularIntensityMap,D=ce&&!!x.transmissionMap,oe=ce&&!!x.thicknessMap,me=!!x.gradientMap,Ae=!!x.alphaMap,ue=x.alphaTest>0,ie=!!x.alphaHash,Ce=!!x.extensions;let Ge=jn;x.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const ct={shaderID:re,shaderType:x.type,shaderName:x.name,vertexShader:Ve,fragmentShader:Be,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ee,batchingColor:ee&&U._colorsTexture!==null,instancing:X,instancingColor:X&&U.instanceColor!==null,instancingMorph:X&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Nt,alphaToCoverage:!!x.alphaToCoverage,map:Se,matcap:H,envMap:A,envMapMode:A&&te.mapping,envMapCubeUVHeight:V,aoMap:_e,lightMap:G,bumpMap:ne,normalMap:ae,displacementMap:d&&De,emissiveMap:ge,normalMapObjectSpace:ae&&x.normalMapType===gd,normalMapTangentSpace:ae&&x.normalMapType===Yo,metalnessMap:Pe,roughnessMap:tt,anisotropy:ot,anisotropyMap:$,clearcoat:L,clearcoatMap:Le,clearcoatNormalMap:k,clearcoatRoughnessMap:se,dispersion:S,iridescence:O,iridescenceMap:fe,iridescenceThicknessMap:Q,sheen:J,sheenColorMap:le,sheenRoughnessMap:Me,specularMap:Ee,specularColorMap:be,specularIntensityMap:Ie,transmission:ce,transmissionMap:D,thicknessMap:oe,gradientMap:me,opaque:x.transparent===!1&&x.blending===ai&&x.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:ie,combine:x.combine,mapUv:Se&&b(x.map.channel),aoMapUv:_e&&b(x.aoMap.channel),lightMapUv:G&&b(x.lightMap.channel),bumpMapUv:ne&&b(x.bumpMap.channel),normalMapUv:ae&&b(x.normalMap.channel),displacementMapUv:De&&b(x.displacementMap.channel),emissiveMapUv:ge&&b(x.emissiveMap.channel),metalnessMapUv:Pe&&b(x.metalnessMap.channel),roughnessMapUv:tt&&b(x.roughnessMap.channel),anisotropyMapUv:$&&b(x.anisotropyMap.channel),clearcoatMapUv:Le&&b(x.clearcoatMap.channel),clearcoatNormalMapUv:k&&b(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&b(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&b(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&b(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&b(x.sheenColorMap.channel),sheenRoughnessMapUv:Me&&b(x.sheenRoughnessMap.channel),specularMapUv:Ee&&b(x.specularMap.channel),specularColorMapUv:be&&b(x.specularColorMap.channel),specularIntensityMapUv:Ie&&b(x.specularIntensityMap.channel),transmissionMapUv:D&&b(x.transmissionMap.channel),thicknessMapUv:oe&&b(x.thicknessMap.channel),alphaMapUv:Ae&&b(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ae||ot),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(Se||Ae),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:we,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Se&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===st,decodeVideoTextureEmissive:ge&&x.emissiveMap.isVideoTexture===!0&&Je.getTransfer(x.emissiveMap.colorSpace)===st,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===mn,flipSided:x.side===It,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&x.extensions.multiDraw===!0||ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function p(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)y.push(C),y.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(v(y,x),M(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function v(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function M(x,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),x.push(o.mask)}function _(x){const y=g[x.type];let C;if(y){const I=pn[y];C=of.clone(I.uniforms)}else C=x.uniforms;return C}function R(x,y){let C;for(let I=0,U=u.length;I<U;I++){const N=u[I];if(N.cacheKey===y){C=N,++C.usedTimes;break}}return C===void 0&&(C=new p_(i,y,x,r),u.push(C)),C}function T(x){if(--x.usedTimes===0){const y=u.indexOf(x);u[y]=u[u.length-1],u.pop(),x.destroy()}}function w(x){c.remove(x)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:P}}function v_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function x_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Nl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ul(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,b,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:b,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=b,p.group=m),e++,p}function o(h,d,f,g,b,m){const p=a(h,d,f,g,b,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,b,m){const p=a(h,d,f,g,b,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||x_),n.length>1&&n.sort(d||Nl),s.length>1&&s.sort(d||Nl)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function y_(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Ul,i.set(n,[a])):s>=r.length?(a=new Ul,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function M_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new He};break;case"SpotLight":t={position:new F,direction:new F,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function S_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let E_=0;function T_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function A_(i){const e=new M_,t=S_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const s=new F,r=new je,a=new je;function o(l){let u=0,h=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,g=0,b=0,m=0,p=0,v=0,M=0,_=0,R=0,T=0,w=0;l.sort(T_);for(let x=0,y=l.length;x<y;x++){const C=l[x],I=C.color,U=C.intensity,N=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=I.r*U,h+=I.g*U,d+=I.b*U;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],U);w++}else if(C.isDirectionalLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const te=C.shadow,V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=C.shadow.matrix,v++}n.directional[f]=q,f++}else if(C.isSpotLight){const q=e.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(I).multiplyScalar(U),q.distance=N,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[b]=q;const te=C.shadow;if(C.map&&(n.spotLightMap[R]=C.map,R++,te.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[b]=te.matrix,C.castShadow){const V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[b]=V,n.spotShadowMap[b]=W,_++}b++}else if(C.isRectAreaLight){const q=e.get(C);q.color.copy(I).multiplyScalar(U),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=e.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const te=C.shadow,V=t.get(C);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=e.get(C);q.skyColor.copy(C.color).multiplyScalar(U),q.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==b||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==v||P.numPointShadows!==M||P.numSpotShadows!==_||P.numSpotMaps!==R||P.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=_+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,P.directionalLength=f,P.pointLength=g,P.spotLength=b,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=v,P.numPointShadows=M,P.numSpotShadows=_,P.numSpotMaps=R,P.numLightProbes=w,n.version=E_++)}function c(l,u){let h=0,d=0,f=0,g=0,b=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const M=l[p];if(M.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),h++}else if(M.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(M.width*.5,0,0),_.halfHeight.set(0,M.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(M.matrixWorld),_.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const _=n.hemi[b];_.direction.setFromMatrixPosition(M.matrixWorld),_.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Fl(i){const e=new A_(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function w_(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Fl(i),e.set(s,[o])):r>=a.length?(o=new Fl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const R_=`void main() {
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
}`;function P_(i,e,t){let n=new tc;const s=new Oe,r=new Oe,a=new Ze,o=new Ef({depthPacking:md}),c=new Tf,l={},u=t.maxTextureSize,h={[In]:It,[It]:In,[mn]:mn},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new kt;g.setAttribute("position",new gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new dt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eu;let p=this.type;this.render=function(T,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const x=i.getRenderTarget(),y=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Wn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==wn&&this.type===wn,N=p===wn&&this.type!==wn;for(let W=0,q=T.length;W<q;W++){const te=T[W],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const re=V.getFrameExtents();if(s.multiply(re),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,V.mapSize.y=r.y)),V.map===null||U===!0||N===!0){const xe=this.type!==wn?{minFilter:Dt,magFilter:Dt}:{};V.map!==null&&V.map.dispose(),V.map=new ci(s.x,s.y,xe),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const de=V.getViewportCount();for(let xe=0;xe<de;xe++){const we=V.getViewport(xe);a.set(r.x*we.x,r.y*we.y,r.x*we.z,r.y*we.w),I.viewport(a),V.updateMatrices(te,xe),n=V.getFrustum(),_(w,P,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&v(V,P),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(x,y,C)};function v(T,w){const P=e.update(b);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ci(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,P,d,b,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,P,f,b,null)}function M(T,w,P,x){let y=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=y.uuid,U=w.uuid;let N=l[I];N===void 0&&(N={},l[I]=N);let W=N[U];W===void 0&&(W=y.clone(),N[U]=W,w.addEventListener("dispose",R)),y=W}if(y.visible=w.visible,y.wireframe=w.wireframe,x===wn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const I=i.properties.get(y);I.light=P}return y}function _(T,w,P,x,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===wn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=e.update(T),N=T.material;if(Array.isArray(N)){const W=U.groups;for(let q=0,te=W.length;q<te;q++){const V=W[q],re=N[V.materialIndex];if(re&&re.visible){const de=M(T,re,x,y);T.onBeforeShadow(i,T,w,P,U,de,V),i.renderBufferDirect(P,null,U,de,T,V),T.onAfterShadow(i,T,w,P,U,de,V)}}}else if(N.visible){const W=M(T,N,x,y);T.onBeforeShadow(i,T,w,P,U,W,null),i.renderBufferDirect(P,null,U,W,T,null),T.onAfterShadow(i,T,w,P,U,W,null)}}const I=T.children;for(let U=0,N=I.length;U<N;U++)_(I[U],w,P,x,y)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const x=l[P],y=T.target.uuid;y in x&&(x[y].dispose(),delete x[y])}}}const L_={[ka]:Oa,[Ba]:Ga,[za]:Va,[ki]:Ha,[Oa]:ka,[Ga]:Ba,[Va]:za,[Ha]:ki};function I_(i,e){function t(){let D=!1;const oe=new Ze;let me=null;const Ae=new Ze(0,0,0,0);return{setMask:function(ue){me!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),me=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ie,Ce,Ge,ct){ct===!0&&(ue*=Ge,ie*=Ge,Ce*=Ge),oe.set(ue,ie,Ce,Ge),Ae.equals(oe)===!1&&(i.clearColor(ue,ie,Ce,Ge),Ae.copy(oe))},reset:function(){D=!1,me=null,Ae.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,me=null,Ae=null,ue=null;return{setReversed:function(ie){if(oe!==ie){const Ce=e.get("EXT_clip_control");ie?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),oe=ie;const Ge=ue;ue=null,this.setClear(Ge)}},getReversed:function(){return oe},setTest:function(ie){ie?Z(i.DEPTH_TEST):pe(i.DEPTH_TEST)},setMask:function(ie){me!==ie&&!D&&(i.depthMask(ie),me=ie)},setFunc:function(ie){if(oe&&(ie=L_[ie]),Ae!==ie){switch(ie){case ka:i.depthFunc(i.NEVER);break;case Oa:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case ki:i.depthFunc(i.LEQUAL);break;case za:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=ie}},setLocked:function(ie){D=ie},setClear:function(ie){ue!==ie&&(oe&&(ie=1-ie),i.clearDepth(ie),ue=ie)},reset:function(){D=!1,me=null,Ae=null,ue=null,oe=!1}}}function s(){let D=!1,oe=null,me=null,Ae=null,ue=null,ie=null,Ce=null,Ge=null,ct=null;return{setTest:function(Qe){D||(Qe?Z(i.STENCIL_TEST):pe(i.STENCIL_TEST))},setMask:function(Qe){oe!==Qe&&!D&&(i.stencilMask(Qe),oe=Qe)},setFunc:function(Qe,xn,un){(me!==Qe||Ae!==xn||ue!==un)&&(i.stencilFunc(Qe,xn,un),me=Qe,Ae=xn,ue=un)},setOp:function(Qe,xn,un){(ie!==Qe||Ce!==xn||Ge!==un)&&(i.stencilOp(Qe,xn,un),ie=Qe,Ce=xn,Ge=un)},setLocked:function(Qe){D=Qe},setClear:function(Qe){ct!==Qe&&(i.clearStencil(Qe),ct=Qe)},reset:function(){D=!1,oe=null,me=null,Ae=null,ue=null,ie=null,Ce=null,Ge=null,ct=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,M=null,_=null,R=null,T=null,w=new He(0,0,0),P=0,x=!1,y=null,C=null,I=null,U=null,N=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=te>=2);let re=null,de={};const xe=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),Ve=new Ze().fromArray(xe),Be=new Ze().fromArray(we);function Ue(D,oe,me,Ae){const ue=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<me;Ce++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(oe+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ie}const K={};K[i.TEXTURE_2D]=Ue(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=Ue(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=Ue(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=Ue(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(i.DEPTH_TEST),a.setFunc(ki),ne(!1),ae(Mc),Z(i.CULL_FACE),_e(Wn);function Z(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function pe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function X(D,oe){return h[D]!==oe?(i.bindFramebuffer(D,oe),h[D]=oe,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ee(D,oe){let me=f,Ae=!1;if(D){me=d.get(oe),me===void 0&&(me=[],d.set(oe,me));const ue=D.textures;if(me.length!==ue.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ce=ue.length;ie<Ce;ie++)me[ie]=i.COLOR_ATTACHMENT0+ie;me.length=ue.length,Ae=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(me)}function Se(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const H={[ii]:i.FUNC_ADD,[Oh]:i.FUNC_SUBTRACT,[Bh]:i.FUNC_REVERSE_SUBTRACT};H[zh]=i.MIN,H[Hh]=i.MAX;const A={[Gh]:i.ZERO,[Vh]:i.ONE,[Wh]:i.SRC_COLOR,[Ua]:i.SRC_ALPHA,[Jh]:i.SRC_ALPHA_SATURATE,[Yh]:i.DST_COLOR,[qh]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Fa]:i.ONE_MINUS_SRC_ALPHA,[Kh]:i.ONE_MINUS_DST_COLOR,[Xh]:i.ONE_MINUS_DST_ALPHA,[$h]:i.CONSTANT_COLOR,[Zh]:i.ONE_MINUS_CONSTANT_COLOR,[Qh]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(D,oe,me,Ae,ue,ie,Ce,Ge,ct,Qe){if(D===Wn){b===!0&&(pe(i.BLEND),b=!1);return}if(b===!1&&(Z(i.BLEND),b=!0),D!==kh){if(D!==m||Qe!==x){if((p!==ii||_!==ii)&&(i.blendEquation(i.FUNC_ADD),p=ii,_=ii),Qe)switch(D){case ai:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ai:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Sc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}v=null,M=null,R=null,T=null,w.set(0,0,0),P=0,m=D,x=Qe}return}ue=ue||oe,ie=ie||me,Ce=Ce||Ae,(oe!==p||ue!==_)&&(i.blendEquationSeparate(H[oe],H[ue]),p=oe,_=ue),(me!==v||Ae!==M||ie!==R||Ce!==T)&&(i.blendFuncSeparate(A[me],A[Ae],A[ie],A[Ce]),v=me,M=Ae,R=ie,T=Ce),(Ge.equals(w)===!1||ct!==P)&&(i.blendColor(Ge.r,Ge.g,Ge.b,ct),w.copy(Ge),P=ct),m=D,x=!1}function G(D,oe){D.side===mn?pe(i.CULL_FACE):Z(i.CULL_FACE);let me=D.side===It;oe&&(me=!me),ne(me),D.blending===ai&&D.transparent===!1?_e(Wn):_e(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);const Ae=D.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Z(i.SAMPLE_ALPHA_TO_COVERAGE):pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function ae(D){D!==Nh?(Z(i.CULL_FACE),D!==C&&(D===Mc?i.cullFace(i.BACK):D===Uh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pe(i.CULL_FACE),C=D}function De(D){D!==I&&(q&&i.lineWidth(D),I=D)}function ge(D,oe,me){D?(Z(i.POLYGON_OFFSET_FILL),(U!==oe||N!==me)&&(i.polygonOffset(oe,me),U=oe,N=me)):pe(i.POLYGON_OFFSET_FILL)}function Pe(D){D?Z(i.SCISSOR_TEST):pe(i.SCISSOR_TEST)}function tt(D){D===void 0&&(D=i.TEXTURE0+W-1),re!==D&&(i.activeTexture(D),re=D)}function ot(D,oe,me){me===void 0&&(re===null?me=i.TEXTURE0+W-1:me=re);let Ae=de[me];Ae===void 0&&(Ae={type:void 0,texture:void 0},de[me]=Ae),(Ae.type!==D||Ae.texture!==oe)&&(re!==me&&(i.activeTexture(me),re=me),i.bindTexture(D,oe||K[D]),Ae.type=D,Ae.texture=oe)}function L(){const D=de[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function k(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(D){Ve.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function Me(D){Be.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Be.copy(D))}function Ee(D,oe){let me=l.get(oe);me===void 0&&(me=new WeakMap,l.set(oe,me));let Ae=me.get(D);Ae===void 0&&(Ae=i.getUniformBlockIndex(oe,D.name),me.set(D,Ae))}function be(D,oe){const Ae=l.get(oe).get(D);c.get(oe)!==Ae&&(i.uniformBlockBinding(oe,Ae,D.__bindingPointIndex),c.set(oe,Ae))}function Ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,de={},h={},d=new WeakMap,f=[],g=null,b=!1,m=null,p=null,v=null,M=null,_=null,R=null,T=null,w=new He(0,0,0),P=0,x=!1,y=null,C=null,I=null,U=null,N=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Be.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Z,disable:pe,bindFramebuffer:X,drawBuffers:ee,useProgram:Se,setBlending:_e,setMaterial:G,setFlipSided:ne,setCullFace:ae,setLineWidth:De,setPolygonOffset:ge,setScissorTest:Pe,activeTexture:tt,bindTexture:ot,unbindTexture:L,compressedTexImage2D:S,compressedTexImage3D:O,texImage2D:fe,texImage3D:Q,updateUBOMapping:Ee,uniformBlockBinding:be,texStorage2D:k,texStorage3D:se,texSubImage2D:J,texSubImage3D:ce,compressedTexSubImage2D:$,compressedTexSubImage3D:Le,scissor:le,viewport:Me,reset:Ie}}function D_(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):Es("canvas")}function b(L,S,O){let J=1;const ce=ot(L);if((ce.width>O||ce.height>O)&&(J=O/Math.max(ce.width,ce.height)),J<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const $=Math.floor(J*ce.width),Le=Math.floor(J*ce.height);h===void 0&&(h=g($,Le));const k=S?g($,Le):h;return k.width=$,k.height=Le,k.getContext("2d").drawImage(L,0,0,$,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+$+"x"+Le+")."),k}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function v(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(L,S,O,J,ce=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let $=S;if(S===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),S===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),S===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),S===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),S===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),S===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),S===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),S===i.RGBA){const Le=ce?gr:Je.getTransfer(J);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Le===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(L,S){let O;return L?S===null||S===oi||S===vs?O=i.DEPTH24_STENCIL8:S===tn?O=i.DEPTH32F_STENCIL8:S===_s&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===oi||S===vs?O=i.DEPTH_COMPONENT24:S===tn?O=i.DEPTH_COMPONENT32F:S===_s&&(O=i.DEPTH_COMPONENT16),O}function R(L,S){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==Dt&&L.minFilter!==Gt?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function T(L){const S=L.target;S.removeEventListener("dispose",T),P(S),S.isVideoTexture&&u.delete(S)}function w(L){const S=L.target;S.removeEventListener("dispose",w),y(S)}function P(L){const S=n.get(L);if(S.__webglInit===void 0)return;const O=L.source,J=d.get(O);if(J){const ce=J[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&x(L),Object.keys(J).length===0&&d.delete(O)}n.remove(L)}function x(L){const S=n.get(L);i.deleteTexture(S.__webglTexture);const O=L.source,J=d.get(O);delete J[S.__cacheKey],a.memory.textures--}function y(L){const S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ce=0;ce<S.__webglFramebuffer[J].length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[J][ce]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=L.textures;for(let J=0,ce=O.length;J<ce;J++){const $=n.get(O[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(O[J])}n.remove(L)}let C=0;function I(){C=0}function U(){const L=C;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),C+=1,L}function N(L){const S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function W(L,S){const O=n.get(L);if(L.isVideoTexture&&Pe(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&O.__version!==L.version){const J=L.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(O,L,S);return}}else L.isExternalTexture&&(O.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+S)}function q(L,S){const O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){K(O,L,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+S)}function te(L,S){const O=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&O.__version!==L.version){K(O,L,S);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+S)}function V(L,S){const O=n.get(L);if(L.version>0&&O.__version!==L.version){Z(O,L,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+S)}const re={[zi]:i.REPEAT,[Vn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},de={[Dt]:i.NEAREST,[wu]:i.NEAREST_MIPMAP_NEAREST,[ls]:i.NEAREST_MIPMAP_LINEAR,[Gt]:i.LINEAR,[cr]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},xe={[bd]:i.NEVER,[Sd]:i.ALWAYS,[_d]:i.LESS,[ku]:i.LEQUAL,[vd]:i.EQUAL,[Md]:i.GEQUAL,[xd]:i.GREATER,[yd]:i.NOTEQUAL};function we(L,S){if(S.type===tn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Gt||S.magFilter===cr||S.magFilter===ls||S.magFilter===Rn||S.minFilter===Gt||S.minFilter===cr||S.minFilter===ls||S.minFilter===Rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,re[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,re[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,re[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,de[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,de[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,xe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Dt||S.minFilter!==ls&&S.minFilter!==Rn||S.type===tn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ve(L,S){let O=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let ce=d.get(J);ce===void 0&&(ce={},d.set(J,ce));const $=N(S);if($!==L.__cacheKey){ce[$]===void 0&&(ce[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),ce[$].usedTimes++;const Le=ce[L.__cacheKey];Le!==void 0&&(ce[L.__cacheKey].usedTimes--,Le.usedTimes===0&&x(S)),L.__cacheKey=$,L.__webglTexture=ce[$].texture}return O}function Be(L,S,O){return Math.floor(Math.floor(L/O)/S)}function Ue(L,S,O,J){const $=L.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,O,J,S.data);else{$.sort((Q,le)=>Q.start-le.start);let Le=0;for(let Q=1;Q<$.length;Q++){const le=$[Le],Me=$[Q],Ee=le.start+le.count,be=Be(Me.start,S.width,4),Ie=Be(le.start,S.width,4);Me.start<=Ee+1&&be===Ie&&Be(Me.start+Me.count-1,S.width,4)===be?le.count=Math.max(le.count,Me.start+Me.count-le.start):(++Le,$[Le]=Me)}$.length=Le+1;const k=i.getParameter(i.UNPACK_ROW_LENGTH),se=i.getParameter(i.UNPACK_SKIP_PIXELS),fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Q=0,le=$.length;Q<le;Q++){const Me=$[Q],Ee=Math.floor(Me.start/4),be=Math.ceil(Me.count/4),Ie=Ee%S.width,D=Math.floor(Ee/S.width),oe=be,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ie,D,oe,me,O,J,S.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,k),i.pixelStorei(i.UNPACK_SKIP_PIXELS,se),i.pixelStorei(i.UNPACK_SKIP_ROWS,fe)}}function K(L,S,O){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const ce=Ve(L,S),$=S.source;t.bindTexture(J,L.__webglTexture,i.TEXTURE0+O);const Le=n.get($);if($.version!==Le.__version||ce===!0){t.activeTexture(i.TEXTURE0+O);const k=Je.getPrimaries(Je.workingColorSpace),se=S.colorSpace===Gn?null:Je.getPrimaries(S.colorSpace),fe=S.colorSpace===Gn||k===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let Q=b(S.image,!1,s.maxTextureSize);Q=tt(S,Q);const le=r.convert(S.format,S.colorSpace),Me=r.convert(S.type);let Ee=M(S.internalFormat,le,Me,S.colorSpace,S.isVideoTexture);we(J,S);let be;const Ie=S.mipmaps,D=S.isVideoTexture!==!0,oe=Le.__version===void 0||ce===!0,me=$.dataReady,Ae=R(S,Q);if(S.isDepthTexture)Ee=_(S.format===ys,S.type),oe&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ee,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,le,Me,null));else if(S.isDataTexture)if(Ie.length>0){D&&oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Ie[0].width,Ie[0].height);for(let ue=0,ie=Ie.length;ue<ie;ue++)be=Ie[ue],D?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,le,Me,be.data):t.texImage2D(i.TEXTURE_2D,ue,Ee,be.width,be.height,0,le,Me,be.data);S.generateMipmaps=!1}else D?(oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Q.width,Q.height),me&&Ue(S,Q,le,Me)):t.texImage2D(i.TEXTURE_2D,0,Ee,Q.width,Q.height,0,le,Me,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ee,Ie[0].width,Ie[0].height,Q.depth);for(let ue=0,ie=Ie.length;ue<ie;ue++)if(be=Ie[ue],S.format!==Yt)if(le!==null)if(D){if(me)if(S.layerUpdates.size>0){const Ce=fl(be.width,be.height,S.format,S.type);for(const Ge of S.layerUpdates){const ct=be.data.subarray(Ge*Ce/be.data.BYTES_PER_ELEMENT,(Ge+1)*Ce/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ge,be.width,be.height,1,le,ct)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,Q.depth,le,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Ee,be.width,be.height,Q.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,Q.depth,le,Me,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Ee,be.width,be.height,Q.depth,0,le,Me,be.data)}else{D&&oe&&t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Ie[0].width,Ie[0].height);for(let ue=0,ie=Ie.length;ue<ie;ue++)be=Ie[ue],S.format!==Yt?le!==null?D?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,le,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Ee,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,le,Me,be.data):t.texImage2D(i.TEXTURE_2D,ue,Ee,be.width,be.height,0,le,Me,be.data)}else if(S.isDataArrayTexture)if(D){if(oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ee,Q.width,Q.height,Q.depth),me)if(S.layerUpdates.size>0){const ue=fl(Q.width,Q.height,S.format,S.type);for(const ie of S.layerUpdates){const Ce=Q.data.subarray(ie*ue/Q.data.BYTES_PER_ELEMENT,(ie+1)*ue/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,Q.width,Q.height,1,le,Me,Ce)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,le,Me,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ee,Q.width,Q.height,Q.depth,0,le,Me,Q.data);else if(S.isData3DTexture)D?(oe&&t.texStorage3D(i.TEXTURE_3D,Ae,Ee,Q.width,Q.height,Q.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,le,Me,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ee,Q.width,Q.height,Q.depth,0,le,Me,Q.data);else if(S.isFramebufferTexture){if(oe)if(D)t.texStorage2D(i.TEXTURE_2D,Ae,Ee,Q.width,Q.height);else{let ue=Q.width,ie=Q.height;for(let Ce=0;Ce<Ae;Ce++)t.texImage2D(i.TEXTURE_2D,Ce,Ee,ue,ie,0,le,Me,null),ue>>=1,ie>>=1}}else if(Ie.length>0){if(D&&oe){const ue=ot(Ie[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ue.width,ue.height)}for(let ue=0,ie=Ie.length;ue<ie;ue++)be=Ie[ue],D?me&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,le,Me,be):t.texImage2D(i.TEXTURE_2D,ue,Ee,le,Me,be);S.generateMipmaps=!1}else if(D){if(oe){const ue=ot(Q);t.texStorage2D(i.TEXTURE_2D,Ae,Ee,ue.width,ue.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,Me,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ee,le,Me,Q);m(S)&&p(J),Le.__version=$.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Z(L,S,O){if(S.image.length!==6)return;const J=Ve(L,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+O);const $=n.get(ce);if(ce.version!==$.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const Le=Je.getPrimaries(Je.workingColorSpace),k=S.colorSpace===Gn?null:Je.getPrimaries(S.colorSpace),se=S.colorSpace===Gn||Le===k?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const fe=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,le=[];for(let ie=0;ie<6;ie++)!fe&&!Q?le[ie]=b(S.image[ie],!0,s.maxCubemapSize):le[ie]=Q?S.image[ie].image:S.image[ie],le[ie]=tt(S,le[ie]);const Me=le[0],Ee=r.convert(S.format,S.colorSpace),be=r.convert(S.type),Ie=M(S.internalFormat,Ee,be,S.colorSpace),D=S.isVideoTexture!==!0,oe=$.__version===void 0||J===!0,me=ce.dataReady;let Ae=R(S,Me);we(i.TEXTURE_CUBE_MAP,S);let ue;if(fe){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ie,Me.width,Me.height);for(let ie=0;ie<6;ie++){ue=le[ie].mipmaps;for(let Ce=0;Ce<ue.length;Ce++){const Ge=ue[Ce];S.format!==Yt?Ee!==null?D?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ge.width,Ge.height,Ee,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ie,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,0,0,Ge.width,Ge.height,Ee,be,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce,Ie,Ge.width,Ge.height,0,Ee,be,Ge.data)}}}else{if(ue=S.mipmaps,D&&oe){ue.length>0&&Ae++;const ie=ot(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Ie,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Q){D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,le[ie].width,le[ie].height,Ee,be,le[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,le[ie].width,le[ie].height,0,Ee,be,le[ie].data);for(let Ce=0;Ce<ue.length;Ce++){const ct=ue[Ce].image[ie].image;D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,ct.width,ct.height,Ee,be,ct.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ie,ct.width,ct.height,0,Ee,be,ct.data)}}else{D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ee,be,le[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ie,Ee,be,le[ie]);for(let Ce=0;Ce<ue.length;Ce++){const Ge=ue[Ce];D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,0,0,Ee,be,Ge.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ce+1,Ie,Ee,be,Ge.image[ie])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),$.__version=ce.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function pe(L,S,O,J,ce,$){const Le=r.convert(O.format,O.colorSpace),k=r.convert(O.type),se=M(O.internalFormat,Le,k,O.colorSpace),fe=n.get(S),Q=n.get(O);if(Q.__renderTarget=S,!fe.__hasExternalTextures){const le=Math.max(1,S.width>>$),Me=Math.max(1,S.height>>$);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,$,se,le,Me,S.depth,0,Le,k,null):t.texImage2D(ce,$,se,le,Me,0,Le,k,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ce,Q.__webglTexture,0,De(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ce,Q.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(L,S,O){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){const J=S.depthTexture,ce=J&&J.isDepthTexture?J.type:null,$=_(S.stencilBuffer,ce),Le=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=De(S);ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,k,$,S.width,S.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,k,$,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,L)}else{const J=S.textures;for(let ce=0;ce<J.length;ce++){const $=J[ce],Le=r.convert($.format,$.colorSpace),k=r.convert($.type),se=M($.internalFormat,Le,k,$.colorSpace),fe=De(S);O&&ge(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,se,S.width,S.height):ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ee(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const ce=J.__webglTexture,$=De(S);if(S.depthTexture.format===xs)ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ce,0);else if(S.depthTexture.format===ys)ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function Se(L){const S=n.get(L),O=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){const J=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ce)};J.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=J}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const J=L.texture.mipmaps;J&&J.length>0?ee(S.__webglFramebuffer[0],L):ee(S.__webglFramebuffer,L)}else if(O){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),X(S.__webglDepthbuffer[J],L,!1);else{const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,$)}}else{const J=L.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),X(S.__webglDepthbuffer,L,!1);else{const ce=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function H(L,S,O){const J=n.get(L);S!==void 0&&pe(J.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Se(L)}function A(L){const S=L.texture,O=n.get(L),J=n.get(S);L.addEventListener("dispose",w);const ce=L.textures,$=L.isWebGLCubeRenderTarget===!0,Le=ce.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),$){O.__webglFramebuffer=[];for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[k]=[];for(let se=0;se<S.mipmaps.length;se++)O.__webglFramebuffer[k][se]=i.createFramebuffer()}else O.__webglFramebuffer[k]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let k=0;k<S.mipmaps.length;k++)O.__webglFramebuffer[k]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Le)for(let k=0,se=ce.length;k<se;k++){const fe=n.get(ce[k]);fe.__webglTexture===void 0&&(fe.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&ge(L)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let k=0;k<ce.length;k++){const se=ce[k];O.__webglColorRenderbuffer[k]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[k]);const fe=r.convert(se.format,se.colorSpace),Q=r.convert(se.type),le=M(se.internalFormat,fe,Q,se.colorSpace,L.isXRRenderTarget===!0),Me=De(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,le,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+k,i.RENDERBUFFER,O.__webglColorRenderbuffer[k])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),X(O.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),we(i.TEXTURE_CUBE_MAP,S);for(let k=0;k<6;k++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)pe(O.__webglFramebuffer[k][se],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,se);else pe(O.__webglFramebuffer[k],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let k=0,se=ce.length;k<se;k++){const fe=ce[k],Q=n.get(fe);let le=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(le=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Q.__webglTexture),we(le,fe),pe(O.__webglFramebuffer,L,fe,i.COLOR_ATTACHMENT0+k,le,0),m(fe)&&p(le)}t.unbindTexture()}else{let k=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(k=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(k,J.__webglTexture),we(k,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)pe(O.__webglFramebuffer[se],L,S,i.COLOR_ATTACHMENT0,k,se);else pe(O.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,k,0);m(S)&&p(k),t.unbindTexture()}L.depthBuffer&&Se(L)}function _e(L){const S=L.textures;for(let O=0,J=S.length;O<J;O++){const ce=S[O];if(m(ce)){const $=v(L),Le=n.get(ce).__webglTexture;t.bindTexture($,Le),p($),t.unbindTexture()}}}const G=[],ne=[];function ae(L){if(L.samples>0){if(ge(L)===!1){const S=L.textures,O=L.width,J=L.height;let ce=i.COLOR_BUFFER_BIT;const $=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(L),k=S.length>1;if(k)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const se=L.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),k){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const Q=n.get(S[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,ce,i.NEAREST),c===!0&&(G.length=0,ne.length=0,G.push(i.COLOR_ATTACHMENT0+fe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(G.push($),ne.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,G))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),k)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,Le.__webglColorRenderbuffer[fe]);const Q=n.get(S[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){const S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function De(L){return Math.min(s.maxSamples,L.samples)}function ge(L){const S=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(L){const S=a.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function tt(L,S){const O=L.colorSpace,J=L.format,ce=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||O!==Nt&&O!==Gn&&(Je.getTransfer(O)===st?(J!==Yt||ce!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),S}function ot(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=H,this.setupRenderTarget=A,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ge}function N_(i,e){function t(n,s=Gn){let r;const a=Je.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===Ho)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Go)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ru)return i.BYTE;if(n===Cu)return i.SHORT;if(n===_s)return i.UNSIGNED_SHORT;if(n===zo)return i.INT;if(n===oi)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===ws)return i.HALF_FLOAT;if(n===Iu)return i.ALPHA;if(n===Du)return i.RGB;if(n===Yt)return i.RGBA;if(n===xs)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Vo)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===Nu)return i.RG;if(n===jo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===lr||n===ur||n===hr||n===dr)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Xa||n===Ya||n===Ka)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===$a||n===Za)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===$a)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qa||n===eo||n===to||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===co||n===lo||n===uo||n===ho||n===fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===eo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===no)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===io)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===so)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ro)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ao)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===oo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===co)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fo)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===mo||n===go)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===po)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===go)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===bo||n===_o||n===vo||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===bo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const U_=`
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

}`;class k_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Ju(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new _n({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class O_ extends qn{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const b=typeof XRWebGLBinding<"u",m=new k_,p={},v=t.getContextAttributes();let M=null,_=null;const R=[],T=[],w=new Oe;let P=null;const x=new Rt;x.viewport=new Ze;const y=new Rt;y.viewport=new Ze;const C=[x,y],I=new Wf;let U=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Z=R[K];return Z===void 0&&(Z=new qr,R[K]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(K){let Z=R[K];return Z===void 0&&(Z=new qr,R[K]=Z),Z.getGripSpace()},this.getHand=function(K){let Z=R[K];return Z===void 0&&(Z=new qr,R[K]=Z),Z.getHandSpace()};function W(K){const Z=T.indexOf(K.inputSource);if(Z===-1)return;const pe=R[Z];pe!==void 0&&(pe.update(K.inputSource,K.frame,l||a),pe.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",te);for(let K=0;K<R.length;K++){const Z=T[K];Z!==null&&(T[K]=null,R[K].disconnect(Z))}U=null,N=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(M),f=null,d=null,h=null,s=null,_=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",q),s.addEventListener("inputsourceschange",te),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,X=null,ee=null;v.depth&&(ee=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=v.stencil?ys:xs,X=v.stencil?vs:oi);const Se={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new ci(d.textureWidth,d.textureHeight,{format:Yt,type:bn,depthTexture:new Ku(d.textureWidth,d.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new ci(f.framebufferWidth,f.framebufferHeight,{format:Yt,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let Z=0;Z<K.removed.length;Z++){const pe=K.removed[Z],X=T.indexOf(pe);X>=0&&(T[X]=null,R[X].disconnect(pe))}for(let Z=0;Z<K.added.length;Z++){const pe=K.added[Z];let X=T.indexOf(pe);if(X===-1){for(let Se=0;Se<R.length;Se++)if(Se>=T.length){T.push(pe),X=Se;break}else if(T[Se]===null){T[Se]=pe,X=Se;break}if(X===-1)break}const ee=R[X];ee&&ee.connect(pe)}}const V=new F,re=new F;function de(K,Z,pe){V.setFromMatrixPosition(Z.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const X=V.distanceTo(re),ee=Z.projectionMatrix.elements,Se=pe.projectionMatrix.elements,H=ee[14]/(ee[10]-1),A=ee[14]/(ee[10]+1),_e=(ee[9]+1)/ee[5],G=(ee[9]-1)/ee[5],ne=(ee[8]-1)/ee[0],ae=(Se[8]+1)/Se[0],De=H*ne,ge=H*ae,Pe=X/(-ne+ae),tt=Pe*-ne;if(Z.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(tt),K.translateZ(Pe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ee[10]===-1)K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const ot=H+Pe,L=A+Pe,S=De-tt,O=ge+(X-tt),J=_e*A/L*ot,ce=G*A/L*ot;K.projectionMatrix.makePerspective(S,O,J,ce,ot,L),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function xe(K,Z){Z===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Z.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let Z=K.near,pe=K.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(pe=m.depthFar)),I.near=y.near=x.near=Z,I.far=y.far=x.far=pe,(U!==I.near||N!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),U=I.near,N=I.far),I.layers.mask=K.layers.mask|6,x.layers.mask=I.layers.mask&3,y.layers.mask=I.layers.mask&5;const X=K.parent,ee=I.cameras;xe(I,X);for(let Se=0;Se<ee.length;Se++)xe(ee[Se],X);ee.length===2?de(I,x,y):I.projectionMatrix.copy(x.projectionMatrix),we(K,I,X)};function we(K,Z,pe){pe===null?K.matrix.copy(Z.matrixWorld):(K.matrix.copy(pe.matrixWorld),K.matrix.invert(),K.matrix.multiply(Z.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Z.projectionMatrix),K.projectionMatrixInverse.copy(Z.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Ve=null;function Be(K,Z){if(u=Z.getViewerPose(l||a),g=Z,u!==null){const pe=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let X=!1;pe.length!==I.cameras.length&&(I.cameras.length=0,X=!0);for(let A=0;A<pe.length;A++){const _e=pe[A];let G=null;if(f!==null)G=f.getViewport(_e);else{const ae=h.getViewSubImage(d,_e);G=ae.viewport,A===0&&(e.setRenderTargetTextures(_,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(_))}let ne=C[A];ne===void 0&&(ne=new Rt,ne.layers.enable(A),ne.viewport=new Ze,C[A]=ne),ne.matrix.fromArray(_e.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(_e.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(G.x,G.y,G.width,G.height),A===0&&(I.matrix.copy(ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),X===!0&&I.cameras.push(ne)}const ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){h=n.getBinding();const A=h.getDepthInformation(pe[0]);A&&A.isValid&&A.texture&&m.init(A,s.renderState)}if(ee&&ee.includes("camera-access")&&b){e.state.unbindTexture(),h=n.getBinding();for(let A=0;A<pe.length;A++){const _e=pe[A].camera;if(_e){let G=p[_e];G||(G=new Ju,p[_e]=G);const ne=h.getCameraImage(_e);G.sourceTexture=ne}}}}for(let pe=0;pe<R.length;pe++){const X=T[pe],ee=R[pe];X!==null&&ee!==void 0&&ee.update(X,Z,l||a)}Ve&&Ve(K,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ue=new nh;Ue.setAnimationLoop(Be),this.setAnimationLoop=function(K){Ve=K},this.dispose=function(){}}}const ei=new an,B_=new je;function z_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,M,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),b(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),M=v.envMap,_=v.envMapRotation;M&&(m.envMap.value=M,ei.copy(_),ei.x*=-1,ei.y*=-1,ei.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(B_.makeRotationFromEuler(ei)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function H_(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,M){const _=M.program;n.uniformBlockBinding(v,_)}function l(v,M){let _=s[v.id];_===void 0&&(g(v),_=u(v),s[v.id]=_,v.addEventListener("dispose",m));const R=M.program;n.updateUBOMapping(v,R);const T=e.render.frame;r[v.id]!==T&&(d(v),r[v.id]=T)}function u(v){const M=h();v.__bindingPointIndex=M;const _=i.createBuffer(),R=v.__size,T=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,_),_}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const M=s[v.id],_=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,w=_.length;T<w;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let x=0,y=P.length;x<y;x++){const C=P[x];if(f(C,T,x,R)===!0){const I=C.__offset,U=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let W=0;W<U.length;W++){const q=U[W],te=b(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,I+N,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,N),N+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,_,R){const T=v.value,w=M+"_"+_;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const P=R[w];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[w]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const M=v.uniforms;let _=0;const R=16;for(let w=0,P=M.length;w<P;w++){const x=Array.isArray(M[w])?M[w]:[M[w]];for(let y=0,C=x.length;y<C;y++){const I=x[y],U=Array.isArray(I.value)?I.value:[I.value];for(let N=0,W=U.length;N<W;N++){const q=U[N],te=b(q),V=_%R,re=V%te.boundary,de=V+re;_+=re,de!==0&&R-de<te.storage&&(_+=R-de),I.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=_,_+=te.storage}}}const T=_%R;return T>0&&(_+=R-T),v.__size=_,v.__cache={},this}function b(v){const M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),M}function m(v){const M=v.target;M.removeEventListener("dispose",m);const _=a.indexOf(M.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}class G_{constructor(e={}){const{canvas:t=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,p=null;const v=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let R=!1;this._outputColorSpace=Et;let T=0,w=0,P=null,x=-1,y=null;const C=new Ze,I=new Ze;let U=null;const N=new He(0);let W=0,q=t.width,te=t.height,V=1,re=null,de=null;const xe=new Ze(0,0,q,te),we=new Ze(0,0,q,te);let Ve=!1;const Be=new tc;let Ue=!1,K=!1;const Z=new je,pe=new F,X=new Ze,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Se=!1;function H(){return P===null?V:1}let A=n;function _e(E,B){return t.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Oo}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",ue,!1),A===null){const B="webgl2";if(A=_e(B,E),A===null)throw _e(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let G,ne,ae,De,ge,Pe,tt,ot,L,S,O,J,ce,$,Le,k,se,fe,Q,le,Me,Ee,be,Ie;function D(){G=new Zg(A),G.init(),Ee=new N_(A,G),ne=new jg(A,G,e,Ee),ae=new I_(A,G),ne.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),De=new tb(A),ge=new v_,Pe=new D_(A,G,ae,ge,ne,Ee,De),tt=new Xg(_),ot=new $g(_),L=new op(A),be=new Vg(A,L),S=new Qg(A,L,De,be),O=new ib(A,S,L,De),Q=new nb(A,ne,Pe),k=new qg(ge),J=new __(_,tt,ot,G,ne,be,k),ce=new z_(_,ge),$=new y_,Le=new w_(G),fe=new Gg(_,tt,ot,ae,O,f,c),se=new P_(_,O,ne),Ie=new H_(A,De,ne,ae),le=new Wg(A,G,De),Me=new eb(A,G,De),De.programs=J.programs,_.capabilities=ne,_.extensions=G,_.properties=ge,_.renderLists=$,_.shadowMap=se,_.state=ae,_.info=De}D();const oe=new O_(_,A);this.xr=oe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const E=G.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=G.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,te,!1))},this.getSize=function(E){return E.set(q,te)},this.setSize=function(E,B,j=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,te=B,t.width=Math.floor(E*V),t.height=Math.floor(B*V),j===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(q*V,te*V).floor()},this.setDrawingBufferSize=function(E,B,j){q=E,te=B,V=j,t.width=Math.floor(E*j),t.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(xe)},this.setViewport=function(E,B,j,Y){E.isVector4?xe.set(E.x,E.y,E.z,E.w):xe.set(E,B,j,Y),ae.viewport(C.copy(xe).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(we)},this.setScissor=function(E,B,j,Y){E.isVector4?we.set(E.x,E.y,E.z,E.w):we.set(E,B,j,Y),ae.scissor(I.copy(we).multiplyScalar(V).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(E){ae.setScissorTest(Ve=E)},this.setOpaqueSort=function(E){re=E},this.setTransparentSort=function(E){de=E},this.getClearColor=function(E){return E.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,j=!0){let Y=0;if(E){let z=!1;if(P!==null){const he=P.texture.format;z=he===qo||he===jo||he===Wo}if(z){const he=P.texture.type,ye=he===bn||he===oi||he===_s||he===vs||he===Ho||he===Go,Re=fe.getClearColor(),Te=fe.getClearAlpha(),ke=Re.r,ze=Re.g,Ne=Re.b;ye?(g[0]=ke,g[1]=ze,g[2]=Ne,g[3]=Te,A.clearBufferuiv(A.COLOR,0,g)):(b[0]=ke,b[1]=ze,b[2]=Ne,b[3]=Te,A.clearBufferiv(A.COLOR,0,b))}else Y|=A.COLOR_BUFFER_BIT}B&&(Y|=A.DEPTH_BUFFER_BIT),j&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),fe.dispose(),$.dispose(),Le.dispose(),ge.dispose(),tt.dispose(),ot.dispose(),O.dispose(),be.dispose(),Ie.dispose(),J.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",un),oe.removeEventListener("sessionend",dc),Xn.stop()};function me(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=De.autoReset,B=se.enabled,j=se.autoUpdate,Y=se.needsUpdate,z=se.type;D(),De.autoReset=E,se.enabled=B,se.autoUpdate=j,se.needsUpdate=Y,se.type=z}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){const B=E.target;B.removeEventListener("dispose",ie),Ce(B)}function Ce(E){Ge(E),ge.remove(E)}function Ge(E){const B=ge.get(E).programs;B!==void 0&&(B.forEach(function(j){J.releaseProgram(j)}),E.isShaderMaterial&&J.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,Y,z,he){B===null&&(B=ee);const ye=z.isMesh&&z.matrixWorld.determinant()<0,Re=vh(E,B,j,Y,z);ae.setMaterial(Y,ye);let Te=j.index,ke=1;if(Y.wireframe===!0){if(Te=S.getWireframeAttribute(j),Te===void 0)return;ke=2}const ze=j.drawRange,Ne=j.attributes.position;let Ke=ze.start*ke,it=(ze.start+ze.count)*ke;he!==null&&(Ke=Math.max(Ke,he.start*ke),it=Math.min(it,(he.start+he.count)*ke)),Te!==null?(Ke=Math.max(Ke,0),it=Math.min(it,Te.count)):Ne!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,Ne.count));const mt=it-Ke;if(mt<0||mt===1/0)return;be.setup(z,Y,Re,j,Te);let lt,at=le;if(Te!==null&&(lt=L.get(Te),at=Me,at.setIndex(lt)),z.isMesh)Y.wireframe===!0?(ae.setLineWidth(Y.wireframeLinewidth*H()),at.setMode(A.LINES)):at.setMode(A.TRIANGLES);else if(z.isLine){let Fe=Y.linewidth;Fe===void 0&&(Fe=1),ae.setLineWidth(Fe*H()),z.isLineSegments?at.setMode(A.LINES):z.isLineLoop?at.setMode(A.LINE_LOOP):at.setMode(A.LINE_STRIP)}else z.isPoints?at.setMode(A.POINTS):z.isSprite&&at.setMode(A.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ts("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),at.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(G.get("WEBGL_multi_draw"))at.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,ft=z._multiDrawCounts,$e=z._multiDrawCount,Ot=Te?L.get(Te).bytesPerElement:1,hi=ge.get(Y).currentProgram.getUniforms();for(let Bt=0;Bt<$e;Bt++)hi.setValue(A,"_gl_DrawID",Bt),at.render(Fe[Bt]/Ot,ft[Bt])}else if(z.isInstancedMesh)at.renderInstances(Ke,mt,z.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ft=Math.min(j.instanceCount,Fe);at.renderInstances(Ke,mt,ft)}else at.render(Ke,mt)};function ct(E,B,j){E.transparent===!0&&E.side===mn&&E.forceSinglePass===!1?(E.side=It,E.needsUpdate=!0,Ls(E,B,j),E.side=In,E.needsUpdate=!0,Ls(E,B,j),E.side=mn):Ls(E,B,j)}this.compile=function(E,B,j=null){j===null&&(j=E),p=Le.get(j),p.init(B),M.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==j&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const he=z.material;if(he)if(Array.isArray(he))for(let ye=0;ye<he.length;ye++){const Re=he[ye];ct(Re,j,z),Y.add(Re)}else ct(he,j,z),Y.add(he)}),p=M.pop(),Y},this.compileAsync=function(E,B,j=null){const Y=this.compile(E,B,j);return new Promise(z=>{function he(){if(Y.forEach(function(ye){ge.get(ye).currentProgram.isReady()&&Y.delete(ye)}),Y.size===0){z(E);return}setTimeout(he,10)}G.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Qe=null;function xn(E){Qe&&Qe(E)}function un(){Xn.stop()}function dc(){Xn.start()}const Xn=new nh;Xn.setAnimationLoop(xn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(E){Qe=E,oe.setAnimationLoop(E),E===null?Xn.stop():Xn.start()},oe.addEventListener("sessionstart",un),oe.addEventListener("sessionend",dc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(B),B=oe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,B,P),p=Le.get(E,M.length),p.init(B),M.push(p),Z.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Be.setFromProjectionMatrix(Z,gn,B.reversedDepth),K=this.localClippingEnabled,Ue=k.init(this.clippingPlanes,K),m=$.get(E,v.length),m.init(),v.push(m),oe.enabled===!0&&oe.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&Sr(he,B,-1/0,_.sortObjects)}Sr(E,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(re,de),Se=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Se&&fe.addToRenderList(m,E),this.info.render.frame++,Ue===!0&&k.beginShadows();const j=p.state.shadowsArray;se.render(j,E,B),Ue===!0&&k.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){const he=B.cameras;if(z.length>0)for(let ye=0,Re=he.length;ye<Re;ye++){const Te=he[ye];pc(Y,z,E,Te)}Se&&fe.render(E);for(let ye=0,Re=he.length;ye<Re;ye++){const Te=he[ye];fc(m,E,Te,Te.viewport)}}else z.length>0&&pc(Y,z,E,B),Se&&fe.render(E),fc(m,E,B);P!==null&&w===0&&(Pe.updateMultisampleRenderTarget(P),Pe.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(_,E,B),be.resetDefaultState(),x=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],Ue===!0&&k.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Sr(E,B,j,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){Y&&X.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Z);const ye=O.update(E),Re=E.material;Re.visible&&m.push(E,ye,Re,j,X.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const ye=O.update(E),Re=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),X.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),X.copy(ye.boundingSphere.center)),X.applyMatrix4(E.matrixWorld).applyMatrix4(Z)),Array.isArray(Re)){const Te=ye.groups;for(let ke=0,ze=Te.length;ke<ze;ke++){const Ne=Te[ke],Ke=Re[Ne.materialIndex];Ke&&Ke.visible&&m.push(E,ye,Ke,j,X.z,Ne)}}else Re.visible&&m.push(E,ye,Re,j,X.z,null)}}const he=E.children;for(let ye=0,Re=he.length;ye<Re;ye++)Sr(he[ye],B,j,Y)}function fc(E,B,j,Y){const z=E.opaque,he=E.transmissive,ye=E.transparent;p.setupLightsView(j),Ue===!0&&k.setGlobalState(_.clippingPlanes,j),Y&&ae.viewport(C.copy(Y)),z.length>0&&Ps(z,B,j),he.length>0&&Ps(he,B,j),ye.length>0&&Ps(ye,B,j),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function pc(E,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new ci(1,1,{generateMipmaps:!0,type:G.has("EXT_color_buffer_half_float")||G.has("EXT_color_buffer_float")?ws:bn,minFilter:Rn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const he=p.state.transmissionRenderTarget[Y.id],ye=Y.viewport||C;he.setSize(ye.z*_.transmissionResolutionScale,ye.w*_.transmissionResolutionScale);const Re=_.getRenderTarget(),Te=_.getActiveCubeFace(),ke=_.getActiveMipmapLevel();_.setRenderTarget(he),_.getClearColor(N),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),Se&&fe.render(j);const ze=_.toneMapping;_.toneMapping=jn;const Ne=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Ue===!0&&k.setGlobalState(_.clippingPlanes,Y),Ps(E,j,Y),Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he),G.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let it=0,mt=B.length;it<mt;it++){const lt=B[it],at=lt.object,Fe=lt.geometry,ft=lt.material,$e=lt.group;if(ft.side===mn&&at.layers.test(Y.layers)){const Ot=ft.side;ft.side=It,ft.needsUpdate=!0,mc(at,j,Y,Fe,ft,$e),ft.side=Ot,ft.needsUpdate=!0,Ke=!0}}Ke===!0&&(Pe.updateMultisampleRenderTarget(he),Pe.updateRenderTargetMipmap(he))}_.setRenderTarget(Re,Te,ke),_.setClearColor(N,W),Ne!==void 0&&(Y.viewport=Ne),_.toneMapping=ze}function Ps(E,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,he=E.length;z<he;z++){const ye=E[z],Re=ye.object,Te=ye.geometry,ke=ye.group;let ze=ye.material;ze.allowOverride===!0&&Y!==null&&(ze=Y),Re.layers.test(j.layers)&&mc(Re,B,j,Te,ze,ke)}}function mc(E,B,j,Y,z,he){E.onBeforeRender(_,B,j,Y,z,he),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(_,B,j,Y,E,he),z.transparent===!0&&z.side===mn&&z.forceSinglePass===!1?(z.side=It,z.needsUpdate=!0,_.renderBufferDirect(j,B,Y,z,E,he),z.side=In,z.needsUpdate=!0,_.renderBufferDirect(j,B,Y,z,E,he),z.side=mn):_.renderBufferDirect(j,B,Y,z,E,he),E.onAfterRender(_,B,j,Y,z,he)}function Ls(E,B,j){B.isScene!==!0&&(B=ee);const Y=ge.get(E),z=p.state.lights,he=p.state.shadowsArray,ye=z.state.version,Re=J.getParameters(E,z.state,he,B,j),Te=J.getProgramCacheKey(Re);let ke=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?ot:tt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,ke===void 0&&(E.addEventListener("dispose",ie),ke=new Map,Y.programs=ke);let ze=ke.get(Te);if(ze!==void 0){if(Y.currentProgram===ze&&Y.lightsStateVersion===ye)return bc(E,Re),ze}else Re.uniforms=J.getUniforms(E),E.onBeforeCompile(Re,_),ze=J.acquireProgram(Re,Te),ke.set(Te,ze),Y.uniforms=Re.uniforms;const Ne=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=k.uniform),bc(E,Re),Y.needsLights=yh(E),Y.lightsStateVersion=ye,Y.needsLights&&(Ne.ambientLightColor.value=z.state.ambient,Ne.lightProbe.value=z.state.probe,Ne.directionalLights.value=z.state.directional,Ne.directionalLightShadows.value=z.state.directionalShadow,Ne.spotLights.value=z.state.spot,Ne.spotLightShadows.value=z.state.spotShadow,Ne.rectAreaLights.value=z.state.rectArea,Ne.ltc_1.value=z.state.rectAreaLTC1,Ne.ltc_2.value=z.state.rectAreaLTC2,Ne.pointLights.value=z.state.point,Ne.pointLightShadows.value=z.state.pointShadow,Ne.hemisphereLights.value=z.state.hemi,Ne.directionalShadowMap.value=z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ne.spotShadowMap.value=z.state.spotShadowMap,Ne.spotLightMatrix.value=z.state.spotLightMatrix,Ne.spotLightMap.value=z.state.spotLightMap,Ne.pointShadowMap.value=z.state.pointShadowMap,Ne.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=ze,Y.uniformsList=null,ze}function gc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=fr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function bc(E,B){const j=ge.get(E);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function vh(E,B,j,Y,z){B.isScene!==!0&&(B=ee),Pe.resetTextureUnits();const he=B.fog,ye=Y.isMeshStandardMaterial?B.environment:null,Re=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nt,Te=(Y.isMeshStandardMaterial?ot:tt).get(Y.envMap||ye),ke=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ze=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ne=!!j.morphAttributes.position,Ke=!!j.morphAttributes.normal,it=!!j.morphAttributes.color;let mt=jn;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(mt=_.toneMapping);const lt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=lt!==void 0?lt.length:0,Fe=ge.get(Y),ft=p.state.lights;if(Ue===!0&&(K===!0||E!==y)){const Ct=E===y&&Y.id===x;k.setState(Y,E,Ct)}let $e=!1;Y.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ft.state.version||Fe.outputColorSpace!==Re||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==Te||Y.fog===!0&&Fe.fog!==he||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==k.numPlanes||Fe.numIntersection!==k.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==ze||Fe.morphTargets!==Ne||Fe.morphNormals!==Ke||Fe.morphColors!==it||Fe.toneMapping!==mt||Fe.morphTargetsCount!==at)&&($e=!0):($e=!0,Fe.__version=Y.version);let Ot=Fe.currentProgram;$e===!0&&(Ot=Ls(Y,B,z));let hi=!1,Bt=!1,Zi=!1;const pt=Ot.getUniforms(),Wt=Fe.uniforms;if(ae.useProgram(Ot.program)&&(hi=!0,Bt=!0,Zi=!0),Y.id!==x&&(x=Y.id,Bt=!0),hi||y!==E){ae.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(A,"projectionMatrix",E.projectionMatrix),pt.setValue(A,"viewMatrix",E.matrixWorldInverse);const Ut=pt.map.cameraPosition;Ut!==void 0&&Ut.setValue(A,pe.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&pt.setValue(A,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&pt.setValue(A,"isOrthographic",E.isOrthographicCamera===!0),y!==E&&(y=E,Bt=!0,Zi=!0)}if(z.isSkinnedMesh){pt.setOptional(A,z,"bindMatrix"),pt.setOptional(A,z,"bindMatrixInverse");const Ct=z.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),pt.setValue(A,"boneTexture",Ct.boneTexture,Pe))}z.isBatchedMesh&&(pt.setOptional(A,z,"batchingTexture"),pt.setValue(A,"batchingTexture",z._matricesTexture,Pe),pt.setOptional(A,z,"batchingIdTexture"),pt.setValue(A,"batchingIdTexture",z._indirectTexture,Pe),pt.setOptional(A,z,"batchingColorTexture"),z._colorsTexture!==null&&pt.setValue(A,"batchingColorTexture",z._colorsTexture,Pe));const jt=j.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Q.update(z,j,Ot),(Bt||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,pt.setValue(A,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Wt.envMap.value=Te,Wt.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(Wt.envMapIntensity.value=B.environmentIntensity),Bt&&(pt.setValue(A,"toneMappingExposure",_.toneMappingExposure),Fe.needsLights&&xh(Wt,Zi),he&&Y.fog===!0&&ce.refreshFogUniforms(Wt,he),ce.refreshMaterialUniforms(Wt,Y,V,te,p.state.transmissionRenderTarget[E.id]),fr.upload(A,gc(Fe),Wt,Pe)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fr.upload(A,gc(Fe),Wt,Pe),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&pt.setValue(A,"center",z.center),pt.setValue(A,"modelViewMatrix",z.modelViewMatrix),pt.setValue(A,"normalMatrix",z.normalMatrix),pt.setValue(A,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ct=Y.uniformsGroups;for(let Ut=0,Er=Ct.length;Ut<Er;Ut++){const Yn=Ct[Ut];Ie.update(Yn,Ot),Ie.bind(Yn,Ot)}}return Ot}function xh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,j){const Y=ge.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ge.get(E.texture).__webglTexture=B,ge.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:j,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){const j=ge.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0};const Mh=A.createFramebuffer();this.setRenderTarget=function(E,B=0,j=0){P=E,T=B,w=j;let Y=!0,z=null,he=!1,ye=!1;if(E){const Te=ge.get(E);if(Te.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1;else if(Te.__webglFramebuffer===void 0)Pe.setupRenderTarget(E);else if(Te.__hasExternalTextures)Pe.rebindTextures(E,ge.get(E.texture).__webglTexture,ge.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(Te.__boundDepthTexture!==Ne){if(Ne!==null&&ge.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Pe.setupDepthRenderbuffer(E)}}const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const ze=ge.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[B])?z=ze[B][j]:z=ze[B],he=!0):E.samples>0&&Pe.useMultisampledRTT(E)===!1?z=ge.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?z=ze[j]:z=ze,C.copy(E.viewport),I.copy(E.scissor),U=E.scissorTest}else C.copy(xe).multiplyScalar(V).floor(),I.copy(we).multiplyScalar(V).floor(),U=Ve;if(j!==0&&(z=Mh),ae.bindFramebuffer(A.FRAMEBUFFER,z)&&Y&&ae.drawBuffers(E,z),ae.viewport(C),ae.scissor(I),ae.setScissorTest(U),he){const Te=ge.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,j)}else if(ye){const Te=B;for(let ke=0;ke<E.textures.length;ke++){const ze=ge.get(E.textures[ke]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+ke,ze.__webglTexture,j,Te)}}else if(E!==null&&j!==0){const Te=ge.get(E.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Te.__webglTexture,j)}x=-1},this.readRenderTargetPixels=function(E,B,j,Y,z,he,ye,Re=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){ae.bindFramebuffer(A.FRAMEBUFFER,Te);try{const ke=E.textures[Re],ze=ke.format,Ne=ke.type;if(!ne.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&j>=0&&j<=E.height-z&&(E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(B,j,Y,z,Ee.convert(ze),Ee.convert(Ne),he))}finally{const ke=P!==null?ge.get(P).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(E,B,j,Y,z,he,ye,Re=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=ge.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(B>=0&&B<=E.width-Y&&j>=0&&j<=E.height-z){ae.bindFramebuffer(A.FRAMEBUFFER,Te);const ke=E.textures[Re],ze=ke.format,Ne=ke.type;if(!ne.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.bufferData(A.PIXEL_PACK_BUFFER,he.byteLength,A.STREAM_READ),E.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(B,j,Y,z,Ee.convert(ze),Ee.convert(Ne),0);const it=P!==null?ge.get(P).__webglFramebuffer:null;ae.bindFramebuffer(A.FRAMEBUFFER,it);const mt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Hd(A,mt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,he),A.deleteBuffer(Ke),A.deleteSync(mt),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,j=0){const Y=Math.pow(2,-j),z=Math.floor(E.image.width*Y),he=Math.floor(E.image.height*Y),ye=B!==null?B.x:0,Re=B!==null?B.y:0;Pe.setTexture2D(E,0),A.copyTexSubImage2D(A.TEXTURE_2D,j,0,0,ye,Re,z,he),ae.unbindTexture()};const Sh=A.createFramebuffer(),Eh=A.createFramebuffer();this.copyTextureToTexture=function(E,B,j=null,Y=null,z=0,he=null){he===null&&(z!==0?(Ts("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=z,z=0):he=0);let ye,Re,Te,ke,ze,Ne,Ke,it,mt;const lt=E.isCompressedTexture?E.mipmaps[he]:E.image;if(j!==null)ye=j.max.x-j.min.x,Re=j.max.y-j.min.y,Te=j.isBox3?j.max.z-j.min.z:1,ke=j.min.x,ze=j.min.y,Ne=j.isBox3?j.min.z:0;else{const jt=Math.pow(2,-z);ye=Math.floor(lt.width*jt),Re=Math.floor(lt.height*jt),E.isDataArrayTexture?Te=lt.depth:E.isData3DTexture?Te=Math.floor(lt.depth*jt):Te=1,ke=0,ze=0,Ne=0}Y!==null?(Ke=Y.x,it=Y.y,mt=Y.z):(Ke=0,it=0,mt=0);const at=Ee.convert(B.format),Fe=Ee.convert(B.type);let ft;B.isData3DTexture?(Pe.setTexture3D(B,0),ft=A.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Pe.setTexture2DArray(B,0),ft=A.TEXTURE_2D_ARRAY):(Pe.setTexture2D(B,0),ft=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,B.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,B.unpackAlignment);const $e=A.getParameter(A.UNPACK_ROW_LENGTH),Ot=A.getParameter(A.UNPACK_IMAGE_HEIGHT),hi=A.getParameter(A.UNPACK_SKIP_PIXELS),Bt=A.getParameter(A.UNPACK_SKIP_ROWS),Zi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,lt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,lt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),A.pixelStorei(A.UNPACK_SKIP_ROWS,ze),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ne);const pt=E.isDataArrayTexture||E.isData3DTexture,Wt=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){const jt=ge.get(E),Ct=ge.get(B),Ut=ge.get(jt.__renderTarget),Er=ge.get(Ct.__renderTarget);ae.bindFramebuffer(A.READ_FRAMEBUFFER,Ut.__webglFramebuffer),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Er.__webglFramebuffer);for(let Yn=0;Yn<Te;Yn++)pt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(E).__webglTexture,z,Ne+Yn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ge.get(B).__webglTexture,he,mt+Yn)),A.blitFramebuffer(ke,ze,ye,Re,Ke,it,ye,Re,A.DEPTH_BUFFER_BIT,A.NEAREST);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||ge.has(E)){const jt=ge.get(E),Ct=ge.get(B);ae.bindFramebuffer(A.READ_FRAMEBUFFER,Sh),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,Eh);for(let Ut=0;Ut<Te;Ut++)pt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,jt.__webglTexture,z,Ne+Ut):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,jt.__webglTexture,z),Wt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ct.__webglTexture,he,mt+Ut):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ct.__webglTexture,he),z!==0?A.blitFramebuffer(ke,ze,ye,Re,Ke,it,ye,Re,A.COLOR_BUFFER_BIT,A.NEAREST):Wt?A.copyTexSubImage3D(ft,he,Ke,it,mt+Ut,ke,ze,ye,Re):A.copyTexSubImage2D(ft,he,Ke,it,ke,ze,ye,Re);ae.bindFramebuffer(A.READ_FRAMEBUFFER,null),ae.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Wt?E.isDataTexture||E.isData3DTexture?A.texSubImage3D(ft,he,Ke,it,mt,ye,Re,Te,at,Fe,lt.data):B.isCompressedArrayTexture?A.compressedTexSubImage3D(ft,he,Ke,it,mt,ye,Re,Te,at,lt.data):A.texSubImage3D(ft,he,Ke,it,mt,ye,Re,Te,at,Fe,lt):E.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,he,Ke,it,ye,Re,at,Fe,lt.data):E.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,he,Ke,it,lt.width,lt.height,at,lt.data):A.texSubImage2D(A.TEXTURE_2D,he,Ke,it,ye,Re,at,Fe,lt);A.pixelStorei(A.UNPACK_ROW_LENGTH,$e),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ot),A.pixelStorei(A.UNPACK_SKIP_PIXELS,hi),A.pixelStorei(A.UNPACK_SKIP_ROWS,Bt),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Zi),he===0&&B.generateMipmaps&&A.generateMipmap(ft),ae.unbindTexture()},this.initRenderTarget=function(E){ge.get(E).__webglFramebuffer===void 0&&Pe.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Pe.setTextureCube(E,0):E.isData3DTexture?Pe.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Pe.setTexture2DArray(E,0):Pe.setTexture2D(E,0),ae.unbindTexture()},this.resetState=function(){T=0,w=0,P=null,ae.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function kl(i,e){if(e===fd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===yo||e===Fu){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===yo)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class V_ extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Y_(t)}),this.register(function(t){return new K_(t)}),this.register(function(t){return new s0(t)}),this.register(function(t){return new r0(t)}),this.register(function(t){return new a0(t)}),this.register(function(t){return new $_(t)}),this.register(function(t){return new Z_(t)}),this.register(function(t){return new Q_(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new X_(t)}),this.register(function(t){return new t0(t)}),this.register(function(t){return new J_(t)}),this.register(function(t){return new i0(t)}),this.register(function(t){return new n0(t)}),this.register(function(t){return new j_(t)}),this.register(function(t){return new o0(t)}),this.register(function(t){return new c0(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=gs.extractUrlBase(e);a=gs.resolveURL(l,this.path)}else a=gs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new eh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===oh){try{a[Ye.KHR_BINARY_GLTF]=new l0(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new M0(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:a[h]=new q_;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[h]=new u0(r,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[h]=new h0;break;case Ye.KHR_MESH_QUANTIZATION:a[h]=new d0;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function W_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class j_{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new He(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Nt);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new wo(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new th(u),l.distance=h;break;case"spot":l=new zf(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),fn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class q_{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return ri}extendParams(e,t,n){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Nt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Et))}return Promise.all(s)}}class X_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Y_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(r)}}class K_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class J_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class $_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Nt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Et)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class Z_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class Q_{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(o[0],o[1],o[2],Nt),Promise.all(r)}}class e0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class t0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(o[0],o[1],o[2],Nt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Et)),Promise.all(r)}}class n0{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class i0{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vn}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class s0{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class r0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class a0{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class o0{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class c0{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Xt.TRIANGLES&&l.mode!==Xt.TRIANGLE_STRIP&&l.mode!==Xt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const g of h){const b=new je,m=new F,p=new Vt,v=new F(1,1,1),M=new Xu(g.geometry,g.material,d);for(let _=0;_<d;_++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,_),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,_),c.SCALE&&v.fromBufferAttribute(c.SCALE,_),M.setMatrixAt(_,b.compose(m,p,v));for(const _ in c)if(_==="_COLOR_0"){const R=c[_];M.instanceColor=new Eo(R.array,R.itemSize,R.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&g.geometry.setAttribute(_,c[_]);ut.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const oh="glTF",os=12,Ol={JSON:1313821514,BIN:5130562};class l0{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,os),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==oh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-os,r=new DataView(e,os);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===Ol.JSON){const l=new Uint8Array(e,os+a,o);this.content=n.decode(l)}else if(c===Ol.BIN){const l=os+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class u0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=Io[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Io[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=Fi[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const b=f.attributes[g],m=c[g];m!==void 0&&(b.normalized=m)}h(f)},o,l,Nt,d)})})}}class h0{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class d0{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class ch extends Cs{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,b=g-l,m=-2*f+3*d,p=f-d,v=1-m,M=p-d+h;for(let _=0;_!==o;_++){const R=a[b+_+o],T=a[b+_+c]*u,w=a[g+_+o],P=a[g+_]*u;r[_]=v*R+M*T+m*w+p*P}return r}}const f0=new Vt;class p0 extends ch{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return f0.fromArray(r).normalize().toArray(r),r}}const Xt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Fi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bl={9728:Dt,9729:Gt,9984:wu,9985:cr,9986:ls,9987:Rn},zl={33071:Vn,33648:pr,10497:zi},aa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Io={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},m0={CUBICSPLINE:void 0,LINEAR:Ss,STEP:Ms},oa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function g0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new As({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),i.DefaultMaterial}function ti(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function b0(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function _0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function v0(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ca(t.attributes):e=i.indices+":"+ca(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ca(i.targets[n]);return e}function ca(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Do(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function x0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const y0=new je;class M0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new W_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new kf(this.options.manager):this.textureLoader=new Vf(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ti(r,o,s),fn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(gs.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=aa[s.type],o=Fi[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new gt(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=aa[s.type],l=Fi[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let b,m;if(f&&f!==h){const p=Math.floor(d/f),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let M=t.cache.get(v);M||(b=new l(o,p*f,s.count*f/u),M=new ff(b,f/u),t.cache.add(v,M)),m=new Zo(M,c,d%f/u,g)}else o===null?b=new l(s.count*c):b=new l(o,d,s.count*c),m=new gt(b,c,g);if(s.sparse!==void 0){const p=aa.SCALAR,v=Fi[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,R=new v(a[1],M,s.sparse.count*p),T=new l(a[2],_,s.sparse.count*c);o!==null&&(m=new gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,P=R.length;w<P;w++){const x=R[w];if(m.setX(x,T[w*c]),c>=2&&m.setY(x,T[w*c+1]),c>=3&&m.setZ(x,T[w*c+2]),c>=4&&m.setW(x,T[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Bl[d.magFilter]||Gt,u.minFilter=Bl[d.minFilter]||Rn,u.wrapS=zl[d.wrapS]||zi,u.wrapT=zl[d.wrapT]||zi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Dt&&u.minFilter!==Gt,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(b){const m=new Tt(b);m.needsUpdate=!0,d(m)}),t.load(gs.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),fn(h,a),h.userData.mimeType=a.mimeType||x0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new ic,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Yu,rn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return As}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new He(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Nt),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Et)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=mn);const u=r.alphaMode||oa.OPAQUE;if(u===oa.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===oa.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==ri&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==ri&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==ri){const h=r.emissiveFactor;o.emissive=new He().setRGB(h[0],h[1],h[2],Nt)}return r.emissiveTexture!==void 0&&a!==ri&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Et)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),fn(h,r),t.associations.set(h,{materials:e}),r.extensions&&ti(s,h,r),h})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hl(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=v0(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Hl(new kt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?g0(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const b=u[f],m=a[f];let p;const v=l[f];if(m.mode===Xt.TRIANGLES||m.mode===Xt.TRIANGLE_STRIP||m.mode===Xt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new mf(b,v):new dt(b,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Xt.TRIANGLE_STRIP?p.geometry=kl(p.geometry,Fu):m.mode===Xt.TRIANGLE_FAN&&(p.geometry=kl(p.geometry,yo));else if(m.mode===Xt.LINES)p=new yf(b,v);else if(m.mode===Xt.LINE_STRIP)p=new nc(b,v);else if(m.mode===Xt.LINE_LOOP)p=new Mf(b,v);else if(m.mode===Xt.POINTS)p=new sc(b,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&_0(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fn(p,r),m.extensions&&ti(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ti(s,h[0],r),h[0];const d=new nn;r.extensions&&ti(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(ms.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ac(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new je;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ec(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],b=f.target,m=b.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],b=h[3],m=h[4],p=[];for(let M=0,_=d.length;M<_;M++){const R=d[M],T=f[M],w=g[M],P=b[M],x=m[M];if(R===void 0)continue;R.updateMatrix&&R.updateMatrix();const y=n._createAnimationTracks(R,T,w,P,x);if(y)for(let C=0;C<y.length;C++)p.push(y[C])}const v=new Ao(r,void 0,p);return fn(v,s),v})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,y0)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new qu:l.length>1?u=new nn:l.length===1?u=l[0]:u=new ut,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),fn(u,r),r.extensions&&ti(n,u,r),r.matrix!==void 0){const h=new je;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new nn;n.name&&(r.name=s.createUniqueName(n.name)),fn(r,n),n.extensions&&ti(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof rn||d instanceof Tt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Bn[r.path]===Bn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Bn[r.path]){case Bn.weights:l=Vi;break;case Bn.rotation:l=Wi;break;case Bn.translation:case Bn.scale:l=ji;break;default:switch(n.itemSize){case 1:l=Vi;break;case 2:case 3:default:l=ji;break}break}const u=s.interpolation!==void 0?m0[s.interpolation]:Ss,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const g=new l(c[d]+"."+Bn[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Do(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Wi?p0:ch;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function S0(i,e,t){const n=e.attributes,s=new on;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){const u=Do(Fi[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new F,c=new F;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const b=Do(Fi[d.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new cn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Hl(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=Io[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Nt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),fn(i,e),S0(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?b0(i,e.targets,t):i})}const Gl={type:"change"},uc={type:"start"},lh={type:"end"},rr=new qi,Vl=new Hn,E0=Math.cos(70*ms.DEG2RAD),xt=new F,Ft=2*Math.PI,rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},la=1e-6;class T0 extends rp{constructor(e,t=null){super(e,t),this.state=rt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ni.ROTATE,MIDDLE:Ni.DOLLY,RIGHT:Ni.PAN},this.touches={ONE:Pi.ROTATE,TWO:Pi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new Vt,this._lastTargetPosition=new F,this._quat=new Vt().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Co,this._sphericalDelta=new Co,this._scale=1,this._panOffset=new F,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new F,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w0.bind(this),this._onPointerDown=A0.bind(this),this._onPointerUp=R0.bind(this),this._onContextMenu=U0.bind(this),this._onMouseWheel=L0.bind(this),this._onKeyDown=I0.bind(this),this._onTouchStart=D0.bind(this),this._onTouchMove=N0.bind(this),this._onMouseDown=C0.bind(this),this._onMouseMove=P0.bind(this),this._interceptControlDown=F0.bind(this),this._interceptControlUp=k0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Gl),this.update(),this.state=rt.NONE}update(e=null){const t=this.object.position;xt.copy(t).sub(this.target),xt.applyQuaternion(this._quat),this._spherical.setFromVector3(xt),this.autoRotate&&this.state===rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ft:n>Math.PI&&(n-=Ft),s<-Math.PI?s+=Ft:s>Math.PI&&(s-=Ft),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xt.setFromSpherical(this._spherical),xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xt.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new F(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(rr.origin.copy(this.object.position),rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rr.direction))<E0?this.object.lookAt(this.target):(Vl.setFromNormalAndCoplanarPoint(this.object.up,this.target),rr.intersectPlane(Vl,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>la||8*(1-this._lastQuaternion.dot(this.object.quaternion))>la||this._lastTargetPosition.distanceToSquared(this.target)>la?(this.dispatchEvent(Gl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ft/60*this.autoRotateSpeed*e:Ft/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){xt.setFromMatrixColumn(t,0),xt.multiplyScalar(-e),this._panOffset.add(xt)}_panUp(e,t){this.screenSpacePanning===!0?xt.setFromMatrixColumn(t,1):(xt.setFromMatrixColumn(t,0),xt.crossVectors(this.object.up,xt)),xt.multiplyScalar(e),this._panOffset.add(xt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xt.copy(s).sub(this.target);let r=xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ft*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ft*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ft*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function A0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function w0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function R0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lh),this.state=rt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function C0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ni.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=rt.DOLLY;break;case Ni.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}break;case Ni.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=rt.PAN}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(uc)}function P0(i){switch(this.state){case rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function L0(i){this.enabled===!1||this.enableZoom===!1||this.state!==rt.NONE||(i.preventDefault(),this.dispatchEvent(uc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lh))}function I0(i){this.enabled!==!1&&this._handleKeyDown(i)}function D0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Pi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=rt.TOUCH_ROTATE;break;case Pi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=rt.TOUCH_PAN;break;default:this.state=rt.NONE}break;case 2:switch(this.touches.TWO){case Pi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=rt.TOUCH_DOLLY_PAN;break;case Pi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=rt.TOUCH_DOLLY_ROTATE;break;default:this.state=rt.NONE}break;default:this.state=rt.NONE}this.state!==rt.NONE&&this.dispatchEvent(uc)}function N0(i){switch(this._trackPointer(i),this.state){case rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=rt.NONE}}function U0(i){this.enabled!==!1&&i.preventDefault()}function F0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var O0=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?o(e):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),M=0;M<p.length;++M){var _=p.charCodeAt(M);v[M]=_>96?_-97:_>64?_-39:_+4}for(var R=0,M=0;M<p.length;++M)v[R++]=v[M]<60?n[v[M]]:(v[M]-60)*64+v[++M];return v.buffer.slice(0,R)}function c(p,v,M,_,R,T,w){var P=p.exports.sbrk,x=_+3&-4,y=P(x*R),C=P(T.length),I=new Uint8Array(p.exports.memory.buffer);I.set(T,C);var U=v(y,_,R,C,T.length);if(U==0&&w&&w(y,x,R),M.set(I.subarray(y,y+_*R)),P(y-P(0)),U!=0)throw new Error("Malformed buffer data: "+U)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(M){var _=M.data;v.pending-=_.count,v.requests[_.id][_.action](_.value),delete v.requests[_.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),M=new Blob([v],{type:"text/javascript"}),_=URL.createObjectURL(M),R=h.length;R<p;++R)h[R]=f(_);for(var R=p;R<h.length;++R)h[R].object.postMessage({});h.length=p,URL.revokeObjectURL(_)}function b(p,v,M,_,R){for(var T=h[0],w=1;w<h.length;++w)h[w].pending<T.pending&&(T=h[w]);return new Promise(function(P,x){var y=new Uint8Array(M),C=++d;T.pending+=p,T.requests[C]={resolve:P,reject:x},T.object.postMessage({id:C,count:p,size:v,source:y,mode:_,filter:R},[y.buffer])})}function m(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(M){try{var _=new Uint8Array(v.count*v.size);c(M,M.exports[v.mode],_,v.count,v.size,v.source,M.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:_},[_.buffer])}catch(R){self.postMessage({id:v.id,count:v.count,action:"reject",value:R})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,M,_,R){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,M,_,r.exports[l[R]])},decodeIndexBuffer:function(p,v,M,_){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,M,_)},decodeIndexSequence:function(p,v,M,_){c(r,r.exports.meshopt_decodeIndexSequence,p,v,M,_)},decodeGltfBuffer:function(p,v,M,_,R,T){c(r,r.exports[u[R]],p,v,M,_,r.exports[l[T]])},decodeGltfBufferAsync:function(p,v,M,_,R){return h.length>0?b(p,v,M,u[_],l[R]):a.then(function(){var T=new Uint8Array(p*v);return c(r,r.exports[u[_]],T,p,v,M,r.exports[l[R]]),T})}}})();class B0 extends So{constructor(){super();const e=new Xi;e.deleteAttribute("uv");const t=new As({side:It}),n=new As,s=new th(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new dt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Xu(e,n,6),o=new ut;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new dt(e,Ri(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new dt(e,Ri(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new dt(e,Ri(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const h=new dt(e,Ri(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);const d=new dt(e,Ri(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new dt(e,Ri(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ri(i){return new Sf({color:0,emissive:16777215,emissiveIntensity:i})}function z0({position:i,normal:e,uv:t,index:n},s){const r=(n?n.length:i.length/3)/3,a=new Float64Array(r),o=b=>n?n[b]:b;let c=0;for(let b=0;b<r;b++){const m=o(b*3)*3,p=o(b*3+1)*3,v=o(b*3+2)*3,M=i[p]-i[m],_=i[p+1]-i[m+1],R=i[p+2]-i[m+2],T=i[v]-i[m],w=i[v+1]-i[m+1],P=i[v+2]-i[m+2];c+=Math.hypot(_*P-R*w,R*T-M*P,M*w-_*T)*.5,a[b]=c}const l=new Float32Array(s*3),u=new Float32Array(s*3),h=new Float32Array(s*2),d=new Float32Array(s*3);let f=8841;const g=()=>(f=Math.imul(f,1664525)+1013904223>>>0,f/4294967296);for(let b=0;b<s;b++){const m=g()*c;let p=0,v=r-1;for(;p<v;){const T=p+v>>>1;a[T]<m?p=T+1:v=T}const M=Math.sqrt(g()),_=g(),R=[1-M,M*(1-_),M*_];for(let T=0;T<3;T++){const w=o(p*3+T),P=R[T];for(let x=0;x<3;x++)l[b*3+x]+=i[w*3+x]*P,e&&(u[b*3+x]+=e[w*3+x]*P);t&&(h[b*2]+=t[w*2]*P,h[b*2+1]+=t[w*2+1]*P)}d[b*3]=g(),d[b*3+1]=g(),d[b*3+2]=g()}return{positions:l,normals:u,uvs:h,seeds:d}}function H0(i=8841){return()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296)}function uh(i){const e={};for(const t of["position","normal","uv"]){const n=i.getAttribute(t);if(n)if(!n.isInterleavedBufferAttribute&&!n.normalized)e[t]=n.array.slice();else{const s=new Float32Array(n.count*n.itemSize);for(let r=0;r<n.count;r++)s[r*n.itemSize]=n.getX(r),s[r*n.itemSize+1]=n.getY(r),n.itemSize>2&&(s[r*n.itemSize+2]=n.getZ(r));e[t]=s}}return i.index&&(e.index=i.index.array.slice()),e}function hh(i){const e=new kt;return e.setAttribute("position",new gt(i.positions,3)),e.setAttribute("normal",new gt(i.normals,3)),e.setAttribute("uv",new gt(i.uvs,2)),e.setAttribute("aSeed",new gt(i.seeds,3)),e}function No(i,e){return hh(z0(uh(i),e))}async function Wl(i,e){if(typeof Worker>"u")return No(i,e);let t;try{t=new Worker(new URL("/assets/surface-sampling.worker-DaMJReTM.js",import.meta.url),{type:"module"});const n=uh(i),s=await new Promise((r,a)=>{t.onmessage=({data:o})=>o.error?a(new Error("Surface sampling failed")):r(o),t.onerror=a,t.postMessage({attributes:n,count:e},Object.values(n).map(o=>o.buffer))});return hh(s)}catch{return No(i,e)}finally{t==null||t.terminate()}}function Uo(i,e,t,n,s=null){e.updateMatrix();const r={uMap:{value:e},uUvTransform:{value:e.matrix},uAssembly:{value:0},uReveal:{value:0},uDissolve:{value:0},uTime:{value:0},uSurface:{value:1},uPixelRatio:{value:1},uMinY:{value:n.min.y},uHeight:{value:n.max.y-n.min.y}},a=new _n({uniforms:r,transparent:!0,depthWrite:!1,blending:ai,vertexShader:`attribute vec3 aSeed; varying vec2 vUv; varying float vAlpha; uniform float uAssembly,uReveal,uDissolve,uTime,uSurface,uPixelRatio,uMinY,uHeight;
 uniform mat3 uUvTransform; void main(){vUv=(uUvTransform*vec3(uv,1.)).xy;float h=clamp((position.y-uMinY)/uHeight,0.,1.);float arrival=smoothstep(h*.64,h*.64+.36,uAssembly);float leave=smoothstep((1.-h)*.55,(1.-h)*.55+.45,uDissolve);float settled=arrival*(1.-leave);float angle=aSeed.x*6.283185+uTime*.035;vec3 scatter=vec3(cos(angle)*(1.35+aSeed.y*.85),-1.3+aSeed.z*2.8,sin(angle)*(1.35+aSeed.y*.85));float ghost=(1.-step(.12,aSeed.y))*(1.-uAssembly);vec3 pos=mix(scatter,position,max(settled,ghost));pos.x+=sin(settled*3.14159)*sin(angle+settled*4.)*.55;pos.y+=sin(settled*3.14159)*.45;float skin=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));vAlpha=mix(mix(.012,.16,ghost),.95,settled)*(1.-skin*uSurface*.97)*(1.-leave*.8);vec4 mv=modelViewMatrix*vec4(pos,1.);vAlpha*=mix(1.,smoothstep(-.1,.35,dot(normalize(normalMatrix*normal),normalize(-mv.xyz))),settled);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((1.1+aSeed.y*1.4)*uPixelRatio*5./(-mv.z),.6,4.5*uPixelRatio);}`,fragmentShader:`uniform sampler2D uMap; varying vec2 vUv; varying float vAlpha; void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;vec3 col=texture2D(uMap,vUv).rgb;col=mix(col,vec3(.64,.78,.85),.12);gl_FragColor=vec4(col,vAlpha*(1.-smoothstep(.25,1.,d)));#include <tonemapping_fragment>
#include <colorspace_fragment>}`.replace(";#include",`;
#include`)}),o=new sc(s||No(i,t),a);return o.frustumCulled=!1,{points:o,uniforms:r}}function Fo(i,e){const t={uReveal:{value:0},uDissolve:{value:0},uMinY:{value:e.min.y},uHeight:{value:e.max.y-e.min.y}};return i.onBeforeCompile=n=>{Object.assign(n.uniforms,t),n.vertexShader=`varying float vObjectY;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vObjectY=position.y;`),n.fragmentShader=`varying float vObjectY; uniform float uReveal,uDissolve,uMinY,uHeight;
`+n.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
 float h=clamp((vObjectY-uMinY)/uHeight,0.,1.);float coverage=smoothstep(h-.06,h+.06,uReveal)*(1.-smoothstep((1.-h)*.9,(1.-h)*.9+.1,uDissolve));if(uReveal>=.999&&uDissolve<=.001)coverage=1.;if(uReveal<=.001)coverage=0.;float noise=fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453);if(noise>coverage)discard;`)},i.customProgramCacheKey=()=>"porcelain-reveal-v1",t}function G0(i,e){const t=new ip(i),n=t.clipAction(e);n.setLoop(Uu,1),n.clampWhenFinished=!0,n.play(),t.update(0);const s=[];i.traverse(h=>s.push({node:h,position:h.position.clone(),quaternion:h.quaternion.clone(),scale:h.scale.clone()})),n.stop();const r=()=>{for(const h of s)h.node.position.copy(h.position),h.node.quaternion.copy(h.quaternion),h.node.scale.copy(h.scale);i.updateMatrixWorld(!0)};r();let a="idle",o=0,c=!1;const l=h=>{h.action===n&&(c=!0)};t.addEventListener("finished",l);function u(){n.stop(),r(),a="idle",c=!1}return{get state(){return a},get busy(){return a!=="idle"},get time(){return n.time},play(){return a!=="idle"?!1:(c=!1,a="playing",n.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).fadeIn(.3).play(),!0)},stop(){a==="playing"&&(a="returning",o=0,n.fadeOut(.35))},update(h){a!=="idle"&&(t.update(Math.max(0,h)),a==="returning"&&(o+=Math.max(0,h)),(c||a==="returning"&&o>=.35)&&u(),i.updateMatrixWorld(!0))},dispose(){u(),t.removeEventListener("finished",l),t.uncacheRoot(i)}}}function V0(i,e=!1,t=0){var g,b,m;i.updateMatrixWorld(!0);const n=[],s=new on;if(i.traverse(p=>{if(!p.isMesh||!p.geometry.attributes.position)return;const v=p.geometry.clone();v.applyMatrix4(p.matrixWorld),v.rotateY(t),v.attributes.normal||v.computeVertexNormals(),v.computeBoundingBox(),s.union(v.boundingBox),n.push({source:p,geometry:v})}),!n.length||s.isEmpty())throw new Error("模型中未找到可显示的网格");const r=s.getCenter(new F),a=s.getSize(new F),o=2.65/Math.max(a.x,a.y,a.z,1e-5);s.min.sub(r).multiplyScalar(o),s.max.sub(r).multiplyScalar(o);const c=new nn,l=[],u=[],h=new Qo(new Uint8Array([255,255,255,255]),1,1);h.needsUpdate=!0;let d=0;const f=n.reduce((p,v)=>{var M;return p+(((M=v.geometry.index)==null?void 0:M.count)??v.geometry.attributes.position.count)/3},0);for(const{source:p,geometry:v}of n){v.translate(-r.x,-r.y,-r.z),v.scale(o,o,o),v.computeBoundingSphere();const _=(Array.isArray(p.material)?p.material:[p.material]).map(T=>{const w=T.clone();return l.push(Fo(w,s)),w});c.add(new dt(v,Array.isArray(p.material)?_:_[0]));const R=Array.isArray(p.material)?v.groups:[{start:0,count:((g=v.index)==null?void 0:g.count)??v.attributes.position.count,materialIndex:0}];for(const T of R){const w=_[T.materialIndex];if(!w||T.count<3)continue;const P=v.clone(),x=v.index?Array.from({length:T.count},(I,U)=>v.index.getX(T.start+U)):Array.from({length:T.count},(I,U)=>T.start+U);P.setIndex(x);const y=Math.max(1,Math.round((e?2e4:6e4)*(T.count/3)/Math.max(1,f))),C=Uo(P,w.map||h,y,s);C.uniforms.uMaterialColor={value:((b=w.color)==null?void 0:b.clone())||new He(16777215)},C.points.material.fragmentShader=C.points.material.fragmentShader.replace("uniform sampler2D uMap;","uniform sampler2D uMap; uniform vec3 uMaterialColor;").replace("vec3 col=texture2D(uMap,vUv).rgb;","vec3 col=texture2D(uMap,vUv).rgb * uMaterialColor;"),u.push(C),P.dispose()}d+=(((m=v.index)==null?void 0:m.count)??v.attributes.position.count)/3}return{mesh:c,skins:l,particles:u,bounds:s,triangles:d,white:h}}async function W0(i,e,t,n){await new Promise(k=>requestAnimationFrame(()=>setTimeout(k,0)));const s=matchMedia("(max-width:760px)").matches,r=n.model[s?"distanceMobile":"distanceDesktop"]??(s?5.9:5.5),a=Math.min(s?5.3:4.8,r*.9),o=new G_({canvas:i,alpha:!0,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,s?1.4:1.7)),o.outputColorSpace=Et,o.toneMapping=Tu,o.toneMappingExposure=n.model.exposure;const c=new So,l=new Rt(35,1,.1,60);let u=null,h=null,d=!1,f=0,g=0,b="view";const m=new T0(l,i);m.enableDamping=!0,m.dampingFactor=.075,m.enablePan=!1,m.minDistance=3.3,m.maxDistance=9,m.maxPolarAngle=Math.PI*.82,m.minPolarAngle=.2,m.addEventListener("start",()=>{u=null}),i.style.touchAction="none";const p=new nn;c.add(p);const v=new Po(o),M=new B0,_=v.fromScene(M,.04);c.environment=_.texture,c.environmentIntensity=.32,M.dispose(),v.dispose(),c.add(new Of(14018554,3162970,1.65));const R=new wo(16774107,3);R.position.set(-3,5,5),c.add(R);const T=new wo(9156829,1.4);T.position.set(4,1,-2),c.add(T);const w=new V_().setMeshoptDecoder(O0);let P,x=null,y=null;try{if(n.performance)try{if(P=await w.loadAsync(n.performance[s?"mobile":"desktop"],e),!P.animations.length)throw Error("Animation missing")}catch{P=null}P??(P=await w.loadAsync(n.model[s?"mobile":"desktop"],e))}catch(k){throw m.dispose(),_.dispose(),o.dispose(),k}e({phase:"preparing"}),await new Promise(k=>requestAnimationFrame(()=>setTimeout(k,0))),P.scene.updateMatrixWorld(!0);const C=[];P.scene.traverse(k=>{k.isMesh&&C.push(k)});const I=C[0];let U,N,W,q,te,V,re,de;if(n.performance&&P.animations.length&&(I!=null&&I.isSkinnedMesh)){x=G0(P.scene,P.animations[0]);const k=new nn;k.rotation.y=n.performance.rotationY??n.model.rotationY,k.add(P.scene),y=new nn,y.add(k),y.updateMatrixWorld(!0);const se=new on().setFromObject(y,!0),fe=se.getCenter(new F),Q=se.getSize(new F),le=2.65/Math.max(Q.x,Q.y,Q.z);y.scale.setScalar(le),y.position.copy(fe).multiplyScalar(-le),y.updateMatrixWorld(!0),I.skeleton.update(),N=new kt;const Me=new Float32Array(I.geometry.attributes.position.count*3),Ee=new F;for(let me=0;me<Me.length/3;me++)I.getVertexPosition(me,Ee).applyMatrix4(I.matrixWorld),Ee.toArray(Me,me*3);N.setAttribute("position",new gt(Me,3)),N.setAttribute("uv",I.geometry.attributes.uv.clone()),I.geometry.index&&N.setIndex(I.geometry.index.clone()),N.computeVertexNormals(),N.computeBoundingBox(),N.computeBoundingSphere(),W=I.material.clone(),W.roughness=n.model.roughness,W.metalness=n.model.metalness,W.envMapIntensity=.42,I.material=W.clone(),I.frustumCulled=!1,U=new dt(N,W),p.add(U,y),y.visible=!1,q=N.boundingBox.clone();const be=s?2e4:6e4,Ie=await Wl(N,be),D=Fo(W,q),oe=Uo(N,W.map,be,q,Ie);te=[D],V=[oe],p.add(oe.points),re=N.index?N.index.count/3:N.attributes.position.count/3}else if(n.dynamic){const k=V0(P.scene,s,n.model.rotationY||0);({mesh:U,skins:te,particles:V,bounds:q}=k),re=k.triangles,de=k.white,p.add(U);for(const se of V)p.add(se.points)}else{if(C.length!==1||Array.isArray(I==null?void 0:I.material)||!(I!=null&&I.material.map))throw new Error("请先将模型预处理为单网格、单贴图的网页资产");if(!I)throw new Error("模型中未找到可显示的网格");N=new kt;for(const be of["position","normal","uv"]){const Ie=I.geometry.getAttribute(be);if(!Ie)continue;const D=new Float32Array(Ie.count*Ie.itemSize);for(let oe=0;oe<Ie.count;oe++)D[oe*Ie.itemSize]=Ie.getX(oe),D[oe*Ie.itemSize+1]=Ie.getY(oe),Ie.itemSize>2&&(D[oe*Ie.itemSize+2]=Ie.getZ(oe));N.setAttribute(be,new gt(D,Ie.itemSize))}I.geometry.index&&N.setIndex(I.geometry.index.clone()),N.applyMatrix4(I.matrixWorld),N.rotateY(n.model.rotationY),N.computeBoundingBox();const k=N.boundingBox.getCenter(new F),se=N.boundingBox.getSize(new F),fe=2.65/Math.max(se.x,se.y,se.z);N.translate(-k.x,-k.y,-k.z),N.scale(fe,fe,fe),N.computeBoundingBox(),N.computeBoundingSphere(),W=I.material.clone(),W.roughness=n.model.roughness,W.metalness=n.model.metalness,W.envMapIntensity=.42,U=new dt(N,W),p.add(U),q=N.boundingBox;const Q=s?2e4:6e4,le=await Wl(N,Q),Me=Fo(W,q),Ee=Uo(N,W.map,Q,q,le);p.add(Ee.points),te=[Me],V=[Ee],re=N.index?N.index.count/3:N.attributes.position.count/3}for(const k of V)k.uniforms.uPixelRatio.value=o.getPixelRatio();x||P.scene.traverse(k=>{k.isMesh&&(k.geometry.dispose(),Array.isArray(k.material)?k.material.forEach(se=>se.dispose()):k.material.dispose())});const xe=H0(821),we=new Float32Array((s?180:450)*3);for(let k=0;k<we.length;k+=3)we[k]=(xe()-.5)*11,we[k+1]=(xe()-.5)*6,we[k+2]=-2-xe()*5;const Ve=new kt;Ve.setAttribute("position",new gt(we,3));const Be=new sc(Ve,new ic({color:7640744,size:.012,transparent:!0,opacity:.38,depthWrite:!1}));c.add(Be);const Ue={uTime:{value:0}},K=new dt(new Rs(10,1.4),new _n({transparent:!0,depthWrite:!1,uniforms:Ue,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; uniform float uTime; void main(){float band=exp(-pow((vUv.y-.5)*5.,2.));float wave=.5+.22*sin(vUv.x*17.+uTime*.07)+.18*sin(vUv.x*31.-uTime*.05+vUv.y*5.);float edge=smoothstep(0.,.2,vUv.x)*(1.-smoothstep(.8,1.,vUv.x));gl_FragColor=vec4(.34,.47,.55,band*wave*edge*.075);}"}));K.position.set(0,-1.5,-2.5),c.add(K);const Z=n.anchors.map(k=>({...k})),pe=new sp,X=new F(0,0,1);for(const k of Z){pe.set(new F(k.x,k.y,4),new F(0,0,-1));const se=pe.intersectObject(U,!0)[0];k.position=se?se.point:new F(k.x,k.y,.25),k.normal=se?se.face.normal.clone():X.clone()}function ee(){u=null,h=null,p.rotation.set(0,-.12,0),l.position.set(.24,.24,r),m.target.set(0,0,0),m.update()}function Se(){if(h)return;const k=l.position.clone().sub(m.target),se=p.rotation.y-Math.atan2(k.x,k.z)+Math.atan2(.24,r);if(ee(),p.rotation.y=se,matchMedia("(prefers-reduced-motion:reduce)").matches){p.rotation.y=se+Math.PI;return}h={started:performance.now(),from:se,to:se+Math.PI}}function H(k){if(!Z[k])return;h=null,p.rotation.set(0,-.12,0),p.updateMatrixWorld(!0);const se=Z[k].position.clone().applyMatrix4(p.matrixWorld).multiplyScalar(.32),fe=se.clone().add(new F(k===0?-.28:k===1?.28:.1,.15,a));if(matchMedia("(prefers-reduced-motion:reduce)").matches){u=null,l.position.copy(fe),m.target.copy(se),m.update();return}u={started:performance.now(),fromCamera:l.position.clone(),fromTarget:m.target.clone(),position:fe,target:se}}function A(k,se){return p.updateMatrixWorld(!0),l.updateMatrixWorld(!0),pe.setFromCamera(new Oe(k*2-1,1-se*2),l),pe.intersectObject(U,!0).length>0}function _e(){m.minDistance=b==="chat"&&i.clientWidth>760?Math.max(3.3,2.7/(2*Math.tan(ms.degToRad(l.fov/2))*Math.min(1,i.clientWidth*.36/Math.max(1,i.clientHeight)))):3.3;const k=l.position.clone().sub(m.target);k.length()<m.minDistance&&l.position.copy(m.target).add(k.setLength(m.minDistance)),m.update()}function G(){const{width:k,height:se}=i.getBoundingClientRect();!k||!se||(o.setSize(k,se,!1),l.aspect=k/se,l.updateProjectionMatrix(),_e())}const ne=new ResizeObserver(G);ne.observe(i.parentElement),ee(),G();let ae=!0;const De=new F,ge=new F,Pe=new F,tt=new F;function ot(k,se,fe,Q=0){if(x==null||x.update(Q),h){const le=Math.min(1,(performance.now()-h.started)/850),Me=le*le*(3-2*le);p.rotation.y=ms.lerp(h.from,h.to,Me),le===1&&(h=null)}if(u){const le=Math.min(1,(performance.now()-u.started)/650),Me=le*le*(3-2*le);l.position.lerpVectors(u.fromCamera,u.position,Me),m.target.lerpVectors(u.fromTarget,u.target,Me),le===1&&(u=null)}for(const le of[...te,...V.map(Me=>Me.uniforms)])le.uReveal.value=k.reveal,le.uDissolve.value=k.dissolve;for(const le of V)le.uniforms.uAssembly.value=k.assembly,le.uniforms.uTime.value=se,le.uniforms.uSurface.value=ae?1:0,le.points.visible=!ae||k.reveal<.999||k.dissolve>.001;U.visible=ae,y&&(y.visible=ae&&x.busy&&k.reveal>=.999&&k.dissolve<=.001,y.visible&&(U.visible=!1)),fe&&(p.rotation.y=-.12+Math.sin(se*.15)*.12),d||(f+=Math.max(0,se-g)),g=se,Be.rotation.y=f*.007,Be.position.y=Math.sin(f*.1)*.06,Ue.uTime.value=f,m.update(),o.render(c,l)}let L="",S=[];function O(){const k=l.position.toArray().join(",")+l.quaternion.toArray().join(",")+l.aspect+p.rotation.y+i.clientWidth+","+i.clientHeight;return k===L||(L=k,S=Z.map(se=>{ge.copy(se.position).applyMatrix4(p.matrixWorld),Pe.copy(se.normal).transformDirection(p.matrixWorld),tt.subVectors(l.position,ge).normalize(),De.copy(ge).project(l),pe.set(l.position,tt.clone().negate());const fe=pe.intersectObject(U,!0)[0],Q=fe&&fe.distance<l.position.distanceTo(ge)-.065;return{x:(De.x*.5+.5)*i.clientWidth,y:(-.5*De.y+.5)*i.clientHeight,visible:Pe.dot(tt)>.12&&!Q&&Math.abs(De.x)<.94&&Math.abs(De.y)<.93&&De.z<1}})),S}function J(k){if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-"].includes(k.key))return;k.preventDefault(),u=null;const fe=l.position.clone().sub(m.target),Q=new Co().setFromVector3(fe);k.key==="ArrowLeft"&&(Q.theta-=.12),k.key==="ArrowRight"&&(Q.theta+=.12),k.key==="ArrowUp"&&(Q.phi=Math.max(.2,Q.phi-.1)),k.key==="ArrowDown"&&(Q.phi=Math.min(Math.PI*.82,Q.phi+.1)),["+","="].includes(k.key)&&(Q.radius=Math.max(m.minDistance,Q.radius*.9)),k.key==="-"&&(Q.radius=Math.min(9,Q.radius*1.1)),l.position.copy(m.target).add(new F().setFromSpherical(Q)),m.update()}i.addEventListener("keydown",J);let ce=null;function $(){if(ce)return ce;const k=document.createElement("canvas");k.width=960,k.height=960;const se=k.getContext("2d");if(!se)return null;const fe=new So;fe.environment=c.environment,fe.environmentIntensity=c.environmentIntensity;for(const D of c.children.filter(oe=>oe.isLight))fe.add(D.clone());const Q=U.clone(!0);Q.visible=!0,Q.rotation.set(0,-.12,0),fe.add(Q);const le=new Rt(35,1,.1,60),Me=(n.dynamic?q.getBoundingSphere(new cn).radius:N.boundingSphere.radius)/Math.sin(ms.degToRad(17.5))*1.12;le.position.set(.24,.24,Me),le.lookAt(0,0,0);const Ee=o.getSize(new Oe),be=o.getPixelRatio(),Ie=te.map(D=>[D.uReveal.value,D.uDissolve.value]);try{return te.forEach(D=>{D.uReveal.value=1,D.uDissolve.value=0}),o.setPixelRatio(1),o.setSize(960,960,!1),o.render(fe,le),se.drawImage(i,0,0),ce=k,ce}finally{te.forEach((D,oe)=>{[D.uReveal.value,D.uDissolve.value]=Ie[oe]}),o.setPixelRatio(be),o.setSize(Ee.x,Ee.y,!1),o.render(c,l)}}function Le(){var se;x==null||x.dispose(),(se=I==null?void 0:I.skeleton)==null||se.dispose(),ne.disconnect(),i.removeEventListener("keydown",J),m.dispose();const k=new Set;c.traverse(fe=>{var Q;(Q=fe.geometry)==null||Q.dispose();for(const le of fe.material?Array.isArray(fe.material)?fe.material:[fe.material]:[]){for(const Me of Object.values(le))Me!=null&&Me.isTexture&&k.add(Me);le.dispose()}}),k.forEach(fe=>fe.dispose()),de==null||de.dispose(),_.dispose(),o.dispose()}return e({phase:"lighting"}),await o.compileAsync(c,l),{performancePlayer:x,captureArtifact:$,update:ot,reset:ee,flip:Se,focusFeature:H,hitTest:A,anchors:Z,projectAnchors:O,setViewingMode(k){b=k,_e()},setAmbientPaused(k){d=k},setSurface(k){ae=k},dispose:Le,stats:{triangles:re,particles:V.reduce((k,se)=>k+se.points.geometry.attributes.position.count,0),asset:s?"mobile":"desktop"},renderer:o,camera:l,group:p}}function j0(i,{createContext:e=()=>new(window.AudioContext||window.webkitAudioContext),onError:t=()=>{}}={}){let n,s,r=!1,a=!1,o=!1,c=0,l=0;i.preload="auto",i.volume=.65,i.dataset.playback="idle";const u=f=>{s?s.gain.value=o?0:f:i.volume=o?0:f};function h(){const f=l;try{n==null||n.resume().catch(()=>{}),Promise.resolve(i.play()).catch(()=>{f!==l||!r||(d(),i.dataset.playback="error",t())})}catch{d(),i.dataset.playback="error",t()}}function d(){l++,r=!1,a=!1,i.pause(),i.currentTime=0,i.dataset.playback="idle",u(.65)}return{start(){if(d(),r=!0,c=0,!n)try{n=e(),s=n.createGain(),n.createMediaElementSource(i).connect(s),s.connect(n.destination),i.volume=1}catch{}u(.65),i.dataset.playback="playing",h()},sync(f,g,b,m){if(r){if(f==="idle"||f==="unavailable"||f==="loading"){d();return}if(m){a||(i.pause(),a=!0,i.dataset.playback="paused");return}a&&(a=!1,i.currentTime=g,h(),i.dataset.playback="playing"),f==="returning"?(c+=b,u(.65*Math.max(0,1-c/.35))):Math.abs(i.currentTime-g)>.3&&i.readyState>=2&&(i.currentTime=Math.min(g,i.duration||6))}},setMuted(f){o=f,u(.65*Math.max(0,1-c/.35))},stop:d,dispose(){d(),n==null||n.close(),i.remove()}}}const ht=(i,e,t)=>{const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n},hn=(i,e,t)=>{const n=ht("button",i,e);return n.type="button",n.onclick=t,n};async function q0(i,e){var o,c;if(!i.ok){const l=await i.json().catch(()=>null);throw Error(((o=l==null?void 0:l.error)==null?void 0:o.message)||"连接暂时中断，请稍后再试。")}if(!((c=i.headers.get("content-type"))!=null&&c.includes("text/event-stream")))return i.json();const t=i.body.getReader(),n=new TextDecoder;let s="",r=null;function a(l){var g;const u=l.split(`
`),h=(g=u.find(b=>b.startsWith("event:")))==null?void 0:g.slice(6).trim(),d=u.filter(b=>b.startsWith("data:")).map(b=>b.slice(5).trimStart()).join(`
`);if(!d)return;const f=JSON.parse(d);if(h==="delta"&&typeof f.text=="string"&&e(f.text),h==="done"&&(r=f),h==="error")throw Error(f.message||"回答暂时中断。")}try{for(;;){const{done:l,value:u}=await t.read();if(l)break;s+=n.decode(u,{stream:!0}).replace(/\r/g,"");let h;for(;(h=s.indexOf(`

`))>=0;)a(s.slice(0,h)),s=s.slice(h+2);if(s.length>1e5)throw Error("回答内容过长。")}if(s+=n.decode(),s.trim()&&a(s),!r||typeof r.answer!="string")throw Error("回答尚未完整接收，请重试。");return r}finally{await t.cancel().catch(()=>{}),t.releaseLock()}}function X0({onFocus:i=()=>{},exhibit:e}){var A,_e;const t=e.welcome,n=e.prompts,s=e.nickname,r=document.querySelector("#experience");let a=!1,o=!1,c=null,l=!1,u=null,h=0,d=[],f=null,g="",b=!1;const m=new AbortController,p=ht("aside","artifact-speech");p.id="artifact-chat",p.hidden=!0,p.setAttribute("aria-label",`${s}的回答`);const v=ht("p","speech-status",`${s} · 与你相遇`);v.setAttribute("role","status");const M=ht("div","speech-copy",t);M.id="speech-copy",M.tabIndex=0;const _=ht("div","speech-actions"),R=ht("div","speech-tools"),T=hn("speech-link","对话记录 ↗",()=>Ve()),w=hn("speech-link","资料出处 ↗",()=>Ve(!0));w.hidden=!0,R.append(T,w),p.append(v,M,_,R),r.append(p);const P=ht("section","chat-dock");P.id="chat-dock",P.hidden=!0,P.setAttribute("aria-label",`向${s}提问`);const x=ht("form","chat-composer"),y=ht("textarea","chat-input");y.id="chat-input",y.rows=1,y.maxLength=2e3,y.placeholder="想问我什么？",y.setAttribute("aria-label",`想问${s}什么？`);const C=hn("chat-send","↗",()=>{});C.type="submit",C.setAttribute("aria-label","发送");const I=hn("chat-stop","停止",()=>u==null?void 0:u.abort());I.hidden=!0,I.setAttribute("aria-label","停止生成"),x.append(y,C,I);const U=ht("div","chat-prompts"),N=ht("p","composer-hint","Enter 发送 · Shift + Enter 换行");P.append(x,U,N),r.append(P);const W=ht("dialog","conversation-dialog");W.id="conversation-history",W.setAttribute("aria-labelledby","conversation-title");const q=ht("div","conversation-heading"),te=ht("h2","",`与${s}的对话`);te.id="conversation-title";const V=hn("dialog-close","×",()=>W.close());V.setAttribute("aria-label","关闭对话记录"),q.append(te,V);const re=ht("div","chat-log");re.setAttribute("role","log"),re.setAttribute("aria-label","对话记录"),re.setAttribute("aria-live","off");const de=hn("clear-chat","清空会话",()=>{u==null||u.abort(),h++,o=!1,d=[],f=null,re.replaceChildren(),g="",Ue(t),v.textContent=`${s} · 重新认识你`,w.hidden=!0,_.replaceChildren(),Z(n),K(),W.close()}),xe=ht("div","conversation-footer");xe.append(de),W.append(q,re,xe),r.append(W);let we=null;function Ve(G=!1){if(we=document.activeElement,W.open||W.showModal(),G){const ne=re.querySelector("article:last-child details");ne&&(ne.open=!0,ne.scrollIntoView({block:"nearest"}))}else re.scrollTop=re.scrollHeight}W.addEventListener("close",()=>{we!=null&&we.isConnected&&!we.closest("[hidden]")&&we.focus({preventScroll:!0})});function Be(G,ne){const ae=ht("article",`chat-message chat-message-${G}`);ae.append(ht("p","chat-speaker",G==="user"?"你":s));const De=ht("div","chat-message-text",ne);return ae.append(De),re.append(ae),{article:ae,copy:De}}function Ue(G){M.textContent=G}function K(){C.disabled=o||!c||!y.value.trim(),C.hidden=o,I.hidden=!o,U.querySelectorAll("button").forEach(G=>G.disabled=o||!c),p.classList.toggle("speaking",o),p.setAttribute("aria-busy",String(o)),de.disabled=o||!re.children.length,T.hidden=!re.children.length}function Z(G){U.replaceChildren(...G.slice(0,3).map(ne=>hn("chat-prompt",ne,()=>ee(ne))))}function pe(G,ne){if(!(ne!=null&&ne.length))return;const ae=ht("details","chat-sources");ae.append(ht("summary","",`资料出处 · ${ne.length}`));for(const De of ne)try{const ge=new URL(De.url);if(!["http:","https:"].includes(ge.protocol))continue;const Pe=ht("a","",De.title+" ↗");Pe.href=ge.href,Pe.target="_blank",Pe.rel="noopener noreferrer",ae.append(Pe),De.excerpt&&ae.append(ht("p","",De.excerpt))}catch{}G.append(ae)}function X(G){_.replaceChildren();for(const ne of(G||[]).slice(0,2))ne.type==="focus"&&e.focusTargets.includes(ne.target)&&_.append(hn("speech-focus",ne.label||"看看这个细节 ↗",()=>i(ne.target)))}async function ee(G=y.value){var tt,ot,L;const ne=G.trim();if(!ne||o||!c||l)return;if(ne.length>2e3){N.textContent="问题请控制在 2000 字以内。";return}g=ne,y.value="",o=!0;const ae=++h;u=new AbortController;const De=u;Be("user",ne);const ge=Be("assistant","");let Pe="";p.scrollTop=0,v.textContent=`${s} · 让我想一想`,Ue("你的话我听见了，让我慢慢说给你听……"),_.replaceChildren(),w.hidden=!0,N.textContent="正在回应，文字将逐步呈现",K();try{const S=await fetch("/api/chat",{method:"POST",headers:{"Content-Type":"application/json",Accept:"text/event-stream"},signal:De.signal,body:JSON.stringify({artifactId:e.id,message:ne,history:d.slice(-8).map(J=>({...J,content:J.content.slice(0,1200)}))})}),O=await q0(S,J=>{ae!==h||l||(Pe+=J,Ue(Pe),ge.copy.textContent=Pe,v.textContent=`${s} · 正在讲述`)});if(ae!==h||l)return;if(!((tt=O.answer)!=null&&tt.trim()))throw Error("没有收到完整回答。");f=O,Ue(O.answer),ge.copy.textContent=O.answer,pe(ge.article,O.citations),X(O.actions),w.hidden=!((ot=O.citations)!=null&&ot.length),O.notice&&/超时|不可用|中断/.test(O.notice)&&ge.article.append(ht("p","chat-notice",O.notice)),d.push({role:"user",content:ne},{role:"assistant",content:O.answer}),v.textContent=O.mode==="model"?`${s} · 说给你听`:`${s} · 资料与故事`,N.textContent="回答已完成 · 可以继续追问",(L=O.suggestions)!=null&&L.length&&Z(O.suggestions)}catch{if(ae!==h||l)return;const O=De.signal.aborted;v.textContent=O?`${s} · 已停止`:`${s} · 暂时未能回答`,Ue(O?"这次讲述先停在这里。想继续时，再问我一次吧。":"连接暂时中断了，你的问题我还留着。请稍后重试。"),ge.copy.textContent=O?"[已停止，本轮未完成]":"[本轮未完成，请重试]",_.replaceChildren(hn("speech-focus","重新发送 ↗",()=>ee(g))),N.textContent=O?"已停止生成":"发送未完成，可重试"}finally{ae===h&&!l&&(o=!1,u=null,K())}}async function Se(){var G;try{const ne=await fetch(`/api/artifacts/${e.id}`,{signal:m.signal}),ae=await ne.json();if(!ne.ok||((G=ae.artifact)==null?void 0:G.id)!==e.id)throw Error();if(l)return;c=ae.artifact,K()}catch{if(l)return;v.textContent=`${s} · 资料尚未连接`,Ue("还没连上我的资料，稍后再试试看。"),_.replaceChildren(hn("speech-focus","重试连接 ↗",()=>{_.replaceChildren(),Se()}))}}x.onsubmit=G=>{G.preventDefault(),b||ee()},y.oninput=K,y.oncompositionstart=()=>{b=!0},y.oncompositionend=()=>{b=!1},y.onkeydown=G=>{G.key==="Enter"&&!G.shiftKey&&!G.isComposing&&!b&&G.keyCode!==229&&(G.preventDefault(),ee())};function H(){const G=window.visualViewport,ne=a&&innerWidth<=760?Math.max(0,innerHeight-((G==null?void 0:G.height)||innerHeight)-((G==null?void 0:G.offsetTop)||0)):0;r.style.setProperty("--keyboard-offset",`${ne}px`),r.classList.toggle("keyboard-open",a&&ne>100)}return(A=window.visualViewport)==null||A.addEventListener("resize",H),(_e=window.visualViewport)==null||_e.addEventListener("scroll",H),Z(n),K(),Se(),{setOpen(G){a=G,p.hidden=!G,P.hidden=!G,!G&&P.contains(document.activeElement)&&document.activeElement.blur(),H()},destroy(){var G,ne;l=!0,u==null||u.abort(),m.abort(),(G=window.visualViewport)==null||G.removeEventListener("resize",H),(ne=window.visualViewport)==null||ne.removeEventListener("scroll",H),p.remove(),P.remove(),W.remove()}}}function Y0({onFocus:i,exhibit:e}){const t=e.topics,n=document.querySelector("#guide-more"),s=document.querySelector("#guide-panel"),r=document.querySelector("#guide-action"),a=[...document.querySelectorAll("[data-guide]")];let o="shape";function c(l){o=l;const u=t[l];a.forEach(h=>{const d=h.dataset.guide===l;h.setAttribute("aria-selected",String(d)),h.tabIndex=d?0:-1}),s.setAttribute("aria-labelledby",`guide-${l}`),document.querySelector("#guide-kind").textContent=u.kind,document.querySelector("#guide-brief").textContent=u.brief,document.querySelector("#guide-excerpt").textContent=u.excerpt,r.textContent=u.action,document.querySelector("#guide-long").replaceChildren(...u.paragraphs.map(h=>{const d=document.createElement("p");return d.textContent=h,d}))}return a.forEach((l,u)=>{l.onclick=()=>c(l.dataset.guide),l.onkeydown=h=>{let d;if(h.key==="ArrowRight")d=(u+1)%a.length;else if(h.key==="ArrowLeft")d=(u+a.length-1)%a.length;else if(h.key==="Home")d=0;else if(h.key==="End")d=a.length-1;else return;h.preventDefault(),c(a[d].dataset.guide),a[d].focus()}}),r.onclick=()=>{const l=t[o];l.target?i(l.target):(n.open=!0,requestAnimationFrame(()=>document.querySelector("#guide-source-link").focus()))},c("shape"),{destroy(){a.forEach(l=>{l.onclick=null,l.onkeydown=null}),r.onclick=null}}}const _t=(i,e,t)=>{const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n},K0={reference:"史料参照",creative:"艺术创作",digital:"数字记录"};function J0({exhibit:i,onClose:e}){const t=_t("aside","story-panel artifact-journey");t.id="journey-panel",t.hidden=!0,t.setAttribute("aria-labelledby","journey-title");const n=_t("div","panel-heading"),s=_t("div","");s.append(_t("p","eyebrow","TRACES THROUGH TIME"));const r=_t("h2","",`${i.nickname}的时光足迹`);r.id="journey-title",s.append(r);const a=_t("button","","×");a.type="button",a.setAttribute("aria-label","收起时光足迹"),a.onclick=e,n.append(s,a);const o=_t("div","journey-body");o.tabIndex=0,o.setAttribute("aria-label","时间轴内容，可上下滚动"),t.append(n,o),document.querySelector("#experience").append(t);const c=new AbortController;let l=!1;async function u(){var h,d,f;o.replaceChildren(_t("p","guide-lead","正在整理时光中的线索……"));try{const g=await fetch(`/api/artifacts/${i.id}`,{signal:c.signal}),b=await g.json();if(!g.ok||((h=b.artifact)==null?void 0:h.id)!==i.id||!((f=(d=b.artifact.journey)==null?void 0:d.entries)!=null&&f.length))throw Error("journey_unavailable");if(l)return;const{journey:m,sources:p}=b.artifact,v=_t("p","guide-lead",m.lead),M=_t("ol","journey-track");for(const _ of m.entries){const R=_t("li",`journey-node journey-${_.kind}`),T=_t("div","journey-meta");T.append(_t("span","journey-date",_.time),_t("span","journey-kind",K0[_.kind])),R.append(T,_t("h3","",_.title),_t("p","journey-copy",_.text));for(const w of _.sourceIds){const P=p.find(y=>y.id===w);if(!(P!=null&&P.url))continue;const x=_t("a","journey-source",`${P.publisher} · 查阅原文 ↗`);x.href=P.url,x.target="_blank",x.rel="noopener noreferrer",R.append(x)}M.append(R)}o.replaceChildren(v,M,_t("p","journey-end","故事走到这里，与你相逢。"))}catch{if(l)return;const g=_t("button","guide-action","重新加载时间轴 ↗");g.onclick=u,o.replaceChildren(_t("p","guide-lead","时光资料暂未连接，请重试。"),g)}}return u(),{setOpen(h){t.hidden=!h},destroy(){l=!0,c.abort(),t.remove()}}}function $0(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ci={},ua,jl;function Z0(){return jl||(jl=1,ua=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),ua}var ha={},zn={},ql;function li(){if(ql)return zn;ql=1;let i;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return zn.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},zn.getSymbolTotalCodewords=function(n){return e[n]},zn.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},zn.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},zn.isKanjiModeEnabled=function(){return typeof i<"u"},zn.toSJIS=function(n){return i(n)},zn}var da={},Xl;function hc(){return Xl||(Xl=1,(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,s){if(i.isValid(n))return n;try{return e(n)}catch{return s}}})(da)),da}var fa,Yl;function Q0(){if(Yl)return fa;Yl=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},fa=i,fa}var pa,Kl;function ev(){if(Kl)return pa;Kl=1;function i(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return i.prototype.set=function(e,t,n,s){const r=e*this.size+t;this.data[r]=n,s&&(this.reservedBit[r]=!0)},i.prototype.get=function(e,t){return this.data[e*this.size+t]},i.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},i.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},pa=i,pa}var ma={},Jl;function tv(){return Jl||(Jl=1,(function(i){const e=li().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const s=Math.floor(n/7)+2,r=e(n),a=r===145?26:Math.ceil((r-13)/(2*s-2))*2,o=[r-7];for(let c=1;c<s-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},i.getPositions=function(n){const s=[],r=i.getRowColCoords(n),a=r.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||s.push([r[o],r[c]]);return s}})(ma)),ma}var ga={},$l;function nv(){if($l)return ga;$l=1;const i=li().getSymbolSize,e=7;return ga.getPositions=function(n){const s=i(n);return[[0,0],[s-e,0],[0,s-e]]},ga}var ba={},Zl;function iv(){return Zl||(Zl=1,(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(s){return s!=null&&s!==""&&!isNaN(s)&&s>=0&&s<=7},i.from=function(s){return i.isValid(s)?parseInt(s,10):void 0},i.getPenaltyN1=function(s){const r=s.size;let a=0,o=0,c=0,l=null,u=null;for(let h=0;h<r;h++){o=c=0,l=u=null;for(let d=0;d<r;d++){let f=s.get(h,d);f===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=f,o=1),f=s.get(d,h),f===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=f,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},i.getPenaltyN2=function(s){const r=s.size;let a=0;for(let o=0;o<r-1;o++)for(let c=0;c<r-1;c++){const l=s.get(o,c)+s.get(o,c+1)+s.get(o+1,c)+s.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},i.getPenaltyN3=function(s){const r=s.size;let a=0,o=0,c=0;for(let l=0;l<r;l++){o=c=0;for(let u=0;u<r;u++)o=o<<1&2047|s.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|s.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},i.getPenaltyN4=function(s){let r=0;const a=s.data.length;for(let c=0;c<a;c++)r+=s.data[c];return Math.abs(Math.ceil(r*100/a/5)-10)*e.N4};function t(n,s,r){switch(n){case i.Patterns.PATTERN000:return(s+r)%2===0;case i.Patterns.PATTERN001:return s%2===0;case i.Patterns.PATTERN010:return r%3===0;case i.Patterns.PATTERN011:return(s+r)%3===0;case i.Patterns.PATTERN100:return(Math.floor(s/2)+Math.floor(r/3))%2===0;case i.Patterns.PATTERN101:return s*r%2+s*r%3===0;case i.Patterns.PATTERN110:return(s*r%2+s*r%3)%2===0;case i.Patterns.PATTERN111:return(s*r%3+(s+r)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(s,r){const a=r.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)r.isReserved(c,o)||r.xor(c,o,t(s,c,o))},i.getBestMask=function(s,r){const a=Object.keys(i.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){r(l),i.applyMask(l,s);const u=i.getPenaltyN1(s)+i.getPenaltyN2(s)+i.getPenaltyN3(s)+i.getPenaltyN4(s);i.applyMask(l,s),u<c&&(c=u,o=l)}return o}})(ba)),ba}var ar={},Ql;function dh(){if(Ql)return ar;Ql=1;const i=hc(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ar.getBlocksCount=function(s,r){switch(r){case i.L:return e[(s-1)*4+0];case i.M:return e[(s-1)*4+1];case i.Q:return e[(s-1)*4+2];case i.H:return e[(s-1)*4+3];default:return}},ar.getTotalCodewordsCount=function(s,r){switch(r){case i.L:return t[(s-1)*4+0];case i.M:return t[(s-1)*4+1];case i.Q:return t[(s-1)*4+2];case i.H:return t[(s-1)*4+3];default:return}},ar}var _a={},cs={},eu;function sv(){if(eu)return cs;eu=1;const i=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let s=0;s<255;s++)i[s]=n,e[n]=s,n<<=1,n&256&&(n^=285);for(let s=255;s<512;s++)i[s]=i[s-255]})(),cs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},cs.exp=function(n){return i[n]},cs.mul=function(n,s){return n===0||s===0?0:i[e[n]+e[s]]},cs}var tu;function rv(){return tu||(tu=1,(function(i){const e=sv();i.mul=function(n,s){const r=new Uint8Array(n.length+s.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<s.length;o++)r[a+o]^=e.mul(n[a],s[o]);return r},i.mod=function(n,s){let r=new Uint8Array(n);for(;r.length-s.length>=0;){const a=r[0];for(let c=0;c<s.length;c++)r[c]^=e.mul(s[c],a);let o=0;for(;o<r.length&&r[o]===0;)o++;r=r.slice(o)}return r},i.generateECPolynomial=function(n){let s=new Uint8Array([1]);for(let r=0;r<n;r++)s=i.mul(s,new Uint8Array([1,e.exp(r)]));return s}})(_a)),_a}var va,nu;function av(){if(nu)return va;nu=1;const i=rv();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const s=new Uint8Array(n.length+this.degree);s.set(n);const r=i.mod(s,this.genPoly),a=this.degree-r.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(r,a),o}return r},va=e,va}var xa={},ya={},Ma={},iu;function fh(){return iu||(iu=1,Ma.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Ma}var dn={},su;function ph(){if(su)return dn;su=1;const i="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;dn.KANJI=new RegExp(t,"g"),dn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),dn.BYTE=new RegExp(n,"g"),dn.NUMERIC=new RegExp(i,"g"),dn.ALPHANUMERIC=new RegExp(e,"g");const s=new RegExp("^"+t+"$"),r=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return dn.testKanji=function(c){return s.test(c)},dn.testNumeric=function(c){return r.test(c)},dn.testAlphanumeric=function(c){return a.test(c)},dn}var ru;function ui(){return ru||(ru=1,(function(i){const e=fh(),t=ph();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(r,a){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?r.ccBits[0]:a<27?r.ccBits[1]:r.ccBits[2]},i.getBestModeForData=function(r){return t.testNumeric(r)?i.NUMERIC:t.testAlphanumeric(r)?i.ALPHANUMERIC:t.testKanji(r)?i.KANJI:i.BYTE},i.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},i.isValid=function(r){return r&&r.bit&&r.ccBits};function n(s){if(typeof s!="string")throw new Error("Param is not a string");switch(s.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+s)}}i.from=function(r,a){if(i.isValid(r))return r;try{return n(r)}catch{return a}}})(ya)),ya}var au;function ov(){return au||(au=1,(function(i){const e=li(),t=dh(),n=hc(),s=ui(),r=fh(),a=7973,o=e.getBCHDigit(a);function c(d,f,g){for(let b=1;b<=40;b++)if(f<=i.getCapacity(b,g,d))return b}function l(d,f){return s.getCharCountIndicator(d,f)+4}function u(d,f){let g=0;return d.forEach(function(b){const m=l(b.mode,f);g+=m+b.getBitsLength()}),g}function h(d,f){for(let g=1;g<=40;g++)if(u(d,g)<=i.getCapacity(g,f,s.MIXED))return g}i.from=function(f,g){return r.isValid(f)?parseInt(f,10):g},i.getCapacity=function(f,g,b){if(!r.isValid(f))throw new Error("Invalid QR Code version");typeof b>"u"&&(b=s.BYTE);const m=e.getSymbolTotalCodewords(f),p=t.getTotalCodewordsCount(f,g),v=(m-p)*8;if(b===s.MIXED)return v;const M=v-l(b,f);switch(b){case s.NUMERIC:return Math.floor(M/10*3);case s.ALPHANUMERIC:return Math.floor(M/11*2);case s.KANJI:return Math.floor(M/13);case s.BYTE:default:return Math.floor(M/8)}},i.getBestVersionForData=function(f,g){let b;const m=n.from(g,n.M);if(Array.isArray(f)){if(f.length>1)return h(f,m);if(f.length===0)return 1;b=f[0]}else b=f;return c(b.mode,b.getLength(),m)},i.getEncodedBits=function(f){if(!r.isValid(f)||f<7)throw new Error("Invalid QR Code version");let g=f<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return f<<12|g}})(xa)),xa}var Sa={},ou;function cv(){if(ou)return Sa;ou=1;const i=li(),e=1335,t=21522,n=i.getBCHDigit(e);return Sa.getEncodedBits=function(r,a){const o=r.bit<<3|a;let c=o<<10;for(;i.getBCHDigit(c)-n>=0;)c^=e<<i.getBCHDigit(c)-n;return(o<<10|c)^t},Sa}var Ea={},Ta,cu;function lv(){if(cu)return Ta;cu=1;const i=ui();function e(t){this.mode=i.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let s,r,a;for(s=0;s+3<=this.data.length;s+=3)r=this.data.substr(s,3),a=parseInt(r,10),n.put(a,10);const o=this.data.length-s;o>0&&(r=this.data.substr(s),a=parseInt(r,10),n.put(a,o*3+1))},Ta=e,Ta}var Aa,lu;function uv(){if(lu)return Aa;lu=1;const i=ui(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=i.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(s){return 11*Math.floor(s/2)+6*(s%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(s){let r;for(r=0;r+2<=this.data.length;r+=2){let a=e.indexOf(this.data[r])*45;a+=e.indexOf(this.data[r+1]),s.put(a,11)}this.data.length%2&&s.put(e.indexOf(this.data[r]),6)},Aa=t,Aa}var wa,uu;function hv(){if(uu)return wa;uu=1;const i=ui();function e(t){this.mode=i.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,s=this.data.length;n<s;n++)t.put(this.data[n],8)},wa=e,wa}var Ra,hu;function dv(){if(hu)return Ra;hu=1;const i=ui(),e=li();function t(n){this.mode=i.KANJI,this.data=n}return t.getBitsLength=function(s){return s*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let s;for(s=0;s<this.data.length;s++){let r=e.toSJIS(this.data[s]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw new Error("Invalid SJIS character: "+this.data[s]+`
Make sure your charset is UTF-8`);r=(r>>>8&255)*192+(r&255),n.put(r,13)}},Ra=t,Ra}var Ca={exports:{}},du;function fv(){return du||(du=1,(function(i){var e={single_source_shortest_paths:function(t,n,s){var r={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,h,d,f,g,b,m;!o.empty();){c=o.pop(),l=c.value,h=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(f=d[u],g=h+f,b=a[u],m=typeof a[u]>"u",(m||b>g)&&(a[u]=g,o.push(u,g),r[u]=l))}if(typeof s<"u"&&typeof a[s]>"u"){var p=["Could not find a path from ",n," to ",s,"."].join("");throw new Error(p)}return r},extract_shortest_path_from_predecessor_list:function(t,n){for(var s=[],r=n;r;)s.push(r),t[r],r=t[r];return s.reverse(),s},find_path:function(t,n,s){var r=e.single_source_shortest_paths(t,n,s);return e.extract_shortest_path_from_predecessor_list(r,s)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,s={},r;t=t||{};for(r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);return s.queue=[],s.sorter=t.sorter||n.default_sorter,s},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var s={value:t,cost:n};this.queue.push(s),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})(Ca)),Ca.exports}var fu;function pv(){return fu||(fu=1,(function(i){const e=ui(),t=lv(),n=uv(),s=hv(),r=dv(),a=ph(),o=li(),c=fv();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,v,M){const _=[];let R;for(;(R=p.exec(M))!==null;)_.push({data:R[0],index:R.index,mode:v,length:R[0].length});return _}function h(p){const v=u(a.NUMERIC,e.NUMERIC,p),M=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let _,R;return o.isKanjiModeEnabled()?(_=u(a.BYTE,e.BYTE,p),R=u(a.KANJI,e.KANJI,p)):(_=u(a.BYTE_KANJI,e.BYTE,p),R=[]),v.concat(M,_,R).sort(function(w,P){return w.index-P.index}).map(function(w){return{data:w.data,mode:w.mode,length:w.length}})}function d(p,v){switch(v){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return r.getBitsLength(p);case e.BYTE:return s.getBitsLength(p)}}function f(p){return p.reduce(function(v,M){const _=v.length-1>=0?v[v.length-1]:null;return _&&_.mode===M.mode?(v[v.length-1].data+=M.data,v):(v.push(M),v)},[])}function g(p){const v=[];for(let M=0;M<p.length;M++){const _=p[M];switch(_.mode){case e.NUMERIC:v.push([_,{data:_.data,mode:e.ALPHANUMERIC,length:_.length},{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.ALPHANUMERIC:v.push([_,{data:_.data,mode:e.BYTE,length:_.length}]);break;case e.KANJI:v.push([_,{data:_.data,mode:e.BYTE,length:l(_.data)}]);break;case e.BYTE:v.push([{data:_.data,mode:e.BYTE,length:l(_.data)}])}}return v}function b(p,v){const M={},_={start:{}};let R=["start"];for(let T=0;T<p.length;T++){const w=p[T],P=[];for(let x=0;x<w.length;x++){const y=w[x],C=""+T+x;P.push(C),M[C]={node:y,lastCount:0},_[C]={};for(let I=0;I<R.length;I++){const U=R[I];M[U]&&M[U].node.mode===y.mode?(_[U][C]=d(M[U].lastCount+y.length,y.mode)-d(M[U].lastCount,y.mode),M[U].lastCount+=y.length):(M[U]&&(M[U].lastCount=y.length),_[U][C]=d(y.length,y.mode)+4+e.getCharCountIndicator(y.mode,v))}}R=P}for(let T=0;T<R.length;T++)_[R[T]].end=0;return{map:_,table:M}}function m(p,v){let M;const _=e.getBestModeForData(p);if(M=e.from(v,_),M!==e.BYTE&&M.bit<_.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(M)+`.
 Suggested mode is: `+e.toString(_));switch(M===e.KANJI&&!o.isKanjiModeEnabled()&&(M=e.BYTE),M){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new r(p);case e.BYTE:return new s(p)}}i.fromArray=function(v){return v.reduce(function(M,_){return typeof _=="string"?M.push(m(_,null)):_.data&&M.push(m(_.data,_.mode)),M},[])},i.fromString=function(v,M){const _=h(v,o.isKanjiModeEnabled()),R=g(_),T=b(R,M),w=c.find_path(T.map,"start","end"),P=[];for(let x=1;x<w.length-1;x++)P.push(T.table[w[x]].node);return i.fromArray(f(P))},i.rawSplit=function(v){return i.fromArray(h(v,o.isKanjiModeEnabled()))}})(Ea)),Ea}var pu;function mv(){if(pu)return ha;pu=1;const i=li(),e=hc(),t=Q0(),n=ev(),s=tv(),r=nv(),a=iv(),o=dh(),c=av(),l=ov(),u=cv(),h=ui(),d=pv();function f(T,w){const P=T.size,x=r.getPositions(w);for(let y=0;y<x.length;y++){const C=x[y][0],I=x[y][1];for(let U=-1;U<=7;U++)if(!(C+U<=-1||P<=C+U))for(let N=-1;N<=7;N++)I+N<=-1||P<=I+N||(U>=0&&U<=6&&(N===0||N===6)||N>=0&&N<=6&&(U===0||U===6)||U>=2&&U<=4&&N>=2&&N<=4?T.set(C+U,I+N,!0,!0):T.set(C+U,I+N,!1,!0))}}function g(T){const w=T.size;for(let P=8;P<w-8;P++){const x=P%2===0;T.set(P,6,x,!0),T.set(6,P,x,!0)}}function b(T,w){const P=s.getPositions(w);for(let x=0;x<P.length;x++){const y=P[x][0],C=P[x][1];for(let I=-2;I<=2;I++)for(let U=-2;U<=2;U++)I===-2||I===2||U===-2||U===2||I===0&&U===0?T.set(y+I,C+U,!0,!0):T.set(y+I,C+U,!1,!0)}}function m(T,w){const P=T.size,x=l.getEncodedBits(w);let y,C,I;for(let U=0;U<18;U++)y=Math.floor(U/3),C=U%3+P-8-3,I=(x>>U&1)===1,T.set(y,C,I,!0),T.set(C,y,I,!0)}function p(T,w,P){const x=T.size,y=u.getEncodedBits(w,P);let C,I;for(C=0;C<15;C++)I=(y>>C&1)===1,C<6?T.set(C,8,I,!0):C<8?T.set(C+1,8,I,!0):T.set(x-15+C,8,I,!0),C<8?T.set(8,x-C-1,I,!0):C<9?T.set(8,15-C-1+1,I,!0):T.set(8,15-C-1,I,!0);T.set(x-8,8,1,!0)}function v(T,w){const P=T.size;let x=-1,y=P-1,C=7,I=0;for(let U=P-1;U>0;U-=2)for(U===6&&U--;;){for(let N=0;N<2;N++)if(!T.isReserved(y,U-N)){let W=!1;I<w.length&&(W=(w[I]>>>C&1)===1),T.set(y,U-N,W),C--,C===-1&&(I++,C=7)}if(y+=x,y<0||P<=y){y-=x,x=-x;break}}}function M(T,w,P){const x=new t;P.forEach(function(N){x.put(N.mode.bit,4),x.put(N.getLength(),h.getCharCountIndicator(N.mode,T)),N.write(x)});const y=i.getSymbolTotalCodewords(T),C=o.getTotalCodewordsCount(T,w),I=(y-C)*8;for(x.getLengthInBits()+4<=I&&x.put(0,4);x.getLengthInBits()%8!==0;)x.putBit(0);const U=(I-x.getLengthInBits())/8;for(let N=0;N<U;N++)x.put(N%2?17:236,8);return _(x,T,w)}function _(T,w,P){const x=i.getSymbolTotalCodewords(w),y=o.getTotalCodewordsCount(w,P),C=x-y,I=o.getBlocksCount(w,P),U=x%I,N=I-U,W=Math.floor(x/I),q=Math.floor(C/I),te=q+1,V=W-q,re=new c(V);let de=0;const xe=new Array(I),we=new Array(I);let Ve=0;const Be=new Uint8Array(T.buffer);for(let X=0;X<I;X++){const ee=X<N?q:te;xe[X]=Be.slice(de,de+ee),we[X]=re.encode(xe[X]),de+=ee,Ve=Math.max(Ve,ee)}const Ue=new Uint8Array(x);let K=0,Z,pe;for(Z=0;Z<Ve;Z++)for(pe=0;pe<I;pe++)Z<xe[pe].length&&(Ue[K++]=xe[pe][Z]);for(Z=0;Z<V;Z++)for(pe=0;pe<I;pe++)Ue[K++]=we[pe][Z];return Ue}function R(T,w,P,x){let y;if(Array.isArray(T))y=d.fromArray(T);else if(typeof T=="string"){let W=w;if(!W){const q=d.rawSplit(T);W=l.getBestVersionForData(q,P)}y=d.fromString(T,W||40)}else throw new Error("Invalid data");const C=l.getBestVersionForData(y,P);if(!C)throw new Error("The amount of data is too big to be stored in a QR Code");if(!w)w=C;else if(w<C)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+C+`.
`);const I=M(w,P,y),U=i.getSymbolSize(w),N=new n(U);return f(N,w),g(N),b(N,w),p(N,P,0),w>=7&&m(N,w),v(N,I),isNaN(x)&&(x=a.getBestMask(N,p.bind(null,N,P))),a.applyMask(x,N),p(N,P,x),{modules:N,version:w,errorCorrectionLevel:P,maskPattern:x,segments:y}}return ha.create=function(w,P){if(typeof w>"u"||w==="")throw new Error("No input text");let x=e.M,y,C;return typeof P<"u"&&(x=e.from(P.errorCorrectionLevel,e.M),y=l.from(P.version),C=a.from(P.maskPattern),P.toSJISFunc&&i.setToSJISFunction(P.toSJISFunc)),R(w,y,x,C)},ha}var Pa={},La={},mu;function mh(){return mu||(mu=1,(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(r){return[r,r]}))),n.length===6&&n.push("F","F");const s=parseInt(n.join(""),16);return{r:s>>24&255,g:s>>16&255,b:s>>8&255,a:s&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const s=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,r=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:r,scale:r?4:a,margin:s,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,s){return s.width&&s.width>=n+s.margin*2?s.width/(n+s.margin*2):s.scale},i.getImageWidth=function(n,s){const r=i.getScale(n,s);return Math.floor((n+s.margin*2)*r)},i.qrToImageData=function(n,s,r){const a=s.modules.size,o=s.modules.data,c=i.getScale(a,r),l=Math.floor((a+r.margin*2)*c),u=r.margin*c,h=[r.color.light,r.color.dark];for(let d=0;d<l;d++)for(let f=0;f<l;f++){let g=(d*l+f)*4,b=r.color.light;if(d>=u&&f>=u&&d<l-u&&f<l-u){const m=Math.floor((d-u)/c),p=Math.floor((f-u)/c);b=h[o[m*a+p]?1:0]}n[g++]=b.r,n[g++]=b.g,n[g++]=b.b,n[g]=b.a}}})(La)),La}var gu;function gv(){return gu||(gu=1,(function(i){const e=mh();function t(s,r,a){s.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=a,r.width=a,r.style.height=a+"px",r.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(r,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(r.modules.size,c),h=l.getContext("2d"),d=h.createImageData(u,u);return e.qrToImageData(d.data,r,c),t(h,l,u),h.putImageData(d,0,0),l},i.renderToDataURL=function(r,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=i.render(r,a,c),u=c.type||"image/png",h=c.rendererOpts||{};return l.toDataURL(u,h.quality)}})(Pa)),Pa}var Ia={},bu;function bv(){if(bu)return Ia;bu=1;const i=mh();function e(s,r){const a=s.a/255,o=r+'="'+s.hex+'"';return a<1?o+" "+r+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(s,r,a){let o=s+r;return typeof a<"u"&&(o+=" "+a),o}function n(s,r,a){let o="",c=0,l=!1,u=0;for(let h=0;h<s.length;h++){const d=Math.floor(h%r),f=Math.floor(h/r);!d&&!l&&(l=!0),s[h]?(u++,h>0&&d>0&&s[h-1]||(o+=l?t("M",d+a,.5+f+a):t("m",c,0),c=0,l=!1),d+1<r&&s[h+1]||(o+=t("h",u),u=0)):c++}return o}return Ia.render=function(r,a,o){const c=i.getOptions(a),l=r.modules.size,u=r.modules.data,h=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+h+"v"+h+'H0z"/>':"",f="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+h+" "+h+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+f+`</svg>
`;return typeof o=="function"&&o(null,m),m},Ia}var _u;function _v(){if(_u)return Ci;_u=1;const i=Z0(),e=mv(),t=gv(),n=bv();function s(r,a,o,c,l){const u=[].slice.call(arguments,1),h=u.length,d=typeof u[h-1]=="function";if(!d&&!i())throw new Error("Callback required as last argument");if(d){if(h<2)throw new Error("Too few arguments provided");h===2?(l=o,o=a,a=c=void 0):h===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(h<1)throw new Error("Too few arguments provided");return h===1?(o=a,a=c=void 0):h===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(f,g){try{const b=e.create(o,c);f(r(b,a,c))}catch(b){g(b)}})}try{const f=e.create(o,c);l(null,r(f,a,c))}catch(f){l(f)}}return Ci.create=e.create,Ci.toCanvas=s.bind(null,t.render),Ci.toDataURL=s.bind(null,t.renderToDataURL),Ci.toString=s.bind(null,function(r,a,o){return n.render(r,o)}),Ci}var vv=_v();const xv=$0(vv);function Da(i,e,t,n,s){i.save(),i.translate(e,t),i.rotate(n),i.scale(s,s),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-92,110,-100,-76,0,-210),i.bezierCurveTo(100,-76,92,110,0,210),i.stroke(),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-8,70,6,-100,0,-210);for(let r=0;r<7;r++){const a=-135+r*45;i.moveTo(0,a+36),i.quadraticCurveTo(-42,a+20,-62,a-8),i.moveTo(0,a+36),i.quadraticCurveTo(42,a+20,62,a-8)}i.stroke(),i.restore()}function yv(i,e,t,n){i.save(),i.translate(e,t),i.scale(n/400,n/400);for(let s=-4;s<=4;s++)i.save(),i.rotate(s*.25),i.beginPath(),i.moveTo(0,72),i.bezierCurveTo(-60,8,-48,-64,0,-112),i.bezierCurveTo(48,-64,60,8,0,72),i.stroke(),i.restore();i.restore()}function gh(i,e){i.strokeStyle=e.accent,i.globalAlpha=.3,i.lineWidth=3,Da(i,152,686,-.26,1.2),Da(i,900,696,.28,1.25),Da(i,1012,690,.45,1.05),i.globalAlpha=.25;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(-30,925+t*15),i.bezierCurveTo(200,840+t*14,288,1040+t*12,530,953+t*13),i.bezierCurveTo(760,860+t*12,910,1030+t*12,1120,925+t*15),i.stroke()}function Mv(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.lineWidth=3;for(let t=0;t<3;t++){const n=t*36;i.beginPath(),i.moveTo(540,385+n),i.lineTo(958-n,555+n/3),i.lineTo(958-n,907-n/3),i.lineTo(540,1045-n),i.lineTo(122+n,907-n/3),i.lineTo(122+n,555+n/3),i.closePath(),i.globalAlpha=t===0?.07:.03,i.fill(),i.globalAlpha=.32-t*.06,i.stroke()}i.globalAlpha=.34;for(let t=0;t<22;t++){const n=t*Math.PI*2/22;i.beginPath(),i.moveTo(540+Math.cos(n)*305,713+Math.sin(n)*305),i.lineTo(540+Math.cos(n)*330,713+Math.sin(n)*330),i.stroke()}for(const t of[78,1002])for(let n=440;n<1020;n+=88)i.beginPath(),i.moveTo(t,n),i.lineTo(t+28,n),i.lineTo(t+28,n+50),i.lineTo(t+10,n+50),i.lineTo(t+10,n+22),i.stroke()}function Sv(i,e){i.strokeStyle=e.accent,i.lineWidth=3,i.globalAlpha=.4;for(const t of[230,265,290,310])i.beginPath(),i.arc(540,710,t,0,Math.PI*2),i.stroke();i.globalAlpha=.32;for(let t=0;t<8;t++){const n=t*Math.PI/4;i.beginPath(),i.arc(540+Math.cos(n)*208,710+Math.sin(n)*208,83,0,Math.PI*2),i.stroke()}i.lineWidth=2,i.globalAlpha=.22;for(let t=0;t<48;t++){const n=t*Math.PI/24;i.beginPath(),i.moveTo(540+Math.cos(n)*295,710+Math.sin(n)*295),i.lineTo(540+Math.cos(n)*305,710+Math.sin(n)*305),i.stroke()}}function Ev(i,e){i.strokeStyle=e.accent,i.lineWidth=3;for(let t=0;t<4;t++){const n=194+t*27;i.globalAlpha=.36-t*.045,i.beginPath(),i.moveTo(540-n,1040),i.lineTo(540-n,690),i.arc(540,690,n,Math.PI,Math.PI*2),i.lineTo(540+n,1040),i.stroke()}i.globalAlpha=.3,yv(i,540,970,710),i.lineWidth=2,i.globalAlpha=.16;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(70+t*13,410),i.lineTo(70+t*13,985),i.moveTo(1010-t*13,410),i.lineTo(1010-t*13,985),i.stroke()}function Tv(i,e){i.fillStyle=e.accent,i.strokeStyle=e.accent;for(let t=0;t<6;t++){const n=t*62;i.beginPath(),i.moveTo(-80,665+n),i.bezierCurveTo(130,330+n,235,940+n,475,615+n),i.bezierCurveTo(680,345+n,870,810+n,1160,500+n),i.lineTo(1160,1090),i.lineTo(-80,1090),i.closePath(),i.globalAlpha=.045+t*.012,i.fill(),i.globalAlpha=.21,i.lineWidth=2,i.stroke()}i.strokeStyle="#b69965",i.globalAlpha=.42,i.beginPath(),i.moveTo(998,395),i.lineTo(949,495),i.lineTo(976,580),i.lineTo(906,650),i.lineTo(925,754),i.lineTo(860,843),i.lineTo(883,953),i.stroke()}function Av(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.globalAlpha=.1,i.beginPath(),i.arc(832,574,170,0,Math.PI*2),i.fill(),i.globalAlpha=.44,i.lineWidth=2,i.stroke();for(let t=0;t<4;t++){const n=113+t*25;i.beginPath(),i.moveTo(n,378),i.bezierCurveTo(n+250,560,n-70,800,n+200,1030),i.stroke()}i.globalAlpha=.22;for(let t=0;t<6;t++)i.beginPath(),i.moveTo(805+t*18,700),i.bezierCurveTo(610+t*23,830,978+t*23,913,870+t*21,1040),i.stroke()}function wv(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent;for(let t=0;t<3;t++)i.beginPath(),i.arc(540,695,245+t*30,0,Math.PI*2),i.globalAlpha=t===0?.085:.035,i.fill(),i.globalAlpha=.3-t*.055,i.lineWidth=t===0?3:2,i.stroke();i.globalAlpha=.46;for(let t=0;t<3;t++)i.beginPath(),i.arc(864+t*35,429,6,0,Math.PI*2),i.fill();i.lineWidth=5;for(const t of[914,935])i.beginPath(),i.moveTo(t,856),i.lineTo(t+5,896),i.stroke();i.globalAlpha=.24,i.lineWidth=2;for(let t=0;t<4;t++)i.beginPath(),i.moveTo(55,926+t*19),i.bezierCurveTo(110,894+t*19,175,961+t*19,246,924+t*19),i.stroke()}const Rv={waves:gh,angles:Mv,arcs:Sv,halo:Ev,contours:Tv,strings:Av,still:wv};function Cv(i,e){i.save();const t=i.createRadialGradient(1010,545,20,540,690,1050);t.addColorStop(0,e.accent+"38"),t.addColorStop(.62,e.accent+"0c"),t.addColorStop(1,e.accent+"00"),i.fillStyle=t,i.fillRect(0,0,1080,1440),i.fillStyle=e.ink,i.globalAlpha=.027;for(let s=0;s<1600;s++)i.fillRect(s*73%1080,s*137%1440,1+s%3*.35,.8);i.globalAlpha=1,i.beginPath(),i.rect(44,378,992,650),i.clip(),(Rv[e.motif]||gh)(i,e);const n=i.createRadialGradient(540,710,80,540,710,345);n.addColorStop(0,e.paper+"e6"),n.addColorStop(.65,e.paper+"99"),n.addColorStop(1,e.paper+"00"),i.globalAlpha=1,i.fillStyle=n,i.fillRect(44,378,992,650),i.restore()}function hs(i,e=null){var s;const t=((s=globalThis.location)==null?void 0:s.origin)||"http://localhost",n=new URL(e||t,t);if(!["http:","https:"].includes(n.protocol))throw new Error("分享地址必须使用 HTTP 或 HTTPS");return n.username="",n.password="",n.pathname="/",n.search="",n.hash="",n.searchParams.set("artifact",String(i)),n.href}function Pv(i,{ink:e="#172824",transparent:t=!1,width:n=300}={}){return xv.toDataURL(String(i),{type:"image/png",width:n,margin:4,errorCorrectionLevel:"M",color:{dark:e,light:t?"#00000000":"#ffffff"}})}function or(i,e,t,n,s,r,a=3){const o=Array.from(String(e||"")),c=[];let l="";for(const h of o)h===`
`||i.measureText(l+h).width>s?(c.push(l),l=h===`
`?"":h):l+=h;l&&c.push(l);const u=c.slice(0,a);if(c.length>a){let h=u.at(-1);for(;h&&i.measureText(h+"…").width>s;)h=h.slice(0,-1);u[u.length-1]=h+"…"}u.forEach((h,d)=>i.fillText(h,t,n+d*r))}function Lv(i){const e=i?new Date(i):null;return!e||!Number.isFinite(e.getTime())?"日期未记录":new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(e).replaceAll("/",".")}function Iv(i){return new Promise((e,t)=>{const n=new Image;n.onload=()=>e(n),n.onerror=()=>t(new Error("二维码图片加载失败")),n.src=i})}function Dv(i){var t;const e={x:0,y:0,width:i.width,height:i.height};try{const n=(t=i.getContext("2d"))==null?void 0:t.getImageData(0,0,i.width,i.height).data;if(!n)return e;let s=i.width,r=i.height,a=-1,o=-1;for(let d=0;d<i.height;d++)for(let f=0;f<i.width;f++)n[(d*i.width+f)*4+3]<=8||(s=Math.min(s,f),a=Math.max(a,f),r=Math.min(r,d),o=Math.max(o,d));if(a<s||o<r)return e;const c=Math.ceil((a-s+1)*.1),l=Math.ceil((o-r+1)*.1),u=Math.max(0,s-c),h=Math.max(0,r-l);return{x:u,y:h,width:Math.min(i.width,a+c+1)-u,height:Math.min(i.height,o+l+1)-h}}catch{return e}}const bs={"goujian-sword":{name:"藏锋铭",paper:"#16312f",ink:"#f0e6ce",accent:"#bea874",muted:"#a9bcb0",motto:"一线锋芒，静照千年。",motif:"angles"},"galloping-horse":{name:"凌风笺",paper:"#182e3e",ink:"#e4eee3",accent:"#88b8a9",muted:"#a9bdc2",motto:"一瞬凌空，万里生风。",motif:"arcs"},"four-ram-zun":{name:"肃礼铭",paper:"#302d24",ink:"#ede0bf",accent:"#c4a477",muted:"#b7aa8e",motto:"四角相望，一器凝章。",motif:"angles"},"zenghouyi-bells":{name:"和鸣笺",paper:"#352523",ink:"#f2e3ca",accent:"#d0ad75",muted:"#c0aa97",motto:"钟声入想，余韵相逢。",motif:"strings"},"speechless-buddha":{name:"默然笺",paper:"#e8eadd",ink:"#435144",accent:"#9a8b59",muted:"#707b68",motto:"不必多言，相逢已好。",motif:"still"},"phoenix-ewer":{name:"青花笺",paper:"#f5f1e7",ink:"#193b66",accent:"#315f97",muted:"#737b87",motto:"一抹青蓝，留住此刻。",motif:"waves"},"bronze-head":{name:"铜影铭",paper:"#123830",ink:"#f2e6c8",accent:"#c2a66c",muted:"#b9c5b4",motto:"铜色无言，目光有声。",motif:"angles"},"cloud-mirror":{name:"照影笺",paper:"#f0e0c6",ink:"#634a37",accent:"#9c703f",muted:"#887668",motto:"照见流光，也照见相逢。",motif:"arcs"},"liquan-bodhisattva":{name:"静观笺",paper:"#eeeae2",ink:"#514e48",accent:"#b4a078",muted:"#848075",motto:"静观一瞬，心有回响。",motif:"halo"},"longquan-figure":{name:"青瓷笺",paper:"#dfece1",ink:"#2b5647",accent:"#5d8b73",muted:"#6d8274",motto:"梅子青里，时间温润。",motif:"contours"},"pipa-figurine":{name:"遗音笺",paper:"#4a2932",ink:"#f5e4d1",accent:"#d6b581",muted:"#cbb8aa",motto:"弦声虽远，余韵犹在。",motif:"strings"}};function ko(i){return{...Object.hasOwn(bs,i)?bs[i]:bs["phoenix-ewer"]}}function Nv(i){return Object.hasOwn(bs,i)?`/images/checkin/${encodeURIComponent(i)}.webp`:null}function bh(i){return Object.hasOwn(bs,i)?`/images/checkin/portraits/${encodeURIComponent(i)}.webp`:null}async function Uv({exhibit:i={},visit:e={},nickname:t="",hideNickname:n=!0,style:s="artifact",shareUrl:r,artifactImage:a=null,collectionCount:o=1}={}){var p;(p=document.fonts)!=null&&p.ready&&await document.fonts.ready;const c=ko(i.id||e.artifactId);s==="memory"&&Object.assign(c,{paper:"#183a33",ink:"#f2e6c8",muted:"#b9c5b4",accent:"#c2a66c"});const l=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1080,1440):document.createElement("canvas");l.width=1080,l.height=1440;const u=l.getContext("2d");if(!u)throw new Error("当前浏览器无法生成海报");const h=(v,M=c.ink,_=!1)=>{u.fillStyle=M,u.font=`${v}px ${_?'"Noto Serif SC", "Songti SC", SimSun, serif':'"Microsoft YaHei", sans-serif'}`};if(u.fillStyle=c.paper,u.fillRect(0,0,1080,1440),u.strokeStyle=c.accent,u.globalAlpha=.4,u.lineWidth=1,u.strokeRect(30,30,1020,1380),u.globalAlpha=1,Cv(u,c),h(24,c.muted),u.fillText("重器新生  /  数字博物馆",76,94),u.textAlign="right",u.fillText(c.name,1004,94),u.textAlign="left",h(70,c.ink,!0),or(u,i.title||"数字文物",76,181,820,80,2),h(30,c.accent,!0),u.fillText(c.motto,78,318),h(20,c.muted),or(u,i.english||"AN ENCOUNTER ACROSS TIME",78,354,890,26,1),u.save(),u.translate(963,210),u.rotate(-.035),u.strokeStyle=c.accent,u.lineWidth=2,u.strokeRect(-38,-48,76,96),u.strokeRect(-33,-43,66,86),h(24,c.accent,!0),u.textAlign="center",["观","展","留","念"].forEach((v,M)=>u.fillText(v,M%2?16:-16,M<2?-8:25)),u.restore(),a&&a.width>0&&a.height>0){const v=Dv(a),M=Math.min(880/v.width,650/v.height),_=v.width*M,R=v.height*M;u.drawImage(a,v.x,v.y,v.width,v.height,(1080-_)/2,380+(650-R)/2,_,R)}else h(24,c.muted,!0),u.textAlign="center",u.fillText("文物影像暂未载入",540,710),u.textAlign="left";u.strokeStyle=c.accent,u.globalAlpha=.4,u.beginPath(),u.moveTo(76,1060),u.lineTo(1004,1060),u.stroke(),u.globalAlpha=1,h(24,c.muted),u.fillText("初 次 相 遇",76,1103),h(46,c.ink,!0),u.fillText(Lv(e.firstVisitedAt),76,1165);const d=Number.isFinite(Number(o))?Math.max(1,Math.floor(Number(o))):1;h(26,c.muted),u.fillText(`我的数字收藏 · 第 ${d} 件`,78,1207);const f=!!(!n&&t);f&&(h(26),or(u,`${t} 的观展记忆`,78,1244,580,32,1));const g=hs(i.id||e.artifactId||"",r),b=await Iv(await Pv(g,{ink:c.ink,transparent:!0,width:224}));u.drawImage(b,766,1097,224,224),h(20,c.muted),u.textAlign="center",u.fillText("扫码走近这件文物",878,1362),u.textAlign="left";const m=Array.isArray(i.description)?i.description.filter(Boolean).join(""):i.lead||c.motto;return h(36,c.ink,!0),or(u,m,76,f?1296:1252,620,44,f?2:3),h(18,c.muted),u.fillText("数字阅览记录 · 非现场到访证明",76,1385),typeof l.convertToBlob=="function"?l.convertToBlob({type:"image/png"}):new Promise((v,M)=>l.toBlob(_=>_?v(_):M(new Error("海报导出失败")),"image/png"))}const vu=new WeakMap,Na="http://www.w3.org/2000/svg",xu={first:"M41 28h18l-3 9c13 10 16 21 12 31-5 13-31 13-36 0-4-10-1-21 12-31z M40 28h20 M39 53q11-9 22 0 M37 61q13 10 26 0 M42 73h16 M46 21h8",three:"M50 24c-3 13-18 15-18 28 0 10 8 16 18 23 10-7 18-13 18-23 0-13-15-15-18-28z M50 39v33 M50 55q-17-3-19-14 M50 61q16-4 19-15 M37 75q13 8 26 0 M25 63q-7-12 0-24 M75 63q7-12 0-24",all:"M26 42l24-17 24 17z M30 46h40 M34 47v23 M45 47v23 M55 47v23 M66 47v23 M28 72h44 M24 78h52 M43 35h14 M20 56h5 M75 56h5"};function vt(i,e,t){const n=document.createElement(i);return n.className=e,t!==void 0&&(n.textContent=t),n}function yu(i,e,t=!1){const n=vt("div",`pp-aw-seal${t?" pp-aw-seal-large":""}${e?" pp-aw-lit":""}`),s=document.createElementNS(Na,"svg");s.setAttribute("viewBox","0 0 100 100"),s.setAttribute("aria-hidden","true");for(const a of[44,39]){const o=document.createElementNS(Na,"circle");for(const[c,l]of Object.entries({cx:50,cy:50,r:a}))o.setAttribute(c,l);s.append(o)}const r=document.createElementNS(Na,"path");return r.setAttribute("d",xu[i]||xu.first),s.append(r),n.append(s),n}function Mu(i){const e=new Date(i);return i&&Number.isFinite(e.getTime())?new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",timeZone:"Asia/Shanghai"}).format(e).replaceAll("/","."):"已获得"}function Fv(i,e){const t=e.achievements||[],n=JSON.stringify(t);if(vu.get(i)===n&&i.firstChild)return;vu.set(i,n);const s=t.filter(h=>h.unlocked),r=[...s].sort((h,d)=>String(d.unlockedAt||"").localeCompare(String(h.unlockedAt||""))||d.target-h.target)[0],a=r||t[0],o=vt("section","pp-aw-gallery");o.setAttribute("aria-label","观展成就");const c=vt("div","pp-aw-hero");c.append(vt("p","pp-aw-eyebrow",r?"最新珍藏 · LATEST HONOUR":"待启的珍藏 · YOUR COLLECTION")),c.append(yu((a==null?void 0:a.id)||"first",!!r,!0)),c.append(vt("h2","pp-aw-title",(r==null?void 0:r.title)||"每一次相逢，皆有印记")),c.append(vt("p","pp-aw-caption",r?`${Mu(r.unlockedAt)} · ${r.reward||"观展纪念章"}`:"参观文物并打卡，点亮你的第一枚纪念章"));const l=vt("div","pp-aw-heading");l.append(vt("h3","pp-aw-heading-title","我的纪念章"),vt("span","pp-aw-total",`${s.length} / ${t.length} 已获得`)),o.append(c,l);const u=vt("div","pp-aw-list");for(const h of t){const d=vt("article",`pp-aw-card${h.unlocked?" pp-aw-earned":""}`);d.append(yu(h.id,h.unlocked));const f=vt("div","pp-aw-copy");f.append(vt("h4","pp-aw-card-title",h.title),vt("p","pp-aw-description",h.description));const g=vt("div","pp-aw-progress"),b=vt("span","pp-aw-progress-fill");b.style.width=`${Math.max(0,Math.min(100,h.target>0?h.progress/h.target*100:0))}%`,g.setAttribute("aria-hidden","true"),g.append(b),h.unlocked||f.append(g);const m=vt("div","pp-aw-status");m.append(vt("span","pp-aw-state",h.unlocked?"已珍藏":"待点亮"),vt("span","pp-aw-date",h.unlocked?Mu(h.unlockedAt):`${h.progress} / ${h.target} 件`)),d.append(f,m),u.append(d)}o.append(u,vt("p","pp-aw-footnote","循器而行 · 将相逢珍藏")),i.replaceChildren(o)}const kv=(i=navigator.userAgent)=>/MicroMessenger|Android|iPhone|iPad|iPod/i.test(i);function Ov({dialog:i,getBlob:e}){const t=document.createElement("section");t.className="pp-save-sheet",t.hidden=!0,t.setAttribute("aria-label","保存收藏卡原图"),t.innerHTML='<header><h3>保存收藏卡</h3><button type="button" class="pp-save-back">返回打卡</button></header><p class="pp-save-message" role="status"></p><img class="pp-save-image" alt="文物收藏卡原图，长按图片保存到手机" hidden><button type="button" class="pp-save-retry" hidden>重新准备图片</button><a class="pp-save-original" target="_blank" rel="noopener noreferrer" hidden>打开原图 ↗</a><p class="pp-save-note">长按图片，选择“保存到手机”或“保存图片”。没有菜单时，可打开原图再长按，或用手机浏览器打开当前页面。</p>',i.append(t);const n=l=>t.querySelector(l);let s=null,r=null,a=0;function o(){++a,s==null||s.abort(),s=null,t.hidden=!0;for(const l of i.children)l!==t&&(l.inert=!1)}async function c(){const l=e();if(!l)return;o();const u=a;t.hidden=!1;for(const f of i.children)f!==t&&(f.inert=!0);n(".pp-save-back").focus(),n(".pp-save-image").hidden=!0,n(".pp-save-original").hidden=!0,n(".pp-save-retry").hidden=!0,n(".pp-save-message").textContent="正在准备可保存的原图…";const h=new AbortController;s=h;const d=setTimeout(()=>h.abort(),2e4);try{if(!r||r.blob!==l||r.expiresAt<Date.now()+6e4){const g=await fetch("/api/card-images",{method:"POST",headers:{"Content-Type":"image/png"},body:l,credentials:"same-origin",signal:h.signal}),b=await g.json();if(!g.ok)throw new Error(b.message||"原图准备失败，请重试。");if(u!==a)return;if(!/^\/api\/card-images\/[a-f0-9]{48}\.png$/.test(b.url))throw new Error("图片地址异常，请重试。");r={blob:l,url:b.url,expiresAt:b.expiresAt}}const f=n(".pp-save-image");if(f.src=r.url,await f.decode(),u!==a)return;f.hidden=!1,n(".pp-save-original").href=r.url,n(".pp-save-original").hidden=!1,n(".pp-save-message").textContent="长按下方图片，保存到手机相册"}catch(f){if(u!==a)return;r=null,n(".pp-save-message").textContent=f.name==="AbortError"?"连接超时，请确认电脑服务仍在运行后重试。":"原图暂未准备好，请重试。",n(".pp-save-retry").hidden=!1}finally{clearTimeout(d)}}return n(".pp-save-back").onclick=o,n(".pp-save-retry").onclick=c,t.addEventListener("keydown",l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),o())}),i.addEventListener("close",o),{open:c,reset(){o(),r=null,n(".pp-save-image").removeAttribute("src")},destroy(){o(),i.removeEventListener("close",o),t.remove()}}}const Bv=i=>i?new Date(i).toLocaleString("zh-CN",{hour12:!1}):"尚未领取",Zt=(i,e,t)=>{const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.textContent=t),n};function zv({exhibit:i,exhibits:e,isReady:t,captureArtifact:n}){const s=Zt("button","pp-launcher","文物打卡 ↗");s.type="button",s.setAttribute("aria-haspopup","dialog");const r=Zt("dialog","pp-dialog");r.setAttribute("aria-labelledby","pp-title"),r.innerHTML=`<header class="pp-topbar"><div><span class="pp-eyebrow">A MOMENT, COLLECTED</span><h2 id="pp-title">文物打卡</h2></div><div class="pp-header-actions"><button class="pp-settings-open" type="button" aria-label="护照设置">⚙</button><button class="pp-close" type="button" aria-label="关闭文物打卡">×</button></div></header>
  <div class="pp-body"><section class="pp-page pp-card-page" data-page="card"><div class="pp-card-caption"><span>此刻相逢</span><span class="pp-card-name"></span></div><div class="pp-poster-stage"><div class="pp-placeholder"><span class="pp-loading-mark">印</span><p>正在准备这份相逢</p></div><img class="pp-preview" alt="当前文物收藏卡预览，含文物展页二维码" hidden></div><p class="pp-status" role="status" aria-live="polite"></p><button class="pp-retry" type="button" hidden>重试生成卡片</button><div class="pp-poster-actions"><a class="pp-download" download aria-disabled="true">保存图片</a><button class="pp-system-share" type="button" disabled>分享卡片 ↗</button></div><p class="pp-boundary">数字观展纪念 · 卡片二维码可回到这件文物</p><p class="pp-network"></p></section>
  <section class="pp-page pp-collection-page" data-page="collection" hidden><div class="pp-section-title"><div><span class="pp-eyebrow">YOUR LITTLE MUSEUM</span><h3>我的藏印</h3></div><span class="pp-count"></span></div><p class="pp-section-note">把每一次驻足，收进自己的小小博物馆。</p><div class="pp-stamps"></div><div class="pp-pagination"><button class="pp-prev" type="button" aria-label="上一页藏印">←</button><span class="pp-page-number"></span><button class="pp-next" type="button" aria-label="下一页藏印">→</button></div></section>
  <section class="pp-page pp-achievements-page" data-page="achievements" hidden><div class="pp-achievements"></div></section>
  <section data-page="settings" class="pp-page pp-settings" aria-label="护照设置" hidden><h3>保存这份相逢</h3><p class="pp-profile"></p><p class="pp-retention"></p><p class="pp-storage-note">护照身份保存在当前浏览器，清理浏览器数据可能失去身份。服务端记录不会随浏览器会话结束自动删除。可按需保管恢复码，在其他设备找回护照。</p>
    <form class="pp-nickname-form"><label>昵称（可选）<input name="nickname" autocomplete="nickname" maxlength="30" placeholder="留空使用“观展游客”"></label><button type="submit">保存昵称</button><p class="pp-settings-status" role="status"></p></form>
    <div class="pp-recovery"><h4>护照恢复码</h4><p>恢复码可找回这份护照，请私下保管。持有码的人可以访问护照，请勿放进公开分享内容。</p><button class="pp-recovery-generate" type="button">生成恢复码</button><div class="pp-rotation" hidden><p>重新生成会立即使旧恢复码失效。请确认你准备保存新码。</p><button class="pp-rotation-confirm" type="button">确认使旧码失效并生成新码</button><button class="pp-rotation-cancel" type="button">取消</button></div><p class="pp-recovery-status" role="status"></p><div class="pp-recovery-result" hidden><label>请下载或复制保存恢复码<textarea class="pp-recovery-code" readonly autocomplete="off" spellcheck="false"></textarea></label><div class="pp-recovery-actions"><a class="pp-recovery-download" download="观展护照恢复码.txt">下载恢复码文本</a><button class="pp-recovery-copy" type="button">复制恢复码</button></div><p>关闭护照后，此处明文会清除。遗失时可重新生成，新码将替代旧码。</p></div></div>
    <form class="pp-restore-form"><h4>恢复已有护照</h4><p>输入你保管的恢复码。当前游客藏印会合并到恢复的护照，同一文物保留一枚印章。</p><label>恢复码<input name="recoveryCode" required autocomplete="off" spellcheck="false" autocapitalize="none"></label><button type="submit">恢复并合并藏印</button><p class="pp-restore-status" role="status"></p></form></section>

  </div><nav class="pp-nav" aria-label="打卡页面"><button type="button" data-view="card" aria-current="page"><span>▣</span>文物打卡</button><button type="button" data-view="collection"><span>▦</span>我的藏印</button><button type="button" data-view="achievements"><span>✧</span>观展成就</button></nav>`,document.body.append(s,r);const a=X=>r.querySelector(X);a(".pp-card-name").textContent=i.title;const o=ko(i.id);r.style.setProperty("--card-paper",o.paper),r.style.setProperty("--card-ink",o.ink),r.style.setProperty("--card-accent",o.accent);const c=Zt("img","pp-loading-specimen");c.alt="";const l=bh(i.id);l&&(c.src=l),c.onerror=()=>{c.hidden=!0};const u=new Image;l&&(u.src=l);const h=l?u.decode().then(()=>u).catch(()=>null):Promise.resolve(null);a(".pp-placeholder").prepend(Zt("span","pp-loading-title",i.title),c),a(".pp-loading-mark").textContent="藏",a(".pp-placeholder p").textContent="把这一眼相逢，收进藏印",a(".pp-poster-stage").setAttribute("aria-busy","true");let d=null,f=!1,g=null,b=null,m=!1,p=null,v=0;const M=Ov({dialog:r,getBlob:()=>g});a(".pp-download").onclick=X=>{if(!g){X.preventDefault();return}kv()&&(X.preventDefault(),M.open())};let _=null,R=0,T="card",w=0,P=!1,x=null,y=!1;const C=X=>{a(".pp-status").textContent=X},I=()=>d==null?void 0:d.visits.find(X=>X.artifactId===i.id),U=()=>{var X;return JSON.stringify([(X=I())==null?void 0:X.firstVisitedAt,N(),hs(i.id,d==null?void 0:d.publicBaseUrl)])};function N(){return[...(d==null?void 0:d.visits)||[]].sort((X,ee)=>X.firstVisitedAt.localeCompare(ee.firstVisitedAt)||X.artifactId.localeCompare(ee.artifactId)).findIndex(X=>X.artifactId===i.id)+1}const W=X=>!m&&r.open&&X===R;function q(X){X!==T&&(++R,T==="settings"&&de()),T=X,r.querySelectorAll("[data-page]").forEach(ee=>{ee.hidden=ee.dataset.page!==X}),r.querySelectorAll("[data-view]").forEach(ee=>{ee.dataset.view===X?ee.setAttribute("aria-current","page"):ee.removeAttribute("aria-current")}),a("#pp-title").textContent={card:"文物打卡",collection:"我的藏印",achievements:"观展成就",settings:"护照设置"}[X],a(".pp-body").scrollTop=0,X==="card"&&Be()}function te(X){f=X,a(".pp-poster-stage").setAttribute("aria-busy",String(X&&!g)),r.querySelectorAll(".pp-settings input,.pp-settings button,.pp-retry").forEach(ee=>{ee.disabled=X})}async function V(X="",ee){var A;const Se=await fetch(`/api/passport${X}`,{method:ee===void 0?"GET":"POST",credentials:"same-origin",headers:ee===void 0?{}:{"Content-Type":"application/json"},...ee===void 0?{}:{body:JSON.stringify(ee)}});let H;try{H=await Se.json()}catch{throw new Error("护照服务返回异常，请稍后重试。")}if(!Se.ok)throw new Error(((A=H.error)==null?void 0:A.message)||"护照服务暂时不可用，请重试。");return H}function re(){M.reset(),b&&URL.revokeObjectURL(b),b=null,g=null,p=null,r.dataset.cardState="loading",a(".pp-preview").removeAttribute("src"),a(".pp-preview").hidden=!0,a(".pp-placeholder").hidden=!1,a(".pp-placeholder").removeAttribute("aria-hidden"),a(".pp-download").removeAttribute("href"),a(".pp-download").setAttribute("aria-disabled","true"),a(".pp-system-share").disabled=!0}function de(){_&&URL.revokeObjectURL(_),_=null,a(".pp-recovery-code").value="",a(".pp-recovery-download").removeAttribute("href"),a(".pp-recovery-result").hidden=!0,a(".pp-rotation").hidden=!0,a(".pp-restore-form").reset(),a(".pp-recovery-status").textContent="",a(".pp-restore-status").textContent=""}function xe(){if(!d)return;const X=Object.values(e),ee=Math.max(1,Math.ceil(X.length/6));w=Math.min(w,ee-1),a(".pp-count").textContent=`${d.visits.length} / ${d.artifactCount}`;const Se=X.slice(w*6,w*6+6).map(H=>{const A=d.visits.find(Pe=>Pe.artifactId===H.id),_e=ko(H.id),G=Zt(H.id===i.id?"button":"a",`pp-stamp${A?" pp-collected":""}`);G.tagName==="BUTTON"?(G.type="button",G.onclick=()=>{var Pe;r.close(),(Pe=document.querySelector('.experience-nav [data-mode="view"]'))==null||Pe.click()}):(G.href=hs(H.id),window.parent!==window&&(G.target="_blank",G.rel="noopener noreferrer")),G.style.setProperty("--stamp-paper",_e.paper),G.style.setProperty("--stamp-ink",_e.ink),G.style.setProperty("--stamp-accent",_e.accent);const ne=Zt("span","pp-stamp-mark",A?"藏":"待");ne.setAttribute("aria-hidden","true");const ae=Zt("span","pp-stamp-visual"),De=Zt("img","pp-stamp-image");De.alt="",De.loading="lazy",De.onerror=()=>{De.hidden=!0,ae.classList.add("pp-image-fallback")};const ge=Nv(H.id);return ge?De.src=ge:(De.hidden=!0,ae.classList.add("pp-image-fallback")),ae.append(De,ne),G.append(ae,Zt("strong","",H.title),Zt("small","",A?"已收入藏印 · 点击查看":"待相逢 · 前往观展")),G});for(;Se.length<6;){const H=Zt("div","pp-stamp pp-empty","静候下一次相逢");H.setAttribute("aria-hidden","true"),Se.push(H)}a(".pp-stamps").replaceChildren(...Se),a(".pp-page-number").textContent=`${w+1} / ${ee}`,a(".pp-prev").disabled=w===0,a(".pp-next").disabled=w===ee-1}function we(X){var A,_e;d=X,g&&p!==U()&&re();const ee=new URL(hs(i.id,X.publicBaseUrl)).hostname,Se=/^(localhost|127\.|0\.0\.0\.0$|\[?::1\]?$)/i.test(ee),H=/^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ee)||ee.endsWith(".local");a(".pp-network").textContent=Se?"当前为本机展页，其他设备扫码暂不可访问。":H?"当前为局域网展页，扫码设备需连接同一网络。":"",xe(),Fv(a(".pp-achievements"),X),a(".pp-profile").textContent=`${X.profile.nickname}的数字观展护照`,a('.pp-nickname-form [name="nickname"]').value=X.profile.nickname==="观展游客"?"":X.profile.nickname,a(".pp-retention").textContent=(A=X.storage)!=null&&A.expiresAt?`浏览器身份按最近使用滚动保存 ${X.storage.retentionDays} 天，当前有效至 ${Bv(X.storage.expiresAt)}。`:"正在确认浏览器身份保存期限。",a(".pp-recovery-generate").textContent=(_e=X.storage)!=null&&_e.hasRecoveryCode?"重新生成恢复码":"生成恢复码"}async function Ve(){if(x)return x;x=(async()=>{const X=await V();m||we(X.passport||X)})();try{await x}finally{x=null}}async function Be(X=!1){if(m||f||y||x||P||g||(X?!I()||!t():!r.open||T!=="card"))return;const ee=R,Se=()=>!m&&(X||W(ee));if(d){if(!t()&&!l){C("器物正在就绪，完成后会自动生成收藏卡…");return}te(!0),a(".pp-retry").hidden=!0;try{if(!I()){C("正在将这次相逢收入藏印…");const ae=await V("/checkin",{artifactId:i.id});if(m||we(ae.passport),!Se())return}if(C("正在制作你的文物收藏卡…"),await new Promise(ae=>requestAnimationFrame(()=>setTimeout(ae,0))),!Se())return;const H=await h||(t()?await n():null);if(!Se())return;if(!H&&!t()){C("器物正在就绪，完成后会自动生成收藏卡…");return}if(!H)throw new Error("暂时无法取得器物画面，请重试。");const A=U(),_e=await Uv({exhibit:i,visit:I(),nickname:d.profile.nickname,hideNickname:!0,style:"artifact",shareUrl:hs(i.id,d.publicBaseUrl),artifactImage:H,collectionCount:N()});if(!Se()||A!==U())return;const G=URL.createObjectURL(_e),ne=a(".pp-preview");ne.src=G;try{await ne.decode()}catch(ae){throw URL.revokeObjectURL(G),ae}if(!Se()||A!==U()){ne.removeAttribute("src"),URL.revokeObjectURL(G);return}g=_e,p=A,b=G,ne.hidden=!1,r.dataset.cardState="ready",a(".pp-placeholder").setAttribute("aria-hidden","true"),a(".pp-download").href=b,a(".pp-download").download=`${i.id}-文物收藏卡.png`,a(".pp-download").removeAttribute("aria-disabled"),a(".pp-system-share").disabled=!1,C("已收入藏印，留住这一眼相逢。"),r.open&&performance.measure("passport-card-ready",{start:v})}catch(H){Se()&&(P=!0,C(H.message||"收藏卡制作失败，请重试。"),a(".pp-retry").hidden=!1)}finally{m||(te(!1),ee!==R&&r.open&&Be())}}}async function Ue(){if(!(m||r.open)){++R,P=!1,y=!0,v=performance.now(),r.showModal(),document.body.classList.add("passport-open"),q("card"),C(g?"已收入藏印，留住这一眼相逢。":"正在翻开你的藏印…"),g&&performance.measure("passport-card-cached",{start:v});try{await Ve(),!m&&r.open&&(y=!1,Be())}catch(X){!m&&r.open&&(y=!1,P=!0,C(X.message),a(".pp-retry").hidden=!1)}}}async function K(X,ee,Se,H=".pp-status",A){if(f)return;const _e=R;te(!0),a(H).textContent="正在保存…";try{const G=await V(X,ee);if(m)return;we(G.passport),X==="/restore"&&re(),W(_e)&&(a(H).textContent=typeof Se=="function"?Se(G):Se,A==null||A(G))}catch(G){W(_e)&&(a(H).textContent=G.message)}finally{m||(te(!1),Be())}}s.onclick=Ue,a(".pp-close").onclick=()=>r.close(),a(".pp-settings-open").onclick=()=>q("settings"),a(".pp-nav").onclick=X=>{const ee=X.target.closest("[data-view]");ee&&q(ee.dataset.view)},a(".pp-prev").onclick=()=>{w--,xe()},a(".pp-next").onclick=()=>{w++,xe()},r.addEventListener("keydown",X=>{X.key==="Escape"&&X.stopPropagation()}),r.addEventListener("close",()=>{++R,de(),document.body.classList.remove("passport-open"),s.focus()}),a(".pp-retry").onclick=async()=>{if(P=!1,!d)try{await Ve()}catch(X){P=!0,C(X.message);return}Be()},a(".pp-nickname-form").onsubmit=X=>{X.preventDefault(),K("/nickname",{nickname:a('.pp-nickname-form [name="nickname"]').value.trim()},"昵称已保存。",".pp-settings-status")};function Z(){f||(de(),K("/recovery-code",{},"恢复码已生成，请现在保存。",".pp-recovery-status",X=>{a(".pp-recovery-code").value=X.recoveryCode,_=URL.createObjectURL(new Blob([`数字观展护照恢复码

${X.recoveryCode}

请私下保管。持有码的人可以访问此护照。重新生成后旧码失效。`],{type:"text/plain;charset=utf-8"})),a(".pp-recovery-download").href=_,a(".pp-recovery-result").hidden=!1}))}a(".pp-recovery-generate").onclick=()=>{var X;f||!d||((X=d.storage)!=null&&X.hasRecoveryCode?(a(".pp-rotation").hidden=!1,a(".pp-rotation-confirm").focus()):Z())},a(".pp-rotation-confirm").onclick=Z,a(".pp-rotation-cancel").onclick=()=>{a(".pp-rotation").hidden=!0,a(".pp-recovery-generate").focus()},a(".pp-recovery-copy").onclick=async()=>{var ee;const X=R;if(!((ee=navigator.clipboard)!=null&&ee.writeText)){a(".pp-recovery-status").textContent="此环境无法直接复制，请下载文本保存恢复码。";return}try{await navigator.clipboard.writeText(a(".pp-recovery-code").value),X===R&&r.open&&(a(".pp-recovery-status").textContent="恢复码已复制，请私下保管。")}catch{X===R&&r.open&&(a(".pp-recovery-status").textContent="复制未完成，请下载文本保存恢复码。")}},a(".pp-restore-form").onsubmit=X=>{X.preventDefault();const ee=a('.pp-restore-form [name="recoveryCode"]').value.trim();K("/restore",{recoveryCode:ee},"护照已恢复，当前游客藏印已合并。",".pp-restore-status",()=>{de(),a(".pp-restore-status").textContent="护照已恢复，当前游客藏印已合并。"})},a(".pp-system-share").onclick=async()=>{var Se;if(!g)return;if(/MicroMessenger/i.test(navigator.userAgent)){M.open();return}const X=R,ee=new File([g],`${i.id}-文物收藏卡.png`,{type:"image/png"});if(!((Se=navigator.canShare)!=null&&Se.call(navigator,{files:[ee]}))||!navigator.share){M.open();return}try{await navigator.share({files:[ee],title:`${i.title} · 文物收藏卡`})}catch(H){H.name!=="AbortError"&&W(X)&&M.open()}};const pe=setInterval(()=>Be(!r.open),500);return Ve().catch(()=>{}),{destroy(){m=!0,++R,clearInterval(pe),de(),re(),M.destroy(),document.body.classList.remove("passport-open"),r.remove(),s.remove()}}}const Su=/^[a-zA-Z0-9][a-zA-Z0-9_-]{0,127}$/;function _h(i,e){const t=(e==null?void 0:e.name)||"数字复原作品",n=(e==null?void 0:e.modelUrl)||"",s="该作品来自本机建模任务。名称、年代、馆藏身份与真实修复过程尚未核实。",r=(a,o)=>({kind:a,brief:o,action:"查看任务来源",paragraphs:[o,s],excerpt:"AI 辅助数字建模 · 生成形体供观察与审阅"});return{dynamic:!0,id:`model-${i}`,theme:"porcelain",nickname:t,title:t,english:"DIGITAL MODEL",number:"MODEL",series:"重器新生",category:"本机作品 · 数字建模",poem:["由一张图像出发，","在微光中观察形体。"],description:["本机任务保存的数字模型，可旋转与缩放查看。","生成的形体与纹理仍需人工核对。"],tags:["数字建模",(e==null?void 0:e.objective)==="photo"?"照片来源":"复原方案来源"],model:{desktop:n,mobile:n,rotationY:0,roughness:.65,metalness:0,exposure:1.1},anchors:[],focusTargets:[],storyTitle:"作品信息",lead:s,motto:"保留来源，审阅形体。",tabLabels:["看模型","查来源","知边界"],topics:{shape:r("数字模型 · 形体观察","拖动模型查看不同方向，使用滚轮或双指缩放。微光演绎展示模型的聚合与消散。"),pattern:r("本机任务 · 来源记录",`任务编号 ${i}。${e!=null&&e.sourceAssetId?`原始图片编号 ${e.sourceAssetId}。`:e!=null&&e.sourceJobId?`图像任务编号 ${e.sourceJobId}。`:"当前记录未提供图片来源编号。"}`),craft:r("AI 辅助建模 · 审阅边界","模型的背面、内部结构与缺失部分可能包含生成推测，需要结合原始照片和实物资料核对。")},sourceTitle:"查看本机建模工作台",sourceUrl:Hv(),identity:s}}function Hv(){var e;const i=new URL("/models",((e=globalThis.location)==null?void 0:e.href)||"http://127.0.0.1/");return i.port="4317",i.href}async function Gv(i){var h;if(!Su.test(i||"")||typeof i!="string")throw new Error("模型任务编号无效。");const e=await fetch("/api/models/jobs",{credentials:"same-origin",redirect:"error",signal:AbortSignal.timeout(15e3)});if(!e.ok)throw new Error(`模型库暂时不可用（${e.status}）。`);const t=await e.json();if(!Array.isArray(t==null?void 0:t.jobs))throw new Error("模型库返回格式不正确。");const n=t.jobs.filter(d=>(d==null?void 0:d.state)==="success"&&typeof d.id=="string"&&Su.test(d.id)&&d.modelUrl===`/api/models/jobs/${d.id}/model`),s=n.findIndex(d=>d.id===i);if(s<0)throw new Error("未找到这个已完成的模型任务，请返回展厅刷新模型库。");const r=n[s],o=(typeof((h=r.source)==null?void 0:h.name)=="string"?r.source.name.trim():"").replace(/\.(?:png|jpe?g|webp|gif|avif|heic|bmp|tiff?)$/i,""),c=/^(?:复原方案|建模图|result)(?:[-_][a-f\d]{8})?$/i.test(o),l=r.objective==="photo"?"photo":"restore",u=o&&!/[\u0000-\u001f\u007f]/.test(o)&&!c?o.slice(0,100):`${l==="photo"?"照片建模作品":"复原作品"} ${String(s+1).padStart(2,"0")}`;return _h(i,{...r,objective:l,name:u})}async function Vv(){const i=H=>document.querySelector(H),e=new URLSearchParams(location.search),t=e.has("modelJob");let n=null,s;if(t){document.title="正在载入数字模型",document.querySelector(".introduction").style.visibility="hidden";try{s=await Gv(e.get("modelJob"))}catch(H){n=H,s=_h(e.get("modelJob"))}}const r=t?s:Ph(location.search),a=r||ds["phoenix-ewer"];Ih(a,ds,!r),t&&(document.querySelector(".introduction").style.visibility="");const o=matchMedia("(prefers-reduced-motion:reduce)"),c=new Dh(o.matches),l=i("#canvas"),u=i("#experience");l.setAttribute("aria-busy","true");const h=document.createElement("div");h.className="loading-orbit",h.setAttribute("aria-hidden","true");const d=!t&&bh(a.id);if(d){const H=new Image;H.src=d,H.alt="",H.className="loading-specimen",H.onerror=()=>{H.hidden=!0},h.append(H)}i("#loader").prepend(h),i(".loading-glyph").textContent="一器 · 将至",i("#load-text").textContent=`正在迎来${a.nickname}`,i("#load-detail").textContent="光里的轮廓，正渐渐靠近。";let f,g=!1,b=!1,m=-1,p,v=0,M,_,R=null,T="",w=0,P=!1,x=o.matches,y=null,C=null,I=null,U="",N=null;if(a.performance&&(C=document.createElement("button"),C.id="awaken-toggle",C.disabled=!0,C.setAttribute("aria-pressed","false"),C.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 3 9 12c-4-1-7 4-4 7s8 0 7-4l9-9M12 8l4 4M8 15l2 2"/></svg><span>唤醒弦月</span>',C.onclick=()=>{const H=f==null?void 0:f.performancePlayer;!g||!H||c.busy||P||(H.busy?H.stop():(y=null,Be("view"),re(),H.play(),N==null||N.start()),te())},i(".view-tools").prepend(C),I=document.createElement("span"),I.id="performance-status",I.setAttribute("role","status"),I.setAttribute("aria-live","polite"),i(".view-tools").append(I),a.performance.audio)){const H=i("#info .info-note");H.textContent="演奏配乐：Dancing Strings · prettysleepy1 / Pixabay。仅在唤醒时播放，可静音。";const A=document.createElement("a");A.href="https://pixabay.com/music/folk-dancing-strings-upbeat-pipa-solo-358048/",A.textContent=" 音乐来源 ↗",A.target="_blank",A.rel="noopener noreferrer",H.append(A);const _e=document.createElement("audio");_e.id="performance-audio",_e.src=a.performance.audio,_e.hidden=!0,u.append(_e),N=j0(_e,{onError:()=>{I.textContent="音乐暂不可用，动画继续播放"}});const G=document.createElement("button");G.id="performance-sound",G.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4Z M15 8q5 4 0 8 M18 4q9 8 0 16"/></svg>',G.title="关闭琵琶音乐",G.setAttribute("aria-label",G.title),G.setAttribute("aria-pressed","false"),G.onclick=()=>{const ne=G.getAttribute("aria-pressed")!=="true";G.setAttribute("aria-pressed",String(ne)),G.title=ne?"开启琵琶音乐":"关闭琵琶音乐",G.setAttribute("aria-label",G.title),N.setMuted(ne)},i(".view-tools").append(G),document.addEventListener("visibilitychange",()=>{var ne,ae;document.hidden&&N.sync((ne=f==null?void 0:f.performancePlayer)==null?void 0:ne.state,((ae=f==null?void 0:f.performancePlayer)==null?void 0:ae.time)||0,0,!0)}),window.addEventListener("pagehide",()=>N.stop())}function W(){if(!C)return;const H=f==null?void 0:f.performancePlayer,A=g?H?c.busy||P?"manifest":H.state:"unavailable":"loading";if(A===U)return;U=A;const _e=A==="playing"||A==="returning";C.disabled=["loading","unavailable","manifest","returning"].includes(A),C.setAttribute("aria-pressed",String(_e)),C.querySelector("span").textContent=A==="playing"?"停止演奏":A==="returning"?"轻轻归位":"唤醒弦月",C.setAttribute("aria-label",A==="playing"?"停止演奏":"唤醒弦月"),u.dataset.performance=A,I.textContent=A==="playing"?"轻拨一曲 · 可拖动观看":A==="returning"?"正回到静止姿态":A==="unavailable"?"动画暂不可用，仍可观赏文物":""}const q={dormant:["微光正在汇聚成器…","微光演绎"],forming:["微光正在汇聚成器…","正在成形"],formed:["","微光演绎"],dissolving:["器物正在散作微光…","正在消散"]};function te(){var _e,G;W();const H=g?c.state:"loading",A=H+":"+(((_e=f==null?void 0:f.performancePlayer)==null?void 0:_e.state)||"none");A!==T&&(T=A,i("#experience").dataset.state=H,i("#manifest-status").textContent=g?q[H][0]:"正在准备器物…",i("#manifest-label").textContent=g?q[H][1]:"聚合成形",i("#manifest-toggle").disabled=!g||c.busy||P,i("#hotspot-toggle").disabled=!g||H!=="formed"||!!((G=f==null?void 0:f.performancePlayer)!=null&&G.busy),i("#reset").disabled=!g,i("#mirror-flip")&&(i("#mirror-flip").disabled=!g||H!=="formed"||P),l.setAttribute("aria-label","拖动旋转文物，滚轮缩放；方向键旋转，加减键缩放"))}function V(H){b=H;const A=i("#hotspot-toggle");A.setAttribute("aria-pressed",String(H)),A.setAttribute("aria-label",H?"收起光点":"显示器形细节"),A.title=H?"收起光点与讲解":"显示细节光点",A.textContent=H?"收起光点":"细节光点",H||(m=-1,R=null,i("#detail").hidden=!0,document.querySelectorAll(".hotspot").forEach(_e=>{_e.hidden=!0,_e.removeAttribute("data-active"),_e.setAttribute("aria-expanded","false")}))}function re(){V(!1)}function de(H){const A=f.anchors[H];if(!A||!g||c.state!=="formed"||m===H&&!i("#detail").hidden)return;const _e=Ah(a,H);V(!0),m=H,i("#detail-number").textContent="细看一处 / "+String(H+1).padStart(2,"0"),i("#detail-title").textContent=A.label,i("#detail-copy").textContent=_e.copy,i("#detail-look").textContent=_e.look,i("#detail").hidden=!1,document.querySelectorAll(".hotspot").forEach((G,ne)=>{G.toggleAttribute("data-active",ne===H),G.setAttribute("aria-expanded",String(ne===H))})}function xe(){var H;if(!(!g||c.busy||P)){if((H=f==null?void 0:f.performancePlayer)!=null&&H.busy){f.performancePlayer.stop(),y=xe,te();return}if(Be("view"),R=null,re(),c.reduced){c.present(),i("#manifest-status").textContent="已开启减少动态效果，保持完整器物";return}P=!0,c.toggle(),te()}}window.addEventListener("museum-enter",H=>{var A;g&&((A=H.detail)!=null&&A.reduced&&(c.reduced=!0,Ue(!0)),t?c.form():c.present(),te())});function we(){var A;if(!g||R===null)return;if((A=f==null?void 0:f.performancePlayer)!=null&&A.busy){f.performancePlayer.stop();return}if(c.state==="dormant"&&(c.form(),te()),c.state!=="formed")return;const H=R;R=null,f.focusFeature(H),de(H)}function Ve(H){const A=a.focusTargets.indexOf(H);A<0||(R=A,we())}function Be(H){var A;["view","story","chat","journey"].includes(H)&&(H!=="view"&&(y=null,(A=f==null?void 0:f.performancePlayer)==null||A.stop()),i("#experience").dataset.mode=H,i("#story-panel").hidden=H!=="story",M==null||M.setOpen(H==="chat"),f==null||f.setViewingMode(H),ee==null||ee.setOpen(H==="journey"),document.querySelectorAll(".experience-nav [data-mode]").forEach(_e=>{_e.setAttribute("aria-pressed",String(_e.dataset.mode===H)),_e.dataset.mode!=="view"&&_e.setAttribute("aria-expanded",String(_e.dataset.mode===H))}),re())}function Ue(H){x=H||o.matches,i("#experience").classList.toggle("ambient-paused",x),i("#ambient-toggle").setAttribute("aria-pressed",String(x)),i("#ambient-toggle").textContent=x?"动效 · 静":"动效 · 开",i("#ambient-toggle").setAttribute("aria-label",x?"开启背景动效":"暂停背景动效"),f==null||f.setAmbientPaused(x)}i("#ambient-toggle").onclick=()=>Ue(!x);const K=()=>{var H;c.reduced=o.matches,o.matches&&((H=f==null?void 0:f.performancePlayer)==null||H.stop(),y=null,c.present(),P=!1,T="",te()),Ue(o.matches)};o.addEventListener("change",K),Ue(x);for(let H=0;H<28;H++){const A=document.createElement("i");A.style.left=`${(H*37+7)%100}%`,A.style.top=`${(H*23+13)%90}%`,A.style.animationDelay=`-${H*1.37}s`,A.style.animationDuration=`${17+H%9*2}s`,i(".ambient-dust").append(A)}document.querySelectorAll(".experience-nav [data-mode]").forEach(H=>H.onclick=()=>Be(H.dataset.mode)),i("#close-story").onclick=()=>{Be("view"),document.querySelector('[data-mode="story"][aria-controls]').focus()},document.addEventListener("keydown",H=>{if(!(H.key!=="Escape"||document.querySelector("dialog[open]"))){if(b){H.preventDefault(),re(),i("#hotspot-toggle").focus();return}i("#experience").dataset.mode!=="view"&&(H.preventDefault(),Be("view"),document.querySelector('.experience-nav [data-mode="view"]').focus())}}),i("#manifest-toggle").onclick=xe,i("#reset").onclick=()=>{g&&(re(),f.reset())},i("#mirror-flip")&&(i("#mirror-flip").onclick=()=>{g&&c.state==="formed"&&!P&&(re(),f.flip())}),i("#hotspot-toggle").onclick=()=>{!g||c.state!=="formed"||V(!b)},i("#close-detail").onclick=()=>{re(),i("#hotspot-toggle").focus()},i("#about").onclick=()=>i("#info").showModal(),i("#close-info").onclick=()=>i("#info").close(),i("#info").onclick=H=>{if(H.target===i("#info")){const A=H.target.getBoundingClientRect();(H.clientX<A.left||H.clientX>A.right||H.clientY<A.top||H.clientY>A.bottom)&&H.target.close()}},i("#retry").onclick=()=>location.reload();function Z(H){var ne,ae,De;p=requestAnimationFrame(Z);const A=v?Math.min((H-v)/1e3,.08):0;v=H;const _e=document.hidden||!!document.querySelector("dialog[open]");if(N==null||N.sync((ne=f.performancePlayer)==null?void 0:ne.state,((ae=f.performancePlayer)==null?void 0:ae.time)||0,A,_e),_e)return;let G=c.tick(A);if(P&&c.state==="dormant"?(c.form(),G=c.tick(0)):P&&c.state==="formed"&&(P=!1,T=""),f.update(G,c.visualTime,!1,A),y&&!((De=f.performancePlayer)!=null&&De.busy)){const ge=y;y=null,ge()}we(),te(),b&&c.state==="formed"&&f.projectAnchors().forEach((ge,Pe)=>{const tt=i("#hotspot-"+Pe);tt.hidden=!ge.visible,tt.style.left=ge.x+"px",tt.style.top=ge.y+"px"})}async function pe(){const H=performance.now();try{if(n)throw n;f=await W0(l,A=>{const _e={preparing:["正在勾勒器形","让每一处纹理，慢慢清晰。"],lighting:["微光将至","正在为这次相逢，点亮最后一束光。"]};if(A.phase){i("#load-text").textContent=_e[A.phase][0],i("#load-detail").textContent=_e[A.phase][1],i("#load-progress").value=A.phase==="lighting"?96:88;return}const G=A.total?Math.round(A.loaded/A.total*100):null;G===null?i("#load-progress").removeAttribute("value"):i("#load-progress").value=G*.82,i("#load-text").textContent=G===100?"正在勾勒器形":`正在迎来${a.nickname}`,i("#load-detail").textContent=G===null?"光里的轮廓，正渐渐靠近。":G===100?"让每一处纹理，慢慢清晰。":`器物已抵达 ${G}%`},()=>{},a),t?i("#experience").classList.contains("museum-embedded")||c.form():c.present(),f.setAmbientPaused(x),f.setViewingMode(i("#experience").dataset.mode),f.update(c.tick(0),c.visualTime,!1),g=!0,l.setAttribute("aria-busy","false"),i("#load-progress").value=100,await new Promise(A=>requestAnimationFrame(A)),i("#experience").classList.add("scene-ready"),i("#loader").classList.add("is-leaving"),setTimeout(()=>{g&&(i("#loader").hidden=!0)},o.matches?0:450),w=Math.round(performance.now()-H),performance.measure("artifact-ready",{start:H}),f.anchors.forEach((A,_e)=>{const G=document.createElement("button");G.className="hotspot",G.id="hotspot-"+_e;const ne=document.createElement("span");ne.className="hotspot-light",ne.setAttribute("aria-hidden","true");const ae=document.createElement("span");ae.className="hotspot-name",ae.textContent=A.label,ae.setAttribute("aria-hidden","true"),G.append(ne,ae),G.setAttribute("aria-label",A.label),G.setAttribute("aria-controls","detail"),G.setAttribute("aria-expanded","false"),G.hidden=!0,G.onclick=()=>de(_e),i("#hotspots").append(G)}),te(),we(),p=requestAnimationFrame(Z),window.__exhibit={get state(){return{ready:g,state:c.state,progress:c.progress,busy:c.busy,showHotspots:b,loadMs:w,...f.stats}},get camera(){return f.camera.position.toArray()}}}catch(A){console.error("器物加载失败",A),i("#load-text").textContent=/WebGL|context/i.test(A.message)?"当前浏览器未能开启三维画面":"器物暂时无法载入",i("#load-detail").textContent=t?(n==null?void 0:n.message)||"模型加载未完成，请检查工作台服务和模型文件后重试。":"请确认浏览器支持 WebGL 2 与本地模型文件正常。",i("#retry").hidden=!1,i("#load-progress").hidden=!0,i("#manifest-status").textContent=t?"当前模型尚未就绪，请重试或返回展厅。":`模型尚未就绪，仍可通过底部入口与${a.nickname}对话。`}}l.addEventListener("webglcontextlost",H=>{H.preventDefault(),g=!1,te(),cancelAnimationFrame(p),i("#experience").classList.remove("scene-ready"),i("#loader").classList.remove("is-leaving"),i("#loader").hidden=!1,i("#load-text").textContent="三维画面暂时中断",i("#load-detail").textContent="请重新加载以恢复器物。",i("#retry").hidden=!1}),document.addEventListener("visibilitychange",()=>{v=0,i("#experience").classList.toggle("page-hidden",document.hidden)}),window.addEventListener("pagehide",()=>{cancelAnimationFrame(p),o.removeEventListener("change",K),M==null||M.destroy(),_==null||_.destroy(),ee==null||ee.destroy(),Se==null||Se.destroy(),f==null||f.dispose()});const X=H=>{Be("view"),Ve(H)};t||(M=X0({onFocus:X,exhibit:a})),_=Y0({onFocus:X,exhibit:a});const ee=t?null:J0({exhibit:a,onClose:()=>{Be("view"),document.querySelector('[data-mode="journey"]').focus()}}),Se=r&&!t?zv({exhibit:a,exhibits:ds,isReady:()=>g,captureArtifact:async()=>g?f.captureArtifact():null}):null;if(t){for(const _e of['[data-mode="chat"]','[data-mode="journey"]',"#hotspot-toggle","#artifact-select"]){const G=i(_e);G&&(G.style.display="none")}const H=i('[data-mode="story"]');H.lastChild.textContent="作品信息";const A=i("#info").querySelectorAll("dd");A[0].textContent=a.identity,A[1].textContent="拖动旋转、滚轮或双指缩放，可播放微光聚合与消散。",A[2].textContent="微光动画是视觉演绎。作品来自 AI 辅助建模任务，生成结果需人工核对。"}te(),pe()}Vv();
