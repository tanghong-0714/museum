(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="180",mm=0,_f=1,gm=2,qh=1,bm=2,gi=3,Ln=0,qt=1,sn=2,Gi=0,es=1,rs=2,xf=3,vf=4,_m=5,fr=100,xm=101,vm=102,ym=103,Mm=104,Sm=200,Em=201,Tm=202,wm=203,_l=204,xl=205,Am=206,Rm=207,Cm=208,Pm=209,Lm=210,Im=211,Dm=212,Um=213,Nm=214,vl=0,yl=1,Ml=2,ss=3,Sl=4,El=5,Tl=6,wl=7,Ru=0,Fm=1,Om=2,Wi=0,Bm=1,km=2,zm=3,Hm=4,Vm=5,jh=6,Gm=7,yf="attached",Wm="detached",Xh=300,as=301,os=302,Al=303,Rl=304,Uo=306,cs=1e3,Hi=1001,To=1002,Jt=1003,Yh=1004,Ws=1005,Kt=1006,mo=1007,zn=1008,ai=1009,Kh=1010,Jh=1011,sa=1012,Cu=1013,gr=1014,Hn=1015,bs=1016,Pu=1017,Lu=1018,aa=1020,$h=35902,Zh=35899,Qh=1021,ep=1022,Sn=1023,oa=1026,ca=1027,Iu=1028,Du=1029,tp=1030,Uu=1031,Nu=1033,go=33776,bo=33777,_o=33778,xo=33779,Cl=35840,Pl=35841,Ll=35842,Il=35843,Dl=36196,Ul=37492,Nl=37496,Fl=37808,Ol=37809,Bl=37810,kl=37811,zl=37812,Hl=37813,Vl=37814,Gl=37815,Wl=37816,ql=37817,jl=37818,Xl=37819,Yl=37820,Kl=37821,Jl=36492,$l=36494,Zl=36495,Ql=36283,eu=36284,tu=36285,nu=36286,la=2300,ua=2301,qo=2302,Mf=2400,Sf=2401,Ef=2402,qm=2500,jm=0,np=1,iu=2,Xm=3200,Ym=3201,Fu=0,Km=1,ki="",Pt="srgb",$t="srgb-linear",wo="linear",ct="srgb",Mr=7680,Tf=519,Jm=512,$m=513,Zm=514,ip=515,Qm=516,eg=517,tg=518,ng=519,ru=35044,wf="300 es",ni=2e3,Ao=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const $s=Math.PI/180,ls=180/Math.PI;function Gn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Ou(i,e){return(i%e+e)%e}function ig(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function rg(i,e,t){return i!==e?(t-i)/(e-i):0}function Zs(i,e,t){return(1-t)*i+t*e}function sg(i,e,t,n){return Zs(i,e,1-Math.exp(-t*n))}function ag(i,e=1){return e-Math.abs(Ou(i,e*2)-e)}function og(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function cg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function lg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ug(i,e){return i+Math.random()*(e-i)}function fg(i){return i*(.5-Math.random())}function dg(i){i!==void 0&&(Af=i);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hg(i){return i*$s}function pg(i){return i*ls}function mg(i){return(i&i-1)===0&&i!==0}function gg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _g(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*g,c*h,o*l);break;case"YXY":i.set(c*h,o*u,c*g,o*l);break;case"ZYZ":i.set(c*g,c*h,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:$s,RAD2DEG:ls,generateUUID:Gn,clamp:qe,euclideanModulo:Ou,mapLinear:ig,inverseLerp:rg,lerp:Zs,damp:sg,pingpong:ag,smoothstep:og,smootherstep:cg,randInt:lg,randFloat:ug,randFloatSpread:fg,seededRandom:dg,degToRad:hg,radToDeg:pg,isPowerOfTwo:mg,ceilPowerOfTwo:gg,floorPowerOfTwo:bg,setQuaternionFromProperEuler:_g,normalize:st,denormalize:kn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=1-o;const p=c*d+l*h+u*g+f*_,M=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const y=Math.sqrt(x),E=Math.atan2(y,p*M);m=Math.sin(m*E)/y,o=Math.sin(o*E)/y}const b=o*M;if(c=c*m+d*b,l=l*m+h*b,u=u*m+g*b,f=f*m+_*b,m===1-o){const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new L,Rf=new Un;class Xe{constructor(e,t,n,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=r[0],m=r[3],p=r[6],M=r[1],x=r[4],b=r[7],y=r[2],E=r[5],T=r[8];return s[0]=a*_+o*M+c*y,s[3]=a*m+o*x+c*E,s[6]=a*p+o*b+c*T,s[1]=l*_+u*M+f*y,s[4]=l*m+u*x+f*E,s[7]=l*p+u*b+f*T,s[2]=d*_+h*M+g*y,s[5]=d*m+h*x+g*E,s[8]=d*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+n*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*l-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Xe;function rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function fa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function xg(){const i=fa("canvas");return i.style.display="block",i}const Cf={};function da(i){i in Cf||(Cf[i]=!0,console.warn(i))}function vg(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Pf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){const i={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=ts(r.r),r.g=ts(r.g),r.b=ts(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?wo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return da("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return da("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$t]:{primaries:e,whitePoint:n,transfer:wo,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const Qe=yg();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ts(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Sr;class Mg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=fa("canvas")),Sr.width=e.width,Sr.height=e.height;const r=Sr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sg=0;class Bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yo(r[a].image)):s.push(Yo(r[a]))}else s=Yo(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eg=0;const Ko=new L;class It extends _s{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Hi,r=Hi,s=Kt,a=zn,o=Sn,c=ai,l=It.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=Gn(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Xh;It.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(h+1)/2,y=(p+1)/2,E=(u+d)/4,T=(f+_)/4,C=(g+m)/4;return x>b&&x>y?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=T/n):b>y?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=C/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=T/s,r=C/s),this.set(n,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(d-u)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tg extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new It(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Bu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Tg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sp extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wg extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ea.subVectors(this.max,Ts),Er.subVectors(e.a,Ts),Tr.subVectors(e.b,Ts),wr.subVectors(e.c,Ts),wi.subVectors(Tr,Er),Ai.subVectors(wr,Tr),Zi.subVectors(Er,wr);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Jo(t,Er,Tr,wr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Er,Tr,wr,Ea))?!1:(Ta.crossVectors(wi,Ai),t=[Ta.x,Ta.y,Ta.z],Jo(t,Er,Tr,wr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,Sa=new nt,Er=new L,Tr=new L,wr=new L,wi=new L,Ai=new L,Zi=new L,Ts=new L,Ea=new L,Ta=new L,Qi=new L;function Jo(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Qi.fromArray(i,s);const o=r.x*Math.abs(Qi.x)+r.y*Math.abs(Qi.y)+r.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Ag=new nt,ws=new L,$o=new L;class Yn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ag.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ws,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add($o)),this.expandByPoint(ws.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new L,Zo=new L,wa=new L,Ri=new L,Qo=new L,Aa=new L,ec=new L;class Yi{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Zo.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Ri.dot(this.direction),c=-Ri.dot(wa),l=Ri.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zo).addScaledVector(wa,d),h}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),r=fi.dot(fi)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,r,s){Qo.subVectors(t,e),Aa.subVectors(n,e),ec.crossVectors(Qo,Aa);let a=this.direction.dot(ec),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Aa.crossVectors(Ri,Aa));if(c<0)return null;const l=o*this.direction.dot(Qo.cross(Ri));if(l<0||c+l>a)return null;const u=-o*Ri.dot(ec);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,r,s,a,o,c,l,u,f,d,h,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,n,r,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(n,dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(n,dn)),Ci.normalize(),Ra.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=Ra.x,r[8]=dn.x,r[1]=Ci.y,r[5]=Ra.y,r[9]=dn.y,r[2]=Ci.z,r[6]=Ra.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],x=n[7],b=n[11],y=n[15],E=r[0],T=r[4],C=r[8],S=r[12],v=r[1],w=r[5],A=r[9],I=r[13],D=r[2],F=r[6],O=r[10],G=r[14],z=r[3],Z=r[7],$=r[11],le=r[15];return s[0]=a*E+o*v+c*D+l*z,s[4]=a*T+o*w+c*F+l*Z,s[8]=a*C+o*A+c*O+l*$,s[12]=a*S+o*I+c*G+l*le,s[1]=u*E+f*v+d*D+h*z,s[5]=u*T+f*w+d*F+h*Z,s[9]=u*C+f*A+d*O+h*$,s[13]=u*S+f*I+d*G+h*le,s[2]=g*E+_*v+m*D+p*z,s[6]=g*T+_*w+m*F+p*Z,s[10]=g*C+_*A+m*O+p*$,s[14]=g*S+_*I+m*G+p*le,s[3]=M*E+x*v+b*D+y*z,s[7]=M*T+x*w+b*F+y*Z,s[11]=M*C+x*A+b*O+y*$,s[15]=M*S+x*I+b*G+y*le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*h-n*c*h)+_*(+t*c*h-t*l*d+s*a*d-r*a*h+r*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+n*a*h+s*o*u-n*l*u)+p*(-r*o*u-t*c*f+t*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,x=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,b=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,y=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,E=t*M+n*x+r*b+s*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=M*T,e[1]=(_*d*s-f*m*s-_*r*h+n*m*h+f*r*p-n*d*p)*T,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*T,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*h-n*c*h)*T,e[4]=x*T,e[5]=(u*m*s-g*d*s+g*r*h-t*m*h-u*r*p+t*d*p)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*T,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*h+t*c*h)*T,e[8]=b*T,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*T,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*T,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*h-t*o*h)*T,e[12]=y*T,e[13]=(u*_*r-g*f*r+g*n*d-t*_*d-u*n*m+t*f*m)*T,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,M=c*l,x=c*u,b=c*f,y=n.x,E=n.y,T=n.z;return r[0]=(1-(_+p))*y,r[1]=(h+b)*y,r[2]=(g-x)*y,r[3]=0,r[4]=(h-b)*E,r[5]=(1-(d+p))*E,r[6]=(m+M)*E,r[7]=0,r[8]=(g+x)*T,r[9]=(m-M)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ar.set(r[0],r[1],r[2]).length();const a=Ar.set(r[4],r[5],r[6]).length(),o=Ar.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const l=1/s,u=1/a,f=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ni,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),h=(n+r)/(n-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===ni)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ao)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ni,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===ni)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ao)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new L,Fn=new Ne,Rg=new L(0,0,0),Cg=new L(1,1,1),Ci=new L,Ra=new L,dn=new L,If=new Ne,Df=new Un;class jn{constructor(e=0,t=0,n=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class ku{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const Uf=new L,Rr=new Un,di=new Ne,Ca=new L,As=new L,Lg=new L,Ig=new Un,Nf=new L(1,0,0),Ff=new L(0,1,0),Of=new L(0,0,1),Bf={type:"added"},Dg={type:"removed"},Cr={type:"childadded",child:null},tc={type:"childremoved",child:null};class bt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new jn,n=new Un,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ku,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(As,Ca,this.up):di.lookAt(Ca,As,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Rr.setFromRotationMatrix(di),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Dg),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Lg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Ig,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new L,hi=new L,nc=new L,pi=new L,Pr=new L,Lr=new L,kf=new L,ic=new L,rc=new L,sc=new L,ac=new tt,oc=new tt,cc=new tt;class Lt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),On.subVectors(e,t),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){On.subVectors(r,t),hi.subVectors(n,t),nc.subVectors(e,t);const a=On.dot(On),o=On.dot(hi),c=On.dot(nc),l=hi.dot(hi),u=hi.dot(nc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return ac.setScalar(0),oc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,n,r){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Pr.subVectors(r,n),Lr.subVectors(s,n),ic.subVectors(e,n);const c=Pr.dot(ic),l=Lr.dot(ic);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,r);const u=Pr.dot(rc),f=Lr.dot(rc);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pr,a);sc.subVectors(e,s);const h=Pr.dot(sc),g=Lr.dot(sc);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Lr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return kf.subVectors(s,r),o=(f-u)/(f-u+(h-g)),t.copy(r).addScaledVector(kf,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function lc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Ou(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lc(a,s,e+1/3),this.g=lc(a,s,e),this.b=lc(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.workingToColorSpace(Vt.copy(this),e),Math.round(qe(Vt.r*255,0,255))*65536+Math.round(qe(Vt.g*255,0,255))*256+Math.round(qe(Vt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Pt){Qe.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Pa);const n=Zs(Pi.h,Pa.h,t),r=Zs(Pi.s,Pa.s,t),s=Zs(Pi.l,Pa.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Oe;Oe.NAMES=ap;let Ug=0;class Wn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ug++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=es,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==_l&&(n.blendSrc=this.blendSrc),this.blendDst!==xl&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new L,La=new Ue;let Ng=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ng++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ru,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ru&&(e.usage=this.usage),e}}class op extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cp extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Fg=0;const vn=new Ne,uc=new bt,Ir=new L,hn=new nt,Rs=new nt,Ft=new L;class ln extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?cp:op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,Rs.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,Rs.max),hn.expandByPoint(Ft)):(hn.expandByPoint(Rs.min),hn.expandByPoint(Rs.max))}hn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ft.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),Ft.add(Ir)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new L,c[C]=new L;const l=new L,u=new L,f=new L,d=new Ue,h=new Ue,g=new Ue,_=new L,m=new L;function p(C,S,v){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,C),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),o[C].add(_),o[S].add(_),o[v].add(_),c[C].add(m),c[S].add(m),c[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let C=0,S=M.length;C<S;++C){const v=M[C],w=v.start,A=v.count;for(let I=w,D=w+A;I<D;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,b=new L,y=new L,E=new L;function T(C){y.fromBufferAttribute(r,C),E.copy(y);const S=o[C];x.copy(S),x.sub(y.multiplyScalar(y.dot(S))).normalize(),b.crossVectors(E,S);const w=b.dot(c[C])<0?-1:1;a.setXYZW(C,x.x,x.y,x.z,w)}for(let C=0,S=M.length;C<S;++C){const v=M[C],w=v.start,A=v.count;for(let I=w,D=w+A;I<D;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,f=new L;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new Bt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zf=new Ne,er=new Yi,Ia=new Yn,Hf=new L,Da=new L,Ua=new L,Na=new L,fc=new L,Fa=new L,Vf=new L,Oa=new L;class gt extends bt{constructor(e=new ln,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(fc.fromBufferAttribute(f,e),a?Fa.addScaledVector(fc,u):Fa.addScaledVector(fc.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Ia.containsPoint(er.origin)===!1&&(er.intersectSphere(Ia,Hf)===null||er.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(zf.copy(s).invert(),er.copy(e.ray).applyMatrix4(zf),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,y=x;b<y;b+=3){const E=o.getX(b),T=o.getX(b+1),C=o.getX(b+2);r=Ba(this,p,e,n,l,u,f,E,T,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);r=Ba(this,a,e,n,l,u,f,M,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,y=x;b<y;b+=3){const E=b,T=b+1,C=b+2;r=Ba(this,p,e,n,l,u,f,E,T,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const M=m,x=m+1,b=m+2;r=Ba(this,a,e,n,l,u,f,M,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Og(i,e,t,n,r,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Ln,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:i}}function Ba(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Da),i.getVertexPosition(c,Ua),i.getVertexPosition(l,Na);const u=Og(i,e,t,n,Da,Ua,Na,Vf);if(u){const f=new L;Lt.getBarycoord(Vf,Da,Ua,Na,f),r&&(u.uv=Lt.getInterpolatedAttribute(r,o,c,l,f,new Ue)),s&&(u.uv1=Lt.getInterpolatedAttribute(s,o,c,l,f,new Ue)),a&&(u.normal=Lt.getInterpolatedAttribute(a,o,c,l,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};Lt.getNormal(Da,Ua,Na,d.normal),u.face=d,u.barycoord=f}return u}class br extends ln{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(_,m,p,M,x,b,y,E,T,C,S){const v=b/T,w=y/C,A=b/2,I=y/2,D=E/2,F=T+1,O=C+1;let G=0,z=0;const Z=new L;for(let $=0;$<O;$++){const le=$*w-I;for(let Ie=0;Ie<F;Ie++){const Ke=Ie*v-A;Z[_]=Ke*M,Z[m]=le*x,Z[p]=D,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(Ie/T),f.push(1-$/C),G+=1}}for(let $=0;$<C;$++)for(let le=0;le<T;le++){const Ie=d+le+F*$,Ke=d+le+F*($+1),$e=d+(le+1)+F*($+1),Be=d+(le+1)+F*$;c.push(Ie,Ke,Be),c.push(Ke,$e,Be),z+=6}o.addGroup(h,z,S),h+=z,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Yt(i){const e={};for(let t=0;t<i.length;t++){const n=us(i[t]);for(const r in n)e[r]=n[r]}return e}function Bg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const up={clone:us,merge:Yt};var kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Bg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new L,Gf=new Ue,Wf=new Ue;class Gt extends fp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Wf),t.subVectors(Wf,Gf)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ur=1;class Hg extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(Dr,Ur,e,t);r.layers=this.layers,this.add(r);const s=new Gt(Dr,Ur,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Dr,Ur,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Dr,Ur,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Dr,Ur,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Dr,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dp extends It{constructor(e=[],t=as,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vg extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Gi});s.uniforms.tEquirect.value=t;const a=new gt(r,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Kt),new Hg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class En extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Gg={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ru,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new L;class zu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qf=new L,jf=new tt,Xf=new tt,qg=new L,Yf=new Ne,ka=new L,hc=new Yn,Kf=new Ne,pc=new Yi;class jg extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(r),e.ray.intersectsSphere(hc)!==!1&&(Kf.copy(r).invert(),pc.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Wm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;jf.fromBufferAttribute(r.attributes.skinIndex,e),Xf.fromBufferAttribute(r.attributes.skinWeight,e),qf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Xf.getComponent(s);if(a!==0){const o=jf.getComponent(s);Yf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(qg.copy(qf).applyMatrix4(Yf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mp extends It{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Jt,u=Jt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new Ne,Xg=new Ne;class Hu{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Xg;Jf.multiplyMatrices(o,t[s]),Jf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Hu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mp(t,e,e,Sn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new pp),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class su extends Bt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new Ne,$f=new Ne,za=[],Zf=new nt,Yg=new Ne,Cs=new gt,Ps=new Yn;class gp extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new su(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Yg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Zf.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Ps.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Nr),$f.multiplyMatrices(n,Nr),Cs.matrixWorld=$f,Cs.raycast(e,za);for(let a=0,o=za.length;a<o;a++){const c=za[a];c.instanceId=s,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new su(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mp(new Float32Array(r*this.count),r,this.count,Iu,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mc=new L,Kg=new L,Jg=new Xe;class Qn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=mc.subVectors(n,t).cross(Kg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Jg.getNormalMatrix(e),r=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Yn,$g=new Ue(.5,.5),Ha=new L;class Vu{constructor(e=new Qn,t=new Qn,n=new Qn,r=new Qn,s=new Qn,a=new Qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],x=s[13],b=s[14],y=s[15];if(r[0].setComponents(l-a,h-u,p-g,y-M).normalize(),r[1].setComponents(l+a,h+u,p+g,y+M).normalize(),r[2].setComponents(l+o,h+f,p+_,y+x).normalize(),r[3].setComponents(l-o,h-f,p-_,y-x).normalize(),n)r[4].setComponents(c,d,m,b).normalize(),r[5].setComponents(l-c,h-d,p-m,y-b).normalize();else if(r[4].setComponents(l-c,h-d,p-m,y-b).normalize(),t===ni)r[5].setComponents(l+c,h+d,p+m,y+b).normalize();else if(t===Ao)r[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const t=$g.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ro=new L,Co=new L,Qf=new Ne,Ls=new Yi,Va=new Yn,gc=new L,ed=new L;class Gu extends bt{constructor(e=new ln,t=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Ro.fromBufferAttribute(t,r-1),Co.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Ro.distanceTo(Co);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(r),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Qf.copy(r).invert(),Ls.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),M=u.getX(_+1),x=Ga(this,e,Ls,c,p,M,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Ga(this,e,Ls,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=Ga(this,e,Ls,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ga(this,e,Ls,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ga(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Ro.fromBufferAttribute(o,r),Co.fromBufferAttribute(o,s),t.distanceSqToSegment(Ro,Co,gc,ed)>n)return;gc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:ed.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const td=new L,nd=new L;class Zg extends Gu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)td.fromBufferAttribute(t,r),nd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+td.distanceTo(nd);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Qg extends Gu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _p extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new Ne,au=new Yi,Wa=new Yn,qa=new L;class xp extends bt{constructor(e=new ln,t=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;id.copy(r).invert(),au.copy(e.ray).applyMatrix4(id);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);qa.fromBufferAttribute(f,m),rd(qa,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,_=h;g<_;g++)qa.fromBufferAttribute(f,g),rd(qa,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rd(i,e,t,n,r,s,a){const o=au.distanceSqToPoint(i);if(o<t){const c=new L;au.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class eb extends It{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vp extends It{constructor(e,t,n=gr,r,s,a,o=Jt,c=Jt,l,u=oa,f=1){if(u!==oa&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yp extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wu extends ln{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(h,2));function M(){const b=new L,y=new L;let E=0;const T=(t-e)/n;for(let C=0;C<=s;C++){const S=[],v=C/s,w=v*(t-e)+e;for(let A=0;A<=r;A++){const I=A/r,D=I*c+o,F=Math.sin(D),O=Math.cos(D);y.x=w*F,y.y=-v*n+m,y.z=w*O,f.push(y.x,y.y,y.z),b.set(F,T,O).normalize(),d.push(b.x,b.y,b.z),h.push(I,1-v),S.push(g++)}_.push(S)}for(let C=0;C<r;C++)for(let S=0;S<s;S++){const v=_[S][C],w=_[S+1][C],A=_[S+1][C+1],I=_[S][C+1];(e>0||S!==0)&&(u.push(v,w,I),E+=3),(t>0||S!==s-1)&&(u.push(w,A,I),E+=3)}l.addGroup(p,E,0),p+=E}function x(b){const y=g,E=new Ue,T=new L;let C=0;const S=b===!0?e:t,v=b===!0?1:-1;for(let A=1;A<=r;A++)f.push(0,m*v,0),d.push(0,v,0),h.push(.5,.5),g++;const w=g;for(let A=0;A<=r;A++){const D=A/r*c+o,F=Math.cos(D),O=Math.sin(D);T.x=S*O,T.y=m*v,T.z=S*F,f.push(T.x,T.y,T.z),d.push(0,v,0),E.x=F*.5+.5,E.y=O*.5*v+.5,h.push(E.x,E.y),g++}for(let A=0;A<r;A++){const I=y+A,D=w+A;b===!0?u.push(D,D+1,I):u.push(D+1,D,I),C+=3}l.addGroup(p,C,b===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*d-a;for(let x=0;x<l;x++){const b=x*f-s;g.push(b,-M,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const x=M+l*p,b=M+l*(p+1),y=M+1+l*(p+1),E=M+1+l*p;h.push(x,b,E),h.push(b,y,E)}this.setIndex(h),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class qu extends ln{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new L,f=new L,d=new L;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,M=(r+1)*h+g;a.push(_,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ha extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends ha{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class tb extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nb extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ja(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function sb(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function sd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Mp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class _a{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ab extends _a{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sf:s=e,o=2*t-n;break;case Ef:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sf:a=e,c=2*n-t;break;case Ef:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,M=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let y=0;y!==o;++y)s[y]=p*a[u+y]+M*a[l+y]+x*a[c+y]+b*a[f+y];return s}}class ob extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(r-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*f+a[c+d]*u;return s}}class cb extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ab(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&rb(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===qo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(r)c=!0;else{const f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=ua;class xs extends Kn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=la;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class Sp extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}Sp.prototype.ValueTypeName="color";class fs extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}fs.prototype.ValueTypeName="number";class lb extends _a{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Un.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ds extends Kn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new lb(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Kn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=la;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Kn{constructor(e,t,n,r){super(e,t,n,r)}}hs.prototype.ValueTypeName="vector";class ub{constructor(e="",t=-1,n=[],r=qm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(db(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Kn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=sb(c);c=sd(c,1,u),l=sd(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const m=[],p=[];Mp(h,m,p,g),m.length!==0&&_.push(new f(d,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const d=l[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let M=0;M!==d[g].morphTargets.length;++M){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new fs(".morphTargetInfluence["+_+"]",m,p))}c=h.length*a}else{const h=".bones["+t[f].name+"]";n(hs,h+".position",d,"pos",r),n(ds,h+".quaternion",d,"rot",r),n(hs,h+".scale",d,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function fb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Sp;case"quaternion":return ds;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function db(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=fb(i.type);if(i.times===void 0){const t=[],n=[];Mp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const xi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class hb{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const pb=new hb;class ys{constructor(e){this.manager=e!==void 0?e:pb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class mb extends Error{constructor(e,t){super(e),this.response=t}}class Ep extends ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:r});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mi[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let E=0,T=u.length;E<T;E++){const C=u[E];C.onProgress&&C.onProgress(y)}p.enqueue(b),M()}},x=>{p.error(x)})}}});return new Response(m)}else throw new mb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{xi.add(`file:${e}`,l);const u=mi[e];delete mi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fr=new WeakMap;class gb extends ys{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Fr.get(a);f===void 0&&(f=[],Fr.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=fa("img");function c(){u(),t&&t(this);const f=Fr.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Fr.delete(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),xi.remove(`image:${e}`);const d=Fr.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}Fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class bb extends ys{constructor(e){super(e)}load(e,t,n,r){const s=new It,a=new gb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class No extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _b extends No{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bc=new Ne,ad=new L,od=new L;class ju{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class xb extends ju{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tp extends No{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new xb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cd=new Ne,Is=new L,_c=new L;class vb extends ju{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),r.makeTranslation(-Is.x,-Is.y,-Is.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,n.coordinateSystem,n.reversedDepth)}}class wp extends No{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xu extends fp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class yb extends ju{constructor(){super(new Xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mb extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new yb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xc=new WeakMap;class Sb extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(xc.has(a)===!0)r&&r(xc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),xc.set(c,l),xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Eb extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yu="\\[\\]\\.:\\/",Tb=new RegExp("["+Yu+"]","g"),Ku="[^"+Yu+"]",wb="[^"+Yu.replace("\\.","")+"]",Ab=/((?:WC+[\/:])*)/.source.replace("WC",Ku),Rb=/(WCOD+)?/.source.replace("WCOD",wb),Cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),Pb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),Lb=new RegExp("^"+Ab+Rb+Cb+Pb+"$"),Ib=["material","materials","bones","map"];class Db{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tb,"")}static parseTrackName(e){const t=Lb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Ib.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Db;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ld=new Ne;class Ju{constructor(e,t,n=0,r=1/0){this.ray=new Yi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ku,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,t=!0,n=[]){return ou(e,this,n,t),n.sort(ud),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)ou(e[r],this,n,t);return n.sort(ud),n}}function ud(i,e){return i.distance-e.distance}function ou(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)ou(s[a],e,t,!0)}}const fd=new L,Xa=new L,Or=new L,Br=new L,vc=new L,Ub=new L,Nb=new L;class oi{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fd.subVectors(e,this.start),Xa.subVectors(this.end,this.start);const n=Xa.dot(Xa);let s=Xa.dot(fd)/n;return t&&(s=qe(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Ub,n=Nb){const r=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,u=e.end;Or.subVectors(l,o),Br.subVectors(u,c),vc.subVectors(o,c);const f=Or.dot(Or),d=Br.dot(Br),h=Br.dot(vc);if(f<=r&&d<=r)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(f<=r)s=0,a=h/d,a=qe(a,0,1);else{const g=Or.dot(vc);if(d<=r)a=0,s=qe(-g/f,0,1);else{const _=Or.dot(Br),m=f*d-_*_;m!==0?s=qe((_*h-g*d)/m,0,1):s=0,a=(_*s+h)/d,a<0?(a=0,s=qe(-g/f,0,1)):a>1&&(a=1,s=qe((_-g)/f,0,1))}}return t.copy(o).add(Or.multiplyScalar(s)),n.copy(c).add(Br.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function dd(i,e,t,n){const r=Fb(n);switch(t){case Qh:return i*e;case Iu:return i*e/r.components*r.byteLength;case Du:return i*e/r.components*r.byteLength;case tp:return i*e*2/r.components*r.byteLength;case Uu:return i*e*2/r.components*r.byteLength;case ep:return i*e*3/r.components*r.byteLength;case Sn:return i*e*4/r.components*r.byteLength;case Nu:return i*e*4/r.components*r.byteLength;case go:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pl:case Il:return Math.max(i,16)*Math.max(e,8)/4;case Cl:case Ll:return Math.max(i,8)*Math.max(e,8)/2;case Dl:case Ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Jl:case $l:case Zl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ql:case eu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case tu:case nu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fb(i){switch(i){case ai:case Kh:return{byteLength:1,components:1};case sa:case Jh:case bs:return{byteLength:2,components:1};case Pu:case Lu:return{byteLength:2,components:4};case gr:case Cu:case Hn:return{byteLength:4,components:1};case $h:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ap(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ob(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Bb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
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
#endif`,qb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb=`#ifdef USE_BATCHING
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
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Kb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$b=`#ifdef USE_IRIDESCENCE
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
#endif`,Zb=`#ifdef USE_BUMPMAP
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
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,o_=`#define PI 3.141592653589793
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
} // validated`,c_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,l_=`vec3 transformedNormal = objectNormal;
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
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_="gl_FragColor = linearToOutputTexel( gl_FragColor );",m_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,g_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,__=`#ifdef USE_ENVMAP
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
#endif`,x_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,M_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,E_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T_=`#ifdef USE_GRADIENTMAP
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
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,A_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,R_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C_=`uniform bool receiveShadow;
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
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N_=`PhysicalMaterial material;
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
#endif`,F_=`struct PhysicalMaterial {
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
}`,O_=`
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
#endif`,B_=`#if defined( RE_IndirectDiffuse )
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,H_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,W_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X_=`#if defined( USE_POINTS_UV )
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
#endif`,Y_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,K_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q_=`#ifdef USE_MORPHTARGETS
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
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,n0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,i0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
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
#endif`,o0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,v0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,M0=`float getShadowMask() {
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
}`,S0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,E0=`#ifdef USE_SKINNING
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
#endif`,T0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w0=`#ifdef USE_SKINNING
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
#endif`,A0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,P0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,L0=`#ifdef USE_TRANSMISSION
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
#endif`,I0=`#ifdef USE_TRANSMISSION
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
#endif`,D0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B0=`uniform sampler2D t2D;
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
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,H0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`#include <common>
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
}`,W0=`#if DEPTH_PACKING == 3200
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
}`,q0=`#define DISTANCE
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
}`,j0=`#define DISTANCE
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
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`uniform float scale;
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
}`,J0=`uniform vec3 diffuse;
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
}`,$0=`#include <common>
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
}`,Z0=`uniform vec3 diffuse;
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
}`,Q0=`#define LAMBERT
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define MATCAP
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
}`,nx=`#define MATCAP
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
}`,ix=`#define NORMAL
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
}`,rx=`#define NORMAL
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
}`,sx=`#define PHONG
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
}`,ax=`#define PHONG
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
}`,ox=`#define STANDARD
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
}`,cx=`#define STANDARD
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
}`,lx=`#define TOON
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
}`,ux=`#define TOON
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
}`,fx=`uniform float size;
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
}`,dx=`uniform vec3 diffuse;
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
}`,hx=`#include <common>
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
}`,px=`uniform vec3 color;
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
}`,mx=`uniform float rotation;
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
}`,gx=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Bb,alphahash_pars_fragment:kb,alphamap_fragment:zb,alphamap_pars_fragment:Hb,alphatest_fragment:Vb,alphatest_pars_fragment:Gb,aomap_fragment:Wb,aomap_pars_fragment:qb,batching_pars_vertex:jb,batching_vertex:Xb,begin_vertex:Yb,beginnormal_vertex:Kb,bsdfs:Jb,iridescence_fragment:$b,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Qb,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:t_,clipping_planes_vertex:n_,color_fragment:i_,color_pars_fragment:r_,color_pars_vertex:s_,color_vertex:a_,common:o_,cube_uv_reflection_fragment:c_,defaultnormal_vertex:l_,displacementmap_pars_vertex:u_,displacementmap_vertex:f_,emissivemap_fragment:d_,emissivemap_pars_fragment:h_,colorspace_fragment:p_,colorspace_pars_fragment:m_,envmap_fragment:g_,envmap_common_pars_fragment:b_,envmap_pars_fragment:__,envmap_pars_vertex:x_,envmap_physical_pars_fragment:P_,envmap_vertex:v_,fog_vertex:y_,fog_pars_vertex:M_,fog_fragment:S_,fog_pars_fragment:E_,gradientmap_pars_fragment:T_,lightmap_pars_fragment:w_,lights_lambert_fragment:A_,lights_lambert_pars_fragment:R_,lights_pars_begin:C_,lights_toon_fragment:L_,lights_toon_pars_fragment:I_,lights_phong_fragment:D_,lights_phong_pars_fragment:U_,lights_physical_fragment:N_,lights_physical_pars_fragment:F_,lights_fragment_begin:O_,lights_fragment_maps:B_,lights_fragment_end:k_,logdepthbuf_fragment:z_,logdepthbuf_pars_fragment:H_,logdepthbuf_pars_vertex:V_,logdepthbuf_vertex:G_,map_fragment:W_,map_pars_fragment:q_,map_particle_fragment:j_,map_particle_pars_fragment:X_,metalnessmap_fragment:Y_,metalnessmap_pars_fragment:K_,morphinstance_vertex:J_,morphcolor_vertex:$_,morphnormal_vertex:Z_,morphtarget_pars_vertex:Q_,morphtarget_vertex:e0,normal_fragment_begin:t0,normal_fragment_maps:n0,normal_pars_fragment:i0,normal_pars_vertex:r0,normal_vertex:s0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:o0,clearcoat_normal_fragment_maps:c0,clearcoat_pars_fragment:l0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:h0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:b0,roughnessmap_pars_fragment:_0,shadowmap_pars_fragment:x0,shadowmap_pars_vertex:v0,shadowmap_vertex:y0,shadowmask_pars_fragment:M0,skinbase_vertex:S0,skinning_pars_vertex:E0,skinning_vertex:T0,skinnormal_vertex:w0,specularmap_fragment:A0,specularmap_pars_fragment:R0,tonemapping_fragment:C0,tonemapping_pars_fragment:P0,transmission_fragment:L0,transmission_pars_fragment:I0,uv_pars_fragment:D0,uv_pars_vertex:U0,uv_vertex:N0,worldpos_vertex:F0,background_vert:O0,background_frag:B0,backgroundCube_vert:k0,backgroundCube_frag:z0,cube_vert:H0,cube_frag:V0,depth_vert:G0,depth_frag:W0,distanceRGBA_vert:q0,distanceRGBA_frag:j0,equirect_vert:X0,equirect_frag:Y0,linedashed_vert:K0,linedashed_frag:J0,meshbasic_vert:$0,meshbasic_frag:Z0,meshlambert_vert:Q0,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:rx,meshphong_vert:sx,meshphong_frag:ax,meshphysical_vert:ox,meshphysical_frag:cx,meshtoon_vert:lx,meshtoon_frag:ux,points_vert:fx,points_frag:dx,shadow_vert:hx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ya={r:0,b:0,g:0},nr=new jn,bx=new Ne;function _x(i,e,t,n,r,s,a){const o=new Oe(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function _(x){let b=!1;const y=g(x);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===Uo)?(u===void 0&&(u=new gt(new br(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:us(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),nr.copy(b.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bx.makeRotationFromEuler(nr)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,(f!==y||d!==y.version||h!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new _r(2,2),new bn({name:"BackgroundMaterial",uniforms:us(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Ya,lp(i)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,b,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:M}}function xx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,w,A,I,D){let F=!1;const O=f(I,A,w);s!==O&&(s=O,l(s.object)),F=h(v,I,A,D),F&&g(v,I,A,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(v,w,A,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,w,A){const I=A.wireframe===!0;let D=n[v.id];D===void 0&&(D={},n[v.id]=D);let F=D[w.id];F===void 0&&(F={},D[w.id]=F);let O=F[I];return O===void 0&&(O=d(c()),F[I]=O),O}function d(v){const w=[],A=[],I=[];for(let D=0;D<t;D++)w[D]=0,A[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:A,attributeDivisors:I,object:v,attributes:{},index:null}}function h(v,w,A,I){const D=s.attributes,F=w.attributes;let O=0;const G=A.getAttributes();for(const z in G)if(G[z].location>=0){const $=D[z];let le=F[z];if(le===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),$===void 0||$.attribute!==le||le&&$.data!==le.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(v,w,A,I){const D={},F=w.attributes;let O=0;const G=A.getAttributes();for(const z in G)if(G[z].location>=0){let $=F[z];$===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const le={};le.attribute=$,$&&$.data&&(le.data=$.data),D[z]=le,O++}s.attributes=D,s.attributesNum=O,s.index=I}function _(){const v=s.newAttributes;for(let w=0,A=v.length;w<A;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){const A=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;A[v]=1,I[v]===0&&(i.enableVertexAttribArray(v),I[v]=1),D[v]!==w&&(i.vertexAttribDivisor(v,w),D[v]=w)}function M(){const v=s.newAttributes,w=s.enabledAttributes;for(let A=0,I=w.length;A<I;A++)w[A]!==v[A]&&(i.disableVertexAttribArray(A),w[A]=0)}function x(v,w,A,I,D,F,O){O===!0?i.vertexAttribIPointer(v,w,A,D,F):i.vertexAttribPointer(v,w,A,I,D,F)}function b(v,w,A,I){_();const D=I.attributes,F=A.getAttributes(),O=w.defaultAttributeValues;for(const G in F){const z=F[G];if(z.location>=0){let Z=D[G];if(Z===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(Z=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(Z=v.instanceColor)),Z!==void 0){const $=Z.normalized,le=Z.itemSize,Ie=e.get(Z);if(Ie===void 0)continue;const Ke=Ie.buffer,$e=Ie.type,Be=Ie.bytesPerElement,k=$e===i.INT||$e===i.UNSIGNED_INT||Z.gpuType===Cu;if(Z.isInterleavedBufferAttribute){const j=Z.data,ee=j.stride,ge=Z.offset;if(j.isInstancedInterleavedBuffer){for(let de=0;de<z.locationSize;de++)p(z.location+de,j.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let de=0;de<z.locationSize;de++)m(z.location+de);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let de=0;de<z.locationSize;de++)x(z.location+de,le/z.locationSize,$e,$,ee*Be,(ge+le/z.locationSize*de)*Be,k)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<z.locationSize;j++)p(z.location+j,Z.meshPerAttribute);v.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<z.locationSize;j++)m(z.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let j=0;j<z.locationSize;j++)x(z.location+j,le/z.locationSize,$e,$,le*Be,le/z.locationSize*j*Be,k)}}else if(O!==void 0){const $=O[G];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(z.location,$);break;case 3:i.vertexAttrib3fv(z.location,$);break;case 4:i.vertexAttrib4fv(z.location,$);break;default:i.vertexAttrib1fv(z.location,$)}}}}M()}function y(){C();for(const v in n){const w=n[v];for(const A in w){const I=w[A];for(const D in I)u(I[D].object),delete I[D];delete w[A]}delete n[v]}}function E(v){if(n[v.id]===void 0)return;const w=n[v.id];for(const A in w){const I=w[A];for(const D in I)u(I[D].object),delete I[D];delete w[A]}delete n[v.id]}function T(v){for(const w in n){const A=n[w];if(A[v.id]===void 0)continue;const I=A[v.id];for(const D in I)u(I[D].object),delete I[D];delete A[v.id]}}function C(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function vx(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Sn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hn&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:y,maxSamples:E}}function Mx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Qn,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||r;return r=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const M=s?0:n,x=M*4;let b=p.clippingState||null;c.value=b,b=u(g,d,x,h);for(let y=0;y!==x;++y)b[y]=t[y];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=h;x!==_;++x,b+=4)a.copy(f[x]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sx(i){let e=new WeakMap;function t(a,o){return o===Al?a.mapping=as:o===Rl&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Al||o===Rl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $r=4,hd=[.125,.215,.35,.446,.526,.582],dr=20,yc=new Xu,pd=new Oe;let Mc=null,Sc=0,Ec=0,Tc=!1;const ur=(1+Math.sqrt(5))/2,kr=1/ur,md=[new L(-ur,kr,0),new L(ur,kr,0),new L(-kr,0,ur),new L(kr,0,ur),new L(0,ur,-kr),new L(0,ur,kr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ex=new L;class cu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ex}=s;Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Sc,Ec),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:bs,format:Sn,colorSpace:$t,depthBuffer:!1},r=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tx(s)),this._blurMaterial=wx(s,e,t)}return r}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,r,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(pd),f.toneMapping=Wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new ii({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new gt(new br,_);let p=!1;const M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(pd),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):b===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const y=this._cubeSize;Ka(r,b*y,x>2?y:0,y,y),f.setRenderTarget(r),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===as||e.mapping===os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ka(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=md[(r-s-1)%md.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gt(this._lodPlanes[r],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*dr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const p=[];let M=0;for(let T=0;T<dr;++T){const C=T/_,S=Math.exp(-C*C/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[r],y=3*b*(r>x-$r?r-x+$r:0),E=4*(this._cubeSize-b);Ka(t,y,E,3*b,2*b),c.setRenderTarget(t),c.render(f,yc)}}function Tx(i){const e=[],t=[],n=[];let r=i;const s=i-$r+1+hd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-$r?c=hd[a-i+$r-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*h),x=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(S,_*g*E),x.set(d,m*g*E);const v=[E,E,E,E,E,E];b.set(v,p*g*E)}const y=new ln;y.setAttribute("position",new Bt(M,_)),y.setAttribute("uv",new Bt(x,m)),y.setAttribute("faceIndex",new Bt(b,p)),e.push(y),r>$r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(i,e,t){const n=new ji(i,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function wx(i,e,t){const n=new Float32Array(dr),r=new L(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function bd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function _d(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function Ax(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Al||c===Rl,u=c===as||c===os;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new cu(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new cu(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Rx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Cx(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],i.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const M=h.array;_=h.version;for(let x=0,b=M.length;x<b;x+=3){const y=M[x+0],E=M[x+1],T=M[x+2];d.push(y,E,E,T,T,y)}}else if(g!==void 0){const M=g.array;_=g.version;for(let x=0,b=M.length/3-1;x<b;x+=3){const y=x+0,E=x+1,T=x+2;d.push(y,E,E,T,T,y)}}else return;const m=new(rp(d)?cp:op)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Px(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){i.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*_[M];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Lx(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ix(i,e,t){const n=new WeakMap,r=new tt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let v=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var h=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let y=o.attributes.position.count*b,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const T=new Float32Array(y*E*4*f),C=new sp(T,y,E,f);C.type=Hn,C.needsUpdate=!0;const S=b*4;for(let w=0;w<f;w++){const A=p[w],I=M[w],D=x[w],F=y*E*4*w;for(let O=0;O<A.count;O++){const G=O*S;g===!0&&(r.fromBufferAttribute(A,O),T[F+G+0]=r.x,T[F+G+1]=r.y,T[F+G+2]=r.z,T[F+G+3]=0),_===!0&&(r.fromBufferAttribute(I,O),T[F+G+4]=r.x,T[F+G+5]=r.y,T[F+G+6]=r.z,T[F+G+7]=0),m===!0&&(r.fromBufferAttribute(D,O),T[F+G+8]=r.x,T[F+G+9]=r.y,T[F+G+10]=r.z,T[F+G+11]=D.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new Ue(y,E)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Dx(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Rp=new It,xd=new vp(1,1),Cp=new sp,Pp=new wg,Lp=new dp,vd=[],yd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function Ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=vd[r];if(s===void 0&&(s=new Float32Array(r),vd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ut(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fo(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Ut(t,e)}}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Ut(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Ut(t,e)}}function Bx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),Ut(t,n)}}function kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),Ut(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),Ut(t,n)}}function Hx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Vx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Ut(t,e)}}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Ut(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Ut(t,e)}}function qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Ut(t,e)}}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Ut(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Ut(t,e)}}function Kx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=ip,s=xd):s=Rp,t.setTexture2D(e||s,r)}function Jx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Pp,r)}function $x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Lp,r)}function Zx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cp,r)}function Qx(i){switch(i){case 5126:return Ux;case 35664:return Nx;case 35665:return Fx;case 35666:return Ox;case 35674:return Bx;case 35675:return kx;case 35676:return zx;case 5124:case 35670:return Hx;case 35667:case 35671:return Vx;case 35668:case 35672:return Gx;case 35669:case 35673:return Wx;case 5125:return qx;case 36294:return jx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Jx;case 35680:case 36300:case 36308:case 36293:return $x;case 36289:case 36303:case 36311:case 36292:return Zx}}function ev(i,e){i.uniform1fv(this.addr,e)}function tv(i,e){const t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function nv(i,e){const t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function iv(i,e){const t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function rv(i,e){const t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function sv(i,e){const t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function av(i,e){const t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ov(i,e){i.uniform1iv(this.addr,e)}function cv(i,e){i.uniform2iv(this.addr,e)}function lv(i,e){i.uniform3iv(this.addr,e)}function uv(i,e){i.uniform4iv(this.addr,e)}function fv(i,e){i.uniform1uiv(this.addr,e)}function dv(i,e){i.uniform2uiv(this.addr,e)}function hv(i,e){i.uniform3uiv(this.addr,e)}function pv(i,e){i.uniform4uiv(this.addr,e)}function mv(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Rp,s[a])}function gv(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Pp,s[a])}function bv(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Lp,s[a])}function _v(i,e,t){const n=this.cache,r=e.length,s=Fo(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Cp,s[a])}function xv(i){switch(i){case 5126:return ev;case 35664:return tv;case 35665:return nv;case 35666:return iv;case 35674:return rv;case 35675:return sv;case 35676:return av;case 5124:case 35670:return ov;case 35667:case 35671:return cv;case 35668:case 35672:return lv;case 35669:case 35673:return uv;case 5125:return fv;case 36294:return dv;case 36295:return hv;case 36296:return pv;case 35678:case 36198:case 36298:case 36306:case 35682:return mv;case 35679:case 36299:case 36307:return gv;case 35680:case 36300:case 36308:case 36293:return bv;case 36289:case 36303:case 36311:case 36292:return _v}}class vv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xv(t.type)}}class Mv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function Sv(i,e,t){const n=i.name,r=n.length;for(wc.lastIndex=0;;){const s=wc.exec(n),a=wc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Td(t,l===void 0?new vv(o,i,e):new yv(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Mv(o),Td(t,f)),t=f}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Sv(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function wd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ev=37297;let Tv=0;function wv(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ad=new Xe;function Av(i){Qe._getMatrix(Ad,Qe.workingColorSpace,i);const e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case wo:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+wv(i.getShaderSource(e),o)}else return s}function Rv(i,e){const t=Av(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cv(i,e){let t;switch(e){case Bm:t="Linear";break;case km:t="Reinhard";break;case zm:t="Cineon";break;case Hm:t="ACESFilmic";break;case jh:t="AgX";break;case Gm:t="Neutral";break;case Vm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new L;function Pv(){Qe.getLuminanceCoefficients(Ja);const i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Iv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Dv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function qs(i){return i!==""}function Cd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uv=/^[ \t]*#include +<([\w\d./]+)>/gm;function lu(i){return i.replace(Uv,Fv)}const Nv=new Map;function Fv(i,e){let t=Ye[e];if(t===void 0){const n=Nv.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lu(t)}const Ov=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(Ov,Bv)}function Bv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function zv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function Vv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case Fm:e="ENVMAP_BLENDING_MIX";break;case Om:e="ENVMAP_BLENDING_ADD";break}return e}function Gv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Wv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=kv(t),l=zv(t),u=Hv(t),f=Vv(t),d=Gv(t),h=Lv(t),g=Iv(s),_=r.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Wi?Cv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Rv("linearToOutputTexel",t.outputColorSpace),Pv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=lu(a),a=Cd(a,t),a=Pd(a,t),o=lu(o),o=Cd(o,t),o=Pd(o,t),a=Ld(a),o=Ld(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=M+m+a,b=M+p+o,y=wd(r,r.VERTEX_SHADER,x),E=wd(r,r.FRAGMENT_SHADER,b);r.attachShader(_,y),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(w){if(i.debug.checkShaderErrors){const A=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(y)||"",D=r.getShaderInfoLog(E)||"",F=A.trim(),O=I.trim(),G=D.trim();let z=!0,Z=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,y,E);else{const $=Rd(r,y,"vertex"),le=Rd(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+$+`
`+le)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||G==="")&&(Z=!1);Z&&(w.diagnostics={runnable:z,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}r.deleteShader(y),r.deleteShader(E),C=new vo(r,_),S=Dv(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,Ev)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=E,this}let qv=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xv(e),t.set(e,n)),n}}class Xv{constructor(e){this.id=qv++,this.code=e,this.usedTimes=0}}function Yv(i,e,t,n,r,s,a){const o=new ku,c=new jv,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,v,w,A,I){const D=A.fog,F=I.geometry,O=S.isMeshStandardMaterial?A.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),z=G&&G.mapping===Uo?G.image.height:null,Z=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=$!==void 0?$.length:0;let Ie=0;F.morphAttributes.position!==void 0&&(Ie=1),F.morphAttributes.normal!==void 0&&(Ie=2),F.morphAttributes.color!==void 0&&(Ie=3);let Ke,$e,Be,k;if(Z){const rt=ei[Z];Ke=rt.vertexShader,$e=rt.fragmentShader}else Ke=S.vertexShader,$e=S.fragmentShader,c.update(S),Be=c.getVertexShaderID(S),k=c.getFragmentShaderID(S);const j=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),ge=I.isInstancedMesh===!0,de=I.isBatchedMesh===!0,Pe=!!S.map,te=!!S.matcap,N=!!G,ze=!!S.aoMap,Me=!!S.lightMap,me=!!S.bumpMap,ae=!!S.normalMap,et=!!S.displacementMap,be=!!S.emissiveMap,Ge=!!S.metalnessMap,Nt=!!S.roughnessMap,wt=S.anisotropy>0,U=S.clearcoat>0,R=S.dispersion>0,W=S.iridescence>0,K=S.sheen>0,Q=S.transmission>0,Y=wt&&!!S.anisotropyMap,Le=U&&!!S.clearcoatMap,oe=U&&!!S.clearcoatNormalMap,we=U&&!!S.clearcoatRoughnessMap,Re=W&&!!S.iridescenceMap,re=W&&!!S.iridescenceThicknessMap,pe=K&&!!S.sheenColorMap,He=K&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,fe=!!S.specularColorMap,je=!!S.specularIntensityMap,B=Q&&!!S.transmissionMap,se=Q&&!!S.thicknessMap,ce=!!S.gradientMap,ve=!!S.alphaMap,ne=S.alphaTest>0,J=!!S.alphaHash,Ee=!!S.extensions;let We=Wi;S.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(We=i.toneMapping);const dt={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:Ke,fragmentShader:$e,defines:S.defines,customVertexShaderID:Be,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:de,batchingColor:de&&I._colorsTexture!==null,instancing:ge,instancingColor:ge&&I.instanceColor!==null,instancingMorph:ge&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:$t,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:te,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:z,aoMap:ze,lightMap:Me,bumpMap:me,normalMap:ae,displacementMap:d&&et,emissiveMap:be,normalMapObjectSpace:ae&&S.normalMapType===Km,normalMapTangentSpace:ae&&S.normalMapType===Fu,metalnessMap:Ge,roughnessMap:Nt,anisotropy:wt,anisotropyMap:Y,clearcoat:U,clearcoatMap:Le,clearcoatNormalMap:oe,clearcoatRoughnessMap:we,dispersion:R,iridescence:W,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:K,sheenColorMap:pe,sheenRoughnessMap:He,specularMap:Ce,specularColorMap:fe,specularIntensityMap:je,transmission:Q,transmissionMap:B,thicknessMap:se,gradientMap:ce,opaque:S.transparent===!1&&S.blending===es&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:J,combine:S.combine,mapUv:Pe&&_(S.map.channel),aoMapUv:ze&&_(S.aoMap.channel),lightMapUv:Me&&_(S.lightMap.channel),bumpMapUv:me&&_(S.bumpMap.channel),normalMapUv:ae&&_(S.normalMap.channel),displacementMapUv:et&&_(S.displacementMap.channel),emissiveMapUv:be&&_(S.emissiveMap.channel),metalnessMapUv:Ge&&_(S.metalnessMap.channel),roughnessMapUv:Nt&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Le&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:fe&&_(S.specularColorMap.channel),specularIntensityMapUv:je&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:se&&_(S.thicknessMap.channel),alphaMapUv:ve&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ae||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Pe||ve),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ie,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||de)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)v.push(w),v.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(M(v,S),x(v,S),v.push(i.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const v=g[S.type];let w;if(v){const A=ei[v];w=up.clone(A.uniforms)}else w=S.uniforms;return w}function y(S,v){let w;for(let A=0,I=u.length;A<I;A++){const D=u[A];if(D.cacheKey===v){w=D,++w.usedTimes;break}}return w===void 0&&(w=new Wv(i,v,S,s),u.push(w)),w}function E(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:C}}function Kv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Jv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,h,g,_,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||Jv),n.length>1&&n.sort(d||Dd),r.length>1&&r.sort(d||Dd)}function u(){for(let f=e,d=i.length;f<d;f++){const h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function $v(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ud,i.set(n,[a])):r>=s.length?(a=new Ud,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ey=0;function ty(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ny(i){const e=new Zv,t=Qv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new Ne,a=new Ne;function o(l){let u=0,f=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,M=0,x=0,b=0,y=0,E=0,T=0;l.sort(ty);for(let S=0,v=l.length;S<v;S++){const w=l[S],A=w.color,I=w.intensity,D=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=A.r*I,f+=A.g*I,d+=A.b*I;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],I);T++}else if(w.isDirectionalLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,z=t.get(w);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.directionalShadow[h]=z,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=w.shadow.matrix,M++}n.directional[h]=O,h++}else if(w.isSpotLight){const O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(A).multiplyScalar(I),O.distance=D,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[_]=O;const G=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,G.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[_]=G.matrix,w.castShadow){const z=t.get(w);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=F,b++}_++}else if(w.isRectAreaLight){const O=e.get(w);O.color.copy(A).multiplyScalar(I),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=O,m++}else if(w.isPointLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){const G=w.shadow,z=t.get(w);z.shadowIntensity=G.intensity,z.shadowBias=G.bias,z.shadowNormalBias=G.normalBias,z.shadowRadius=G.radius,z.shadowMapSize=G.mapSize,z.shadowCameraNear=G.camera.near,z.shadowCameraFar=G.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=O,g++}else if(w.isHemisphereLight){const O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(I),O.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==x||C.numSpotShadows!==b||C.numSpotMaps!==y||C.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=h,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=x,C.numSpotShadows=b,C.numSpotMaps=y,C.numLightProbes=T,n.version=ey++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const x=l[p];if(x.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(x.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Nd(i){const e=new ny(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function iy(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nd(i),e.set(r,[o])):s>=a.length?(o=new Nd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ry=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sy=`uniform sampler2D shadow_pass;
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
}`;function ay(i,e,t){let n=new Vu;const r=new Ue,s=new Ue,a=new tt,o=new nb({depthPacking:Ym}),c=new ib,l={},u=t.maxTextureSize,f={[Ln]:qt,[qt]:Ln,[sn]:sn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ry,fragmentShader:sy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Gi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const I=p!==gi&&this.type===gi,D=p===gi&&this.type!==gi;for(let F=0,O=E.length;F<O;F++){const G=E[F],z=G.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const Z=z.getFrameExtents();if(r.multiply(Z),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Z.x),r.x=s.x*Z.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Z.y),r.y=s.y*Z.y,z.mapSize.y=s.y)),z.map===null||I===!0||D===!0){const le=this.type!==gi?{minFilter:Jt,magFilter:Jt}:{};z.map!==null&&z.map.dispose(),z.map=new ji(r.x,r.y,le),z.map.texture.name=G.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const $=z.getViewportCount();for(let le=0;le<$;le++){const Ie=z.getViewport(le);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),A.viewport(a),z.updateMatrices(G,le),n=z.getFrustum(),b(T,C,z.camera,G,this.type)}z.isPointLightShadow!==!0&&this.type===gi&&M(z,C),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,v,w)};function M(E,T){const C=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ji(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,C,d,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,C,h,_,null)}function x(E,T,C,S){let v=null;const w=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)v=w;else if(v=C.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const A=v.uuid,I=T.uuid;let D=l[A];D===void 0&&(D={},l[A]=D);let F=D[I];F===void 0&&(F=v.clone(),D[I]=F,T.addEventListener("dispose",y)),v=F}if(v.visible=T.visible,v.wireframe=T.wireframe,S===gi?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const A=i.properties.get(v);A.light=C}return v}function b(E,T,C,S,v){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const I=e.update(E),D=E.material;if(Array.isArray(D)){const F=I.groups;for(let O=0,G=F.length;O<G;O++){const z=F[O],Z=D[z.materialIndex];if(Z&&Z.visible){const $=x(E,Z,S,v);E.onBeforeShadow(i,E,T,C,I,$,z),i.renderBufferDirect(C,null,I,$,E,z),E.onAfterShadow(i,E,T,C,I,$,z)}}}else if(D.visible){const F=x(E,D,S,v);E.onBeforeShadow(i,E,T,C,I,F,null),i.renderBufferDirect(C,null,I,F,E,null),E.onAfterShadow(i,E,T,C,I,F,null)}}const A=E.children;for(let I=0,D=A.length;I<D;I++)b(A[I],T,C,S,v)}function y(E){E.target.removeEventListener("dispose",y);for(const C in l){const S=l[C],v=E.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const oy={[vl]:yl,[Ml]:Tl,[Sl]:wl,[ss]:El,[yl]:vl,[Tl]:Ml,[wl]:Sl,[El]:ss};function cy(i,e){function t(){let B=!1;const se=new tt;let ce=null;const ve=new tt(0,0,0,0);return{setMask:function(ne){ce!==ne&&!B&&(i.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){B=ne},setClear:function(ne,J,Ee,We,dt){dt===!0&&(ne*=We,J*=We,Ee*=We),se.set(ne,J,Ee,We),ve.equals(se)===!1&&(i.clearColor(ne,J,Ee,We),ve.copy(se))},reset:function(){B=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,se=!1,ce=null,ve=null,ne=null;return{setReversed:function(J){if(se!==J){const Ee=e.get("EXT_clip_control");J?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=J;const We=ne;ne=null,this.setClear(We)}},getReversed:function(){return se},setTest:function(J){J?j(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(J){ce!==J&&!B&&(i.depthMask(J),ce=J)},setFunc:function(J){if(se&&(J=oy[J]),ve!==J){switch(J){case vl:i.depthFunc(i.NEVER);break;case yl:i.depthFunc(i.ALWAYS);break;case Ml:i.depthFunc(i.LESS);break;case ss:i.depthFunc(i.LEQUAL);break;case Sl:i.depthFunc(i.EQUAL);break;case El:i.depthFunc(i.GEQUAL);break;case Tl:i.depthFunc(i.GREATER);break;case wl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=J}},setLocked:function(J){B=J},setClear:function(J){ne!==J&&(se&&(J=1-J),i.clearDepth(J),ne=J)},reset:function(){B=!1,ce=null,ve=null,ne=null,se=!1}}}function r(){let B=!1,se=null,ce=null,ve=null,ne=null,J=null,Ee=null,We=null,dt=null;return{setTest:function(rt){B||(rt?j(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(rt){se!==rt&&!B&&(i.stencilMask(rt),se=rt)},setFunc:function(rt,li,Jn){(ce!==rt||ve!==li||ne!==Jn)&&(i.stencilFunc(rt,li,Jn),ce=rt,ve=li,ne=Jn)},setOp:function(rt,li,Jn){(J!==rt||Ee!==li||We!==Jn)&&(i.stencilOp(rt,li,Jn),J=rt,Ee=li,We=Jn)},setLocked:function(rt){B=rt},setClear:function(rt){dt!==rt&&(i.clearStencil(rt),dt=rt)},reset:function(){B=!1,se=null,ce=null,ve=null,ne=null,J=null,Ee=null,We=null,dt=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,x=null,b=null,y=null,E=null,T=new Oe(0,0,0),C=0,S=!1,v=null,w=null,A=null,I=null,D=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,G=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(z)[1]),O=G>=1):z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),O=G>=2);let Z=null,$={};const le=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),Ke=new tt().fromArray(le),$e=new tt().fromArray(Ie);function Be(B,se,ce,ve){const ne=new Uint8Array(4),J=i.createTexture();i.bindTexture(B,J),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ce;Ee++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(se+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return J}const k={};k[i.TEXTURE_2D]=Be(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=Be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=Be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=Be(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(ss),me(!1),ae(_f),j(i.CULL_FACE),ze(Gi);function j(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function ee(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function ge(B,se){return f[B]!==se?(i.bindFramebuffer(B,se),f[B]=se,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function de(B,se){let ce=h,ve=!1;if(B){ce=d.get(se),ce===void 0&&(ce=[],d.set(se,ce));const ne=B.textures;if(ce.length!==ne.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let J=0,Ee=ne.length;J<Ee;J++)ce[J]=i.COLOR_ATTACHMENT0+J;ce.length=ne.length,ve=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ce)}function Pe(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const te={[fr]:i.FUNC_ADD,[xm]:i.FUNC_SUBTRACT,[vm]:i.FUNC_REVERSE_SUBTRACT};te[ym]=i.MIN,te[Mm]=i.MAX;const N={[Sm]:i.ZERO,[Em]:i.ONE,[Tm]:i.SRC_COLOR,[_l]:i.SRC_ALPHA,[Lm]:i.SRC_ALPHA_SATURATE,[Cm]:i.DST_COLOR,[Am]:i.DST_ALPHA,[wm]:i.ONE_MINUS_SRC_COLOR,[xl]:i.ONE_MINUS_SRC_ALPHA,[Pm]:i.ONE_MINUS_DST_COLOR,[Rm]:i.ONE_MINUS_DST_ALPHA,[Im]:i.CONSTANT_COLOR,[Dm]:i.ONE_MINUS_CONSTANT_COLOR,[Um]:i.CONSTANT_ALPHA,[Nm]:i.ONE_MINUS_CONSTANT_ALPHA};function ze(B,se,ce,ve,ne,J,Ee,We,dt,rt){if(B===Gi){_===!0&&(ee(i.BLEND),_=!1);return}if(_===!1&&(j(i.BLEND),_=!0),B!==_m){if(B!==m||rt!==S){if((p!==fr||b!==fr)&&(i.blendEquation(i.FUNC_ADD),p=fr,b=fr),rt)switch(B){case es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFunc(i.ONE,i.ONE);break;case xf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,x=null,y=null,E=null,T.set(0,0,0),C=0,m=B,S=rt}return}ne=ne||se,J=J||ce,Ee=Ee||ve,(se!==p||ne!==b)&&(i.blendEquationSeparate(te[se],te[ne]),p=se,b=ne),(ce!==M||ve!==x||J!==y||Ee!==E)&&(i.blendFuncSeparate(N[ce],N[ve],N[J],N[Ee]),M=ce,x=ve,y=J,E=Ee),(We.equals(T)===!1||dt!==C)&&(i.blendColor(We.r,We.g,We.b,dt),T.copy(We),C=dt),m=B,S=!1}function Me(B,se){B.side===sn?ee(i.CULL_FACE):j(i.CULL_FACE);let ce=B.side===qt;se&&(ce=!ce),me(ce),B.blending===es&&B.transparent===!1?ze(Gi):ze(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function me(B){v!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),v=B)}function ae(B){B!==mm?(j(i.CULL_FACE),B!==w&&(B===_f?i.cullFace(i.BACK):B===gm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),w=B}function et(B){B!==A&&(O&&i.lineWidth(B),A=B)}function be(B,se,ce){B?(j(i.POLYGON_OFFSET_FILL),(I!==se||D!==ce)&&(i.polygonOffset(se,ce),I=se,D=ce)):ee(i.POLYGON_OFFSET_FILL)}function Ge(B){B?j(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function Nt(B){B===void 0&&(B=i.TEXTURE0+F-1),Z!==B&&(i.activeTexture(B),Z=B)}function wt(B,se,ce){ce===void 0&&(Z===null?ce=i.TEXTURE0+F-1:ce=Z);let ve=$[ce];ve===void 0&&(ve={type:void 0,texture:void 0},$[ce]=ve),(ve.type!==B||ve.texture!==se)&&(Z!==ce&&(i.activeTexture(ce),Z=ce),i.bindTexture(B,se||k[B]),ve.type=B,ve.texture=se)}function U(){const B=$[Z];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function R(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(B){Ke.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ke.copy(B))}function He(B){$e.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),$e.copy(B))}function Ce(B,se){let ce=l.get(se);ce===void 0&&(ce=new WeakMap,l.set(se,ce));let ve=ce.get(B);ve===void 0&&(ve=i.getUniformBlockIndex(se,B.name),ce.set(B,ve))}function fe(B,se){const ve=l.get(se).get(B);c.get(se)!==ve&&(i.uniformBlockBinding(se,ve,B.__bindingPointIndex),c.set(se,ve))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},Z=null,$={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,M=null,x=null,b=null,y=null,E=null,T=new Oe(0,0,0),C=0,S=!1,v=null,w=null,A=null,I=null,D=null,Ke.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:j,disable:ee,bindFramebuffer:ge,drawBuffers:de,useProgram:Pe,setBlending:ze,setMaterial:Me,setFlipSided:me,setCullFace:ae,setLineWidth:et,setPolygonOffset:be,setScissorTest:Ge,activeTexture:Nt,bindTexture:wt,unbindTexture:U,compressedTexImage2D:R,compressedTexImage3D:W,texImage2D:Re,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:fe,texStorage2D:oe,texStorage3D:we,texSubImage2D:K,texSubImage3D:Q,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:pe,viewport:He,reset:je}}function ly(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return h?new OffscreenCanvas(U,R):fa("canvas")}function _(U,R,W){let K=1;const Q=wt(U);if((Q.width>W||Q.height>W)&&(K=W/Math.max(Q.width,Q.height)),K<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Y=Math.floor(K*Q.width),Le=Math.floor(K*Q.height);f===void 0&&(f=g(Y,Le));const oe=R?g(Y,Le):f;return oe.width=Y,oe.height=Le,oe.getContext("2d").drawImage(U,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Y+"x"+Le+")."),oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){i.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(U,R,W,K,Q=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Y=R;if(R===i.RED&&(W===i.FLOAT&&(Y=i.R32F),W===i.HALF_FLOAT&&(Y=i.R16F),W===i.UNSIGNED_BYTE&&(Y=i.R8)),R===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.R8UI),W===i.UNSIGNED_SHORT&&(Y=i.R16UI),W===i.UNSIGNED_INT&&(Y=i.R32UI),W===i.BYTE&&(Y=i.R8I),W===i.SHORT&&(Y=i.R16I),W===i.INT&&(Y=i.R32I)),R===i.RG&&(W===i.FLOAT&&(Y=i.RG32F),W===i.HALF_FLOAT&&(Y=i.RG16F),W===i.UNSIGNED_BYTE&&(Y=i.RG8)),R===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RG8UI),W===i.UNSIGNED_SHORT&&(Y=i.RG16UI),W===i.UNSIGNED_INT&&(Y=i.RG32UI),W===i.BYTE&&(Y=i.RG8I),W===i.SHORT&&(Y=i.RG16I),W===i.INT&&(Y=i.RG32I)),R===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),W===i.UNSIGNED_INT&&(Y=i.RGB32UI),W===i.BYTE&&(Y=i.RGB8I),W===i.SHORT&&(Y=i.RGB16I),W===i.INT&&(Y=i.RGB32I)),R===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),W===i.UNSIGNED_INT&&(Y=i.RGBA32UI),W===i.BYTE&&(Y=i.RGBA8I),W===i.SHORT&&(Y=i.RGBA16I),W===i.INT&&(Y=i.RGBA32I)),R===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),R===i.RGBA){const Le=Q?wo:Qe.getTransfer(K);W===i.FLOAT&&(Y=i.RGBA32F),W===i.HALF_FLOAT&&(Y=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Y=Le===ct?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(U,R){let W;return U?R===null||R===gr||R===aa?W=i.DEPTH24_STENCIL8:R===Hn?W=i.DEPTH32F_STENCIL8:R===sa&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===gr||R===aa?W=i.DEPTH_COMPONENT24:R===Hn?W=i.DEPTH_COMPONENT32F:R===sa&&(W=i.DEPTH_COMPONENT16),W}function y(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jt&&U.minFilter!==Kt?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function E(U){const R=U.target;R.removeEventListener("dispose",E),C(R),R.isVideoTexture&&u.delete(R)}function T(U){const R=U.target;R.removeEventListener("dispose",T),v(R)}function C(U){const R=n.get(U);if(R.__webglInit===void 0)return;const W=U.source,K=d.get(W);if(K){const Q=K[R.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(U),Object.keys(K).length===0&&d.delete(W)}n.remove(U)}function S(U){const R=n.get(U);i.deleteTexture(R.__webglTexture);const W=U.source,K=d.get(W);delete K[R.__cacheKey],a.memory.textures--}function v(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(R.__webglFramebuffer[K]))for(let Q=0;Q<R.__webglFramebuffer[K].length;Q++)i.deleteFramebuffer(R.__webglFramebuffer[K][Q]);else i.deleteFramebuffer(R.__webglFramebuffer[K]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[K])}else{if(Array.isArray(R.__webglFramebuffer))for(let K=0;K<R.__webglFramebuffer.length;K++)i.deleteFramebuffer(R.__webglFramebuffer[K]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let K=0;K<R.__webglColorRenderbuffer.length;K++)R.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[K]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const W=U.textures;for(let K=0,Q=W.length;K<Q;K++){const Y=n.get(W[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(W[K])}n.remove(U)}let w=0;function A(){w=0}function I(){const U=w;return U>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),w+=1,U}function D(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function F(U,R){const W=n.get(U);if(U.isVideoTexture&&Ge(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&W.__version!==U.version){const K=U.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(W,U,R);return}}else U.isExternalTexture&&(W.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+R)}function O(U,R){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){k(W,U,R);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+R)}function G(U,R){const W=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&W.__version!==U.version){k(W,U,R);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+R)}function z(U,R){const W=n.get(U);if(U.version>0&&W.__version!==U.version){j(W,U,R);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+R)}const Z={[cs]:i.REPEAT,[Hi]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},$={[Jt]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},le={[Jm]:i.NEVER,[ng]:i.ALWAYS,[$m]:i.LESS,[ip]:i.LEQUAL,[Zm]:i.EQUAL,[tg]:i.GEQUAL,[Qm]:i.GREATER,[eg]:i.NOTEQUAL};function Ie(U,R){if(R.type===Hn&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Kt||R.magFilter===mo||R.magFilter===Ws||R.magFilter===zn||R.minFilter===Kt||R.minFilter===mo||R.minFilter===Ws||R.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Z[R.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Z[R.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Z[R.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,$[R.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,$[R.minFilter]),R.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,le[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Jt||R.minFilter!==Ws&&R.minFilter!==zn||R.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,r.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function Ke(U,R){let W=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",E));const K=R.source;let Q=d.get(K);Q===void 0&&(Q={},d.set(K,Q));const Y=D(R);if(Y!==U.__cacheKey){Q[Y]===void 0&&(Q[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[Y].usedTimes++;const Le=Q[U.__cacheKey];Le!==void 0&&(Q[U.__cacheKey].usedTimes--,Le.usedTimes===0&&S(R)),U.__cacheKey=Y,U.__webglTexture=Q[Y].texture}return W}function $e(U,R,W){return Math.floor(Math.floor(U/W)/R)}function Be(U,R,W,K){const Y=U.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,W,K,R.data);else{Y.sort((re,pe)=>re.start-pe.start);let Le=0;for(let re=1;re<Y.length;re++){const pe=Y[Le],He=Y[re],Ce=pe.start+pe.count,fe=$e(He.start,R.width,4),je=$e(pe.start,R.width,4);He.start<=Ce+1&&fe===je&&$e(He.start+He.count-1,R.width,4)===fe?pe.count=Math.max(pe.count,He.start+He.count-pe.start):(++Le,Y[Le]=He)}Y.length=Le+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let re=0,pe=Y.length;re<pe;re++){const He=Y[re],Ce=Math.floor(He.start/4),fe=Math.ceil(He.count/4),je=Ce%R.width,B=Math.floor(Ce/R.width),se=fe,ce=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,je,B,se,ce,W,K,R.data)}U.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function k(U,R,W){let K=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&(K=i.TEXTURE_3D);const Q=Ke(U,R),Y=R.source;t.bindTexture(K,U.__webglTexture,i.TEXTURE0+W);const Le=n.get(Y);if(Y.version!==Le.__version||Q===!0){t.activeTexture(i.TEXTURE0+W);const oe=Qe.getPrimaries(Qe.workingColorSpace),we=R.colorSpace===ki?null:Qe.getPrimaries(R.colorSpace),Re=R.colorSpace===ki||oe===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=_(R.image,!1,r.maxTextureSize);re=Nt(R,re);const pe=s.convert(R.format,R.colorSpace),He=s.convert(R.type);let Ce=x(R.internalFormat,pe,He,R.colorSpace,R.isVideoTexture);Ie(K,R);let fe;const je=R.mipmaps,B=R.isVideoTexture!==!0,se=Le.__version===void 0||Q===!0,ce=Y.dataReady,ve=y(R,re);if(R.isDepthTexture)Ce=b(R.format===ca,R.type),se&&(B?t.texStorage2D(i.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,pe,He,null));else if(R.isDataTexture)if(je.length>0){B&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,je[0].width,je[0].height);for(let ne=0,J=je.length;ne<J;ne++)fe=je[ne],B?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,pe,He,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,fe.width,fe.height,0,pe,He,fe.data);R.generateMipmaps=!1}else B?(se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,re.width,re.height),ce&&Be(R,re,pe,He)):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,pe,He,re.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){B&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,je[0].width,je[0].height,re.depth);for(let ne=0,J=je.length;ne<J;ne++)if(fe=je[ne],R.format!==Sn)if(pe!==null)if(B){if(ce)if(R.layerUpdates.size>0){const Ee=dd(fe.width,fe.height,R.format,R.type);for(const We of R.layerUpdates){const dt=fe.data.subarray(We*Ee/fe.data.BYTES_PER_ELEMENT,(We+1)*Ee/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,We,fe.width,fe.height,1,pe,dt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,re.depth,pe,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,fe.width,fe.height,re.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ce&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,fe.width,fe.height,re.depth,pe,He,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,fe.width,fe.height,re.depth,0,pe,He,fe.data)}else{B&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,je[0].width,je[0].height);for(let ne=0,J=je.length;ne<J;ne++)fe=je[ne],R.format!==Sn?pe!==null?B?ce&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,pe,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ce,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,fe.width,fe.height,pe,He,fe.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,fe.width,fe.height,0,pe,He,fe.data)}else if(R.isDataArrayTexture)if(B){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,re.width,re.height,re.depth),ce)if(R.layerUpdates.size>0){const ne=dd(re.width,re.height,R.format,R.type);for(const J of R.layerUpdates){const Ee=re.data.subarray(J*ne/re.data.BYTES_PER_ELEMENT,(J+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,pe,He,Ee)}R.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,He,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,pe,He,re.data);else if(R.isData3DTexture)B?(se&&t.texStorage3D(i.TEXTURE_3D,ve,Ce,re.width,re.height,re.depth),ce&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,He,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,pe,He,re.data);else if(R.isFramebufferTexture){if(se)if(B)t.texStorage2D(i.TEXTURE_2D,ve,Ce,re.width,re.height);else{let ne=re.width,J=re.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ce,ne,J,0,pe,He,null),ne>>=1,J>>=1}}else if(je.length>0){if(B&&se){const ne=wt(je[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ce,ne.width,ne.height)}for(let ne=0,J=je.length;ne<J;ne++)fe=je[ne],B?ce&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,pe,He,fe):t.texImage2D(i.TEXTURE_2D,ne,Ce,pe,He,fe);R.generateMipmaps=!1}else if(B){if(se){const ne=wt(re);t.texStorage2D(i.TEXTURE_2D,ve,Ce,ne.width,ne.height)}ce&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,He,re)}else t.texImage2D(i.TEXTURE_2D,0,Ce,pe,He,re);m(R)&&p(K),Le.__version=Y.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function j(U,R,W){if(R.image.length!==6)return;const K=Ke(U,R),Q=R.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+W);const Y=n.get(Q);if(Q.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+W);const Le=Qe.getPrimaries(Qe.workingColorSpace),oe=R.colorSpace===ki?null:Qe.getPrimaries(R.colorSpace),we=R.colorSpace===ki||Le===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=R.isCompressedTexture||R.image[0].isCompressedTexture,re=R.image[0]&&R.image[0].isDataTexture,pe=[];for(let J=0;J<6;J++)!Re&&!re?pe[J]=_(R.image[J],!0,r.maxCubemapSize):pe[J]=re?R.image[J].image:R.image[J],pe[J]=Nt(R,pe[J]);const He=pe[0],Ce=s.convert(R.format,R.colorSpace),fe=s.convert(R.type),je=x(R.internalFormat,Ce,fe,R.colorSpace),B=R.isVideoTexture!==!0,se=Y.__version===void 0||K===!0,ce=Q.dataReady;let ve=y(R,He);Ie(i.TEXTURE_CUBE_MAP,R);let ne;if(Re){B&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,je,He.width,He.height);for(let J=0;J<6;J++){ne=pe[J].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const We=ne[Ee];R.format!==Sn?Ce!==null?B?ce&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,We.width,We.height,Ce,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,je,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,0,0,We.width,We.height,Ce,fe,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee,je,We.width,We.height,0,Ce,fe,We.data)}}}else{if(ne=R.mipmaps,B&&se){ne.length>0&&ve++;const J=wt(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,je,J.width,J.height)}for(let J=0;J<6;J++)if(re){B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,pe[J].width,pe[J].height,Ce,fe,pe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,pe[J].width,pe[J].height,0,Ce,fe,pe[J].data);for(let Ee=0;Ee<ne.length;Ee++){const dt=ne[Ee].image[J].image;B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,dt.width,dt.height,Ce,fe,dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,je,dt.width,dt.height,0,Ce,fe,dt.data)}}else{B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ce,fe,pe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Ce,fe,pe[J]);for(let Ee=0;Ee<ne.length;Ee++){const We=ne[Ee];B?ce&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,0,0,Ce,fe,We.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ee+1,je,Ce,fe,We.image[J])}}}m(R)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Q.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function ee(U,R,W,K,Q,Y){const Le=s.convert(W.format,W.colorSpace),oe=s.convert(W.type),we=x(W.internalFormat,Le,oe,W.colorSpace),Re=n.get(R),re=n.get(W);if(re.__renderTarget=R,!Re.__hasExternalTextures){const pe=Math.max(1,R.width>>Y),He=Math.max(1,R.height>>Y);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Y,we,pe,He,R.depth,0,Le,oe,null):t.texImage2D(Q,Y,we,pe,He,0,Le,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),be(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,Q,re.__webglTexture,0,et(R)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,Q,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,R,W){if(i.bindRenderbuffer(i.RENDERBUFFER,U),R.depthBuffer){const K=R.depthTexture,Q=K&&K.isDepthTexture?K.type:null,Y=b(R.stencilBuffer,Q),Le=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=et(R);be(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,Y,R.width,R.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,Y,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,Y,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,U)}else{const K=R.textures;for(let Q=0;Q<K.length;Q++){const Y=K[Q],Le=s.convert(Y.format,Y.colorSpace),oe=s.convert(Y.type),we=x(Y.internalFormat,Le,oe,Y.colorSpace),Re=et(R);W&&be(R)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,R.width,R.height):be(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,we,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(R.depthTexture);K.__renderTarget=R,(!K.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),F(R.depthTexture,0);const Q=K.__webglTexture,Y=et(R);if(R.depthTexture.format===oa)be(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Q,0);else if(R.depthTexture.format===ca)be(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Pe(U){const R=n.get(U),W=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const K=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),K){const Q=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,K.removeEventListener("dispose",Q)};K.addEventListener("dispose",Q),R.__depthDisposeCallback=Q}R.__boundDepthTexture=K}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");const K=U.texture.mipmaps;K&&K.length>0?de(R.__webglFramebuffer[0],U):de(R.__webglFramebuffer,U)}else if(W){R.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[K]),R.__webglDepthbuffer[K]===void 0)R.__webglDepthbuffer[K]=i.createRenderbuffer(),ge(R.__webglDepthbuffer[K],U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=R.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}else{const K=U.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),ge(R.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(U,R,W){const K=n.get(U);R!==void 0&&ee(K.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Pe(U)}function N(U){const R=U.texture,W=n.get(U),K=n.get(R);U.addEventListener("dispose",T);const Q=U.textures,Y=U.isWebGLCubeRenderTarget===!0,Le=Q.length>1;if(Le||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=R.version,a.memory.textures++),Y){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer[oe]=[];for(let we=0;we<R.mipmaps.length;we++)W.__webglFramebuffer[oe][we]=i.createFramebuffer()}else W.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){W.__webglFramebuffer=[];for(let oe=0;oe<R.mipmaps.length;oe++)W.__webglFramebuffer[oe]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Le)for(let oe=0,we=Q.length;oe<we;oe++){const Re=n.get(Q[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(U.samples>0&&be(U)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const we=Q[oe];W.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[oe]);const Re=s.convert(we.format,we.colorSpace),re=s.convert(we.type),pe=x(we.internalFormat,Re,re,we.colorSpace,U.isXRRenderTarget===!0),He=et(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,pe,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,W.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(W.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,R);for(let oe=0;oe<6;oe++)if(R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)ee(W.__webglFramebuffer[oe][we],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we);else ee(W.__webglFramebuffer[oe],U,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(R)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let oe=0,we=Q.length;oe<we;oe++){const Re=Q[oe],re=n.get(Re);let pe=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),Ie(pe,Re),ee(W.__webglFramebuffer,U,Re,i.COLOR_ATTACHMENT0+oe,pe,0),m(Re)&&p(pe)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,K.__webglTexture),Ie(oe,R),R.mipmaps&&R.mipmaps.length>0)for(let we=0;we<R.mipmaps.length;we++)ee(W.__webglFramebuffer[we],U,R,i.COLOR_ATTACHMENT0,oe,we);else ee(W.__webglFramebuffer,U,R,i.COLOR_ATTACHMENT0,oe,0);m(R)&&p(oe),t.unbindTexture()}U.depthBuffer&&Pe(U)}function ze(U){const R=U.textures;for(let W=0,K=R.length;W<K;W++){const Q=R[W];if(m(Q)){const Y=M(U),Le=n.get(Q).__webglTexture;t.bindTexture(Y,Le),p(Y),t.unbindTexture()}}}const Me=[],me=[];function ae(U){if(U.samples>0){if(be(U)===!1){const R=U.textures,W=U.width,K=U.height;let Q=i.COLOR_BUFFER_BIT;const Y=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(U),oe=R.length>1;if(oe)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const re=n.get(R[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,Q,i.NEAREST),c===!0&&(Me.length=0,me.length=0,Me.push(i.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Me.push(Y),me.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,me)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const re=n.get(R[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const R=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function et(U){return Math.min(r.maxSamples,U.samples)}function be(U){const R=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ge(U){const R=a.render.frame;u.get(U)!==R&&(u.set(U,R),U.update())}function Nt(U,R){const W=U.colorSpace,K=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||W!==$t&&W!==ki&&(Qe.getTransfer(W)===ct?(K!==Sn||Q!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),R}function wt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=A,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=G,this.setTextureCube=z,this.rebindTextures=te,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=be}function uy(i,e){function t(n,r=ki){let s;const a=Qe.getTransfer(r);if(n===ai)return i.UNSIGNED_BYTE;if(n===Pu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Lu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===sa)return i.UNSIGNED_SHORT;if(n===Cu)return i.INT;if(n===gr)return i.UNSIGNED_INT;if(n===Hn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===ep)return i.RGB;if(n===Sn)return i.RGBA;if(n===oa)return i.DEPTH_COMPONENT;if(n===ca)return i.DEPTH_STENCIL;if(n===Iu)return i.RED;if(n===Du)return i.RED_INTEGER;if(n===tp)return i.RG;if(n===Uu)return i.RG_INTEGER;if(n===Nu)return i.RGBA_INTEGER;if(n===go||n===bo||n===_o||n===xo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cl||n===Pl||n===Ll||n===Il)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Cl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dl||n===Ul||n===Nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Dl||n===Ul)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Nl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===jl||n===Xl||n===Yl||n===Kl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Fl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ql)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===jl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Xl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jl||n===$l||n===Zl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Jl)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===eu||n===tu||n===nu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===eu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===tu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const fy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dy=`
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

}`;class hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new yp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:fy,fragmentShader:dy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class py extends _s{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new hy,p={},M=t.getContextAttributes();let x=null,b=null;const y=[],E=[],T=new Ue;let C=null;const S=new Gt;S.viewport=new tt;const v=new Gt;v.viewport=new tt;const w=[S,v],A=new Eb;let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let j=y[k];return j===void 0&&(j=new dc,y[k]=j),j.getTargetRaySpace()},this.getControllerGrip=function(k){let j=y[k];return j===void 0&&(j=new dc,y[k]=j),j.getGripSpace()},this.getHand=function(k){let j=y[k];return j===void 0&&(j=new dc,y[k]=j),j.getHandSpace()};function F(k){const j=E.indexOf(k.inputSource);if(j===-1)return;const ee=y[j];ee!==void 0&&(ee.update(k.inputSource,k.frame,l||a),ee.dispatchEvent({type:k.type,data:k.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",G);for(let k=0;k<y.length;k++){const j=E[k];j!==null&&(E[k]=null,y[k].disconnect(j))}I=null,D=null,m.reset();for(const k in p)delete p[k];e.setRenderTarget(x),h=null,d=null,f=null,r=null,b=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,ge=null,de=null;M.depth&&(de=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=M.stencil?ca:oa,ge=M.stencil?aa:gr);const Pe={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ji(d.textureWidth,d.textureHeight,{format:Sn,type:ai,depthTexture:new vp(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ee={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ji(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(k){for(let j=0;j<k.removed.length;j++){const ee=k.removed[j],ge=E.indexOf(ee);ge>=0&&(E[ge]=null,y[ge].disconnect(ee))}for(let j=0;j<k.added.length;j++){const ee=k.added[j];let ge=E.indexOf(ee);if(ge===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=E.length){E.push(ee),ge=Pe;break}else if(E[Pe]===null){E[Pe]=ee,ge=Pe;break}if(ge===-1)break}const de=y[ge];de&&de.connect(ee)}}const z=new L,Z=new L;function $(k,j,ee){z.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ee.matrixWorld);const ge=z.distanceTo(Z),de=j.projectionMatrix.elements,Pe=ee.projectionMatrix.elements,te=de[14]/(de[10]-1),N=de[14]/(de[10]+1),ze=(de[9]+1)/de[5],Me=(de[9]-1)/de[5],me=(de[8]-1)/de[0],ae=(Pe[8]+1)/Pe[0],et=te*me,be=te*ae,Ge=ge/(-me+ae),Nt=Ge*-me;if(j.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Nt),k.translateZ(Ge),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),de[10]===-1)k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const wt=te+Ge,U=N+Ge,R=et-Nt,W=be+(ge-Nt),K=ze*N/U*wt,Q=Me*N/U*wt;k.projectionMatrix.makePerspective(R,W,K,Q,wt,U),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function le(k,j){j===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(j.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let j=k.near,ee=k.far;m.texture!==null&&(m.depthNear>0&&(j=m.depthNear),m.depthFar>0&&(ee=m.depthFar)),A.near=v.near=S.near=j,A.far=v.far=S.far=ee,(I!==A.near||D!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),I=A.near,D=A.far),A.layers.mask=k.layers.mask|6,S.layers.mask=A.layers.mask&3,v.layers.mask=A.layers.mask&5;const ge=k.parent,de=A.cameras;le(A,ge);for(let Pe=0;Pe<de.length;Pe++)le(de[Pe],ge);de.length===2?$(A,S,v):A.projectionMatrix.copy(S.projectionMatrix),Ie(k,A,ge)};function Ie(k,j,ee){ee===null?k.matrix.copy(j.matrixWorld):(k.matrix.copy(ee.matrixWorld),k.matrix.invert(),k.matrix.multiply(j.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(j.projectionMatrix),k.projectionMatrixInverse.copy(j.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ls*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(k){return p[k]};let Ke=null;function $e(k,j){if(u=j.getViewerPose(l||a),g=j,u!==null){const ee=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ge=!1;ee.length!==A.cameras.length&&(A.cameras.length=0,ge=!0);for(let N=0;N<ee.length;N++){const ze=ee[N];let Me=null;if(h!==null)Me=h.getViewport(ze);else{const ae=f.getViewSubImage(d,ze);Me=ae.viewport,N===0&&(e.setRenderTargetTextures(b,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(b))}let me=w[N];me===void 0&&(me=new Gt,me.layers.enable(N),me.viewport=new tt,w[N]=me),me.matrix.fromArray(ze.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ze.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Me.x,Me.y,Me.width,Me.height),N===0&&(A.matrix.copy(me.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ge===!0&&A.cameras.push(me)}const de=r.enabledFeatures;if(de&&de.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const N=f.getDepthInformation(ee[0]);N&&N.isValid&&N.texture&&m.init(N,r.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let N=0;N<ee.length;N++){const ze=ee[N].camera;if(ze){let Me=p[ze];Me||(Me=new yp,p[ze]=Me);const me=f.getCameraImage(ze);Me.sourceTexture=me}}}}for(let ee=0;ee<y.length;ee++){const ge=E[ee],de=y[ee];ge!==null&&de!==void 0&&de.update(ge,j,l||a)}Ke&&Ke(k,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const Be=new Ap;Be.setAnimationLoop($e),this.setAnimationLoop=function(k){Ke=k},this.dispose=function(){}}}const ir=new jn,my=new Ne;function gy(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),x=M.envMap,b=M.envMapRotation;x&&(m.envMap.value=x,ir.copy(b),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(my.makeRotationFromEuler(ir)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function by(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const b=x.program;n.uniformBlockBinding(M,b)}function l(M,x){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(M,y);const E=e.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function u(M){const x=f();M.__bindingPointIndex=x;const b=i.createBuffer(),y=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const x=r[M.id],b=M.uniforms,y=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=b.length;E<T;E++){const C=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,v=C.length;S<v;S++){const w=C[S];if(h(w,E,S,y)===!0){const A=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let F=0;F<I.length;F++){const O=I[F],G=_(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,A+D,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,x,b,y){const E=M.value,T=x+"_"+b;if(y[T]===void 0)return typeof E=="number"||typeof E=="boolean"?y[T]=E:y[T]=E.clone(),!0;{const C=y[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return y[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const x=M.uniforms;let b=0;const y=16;for(let T=0,C=x.length;T<C;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let v=0,w=S.length;v<w;v++){const A=S[v],I=Array.isArray(A.value)?A.value:[A.value];for(let D=0,F=I.length;D<F;D++){const O=I[D],G=_(O),z=b%y,Z=z%G.boundary,$=z+Z;b+=Z,$!==0&&y-$<G.storage&&(b+=y-$),A.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,b+=G.storage}}}const E=b%y;return E>0&&(b+=y-E),M.__size=b,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function m(M){const x=M.target;x.removeEventListener("dispose",m);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class _y{constructor(e={}){const{canvas:t=xg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const M=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let y=!1;this._outputColorSpace=Pt;let E=0,T=0,C=null,S=-1,v=null;const w=new tt,A=new tt;let I=null;const D=new Oe(0);let F=0,O=t.width,G=t.height,z=1,Z=null,$=null;const le=new tt(0,0,O,G),Ie=new tt(0,0,O,G);let Ke=!1;const $e=new Vu;let Be=!1,k=!1;const j=new Ne,ee=new L,ge=new tt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function te(){return C===null?z:1}let N=n;function ze(P,H){return t.getContext(P,H)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const H="webgl2";if(N=ze(H,P),N===null)throw ze(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Me,me,ae,et,be,Ge,Nt,wt,U,R,W,K,Q,Y,Le,oe,we,Re,re,pe,He,Ce,fe,je;function B(){Me=new Rx(N),Me.init(),Ce=new uy(N,Me),me=new yx(N,Me,e,Ce),ae=new cy(N,Me),me.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),et=new Lx(N),be=new Kv,Ge=new ly(N,Me,ae,be,me,Ce,et),Nt=new Sx(b),wt=new Ax(b),U=new Ob(N),fe=new xx(N,U),R=new Cx(N,U,et,fe),W=new Dx(N,R,U,et),re=new Ix(N,me,Ge),oe=new Mx(be),K=new Yv(b,Nt,wt,Me,me,fe,oe),Q=new gy(b,be),Y=new $v,Le=new iy(Me),Re=new _x(b,Nt,wt,ae,W,h,c),we=new ay(b,W,me),je=new by(N,et,me,ae),pe=new vx(N,Me,et),He=new Px(N,Me,et),et.programs=K.programs,b.capabilities=me,b.extensions=Me,b.properties=be,b.renderLists=Y,b.shadowMap=we,b.state=ae,b.info=et}B();const se=new py(b,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=Me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(P){P!==void 0&&(z=P,this.setSize(O,G,!1))},this.getSize=function(P){return P.set(O,G)},this.setSize=function(P,H,q=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,G=H,t.width=Math.floor(P*z),t.height=Math.floor(H*z),q===!0&&(t.style.width=P+"px",t.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(O*z,G*z).floor()},this.setDrawingBufferSize=function(P,H,q){O=P,G=H,z=q,t.width=Math.floor(P*q),t.height=Math.floor(H*q),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(le)},this.setViewport=function(P,H,q,X){P.isVector4?le.set(P.x,P.y,P.z,P.w):le.set(P,H,q,X),ae.viewport(w.copy(le).multiplyScalar(z).round())},this.getScissor=function(P){return P.copy(Ie)},this.setScissor=function(P,H,q,X){P.isVector4?Ie.set(P.x,P.y,P.z,P.w):Ie.set(P,H,q,X),ae.scissor(A.copy(Ie).multiplyScalar(z).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(P){ae.setScissorTest(Ke=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){$=P},this.getClearColor=function(P){return P.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(P=!0,H=!0,q=!0){let X=0;if(P){let V=!1;if(C!==null){const ie=C.texture.format;V=ie===Nu||ie===Uu||ie===Du}if(V){const ie=C.texture.type,he=ie===ai||ie===gr||ie===sa||ie===aa||ie===Pu||ie===Lu,Se=Re.getClearColor(),_e=Re.getClearAlpha(),ke=Se.r,Ve=Se.g,De=Se.b;he?(g[0]=ke,g[1]=Ve,g[2]=De,g[3]=_e,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=ke,_[1]=Ve,_[2]=De,_[3]=_e,N.clearBufferiv(N.COLOR,0,_))}else X|=N.COLOR_BUFFER_BIT}H&&(X|=N.DEPTH_BUFFER_BIT),q&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Re.dispose(),Y.dispose(),Le.dispose(),be.dispose(),Nt.dispose(),wt.dispose(),W.dispose(),fe.dispose(),je.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jn),se.removeEventListener("sessionend",df),Ji.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=et.autoReset,H=we.enabled,q=we.autoUpdate,X=we.needsUpdate,V=we.type;B(),et.autoReset=P,we.enabled=H,we.autoUpdate=q,we.needsUpdate=X,we.type=V}function ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function J(P){const H=P.target;H.removeEventListener("dispose",J),Ee(H)}function Ee(P){We(P),be.remove(P)}function We(P){const H=be.get(P).programs;H!==void 0&&(H.forEach(function(q){K.releaseProgram(q)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,q,X,V,ie){H===null&&(H=de);const he=V.isMesh&&V.matrixWorld.determinant()<0,Se=lm(P,H,q,X,V);ae.setMaterial(X,he);let _e=q.index,ke=1;if(X.wireframe===!0){if(_e=R.getWireframeAttribute(q),_e===void 0)return;ke=2}const Ve=q.drawRange,De=q.attributes.position;let Ze=Ve.start*ke,ot=(Ve.start+Ve.count)*ke;ie!==null&&(Ze=Math.max(Ze,ie.start*ke),ot=Math.min(ot,(ie.start+ie.count)*ke)),_e!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,_e.count)):De!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,De.count));const Et=ot-Ze;if(Et<0||Et===1/0)return;fe.setup(V,X,Se,q,_e);let mt,ut=pe;if(_e!==null&&(mt=U.get(_e),ut=He,ut.setIndex(mt)),V.isMesh)X.wireframe===!0?(ae.setLineWidth(X.wireframeLinewidth*te()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(V.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),ae.setLineWidth(Fe*te()),V.isLineSegments?ut.setMode(N.LINES):V.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else V.isPoints?ut.setMode(N.POINTS):V.isSprite&&ut.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)da("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Fe=V._multiDrawStarts,yt=V._multiDrawCounts,it=V._multiDrawCount,un=_e?U.get(_e).bytesPerElement:1,yr=be.get(X).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)yr.setValue(N,"_gl_DrawID",fn),ut.render(Fe[fn]/un,yt[fn])}else if(V.isInstancedMesh)ut.renderInstances(Ze,Et,V.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,yt=Math.min(q.instanceCount,Fe);ut.renderInstances(Ze,Et,yt)}else ut.render(Ze,Et)};function dt(P,H,q){P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Ma(P,H,q),P.side=Ln,P.needsUpdate=!0,Ma(P,H,q),P.side=sn):Ma(P,H,q)}this.compile=function(P,H,q=null){q===null&&(q=P),p=Le.get(q),p.init(H),x.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),P!==q&&P.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const X=new Set;return P.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ie=V.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const Se=ie[he];dt(Se,q,V),X.add(Se)}else dt(ie,q,V),X.add(ie)}),p=x.pop(),X},this.compileAsync=function(P,H,q=null){const X=this.compile(P,H,q);return new Promise(V=>{function ie(){if(X.forEach(function(he){be.get(he).currentProgram.isReady()&&X.delete(he)}),X.size===0){V(P);return}setTimeout(ie,10)}Me.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function li(P){rt&&rt(P)}function Jn(){Ji.stop()}function df(){Ji.start()}const Ji=new Ap;Ji.setAnimationLoop(li),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(P){rt=P,se.setAnimationLoop(P),P===null?Ji.stop():Ji.start()},se.addEventListener("sessionstart",Jn),se.addEventListener("sessionend",df),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(H),H=se.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,H,C),p=Le.get(P,x.length),p.init(H),x.push(p),j.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),$e.setFromProjectionMatrix(j,ni,H.reversedDepth),k=this.localClippingEnabled,Be=oe.init(this.clippingPlanes,k),m=Y.get(P,M.length),m.init(),M.push(m),se.enabled===!0&&se.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Go(ie,H,-1/0,b.sortObjects)}Go(P,H,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Z,$),Pe=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Pe&&Re.addToRenderList(m,P),this.info.render.frame++,Be===!0&&oe.beginShadows();const q=p.state.shadowsArray;we.render(q,P,H),Be===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,V=m.transmissive;if(p.setupLights(),H.isArrayCamera){const ie=H.cameras;if(V.length>0)for(let he=0,Se=ie.length;he<Se;he++){const _e=ie[he];pf(X,V,P,_e)}Pe&&Re.render(P);for(let he=0,Se=ie.length;he<Se;he++){const _e=ie[he];hf(m,P,_e,_e.viewport)}}else V.length>0&&pf(X,V,P,H),Pe&&Re.render(P),hf(m,P,H);C!==null&&T===0&&(Ge.updateMultisampleRenderTarget(C),Ge.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(b,P,H),fe.resetDefaultState(),S=-1,v=null,x.pop(),x.length>0?(p=x[x.length-1],Be===!0&&oe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Go(P,H,q,X){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$e.intersectsSprite(P)){X&&ge.setFromMatrixPosition(P.matrixWorld).applyMatrix4(j);const he=W.update(P),Se=P.material;Se.visible&&m.push(P,he,Se,q,ge.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$e.intersectsObject(P))){const he=W.update(P),Se=P.material;if(X&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ge.copy(P.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),ge.copy(he.boundingSphere.center)),ge.applyMatrix4(P.matrixWorld).applyMatrix4(j)),Array.isArray(Se)){const _e=he.groups;for(let ke=0,Ve=_e.length;ke<Ve;ke++){const De=_e[ke],Ze=Se[De.materialIndex];Ze&&Ze.visible&&m.push(P,he,Ze,q,ge.z,De)}}else Se.visible&&m.push(P,he,Se,q,ge.z,null)}}const ie=P.children;for(let he=0,Se=ie.length;he<Se;he++)Go(ie[he],H,q,X)}function hf(P,H,q,X){const V=P.opaque,ie=P.transmissive,he=P.transparent;p.setupLightsView(q),Be===!0&&oe.setGlobalState(b.clippingPlanes,q),X&&ae.viewport(w.copy(X)),V.length>0&&ya(V,H,q),ie.length>0&&ya(ie,H,q),he.length>0&&ya(he,H,q),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function pf(P,H,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new ji(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?bs:ai,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=p.state.transmissionRenderTarget[X.id],he=X.viewport||w;ie.setSize(he.z*b.transmissionResolutionScale,he.w*b.transmissionResolutionScale);const Se=b.getRenderTarget(),_e=b.getActiveCubeFace(),ke=b.getActiveMipmapLevel();b.setRenderTarget(ie),b.getClearColor(D),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear(),Pe&&Re.render(q);const Ve=b.toneMapping;b.toneMapping=Wi;const De=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),Be===!0&&oe.setGlobalState(b.clippingPlanes,X),ya(P,q,X),Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,Et=H.length;ot<Et;ot++){const mt=H[ot],ut=mt.object,Fe=mt.geometry,yt=mt.material,it=mt.group;if(yt.side===sn&&ut.layers.test(X.layers)){const un=yt.side;yt.side=qt,yt.needsUpdate=!0,mf(ut,q,X,Fe,yt,it),yt.side=un,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie))}b.setRenderTarget(Se,_e,ke),b.setClearColor(D,F),De!==void 0&&(X.viewport=De),b.toneMapping=Ve}function ya(P,H,q){const X=H.isScene===!0?H.overrideMaterial:null;for(let V=0,ie=P.length;V<ie;V++){const he=P[V],Se=he.object,_e=he.geometry,ke=he.group;let Ve=he.material;Ve.allowOverride===!0&&X!==null&&(Ve=X),Se.layers.test(q.layers)&&mf(Se,H,q,_e,Ve,ke)}}function mf(P,H,q,X,V,ie){P.onBeforeRender(b,H,q,X,V,ie),P.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),V.onBeforeRender(b,H,q,X,P,ie),V.transparent===!0&&V.side===sn&&V.forceSinglePass===!1?(V.side=qt,V.needsUpdate=!0,b.renderBufferDirect(q,H,X,V,P,ie),V.side=Ln,V.needsUpdate=!0,b.renderBufferDirect(q,H,X,V,P,ie),V.side=sn):b.renderBufferDirect(q,H,X,V,P,ie),P.onAfterRender(b,H,q,X,V,ie)}function Ma(P,H,q){H.isScene!==!0&&(H=de);const X=be.get(P),V=p.state.lights,ie=p.state.shadowsArray,he=V.state.version,Se=K.getParameters(P,V.state,ie,H,q),_e=K.getProgramCacheKey(Se);let ke=X.programs;X.environment=P.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(P.isMeshStandardMaterial?wt:Nt).get(P.envMap||X.environment),X.envMapRotation=X.environment!==null&&P.envMap===null?H.environmentRotation:P.envMapRotation,ke===void 0&&(P.addEventListener("dispose",J),ke=new Map,X.programs=ke);let Ve=ke.get(_e);if(Ve!==void 0){if(X.currentProgram===Ve&&X.lightsStateVersion===he)return bf(P,Se),Ve}else Se.uniforms=K.getUniforms(P),P.onBeforeCompile(Se,b),Ve=K.acquireProgram(Se,_e),ke.set(_e,Ve),X.uniforms=Se.uniforms;const De=X.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=oe.uniform),bf(P,Se),X.needsLights=fm(P),X.lightsStateVersion=he,X.needsLights&&(De.ambientLightColor.value=V.state.ambient,De.lightProbe.value=V.state.probe,De.directionalLights.value=V.state.directional,De.directionalLightShadows.value=V.state.directionalShadow,De.spotLights.value=V.state.spot,De.spotLightShadows.value=V.state.spotShadow,De.rectAreaLights.value=V.state.rectArea,De.ltc_1.value=V.state.rectAreaLTC1,De.ltc_2.value=V.state.rectAreaLTC2,De.pointLights.value=V.state.point,De.pointLightShadows.value=V.state.pointShadow,De.hemisphereLights.value=V.state.hemi,De.directionalShadowMap.value=V.state.directionalShadowMap,De.directionalShadowMatrix.value=V.state.directionalShadowMatrix,De.spotShadowMap.value=V.state.spotShadowMap,De.spotLightMatrix.value=V.state.spotLightMatrix,De.spotLightMap.value=V.state.spotLightMap,De.pointShadowMap.value=V.state.pointShadowMap,De.pointShadowMatrix.value=V.state.pointShadowMatrix),X.currentProgram=Ve,X.uniformsList=null,Ve}function gf(P){if(P.uniformsList===null){const H=P.currentProgram.getUniforms();P.uniformsList=vo.seqWithValue(H.seq,P.uniforms)}return P.uniformsList}function bf(P,H){const q=be.get(P);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function lm(P,H,q,X,V){H.isScene!==!0&&(H=de),Ge.resetTextureUnits();const ie=H.fog,he=X.isMeshStandardMaterial?H.environment:null,Se=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:$t,_e=(X.isMeshStandardMaterial?wt:Nt).get(X.envMap||he),ke=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!q.morphAttributes.position,Ze=!!q.morphAttributes.normal,ot=!!q.morphAttributes.color;let Et=Wi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Et=b.toneMapping);const mt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ut=mt!==void 0?mt.length:0,Fe=be.get(X),yt=p.state.lights;if(Be===!0&&(k===!0||P!==v)){const jt=P===v&&X.id===S;oe.setState(X,P,jt)}let it=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==yt.state.version||Fe.outputColorSpace!==Se||V.isBatchedMesh&&Fe.batching===!1||!V.isBatchedMesh&&Fe.batching===!0||V.isBatchedMesh&&Fe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Fe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Fe.instancing===!1||!V.isInstancedMesh&&Fe.instancing===!0||V.isSkinnedMesh&&Fe.skinning===!1||!V.isSkinnedMesh&&Fe.skinning===!0||V.isInstancedMesh&&Fe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Fe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Fe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Fe.instancingMorph===!1&&V.morphTexture!==null||Fe.envMap!==_e||X.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==ke||Fe.vertexTangents!==Ve||Fe.morphTargets!==De||Fe.morphNormals!==Ze||Fe.morphColors!==ot||Fe.toneMapping!==Et||Fe.morphTargetsCount!==ut)&&(it=!0):(it=!0,Fe.__version=X.version);let un=Fe.currentProgram;it===!0&&(un=Ma(X,H,V));let yr=!1,fn=!1,Es=!1;const Mt=un.getUniforms(),_n=Fe.uniforms;if(ae.useProgram(un.program)&&(yr=!0,fn=!0,Es=!0),X.id!==S&&(S=X.id,fn=!0),yr||v!==P){ae.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Mt.setValue(N,"projectionMatrix",P.projectionMatrix),Mt.setValue(N,"viewMatrix",P.matrixWorldInverse);const en=Mt.map.cameraPosition;en!==void 0&&en.setValue(N,ee.setFromMatrixPosition(P.matrixWorld)),me.logarithmicDepthBuffer&&Mt.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Mt.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),v!==P&&(v=P,fn=!0,Es=!0)}if(V.isSkinnedMesh){Mt.setOptional(N,V,"bindMatrix"),Mt.setOptional(N,V,"bindMatrixInverse");const jt=V.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Mt.setValue(N,"boneTexture",jt.boneTexture,Ge))}V.isBatchedMesh&&(Mt.setOptional(N,V,"batchingTexture"),Mt.setValue(N,"batchingTexture",V._matricesTexture,Ge),Mt.setOptional(N,V,"batchingIdTexture"),Mt.setValue(N,"batchingIdTexture",V._indirectTexture,Ge),Mt.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&Mt.setValue(N,"batchingColorTexture",V._colorsTexture,Ge));const xn=q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&re.update(V,q,un),(fn||Fe.receiveShadow!==V.receiveShadow)&&(Fe.receiveShadow=V.receiveShadow,Mt.setValue(N,"receiveShadow",V.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(_n.envMap.value=_e,_n.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(_n.envMapIntensity.value=H.environmentIntensity),fn&&(Mt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&um(_n,Es),ie&&X.fog===!0&&Q.refreshFogUniforms(_n,ie),Q.refreshMaterialUniforms(_n,X,z,G,p.state.transmissionRenderTarget[P.id]),vo.upload(N,gf(Fe),_n,Ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vo.upload(N,gf(Fe),_n,Ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Mt.setValue(N,"center",V.center),Mt.setValue(N,"modelViewMatrix",V.modelViewMatrix),Mt.setValue(N,"normalMatrix",V.normalMatrix),Mt.setValue(N,"modelMatrix",V.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const jt=X.uniformsGroups;for(let en=0,Wo=jt.length;en<Wo;en++){const $i=jt[en];je.update($i,un),je.bind($i,un)}}return un}function um(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function fm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,H,q){const X=be.get(P);X.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),be.get(P.texture).__webglTexture=H,be.get(P.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,H){const q=be.get(P);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const dm=N.createFramebuffer();this.setRenderTarget=function(P,H=0,q=0){C=P,E=H,T=q;let X=!0,V=null,ie=!1,he=!1;if(P){const _e=be.get(P);if(_e.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(N.FRAMEBUFFER,null),X=!1;else if(_e.__webglFramebuffer===void 0)Ge.setupRenderTarget(P);else if(_e.__hasExternalTextures)Ge.rebindTextures(P,be.get(P.texture).__webglTexture,be.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(P)}}const ke=P.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(he=!0);const Ve=be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[H])?V=Ve[H][q]:V=Ve[H],ie=!0):P.samples>0&&Ge.useMultisampledRTT(P)===!1?V=be.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?V=Ve[q]:V=Ve,w.copy(P.viewport),A.copy(P.scissor),I=P.scissorTest}else w.copy(le).multiplyScalar(z).floor(),A.copy(Ie).multiplyScalar(z).floor(),I=Ke;if(q!==0&&(V=dm),ae.bindFramebuffer(N.FRAMEBUFFER,V)&&X&&ae.drawBuffers(P,V),ae.viewport(w),ae.scissor(A),ae.setScissorTest(I),ie){const _e=be.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+H,_e.__webglTexture,q)}else if(he){const _e=H;for(let ke=0;ke<P.textures.length;ke++){const Ve=be.get(P.textures[ke]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,q,_e)}}else if(P!==null&&q!==0){const _e=be.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(P,H,q,X,V,ie,he,Se=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){ae.bindFramebuffer(N.FRAMEBUFFER,_e);try{const ke=P.textures[Se],Ve=ke.format,De=ke.type;if(!me.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-X&&q>=0&&q<=P.height-V&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(H,q,X,V,Ce.convert(Ve),Ce.convert(De),ie))}finally{const ke=C!==null?be.get(C).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,H,q,X,V,ie,he,Se=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(H>=0&&H<=P.width-X&&q>=0&&q<=P.height-V){ae.bindFramebuffer(N.FRAMEBUFFER,_e);const ke=P.textures[Se],Ve=ke.format,De=ke.type;if(!me.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(H,q,X,V,Ce.convert(Ve),Ce.convert(De),0);const ot=C!==null?be.get(C).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,ot);const Et=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await vg(N,Et,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Ze),N.deleteSync(Et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,H=null,q=0){const X=Math.pow(2,-q),V=Math.floor(P.image.width*X),ie=Math.floor(P.image.height*X),he=H!==null?H.x:0,Se=H!==null?H.y:0;Ge.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,he,Se,V,ie),ae.unbindTexture()};const hm=N.createFramebuffer(),pm=N.createFramebuffer();this.copyTextureToTexture=function(P,H,q=null,X=null,V=0,ie=null){ie===null&&(V!==0?(da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=V,V=0):ie=0);let he,Se,_e,ke,Ve,De,Ze,ot,Et;const mt=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(q!==null)he=q.max.x-q.min.x,Se=q.max.y-q.min.y,_e=q.isBox3?q.max.z-q.min.z:1,ke=q.min.x,Ve=q.min.y,De=q.isBox3?q.min.z:0;else{const xn=Math.pow(2,-V);he=Math.floor(mt.width*xn),Se=Math.floor(mt.height*xn),P.isDataArrayTexture?_e=mt.depth:P.isData3DTexture?_e=Math.floor(mt.depth*xn):_e=1,ke=0,Ve=0,De=0}X!==null?(Ze=X.x,ot=X.y,Et=X.z):(Ze=0,ot=0,Et=0);const ut=Ce.convert(H.format),Fe=Ce.convert(H.type);let yt;H.isData3DTexture?(Ge.setTexture3D(H,0),yt=N.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Ge.setTexture2DArray(H,0),yt=N.TEXTURE_2D_ARRAY):(Ge.setTexture2D(H,0),yt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const it=N.getParameter(N.UNPACK_ROW_LENGTH),un=N.getParameter(N.UNPACK_IMAGE_HEIGHT),yr=N.getParameter(N.UNPACK_SKIP_PIXELS),fn=N.getParameter(N.UNPACK_SKIP_ROWS),Es=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ke),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ve),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const Mt=P.isDataArrayTexture||P.isData3DTexture,_n=H.isDataArrayTexture||H.isData3DTexture;if(P.isDepthTexture){const xn=be.get(P),jt=be.get(H),en=be.get(xn.__renderTarget),Wo=be.get(jt.__renderTarget);ae.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let $i=0;$i<_e;$i++)Mt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(P).__webglTexture,V,De+$i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(H).__webglTexture,ie,Et+$i)),N.blitFramebuffer(ke,Ve,he,Se,Ze,ot,he,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||P.isRenderTargetTexture||be.has(P)){const xn=be.get(P),jt=be.get(H);ae.bindFramebuffer(N.READ_FRAMEBUFFER,hm),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,pm);for(let en=0;en<_e;en++)Mt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,V,De+en):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,V),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jt.__webglTexture,ie,Et+en):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jt.__webglTexture,ie),V!==0?N.blitFramebuffer(ke,Ve,he,Se,Ze,ot,he,Se,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(yt,ie,Ze,ot,Et+en,ke,Ve,he,Se):N.copyTexSubImage2D(yt,ie,Ze,ot,ke,Ve,he,Se);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(yt,ie,Ze,ot,Et,he,Se,_e,ut,Fe,mt.data):H.isCompressedArrayTexture?N.compressedTexSubImage3D(yt,ie,Ze,ot,Et,he,Se,_e,ut,mt.data):N.texSubImage3D(yt,ie,Ze,ot,Et,he,Se,_e,ut,Fe,mt):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,Ze,ot,he,Se,ut,Fe,mt.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,Ze,ot,mt.width,mt.height,ut,mt.data):N.texSubImage2D(N.TEXTURE_2D,ie,Ze,ot,he,Se,ut,Fe,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,it),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,un),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yr),N.pixelStorei(N.UNPACK_SKIP_ROWS,fn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Es),ie===0&&H.generateMipmaps&&N.generateMipmap(yt),ae.unbindTexture()},this.initRenderTarget=function(P){be.get(P).__webglFramebuffer===void 0&&Ge.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ge.setTextureCube(P,0):P.isData3DTexture?Ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ge.setTexture2DArray(P,0):Ge.setTexture2D(P,0),ae.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,ae.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function xy(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new ln;let l=0;for(let u=0;u<i.length;++u){const f=i[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const f=[];for(let d=0;d<i.length;++d){const h=i[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=i[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Fd(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let _=0;_<a[u].length;++_)h.push(a[u][_][d]);const g=Fd(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Fd(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const u=i[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Bt(a,t,n);let c=0;for(let l=0;l<i.length;++l){const u=i[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+f,g,_)}}else a.set(u.array,c);c+=u.count*t}return r!==void 0&&(o.gpuType=r),o}function Od(i,e){if(e===jm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===iu||e===np){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===iu)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Zu extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new By(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Qs.extractUrlBase(e);a=Qs.resolveURL(l,this.path)}else a=Qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Ep(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ip){try{a[Je.KHR_BINARY_GLTF]=new ky(e)}catch(f){r&&r(f);return}s=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Zy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case Je.KHR_MATERIALS_UNLIT:a[f]=new My;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[f]=new zy(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[f]=new Hy;break;case Je.KHR_MESH_QUANTIZATION:a[f]=new Vy;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function vy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yy{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],$t);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mb(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new wp(u),l.distance=f;break;case"spot":l=new Tp(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class My{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const r=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(r)}}class Sy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ey{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class wy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Ry{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Cy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],$t),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ly{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Ny{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Fy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Oy{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(h),u,f,d,r.mode,r.filter),h})})}else return null}}class By{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],d=l[0].count,h=[];for(const g of f){const _=new Ne,m=new L,p=new Un,M=new L(1,1,1),x=new gp(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,p,M));for(const b in c)if(b==="_COLOR_0"){const y=c[b];x.instanceColor=new su(y.array,y.itemSize,y.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Ip="glTF",Ds=12,Bd={JSON:1313821514,BIN:5130562};class ky{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ds,s=new DataView(e,Ds);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Bd.JSON){const l=new Uint8Array(e,Ds+a,o);this.content=n.decode(l)}else if(c===Bd.BIN){const l=Ds+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const f=uu[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=uu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],h=ns[d.componentType];l[f]=h.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){r.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(h)},o,l,$t,d)})})}}class Hy{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vy{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Dp extends _a{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=r-t,f=(n-t)/u,d=f*f,h=d*f,g=e*l,_=g-l,m=-2*h+3*d,p=h-d,M=1-m,x=p-d+f;for(let b=0;b!==o;b++){const y=a[_+b+o],E=a[_+b+c]*u,T=a[g+b+o],C=a[g+b]*u;s[b]=M*y+x*E+m*T+p*C}return s}}const Gy=new Un;class Wy extends Dp{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Gy.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:Jt,9729:Kt,9984:Yh,9985:mo,9986:Ws,9987:zn},zd={33071:Hi,33648:To,10497:cs},Ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:ua,STEP:la},Rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ha({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),i.DefaultMaterial}function rr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xy(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],d=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Yy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ky(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cc(t.attributes):e=i.indices+":"+Cc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Cc(i.targets[n]);return e}function Cc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $y=new Ne;class Zy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new bb(this.options.manager):this.textureLoader=new Sb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ep(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return rr(s,o,r),Zn(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(Qs.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Ac[r.type],o=ns[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new Bt(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Ac[r.type],l=ns[r.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,d=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(d/h),M="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(M);x||(_=new l(o,p*h,r.count*h/u),x=new Wg(_,h/u),t.cache.add(M,x)),m=new zu(x,c,d%h/u,g)}else o===null?_=new l(r.count*c):_=new l(o,d,r.count*c),m=new Bt(_,c,g);if(r.sparse!==void 0){const p=Ac.SCALAR,M=ns[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,y=new M(a[1],x,r.sparse.count*p),E=new l(a[2],b,r.sparse.count*c);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=y.length;T<C;T++){const S=y[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=kd[d.magFilter]||Kt,u.minFilter=kd[d.minFilter]||zn,u.wrapS=zd[d.wrapS]||cs,u.wrapT=zd[d.wrapT]||cs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==Kt,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,d(m)}),t.load(Qs.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Zn(f,a),f.userData.mimeType=a.mimeType||Jy(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _p,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new bp,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ha}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const f=r[Je.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Pt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=sn);const u=s.alphaMode||Rc.OPAQUE;if(u===Rc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Rc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ii&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==ii&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ii){const f=s.emissiveFactor;o.emissive=new Oe().setRGB(f[0],f[1],f[2],$t)}return s.emissiveTexture!==void 0&&a!==ii&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(l).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Zn(f,s),t.associations.set(f,{materials:e}),s.extensions&&rr(r,f,s),f})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=Ky(l),f=r[u];if(f)a.push(f.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=Hd(new ln,l,t),r[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?jy(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=a[h];let p;const M=l[h];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new jg(_,M):new gt(_,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Od(p.geometry,np):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Od(p.geometry,iu));else if(m.mode===Mn.LINES)p=new Zg(_,M);else if(m.mode===Mn.LINE_STRIP)p=new Gu(_,M);else if(m.mode===Mn.LINE_LOOP)p=new Qg(_,M);else if(m.mode===Mn.POINTS)p=new xp(_,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Yy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Zn(p,s),m.extensions&&rr(r,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&rr(r,f[0],s),f[0];const d=new En;s.extensions&&rr(r,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(In.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Xu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const f=a[l];if(f){o.push(f);const d=new Ne;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Hu(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const h=r.channels[f],g=r.samplers[h.sampler],_=h.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,M=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let x=0,b=d.length;x<b;x++){const y=d[x],E=h[x],T=g[x],C=_[x],S=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const v=n._createAnimationTracks(y,E,T,C,S);if(v)for(let w=0;w<v.length;w++)p.push(v[w])}const M=new ub(s,void 0,p);return Zn(M,r),M})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],f=l[1],d=l[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,$y)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new pp:l.length>1?u=new En:l.length===1?u=l[0]:u=new bt,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=a),Zn(u,s),s.extensions&&rr(n,u,s),s.matrix!==void 0){const f=new Ne;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!r.associations.has(u))r.associations.set(u,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(u);r.associations.set(u,{...f})}return r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new En;n.name&&(s.name=r.createUniqueName(n.name)),Zn(s,n),n.extensions&&rr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const l=u=>{const f=new Map;for(const[d,h]of r.associations)(d instanceof Wn||d instanceof It)&&f.set(d,h);return u.traverse(d=>{const h=r.associations.get(d);h!=null&&f.set(d,h)}),f};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];Ii[s.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ii[s.path]){case Ii.weights:l=fs;break;case Ii.rotation:l=ds;break;case Ii.translation:case Ii.scale:l=hs;break;default:switch(n.itemSize){case 1:l=fs;break;case 2:case 3:default:l=hs;break}break}const u=r.interpolation!==void 0?qy[r.interpolation]:ua,f=this._getArrayFromAccessor(n);for(let d=0,h=c.length;d<h;d++){const g=new l(c[d]+"."+Ii[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fu(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ds?Wy:Dp;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qy(i,e,t){const n=e.attributes,r=new nt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const u=fu(ns[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=fu(ns[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Yn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Hd(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=uu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Qe.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Zn(i,e),Qy(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Xy(i,e.targets,t):i})}class eM extends hp{constructor(){super();const e=new br;e.deleteAttribute("uv");const t=new ha({side:qt}),n=new ha,r=new wp(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new gp(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new gt(e,zr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new gt(e,zr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new gt(e,zr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new gt(e,zr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new gt(e,zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new gt(e,zr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function zr(i){return new tb({color:0,emissive:16777215,emissiveIntensity:i})}const Up=0,tM=1,nM=2,Vd=2,Pc=1.25,Gd=1,ea=32,Oo=65535,iM=Math.pow(2,-24),Lc=Symbol("SKIP_GENERATION");function rM(i){return i.index?i.index.count:i.attributes.position.count}function Ki(i){return rM(i)/3}function sM(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function aM(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=sM(t,n);i.setIndex(new Bt(r,1));for(let s=0;s<t;s++)r[s]=s}}function Np(i,e){const t=Ki(i),n=e||i.drawRange,r=n.start/3,s=(n.start+n.count)/3,a=Math.max(0,r),o=Math.min(t,s)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Fp(i,e){if(!i.groups||!i.groups.length)return Np(i,e);const t=[],n=new Set,r=e||i.drawRange,s=r.start/3,a=(r.start+r.count)/3;for(const c of i.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(s,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(u-l)})}return t}function oM(i,e){const t=Ki(i),n=Fp(i,e).sort((a,o)=>a.offset-o.offset),r=n[n.length-1];r.count=Math.min(t-r.offset,r.count);let s=0;return n.forEach(({count:a})=>s+=a),t!==s}function Ic(i,e,t,n,r){let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,d=1/0,h=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=e*6,M=(e+t)*6;p<M;p+=6){const x=i[p+0],b=i[p+1],y=x-b,E=x+b;y<s&&(s=y),E>c&&(c=E),x<f&&(f=x),x>g&&(g=x);const T=i[p+2],C=i[p+3],S=T-C,v=T+C;S<a&&(a=S),v>l&&(l=v),T<d&&(d=T),T>_&&(_=T);const w=i[p+4],A=i[p+5],I=w-A,D=w+A;I<o&&(o=I),D>u&&(u=D),w<h&&(h=w),w>m&&(m=w)}n[0]=s,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,r[0]=f,r[1]=d,r[2]=h,r[3]=g,r[4]=_,r[5]=m}function cM(i,e=null,t=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,a=Ki(i),o=r.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=r.array,u=r.offset||0;let f=3;r.isInterleavedBufferAttribute&&(f=r.data.stride);const d=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,_=h*6;let m=g+0,p=g+1,M=g+2;s&&(m=s[m],p=s[p],M=s[M]),o||(m=m*f+u,p=p*f+u,M=M*f+u);for(let x=0;x<3;x++){let b,y,E;o?(b=r[d[x]](m),y=r[d[x]](p),E=r[d[x]](M)):(b=l[m+x],y=l[p+x],E=l[M+x]);let T=b;y<T&&(T=y),E<T&&(T=E);let C=b;y>C&&(C=y),E>C&&(C=E);const S=(C-T)/2,v=x*2;c[_+v+0]=T+S,c[_+v+1]=S+(Math.abs(T)+S)*iM}}return c}function Tt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Wd(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>t&&(t=r,e=n)}return e}function qd(i,e){e.set(i)}function jd(i,e,t){let n,r;for(let s=0;s<3;s++){const a=s+3;n=i[s],r=e[s],t[s]=n<r?n:r,n=i[a],r=e[a],t[a]=n>r?n:r}}function $a(i,e,t){for(let n=0;n<3;n++){const r=e[i+2*n],s=e[i+2*n+1],a=r-s,o=r+s;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Us(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const bi=32,lM=(i,e)=>i.candidate-e.candidate,Di=new Array(bi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Za=new Float32Array(6);function uM(i,e,t,n,r,s){let a=-1,o=0;if(s===Up)a=Wd(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===tM)a=Wd(i),a!==-1&&(o=fM(t,n,r,a));else if(s===nM){const c=Us(i);let l=Pc*r;const u=n*6,f=(n+r)*6;for(let d=0;d<3;d++){const h=e[d],m=(e[d+3]-h)/bi;if(r<bi/4){const p=[...Di];p.length=r;let M=0;for(let b=u;b<f;b+=6,M++){const y=p[M];y.candidate=t[b+2*d],y.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:C}=y;for(let S=0;S<3;S++)C[S]=1/0,C[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;$a(b,t,E)}p.sort(lM);let x=r;for(let b=0;b<x;b++){const y=p[b];for(;b+1<x&&p[b+1].candidate===y.candidate;)p.splice(b+1,1),x--}for(let b=u;b<f;b+=6){const y=t[b+2*d];for(let E=0;E<x;E++){const T=p[E];y>=T.candidate?$a(b,t,T.rightCacheBounds):($a(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<x;b++){const y=p[b],E=y.count,T=r-y.count,C=y.leftCacheBounds,S=y.rightCacheBounds;let v=0;E!==0&&(v=Us(C)/c);let w=0;T!==0&&(w=Us(S)/c);const A=Gd+Pc*(v*E+w*T);A<l&&(a=d,l=A,o=y.candidate)}}else{for(let x=0;x<bi;x++){const b=Di[x];b.count=0,b.candidate=h+m+x*m;const y=b.bounds;for(let E=0;E<3;E++)y[E]=1/0,y[E+3]=-1/0}for(let x=u;x<f;x+=6){let E=~~((t[x+2*d]-h)/m);E>=bi&&(E=bi-1);const T=Di[E];T.count++,$a(x,t,T.bounds)}const p=Di[bi-1];qd(p.bounds,p.rightCacheBounds);for(let x=bi-2;x>=0;x--){const b=Di[x],y=Di[x+1];jd(b.bounds,y.rightCacheBounds,b.rightCacheBounds)}let M=0;for(let x=0;x<bi-1;x++){const b=Di[x],y=b.count,E=b.bounds,C=Di[x+1].rightCacheBounds;y!==0&&(M===0?qd(E,Za):jd(E,Za,Za)),M+=y;let S=0,v=0;M!==0&&(S=Us(Za)/c);const w=r-M;w!==0&&(v=Us(C)/c);const A=Gd+Pc*(S*M+v*w);A<l&&(a=d,l=A,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function fM(i,e,t,n){let r=0;for(let s=e,a=e+t;s<a;s++)r+=i[s*6+n*2];return r/t}class Dc{constructor(){this.boundingData=new Float32Array(6)}}function dM(i,e,t,n,r,s){let a=n,o=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=e[a*3+u];e[a*3+u]=e[o*3+u],e[o*3+u]=f}for(let u=0;u<6;u++){let f=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=f}a++,o--}else return a}}function hM(i,e,t,n,r,s){let a=n,o=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let u=i[a];i[a]=i[o],i[o]=u;for(let f=0;f<6;f++){let d=t[a*6+f];t[a*6+f]=t[o*6+f],t[o*6+f]=d}a++,o--}else return a}}function an(i,e){return e[i+15]===65535}function mn(i,e){return e[i+6]}function Tn(i,e){return e[i+14]}function wn(i){return i+8}function An(i,e){return e[i+6]}function Op(i,e){return e[i+7]}let Bp,js,yo,kp;const pM=Math.pow(2,32);function du(i){return"count"in i?1:1+du(i.left)+du(i.right)}function mM(i,e,t){return Bp=new Float32Array(t),js=new Uint32Array(t),yo=new Uint16Array(t),kp=new Uint8Array(t),hu(i,e)}function hu(i,e){const t=i/4,n=i/2,r="count"in e,s=e.boundingData;for(let a=0;a<6;a++)Bp[t+a]=s[a];if(r)if(e.buffer){const a=e.buffer;kp.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=ea){const l=o/2;an(l,yo)||(js[o/4+6]+=t)}return i+a.byteLength}else{const a=e.offset,o=e.count;return js[t+6]=a,yo[n+14]=o,yo[n+15]=Oo,i+ea}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=hu(i+ea,a),l/4>pM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return js[t+6]=l/4,l=hu(l,o),js[t+7]=c,l}}function gM(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,r=n?4:2,s=e?new SharedArrayBuffer(t*r):new ArrayBuffer(t*r),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function bM(i,e,t,n,r){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=r,f=i._indirectBuffer,d=i.geometry,h=d.index?d.index.array:null,g=u?hM:dM,_=Ki(d),m=new Float32Array(6);let p=!1;const M=new Dc;return Ic(e,t,n,M.boundingData,m),b(M,t,n,m),M;function x(y){l&&l(y/_)}function b(y,E,T,C=null,S=0){if(!p&&S>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),T<=o||S>=s)return x(E+T),y.offset=E,y.count=T,y;const v=uM(y.boundingData,C,e,E,T,c);if(v.axis===-1)return x(E+T),y.offset=E,y.count=T,y;const w=g(f,h,e,E,T,v);if(w===E||w===E+T)x(E+T),y.offset=E,y.count=T;else{y.splitAxis=v.axis;const A=new Dc,I=E,D=w-E;y.left=A,Ic(e,I,D,A.boundingData,m),b(A,I,D,m,S+1);const F=new Dc,O=w,G=T-D;y.right=F,Ic(e,O,G,F.boundingData,m),b(F,O,G,m,S+1)}return y}}function _M(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=gM(t,e.useSharedArrayBuffer),oM(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||aM(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Np(t,e.range),s=cM(t,null,r[0].offset,r[0].count),a=e.indirect?r:Fp(t,e.range);i._roots=a.map(o=>{const c=bM(i,s,o.offset,o.count,e),l=du(c),u=new n(ea*l);return mM(0,c,u),u})}class Ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let s=0,a=e.length;s<a;s++){const c=e[s][t];n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s],c=e.dot(o);n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}Ti.prototype.setFromBox=(function(){const i=new L;return function(t,n){const r=n.min,s=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=r.x*c+s.x*(1-c),i.y=r.y*l+s.y*(1-l),i.z=r.z*u+s.z*(1-u);const f=t.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}})();const xM=(function(){const i=new L,e=new L,t=new L;return function(r,s,a){const o=r.start,c=i,l=s.start,u=e;t.subVectors(o,l),i.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const f=t.dot(u),d=u.dot(c),h=u.dot(u),g=t.dot(c),m=c.dot(c)*h-d*d;let p,M;m!==0?p=(f*d-g*h)/m:p=0,M=(f+p*d)/h,a.x=p,a.y=M}})(),Qu=(function(){const i=new Ue,e=new L,t=new L;return function(r,s,a,o){xM(r,s,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){r.at(c,a),s.at(l,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=r.start:u=r.end;let f;l<0?f=s.start:f=s.end;const d=e,h=t;if(r.closestPointToPoint(f,!0,e),s.closestPointToPoint(u,!0,t),d.distanceToSquared(f)<=h.distanceToSquared(u)){a.copy(d),o.copy(f);return}else{a.copy(u),o.copy(h);return}}}})(),vM=(function(){const i=new L,e=new L,t=new Qn,n=new oi;return function(s,a){const{radius:o,center:c}=s,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const p=_.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),yM=["x","y","z"],_i=1e-15,Xd=_i*_i;function yn(i){return Math.abs(i)<_i}class Xn extends Lt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Ti),this.points=[this.a,this.b,this.c],this.plane=new Qn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new oi,this.needsUpdate=!0}intersectsSphere(e){return vM(e,this)}update(){const e=this.a,t=this.b,n=this.c,r=this.points,s=this.satAxes,a=this.satBounds,o=s[0],c=a[0];this.getNormal(o),c.setFromPoints(o,r);const l=s[1],u=a[1];l.subVectors(e,t),u.setFromPoints(l,r);const f=s[2],d=a[2];f.subVectors(t,n),d.setFromPoints(f,r);const h=s[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,r);const _=l.length(),m=f.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<_i?m<_i||p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<_i?p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<_i&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Xn.prototype.closestPointToSegment=(function(){const i=new L,e=new L,t=new oi;return function(r,s=null,a=null){const{start:o,end:c}=r,l=this.points;let u,f=1/0;for(let d=0;d<3;d++){const h=(d+1)%3;t.start.copy(l[d]),t.end.copy(l[h]),Qu(t,r,i,e),u=i.distanceToSquared(e),u<f&&(f=u,s&&s.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),u=o.distanceToSquared(i),u<f&&(f=u,s&&s.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,s&&s.copy(i),a&&a.copy(c)),Math.sqrt(f)}})();Xn.prototype.intersectsTriangle=(function(){const i=new Xn,e=new Ti,t=new Ti,n=new L,r=new L,s=new L,a=new L,o=new oi,c=new oi,l=new L,u=new Ue,f=new Ue;function d(x,b,y,E){const T=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?T.copy(x.plane.normal):T.copy(b.plane.normal);const C=x.satBounds,S=x.satAxes;for(let A=1;A<4;A++){const I=C[A],D=S[A];if(e.setFromPoints(D,b.points),I.isSeparated(e)||(a.copy(T).cross(D),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const v=b.satBounds,w=b.satAxes;for(let A=1;A<4;A++){const I=v[A],D=w[A];if(e.setFromPoints(D,x.points),I.isSeparated(e)||(a.crossVectors(T,D),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return y&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),y.start.set(0,0,0),y.end.set(0,0,0)),!0}function h(x,b,y,E,T,C,S,v,w,A,I){let D=S/(S-v);A.x=E+(T-E)*D,I.start.subVectors(b,x).multiplyScalar(D).add(x),D=S/(S-w),A.y=E+(C-E)*D,I.end.subVectors(y,x).multiplyScalar(D).add(x)}function g(x,b,y,E,T,C,S,v,w,A,I){if(T>0)h(x.c,x.a,x.b,E,b,y,w,S,v,A,I);else if(C>0)h(x.b,x.a,x.c,y,b,E,v,S,w,A,I);else if(v*w>0||S!=0)h(x.a,x.b,x.c,b,y,E,S,v,w,A,I);else if(v!=0)h(x.b,x.a,x.c,y,b,E,v,S,w,A,I);else if(w!=0)h(x.c,x.a,x.b,E,b,y,w,S,v,A,I);else return!0;return!1}function _(x,b,y,E){const T=b.degenerateSegment,C=x.plane.distanceToPoint(T.start),S=x.plane.distanceToPoint(T.end);return yn(C)?yn(S)?d(x,b,y,E):(y&&(y.start.copy(T.start),y.end.copy(T.start)),x.containsPoint(T.start)):yn(S)?(y&&(y.start.copy(T.end),y.end.copy(T.end)),x.containsPoint(T.end)):x.plane.intersectLine(T,n)!=null?(y&&(y.start.copy(n),y.end.copy(n)),x.containsPoint(n)):!1}function m(x,b,y){const E=b.a;return yn(x.plane.distanceToPoint(E))&&x.containsPoint(E)?(y&&(y.start.copy(E),y.end.copy(E)),!0):!1}function p(x,b,y){const E=x.degenerateSegment,T=b.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<Xd?(y&&(y.start.copy(T),y.end.copy(T)),!0):!1}function M(x,b,y,E){if(x.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const T=x.degenerateSegment,C=b.degenerateSegment,S=r,v=s;T.delta(S),C.delta(v);const w=n.subVectors(C.start,T.start),A=S.x*v.y-S.y*v.x;if(yn(A))return!1;const I=(w.x*v.y-w.y*v.x)/A,D=-(S.x*w.y-S.y*w.x)/A;if(I<0||I>1||D<0||D>1)return!1;const F=T.start.z+S.z*I,O=C.start.z+v.z*D;return yn(F-O)?(y&&(y.start.copy(T.start).addScaledVector(S,I),y.end.copy(T.start).addScaledVector(S,I)),!0):!1}else return b.isDegenerateIntoPoint?p(x,b,y):_(b,x,y,E);else{if(x.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(x.a)<Xd?(y&&(y.start.copy(x.a),y.end.copy(x.a)),!0):!1:b.isDegenerateIntoSegment?p(b,x,y):m(b,x,y);if(b.isDegenerateIntoPoint)return m(x,b,y);if(b.isDegenerateIntoSegment)return _(x,b,y,E)}}return function(b,y=null,E=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(i.copy(b),i.update(),b=i);const T=M(this,b,y,E);if(T!==void 0)return T;const C=this.plane,S=b.plane;let v=S.distanceToPoint(this.a),w=S.distanceToPoint(this.b),A=S.distanceToPoint(this.c);yn(v)&&(v=0),yn(w)&&(w=0),yn(A)&&(A=0);const I=v*w,D=v*A;if(I>0&&D>0)return!1;let F=C.distanceToPoint(b.a),O=C.distanceToPoint(b.b),G=C.distanceToPoint(b.c);yn(F)&&(F=0),yn(O)&&(O=0),yn(G)&&(G=0);const z=F*O,Z=F*G;if(z>0&&Z>0)return!1;r.copy(C.normal),s.copy(S.normal);const $=r.cross(s);let le=0,Ie=Math.abs($.x);const Ke=Math.abs($.y);Ke>Ie&&(Ie=Ke,le=1),Math.abs($.z)>Ie&&(le=2);const Be=yM[le],k=this.a[Be],j=this.b[Be],ee=this.c[Be],ge=b.a[Be],de=b.b[Be],Pe=b.c[Be];if(g(this,k,j,ee,I,D,v,w,A,u,o))return d(this,b,y,E);if(g(b,ge,de,Pe,z,Z,F,O,G,f,c))return d(this,b,y,E);if(u.y<u.x){const te=u.y;u.y=u.x,u.x=te,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(f.y<f.x){const te=f.y;f.y=f.x,f.x=te,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<f.x||f.y<u.x?!1:(y&&(f.x>u.x?y.start.copy(c.start):y.start.copy(o.start),f.y<u.y?y.end.copy(c.end):y.end.copy(o.end)),!0)}})();Xn.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Xn.prototype.distanceToTriangle=(function(){const i=new L,e=new L,t=["a","b","c"],n=new oi,r=new oi;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let d;const h=t[f],g=a[h];this.closestPointToPoint(g,i),d=g.distanceToSquared(i),d<u&&(u=d,o&&o.copy(i),c&&c.copy(g));const _=this[h];a.closestPointToPoint(_,i),d=_.distanceToSquared(i),d<u&&(u=d,o&&o.copy(_),c&&c.copy(i))}for(let f=0;f<3;f++){const d=t[f],h=t[(f+1)%3];n.set(this[d],this[h]);for(let g=0;g<3;g++){const _=t[g],m=t[(g+1)%3];r.set(a[_],a[m]),Qu(n,r,i,e);const p=i.distanceToSquared(e);p<u&&(u=p,o&&o.copy(i),c&&c.copy(e))}}return Math.sqrt(u)}})();class Qt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ne,this.invMatrix=new Ne,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Ti),this.alignedSatBounds=new Array(3).fill().map(()=>new Ti),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Qt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,r=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const d=1*l|2*u|4*f,h=r[d];h.x=l?n.x:t.x,h.y=u?n.y:t.y,h.z=f?n.z:t.z,h.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,o=r[0];for(let l=0;l<3;l++){const u=a[l],f=s[l],d=1<<l,h=r[d];u.subVectors(o,h),f.setFromPoints(u,r)}const c=this.alignedSatBounds;c[0].setFromPointsField(r,"x"),c[1].setFromPointsField(r,"y"),c[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Qt.prototype.intersectsBox=(function(){const i=new Ti;return function(t){this.needsUpdate&&this.update();const n=t.min,r=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,o[0].isSeparated(i)||(i.min=n.y,i.max=r.y,o[1].isSeparated(i))||(i.min=n.z,i.max=r.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],u=s[c];if(i.setFromBox(l,t),u.isSeparated(i))return!1}return!0}})();Qt.prototype.intersectsTriangle=(function(){const i=new Xn,e=new Array(3),t=new Ti,n=new Ti,r=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const h=o[d],g=c[d];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,u=a.satAxes,f=this.points;for(let d=0;d<3;d++){const h=l[d],g=u[d];if(t.setFromPoints(g,f),h.isSeparated(t))return!1}for(let d=0;d<3;d++){const h=c[d];for(let g=0;g<4;g++){const _=u[g];if(r.crossVectors(h,_),t.setFromPoints(r,e),n.setFromPoints(r,f),t.isSeparated(n))return!1}}return!0}})();Qt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Qt.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Qt.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new oi),t=new Array(12).fill().map(()=>new oi),n=new L,r=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(r),this.closestPointToPoint(r,n),a.closestPointToPoint(n,r),c&&c.copy(n),l&&l.copy(r)),0;const u=o*o,f=a.min,d=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];r.copy(p).clamp(f,d);const M=p.distanceToSquared(r);if(M<g&&(g=M,c&&c.copy(p),l&&l.copy(r),M<u))return Math.sqrt(M)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let M=0;M<=1;M++){const x=(m+1)%3,b=(m+2)%3,y=p<<x|M<<b,E=1<<m|p<<x|M<<b,T=h[y],C=h[E];e[_].set(T,C);const v=i[m],w=i[x],A=i[b],I=t[_],D=I.start,F=I.end;D[v]=f[v],D[w]=p?f[w]:d[w],D[A]=M?f[A]:d[w],F[v]=d[v],F[w]=p?f[w]:d[w],F[A]=M?f[A]:d[w],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let M=0;M<=1;M++){r.x=m?d.x:f.x,r.y=p?d.y:f.y,r.z=M?d.z:f.z,this.closestPointToPoint(r,n);const x=r.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(r),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=e[m];for(let M=0;M<12;M++){const x=t[M];Qu(p,x,n,r);const b=n.distanceToSquared(r);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(r),b<u))return Math.sqrt(b)}}return Math.sqrt(g)}})();class ef{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class MM extends ef{constructor(){super(()=>new Xn)}}const Rn=new MM;class SM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const _t=new SM;let Vi,Zr;const Hr=[],Qa=new ef(()=>new nt);function EM(i,e,t,n,r,s){Vi=Qa.getPrimitive(),Zr=Qa.getPrimitive(),Hr.push(Vi,Zr),_t.setBuffer(i._roots[e]);const a=pu(0,i.geometry,t,n,r,s);_t.clearBuffer(),Qa.releasePrimitive(Vi),Qa.releasePrimitive(Zr),Hr.pop(),Hr.pop();const o=Hr.length;return o>0&&(Zr=Hr[o-1],Vi=Hr[o-2]),a}function pu(i,e,t,n,r=null,s=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=_t;let u=i*2;if(an(u,c)){const g=mn(i,l),_=Tn(u,c);return Tt(i,o,Vi),n(g,_,!1,a,s+i,Vi)}else{let A=function(D){const{uint16Array:F,uint32Array:O}=_t;let G=D*2;for(;!an(G,F);)D=wn(D),G=D*2;return mn(D,O)},I=function(D){const{uint16Array:F,uint32Array:O}=_t;let G=D*2;for(;!an(G,F);)D=An(D,O),G=D*2;return mn(D,O)+Tn(G,F)};var d=A,h=I;const g=wn(i),_=An(i,l);let m=g,p=_,M,x,b,y;if(r&&(b=Vi,y=Zr,Tt(m,o,b),Tt(p,o,y),M=r(b),x=r(y),x<M)){m=_,p=g;const D=M;M=x,x=D,b=y}b||(b=Vi,Tt(m,o,b));const E=an(m*2,c),T=t(b,E,M,a+1,s+m);let C;if(T===Vd){const D=A(m),O=I(m)-D;C=n(D,O,!0,a+1,s+m,b)}else C=T&&pu(m,e,t,n,r,s,a+1);if(C)return!0;y=Zr,Tt(p,o,y);const S=an(p*2,c),v=t(y,S,x,a+1,s+p);let w;if(v===Vd){const D=A(p),O=I(p)-D;w=n(D,O,!0,a+1,s+p,y)}else w=v&&pu(p,e,t,n,r,s,a+1);return!!w}}const Ns=new L,Uc=new L;function TM(i,e,t={},n=0,r=1/0){const s=n*n,a=r*r;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Ns.copy(e).clamp(u.min,u.max),Ns.distanceToSquared(e)),intersectsBounds:(u,f,d)=>d<o&&d<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(e,Ns);const d=e.distanceToSquared(Ns);return d<o&&(Uc.copy(Ns),o=d,c=f),d<s}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Uc):t.point=Uc.clone(),t.distance=l,t.faceIndex=c,t}const eo=parseInt(ba)>=169,wM=parseInt(ba)<=161,sr=new L,ar=new L,or=new L,to=new Ue,no=new Ue,io=new Ue,Yd=new L,Kd=new L,Jd=new L,Fs=new L;function AM(i,e,t,n,r,s,a,o){let c;if(s===qt?c=i.intersectTriangle(n,t,e,!0,r):c=i.intersectTriangle(e,t,n,s!==sn,r),c===null)return null;const l=i.origin.distanceTo(r);return l<a||l>o?null:{distance:l,point:r.clone()}}function RM(i,e,t,n,r,s,a,o,c,l,u){sr.fromBufferAttribute(e,s),ar.fromBufferAttribute(e,a),or.fromBufferAttribute(e,o);const f=AM(i,sr,ar,or,Fs,c,l,u);if(f){if(n){to.fromBufferAttribute(n,s),no.fromBufferAttribute(n,a),io.fromBufferAttribute(n,o),f.uv=new Ue;const h=Lt.getInterpolation(Fs,sr,ar,or,to,no,io,f.uv);eo||(f.uv=h)}if(r){to.fromBufferAttribute(r,s),no.fromBufferAttribute(r,a),io.fromBufferAttribute(r,o),f.uv1=new Ue;const h=Lt.getInterpolation(Fs,sr,ar,or,to,no,io,f.uv1);eo||(f.uv1=h),wM&&(f.uv2=f.uv1)}if(t){Yd.fromBufferAttribute(t,s),Kd.fromBufferAttribute(t,a),Jd.fromBufferAttribute(t,o),f.normal=new L;const h=Lt.getInterpolation(Fs,sr,ar,or,Yd,Kd,Jd,f.normal);f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1),eo||(f.normal=h)}const d={a:s,b:a,c:o,normal:new L,materialIndex:0};if(Lt.getNormal(sr,ar,or,d.normal),f.face=d,f.faceIndex=s,eo){const h=new L;Lt.getBarycoord(Fs,sr,ar,or,h),f.barycoord=h}}return f}function Bo(i,e,t,n,r,s,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));const{position:d,normal:h,uv:g,uv1:_}=i.attributes,m=RM(t,d,h,g,_,c,l,u,e,s,a);return m?(m.faceIndex=n,r&&r.push(m),m):null}function Rt(i,e,t,n){const r=i.a,s=i.b,a=i.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),r.x=n.getX(o),r.y=n.getY(o),r.z=n.getZ(o),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function CM(i,e,t,n,r,s,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+r;u<f;u++)Bo(c,e,t,u,s,a,o)}function PM(i,e,t,n,r,s,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,d=n+r;f<d;f++){let h;h=Bo(o,e,t,f,null,s,a),h&&h.distance<l&&(u=h,l=h.distance)}return u}function LM(i,e,t,n,r,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=i,f=e+i;u<f;u++){let d;if(d=u,Rt(a,d*3,c,l),a.needsUpdate=!0,n(a,d,r,s))return!0}return!1}function IM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,a,o,c,l=0;const u=i._roots;for(let d=0,h=u.length;d<h;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),f(0,l),l+=s.byteLength;function f(d,h,g=!1){const _=d*2;if(o[_+15]===Oo){const p=a[d+6],M=o[_+14];let x=1/0,b=1/0,y=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=3*p,v=3*(p+M);S<v;S++){let w=n[S];const A=r.getX(w),I=r.getY(w),D=r.getZ(w);A<x&&(x=A),A>E&&(E=A),I<b&&(b=I),I>T&&(T=I),D<y&&(y=D),D>C&&(C=D)}return c[d+0]!==x||c[d+1]!==b||c[d+2]!==y||c[d+3]!==E||c[d+4]!==T||c[d+5]!==C?(c[d+0]=x,c[d+1]=b,c[d+2]=y,c[d+3]=E,c[d+4]=T,c[d+5]=C,!0):!1}else{const p=d+8,M=a[d+6],x=p+h,b=M+h;let y=g,E=!1,T=!1;e?y||(E=e.has(x),T=e.has(b),y=!E&&!T):(E=!0,T=!0);const C=y||E,S=y||T;let v=!1;C&&(v=f(p,h,y));let w=!1;S&&(w=f(M,h,y));const A=v||w;if(A)for(let I=0;I<3;I++){const D=p+I,F=M+I,O=c[D],G=c[D+3],z=c[F],Z=c[F+3];c[d+I]=O<z?O:z,c[d+I+3]=G>Z?G:Z}return A}}}function Xi(i,e,t,n,r){let s,a,o,c,l,u;const f=1/t.direction.x,d=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,_=t.origin.y,m=t.origin.z;let p=e[i],M=e[i+3],x=e[i+1],b=e[i+3+1],y=e[i+2],E=e[i+3+2];return f>=0?(s=(p-g)*f,a=(M-g)*f):(s=(M-g)*f,a=(p-g)*f),d>=0?(o=(x-_)*d,c=(b-_)*d):(o=(b-_)*d,c=(x-_)*d),s>c||o>a||((o>s||isNaN(s))&&(s=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(y-m)*h,u=(E-m)*h):(l=(E-m)*h,u=(y-m)*h),s>u||l>a)?!1:((l>s||s!==s)&&(s=l),(u<a||a!==a)&&(a=u),s<=r&&a>=n)}function DM(i,e,t,n,r,s,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+r;u<f;u++){let d=l?l[u]:u;Bo(c,e,t,d,s,a,o)}}function UM(i,e,t,n,r,s,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,u=null;for(let f=n,d=n+r;f<d;f++){let h;h=Bo(o,e,t,c?c[f]:f,null,s,a),h&&h.distance<l&&(u=h,l=h.distance)}return u}function NM(i,e,t,n,r,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=i,f=e+i;u<f;u++){let d;if(d=t.resolveTriangleIndex(u),Rt(a,d*3,c,l),a.needsUpdate=!0,n(a,d,r,s))return!0}return!1}function FM(i,e,t,n,r,s,a){_t.setBuffer(i._roots[e]),mu(0,i,t,n,r,s,a),_t.clearBuffer()}function mu(i,e,t,n,r,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,u=i*2;if(an(u,c)){const d=mn(i,l),h=Tn(u,c);CM(e,t,n,d,h,r,s,a)}else{const d=wn(i);Xi(d,o,n,s,a)&&mu(d,e,t,n,r,s,a);const h=An(i,l);Xi(h,o,n,s,a)&&mu(h,e,t,n,r,s,a)}}const OM=["x","y","z"];function BM(i,e,t,n,r,s){_t.setBuffer(i._roots[e]);const a=gu(0,i,t,n,r,s);return _t.clearBuffer(),a}function gu(i,e,t,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=i*2;if(an(l,o)){const f=mn(i,c),d=Tn(l,o);return PM(e,t,n,f,d,r,s)}else{const f=Op(i,c),d=OM[f],g=n.direction[d]>=0;let _,m;g?(_=wn(i),m=An(i,c)):(_=An(i,c),m=wn(i));const M=Xi(_,a,n,r,s)?gu(_,e,t,n,r,s):null;if(M){const y=M.point[d];if(g?y<=a[m+f]:y>=a[m+f+3])return M}const b=Xi(m,a,n,r,s)?gu(m,e,t,n,r,s):null;return M&&b?M.distance<=b.distance?M:b:M||b||null}}const ro=new nt,Vr=new Xn,Gr=new Xn,Os=new Ne,$d=new Qt,so=new Qt;function kM(i,e,t,n){_t.setBuffer(i._roots[e]);const r=bu(0,i,t,n);return _t.clearBuffer(),r}function bu(i,e,t,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),$d.set(t.boundingBox.min,t.boundingBox.max,n),r=$d),an(c,a)){const u=e.geometry,f=u.index,d=u.attributes.position,h=t.index,g=t.attributes.position,_=mn(i,o),m=Tn(c,a);if(Os.copy(n).invert(),t.boundsTree)return Tt(i,s,so),so.matrix.copy(Os),so.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>so.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let x=_*3,b=(m+_)*3;x<b;x+=3)if(Rt(Gr,x,f,d),Gr.needsUpdate=!0,M.intersectsTriangle(Gr))return!0;return!1}});{const p=Ki(t);for(let M=_*3,x=(m+_)*3;M<x;M+=3){Rt(Vr,M,f,d),Vr.a.applyMatrix4(Os),Vr.b.applyMatrix4(Os),Vr.c.applyMatrix4(Os),Vr.needsUpdate=!0;for(let b=0,y=p*3;b<y;b+=3)if(Rt(Gr,b,h,g),Gr.needsUpdate=!0,Vr.intersectsTriangle(Gr))return!0}}}else{const u=i+8,f=o[i+6];return Tt(u,s,ro),!!(r.intersectsBox(ro)&&bu(u,e,t,n,r)||(Tt(f,s,ro),r.intersectsBox(ro)&&bu(f,e,t,n,r)))}}const ao=new Ne,Nc=new Qt,Bs=new Qt,zM=new L,HM=new L,VM=new L,GM=new L;function WM(i,e,t,n={},r={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Nc.set(e.boundingBox.min,e.boundingBox.max,t),Nc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,f=e.index,d=Rn.getPrimitive(),h=Rn.getPrimitive();let g=zM,_=HM,m=null,p=null;r&&(m=VM,p=GM);let M=1/0,x=null,b=null;return ao.copy(t).invert(),Bs.matrix.copy(ao),i.shapecast({boundsTraverseOrder:y=>Nc.distanceToBox(y),intersectsBounds:(y,E,T)=>T<M&&T<a?(E&&(Bs.min.copy(y.min),Bs.max.copy(y.max),Bs.needsUpdate=!0),!0):!1,intersectsRange:(y,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>Bs.distanceToBox(C),intersectsBounds:(C,S,v)=>v<M&&v<a,intersectsRange:(C,S)=>{for(let v=C,w=C+S;v<w;v++){Rt(h,3*v,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let A=y,I=y+E;A<I;A++){Rt(d,3*A,l,c),d.needsUpdate=!0;const D=d.distanceToTriangle(h,g,m);if(D<M&&(_.copy(g),p&&p.copy(m),M=D,x=A,b=v),D<s)return!0}}}});{const T=Ki(e);for(let C=0,S=T;C<S;C++){Rt(h,3*C,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let v=y,w=y+E;v<w;v++){Rt(d,3*v,l,c),d.needsUpdate=!0;const A=d.distanceToTriangle(h,g,m);if(A<M&&(_.copy(g),p&&p.copy(m),M=A,x=v,b=C),A<s)return!0}}}}}),Rn.releasePrimitive(d),Rn.releasePrimitive(h),M===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=M,n.faceIndex=x,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(ao),_.applyMatrix4(ao),r.distance=_.sub(r.point).length(),r.faceIndex=b),n)}function qM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,a,o,c,l=0;const u=i._roots;for(let d=0,h=u.length;d<h;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),f(0,l),l+=s.byteLength;function f(d,h,g=!1){const _=d*2;if(o[_+15]===Oo){const p=a[d+6],M=o[_+14];let x=1/0,b=1/0,y=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=p,v=p+M;S<v;S++){const w=3*i.resolveTriangleIndex(S);for(let A=0;A<3;A++){let I=w+A;I=n?n[I]:I;const D=r.getX(I),F=r.getY(I),O=r.getZ(I);D<x&&(x=D),D>E&&(E=D),F<b&&(b=F),F>T&&(T=F),O<y&&(y=O),O>C&&(C=O)}}return c[d+0]!==x||c[d+1]!==b||c[d+2]!==y||c[d+3]!==E||c[d+4]!==T||c[d+5]!==C?(c[d+0]=x,c[d+1]=b,c[d+2]=y,c[d+3]=E,c[d+4]=T,c[d+5]=C,!0):!1}else{const p=d+8,M=a[d+6],x=p+h,b=M+h;let y=g,E=!1,T=!1;e?y||(E=e.has(x),T=e.has(b),y=!E&&!T):(E=!0,T=!0);const C=y||E,S=y||T;let v=!1;C&&(v=f(p,h,y));let w=!1;S&&(w=f(M,h,y));const A=v||w;if(A)for(let I=0;I<3;I++){const D=p+I,F=M+I,O=c[D],G=c[D+3],z=c[F],Z=c[F+3];c[d+I]=O<z?O:z,c[d+I+3]=G>Z?G:Z}return A}}}function jM(i,e,t,n,r,s,a){_t.setBuffer(i._roots[e]),_u(0,i,t,n,r,s,a),_t.clearBuffer()}function _u(i,e,t,n,r,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,u=i*2;if(an(u,c)){const d=mn(i,l),h=Tn(u,c);DM(e,t,n,d,h,r,s,a)}else{const d=wn(i);Xi(d,o,n,s,a)&&_u(d,e,t,n,r,s,a);const h=An(i,l);Xi(h,o,n,s,a)&&_u(h,e,t,n,r,s,a)}}const XM=["x","y","z"];function YM(i,e,t,n,r,s){_t.setBuffer(i._roots[e]);const a=xu(0,i,t,n,r,s);return _t.clearBuffer(),a}function xu(i,e,t,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=i*2;if(an(l,o)){const f=mn(i,c),d=Tn(l,o);return UM(e,t,n,f,d,r,s)}else{const f=Op(i,c),d=XM[f],g=n.direction[d]>=0;let _,m;g?(_=wn(i),m=An(i,c)):(_=An(i,c),m=wn(i));const M=Xi(_,a,n,r,s)?xu(_,e,t,n,r,s):null;if(M){const y=M.point[d];if(g?y<=a[m+f]:y>=a[m+f+3])return M}const b=Xi(m,a,n,r,s)?xu(m,e,t,n,r,s):null;return M&&b?M.distance<=b.distance?M:b:M||b||null}}const oo=new nt,Wr=new Xn,qr=new Xn,ks=new Ne,Zd=new Qt,co=new Qt;function KM(i,e,t,n){_t.setBuffer(i._roots[e]);const r=vu(0,i,t,n);return _t.clearBuffer(),r}function vu(i,e,t,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),Zd.set(t.boundingBox.min,t.boundingBox.max,n),r=Zd),an(c,a)){const u=e.geometry,f=u.index,d=u.attributes.position,h=t.index,g=t.attributes.position,_=mn(i,o),m=Tn(c,a);if(ks.copy(n).invert(),t.boundsTree)return Tt(i,s,co),co.matrix.copy(ks),co.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>co.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let x=_,b=m+_;x<b;x++)if(Rt(qr,3*e.resolveTriangleIndex(x),f,d),qr.needsUpdate=!0,M.intersectsTriangle(qr))return!0;return!1}});{const p=Ki(t);for(let M=_,x=m+_;M<x;M++){const b=e.resolveTriangleIndex(M);Rt(Wr,3*b,f,d),Wr.a.applyMatrix4(ks),Wr.b.applyMatrix4(ks),Wr.c.applyMatrix4(ks),Wr.needsUpdate=!0;for(let y=0,E=p*3;y<E;y+=3)if(Rt(qr,y,h,g),qr.needsUpdate=!0,Wr.intersectsTriangle(qr))return!0}}}else{const u=i+8,f=o[i+6];return Tt(u,s,oo),!!(r.intersectsBox(oo)&&vu(u,e,t,n,r)||(Tt(f,s,oo),r.intersectsBox(oo)&&vu(f,e,t,n,r)))}}const lo=new Ne,Fc=new Qt,zs=new Qt,JM=new L,$M=new L,ZM=new L,QM=new L;function eS(i,e,t,n={},r={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Fc.set(e.boundingBox.min,e.boundingBox.max,t),Fc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,f=e.index,d=Rn.getPrimitive(),h=Rn.getPrimitive();let g=JM,_=$M,m=null,p=null;r&&(m=ZM,p=QM);let M=1/0,x=null,b=null;return lo.copy(t).invert(),zs.matrix.copy(lo),i.shapecast({boundsTraverseOrder:y=>Fc.distanceToBox(y),intersectsBounds:(y,E,T)=>T<M&&T<a?(E&&(zs.min.copy(y.min),zs.max.copy(y.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(y,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:C=>zs.distanceToBox(C),intersectsBounds:(C,S,v)=>v<M&&v<a,intersectsRange:(C,S)=>{for(let v=C,w=C+S;v<w;v++){const A=T.resolveTriangleIndex(v);Rt(h,3*A,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let I=y,D=y+E;I<D;I++){const F=i.resolveTriangleIndex(I);Rt(d,3*F,l,c),d.needsUpdate=!0;const O=d.distanceToTriangle(h,g,m);if(O<M&&(_.copy(g),p&&p.copy(m),M=O,x=I,b=v),O<s)return!0}}}})}else{const T=Ki(e);for(let C=0,S=T;C<S;C++){Rt(h,3*C,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let v=y,w=y+E;v<w;v++){const A=i.resolveTriangleIndex(v);Rt(d,3*A,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(h,g,m);if(I<M&&(_.copy(g),p&&p.copy(m),M=I,x=v,b=C),I<s)return!0}}}}}),Rn.releasePrimitive(d),Rn.releasePrimitive(h),M===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=M,n.faceIndex=x,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(lo),_.applyMatrix4(lo),r.distance=_.sub(r.point).length(),r.faceIndex=b),n)}function tS(){return typeof SharedArrayBuffer<"u"}const ta=new _t.constructor,Po=new _t.constructor,Bi=new ef(()=>new nt),jr=new nt,Xr=new nt,Oc=new nt,Bc=new nt;let kc=!1;function nS(i,e,t,n){if(kc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");kc=!0;const r=i._roots,s=e._roots;let a,o=0,c=0;const l=new Ne().copy(t).invert();for(let u=0,f=r.length;u<f;u++){ta.setBuffer(r[u]),c=0;const d=Bi.getPrimitive();Tt(0,ta.float32Array,d),d.applyMatrix4(l);for(let h=0,g=s.length;h<g&&(Po.setBuffer(s[h]),a=Bn(0,0,t,l,n,o,c,0,0,d),Po.clearBuffer(),c+=s[h].length,!a);h++);if(Bi.releasePrimitive(d),ta.clearBuffer(),o+=r[u].length,a)break}return kc=!1,a}function Bn(i,e,t,n,r,s=0,a=0,o=0,c=0,l=null,u=!1){let f,d;u?(f=Po,d=ta):(f=ta,d=Po);const h=f.float32Array,g=f.uint32Array,_=f.uint16Array,m=d.float32Array,p=d.uint32Array,M=d.uint16Array,x=i*2,b=e*2,y=an(x,_),E=an(b,M);let T=!1;if(E&&y)u?T=r(mn(e,p),Tn(e*2,M),mn(i,g),Tn(i*2,_),c,a+e,o,s+i):T=r(mn(i,g),Tn(i*2,_),mn(e,p),Tn(e*2,M),o,s+i,c,a+e);else if(E){const C=Bi.getPrimitive();Tt(e,m,C),C.applyMatrix4(t);const S=wn(i),v=An(i,g);Tt(S,h,jr),Tt(v,h,Xr);const w=C.intersectsBox(jr),A=C.intersectsBox(Xr);T=w&&Bn(e,S,n,t,r,a,s,c,o+1,C,!u)||A&&Bn(e,v,n,t,r,a,s,c,o+1,C,!u),Bi.releasePrimitive(C)}else{const C=wn(e),S=An(e,p);Tt(C,m,Oc),Tt(S,m,Bc);const v=l.intersectsBox(Oc),w=l.intersectsBox(Bc);if(v&&w)T=Bn(i,C,t,n,r,s,a,o,c+1,l,u)||Bn(i,S,t,n,r,s,a,o,c+1,l,u);else if(v)if(y)T=Bn(i,C,t,n,r,s,a,o,c+1,l,u);else{const A=Bi.getPrimitive();A.copy(Oc).applyMatrix4(t);const I=wn(i),D=An(i,g);Tt(I,h,jr),Tt(D,h,Xr);const F=A.intersectsBox(jr),O=A.intersectsBox(Xr);T=F&&Bn(C,I,n,t,r,a,s,c,o+1,A,!u)||O&&Bn(C,D,n,t,r,a,s,c,o+1,A,!u),Bi.releasePrimitive(A)}else if(w)if(y)T=Bn(i,S,t,n,r,s,a,o,c+1,l,u);else{const A=Bi.getPrimitive();A.copy(Bc).applyMatrix4(t);const I=wn(i),D=An(i,g);Tt(I,h,jr),Tt(D,h,Xr);const F=A.intersectsBox(jr),O=A.intersectsBox(Xr);T=F&&Bn(S,I,n,t,r,a,s,c,o+1,A,!u)||O&&Bn(S,D,n,t,r,a,s,c,o+1,A,!u),Bi.releasePrimitive(A)}}return T}const uo=new Qt,Qd=new nt,iS={strategy:Up,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class tf{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,r=e._roots,s=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:r.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:r,index:a?a.array:null,indirectBuffer:s},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:a}=e,o=new tf(t,{...n,[Lc]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new Bt(e.index,1,!1);t.setIndex(l)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...iS,[Lc]:!1},t),t.useSharedArrayBuffer&&!tS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Lc]||(_M(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new nt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?qM:IM)(this,e)}traverse(e,t=0){const n=this._roots[t],r=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=s[l+15]===Oo;if(u){const f=r[o+6],d=s[l+14];e(c,u,new Float32Array(n,o*4,6),f,d)}else{const f=o+ea/4,d=r[o+6],h=r[o+7];e(c,u,new Float32Array(n,o*4,6),h)||(a(f,c+1),a(d,c+1))}}}raycast(e,t=Ln,n=0,r=1/0){const s=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),u=a.groups,f=c?t.side:t,d=this.indirect?jM:FM;for(let h=0,g=s.length;h<g;h++){const _=l?t[u[h].materialIndex].side:f,m=o.length;if(d(this,h,_,e,o,n,r),l){const p=u[h].materialIndex;for(let M=m,x=o.length;M<x;M++)o[M].face.materialIndex=p}}return o}raycastFirst(e,t=Ln,n=0,r=1/0){const s=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const u=a.groups,f=o?t.side:t,d=this.indirect?YM:BM;for(let h=0,g=s.length;h<g;h++){const _=c?t[u[h].materialIndex].side:f,m=d(this,h,_,e,n,r);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const r=this._roots,s=this.indirect?KM:kM;for(let a=0,o=r.length;a<o&&(n=s(this,a,e,t),!n);a++);return n}shapecast(e){const t=Rn.getPrimitive(),n=this.indirect?NM:LM;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const f=a;a=(d,h,g,_,m)=>f(d,h,g,_,m)?!0:n(d,h,this,o,g,_,t)}else a||(o?a=(f,d,h,g)=>n(f,d,this,o,h,g,t):a=(f,d,h)=>h);let c=!1,l=0;const u=this._roots;for(let f=0,d=u.length;f<d;f++){const h=u[f];if(c=EM(this,f,s,a,r,l),c)break;l+=h.byteLength}return Rn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const a=Rn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Rt(a,_*3,o,c)}:g=>{Rt(a,g*3,o,c)},u=Rn.getPrimitive(),f=e.geometry.index,d=e.geometry.attributes.position,h=e.indirect?g=>{const _=e.resolveTriangleIndex(g);Rt(u,_*3,f,d)}:g=>{Rt(u,g*3,f,d)};if(s){const g=(_,m,p,M,x,b,y,E)=>{for(let T=p,C=p+M;T<C;T++){h(T),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let S=_,v=_+m;S<v;S++)if(l(S),a.needsUpdate=!0,s(a,u,S,T,x,b,y,E))return!0}return!1};if(r){const _=r;r=function(m,p,M,x,b,y,E,T){return _(m,p,M,x,b,y,E,T)?!0:g(m,p,M,x,b,y,E,T)}}else r=g}return nS(this,e,t,r)}intersectsBox(e,t){return uo.set(e.min,e.max,t),uo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>uo.intersectsBox(n),intersectsTriangle:n=>uo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},s=0,a=1/0){return(this.indirect?eS:WM)(this,e,t,n,r,s,a)}closestPointToPoint(e,t={},n=0,r=1/0){return TM(this,e,t,n,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Tt(0,new Float32Array(n),Qd),e.union(Qd)}),e}}const ri=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class rS{constructor(e){const n=e.filter(r=>r.id!=="COL_floor").map(r=>new br(...r.size).applyMatrix4(new Ne().makeRotationY(r.rotationY||0)).translate(...r.center));this.geometry=xy(n),n.forEach(r=>r.dispose()),this.bvh=new tf(this.geometry),this.radius=.25,this.velocity=new L,this.segment=new oi,this.bounds=new nt,this.onTriangle=new L,this.onCapsule=new L,this.normal=new L,this.contacts=0,this.speed=ri.speed,this.correction=new L,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:r=>r.intersectsBox(this.bounds),intersectsTriangle:r=>{if(r.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const s=r.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(s>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&r.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-s+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const r=Math.max(1,Math.ceil(n/.008333333333333333)),s=n/r;for(let a=0;a<r;a++)this.step(e,t,s)}}const yu=.36;function eh(i,e){const t=i[0]-e.center[0],n=i[1]-e.center[2],r=e.rotationY||0,s=Math.cos(r),a=Math.sin(r);return[s*t-a*n,a*t+s*n]}function th(i,e,t,n=yu){const r=eh(i,t),s=eh(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const u=s[l]-r[l];if(Math.abs(u)<1e-10){if(Math.abs(r[l])>=a[l])return!1;continue}let f=(-a[l]-r[l])/u,d=(a[l]-r[l])/u;if(f>d&&([f,d]=[d,f]),o=Math.max(o,f),c=Math.min(c,d),o>=c)return!1}return c>0&&o<1}function sS(i,e,t=.27){if(e.shape==="axial_gallery"){const[n,r]=i,s=n>=-8+t&&n<=8-t&&r>=-11&&r<=11-t,a=n>=-2.6+t&&n<=2.6-t&&r>=-22+t&&r<=-11;return s||a}return Math.abs(i[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(i[0])+.5*Math.abs(i[1])<=e.apothem-t}function zp(i,e,t){const n=[i[0],i[2]],r=[e[0],e[2]],s=t.colliders.filter(d=>d.id!=="COL_floor"),a=(d,h)=>!s.some(g=>th(d,h,g,.27));if(a(n,r))return[[...e]];const o=[n,r];for(const d of s){const h=Math.cos(d.rotationY||0),g=Math.sin(d.rotationY||0);for(const _ of[-1,1])for(const m of[-1,1]){const p=_*(d.size[0]/2+yu),M=m*(d.size[2]/2+yu),x=[d.center[0]+h*p+g*M,d.center[2]-g*p+h*M];sS(x,t.layout)&&!s.some(b=>th(x,x,b,.27))&&o.push(x)}}const c=o.map(()=>1/0),l=o.map(()=>-1),u=new Set;for(c[0]=0;u.size<o.length;){let d=-1;for(let h=0;h<o.length;h++)!u.has(h)&&(d<0||c[h]<c[d])&&(d=h);if(d<0||!Number.isFinite(c[d]))return[];if(d===1)break;u.add(d);for(let h=0;h<o.length;h++){if(u.has(h)||!a(o[d],o[h]))continue;const g=c[d]+Math.hypot(o[d][0]-o[h][0],o[d][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=d)}}const f=[];for(let d=1;d!==0;d=l[d]){if(d<0)return[];f.unshift([o[d][0],e[1],o[d][1]])}return f}class aS{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(r=>r.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const r of this.parts)r.mesh.position.x=r.closedX+r.sign*r.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class hr extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;const n=this,r=t.color!==void 0?new Oe(t.color):new Oe(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||hr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Qn,f=new L,d=new L,h=new L,g=new Ne,_=new L(0,0,-1),m=new tt,p=new L,M=new L,x=new tt,b=new Ne,y=this.camera,E=new ji(s,a,{samples:l,type:bs}),T=new bn({name:c.name!==void 0?c.name:"unspecified",uniforms:up.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=r,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(C,S,v){if(d.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(v.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,h),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(v.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(h),M.subVectors(d,_),M.reflect(f).negate(),M.add(d),y.position.copy(p),y.up.set(0,1,0),y.up.applyMatrix4(g),y.up.reflect(f),y.lookAt(M),y.far=v.far,y.updateMatrixWorld(),y.projectionMatrix.copy(v.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(y.projectionMatrix),b.multiply(y.matrixWorldInverse),b.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(y.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const A=y.projectionMatrix;x.x=(Math.sign(m.x)+A.elements[8])/A.elements[0],x.y=(Math.sign(m.y)+A.elements[9])/A.elements[5],x.z=-1,x.w=(1+A.elements[10])/A.elements[14],m.multiplyScalar(2/m.dot(x)),A.elements[2]=m.x,A.elements[6]=m.y,A.elements[10]=m.z+1-o,A.elements[14]=m.w,n.visible=!1;const I=C.getRenderTarget(),D=C.xr.enabled,F=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(S,y),C.xr.enabled=D,C.shadowMap.autoUpdate=F,C.setRenderTarget(I);const O=v.viewport;O!==void 0&&C.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}hr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function oS(i,e,t){const n={...hr.ReflectorShader,vertexShader:hr.ReflectorShader.vertexShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vUv = textureMatrix * vec4( position, 1.0 );",`vUv = textureMatrix * vec4( position, 1.0 );
vFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;`),fragmentShader:hr.ReflectorShader.fragmentShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vec4 base = texture2DProj( tDiffuse, vUv );",`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},r=new hr(new _r(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});r.name="R11 polished marble floor reflection",r.rotation.x=-Math.PI/2,r.position.set(0,.016,-5.5),r.material.transparent=!0,r.material.depthWrite=!1,r.renderOrder=1,i.add(r);const s=[],a=[],o={position:new L(1/0,1/0,1/0),quaternion:new Un,time:-1/0},c=r.onBeforeRender;r.onBeforeRender=function(u,f,d,...h){const g=performance.now();if(!(o.position.distanceToSquared(d.position)>1e-10||1-Math.abs(o.quaternion.dot(d.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(d.position),o.quaternion.copy(d.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,u,f,d,...h)}finally{a.forEach((p,M)=>p.visible=m[M])}},t.traverse(u=>{if(!u.isMesh)return;const f=Array.isArray(u.material)?u.material:[u.material];f.some(d=>d.name.toLowerCase().includes("glass"))&&a.push(u);for(const d of f){if(d.name.includes("hologram data curtain")){const h=new bn({uniforms:{pattern:{value:d.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:sn,blending:rs,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});u.material=h,u.renderOrder=3,s.push(h)}d.name.includes("cyan edge light")&&(d.color.set(358655),d.emissive.set(358655),d.emissiveIntensity=2)}});let l=0;return{reflector:r,update(u,f){if(!f){l+=u*.026;for(const d of s)d.uniforms.phase.value=l}}}}function cS(i,e,t){return i==="walk"&&(e??!t)}function lS(i){let e=null;return()=>e||(e=Promise.resolve().then(i).finally(()=>{e=null}),e)}function uS(i,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(i.rotation.order="YXZ",i.rotation.y-=e*n,i.rotation.x=In.clamp(i.rotation.x-t*n,-1.15,1.15),i.rotation.z=0,!0)}function fS(i,e){if(!Number.isFinite(i)||!Number.isFinite(e)||e<=0)return 0;const t=In.clamp(i/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function dS(i,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return i?i.id!==void 0&&i.id!==e.pointerId?null:{point:t,dx:t.x-i.x,dy:t.y-i.y}:{point:t,dx:0,dy:0}}function hS(i,e,t,n=!1){const r=Number.isFinite(e.timeStamp)?e.timeStamp:t,s={x:e.clientX,y:e.clientY,stamp:r},a={point:s,dx:0,dy:0};if((i==null?void 0:i.stamp)>r)return{...a,point:i};if(t-r>150)return s.recovery="fresh",a;if(!i)return a;const o=s.x-i.x,c=s.y-i.y;if(i.recovery){const l=Number.isFinite(e.movementX)&&Number.isFinite(e.movementY),u=Math.max(32,.5*Math.max(Math.hypot(o,c),Math.hypot(e.movementX,e.movementY))),f=!n&&l&&Math.hypot(o-e.movementX,c-e.movementY)>u;if(f&&(s.recovery="align"),i.recovery==="fresh"||f)return a}return{point:s,dx:n?e.movementX:o,dy:n?e.movementY:c}}function Hp(i,e){(e==null?void 0:e.id)!==void 0&&i.hasPointerCapture(e.id)&&i.releasePointerCapture(e.id)}function pS(i,e){return(i==null?void 0:i.id)!==void 0&&i.id===e.pointerId}function mS(i=7){let e=null,t=!1;return{down(n){n.isPrimary!==!1&&(e={id:n.pointerId,x:n.clientX,y:n.clientY,active:!0},t=!1)},move(n){!(e!=null&&e.active)||e.id!==n.pointerId||Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(t=!0)},end(n,r=!1){!(e!=null&&e.active)||e.id!==n.pointerId||(e.active=!1,r&&(t=!0))},click(n=!1){const r=t&&!n;return e=null,t=!1,r}}}function Vp(i){const e=new L(...i.position);let t,n;if(i.side==="front")t=e.clone().add(new L(0,0,i.distance||3.15)),n=new L(1,0,0);else{const c=i.side==="left"?-1:1;t=e.clone().add(new L(-c*3.15,0,0)),n=new L(0,0,c)}t.y=1.65;const r=i.lateral||1.18,s=t.clone().addScaledVector(n,-r),a=t.clone().addScaledVector(n,r),o=e.clone();return o.y=i.targetHeight??.95,{left:s,right:a,front:t,target:o}}class gS{constructor(e,{reduced:t=!1}={}){this.views=Vp(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const r=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(r,this.elapsed+Math.max(0,t));const s=In.smoothstep(this.elapsed/r,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],s),e.lookAt(this.views.target),this.elapsed>=r&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class bS{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const r=this.spec;if(this.phase==="opening")e.position.fromArray(r.outside),e.lookAt(new L(...r.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(r.walkDuration,this.elapsed+Math.max(0,n));const s=In.smoothstep(this.elapsed/r.walkDuration,0,1);e.position.lerpVectors(new L(...r.outside),new L(...r.inside),s),e.lookAt(new L(...r.lookAt)),this.elapsed>=r.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(r.inside),e.lookAt(new L(...r.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var Gp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?o(e):o(i),s,a=WebAssembly.instantiate(r,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),x=0;x<p.length;++x){var b=p.charCodeAt(x);M[x]=b>96?b-97:b>64?b-39:b+4}for(var y=0,x=0;x<p.length;++x)M[y++]=M[x]<60?n[M[x]]:(M[x]-60)*64+M[++x];return M.buffer.slice(0,y)}function c(p,M,x,b,y,E,T){var C=p.exports.sbrk,S=b+3&-4,v=C(S*y),w=C(E.length),A=new Uint8Array(p.exports.memory.buffer);A.set(E,w);var I=M(v,b,y,w,E.length);if(I==0&&T&&T(v,S,y),x.set(A.subarray(v,v+b*y)),C(v-C(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function h(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(x){var b=x.data;M.pending-=b.count,M.requests[b.id][b.action](b.value),delete M.requests[b.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([M],{type:"text/javascript"}),b=URL.createObjectURL(x),y=f.length;y<p;++y)f[y]=h(b);for(var y=p;y<f.length;++y)f[y].object.postMessage({});f.length=p,URL.revokeObjectURL(b)}function _(p,M,x,b,y){for(var E=f[0],T=1;T<f.length;++T)f[T].pending<E.pending&&(E=f[T]);return new Promise(function(C,S){var v=new Uint8Array(x),w=++d;E.pending+=p,E.requests[w]={resolve:C,reject:S},E.object.postMessage({id:w,count:p,size:M,source:v,mode:b,filter:y},[v.buffer])})}function m(p){var M=p.data;if(!M.id)return self.close();self.ready.then(function(x){try{var b=new Uint8Array(M.count*M.size);c(x,x.exports[M.mode],b,M.count,M.size,M.source,x.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:M.id,count:M.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,x,b,y){c(s,s.exports.meshopt_decodeVertexBuffer,p,M,x,b,s.exports[l[y]])},decodeIndexBuffer:function(p,M,x,b){c(s,s.exports.meshopt_decodeIndexBuffer,p,M,x,b)},decodeIndexSequence:function(p,M,x,b){c(s,s.exports.meshopt_decodeIndexSequence,p,M,x,b)},decodeGltfBuffer:function(p,M,x,b,y,E){c(s,s.exports[u[y]],p,M,x,b,s.exports[l[E]])},decodeGltfBufferAsync:function(p,M,x,b,y){return f.length>0?_(p,M,x,u[b],l[y]):a.then(function(){var E=new Uint8Array(p*M);return c(s,s.exports[u[b]],E,p,M,x,s.exports[l[y]]),E})}}})();const cr=.79,tn="/artifacts/",is=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,cr,6.6],modelDesktop:`${tn}phoenix-web-desktop.glb`,modelMobile:`${tn}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,cr,0],modelDesktop:`${tn}bronze-head-web-desktop.glb`,modelMobile:`${tn}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,cr,-6.6],modelDesktop:`${tn}cloud-mirror-web-desktop.glb`,modelMobile:`${tn}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,cr,6.6],modelDesktop:`${tn}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${tn}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,cr,0],modelDesktop:`${tn}longquan-figure-web-desktop.glb`,modelMobile:`${tn}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,cr,-6.6],modelDesktop:`${tn}pipa-figurine-web-desktop.glb`,modelMobile:`${tn}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,cr,-20.7],modelDesktop:`${tn}speechless-buddha-web-desktop.glb`,modelMobile:`${tn}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function _S(i,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);i.traverse(r=>{if(r.isMesh){r.userData.artifactId=e.artifactId;for(const s of Array.isArray(r.material)?r.material:[r.material]){s.roughness=e.roughness,s.metalness=e.metalness,s.envMapIntensity=.42;for(const a of Object.values(s))a!=null&&a.isTexture&&(a.magFilter=Kt,a.minFilter=zn,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function xS(i,e){const t=new En;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new En;n.rotation.y=e.rotationY,n.add(i),t.add(n),t.updateMatrixWorld(!0);const r=new nt().setFromObject(n,!0),s=r.getSize(new L);if(r.isEmpty()||s.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/s.y,e.maxWidth/Math.max(s.x,s.z)),o=r.getCenter(new L);n.scale.setScalar(a),n.position.set(-o.x*a,-r.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new nt().setFromObject(t,!0);let l=0,u=0;return t.traverse(f=>{var d;f.isMesh&&(f.userData.artifactId=e.artifactId,u++,l+=(((d=f.geometry.index)==null?void 0:d.count)??f.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new L),size:c.getSize(new L),triangleCount:l,meshCount:u}}async function vS({scene:i,renderer:e,manifest:t,onArtifact:n,mobile:r=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:s=new Zu().setMeshoptDecoder(Gp)}){const o=[],c=[];return await Promise.all(is.map(async l=>{const u=r?l.modelMobile:l.modelDesktop;let f;try{const d=await s.loadAsync(u);_S(d.scene,l,e),f={...xS(d.scene,l),modelUrl:u},i.add(f.object),o.push(f)}catch(d){c.push({artifactId:l.artifactId,name:l.name,modelUrl:u,message:d.message});return}n==null||n(f)})),o.sort((l,u)=>is.indexOf(l.assignment)-is.indexOf(u.assignment)),{records:o,failures:c}}function yS(i){var r,s;const e=(s=(r=i==null?void 0:i.object)==null?void 0:r.children[0])==null?void 0:s.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}function MS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Yr={},zc,nh;function SS(){return nh||(nh=1,zc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),zc}var Hc={},Ui={},ih;function xr(){if(ih)return Ui;ih=1;let i;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ui.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Ui.getSymbolTotalCodewords=function(n){return e[n]},Ui.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Ui.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},Ui.isKanjiModeEnabled=function(){return typeof i<"u"},Ui.toSJIS=function(n){return i(n)},Ui}var Vc={},rh;function nf(){return rh||(rh=1,(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,r){if(i.isValid(n))return n;try{return e(n)}catch{return r}}})(Vc)),Vc}var Gc,sh;function ES(){if(sh)return Gc;sh=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Gc=i,Gc}var Wc,ah;function TS(){if(ah)return Wc;ah=1;function i(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return i.prototype.set=function(e,t,n,r){const s=e*this.size+t;this.data[s]=n,r&&(this.reservedBit[s]=!0)},i.prototype.get=function(e,t){return this.data[e*this.size+t]},i.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},i.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Wc=i,Wc}var qc={},oh;function wS(){return oh||(oh=1,(function(i){const e=xr().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const r=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let c=1;c<r-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},i.getPositions=function(n){const r=[],s=i.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||r.push([s[o],s[c]]);return r}})(qc)),qc}var jc={},ch;function AS(){if(ch)return jc;ch=1;const i=xr().getSymbolSize,e=7;return jc.getPositions=function(n){const r=i(n);return[[0,0],[r-e,0],[0,r-e]]},jc}var Xc={},lh;function RS(){return lh||(lh=1,(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},i.from=function(r){return i.isValid(r)?parseInt(r,10):void 0},i.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,c=0,l=null,u=null;for(let f=0;f<s;f++){o=c=0,l=u=null;for(let d=0;d<s;d++){let h=r.get(f,d);h===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=h,o=1),h=r.get(d,f),h===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=h,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},i.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=r.get(o,c)+r.get(o,c+1)+r.get(o+1,c)+r.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},i.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|r.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|r.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},i.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,r,s){switch(n){case i.Patterns.PATTERN000:return(r+s)%2===0;case i.Patterns.PATTERN001:return r%2===0;case i.Patterns.PATTERN010:return s%3===0;case i.Patterns.PATTERN011:return(r+s)%3===0;case i.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case i.Patterns.PATTERN101:return r*s%2+r*s%3===0;case i.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case i.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(r,c,o))},i.getBestMask=function(r,s){const a=Object.keys(i.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),i.applyMask(l,r);const u=i.getPenaltyN1(r)+i.getPenaltyN2(r)+i.getPenaltyN3(r)+i.getPenaltyN4(r);i.applyMask(l,r),u<c&&(c=u,o=l)}return o}})(Xc)),Xc}var fo={},uh;function Wp(){if(uh)return fo;uh=1;const i=nf(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return fo.getBlocksCount=function(r,s){switch(s){case i.L:return e[(r-1)*4+0];case i.M:return e[(r-1)*4+1];case i.Q:return e[(r-1)*4+2];case i.H:return e[(r-1)*4+3];default:return}},fo.getTotalCodewordsCount=function(r,s){switch(s){case i.L:return t[(r-1)*4+0];case i.M:return t[(r-1)*4+1];case i.Q:return t[(r-1)*4+2];case i.H:return t[(r-1)*4+3];default:return}},fo}var Yc={},Hs={},fh;function CS(){if(fh)return Hs;fh=1;const i=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let r=0;r<255;r++)i[r]=n,e[n]=r,n<<=1,n&256&&(n^=285);for(let r=255;r<512;r++)i[r]=i[r-255]})(),Hs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Hs.exp=function(n){return i[n]},Hs.mul=function(n,r){return n===0||r===0?0:i[e[n]+e[r]]},Hs}var dh;function PS(){return dh||(dh=1,(function(i){const e=CS();i.mul=function(n,r){const s=new Uint8Array(n.length+r.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(n[a],r[o]);return s},i.mod=function(n,r){let s=new Uint8Array(n);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=e.mul(r[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},i.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let s=0;s<n;s++)r=i.mul(r,new Uint8Array([1,e.exp(s)]));return r}})(Yc)),Yc}var Kc,hh;function LS(){if(hh)return Kc;hh=1;const i=PS();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(n.length+this.degree);r.set(n);const s=i.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Kc=e,Kc}var Jc={},$c={},Zc={},ph;function qp(){return ph||(ph=1,Zc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Zc}var $n={},mh;function jp(){if(mh)return $n;mh=1;const i="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;$n.KANJI=new RegExp(t,"g"),$n.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),$n.BYTE=new RegExp(n,"g"),$n.NUMERIC=new RegExp(i,"g"),$n.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return $n.testKanji=function(c){return r.test(c)},$n.testNumeric=function(c){return s.test(c)},$n.testAlphanumeric=function(c){return a.test(c)},$n}var gh;function vr(){return gh||(gh=1,(function(i){const e=qp(),t=jp();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},i.getBestModeForData=function(s){return t.testNumeric(s)?i.NUMERIC:t.testAlphanumeric(s)?i.ALPHANUMERIC:t.testKanji(s)?i.KANJI:i.BYTE},i.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},i.isValid=function(s){return s&&s.bit&&s.ccBits};function n(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+r)}}i.from=function(s,a){if(i.isValid(s))return s;try{return n(s)}catch{return a}}})($c)),$c}var bh;function IS(){return bh||(bh=1,(function(i){const e=xr(),t=Wp(),n=nf(),r=vr(),s=qp(),a=7973,o=e.getBCHDigit(a);function c(d,h,g){for(let _=1;_<=40;_++)if(h<=i.getCapacity(_,g,d))return _}function l(d,h){return r.getCharCountIndicator(d,h)+4}function u(d,h){let g=0;return d.forEach(function(_){const m=l(_.mode,h);g+=m+_.getBitsLength()}),g}function f(d,h){for(let g=1;g<=40;g++)if(u(d,g)<=i.getCapacity(g,h,r.MIXED))return g}i.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},i.getCapacity=function(h,g,_){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),M=(m-p)*8;if(_===r.MIXED)return M;const x=M-l(_,h);switch(_){case r.NUMERIC:return Math.floor(x/10*3);case r.ALPHANUMERIC:return Math.floor(x/11*2);case r.KANJI:return Math.floor(x/13);case r.BYTE:default:return Math.floor(x/8)}},i.getBestVersionForData=function(h,g){let _;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return f(h,m);if(h.length===0)return 1;_=h[0]}else _=h;return c(_.mode,_.getLength(),m)},i.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return h<<12|g}})(Jc)),Jc}var Qc={},_h;function DS(){if(_h)return Qc;_h=1;const i=xr(),e=1335,t=21522,n=i.getBCHDigit(e);return Qc.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;i.getBCHDigit(c)-n>=0;)c^=e<<i.getBCHDigit(c)-n;return(o<<10|c)^t},Qc}var el={},tl,xh;function US(){if(xh)return tl;xh=1;const i=vr();function e(t){this.mode=i.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),n.put(a,o*3+1))},tl=e,tl}var nl,vh;function NS(){if(vh)return nl;vh=1;const i=vr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=i.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},nl=t,nl}var il,yh;function FS(){if(yh)return il;yh=1;const i=vr();function e(t){this.mode=i.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,r=this.data.length;n<r;n++)t.put(this.data[n],8)},il=e,il}var rl,Mh;function OS(){if(Mh)return rl;Mh=1;const i=vr(),e=xr();function t(n){this.mode=i.KANJI,this.data=n}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},rl=t,rl}var sl={exports:{}},Sh;function BS(){return Sh||(Sh=1,(function(i){var e={single_source_shortest_paths:function(t,n,r){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,f,d,h,g,_,m;!o.empty();){c=o.pop(),l=c.value,f=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(h=d[u],g=f+h,_=a[u],m=typeof a[u]>"u",(m||_>g)&&(a[u]=g,o.push(u,g),s[u]=l))}if(typeof r<"u"&&typeof a[r]>"u"){var p=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var r=[],s=n;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,n,r){var s=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,r={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r.queue=[],r.sorter=t.sorter||n.default_sorter,r},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var r={value:t,cost:n};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})(sl)),sl.exports}var Eh;function kS(){return Eh||(Eh=1,(function(i){const e=vr(),t=US(),n=NS(),r=FS(),s=OS(),a=jp(),o=xr(),c=BS();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,M,x){const b=[];let y;for(;(y=p.exec(x))!==null;)b.push({data:y[0],index:y.index,mode:M,length:y[0].length});return b}function f(p){const M=u(a.NUMERIC,e.NUMERIC,p),x=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,y;return o.isKanjiModeEnabled()?(b=u(a.BYTE,e.BYTE,p),y=u(a.KANJI,e.KANJI,p)):(b=u(a.BYTE_KANJI,e.BYTE,p),y=[]),M.concat(x,b,y).sort(function(T,C){return T.index-C.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function d(p,M){switch(M){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return r.getBitsLength(p)}}function h(p){return p.reduce(function(M,x){const b=M.length-1>=0?M[M.length-1]:null;return b&&b.mode===x.mode?(M[M.length-1].data+=x.data,M):(M.push(x),M)},[])}function g(p){const M=[];for(let x=0;x<p.length;x++){const b=p[x];switch(b.mode){case e.NUMERIC:M.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:M.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:M.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:M.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return M}function _(p,M){const x={},b={start:{}};let y=["start"];for(let E=0;E<p.length;E++){const T=p[E],C=[];for(let S=0;S<T.length;S++){const v=T[S],w=""+E+S;C.push(w),x[w]={node:v,lastCount:0},b[w]={};for(let A=0;A<y.length;A++){const I=y[A];x[I]&&x[I].node.mode===v.mode?(b[I][w]=d(x[I].lastCount+v.length,v.mode)-d(x[I].lastCount,v.mode),x[I].lastCount+=v.length):(x[I]&&(x[I].lastCount=v.length),b[I][w]=d(v.length,v.mode)+4+e.getCharCountIndicator(v.mode,M))}}y=C}for(let E=0;E<y.length;E++)b[y[E]].end=0;return{map:b,table:x}}function m(p,M){let x;const b=e.getBestModeForData(p);if(x=e.from(M,b),x!==e.BYTE&&x.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(b));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new r(p)}}i.fromArray=function(M){return M.reduce(function(x,b){return typeof b=="string"?x.push(m(b,null)):b.data&&x.push(m(b.data,b.mode)),x},[])},i.fromString=function(M,x){const b=f(M,o.isKanjiModeEnabled()),y=g(b),E=_(y,x),T=c.find_path(E.map,"start","end"),C=[];for(let S=1;S<T.length-1;S++)C.push(E.table[T[S]].node);return i.fromArray(h(C))},i.rawSplit=function(M){return i.fromArray(f(M,o.isKanjiModeEnabled()))}})(el)),el}var Th;function zS(){if(Th)return Hc;Th=1;const i=xr(),e=nf(),t=ES(),n=TS(),r=wS(),s=AS(),a=RS(),o=Wp(),c=LS(),l=IS(),u=DS(),f=vr(),d=kS();function h(E,T){const C=E.size,S=s.getPositions(T);for(let v=0;v<S.length;v++){const w=S[v][0],A=S[v][1];for(let I=-1;I<=7;I++)if(!(w+I<=-1||C<=w+I))for(let D=-1;D<=7;D++)A+D<=-1||C<=A+D||(I>=0&&I<=6&&(D===0||D===6)||D>=0&&D<=6&&(I===0||I===6)||I>=2&&I<=4&&D>=2&&D<=4?E.set(w+I,A+D,!0,!0):E.set(w+I,A+D,!1,!0))}}function g(E){const T=E.size;for(let C=8;C<T-8;C++){const S=C%2===0;E.set(C,6,S,!0),E.set(6,C,S,!0)}}function _(E,T){const C=r.getPositions(T);for(let S=0;S<C.length;S++){const v=C[S][0],w=C[S][1];for(let A=-2;A<=2;A++)for(let I=-2;I<=2;I++)A===-2||A===2||I===-2||I===2||A===0&&I===0?E.set(v+A,w+I,!0,!0):E.set(v+A,w+I,!1,!0)}}function m(E,T){const C=E.size,S=l.getEncodedBits(T);let v,w,A;for(let I=0;I<18;I++)v=Math.floor(I/3),w=I%3+C-8-3,A=(S>>I&1)===1,E.set(v,w,A,!0),E.set(w,v,A,!0)}function p(E,T,C){const S=E.size,v=u.getEncodedBits(T,C);let w,A;for(w=0;w<15;w++)A=(v>>w&1)===1,w<6?E.set(w,8,A,!0):w<8?E.set(w+1,8,A,!0):E.set(S-15+w,8,A,!0),w<8?E.set(8,S-w-1,A,!0):w<9?E.set(8,15-w-1+1,A,!0):E.set(8,15-w-1,A,!0);E.set(S-8,8,1,!0)}function M(E,T){const C=E.size;let S=-1,v=C-1,w=7,A=0;for(let I=C-1;I>0;I-=2)for(I===6&&I--;;){for(let D=0;D<2;D++)if(!E.isReserved(v,I-D)){let F=!1;A<T.length&&(F=(T[A]>>>w&1)===1),E.set(v,I-D,F),w--,w===-1&&(A++,w=7)}if(v+=S,v<0||C<=v){v-=S,S=-S;break}}}function x(E,T,C){const S=new t;C.forEach(function(D){S.put(D.mode.bit,4),S.put(D.getLength(),f.getCharCountIndicator(D.mode,E)),D.write(S)});const v=i.getSymbolTotalCodewords(E),w=o.getTotalCodewordsCount(E,T),A=(v-w)*8;for(S.getLengthInBits()+4<=A&&S.put(0,4);S.getLengthInBits()%8!==0;)S.putBit(0);const I=(A-S.getLengthInBits())/8;for(let D=0;D<I;D++)S.put(D%2?17:236,8);return b(S,E,T)}function b(E,T,C){const S=i.getSymbolTotalCodewords(T),v=o.getTotalCodewordsCount(T,C),w=S-v,A=o.getBlocksCount(T,C),I=S%A,D=A-I,F=Math.floor(S/A),O=Math.floor(w/A),G=O+1,z=F-O,Z=new c(z);let $=0;const le=new Array(A),Ie=new Array(A);let Ke=0;const $e=new Uint8Array(E.buffer);for(let ge=0;ge<A;ge++){const de=ge<D?O:G;le[ge]=$e.slice($,$+de),Ie[ge]=Z.encode(le[ge]),$+=de,Ke=Math.max(Ke,de)}const Be=new Uint8Array(S);let k=0,j,ee;for(j=0;j<Ke;j++)for(ee=0;ee<A;ee++)j<le[ee].length&&(Be[k++]=le[ee][j]);for(j=0;j<z;j++)for(ee=0;ee<A;ee++)Be[k++]=Ie[ee][j];return Be}function y(E,T,C,S){let v;if(Array.isArray(E))v=d.fromArray(E);else if(typeof E=="string"){let F=T;if(!F){const O=d.rawSplit(E);F=l.getBestVersionForData(O,C)}v=d.fromString(E,F||40)}else throw new Error("Invalid data");const w=l.getBestVersionForData(v,C);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=w;else if(T<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const A=x(T,C,v),I=i.getSymbolSize(T),D=new n(I);return h(D,T),g(D),_(D,T),p(D,C,0),T>=7&&m(D,T),M(D,A),isNaN(S)&&(S=a.getBestMask(D,p.bind(null,D,C))),a.applyMask(S,D),p(D,C,S),{modules:D,version:T,errorCorrectionLevel:C,maskPattern:S,segments:v}}return Hc.create=function(T,C){if(typeof T>"u"||T==="")throw new Error("No input text");let S=e.M,v,w;return typeof C<"u"&&(S=e.from(C.errorCorrectionLevel,e.M),v=l.from(C.version),w=a.from(C.maskPattern),C.toSJISFunc&&i.setToSJISFunction(C.toSJISFunc)),y(T,v,S,w)},Hc}var al={},ol={},wh;function Xp(){return wh||(wh=1,(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const r=parseInt(n.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const r=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,r){return r.width&&r.width>=n+r.margin*2?r.width/(n+r.margin*2):r.scale},i.getImageWidth=function(n,r){const s=i.getScale(n,r);return Math.floor((n+r.margin*2)*s)},i.qrToImageData=function(n,r,s){const a=r.modules.size,o=r.modules.data,c=i.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let h=0;h<l;h++){let g=(d*l+h)*4,_=s.color.light;if(d>=u&&h>=u&&d<l-u&&h<l-u){const m=Math.floor((d-u)/c),p=Math.floor((h-u)/c);_=f[o[m*a+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(ol)),ol}var Ah;function HS(){return Ah||(Ah=1,(function(i){const e=Xp();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),d=f.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(f,l,u),f.putImageData(d,0,0),l},i.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=i.render(s,a,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(al)),al}var cl={},Rh;function VS(){if(Rh)return cl;Rh=1;const i=Xp();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function n(r,s,a){let o="",c=0,l=!1,u=0;for(let f=0;f<r.length;f++){const d=Math.floor(f%s),h=Math.floor(f/s);!d&&!l&&(l=!0),r[f]?(u++,f>0&&d>0&&r[f-1]||(o+=l?t("M",d+a,.5+h+a):t("m",c,0),c=0,l=!1),d+1<s&&r[f+1]||(o+=t("h",u),u=0)):c++}return o}return cl.render=function(s,a,o){const c=i.getOptions(a),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+h+`</svg>
`;return typeof o=="function"&&o(null,m),m},cl}var Ch;function GS(){if(Ch)return Yr;Ch=1;const i=SS(),e=zS(),t=HS(),n=VS();function r(s,a,o,c,l){const u=[].slice.call(arguments,1),f=u.length,d=typeof u[f-1]=="function";if(!d&&!i())throw new Error("Callback required as last argument");if(d){if(f<2)throw new Error("Too few arguments provided");f===2?(l=o,o=a,a=c=void 0):f===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(o=a,a=c=void 0):f===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(h,g){try{const _=e.create(o,c);h(s(_,a,c))}catch(_){g(_)}})}try{const h=e.create(o,c);l(null,s(h,a,c))}catch(h){l(h)}}return Yr.create=e.create,Yr.toCanvas=r.bind(null,t.render),Yr.toDataURL=r.bind(null,t.renderToDataURL),Yr.toString=r.bind(null,function(s,a,o){return n.render(s,o)}),Yr}var WS=GS();const qS=MS(WS),rf={"phoenix-ewer":"凤首昂起，卷尾成柄。","bronze-head":"轮廓在光中显现，锈色层层铺开。","cloud-mirror":"连弧相接，细纹在铜色中回旋。","liquan-bodhisattva":"沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。","longquan-figure":"青釉如山色，露胎似暖土。","pipa-figurine":"陶色留住衣褶，也留住抱琴的姿态。","speechless-buddha":"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。"};function jS(i,e=globalThis.location){const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.username="",t.password="",t.searchParams.set("artifact",i),t.href}function XS(i){return["localhost","127.0.0.1","[::1]"].includes(new URL(i).hostname)}function YS(i){if(!i)return!1;const e=i.x*1024,t=(1-i.y)*248;return e>=777&&e<=995&&t>=10&&t<=240}function KS(i,e=8){const t=qS.create(i,{errorCorrectionLevel:"M"}),n=t.modules.size,r=4,s=(n+r*2)*e,a=new Uint8ClampedArray(s*s*4).fill(255);for(let o=0;o<s;o++)for(let c=0;c<s;c++){const l=Math.floor(c/e)-r,u=Math.floor(o/e)-r;if(l<0||u<0||l>=n||u>=n||!t.modules.get(u,l))continue;const f=(o*s+c)*4;a[f]=a[f+1]=a[f+2]=0}return{size:s,pixels:a,quiet:r,modules:n,scale:e}}function JS(i){const[e,,t]=i.position;if(i.cabinetId==="story")return{position:[e,.705,t+.935],rotationY:0,rotationX:-65*Math.PI/180};const n=e<0?1:-1;return{position:[e+n*.935,.705,t],rotationY:n*Math.PI/2,rotationX:-65*Math.PI/180}}function $S({now:i=()=>performance.now(),schedule:e=setTimeout,unschedule:t=clearTimeout}={}){let n=0,r=0,s=null,a=0,o=!1;function c(){a++,t(s),s=null,o=!0}return{start(l){c(),n=i(),r=l,o=!1},ready(l){if(o)return;o=!0;const u=a;s=e(()=>{s=null,u===a&&l()},Math.max(0,r-(i()-n)))},cancel:c}}function ZS({captureFrame:i,isReduced:e}){const t=document.createElement("section");t.className="artifact-journey",t.innerHTML='<canvas class="journey-scene" aria-hidden="true"></canvas><div class="journey-shade" aria-hidden="true"></div><div class="journey-threshold" aria-hidden="true"></div><div class="journey-copy"><span class="journey-kicker">一器 · 一世界</span><h2></h2><p class="journey-line"></p><div class="journey-trace" aria-hidden="true"><i></i></div><p class="journey-note" role="status">光里的细节，正慢慢靠近。</p><div class="journey-actions" hidden><button type="button">重新载入</button><a target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>';const n=t.querySelector("canvas"),r=t.querySelector(".journey-note"),s=t.querySelector(".journey-actions"),a=$S();let o=0,c=null,l=!1;function u(){l=!1,a.cancel(),cancelAnimationFrame(o),clearTimeout(c),n.width=n.height=1,t.hidden=!0}function f(d,h={x:.5,y:.5}){u(),l=!0,t.hidden=!1;const g=e();t.classList.toggle("journey-reduced",g),t.dataset.phase="start",t.style.setProperty("--focus-x",`${Math.max(.1,Math.min(.9,h.x))*100}%`),t.style.setProperty("--focus-y",`${Math.max(.1,Math.min(.9,h.y))*100}%`),t.querySelector("h2").textContent=d.name,t.querySelector(".journey-line").textContent=rf[d.artifactId]||"循着器物的轮廓，走进它的故事。",r.textContent="光里的细节，正慢慢靠近。",s.hidden=!0;try{const _=i==null?void 0:i();if(_!=null&&_.width&&(_!=null&&_.height)){const m=Math.min(1,1600/_.width);n.width=Math.round(_.width*m),n.height=Math.round(_.height*m),n.getContext("2d").drawImage(_,0,0,n.width,n.height)}}catch{n.width=n.height=1}a.start(g?0:1150),o=requestAnimationFrame(()=>{l&&(t.dataset.phase="approach")})}return{element:t,retryButton:s.querySelector("button"),standalone:s.querySelector("a"),start:f,cancel:u,reveal(d,h){a.ready(()=>{l&&(t.dataset.phase="reveal",d(),c=setTimeout(()=>{l&&(t.hidden=!0,n.width=n.height=1,h())},e()?120:950))})},fail(d){a.cancel(),clearTimeout(c),cancelAnimationFrame(o),t.hidden=!1,t.dataset.phase="error",r.textContent=d,s.hidden=!1}}}const Ph="museum-artifact-v1";function QS({canvas:i,camera:e,scene:t,assignments:n,colliders:r=[],getMode:s,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:u=()=>{},captureFrame:f,detailUrl:d=new URL("/",`${location.protocol}//${location.hostname}:5189`).href}){const h=document.createElement("button");h.id="artifactHint",h.className="artifact-entry",h.hidden=!0;const g=document.createElement("dialog");g.id="artifactDetail",g.className="artifact-detail",g.setAttribute("aria-label","文物详情"),g.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div>',document.body.append(h,g);const _=g.querySelector(".artifact-detail-host"),m=()=>{var te;return((te=document.querySelector("#motion"))==null?void 0:te.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},p=ZS({captureFrame:f,isReduced:m});g.append(p.element);const M=g.querySelector("#closeArtifactDetail"),x=p.retryButton,b=p.standalone,y=new Ju,E=new Ue,T=new L,C=new L,S=new Yi,v=new L,w=new AbortController,A=new Map,I=r.map(te=>({id:te.id,box:new nt().setFromCenterAndSize(new L(...te.center),new L(...te.size))}));let D=null,F=null,O=null,G=null,z=!1,Z={x:.5,y:.5},$=null,le=!1;function Ie(te){let N=A.get(te.artifactId);if(N)return N;const ze=t.getObjectByName(`HallArtifact_${te.artifactId}`);if(!ze)return null;ze.updateWorldMatrix(!0,!0);const Me=new nt().setFromObject(ze);return N={assignment:te,object:ze,bounds:Me,center:Me.getCenter(new L)},A.set(te.artifactId,N),N}function Ke(te,N=te.center){const ze=e.position.distanceTo(N);return S.set(e.position,C.subVectors(N,e.position).normalize()),!I.some(({id:Me,box:me})=>(Me.includes("exhibit")||Me.includes("Far gallery"))&&me.containsPoint(te.center)?!1:S.intersectBox(me,v)&&e.position.distanceTo(v)<ze-.05)}function $e(){return!g.open&&a()&&!o()&&["walk","paused"].includes(s())}function Be(te,N=!1){if(e.position.distanceTo(te.center)>4.8||(T.copy(te.center).project(e),T.z<-1||T.z>1||Math.abs(T.x)>.92||Math.abs(T.y)>.82))return!1;const ze=Math.hypot(T.x*i.clientWidth/2,T.y*i.clientHeight/2);return(N||ze<175)&&Ke(te)}function k(){D=null,h.hidden=!0,i.dataset.artifactAim=""}function j({selectedExhibit:te=null,observationPhase:N=i.dataset.observationPhase}={}){if(!$e())return k(),null;const ze=(te==null?void 0:te.id)??te,Me=N==="complete"&&s()==="paused";let me=null;if(Me){const ae=n.find(be=>String(be.cabinetId)===String(ze)),et=ae&&Ie(ae);et&&Be(et,!0)&&(me=et)}if(!me){let ae=1/0;for(const et of n){const be=Ie(et);if(!be||!Be(be))continue;const Ge=e.position.distanceToSquared(be.center);Ge<ae&&(ae=Ge,me=be)}}if(D=me||null,h.hidden=!D,i.dataset.artifactAim=(D==null?void 0:D.assignment.artifactId)||"",D){const{name:ae,nickname:et}=D.assignment;h.textContent=`${ae}${et?` · ${et}`:""}　查看详情 ↗`,h.setAttribute("aria-label",`查看${ae}详情`),h.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(D==null?void 0:D.assignment.artifactId)||null}function ee(te){!g.open||!F||(clearTimeout(G),z=!1,g.dataset.phase="error",M.hidden=!1,p.fail(te))}function ge(){if(!g.open||!F)return;clearTimeout(G),z=!1,M.hidden=!1,g.dataset.phase="approach",_.inert=!0,_.setAttribute("aria-hidden","true"),p.start(F,Z);const te=new URL(d,location.href);te.searchParams.set("artifact",F.artifactId),te.searchParams.set("museumEmbed","1"),te.searchParams.set("parentOrigin",location.origin),te.searchParams.set("returnUrl",location.href);const N=new URL(te);N.searchParams.delete("museumEmbed"),N.searchParams.delete("parentOrigin"),b.href=N.href,_.replaceChildren(),O=document.createElement("iframe"),O.title=`${F.name}互动详情`,O.allow="autoplay";const ze=O;O.addEventListener("error",()=>{O===ze&&ee("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),O.src=te.href,_.append(O),G=setTimeout(()=>ee("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function de(te=D==null?void 0:D.assignment.artifactId,{focusPoint:N}={}){var me;const ze=n.find(ae=>ae.artifactId===te);if(!ze||g.open)return!1;F=ze;const Me=N||((me=Ie(ze))==null?void 0:me.center);return Me?(T.copy(Me).project(e),Z={x:(T.x+1)/2,y:(1-T.y)/2}):Z={x:.5,y:.5},k(),l(ze),g.setAttribute("aria-label",`${ze.name}详情`),g.showModal(),document.body.classList.add("artifact-detail-open"),ge(),M.focus({preventScroll:!0}),!0}function Pe(){return g.open?(clearTimeout(G),p.cancel(),_.replaceChildren(),O=null,z=!1,g.close(),document.body.classList.remove("artifact-detail-open"),u(F),F=null,i.focus({preventScroll:!0}),!0):!1}return h.addEventListener("click",()=>{D&&$e()&&Be(D,!0)&&de()}),M.addEventListener("click",Pe),x.addEventListener("click",ge),g.addEventListener("cancel",te=>{te.preventDefault(),Pe()}),i.addEventListener("pointerdown",te=>{$||($={id:te.pointerId,x:te.clientX,y:te.clientY},le=!1)},{signal:w.signal}),i.addEventListener("pointermove",te=>{($==null?void 0:$.id)===te.pointerId&&Math.hypot(te.clientX-$.x,te.clientY-$.y)>7&&(le=!0)},{signal:w.signal}),i.addEventListener("pointerup",te=>{($==null?void 0:$.id)===te.pointerId&&($=null)},{signal:w.signal}),i.addEventListener("pointercancel",te=>{($==null?void 0:$.id)===te.pointerId&&($=null,le=!0)},{signal:w.signal}),i.addEventListener("lostpointercapture",te=>{($==null?void 0:$.id)===te.pointerId&&($=null,le=!0)},{signal:w.signal}),i.addEventListener("click",te=>{if(le||!$e())return;if(document.pointerLockElement===i)E.set(0,0);else{const ae=i.getBoundingClientRect();E.set((te.clientX-ae.left)/ae.width*2-1,-(te.clientY-ae.top)/ae.height*2+1)}if(y.setFromCamera(E,e),y.intersectObjects(c(),!1).some(ae=>ae.distance<12))return;const N=n.map(Ie).filter(Boolean),Me=y.intersectObjects(N.map(ae=>ae.object),!0)[0];if(!Me||Me.distance>4.8)return;const me=N.find(ae=>ae.assignment.artifactId===Me.object.userData.artifactId);me&&Ke(me,Me.point)&&de(me.assignment.artifactId)&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("keydown",te=>{var N;if(te.key==="Escape"&&g.open){te.preventDefault(),te.stopImmediatePropagation(),Pe();return}te.code!=="KeyE"||te.repeat||!D||!$e()||/INPUT|TEXTAREA|SELECT/.test((N=document.activeElement)==null?void 0:N.tagName)||Be(D,!0)&&de()&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("message",te=>{var Me;const N=new URL(d,location.href).origin;if(!g.open||te.origin!==N||te.source!==(O==null?void 0:O.contentWindow)||((Me=te.data)==null?void 0:Me.channel)!==Ph)return;const ze=n.find(me=>me.artifactId===te.data.artifactId);if(ze&&(F=ze,g.setAttribute("aria-label",`${ze.name}详情`)),te.data.type==="loading"&&(z=!1,M.hidden=!1,g.dataset.phase==="ready"&&(g.dataset.phase="approach",p.start(F,Z)),clearTimeout(G),G=setTimeout(()=>ee("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),te.data.type==="ready"){if(z)return;z=!0,clearTimeout(G);const me=O;p.reveal(()=>{O!==me||!g.open||(g.dataset.phase="reveal",me.contentWindow.postMessage({channel:Ph,type:"enter",reduced:m()},N))},()=>{O!==me||!g.open||(g.dataset.phase="ready",_.inert=!1,_.removeAttribute("aria-hidden"),M.hidden=!0,me.focus())})}te.data.type==="error"&&ee("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),te.data.type==="close"&&Pe()},{signal:w.signal}),{update:j,open:de,close:Pe,dispose(){Pe(),clearTimeout(G),w.abort(),A.clear(),h.remove(),g.remove()},isOpen:()=>g.open,get state(){return{open:g.open,ready:z,artifactId:(F==null?void 0:F.artifactId)||null,aimedArtifactId:(D==null?void 0:D.assignment.artifactId)||null}}}}const eE=Object.freeze({"phoenix-ewer":-Math.PI/2,"bronze-head":-Math.PI/2,"cloud-mirror":-Math.PI/2,"liquan-bodhisattva":-Math.PI/2,"longquan-figure":-Math.PI/2,"pipa-figurine":-Math.PI/2,"speechless-buddha":-Math.PI/2});function ll(i){return Number.isFinite(i.frontRotationY)?i.frontRotationY:eE[i.artifactId||i.id]??0}const St=new Lt,ho=new L,Lh=new Ue,Ih=new Ue,Dh=new Ue;class tE{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,r=e?e.count/3:t.count/3,s=new Float32Array(r);for(let c=0;c<r;c++){let l=1,u=3*c,f=3*c+1,d=3*c+2;e&&(u=e.getX(u),f=e.getX(f),d=e.getX(d)),n&&(l=n.getX(u)+n.getX(f)+n.getX(d)),St.a.fromBufferAttribute(t,u),St.b.fromBufferAttribute(t,f),St.c.fromBufferAttribute(t,d),l*=St.getArea(),s[c]=l}const a=new Float32Array(r);let o=0;for(let c=0;c<r;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,r){const s=this._sampleFaceIndex();return this._sampleFace(s,e,t,n,r)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,r=t.length-1,s=-1;for(;n<=r;){const a=Math.ceil((n+r)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?r=a-1:n=a+1}return s}_sampleFace(e,t,n,r,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,u=e*3+1,f=e*3+2;return c&&(l=c.getX(l),u=c.getX(u),f=c.getX(f)),St.a.fromBufferAttribute(this.positionAttribute,l),St.b.fromBufferAttribute(this.positionAttribute,u),St.c.fromBufferAttribute(this.positionAttribute,f),t.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(St.a.fromBufferAttribute(this.normalAttribute,l),St.b.fromBufferAttribute(this.normalAttribute,u),St.c.fromBufferAttribute(this.normalAttribute,f),n.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)).normalize()):St.getNormal(n)),r!==void 0&&this.colorAttribute!==void 0&&(St.a.fromBufferAttribute(this.colorAttribute,l),St.b.fromBufferAttribute(this.colorAttribute,u),St.c.fromBufferAttribute(this.colorAttribute,f),ho.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)),r.r=ho.x,r.g=ho.y,r.b=ho.z),s!==void 0&&this.uvAttribute!==void 0&&(Lh.fromBufferAttribute(this.uvAttribute,l),Ih.fromBufferAttribute(this.uvAttribute,u),Dh.fromBufferAttribute(this.uvAttribute,f),s.set(0,0).addScaledVector(Lh,a).addScaledVector(Ih,o).addScaledVector(Dh,1-(a+o))),this}}const na=5,Lo=.6;function nE(i){const e=Math.max(0,i);return{due:e>=na,opacity:In.smoothstep(e,0,Lo)*(1-In.smoothstep(e,na-Lo,na))}}function lr(i,e=!1){const t=new Set,n=new Set,r=new Set;i.traverse(s=>{s.geometry&&(!e||s.isPoints)&&t.add(s.geometry);for(const a of s.material?Array.isArray(s.material)?s.material:[s.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&r.add(o)}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),r.forEach(s=>{var a,o,c;s.dispose(),(c=(o=(a=s.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),i.removeFromParent()}async function iE(i,e){const t=new tE(i),n=t.positionAttribute,r=t.indexAttribute,s=((r==null?void 0:r.count)??n.count)/3,a=new Float32Array(s),o=new Lt;let c=0;for(let l=0;l<s;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let u=l;u<Math.min(s,l+8192);u++){const f=u*3;o.a.fromBufferAttribute(n,r?r.getX(f):f),o.b.fromBufferAttribute(n,r?r.getX(f+1):f+1),o.c.fromBufferAttribute(n,r?r.getX(f+2):f+2),c+=o.getArea(),a[u]=c}l+8192<s&&await new Promise(u=>setTimeout(u,0))}return t.distribution=a,t}async function rE(i,e,t){i.updateMatrixWorld(!0);const n=new nt().setFromObject(i),r=n.getSize(new L);if(n.isEmpty()||!Number.isFinite(r.length())||r.length()===0)throw new Error("模型没有可展示的几何体");const s=Math.min(1.5/Math.max(r.y,.001),1.6/Math.max(r.x,r.z,.001)),a=n.getCenter(new L),o=new En;o.add(i),i.position.sub(a),o.scale.setScalar(s),o.position.y=.13+r.y*s/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],u=new Set;i.traverse(x=>{if(!x.isMesh||!x.geometry.attributes.position)return;l.push(x);const b=Array.isArray(x.material)?x.material:[x.material];for(const y of b)u.add(y),y.transparent=!0,y.depthWrite=!1,y.onBeforeCompile=E=>{E.uniforms.holoOpacity=c.opacity,E.uniforms.holoTime=c.time,E.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
`+E.vertexShader,E.vertexShader=E.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vHoloNormal = normalize(normalMatrix * normal); vHoloView = -mvPosition.xyz; vHoloHeight = (modelMatrix * vec4(transformed, 1.)).y;`),E.fragmentShader=`uniform float holoOpacity; uniform float holoTime; varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
`+E.fragmentShader,E.fragmentShader=E.fragmentShader.replace("#include <opaque_fragment>",`
          float holoEdge = pow(1.0 - abs(dot(normalize(vHoloNormal), normalize(vHoloView))), 2.5);
          float holoLine = .5 + .5 * sin(gl_FragCoord.y * .65 + holoTime * .6);
          float scanline = .5 + .5 * sin(vHoloHeight * 110.);
          float bandCenter = mod(holoTime * .13, 3.2) - .35;
          float scanBand = exp(-pow((vHoloHeight - bandCenter) / .16, 2.));
          float luminance = dot(outgoingLight, vec3(.2126, .7152, .0722));
          outgoingLight = mix(outgoingLight, vec3(.30, .88, .72) * (.25 + luminance * .9), .28);
          outgoingLight *= .94 + .06 * scanline;
          outgoingLight += vec3(.15, .76, .59) * (holoEdge * (.35 + .06 * holoLine) + scanBand * .13);
          diffuseColor.a *= holoOpacity * .88;
          if (diffuseColor.a < .004) discard;
          #include <opaque_fragment>`)},y.customProgramCacheKey=()=>"museum-jade-edge-v2",y.needsUpdate=!0});const f=[],d=o.matrixWorld.clone().invert(),h=new L,g=e?550:1200,_=l.reduce((x,b)=>x+b.geometry.attributes.position.count,0);for(const x of l){const b=new Ne().multiplyMatrices(d,x.matrixWorld);{const y=await iE(x,t),E=Math.max(1,Math.round(g*x.geometry.attributes.position.count/_));for(let T=0;T<E;T++)y.sample(h),h.applyMatrix4(b),f.push(h.x,h.y,h.z)}}const m=[];for(let x=0;x<f.length/3;x++){const b=x*2.39996323,y=(.08+.12*(x*.61803399%1))/s;m.push(Math.cos(b)*y,Math.sin(x*1.37)*y*.6,Math.sin(b)*y)}const p=new ln;p.setAttribute("position",new zt(f,3)),p.setAttribute("scatterOffset",new zt(m,3));const M=new bn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:rs,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new xp(p,M)),{object:o,uniforms:c,surfaceMaterials:u}}function sE({scene:i,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null,prepareForRender:r=null}){const s=new En;s.position.fromArray(e),i.add(s);for(const[w,A,I]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const D=new gt(new qu(w,.008,6,96),new ii({color:A,transparent:!0,opacity:I,depthWrite:!1}));D.rotation.x=Math.PI/2,D.position.y=.025,s.add(D)}const a=new bn({transparent:!0,depthWrite:!1,blending:rs,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),o=new gt(new _r(2.1,2.1),a);o.rotation.x=-Math.PI/2,o.position.y=.018,s.add(o);const c=new bn({side:sn,transparent:!0,depthWrite:!1,blending:rs,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),l=new gt(new Wu(.76,.91,1.85,48,1,!0),c);l.position.y=.96,s.add(l);let u=[],f=0,d=null,h=null,g=null,_=0,m=0,p=0,M=0,x=0,b=!1,y=!1,E=null;const T=new Zu().setMeshoptDecoder(Gp);function C(w){w&&lr(w.object,w.sharedResources)}function S(w){var O;if(b||g||h||!u.length||m<M)return;const A=u[w],I=x,D=new AbortController;g={controller:D,target:w};const F=new URL(A.modelUrl,((O=globalThis.location)==null?void 0:O.href)||"http://localhost/");(async()=>{let G,z;try{if(n)G=await n(A,D.signal);else{const Z=await fetch(F,{signal:D.signal});if(!Z.ok)throw new Error(`模型加载失败 (${Z.status})`);G=await T.parseAsync(await Z.arrayBuffer(),new URL(".",F).href)}if(b||I!==x){lr(G.scene,G.sharedResources);return}if(z=await rE(G.scene,t,D.signal),b||I!==x){lr(z.object,G.sharedResources);return}if(z.object.rotation.y=ll(A),r&&await r(z.object,D.signal),D.signal.throwIfAborted(),b||I!==x){lr(z.object,G.sharedResources);return}h={...z,record:A,index:w,sharedResources:!!G.sharedResources},E=null}catch(Z){z?lr(z.object,G.sharedResources):G!=null&&G.scene&&lr(G.scene,G.sharedResources),!b&&I===x&&Z.name!=="AbortError"&&(E=String(Z.message||Z),f=w,M=m+na)}finally{I===x&&(g=null)}})()}function v(){C(d),d=h,h=null,f=d.index,s.add(d.object),_=0}return{setModels(w){x++,g==null||g.controller.abort(),g=null,C(d),C(h),d=null,h=null,u=(w||[]).filter(A=>(A==null?void 0:A.id)&&(A==null?void 0:A.modelUrl)).map(A=>({...A})),f=0,_=0,M=0,E=null,b||S(0)},update(w,{paused:A=!1,reduced:I=!1}={}){if(b)return;const D=Number.isFinite(w)?Math.max(0,w):0;if(y&&!A&&(_=0),y=A,!d&&h&&v(),A||(m+=D,_+=D),I||(p+=Math.min(D,.1)),d){const F=nE(_);if(A){const O=1-Math.exp(-D*12);d.uniforms.opacity.value=In.lerp(d.uniforms.opacity.value,1,O),d.uniforms.dispersion.value=In.lerp(d.uniforms.dispersion.value,0,O);for(const G of d.surfaceMaterials)G.depthWrite=!1}else{d.uniforms.opacity.value=u.length<2||!h?1:F.opacity,d.uniforms.dispersion.value=I?0:1-d.uniforms.opacity.value;for(const O of d.surfaceMaterials)O.depthWrite=d.uniforms.opacity.value>.98}d.uniforms.time.value=p,A||(d.object.rotation.y=ll(d.record)+(I?0:Math.sin(_*.7)*.07)),!A&&F.due&&h&&v()}!h&&!g&&u.length&&(!d||u.length>1)&&S(d||E?(f+1)%u.length:f)},getCurrent(){return d?{...d.record}:null},getState(){return{status:b?"disposed":d?"ready":g?"loading":E?"error":"empty",error:E,currentId:(d==null?void 0:d.record.id)??null,nextId:(h==null?void 0:h.record.id)??null,loading:!!g,rotationY:(d==null?void 0:d.object.rotation.y)??null,frontRotationY:d?ll(d.record):null,count:u.length,paused:y,elapsed:_,index:(d==null?void 0:d.index)??f,phase:d?_<Lo?"forming":_>=na-Lo?"dispersing":"holding":"waiting"}},dispose(){b||(b=!0,x++,g==null||g.controller.abort(),g=null,C(d),C(h),d=null,h=null,lr(s))}}}const aE="http://127.0.0.1:4317/images";function oE(i=globalThis.location){if(!i)return aE;const e=new URL("/images",i.href||`http://${i.hostname}/`);return e.port="4317",e.href}function cE({mobile:i=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return is.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:i?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function lE({signal:i,mobile:e}={}){return i==null||i.throwIfAborted(),cE({mobile:e})}function uE(i=[0,.92,0]){const[e,t,n]=i;return{anchor:new L(e,t+.055,n+1.1),box:new nt(new L(e-.9,t+.005,n+.65),new L(e+.9,t+.09,n+1.5))}}function fE(i,e,t){const n=i.intersectSphere(e,new L),r=i.intersectBox(t,new L);return r&&(!n||i.origin.distanceToSquared(r)<=i.origin.distanceToSquared(n))?"workbench":n?"artifact":null}function dE({canvas:i,camera:e,stage:t,position:n=[0,.92,0],colliders:r=[],isAvailable:s=()=>!0,onOpen:a=()=>{},onView:o=()=>!1}){const c=new AbortController,l=(k,j,ee,ge={})=>k.addEventListener(j,ee,{...ge,signal:c.signal}),u=document.createElement("section");u.className="hologram-entry",u.hidden=!0,u.setAttribute("aria-label","全息文物简介"),u.innerHTML='<small>全息馆藏 <span class="hologram-cycle"></span></small><strong></strong><p></p><button type="button" aria-label="进入当前文物的世界">走进文物的世界 <span>↗</span></button><span class="hologram-key">点击投影 / 按 E 进入</span>';const f=document.createElement("a");f.className="hologram-workbench",f.hidden=!0,f.href=oE(),f.target="_blank",f.rel="noopener",f.setAttribute("aria-label","打开文物修复工作台，新标签页打开"),f.innerHTML='<span class="hologram-workbench-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M10 29c5 2 10 2 14 0M10 31v-9m16 8v-8M14 21l11-13 5 4-12 12-6 2zM23 10l5 4"/></svg></span><span class="hologram-workbench-copy"><small>修复工坊 · RESTORATION</small><strong>文物修复工作台</strong><span>上传照片 · 修复与建模</span></span><span class="hologram-workbench-action"><span aria-hidden="true">↗</span><small>点击开启</small></span>',document.body.append(u,f);const d=new L(...n),h=d.clone().add(new L(0,.88,0)),g=uE(n),_=g.anchor,m=new Yn(h,.85),p=new Ue,M=new Ue,x=new L,b=new L,y=new L,E=new Ju,T=new Yi,C=r.map(k=>new nt().setFromCenterAndSize(new L(...k.center),new L(...k.size))).filter(k=>!k.containsPoint(d));let S=!1,v=!1,w=!1,A=!1,I=!1,D=!1,F=null,O=-1/0,G=null,z=0;function Z(k){if(x.copy(k).project(e),x.z<-1||x.z>1||Math.abs(x.x)>.95||Math.abs(x.y)>.95)return!1;const j=e.position.distanceTo(k);return T.set(e.position,b.subVectors(k,e.position).normalize()),!C.some(ee=>T.intersectBox(ee,y)&&e.position.distanceTo(y)<j-.1)}function $(k=p){return E.setFromCamera(k,e),fE(E.ray,m,g.box)}function le(k){if(f.hidden)return!1;const j=i.getBoundingClientRect(),ee=f.getBoundingClientRect(),ge=j.left+(k.x+1)*j.width/2,de=j.top+(1-k.y)*j.height/2;return ge>=ee.left&&ge<=ee.right&&de>=ee.top&&de<=ee.bottom}function Ie(){return document.pointerLockElement===i||i.dataset.mode==="walk"||matchMedia("(pointer:coarse)").matches}function Ke(){if(D)return;if(v=s()&&Math.hypot(e.position.x-d.x,e.position.z-d.z)<4.5&&(Z(h)||Z(_)),f.hidden=!v,!v){w=!1,A=!1,I=!1,S=!1,u.hidden=!0;return}const k=i.getBoundingClientRect();x.copy(_).project(e);const j=innerWidth<700;f.style.left=`${Math.max(180,Math.min(innerWidth-180,k.left+(x.x+1)*k.width/2))}px`,f.style.top=`${j?Math.min(innerHeight-204,Math.max(innerHeight*.55,k.top+(1-x.y)*k.height/2)):Math.max(135,Math.min(innerHeight-160,k.top+(1-x.y)*k.height/2))}px`;const ee=Ie()?M:p,ge=$(ee);I=ge==="workbench"||le(ee);const de=ge==="artifact"&&!I;if(de&&(O=performance.now()),S=!I&&(w||de||performance.now()-O<650),u.hidden=!S,f.dataset.aimed=String(I||A),f.querySelector(".hologram-workbench-action small").textContent=matchMedia("(pointer:coarse)").matches?"轻触开启":I?"点击 / E":"点击开启",!S)return;const Pe=t.getCurrent(),te=t.getState();u.dataset.modelId=(Pe==null?void 0:Pe.artifactId)||"",u.querySelector("strong").textContent=(Pe==null?void 0:Pe.name)||"等待一件器物到来",u.querySelector(".hologram-cycle").textContent=Pe?`${String(te.index+1).padStart(2,"0")} / ${String(te.count).padStart(2,"0")}`:"",u.querySelector("p").textContent=Pe?rf[Pe.artifactId]||"循着轮廓，走进器物的故事。":"光影正在准备，稍候即可走近。",u.querySelector("button").disabled=!(Pe!=null&&Pe.artifactId)}function $e(){if(!S||!s())return!1;const k=t.getCurrent();if(!(k!=null&&k.artifactId))return!1;F=k.artifactId;const j=o(F,{focusPoint:h});return j&&(u.hidden=!0,f.hidden=!0,w=!1),j}l(u,"pointerenter",()=>{w=!0}),l(u,"pointerleave",()=>{w=!1}),l(u.querySelector("button"),"click",$e),l(f,"pointerenter",()=>{A=!0}),l(f,"pointerleave",()=>{A=!1}),l(f,"click",k=>{if(!v||!s()){k.preventDefault();return}a()});function Be(){return!v||!s()?!1:(f.click(),!0)}return l(i,"pointermove",k=>{const j=i.getBoundingClientRect();p.set((k.clientX-j.left)/j.width*2-1,-(k.clientY-j.top)/j.height*2+1),(G==null?void 0:G.id)===k.pointerId&&(z=Math.max(z,Math.hypot(k.clientX-G.x,k.clientY-G.y)))}),l(i,"pointerdown",k=>{G||(G={id:k.pointerId,x:k.clientX,y:k.clientY},z=0)}),l(i,"pointerup",k=>{(G==null?void 0:G.id)===k.pointerId&&(G=null)}),l(i,"pointercancel",()=>{G=null,z=1/0}),l(i,"click",k=>{if(z>7||!v||!s())return;const j=i.getBoundingClientRect(),ee=document.pointerLockElement===i?M:new Ue((k.clientX-j.left)/j.width*2-1,-(k.clientY-j.top)/j.height*2+1),ge=$(ee);if(ge==="workbench"||le(ee)){Be()&&(k.preventDefault(),k.stopImmediatePropagation());return}ge==="artifact"&&(S=!0,$e()&&(k.preventDefault(),k.stopImmediatePropagation()))},{capture:!0}),l(window,"keydown",k=>{var ee;if(k.code!=="KeyE"||k.repeat||/INPUT|TEXTAREA|SELECT/.test((ee=document.activeElement)==null?void 0:ee.tagName))return;const j=Ie()?M:p;if(v&&(A||$(j)==="workbench"||le(j))){Be()&&(k.preventDefault(),k.stopImmediatePropagation());return}$e()&&(k.preventDefault(),k.stopImmediatePropagation())},{capture:!0}),{update:Ke,isOpen:()=>!1,isEngaged:()=>(S||I||A)&&v,getState:()=>({engaged:S,nearby:v,workbenchAimed:I,open:!1,modelId:F,viewing:!1}),dispose(){D=!0,c.abort(),u.remove(),f.remove()}}}const Uh="COL_central_inscription",hE="Web_R14_Central_front_inscription",Nh=.002;function pE(i,e,{replaceNumberPlates:t=!1}={}){i.updateMatrixWorld(!0);const n=new L,s=e.colliders.filter(l=>l.id==="COL_central_case"||/COL_(Left|Right) exhibit/.test(l.id)||l.id==="COL_Far gallery porcelain").map(l=>({id:l.id,center:l.center,bounds:new nt,glassBounds:new nt}));let a=null;i.traverse(l=>{if(!l.isMesh)return;(l.name===hE||l.name==="Web_R14_Central front inscription")&&(a=l);const f=(Array.isArray(l.material)?l.material:[l.material]).some(h=>h.name.toLowerCase().includes("display glass")),d=l.geometry.attributes.position;for(let h=0;h<d.count;h++)if(n.fromBufferAttribute(d,h).applyMatrix4(l.matrixWorld),!(n.y<.05||n.y>2.5))for(const g of s){const m=g.id==="COL_central_case"?2.1:1.25;Math.abs(n.x-g.center[0])>m||Math.abs(n.z-g.center[2])>m||(g.bounds.expandByPoint(n),f&&g.glassBounds.expandByPoint(n))}});const o=[],c=[];for(const l of e.exhibits??[]){const u=i.getObjectByName(`Web_R17_Exhibit_${l.id}_number_plaque`),f=i.getObjectByName(`Web_R17_Exhibit_${l.id}_number_label`);if(!u||!f)continue;if(t){u.visible=!1,f.visible=!1,c.push(u.name,f.name);const y=e.colliders.findIndex(E=>E.id===`COL_exhibit_plaque_${l.id}`);y!==-1&&e.colliders.splice(y,1);continue}u.visible=!0,f.visible=!0;const d=l.side==="left"?1:-1,h=l.position[0],g=new nt().setFromObject(u,!0),_=d>0?g.min.x:g.max.x,m=h+d*1.154,p=d*Math.max(0,d*(m-_));for(const y of[u,f]){const E=y.getWorldPosition(new L);E.x+=p,y.position.copy(y.parent.worldToLocal(E)),y.updateMatrixWorld(!0),c.push(y.name)}const M=new nt().setFromObject(u,!0);M.union(new nt().setFromObject(f,!0)).expandByScalar(Nh);const x={id:`COL_exhibit_plaque_${l.id}`,kind:"exhibit_number_plaque",center:M.getCenter(new L).toArray(),size:M.getSize(new L).toArray(),rotationY:0,measuredNode:u.name},b=e.colliders.findIndex(y=>y.id===x.id);b===-1?e.colliders.push(x):e.colliders[b]=x,o.push(x)}if(a){const l=new nt().setFromObject(a,!0).expandByScalar(Nh),u={id:Uh,kind:"exhibit_inscription",center:l.getCenter(new L).toArray(),size:l.getSize(new L).toArray(),rotationY:0,measuredNode:a.name},f=e.colliders.findIndex(d=>d.id===Uh);f===-1?e.colliders.push(u):e.colliders[f]=u,o.push(u)}return{modelModified:c.length>0,repairedNodes:c,addedColliders:o,measurements:s.map(l=>({id:l.id,bounds:{min:l.bounds.min.toArray(),max:l.bounds.max.toArray()},glassBounds:l.glassBounds.isEmpty()?null:{min:l.glassBounds.min.toArray(),max:l.glassBounds.max.toArray()}}))}}const Mo={"speechless-buddha":{name:"默然笺",paper:"#e8eadd",ink:"#435144",accent:"#9a8b59",muted:"#707b68",motto:"不必多言，相逢已好。",motif:"still"},"phoenix-ewer":{name:"青花笺",paper:"#f5f1e7",ink:"#193b66",accent:"#315f97",muted:"#737b87",motto:"一抹青蓝，留住此刻。",motif:"waves"},"bronze-head":{name:"铜影铭",paper:"#123830",ink:"#f2e6c8",accent:"#c2a66c",muted:"#b9c5b4",motto:"铜色无言，目光有声。",motif:"angles"},"cloud-mirror":{name:"照影笺",paper:"#f0e0c6",ink:"#634a37",accent:"#9c703f",muted:"#887668",motto:"照见流光，也照见相逢。",motif:"arcs"},"liquan-bodhisattva":{name:"静观笺",paper:"#eeeae2",ink:"#514e48",accent:"#b4a078",muted:"#848075",motto:"静观一瞬，心有回响。",motif:"halo"},"longquan-figure":{name:"青瓷笺",paper:"#dfece1",ink:"#2b5647",accent:"#5d8b73",muted:"#6d8274",motto:"梅子青里，时间温润。",motif:"contours"},"pipa-figurine":{name:"遗音笺",paper:"#4a2932",ink:"#f5e4d1",accent:"#d6b581",muted:"#cbb8aa",motto:"弦声虽远，余韵犹在。",motif:"strings"}};function mE(i){return{...Object.hasOwn(Mo,i)?Mo[i]:Mo["phoenix-ewer"]}}function gE(i){return Object.hasOwn(Mo,i)?`/images/checkin/portraits/${encodeURIComponent(i)}.webp`:null}function ul(i,e,t,n,r){i.save(),i.translate(e,t),i.rotate(n),i.scale(r,r),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-92,110,-100,-76,0,-210),i.bezierCurveTo(100,-76,92,110,0,210),i.stroke(),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-8,70,6,-100,0,-210);for(let s=0;s<7;s++){const a=-135+s*45;i.moveTo(0,a+36),i.quadraticCurveTo(-42,a+20,-62,a-8),i.moveTo(0,a+36),i.quadraticCurveTo(42,a+20,62,a-8)}i.stroke(),i.restore()}function bE(i,e,t,n){i.save(),i.translate(e,t),i.scale(n/400,n/400);for(let r=-4;r<=4;r++)i.save(),i.rotate(r*.25),i.beginPath(),i.moveTo(0,72),i.bezierCurveTo(-60,8,-48,-64,0,-112),i.bezierCurveTo(48,-64,60,8,0,72),i.stroke(),i.restore();i.restore()}function Yp(i,e){i.strokeStyle=e.accent,i.globalAlpha=.3,i.lineWidth=3,ul(i,152,686,-.26,1.2),ul(i,900,696,.28,1.25),ul(i,1012,690,.45,1.05),i.globalAlpha=.25;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(-30,925+t*15),i.bezierCurveTo(200,840+t*14,288,1040+t*12,530,953+t*13),i.bezierCurveTo(760,860+t*12,910,1030+t*12,1120,925+t*15),i.stroke()}function _E(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.lineWidth=3;for(let t=0;t<3;t++){const n=t*36;i.beginPath(),i.moveTo(540,385+n),i.lineTo(958-n,555+n/3),i.lineTo(958-n,907-n/3),i.lineTo(540,1045-n),i.lineTo(122+n,907-n/3),i.lineTo(122+n,555+n/3),i.closePath(),i.globalAlpha=t===0?.07:.03,i.fill(),i.globalAlpha=.32-t*.06,i.stroke()}i.globalAlpha=.34;for(let t=0;t<22;t++){const n=t*Math.PI*2/22;i.beginPath(),i.moveTo(540+Math.cos(n)*305,713+Math.sin(n)*305),i.lineTo(540+Math.cos(n)*330,713+Math.sin(n)*330),i.stroke()}for(const t of[78,1002])for(let n=440;n<1020;n+=88)i.beginPath(),i.moveTo(t,n),i.lineTo(t+28,n),i.lineTo(t+28,n+50),i.lineTo(t+10,n+50),i.lineTo(t+10,n+22),i.stroke()}function xE(i,e){i.strokeStyle=e.accent,i.lineWidth=3,i.globalAlpha=.4;for(const t of[230,265,290,310])i.beginPath(),i.arc(540,710,t,0,Math.PI*2),i.stroke();i.globalAlpha=.32;for(let t=0;t<8;t++){const n=t*Math.PI/4;i.beginPath(),i.arc(540+Math.cos(n)*208,710+Math.sin(n)*208,83,0,Math.PI*2),i.stroke()}i.lineWidth=2,i.globalAlpha=.22;for(let t=0;t<48;t++){const n=t*Math.PI/24;i.beginPath(),i.moveTo(540+Math.cos(n)*295,710+Math.sin(n)*295),i.lineTo(540+Math.cos(n)*305,710+Math.sin(n)*305),i.stroke()}}function vE(i,e){i.strokeStyle=e.accent,i.lineWidth=3;for(let t=0;t<4;t++){const n=194+t*27;i.globalAlpha=.36-t*.045,i.beginPath(),i.moveTo(540-n,1040),i.lineTo(540-n,690),i.arc(540,690,n,Math.PI,Math.PI*2),i.lineTo(540+n,1040),i.stroke()}i.globalAlpha=.3,bE(i,540,970,710),i.lineWidth=2,i.globalAlpha=.16;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(70+t*13,410),i.lineTo(70+t*13,985),i.moveTo(1010-t*13,410),i.lineTo(1010-t*13,985),i.stroke()}function yE(i,e){i.fillStyle=e.accent,i.strokeStyle=e.accent;for(let t=0;t<6;t++){const n=t*62;i.beginPath(),i.moveTo(-80,665+n),i.bezierCurveTo(130,330+n,235,940+n,475,615+n),i.bezierCurveTo(680,345+n,870,810+n,1160,500+n),i.lineTo(1160,1090),i.lineTo(-80,1090),i.closePath(),i.globalAlpha=.045+t*.012,i.fill(),i.globalAlpha=.21,i.lineWidth=2,i.stroke()}i.strokeStyle="#b69965",i.globalAlpha=.42,i.beginPath(),i.moveTo(998,395),i.lineTo(949,495),i.lineTo(976,580),i.lineTo(906,650),i.lineTo(925,754),i.lineTo(860,843),i.lineTo(883,953),i.stroke()}function ME(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.globalAlpha=.1,i.beginPath(),i.arc(832,574,170,0,Math.PI*2),i.fill(),i.globalAlpha=.44,i.lineWidth=2,i.stroke();for(let t=0;t<4;t++){const n=113+t*25;i.beginPath(),i.moveTo(n,378),i.bezierCurveTo(n+250,560,n-70,800,n+200,1030),i.stroke()}i.globalAlpha=.22;for(let t=0;t<6;t++)i.beginPath(),i.moveTo(805+t*18,700),i.bezierCurveTo(610+t*23,830,978+t*23,913,870+t*21,1040),i.stroke()}function SE(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent;for(let t=0;t<3;t++)i.beginPath(),i.arc(540,695,245+t*30,0,Math.PI*2),i.globalAlpha=t===0?.085:.035,i.fill(),i.globalAlpha=.3-t*.055,i.lineWidth=t===0?3:2,i.stroke();i.globalAlpha=.46;for(let t=0;t<3;t++)i.beginPath(),i.arc(864+t*35,429,6,0,Math.PI*2),i.fill();i.lineWidth=5;for(const t of[914,935])i.beginPath(),i.moveTo(t,856),i.lineTo(t+5,896),i.stroke();i.globalAlpha=.24,i.lineWidth=2;for(let t=0;t<4;t++)i.beginPath(),i.moveTo(55,926+t*19),i.bezierCurveTo(110,894+t*19,175,961+t*19,246,924+t*19),i.stroke()}const EE={waves:Yp,angles:_E,arcs:xE,halo:vE,contours:yE,strings:ME,still:SE};function TE(i,e){i.save();const t=i.createRadialGradient(1010,545,20,540,690,1050);t.addColorStop(0,e.accent+"38"),t.addColorStop(.62,e.accent+"0c"),t.addColorStop(1,e.accent+"00"),i.fillStyle=t,i.fillRect(0,0,1080,1440),i.fillStyle=e.ink,i.globalAlpha=.027;for(let r=0;r<1600;r++)i.fillRect(r*73%1080,r*137%1440,1+r%3*.35,.8);i.globalAlpha=1,i.beginPath(),i.rect(44,378,992,650),i.clip(),(EE[e.motif]||Yp)(i,e);const n=i.createRadialGradient(540,710,80,540,710,345);n.addColorStop(0,e.paper+"e6"),n.addColorStop(.65,e.paper+"99"),n.addColorStop(1,e.paper+"00"),i.globalAlpha=1,i.fillStyle=n,i.fillRect(44,378,992,650),i.restore()}function wE(i){const e=document.createElement("canvas");return e.width=e.height=i.size,e.getContext("2d").putImageData(new ImageData(i.pixels,i.size,i.size),0,0),e}function Fh(i,e,t,n,r,s){let a="";for(const o of e)i.measureText(a+o).width>r&&(i.fillText(a,t,n),a="",n+=s),a+=o;i.fillText(a,t,n)}function AE({scene:i,camera:e,canvas:t,assignments:n,onView:r=()=>{},isAvailable:s=()=>!0,onOpen:a=()=>{},onClose:o=()=>{},location:c=globalThis.location,maxDistance:l=4.8}){const u=new En;u.name="ExhibitLabels",i.add(u);const f=new _r(1.24,.3),d=new L,h=new L,g=new L,_=new L,m=new AbortController,p=document.createElement("dialog");p.className="exhibit-label-dialog",p.setAttribute("aria-label","文物高清二维码"),p.innerHTML='<canvas class="exhibit-card-background" aria-hidden="true"></canvas><button class="exhibit-label-close" type="button" aria-label="关闭二维码卡片">×</button><div class="exhibit-card-content"><p class="exhibit-label-kicker"></p><h2></h2><p class="exhibit-card-motto"></p><div class="exhibit-card-portrait"><img alt=""><span class="exhibit-card-image-fallback" hidden>文物影像暂未载入</span></div><div class="exhibit-card-rule"><span>一器 · 一世界</span><span class="exhibit-card-theme-name"></span></div><div class="exhibit-label-qr"></div><p class="exhibit-label-scan">高清二维码 · 扫码查看文物</p><p class="exhibit-label-network"></p><button class="exhibit-label-view" type="button">走进文物的世界 ↗</button></div>',document.body.append(p);const M=p.querySelector(".exhibit-card-portrait img");M.addEventListener("error",()=>{M.hidden=!0,p.querySelector(".exhibit-card-image-fallback").hidden=!1},{signal:m.signal});const x=p.querySelector(".exhibit-card-background");x.width=540,x.height=720;let b=null,y=!1;const E=n.map((v,w)=>{const A=jS(v.artifactId,c),I=wE(KS(A)),D=document.createElement("canvas");D.width=1024,D.height=248;const F=D.getContext("2d");F.fillStyle="#f5f0e4",F.fillRect(0,0,1024,248),F.strokeStyle="#ad894c",F.lineWidth=3,F.strokeRect(14,14,996,220),F.fillStyle="#826638",F.font="20px sans-serif",F.fillText(`${String(w+1).padStart(2,"0")}  /  重器新生 · 馆藏`,36,44),F.fillStyle="#242723",F.font='bold 31px "Microsoft YaHei", sans-serif',Fh(F,v.name,36,94,700,40),F.font='22px "Microsoft YaHei", sans-serif',Fh(F,rf[v.artifactId]??"",36,149,675,29),F.imageSmoothingEnabled=!1,F.drawImage(I,797,30,178,178),F.fillStyle="#826638",F.font='16px "Microsoft YaHei", sans-serif',F.textAlign="center",F.fillText("点击查看高清二维码",886,231);const O=new eb(D);O.colorSpace=Pt;const G=new ii({map:O,toneMapped:!1}),z=new gt(f,G),Z=JS(v);z.position.fromArray(Z.position),z.rotation.order="YXZ",z.rotation.set(Z.rotationX,Z.rotationY,0),z.userData.cabinetId=v.cabinetId,z.userData.artifactId=v.artifactId,z.name=`ExhibitLabel_${v.artifactId}`,u.add(z);const $=document.createElement("button");$.type="button",$.className="exhibit-qr-hit",$.setAttribute("aria-label",`查看${v.name}高清二维码`),$.setAttribute("aria-haspopup","dialog"),$.hidden=!0,document.body.append($);const le={assignment:v,url:A,qr:I,mesh:z,material:G,texture:O,button:$,index:w};return $.addEventListener("click",Ie=>{Ie.stopPropagation(),s()&&T(le)},{signal:m.signal}),le});function T(v){b=v;const w=mE(v.assignment.artifactId);p.dataset.artifactId=v.assignment.artifactId;for(const I of["paper","ink","accent","muted"])p.style.setProperty(`--card-${I}`,w[I]);const A=x.getContext("2d");A.clearRect(0,0,x.width,x.height),A.save(),A.scale(.5,.5),TE(A,w),A.restore(),M.hidden=!1,p.querySelector(".exhibit-card-image-fallback").hidden=!0,M.alt=v.assignment.name,M.src=gE(v.assignment.artifactId),p.querySelector(".exhibit-label-kicker").textContent=`${String(v.index+1).padStart(2,"0")} / 重器新生 · 文物观览卡`,p.querySelector("h2").textContent=v.assignment.name,p.querySelector(".exhibit-card-motto").textContent=w.motto,p.querySelector(".exhibit-card-theme-name").textContent=w.name,p.querySelector(".exhibit-label-qr").replaceChildren(v.qr),p.querySelector(".exhibit-label-network").textContent=XS(v.url)?"当前是本机地址，手机无法直接扫码。请用电脑的局域网地址进入展厅，并确保手机与电脑连接同一网络。":"手机与电脑连接同一网络即可扫码浏览。",E.forEach(I=>{I.button.hidden=!0}),a(v.assignment),p.showModal()}function C(){!b||p.open||(b=null,o())}function S(){p.open&&p.close(),C()}return p.querySelector(".exhibit-label-close").addEventListener("click",S,{signal:m.signal}),p.addEventListener("close",C,{signal:m.signal}),p.querySelector(".exhibit-label-view").addEventListener("click",()=>{const v=b==null?void 0:b.assignment;S(),v&&r(v.artifactId)},{signal:m.signal}),{group:u,records:E,openLabel(v){if(y||p.open||!s())return!1;const w=E.find(A=>A.assignment.artifactId===v);return w?(T(w),!0):!1},get isOpen(){return p.open},close:S,update(){if(y)return;const v=t.getBoundingClientRect();let w=!1;for(const A of E){const{mesh:I,button:D}=A;I.getWorldPosition(d),h.subVectors(e.position,d),g.set(0,0,1).applyQuaternion(I.quaternion);const F=!p.open&&s()&&h.length()<=l&&h.dot(g)>0;if(_.set((886/1024-.5)*1.24,(.5-128/248)*.3,0),I.localToWorld(_),d.copy(_).project(e),D.hidden=!F||d.z<-1||d.z>1||Math.abs(d.x)>.84||Math.abs(d.y)>.85,!D.hidden){w=!0;const O=e.position.distanceTo(_),G=v.height/(2*Math.tan(e.fov*Math.PI/360)*O),z=Math.max(36,Math.min(150,.23*G));D.style.width=`${z}px`,D.style.height=`${Math.max(36,z*.85)}px`,D.style.left=`${v.left+(d.x+1)*v.width/2}px`,D.style.top=`${v.top+(1-d.y)*v.height/2}px`}}document.body.classList.toggle("has-readable-label",w)},dispose(){if(!y){y=!0,S(),m.abort(),p.remove(),document.body.classList.remove("has-readable-label");for(const v of E)v.button.remove(),v.texture.dispose(),v.material.dispose();f.dispose(),u.removeFromParent()}}}}const Ae=i=>document.querySelector(i),Ct=new hp;Ct.background=new Oe("#101611");const ft=new _y({antialias:!0,powerPreference:"high-performance"});ft.setPixelRatio(Math.min(devicePixelRatio,1.25));ft.setSize(innerWidth,innerHeight);ft.outputColorSpace=Pt;ft.toneMapping=jh;ft.toneMappingExposure=1.1;Ae("#canvas").appendChild(ft.domElement);ft.domElement.tabIndex=0;const ye=new Gt(58,innerWidth/innerHeight,.05,140);ye.position.set(0,1.7,7.7);ye.rotation.order="YXZ";const Kp=new cu(ft),Jp=new eM;Ct.environment=Kp.fromScene(Jp,.02).texture;Jp.dispose();Kp.dispose();Ct.environmentIntensity=.48;Ct.add(new _b(14149106,1514020,.85));const Te=ft.domElement;Te.setAttribute("aria-label","可交互数字展厅");const pt={reticle:Ae("#reticle"),aim:Ae("#aimHint"),story:Ae("#story"),guide:Ae("#guide"),walk:Ae("#walk")},$p=[];let Cn=null,qi=!1,pr=null,ia=!1,Pn=!1,ti=null,Si=null,pa=null,on=null,Ot=null,vt=null,Vs=[],Oh=[],kt=null,ht=null,Io=null,Bh=null,So=!1;const Mu=new AbortController;function Zt(){return!!(Ot!=null&&Ot.isOpen()||ht!=null&&ht.isOpen()||vt!=null&&vt.isOpen)}async function RE(){if(!(So||!kt||ht!=null&&ht.isEngaged()&&kt.getCurrent())){So=!0;try{const i=await lE({signal:Mu.signal});if(Mu.signal.aborted)return;const e=JSON.stringify(i);e!==Bh&&(!(ht!=null&&ht.isEngaged())||!kt.getCurrent())&&(kt.setModels(i),Bh=e),Io=null}catch(i){i.name!=="AbortError"&&(Io=i.message)}finally{So=!1}}}const Su=[],fl=new Ju,dl=new Ue,Zp=new Un,Eu=new L(0,1.55,8.94),Ni=new L;let rn,xt,Wt=!1,Qp=0,vi=!1,xe="paused",Dn=!1,si=matchMedia("(prefers-reduced-motion: reduce)").matches,mr=[],ps=null,ra=null,Oi=0,Tu=0,cn=null,Ei=null,kh=!1,ko=!1,em=Ae("#edgeTurn").checked;const CE=lS(()=>Te.requestPointerLock());let ms=performance.now(),hl=0,pl=0,yi=!1,Xs=0,Vn=ri.speed,pn=0,Eo=0,Ys=0,ml=0,gl=0;const Qr=new Map,nn=new Set,ma=ye.position.clone(),zh=new L,Fi=new L,wu=new L(3.7,1.35,7.6),bl=new L,Hh=new Yi,Vh=new Un,Gh=new Un,zi=[],Ks=[],Js=[];let Jr=Math.min(devicePixelRatio,1.25),Gs=null,Kr=0;const Do={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function zo(){Oi=ye.rotation.y,Tu=ye.rotation.x}function sf(){const i=Ei;Ei=null,Hp(Te,i)}function af(){ye.position.y-=pn,pn=0,Ys=0,nn.clear();for(const[i,e]of Qr)Hp(i,{id:e});Qr.clear(),cn=null,sf(),rn==null||rn.stop(),ma.copy(ye.position),zo()}function xa(){const i=document.pointerLockElement===Te;Te.dataset.lookMode=xe==="walk"&&Dn?i?"pointer-lock":ko?"right-drag":"mouse-follow":"paused",pt.walk.textContent=xe==="walk"&&Dn?i?"暂停环顾 · Esc":"点击锁定鼠标 · 连续转向":"继续鼠标环顾",Ae("#walkHint").textContent=i?"WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情":"点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停"}function lt(i,e){i!=="story"&&(ra=null),i!=="guide"&&(mr=[],ps=null),i!=="observe"&&(Si=null),i!=="guide"&&(pa=null),xe=i,Dn=cS(i,e,matchMedia("(pointer:coarse)").matches),af(),i!=="walk"&&document.pointerLockElement===Te&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",Dn),document.body.classList.toggle("free-visit",i==="walk"),document.querySelector("footer").inert=i==="walk"||i==="entering",Ae("#caseChoices").inert=i==="walk"||i==="entering",Te.dataset.mode=xe,xa(),pt.story.hidden=i!=="story"}let Au;function ga(i){clearTimeout(Au),Ae("#status").textContent=i,Ae("#status").classList.add("show"),Au=setTimeout(()=>Ae("#status").classList.remove("show"),2600)}function va(){Wt&&(vi=!0,Ae("#intro").classList.add("dismissed"),Ae("#intro").inert=!0,Te.focus())}function of(i){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=i;document.body.classList.toggle("entering-gallery",i)}function PE(){va(),lt("entering"),Pn=!1,ia=!1,on=null,Cn.reset(),Cn.target=1,ti=new bS(xt.entrySequence),ye.position.fromArray(xt.entrySequence.outside),ye.lookAt(new L(...xt.entrySequence.lookAt)),zo(),of(!0),Ae("#caseChoices").hidden=!0,Ae("#location").textContent="推门入馆 · 正在打开玻璃门",Te.dataset.entryPhase="opening",matchMedia("(pointer:coarse)").matches||Ho()}async function tm(){if(!(!Wt||Zt()||xe==="story"||xe==="entering"||pt.guide.open)){if(!Pn){PE();return}if(xe==="walk"&&Dn&&document.pointerLockElement===Te){lt("paused");return}va(),lt("walk",!matchMedia("(pointer:coarse)").matches),Dn&&await Ho()}}async function Ho(){if(!(document.pointerLockElement===Te||!["walk","entering"].includes(xe)||Zt()||pt.guide.open)){try{await CE()}catch(i){Te.dataset.lockError=i.name||"Unavailable",["walk","entering"].includes(xe)&&!Zt()&&ga("鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身")}xa()}}function LE(){ia=!1,lt("paused"),vi=!1,Pn=!1,ti=null,on=null,of(!1),Ae("#caseChoices").hidden=!0,Cn.reset(),ye.position.fromArray(Do.entrance.p),ye.quaternion.copy(Zp),ma.copy(ye.position),zo(),Eo=0,Vn=ri.speed,rn.speed=Vn,Ae("#speed").value=Vn,Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒",yi=!1,qi=!1,Xs=0,qn.hidden=!0,gn.hidden=!0,pt.aim.textContent="",pt.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),Ae("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view==="entrance")),clearTimeout(Au),Ae("#status").classList.remove("show"),pt.guide.open&&pt.guide.close(),Ae("#intro").inert=!1,Ae("#intro").classList.remove("dismissed"),Ae("#enter").focus({preventScroll:!0})}function nm(){if(xe==="entering"){nn.clear(),cn=null,sf();return}if(xe==="story"){af();return}lt("paused")}function im(i){if(!Wt||Zt()||xe==="entering")return;if(i==="cases"){Ae("#caseChoices").hidden=!1,Vo(Number.isInteger(on==null?void 0:on.id)?on.id:1);return}if(i==="hero"||i==="story"){sm(xt.observationTargets[i],i);return}Ae("#caseChoices").hidden=!0,on=null,pa=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),va(),lt("guide");const e=Do[i];if(ps=new L(...e.t),si)ye.position.fromArray(e.p),ye.lookAt(ps),lt("paused");else{const t=zp(ye.position.toArray(),e.p,xt);if(!t.length){ga("请先离开展柜边缘，再选择参观点"),lt("paused");return}mr=t.map(n=>new L(...n))}Ae("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===i))}function rm(i){lt("observe"),on=i,Si=new gS(i,{reduced:si}),ye.position.copy(Si.views.left),ye.lookAt(Si.views.target),Te.dataset.selectedExhibit=String(i.id),Te.dataset.observationPhase="left",Ae("#location").textContent=i.label+" · 左侧观察"}function Vo(i){if(!Wt||Zt()||xe==="entering")return;const e=xt.exhibits.find(t=>t.id===Number(i));e&&sm(e,"cases")}function sm(i,e){if(!Wt||Zt()||xe==="entering")return;va(),lt("guide"),on=i,Ae("#caseChoices").hidden=e!=="cases";const t=Vp(i);if(ps=t.target,document.querySelectorAll("[data-view]").forEach(r=>r.classList.toggle("active",r.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(r=>{const s=Number(r.dataset.exhibit)===i.id;r.classList.toggle("active",s),r.setAttribute("aria-pressed",String(s))}),Ae("#location").textContent=i.label+" · 前往左侧观察位",Te.dataset.selectedExhibit=String(i.id),Te.dataset.observationPhase="approach",si){rm(i);return}const n=zp(ye.position.toArray(),t.left.toArray(),xt);if(!n.length){ga("请先离开展柜边缘，再选择观察位置"),lt("paused");return}pa=i,mr=n.map(r=>new L(...r))}Ae("#enter").onclick=tm;pt.walk.onclick=tm;document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>im(i.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(i=>i.onclick=()=>Vo(i.dataset.exhibit));Ae("#help").onclick=()=>{Zt()||xe==="story"||xe==="entering"||(lt("paused"),pt.guide.showModal())};Ae("#closeHelp").onclick=()=>pt.guide.close();function am(){Ae("#motion").setAttribute("aria-pressed",String(si)),Ae("#motion").textContent=si?"动态已减弱":"减弱动态"}am();Ae("#motion").onclick=()=>{si=!si,am()};Ae("#speed").min=ri.minSpeed;Ae("#speed").max=ri.maxSpeed;Ae("#speed").step=ri.step;Ae("#speed").value=Vn;Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒";Ae("#speed").oninput=i=>{const e=Number(i.target.value);Vn=In.clamp(Number.isFinite(e)?e:ri.speed,ri.minSpeed,ri.maxSpeed),i.target.value=Vn,rn&&(rn.speed=Vn),Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒"};Ae("#edgeTurn").onchange=i=>{em=i.target.checked,cn=null};const qn=document.createElement("button");qn.className="hotspot";qn.textContent="＋ 开启故事";qn.hidden=!0;Ae("#hotspots").appendChild(qn);function cf(){if(xe==="story"||pt.guide.open||!Wt)return;const i={p:ye.position.clone(),q:ye.quaternion.clone()};i.p.y-=pn,lt("story"),ra=i}qn.onclick=cf;const gn=document.createElement("button");gn.className="hotspot";gn.id="doorHotspot";gn.textContent="推开玻璃门";gn.hidden=!0;Ae("#hotspots").appendChild(gn);function lf(){!Wt||!Pn||xe==="story"||xe==="entering"||pt.guide.open||Cn.toggle()}gn.onclick=lf;function uf(){xe==="story"&&(ra&&(ye.position.copy(ra.p),pn=0,ye.quaternion.copy(ra.q)),lt("paused"),Te.focus())}Ae("#closeStory").onclick=uf;Ae("#returnStory").onclick=uf;function om(i,e){Zt()||uS(ye,i,e)&&zo()}document.addEventListener("mousemove",i=>{if(xe!=="walk"||!Dn||Zt()||pt.guide.open)return;const e=document.pointerLockElement===Te;if(!e&&ko&&!(i.buttons&2)){cn=null;return}const t=hS(cn,i,performance.now(),e);om(t.dx,t.dy),cn=t.point});window.addEventListener("mouseout",i=>{i.relatedTarget||(cn=null)});const Ss=mS();Te.addEventListener("pointerdown",i=>Ss.down(i),!0);Te.addEventListener("pointermove",i=>{document.pointerLockElement!==Te&&Ss.move(i)},!0);Te.addEventListener("pointerup",i=>Ss.end(i),!0);Te.addEventListener("pointercancel",i=>Ss.end(i,!0),!0);Te.addEventListener("lostpointercapture",i=>{i.pointerType==="touch"&&Ss.end(i,!0)},!0);Te.addEventListener("click",i=>{Ss.click(document.pointerLockElement===Te)&&(i.preventDefault(),i.stopImmediatePropagation())},!0);Te.addEventListener("pointerdown",i=>{!Wt||Zt()||!Pn||xe==="story"||xe==="entering"||pt.guide.open||(Te.focus(),i.pointerType==="mouse"&&i.button===2&&document.pointerLockElement!==Te?((xe!=="walk"||!Dn)&&lt("walk",!0),ko=!0,cn={x:i.clientX,y:i.clientY},xa()):i.pointerType==="mouse"&&i.button===0&&i.isTrusted&&xe==="walk"&&Dn&&Ho(),i.pointerType==="touch"&&!Ei&&(xe!=="walk"&&lt("walk",!1),Ei={id:i.pointerId,x:i.clientX,y:i.clientY},Te.setPointerCapture(i.pointerId)))});Te.addEventListener("contextmenu",i=>{xe==="walk"&&i.preventDefault()});window.addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===2&&(cn=null)});Te.addEventListener("pointermove",i=>{if(!Ei||xe!=="walk"||Zt())return;const e=dS(Ei,i);e&&(om(e.dx,e.dy),Ei=e.point)});for(const i of["pointerup","pointercancel","lostpointercapture"])Te.addEventListener(i,e=>{pS(Ei,e)&&(Ei=null)});Te.addEventListener("click",i=>{if(!Wt||Zt()||xe==="entering"||pt.guide.open)return;if(xe==="walk"&&yi){cf();return}if((xe==="walk"||xe==="paused")&&qi){lf();return}if(document.pointerLockElement===Te)dl.set(0,0);else{const n=Te.getBoundingClientRect();dl.set((i.clientX-n.left)/n.width*2-1,-(i.clientY-n.top)/n.height*2+1)}fl.setFromCamera(dl,ye);const e=vt&&fl.intersectObjects(vt.records.map(n=>n.mesh),!1)[0];if(e&&e.distance<4.8&&YS(e.uv)&&vt.openLabel(e.object.userData.artifactId)){i.preventDefault(),i.stopImmediatePropagation();return}const t=fl.intersectObjects(Su,!1)[0];t&&t.distance<12&&Vo(t.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===Te;if(document.body.classList.toggle("walking",i),Te.dataset.locked=String(i),i&&!["walk","entering"].includes(xe)){document.exitPointerLock();return}cn=null,sf(),i?(ko=!1,delete Te.dataset.lockError):kh&&xe==="walk"&&lt("paused"),kh=i,xa()});document.addEventListener("pointerlockerror",()=>{cn=null,xa()});const Wh=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",i=>{if(!Zt()){if(xe==="entering"){(Wh.has(i.code)||i.key==="Escape")&&i.preventDefault();return}if(i.key==="Escape"){xe==="story"?uf():lt("paused");return}if(!(pt.guide.open||xe==="story")){if(i.code==="KeyE"&&yi){cf();return}if(i.code==="KeyE"&&qi){i.repeat||lf();return}document.activeElement!==Te||!vi||!Pn||!Wh.has(i.code)||(i.preventDefault(),xe!=="walk"&&(lt("walk"),Dn&&Ho()),nn.add(i.code))}}});window.addEventListener("keyup",i=>nn.delete(i.code));window.addEventListener("blur",nm);document.addEventListener("visibilitychange",()=>{document.hidden&&nm(),ms=performance.now()});for(const i of document.querySelectorAll("[data-move]")){i.addEventListener("pointerdown",e=>{!Wt||Zt()||!Pn||pt.guide.open||xe==="story"||xe==="entering"||Qr.has(i)||(e.preventDefault(),va(),xe!=="walk"&&lt("walk"),Qr.set(i,e.pointerId),nn.add(i.dataset.move),i.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,t=>{Qr.get(i)===t.pointerId&&(Qr.delete(i),nn.delete(i.dataset.move))})}function IE(i){Fi.copy(wu).project(ye),bl.subVectors(wu,ye.position);const e=bl.length();let t=xt.storyEnabled!==!1&&vi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!pt.guide.open&&e<3.5&&Fi.z<1&&Math.abs(Fi.x)<1&&Math.abs(Fi.y)<1;if(t){Hh.set(ye.position,bl.normalize());const s=rn.bvh.raycastFirst(Hh,sn);s&&s.distance<e-.5&&(t=!1)}qn.hidden=!t;let n=t&&Math.hypot(Fi.x*innerWidth,Fi.y*innerHeight)<(yi?110:80);n?Xs||(Xs=i):Xs=0,yi=n&&i-Xs>100,Ni.copy(Eu).project(ye);const r=Pn&&vi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!pt.guide.open&&ye.position.distanceTo(Eu)<4.2&&Ni.z<1&&Math.abs(Ni.x)<.95&&Math.abs(Ni.y)<.95;qi=r&&Math.hypot(Ni.x*innerWidth,Ni.y*innerHeight)<140,gn.hidden=!r,r&&(gn.textContent=Cn.target?"合上玻璃门":"推开玻璃门",gn.style.left=`${(Ni.x*.5+.5)*innerWidth}px`,gn.style.top=`${(-Ni.y*.5+.5)*innerHeight+65}px`),pt.reticle.classList.toggle("target",yi||qi),pt.aim.textContent=yi?"点击 / E · 开启故事":qi?`点击 / E · ${Cn.target?"合上":"推开"}玻璃门`:"",t&&!Dn&&(qn.style.left=`${(Fi.x*.5+.5)*innerWidth}px`,qn.style.top=`${(-Fi.y*.5+.5)*innerHeight}px`)}function po(i,e){if(!i.length)return 0;const t=[...i].sort((n,r)=>n-r);return t[Math.floor((t.length-1)*e)]}function cm(){return{frameP50:po(zi,.5),frameP95:po(zi,.95),updateP95:po(Ks,.95),renderP95:po(Js,.95),sampleCount:zi.length,resolution:Jr}}function DE(i){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=i[e];t&&(t.magFilter=Kt,t.minFilter=zn,t.generateMipmaps=!0,t.anisotropy=Math.min(8,ft.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function UE(){try{xt=await(await fetch("/scene_manifest.json")).json();for(const[a,o]of Object.entries(xt.views))Object.assign(Do[a],o);ye.position.fromArray(Do.entrance.p);const i=xt.anchors.find(a=>a.id==="HOTSPOT_Story");wu.fromArray(i.position),Eu.fromArray(xt.layout.doorPoint);const e=await new Zu().loadAsync("/"+xt.model,a=>{a.total&&(Ae("#load").textContent=`载入模型 ${Math.round(a.loaded/a.total*100)}%`)}),t=pE(e.scene,xt,{replaceNumberPlates:!0});rn=new rS(xt.colliders),e.scene.traverse(a=>{var c;if(!a.isMesh)return;a.visible&&a.userData.exhibitId&&Su.push(a),(c=a.material)!=null&&c.name.startsWith("Baked diffuse")&&(a.material=new ii({map:a.material.emissiveMap,color:a.material.emissive.clone().multiplyScalar(.79)}));const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l.transparent||(l.side=Ln),l.name.toLowerCase().includes("glass")&&(l.transmission=0,l.forceSinglePass=!0,l.transparent=!0,l.opacity=.055,l.depthWrite=!1,l.roughness=.035,l.envMapIntensity=.45,l.color.set(13493742),l.needsUpdate=!0),l.name.includes("Idle screen")&&(l.color.set(5400924),l.emissive.set(7440239),l.emissiveIntensity=.35,$p.push(l)),DE(l)}),Ct.add(e.scene),Cn=new aS(e.scene),pr=oS(Ct,ft,e.scene),Ct.background=new Oe(463389);for(const a of xt.lights.filter(o=>o.type==="SPOT"&&o.name.includes("Gallery")).slice(0,4)){const o=new Tp(new Oe(...a.color),10,8,Math.PI/5,.6,2);o.position.fromArray(a.position),o.target.position.set(a.position[0],.5,a.position[2]),Ct.add(o,o.target)}Wt=!0,Qp=performance.now(),Zp.copy(ye.quaternion),ma.copy(ye.position),document.body.dataset.ready="true",Te.dataset.collision="BVH capsule",Ae("#walk").disabled=!1,Ae("#enter").disabled=!1,Ae("#enter").textContent="进入展厅 →",Ae("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:ft,scene:Ct,camera:ye,navigate:im,selectExhibit:Vo,door:Cn,getVisitState:()=>({entered:vi,visitReady:Pn,mode:xe,entryPhase:ti==null?void 0:ti.phase,observationPhase:Si==null?void 0:Si.phase,selectedExhibit:on==null?void 0:on.id}),getMetrics:()=>({...cm(),drawCalls:ft.info.render.calls,triangles:ft.info.render.triangles,position:ye.position.toArray()})},Ot=QS({canvas:Te,camera:ye,scene:Ct,assignments:is,captureFrame:()=>(ft.render(Ct,ye),Te),getMode:()=>xe,isEntered:()=>vi,isBlocked:()=>(vt==null?void 0:vt.isOpen)||(ht==null?void 0:ht.isEngaged())||!Wt||xe==="entering"||xe==="story"||pt.guide.open||qi||yi,colliders:xt.colliders,getPriorityTargets:()=>[...Su,...(vt==null?void 0:vt.records.map(a=>a.mesh))||[]],onOpen:()=>lt("paused"),onClose:()=>{lt("paused"),ms=performance.now(),Te.focus({preventScroll:!0})}}),xt.observationTargets.hero.distance=3,xt.observationTargets.hero.targetHeight=1.8;const n=xt.centralPlatform.position;kt=sE({scene:Ct,position:n,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,prepareForRender:async(a,o)=>{o.throwIfAborted(),await ft.compileAsync(a,ye,Ct),o.throwIfAborted();const c=pr==null?void 0:pr.reflector.getRenderTarget();if(c){const l=ft.getRenderTarget();let u;try{ft.setRenderTarget(c),u=ft.compileAsync(a,ye,Ct)}finally{ft.setRenderTarget(l)}await u,o.throwIfAborted()}},loadModel:async(a,o)=>{await s,o.throwIfAborted();const c=Vs.find(l=>l.assignment.artifactId===a.artifactId);if(!c)throw new Error("馆藏模型暂未载入");return yS(c)}});const r={getCurrent:()=>kt.getCurrent(),getState:()=>({...kt.getState(),...Io&&!kt.getCurrent()?{status:"error",error:Io}:{},libraryLoading:So})};ht=dE({canvas:Te,camera:ye,scene:Ct,stage:r,position:n,colliders:xt.colliders,isAvailable:()=>Wt&&vi&&(Pn||Te.dataset.observationPhase==="complete")&&["walk","paused"].includes(xe)&&!(Ot!=null&&Ot.isOpen())&&!(vt!=null&&vt.isOpen)&&!pt.guide.open&&!qi&&!yi,onOpen:()=>{lt("paused"),qn.hidden=!0,gn.hidden=!0},onView:(a,o)=>Ot.open(a,o)}),window.museum.getHologram=()=>({...r.getState(),interaction:ht.getState(),model:kt.getCurrent()}),window.museum.getGeometryRepair=()=>t,vt=AE({scene:Ct,camera:ye,canvas:Te,assignments:is,isAvailable:()=>Wt&&vi&&Pn&&["walk","paused"].includes(xe)&&!(Ot!=null&&Ot.isOpen())&&!(ht!=null&&ht.isOpen())&&!pt.guide.open,onOpen:()=>{lt("paused"),qn.hidden=!0,gn.hidden=!0},onClose:()=>{lt("paused"),ms=performance.now()},onView:a=>Ot.open(a)}),window.museum.getLabels=()=>({open:vt.isOpen,records:vt.records.map(a=>({artifactId:a.assignment.artifactId,url:a.url,position:a.mesh.position.toArray()}))}),window.museum.artifactsReady=!1;const s=vS({scene:Ct,renderer:ft,manifest:xt,onArtifact:a=>{Vs.push(a),Te.dataset.artifactCount=String(Vs.length);const o=a.assignment.cabinetId==="story"?xt.observationTargets.story:xt.exhibits.find(c=>c.id===a.assignment.cabinetId);o&&(o.targetHeight=a.center.y)}}).then(({records:a,failures:o})=>{Vs=a,Oh=o,window.museum.artifactsReady=!0,Te.dataset.artifactCount=String(a.length),Te.dataset.artifactFailures=String(o.length),o.length&&ga("部分文物暂未载入，可以继续参观或刷新重试")}).catch(a=>{Te.dataset.artifactFailures="7",console.error("文物载入失败",a),ga("文物暂未载入，请刷新重试")});RE(),window.museum.getArtifacts=()=>({records:Vs.map(a=>({artifactId:a.assignment.artifactId,cabinetId:a.assignment.cabinetId,bounds:{min:a.bounds.min.toArray(),max:a.bounds.max.toArray()}})),failures:Oh})}catch(i){console.error(i),Ae("#load").textContent="展厅加载失败，请刷新重试",Ae("#status").textContent=i.message}}UE();let gs=0;function ff(i){gs=requestAnimationFrame(ff);const e=(i-ms)/1e3,t=Math.min(e,.06);if(ms=i,document.hidden||Zt())return;Wt&&ia&&(ia=!1,xe!=="entering"&&Cn.target===1&&Cn.progress===1&&LE()),ye.position.y-=pn,pn=0;const n=ye.position.x,r=ye.position.z,s=performance.now();if(!Wt){ft.render(Ct,ye);return}if(xe==="entering")ti.update(ye,Cn,t)?(ti=null,Pn=!0,of(!1),lt("walk",!matchMedia("(pointer:coarse)").matches),Te.focus(),Te.dataset.entryPhase="complete",Ae("#location").textContent="入口序厅 · 可自由参观"):(Te.dataset.entryPhase=ti.phase,Ae("#location").textContent=ti.phase==="opening"?"推门入馆 · 正在打开玻璃门":ti.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(xe==="observe"){const f=Si.update(ye,t),d=Si.phase;Te.dataset.observationPhase=d,Ae("#location").textContent=on.label+" · "+(d==="left"?"左侧观察":d.startsWith("right")?"右侧观察":d==="front"?"移向正视位置":"正视图"),f&&(lt("paused"),Te.dataset.observationPhase="complete")}else if(xe==="guide"&&mr.length){const f=mr[0],d=ye.position.distanceTo(f);ye.position.lerp(f,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(d,.001))),Vh.copy(ye.quaternion),ye.lookAt(ps),Gh.copy(ye.quaternion),ye.quaternion.copy(Vh).slerp(Gh,1-Math.exp(-5*t)),d<.008&&(ye.position.copy(f),mr.shift()),mr.length||(ye.lookAt(ps),pa?rm(pa):lt("paused"))}else if(xe==="walk"){em&&Dn&&cn&&document.pointerLockElement!==Te&&(Oi-=fS(cn.x,innerWidth)*t),ye.rotation.set(Tu,Oi,0);const f=Number(nn.has("KeyW")||nn.has("ArrowUp"))-Number(nn.has("KeyS")||nn.has("ArrowDown")),d=Number(nn.has("KeyD")||nn.has("ArrowRight"))-Number(nn.has("KeyA")||nn.has("ArrowLeft"));rn.speed=Vn,zh.set(-Math.sin(Oi)*f+Math.cos(Oi)*d,0,-Math.cos(Oi)*f-Math.sin(Oi)*d).normalize(),rn.update(ma,zh,t),ye.position.copy(ma)}const a=Math.hypot(ye.position.x-n,ye.position.z-r),o=xe==="walk"&&a>1e-4;if(si)Ys=0,pn=0;else{const f=o?Math.min(1,a/Math.max(t,.001)/ri.speed):0;Ys=In.lerp(Ys,f,1-Math.exp(-16*t)),o&&(Eo=(Eo+a*Math.PI*2/2.2)%(Math.PI*2)),pn=Math.sin(Eo)*.008*Ys,Math.abs(pn)<1e-5&&(pn=0)}if(ml=Math.max(ml,Math.abs(pn)),gl=Math.max(gl,rn.speed),ye.position.y+=pn,hl+=t,hl>.05){if(IE(i),ht==null||ht.update(),vt==null||vt.update(),Ot==null||Ot.update({selectedExhibit:on,observationPhase:Te.dataset.observationPhase}),kt){const f=kt.getState();Object.assign(Te.dataset,{hologramId:f.currentId||"",hologramPhase:f.phase||f.status,hologramPaused:String(f.paused),hologramCount:String(f.count)})}hl=0}for(const f of $p)f.emissiveIntensity=In.lerp(f.emissiveIntensity,xe==="story"?.8:.35,1-Math.exp(-3*t));Cn.update(t)&&xe!=="entering"&&(ia=!0),pr==null||pr.update(t,si),kt==null||kt.update(t,{paused:!!(ht!=null&&ht.isEngaged()||pt.guide.open||xe==="story"),reduced:si});const c=performance.now()-s;Gs!==null&&(Jr=Gs,Gs=null,ft.setPixelRatio(Jr));const l=performance.now();ft.render(Ct,ye);const u=performance.now()-l;if(!document.hidden&&i-Qp>2500&&e<.25&&(zi.push(e*1e3),Ks.push(c),Js.push(u),zi.length>180&&(zi.shift(),Ks.shift(),Js.shift())),pl+=t,pl>1){const f=cm();f.sampleCount>=30&&f.frameP95>24?Kr++:Kr=0,Kr>=2&&Jr>1?(Gs=1,zi.length=0,Ks.length=0,Js.length=0,Kr=0):Kr>=3&&f.frameP95>35&&Jr>.85&&(Gs=.85,zi.length=0,Ks.length=0,Js.length=0,Kr=0),Object.assign(Te.dataset,{position:ye.position.toArray().map(d=>d.toFixed(3)).join(","),direction:[Oi,Tu].map(d=>d.toFixed(4)).join(","),mode:xe,bob:pn.toFixed(4),bobPeak:ml.toFixed(4),maxWalkSpeed:gl,speed:rn.speed,contacts:rn.contacts,queries:rn.queries,calls:ft.info.render.calls,triangles:ft.info.render.triangles,frameP50:f.frameP50.toFixed(2),frameP95:f.frameP95.toFixed(2),updateP95:f.updateP95.toFixed(2),renderP95:f.renderP95.toFixed(2),samples:f.sampleCount,dpr:Jr}),pl=0}}gs=requestAnimationFrame(ff);window.addEventListener("resize",()=>{cn=null,ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),ft.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",i=>{cancelAnimationFrame(gs),gs=0,af(),!i.persisted&&(Mu.abort(),vt==null||vt.dispose(),Ot==null||Ot.dispose(),ht==null||ht.dispose(),kt==null||kt.dispose())});window.addEventListener("pageshow",i=>{i.persisted&&(ms=performance.now(),gs||(gs=requestAnimationFrame(ff)))});
