const profile=(id,kind,label,activeText,defaultClip)=>({
 kind,label,stopLabel:'结束演绎',activeText,defaultClip,
 desktop:`/models/${id}-alive-desktop-R35.glb`,mobile:`/models/${id}-alive-mobile-R35.glb`,rotationY:-Math.PI/2
});
export const awakeningProfiles={
 'galloping-horse':{...profile('galloping-horse','horse','踏风而起','踏风一瞬 · 可转动观看','horse_awaken'),desktop:'/models/galloping-horse-alive-desktop-R36.glb',mobile:'/models/galloping-horse-alive-mobile-R36.glb',audio:'/audio/horse-neigh-6s-R36.mp3',audioLabel:'马嘶音效',audioCredit:'马嘶：Lemasson 等，PLOS ONE (2015)，S1 Sound，CC BY 4.0；已调整音量、延迟并补足六秒。',audioSource:'https://doi.org/10.1371/journal.pone.0118468.s001'},
 'goujian-sword':{...profile('goujian-sword','sword','循光见锋','一束光，循纹见锋','sword_awaken'),audio:'/audio/sword-shimmer-6s-R36.mp3',audioLabel:'剑鸣音效',audioCredit:'剑鸣与掠风：本项目原创合成音效。'},
 'speechless-buddha':profile('speechless-buddha','buddha','听我一句','容我，淡定片刻','buddha_awaken'),
 'zenghouyi-bells':{...profile('zenghouyi-bells','bells','奏响编钟','点钟试奏 · 演示音色','bell_demo'),metadata:'/models/zenghouyi-bells-interaction-R35.json'}
};
