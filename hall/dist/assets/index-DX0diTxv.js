(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="180",dm=0,gf=1,hm=2,Gh=1,pm=2,gi=3,Ln=0,qt=1,sn=2,Gi=0,es=1,rs=2,bf=3,_f=4,mm=5,fr=100,gm=101,bm=102,_m=103,xm=104,vm=200,ym=201,Mm=202,Sm=203,bl=204,_l=205,Em=206,Tm=207,wm=208,Am=209,Rm=210,Cm=211,Pm=212,Lm=213,Im=214,xl=0,vl=1,yl=2,ss=3,Ml=4,Sl=5,El=6,Tl=7,Au=0,Dm=1,Um=2,Wi=0,Nm=1,Fm=2,Om=3,Bm=4,km=5,Wh=6,zm=7,xf="attached",Hm="detached",qh=300,as=301,os=302,wl=303,Al=304,Uo=306,cs=1e3,Hi=1001,Eo=1002,Jt=1003,jh=1004,Ws=1005,Kt=1006,mo=1007,zn=1008,ai=1009,Xh=1010,Yh=1011,sa=1012,Ru=1013,gr=1014,Hn=1015,bs=1016,Cu=1017,Pu=1018,aa=1020,Kh=35902,Jh=35899,$h=1021,Zh=1022,Sn=1023,oa=1026,ca=1027,Lu=1028,Iu=1029,Qh=1030,Du=1031,Uu=1033,go=33776,bo=33777,_o=33778,xo=33779,Rl=35840,Cl=35841,Pl=35842,Ll=35843,Il=36196,Dl=37492,Ul=37496,Nl=37808,Fl=37809,Ol=37810,Bl=37811,kl=37812,zl=37813,Hl=37814,Vl=37815,Gl=37816,Wl=37817,ql=37818,jl=37819,Xl=37820,Yl=37821,Kl=36492,Jl=36494,$l=36495,Zl=36283,Ql=36284,eu=36285,tu=36286,la=2300,ua=2301,qo=2302,vf=2400,yf=2401,Mf=2402,Vm=2500,Gm=0,ep=1,nu=2,Wm=3200,qm=3201,Nu=0,jm=1,ki="",Pt="srgb",$t="srgb-linear",To="linear",ct="srgb",Mr=7680,Sf=519,Xm=512,Ym=513,Km=514,tp=515,Jm=516,$m=517,Zm=518,Qm=519,iu=35044,Ef="300 es",ni=2e3,wo=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Tf=1234567;const $s=Math.PI/180,ls=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Fu(r,e){return(r%e+e)%e}function eg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tg(r,e,t){return r!==e?(t-r)/(e-r):0}function Zs(r,e,t){return(1-t)*r+t*e}function ng(r,e,t,n){return Zs(r,e,1-Math.exp(-t*n))}function ig(r,e=1){return e-Math.abs(Fu(r,e*2)-e)}function rg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ag(r,e){return r+Math.floor(Math.random()*(e-r+1))}function og(r,e){return r+Math.random()*(e-r)}function cg(r){return r*(.5-Math.random())}function lg(r){r!==void 0&&(Tf=r);let e=Tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(r){return r*$s}function fg(r){return r*ls}function dg(r){return(r&r-1)===0&&r!==0}function hg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),d=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*u,c*f,c*d,o*l);break;case"YZY":r.set(c*d,o*u,c*f,o*l);break;case"ZXZ":r.set(c*f,c*d,o*u,o*l);break;case"XZX":r.set(o*u,c*g,c*h,o*l);break;case"YXY":r.set(c*h,o*u,c*g,o*l);break;case"ZYZ":r.set(c*g,c*h,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function st(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:$s,RAD2DEG:ls,generateUUID:Gn,clamp:je,euclideanModulo:Fu,mapLinear:eg,inverseLerp:tg,lerp:Zs,damp:ng,pingpong:ig,smoothstep:rg,smootherstep:sg,randInt:ag,randFloat:og,randFloatSpread:cg,seededRandom:lg,degToRad:ug,radToDeg:fg,isPowerOfTwo:dg,ceilPowerOfTwo:hg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:st,denormalize:kn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||l!==h||u!==g){let m=1-o;const p=c*d+l*h+u*g+f*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const y=Math.sqrt(x),T=Math.atan2(y,p*v);m=Math.sin(m*T)/y,o=Math.sin(o*T)/y}const b=o*v;if(c=c*m+d*b,l=l*m+h*b,u=u*m+g*b,f=f*m+_*b,m===1-o){const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+c*h-l*d,e[t+1]=c*g+u*d+l*f-o*h,e[t+2]=l*g+u*h+o*d-c*f,e[t+3]=u*g-o*f-c*d-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),f=o(s/2),d=c(n/2),h=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f+d*h*g;break;case"YZX":this._x=d*u*f+l*h*g,this._y=l*h*f+d*u*g,this._z=l*u*g-d*h*f,this._w=l*u*f-d*h*g;break;case"XZY":this._x=d*u*f-l*h*g,this._y=l*h*f-d*u*g,this._z=l*u*g+d*h*f,this._w=l*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-c)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+l)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-l)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=i+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jo.copy(this).projectOnVector(e),this.sub(jo)}reflect(e){return this.sub(jo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jo=new L,wf=new Un;class Ye{constructor(e,t,n,i,s,a,o,c,l){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],b=i[7],y=i[2],T=i[5],E=i[8];return s[0]=a*_+o*v+c*y,s[3]=a*m+o*x+c*T,s[6]=a*p+o*b+c*E,s[1]=l*_+u*v+f*y,s[4]=l*m+u*x+f*T,s[7]=l*p+u*b+f*E,s[2]=d*_+h*v+g*y,s[5]=d*m+h*x+g*T,s[8]=d*p+h*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,h=l*s-a*c,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*l-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new Ye;function np(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gg(){const r=fa("canvas");return r.style.display="block",r}const Af={};function da(r){r in Af||(Af[r]=!0,console.warn(r))}function bg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Rf=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cf=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){const r={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=ts(i.r),i.g=ts(i.g),i.b=ts(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return da("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return da("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$t]:{primaries:e,whitePoint:n,transfer:To,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Rf,fromXYZ:Cf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),r}const Qe=_g();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ts(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Sr;class xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Sr===void 0&&(Sr=fa("canvas")),Sr.width=e.width,Sr.height=e.height;const i=Sr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Sr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vg=0;class Ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Yo(i[a].image)):s.push(Yo(i[a]))}else s=Yo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Yo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yg=0;const Ko=new L;class It extends _s{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Hi,i=Hi,s=Kt,a=zn,o=Sn,c=ai,l=It.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Gn(),this.name="",this.source=new Ou(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=qh;It.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(h+1)/2,y=(p+1)/2,T=(u+d)/4,E=(f+_)/4,A=(g+m)/4;return x>b&&x>y?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=E/n):b>y?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=T/i,s=A/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=E/s,i=A/s),this.set(n,i,s,t),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mg extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new It(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ou(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends Mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ip extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sg extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class it{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ea.subVectors(this.max,Ts),Er.subVectors(e.a,Ts),Tr.subVectors(e.b,Ts),wr.subVectors(e.c,Ts),wi.subVectors(Tr,Er),Ai.subVectors(wr,Tr),Zi.subVectors(Er,wr);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Jo(t,Er,Tr,wr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Jo(t,Er,Tr,wr,Ea))?!1:(Ta.crossVectors(wi,Ai),t=[Ta.x,Ta.y,Ta.z],Jo(t,Er,Tr,wr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new L,new L,new L,new L,new L,new L,new L,new L],Nn=new L,Sa=new it,Er=new L,Tr=new L,wr=new L,wi=new L,Ai=new L,Zi=new L,Ts=new L,Ea=new L,Ta=new L,Qi=new L;function Jo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qi.fromArray(r,s);const o=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Eg=new it,ws=new L,$o=new L;class Yn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add($o)),this.expandByPoint(ws.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new L,Zo=new L,wa=new L,Ri=new L,Qo=new L,Aa=new L,ec=new L;class Yi{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Zo.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(Zo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Ri.dot(this.direction),c=-Ri.dot(wa),l=Ri.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*c-o,d=a*o-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),h=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),h=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Zo).addScaledVector(wa,d),h}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){Qo.subVectors(t,e),Aa.subVectors(n,e),ec.crossVectors(Qo,Aa);let a=this.direction.dot(ec),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Aa.crossVectors(Ri,Aa));if(c<0)return null;const l=o*this.direction.dot(Qo.cross(Ri));if(l<0||c+l>a)return null;const u=-o*Ri.dot(ec);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,i,s,a,o,c,l,u,f,d,h,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,u,f,d,h,g,_,m)}set(e,t,n,i,s,a,o,c,l,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Ar.setFromMatrixColumn(e,0).length(),s=1/Ar.setFromMatrixColumn(e,1).length(),a=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=h+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,h=c*f,g=l*u,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=c*u,t[4]=g*l-h,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,wg)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(n,dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(n,dn)),Ci.normalize(),Ra.crossVectors(dn,Ci),i[0]=Ci.x,i[4]=Ra.x,i[8]=dn.x,i[1]=Ci.y,i[5]=Ra.y,i[9]=dn.y,i[2]=Ci.z,i[6]=Ra.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],b=n[11],y=n[15],T=i[0],E=i[4],A=i[8],M=i[12],S=i[1],w=i[5],R=i[9],D=i[13],I=i[2],F=i[6],O=i[10],V=i[14],H=i[3],Z=i[7],Q=i[11],J=i[15];return s[0]=a*T+o*S+c*I+l*H,s[4]=a*E+o*w+c*F+l*Z,s[8]=a*A+o*R+c*O+l*Q,s[12]=a*M+o*D+c*V+l*J,s[1]=u*T+f*S+d*I+h*H,s[5]=u*E+f*w+d*F+h*Z,s[9]=u*A+f*R+d*O+h*Q,s[13]=u*M+f*D+d*V+h*J,s[2]=g*T+_*S+m*I+p*H,s[6]=g*E+_*w+m*F+p*Z,s[10]=g*A+_*R+m*O+p*Q,s[14]=g*M+_*D+m*V+p*J,s[3]=v*T+x*S+b*I+y*H,s[7]=v*E+x*w+b*F+y*Z,s[11]=v*A+x*R+b*O+y*Q,s[15]=v*M+x*D+b*V+y*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*f-i*l*f-s*o*d+n*l*d+i*o*h-n*c*h)+_*(+t*c*h-t*l*d+s*a*d-i*a*h+i*l*u-s*c*u)+m*(+t*l*f-t*o*h-s*a*f+n*a*h+s*o*u-n*l*u)+p*(-i*o*u-t*c*f+t*o*d+i*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=f*m*l-_*d*l+_*c*h-o*m*h-f*c*p+o*d*p,x=g*d*l-u*m*l-g*c*h+a*m*h+u*c*p-a*d*p,b=u*_*l-g*f*l+g*o*h-a*_*h-u*o*p+a*f*p,y=g*f*c-u*_*c-g*o*d+a*_*d+u*o*m-a*f*m,T=t*v+n*x+i*b+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/T;return e[0]=v*E,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*E,e[2]=(o*m*s-_*c*s+_*i*l-n*m*l-o*i*p+n*c*p)*E,e[3]=(f*c*s-o*d*s-f*i*l+n*d*l+o*i*h-n*c*h)*E,e[4]=x*E,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*E,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*E,e[7]=(a*d*s-u*c*s+u*i*l-t*d*l-a*i*h+t*c*h)*E,e[8]=b*E,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*E,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*E,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*h-t*o*h)*E,e[12]=y*E,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*E,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*m-t*o*m)*E,e[15]=(a*f*i-u*o*i+u*n*c-t*f*c-a*n*d+t*o*d)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,v=c*l,x=c*u,b=c*f,y=n.x,T=n.y,E=n.z;return i[0]=(1-(_+p))*y,i[1]=(h+b)*y,i[2]=(g-x)*y,i[3]=0,i[4]=(h-b)*T,i[5]=(1-(d+p))*T,i[6]=(m+v)*T,i[7]=0,i[8]=(g+x)*E,i[9]=(m-v)*E,i[10]=(1-(d+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Ar.set(i[0],i[1],i[2]).length();const a=Ar.set(i[4],i[5],i[6]).length(),o=Ar.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const l=1/s,u=1/a,f=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=u,Fn.elements[5]*=u,Fn.elements[6]*=u,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ni,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===ni)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===wo)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ni,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===ni)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===wo)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ar=new L,Fn=new Ne,Tg=new L(0,0,0),wg=new L(1,1,1),Ci=new L,Ra=new L,dn=new L,Pf=new Ne,Lf=new Un;class jn{constructor(e=0,t=0,n=0,i=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Pf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class Bu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const If=new L,Rr=new Un,di=new Ne,Ca=new L,As=new L,Rg=new L,Cg=new Un,Df=new L(1,0,0),Uf=new L(0,1,0),Nf=new L(0,0,1),Ff={type:"added"},Pg={type:"removed"},Cr={type:"childadded",child:null},tc={type:"childremoved",child:null};class bt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new jn,n=new Un,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ye}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.multiply(Rr),this}rotateOnWorldAxis(e,t){return Rr.setFromAxisAngle(e,t),this.quaternion.premultiply(Rr),this}rotateX(e){return this.rotateOnAxis(Df,e)}rotateY(e){return this.rotateOnAxis(Uf,e)}rotateZ(e){return this.rotateOnAxis(Nf,e)}translateOnAxis(e,t){return If.copy(e).applyQuaternion(this.quaternion),this.position.add(If.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Df,e)}translateY(e){return this.translateOnAxis(Uf,e)}translateZ(e){return this.translateOnAxis(Nf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(As,Ca,this.up):di.lookAt(Ca,As,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Rr.setFromRotationMatrix(di),this.quaternion.premultiply(Rr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ff),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),tc.child=e,this.dispatchEvent(tc),tc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ff),Cr.child=e,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new L,hi=new L,nc=new L,pi=new L,Pr=new L,Lr=new L,Of=new L,ic=new L,rc=new L,sc=new L,ac=new tt,oc=new tt,cc=new tt;class Lt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){On.subVectors(i,t),hi.subVectors(n,t),nc.subVectors(e,t);const a=On.dot(On),o=On.dot(hi),c=On.dot(nc),l=hi.dot(hi),u=hi.dot(nc),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return ac.setScalar(0),oc.setScalar(0),cc.setScalar(0),ac.fromBufferAttribute(e,t),oc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ac,s.x),a.addScaledVector(oc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Pr.subVectors(i,n),Lr.subVectors(s,n),ic.subVectors(e,n);const c=Pr.dot(ic),l=Lr.dot(ic);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,i);const u=Pr.dot(rc),f=Lr.dot(rc);if(u>=0&&f<=u)return t.copy(i);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Pr,a);sc.subVectors(e,s);const h=Pr.dot(sc),g=Lr.dot(sc);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Lr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Of.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Of,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Pr,a).addScaledVector(Lr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const rp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function lc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Qe.workingColorSpace){if(e=Fu(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=lc(a,s,e+1/3),this.g=lc(a,s,e),this.b=lc(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,i),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=rp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.workingToColorSpace(Vt.copy(this),e),Math.round(je(Vt.r*255,0,255))*65536+Math.round(je(Vt.g*255,0,255))*256+Math.round(je(Vt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-s)/f+(i<s?6:0);break;case i:c=(s-n)/f+2;break;case s:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Pt){Qe.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Pa);const n=Zs(Pi.h,Pa.h,t),i=Zs(Pi.s,Pa.s,t),s=Zs(Pi.l,Pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Oe;Oe.NAMES=rp;let Lg=0;class Wn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=es,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bl,this.blendDst=_l,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==bl&&(n.blendSrc=this.blendSrc),this.blendDst!==_l&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ii extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new L,La=new Ue;let Ig=0;class Bt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=iu,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==iu&&(e.usage=this.usage),e}}class sp extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ap extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dg=0;const vn=new Ne,uc=new bt,Ir=new L,hn=new it,Rs=new it,Ft=new L;class ln extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?ap:sp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new it);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,Rs.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,Rs.max),hn.expandByPoint(Ft)):(hn.expandByPoint(Rs.min),hn.expandByPoint(Rs.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ft.fromBufferAttribute(o,l),c&&(Ir.fromBufferAttribute(e,l),Ft.add(Ir)),i=Math.max(i,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new L,c[A]=new L;const l=new L,u=new L,f=new L,d=new Ue,h=new Ue,g=new Ue,_=new L,m=new L;function p(A,M,S){l.fromBufferAttribute(n,A),u.fromBufferAttribute(n,M),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,A),h.fromBufferAttribute(s,M),g.fromBufferAttribute(s,S),u.sub(l),f.sub(l),h.sub(d),g.sub(d);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(w),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(w),o[A].add(_),o[M].add(_),o[S].add(_),c[A].add(m),c[M].add(m),c[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let A=0,M=v.length;A<M;++A){const S=v[A],w=S.start,R=S.count;for(let D=w,I=w+R;D<I;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new L,b=new L,y=new L,T=new L;function E(A){y.fromBufferAttribute(i,A),T.copy(y);const M=o[A];x.copy(M),x.sub(y.multiplyScalar(y.dot(M))).normalize(),b.crossVectors(T,M);const w=b.dot(c[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,w)}for(let A=0,M=v.length;A<M;++A){const S=v[A],w=S.start,R=S.count;for(let D=w,I=w+R;D<I;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new L,s=new L,a=new L,o=new L,c=new L,l=new L,u=new L,f=new L;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[h++]}return new Bt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],h=e(d,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const h=l[f];u.push(h.toJSON(e.data))}u.length>0&&(i[c]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bf=new Ne,er=new Yi,Ia=new Yn,kf=new L,Da=new L,Ua=new L,Na=new L,fc=new L,Fa=new L,zf=new L,Oa=new L;class gt extends bt{constructor(e=new ln,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(fc.fromBufferAttribute(f,e),a?Fa.addScaledVector(fc,u):Fa.addScaledVector(fc.sub(t),u))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Ia.containsPoint(er.origin)===!1&&(er.intersectSphere(Ia,kf)===null||er.origin.distanceToSquared(kf)>(e.far-e.near)**2))&&(Bf.copy(s).invert(),er.copy(e.ray).applyMatrix4(Bf),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,y=x;b<y;b+=3){const T=o.getX(b),E=o.getX(b+1),A=o.getX(b+2);i=Ba(this,p,e,n,l,u,f,T,E,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);i=Ba(this,a,e,n,l,u,f,v,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],v=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=v,y=x;b<y;b+=3){const T=b,E=b+1,A=b+2;i=Ba(this,p,e,n,l,u,f,T,E,A),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const v=m,x=m+1,b=m+2;i=Ba(this,a,e,n,l,u,f,v,x,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ug(r,e,t,n,i,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Ln,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:r}}function Ba(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Da),r.getVertexPosition(c,Ua),r.getVertexPosition(l,Na);const u=Ug(r,e,t,n,Da,Ua,Na,zf);if(u){const f=new L;Lt.getBarycoord(zf,Da,Ua,Na,f),i&&(u.uv=Lt.getInterpolatedAttribute(i,o,c,l,f,new Ue)),s&&(u.uv1=Lt.getInterpolatedAttribute(s,o,c,l,f,new Ue)),a&&(u.normal=Lt.getInterpolatedAttribute(a,o,c,l,f,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new L,materialIndex:0};Lt.getNormal(Da,Ua,Na,d.normal),u.face=d,u.barycoord=f}return u}class br extends ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(f,2));function g(_,m,p,v,x,b,y,T,E,A,M){const S=b/E,w=y/A,R=b/2,D=y/2,I=T/2,F=E+1,O=A+1;let V=0,H=0;const Z=new L;for(let Q=0;Q<O;Q++){const J=Q*w-D;for(let fe=0;fe<F;fe++){const Ie=fe*S-R;Z[_]=Ie*v,Z[m]=J*x,Z[p]=I,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=T>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(fe/E),f.push(1-Q/A),V+=1}}for(let Q=0;Q<A;Q++)for(let J=0;J<E;J++){const fe=d+J+F*Q,Ie=d+J+F*(Q+1),Je=d+(J+1)+F*(Q+1),Ve=d+(J+1)+F*Q;c.push(fe,Ie,Ve),c.push(Ie,Je,Ve),H+=6}o.addGroup(h,H,M),h+=H,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=us(r[t]);for(const i in n)e[i]=n[i]}return e}function Ng(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function op(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const cp={clone:us,merge:Yt};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class lp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new L,Hf=new Ue,Vf=new Ue;class Gt extends lp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ls*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,Hf,Vf),t.subVectors(Vf,Hf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dr=-90,Ur=1;class Bg extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Dr,Ur,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Dr,Ur,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Dr,Ur,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Dr,Ur,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Dr,Ur,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Dr,Ur,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ni)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class up extends It{constructor(e=[],t=as,n,i,s,a,o,c,l,u){super(e,t,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new up(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new br(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:us(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Gi});s.uniforms.tEquirect.value=t;const a=new gt(i,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Kt),new Bg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class En extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;l.inputState.pinching&&d>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class fp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=iu,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new L;class ku{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),i=st(i,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ku(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Gf=new L,Wf=new tt,qf=new tt,Vg=new L,jf=new Ne,ka=new L,hc=new Yn,Xf=new Ne,pc=new Yi;class Gg extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xf,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new it),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hc.copy(this.boundingSphere),hc.applyMatrix4(i),e.ray.intersectsSphere(hc)!==!1&&(Xf.copy(i).invert(),pc.copy(e.ray).applyMatrix4(Xf),!(this.boundingBox!==null&&pc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wf.fromBufferAttribute(i.attributes.skinIndex,e),qf.fromBufferAttribute(i.attributes.skinWeight,e),Gf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=qf.getComponent(s);if(a!==0){const o=Wf.getComponent(s);jf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vg.copy(Gf).applyMatrix4(jf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class hp extends It{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Jt,u=Jt,f,d){super(null,a,o,c,l,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yf=new Ne,Wg=new Ne;class zu{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Wg;Yf.multiplyMatrices(o,t[s]),Yf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new zu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new hp(t,e,e,Sn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new dp),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ru extends Bt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Nr=new Ne,Kf=new Ne,za=[],Jf=new it,qg=new Ne,Cs=new gt,Ps=new Yn;class pp extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ru(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new it),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Jf.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Jf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Ps.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Nr),Kf.multiplyMatrices(n,Nr),Cs.matrixWorld=Kf,Cs.raycast(e,za);for(let a=0,o=za.length;a<o;a++){const c=za[a];c.instanceId=s,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ru(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new hp(new Float32Array(i*this.count),i,this.count,Lu,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mc=new L,jg=new L,Xg=new Ye;class Qn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=mc.subVectors(n,t).cross(jg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xg.getNormalMatrix(e),i=this.coplanarPoint(mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new Yn,Yg=new Ue(.5,.5),Ha=new L;class Hu{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,s=new Qn,a=new Qn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ni,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],v=s[12],x=s[13],b=s[14],y=s[15];if(i[0].setComponents(l-a,h-u,p-g,y-v).normalize(),i[1].setComponents(l+a,h+u,p+g,y+v).normalize(),i[2].setComponents(l+o,h+f,p+_,y+x).normalize(),i[3].setComponents(l-o,h-f,p-_,y-x).normalize(),n)i[4].setComponents(c,d,m,b).normalize(),i[5].setComponents(l-c,h-d,p-m,y-b).normalize();else if(i[4].setComponents(l-c,h-d,p-m,y-b).normalize(),t===ni)i[5].setComponents(l+c,h+d,p+m,y+b).normalize();else if(t===wo)i[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const t=Yg.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ha.x=i.normal.x>0?e.max.x:e.min.x,Ha.y=i.normal.y>0?e.max.y:e.min.y,Ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mp extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new L,Ro=new L,$f=new Ne,Ls=new Yi,Va=new Yn,gc=new L,Zf=new L;class Vu extends bt{constructor(e=new ln,t=new mp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ao.fromBufferAttribute(t,i-1),Ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ao.distanceTo(Ro);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;$f.copy(i).invert(),Ls.copy(e.ray).applyMatrix4($f);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),x=Ga(this,e,Ls,c,p,v,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=Ga(this,e,Ls,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=Ga(this,e,Ls,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Ga(this,e,Ls,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ga(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ao.fromBufferAttribute(o,i),Ro.fromBufferAttribute(o,s),t.distanceSqToSegment(Ao,Ro,gc,Zf)>n)return;gc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(gc);if(!(l<e.near||l>e.far))return{distance:l,point:Zf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Qf=new L,ed=new L;class Kg extends Vu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Qf.fromBufferAttribute(t,i),ed.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Qf.distanceTo(ed);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jg extends Vu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class gp extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const td=new Ne,su=new Yi,Wa=new Yn,qa=new L;class bp extends bt{constructor(e=new ln,t=new gp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;td.copy(i).invert(),su.copy(e.ray).applyMatrix4(td);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=d,_=h;g<_;g++){const m=l.getX(g);qa.fromBufferAttribute(f,m),nd(qa,m,c,i,e,t,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let g=d,_=h;g<_;g++)qa.fromBufferAttribute(f,g),nd(qa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function nd(r,e,t,n,i,s,a){const o=su.distanceSqToPoint(r);if(o<t){const c=new L;su.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $g extends It{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _p extends It{constructor(e,t,n=gr,i,s,a,o=Jt,c=Jt,l,u=oa,f=1){if(u!==oa&&u!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xp extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gu extends ln{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],m=n/2;let p=0;v(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new zt(f,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(h,2));function v(){const b=new L,y=new L;let T=0;const E=(t-e)/n;for(let A=0;A<=s;A++){const M=[],S=A/s,w=S*(t-e)+e;for(let R=0;R<=i;R++){const D=R/i,I=D*c+o,F=Math.sin(I),O=Math.cos(I);y.x=w*F,y.y=-S*n+m,y.z=w*O,f.push(y.x,y.y,y.z),b.set(F,E,O).normalize(),d.push(b.x,b.y,b.z),h.push(D,1-S),M.push(g++)}_.push(M)}for(let A=0;A<i;A++)for(let M=0;M<s;M++){const S=_[M][A],w=_[M+1][A],R=_[M+1][A+1],D=_[M][A+1];(e>0||M!==0)&&(u.push(S,w,D),T+=3),(t>0||M!==s-1)&&(u.push(w,R,D),T+=3)}l.addGroup(p,T,0),p+=T}function x(b){const y=g,T=new Ue,E=new L;let A=0;const M=b===!0?e:t,S=b===!0?1:-1;for(let R=1;R<=i;R++)f.push(0,m*S,0),d.push(0,S,0),h.push(.5,.5),g++;const w=g;for(let R=0;R<=i;R++){const I=R/i*c+o,F=Math.cos(I),O=Math.sin(I);E.x=M*O,E.y=m*S,E.z=M*F,f.push(E.x,E.y,E.z),d.push(0,S,0),T.x=F*.5+.5,T.y=O*.5*S+.5,h.push(T.x,T.y),g++}for(let R=0;R<i;R++){const D=y+R,I=w+R;b===!0?u.push(I,I+1,D):u.push(I+1,I,D),A+=3}l.addGroup(p,A,b===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _r extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,f=e/o,d=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*d-a;for(let x=0;x<l;x++){const b=x*f-s;g.push(b,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const x=v+l*p,b=v+l*(p+1),y=v+1+l*(p+1),T=v+1+l*p;h.push(x,b,T),h.push(b,y,T)}this.setIndex(h),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wu extends ln{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],u=new L,f=new L,d=new L;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const _=g/i*s,m=h/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(_),f.y=(e+t*Math.cos(m))*Math.sin(_),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const _=(i+1)*h+g-1,m=(i+1)*(h-1)+g-1,p=(i+1)*(h-1)+g,v=(i+1)*h+g;a.push(_,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ha extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends ha{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zg extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nu,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Au,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ja(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function tb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function nb(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function id(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function vp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class _a{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ib extends _a{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vf,endingEnd:vf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case yf:s=e,o=2*t-n;break;case Mf:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case yf:a=e,c=2*n-t;break;case Mf:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,x=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let y=0;y!==o;++y)s[y]=p*a[u+y]+v*a[l+y]+x*a[c+y]+b*a[f+y];return s}}class rb extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),f=1-u;for(let d=0;d!==o;++d)s[d]=a[l+d]*f+a[c+d]*u;return s}}class sb extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Kn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ib(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&tb(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const f=o*n,d=f-n,h=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let h=0;h!==n;++h)t[d+h]=t[f+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Kn.prototype.ValueTypeName="";Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=ua;class xs extends Kn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=la;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class yp extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}yp.prototype.ValueTypeName="color";class fs extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}fs.prototype.ValueTypeName="number";class ab extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Un.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ds extends Kn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ab(this.times,this.values,this.getValueSize(),e)}}ds.prototype.ValueTypeName="quaternion";ds.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Kn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=la;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class hs extends Kn{constructor(e,t,n,i){super(e,t,n,i)}}hs.prototype.ValueTypeName="vector";class ob{constructor(e="",t=-1,n=[],i=Vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(lb(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Kn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const u=nb(c);c=id(c,1,u),l=id(l,1,u),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new fs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,g,_){if(h.length!==0){const m=[],p=[];vp(h,m,p,g),m.length!==0&&_.push(new f(d,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const d=l[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)h[d[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let v=0;v!==d[g].morphTargets.length;++v){const x=d[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new fs(".morphTargetInfluence["+_+"]",m,p))}c=h.length*a}else{const h=".bones["+t[f].name+"]";n(hs,h+".position",d,"pos",i),n(ds,h+".quaternion",d,"rot",i),n(hs,h+".scale",d,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return yp;case"quaternion":return ds;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cb(r.type);if(r.times===void 0){const t=[],n=[];vp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ub{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=l.length;f<d;f+=2){const h=l[f],g=l[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fb=new ub;class ys{constructor(e){this.manager=e!==void 0?e:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class db extends Error{constructor(e,t){super(e),this.response=t}}class Mp extends ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=mi[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){f.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let T=0,E=u.length;T<E;T++){const A=u[T];A.onProgress&&A.onProgress(y)}p.enqueue(b),v()}},x=>{p.error(x)})}}});return new Response(m)}else throw new db(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{xi.add(`file:${e}`,l);const u=mi[e];delete mi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(l)}}).catch(l=>{const u=mi[e];if(u===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Fr=new WeakMap;class hb extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=Fr.get(a);f===void 0&&(f=[],Fr.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=fa("img");function c(){u(),t&&t(this);const f=Fr.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}Fr.delete(this),s.manager.itemEnd(e)}function l(f){u(),i&&i(f),xi.remove(`image:${e}`);const d=Fr.get(this)||[];for(let h=0;h<d.length;h++){const g=d[h];g.onError&&g.onError(f)}Fr.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class pb extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new It,a=new hb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class No extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mb extends No{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const bc=new Ne,rd=new L,sd=new L;class qu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;rd.setFromMatrixPosition(e.matrixWorld),t.position.copy(rd),sd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sd),t.updateMatrixWorld(),bc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(bc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends qu{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=ls*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sp extends No{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ad=new Ne,Is=new L,_c=new L;class bb extends qu{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),_c.copy(n.position),_c.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_c),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth)}}class Ep extends No{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ju extends lp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _b extends qu{constructor(){super(new ju(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xb extends No{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const xc=new WeakMap;class vb extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(xc.has(a)===!0)i&&i(xc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),xc.set(c,l),xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yb extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xu="\\[\\]\\.:\\/",Mb=new RegExp("["+Xu+"]","g"),Yu="[^"+Xu+"]",Sb="[^"+Xu.replace("\\.","")+"]",Eb=/((?:WC+[\/:])*)/.source.replace("WC",Yu),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Yu),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Yu),Rb=new RegExp("^"+Eb+Tb+wb+Ab+"$"),Cb=["material","materials","bones","map"];class Pb{constructor(e,t,n){const i=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=Rb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Cb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Pb;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const od=new Ne;class Ku{constructor(e,t,n=0,i=1/0){this.ray=new Yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Bu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return od.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(od),this}intersectObject(e,t=!0,n=[]){return au(e,this,n,t),n.sort(cd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)au(e[i],this,n,t);return n.sort(cd),n}}function cd(r,e){return r.distance-e.distance}function au(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)au(s[a],e,t,!0)}}const ld=new L,Xa=new L,Or=new L,Br=new L,vc=new L,Lb=new L,Ib=new L;class oi{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){ld.subVectors(e,this.start),Xa.subVectors(this.end,this.start);const n=Xa.dot(Xa);let s=Xa.dot(ld)/n;return t&&(s=je(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Lb,n=Ib){const i=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,u=e.end;Or.subVectors(l,o),Br.subVectors(u,c),vc.subVectors(o,c);const f=Or.dot(Or),d=Br.dot(Br),h=Br.dot(vc);if(f<=i&&d<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(f<=i)s=0,a=h/d,a=je(a,0,1);else{const g=Or.dot(vc);if(d<=i)a=0,s=je(-g/f,0,1);else{const _=Or.dot(Br),m=f*d-_*_;m!==0?s=je((_*h-g*d)/m,0,1):s=0,a=(_*s+h)/d,a<0?(a=0,s=je(-g/f,0,1)):a>1&&(a=1,s=je((_-g)/f,0,1))}}return t.copy(o).add(Or.multiplyScalar(s)),n.copy(c).add(Br.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function ud(r,e,t,n){const i=Db(n);switch(t){case $h:return r*e;case Lu:return r*e/i.components*i.byteLength;case Iu:return r*e/i.components*i.byteLength;case Qh:return r*e*2/i.components*i.byteLength;case Du:return r*e*2/i.components*i.byteLength;case Zh:return r*e*3/i.components*i.byteLength;case Sn:return r*e*4/i.components*i.byteLength;case Uu:return r*e*4/i.components*i.byteLength;case go:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cl:case Ll:return Math.max(r,16)*Math.max(e,8)/4;case Rl:case Pl:return Math.max(r,8)*Math.max(e,8)/2;case Il:case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case zl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ql:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Yl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Kl:case Jl:case $l:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zl:case Ql:return Math.ceil(r/4)*Math.ceil(e/4)*8;case eu:case tu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Db(r){switch(r){case ai:case Xh:return{byteLength:1,components:1};case sa:case Yh:case bs:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case gr:case Ru:case Hn:return{byteLength:4,components:1};case Kh:case Jh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ub(r){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=r.SHORT;else if(l instanceof Uint32Array)h=r.UNSIGNED_INT;else if(l instanceof Int32Array)h=r.INT;else if(l instanceof Int8Array)h=r.BYTE;else if(l instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(r.bindBuffer(l,o),f.length===0)r.bufferSubData(l,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Nb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fb=`#ifdef USE_ALPHAHASH
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
#endif`,Ob=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hb=`#ifdef USE_AOMAP
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
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
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
#endif`,Wb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,e_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,r_=`#define PI 3.141592653589793
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
} // validated`,s_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,a_=`vec3 transformedNormal = objectNormal;
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
#endif`,o_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,l_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,u_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f_="gl_FragColor = linearToOutputTexel( gl_FragColor );",d_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,h_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m_=`#ifdef USE_ENVMAP
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
#endif`,g_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,b_=`#ifdef USE_ENVMAP
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
#endif`,__=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,x_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M_=`#ifdef USE_GRADIENTMAP
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
}`,S_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,w_=`uniform bool receiveShadow;
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
#endif`,A_=`#ifdef USE_ENVMAP
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
#endif`,R_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,I_=`PhysicalMaterial material;
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
#endif`,D_=`struct PhysicalMaterial {
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
}`,U_=`
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
#endif`,N_=`#if defined( RE_IndirectDiffuse )
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
#endif`,F_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,H_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,G_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W_=`#if defined( USE_POINTS_UV )
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
#endif`,q_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,j_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,K_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J_=`#ifdef USE_MORPHTARGETS
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
#endif`,$_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
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
#endif`,r0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,s0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,u0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,f0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,x0=`float getShadowMask() {
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
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
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
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
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
#endif`,E0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
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
#endif`,C0=`#ifdef USE_TRANSMISSION
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
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,B0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
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
}`,H0=`#if DEPTH_PACKING == 3200
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
}`,V0=`#define DISTANCE
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
}`,G0=`#define DISTANCE
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
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`uniform float scale;
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
}`,X0=`uniform vec3 diffuse;
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
}`,Y0=`#include <common>
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
}`,K0=`uniform vec3 diffuse;
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
}`,J0=`#define LAMBERT
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
}`,$0=`#define LAMBERT
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
}`,Z0=`#define MATCAP
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
}`,Q0=`#define MATCAP
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
}`,ex=`#define NORMAL
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
}`,tx=`#define NORMAL
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
}`,nx=`#define PHONG
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
}`,ix=`#define PHONG
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
}`,rx=`#define STANDARD
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
}`,sx=`#define STANDARD
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
}`,ax=`#define TOON
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
}`,ox=`#define TOON
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
}`,cx=`uniform float size;
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
}`,lx=`uniform vec3 diffuse;
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
}`,ux=`#include <common>
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
}`,fx=`uniform vec3 color;
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
}`,dx=`uniform float rotation;
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
}`,hx=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Nb,alphahash_pars_fragment:Fb,alphamap_fragment:Ob,alphamap_pars_fragment:Bb,alphatest_fragment:kb,alphatest_pars_fragment:zb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:qb,beginnormal_vertex:jb,bsdfs:Xb,iridescence_fragment:Yb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Qb,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:r_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:a_,displacementmap_pars_vertex:o_,displacementmap_vertex:c_,emissivemap_fragment:l_,emissivemap_pars_fragment:u_,colorspace_fragment:f_,colorspace_pars_fragment:d_,envmap_fragment:h_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:A_,envmap_vertex:b_,fog_vertex:__,fog_pars_vertex:x_,fog_fragment:v_,fog_pars_fragment:y_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:S_,lights_lambert_fragment:E_,lights_lambert_pars_fragment:T_,lights_pars_begin:w_,lights_toon_fragment:R_,lights_toon_pars_fragment:C_,lights_phong_fragment:P_,lights_phong_pars_fragment:L_,lights_physical_fragment:I_,lights_physical_pars_fragment:D_,lights_fragment_begin:U_,lights_fragment_maps:N_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:z_,map_fragment:H_,map_pars_fragment:V_,map_particle_fragment:G_,map_particle_pars_fragment:W_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:j_,morphinstance_vertex:X_,morphcolor_vertex:Y_,morphnormal_vertex:K_,morphtarget_pars_vertex:J_,morphtarget_vertex:$_,normal_fragment_begin:Z_,normal_fragment_maps:Q_,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:c0,packing:l0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:d0,dithering_pars_fragment:h0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:b0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:w0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:I0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:H0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:q0,linedashed_vert:j0,linedashed_frag:X0,meshbasic_vert:Y0,meshbasic_frag:K0,meshlambert_vert:J0,meshlambert_frag:$0,meshmatcap_vert:Z0,meshmatcap_frag:Q0,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ax,meshtoon_frag:ox,points_vert:cx,points_frag:lx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:hx},ue={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ya={r:0,b:0,g:0},nr=new jn,px=new Ne;function mx(r,e,t,n,i,s,a){const o=new Oe(0);let c=s===!0?0:1,l,u,f=null,d=0,h=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function _(x){let b=!1;const y=g(x);y===null?p(o,c):y&&y.isColor&&(p(y,1),b=!0);const T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(x,b){const y=g(b);y&&(y.isCubeTexture||y.mapping===Uo)?(u===void 0&&(u=new gt(new br(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:us(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),nr.copy(b.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(nr)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,(f!==y||d!==y.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=r.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new gt(new _r(2,2),new bn({name:"BackgroundMaterial",uniforms:us(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(y.colorSpace)!==ct,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Ya,op(r)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,b,a)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:v}}function gx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,w,R,D,I){let F=!1;const O=f(D,R,w);s!==O&&(s=O,l(s.object)),F=h(S,D,R,I),F&&g(S,D,R,I),I!==null&&e.update(I,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(S,w,R,D),I!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function c(){return r.createVertexArray()}function l(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function f(S,w,R){const D=R.wireframe===!0;let I=n[S.id];I===void 0&&(I={},n[S.id]=I);let F=I[w.id];F===void 0&&(F={},I[w.id]=F);let O=F[D];return O===void 0&&(O=d(c()),F[D]=O),O}function d(S){const w=[],R=[],D=[];for(let I=0;I<t;I++)w[I]=0,R[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:D,object:S,attributes:{},index:null}}function h(S,w,R,D){const I=s.attributes,F=w.attributes;let O=0;const V=R.getAttributes();for(const H in V)if(V[H].location>=0){const Q=I[H];let J=F[H];if(J===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(J=S.instanceColor)),Q===void 0||Q.attribute!==J||J&&Q.data!==J.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function g(S,w,R,D){const I={},F=w.attributes;let O=0;const V=R.getAttributes();for(const H in V)if(V[H].location>=0){let Q=F[H];Q===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(Q=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(Q=S.instanceColor));const J={};J.attribute=Q,Q&&Q.data&&(J.data=Q.data),I[H]=J,O++}s.attributes=I,s.attributesNum=O,s.index=D}function _(){const S=s.newAttributes;for(let w=0,R=S.length;w<R;w++)S[w]=0}function m(S){p(S,0)}function p(S,w){const R=s.newAttributes,D=s.enabledAttributes,I=s.attributeDivisors;R[S]=1,D[S]===0&&(r.enableVertexAttribArray(S),D[S]=1),I[S]!==w&&(r.vertexAttribDivisor(S,w),I[S]=w)}function v(){const S=s.newAttributes,w=s.enabledAttributes;for(let R=0,D=w.length;R<D;R++)w[R]!==S[R]&&(r.disableVertexAttribArray(R),w[R]=0)}function x(S,w,R,D,I,F,O){O===!0?r.vertexAttribIPointer(S,w,R,I,F):r.vertexAttribPointer(S,w,R,D,I,F)}function b(S,w,R,D){_();const I=D.attributes,F=R.getAttributes(),O=w.defaultAttributeValues;for(const V in F){const H=F[V];if(H.location>=0){let Z=I[V];if(Z===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor)),Z!==void 0){const Q=Z.normalized,J=Z.itemSize,fe=e.get(Z);if(fe===void 0)continue;const Ie=fe.buffer,Je=fe.type,Ve=fe.bytesPerElement,X=Je===r.INT||Je===r.UNSIGNED_INT||Z.gpuType===Ru;if(Z.isInterleavedBufferAttribute){const K=Z.data,le=K.stride,Re=Z.offset;if(K.isInstancedInterleavedBuffer){for(let ge=0;ge<H.locationSize;ge++)p(H.location+ge,K.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ge=0;ge<H.locationSize;ge++)m(H.location+ge);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let ge=0;ge<H.locationSize;ge++)x(H.location+ge,J/H.locationSize,Je,Q,le*Ve,(Re+J/H.locationSize*ge)*Ve,X)}else{if(Z.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)p(H.location+K,Z.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let K=0;K<H.locationSize;K++)m(H.location+K);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let K=0;K<H.locationSize;K++)x(H.location+K,J/H.locationSize,Je,Q,J*Ve,J/H.locationSize*K*Ve,X)}}else if(O!==void 0){const Q=O[V];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(H.location,Q);break;case 3:r.vertexAttrib3fv(H.location,Q);break;case 4:r.vertexAttrib4fv(H.location,Q);break;default:r.vertexAttrib1fv(H.location,Q)}}}}v()}function y(){A();for(const S in n){const w=n[S];for(const R in w){const D=w[R];for(const I in D)u(D[I].object),delete D[I];delete w[R]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const R in w){const D=w[R];for(const I in D)u(D[I].object),delete D[I];delete w[R]}delete n[S.id]}function E(S){for(const w in n){const R=n[w];if(R[S.id]===void 0)continue;const D=R[S.id];for(const I in D)u(D[I].object),delete D[I];delete R[S.id]}}function A(){M(),a=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:A,resetDefaultState:M,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function bx(r,e,t){let n;function i(l){n=l}function s(l,u){r.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(r.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function c(l,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _x(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(E){return!(E!==Sn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const A=E===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ai&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Hn&&!A)}function c(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=g>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:y,maxSamples:T}}function xx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Qn,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{const v=s?0:n,x=v*4;let b=p.clippingState||null;c.value=b,b=u(g,d,x,h);for(let y=0;y!==x;++y)b[y]=t[y];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=h;x!==_;++x,b+=4)a.copy(f[x]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vx(r){let e=new WeakMap;function t(a,o){return o===wl?a.mapping=as:o===Al&&(a.mapping=os),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===wl||o===Al)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new kg(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const $r=4,fd=[.125,.215,.35,.446,.526,.582],dr=20,yc=new ju,dd=new Oe;let Mc=null,Sc=0,Ec=0,Tc=!1;const ur=(1+Math.sqrt(5))/2,kr=1/ur,hd=[new L(-ur,kr,0),new L(ur,kr,0),new L(-kr,0,ur),new L(kr,0,ur),new L(0,ur,-kr),new L(0,ur,kr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],yx=new L;class ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=yx}=s;Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=md(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mc,Sc,Ec),this._renderer.xr.enabled=Tc,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mc=this._renderer.getRenderTarget(),Sc=this._renderer.getActiveCubeFace(),Ec=this._renderer.getActiveMipmapLevel(),Tc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:bs,format:Sn,colorSpace:$t,depthBuffer:!1},i=pd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(s)),this._blurMaterial=Sx(s,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,yc)}_sceneToCubeUV(e,t,n,i,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(dd),f.toneMapping=Wi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null));const _=new ii({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new gt(new br,_);let p=!1;const v=e.background;v?v.isColor&&(_.color.copy(v),e.background=null,p=!0):(_.color.copy(dd),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[x],s.y,s.z)):b===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[x]));const y=this._cubeSize;Ka(i,b*y,x>2?y:0,y,y),f.setRenderTarget(i),p&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===as||e.mapping===os;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=gd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=md());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ka(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hd[(i-s-1)%hd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new gt(this._lodPlanes[i],l),d=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*dr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const p=[];let v=0;for(let E=0;E<dr;++E){const A=E/_,M=Math.exp(-A*A/2);p.push(M),E===0?v+=M:E<m&&(v+=2*M)}for(let E=0;E<p.length;E++)p[E]=p[E]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const b=this._sizeLods[i],y=3*b*(i>x-$r?i-x+$r:0),T=4*(this._cubeSize-b);Ka(t,y,T,3*b,2*b),c.setRenderTarget(t),c.render(f,yc)}}function Mx(r){const e=[],t=[],n=[];let i=r;const s=r-$r+1+fd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-$r?c=fd[a-r+$r-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*h),x=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let T=0;T<h;T++){const E=T%3*2/3-1,A=T>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];v.set(M,_*g*T),x.set(d,m*g*T);const S=[T,T,T,T,T,T];b.set(S,p*g*T)}const y=new ln;y.setAttribute("position",new Bt(v,_)),y.setAttribute("uv",new Bt(x,m)),y.setAttribute("faceIndex",new Bt(b,p)),e.push(y),i>$r&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function pd(r,e,t){const n=new ji(r,e,t);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sx(r,e,t){const n=new Float32Array(dr),i=new L(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function md(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function gd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Ju(){return`

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
	`}function Ex(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===wl||c===Al,u=c===as||c===os;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ou(r)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return l&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new ou(r)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wx(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function l(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const v=h.array;_=h.version;for(let x=0,b=v.length;x<b;x+=3){const y=v[x+0],T=v[x+1],E=v[x+2];d.push(y,T,T,E,E,y)}}else if(g!==void 0){const v=g.array;_=g.version;for(let x=0,b=v.length/3-1;x<b;x+=3){const y=x+0,T=x+1,E=x+2;d.push(y,T,T,E,E,y)}}else return;const m=new(np(d)?ap:sp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function Ax(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let v=0;v<g;v++)p+=h[v]*_[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Rx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cx(r,e,t){const n=new WeakMap,i=new tt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var h=S;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let y=o.attributes.position.count*b,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const E=new Float32Array(y*T*4*f),A=new ip(E,y,T,f);A.type=Hn,A.needsUpdate=!0;const M=b*4;for(let w=0;w<f;w++){const R=p[w],D=v[w],I=x[w],F=y*T*4*w;for(let O=0;O<R.count;O++){const V=O*M;g===!0&&(i.fromBufferAttribute(R,O),E[F+V+0]=i.x,E[F+V+1]=i.y,E[F+V+2]=i.z,E[F+V+3]=0),_===!0&&(i.fromBufferAttribute(D,O),E[F+V+4]=i.x,E[F+V+5]=i.y,E[F+V+6]=i.z,E[F+V+7]=0),m===!0&&(i.fromBufferAttribute(I,O),E[F+V+8]=i.x,E[F+V+9]=i.y,E[F+V+10]=i.z,E[F+V+11]=I.itemSize===4?i.w:1)}}d={count:f,texture:A,size:new Ue(y,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",_),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Px(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const wp=new It,bd=new _p(1,1),Ap=new ip,Rp=new Sg,Cp=new up,_d=[],xd=[],vd=new Float32Array(16),yd=new Float32Array(9),Md=new Float32Array(4);function Ms(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=_d[i];if(s===void 0&&(s=new Float32Array(i),_d[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Dt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Fo(r,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;Md.set(n),r.uniformMatrix2fv(this.addr,!1,Md),Ut(t,n)}}function Fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;yd.set(n),r.uniformMatrix3fv(this.addr,!1,yd),Ut(t,n)}}function Ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(Dt(t,n))return;vd.set(n),r.uniformMatrix4fv(this.addr,!1,vd),Ut(t,n)}}function Bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function Hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function Vx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(bd.compareFunction=tp,s=bd):s=wp,t.setTexture2D(e||s,i)}function Xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rp,i)}function Yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cp,i)}function Kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ap,i)}function Jx(r){switch(r){case 5126:return Lx;case 35664:return Ix;case 35665:return Dx;case 35666:return Ux;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}function $x(r,e){r.uniform1fv(this.addr,e)}function Zx(r,e){const t=Ms(e,this.size,2);r.uniform2fv(this.addr,t)}function Qx(r,e){const t=Ms(e,this.size,3);r.uniform3fv(this.addr,t)}function ev(r,e){const t=Ms(e,this.size,4);r.uniform4fv(this.addr,t)}function tv(r,e){const t=Ms(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nv(r,e){const t=Ms(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iv(r,e){const t=Ms(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rv(r,e){r.uniform1iv(this.addr,e)}function sv(r,e){r.uniform2iv(this.addr,e)}function av(r,e){r.uniform3iv(this.addr,e)}function ov(r,e){r.uniform4iv(this.addr,e)}function cv(r,e){r.uniform1uiv(this.addr,e)}function lv(r,e){r.uniform2uiv(this.addr,e)}function uv(r,e){r.uniform3uiv(this.addr,e)}function fv(r,e){r.uniform4uiv(this.addr,e)}function dv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||wp,s[a])}function hv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rp,s[a])}function pv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cp,s[a])}function mv(r,e,t){const n=this.cache,i=e.length,s=Fo(t,i);Dt(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ap,s[a])}function gv(r){switch(r){case 5126:return $x;case 35664:return Zx;case 35665:return Qx;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return cv;case 36294:return lv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Sd(r,e){r.seq.push(e),r.map[e.id]=e}function vv(r,e,t){const n=r.name,i=n.length;for(wc.lastIndex=0;;){const s=wc.exec(n),a=wc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Sd(t,l===void 0?new bv(o,r,e):new _v(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new xv(o),Sd(t,f)),t=f}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);vv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ed(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yv=37297;let Mv=0;function Sv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Td=new Ye;function Ev(r){Qe._getMatrix(Td,Qe.workingColorSpace,r);const e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(r)){case To:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Sv(r.getShaderSource(e),o)}else return s}function Tv(r,e){const t=Ev(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wv(r,e){let t;switch(e){case Nm:t="Linear";break;case Fm:t="Reinhard";break;case Om:t="Cineon";break;case Bm:t="ACESFilmic";break;case Wh:t="AgX";break;case zm:t="Neutral";break;case km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new L;function Av(){Qe.getLuminanceCoefficients(Ja);const r=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Cv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function qs(r){return r!==""}function Ad(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(r){return r.replace(Lv,Dv)}const Iv=new Map;function Dv(r,e){let t=Ke[e];if(t===void 0){const n=Iv.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cu(t)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(r){return r.replace(Uv,Nv)}function Nv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Fv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ov(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case as:case os:e="ENVMAP_TYPE_CUBE";break;case Uo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case os:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Au:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Um:e="ENVMAP_BLENDING_ADD";break}return e}function zv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Fv(t),l=Ov(t),u=Bv(t),f=kv(t),d=zv(t),h=Rv(t),g=Cv(s),_=i.createProgram();let m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Wi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=cu(a),a=Ad(a,t),a=Rd(a,t),o=cu(o),o=Ad(o,t),o=Rd(o,t),a=Cd(a),o=Cd(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ef?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ef?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=v+m+a,b=v+p+o,y=Ed(i,i.VERTEX_SHADER,x),T=Ed(i,i.FRAGMENT_SHADER,b);i.attachShader(_,y),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(w){if(r.debug.checkShaderErrors){const R=i.getProgramInfoLog(_)||"",D=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(T)||"",F=R.trim(),O=D.trim(),V=I.trim();let H=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,T);else{const Q=wd(i,y,"vertex"),J=wd(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+Q+`
`+J)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(Z=!1);Z&&(w.diagnostics={runnable:H,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}i.deleteShader(y),i.deleteShader(T),A=new vo(i,_),M=Pv(i,_)}let A;this.getUniforms=function(){return A===void 0&&E(this),A};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,yv)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let Vv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wv(e),t.set(e,n)),n}}class Wv{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}}function qv(r,e,t,n,i,s,a){const o=new Bu,c=new Gv,l=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,w,R,D){const I=R.fog,F=D.geometry,O=M.isMeshStandardMaterial?R.environment:null,V=(M.isMeshStandardMaterial?t:e).get(M.envMap||O),H=V&&V.mapping===Uo?V.image.height:null,Z=g[M.type];M.precision!==null&&(h=i.getMaxPrecision(M.precision),h!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const Q=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,J=Q!==void 0?Q.length:0;let fe=0;F.morphAttributes.position!==void 0&&(fe=1),F.morphAttributes.normal!==void 0&&(fe=2),F.morphAttributes.color!==void 0&&(fe=3);let Ie,Je,Ve,X;if(Z){const rt=ei[Z];Ie=rt.vertexShader,Je=rt.fragmentShader}else Ie=M.vertexShader,Je=M.fragmentShader,c.update(M),Ve=c.getVertexShaderID(M),X=c.getFragmentShaderID(M);const K=r.getRenderTarget(),le=r.state.buffers.depth.getReversed(),Re=D.isInstancedMesh===!0,ge=D.isBatchedMesh===!0,Ge=!!M.map,te=!!M.matcap,N=!!V,ke=!!M.aoMap,Me=!!M.lightMap,me=!!M.bumpMap,ae=!!M.normalMap,et=!!M.displacementMap,be=!!M.emissiveMap,We=!!M.metalnessMap,Nt=!!M.roughnessMap,Tt=M.anisotropy>0,U=M.clearcoat>0,C=M.dispersion>0,G=M.iridescence>0,Y=M.sheen>0,ee=M.transmission>0,j=Tt&&!!M.anisotropyMap,Le=U&&!!M.clearcoatMap,oe=U&&!!M.clearcoatNormalMap,we=U&&!!M.clearcoatRoughnessMap,Ce=G&&!!M.iridescenceMap,re=G&&!!M.iridescenceThicknessMap,pe=Y&&!!M.sheenColorMap,ze=Y&&!!M.sheenRoughnessMap,Pe=!!M.specularMap,de=!!M.specularColorMap,Xe=!!M.specularIntensityMap,B=ee&&!!M.transmissionMap,se=ee&&!!M.thicknessMap,ce=!!M.gradientMap,ve=!!M.alphaMap,ne=M.alphaTest>0,$=!!M.alphaHash,Ee=!!M.extensions;let qe=Wi;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(qe=r.toneMapping);const dt={shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:Ie,fragmentShader:Je,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:X,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:ge,batchingColor:ge&&D._colorsTexture!==null,instancing:Re,instancingColor:Re&&D.instanceColor!==null,instancingMorph:Re&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:$t,alphaToCoverage:!!M.alphaToCoverage,map:Ge,matcap:te,envMap:N,envMapMode:N&&V.mapping,envMapCubeUVHeight:H,aoMap:ke,lightMap:Me,bumpMap:me,normalMap:ae,displacementMap:d&&et,emissiveMap:be,normalMapObjectSpace:ae&&M.normalMapType===jm,normalMapTangentSpace:ae&&M.normalMapType===Nu,metalnessMap:We,roughnessMap:Nt,anisotropy:Tt,anisotropyMap:j,clearcoat:U,clearcoatMap:Le,clearcoatNormalMap:oe,clearcoatRoughnessMap:we,dispersion:C,iridescence:G,iridescenceMap:Ce,iridescenceThicknessMap:re,sheen:Y,sheenColorMap:pe,sheenRoughnessMap:ze,specularMap:Pe,specularColorMap:de,specularIntensityMap:Xe,transmission:ee,transmissionMap:B,thicknessMap:se,gradientMap:ce,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:$,combine:M.combine,mapUv:Ge&&_(M.map.channel),aoMapUv:ke&&_(M.aoMap.channel),lightMapUv:Me&&_(M.lightMap.channel),bumpMapUv:me&&_(M.bumpMap.channel),normalMapUv:ae&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:be&&_(M.emissiveMap.channel),metalnessMapUv:We&&_(M.metalnessMap.channel),roughnessMapUv:Nt&&_(M.roughnessMap.channel),anisotropyMapUv:j&&_(M.anisotropyMap.channel),clearcoatMapUv:Le&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:ze&&_(M.sheenRoughnessMap.channel),specularMapUv:Pe&&_(M.specularMap.channel),specularColorMapUv:de&&_(M.specularColorMap.channel),specularIntensityMapUv:Xe&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:se&&_(M.thicknessMap.channel),alphaMapUv:ve&&_(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ae||Tt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Ge||ve),fog:!!I,useFog:M.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:le,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:qe,decodeVideoTexture:Ge&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===ct,decodeVideoTextureEmissive:be&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===ct,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===sn,flipSided:M.side===qt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ee&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&M.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)S.push(w),S.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(v(S,M),x(S,M),S.push(r.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function v(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=g[M.type];let w;if(S){const R=ei[S];w=cp.clone(R.uniforms)}else w=M.uniforms;return w}function y(M,S){let w;for(let R=0,D=u.length;R<D;R++){const I=u[R];if(I.cacheKey===S){w=I,++w.usedTimes;break}}return w===void 0&&(w=new Hv(r,S,M,s),u.push(w)),w}function T(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function E(M){c.remove(M)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:y,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:A}}function jv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Xv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ld(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Id(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||Xv),n.length>1&&n.sort(d||Ld),i.length>1&&i.sort(d||Ld)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:u,sort:l}}function Yv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Id,r.set(n,[a])):i>=s.length?(a=new Id,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Oe};break;case"SpotLight":t={position:new L,direction:new L,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function Jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $v=0;function Zv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qv(r){const e=new Kv,t=Jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,s=new Ne,a=new Ne;function o(l){let u=0,f=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,v=0,x=0,b=0,y=0,T=0,E=0;l.sort(Zv);for(let M=0,S=l.length;M<S;M++){const w=l[M],R=w.color,D=w.intensity,I=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=R.r*D,f+=R.g*D,d+=R.b*D;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],D);E++}else if(w.isDirectionalLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,H=t.get(w);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[h]=H,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=w.shadow.matrix,v++}n.directional[h]=O,h++}else if(w.isSpotLight){const O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(R).multiplyScalar(D),O.distance=I,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[_]=O;const V=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,V.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=V.matrix,w.castShadow){const H=t.get(w);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=F,b++}_++}else if(w.isRectAreaLight){const O=e.get(w);O.color.copy(R).multiplyScalar(D),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=O,m++}else if(w.isPointLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){const V=w.shadow,H=t.get(w);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=O,g++}else if(w.isHemisphereLight){const O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(D),O.groundColor.copy(w.groundColor).multiplyScalar(D),n.hemi[p]=O,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const A=n.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==v||A.numPointShadows!==x||A.numSpotShadows!==b||A.numSpotMaps!==y||A.numLightProbes!==E)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,A.directionalLength=h,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=v,A.numPointShadows=x,A.numSpotShadows=b,A.numSpotMaps=y,A.numLightProbes=E,n.version=$v++)}function c(l,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){const x=l[p];if(x.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),f++}else if(x.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Dd(r){const e=new Qv(r),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ey(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Dd(r),e.set(i,[o])):s>=a.length?(o=new Dd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ny=`uniform sampler2D shadow_pass;
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
}`;function iy(r,e,t){let n=new Hu;const i=new Ue,s=new Ue,a=new tt,o=new Qg({depthPacking:qm}),c=new eb,l={},u=t.maxTextureSize,f={[Ln]:qt,[qt]:Ln,[sn]:sn},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gh;let p=this.type;this.render=function(T,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=r.getRenderTarget(),S=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),R=r.state;R.setBlending(Gi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const D=p!==gi&&this.type===gi,I=p===gi&&this.type!==gi;for(let F=0,O=T.length;F<O;F++){const V=T[F],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const Z=H.getFrameExtents();if(i.multiply(Z),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,H.mapSize.y=s.y)),H.map===null||D===!0||I===!0){const J=this.type!==gi?{minFilter:Jt,magFilter:Jt}:{};H.map!==null&&H.map.dispose(),H.map=new ji(i.x,i.y,J),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const Q=H.getViewportCount();for(let J=0;J<Q;J++){const fe=H.getViewport(J);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),R.viewport(a),H.updateMatrices(V,J),n=H.getFrustum(),b(E,A,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===gi&&v(H,A),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(M,S,w)};function v(T,E){const A=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ji(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,A,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,A,h,_,null)}function x(T,E,A,M){let S=null;const w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)S=w;else if(S=A.isPointLight===!0?c:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const R=S.uuid,D=E.uuid;let I=l[R];I===void 0&&(I={},l[R]=I);let F=I[D];F===void 0&&(F=S.clone(),I[D]=F,E.addEventListener("dispose",y)),S=F}if(S.visible=E.visible,S.wireframe=E.wireframe,M===gi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,A.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const R=r.properties.get(S);R.light=A}return S}function b(T,E,A,M,S){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===gi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const D=e.update(T),I=T.material;if(Array.isArray(I)){const F=D.groups;for(let O=0,V=F.length;O<V;O++){const H=F[O],Z=I[H.materialIndex];if(Z&&Z.visible){const Q=x(T,Z,M,S);T.onBeforeShadow(r,T,E,A,D,Q,H),r.renderBufferDirect(A,null,D,Q,T,H),T.onAfterShadow(r,T,E,A,D,Q,H)}}}else if(I.visible){const F=x(T,I,M,S);T.onBeforeShadow(r,T,E,A,D,F,null),r.renderBufferDirect(A,null,D,F,T,null),T.onAfterShadow(r,T,E,A,D,F,null)}}const R=T.children;for(let D=0,I=R.length;D<I;D++)b(R[D],E,A,M,S)}function y(T){T.target.removeEventListener("dispose",y);for(const A in l){const M=l[A],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const ry={[xl]:vl,[yl]:El,[Ml]:Tl,[ss]:Sl,[vl]:xl,[El]:yl,[Tl]:Ml,[Sl]:ss};function sy(r,e){function t(){let B=!1;const se=new tt;let ce=null;const ve=new tt(0,0,0,0);return{setMask:function(ne){ce!==ne&&!B&&(r.colorMask(ne,ne,ne,ne),ce=ne)},setLocked:function(ne){B=ne},setClear:function(ne,$,Ee,qe,dt){dt===!0&&(ne*=qe,$*=qe,Ee*=qe),se.set(ne,$,Ee,qe),ve.equals(se)===!1&&(r.clearColor(ne,$,Ee,qe),ve.copy(se))},reset:function(){B=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,se=!1,ce=null,ve=null,ne=null;return{setReversed:function($){if(se!==$){const Ee=e.get("EXT_clip_control");$?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=$;const qe=ne;ne=null,this.setClear(qe)}},getReversed:function(){return se},setTest:function($){$?K(r.DEPTH_TEST):le(r.DEPTH_TEST)},setMask:function($){ce!==$&&!B&&(r.depthMask($),ce=$)},setFunc:function($){if(se&&($=ry[$]),ve!==$){switch($){case xl:r.depthFunc(r.NEVER);break;case vl:r.depthFunc(r.ALWAYS);break;case yl:r.depthFunc(r.LESS);break;case ss:r.depthFunc(r.LEQUAL);break;case Ml:r.depthFunc(r.EQUAL);break;case Sl:r.depthFunc(r.GEQUAL);break;case El:r.depthFunc(r.GREATER);break;case Tl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=$}},setLocked:function($){B=$},setClear:function($){ne!==$&&(se&&($=1-$),r.clearDepth($),ne=$)},reset:function(){B=!1,ce=null,ve=null,ne=null,se=!1}}}function i(){let B=!1,se=null,ce=null,ve=null,ne=null,$=null,Ee=null,qe=null,dt=null;return{setTest:function(rt){B||(rt?K(r.STENCIL_TEST):le(r.STENCIL_TEST))},setMask:function(rt){se!==rt&&!B&&(r.stencilMask(rt),se=rt)},setFunc:function(rt,li,Jn){(ce!==rt||ve!==li||ne!==Jn)&&(r.stencilFunc(rt,li,Jn),ce=rt,ve=li,ne=Jn)},setOp:function(rt,li,Jn){($!==rt||Ee!==li||qe!==Jn)&&(r.stencilOp(rt,li,Jn),$=rt,Ee=li,qe=Jn)},setLocked:function(rt){B=rt},setClear:function(rt){dt!==rt&&(r.clearStencil(rt),dt=rt)},reset:function(){B=!1,se=null,ce=null,ve=null,ne=null,$=null,Ee=null,qe=null,dt=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,v=null,x=null,b=null,y=null,T=null,E=new Oe(0,0,0),A=0,M=!1,S=null,w=null,R=null,D=null,I=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=V>=1):H.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=V>=2);let Z=null,Q={};const J=r.getParameter(r.SCISSOR_BOX),fe=r.getParameter(r.VIEWPORT),Ie=new tt().fromArray(J),Je=new tt().fromArray(fe);function Ve(B,se,ce,ve){const ne=new Uint8Array(4),$=r.createTexture();r.bindTexture(B,$),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ee=0;Ee<ce;Ee++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(se,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,ne):r.texImage2D(se+Ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ne);return $}const X={};X[r.TEXTURE_2D]=Ve(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Ve(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Ve(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Ve(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(r.DEPTH_TEST),a.setFunc(ss),me(!1),ae(gf),K(r.CULL_FACE),ke(Gi);function K(B){u[B]!==!0&&(r.enable(B),u[B]=!0)}function le(B){u[B]!==!1&&(r.disable(B),u[B]=!1)}function Re(B,se){return f[B]!==se?(r.bindFramebuffer(B,se),f[B]=se,B===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=se),B===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=se),!0):!1}function ge(B,se){let ce=h,ve=!1;if(B){ce=d.get(se),ce===void 0&&(ce=[],d.set(se,ce));const ne=B.textures;if(ce.length!==ne.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Ee=ne.length;$<Ee;$++)ce[$]=r.COLOR_ATTACHMENT0+$;ce.length=ne.length,ve=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ce)}function Ge(B){return g!==B?(r.useProgram(B),g=B,!0):!1}const te={[fr]:r.FUNC_ADD,[gm]:r.FUNC_SUBTRACT,[bm]:r.FUNC_REVERSE_SUBTRACT};te[_m]=r.MIN,te[xm]=r.MAX;const N={[vm]:r.ZERO,[ym]:r.ONE,[Mm]:r.SRC_COLOR,[bl]:r.SRC_ALPHA,[Rm]:r.SRC_ALPHA_SATURATE,[wm]:r.DST_COLOR,[Em]:r.DST_ALPHA,[Sm]:r.ONE_MINUS_SRC_COLOR,[_l]:r.ONE_MINUS_SRC_ALPHA,[Am]:r.ONE_MINUS_DST_COLOR,[Tm]:r.ONE_MINUS_DST_ALPHA,[Cm]:r.CONSTANT_COLOR,[Pm]:r.ONE_MINUS_CONSTANT_COLOR,[Lm]:r.CONSTANT_ALPHA,[Im]:r.ONE_MINUS_CONSTANT_ALPHA};function ke(B,se,ce,ve,ne,$,Ee,qe,dt,rt){if(B===Gi){_===!0&&(le(r.BLEND),_=!1);return}if(_===!1&&(K(r.BLEND),_=!0),B!==mm){if(B!==m||rt!==M){if((p!==fr||b!==fr)&&(r.blendEquation(r.FUNC_ADD),p=fr,b=fr),rt)switch(B){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rs:r.blendFunc(r.ONE,r.ONE);break;case bf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _f:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case bf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _f:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}v=null,x=null,y=null,T=null,E.set(0,0,0),A=0,m=B,M=rt}return}ne=ne||se,$=$||ce,Ee=Ee||ve,(se!==p||ne!==b)&&(r.blendEquationSeparate(te[se],te[ne]),p=se,b=ne),(ce!==v||ve!==x||$!==y||Ee!==T)&&(r.blendFuncSeparate(N[ce],N[ve],N[$],N[Ee]),v=ce,x=ve,y=$,T=Ee),(qe.equals(E)===!1||dt!==A)&&(r.blendColor(qe.r,qe.g,qe.b,dt),E.copy(qe),A=dt),m=B,M=!1}function Me(B,se){B.side===sn?le(r.CULL_FACE):K(r.CULL_FACE);let ce=B.side===qt;se&&(ce=!ce),me(ce),B.blending===es&&B.transparent===!1?ke(Gi):ke(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):le(r.SAMPLE_ALPHA_TO_COVERAGE)}function me(B){S!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),S=B)}function ae(B){B!==dm?(K(r.CULL_FACE),B!==w&&(B===gf?r.cullFace(r.BACK):B===hm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):le(r.CULL_FACE),w=B}function et(B){B!==R&&(O&&r.lineWidth(B),R=B)}function be(B,se,ce){B?(K(r.POLYGON_OFFSET_FILL),(D!==se||I!==ce)&&(r.polygonOffset(se,ce),D=se,I=ce)):le(r.POLYGON_OFFSET_FILL)}function We(B){B?K(r.SCISSOR_TEST):le(r.SCISSOR_TEST)}function Nt(B){B===void 0&&(B=r.TEXTURE0+F-1),Z!==B&&(r.activeTexture(B),Z=B)}function Tt(B,se,ce){ce===void 0&&(Z===null?ce=r.TEXTURE0+F-1:ce=Z);let ve=Q[ce];ve===void 0&&(ve={type:void 0,texture:void 0},Q[ce]=ve),(ve.type!==B||ve.texture!==se)&&(Z!==ce&&(r.activeTexture(ce),Z=ce),r.bindTexture(B,se||X[B]),ve.type=B,ve.texture=se)}function U(){const B=Q[Z];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{r.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{r.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ee(){try{r.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{r.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{r.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{r.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{r.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{r.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(B){Ie.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function ze(B){Je.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),Je.copy(B))}function Pe(B,se){let ce=l.get(se);ce===void 0&&(ce=new WeakMap,l.set(se,ce));let ve=ce.get(B);ve===void 0&&(ve=r.getUniformBlockIndex(se,B.name),ce.set(B,ve))}function de(B,se){const ve=l.get(se).get(B);c.get(se)!==ve&&(r.uniformBlockBinding(se,ve,B.__bindingPointIndex),c.set(se,ve))}function Xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},Z=null,Q={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,v=null,x=null,b=null,y=null,T=null,E=new Oe(0,0,0),A=0,M=!1,S=null,w=null,R=null,D=null,I=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Je.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:le,bindFramebuffer:Re,drawBuffers:ge,useProgram:Ge,setBlending:ke,setMaterial:Me,setFlipSided:me,setCullFace:ae,setLineWidth:et,setPolygonOffset:be,setScissorTest:We,activeTexture:Nt,bindTexture:Tt,unbindTexture:U,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:Ce,texImage3D:re,updateUBOMapping:Pe,uniformBlockBinding:de,texStorage2D:oe,texStorage3D:we,texSubImage2D:Y,texSubImage3D:ee,compressedTexSubImage2D:j,compressedTexSubImage3D:Le,scissor:pe,viewport:ze,reset:Xe}}function ay(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,C){return h?new OffscreenCanvas(U,C):fa("canvas")}function _(U,C,G){let Y=1;const ee=Tt(U);if((ee.width>G||ee.height>G)&&(Y=G/Math.max(ee.width,ee.height)),Y<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const j=Math.floor(Y*ee.width),Le=Math.floor(Y*ee.height);f===void 0&&(f=g(j,Le));const oe=C?g(j,Le):f;return oe.width=j,oe.height=Le,oe.getContext("2d").drawImage(U,0,0,j,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+j+"x"+Le+")."),oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function v(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(U,C,G,Y,ee=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let j=C;if(C===r.RED&&(G===r.FLOAT&&(j=r.R32F),G===r.HALF_FLOAT&&(j=r.R16F),G===r.UNSIGNED_BYTE&&(j=r.R8)),C===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.R8UI),G===r.UNSIGNED_SHORT&&(j=r.R16UI),G===r.UNSIGNED_INT&&(j=r.R32UI),G===r.BYTE&&(j=r.R8I),G===r.SHORT&&(j=r.R16I),G===r.INT&&(j=r.R32I)),C===r.RG&&(G===r.FLOAT&&(j=r.RG32F),G===r.HALF_FLOAT&&(j=r.RG16F),G===r.UNSIGNED_BYTE&&(j=r.RG8)),C===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RG8UI),G===r.UNSIGNED_SHORT&&(j=r.RG16UI),G===r.UNSIGNED_INT&&(j=r.RG32UI),G===r.BYTE&&(j=r.RG8I),G===r.SHORT&&(j=r.RG16I),G===r.INT&&(j=r.RG32I)),C===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGB8UI),G===r.UNSIGNED_SHORT&&(j=r.RGB16UI),G===r.UNSIGNED_INT&&(j=r.RGB32UI),G===r.BYTE&&(j=r.RGB8I),G===r.SHORT&&(j=r.RGB16I),G===r.INT&&(j=r.RGB32I)),C===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),G===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),G===r.UNSIGNED_INT&&(j=r.RGBA32UI),G===r.BYTE&&(j=r.RGBA8I),G===r.SHORT&&(j=r.RGBA16I),G===r.INT&&(j=r.RGBA32I)),C===r.RGB&&(G===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),G===r.UNSIGNED_INT_10F_11F_11F_REV&&(j=r.R11F_G11F_B10F)),C===r.RGBA){const Le=ee?To:Qe.getTransfer(Y);G===r.FLOAT&&(j=r.RGBA32F),G===r.HALF_FLOAT&&(j=r.RGBA16F),G===r.UNSIGNED_BYTE&&(j=Le===ct?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(U,C){let G;return U?C===null||C===gr||C===aa?G=r.DEPTH24_STENCIL8:C===Hn?G=r.DEPTH32F_STENCIL8:C===sa&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===gr||C===aa?G=r.DEPTH_COMPONENT24:C===Hn?G=r.DEPTH_COMPONENT32F:C===sa&&(G=r.DEPTH_COMPONENT16),G}function y(U,C){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jt&&U.minFilter!==Kt?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function T(U){const C=U.target;C.removeEventListener("dispose",T),A(C),C.isVideoTexture&&u.delete(C)}function E(U){const C=U.target;C.removeEventListener("dispose",E),S(C)}function A(U){const C=n.get(U);if(C.__webglInit===void 0)return;const G=U.source,Y=d.get(G);if(Y){const ee=Y[C.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(U),Object.keys(Y).length===0&&d.delete(G)}n.remove(U)}function M(U){const C=n.get(U);r.deleteTexture(C.__webglTexture);const G=U.source,Y=d.get(G);delete Y[C.__cacheKey],a.memory.textures--}function S(U){const C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(C.__webglFramebuffer[Y]))for(let ee=0;ee<C.__webglFramebuffer[Y].length;ee++)r.deleteFramebuffer(C.__webglFramebuffer[Y][ee]);else r.deleteFramebuffer(C.__webglFramebuffer[Y]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[Y])}else{if(Array.isArray(C.__webglFramebuffer))for(let Y=0;Y<C.__webglFramebuffer.length;Y++)r.deleteFramebuffer(C.__webglFramebuffer[Y]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Y=0;Y<C.__webglColorRenderbuffer.length;Y++)C.__webglColorRenderbuffer[Y]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[Y]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const G=U.textures;for(let Y=0,ee=G.length;Y<ee;Y++){const j=n.get(G[Y]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(G[Y])}n.remove(U)}let w=0;function R(){w=0}function D(){const U=w;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),w+=1,U}function I(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function F(U,C){const G=n.get(U);if(U.isVideoTexture&&We(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const Y=U.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,U,C);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+C)}function O(U,C){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){X(G,U,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+C)}function V(U,C){const G=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){X(G,U,C);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+C)}function H(U,C){const G=n.get(U);if(U.version>0&&G.__version!==U.version){K(G,U,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+C)}const Z={[cs]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[Eo]:r.MIRRORED_REPEAT},Q={[Jt]:r.NEAREST,[jh]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[mo]:r.LINEAR_MIPMAP_NEAREST,[zn]:r.LINEAR_MIPMAP_LINEAR},J={[Xm]:r.NEVER,[Qm]:r.ALWAYS,[Ym]:r.LESS,[tp]:r.LEQUAL,[Km]:r.EQUAL,[Zm]:r.GEQUAL,[Jm]:r.GREATER,[$m]:r.NOTEQUAL};function fe(U,C){if(C.type===Hn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Kt||C.magFilter===mo||C.magFilter===Ws||C.magFilter===zn||C.minFilter===Kt||C.minFilter===mo||C.minFilter===Ws||C.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Z[C.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Z[C.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Z[C.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,Q[C.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,Q[C.minFilter]),C.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,J[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Jt||C.minFilter!==Ws&&C.minFilter!==zn||C.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ie(U,C){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",T));const Y=C.source;let ee=d.get(Y);ee===void 0&&(ee={},d.set(Y,ee));const j=I(C);if(j!==U.__cacheKey){ee[j]===void 0&&(ee[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[j].usedTimes++;const Le=ee[U.__cacheKey];Le!==void 0&&(ee[U.__cacheKey].usedTimes--,Le.usedTimes===0&&M(C)),U.__cacheKey=j,U.__webglTexture=ee[j].texture}return G}function Je(U,C,G){return Math.floor(Math.floor(U/G)/C)}function Ve(U,C,G,Y){const j=U.updateRanges;if(j.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,G,Y,C.data);else{j.sort((re,pe)=>re.start-pe.start);let Le=0;for(let re=1;re<j.length;re++){const pe=j[Le],ze=j[re],Pe=pe.start+pe.count,de=Je(ze.start,C.width,4),Xe=Je(pe.start,C.width,4);ze.start<=Pe+1&&de===Xe&&Je(ze.start+ze.count-1,C.width,4)===de?pe.count=Math.max(pe.count,ze.start+ze.count-pe.start):(++Le,j[Le]=ze)}j.length=Le+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),Ce=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let re=0,pe=j.length;re<pe;re++){const ze=j[re],Pe=Math.floor(ze.start/4),de=Math.ceil(ze.count/4),Xe=Pe%C.width,B=Math.floor(Pe/C.width),se=de,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xe),r.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Xe,B,se,ce,G,Y,C.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ce)}}function X(U,C,G){let Y=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Y=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Y=r.TEXTURE_3D);const ee=Ie(U,C),j=C.source;t.bindTexture(Y,U.__webglTexture,r.TEXTURE0+G);const Le=n.get(j);if(j.version!==Le.__version||ee===!0){t.activeTexture(r.TEXTURE0+G);const oe=Qe.getPrimaries(Qe.workingColorSpace),we=C.colorSpace===ki?null:Qe.getPrimaries(C.colorSpace),Ce=C.colorSpace===ki||oe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let re=_(C.image,!1,i.maxTextureSize);re=Nt(C,re);const pe=s.convert(C.format,C.colorSpace),ze=s.convert(C.type);let Pe=x(C.internalFormat,pe,ze,C.colorSpace,C.isVideoTexture);fe(Y,C);let de;const Xe=C.mipmaps,B=C.isVideoTexture!==!0,se=Le.__version===void 0||ee===!0,ce=j.dataReady,ve=y(C,re);if(C.isDepthTexture)Pe=b(C.format===ca,C.type),se&&(B?t.texStorage2D(r.TEXTURE_2D,1,Pe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,ze,null));else if(C.isDataTexture)if(Xe.length>0){B&&se&&t.texStorage2D(r.TEXTURE_2D,ve,Pe,Xe[0].width,Xe[0].height);for(let ne=0,$=Xe.length;ne<$;ne++)de=Xe[ne],B?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,pe,ze,de.data):t.texImage2D(r.TEXTURE_2D,ne,Pe,de.width,de.height,0,pe,ze,de.data);C.generateMipmaps=!1}else B?(se&&t.texStorage2D(r.TEXTURE_2D,ve,Pe,re.width,re.height),ce&&Ve(C,re,pe,ze)):t.texImage2D(r.TEXTURE_2D,0,Pe,re.width,re.height,0,pe,ze,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){B&&se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Pe,Xe[0].width,Xe[0].height,re.depth);for(let ne=0,$=Xe.length;ne<$;ne++)if(de=Xe[ne],C.format!==Sn)if(pe!==null)if(B){if(ce)if(C.layerUpdates.size>0){const Ee=ud(de.width,de.height,C.format,C.type);for(const qe of C.layerUpdates){const dt=de.data.subarray(qe*Ee/de.data.BYTES_PER_ELEMENT,(qe+1)*Ee/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,qe,de.width,de.height,1,pe,dt)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,re.depth,pe,de.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ne,Pe,de.width,de.height,re.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ne,0,0,0,de.width,de.height,re.depth,pe,ze,de.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ne,Pe,de.width,de.height,re.depth,0,pe,ze,de.data)}else{B&&se&&t.texStorage2D(r.TEXTURE_2D,ve,Pe,Xe[0].width,Xe[0].height);for(let ne=0,$=Xe.length;ne<$;ne++)de=Xe[ne],C.format!==Sn?pe!==null?B?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(r.TEXTURE_2D,ne,Pe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,de.width,de.height,pe,ze,de.data):t.texImage2D(r.TEXTURE_2D,ne,Pe,de.width,de.height,0,pe,ze,de.data)}else if(C.isDataArrayTexture)if(B){if(se&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Pe,re.width,re.height,re.depth),ce)if(C.layerUpdates.size>0){const ne=ud(re.width,re.height,C.format,C.type);for(const $ of C.layerUpdates){const Ee=re.data.subarray($*ne/re.data.BYTES_PER_ELEMENT,($+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,re.width,re.height,1,pe,ze,Ee)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,pe,ze,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Pe,re.width,re.height,re.depth,0,pe,ze,re.data);else if(C.isData3DTexture)B?(se&&t.texStorage3D(r.TEXTURE_3D,ve,Pe,re.width,re.height,re.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,pe,ze,re.data)):t.texImage3D(r.TEXTURE_3D,0,Pe,re.width,re.height,re.depth,0,pe,ze,re.data);else if(C.isFramebufferTexture){if(se)if(B)t.texStorage2D(r.TEXTURE_2D,ve,Pe,re.width,re.height);else{let ne=re.width,$=re.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,Pe,ne,$,0,pe,ze,null),ne>>=1,$>>=1}}else if(Xe.length>0){if(B&&se){const ne=Tt(Xe[0]);t.texStorage2D(r.TEXTURE_2D,ve,Pe,ne.width,ne.height)}for(let ne=0,$=Xe.length;ne<$;ne++)de=Xe[ne],B?ce&&t.texSubImage2D(r.TEXTURE_2D,ne,0,0,pe,ze,de):t.texImage2D(r.TEXTURE_2D,ne,Pe,pe,ze,de);C.generateMipmaps=!1}else if(B){if(se){const ne=Tt(re);t.texStorage2D(r.TEXTURE_2D,ve,Pe,ne.width,ne.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ze,re)}else t.texImage2D(r.TEXTURE_2D,0,Pe,pe,ze,re);m(C)&&p(Y),Le.__version=j.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function K(U,C,G){if(C.image.length!==6)return;const Y=Ie(U,C),ee=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+G);const j=n.get(ee);if(ee.version!==j.__version||Y===!0){t.activeTexture(r.TEXTURE0+G);const Le=Qe.getPrimaries(Qe.workingColorSpace),oe=C.colorSpace===ki?null:Qe.getPrimaries(C.colorSpace),we=C.colorSpace===ki||Le===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Ce=C.isCompressedTexture||C.image[0].isCompressedTexture,re=C.image[0]&&C.image[0].isDataTexture,pe=[];for(let $=0;$<6;$++)!Ce&&!re?pe[$]=_(C.image[$],!0,i.maxCubemapSize):pe[$]=re?C.image[$].image:C.image[$],pe[$]=Nt(C,pe[$]);const ze=pe[0],Pe=s.convert(C.format,C.colorSpace),de=s.convert(C.type),Xe=x(C.internalFormat,Pe,de,C.colorSpace),B=C.isVideoTexture!==!0,se=j.__version===void 0||Y===!0,ce=ee.dataReady;let ve=y(C,ze);fe(r.TEXTURE_CUBE_MAP,C);let ne;if(Ce){B&&se&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Xe,ze.width,ze.height);for(let $=0;$<6;$++){ne=pe[$].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const qe=ne[Ee];C.format!==Sn?Pe!==null?B?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,qe.width,qe.height,Pe,qe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Xe,qe.width,qe.height,0,qe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,0,0,qe.width,qe.height,Pe,de,qe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee,Xe,qe.width,qe.height,0,Pe,de,qe.data)}}}else{if(ne=C.mipmaps,B&&se){ne.length>0&&ve++;const $=Tt(pe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Xe,$.width,$.height)}for(let $=0;$<6;$++)if(re){B?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,pe[$].width,pe[$].height,Pe,de,pe[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,pe[$].width,pe[$].height,0,Pe,de,pe[$].data);for(let Ee=0;Ee<ne.length;Ee++){const dt=ne[Ee].image[$].image;B?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,dt.width,dt.height,Pe,de,dt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Xe,dt.width,dt.height,0,Pe,de,dt.data)}}else{B?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Pe,de,pe[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Xe,Pe,de,pe[$]);for(let Ee=0;Ee<ne.length;Ee++){const qe=ne[Ee];B?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,0,0,Pe,de,qe.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ee+1,Xe,Pe,de,qe.image[$])}}}m(C)&&p(r.TEXTURE_CUBE_MAP),j.__version=ee.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function le(U,C,G,Y,ee,j){const Le=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),we=x(G.internalFormat,Le,oe,G.colorSpace),Ce=n.get(C),re=n.get(G);if(re.__renderTarget=C,!Ce.__hasExternalTextures){const pe=Math.max(1,C.width>>j),ze=Math.max(1,C.height>>j);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,j,we,pe,ze,C.depth,0,Le,oe,null):t.texImage2D(ee,j,we,pe,ze,0,Le,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),be(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Y,ee,re.__webglTexture,0,et(C)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Y,ee,re.__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Re(U,C,G){if(r.bindRenderbuffer(r.RENDERBUFFER,U),C.depthBuffer){const Y=C.depthTexture,ee=Y&&Y.isDepthTexture?Y.type:null,j=b(C.stencilBuffer,ee),Le=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=et(C);be(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,j,C.width,C.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,j,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,j,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,U)}else{const Y=C.textures;for(let ee=0;ee<Y.length;ee++){const j=Y[ee],Le=s.convert(j.format,j.colorSpace),oe=s.convert(j.type),we=x(j.internalFormat,Le,oe,j.colorSpace),Ce=et(C);G&&be(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,we,C.width,C.height):be(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,we,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,we,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ge(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(C.depthTexture);Y.__renderTarget=C,(!Y.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const ee=Y.__webglTexture,j=et(C);if(C.depthTexture.format===oa)be(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ee,0);else if(C.depthTexture.format===ca)be(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0,j):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ge(U){const C=n.get(U),G=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const Y=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),Y){const ee=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,Y.removeEventListener("dispose",ee)};Y.addEventListener("dispose",ee),C.__depthDisposeCallback=ee}C.__boundDepthTexture=Y}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const Y=U.texture.mipmaps;Y&&Y.length>0?ge(C.__webglFramebuffer[0],U):ge(C.__webglFramebuffer,U)}else if(G){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]===void 0)C.__webglDepthbuffer[Y]=r.createRenderbuffer(),Re(C.__webglDepthbuffer[Y],U,!1);else{const ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer[Y];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}else{const Y=U.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),Re(C.__webglDepthbuffer,U,!1);else{const ee=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,j)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function te(U,C,G){const Y=n.get(U);C!==void 0&&le(Y.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Ge(U)}function N(U){const C=U.texture,G=n.get(U),Y=n.get(C);U.addEventListener("dispose",E);const ee=U.textures,j=U.isWebGLCubeRenderTarget===!0,Le=ee.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=r.createTexture()),Y.__version=C.version,a.memory.textures++),j){G.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[oe]=[];for(let we=0;we<C.mipmaps.length;we++)G.__webglFramebuffer[oe][we]=r.createFramebuffer()}else G.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)G.__webglFramebuffer[oe]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Le)for(let oe=0,we=ee.length;oe<we;oe++){const Ce=n.get(ee[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&be(U)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let oe=0;oe<ee.length;oe++){const we=ee[oe];G.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[oe]);const Ce=s.convert(we.format,we.colorSpace),re=s.convert(we.type),pe=x(we.internalFormat,Ce,re,we.colorSpace,U.isXRRenderTarget===!0),ze=et(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ze,pe,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,G.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Re(G.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture),fe(r.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)le(G.__webglFramebuffer[oe][we],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we);else le(G.__webglFramebuffer[oe],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(C)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let oe=0,we=ee.length;oe<we;oe++){const Ce=ee[oe],re=n.get(Ce);let pe=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(pe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(pe,re.__webglTexture),fe(pe,Ce),le(G.__webglFramebuffer,U,Ce,r.COLOR_ATTACHMENT0+oe,pe,0),m(Ce)&&p(pe)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,Y.__webglTexture),fe(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)le(G.__webglFramebuffer[we],U,C,r.COLOR_ATTACHMENT0,oe,we);else le(G.__webglFramebuffer,U,C,r.COLOR_ATTACHMENT0,oe,0);m(C)&&p(oe),t.unbindTexture()}U.depthBuffer&&Ge(U)}function ke(U){const C=U.textures;for(let G=0,Y=C.length;G<Y;G++){const ee=C[G];if(m(ee)){const j=v(U),Le=n.get(ee).__webglTexture;t.bindTexture(j,Le),p(j),t.unbindTexture()}}}const Me=[],me=[];function ae(U){if(U.samples>0){if(be(U)===!1){const C=U.textures,G=U.width,Y=U.height;let ee=r.COLOR_BUFFER_BIT;const j=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=n.get(U),oe=C.length>1;if(oe)for(let Ce=0;Ce<C.length;Ce++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ce=0;Ce<C.length;Ce++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const re=n.get(C[Ce]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,G,Y,0,0,G,Y,ee,r.NEAREST),c===!0&&(Me.length=0,me.length=0,Me.push(r.COLOR_ATTACHMENT0+Ce),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Me.push(j),me.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,me)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Ce=0;Ce<C.length;Ce++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Ce]);const re=n.get(C[Ce]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const C=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function et(U){return Math.min(i.maxSamples,U.samples)}function be(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function We(U){const C=a.render.frame;u.get(U)!==C&&(u.set(U,C),U.update())}function Nt(U,C){const G=U.colorSpace,Y=U.format,ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==$t&&G!==ki&&(Qe.getTransfer(G)===ct?(Y!==Sn||ee!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=H,this.rebindTextures=te,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=le,this.useMultisampledRTT=be}function oy(r,e){function t(n,i=ki){let s;const a=Qe.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===Cu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Pu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Jh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return r.BYTE;if(n===Yh)return r.SHORT;if(n===sa)return r.UNSIGNED_SHORT;if(n===Ru)return r.INT;if(n===gr)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===bs)return r.HALF_FLOAT;if(n===$h)return r.ALPHA;if(n===Zh)return r.RGB;if(n===Sn)return r.RGBA;if(n===oa)return r.DEPTH_COMPONENT;if(n===ca)return r.DEPTH_STENCIL;if(n===Lu)return r.RED;if(n===Iu)return r.RED_INTEGER;if(n===Qh)return r.RG;if(n===Du)return r.RG_INTEGER;if(n===Uu)return r.RGBA_INTEGER;if(n===go||n===bo||n===_o||n===xo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Ll)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Il||n===Dl||n===Ul)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Il||n===Dl)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ul)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Nl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===jl||n===Xl||n===Yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ol)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ql)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Yl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Jl||n===$l)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Kl)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$l)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ql||n===eu||n===tu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const cy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ly=`
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

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new xp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:cy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new _r(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fy extends _s{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new uy,p={},v=t.getContextAttributes();let x=null,b=null;const y=[],T=[],E=new Ue;let A=null;const M=new Gt;M.viewport=new tt;const S=new Gt;S.viewport=new tt;const w=[M,S],R=new yb;let D=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=y[X];return K===void 0&&(K=new dc,y[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=y[X];return K===void 0&&(K=new dc,y[X]=K),K.getGripSpace()},this.getHand=function(X){let K=y[X];return K===void 0&&(K=new dc,y[X]=K),K.getHandSpace()};function F(X){const K=T.indexOf(X.inputSource);if(K===-1)return;const le=y[K];le!==void 0&&(le.update(X.inputSource,X.frame,l||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){const K=T[X];K!==null&&(T[X]=null,y[X].disconnect(K))}D=null,I=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(x),h=null,d=null,f=null,i=null,b=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",O),i.addEventListener("inputsourceschange",V),v.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Re=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=v.stencil?ca:oa,Re=v.stencil?aa:gr);const Ge={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ji(d.textureWidth,d.textureHeight,{format:Sn,type:ai,depthTexture:new _p(d.textureWidth,d.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ji(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(X){for(let K=0;K<X.removed.length;K++){const le=X.removed[K],Re=T.indexOf(le);Re>=0&&(T[Re]=null,y[Re].disconnect(le))}for(let K=0;K<X.added.length;K++){const le=X.added[K];let Re=T.indexOf(le);if(Re===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=T.length){T.push(le),Re=Ge;break}else if(T[Ge]===null){T[Ge]=le,Re=Ge;break}if(Re===-1)break}const ge=y[Re];ge&&ge.connect(le)}}const H=new L,Z=new L;function Q(X,K,le){H.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(le.matrixWorld);const Re=H.distanceTo(Z),ge=K.projectionMatrix.elements,Ge=le.projectionMatrix.elements,te=ge[14]/(ge[10]-1),N=ge[14]/(ge[10]+1),ke=(ge[9]+1)/ge[5],Me=(ge[9]-1)/ge[5],me=(ge[8]-1)/ge[0],ae=(Ge[8]+1)/Ge[0],et=te*me,be=te*ae,We=Re/(-me+ae),Nt=We*-me;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(We),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ge[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Tt=te+We,U=N+We,C=et-Nt,G=be+(Re-Nt),Y=ke*N/U*Tt,ee=Me*N/U*Tt;X.projectionMatrix.makePerspective(C,G,Y,ee,Tt,U),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let K=X.near,le=X.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(le=m.depthFar)),R.near=S.near=M.near=K,R.far=S.far=M.far=le,(D!==R.near||I!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,I=R.far),R.layers.mask=X.layers.mask|6,M.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const Re=X.parent,ge=R.cameras;J(R,Re);for(let Ge=0;Ge<ge.length;Ge++)J(ge[Ge],Re);ge.length===2?Q(R,M,S):R.projectionMatrix.copy(M.projectionMatrix),fe(X,R,Re)};function fe(X,K,le){le===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ls*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(X){return p[X]};let Ie=null;function Je(X,K){if(u=K.getViewerPose(l||a),g=K,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Re=!1;le.length!==R.cameras.length&&(R.cameras.length=0,Re=!0);for(let N=0;N<le.length;N++){const ke=le[N];let Me=null;if(h!==null)Me=h.getViewport(ke);else{const ae=f.getViewSubImage(d,ke);Me=ae.viewport,N===0&&(e.setRenderTargetTextures(b,ae.colorTexture,ae.depthStencilTexture),e.setRenderTarget(b))}let me=w[N];me===void 0&&(me=new Gt,me.layers.enable(N),me.viewport=new tt,w[N]=me),me.matrix.fromArray(ke.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ke.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(Me.x,Me.y,Me.width,Me.height),N===0&&(R.matrix.copy(me.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Re===!0&&R.cameras.push(me)}const ge=i.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const N=f.getDepthInformation(le[0]);N&&N.isValid&&N.texture&&m.init(N,i.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let N=0;N<le.length;N++){const ke=le[N].camera;if(ke){let Me=p[ke];Me||(Me=new xp,p[ke]=Me);const me=f.getCameraImage(ke);Me.sourceTexture=me}}}}for(let le=0;le<y.length;le++){const Re=T[le],ge=y[le];Re!==null&&ge!==void 0&&ge.update(Re,K,l||a)}Ie&&Ie(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),g=null}const Ve=new Tp;Ve.setAnimationLoop(Je),this.setAnimationLoop=function(X){Ie=X},this.dispose=function(){}}}const ir=new jn,dy=new Ne;function hy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,op(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=e.get(p),x=v.envMap,b=v.envMapRotation;x&&(m.envMap.value=x,ir.copy(b),ir.x*=-1,ir.y*=-1,ir.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(ir)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function py(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,x){const b=x.program;n.uniformBlockBinding(v,b)}function l(v,x){let b=i[v.id];b===void 0&&(g(v),b=u(v),i[v.id]=b,v.addEventListener("dispose",m));const y=x.program;n.updateUBOMapping(v,y);const T=e.render.frame;s[v.id]!==T&&(d(v),s[v.id]=T)}function u(v){const x=f();v.__bindingPointIndex=x;const b=r.createBuffer(),y=v.__size,T=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=i[v.id],b=v.uniforms,y=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,E=b.length;T<E;T++){const A=Array.isArray(b[T])?b[T]:[b[T]];for(let M=0,S=A.length;M<S;M++){const w=A[M];if(h(w,T,M,y)===!0){const R=w.__offset,D=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let F=0;F<D.length;F++){const O=D[F],V=_(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,r.bufferSubData(r.UNIFORM_BUFFER,R+I,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,I),I+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(v,x,b,y){const T=v.value,E=x+"_"+b;if(y[E]===void 0)return typeof T=="number"||typeof T=="boolean"?y[E]=T:y[E]=T.clone(),!0;{const A=y[E];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return y[E]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(v){const x=v.uniforms;let b=0;const y=16;for(let E=0,A=x.length;E<A;E++){const M=Array.isArray(x[E])?x[E]:[x[E]];for(let S=0,w=M.length;S<w;S++){const R=M[S],D=Array.isArray(R.value)?R.value:[R.value];for(let I=0,F=D.length;I<F;I++){const O=D[I],V=_(O),H=b%y,Z=H%V.boundary,Q=H+Z;b+=Z,Q!==0&&y-Q<V.storage&&(b+=y-Q),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=V.storage}}}const T=b%y;return T>0&&(b+=y-T),v.__size=b,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function p(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class my{constructor(e={}){const{canvas:t=gg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const v=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let y=!1;this._outputColorSpace=Pt;let T=0,E=0,A=null,M=-1,S=null;const w=new tt,R=new tt;let D=null;const I=new Oe(0);let F=0,O=t.width,V=t.height,H=1,Z=null,Q=null;const J=new tt(0,0,O,V),fe=new tt(0,0,O,V);let Ie=!1;const Je=new Hu;let Ve=!1,X=!1;const K=new Ne,le=new L,Re=new tt,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function te(){return A===null?H:1}let N=n;function ke(P,k){return t.getContext(P,k)}try{const P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const k="webgl2";if(N=ke(k,P),N===null)throw ke(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Me,me,ae,et,be,We,Nt,Tt,U,C,G,Y,ee,j,Le,oe,we,Ce,re,pe,ze,Pe,de,Xe;function B(){Me=new Tx(N),Me.init(),Pe=new oy(N,Me),me=new _x(N,Me,e,Pe),ae=new sy(N,Me),me.reversedDepthBuffer&&d&&ae.buffers.depth.setReversed(!0),et=new Rx(N),be=new jv,We=new ay(N,Me,ae,be,me,Pe,et),Nt=new vx(b),Tt=new Ex(b),U=new Ub(N),de=new gx(N,U),C=new wx(N,U,et,de),G=new Px(N,C,U,et),re=new Cx(N,me,We),oe=new xx(be),Y=new qv(b,Nt,Tt,Me,me,de,oe),ee=new hy(b,be),j=new Yv,Le=new ey(Me),Ce=new mx(b,Nt,Tt,ae,G,h,c),we=new iy(b,G,me),Xe=new py(N,et,me,ae),pe=new bx(N,Me,et),ze=new Ax(N,Me,et),et.programs=Y.programs,b.capabilities=me,b.extensions=Me,b.properties=be,b.renderLists=j,b.shadowMap=we,b.state=ae,b.info=et}B();const se=new fy(b,N);this.xr=se,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=Me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(P){P!==void 0&&(H=P,this.setSize(O,V,!1))},this.getSize=function(P){return P.set(O,V)},this.setSize=function(P,k,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,V=k,t.width=Math.floor(P*H),t.height=Math.floor(k*H),W===!0&&(t.style.width=P+"px",t.style.height=k+"px"),this.setViewport(0,0,P,k)},this.getDrawingBufferSize=function(P){return P.set(O*H,V*H).floor()},this.setDrawingBufferSize=function(P,k,W){O=P,V=k,H=W,t.width=Math.floor(P*W),t.height=Math.floor(k*W),this.setViewport(0,0,P,k)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(J)},this.setViewport=function(P,k,W,q){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,k,W,q),ae.viewport(w.copy(J).multiplyScalar(H).round())},this.getScissor=function(P){return P.copy(fe)},this.setScissor=function(P,k,W,q){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,k,W,q),ae.scissor(R.copy(fe).multiplyScalar(H).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(P){ae.setScissorTest(Ie=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){Q=P},this.getClearColor=function(P){return P.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(P=!0,k=!0,W=!0){let q=0;if(P){let z=!1;if(A!==null){const ie=A.texture.format;z=ie===Uu||ie===Du||ie===Iu}if(z){const ie=A.texture.type,he=ie===ai||ie===gr||ie===sa||ie===aa||ie===Cu||ie===Pu,Se=Ce.getClearColor(),_e=Ce.getClearAlpha(),Be=Se.r,He=Se.g,De=Se.b;he?(g[0]=Be,g[1]=He,g[2]=De,g[3]=_e,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Be,_[1]=He,_[2]=De,_[3]=_e,N.clearBufferiv(N.COLOR,0,_))}else q|=N.COLOR_BUFFER_BIT}k&&(q|=N.DEPTH_BUFFER_BIT),W&&(q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Ce.dispose(),j.dispose(),Le.dispose(),be.dispose(),Nt.dispose(),Tt.dispose(),G.dispose(),de.dispose(),Xe.dispose(),Y.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jn),se.removeEventListener("sessionend",uf),Ji.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const P=et.autoReset,k=we.enabled,W=we.autoUpdate,q=we.needsUpdate,z=we.type;B(),et.autoReset=P,we.enabled=k,we.autoUpdate=W,we.needsUpdate=q,we.type=z}function ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $(P){const k=P.target;k.removeEventListener("dispose",$),Ee(k)}function Ee(P){qe(P),be.remove(P)}function qe(P){const k=be.get(P).programs;k!==void 0&&(k.forEach(function(W){Y.releaseProgram(W)}),P.isShaderMaterial&&Y.releaseShaderCache(P))}this.renderBufferDirect=function(P,k,W,q,z,ie){k===null&&(k=ge);const he=z.isMesh&&z.matrixWorld.determinant()<0,Se=am(P,k,W,q,z);ae.setMaterial(q,he);let _e=W.index,Be=1;if(q.wireframe===!0){if(_e=C.getWireframeAttribute(W),_e===void 0)return;Be=2}const He=W.drawRange,De=W.attributes.position;let Ze=He.start*Be,ot=(He.start+He.count)*Be;ie!==null&&(Ze=Math.max(Ze,ie.start*Be),ot=Math.min(ot,(ie.start+ie.count)*Be)),_e!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,_e.count)):De!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,De.count));const St=ot-Ze;if(St<0||St===1/0)return;de.setup(z,q,Se,W,_e);let mt,ut=pe;if(_e!==null&&(mt=U.get(_e),ut=ze,ut.setIndex(mt)),z.isMesh)q.wireframe===!0?(ae.setLineWidth(q.wireframeLinewidth*te()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),ae.setLineWidth(Fe*te()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)da("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Fe=z._multiDrawStarts,vt=z._multiDrawCounts,nt=z._multiDrawCount,un=_e?U.get(_e).bytesPerElement:1,yr=be.get(q).currentProgram.getUniforms();for(let fn=0;fn<nt;fn++)yr.setValue(N,"_gl_DrawID",fn),ut.render(Fe[fn]/un,vt[fn])}else if(z.isInstancedMesh)ut.renderInstances(Ze,St,z.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,vt=Math.min(W.instanceCount,Fe);ut.renderInstances(Ze,St,vt)}else ut.render(Ze,St)};function dt(P,k,W){P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Ma(P,k,W),P.side=Ln,P.needsUpdate=!0,Ma(P,k,W),P.side=sn):Ma(P,k,W)}this.compile=function(P,k,W=null){W===null&&(W=P),p=Le.get(W),p.init(k),x.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),P!==W&&P.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return P.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ie=z.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const Se=ie[he];dt(Se,W,z),q.add(Se)}else dt(ie,W,z),q.add(ie)}),p=x.pop(),q},this.compileAsync=function(P,k,W=null){const q=this.compile(P,k,W);return new Promise(z=>{function ie(){if(q.forEach(function(he){be.get(he).currentProgram.isReady()&&q.delete(he)}),q.size===0){z(P);return}setTimeout(ie,10)}Me.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function li(P){rt&&rt(P)}function Jn(){Ji.stop()}function uf(){Ji.start()}const Ji=new Tp;Ji.setAnimationLoop(li),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(P){rt=P,se.setAnimationLoop(P),P===null?Ji.stop():Ji.start()},se.addEventListener("sessionstart",Jn),se.addEventListener("sessionend",uf),this.render=function(P,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,k,A),p=Le.get(P,x.length),p.init(k),x.push(p),K.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Je.setFromProjectionMatrix(K,ni,k.reversedDepth),X=this.localClippingEnabled,Ve=oe.init(this.clippingPlanes,X),m=j.get(P,v.length),m.init(),v.push(m),se.enabled===!0&&se.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Go(ie,k,-1/0,b.sortObjects)}Go(P,k,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Z,Q),Ge=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ge&&Ce.addToRenderList(m,P),this.info.render.frame++,Ve===!0&&oe.beginShadows();const W=p.state.shadowsArray;we.render(W,P,k),Ve===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ie=k.cameras;if(z.length>0)for(let he=0,Se=ie.length;he<Se;he++){const _e=ie[he];df(q,z,P,_e)}Ge&&Ce.render(P);for(let he=0,Se=ie.length;he<Se;he++){const _e=ie[he];ff(m,P,_e,_e.viewport)}}else z.length>0&&df(q,z,P,k),Ge&&Ce.render(P),ff(m,P,k);A!==null&&E===0&&(We.updateMultisampleRenderTarget(A),We.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(b,P,k),de.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],Ve===!0&&oe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Go(P,k,W,q){if(P.visible===!1)return;if(P.layers.test(k.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(k);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Je.intersectsSprite(P)){q&&Re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(K);const he=G.update(P),Se=P.material;Se.visible&&m.push(P,he,Se,W,Re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Je.intersectsObject(P))){const he=G.update(P),Se=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Re.copy(P.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Re.copy(he.boundingSphere.center)),Re.applyMatrix4(P.matrixWorld).applyMatrix4(K)),Array.isArray(Se)){const _e=he.groups;for(let Be=0,He=_e.length;Be<He;Be++){const De=_e[Be],Ze=Se[De.materialIndex];Ze&&Ze.visible&&m.push(P,he,Ze,W,Re.z,De)}}else Se.visible&&m.push(P,he,Se,W,Re.z,null)}}const ie=P.children;for(let he=0,Se=ie.length;he<Se;he++)Go(ie[he],k,W,q)}function ff(P,k,W,q){const z=P.opaque,ie=P.transmissive,he=P.transparent;p.setupLightsView(W),Ve===!0&&oe.setGlobalState(b.clippingPlanes,W),q&&ae.viewport(w.copy(q)),z.length>0&&ya(z,k,W),ie.length>0&&ya(ie,k,W),he.length>0&&ya(he,k,W),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function df(P,k,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ji(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?bs:ai,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=p.state.transmissionRenderTarget[q.id],he=q.viewport||w;ie.setSize(he.z*b.transmissionResolutionScale,he.w*b.transmissionResolutionScale);const Se=b.getRenderTarget(),_e=b.getActiveCubeFace(),Be=b.getActiveMipmapLevel();b.setRenderTarget(ie),b.getClearColor(I),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear(),Ge&&Ce.render(W);const He=b.toneMapping;b.toneMapping=Wi;const De=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Ve===!0&&oe.setGlobalState(b.clippingPlanes,q),ya(P,W,q),We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,St=k.length;ot<St;ot++){const mt=k[ot],ut=mt.object,Fe=mt.geometry,vt=mt.material,nt=mt.group;if(vt.side===sn&&ut.layers.test(q.layers)){const un=vt.side;vt.side=qt,vt.needsUpdate=!0,hf(ut,W,q,Fe,vt,nt),vt.side=un,vt.needsUpdate=!0,Ze=!0}}Ze===!0&&(We.updateMultisampleRenderTarget(ie),We.updateRenderTargetMipmap(ie))}b.setRenderTarget(Se,_e,Be),b.setClearColor(I,F),De!==void 0&&(q.viewport=De),b.toneMapping=He}function ya(P,k,W){const q=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ie=P.length;z<ie;z++){const he=P[z],Se=he.object,_e=he.geometry,Be=he.group;let He=he.material;He.allowOverride===!0&&q!==null&&(He=q),Se.layers.test(W.layers)&&hf(Se,k,W,_e,He,Be)}}function hf(P,k,W,q,z,ie){P.onBeforeRender(b,k,W,q,z,ie),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),z.onBeforeRender(b,k,W,q,P,ie),z.transparent===!0&&z.side===sn&&z.forceSinglePass===!1?(z.side=qt,z.needsUpdate=!0,b.renderBufferDirect(W,k,q,z,P,ie),z.side=Ln,z.needsUpdate=!0,b.renderBufferDirect(W,k,q,z,P,ie),z.side=sn):b.renderBufferDirect(W,k,q,z,P,ie),P.onAfterRender(b,k,W,q,z,ie)}function Ma(P,k,W){k.isScene!==!0&&(k=ge);const q=be.get(P),z=p.state.lights,ie=p.state.shadowsArray,he=z.state.version,Se=Y.getParameters(P,z.state,ie,k,W),_e=Y.getProgramCacheKey(Se);let Be=q.programs;q.environment=P.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(P.isMeshStandardMaterial?Tt:Nt).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?k.environmentRotation:P.envMapRotation,Be===void 0&&(P.addEventListener("dispose",$),Be=new Map,q.programs=Be);let He=Be.get(_e);if(He!==void 0){if(q.currentProgram===He&&q.lightsStateVersion===he)return mf(P,Se),He}else Se.uniforms=Y.getUniforms(P),P.onBeforeCompile(Se,b),He=Y.acquireProgram(Se,_e),Be.set(_e,He),q.uniforms=Se.uniforms;const De=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=oe.uniform),mf(P,Se),q.needsLights=cm(P),q.lightsStateVersion=he,q.needsLights&&(De.ambientLightColor.value=z.state.ambient,De.lightProbe.value=z.state.probe,De.directionalLights.value=z.state.directional,De.directionalLightShadows.value=z.state.directionalShadow,De.spotLights.value=z.state.spot,De.spotLightShadows.value=z.state.spotShadow,De.rectAreaLights.value=z.state.rectArea,De.ltc_1.value=z.state.rectAreaLTC1,De.ltc_2.value=z.state.rectAreaLTC2,De.pointLights.value=z.state.point,De.pointLightShadows.value=z.state.pointShadow,De.hemisphereLights.value=z.state.hemi,De.directionalShadowMap.value=z.state.directionalShadowMap,De.directionalShadowMatrix.value=z.state.directionalShadowMatrix,De.spotShadowMap.value=z.state.spotShadowMap,De.spotLightMatrix.value=z.state.spotLightMatrix,De.spotLightMap.value=z.state.spotLightMap,De.pointShadowMap.value=z.state.pointShadowMap,De.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=He,q.uniformsList=null,He}function pf(P){if(P.uniformsList===null){const k=P.currentProgram.getUniforms();P.uniformsList=vo.seqWithValue(k.seq,P.uniforms)}return P.uniformsList}function mf(P,k){const W=be.get(P);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function am(P,k,W,q,z){k.isScene!==!0&&(k=ge),We.resetTextureUnits();const ie=k.fog,he=q.isMeshStandardMaterial?k.environment:null,Se=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$t,_e=(q.isMeshStandardMaterial?Tt:Nt).get(q.envMap||he),Be=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let St=Wi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(St=b.toneMapping);const mt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=mt!==void 0?mt.length:0,Fe=be.get(q),vt=p.state.lights;if(Ve===!0&&(X===!0||P!==S)){const jt=P===S&&q.id===M;oe.setState(q,P,jt)}let nt=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==vt.state.version||Fe.outputColorSpace!==Se||z.isBatchedMesh&&Fe.batching===!1||!z.isBatchedMesh&&Fe.batching===!0||z.isBatchedMesh&&Fe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Fe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Fe.instancing===!1||!z.isInstancedMesh&&Fe.instancing===!0||z.isSkinnedMesh&&Fe.skinning===!1||!z.isSkinnedMesh&&Fe.skinning===!0||z.isInstancedMesh&&Fe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Fe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Fe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Fe.instancingMorph===!1&&z.morphTexture!==null||Fe.envMap!==_e||q.fog===!0&&Fe.fog!==ie||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==oe.numPlanes||Fe.numIntersection!==oe.numIntersection)||Fe.vertexAlphas!==Be||Fe.vertexTangents!==He||Fe.morphTargets!==De||Fe.morphNormals!==Ze||Fe.morphColors!==ot||Fe.toneMapping!==St||Fe.morphTargetsCount!==ut)&&(nt=!0):(nt=!0,Fe.__version=q.version);let un=Fe.currentProgram;nt===!0&&(un=Ma(q,k,z));let yr=!1,fn=!1,Es=!1;const yt=un.getUniforms(),_n=Fe.uniforms;if(ae.useProgram(un.program)&&(yr=!0,fn=!0,Es=!0),q.id!==M&&(M=q.id,fn=!0),yr||S!==P){ae.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(N,"projectionMatrix",P.projectionMatrix),yt.setValue(N,"viewMatrix",P.matrixWorldInverse);const en=yt.map.cameraPosition;en!==void 0&&en.setValue(N,le.setFromMatrixPosition(P.matrixWorld)),me.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&yt.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,fn=!0,Es=!0)}if(z.isSkinnedMesh){yt.setOptional(N,z,"bindMatrix"),yt.setOptional(N,z,"bindMatrixInverse");const jt=z.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),yt.setValue(N,"boneTexture",jt.boneTexture,We))}z.isBatchedMesh&&(yt.setOptional(N,z,"batchingTexture"),yt.setValue(N,"batchingTexture",z._matricesTexture,We),yt.setOptional(N,z,"batchingIdTexture"),yt.setValue(N,"batchingIdTexture",z._indirectTexture,We),yt.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&yt.setValue(N,"batchingColorTexture",z._colorsTexture,We));const xn=W.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&re.update(z,W,un),(fn||Fe.receiveShadow!==z.receiveShadow)&&(Fe.receiveShadow=z.receiveShadow,yt.setValue(N,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(_n.envMap.value=_e,_n.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(_n.envMapIntensity.value=k.environmentIntensity),fn&&(yt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&om(_n,Es),ie&&q.fog===!0&&ee.refreshFogUniforms(_n,ie),ee.refreshMaterialUniforms(_n,q,H,V,p.state.transmissionRenderTarget[P.id]),vo.upload(N,pf(Fe),_n,We)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(vo.upload(N,pf(Fe),_n,We),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&yt.setValue(N,"center",z.center),yt.setValue(N,"modelViewMatrix",z.modelViewMatrix),yt.setValue(N,"normalMatrix",z.normalMatrix),yt.setValue(N,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const jt=q.uniformsGroups;for(let en=0,Wo=jt.length;en<Wo;en++){const $i=jt[en];Xe.update($i,un),Xe.bind($i,un)}}return un}function om(P,k){P.ambientLightColor.needsUpdate=k,P.lightProbe.needsUpdate=k,P.directionalLights.needsUpdate=k,P.directionalLightShadows.needsUpdate=k,P.pointLights.needsUpdate=k,P.pointLightShadows.needsUpdate=k,P.spotLights.needsUpdate=k,P.spotLightShadows.needsUpdate=k,P.rectAreaLights.needsUpdate=k,P.hemisphereLights.needsUpdate=k}function cm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,k,W){const q=be.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),be.get(P.texture).__webglTexture=k,be.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,k){const W=be.get(P);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const lm=N.createFramebuffer();this.setRenderTarget=function(P,k=0,W=0){A=P,T=k,E=W;let q=!0,z=null,ie=!1,he=!1;if(P){const _e=be.get(P);if(_e.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(N.FRAMEBUFFER,null),q=!1;else if(_e.__webglFramebuffer===void 0)We.setupRenderTarget(P);else if(_e.__hasExternalTextures)We.rebindTextures(P,be.get(P.texture).__webglTexture,be.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(P)}}const Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(he=!0);const He=be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(He[k])?z=He[k][W]:z=He[k],ie=!0):P.samples>0&&We.useMultisampledRTT(P)===!1?z=be.get(P).__webglMultisampledFramebuffer:Array.isArray(He)?z=He[W]:z=He,w.copy(P.viewport),R.copy(P.scissor),D=P.scissorTest}else w.copy(J).multiplyScalar(H).floor(),R.copy(fe).multiplyScalar(H).floor(),D=Ie;if(W!==0&&(z=lm),ae.bindFramebuffer(N.FRAMEBUFFER,z)&&q&&ae.drawBuffers(P,z),ae.viewport(w),ae.scissor(R),ae.setScissorTest(D),ie){const _e=be.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,_e.__webglTexture,W)}else if(he){const _e=k;for(let Be=0;Be<P.textures.length;Be++){const He=be.get(P.textures[Be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Be,He.__webglTexture,W,_e)}}else if(P!==null&&W!==0){const _e=be.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,_e.__webglTexture,W)}M=-1},this.readRenderTargetPixels=function(P,k,W,q,z,ie,he,Se=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e){ae.bindFramebuffer(N.FRAMEBUFFER,_e);try{const Be=P.textures[Se],He=Be.format,De=Be.type;if(!me.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!me.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=P.width-q&&W>=0&&W<=P.height-z&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(k,W,q,z,Pe.convert(He),Pe.convert(De),ie))}finally{const Be=A!==null?be.get(A).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,k,W,q,z,ie,he,Se=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&he!==void 0&&(_e=_e[he]),_e)if(k>=0&&k<=P.width-q&&W>=0&&W<=P.height-z){ae.bindFramebuffer(N.FRAMEBUFFER,_e);const Be=P.textures[Se],He=Be.format,De=Be.type;if(!me.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!me.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Se),N.readPixels(k,W,q,z,Pe.convert(He),Pe.convert(De),0);const ot=A!==null?be.get(A).__webglFramebuffer:null;ae.bindFramebuffer(N.FRAMEBUFFER,ot);const St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bg(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ze),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(Ze),N.deleteSync(St),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,k=null,W=0){const q=Math.pow(2,-W),z=Math.floor(P.image.width*q),ie=Math.floor(P.image.height*q),he=k!==null?k.x:0,Se=k!==null?k.y:0;We.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,he,Se,z,ie),ae.unbindTexture()};const um=N.createFramebuffer(),fm=N.createFramebuffer();this.copyTextureToTexture=function(P,k,W=null,q=null,z=0,ie=null){ie===null&&(z!==0?(da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=z,z=0):ie=0);let he,Se,_e,Be,He,De,Ze,ot,St;const mt=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(W!==null)he=W.max.x-W.min.x,Se=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,Be=W.min.x,He=W.min.y,De=W.isBox3?W.min.z:0;else{const xn=Math.pow(2,-z);he=Math.floor(mt.width*xn),Se=Math.floor(mt.height*xn),P.isDataArrayTexture?_e=mt.depth:P.isData3DTexture?_e=Math.floor(mt.depth*xn):_e=1,Be=0,He=0,De=0}q!==null?(Ze=q.x,ot=q.y,St=q.z):(Ze=0,ot=0,St=0);const ut=Pe.convert(k.format),Fe=Pe.convert(k.type);let vt;k.isData3DTexture?(We.setTexture3D(k,0),vt=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(We.setTexture2DArray(k,0),vt=N.TEXTURE_2D_ARRAY):(We.setTexture2D(k,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const nt=N.getParameter(N.UNPACK_ROW_LENGTH),un=N.getParameter(N.UNPACK_IMAGE_HEIGHT),yr=N.getParameter(N.UNPACK_SKIP_PIXELS),fn=N.getParameter(N.UNPACK_SKIP_ROWS),Es=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,He),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const yt=P.isDataArrayTexture||P.isData3DTexture,_n=k.isDataArrayTexture||k.isData3DTexture;if(P.isDepthTexture){const xn=be.get(P),jt=be.get(k),en=be.get(xn.__renderTarget),Wo=be.get(jt.__renderTarget);ae.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wo.__webglFramebuffer);for(let $i=0;$i<_e;$i++)yt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(P).__webglTexture,z,De+$i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(k).__webglTexture,ie,St+$i)),N.blitFramebuffer(Be,He,he,Se,Ze,ot,he,Se,N.DEPTH_BUFFER_BIT,N.NEAREST);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||P.isRenderTargetTexture||be.has(P)){const xn=be.get(P),jt=be.get(k);ae.bindFramebuffer(N.READ_FRAMEBUFFER,um),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,fm);for(let en=0;en<_e;en++)yt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,z,De+en):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,z),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,jt.__webglTexture,ie,St+en):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,jt.__webglTexture,ie),z!==0?N.blitFramebuffer(Be,He,he,Se,Ze,ot,he,Se,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(vt,ie,Ze,ot,St+en,Be,He,he,Se):N.copyTexSubImage2D(vt,ie,Ze,ot,Be,He,he,Se);ae.bindFramebuffer(N.READ_FRAMEBUFFER,null),ae.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(vt,ie,Ze,ot,St,he,Se,_e,ut,Fe,mt.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,ie,Ze,ot,St,he,Se,_e,ut,mt.data):N.texSubImage3D(vt,ie,Ze,ot,St,he,Se,_e,ut,Fe,mt):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ie,Ze,ot,he,Se,ut,Fe,mt.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ie,Ze,ot,mt.width,mt.height,ut,mt.data):N.texSubImage2D(N.TEXTURE_2D,ie,Ze,ot,he,Se,ut,Fe,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,nt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,un),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yr),N.pixelStorei(N.UNPACK_SKIP_ROWS,fn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Es),ie===0&&k.generateMipmaps&&N.generateMipmap(vt),ae.unbindTexture()},this.initRenderTarget=function(P){be.get(P).__webglFramebuffer===void 0&&We.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?We.setTextureCube(P,0):P.isData3DTexture?We.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?We.setTexture2DArray(P,0):We.setTexture2D(P,0),ae.unbindTexture()},this.resetState=function(){T=0,E=0,A=null,ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function gy(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new ln;let l=0;for(let u=0;u<r.length;++u){const f=r[u];let d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in f.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(f.attributes[h]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in f.morphAttributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(f.morphAttributes[h])}if(e){let h;if(t)h=f.index.count;else if(f.attributes.position!==void 0)h=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,u),l+=h}}if(t){let u=0;const f=[];for(let d=0;d<r.length;++d){const h=r[d].index;for(let g=0;g<h.count;++g)f.push(h.getX(g)+u);u+=r[d].attributes.position.count}c.setIndex(f)}for(const u in s){const f=Ud(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(const u in a){const f=a[u][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<f;++d){const h=[];for(let _=0;_<a[u].length;++_)h.push(a[u][_][d]);const g=Ud(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function Ud(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const u=r[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*t}const a=new e(s),o=new Bt(a,t,n);let c=0;for(let l=0;l<r.length;++l){const u=r[l];if(u.isInterleavedBufferAttribute){const f=c/t;for(let d=0,h=u.count;d<h;d++)for(let g=0;g<t;g++){const _=u.getComponent(d,g);o.setComponent(d+f,g,_)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function Nd(r,e){if(e===Gm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===nu||e===ep){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===nu)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class $u extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Qs.extractUrlBase(e);a=Qs.resolveURL(l,this.path)}else a=Qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Mp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pp){try{a[$e.KHR_BINARY_GLTF]=new Fy(e)}catch(f){i&&i(f);return}s=JSON.parse(a[$e.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ky(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case $e.KHR_MATERIALS_UNLIT:a[f]=new xy;break;case $e.KHR_DRACO_MESH_COMPRESSION:a[f]=new Oy(s,this.dracoLoader);break;case $e.KHR_TEXTURE_TRANSFORM:a[f]=new By;break;case $e.KHR_MESH_QUANTIZATION:a[f]=new ky;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function by(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const $e={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _y{constructor(e){this.parser=e,this.name=$e.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],$t);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new xb(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ep(u),l.distance=f;break;case"spot":l=new Sp(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Zn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class xy{constructor(){this.name=$e.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const i=[];e.color=new Oe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Pt))}return Promise.all(i)}}class vy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class yy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Ey{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class wy{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],$t),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ry{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(s)}}class Cy{constructor(e){this.parser=e,this.name=$e.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=$e.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Ly{constructor(e){this.parser=e,this.name=$e.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Iy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Dy{constructor(e){this.parser=e,this.name=$e.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Uy{constructor(e){this.name=$e.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,f=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,d,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(h),u,f,d,i.mode,i.filter),h})})}else return null}}class Ny{constructor(e){this.name=$e.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],d=l[0].count,h=[];for(const g of f){const _=new Ne,m=new L,p=new Un,v=new L(1,1,1),x=new pp(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&v.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,p,v));for(const b in c)if(b==="_COLOR_0"){const y=c[b];x.instanceColor=new ru(y.array,y.itemSize,y.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),h.push(x)}return u.isGroup?(u.clear(),u.add(...h),u):h[0]}))}}const Pp="glTF",Ds=12,Fd={JSON:1313821514,BIN:5130562};class Fy{constructor(e){this.name=$e.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,s=new DataView(e,Ds);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Fd.JSON){const l=new Uint8Array(e,Ds+a,o);this.content=n.decode(l)}else if(c===Fd.BIN){const l=Ds+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Oy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=$e.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const f=lu[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=lu[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],h=ns[d.componentType];l[f]=h.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,d){i.decodeDracoFile(u,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}f(h)},o,l,$t,d)})})}}class By{constructor(){this.name=$e.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ky{constructor(){this.name=$e.KHR_MESH_QUANTIZATION}}class Lp extends _a{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,f=(n-t)/u,d=f*f,h=d*f,g=e*l,_=g-l,m=-2*h+3*d,p=h-d,v=1-m,x=p-d+f;for(let b=0;b!==o;b++){const y=a[_+b+o],T=a[_+b+c]*u,E=a[g+b+o],A=a[g+b]*u;s[b]=v*y+x*T+m*E+p*A}return s}}const zy=new Un;class Hy extends Lp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zy.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ns={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Od={9728:Jt,9729:Kt,9984:jh,9985:mo,9986:Ws,9987:zn},Bd={33071:Hi,33648:Eo,10497:cs},Ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},lu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vy={CUBICSPLINE:void 0,LINEAR:ua,STEP:la},Rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ha({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),r.DefaultMaterial}function rr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wy(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(d)}if(i){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],d=l[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function qy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jy(r){let e;const t=r.extensions&&r.extensions[$e.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cc(t.attributes):e=r.indices+":"+Cc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Cc(r.targets[n]);return e}function Cc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function uu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Yy=new Ne;class Ky{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new by,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new pb(this.options.manager):this.textureLoader=new vb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return rr(s,o,i),Zn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())s(u,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[$e.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Qs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Ac[i.type],o=ns[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Bt(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Ac[i.type],l=ns[i.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,d=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let _,m;if(h&&h!==f){const p=Math.floor(d/h),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let x=t.cache.get(v);x||(_=new l(o,p*h,i.count*h/u),x=new Hg(_,h/u),t.cache.add(v,x)),m=new ku(x,c,d%h/u,g)}else o===null?_=new l(i.count*c):_=new l(o,d,i.count*c),m=new Bt(_,c,g);if(i.sparse!==void 0){const p=Ac.SCALAR,v=ns[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,y=new v(a[1],x,i.sparse.count*p),T=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let E=0,A=y.length;E<A;E++){const M=y[E];if(m.setX(M,T[E*c]),c>=2&&m.setY(M,T[E*c+1]),c>=3&&m.setZ(M,T[E*c+2]),c>=4&&m.setW(M,T[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return u.magFilter=Od[d.magFilter]||Kt,u.minFilter=Od[d.minFilter]||zn,u.wrapS=Bd[d.wrapS]||cs,u.wrapT=Bd[d.wrapT]||cs,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Jt&&u.minFilter!==Kt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;const d=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(d,h){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,d(m)}),t.load(Qs.resolveURL(f,s.path),g,void 0,h)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Zn(f,a),f.userData.mimeType=a.mimeType||Xy(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[$e.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[$e.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[$e.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new gp,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mp,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ha}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[$e.KHR_MATERIALS_UNLIT]){const f=i[$e.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],$t),o.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,Pt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=sn);const u=s.alphaMode||Rc.OPAQUE;if(u===Rc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Rc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ii&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==ii&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ii){const f=s.emissiveFactor;o.emissive=new Oe().setRGB(f[0],f[1],f[2],$t)}return s.emissiveTexture!==void 0&&a!==ii&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Pt)),Promise.all(l).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Zn(f,s),t.associations.set(f,{materials:e}),s.extensions&&rr(i,f,s),f})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[$e.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return kd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=jy(l),f=i[u];if(f)a.push(f.promise);else{let d;l.extensions&&l.extensions[$e.KHR_DRACO_MESH_COMPRESSION]?d=s(l):d=kd(new ln,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?Gy(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let h=0,g=u.length;h<g;h++){const _=u[h],m=a[h];let p;const v=l[h];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Gg(_,v):new gt(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Nd(p.geometry,ep):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Nd(p.geometry,nu));else if(m.mode===Mn.LINES)p=new Kg(_,v);else if(m.mode===Mn.LINE_STRIP)p=new Vu(_,v);else if(m.mode===Mn.LINE_LOOP)p=new Jg(_,v);else if(m.mode===Mn.POINTS)p=new bp(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),Zn(p,s),m.extensions&&rr(i,p,m),t.assignFinalMaterial(p),f.push(p)}for(let h=0,g=f.length;h<g;h++)t.associations.set(f[h],{meshes:e,primitives:h});if(f.length===1)return s.extensions&&rr(i,f[0],s),f[0];const d=new En;s.extensions&&rr(i,d,s),t.associations.set(d,{meshes:e});for(let h=0,g=f.length;h<g;h++)d.add(f[h]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(In.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ju(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const f=a[l];if(f){o.push(f);const d=new Ne;s!==null&&d.fromArray(s.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zu(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let f=0,d=i.channels.length;f<d;f++){const h=i.channels[f],g=i.samplers[h.sampler],_=h.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(f){const d=f[0],h=f[1],g=f[2],_=f[3],m=f[4],p=[];for(let x=0,b=d.length;x<b;x++){const y=d[x],T=h[x],E=g[x],A=_[x],M=m[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const S=n._createAnimationTracks(y,T,E,A,M);if(S)for(let w=0;w<S.length;w++)p.push(S[w])}const v=new ob(s,void 0,p);return Zn(v,i),v})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const u=l[0],f=l[1],d=l[2];d!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(d,Yy)});for(let h=0,g=f.length;h<g;h++)u.add(f[h]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(s.isBone===!0?u=new dp:l.length>1?u=new En:l.length===1?u=l[0]:u=new bt,u!==l[0])for(let f=0,d=l.length;f<d;f++)u.add(l[f]);if(s.name&&(u.userData.name=s.name,u.name=a),Zn(u,s),s.extensions&&rr(n,u,s),s.matrix!==void 0){const f=new Ne;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new En;n.name&&(s.name=i.createUniqueName(n.name)),Zn(s,n),n.extensions&&rr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,f=c.length;u<f;u++)s.add(c[u]);const l=u=>{const f=new Map;for(const[d,h]of i.associations)(d instanceof Wn||d instanceof It)&&f.set(d,h);return u.traverse(d=>{const h=i.associations.get(d);h!=null&&f.set(d,h)}),f};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Ii[s.path]===Ii.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ii[s.path]){case Ii.weights:l=fs;break;case Ii.rotation:l=ds;break;case Ii.translation:case Ii.scale:l=hs;break;default:switch(n.itemSize){case 1:l=fs;break;case 2:case 3:default:l=hs;break}break}const u=i.interpolation!==void 0?Vy[i.interpolation]:ua,f=this._getArrayFromAccessor(n);for(let d=0,h=c.length;d<h;d++){const g=new l(c[d]+"."+Ii[s.path],t.array,f,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ds?Hy:Lp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jy(r,e,t){const n=e.attributes,i=new it;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const u=uu(ns[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],h=d.min,g=d.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),d.normalized){const _=uu(ns[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new Yn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function kd(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=lu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Qe.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),Zn(r,e),Jy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Wy(r,e.targets,t):r})}class $y extends fp{constructor(){super();const e=new br;e.deleteAttribute("uv");const t=new ha({side:qt}),n=new ha,i=new Ep(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new pp(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new gt(e,zr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new gt(e,zr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const u=new gt(e,zr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);const f=new gt(e,zr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const d=new gt(e,zr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const h=new gt(e,zr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function zr(r){return new Zg({color:0,emissive:16777215,emissiveIntensity:r})}const Ip=0,Zy=1,Qy=2,zd=2,Pc=1.25,Hd=1,ea=32,Oo=65535,eM=Math.pow(2,-24),Lc=Symbol("SKIP_GENERATION");function tM(r){return r.index?r.index.count:r.attributes.position.count}function Ki(r){return tM(r)/3}function nM(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function iM(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=nM(t,n);r.setIndex(new Bt(i,1));for(let s=0;s<t;s++)i[s]=s}}function Dp(r,e){const t=Ki(r),n=e||r.drawRange,i=n.start/3,s=(n.start+n.count)/3,a=Math.max(0,i),o=Math.min(t,s)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Up(r,e){if(!r.groups||!r.groups.length)return Dp(r,e);const t=[],n=new Set,i=e||r.drawRange,s=i.start/3,a=(i.start+i.count)/3;for(const c of r.groups){const l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(s,l)),n.add(Math.min(a,u))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],u=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(u-l)})}return t}function rM(r,e){const t=Ki(r),n=Up(r,e).sort((a,o)=>a.offset-o.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return n.forEach(({count:a})=>s+=a),t!==s}function Ic(r,e,t,n,i){let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,d=1/0,h=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=e*6,v=(e+t)*6;p<v;p+=6){const x=r[p+0],b=r[p+1],y=x-b,T=x+b;y<s&&(s=y),T>c&&(c=T),x<f&&(f=x),x>g&&(g=x);const E=r[p+2],A=r[p+3],M=E-A,S=E+A;M<a&&(a=M),S>l&&(l=S),E<d&&(d=E),E>_&&(_=E);const w=r[p+4],R=r[p+5],D=w-R,I=w+R;D<o&&(o=D),I>u&&(u=I),w<h&&(h=w),w>m&&(m=w)}n[0]=s,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=u,i[0]=f,i[1]=d,i[2]=h,i[3]=g,i[4]=_,i[5]=m}function sM(r,e=null,t=null,n=null){const i=r.attributes.position,s=r.index?r.index.array:null,a=Ki(r),o=i.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=i.array,u=i.offset||0;let f=3;i.isInterleavedBufferAttribute&&(f=i.data.stride);const d=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,_=h*6;let m=g+0,p=g+1,v=g+2;s&&(m=s[m],p=s[p],v=s[v]),o||(m=m*f+u,p=p*f+u,v=v*f+u);for(let x=0;x<3;x++){let b,y,T;o?(b=i[d[x]](m),y=i[d[x]](p),T=i[d[x]](v)):(b=l[m+x],y=l[p+x],T=l[v+x]);let E=b;y<E&&(E=y),T<E&&(E=T);let A=b;y>A&&(A=y),T>A&&(A=T);const M=(A-E)/2,S=x*2;c[_+S+0]=E+M,c[_+S+1]=M+(Math.abs(E)+M)*eM}}return c}function Et(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function Vd(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function Gd(r,e){e.set(r)}function Wd(r,e,t){let n,i;for(let s=0;s<3;s++){const a=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[a],i=e[a],t[a]=n>i?n:i}}function $a(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],a=i-s,o=i+s;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Us(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}const bi=32,aM=(r,e)=>r.candidate-e.candidate,Di=new Array(bi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Za=new Float32Array(6);function oM(r,e,t,n,i,s){let a=-1,o=0;if(s===Ip)a=Vd(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===Zy)a=Vd(r),a!==-1&&(o=cM(t,n,i,a));else if(s===Qy){const c=Us(r);let l=Pc*i;const u=n*6,f=(n+i)*6;for(let d=0;d<3;d++){const h=e[d],m=(e[d+3]-h)/bi;if(i<bi/4){const p=[...Di];p.length=i;let v=0;for(let b=u;b<f;b+=6,v++){const y=p[v];y.candidate=t[b+2*d],y.count=0;const{bounds:T,leftCacheBounds:E,rightCacheBounds:A}=y;for(let M=0;M<3;M++)A[M]=1/0,A[M+3]=-1/0,E[M]=1/0,E[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0;$a(b,t,T)}p.sort(aM);let x=i;for(let b=0;b<x;b++){const y=p[b];for(;b+1<x&&p[b+1].candidate===y.candidate;)p.splice(b+1,1),x--}for(let b=u;b<f;b+=6){const y=t[b+2*d];for(let T=0;T<x;T++){const E=p[T];y>=E.candidate?$a(b,t,E.rightCacheBounds):($a(b,t,E.leftCacheBounds),E.count++)}}for(let b=0;b<x;b++){const y=p[b],T=y.count,E=i-y.count,A=y.leftCacheBounds,M=y.rightCacheBounds;let S=0;T!==0&&(S=Us(A)/c);let w=0;E!==0&&(w=Us(M)/c);const R=Hd+Pc*(S*T+w*E);R<l&&(a=d,l=R,o=y.candidate)}}else{for(let x=0;x<bi;x++){const b=Di[x];b.count=0,b.candidate=h+m+x*m;const y=b.bounds;for(let T=0;T<3;T++)y[T]=1/0,y[T+3]=-1/0}for(let x=u;x<f;x+=6){let T=~~((t[x+2*d]-h)/m);T>=bi&&(T=bi-1);const E=Di[T];E.count++,$a(x,t,E.bounds)}const p=Di[bi-1];Gd(p.bounds,p.rightCacheBounds);for(let x=bi-2;x>=0;x--){const b=Di[x],y=Di[x+1];Wd(b.bounds,y.rightCacheBounds,b.rightCacheBounds)}let v=0;for(let x=0;x<bi-1;x++){const b=Di[x],y=b.count,T=b.bounds,A=Di[x+1].rightCacheBounds;y!==0&&(v===0?Gd(T,Za):Wd(T,Za,Za)),v+=y;let M=0,S=0;v!==0&&(M=Us(Za)/c);const w=i-v;w!==0&&(S=Us(A)/c);const R=Hd+Pc*(M*v+S*w);R<l&&(a=d,l=R,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function cM(r,e,t,n){let i=0;for(let s=e,a=e+t;s<a;s++)i+=r[s*6+n*2];return i/t}class Dc{constructor(){this.boundingData=new Float32Array(6)}}function lM(r,e,t,n,i,s){let a=n,o=n+i-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let u=0;u<3;u++){let f=e[a*3+u];e[a*3+u]=e[o*3+u],e[o*3+u]=f}for(let u=0;u<6;u++){let f=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=f}a++,o--}else return a}}function uM(r,e,t,n,i,s){let a=n,o=n+i-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let u=r[a];r[a]=r[o],r[o]=u;for(let f=0;f<6;f++){let d=t[a*6+f];t[a*6+f]=t[o*6+f],t[o*6+f]=d}a++,o--}else return a}}function an(r,e){return e[r+15]===65535}function mn(r,e){return e[r+6]}function Tn(r,e){return e[r+14]}function wn(r){return r+8}function An(r,e){return e[r+6]}function Np(r,e){return e[r+7]}let Fp,js,yo,Op;const fM=Math.pow(2,32);function fu(r){return"count"in r?1:1+fu(r.left)+fu(r.right)}function dM(r,e,t){return Fp=new Float32Array(t),js=new Uint32Array(t),yo=new Uint16Array(t),Op=new Uint8Array(t),du(r,e)}function du(r,e){const t=r/4,n=r/2,i="count"in e,s=e.boundingData;for(let a=0;a<6;a++)Fp[t+a]=s[a];if(i)if(e.buffer){const a=e.buffer;Op.set(new Uint8Array(a),r);for(let o=r,c=r+a.byteLength;o<c;o+=ea){const l=o/2;an(l,yo)||(js[o/4+6]+=t)}return r+a.byteLength}else{const a=e.offset,o=e.count;return js[t+6]=a,yo[n+14]=o,yo[n+15]=Oo,r+ea}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=du(r+ea,a),l/4>fM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return js[t+6]=l/4,l=du(l,o),js[t+7]=c,l}}function hM(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function pM(r,e,t,n,i){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:u}=i,f=r._indirectBuffer,d=r.geometry,h=d.index?d.index.array:null,g=u?uM:lM,_=Ki(d),m=new Float32Array(6);let p=!1;const v=new Dc;return Ic(e,t,n,v.boundingData,m),b(v,t,n,m),v;function x(y){l&&l(y/_)}function b(y,T,E,A=null,M=0){if(!p&&M>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(d))),E<=o||M>=s)return x(T+E),y.offset=T,y.count=E,y;const S=oM(y.boundingData,A,e,T,E,c);if(S.axis===-1)return x(T+E),y.offset=T,y.count=E,y;const w=g(f,h,e,T,E,S);if(w===T||w===T+E)x(T+E),y.offset=T,y.count=E;else{y.splitAxis=S.axis;const R=new Dc,D=T,I=w-T;y.left=R,Ic(e,D,I,R.boundingData,m),b(R,D,I,m,M+1);const F=new Dc,O=w,V=E-I;y.right=F,Ic(e,O,V,F.boundingData,m),b(F,O,V,m,M+1)}return y}}function mM(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=hM(t,e.useSharedArrayBuffer),rM(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||iM(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Dp(t,e.range),s=sM(t,null,i[0].offset,i[0].count),a=e.indirect?i:Up(t,e.range);r._roots=a.map(o=>{const c=pM(r,s,o.offset,o.count,e),l=fu(c),u=new n(ea*l);return dM(0,c,u),u})}class Ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,a=e.length;s<a;s++){const c=e[s][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Ti.prototype.setFromBox=(function(){const r=new L;return function(t,n){const i=n.min,s=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){r.x=i.x*c+s.x*(1-c),r.y=i.y*l+s.y*(1-l),r.z=i.z*u+s.z*(1-u);const f=t.dot(r);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}})();const gM=(function(){const r=new L,e=new L,t=new L;return function(i,s,a){const o=i.start,c=r,l=s.start,u=e;t.subVectors(o,l),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const f=t.dot(u),d=u.dot(c),h=u.dot(u),g=t.dot(c),m=c.dot(c)*h-d*d;let p,v;m!==0?p=(f*d-g*h)/m:p=0,v=(f+p*d)/h,a.x=p,a.y=v}})(),Zu=(function(){const r=new Ue,e=new L,t=new L;return function(i,s,a,o){gM(i,s,r);let c=r.x,l=r.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,a),s.at(l,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?i.at(0,a):i.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let u;c<0?u=i.start:u=i.end;let f;l<0?f=s.start:f=s.end;const d=e,h=t;if(i.closestPointToPoint(f,!0,e),s.closestPointToPoint(u,!0,t),d.distanceToSquared(f)<=h.distanceToSquared(u)){a.copy(d),o.copy(f);return}else{a.copy(u),o.copy(h);return}}}})(),bM=(function(){const r=new L,e=new L,t=new Qn,n=new oi;return function(s,a){const{radius:o,center:c}=s,{a:l,b:u,c:f}=a;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const p=_.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),_M=["x","y","z"],_i=1e-15,qd=_i*_i;function yn(r){return Math.abs(r)<_i}class Xn extends Lt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new Ti),this.points=[this.a,this.b,this.c],this.plane=new Qn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new oi,this.needsUpdate=!0}intersectsSphere(e){return bM(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,a=this.satBounds,o=s[0],c=a[0];this.getNormal(o),c.setFromPoints(o,i);const l=s[1],u=a[1];l.subVectors(e,t),u.setFromPoints(l,i);const f=s[2],d=a[2];f.subVectors(t,n),d.setFromPoints(f,i);const h=s[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,i);const _=l.length(),m=f.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<_i?m<_i||p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<_i?p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<_i&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Xn.prototype.closestPointToSegment=(function(){const r=new L,e=new L,t=new oi;return function(i,s=null,a=null){const{start:o,end:c}=i,l=this.points;let u,f=1/0;for(let d=0;d<3;d++){const h=(d+1)%3;t.start.copy(l[d]),t.end.copy(l[h]),Zu(t,i,r,e),u=r.distanceToSquared(e),u<f&&(f=u,s&&s.copy(r),a&&a.copy(e))}return this.closestPointToPoint(o,r),u=o.distanceToSquared(r),u<f&&(f=u,s&&s.copy(r),a&&a.copy(o)),this.closestPointToPoint(c,r),u=c.distanceToSquared(r),u<f&&(f=u,s&&s.copy(r),a&&a.copy(c)),Math.sqrt(f)}})();Xn.prototype.intersectsTriangle=(function(){const r=new Xn,e=new Ti,t=new Ti,n=new L,i=new L,s=new L,a=new L,o=new oi,c=new oi,l=new L,u=new Ue,f=new Ue;function d(x,b,y,T){const E=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?E.copy(x.plane.normal):E.copy(b.plane.normal);const A=x.satBounds,M=x.satAxes;for(let R=1;R<4;R++){const D=A[R],I=M[R];if(e.setFromPoints(I,b.points),D.isSeparated(e)||(a.copy(E).cross(I),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const S=b.satBounds,w=b.satAxes;for(let R=1;R<4;R++){const D=S[R],I=w[R];if(e.setFromPoints(I,x.points),D.isSeparated(e)||(a.crossVectors(E,I),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return y&&(T||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),y.start.set(0,0,0),y.end.set(0,0,0)),!0}function h(x,b,y,T,E,A,M,S,w,R,D){let I=M/(M-S);R.x=T+(E-T)*I,D.start.subVectors(b,x).multiplyScalar(I).add(x),I=M/(M-w),R.y=T+(A-T)*I,D.end.subVectors(y,x).multiplyScalar(I).add(x)}function g(x,b,y,T,E,A,M,S,w,R,D){if(E>0)h(x.c,x.a,x.b,T,b,y,w,M,S,R,D);else if(A>0)h(x.b,x.a,x.c,y,b,T,S,M,w,R,D);else if(S*w>0||M!=0)h(x.a,x.b,x.c,b,y,T,M,S,w,R,D);else if(S!=0)h(x.b,x.a,x.c,y,b,T,S,M,w,R,D);else if(w!=0)h(x.c,x.a,x.b,T,b,y,w,M,S,R,D);else return!0;return!1}function _(x,b,y,T){const E=b.degenerateSegment,A=x.plane.distanceToPoint(E.start),M=x.plane.distanceToPoint(E.end);return yn(A)?yn(M)?d(x,b,y,T):(y&&(y.start.copy(E.start),y.end.copy(E.start)),x.containsPoint(E.start)):yn(M)?(y&&(y.start.copy(E.end),y.end.copy(E.end)),x.containsPoint(E.end)):x.plane.intersectLine(E,n)!=null?(y&&(y.start.copy(n),y.end.copy(n)),x.containsPoint(n)):!1}function m(x,b,y){const T=b.a;return yn(x.plane.distanceToPoint(T))&&x.containsPoint(T)?(y&&(y.start.copy(T),y.end.copy(T)),!0):!1}function p(x,b,y){const T=x.degenerateSegment,E=b.a;return T.closestPointToPoint(E,!0,n),E.distanceToSquared(n)<qd?(y&&(y.start.copy(E),y.end.copy(E)),!0):!1}function v(x,b,y,T){if(x.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const E=x.degenerateSegment,A=b.degenerateSegment,M=i,S=s;E.delta(M),A.delta(S);const w=n.subVectors(A.start,E.start),R=M.x*S.y-M.y*S.x;if(yn(R))return!1;const D=(w.x*S.y-w.y*S.x)/R,I=-(M.x*w.y-M.y*w.x)/R;if(D<0||D>1||I<0||I>1)return!1;const F=E.start.z+M.z*D,O=A.start.z+S.z*I;return yn(F-O)?(y&&(y.start.copy(E.start).addScaledVector(M,D),y.end.copy(E.start).addScaledVector(M,D)),!0):!1}else return b.isDegenerateIntoPoint?p(x,b,y):_(b,x,y,T);else{if(x.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(x.a)<qd?(y&&(y.start.copy(x.a),y.end.copy(x.a)),!0):!1:b.isDegenerateIntoSegment?p(b,x,y):m(b,x,y);if(b.isDegenerateIntoPoint)return m(x,b,y);if(b.isDegenerateIntoSegment)return _(x,b,y,T)}}return function(b,y=null,T=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(r.copy(b),r.update(),b=r);const E=v(this,b,y,T);if(E!==void 0)return E;const A=this.plane,M=b.plane;let S=M.distanceToPoint(this.a),w=M.distanceToPoint(this.b),R=M.distanceToPoint(this.c);yn(S)&&(S=0),yn(w)&&(w=0),yn(R)&&(R=0);const D=S*w,I=S*R;if(D>0&&I>0)return!1;let F=A.distanceToPoint(b.a),O=A.distanceToPoint(b.b),V=A.distanceToPoint(b.c);yn(F)&&(F=0),yn(O)&&(O=0),yn(V)&&(V=0);const H=F*O,Z=F*V;if(H>0&&Z>0)return!1;i.copy(A.normal),s.copy(M.normal);const Q=i.cross(s);let J=0,fe=Math.abs(Q.x);const Ie=Math.abs(Q.y);Ie>fe&&(fe=Ie,J=1),Math.abs(Q.z)>fe&&(J=2);const Ve=_M[J],X=this.a[Ve],K=this.b[Ve],le=this.c[Ve],Re=b.a[Ve],ge=b.b[Ve],Ge=b.c[Ve];if(g(this,X,K,le,D,I,S,w,R,u,o))return d(this,b,y,T);if(g(b,Re,ge,Ge,H,Z,F,O,V,f,c))return d(this,b,y,T);if(u.y<u.x){const te=u.y;u.y=u.x,u.x=te,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(f.y<f.x){const te=f.y;f.y=f.x,f.x=te,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return u.y<f.x||f.y<u.x?!1:(y&&(f.x>u.x?y.start.copy(c.start):y.start.copy(o.start),f.y<u.y?y.end.copy(c.end):y.end.copy(o.end)),!0)}})();Xn.prototype.distanceToPoint=(function(){const r=new L;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();Xn.prototype.distanceToTriangle=(function(){const r=new L,e=new L,t=["a","b","c"],n=new oi,i=new oi;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let d;const h=t[f],g=a[h];this.closestPointToPoint(g,r),d=g.distanceToSquared(r),d<u&&(u=d,o&&o.copy(r),c&&c.copy(g));const _=this[h];a.closestPointToPoint(_,r),d=_.distanceToSquared(r),d<u&&(u=d,o&&o.copy(_),c&&c.copy(r))}for(let f=0;f<3;f++){const d=t[f],h=t[(f+1)%3];n.set(this[d],this[h]);for(let g=0;g<3;g++){const _=t[g],m=t[(g+1)%3];i.set(a[_],a[m]),Zu(n,i,r,e);const p=r.distanceToSquared(e);p<u&&(u=p,o&&o.copy(r),c&&c.copy(e))}}return Math.sqrt(u)}})();class Qt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ne,this.invMatrix=new Ne,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new Ti),this.alignedSatBounds=new Array(3).fill().map(()=>new Ti),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Qt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){const d=1*l|2*u|4*f,h=i[d];h.x=l?n.x:t.x,h.y=u?n.y:t.y,h.z=f?n.z:t.z,h.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,o=i[0];for(let l=0;l<3;l++){const u=a[l],f=s[l],d=1<<l,h=i[d];u.subVectors(o,h),f.setFromPoints(u,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Qt.prototype.intersectsBox=(function(){const r=new Ti;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,o[0].isSeparated(r)||(r.min=n.y,r.max=i.y,o[1].isSeparated(r))||(r.min=n.z,r.max=i.z,o[2].isSeparated(r)))return!1;for(let c=0;c<3;c++){const l=a[c],u=s[c];if(r.setFromBox(l,t),u.isSeparated(r))return!1}return!0}})();Qt.prototype.intersectsTriangle=(function(){const r=new Xn,e=new Array(3),t=new Ti,n=new Ti,i=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let d=0;d<3;d++){const h=o[d],g=c[d];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,u=a.satAxes,f=this.points;for(let d=0;d<3;d++){const h=l[d],g=u[d];if(t.setFromPoints(g,f),h.isSeparated(t))return!1}for(let d=0;d<3;d++){const h=c[d];for(let g=0;g<4;g++){const _=u[g];if(i.crossVectors(h,_),t.setFromPoints(i,e),n.setFromPoints(i,f),t.isSeparated(n))return!1}}return!0}})();Qt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Qt.prototype.distanceToPoint=(function(){const r=new L;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();Qt.prototype.distanceToBox=(function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new oi),t=new Array(12).fill().map(()=>new oi),n=new L,i=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const u=o*o,f=a.min,d=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];i.copy(p).clamp(f,d);const v=p.distanceToSquared(i);if(v<g&&(g=v,c&&c.copy(p),l&&l.copy(i),v<u))return Math.sqrt(v)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){const x=(m+1)%3,b=(m+2)%3,y=p<<x|v<<b,T=1<<m|p<<x|v<<b,E=h[y],A=h[T];e[_].set(E,A);const S=r[m],w=r[x],R=r[b],D=t[_],I=D.start,F=D.end;I[S]=f[S],I[w]=p?f[w]:d[w],I[R]=v?f[R]:d[w],F[S]=d[S],F[w]=p?f[w]:d[w],F[R]=v?f[R]:d[w],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let v=0;v<=1;v++){i.x=m?d.x:f.x,i.y=p?d.y:f.y,i.z=v?d.z:f.z,this.closestPointToPoint(i,n);const x=i.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(i),x<u))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=e[m];for(let v=0;v<12;v++){const x=t[v];Zu(p,x,n,i);const b=n.distanceToSquared(i);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(i),b<u))return Math.sqrt(b)}}return Math.sqrt(g)}})();class Qu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class xM extends Qu{constructor(){super(()=>new Xn)}}const Rn=new xM;class vM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const _t=new vM;let Vi,Zr;const Hr=[],Qa=new Qu(()=>new it);function yM(r,e,t,n,i,s){Vi=Qa.getPrimitive(),Zr=Qa.getPrimitive(),Hr.push(Vi,Zr),_t.setBuffer(r._roots[e]);const a=hu(0,r.geometry,t,n,i,s);_t.clearBuffer(),Qa.releasePrimitive(Vi),Qa.releasePrimitive(Zr),Hr.pop(),Hr.pop();const o=Hr.length;return o>0&&(Zr=Hr[o-1],Vi=Hr[o-2]),a}function hu(r,e,t,n,i=null,s=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=_t;let u=r*2;if(an(u,c)){const g=mn(r,l),_=Tn(u,c);return Et(r,o,Vi),n(g,_,!1,a,s+r,Vi)}else{let R=function(I){const{uint16Array:F,uint32Array:O}=_t;let V=I*2;for(;!an(V,F);)I=wn(I),V=I*2;return mn(I,O)},D=function(I){const{uint16Array:F,uint32Array:O}=_t;let V=I*2;for(;!an(V,F);)I=An(I,O),V=I*2;return mn(I,O)+Tn(V,F)};var d=R,h=D;const g=wn(r),_=An(r,l);let m=g,p=_,v,x,b,y;if(i&&(b=Vi,y=Zr,Et(m,o,b),Et(p,o,y),v=i(b),x=i(y),x<v)){m=_,p=g;const I=v;v=x,x=I,b=y}b||(b=Vi,Et(m,o,b));const T=an(m*2,c),E=t(b,T,v,a+1,s+m);let A;if(E===zd){const I=R(m),O=D(m)-I;A=n(I,O,!0,a+1,s+m,b)}else A=E&&hu(m,e,t,n,i,s,a+1);if(A)return!0;y=Zr,Et(p,o,y);const M=an(p*2,c),S=t(y,M,x,a+1,s+p);let w;if(S===zd){const I=R(p),O=D(p)-I;w=n(I,O,!0,a+1,s+p,y)}else w=S&&hu(p,e,t,n,i,s,a+1);return!!w}}const Ns=new L,Uc=new L;function MM(r,e,t={},n=0,i=1/0){const s=n*n,a=i*i;let o=1/0,c=null;if(r.shapecast({boundsTraverseOrder:u=>(Ns.copy(e).clamp(u.min,u.max),Ns.distanceToSquared(e)),intersectsBounds:(u,f,d)=>d<o&&d<a,intersectsTriangle:(u,f)=>{u.closestPointToPoint(e,Ns);const d=e.distanceToSquared(Ns);return d<o&&(Uc.copy(Ns),o=d,c=f),d<s}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Uc):t.point=Uc.clone(),t.distance=l,t.faceIndex=c,t}const eo=parseInt(ba)>=169,SM=parseInt(ba)<=161,sr=new L,ar=new L,or=new L,to=new Ue,no=new Ue,io=new Ue,jd=new L,Xd=new L,Yd=new L,Fs=new L;function EM(r,e,t,n,i,s,a,o){let c;if(s===qt?c=r.intersectTriangle(n,t,e,!0,i):c=r.intersectTriangle(e,t,n,s!==sn,i),c===null)return null;const l=r.origin.distanceTo(i);return l<a||l>o?null:{distance:l,point:i.clone()}}function TM(r,e,t,n,i,s,a,o,c,l,u){sr.fromBufferAttribute(e,s),ar.fromBufferAttribute(e,a),or.fromBufferAttribute(e,o);const f=EM(r,sr,ar,or,Fs,c,l,u);if(f){if(n){to.fromBufferAttribute(n,s),no.fromBufferAttribute(n,a),io.fromBufferAttribute(n,o),f.uv=new Ue;const h=Lt.getInterpolation(Fs,sr,ar,or,to,no,io,f.uv);eo||(f.uv=h)}if(i){to.fromBufferAttribute(i,s),no.fromBufferAttribute(i,a),io.fromBufferAttribute(i,o),f.uv1=new Ue;const h=Lt.getInterpolation(Fs,sr,ar,or,to,no,io,f.uv1);eo||(f.uv1=h),SM&&(f.uv2=f.uv1)}if(t){jd.fromBufferAttribute(t,s),Xd.fromBufferAttribute(t,a),Yd.fromBufferAttribute(t,o),f.normal=new L;const h=Lt.getInterpolation(Fs,sr,ar,or,jd,Xd,Yd,f.normal);f.normal.dot(r.direction)>0&&f.normal.multiplyScalar(-1),eo||(f.normal=h)}const d={a:s,b:a,c:o,normal:new L,materialIndex:0};if(Lt.getNormal(sr,ar,or,d.normal),f.face=d,f.faceIndex=s,eo){const h=new L;Lt.getBarycoord(Fs,sr,ar,or,h),f.barycoord=h}}return f}function Bo(r,e,t,n,i,s,a){const o=n*3;let c=o+0,l=o+1,u=o+2;const f=r.index;r.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));const{position:d,normal:h,uv:g,uv1:_}=r.attributes,m=TM(t,d,h,g,_,c,l,u,e,s,a);return m?(m.faceIndex=n,i&&i.push(m),m):null}function Rt(r,e,t,n){const i=r.a,s=r.b,a=r.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function wM(r,e,t,n,i,s,a,o){const{geometry:c,_indirectBuffer:l}=r;for(let u=n,f=n+i;u<f;u++)Bo(c,e,t,u,s,a,o)}function AM(r,e,t,n,i,s,a){const{geometry:o,_indirectBuffer:c}=r;let l=1/0,u=null;for(let f=n,d=n+i;f<d;f++){let h;h=Bo(o,e,t,f,null,s,a),h&&h.distance<l&&(u=h,l=h.distance)}return u}function RM(r,e,t,n,i,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=r,f=e+r;u<f;u++){let d;if(d=u,Rt(a,d*3,c,l),a.needsUpdate=!0,n(a,d,i,s))return!0}return!1}function CM(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,a,o,c,l=0;const u=r._roots;for(let d=0,h=u.length;d<h;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),f(0,l),l+=s.byteLength;function f(d,h,g=!1){const _=d*2;if(o[_+15]===Oo){const p=a[d+6],v=o[_+14];let x=1/0,b=1/0,y=1/0,T=-1/0,E=-1/0,A=-1/0;for(let M=3*p,S=3*(p+v);M<S;M++){let w=n[M];const R=i.getX(w),D=i.getY(w),I=i.getZ(w);R<x&&(x=R),R>T&&(T=R),D<b&&(b=D),D>E&&(E=D),I<y&&(y=I),I>A&&(A=I)}return c[d+0]!==x||c[d+1]!==b||c[d+2]!==y||c[d+3]!==T||c[d+4]!==E||c[d+5]!==A?(c[d+0]=x,c[d+1]=b,c[d+2]=y,c[d+3]=T,c[d+4]=E,c[d+5]=A,!0):!1}else{const p=d+8,v=a[d+6],x=p+h,b=v+h;let y=g,T=!1,E=!1;e?y||(T=e.has(x),E=e.has(b),y=!T&&!E):(T=!0,E=!0);const A=y||T,M=y||E;let S=!1;A&&(S=f(p,h,y));let w=!1;M&&(w=f(v,h,y));const R=S||w;if(R)for(let D=0;D<3;D++){const I=p+D,F=v+D,O=c[I],V=c[I+3],H=c[F],Z=c[F+3];c[d+D]=O<H?O:H,c[d+D+3]=V>Z?V:Z}return R}}}function Xi(r,e,t,n,i){let s,a,o,c,l,u;const f=1/t.direction.x,d=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,_=t.origin.y,m=t.origin.z;let p=e[r],v=e[r+3],x=e[r+1],b=e[r+3+1],y=e[r+2],T=e[r+3+2];return f>=0?(s=(p-g)*f,a=(v-g)*f):(s=(v-g)*f,a=(p-g)*f),d>=0?(o=(x-_)*d,c=(b-_)*d):(o=(b-_)*d,c=(x-_)*d),s>c||o>a||((o>s||isNaN(s))&&(s=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(y-m)*h,u=(T-m)*h):(l=(T-m)*h,u=(y-m)*h),s>u||l>a)?!1:((l>s||s!==s)&&(s=l),(u<a||a!==a)&&(a=u),s<=i&&a>=n)}function PM(r,e,t,n,i,s,a,o){const{geometry:c,_indirectBuffer:l}=r;for(let u=n,f=n+i;u<f;u++){let d=l?l[u]:u;Bo(c,e,t,d,s,a,o)}}function LM(r,e,t,n,i,s,a){const{geometry:o,_indirectBuffer:c}=r;let l=1/0,u=null;for(let f=n,d=n+i;f<d;f++){let h;h=Bo(o,e,t,c?c[f]:f,null,s,a),h&&h.distance<l&&(u=h,l=h.distance)}return u}function IM(r,e,t,n,i,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let u=r,f=e+r;u<f;u++){let d;if(d=t.resolveTriangleIndex(u),Rt(a,d*3,c,l),a.needsUpdate=!0,n(a,d,i,s))return!0}return!1}function DM(r,e,t,n,i,s,a){_t.setBuffer(r._roots[e]),pu(0,r,t,n,i,s,a),_t.clearBuffer()}function pu(r,e,t,n,i,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,u=r*2;if(an(u,c)){const d=mn(r,l),h=Tn(u,c);wM(e,t,n,d,h,i,s,a)}else{const d=wn(r);Xi(d,o,n,s,a)&&pu(d,e,t,n,i,s,a);const h=An(r,l);Xi(h,o,n,s,a)&&pu(h,e,t,n,i,s,a)}}const UM=["x","y","z"];function NM(r,e,t,n,i,s){_t.setBuffer(r._roots[e]);const a=mu(0,r,t,n,i,s);return _t.clearBuffer(),a}function mu(r,e,t,n,i,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=r*2;if(an(l,o)){const f=mn(r,c),d=Tn(l,o);return AM(e,t,n,f,d,i,s)}else{const f=Np(r,c),d=UM[f],g=n.direction[d]>=0;let _,m;g?(_=wn(r),m=An(r,c)):(_=An(r,c),m=wn(r));const v=Xi(_,a,n,i,s)?mu(_,e,t,n,i,s):null;if(v){const y=v.point[d];if(g?y<=a[m+f]:y>=a[m+f+3])return v}const b=Xi(m,a,n,i,s)?mu(m,e,t,n,i,s):null;return v&&b?v.distance<=b.distance?v:b:v||b||null}}const ro=new it,Vr=new Xn,Gr=new Xn,Os=new Ne,Kd=new Qt,so=new Qt;function FM(r,e,t,n){_t.setBuffer(r._roots[e]);const i=gu(0,r,t,n);return _t.clearBuffer(),i}function gu(r,e,t,n,i=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Kd.set(t.boundingBox.min,t.boundingBox.max,n),i=Kd),an(c,a)){const u=e.geometry,f=u.index,d=u.attributes.position,h=t.index,g=t.attributes.position,_=mn(r,o),m=Tn(c,a);if(Os.copy(n).invert(),t.boundsTree)return Et(r,s,so),so.matrix.copy(Os),so.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>so.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=_*3,b=(m+_)*3;x<b;x+=3)if(Rt(Gr,x,f,d),Gr.needsUpdate=!0,v.intersectsTriangle(Gr))return!0;return!1}});{const p=Ki(t);for(let v=_*3,x=(m+_)*3;v<x;v+=3){Rt(Vr,v,f,d),Vr.a.applyMatrix4(Os),Vr.b.applyMatrix4(Os),Vr.c.applyMatrix4(Os),Vr.needsUpdate=!0;for(let b=0,y=p*3;b<y;b+=3)if(Rt(Gr,b,h,g),Gr.needsUpdate=!0,Vr.intersectsTriangle(Gr))return!0}}}else{const u=r+8,f=o[r+6];return Et(u,s,ro),!!(i.intersectsBox(ro)&&gu(u,e,t,n,i)||(Et(f,s,ro),i.intersectsBox(ro)&&gu(f,e,t,n,i)))}}const ao=new Ne,Nc=new Qt,Bs=new Qt,OM=new L,BM=new L,kM=new L,zM=new L;function HM(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Nc.set(e.boundingBox.min,e.boundingBox.max,t),Nc.needsUpdate=!0;const o=r.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,f=e.index,d=Rn.getPrimitive(),h=Rn.getPrimitive();let g=OM,_=BM,m=null,p=null;i&&(m=kM,p=zM);let v=1/0,x=null,b=null;return ao.copy(t).invert(),Bs.matrix.copy(ao),r.shapecast({boundsTraverseOrder:y=>Nc.distanceToBox(y),intersectsBounds:(y,T,E)=>E<v&&E<a?(T&&(Bs.min.copy(y.min),Bs.max.copy(y.max),Bs.needsUpdate=!0),!0):!1,intersectsRange:(y,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>Bs.distanceToBox(A),intersectsBounds:(A,M,S)=>S<v&&S<a,intersectsRange:(A,M)=>{for(let S=A,w=A+M;S<w;S++){Rt(h,3*S,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let R=y,D=y+T;R<D;R++){Rt(d,3*R,l,c),d.needsUpdate=!0;const I=d.distanceToTriangle(h,g,m);if(I<v&&(_.copy(g),p&&p.copy(m),v=I,x=R,b=S),I<s)return!0}}}});{const E=Ki(e);for(let A=0,M=E;A<M;A++){Rt(h,3*A,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=y,w=y+T;S<w;S++){Rt(d,3*S,l,c),d.needsUpdate=!0;const R=d.distanceToTriangle(h,g,m);if(R<v&&(_.copy(g),p&&p.copy(m),v=R,x=S,b=A),R<s)return!0}}}}}),Rn.releasePrimitive(d),Rn.releasePrimitive(h),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=x,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(ao),_.applyMatrix4(ao),i.distance=_.sub(i.point).length(),i.faceIndex=b),n)}function VM(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,a,o,c,l=0;const u=r._roots;for(let d=0,h=u.length;d<h;d++)s=u[d],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),f(0,l),l+=s.byteLength;function f(d,h,g=!1){const _=d*2;if(o[_+15]===Oo){const p=a[d+6],v=o[_+14];let x=1/0,b=1/0,y=1/0,T=-1/0,E=-1/0,A=-1/0;for(let M=p,S=p+v;M<S;M++){const w=3*r.resolveTriangleIndex(M);for(let R=0;R<3;R++){let D=w+R;D=n?n[D]:D;const I=i.getX(D),F=i.getY(D),O=i.getZ(D);I<x&&(x=I),I>T&&(T=I),F<b&&(b=F),F>E&&(E=F),O<y&&(y=O),O>A&&(A=O)}}return c[d+0]!==x||c[d+1]!==b||c[d+2]!==y||c[d+3]!==T||c[d+4]!==E||c[d+5]!==A?(c[d+0]=x,c[d+1]=b,c[d+2]=y,c[d+3]=T,c[d+4]=E,c[d+5]=A,!0):!1}else{const p=d+8,v=a[d+6],x=p+h,b=v+h;let y=g,T=!1,E=!1;e?y||(T=e.has(x),E=e.has(b),y=!T&&!E):(T=!0,E=!0);const A=y||T,M=y||E;let S=!1;A&&(S=f(p,h,y));let w=!1;M&&(w=f(v,h,y));const R=S||w;if(R)for(let D=0;D<3;D++){const I=p+D,F=v+D,O=c[I],V=c[I+3],H=c[F],Z=c[F+3];c[d+D]=O<H?O:H,c[d+D+3]=V>Z?V:Z}return R}}}function GM(r,e,t,n,i,s,a){_t.setBuffer(r._roots[e]),bu(0,r,t,n,i,s,a),_t.clearBuffer()}function bu(r,e,t,n,i,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,u=r*2;if(an(u,c)){const d=mn(r,l),h=Tn(u,c);PM(e,t,n,d,h,i,s,a)}else{const d=wn(r);Xi(d,o,n,s,a)&&bu(d,e,t,n,i,s,a);const h=An(r,l);Xi(h,o,n,s,a)&&bu(h,e,t,n,i,s,a)}}const WM=["x","y","z"];function qM(r,e,t,n,i,s){_t.setBuffer(r._roots[e]);const a=_u(0,r,t,n,i,s);return _t.clearBuffer(),a}function _u(r,e,t,n,i,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=r*2;if(an(l,o)){const f=mn(r,c),d=Tn(l,o);return LM(e,t,n,f,d,i,s)}else{const f=Np(r,c),d=WM[f],g=n.direction[d]>=0;let _,m;g?(_=wn(r),m=An(r,c)):(_=An(r,c),m=wn(r));const v=Xi(_,a,n,i,s)?_u(_,e,t,n,i,s):null;if(v){const y=v.point[d];if(g?y<=a[m+f]:y>=a[m+f+3])return v}const b=Xi(m,a,n,i,s)?_u(m,e,t,n,i,s):null;return v&&b?v.distance<=b.distance?v:b:v||b||null}}const oo=new it,Wr=new Xn,qr=new Xn,ks=new Ne,Jd=new Qt,co=new Qt;function jM(r,e,t,n){_t.setBuffer(r._roots[e]);const i=xu(0,r,t,n);return _t.clearBuffer(),i}function xu(r,e,t,n,i=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Jd.set(t.boundingBox.min,t.boundingBox.max,n),i=Jd),an(c,a)){const u=e.geometry,f=u.index,d=u.attributes.position,h=t.index,g=t.attributes.position,_=mn(r,o),m=Tn(c,a);if(ks.copy(n).invert(),t.boundsTree)return Et(r,s,co),co.matrix.copy(ks),co.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:v=>co.intersectsBox(v),intersectsTriangle:v=>{v.a.applyMatrix4(n),v.b.applyMatrix4(n),v.c.applyMatrix4(n),v.needsUpdate=!0;for(let x=_,b=m+_;x<b;x++)if(Rt(qr,3*e.resolveTriangleIndex(x),f,d),qr.needsUpdate=!0,v.intersectsTriangle(qr))return!0;return!1}});{const p=Ki(t);for(let v=_,x=m+_;v<x;v++){const b=e.resolveTriangleIndex(v);Rt(Wr,3*b,f,d),Wr.a.applyMatrix4(ks),Wr.b.applyMatrix4(ks),Wr.c.applyMatrix4(ks),Wr.needsUpdate=!0;for(let y=0,T=p*3;y<T;y+=3)if(Rt(qr,y,h,g),qr.needsUpdate=!0,Wr.intersectsTriangle(qr))return!0}}}else{const u=r+8,f=o[r+6];return Et(u,s,oo),!!(i.intersectsBox(oo)&&xu(u,e,t,n,i)||(Et(f,s,oo),i.intersectsBox(oo)&&xu(f,e,t,n,i)))}}const lo=new Ne,Fc=new Qt,zs=new Qt,XM=new L,YM=new L,KM=new L,JM=new L;function $M(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Fc.set(e.boundingBox.min,e.boundingBox.max,t),Fc.needsUpdate=!0;const o=r.geometry,c=o.attributes.position,l=o.index,u=e.attributes.position,f=e.index,d=Rn.getPrimitive(),h=Rn.getPrimitive();let g=XM,_=YM,m=null,p=null;i&&(m=KM,p=JM);let v=1/0,x=null,b=null;return lo.copy(t).invert(),zs.matrix.copy(lo),r.shapecast({boundsTraverseOrder:y=>Fc.distanceToBox(y),intersectsBounds:(y,T,E)=>E<v&&E<a?(T&&(zs.min.copy(y.min),zs.max.copy(y.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(y,T)=>{if(e.boundsTree){const E=e.boundsTree;return E.shapecast({boundsTraverseOrder:A=>zs.distanceToBox(A),intersectsBounds:(A,M,S)=>S<v&&S<a,intersectsRange:(A,M)=>{for(let S=A,w=A+M;S<w;S++){const R=E.resolveTriangleIndex(S);Rt(h,3*R,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let D=y,I=y+T;D<I;D++){const F=r.resolveTriangleIndex(D);Rt(d,3*F,l,c),d.needsUpdate=!0;const O=d.distanceToTriangle(h,g,m);if(O<v&&(_.copy(g),p&&p.copy(m),v=O,x=D,b=S),O<s)return!0}}}})}else{const E=Ki(e);for(let A=0,M=E;A<M;A++){Rt(h,3*A,f,u),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let S=y,w=y+T;S<w;S++){const R=r.resolveTriangleIndex(S);Rt(d,3*R,l,c),d.needsUpdate=!0;const D=d.distanceToTriangle(h,g,m);if(D<v&&(_.copy(g),p&&p.copy(m),v=D,x=S,b=A),D<s)return!0}}}}}),Rn.releasePrimitive(d),Rn.releasePrimitive(h),v===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=v,n.faceIndex=x,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(lo),_.applyMatrix4(lo),i.distance=_.sub(i.point).length(),i.faceIndex=b),n)}function ZM(){return typeof SharedArrayBuffer<"u"}const ta=new _t.constructor,Co=new _t.constructor,Bi=new Qu(()=>new it),jr=new it,Xr=new it,Oc=new it,Bc=new it;let kc=!1;function QM(r,e,t,n){if(kc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");kc=!0;const i=r._roots,s=e._roots;let a,o=0,c=0;const l=new Ne().copy(t).invert();for(let u=0,f=i.length;u<f;u++){ta.setBuffer(i[u]),c=0;const d=Bi.getPrimitive();Et(0,ta.float32Array,d),d.applyMatrix4(l);for(let h=0,g=s.length;h<g&&(Co.setBuffer(s[h]),a=Bn(0,0,t,l,n,o,c,0,0,d),Co.clearBuffer(),c+=s[h].length,!a);h++);if(Bi.releasePrimitive(d),ta.clearBuffer(),o+=i[u].length,a)break}return kc=!1,a}function Bn(r,e,t,n,i,s=0,a=0,o=0,c=0,l=null,u=!1){let f,d;u?(f=Co,d=ta):(f=ta,d=Co);const h=f.float32Array,g=f.uint32Array,_=f.uint16Array,m=d.float32Array,p=d.uint32Array,v=d.uint16Array,x=r*2,b=e*2,y=an(x,_),T=an(b,v);let E=!1;if(T&&y)u?E=i(mn(e,p),Tn(e*2,v),mn(r,g),Tn(r*2,_),c,a+e,o,s+r):E=i(mn(r,g),Tn(r*2,_),mn(e,p),Tn(e*2,v),o,s+r,c,a+e);else if(T){const A=Bi.getPrimitive();Et(e,m,A),A.applyMatrix4(t);const M=wn(r),S=An(r,g);Et(M,h,jr),Et(S,h,Xr);const w=A.intersectsBox(jr),R=A.intersectsBox(Xr);E=w&&Bn(e,M,n,t,i,a,s,c,o+1,A,!u)||R&&Bn(e,S,n,t,i,a,s,c,o+1,A,!u),Bi.releasePrimitive(A)}else{const A=wn(e),M=An(e,p);Et(A,m,Oc),Et(M,m,Bc);const S=l.intersectsBox(Oc),w=l.intersectsBox(Bc);if(S&&w)E=Bn(r,A,t,n,i,s,a,o,c+1,l,u)||Bn(r,M,t,n,i,s,a,o,c+1,l,u);else if(S)if(y)E=Bn(r,A,t,n,i,s,a,o,c+1,l,u);else{const R=Bi.getPrimitive();R.copy(Oc).applyMatrix4(t);const D=wn(r),I=An(r,g);Et(D,h,jr),Et(I,h,Xr);const F=R.intersectsBox(jr),O=R.intersectsBox(Xr);E=F&&Bn(A,D,n,t,i,a,s,c,o+1,R,!u)||O&&Bn(A,I,n,t,i,a,s,c,o+1,R,!u),Bi.releasePrimitive(R)}else if(w)if(y)E=Bn(r,M,t,n,i,s,a,o,c+1,l,u);else{const R=Bi.getPrimitive();R.copy(Bc).applyMatrix4(t);const D=wn(r),I=An(r,g);Et(D,h,jr),Et(I,h,Xr);const F=R.intersectsBox(jr),O=R.intersectsBox(Xr);E=F&&Bn(M,D,n,t,i,a,s,c,o+1,R,!u)||O&&Bn(M,I,n,t,i,a,s,c,o+1,R,!u),Bi.releasePrimitive(R)}}return E}const uo=new Qt,$d=new it,eS={strategy:Ip,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class ef{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:i.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:i,index:a?a.array:null,indirectBuffer:s},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:a}=e,o=new ef(t,{...n,[Lc]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new Bt(e.index,1,!1);t.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...eS,[Lc]:!1},t),t.useSharedArrayBuffer&&!ZM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Lc]||(mM(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new it))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?VM:CM)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,u=s[l+15]===Oo;if(u){const f=i[o+6],d=s[l+14];e(c,u,new Float32Array(n,o*4,6),f,d)}else{const f=o+ea/4,d=i[o+6],h=i[o+7];e(c,u,new Float32Array(n,o*4,6),h)||(a(f,c+1),a(d,c+1))}}}raycast(e,t=Ln,n=0,i=1/0){const s=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),u=a.groups,f=c?t.side:t,d=this.indirect?GM:DM;for(let h=0,g=s.length;h<g;h++){const _=l?t[u[h].materialIndex].side:f,m=o.length;if(d(this,h,_,e,o,n,i),l){const p=u[h].materialIndex;for(let v=m,x=o.length;v<x;v++)o[v].face.materialIndex=p}}return o}raycastFirst(e,t=Ln,n=0,i=1/0){const s=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const u=a.groups,f=o?t.side:t,d=this.indirect?qM:NM;for(let h=0,g=s.length;h<g;h++){const _=c?t[u[h].materialIndex].side:f,m=d(this,h,_,e,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=u[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?jM:FM;for(let a=0,o=i.length;a<o&&(n=s(this,a,e,t),!n);a++);return n}shapecast(e){const t=Rn.getPrimitive(),n=this.indirect?IM:RM;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const f=a;a=(d,h,g,_,m)=>f(d,h,g,_,m)?!0:n(d,h,this,o,g,_,t)}else a||(o?a=(f,d,h,g)=>n(f,d,this,o,h,g,t):a=(f,d,h)=>h);let c=!1,l=0;const u=this._roots;for(let f=0,d=u.length;f<d;f++){const h=u[f];if(c=yM(this,f,s,a,i,l),c)break;l+=h.byteLength}return Rn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const a=Rn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Rt(a,_*3,o,c)}:g=>{Rt(a,g*3,o,c)},u=Rn.getPrimitive(),f=e.geometry.index,d=e.geometry.attributes.position,h=e.indirect?g=>{const _=e.resolveTriangleIndex(g);Rt(u,_*3,f,d)}:g=>{Rt(u,g*3,f,d)};if(s){const g=(_,m,p,v,x,b,y,T)=>{for(let E=p,A=p+v;E<A;E++){h(E),u.a.applyMatrix4(t),u.b.applyMatrix4(t),u.c.applyMatrix4(t),u.needsUpdate=!0;for(let M=_,S=_+m;M<S;M++)if(l(M),a.needsUpdate=!0,s(a,u,M,E,x,b,y,T))return!0}return!1};if(i){const _=i;i=function(m,p,v,x,b,y,T,E){return _(m,p,v,x,b,y,T,E)?!0:g(m,p,v,x,b,y,T,E)}}else i=g}return QM(this,e,t,i)}intersectsBox(e,t){return uo.set(e.min,e.max,t),uo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>uo.intersectsBox(n),intersectsTriangle:n=>uo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,a=1/0){return(this.indirect?$M:HM)(this,e,t,n,i,s,a)}closestPointToPoint(e,t={},n=0,i=1/0){return MM(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Et(0,new Float32Array(n),$d),e.union($d)}),e}}const ri=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class tS{constructor(e){const n=e.filter(i=>i.id!=="COL_floor").map(i=>new br(...i.size).applyMatrix4(new Ne().makeRotationY(i.rotationY||0)).translate(...i.center));this.geometry=gy(n),n.forEach(i=>i.dispose()),this.bvh=new ef(this.geometry),this.radius=.25,this.velocity=new L,this.segment=new oi,this.bounds=new it,this.onTriangle=new L,this.onCapsule=new L,this.normal=new L,this.contacts=0,this.speed=ri.speed,this.correction=new L,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:i=>i.intersectsBox(this.bounds),intersectsTriangle:i=>{if(i.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const s=i.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(s>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&i.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-s+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const i=Math.max(1,Math.ceil(n/.008333333333333333)),s=n/i;for(let a=0;a<i;a++)this.step(e,t,s)}}const vu=.36;function Zd(r,e){const t=r[0]-e.center[0],n=r[1]-e.center[2],i=e.rotationY||0,s=Math.cos(i),a=Math.sin(i);return[s*t-a*n,a*t+s*n]}function Qd(r,e,t,n=vu){const i=Zd(r,t),s=Zd(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const u=s[l]-i[l];if(Math.abs(u)<1e-10){if(Math.abs(i[l])>=a[l])return!1;continue}let f=(-a[l]-i[l])/u,d=(a[l]-i[l])/u;if(f>d&&([f,d]=[d,f]),o=Math.max(o,f),c=Math.min(c,d),o>=c)return!1}return c>0&&o<1}function nS(r,e,t=.27){if(e.shape==="axial_gallery"){const[n,i]=r,s=n>=-8+t&&n<=8-t&&i>=-11&&i<=11-t,a=n>=-2.6+t&&n<=2.6-t&&i>=-22+t&&i<=-11;return s||a}return Math.abs(r[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(r[0])+.5*Math.abs(r[1])<=e.apothem-t}function Bp(r,e,t){const n=[r[0],r[2]],i=[e[0],e[2]],s=t.colliders.filter(d=>d.id!=="COL_floor"),a=(d,h)=>!s.some(g=>Qd(d,h,g,.27));if(a(n,i))return[[...e]];const o=[n,i];for(const d of s){const h=Math.cos(d.rotationY||0),g=Math.sin(d.rotationY||0);for(const _ of[-1,1])for(const m of[-1,1]){const p=_*(d.size[0]/2+vu),v=m*(d.size[2]/2+vu),x=[d.center[0]+h*p+g*v,d.center[2]-g*p+h*v];nS(x,t.layout)&&!s.some(b=>Qd(x,x,b,.27))&&o.push(x)}}const c=o.map(()=>1/0),l=o.map(()=>-1),u=new Set;for(c[0]=0;u.size<o.length;){let d=-1;for(let h=0;h<o.length;h++)!u.has(h)&&(d<0||c[h]<c[d])&&(d=h);if(d<0||!Number.isFinite(c[d]))return[];if(d===1)break;u.add(d);for(let h=0;h<o.length;h++){if(u.has(h)||!a(o[d],o[h]))continue;const g=c[d]+Math.hypot(o[d][0]-o[h][0],o[d][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=d)}}const f=[];for(let d=1;d!==0;d=l[d]){if(d<0)return[];f.unshift([o[d][0],e[1],o[d][1]])}return f}class iS{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(i=>i.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const i of this.parts)i.mesh.position.x=i.closedX+i.sign*i.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class hr extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;const n=this,i=t.color!==void 0?new Oe(t.color):new Oe(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||hr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Qn,f=new L,d=new L,h=new L,g=new Ne,_=new L(0,0,-1),m=new tt,p=new L,v=new L,x=new tt,b=new Ne,y=this.camera,T=new ji(s,a,{samples:l,type:bs}),E=new bn({name:c.name!==void 0?c.name:"unspecified",uniforms:cp.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});E.uniforms.tDiffuse.value=T.texture,E.uniforms.color.value=i,E.uniforms.textureMatrix.value=b,this.material=E,this.onBeforeRender=function(A,M,S){if(d.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(S.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,h),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(S.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(h),v.subVectors(d,_),v.reflect(f).negate(),v.add(d),y.position.copy(p),y.up.set(0,1,0),y.up.applyMatrix4(g),y.up.reflect(f),y.lookAt(v),y.far=S.far,y.updateMatrixWorld(),y.projectionMatrix.copy(S.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(y.projectionMatrix),b.multiply(y.matrixWorldInverse),b.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(f,d),u.applyMatrix4(y.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);const R=y.projectionMatrix;x.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],x.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],x.z=-1,x.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(x)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-o,R.elements[14]=m.w,n.visible=!1;const D=A.getRenderTarget(),I=A.xr.enabled,F=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(T),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(M,y),A.xr.enabled=I,A.shadowMap.autoUpdate=F,A.setRenderTarget(D);const O=S.viewport;O!==void 0&&A.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return T},this.dispose=function(){T.dispose(),n.material.dispose()}}}hr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function rS(r,e,t){const n={...hr.ReflectorShader,vertexShader:hr.ReflectorShader.vertexShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vUv = textureMatrix * vec4( position, 1.0 );",`vUv = textureMatrix * vec4( position, 1.0 );
vFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;`),fragmentShader:hr.ReflectorShader.fragmentShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vec4 base = texture2DProj( tDiffuse, vUv );",`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},i=new hr(new _r(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});i.name="R11 polished marble floor reflection",i.rotation.x=-Math.PI/2,i.position.set(0,.016,-5.5),i.material.transparent=!0,i.material.depthWrite=!1,i.renderOrder=1,r.add(i);const s=[],a=[],o={position:new L(1/0,1/0,1/0),quaternion:new Un,time:-1/0},c=i.onBeforeRender;i.onBeforeRender=function(u,f,d,...h){const g=performance.now();if(!(o.position.distanceToSquared(d.position)>1e-10||1-Math.abs(o.quaternion.dot(d.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(d.position),o.quaternion.copy(d.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,u,f,d,...h)}finally{a.forEach((p,v)=>p.visible=m[v])}},t.traverse(u=>{if(!u.isMesh)return;const f=Array.isArray(u.material)?u.material:[u.material];f.some(d=>d.name.toLowerCase().includes("glass"))&&a.push(u);for(const d of f){if(d.name.includes("hologram data curtain")){const h=new bn({uniforms:{pattern:{value:d.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:sn,blending:rs,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});u.material=h,u.renderOrder=3,s.push(h)}d.name.includes("cyan edge light")&&(d.color.set(358655),d.emissive.set(358655),d.emissiveIntensity=2)}});let l=0;return{reflector:i,update(u,f){if(!f){l+=u*.026;for(const d of s)d.uniforms.phase.value=l}}}}function sS(r,e,t){return r==="walk"&&(e??!t)}function aS(r){let e=null;return()=>e||(e=Promise.resolve().then(r).finally(()=>{e=null}),e)}function oS(r,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(r.rotation.order="YXZ",r.rotation.y-=e*n,r.rotation.x=In.clamp(r.rotation.x-t*n,-1.15,1.15),r.rotation.z=0,!0)}function cS(r,e){if(!Number.isFinite(r)||!Number.isFinite(e)||e<=0)return 0;const t=In.clamp(r/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function lS(r,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return r?r.id!==void 0&&r.id!==e.pointerId?null:{point:t,dx:t.x-r.x,dy:t.y-r.y}:{point:t,dx:0,dy:0}}function uS(r,e,t,n=!1){const i=Number.isFinite(e.timeStamp)?e.timeStamp:t,s={x:e.clientX,y:e.clientY,stamp:i},a={point:s,dx:0,dy:0};if((r==null?void 0:r.stamp)>i)return{...a,point:r};if(t-i>150)return s.recovery="fresh",a;if(!r)return a;const o=s.x-r.x,c=s.y-r.y;if(r.recovery){const l=Number.isFinite(e.movementX)&&Number.isFinite(e.movementY),u=Math.max(32,.5*Math.max(Math.hypot(o,c),Math.hypot(e.movementX,e.movementY))),f=!n&&l&&Math.hypot(o-e.movementX,c-e.movementY)>u;if(f&&(s.recovery="align"),r.recovery==="fresh"||f)return a}return{point:s,dx:n?e.movementX:o,dy:n?e.movementY:c}}function kp(r,e){(e==null?void 0:e.id)!==void 0&&r.hasPointerCapture(e.id)&&r.releasePointerCapture(e.id)}function fS(r,e){return(r==null?void 0:r.id)!==void 0&&r.id===e.pointerId}function dS(r=7){let e=null,t=!1;return{down(n){n.isPrimary!==!1&&(e={id:n.pointerId,x:n.clientX,y:n.clientY,active:!0},t=!1)},move(n){!(e!=null&&e.active)||e.id!==n.pointerId||Math.hypot(n.clientX-e.x,n.clientY-e.y)>r&&(t=!0)},end(n,i=!1){!(e!=null&&e.active)||e.id!==n.pointerId||(e.active=!1,i&&(t=!0))},click(n=!1){const i=t&&!n;return e=null,t=!1,i}}}function zp(r){const e=new L(...r.position);let t,n;if(r.side==="front")t=e.clone().add(new L(0,0,r.distance||3.15)),n=new L(1,0,0);else{const c=r.side==="left"?-1:1;t=e.clone().add(new L(-c*3.15,0,0)),n=new L(0,0,c)}t.y=1.65;const i=r.lateral||1.18,s=t.clone().addScaledVector(n,-i),a=t.clone().addScaledVector(n,i),o=e.clone();return o.y=r.targetHeight??.95,{left:s,right:a,front:t,target:o}}class hS{constructor(e,{reduced:t=!1}={}){this.views=zp(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const i=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(i,this.elapsed+Math.max(0,t));const s=In.smoothstep(this.elapsed/i,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],s),e.lookAt(this.views.target),this.elapsed>=i&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class pS{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const i=this.spec;if(this.phase==="opening")e.position.fromArray(i.outside),e.lookAt(new L(...i.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(i.walkDuration,this.elapsed+Math.max(0,n));const s=In.smoothstep(this.elapsed/i.walkDuration,0,1);e.position.lerpVectors(new L(...i.outside),new L(...i.inside),s),e.lookAt(new L(...i.lookAt)),this.elapsed>=i.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(i.inside),e.lookAt(new L(...i.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var Hp=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),x=0;x<p.length;++x){var b=p.charCodeAt(x);v[x]=b>96?b-97:b>64?b-39:b+4}for(var y=0,x=0;x<p.length;++x)v[y++]=v[x]<60?n[v[x]]:(v[x]-60)*64+v[++x];return v.buffer.slice(0,y)}function c(p,v,x,b,y,T,E){var A=p.exports.sbrk,M=b+3&-4,S=A(M*y),w=A(T.length),R=new Uint8Array(p.exports.memory.buffer);R.set(T,w);var D=v(S,b,y,w,T.length);if(D==0&&E&&E(S,M,y),x.set(R.subarray(S,S+b*y)),A(S-A(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},f=[],d=0;function h(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(x){var b=x.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(x),y=f.length;y<p;++y)f[y]=h(b);for(var y=p;y<f.length;++y)f[y].object.postMessage({});f.length=p,URL.revokeObjectURL(b)}function _(p,v,x,b,y){for(var T=f[0],E=1;E<f.length;++E)f[E].pending<T.pending&&(T=f[E]);return new Promise(function(A,M){var S=new Uint8Array(x),w=++d;T.pending+=p,T.requests[w]={resolve:A,reject:M},T.object.postMessage({id:w,count:p,size:v,source:S,mode:b,filter:y},[S.buffer])})}function m(p){var v=p.data;if(!v.id)return self.close();self.ready.then(function(x){try{var b=new Uint8Array(v.count*v.size);c(x,x.exports[v.mode],b,v.count,v.size,v.source,x.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(y){self.postMessage({id:v.id,count:v.count,action:"reject",value:y})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,x,b,y){c(s,s.exports.meshopt_decodeVertexBuffer,p,v,x,b,s.exports[l[y]])},decodeIndexBuffer:function(p,v,x,b){c(s,s.exports.meshopt_decodeIndexBuffer,p,v,x,b)},decodeIndexSequence:function(p,v,x,b){c(s,s.exports.meshopt_decodeIndexSequence,p,v,x,b)},decodeGltfBuffer:function(p,v,x,b,y,T){c(s,s.exports[u[y]],p,v,x,b,s.exports[l[T]])},decodeGltfBufferAsync:function(p,v,x,b,y){return f.length>0?_(p,v,x,u[b],l[y]):a.then(function(){var T=new Uint8Array(p*v);return c(s,s.exports[u[b]],T,p,v,x,s.exports[l[y]]),T})}}})();const cr=.79,tn="/artifacts/",is=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,cr,6.6],modelDesktop:`${tn}phoenix-web-desktop.glb`,modelMobile:`${tn}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,cr,0],modelDesktop:`${tn}bronze-head-web-desktop.glb`,modelMobile:`${tn}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,cr,-6.6],modelDesktop:`${tn}cloud-mirror-web-desktop.glb`,modelMobile:`${tn}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,cr,6.6],modelDesktop:`${tn}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${tn}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,cr,0],modelDesktop:`${tn}longquan-figure-web-desktop.glb`,modelMobile:`${tn}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,cr,-6.6],modelDesktop:`${tn}pipa-figurine-web-desktop.glb`,modelMobile:`${tn}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,cr,-20.7],modelDesktop:`${tn}speechless-buddha-web-desktop.glb`,modelMobile:`${tn}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function mS(r,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);r.traverse(i=>{if(i.isMesh){i.userData.artifactId=e.artifactId;for(const s of Array.isArray(i.material)?i.material:[i.material]){s.roughness=e.roughness,s.metalness=e.metalness,s.envMapIntensity=.42;for(const a of Object.values(s))a!=null&&a.isTexture&&(a.magFilter=Kt,a.minFilter=zn,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function gS(r,e){const t=new En;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new En;n.rotation.y=e.rotationY,n.add(r),t.add(n),t.updateMatrixWorld(!0);const i=new it().setFromObject(n,!0),s=i.getSize(new L);if(i.isEmpty()||s.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/s.y,e.maxWidth/Math.max(s.x,s.z)),o=i.getCenter(new L);n.scale.setScalar(a),n.position.set(-o.x*a,-i.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new it().setFromObject(t,!0);let l=0,u=0;return t.traverse(f=>{var d;f.isMesh&&(f.userData.artifactId=e.artifactId,u++,l+=(((d=f.geometry.index)==null?void 0:d.count)??f.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new L),size:c.getSize(new L),triangleCount:l,meshCount:u}}async function bS({scene:r,renderer:e,manifest:t,onArtifact:n,mobile:i=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:s=new $u().setMeshoptDecoder(Hp)}){const o=[],c=[];return await Promise.all(is.map(async l=>{const u=i?l.modelMobile:l.modelDesktop;let f;try{const d=await s.loadAsync(u);mS(d.scene,l,e),f={...gS(d.scene,l),modelUrl:u},r.add(f.object),o.push(f)}catch(d){c.push({artifactId:l.artifactId,name:l.name,modelUrl:u,message:d.message});return}n==null||n(f)})),o.sort((l,u)=>is.indexOf(l.assignment)-is.indexOf(u.assignment)),{records:o,failures:c}}function _S(r){var i,s;const e=(s=(i=r==null?void 0:r.object)==null?void 0:i.children[0])==null?void 0:s.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}function xS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Yr={},zc,eh;function vS(){return eh||(eh=1,zc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),zc}var Hc={},Ui={},th;function xr(){if(th)return Ui;th=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ui.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Ui.getSymbolTotalCodewords=function(n){return e[n]},Ui.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Ui.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},Ui.isKanjiModeEnabled=function(){return typeof r<"u"},Ui.toSJIS=function(n){return r(n)},Ui}var Vc={},nh;function tf(){return nh||(nh=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Vc)),Vc}var Gc,ih;function yS(){if(ih)return Gc;ih=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Gc=r,Gc}var Wc,rh;function MS(){if(rh)return Wc;rh=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Wc=r,Wc}var qc={},sh;function SS(){return sh||(sh=1,(function(r){const e=xr().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*i-2))*2,o=[s-7];for(let c=1;c<i-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||i.push([s[o],s[c]]);return i}})(qc)),qc}var jc={},ah;function ES(){if(ah)return jc;ah=1;const r=xr().getSymbolSize,e=7;return jc.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},jc}var Xc={},oh;function TS(){return oh||(oh=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let a=0,o=0,c=0,l=null,u=null;for(let f=0;f<s;f++){o=c=0,l=u=null;for(let d=0;d<s;d++){let h=i.get(f,d);h===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=h,o=1),h=i.get(d,f),h===u?c++:(c>=5&&(a+=e.N1+(c-5)),u=h,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},r.getPenaltyN2=function(i){const s=i.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=i.get(o,c)+i.get(o,c+1)+i.get(o+1,c)+i.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},r.getPenaltyN3=function(i){const s=i.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let u=0;u<s;u++)o=o<<1&2047|i.get(l,u),u>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|i.get(u,l),u>=10&&(c===1488||c===93)&&a++}return a*e.N3},r.getPenaltyN4=function(i){let s=0;const a=i.data.length;for(let c=0;c<a;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(i,c,o))},r.getBestMask=function(i,s){const a=Object.keys(r.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),r.applyMask(l,i);const u=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),u<c&&(c=u,o=l)}return o}})(Xc)),Xc}var fo={},ch;function Vp(){if(ch)return fo;ch=1;const r=tf(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return fo.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},fo.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},fo}var Yc={},Hs={},lh;function wS(){if(lh)return Hs;lh=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Hs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Hs.exp=function(n){return r[n]},Hs.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},Hs}var uh;function AS(){return uh||(uh=1,(function(r){const e=wS();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<i.length;o++)s[a+o]^=e.mul(n[a],i[o]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const a=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Yc)),Yc}var Kc,fh;function RS(){if(fh)return Kc;fh=1;const r=AS();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Kc=e,Kc}var Jc={},$c={},Zc={},dh;function Gp(){return dh||(dh=1,Zc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Zc}var $n={},hh;function Wp(){if(hh)return $n;hh=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;$n.KANJI=new RegExp(t,"g"),$n.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),$n.BYTE=new RegExp(n,"g"),$n.NUMERIC=new RegExp(r,"g"),$n.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return $n.testKanji=function(c){return i.test(c)},$n.testNumeric=function(c){return s.test(c)},$n.testAlphanumeric=function(c){return a.test(c)},$n}var ph;function vr(){return ph||(ph=1,(function(r){const e=Gp(),t=Wp();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,a){if(r.isValid(s))return s;try{return n(s)}catch{return a}}})($c)),$c}var mh;function CS(){return mh||(mh=1,(function(r){const e=xr(),t=Vp(),n=tf(),i=vr(),s=Gp(),a=7973,o=e.getBCHDigit(a);function c(d,h,g){for(let _=1;_<=40;_++)if(h<=r.getCapacity(_,g,d))return _}function l(d,h){return i.getCharCountIndicator(d,h)+4}function u(d,h){let g=0;return d.forEach(function(_){const m=l(_.mode,h);g+=m+_.getBitsLength()}),g}function f(d,h){for(let g=1;g<=40;g++)if(u(d,g)<=r.getCapacity(g,h,i.MIXED))return g}r.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},r.getCapacity=function(h,g,_){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=i.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),v=(m-p)*8;if(_===i.MIXED)return v;const x=v-l(_,h);switch(_){case i.NUMERIC:return Math.floor(x/10*3);case i.ALPHANUMERIC:return Math.floor(x/11*2);case i.KANJI:return Math.floor(x/13);case i.BYTE:default:return Math.floor(x/8)}},r.getBestVersionForData=function(h,g){let _;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return f(h,m);if(h.length===0)return 1;_=h[0]}else _=h;return c(_.mode,_.getLength(),m)},r.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return h<<12|g}})(Jc)),Jc}var Qc={},gh;function PS(){if(gh)return Qc;gh=1;const r=xr(),e=1335,t=21522,n=r.getBCHDigit(e);return Qc.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(o<<10|c)^t},Qc}var el={},tl,bh;function LS(){if(bh)return tl;bh=1;const r=vr();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,a;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-i;o>0&&(s=this.data.substr(i),a=parseInt(s,10),n.put(a,o*3+1))},tl=e,tl}var nl,_h;function IS(){if(_h)return nl;_h=1;const r=vr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},nl=t,nl}var il,xh;function DS(){if(xh)return il;xh=1;const r=vr();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},il=e,il}var rl,vh;function US(){if(vh)return rl;vh=1;const r=vr(),e=xr();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},rl=t,rl}var sl={exports:{}},yh;function NS(){return yh||(yh=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,u,f,d,h,g,_,m;!o.empty();){c=o.pop(),l=c.value,f=c.cost,d=t[l]||{};for(u in d)d.hasOwnProperty(u)&&(h=d[u],g=f+h,_=a[u],m=typeof a[u]>"u",(m||_>g)&&(a[u]=g,o.push(u,g),s[u]=l))}if(typeof i<"u"&&typeof a[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(sl)),sl.exports}var Mh;function FS(){return Mh||(Mh=1,(function(r){const e=vr(),t=LS(),n=IS(),i=DS(),s=US(),a=Wp(),o=xr(),c=NS();function l(p){return unescape(encodeURIComponent(p)).length}function u(p,v,x){const b=[];let y;for(;(y=p.exec(x))!==null;)b.push({data:y[0],index:y.index,mode:v,length:y[0].length});return b}function f(p){const v=u(a.NUMERIC,e.NUMERIC,p),x=u(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,y;return o.isKanjiModeEnabled()?(b=u(a.BYTE,e.BYTE,p),y=u(a.KANJI,e.KANJI,p)):(b=u(a.BYTE_KANJI,e.BYTE,p),y=[]),v.concat(x,b,y).sort(function(E,A){return E.index-A.index}).map(function(E){return{data:E.data,mode:E.mode,length:E.length}})}function d(p,v){switch(v){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function h(p){return p.reduce(function(v,x){const b=v.length-1>=0?v[v.length-1]:null;return b&&b.mode===x.mode?(v[v.length-1].data+=x.data,v):(v.push(x),v)},[])}function g(p){const v=[];for(let x=0;x<p.length;x++){const b=p[x];switch(b.mode){case e.NUMERIC:v.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:v.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:v.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:v.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return v}function _(p,v){const x={},b={start:{}};let y=["start"];for(let T=0;T<p.length;T++){const E=p[T],A=[];for(let M=0;M<E.length;M++){const S=E[M],w=""+T+M;A.push(w),x[w]={node:S,lastCount:0},b[w]={};for(let R=0;R<y.length;R++){const D=y[R];x[D]&&x[D].node.mode===S.mode?(b[D][w]=d(x[D].lastCount+S.length,S.mode)-d(x[D].lastCount,S.mode),x[D].lastCount+=S.length):(x[D]&&(x[D].lastCount=S.length),b[D][w]=d(S.length,S.mode)+4+e.getCharCountIndicator(S.mode,v))}}y=A}for(let T=0;T<y.length;T++)b[y[T]].end=0;return{map:b,table:x}}function m(p,v){let x;const b=e.getBestModeForData(p);if(x=e.from(v,b),x!==e.BYTE&&x.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(b));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(v){return v.reduce(function(x,b){return typeof b=="string"?x.push(m(b,null)):b.data&&x.push(m(b.data,b.mode)),x},[])},r.fromString=function(v,x){const b=f(v,o.isKanjiModeEnabled()),y=g(b),T=_(y,x),E=c.find_path(T.map,"start","end"),A=[];for(let M=1;M<E.length-1;M++)A.push(T.table[E[M]].node);return r.fromArray(h(A))},r.rawSplit=function(v){return r.fromArray(f(v,o.isKanjiModeEnabled()))}})(el)),el}var Sh;function OS(){if(Sh)return Hc;Sh=1;const r=xr(),e=tf(),t=yS(),n=MS(),i=SS(),s=ES(),a=TS(),o=Vp(),c=RS(),l=CS(),u=PS(),f=vr(),d=FS();function h(T,E){const A=T.size,M=s.getPositions(E);for(let S=0;S<M.length;S++){const w=M[S][0],R=M[S][1];for(let D=-1;D<=7;D++)if(!(w+D<=-1||A<=w+D))for(let I=-1;I<=7;I++)R+I<=-1||A<=R+I||(D>=0&&D<=6&&(I===0||I===6)||I>=0&&I<=6&&(D===0||D===6)||D>=2&&D<=4&&I>=2&&I<=4?T.set(w+D,R+I,!0,!0):T.set(w+D,R+I,!1,!0))}}function g(T){const E=T.size;for(let A=8;A<E-8;A++){const M=A%2===0;T.set(A,6,M,!0),T.set(6,A,M,!0)}}function _(T,E){const A=i.getPositions(E);for(let M=0;M<A.length;M++){const S=A[M][0],w=A[M][1];for(let R=-2;R<=2;R++)for(let D=-2;D<=2;D++)R===-2||R===2||D===-2||D===2||R===0&&D===0?T.set(S+R,w+D,!0,!0):T.set(S+R,w+D,!1,!0)}}function m(T,E){const A=T.size,M=l.getEncodedBits(E);let S,w,R;for(let D=0;D<18;D++)S=Math.floor(D/3),w=D%3+A-8-3,R=(M>>D&1)===1,T.set(S,w,R,!0),T.set(w,S,R,!0)}function p(T,E,A){const M=T.size,S=u.getEncodedBits(E,A);let w,R;for(w=0;w<15;w++)R=(S>>w&1)===1,w<6?T.set(w,8,R,!0):w<8?T.set(w+1,8,R,!0):T.set(M-15+w,8,R,!0),w<8?T.set(8,M-w-1,R,!0):w<9?T.set(8,15-w-1+1,R,!0):T.set(8,15-w-1,R,!0);T.set(M-8,8,1,!0)}function v(T,E){const A=T.size;let M=-1,S=A-1,w=7,R=0;for(let D=A-1;D>0;D-=2)for(D===6&&D--;;){for(let I=0;I<2;I++)if(!T.isReserved(S,D-I)){let F=!1;R<E.length&&(F=(E[R]>>>w&1)===1),T.set(S,D-I,F),w--,w===-1&&(R++,w=7)}if(S+=M,S<0||A<=S){S-=M,M=-M;break}}}function x(T,E,A){const M=new t;A.forEach(function(I){M.put(I.mode.bit,4),M.put(I.getLength(),f.getCharCountIndicator(I.mode,T)),I.write(M)});const S=r.getSymbolTotalCodewords(T),w=o.getTotalCodewordsCount(T,E),R=(S-w)*8;for(M.getLengthInBits()+4<=R&&M.put(0,4);M.getLengthInBits()%8!==0;)M.putBit(0);const D=(R-M.getLengthInBits())/8;for(let I=0;I<D;I++)M.put(I%2?17:236,8);return b(M,T,E)}function b(T,E,A){const M=r.getSymbolTotalCodewords(E),S=o.getTotalCodewordsCount(E,A),w=M-S,R=o.getBlocksCount(E,A),D=M%R,I=R-D,F=Math.floor(M/R),O=Math.floor(w/R),V=O+1,H=F-O,Z=new c(H);let Q=0;const J=new Array(R),fe=new Array(R);let Ie=0;const Je=new Uint8Array(T.buffer);for(let Re=0;Re<R;Re++){const ge=Re<I?O:V;J[Re]=Je.slice(Q,Q+ge),fe[Re]=Z.encode(J[Re]),Q+=ge,Ie=Math.max(Ie,ge)}const Ve=new Uint8Array(M);let X=0,K,le;for(K=0;K<Ie;K++)for(le=0;le<R;le++)K<J[le].length&&(Ve[X++]=J[le][K]);for(K=0;K<H;K++)for(le=0;le<R;le++)Ve[X++]=fe[le][K];return Ve}function y(T,E,A,M){let S;if(Array.isArray(T))S=d.fromArray(T);else if(typeof T=="string"){let F=E;if(!F){const O=d.rawSplit(T);F=l.getBestVersionForData(O,A)}S=d.fromString(T,F||40)}else throw new Error("Invalid data");const w=l.getBestVersionForData(S,A);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!E)E=w;else if(E<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const R=x(E,A,S),D=r.getSymbolSize(E),I=new n(D);return h(I,E),g(I),_(I,E),p(I,A,0),E>=7&&m(I,E),v(I,R),isNaN(M)&&(M=a.getBestMask(I,p.bind(null,I,A))),a.applyMask(M,I),p(I,A,M),{modules:I,version:E,errorCorrectionLevel:A,maskPattern:M,segments:S}}return Hc.create=function(E,A){if(typeof E>"u"||E==="")throw new Error("No input text");let M=e.M,S,w;return typeof A<"u"&&(M=e.from(A.errorCorrectionLevel,e.M),S=l.from(A.version),w=a.from(A.maskPattern),A.toSJISFunc&&r.setToSJISFunction(A.toSJISFunc)),y(E,S,M,w)},Hc}var al={},ol={},Eh;function qp(){return Eh||(Eh=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const a=i.modules.size,o=i.modules.data,c=r.getScale(a,s),l=Math.floor((a+s.margin*2)*c),u=s.margin*c,f=[s.color.light,s.color.dark];for(let d=0;d<l;d++)for(let h=0;h<l;h++){let g=(d*l+h)*4,_=s.color.light;if(d>=u&&h>=u&&d<l-u&&h<l-u){const m=Math.floor((d-u)/c),p=Math.floor((h-u)/c);_=f[o[m*a+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(ol)),ol}var Th;function BS(){return Th||(Th=1,(function(r){const e=qp();function t(i,s,a){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const u=e.getImageWidth(s.modules.size,c),f=l.getContext("2d"),d=f.createImageData(u,u);return e.qrToImageData(d.data,s,c),t(f,l,u),f.putImageData(d,0,0),l},r.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=r.render(s,a,c),u=c.type||"image/png",f=c.rendererOpts||{};return l.toDataURL(u,f.quality)}})(al)),al}var cl={},wh;function kS(){if(wh)return cl;wh=1;const r=qp();function e(i,s){const a=i.a/255,o=s+'="'+i.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(i,s,a){let o=i+s;return typeof a<"u"&&(o+=" "+a),o}function n(i,s,a){let o="",c=0,l=!1,u=0;for(let f=0;f<i.length;f++){const d=Math.floor(f%s),h=Math.floor(f/s);!d&&!l&&(l=!0),i[f]?(u++,f>0&&d>0&&i[f-1]||(o+=l?t("M",d+a,.5+h+a):t("m",c,0),c=0,l=!1),d+1<s&&i[f+1]||(o+=t("h",u),u=0)):c++}return o}return cl.render=function(s,a,o){const c=r.getOptions(a),l=s.modules.size,u=s.modules.data,f=l+c.margin*2,d=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+f+"v"+f+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(u,l,c.margin)+'"/>',g='viewBox="0 0 '+f+" "+f+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+d+h+`</svg>
`;return typeof o=="function"&&o(null,m),m},cl}var Ah;function zS(){if(Ah)return Yr;Ah=1;const r=vS(),e=OS(),t=BS(),n=kS();function i(s,a,o,c,l){const u=[].slice.call(arguments,1),f=u.length,d=typeof u[f-1]=="function";if(!d&&!r())throw new Error("Callback required as last argument");if(d){if(f<2)throw new Error("Too few arguments provided");f===2?(l=o,o=a,a=c=void 0):f===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(f<1)throw new Error("Too few arguments provided");return f===1?(o=a,a=c=void 0):f===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(h,g){try{const _=e.create(o,c);h(s(_,a,c))}catch(_){g(_)}})}try{const h=e.create(o,c);l(null,s(h,a,c))}catch(h){l(h)}}return Yr.create=e.create,Yr.toCanvas=i.bind(null,t.render),Yr.toDataURL=i.bind(null,t.renderToDataURL),Yr.toString=i.bind(null,function(s,a,o){return n.render(s,o)}),Yr}var HS=zS();const VS=xS(HS),Po={"phoenix-ewer":"凤首昂起，卷尾成柄。","bronze-head":"轮廓在光中显现，锈色层层铺开。","cloud-mirror":"连弧相接，细纹在铜色中回旋。","liquan-bodhisattva":"沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。","longquan-figure":"青釉如山色，露胎似暖土。","pipa-figurine":"陶色留住衣褶，也留住抱琴的姿态。","speechless-buddha":"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。"};function GS(r,e=globalThis.location){const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.username="",t.password="",t.searchParams.set("artifact",r),t.href}function WS(r){return["localhost","127.0.0.1","[::1]"].includes(new URL(r).hostname)}function qS(r,e=8){const t=VS.create(r,{errorCorrectionLevel:"M"}),n=t.modules.size,i=4,s=(n+i*2)*e,a=new Uint8ClampedArray(s*s*4).fill(255);for(let o=0;o<s;o++)for(let c=0;c<s;c++){const l=Math.floor(c/e)-i,u=Math.floor(o/e)-i;if(l<0||u<0||l>=n||u>=n||!t.modules.get(u,l))continue;const f=(o*s+c)*4;a[f]=a[f+1]=a[f+2]=0}return{size:s,pixels:a,quiet:i,modules:n,scale:e}}function jS(r){const[e,,t]=r.position;if(r.cabinetId==="story")return{position:[e,.705,t+.935],rotationY:0,rotationX:-65*Math.PI/180};const n=e<0?1:-1;return{position:[e+n*.935,.705,t],rotationY:n*Math.PI/2,rotationX:-65*Math.PI/180}}function XS({now:r=()=>performance.now(),schedule:e=setTimeout,unschedule:t=clearTimeout}={}){let n=0,i=0,s=null,a=0,o=!1;function c(){a++,t(s),s=null,o=!0}return{start(l){c(),n=r(),i=l,o=!1},ready(l){if(o)return;o=!0;const u=a;s=e(()=>{s=null,u===a&&l()},Math.max(0,i-(r()-n)))},cancel:c}}function YS({captureFrame:r,isReduced:e}){const t=document.createElement("section");t.className="artifact-journey",t.innerHTML='<canvas class="journey-scene" aria-hidden="true"></canvas><div class="journey-shade" aria-hidden="true"></div><div class="journey-threshold" aria-hidden="true"></div><div class="journey-copy"><span class="journey-kicker">一器 · 一世界</span><h2></h2><p class="journey-line"></p><div class="journey-trace" aria-hidden="true"><i></i></div><p class="journey-note" role="status">光里的细节，正慢慢靠近。</p><div class="journey-actions" hidden><button type="button">重新载入</button><a target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>';const n=t.querySelector("canvas"),i=t.querySelector(".journey-note"),s=t.querySelector(".journey-actions"),a=XS();let o=0,c=null,l=!1;function u(){l=!1,a.cancel(),cancelAnimationFrame(o),clearTimeout(c),n.width=n.height=1,t.hidden=!0}function f(d,h={x:.5,y:.5}){u(),l=!0,t.hidden=!1;const g=e();t.classList.toggle("journey-reduced",g),t.dataset.phase="start",t.style.setProperty("--focus-x",`${Math.max(.1,Math.min(.9,h.x))*100}%`),t.style.setProperty("--focus-y",`${Math.max(.1,Math.min(.9,h.y))*100}%`),t.querySelector("h2").textContent=d.name,t.querySelector(".journey-line").textContent=Po[d.artifactId]||"循着器物的轮廓，走进它的故事。",i.textContent="光里的细节，正慢慢靠近。",s.hidden=!0;try{const _=r==null?void 0:r();if(_!=null&&_.width&&(_!=null&&_.height)){const m=Math.min(1,1600/_.width);n.width=Math.round(_.width*m),n.height=Math.round(_.height*m),n.getContext("2d").drawImage(_,0,0,n.width,n.height)}}catch{n.width=n.height=1}a.start(g?0:1150),o=requestAnimationFrame(()=>{l&&(t.dataset.phase="approach")})}return{element:t,retryButton:s.querySelector("button"),standalone:s.querySelector("a"),start:f,cancel:u,reveal(d,h){a.ready(()=>{l&&(t.dataset.phase="reveal",d(),c=setTimeout(()=>{l&&(t.hidden=!0,n.width=n.height=1,h())},e()?120:950))})},fail(d){a.cancel(),clearTimeout(c),cancelAnimationFrame(o),t.hidden=!1,t.dataset.phase="error",i.textContent=d,s.hidden=!1}}}const Rh="museum-artifact-v1";function KS({canvas:r,camera:e,scene:t,assignments:n,colliders:i=[],getMode:s,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:u=()=>{},captureFrame:f,detailUrl:d=new URL("/",`${location.protocol}//${location.hostname}:5189`).href}){const h=document.createElement("button");h.id="artifactHint",h.className="artifact-entry",h.hidden=!0;const g=document.createElement("dialog");g.id="artifactDetail",g.className="artifact-detail",g.setAttribute("aria-label","文物详情"),g.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div>',document.body.append(h,g);const _=g.querySelector(".artifact-detail-host"),m=()=>{var te;return((te=document.querySelector("#motion"))==null?void 0:te.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},p=YS({captureFrame:f,isReduced:m});g.append(p.element);const v=g.querySelector("#closeArtifactDetail"),x=p.retryButton,b=p.standalone,y=new Ku,T=new Ue,E=new L,A=new L,M=new Yi,S=new L,w=new AbortController,R=new Map,D=i.map(te=>({id:te.id,box:new it().setFromCenterAndSize(new L(...te.center),new L(...te.size))}));let I=null,F=null,O=null,V=null,H=!1,Z={x:.5,y:.5},Q=null,J=!1;function fe(te){let N=R.get(te.artifactId);if(N)return N;const ke=t.getObjectByName(`HallArtifact_${te.artifactId}`);if(!ke)return null;ke.updateWorldMatrix(!0,!0);const Me=new it().setFromObject(ke);return N={assignment:te,object:ke,bounds:Me,center:Me.getCenter(new L)},R.set(te.artifactId,N),N}function Ie(te,N=te.center){const ke=e.position.distanceTo(N);return M.set(e.position,A.subVectors(N,e.position).normalize()),!D.some(({id:Me,box:me})=>(Me.includes("exhibit")||Me.includes("Far gallery"))&&me.containsPoint(te.center)?!1:M.intersectBox(me,S)&&e.position.distanceTo(S)<ke-.05)}function Je(){return!g.open&&a()&&!o()&&["walk","paused"].includes(s())}function Ve(te,N=!1){if(e.position.distanceTo(te.center)>4.8||(E.copy(te.center).project(e),E.z<-1||E.z>1||Math.abs(E.x)>.92||Math.abs(E.y)>.82))return!1;const ke=Math.hypot(E.x*r.clientWidth/2,E.y*r.clientHeight/2);return(N||ke<175)&&Ie(te)}function X(){I=null,h.hidden=!0,r.dataset.artifactAim=""}function K({selectedExhibit:te=null,observationPhase:N=r.dataset.observationPhase}={}){if(!Je())return X(),null;const ke=(te==null?void 0:te.id)??te,Me=N==="complete"&&s()==="paused";let me=null;if(Me){const ae=n.find(be=>String(be.cabinetId)===String(ke)),et=ae&&fe(ae);et&&Ve(et,!0)&&(me=et)}if(!me){let ae=1/0;for(const et of n){const be=fe(et);if(!be||!Ve(be))continue;const We=e.position.distanceToSquared(be.center);We<ae&&(ae=We,me=be)}}if(I=me||null,h.hidden=!I,r.dataset.artifactAim=(I==null?void 0:I.assignment.artifactId)||"",I){const{name:ae,nickname:et}=I.assignment;h.textContent=`${ae}${et?` · ${et}`:""}　查看详情 ↗`,h.setAttribute("aria-label",`查看${ae}详情`),h.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(I==null?void 0:I.assignment.artifactId)||null}function le(te){!g.open||!F||(clearTimeout(V),H=!1,g.dataset.phase="error",v.hidden=!1,p.fail(te))}function Re(){if(!g.open||!F)return;clearTimeout(V),H=!1,v.hidden=!1,g.dataset.phase="approach",p.start(F,Z);const te=new URL(d,location.href);te.searchParams.set("artifact",F.artifactId),te.searchParams.set("museumEmbed","1"),te.searchParams.set("parentOrigin",location.origin),te.searchParams.set("returnUrl",location.href);const N=new URL(te);N.searchParams.delete("museumEmbed"),N.searchParams.delete("parentOrigin"),b.href=N.href,_.replaceChildren(),O=document.createElement("iframe"),O.title=`${F.name}互动详情`,O.allow="autoplay";const ke=O;O.addEventListener("error",()=>{O===ke&&le("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),O.src=te.href,_.append(O),V=setTimeout(()=>le("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function ge(te=I==null?void 0:I.assignment.artifactId,{focusPoint:N}={}){var me;const ke=n.find(ae=>ae.artifactId===te);if(!ke||g.open)return!1;F=ke;const Me=N||((me=fe(ke))==null?void 0:me.center);return Me?(E.copy(Me).project(e),Z={x:(E.x+1)/2,y:(1-E.y)/2}):Z={x:.5,y:.5},X(),l(ke),g.setAttribute("aria-label",`${ke.name}详情`),g.showModal(),document.body.classList.add("artifact-detail-open"),Re(),v.focus({preventScroll:!0}),!0}function Ge(){return g.open?(clearTimeout(V),p.cancel(),_.replaceChildren(),O=null,H=!1,g.close(),document.body.classList.remove("artifact-detail-open"),u(F),F=null,r.focus({preventScroll:!0}),!0):!1}return h.addEventListener("click",()=>{I&&Je()&&Ve(I,!0)&&ge()}),v.addEventListener("click",Ge),x.addEventListener("click",Re),g.addEventListener("cancel",te=>{te.preventDefault(),Ge()}),r.addEventListener("pointerdown",te=>{Q||(Q={id:te.pointerId,x:te.clientX,y:te.clientY},J=!1)},{signal:w.signal}),r.addEventListener("pointermove",te=>{(Q==null?void 0:Q.id)===te.pointerId&&Math.hypot(te.clientX-Q.x,te.clientY-Q.y)>7&&(J=!0)},{signal:w.signal}),r.addEventListener("pointerup",te=>{(Q==null?void 0:Q.id)===te.pointerId&&(Q=null)},{signal:w.signal}),r.addEventListener("pointercancel",te=>{(Q==null?void 0:Q.id)===te.pointerId&&(Q=null,J=!0)},{signal:w.signal}),r.addEventListener("lostpointercapture",te=>{(Q==null?void 0:Q.id)===te.pointerId&&(Q=null,J=!0)},{signal:w.signal}),r.addEventListener("click",te=>{if(J||!Je())return;if(document.pointerLockElement===r)T.set(0,0);else{const ae=r.getBoundingClientRect();T.set((te.clientX-ae.left)/ae.width*2-1,-(te.clientY-ae.top)/ae.height*2+1)}if(y.setFromCamera(T,e),y.intersectObjects(c(),!1).some(ae=>ae.distance<12))return;const N=n.map(fe).filter(Boolean),Me=y.intersectObjects(N.map(ae=>ae.object),!0)[0];if(!Me||Me.distance>4.8)return;const me=N.find(ae=>ae.assignment.artifactId===Me.object.userData.artifactId);me&&Ie(me,Me.point)&&ge(me.assignment.artifactId)&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("keydown",te=>{var N;if(te.key==="Escape"&&g.open){te.preventDefault(),te.stopImmediatePropagation(),Ge();return}te.code!=="KeyE"||te.repeat||!I||!Je()||/INPUT|TEXTAREA|SELECT/.test((N=document.activeElement)==null?void 0:N.tagName)||Ve(I,!0)&&ge()&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("message",te=>{var Me;const N=new URL(d,location.href).origin;if(!g.open||te.origin!==N||te.source!==(O==null?void 0:O.contentWindow)||((Me=te.data)==null?void 0:Me.channel)!==Rh)return;const ke=n.find(me=>me.artifactId===te.data.artifactId);if(ke&&(F=ke,g.setAttribute("aria-label",`${ke.name}详情`)),te.data.type==="loading"&&(H=!1,v.hidden=!1,g.dataset.phase==="ready"&&(g.dataset.phase="approach",p.start(F,Z)),clearTimeout(V),V=setTimeout(()=>le("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),te.data.type==="ready"){if(H)return;H=!0,clearTimeout(V);const me=O;p.reveal(()=>{O!==me||!g.open||(g.dataset.phase="reveal",me.contentWindow.postMessage({channel:Rh,type:"enter",reduced:m()},N))},()=>{O!==me||!g.open||(g.dataset.phase="ready",v.hidden=!0,me.focus())})}te.data.type==="error"&&le("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),te.data.type==="close"&&Ge()},{signal:w.signal}),{update:K,open:ge,close:Ge,dispose(){Ge(),clearTimeout(V),w.abort(),R.clear(),h.remove(),g.remove()},isOpen:()=>g.open,get state(){return{open:g.open,ready:H,artifactId:(F==null?void 0:F.artifactId)||null,aimedArtifactId:(I==null?void 0:I.assignment.artifactId)||null}}}}const JS=Object.freeze({"phoenix-ewer":-Math.PI/2,"bronze-head":-Math.PI/2,"cloud-mirror":-Math.PI/2,"liquan-bodhisattva":-Math.PI/2,"longquan-figure":-Math.PI/2,"pipa-figurine":-Math.PI/2,"speechless-buddha":-Math.PI/2});function ll(r){return Number.isFinite(r.frontRotationY)?r.frontRotationY:JS[r.artifactId||r.id]??0}const Mt=new Lt,ho=new L,Ch=new Ue,Ph=new Ue,Lh=new Ue;class $S{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,s=new Float32Array(i);for(let c=0;c<i;c++){let l=1,u=3*c,f=3*c+1,d=3*c+2;e&&(u=e.getX(u),f=e.getX(f),d=e.getX(d)),n&&(l=n.getX(u)+n.getX(f)+n.getX(d)),Mt.a.fromBufferAttribute(t,u),Mt.b.fromBufferAttribute(t,f),Mt.c.fromBufferAttribute(t,d),l*=Mt.getArea(),s[c]=l}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const s=this._sampleFaceIndex();return this._sampleFace(s,e,t,n,i)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?i=a-1:n=a+1}return s}_sampleFace(e,t,n,i,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,u=e*3+1,f=e*3+2;return c&&(l=c.getX(l),u=c.getX(u),f=c.getX(f)),Mt.a.fromBufferAttribute(this.positionAttribute,l),Mt.b.fromBufferAttribute(this.positionAttribute,u),Mt.c.fromBufferAttribute(this.positionAttribute,f),t.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(Mt.a.fromBufferAttribute(this.normalAttribute,l),Mt.b.fromBufferAttribute(this.normalAttribute,u),Mt.c.fromBufferAttribute(this.normalAttribute,f),n.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)).normalize()):Mt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Mt.a.fromBufferAttribute(this.colorAttribute,l),Mt.b.fromBufferAttribute(this.colorAttribute,u),Mt.c.fromBufferAttribute(this.colorAttribute,f),ho.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)),i.r=ho.x,i.g=ho.y,i.b=ho.z),s!==void 0&&this.uvAttribute!==void 0&&(Ch.fromBufferAttribute(this.uvAttribute,l),Ph.fromBufferAttribute(this.uvAttribute,u),Lh.fromBufferAttribute(this.uvAttribute,f),s.set(0,0).addScaledVector(Ch,a).addScaledVector(Ph,o).addScaledVector(Lh,1-(a+o))),this}}const na=5,Lo=.6;function ZS(r){const e=Math.max(0,r);return{due:e>=na,opacity:In.smoothstep(e,0,Lo)*(1-In.smoothstep(e,na-Lo,na))}}function lr(r,e=!1){const t=new Set,n=new Set,i=new Set;r.traverse(s=>{s.geometry&&(!e||s.isPoints)&&t.add(s.geometry);for(const a of s.material?Array.isArray(s.material)?s.material:[s.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&i.add(o)}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>{var a,o,c;s.dispose(),(c=(o=(a=s.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),r.removeFromParent()}async function QS(r,e){const t=new $S(r),n=t.positionAttribute,i=t.indexAttribute,s=((i==null?void 0:i.count)??n.count)/3,a=new Float32Array(s),o=new Lt;let c=0;for(let l=0;l<s;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let u=l;u<Math.min(s,l+8192);u++){const f=u*3;o.a.fromBufferAttribute(n,i?i.getX(f):f),o.b.fromBufferAttribute(n,i?i.getX(f+1):f+1),o.c.fromBufferAttribute(n,i?i.getX(f+2):f+2),c+=o.getArea(),a[u]=c}l+8192<s&&await new Promise(u=>setTimeout(u,0))}return t.distribution=a,t}async function eE(r,e,t){r.updateMatrixWorld(!0);const n=new it().setFromObject(r),i=n.getSize(new L);if(n.isEmpty()||!Number.isFinite(i.length())||i.length()===0)throw new Error("模型没有可展示的几何体");const s=Math.min(1.5/Math.max(i.y,.001),1.6/Math.max(i.x,i.z,.001)),a=n.getCenter(new L),o=new En;o.add(r),r.position.sub(a),o.scale.setScalar(s),o.position.y=.13+i.y*s/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],u=new Set;r.traverse(x=>{if(!x.isMesh||!x.geometry.attributes.position)return;l.push(x);const b=Array.isArray(x.material)?x.material:[x.material];for(const y of b)u.add(y),y.transparent=!0,y.depthWrite=!1,y.onBeforeCompile=T=>{T.uniforms.holoOpacity=c.opacity,T.uniforms.holoTime=c.time,T.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
`+T.vertexShader,T.vertexShader=T.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
 vHoloNormal = normalize(normalMatrix * normal); vHoloView = -mvPosition.xyz; vHoloHeight = (modelMatrix * vec4(transformed, 1.)).y;`),T.fragmentShader=`uniform float holoOpacity; uniform float holoTime; varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
`+T.fragmentShader,T.fragmentShader=T.fragmentShader.replace("#include <opaque_fragment>",`
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
          #include <opaque_fragment>`)},y.customProgramCacheKey=()=>"museum-jade-edge-v2",y.needsUpdate=!0});const f=[],d=o.matrixWorld.clone().invert(),h=new L,g=e?550:1200,_=l.reduce((x,b)=>x+b.geometry.attributes.position.count,0);for(const x of l){const b=new Ne().multiplyMatrices(d,x.matrixWorld);{const y=await QS(x,t),T=Math.max(1,Math.round(g*x.geometry.attributes.position.count/_));for(let E=0;E<T;E++)y.sample(h),h.applyMatrix4(b),f.push(h.x,h.y,h.z)}}const m=[];for(let x=0;x<f.length/3;x++){const b=x*2.39996323,y=(.08+.12*(x*.61803399%1))/s;m.push(Math.cos(b)*y,Math.sin(x*1.37)*y*.6,Math.sin(b)*y)}const p=new ln;p.setAttribute("position",new zt(f,3)),p.setAttribute("scatterOffset",new zt(m,3));const v=new bn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:rs,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new bp(p,v)),{object:o,uniforms:c,surfaceMaterials:u}}function tE({scene:r,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null,prepareForRender:i=null}){const s=new En;s.position.fromArray(e),r.add(s);for(const[w,R,D]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const I=new gt(new Wu(w,.008,6,96),new ii({color:R,transparent:!0,opacity:D,depthWrite:!1}));I.rotation.x=Math.PI/2,I.position.y=.025,s.add(I)}const a=new bn({transparent:!0,depthWrite:!1,blending:rs,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),o=new gt(new _r(2.1,2.1),a);o.rotation.x=-Math.PI/2,o.position.y=.018,s.add(o);const c=new bn({side:sn,transparent:!0,depthWrite:!1,blending:rs,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),l=new gt(new Gu(.76,.91,1.85,48,1,!0),c);l.position.y=.96,s.add(l);let u=[],f=0,d=null,h=null,g=null,_=0,m=0,p=0,v=0,x=0,b=!1,y=!1,T=null;const E=new $u().setMeshoptDecoder(Hp);function A(w){w&&lr(w.object,w.sharedResources)}function M(w){var O;if(b||g||h||!u.length||m<v)return;const R=u[w],D=x,I=new AbortController;g={controller:I,target:w};const F=new URL(R.modelUrl,((O=globalThis.location)==null?void 0:O.href)||"http://localhost/");(async()=>{let V,H;try{if(n)V=await n(R,I.signal);else{const Z=await fetch(F,{signal:I.signal});if(!Z.ok)throw new Error(`模型加载失败 (${Z.status})`);V=await E.parseAsync(await Z.arrayBuffer(),new URL(".",F).href)}if(b||D!==x){lr(V.scene,V.sharedResources);return}if(H=await eE(V.scene,t,I.signal),b||D!==x){lr(H.object,V.sharedResources);return}if(H.object.rotation.y=ll(R),i&&await i(H.object,I.signal),I.signal.throwIfAborted(),b||D!==x){lr(H.object,V.sharedResources);return}h={...H,record:R,index:w,sharedResources:!!V.sharedResources},T=null}catch(Z){H?lr(H.object,V.sharedResources):V!=null&&V.scene&&lr(V.scene,V.sharedResources),!b&&D===x&&Z.name!=="AbortError"&&(T=String(Z.message||Z),f=w,v=m+na)}finally{D===x&&(g=null)}})()}function S(){A(d),d=h,h=null,f=d.index,s.add(d.object),_=0}return{setModels(w){x++,g==null||g.controller.abort(),g=null,A(d),A(h),d=null,h=null,u=(w||[]).filter(R=>(R==null?void 0:R.id)&&(R==null?void 0:R.modelUrl)).map(R=>({...R})),f=0,_=0,v=0,T=null,b||M(0)},update(w,{paused:R=!1,reduced:D=!1}={}){if(b)return;const I=Number.isFinite(w)?Math.max(0,w):0;if(y&&!R&&(_=0),y=R,!d&&h&&S(),R||(m+=I,_+=I),D||(p+=Math.min(I,.1)),d){const F=ZS(_);if(R){const O=1-Math.exp(-I*12);d.uniforms.opacity.value=In.lerp(d.uniforms.opacity.value,1,O),d.uniforms.dispersion.value=In.lerp(d.uniforms.dispersion.value,0,O);for(const V of d.surfaceMaterials)V.depthWrite=!1}else{d.uniforms.opacity.value=u.length<2||!h?1:F.opacity,d.uniforms.dispersion.value=D?0:1-d.uniforms.opacity.value;for(const O of d.surfaceMaterials)O.depthWrite=d.uniforms.opacity.value>.98}d.uniforms.time.value=p,R||(d.object.rotation.y=ll(d.record)+(D?0:Math.sin(_*.7)*.07)),!R&&F.due&&h&&S()}!h&&!g&&u.length&&(!d||u.length>1)&&M(d||T?(f+1)%u.length:f)},getCurrent(){return d?{...d.record}:null},getState(){return{status:b?"disposed":d?"ready":g?"loading":T?"error":"empty",error:T,currentId:(d==null?void 0:d.record.id)??null,nextId:(h==null?void 0:h.record.id)??null,loading:!!g,rotationY:(d==null?void 0:d.object.rotation.y)??null,frontRotationY:d?ll(d.record):null,count:u.length,paused:y,elapsed:_,index:(d==null?void 0:d.index)??f,phase:d?_<Lo?"forming":_>=na-Lo?"dispersing":"holding":"waiting"}},dispose(){b||(b=!0,x++,g==null||g.controller.abort(),g=null,A(d),A(h),d=null,h=null,lr(s))}}}const nE="http://127.0.0.1:4317/images";function iE(r=globalThis.location){if(!r)return nE;const e=new URL("/images",r.href||`http://${r.hostname}/`);return e.port="4317",e.href}function rE({mobile:r=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return is.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:r?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function sE({signal:r,mobile:e}={}){return r==null||r.throwIfAborted(),rE({mobile:e})}function aE({canvas:r,camera:e,stage:t,position:n=[0,.92,0],colliders:i=[],isAvailable:s=()=>!0,onOpen:a=()=>{},onView:o=()=>!1}){const c=new AbortController,l=(J,fe,Ie,Je={})=>J.addEventListener(fe,Ie,{...Je,signal:c.signal}),u=document.createElement("section");u.className="hologram-entry",u.hidden=!0,u.setAttribute("aria-label","全息文物简介"),u.innerHTML='<small>全息馆藏 <span class="hologram-cycle"></span></small><strong></strong><p></p><button type="button" aria-label="进入当前文物的世界">走进文物的世界 <span>↗</span></button><span class="hologram-key">点击投影 / 按 E 进入</span>';const f=document.createElement("button");f.type="button",f.className="hologram-workbench",f.hidden=!0,f.setAttribute("aria-label","打开文物修复工作台，新标签页打开"),f.innerHTML='<span class="hologram-workbench-mark" aria-hidden="true">＋</span><span><small>从这里，续写器物</small><strong>文物修复工作台 ↗</strong></span>',document.body.append(u,f);const d=new L(...n),h=d.clone().add(new L(0,.88,0)),g=d.clone().add(new L(0,.1,0)),_=new Yn(h,.85),m=new Ue,p=new Ue,v=new L,x=new L,b=new L,y=new Ku,T=new Yi,E=i.map(J=>new it().setFromCenterAndSize(new L(...J.center),new L(...J.size))).filter(J=>!J.containsPoint(d));let A=!1,M=!1,S=!1,w=!1,R=null,D=-1/0,I=null,F=0;function O(){if(v.copy(h).project(e),v.z<-1||v.z>1||Math.abs(v.x)>.95||Math.abs(v.y)>.95)return!1;const J=e.position.distanceTo(h);return T.set(e.position,x.subVectors(h,e.position).normalize()),!E.some(fe=>T.intersectBox(fe,b)&&e.position.distanceTo(b)<J-.1)}function V(J=m){return y.setFromCamera(J,e),y.ray.intersectsSphere(_)}function H(){return document.pointerLockElement===r||r.dataset.mode==="walk"||matchMedia("(pointer:coarse)").matches}function Z(){if(w)return;M=s()&&Math.hypot(e.position.x-d.x,e.position.z-d.z)<4.5&&O();const J=M&&V(H()?p:m);if(J&&(D=performance.now()),A=M&&(S||J||performance.now()-D<650),u.hidden=!A,f.hidden=!M,!M){S=!1;return}const fe=r.getBoundingClientRect();if(v.copy(g).project(e),f.style.left=`${Math.max(130,Math.min(innerWidth-130,fe.left+(v.x+1)*fe.width/2))}px`,f.style.top=`${Math.max(innerHeight*.57,Math.min(innerHeight-(innerWidth<700?184:108),fe.top+(1-v.y)*fe.height/2+30))}px`,!A)return;const Ie=t.getCurrent(),Je=t.getState();u.dataset.modelId=(Ie==null?void 0:Ie.artifactId)||"",u.querySelector("strong").textContent=(Ie==null?void 0:Ie.name)||"等待一件器物到来",u.querySelector(".hologram-cycle").textContent=Ie?`${String(Je.index+1).padStart(2,"0")} / ${String(Je.count).padStart(2,"0")}`:"",u.querySelector("p").textContent=Ie?Po[Ie.artifactId]||"循着轮廓，走进器物的故事。":"光影正在准备，稍候即可走近。",u.querySelector("button").disabled=!(Ie!=null&&Ie.artifactId)}function Q(){if(!A||!s())return!1;const J=t.getCurrent();if(!(J!=null&&J.artifactId))return!1;R=J.artifactId;const fe=o(R,{focusPoint:h});return fe&&(u.hidden=!0,f.hidden=!0,S=!1),fe}return l(u,"pointerenter",()=>{S=!0}),l(u,"pointerleave",()=>{S=!1}),l(u.querySelector("button"),"click",Q),l(f,"click",()=>{!M||!s()||(a(),window.open(iE(),"_blank","noopener"))}),l(r,"pointermove",J=>{const fe=r.getBoundingClientRect();m.set((J.clientX-fe.left)/fe.width*2-1,-(J.clientY-fe.top)/fe.height*2+1),(I==null?void 0:I.id)===J.pointerId&&(F=Math.max(F,Math.hypot(J.clientX-I.x,J.clientY-I.y)))}),l(r,"pointerdown",J=>{I||(I={id:J.pointerId,x:J.clientX,y:J.clientY},F=0)}),l(r,"pointerup",J=>{(I==null?void 0:I.id)===J.pointerId&&(I=null)}),l(r,"pointercancel",()=>{I=null,F=1/0}),l(r,"click",J=>{if(F>7||!M||!s())return;const fe=r.getBoundingClientRect(),Ie=document.pointerLockElement===r?p:new Ue((J.clientX-fe.left)/fe.width*2-1,-(J.clientY-fe.top)/fe.height*2+1);V(Ie)&&(A=!0,Q()&&(J.preventDefault(),J.stopImmediatePropagation()))},{capture:!0}),l(window,"keydown",J=>{var fe;J.code!=="KeyE"||J.repeat||/INPUT|TEXTAREA|SELECT/.test((fe=document.activeElement)==null?void 0:fe.tagName)||Q()&&(J.preventDefault(),J.stopImmediatePropagation())},{capture:!0}),{update:Z,isOpen:()=>!1,isEngaged:()=>A&&M,getState:()=>({engaged:A,nearby:M,open:!1,modelId:R,viewing:!1}),dispose(){w=!0,c.abort(),u.remove(),f.remove()}}}const Ih="COL_central_inscription",oE="Web_R14_Central_front_inscription",Dh=.002;function cE(r,e,{replaceNumberPlates:t=!1}={}){r.updateMatrixWorld(!0);const n=new L,s=e.colliders.filter(l=>l.id==="COL_central_case"||/COL_(Left|Right) exhibit/.test(l.id)||l.id==="COL_Far gallery porcelain").map(l=>({id:l.id,center:l.center,bounds:new it,glassBounds:new it}));let a=null;r.traverse(l=>{if(!l.isMesh)return;(l.name===oE||l.name==="Web_R14_Central front inscription")&&(a=l);const f=(Array.isArray(l.material)?l.material:[l.material]).some(h=>h.name.toLowerCase().includes("display glass")),d=l.geometry.attributes.position;for(let h=0;h<d.count;h++)if(n.fromBufferAttribute(d,h).applyMatrix4(l.matrixWorld),!(n.y<.05||n.y>2.5))for(const g of s){const m=g.id==="COL_central_case"?2.1:1.25;Math.abs(n.x-g.center[0])>m||Math.abs(n.z-g.center[2])>m||(g.bounds.expandByPoint(n),f&&g.glassBounds.expandByPoint(n))}});const o=[],c=[];for(const l of e.exhibits??[]){const u=r.getObjectByName(`Web_R17_Exhibit_${l.id}_number_plaque`),f=r.getObjectByName(`Web_R17_Exhibit_${l.id}_number_label`);if(!u||!f)continue;if(t){u.visible=!1,f.visible=!1,c.push(u.name,f.name);const y=e.colliders.findIndex(T=>T.id===`COL_exhibit_plaque_${l.id}`);y!==-1&&e.colliders.splice(y,1);continue}u.visible=!0,f.visible=!0;const d=l.side==="left"?1:-1,h=l.position[0],g=new it().setFromObject(u,!0),_=d>0?g.min.x:g.max.x,m=h+d*1.154,p=d*Math.max(0,d*(m-_));for(const y of[u,f]){const T=y.getWorldPosition(new L);T.x+=p,y.position.copy(y.parent.worldToLocal(T)),y.updateMatrixWorld(!0),c.push(y.name)}const v=new it().setFromObject(u,!0);v.union(new it().setFromObject(f,!0)).expandByScalar(Dh);const x={id:`COL_exhibit_plaque_${l.id}`,kind:"exhibit_number_plaque",center:v.getCenter(new L).toArray(),size:v.getSize(new L).toArray(),rotationY:0,measuredNode:u.name},b=e.colliders.findIndex(y=>y.id===x.id);b===-1?e.colliders.push(x):e.colliders[b]=x,o.push(x)}if(a){const l=new it().setFromObject(a,!0).expandByScalar(Dh),u={id:Ih,kind:"exhibit_inscription",center:l.getCenter(new L).toArray(),size:l.getSize(new L).toArray(),rotationY:0,measuredNode:a.name},f=e.colliders.findIndex(d=>d.id===Ih);f===-1?e.colliders.push(u):e.colliders[f]=u,o.push(u)}return{modelModified:c.length>0,repairedNodes:c,addedColliders:o,measurements:s.map(l=>({id:l.id,bounds:{min:l.bounds.min.toArray(),max:l.bounds.max.toArray()},glassBounds:l.glassBounds.isEmpty()?null:{min:l.glassBounds.min.toArray(),max:l.glassBounds.max.toArray()}}))}}function lE(r){const e=document.createElement("canvas");return e.width=e.height=r.size,e.getContext("2d").putImageData(new ImageData(r.pixels,r.size,r.size),0,0),e}function Uh(r,e,t,n,i,s){let a="";for(const o of e)r.measureText(a+o).width>i&&(r.fillText(a,t,n),a="",n+=s),a+=o;r.fillText(a,t,n)}function uE({scene:r,camera:e,canvas:t,assignments:n,onView:i=()=>{},isAvailable:s=()=>!0,onOpen:a=()=>{},onClose:o=()=>{},location:c=globalThis.location,maxDistance:l=4.8}){const u=new En;u.name="ExhibitLabels",r.add(u);const f=new _r(1.24,.3),d=new L,h=new L,g=new L,_=new AbortController,m=document.createElement("dialog");m.className="exhibit-label-dialog",m.setAttribute("aria-label","馆藏讲解板"),m.innerHTML='<button class="exhibit-label-close" type="button" aria-label="关闭讲解板">×</button><p class="exhibit-label-kicker"></p><h2></h2><p class="exhibit-label-copy"></p><div class="exhibit-label-qr"></div><p class="exhibit-label-scan">手机扫码 · 独立浏览文物</p><p class="exhibit-label-network"></p><button class="exhibit-label-view" type="button">查看详情 ↗</button><a class="exhibit-label-link" target="_blank" rel="noopener">独立打开详情 ↗</a>',document.body.append(m);let p=null,v=!1;const x=n.map((E,A)=>{const M=GS(E.artifactId,c),S=lE(qS(M)),w=document.createElement("canvas");w.width=1024,w.height=248;const R=w.getContext("2d");R.fillStyle="#f5f0e4",R.fillRect(0,0,1024,248),R.strokeStyle="#ad894c",R.lineWidth=3,R.strokeRect(14,14,996,220),R.fillStyle="#826638",R.font="20px sans-serif",R.fillText(`${String(A+1).padStart(2,"0")}  /  重器新生 · 馆藏`,36,44),R.fillStyle="#242723",R.font='bold 31px "Microsoft YaHei", sans-serif',Uh(R,E.name,36,94,700,40),R.font='22px "Microsoft YaHei", sans-serif',Uh(R,Po[E.artifactId]??"",36,149,675,29),R.imageSmoothingEnabled=!1,R.drawImage(S,797,30,178,178),R.fillStyle="#826638",R.font="18px sans-serif",R.fillText("扫码看详情",832,231);const D=new $g(w);D.colorSpace=Pt;const I=new ii({map:D,toneMapped:!1}),F=new gt(f,I),O=jS(E);F.position.fromArray(O.position),F.rotation.order="YXZ",F.rotation.set(O.rotationX,O.rotationY,0),F.userData.cabinetId=E.cabinetId,F.userData.artifactId=E.artifactId,F.name=`ExhibitLabel_${E.artifactId}`,u.add(F);const V=document.createElement("button");V.type="button",V.className="exhibit-label-hotspot",V.textContent="展开讲解板 ＋",V.setAttribute("aria-label",`展开${E.name}讲解板与二维码`),V.hidden=!0,document.body.append(V);const H={assignment:E,url:M,qr:S,mesh:F,material:I,texture:D,button:V,index:A};return V.addEventListener("click",Z=>{Z.stopPropagation(),s()&&b(H)},{signal:_.signal}),H});function b(E){p=E,m.querySelector(".exhibit-label-kicker").textContent=`${String(E.index+1).padStart(2,"0")} / 重器新生 · 馆藏`,m.querySelector("h2").textContent=E.assignment.name,m.querySelector(".exhibit-label-copy").textContent=Po[E.assignment.artifactId]??"",m.querySelector(".exhibit-label-qr").replaceChildren(E.qr),m.querySelector(".exhibit-label-link").href=E.url,m.querySelector(".exhibit-label-network").textContent=WS(E.url)?"当前是本机地址，手机无法直接扫码。请用电脑的局域网地址进入展厅，并确保手机与电脑连接同一网络。":"手机与电脑连接同一网络即可扫码浏览。",x.forEach(A=>{A.button.hidden=!0}),a(E.assignment),m.showModal()}function y(){!p||m.open||(p=null,o())}function T(){m.open&&m.close(),y()}return m.querySelector(".exhibit-label-close").addEventListener("click",T,{signal:_.signal}),m.addEventListener("close",y,{signal:_.signal}),m.querySelector(".exhibit-label-view").addEventListener("click",()=>{const E=p==null?void 0:p.assignment;T(),E&&i(E.artifactId)},{signal:_.signal}),{group:u,records:x,openLabel(E){if(v||m.open||!s())return!1;const A=x.find(M=>M.assignment.artifactId===E);return A?(b(A),!0):!1},get isOpen(){return m.open},close:T,update(){if(v)return;const E=t.getBoundingClientRect();for(const A of x){const{mesh:M,button:S}=A;M.getWorldPosition(d),h.subVectors(e.position,d),g.set(0,0,1).applyQuaternion(M.quaternion);const w=!m.open&&s()&&h.length()<=l&&h.dot(g)>0;d.project(e),S.hidden=!w||d.z<-1||d.z>1||Math.abs(d.x)>.84||Math.abs(d.y)>.85,S.hidden||(S.style.left=`${E.left+(d.x+1)*E.width/2}px`,S.style.top=`${E.top+(1-d.y)*E.height/2}px`)}},dispose(){if(!v){v=!0,T(),_.abort(),m.remove();for(const E of x)E.button.remove(),E.texture.dispose(),E.material.dispose();f.dispose(),u.removeFromParent()}}}}const Ae=r=>document.querySelector(r),Ct=new fp;Ct.background=new Oe("#101611");const ft=new my({antialias:!0,powerPreference:"high-performance"});ft.setPixelRatio(Math.min(devicePixelRatio,1.25));ft.setSize(innerWidth,innerHeight);ft.outputColorSpace=Pt;ft.toneMapping=Wh;ft.toneMappingExposure=1.1;Ae("#canvas").appendChild(ft.domElement);ft.domElement.tabIndex=0;const ye=new Gt(58,innerWidth/innerHeight,.05,140);ye.position.set(0,1.7,7.7);ye.rotation.order="YXZ";const jp=new ou(ft),Xp=new $y;Ct.environment=jp.fromScene(Xp,.02).texture;Xp.dispose();jp.dispose();Ct.environmentIntensity=.48;Ct.add(new mb(14149106,1514020,.85));const Te=ft.domElement;Te.setAttribute("aria-label","可交互数字展厅");const pt={reticle:Ae("#reticle"),aim:Ae("#aimHint"),story:Ae("#story"),guide:Ae("#guide"),walk:Ae("#walk")},Yp=[];let Cn=null,qi=!1,pr=null,ia=!1,Pn=!1,ti=null,Si=null,pa=null,on=null,Ot=null,wt=null,Vs=[],Nh=[],kt=null,ht=null,Io=null,Fh=null,Mo=!1;const yu=new AbortController;function Zt(){return!!(Ot!=null&&Ot.isOpen()||ht!=null&&ht.isOpen()||wt!=null&&wt.isOpen)}async function fE(){if(!(Mo||!kt||ht!=null&&ht.isEngaged()&&kt.getCurrent())){Mo=!0;try{const r=await sE({signal:yu.signal});if(yu.signal.aborted)return;const e=JSON.stringify(r);e!==Fh&&(!(ht!=null&&ht.isEngaged())||!kt.getCurrent())&&(kt.setModels(r),Fh=e),Io=null}catch(r){r.name!=="AbortError"&&(Io=r.message)}finally{Mo=!1}}}const Mu=[],ul=new Ku,fl=new Ue,Kp=new Un,Su=new L(0,1.55,8.94),Ni=new L;let rn,xt,Wt=!1,Jp=0,vi=!1,xe="paused",Dn=!1,si=matchMedia("(prefers-reduced-motion: reduce)").matches,mr=[],ps=null,ra=null,Oi=0,Eu=0,cn=null,Ei=null,Oh=!1,ko=!1,$p=Ae("#edgeTurn").checked;const dE=aS(()=>Te.requestPointerLock());let ms=performance.now(),dl=0,hl=0,yi=!1,Xs=0,Vn=ri.speed,pn=0,So=0,Ys=0,pl=0,ml=0;const Qr=new Map,nn=new Set,ma=ye.position.clone(),Bh=new L,Fi=new L,Tu=new L(3.7,1.35,7.6),gl=new L,kh=new Yi,zh=new Un,Hh=new Un,zi=[],Ks=[],Js=[];let Jr=Math.min(devicePixelRatio,1.25),Gs=null,Kr=0;const Do={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function zo(){Oi=ye.rotation.y,Eu=ye.rotation.x}function nf(){const r=Ei;Ei=null,kp(Te,r)}function rf(){ye.position.y-=pn,pn=0,Ys=0,nn.clear();for(const[r,e]of Qr)kp(r,{id:e});Qr.clear(),cn=null,nf(),rn==null||rn.stop(),ma.copy(ye.position),zo()}function xa(){const r=document.pointerLockElement===Te;Te.dataset.lookMode=xe==="walk"&&Dn?r?"pointer-lock":ko?"right-drag":"mouse-follow":"paused",pt.walk.textContent=xe==="walk"&&Dn?r?"暂停环顾 · Esc":"点击锁定鼠标 · 连续转向":"继续鼠标环顾",Ae("#walkHint").textContent=r?"WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情":"点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停"}function lt(r,e){r!=="story"&&(ra=null),r!=="guide"&&(mr=[],ps=null),r!=="observe"&&(Si=null),r!=="guide"&&(pa=null),xe=r,Dn=sS(r,e,matchMedia("(pointer:coarse)").matches),rf(),r!=="walk"&&document.pointerLockElement===Te&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",Dn),document.body.classList.toggle("free-visit",r==="walk"),document.querySelector("footer").inert=r==="walk"||r==="entering",Ae("#caseChoices").inert=r==="walk"||r==="entering",Te.dataset.mode=xe,xa(),pt.story.hidden=r!=="story"}let wu;function ga(r){clearTimeout(wu),Ae("#status").textContent=r,Ae("#status").classList.add("show"),wu=setTimeout(()=>Ae("#status").classList.remove("show"),2600)}function va(){Wt&&(vi=!0,Ae("#intro").classList.add("dismissed"),Ae("#intro").inert=!0,Te.focus())}function sf(r){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=r;document.body.classList.toggle("entering-gallery",r)}function hE(){va(),lt("entering"),Pn=!1,ia=!1,on=null,Cn.reset(),Cn.target=1,ti=new pS(xt.entrySequence),ye.position.fromArray(xt.entrySequence.outside),ye.lookAt(new L(...xt.entrySequence.lookAt)),zo(),sf(!0),Ae("#caseChoices").hidden=!0,Ae("#location").textContent="推门入馆 · 正在打开玻璃门",Te.dataset.entryPhase="opening",matchMedia("(pointer:coarse)").matches||Ho()}async function Zp(){if(!(!Wt||Zt()||xe==="story"||xe==="entering"||pt.guide.open)){if(!Pn){hE();return}if(xe==="walk"&&Dn&&document.pointerLockElement===Te){lt("paused");return}va(),lt("walk",!matchMedia("(pointer:coarse)").matches),Dn&&await Ho()}}async function Ho(){if(!(document.pointerLockElement===Te||!["walk","entering"].includes(xe)||Zt()||pt.guide.open)){try{await dE()}catch(r){Te.dataset.lockError=r.name||"Unavailable",["walk","entering"].includes(xe)&&!Zt()&&ga("鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身")}xa()}}function pE(){ia=!1,lt("paused"),vi=!1,Pn=!1,ti=null,on=null,sf(!1),Ae("#caseChoices").hidden=!0,Cn.reset(),ye.position.fromArray(Do.entrance.p),ye.quaternion.copy(Kp),ma.copy(ye.position),zo(),So=0,Vn=ri.speed,rn.speed=Vn,Ae("#speed").value=Vn,Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒",yi=!1,qi=!1,Xs=0,qn.hidden=!0,gn.hidden=!0,pt.aim.textContent="",pt.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),Ae("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(r=>r.classList.toggle("active",r.dataset.view==="entrance")),clearTimeout(wu),Ae("#status").classList.remove("show"),pt.guide.open&&pt.guide.close(),Ae("#intro").inert=!1,Ae("#intro").classList.remove("dismissed"),Ae("#enter").focus({preventScroll:!0})}function Qp(){if(xe==="entering"){nn.clear(),cn=null,nf();return}if(xe==="story"){rf();return}lt("paused")}function em(r){if(!Wt||Zt()||xe==="entering")return;if(r==="cases"){Ae("#caseChoices").hidden=!1,Vo(Number.isInteger(on==null?void 0:on.id)?on.id:1);return}if(r==="hero"||r==="story"){nm(xt.observationTargets[r],r);return}Ae("#caseChoices").hidden=!0,on=null,pa=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),va(),lt("guide");const e=Do[r];if(ps=new L(...e.t),si)ye.position.fromArray(e.p),ye.lookAt(ps),lt("paused");else{const t=Bp(ye.position.toArray(),e.p,xt);if(!t.length){ga("请先离开展柜边缘，再选择参观点"),lt("paused");return}mr=t.map(n=>new L(...n))}Ae("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===r))}function tm(r){lt("observe"),on=r,Si=new hS(r,{reduced:si}),ye.position.copy(Si.views.left),ye.lookAt(Si.views.target),Te.dataset.selectedExhibit=String(r.id),Te.dataset.observationPhase="left",Ae("#location").textContent=r.label+" · 左侧观察"}function Vo(r){if(!Wt||Zt()||xe==="entering")return;const e=xt.exhibits.find(t=>t.id===Number(r));e&&nm(e,"cases")}function nm(r,e){if(!Wt||Zt()||xe==="entering")return;va(),lt("guide"),on=r,Ae("#caseChoices").hidden=e!=="cases";const t=zp(r);if(ps=t.target,document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(i=>{const s=Number(i.dataset.exhibit)===r.id;i.classList.toggle("active",s),i.setAttribute("aria-pressed",String(s))}),Ae("#location").textContent=r.label+" · 前往左侧观察位",Te.dataset.selectedExhibit=String(r.id),Te.dataset.observationPhase="approach",si){tm(r);return}const n=Bp(ye.position.toArray(),t.left.toArray(),xt);if(!n.length){ga("请先离开展柜边缘，再选择观察位置"),lt("paused");return}pa=r,mr=n.map(i=>new L(...i))}Ae("#enter").onclick=Zp;pt.walk.onclick=Zp;document.querySelectorAll("[data-view]").forEach(r=>r.onclick=()=>em(r.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(r=>r.onclick=()=>Vo(r.dataset.exhibit));Ae("#help").onclick=()=>{Zt()||xe==="story"||xe==="entering"||(lt("paused"),pt.guide.showModal())};Ae("#closeHelp").onclick=()=>pt.guide.close();function im(){Ae("#motion").setAttribute("aria-pressed",String(si)),Ae("#motion").textContent=si?"动态已减弱":"减弱动态"}im();Ae("#motion").onclick=()=>{si=!si,im()};Ae("#speed").min=ri.minSpeed;Ae("#speed").max=ri.maxSpeed;Ae("#speed").step=ri.step;Ae("#speed").value=Vn;Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒";Ae("#speed").oninput=r=>{const e=Number(r.target.value);Vn=In.clamp(Number.isFinite(e)?e:ri.speed,ri.minSpeed,ri.maxSpeed),r.target.value=Vn,rn&&(rn.speed=Vn),Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒"};Ae("#edgeTurn").onchange=r=>{$p=r.target.checked,cn=null};const qn=document.createElement("button");qn.className="hotspot";qn.textContent="＋ 开启故事";qn.hidden=!0;Ae("#hotspots").appendChild(qn);function af(){if(xe==="story"||pt.guide.open||!Wt)return;const r={p:ye.position.clone(),q:ye.quaternion.clone()};r.p.y-=pn,lt("story"),ra=r}qn.onclick=af;const gn=document.createElement("button");gn.className="hotspot";gn.id="doorHotspot";gn.textContent="推开玻璃门";gn.hidden=!0;Ae("#hotspots").appendChild(gn);function of(){!Wt||!Pn||xe==="story"||xe==="entering"||pt.guide.open||Cn.toggle()}gn.onclick=of;function cf(){xe==="story"&&(ra&&(ye.position.copy(ra.p),pn=0,ye.quaternion.copy(ra.q)),lt("paused"),Te.focus())}Ae("#closeStory").onclick=cf;Ae("#returnStory").onclick=cf;function rm(r,e){Zt()||oS(ye,r,e)&&zo()}document.addEventListener("mousemove",r=>{if(xe!=="walk"||!Dn||Zt()||pt.guide.open)return;const e=document.pointerLockElement===Te;if(!e&&ko&&!(r.buttons&2)){cn=null;return}const t=uS(cn,r,performance.now(),e);rm(t.dx,t.dy),cn=t.point});window.addEventListener("mouseout",r=>{r.relatedTarget||(cn=null)});const Ss=dS();Te.addEventListener("pointerdown",r=>Ss.down(r),!0);Te.addEventListener("pointermove",r=>{document.pointerLockElement!==Te&&Ss.move(r)},!0);Te.addEventListener("pointerup",r=>Ss.end(r),!0);Te.addEventListener("pointercancel",r=>Ss.end(r,!0),!0);Te.addEventListener("lostpointercapture",r=>{r.pointerType==="touch"&&Ss.end(r,!0)},!0);Te.addEventListener("click",r=>{Ss.click(document.pointerLockElement===Te)&&(r.preventDefault(),r.stopImmediatePropagation())},!0);Te.addEventListener("pointerdown",r=>{!Wt||Zt()||!Pn||xe==="story"||xe==="entering"||pt.guide.open||(Te.focus(),r.pointerType==="mouse"&&r.button===2&&document.pointerLockElement!==Te?((xe!=="walk"||!Dn)&&lt("walk",!0),ko=!0,cn={x:r.clientX,y:r.clientY},xa()):r.pointerType==="mouse"&&r.button===0&&r.isTrusted&&xe==="walk"&&Dn&&Ho(),r.pointerType==="touch"&&!Ei&&(xe!=="walk"&&lt("walk",!1),Ei={id:r.pointerId,x:r.clientX,y:r.clientY},Te.setPointerCapture(r.pointerId)))});Te.addEventListener("contextmenu",r=>{xe==="walk"&&r.preventDefault()});window.addEventListener("pointerup",r=>{r.pointerType==="mouse"&&r.button===2&&(cn=null)});Te.addEventListener("pointermove",r=>{if(!Ei||xe!=="walk"||Zt())return;const e=lS(Ei,r);e&&(rm(e.dx,e.dy),Ei=e.point)});for(const r of["pointerup","pointercancel","lostpointercapture"])Te.addEventListener(r,e=>{fS(Ei,e)&&(Ei=null)});Te.addEventListener("click",r=>{if(!Wt||Zt()||xe==="entering"||pt.guide.open)return;if(xe==="walk"&&yi){af();return}if((xe==="walk"||xe==="paused")&&qi){of();return}if(document.pointerLockElement===Te)fl.set(0,0);else{const n=Te.getBoundingClientRect();fl.set((r.clientX-n.left)/n.width*2-1,-(r.clientY-n.top)/n.height*2+1)}ul.setFromCamera(fl,ye);const e=wt&&ul.intersectObjects(wt.records.map(n=>n.mesh),!1)[0];if(e&&e.distance<4.8&&wt.openLabel(e.object.userData.artifactId)){r.preventDefault(),r.stopImmediatePropagation();return}const t=ul.intersectObjects(Mu,!1)[0];t&&t.distance<12&&Vo(t.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===Te;if(document.body.classList.toggle("walking",r),Te.dataset.locked=String(r),r&&!["walk","entering"].includes(xe)){document.exitPointerLock();return}cn=null,nf(),r?(ko=!1,delete Te.dataset.lockError):Oh&&xe==="walk"&&lt("paused"),Oh=r,xa()});document.addEventListener("pointerlockerror",()=>{cn=null,xa()});const Vh=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",r=>{if(!Zt()){if(xe==="entering"){(Vh.has(r.code)||r.key==="Escape")&&r.preventDefault();return}if(r.key==="Escape"){xe==="story"?cf():lt("paused");return}if(!(pt.guide.open||xe==="story")){if(r.code==="KeyE"&&yi){af();return}if(r.code==="KeyE"&&qi){r.repeat||of();return}document.activeElement!==Te||!vi||!Pn||!Vh.has(r.code)||(r.preventDefault(),xe!=="walk"&&(lt("walk"),Dn&&Ho()),nn.add(r.code))}}});window.addEventListener("keyup",r=>nn.delete(r.code));window.addEventListener("blur",Qp);document.addEventListener("visibilitychange",()=>{document.hidden&&Qp(),ms=performance.now()});for(const r of document.querySelectorAll("[data-move]")){r.addEventListener("pointerdown",e=>{!Wt||Zt()||!Pn||pt.guide.open||xe==="story"||xe==="entering"||Qr.has(r)||(e.preventDefault(),va(),xe!=="walk"&&lt("walk"),Qr.set(r,e.pointerId),nn.add(r.dataset.move),r.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(e,t=>{Qr.get(r)===t.pointerId&&(Qr.delete(r),nn.delete(r.dataset.move))})}function mE(r){Fi.copy(Tu).project(ye),gl.subVectors(Tu,ye.position);const e=gl.length();let t=xt.storyEnabled!==!1&&vi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!pt.guide.open&&e<3.5&&Fi.z<1&&Math.abs(Fi.x)<1&&Math.abs(Fi.y)<1;if(t){kh.set(ye.position,gl.normalize());const s=rn.bvh.raycastFirst(kh,sn);s&&s.distance<e-.5&&(t=!1)}qn.hidden=!t;let n=t&&Math.hypot(Fi.x*innerWidth,Fi.y*innerHeight)<(yi?110:80);n?Xs||(Xs=r):Xs=0,yi=n&&r-Xs>100,Ni.copy(Su).project(ye);const i=Pn&&vi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!pt.guide.open&&ye.position.distanceTo(Su)<4.2&&Ni.z<1&&Math.abs(Ni.x)<.95&&Math.abs(Ni.y)<.95;qi=i&&Math.hypot(Ni.x*innerWidth,Ni.y*innerHeight)<140,gn.hidden=!i,i&&(gn.textContent=Cn.target?"合上玻璃门":"推开玻璃门",gn.style.left=`${(Ni.x*.5+.5)*innerWidth}px`,gn.style.top=`${(-Ni.y*.5+.5)*innerHeight+65}px`),pt.reticle.classList.toggle("target",yi||qi),pt.aim.textContent=yi?"点击 / E · 开启故事":qi?`点击 / E · ${Cn.target?"合上":"推开"}玻璃门`:"",t&&!Dn&&(qn.style.left=`${(Fi.x*.5+.5)*innerWidth}px`,qn.style.top=`${(-Fi.y*.5+.5)*innerHeight}px`)}function po(r,e){if(!r.length)return 0;const t=[...r].sort((n,i)=>n-i);return t[Math.floor((t.length-1)*e)]}function sm(){return{frameP50:po(zi,.5),frameP95:po(zi,.95),updateP95:po(Ks,.95),renderP95:po(Js,.95),sampleCount:zi.length,resolution:Jr}}function gE(r){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=r[e];t&&(t.magFilter=Kt,t.minFilter=zn,t.generateMipmaps=!0,t.anisotropy=Math.min(8,ft.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function bE(){try{xt=await(await fetch("/scene_manifest.json")).json();for(const[a,o]of Object.entries(xt.views))Object.assign(Do[a],o);ye.position.fromArray(Do.entrance.p);const r=xt.anchors.find(a=>a.id==="HOTSPOT_Story");Tu.fromArray(r.position),Su.fromArray(xt.layout.doorPoint);const e=await new $u().loadAsync("/"+xt.model,a=>{a.total&&(Ae("#load").textContent=`载入模型 ${Math.round(a.loaded/a.total*100)}%`)}),t=cE(e.scene,xt,{replaceNumberPlates:!0});rn=new tS(xt.colliders),e.scene.traverse(a=>{var c;if(!a.isMesh)return;a.visible&&a.userData.exhibitId&&Mu.push(a),(c=a.material)!=null&&c.name.startsWith("Baked diffuse")&&(a.material=new ii({map:a.material.emissiveMap,color:a.material.emissive.clone().multiplyScalar(.79)}));const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l.transparent||(l.side=Ln),l.name.toLowerCase().includes("glass")&&(l.transmission=0,l.forceSinglePass=!0,l.transparent=!0,l.opacity=.055,l.depthWrite=!1,l.roughness=.035,l.envMapIntensity=.45,l.color.set(13493742),l.needsUpdate=!0),l.name.includes("Idle screen")&&(l.color.set(5400924),l.emissive.set(7440239),l.emissiveIntensity=.35,Yp.push(l)),gE(l)}),Ct.add(e.scene),Cn=new iS(e.scene),pr=rS(Ct,ft,e.scene),Ct.background=new Oe(463389);for(const a of xt.lights.filter(o=>o.type==="SPOT"&&o.name.includes("Gallery")).slice(0,4)){const o=new Sp(new Oe(...a.color),10,8,Math.PI/5,.6,2);o.position.fromArray(a.position),o.target.position.set(a.position[0],.5,a.position[2]),Ct.add(o,o.target)}Wt=!0,Jp=performance.now(),Kp.copy(ye.quaternion),ma.copy(ye.position),document.body.dataset.ready="true",Te.dataset.collision="BVH capsule",Ae("#walk").disabled=!1,Ae("#enter").disabled=!1,Ae("#enter").textContent="进入展厅 →",Ae("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:ft,scene:Ct,camera:ye,navigate:em,selectExhibit:Vo,door:Cn,getVisitState:()=>({entered:vi,visitReady:Pn,mode:xe,entryPhase:ti==null?void 0:ti.phase,observationPhase:Si==null?void 0:Si.phase,selectedExhibit:on==null?void 0:on.id}),getMetrics:()=>({...sm(),drawCalls:ft.info.render.calls,triangles:ft.info.render.triangles,position:ye.position.toArray()})},Ot=KS({canvas:Te,camera:ye,scene:Ct,assignments:is,captureFrame:()=>(ft.render(Ct,ye),Te),getMode:()=>xe,isEntered:()=>vi,isBlocked:()=>(wt==null?void 0:wt.isOpen)||(ht==null?void 0:ht.isEngaged())||!Wt||xe==="entering"||xe==="story"||pt.guide.open||qi||yi,colliders:xt.colliders,getPriorityTargets:()=>Mu,onOpen:()=>lt("paused"),onClose:()=>{lt("paused"),ms=performance.now(),Te.focus({preventScroll:!0})}}),xt.observationTargets.hero.distance=3,xt.observationTargets.hero.targetHeight=1.8;const n=xt.centralPlatform.position;kt=tE({scene:Ct,position:n,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,prepareForRender:async(a,o)=>{o.throwIfAborted(),await ft.compileAsync(a,ye,Ct),o.throwIfAborted();const c=pr==null?void 0:pr.reflector.getRenderTarget();if(c){const l=ft.getRenderTarget();let u;try{ft.setRenderTarget(c),u=ft.compileAsync(a,ye,Ct)}finally{ft.setRenderTarget(l)}await u,o.throwIfAborted()}},loadModel:async(a,o)=>{await s,o.throwIfAborted();const c=Vs.find(l=>l.assignment.artifactId===a.artifactId);if(!c)throw new Error("馆藏模型暂未载入");return _S(c)}});const i={getCurrent:()=>kt.getCurrent(),getState:()=>({...kt.getState(),...Io&&!kt.getCurrent()?{status:"error",error:Io}:{},libraryLoading:Mo})};ht=aE({canvas:Te,camera:ye,scene:Ct,stage:i,position:n,colliders:xt.colliders,isAvailable:()=>Wt&&vi&&(Pn||Te.dataset.observationPhase==="complete")&&["walk","paused"].includes(xe)&&!(Ot!=null&&Ot.isOpen())&&!(wt!=null&&wt.isOpen)&&!pt.guide.open&&!qi&&!yi,onOpen:()=>{lt("paused"),qn.hidden=!0,gn.hidden=!0},onView:(a,o)=>Ot.open(a,o)}),window.museum.getHologram=()=>({...i.getState(),interaction:ht.getState(),model:kt.getCurrent()}),window.museum.getGeometryRepair=()=>t,wt=uE({scene:Ct,camera:ye,canvas:Te,assignments:is,isAvailable:()=>Wt&&vi&&Pn&&["walk","paused"].includes(xe)&&!(Ot!=null&&Ot.isOpen())&&!(ht!=null&&ht.isOpen())&&!pt.guide.open,onOpen:()=>{lt("paused"),qn.hidden=!0,gn.hidden=!0},onClose:()=>{lt("paused"),ms=performance.now()},onView:a=>Ot.open(a)}),window.museum.getLabels=()=>({open:wt.isOpen,records:wt.records.map(a=>({artifactId:a.assignment.artifactId,url:a.url,position:a.mesh.position.toArray()}))}),window.museum.artifactsReady=!1;const s=bS({scene:Ct,renderer:ft,manifest:xt,onArtifact:a=>{Vs.push(a),Te.dataset.artifactCount=String(Vs.length);const o=a.assignment.cabinetId==="story"?xt.observationTargets.story:xt.exhibits.find(c=>c.id===a.assignment.cabinetId);o&&(o.targetHeight=a.center.y)}}).then(({records:a,failures:o})=>{Vs=a,Nh=o,window.museum.artifactsReady=!0,Te.dataset.artifactCount=String(a.length),Te.dataset.artifactFailures=String(o.length),o.length&&ga("部分文物暂未载入，可以继续参观或刷新重试")}).catch(a=>{Te.dataset.artifactFailures="7",console.error("文物载入失败",a),ga("文物暂未载入，请刷新重试")});fE(),window.museum.getArtifacts=()=>({records:Vs.map(a=>({artifactId:a.assignment.artifactId,cabinetId:a.assignment.cabinetId,bounds:{min:a.bounds.min.toArray(),max:a.bounds.max.toArray()}})),failures:Nh})}catch(r){console.error(r),Ae("#load").textContent="展厅加载失败，请刷新重试",Ae("#status").textContent=r.message}}bE();let gs=0;function lf(r){gs=requestAnimationFrame(lf);const e=(r-ms)/1e3,t=Math.min(e,.06);if(ms=r,document.hidden||Zt())return;Wt&&ia&&(ia=!1,xe!=="entering"&&Cn.target===1&&Cn.progress===1&&pE()),ye.position.y-=pn,pn=0;const n=ye.position.x,i=ye.position.z,s=performance.now();if(!Wt){ft.render(Ct,ye);return}if(xe==="entering")ti.update(ye,Cn,t)?(ti=null,Pn=!0,sf(!1),lt("walk",!matchMedia("(pointer:coarse)").matches),Te.focus(),Te.dataset.entryPhase="complete",Ae("#location").textContent="入口序厅 · 可自由参观"):(Te.dataset.entryPhase=ti.phase,Ae("#location").textContent=ti.phase==="opening"?"推门入馆 · 正在打开玻璃门":ti.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(xe==="observe"){const f=Si.update(ye,t),d=Si.phase;Te.dataset.observationPhase=d,Ae("#location").textContent=on.label+" · "+(d==="left"?"左侧观察":d.startsWith("right")?"右侧观察":d==="front"?"移向正视位置":"正视图"),f&&(lt("paused"),Te.dataset.observationPhase="complete")}else if(xe==="guide"&&mr.length){const f=mr[0],d=ye.position.distanceTo(f);ye.position.lerp(f,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(d,.001))),zh.copy(ye.quaternion),ye.lookAt(ps),Hh.copy(ye.quaternion),ye.quaternion.copy(zh).slerp(Hh,1-Math.exp(-5*t)),d<.008&&(ye.position.copy(f),mr.shift()),mr.length||(ye.lookAt(ps),pa?tm(pa):lt("paused"))}else if(xe==="walk"){$p&&Dn&&cn&&document.pointerLockElement!==Te&&(Oi-=cS(cn.x,innerWidth)*t),ye.rotation.set(Eu,Oi,0);const f=Number(nn.has("KeyW")||nn.has("ArrowUp"))-Number(nn.has("KeyS")||nn.has("ArrowDown")),d=Number(nn.has("KeyD")||nn.has("ArrowRight"))-Number(nn.has("KeyA")||nn.has("ArrowLeft"));rn.speed=Vn,Bh.set(-Math.sin(Oi)*f+Math.cos(Oi)*d,0,-Math.cos(Oi)*f-Math.sin(Oi)*d).normalize(),rn.update(ma,Bh,t),ye.position.copy(ma)}const a=Math.hypot(ye.position.x-n,ye.position.z-i),o=xe==="walk"&&a>1e-4;if(si)Ys=0,pn=0;else{const f=o?Math.min(1,a/Math.max(t,.001)/ri.speed):0;Ys=In.lerp(Ys,f,1-Math.exp(-16*t)),o&&(So=(So+a*Math.PI*2/2.2)%(Math.PI*2)),pn=Math.sin(So)*.008*Ys,Math.abs(pn)<1e-5&&(pn=0)}if(pl=Math.max(pl,Math.abs(pn)),ml=Math.max(ml,rn.speed),ye.position.y+=pn,dl+=t,dl>.05){if(mE(r),ht==null||ht.update(),wt==null||wt.update(),Ot==null||Ot.update({selectedExhibit:on,observationPhase:Te.dataset.observationPhase}),kt){const f=kt.getState();Object.assign(Te.dataset,{hologramId:f.currentId||"",hologramPhase:f.phase||f.status,hologramPaused:String(f.paused),hologramCount:String(f.count)})}dl=0}for(const f of Yp)f.emissiveIntensity=In.lerp(f.emissiveIntensity,xe==="story"?.8:.35,1-Math.exp(-3*t));Cn.update(t)&&xe!=="entering"&&(ia=!0),pr==null||pr.update(t,si),kt==null||kt.update(t,{paused:!!(ht!=null&&ht.isEngaged()||pt.guide.open||xe==="story"),reduced:si});const c=performance.now()-s;Gs!==null&&(Jr=Gs,Gs=null,ft.setPixelRatio(Jr));const l=performance.now();ft.render(Ct,ye);const u=performance.now()-l;if(!document.hidden&&r-Jp>2500&&e<.25&&(zi.push(e*1e3),Ks.push(c),Js.push(u),zi.length>180&&(zi.shift(),Ks.shift(),Js.shift())),hl+=t,hl>1){const f=sm();f.sampleCount>=30&&f.frameP95>24?Kr++:Kr=0,Kr>=2&&Jr>1?(Gs=1,zi.length=0,Ks.length=0,Js.length=0,Kr=0):Kr>=3&&f.frameP95>35&&Jr>.85&&(Gs=.85,zi.length=0,Ks.length=0,Js.length=0,Kr=0),Object.assign(Te.dataset,{position:ye.position.toArray().map(d=>d.toFixed(3)).join(","),direction:[Oi,Eu].map(d=>d.toFixed(4)).join(","),mode:xe,bob:pn.toFixed(4),bobPeak:pl.toFixed(4),maxWalkSpeed:ml,speed:rn.speed,contacts:rn.contacts,queries:rn.queries,calls:ft.info.render.calls,triangles:ft.info.render.triangles,frameP50:f.frameP50.toFixed(2),frameP95:f.frameP95.toFixed(2),updateP95:f.updateP95.toFixed(2),renderP95:f.renderP95.toFixed(2),samples:f.sampleCount,dpr:Jr}),hl=0}}gs=requestAnimationFrame(lf);window.addEventListener("resize",()=>{cn=null,ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),ft.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",r=>{cancelAnimationFrame(gs),gs=0,rf(),!r.persisted&&(yu.abort(),wt==null||wt.dispose(),Ot==null||Ot.dispose(),ht==null||ht.dispose(),kt==null||kt.dispose())});window.addEventListener("pageshow",r=>{r.persisted&&(ms=performance.now(),gs||(gs=requestAnimationFrame(lf)))});
