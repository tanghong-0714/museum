(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="180",bm=0,_f=1,_m=2,qh=1,xm=2,bi=3,Dn=0,qt=1,an=2,Wi=0,ns=1,as=2,xf=3,vf=4,vm=5,pr=100,ym=101,Mm=102,Sm=103,Em=104,Tm=200,wm=201,Am=202,Rm=203,xl=204,vl=205,Cm=206,Pm=207,Lm=208,Im=209,Dm=210,Um=211,Nm=212,Fm=213,Om=214,yl=0,Ml=1,Sl=2,os=3,El=4,Tl=5,wl=6,Al=7,Cu=0,Bm=1,km=2,qi=0,zm=1,Hm=2,Vm=3,Gm=4,Wm=5,jh=6,qm=7,yf="attached",jm="detached",Xh=300,cs=301,ls=302,Rl=303,Cl=304,No=306,us=1e3,Vi=1001,wo=1002,$t=1003,Yh=1004,js=1005,Jt=1006,go=1007,Vn=1008,oi=1009,Kh=1010,Jh=1011,oa=1012,Pu=1013,vr=1014,Gn=1015,xs=1016,Lu=1017,Iu=1018,ca=1020,$h=35902,Zh=35899,Qh=1021,ep=1022,wn=1023,la=1026,ua=1027,Du=1028,Uu=1029,tp=1030,Nu=1031,Fu=1033,bo=33776,_o=33777,xo=33778,vo=33779,Pl=35840,Ll=35841,Il=35842,Dl=35843,Ul=36196,Nl=37492,Fl=37496,Ol=37808,Bl=37809,kl=37810,zl=37811,Hl=37812,Vl=37813,Gl=37814,Wl=37815,ql=37816,jl=37817,Xl=37818,Yl=37819,Kl=37820,Jl=37821,$l=36492,Zl=36494,Ql=36495,eu=36283,tu=36284,nu=36285,iu=36286,fa=2300,da=2301,jo=2302,Mf=2400,Sf=2401,Ef=2402,Xm=2500,Ym=0,np=1,ru=2,Km=3200,Jm=3201,Ou=0,$m=1,zi="",Rt="srgb",Zt="srgb-linear",Ao="linear",ct="srgb",Er=7680,Tf=519,Zm=512,Qm=513,eg=514,ip=515,tg=516,ng=517,ig=518,rg=519,su=35044,wf="300 es",ri=2e3,Ro=2001;class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Af=1234567;const Qs=Math.PI/180,fs=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Bu(i,e){return(i%e+e)%e}function sg(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ag(i,e,t){return i!==e?(t-i)/(e-i):0}function ea(i,e,t){return(1-t)*i+t*e}function og(i,e,t,n){return ea(i,e,1-Math.exp(-t*n))}function cg(i,e=1){return e-Math.abs(Bu(i,e*2)-e)}function lg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ug(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function fg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function dg(i,e){return i+Math.random()*(e-i)}function hg(i){return i*(.5-Math.random())}function pg(i){i!==void 0&&(Af=i);let e=Af+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mg(i){return i*Qs}function gg(i){return i*fs}function bg(i){return(i&i-1)===0&&i!==0}function _g(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function vg(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),d=a((e+n)/2),u=s((e-n)/2),f=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*d,c*u,c*f,o*l);break;case"YZY":i.set(c*f,o*d,c*u,o*l);break;case"ZXZ":i.set(c*u,c*f,o*d,o*l);break;case"XZX":i.set(o*d,c*g,c*h,o*l);break;case"YXY":i.set(c*h,o*d,c*g,o*l);break;case"ZYZ":i.set(c*g,c*h,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function st(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Un={DEG2RAD:Qs,RAD2DEG:fs,generateUUID:jn,clamp:qe,euclideanModulo:Bu,mapLinear:sg,inverseLerp:ag,lerp:ea,damp:og,pingpong:cg,smoothstep:lg,smootherstep:ug,randInt:fg,randFloat:dg,randFloatSpread:hg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:bg,ceilPowerOfTwo:_g,floorPowerOfTwo:xg,setQuaternionFromProperEuler:vg,normalize:st,denormalize:Hn};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],d=n[r+2],u=n[r+3];const f=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(u!==_||c!==f||l!==h||d!==g){let m=1-o;const p=c*f+l*h+d*g+u*_,y=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const v=Math.sqrt(x),E=Math.atan2(v,p*y);m=Math.sin(m*E)/v,o=Math.sin(o*E)/v}const b=o*y;if(c=c*m+f*b,l=l*m+h*b,d=d*m+g*b,u=u*m+_*b,m===1-o){const v=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=v,l*=v,d*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],d=n[r+3],u=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+d*u+c*h-l*f,e[t+1]=c*g+d*f+l*u-o*h,e[t+2]=l*g+d*h+o*f-c*u,e[t+3]=d*g-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(r/2),u=o(s/2),f=c(n/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"YZX":this._x=f*d*u+l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u-f*h*g;break;case"XZY":this._x=f*d*u-l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+r*l-s*c,this._y=r*d+a*c+s*o-n*l,this._z=s*d+a*l+n*c-r*o,this._w=a*d-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),d=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-s*u,this.z=r+c*u+s*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new L,Rf=new vn;class Xe{constructor(e,t,n,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=t,d[4]=s,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],g=n[8],_=r[0],m=r[3],p=r[6],y=r[1],x=r[4],b=r[7],v=r[2],E=r[5],T=r[8];return s[0]=a*_+o*y+c*v,s[3]=a*m+o*x+c*E,s[6]=a*p+o*b+c*T,s[1]=l*_+d*y+u*v,s[4]=l*m+d*x+u*E,s[7]=l*p+d*b+u*T,s[2]=f*_+h*y+g*v,s[5]=f*m+h*x+g*E,s[8]=f*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*s*d+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,f=o*c-d*s,h=l*s-a*c,g=t*u+n*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(r*l-d*n)*_,e[2]=(o*n-r*a)*_,e[3]=f*_,e[4]=(d*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=h*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yo.makeScale(e,t)),this}rotate(e){return this.premultiply(Yo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Yo=new Xe;function rp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ha(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function yg(){const i=ha("canvas");return i.style.display="block",i}const Cf={};function pa(i){i in Cf||(Cf[i]=!0,console.warn(i))}function Mg(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Pf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){const i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return pa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return pa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:Pf,fromXYZ:Lf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Qe=Sg();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Tr;class Eg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=ha("canvas")),Tr.width=e.width,Tr.height=e.height;const r=Tr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ha("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Si(t[n]/255)*255):t[n]=Si(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tg=0;class ku{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=jn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ko(r[a].image)):s.push(Ko(r[a]))}else s=Ko(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Ko(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Eg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wg=0;const Jo=new L;class It extends vs{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Vi,r=Vi,s=Jt,a=Vn,o=wn,c=oi,l=It.DEFAULT_ANISOTROPY,d=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=jn(),this.name="",this.source=new ku(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jo).x}get height(){return this.source.getSize(Jo).y}get depth(){return this.source.getSize(Jo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Xh;It.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,r=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(h+1)/2,v=(p+1)/2,E=(d+f)/4,T=(u+_)/4,A=(g+m)/4;return x>b&&x>v?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=T/n):b>v?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=A/r):v<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(v),n=T/s,r=A/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(f-d)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ag extends vs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new It(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ku(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Ag{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class sp extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rg extends It{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=$t,this.minFilter=$t,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,On):On.fromBufferAttribute(s,a),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Ta.subVectors(this.max,As),wr.subVectors(e.a,As),Ar.subVectors(e.b,As),Rr.subVectors(e.c,As),Ai.subVectors(Ar,wr),Ri.subVectors(Rr,Ar),tr.subVectors(wr,Rr);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-tr.z,tr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,tr.z,0,-tr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-tr.y,tr.x,0];return!$o(t,wr,Ar,Rr,Ta)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,wr,Ar,Rr,Ta))?!1:(wa.crossVectors(Ai,Ri),t=[wa.x,wa.y,wa.z],$o(t,wr,Ar,Rr,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],On=new L,Ea=new nt,wr=new L,Ar=new L,Rr=new L,Ai=new L,Ri=new L,tr=new L,As=new L,Ta=new L,wa=new L,nr=new L;function $o(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){nr.fromArray(i,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),l=t.dot(nr),d=n.dot(nr);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const Cg=new nt,Rs=new L,Zo=new L;class Jn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Cg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);const t=Rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Rs,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Zo)),this.expandByPoint(Rs.copy(e.center).sub(Zo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const di=new L,Qo=new L,Aa=new L,Ci=new L,ec=new L,Ra=new L,tc=new L;class Ki{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Qo.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Qo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Ci.dot(this.direction),c=-Ci.dot(Aa),l=Ci.lengthSq(),d=Math.abs(1-a*a);let u,f,h,g;if(d>0)if(u=a*c-o,f=a*o-c,g=s*d,u>=0)if(f>=-g)if(f<=g){const _=1/d;u*=_,f*=_,h=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=s,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f=-s,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-c),s),h=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-c),s),h=-u*u+f*(f+2*c)+l);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Qo).addScaledVector(Aa,f),h}intersectSphere(e,t){di.subVectors(e.center,this.origin);const n=di.dot(this.direction),r=di.dot(di)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,n,r,s){ec.subVectors(t,e),Ra.subVectors(n,e),tc.crossVectors(ec,Ra);let a=this.direction.dot(tc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ci.subVectors(this.origin,e);const c=o*this.direction.dot(Ra.crossVectors(Ci,Ra));if(c<0)return null;const l=o*this.direction.dot(ec.cross(Ci));if(l<0||c+l>a)return null;const d=-o*Ci.dot(tc);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(e,t,n,r,s,a,o,c,l,d,u,f,h,g,_,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,d,u,f,h,g,_,m)}set(e,t,n,r,s,a,o,c,l,d,u,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const f=a*d,h=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+g*l,t[5]=f-_*l,t[9]=-o*c,t[2]=_-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,g=l*d,_=l*u;t[0]=f+_*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=h*o-g,t[6]=_+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,g=l*d,_=l*u;t[0]=f-_*o,t[4]=-a*u,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*d,t[9]=_-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,h=a*u,g=o*d,_=o*u;t[0]=c*d,t[4]=g*l-h,t[8]=f*l+_,t[1]=c*u,t[5]=_*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=_-f*u,t[8]=g*u+h,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+g,t[10]=f-_*u}else if(e.order==="XZY"){const f=a*c,h=a*l,g=o*c,_=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+_,t[5]=a*d,t[9]=h*u-g,t[2]=g*u-h,t[6]=o*d,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Pg,e,Lg)}lookAt(e,t,n){const r=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Pi.crossVectors(n,dn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Pi.crossVectors(n,dn)),Pi.normalize(),Ca.crossVectors(dn,Pi),r[0]=Pi.x,r[4]=Ca.x,r[8]=dn.x,r[1]=Pi.y,r[5]=Ca.y,r[9]=dn.y,r[2]=Pi.z,r[6]=Ca.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],x=n[7],b=n[11],v=n[15],E=r[0],T=r[4],A=r[8],S=r[12],M=r[1],w=r[5],R=r[9],I=r[13],D=r[2],F=r[6],O=r[10],V=r[14],k=r[3],J=r[7],Z=r[11],fe=r[15];return s[0]=a*E+o*M+c*D+l*k,s[4]=a*T+o*w+c*F+l*J,s[8]=a*A+o*R+c*O+l*Z,s[12]=a*S+o*I+c*V+l*fe,s[1]=d*E+u*M+f*D+h*k,s[5]=d*T+u*w+f*F+h*J,s[9]=d*A+u*R+f*O+h*Z,s[13]=d*S+u*I+f*V+h*fe,s[2]=g*E+_*M+m*D+p*k,s[6]=g*T+_*w+m*F+p*J,s[10]=g*A+_*R+m*O+p*Z,s[14]=g*S+_*I+m*V+p*fe,s[3]=y*E+x*M+b*D+v*k,s[7]=y*T+x*w+b*F+v*J,s[11]=y*A+x*R+b*O+v*Z,s[15]=y*S+x*I+b*V+v*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*u-r*l*u-s*o*f+n*l*f+r*o*h-n*c*h)+_*(+t*c*h-t*l*f+s*a*f-r*a*h+r*l*d-s*c*d)+m*(+t*l*u-t*o*h-s*a*u+n*a*h+s*o*d-n*l*d)+p*(-r*o*d-t*c*u+t*o*f+r*a*u-n*a*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=u*m*l-_*f*l+_*c*h-o*m*h-u*c*p+o*f*p,x=g*f*l-d*m*l-g*c*h+a*m*h+d*c*p-a*f*p,b=d*_*l-g*u*l+g*o*h-a*_*h-d*o*p+a*u*p,v=g*u*c-d*_*c-g*o*f+a*_*f+d*o*m-a*u*m,E=t*y+n*x+r*b+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(_*f*s-u*m*s-_*r*h+n*m*h+u*r*p-n*f*p)*T,e[2]=(o*m*s-_*c*s+_*r*l-n*m*l-o*r*p+n*c*p)*T,e[3]=(u*c*s-o*f*s-u*r*l+n*f*l+o*r*h-n*c*h)*T,e[4]=x*T,e[5]=(d*m*s-g*f*s+g*r*h-t*m*h-d*r*p+t*f*p)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*T,e[7]=(a*f*s-d*c*s+d*r*l-t*f*l-a*r*h+t*c*h)*T,e[8]=b*T,e[9]=(g*u*s-d*_*s-g*n*h+t*_*h+d*n*p-t*u*p)*T,e[10]=(a*_*s-g*o*s+g*n*l-t*_*l-a*n*p+t*o*p)*T,e[11]=(d*o*s-a*u*s-d*n*l+t*u*l+a*n*h-t*o*h)*T,e[12]=v*T,e[13]=(d*_*r-g*u*r+g*n*f-t*_*f-d*n*m+t*u*m)*T,e[14]=(g*o*r-a*_*r-g*n*c+t*_*c+a*n*m-t*o*m)*T,e[15]=(a*u*r-d*o*r+d*n*c-t*u*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,d=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,d*o+n,d*c-r*a,0,l*c-r*o,d*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,d=a+a,u=o+o,f=s*l,h=s*d,g=s*u,_=a*d,m=a*u,p=o*u,y=c*l,x=c*d,b=c*u,v=n.x,E=n.y,T=n.z;return r[0]=(1-(_+p))*v,r[1]=(h+b)*v,r[2]=(g-x)*v,r[3]=0,r[4]=(h-b)*E,r[5]=(1-(f+p))*E,r[6]=(m+y)*E,r[7]=0,r[8]=(g+x)*T,r[9]=(m-y)*T,r[10]=(1-(f+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Cr.set(r[0],r[1],r[2]).length();const a=Cr.set(r[4],r[5],r[6]).length(),o=Cr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const l=1/s,d=1/a,u=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=ri,c=!1){const l=this.elements,d=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===ri)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ro)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=ri,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-r),f=-(t+e)/(t-e),h=-(n+r)/(n-r);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===ri)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ro)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new L,Bn=new Ne,Pg=new L(0,0,0),Lg=new L(1,1,1),Pi=new L,Ca=new L,dn=new L,If=new Ne,Df=new vn;class Nn{constructor(e=0,t=0,n=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],d=r[9],u=r[2],f=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Df.setFromEuler(this),this.setFromQuaternion(Df,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class zu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ig=0;const Uf=new L,Pr=new vn,hi=new Ne,Pa=new L,Cs=new L,Dg=new L,Ug=new vn,Nf=new L(1,0,0),Ff=new L(0,1,0),Of=new L(0,0,1),Bf={type:"added"},Ng={type:"removed"},Lr={type:"childadded",child:null},nc={type:"childremoved",child:null};class bt extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new L,t=new Nn,n=new vn,r=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Xe}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,t){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Cs,Pa,this.up):hi.lookAt(Pa,Cs,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),Pr.setFromRotationMatrix(hi),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ng),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,Dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}bt.DEFAULT_UP=new L(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new L,pi=new L,ic=new L,mi=new L,Ir=new L,Dr=new L,kf=new L,rc=new L,sc=new L,ac=new L,oc=new tt,cc=new tt,lc=new tt;class Lt{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kn.subVectors(r,t),pi.subVectors(n,t),ic.subVectors(e,t);const a=kn.dot(kn),o=kn.dot(pi),c=kn.dot(ic),l=pi.dot(pi),d=pi.dot(ic),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,g=(a*d-o*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return oc.setScalar(0),cc.setScalar(0),lc.setScalar(0),oc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(cc,s.y),a.addScaledVector(lc,s.z),a}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),pi.subVectors(e,t),kn.cross(pi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),kn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Lt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Lt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Lt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Lt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Lt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;Ir.subVectors(r,n),Dr.subVectors(s,n),rc.subVectors(e,n);const c=Ir.dot(rc),l=Dr.dot(rc);if(c<=0&&l<=0)return t.copy(n);sc.subVectors(e,r);const d=Ir.dot(sc),u=Dr.dot(sc);if(d>=0&&u<=d)return t.copy(r);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ir,a);ac.subVectors(e,s);const h=Ir.dot(ac),g=Dr.dot(ac);if(g>=0&&h<=g)return t.copy(s);const _=h*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Dr,o);const m=d*g-h*u;if(m<=0&&u-d>=0&&h-g>=0)return kf.subVectors(s,r),o=(u-d)/(u-d+(h-g)),t.copy(r).addScaledVector(kf,o);const p=1/(m+_+f);return a=_*p,o=f*p,t.copy(n).addScaledVector(Ir,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},La={h:0,s:0,l:0};function uc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Qe.workingColorSpace){if(e=Bu(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=ap[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Qe.workingToColorSpace(Vt.copy(this),e),Math.round(qe(Vt.r*255,0,255))*65536+Math.round(qe(Vt.g*255,0,255))*256+Math.round(qe(Vt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Rt){Qe.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,r=Vt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(La);const n=ea(Li.h,La.h,t),r=ea(Li.s,La.s,t),s=ea(Li.l,La.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Be;Be.NAMES=ap;let Fg=0;class Xn extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fg++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=ns,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xl&&(n.blendSrc=this.blendSrc),this.blendDst!==vl&&(n.blendDst=this.blendDst),this.blendEquation!==pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wn extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new L,Ia=new Ue;let Og=0;class kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=su,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==su&&(e.usage=this.usage),e}}class op extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cp extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Bg=0;const Sn=new Ne,fc=new bt,Ur=new L,hn=new nt,Ps=new nt,Ot=new L;class jt extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bg++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rp(e)?cp:op)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Dt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ps.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(hn.min,Ps.min),hn.expandByPoint(Ot),Ot.addVectors(hn.max,Ps.max),hn.expandByPoint(Ot)):(hn.expandByPoint(Ps.min),hn.expandByPoint(Ps.max))}hn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ot));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Ot.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),Ot.add(Ur)),r=Math.max(r,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let A=0;A<n.count;A++)o[A]=new L,c[A]=new L;const l=new L,d=new L,u=new L,f=new Ue,h=new Ue,g=new Ue,_=new L,m=new L;function p(A,S,M){l.fromBufferAttribute(n,A),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(s,A),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),d.sub(l),u.sub(l),h.sub(f),g.sub(f);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(w),m.copy(u).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(w),o[A].add(_),o[S].add(_),o[M].add(_),c[A].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,S=y.length;A<S;++A){const M=y[A],w=M.start,R=M.count;for(let I=w,D=w+R;I<D;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const x=new L,b=new L,v=new L,E=new L;function T(A){v.fromBufferAttribute(r,A),E.copy(v);const S=o[A];x.copy(S),x.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const w=b.dot(c[A])<0?-1:1;a.setXYZW(A,x.x,x.y,x.z,w)}for(let A=0,S=y.length;A<S;++A){const M=y[A],w=M.start,R=M.count;for(let I=w,D=w+R;I<D;I+=3)T(e.getX(I+0)),T(e.getX(I+1)),T(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,c=new L,l=new L,d=new L,u=new L;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,s),u.subVectors(r,s),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?h=c[_]*o.data.stride+o.offset:h=c[_]*d;for(let p=0;p<d;p++)f[g++]=l[h++]}return new kt(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const d=r[l];this.setAttribute(l,d.clone(t))}const s=e.morphAttributes;for(const l in s){const d=[],u=s[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zf=new Ne,ir=new Ki,Da=new Jn,Hf=new L,Ua=new L,Na=new L,Fa=new L,dc=new L,Oa=new L,Vf=new L,Ba=new L;class lt extends bt{constructor(e=new jt,t=new Wn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const d=o[c],u=s[c];d!==0&&(dc.fromBufferAttribute(u,e),a?Oa.addScaledVector(dc,d):Oa.addScaledVector(dc.sub(t),d))}t.add(Oa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(Da.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Da,Hf)===null||ir.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(zf.copy(s).invert(),ir.copy(e.ray).applyMatrix4(zf),!(n.boundingBox!==null&&ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=x;b<v;b+=3){const E=o.getX(b),T=o.getX(b+1),A=o.getX(b+2);r=ka(this,p,e,n,l,d,u,E,T,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=o.getX(m),x=o.getX(m+1),b=o.getX(m+2);r=ka(this,a,e,n,l,d,u,y,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),x=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=x;b<v;b+=3){const E=b,T=b+1,A=b+2;r=ka(this,p,e,n,l,d,u,E,T,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(c.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const y=m,x=m+1,b=m+2;r=ka(this,a,e,n,l,d,u,y,x,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kg(i,e,t,n,r,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Dn,o),c===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ba);return l<t.near||l>t.far?null:{distance:l,point:Ba.clone(),object:i}}function ka(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Ua),i.getVertexPosition(c,Na),i.getVertexPosition(l,Fa);const d=kg(i,e,t,n,Ua,Na,Fa,Vf);if(d){const u=new L;Lt.getBarycoord(Vf,Ua,Na,Fa,u),r&&(d.uv=Lt.getInterpolatedAttribute(r,o,c,l,u,new Ue)),s&&(d.uv1=Lt.getInterpolatedAttribute(s,o,c,l,u,new Ue)),a&&(d.normal=Lt.getInterpolatedAttribute(a,o,c,l,u,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new L,materialIndex:0};Lt.getNormal(Ua,Na,Fa,f.normal),d.face=f,d.barycoord=u}return d}class Ji extends jt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],d=[],u=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Dt(l,3)),this.setAttribute("normal",new Dt(d,3)),this.setAttribute("uv",new Dt(u,2));function g(_,m,p,y,x,b,v,E,T,A,S){const M=b/T,w=v/A,R=b/2,I=v/2,D=E/2,F=T+1,O=A+1;let V=0,k=0;const J=new L;for(let Z=0;Z<O;Z++){const fe=Z*w-I;for(let Le=0;Le<F;Le++){const Ye=Le*M-R;J[_]=Ye*y,J[m]=fe*x,J[p]=D,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=E>0?1:-1,d.push(J.x,J.y,J.z),u.push(Le/T),u.push(1-Z/A),V+=1}}for(let Z=0;Z<A;Z++)for(let fe=0;fe<T;fe++){const Le=f+fe+F*Z,Ye=f+fe+F*(Z+1),$e=f+(fe+1)+F*(Z+1),ze=f+(fe+1)+F*Z;c.push(Le,Ye,ze),c.push(Ye,$e,ze),k+=6}o.addGroup(h,k,S),h+=k,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Kt(i){const e={};for(let t=0;t<i.length;t++){const n=ds(i[t]);for(const r in n)e[r]=n[r]}return e}function zg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lp(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const up={clone:ds,merge:Kt};var Hg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hg,this.fragmentShader=Vg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=zg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class fp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new L,Gf=new Ue,Wf=new Ue;class Gt extends fp{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan(Qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,Gf,Wf),t.subVectors(Wf,Gf)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qs*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Fr=1;class Gg extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(Nr,Fr,e,t);r.layers=this.layers,this.add(r);const s=new Gt(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Nr,Fr,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Nr,Fr,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ri)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class dp extends It{constructor(e=[],t=cs,n,r,s,a,o,c,l,d){super(e,t,n,r,s,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wg extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new dp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ji(5,5,5),s=new xn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Wi});s.uniforms.tEquirect.value=t;const a=new lt(r,s),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Jt),new Gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class gn extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qg={type:"move"};class hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class hp extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class jg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=su,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Yt=new L;class Hu{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Hn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Hn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Hn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Hn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Hn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Hu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const qf=new L,jf=new tt,Xf=new tt,Xg=new L,Yf=new Ne,za=new L,pc=new Jn,Kf=new Ne,mc=new Ki;class Yg extends lt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yf,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingBox.expandByPoint(za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,za),this.boundingSphere.expandByPoint(za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pc.copy(this.boundingSphere),pc.applyMatrix4(r),e.ray.intersectsSphere(pc)!==!1&&(Kf.copy(r).invert(),mc.copy(e.ray).applyMatrix4(Kf),!(this.boundingBox!==null&&mc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;jf.fromBufferAttribute(r.attributes.skinIndex,e),Xf.fromBufferAttribute(r.attributes.skinWeight,e),qf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Xf.getComponent(s);if(a!==0){const o=jf.getComponent(s);Yf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Xg.copy(qf).applyMatrix4(Yf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class pp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class mp extends It{constructor(e=null,t=1,n=1,r,s,a,o,c,l=$t,d=$t,u,f){super(null,a,o,c,l,d,r,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jf=new Ne,Kg=new Ne;class Vu{constructor(e=[],t=[]){this.uuid=jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Kg;Jf.multiplyMatrices(o,t[s]),Jf.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Vu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new mp(t,e,e,wn,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new pp),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class au extends kt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Or=new Ne,$f=new Ne,Ha=[],Zf=new nt,Jg=new Ne,Ls=new lt,Is=new Jn;class gp extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new au(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Jg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Zf.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Zf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Is.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Is)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Is.copy(this.boundingSphere),Is.applyMatrix4(n),e.ray.intersectsSphere(Is)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Or),$f.multiplyMatrices(n,Or),Ls.matrixWorld=$f,Ls.raycast(e,Ha);for(let a=0,o=Ha.length;a<o;a++){const c=Ha[a];c.instanceId=s,c.object=this,t.push(c)}Ha.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new au(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new mp(new Float32Array(r*this.count),r,this.count,Du,Gn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gc=new L,$g=new L,Zg=new Xe;class ti{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=gc.subVectors(n,t).cross($g.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(gc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Zg.getNormalMatrix(e),r=this.coplanarPoint(gc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Jn,Qg=new Ue(.5,.5),Va=new L;class Gu{constructor(e=new ti,t=new ti,n=new ti,r=new ti,s=new ti,a=new ti){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ri,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],d=s[4],u=s[5],f=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],y=s[12],x=s[13],b=s[14],v=s[15];if(r[0].setComponents(l-a,h-d,p-g,v-y).normalize(),r[1].setComponents(l+a,h+d,p+g,v+y).normalize(),r[2].setComponents(l+o,h+u,p+_,v+x).normalize(),r[3].setComponents(l-o,h-u,p-_,v-x).normalize(),n)r[4].setComponents(c,f,m,b).normalize(),r[5].setComponents(l-c,h-f,p-m,v-b).normalize();else if(r[4].setComponents(l-c,h-f,p-m,v-b).normalize(),t===ri)r[5].setComponents(l+c,h+f,p+m,v+b).normalize();else if(t===Ro)r[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=Qg.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Co=new L,Po=new L,Qf=new Ne,Ds=new Ki,Ga=new Jn,bc=new L,ed=new L;class Wu extends bt{constructor(e=new jt,t=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Co.fromBufferAttribute(t,r-1),Po.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Co.distanceTo(Po);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ga.copy(n.boundingSphere),Ga.applyMatrix4(r),Ga.radius+=s,e.ray.intersectsSphere(Ga)===!1)return;Qf.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=d.getX(_),y=d.getX(_+1),x=Wa(this,e,Ds,c,p,y,_);x&&t.push(x)}if(this.isLineLoop){const _=d.getX(g-1),m=d.getX(h),p=Wa(this,e,Ds,c,_,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=h,m=g-1;_<m;_+=l){const p=Wa(this,e,Ds,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Wa(this,e,Ds,c,g-1,h,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wa(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Co.fromBufferAttribute(o,r),Po.fromBufferAttribute(o,s),t.distanceSqToSegment(Co,Po,bc,ed)>n)return;bc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(bc);if(!(l<e.near||l>e.far))return{distance:l,point:ed.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const td=new L,nd=new L;class eb extends Wu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)td.fromBufferAttribute(t,r),nd.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+td.distanceTo(nd);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tb extends Wu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _p extends Xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const id=new Ne,ou=new Ki,qa=new Jn,ja=new L;class xp extends bt{constructor(e=new jt,t=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(r),qa.radius+=s,e.ray.intersectsSphere(qa)===!1)return;id.copy(r).invert(),ou.copy(e.ray).applyMatrix4(id);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,_=h;g<_;g++){const m=l.getX(g);ja.fromBufferAttribute(u,m),rd(ja,m,c,r,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let g=f,_=h;g<_;g++)ja.fromBufferAttribute(u,g),rd(ja,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function rd(i,e,t,n,r,s,a){const o=ou.distanceSqToPoint(i);if(o<t){const c=new L;ou.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class vp extends It{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yp extends It{constructor(e,t,n=vr,r,s,a,o=$t,c=$t,l,d=la,u=1){if(d!==la&&d!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,r,s,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ku(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Mp extends It{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gr extends jt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const d=[],u=[],f=[],h=[];let g=0;const _=[],m=n/2;let p=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new Dt(u,3)),this.setAttribute("normal",new Dt(f,3)),this.setAttribute("uv",new Dt(h,2));function y(){const b=new L,v=new L;let E=0;const T=(t-e)/n;for(let A=0;A<=s;A++){const S=[],M=A/s,w=M*(t-e)+e;for(let R=0;R<=r;R++){const I=R/r,D=I*c+o,F=Math.sin(D),O=Math.cos(D);v.x=w*F,v.y=-M*n+m,v.z=w*O,u.push(v.x,v.y,v.z),b.set(F,T,O).normalize(),f.push(b.x,b.y,b.z),h.push(I,1-M),S.push(g++)}_.push(S)}for(let A=0;A<r;A++)for(let S=0;S<s;S++){const M=_[S][A],w=_[S+1][A],R=_[S+1][A+1],I=_[S][A+1];(e>0||S!==0)&&(d.push(M,w,I),E+=3),(t>0||S!==s-1)&&(d.push(w,R,I),E+=3)}l.addGroup(p,E,0),p+=E}function x(b){const v=g,E=new Ue,T=new L;let A=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let R=1;R<=r;R++)u.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;const w=g;for(let R=0;R<=r;R++){const D=R/r*c+o,F=Math.cos(D),O=Math.sin(D);T.x=S*O,T.y=m*M,T.z=S*F,u.push(T.x,T.y,T.z),f.push(0,M,0),E.x=F*.5+.5,E.y=O*.5*M+.5,h.push(E.x,E.y),g++}for(let R=0;R<r;R++){const I=v+R,D=w+R;b===!0?d.push(D,D+1,I):d.push(D+1,D,I),A+=3}l.addGroup(p,A,b===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends jt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,d=c+1,u=e/o,f=t/c,h=[],g=[],_=[],m=[];for(let p=0;p<d;p++){const y=p*f-a;for(let x=0;x<l;x++){const b=x*u-s;g.push(b,-y,0),_.push(0,0,1),m.push(x/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const x=y+l*p,b=y+l*(p+1),v=y+1+l*(p+1),E=y+1+l*p;h.push(x,b,E),h.push(b,v,E)}this.setIndex(h),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(_,3)),this.setAttribute("uv",new Dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}class qu extends jt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],d=new L,u=new L,f=new L;for(let h=0;h<=n;h++)for(let g=0;g<=r;g++){const _=g/r*s,m=h/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=r;g++){const _=(r+1)*h+g-1,m=(r+1)*(h-1)+g-1,p=(r+1)*(h-1)+g,y=(r+1)*h+g;a.push(_,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Dt(o,3)),this.setAttribute("normal",new Dt(c,3)),this.setAttribute("uv",new Dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mn extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends mn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nb extends Xn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ou,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Cu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ib extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Km,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rb extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function sb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ab(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function sd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)r[a++]=i[o+c]}return r}function Sp(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class xa{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ob extends xa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mf,endingEnd:Mf}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sf:s=e,o=2*t-n;break;case Ef:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sf:a=e,c=2*n-t;break;case Ef:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(r-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-h)*m+(1.5+h)*_+.5*g,b=h*m-h*_;for(let v=0;v!==o;++v)s[v]=p*a[d+v]+y*a[l+v]+x*a[c+v]+b*a[u+v];return s}}class cb extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(r-t),u=1-d;for(let f=0;f!==o;++f)s[f]=a[l+f]*u+a[c+f]*d;return s}}class lb extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class $n{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ob(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fa:t=this.InterpolantFactoryMethodDiscrete;break;case da:t=this.InterpolantFactoryMethodLinear;break;case jo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fa;case this.InterpolantFactoryMethodLinear:return da;case this.InterpolantFactoryMethodSmooth:return jo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&sb(r))for(let o=0,c=r.length;o!==c;++o){const l=r[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(r)c=!0;else{const u=o*n,f=u-n,h=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[f+g]||_!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[u+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}$n.prototype.ValueTypeName="";$n.prototype.TimeBufferType=Float32Array;$n.prototype.ValueBufferType=Float32Array;$n.prototype.DefaultInterpolation=da;class ys extends $n{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=fa;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends $n{constructor(e,t,n,r){super(e,t,n,r)}}Ep.prototype.ValueTypeName="color";class hs extends $n{constructor(e,t,n,r){super(e,t,n,r)}}hs.prototype.ValueTypeName="number";class ub extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t);let l=e*o;for(let d=l+o;l!==d;l+=4)vn.slerpFlat(s,0,a,l-o,a,l,c);return s}}class ps extends $n{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ub(this.times,this.values,this.getValueSize(),e)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Ms extends $n{constructor(e,t,n){super(e,t,n)}}Ms.prototype.ValueTypeName="string";Ms.prototype.ValueBufferType=Array;Ms.prototype.DefaultInterpolation=fa;Ms.prototype.InterpolantFactoryMethodLinear=void 0;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends $n{constructor(e,t,n,r){super(e,t,n,r)}}ms.prototype.ValueTypeName="vector";class fb{constructor(e="",t=-1,n=[],r=Xm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=jn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(hb(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push($n.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const d=ab(c);c=sd(c,1,d),l=sd(l,1,d),!r&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new hs(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(s);if(d&&d.length>1){const u=d[1];let f=r[u];f||(r[u]=f=[]),f.push(l)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,h,g,_){if(h.length!==0){const m=[],p=[];Sp(h,m,p,g),m.length!==0&&_.push(new u(f,m,p))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)h[f[g].morphTargets[_]]=-1;for(const _ in h){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}r.push(new hs(".morphTargetInfluence["+_+"]",m,p))}c=h.length*a}else{const h=".bones["+t[u].name+"]";n(ms,h+".position",f,"pos",r),n(ps,h+".quaternion",f,"rot",r),n(ms,h+".scale",f,"scl",r)}}return r.length===0?null:new this(s,c,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function db(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return hs;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return Ep;case"quaternion":return ps;case"bool":case"boolean":return ys;case"string":return Ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function hb(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=db(i.type);if(i.times===void 0){const t=[],n=[];Sp(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pb{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,s===!1&&r.onStart!==void 0&&r.onStart(d,a,o),s=!0},this.itemEnd=function(d){a++,r.onProgress!==void 0&&r.onProgress(d,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){const h=l[u],g=l[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const mb=new pb;class Ss{constructor(e){this.manager=e!==void 0?e:mb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";const gi={};class gb extends Error{constructor(e,t){super(e),this.response=t}}class Tp extends Ss{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=vi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:n,onError:r});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=gi[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:x,value:b})=>{if(x)p.close();else{_+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let E=0,T=d.length;E<T;E++){const A=d[E];A.onProgress&&A.onProgress(v)}p.enqueue(b),y()}},x=>{p.error(x)})}}});return new Response(m)}else throw new gb(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{vi.add(`file:${e}`,l);const d=gi[e];delete gi[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onLoad&&h.onLoad(l)}}).catch(l=>{const d=gi[e];if(d===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Br=new WeakMap;class bb extends Ss{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Br.get(a);u===void 0&&(u=[],Br.set(a,u)),u.push({onLoad:t,onError:r})}return a}const o=ha("img");function c(){d(),t&&t(this);const u=Br.get(this)||[];for(let f=0;f<u.length;f++){const h=u[f];h.onLoad&&h.onLoad(this)}Br.delete(this),s.manager.itemEnd(e)}function l(u){d(),r&&r(u),vi.remove(`image:${e}`);const f=Br.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(u)}Br.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class _b extends Ss{constructor(e){super(e)}load(e,t,n,r){const s=new It,a=new bb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Fo extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class xb extends Fo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _c=new Ne,ad=new L,od=new L;class ju{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gu,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ad.setFromMatrixPosition(e.matrixWorld),t.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(od),t.updateMatrixWorld(),_c.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_c)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vb extends ju{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=fs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wp extends Fo{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new vb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const cd=new Ne,Us=new L,xc=new L;class yb extends ju{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),xc.copy(n.position),xc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(xc),n.updateMatrixWorld(),r.makeTranslation(-Us.x,-Us.y,-Us.z),cd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cd,n.coordinateSystem,n.reversedDepth)}}class Ap extends Fo{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new yb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Xu extends fp{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mb extends ju{constructor(){super(new Xu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sb extends Fo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ta{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const vc=new WeakMap;class Eb extends Ss{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(vc.has(a)===!0)r&&r(vc.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){r&&r(l),vc.set(c,l),vi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Tb extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Yu="\\[\\]\\.:\\/",wb=new RegExp("["+Yu+"]","g"),Ku="[^"+Yu+"]",Ab="[^"+Yu.replace("\\.","")+"]",Rb=/((?:WC+[\/:])*)/.source.replace("WC",Ku),Cb=/(WCOD+)?/.source.replace("WCOD",Ab),Pb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ku),Lb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ku),Ib=new RegExp("^"+Rb+Cb+Pb+Lb+"$"),Db=["material","materials","bones","map"];class Ub{constructor(e,t,n){const r=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class at{constructor(e,t,n){this.path=t,this.parsedPath=n||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,n):new at(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wb,"")}static parseTrackName(e){const t=Ib.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Db.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[r];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Ub;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const ld=new Ne;class Ju{constructor(e,t,n=0,r=1/0){this.ray=new Ki(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new zu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ld.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ld),this}intersectObject(e,t=!0,n=[]){return cu(e,this,n,t),n.sort(ud),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)cu(e[r],this,n,t);return n.sort(ud),n}}function ud(i,e){return i.distance-e.distance}function cu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)cu(s[a],e,t,!0)}}const fd=new L,Ya=new L,kr=new L,zr=new L,yc=new L,Nb=new L,Fb=new L;class ci{constructor(e=new L,t=new L){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){fd.subVectors(e,this.start),Ya.subVectors(this.end,this.start);const n=Ya.dot(Ya);let s=Ya.dot(fd)/n;return t&&(s=qe(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(e,t=Nb,n=Fb){const r=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,d=e.end;kr.subVectors(l,o),zr.subVectors(d,c),yc.subVectors(o,c);const u=kr.dot(kr),f=zr.dot(zr),h=zr.dot(yc);if(u<=r&&f<=r)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=r)s=0,a=h/f,a=qe(a,0,1);else{const g=kr.dot(yc);if(f<=r)a=0,s=qe(-g/u,0,1);else{const _=kr.dot(zr),m=u*f-_*_;m!==0?s=qe((_*h-g*f)/m,0,1):s=0,a=(_*s+h)/f,a<0?(a=0,s=qe(-g/u,0,1)):a>1&&(a=1,s=qe((_-g)/u,0,1))}}return t.copy(o).add(kr.multiplyScalar(s)),n.copy(c).add(zr.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function dd(i,e,t,n){const r=Ob(n);switch(t){case Qh:return i*e;case Du:return i*e/r.components*r.byteLength;case Uu:return i*e/r.components*r.byteLength;case tp:return i*e*2/r.components*r.byteLength;case Nu:return i*e*2/r.components*r.byteLength;case ep:return i*e*3/r.components*r.byteLength;case wn:return i*e*4/r.components*r.byteLength;case Fu:return i*e*4/r.components*r.byteLength;case bo:case _o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xo:case vo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ll:case Dl:return Math.max(i,16)*Math.max(e,8)/4;case Pl:case Il:return Math.max(i,8)*Math.max(e,8)/2;case Ul:case Nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Hl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case $l:case Zl:case Ql:return Math.ceil(i/4)*Math.ceil(e/4)*16;case eu:case tu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case nu:case iu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ob(i){switch(i){case oi:case Kh:return{byteLength:1,components:1};case oa:case Jh:case xs:return{byteLength:2,components:1};case Lu:case Iu:return{byteLength:2,components:4};case vr:case Pu:case Gn:return{byteLength:4,components:1};case $h:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rp(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Bb(i){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=i.SHORT;else if(l instanceof Uint32Array)h=i.UNSIGNED_INT;else if(l instanceof Int32Array)h=i.INT;else if(l instanceof Int8Array)h=i.BYTE;else if(l instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){const g=u[f],_=u[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){const _=u[h];i.bufferSubData(l,_.start*d.BYTES_PER_ELEMENT,d,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var kb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zb=`#ifdef USE_ALPHAHASH
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
#endif`,Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qb=`#ifdef USE_AOMAP
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
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xb=`#ifdef USE_BATCHING
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
#endif`,Yb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$b=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zb=`#ifdef USE_IRIDESCENCE
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
#endif`,Qb=`#ifdef USE_BUMPMAP
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
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c0=`#define PI 3.141592653589793
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
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,u0=`vec3 transformedNormal = objectNormal;
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
#endif`,f0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,d0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m0="gl_FragColor = linearToOutputTexel( gl_FragColor );",g0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,T0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
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
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F0=`PhysicalMaterial material;
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
#endif`,O0=`struct PhysicalMaterial {
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
}`,B0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Y0=`#if defined( USE_POINTS_UV )
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
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Z0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e_=`#ifdef USE_MORPHTARGETS
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
#endif`,t_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,r_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,o_=`#ifdef USE_NORMALMAP
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
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,__=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,M_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,S_=`float getShadowMask() {
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
}`,E_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T_=`#ifdef USE_SKINNING
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
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A_=`#ifdef USE_SKINNING
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
#endif`,R_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
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
#endif`,D_=`#ifdef USE_TRANSMISSION
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
#endif`,U_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k_=`uniform sampler2D t2D;
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`#include <common>
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
}`,q_=`#if DEPTH_PACKING == 3200
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
}`,j_=`#define DISTANCE
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
}`,X_=`#define DISTANCE
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
}`,Y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J_=`uniform float scale;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Z_=`#include <common>
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
}`,Q_=`uniform vec3 diffuse;
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
}`,ex=`#define LAMBERT
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
}`,tx=`#define LAMBERT
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
}`,nx=`#define MATCAP
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
}`,ix=`#define MATCAP
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
}`,rx=`#define NORMAL
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
}`,sx=`#define NORMAL
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
}`,ax=`#define PHONG
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
}`,ox=`#define PHONG
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
}`,cx=`#define STANDARD
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
}`,lx=`#define STANDARD
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
}`,ux=`#define TOON
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
}`,fx=`#define TOON
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
}`,dx=`uniform float size;
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
}`,hx=`uniform vec3 diffuse;
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
}`,px=`#include <common>
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
}`,mx=`uniform vec3 color;
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
}`,gx=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:kb,alphahash_pars_fragment:zb,alphamap_fragment:Hb,alphamap_pars_fragment:Vb,alphatest_fragment:Gb,alphatest_pars_fragment:Wb,aomap_fragment:qb,aomap_pars_fragment:jb,batching_pars_vertex:Xb,batching_vertex:Yb,begin_vertex:Kb,beginnormal_vertex:Jb,bsdfs:$b,iridescence_fragment:Zb,bumpmap_pars_fragment:Qb,clipping_planes_fragment:e0,clipping_planes_pars_fragment:t0,clipping_planes_pars_vertex:n0,clipping_planes_vertex:i0,color_fragment:r0,color_pars_fragment:s0,color_pars_vertex:a0,color_vertex:o0,common:c0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:u0,displacementmap_pars_vertex:f0,displacementmap_vertex:d0,emissivemap_fragment:h0,emissivemap_pars_fragment:p0,colorspace_fragment:m0,colorspace_pars_fragment:g0,envmap_fragment:b0,envmap_common_pars_fragment:_0,envmap_pars_fragment:x0,envmap_pars_vertex:v0,envmap_physical_pars_fragment:L0,envmap_vertex:y0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:E0,fog_pars_fragment:T0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:D0,lights_phong_fragment:U0,lights_phong_pars_fragment:N0,lights_physical_fragment:F0,lights_physical_pars_fragment:O0,lights_fragment_begin:B0,lights_fragment_maps:k0,lights_fragment_end:z0,logdepthbuf_fragment:H0,logdepthbuf_pars_fragment:V0,logdepthbuf_pars_vertex:G0,logdepthbuf_vertex:W0,map_fragment:q0,map_pars_fragment:j0,map_particle_fragment:X0,map_particle_pars_fragment:Y0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:J0,morphinstance_vertex:$0,morphcolor_vertex:Z0,morphnormal_vertex:Q0,morphtarget_pars_vertex:e_,morphtarget_vertex:t_,normal_fragment_begin:n_,normal_fragment_maps:i_,normal_pars_fragment:r_,normal_pars_vertex:s_,normal_vertex:a_,normalmap_pars_fragment:o_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:l_,clearcoat_pars_fragment:u_,iridescence_pars_fragment:f_,opaque_fragment:d_,packing:h_,premultiplied_alpha_fragment:p_,project_vertex:m_,dithering_fragment:g_,dithering_pars_fragment:b_,roughnessmap_fragment:__,roughnessmap_pars_fragment:x_,shadowmap_pars_fragment:v_,shadowmap_pars_vertex:y_,shadowmap_vertex:M_,shadowmask_pars_fragment:S_,skinbase_vertex:E_,skinning_pars_vertex:T_,skinning_vertex:w_,skinnormal_vertex:A_,specularmap_fragment:R_,specularmap_pars_fragment:C_,tonemapping_fragment:P_,tonemapping_pars_fragment:L_,transmission_fragment:I_,transmission_pars_fragment:D_,uv_pars_fragment:U_,uv_pars_vertex:N_,uv_vertex:F_,worldpos_vertex:O_,background_vert:B_,background_frag:k_,backgroundCube_vert:z_,backgroundCube_frag:H_,cube_vert:V_,cube_frag:G_,depth_vert:W_,depth_frag:q_,distanceRGBA_vert:j_,distanceRGBA_frag:X_,equirect_vert:Y_,equirect_frag:K_,linedashed_vert:J_,linedashed_frag:$_,meshbasic_vert:Z_,meshbasic_frag:Q_,meshlambert_vert:ex,meshlambert_frag:tx,meshmatcap_vert:nx,meshmatcap_frag:ix,meshnormal_vert:rx,meshnormal_frag:sx,meshphong_vert:ax,meshphong_frag:ox,meshphysical_vert:cx,meshphysical_frag:lx,meshtoon_vert:ux,meshtoon_frag:fx,points_vert:dx,points_frag:hx,shadow_vert:px,shadow_frag:mx,sprite_vert:gx,sprite_frag:bx},de={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ni={basic:{uniforms:Kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Kt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Kt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Kt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Kt([de.points,de.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Kt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Kt([de.common,de.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Kt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Kt([de.sprite,de.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Kt([de.common,de.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Kt([de.lights,de.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ni.physical={uniforms:Kt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Ka={r:0,b:0,g:0},sr=new Nn,_x=new Ne;function xx(i,e,t,n,r,s,a){const o=new Be(0);let c=s===!0?0:1,l,d,u=null,f=0,h=null;function g(x){let b=x.isScene===!0?x.background:null;return b&&b.isTexture&&(b=(x.backgroundBlurriness>0?t:e).get(b)),b}function _(x){let b=!1;const v=g(x);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===No)?(d===void 0&&(d=new lt(new Ji(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ds(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),sr.copy(b.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(_x.makeRotationFromEuler(sr)),d.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ct,(u!==v||f!==v.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),d.layers.enableAll(),x.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new lt(new $i(2,2),new xn({name:"BackgroundMaterial",uniforms:ds(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,b){x.getRGB(Ka,lp(i)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,b,a)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,b=1){o.set(x),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m,dispose:y}}function vx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,w,R,I,D){let F=!1;const O=u(I,R,w);s!==O&&(s=O,l(s.object)),F=h(M,I,R,D),F&&g(M,I,R,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(M,w,R,I),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function u(M,w,R){const I=R.wireframe===!0;let D=n[M.id];D===void 0&&(D={},n[M.id]=D);let F=D[w.id];F===void 0&&(F={},D[w.id]=F);let O=F[I];return O===void 0&&(O=f(c()),F[I]=O),O}function f(M){const w=[],R=[],I=[];for(let D=0;D<t;D++)w[D]=0,R[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:I,object:M,attributes:{},index:null}}function h(M,w,R,I){const D=s.attributes,F=w.attributes;let O=0;const V=R.getAttributes();for(const k in V)if(V[k].location>=0){const Z=D[k];let fe=F[k];if(fe===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),Z===void 0||Z.attribute!==fe||fe&&Z.data!==fe.data)return!0;O++}return s.attributesNum!==O||s.index!==I}function g(M,w,R,I){const D={},F=w.attributes;let O=0;const V=R.getAttributes();for(const k in V)if(V[k].location>=0){let Z=F[k];Z===void 0&&(k==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),k==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));const fe={};fe.attribute=Z,Z&&Z.data&&(fe.data=Z.data),D[k]=fe,O++}s.attributes=D,s.attributesNum=O,s.index=I}function _(){const M=s.newAttributes;for(let w=0,R=M.length;w<R;w++)M[w]=0}function m(M){p(M,0)}function p(M,w){const R=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;R[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),D[M]!==w&&(i.vertexAttribDivisor(M,w),D[M]=w)}function y(){const M=s.newAttributes,w=s.enabledAttributes;for(let R=0,I=w.length;R<I;R++)w[R]!==M[R]&&(i.disableVertexAttribArray(R),w[R]=0)}function x(M,w,R,I,D,F,O){O===!0?i.vertexAttribIPointer(M,w,R,D,F):i.vertexAttribPointer(M,w,R,I,D,F)}function b(M,w,R,I){_();const D=I.attributes,F=R.getAttributes(),O=w.defaultAttributeValues;for(const V in F){const k=F[V];if(k.location>=0){let J=D[V];if(J===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const Z=J.normalized,fe=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Ye=Le.buffer,$e=Le.type,ze=Le.bytesPerElement,X=$e===i.INT||$e===i.UNSIGNED_INT||J.gpuType===Pu;if(J.isInterleavedBufferAttribute){const $=J.data,j=$.stride,ae=J.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe,$.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let oe=0;oe<k.locationSize;oe++)x(k.location+oe,fe/k.locationSize,$e,Z,j*ze,(ae+fe/k.locationSize*oe)*ze,X)}else{if(J.isInstancedBufferAttribute){for(let $=0;$<k.locationSize;$++)p(k.location+$,J.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let $=0;$<k.locationSize;$++)m(k.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let $=0;$<k.locationSize;$++)x(k.location+$,fe/k.locationSize,$e,Z,fe*ze,fe/k.locationSize*$*ze,X)}}else if(O!==void 0){const Z=O[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(k.location,Z);break;case 3:i.vertexAttrib3fv(k.location,Z);break;case 4:i.vertexAttrib4fv(k.location,Z);break;default:i.vertexAttrib1fv(k.location,Z)}}}}y()}function v(){A();for(const M in n){const w=n[M];for(const R in w){const I=w[R];for(const D in I)d(I[D].object),delete I[D];delete w[R]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const w=n[M.id];for(const R in w){const I=w[R];for(const D in I)d(I[D].object),delete I[D];delete w[R]}delete n[M.id]}function T(M){for(const w in n){const R=n[w];if(R[M.id]===void 0)continue;const I=R[M.id];for(const D in I)d(I[D].object),delete I[D];delete R[M.id]}}function A(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function yx(i,e,t){let n;function r(l){n=l}function s(l,d){i.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(i.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,n,1)}function c(l,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=d[_]*f[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Mx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==wn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===xs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==oi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Gn&&!A)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function Sx(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ti,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||r;return r=f,n=u.length,h},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?d(null):l();else{const y=s?0:n,x=y*4;let b=p.clippingState||null;c.value=b,b=d(g,f,x,h);for(let v=0;v!==x;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=h+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,b=h;x!==_;++x,b+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ex(i){let e=new WeakMap;function t(a,o){return o===Rl?a.mapping=cs:o===Cl&&(a.mapping=ls),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rl||o===Cl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Wg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qr=4,hd=[.125,.215,.35,.446,.526,.582],mr=20,Mc=new Xu,pd=new Be;let Sc=null,Ec=0,Tc=0,wc=!1;const hr=(1+Math.sqrt(5))/2,Hr=1/hr,md=[new L(-hr,Hr,0),new L(hr,Hr,0),new L(-Hr,0,hr),new L(Hr,0,hr),new L(0,hr,-Hr),new L(0,hr,Hr),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Tx=new L;class lu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Tx}=s;Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sc,Ec,Tc),this._renderer.xr.enabled=wc,e.scissorTest=!1,Ja(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cs||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sc=this._renderer.getRenderTarget(),Ec=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:xs,format:wn,colorSpace:Zt,depthBuffer:!1},r=gd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wx(s)),this._blurMaterial=Ax(s,e,t)}return r}_compileMaterial(e){const t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,n,r,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(pd),u.toneMapping=qi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null));const _=new Wn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new lt(new Ji,_);let p=!1;const y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,p=!0):(_.color.copy(pd),p=!0);for(let x=0;x<6;x++){const b=x%3;b===0?(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+d[x],s.y,s.z)):b===1?(c.up.set(0,0,l[x]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+d[x],s.z)):(c.up.set(0,l[x],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+d[x]));const v=this._cubeSize;Ja(r,b*v,x>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===cs||e.mapping===ls;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ja(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Mc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=md[(r-s-1)%md.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new lt(this._lodPlanes[r],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*mr-1),_=s/g,m=isFinite(s)?1+Math.floor(d*_):mr;m>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${mr}`);const p=[];let y=0;for(let T=0;T<mr;++T){const A=T/_,S=Math.exp(-A*A/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[r],v=3*b*(r>x-Qr?r-x+Qr:0),E=4*(this._cubeSize-b);Ja(t,v,E,3*b,2*b),c.setRenderTarget(t),c.render(u,Mc)}}function wx(i){const e=[],t=[],n=[];let r=i;const s=i-Qr+1+hd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Qr?c=hd[a-i+Qr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,g=6,_=3,m=2,p=1,y=new Float32Array(_*g*h),x=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,A=E>2?0:-1,S=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(S,_*g*E),x.set(f,m*g*E);const M=[E,E,E,E,E,E];b.set(M,p*g*E)}const v=new jt;v.setAttribute("position",new kt(y,_)),v.setAttribute("uv",new kt(x,m)),v.setAttribute("faceIndex",new kt(b,p)),e.push(v),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function gd(i,e,t){const n=new Xi(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ja(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ax(i,e,t){const n=new Float32Array(mr),r=new L(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function bd(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$u(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function _d(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$u(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function $u(){return`

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
	`}function Rx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Rl||c===Cl,d=c===cs||c===ls;if(l||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new lu(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const h=o.image;return l&&h&&h.height>0||d&&h&&r(h)?(t===null&&(t=new lu(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Cx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&pa("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Px(i,e,t,n){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function l(u){const f=[],h=u.index,g=u.attributes.position;let _=0;if(h!==null){const y=h.array;_=h.version;for(let x=0,b=y.length;x<b;x+=3){const v=y[x+0],E=y[x+1],T=y[x+2];f.push(v,E,E,T,T,v)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const v=x+0,E=x+1,T=x+2;f.push(v,E,E,T,T,v)}}else return;const m=new(rp(f)?cp:op)(f,1);m.version=_;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const f=s.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return s.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function Lx(i,e,t){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,h){i.drawElements(n,h,s,f*a),t.update(h,n,1)}function l(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,s,f*a,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function u(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,f,0,_,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*_[y];t.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Ix(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Dx(i,e,t){const n=new WeakMap,r=new tt;function s(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),m===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*E*4*u),A=new sp(T,v,E,u);A.type=Gn,A.needsUpdate=!0;const S=b*4;for(let w=0;w<u;w++){const R=p[w],I=y[w],D=x[w],F=v*E*4*w;for(let O=0;O<R.count;O++){const V=O*S;g===!0&&(r.fromBufferAttribute(R,O),T[F+V+0]=r.x,T[F+V+1]=r.y,T[F+V+2]=r.z,T[F+V+3]=0),_===!0&&(r.fromBufferAttribute(I,O),T[F+V+4]=r.x,T[F+V+5]=r.y,T[F+V+6]=r.z,T[F+V+7]=0),m===!0&&(r.fromBufferAttribute(D,O),T[F+V+8]=r.x,T[F+V+9]=r.y,T[F+V+10]=r.z,T[F+V+11]=D.itemSize===4?r.w:1)}}f={count:u,texture:A,size:new Ue(v,E)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Ux(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==l&&(e.update(u),r.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const Cp=new It,xd=new yp(1,1),Pp=new sp,Lp=new Rg,Ip=new dp,vd=[],yd=[],Md=new Float32Array(16),Sd=new Float32Array(9),Ed=new Float32Array(4);function Es(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=vd[r];if(s===void 0&&(s=new Float32Array(r),vd[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function kx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Ed.set(n),i.uniformMatrix2fv(this.addr,!1,Ed),Nt(t,n)}}function zx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),Nt(t,n)}}function Hx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Ut(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),Nt(t,n)}}function Vx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Wx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function qx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function jx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Xx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Jx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(xd.compareFunction=ip,s=xd):s=Cp,t.setTexture2D(e||s,r)}function $x(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Lp,r)}function Zx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Ip,r)}function Qx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Pp,r)}function ev(i){switch(i){case 5126:return Nx;case 35664:return Fx;case 35665:return Ox;case 35666:return Bx;case 35674:return kx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return Vx;case 35667:case 35671:return Gx;case 35668:case 35672:return Wx;case 35669:case 35673:return qx;case 5125:return jx;case 36294:return Xx;case 36295:return Yx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Jx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return Qx}}function tv(i,e){i.uniform1fv(this.addr,e)}function nv(i,e){const t=Es(e,this.size,2);i.uniform2fv(this.addr,t)}function iv(i,e){const t=Es(e,this.size,3);i.uniform3fv(this.addr,t)}function rv(i,e){const t=Es(e,this.size,4);i.uniform4fv(this.addr,t)}function sv(i,e){const t=Es(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function av(i,e){const t=Es(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ov(i,e){const t=Es(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cv(i,e){i.uniform1iv(this.addr,e)}function lv(i,e){i.uniform2iv(this.addr,e)}function uv(i,e){i.uniform3iv(this.addr,e)}function fv(i,e){i.uniform4iv(this.addr,e)}function dv(i,e){i.uniform1uiv(this.addr,e)}function hv(i,e){i.uniform2uiv(this.addr,e)}function pv(i,e){i.uniform3uiv(this.addr,e)}function mv(i,e){i.uniform4uiv(this.addr,e)}function gv(i,e,t){const n=this.cache,r=e.length,s=Oo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Cp,s[a])}function bv(i,e,t){const n=this.cache,r=e.length,s=Oo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Lp,s[a])}function _v(i,e,t){const n=this.cache,r=e.length,s=Oo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Ip,s[a])}function xv(i,e,t){const n=this.cache,r=e.length,s=Oo(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Pp,s[a])}function vv(i){switch(i){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return cv;case 35667:case 35671:return lv;case 35668:case 35672:return uv;case 35669:case 35673:return fv;case 5125:return dv;case 36294:return hv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return bv;case 35680:case 36300:case 36308:case 36293:return _v;case 36289:case 36303:case 36311:case 36292:return xv}}class yv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ev(t.type)}}class Mv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vv(t.type)}}class Sv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ac=/(\w+)(\])?(\[|\.)?/g;function Td(i,e){i.seq.push(e),i.map[e.id]=e}function Ev(i,e,t){const n=i.name,r=n.length;for(Ac.lastIndex=0;;){const s=Ac.exec(n),a=Ac.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Td(t,l===void 0?new yv(o,i,e):new Mv(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Sv(o),Td(t,u)),t=u}}}class yo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Ev(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function wd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Tv=37297;let wv=0;function Av(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Ad=new Xe;function Rv(i){Qe._getMatrix(Ad,Qe.workingColorSpace,i);const e=`mat3( ${Ad.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Ao:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Rd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Av(i.getShaderSource(e),o)}else return s}function Cv(i,e){const t=Rv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Pv(i,e){let t;switch(e){case zm:t="Linear";break;case Hm:t="Reinhard";break;case Vm:t="Cineon";break;case Gm:t="ACESFilmic";break;case jh:t="AgX";break;case qm:t="Neutral";break;case Wm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $a=new L;function Lv(){Qe.getLuminanceCoefficients($a);const i=$a.x.toFixed(4),e=$a.y.toFixed(4),t=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Iv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Dv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Uv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xs(i){return i!==""}function Cd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(i){return i.replace(Nv,Ov)}const Fv=new Map;function Ov(i,e){let t=Ke[e];if(t===void 0){const n=Fv.get(e);if(n!==void 0)t=Ke[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}const Bv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ld(i){return i.replace(Bv,kv)}function kv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Id(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function zv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Hv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case cs:case ls:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ls:e="ENVMAP_MODE_REFRACTION";break}return e}function Gv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Cu:e="ENVMAP_BLENDING_MULTIPLY";break;case Bm:e="ENVMAP_BLENDING_MIX";break;case km:e="ENVMAP_BLENDING_ADD";break}return e}function Wv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function qv(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=zv(t),l=Hv(t),d=Vv(t),u=Gv(t),f=Wv(t),h=Iv(t),g=Dv(s),_=r.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==qi?Pv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Cv("linearToOutputTexel",t.outputColorSpace),Lv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xs).join(`
`)),a=uu(a),a=Cd(a,t),a=Pd(a,t),o=uu(o),o=Cd(o,t),o=Pd(o,t),a=Ld(a),o=Ld(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=y+m+a,b=y+p+o,v=wd(r,r.VERTEX_SHADER,x),E=wd(r,r.FRAGMENT_SHADER,b);r.attachShader(_,v),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(w){if(i.debug.checkShaderErrors){const R=r.getProgramInfoLog(_)||"",I=r.getShaderInfoLog(v)||"",D=r.getShaderInfoLog(E)||"",F=R.trim(),O=I.trim(),V=D.trim();let k=!0,J=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,v,E);else{const Z=Rd(r,v,"vertex"),fe=Rd(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+Z+`
`+fe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(O===""||V==="")&&(J=!1);J&&(w.diagnostics={runnable:k,programLog:F,vertexShader:{log:O,prefix:m},fragmentShader:{log:V,prefix:p}})}r.deleteShader(v),r.deleteShader(E),A=new yo(r,_),S=Uv(r,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Tv)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=E,this}let jv=0;class Xv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Yv(e),t.set(e,n)),n}}class Yv{constructor(e){this.id=jv++,this.code=e,this.usedTimes=0}}function Kv(i,e,t,n,r,s,a){const o=new zu,c=new Xv,l=new Set,d=[],u=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,w,R,I){const D=R.fog,F=I.geometry,O=S.isMeshStandardMaterial?R.environment:null,V=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),k=V&&V.mapping===No?V.image.height:null,J=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Z=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=Z!==void 0?Z.length:0;let Le=0;F.morphAttributes.position!==void 0&&(Le=1),F.morphAttributes.normal!==void 0&&(Le=2),F.morphAttributes.color!==void 0&&(Le=3);let Ye,$e,ze,X;if(J){const rt=ni[J];Ye=rt.vertexShader,$e=rt.fragmentShader}else Ye=S.vertexShader,$e=S.fragmentShader,c.update(S),ze=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const $=i.getRenderTarget(),j=i.state.buffers.depth.getReversed(),ae=I.isInstancedMesh===!0,oe=I.isBatchedMesh===!0,Ie=!!S.map,ee=!!S.matcap,U=!!V,Fe=!!S.aoMap,Me=!!S.lightMap,ge=!!S.bumpMap,ce=!!S.normalMap,et=!!S.displacementMap,be=!!S.emissiveMap,Ge=!!S.metalnessMap,Ft=!!S.roughnessMap,wt=S.anisotropy>0,N=S.clearcoat>0,C=S.dispersion>0,G=S.iridescence>0,K=S.sheen>0,te=S.transmission>0,Y=wt&&!!S.anisotropyMap,Pe=N&&!!S.clearcoatMap,le=N&&!!S.clearcoatNormalMap,we=N&&!!S.clearcoatRoughnessMap,Re=G&&!!S.iridescenceMap,re=G&&!!S.iridescenceThicknessMap,me=K&&!!S.sheenColorMap,He=K&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,he=!!S.specularColorMap,je=!!S.specularIntensityMap,B=te&&!!S.transmissionMap,se=te&&!!S.thicknessMap,ue=!!S.gradientMap,ve=!!S.alphaMap,ne=S.alphaTest>0,Q=!!S.alphaHash,Ee=!!S.extensions;let We=qi;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(We=i.toneMapping);const ht={shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:$e,defines:S.defines,customVertexShaderID:ze,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:oe,batchingColor:oe&&I._colorsTexture!==null,instancing:ae,instancingColor:ae&&I.instanceColor!==null,instancingMorph:ae&&I.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Zt,alphaToCoverage:!!S.alphaToCoverage,map:Ie,matcap:ee,envMap:U,envMapMode:U&&V.mapping,envMapCubeUVHeight:k,aoMap:Fe,lightMap:Me,bumpMap:ge,normalMap:ce,displacementMap:f&&et,emissiveMap:be,normalMapObjectSpace:ce&&S.normalMapType===$m,normalMapTangentSpace:ce&&S.normalMapType===Ou,metalnessMap:Ge,roughnessMap:Ft,anisotropy:wt,anisotropyMap:Y,clearcoat:N,clearcoatMap:Pe,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:C,iridescence:G,iridescenceMap:Re,iridescenceThicknessMap:re,sheen:K,sheenColorMap:me,sheenRoughnessMap:He,specularMap:Ce,specularColorMap:he,specularIntensityMap:je,transmission:te,transmissionMap:B,thicknessMap:se,gradientMap:ue,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:Q,combine:S.combine,mapUv:Ie&&_(S.map.channel),aoMapUv:Fe&&_(S.aoMap.channel),lightMapUv:Me&&_(S.lightMap.channel),bumpMapUv:ge&&_(S.bumpMap.channel),normalMapUv:ce&&_(S.normalMap.channel),displacementMapUv:et&&_(S.displacementMap.channel),emissiveMapUv:be&&_(S.emissiveMap.channel),metalnessMapUv:Ge&&_(S.metalnessMap.channel),roughnessMapUv:Ft&&_(S.roughnessMap.channel),anisotropyMapUv:Y&&_(S.anisotropyMap.channel),clearcoatMapUv:Pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(S.sheenRoughnessMap.channel),specularMapUv:Ce&&_(S.specularMap.channel),specularColorMapUv:he&&_(S.specularColorMap.channel),specularIntensityMapUv:je&&_(S.specularIntensityMap.channel),transmissionMapUv:B&&_(S.transmissionMap.channel),thicknessMapUv:se&&_(S.thicknessMap.channel),alphaMapUv:ve&&_(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ce||wt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ie||ve),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:j,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:Ie&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:be&&S.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===an,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ht.vertexUv1s=l.has(1),ht.vertexUv2s=l.has(2),ht.vertexUv3s=l.has(3),l.clear(),ht}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(y(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=g[S.type];let w;if(M){const R=ni[M];w=up.clone(R.uniforms)}else w=S.uniforms;return w}function v(S,M){let w;for(let R=0,I=d.length;R<I;R++){const D=d[R];if(D.cacheKey===M){w=D,++w.usedTimes;break}}return w===void 0&&(w=new qv(i,M,S,s),d.push(w)),w}function E(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function T(S){c.remove(S)}function A(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:A}}function Jv(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $v(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Dd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ud(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(u,f,h,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,f,h,g,_,m){const p=a(u,f,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?r.push(p):t.push(p)}function c(u,f,h,g,_,m){const p=a(u,f,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||$v),n.length>1&&n.sort(f||Dd),r.length>1&&r.sort(f||Dd)}function d(){for(let u=e,f=i.length;u<f;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:d,sort:l}}function Zv(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Ud,i.set(n,[a])):r>=s.length?(a=new Ud,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Qv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function ey(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ty=0;function ny(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iy(i){const e=new Qv,t=ey(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const r=new L,s=new Ne,a=new Ne;function o(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,y=0,x=0,b=0,v=0,E=0,T=0;l.sort(ny);for(let S=0,M=l.length;S<M;S++){const w=l[S],R=w.color,I=w.intensity,D=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)d+=R.r*I,u+=R.g*I,f+=R.b*I;else if(w.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(w.sh.coefficients[O],I);T++}else if(w.isDirectionalLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const V=w.shadow,k=t.get(w);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.directionalShadow[h]=k,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=w.shadow.matrix,y++}n.directional[h]=O,h++}else if(w.isSpotLight){const O=e.get(w);O.position.setFromMatrixPosition(w.matrixWorld),O.color.copy(R).multiplyScalar(I),O.distance=D,O.coneCos=Math.cos(w.angle),O.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),O.decay=w.decay,n.spot[_]=O;const V=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,V.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[_]=V.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=F,b++}_++}else if(w.isRectAreaLight){const O=e.get(w);O.color.copy(R).multiplyScalar(I),O.halfWidth.set(w.width*.5,0,0),O.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=O,m++}else if(w.isPointLight){const O=e.get(w);if(O.color.copy(w.color).multiplyScalar(w.intensity),O.distance=w.distance,O.decay=w.decay,w.castShadow){const V=w.shadow,k=t.get(w);k.shadowIntensity=V.intensity,k.shadowBias=V.bias,k.shadowNormalBias=V.normalBias,k.shadowRadius=V.radius,k.shadowMapSize=V.mapSize,k.shadowCameraNear=V.camera.near,k.shadowCameraFar=V.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=O,g++}else if(w.isHemisphereLight){const O=e.get(w);O.skyColor.copy(w.color).multiplyScalar(I),O.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const A=n.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==b||A.numSpotMaps!==v||A.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,A.directionalLength=h,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=b,A.numSpotMaps=v,A.numLightProbes=T,n.version=ty++)}function c(l,d){let u=0,f=0,h=0,g=0,_=0;const m=d.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const x=l[p];if(x.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),u++}else if(x.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:n}}function Nd(i){const e=new iy(i),t=[],n=[];function r(d){l.camera=d,t.length=0,n.length=0}function s(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ry(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Nd(i),e.set(r,[o])):s>=a.length?(o=new Nd(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const sy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ay=`uniform sampler2D shadow_pass;
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
}`;function oy(i,e,t){let n=new Gu;const r=new Ue,s=new Ue,a=new tt,o=new ib({depthPacking:Jm}),c=new rb,l={},d=t.maxTextureSize,u={[Dn]:qt,[qt]:Dn,[an]:an},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:sy,fragmentShader:ay}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let p=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),R=i.state;R.setBlending(Wi),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const I=p!==bi&&this.type===bi,D=p===bi&&this.type!==bi;for(let F=0,O=E.length;F<O;F++){const V=E[F],k=V.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();if(r.multiply(J),s.copy(k.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/J.y),r.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null||I===!0||D===!0){const fe=this.type!==bi?{minFilter:$t,magFilter:$t}:{};k.map!==null&&k.map.dispose(),k.map=new Xi(r.x,r.y,fe),k.map.texture.name=V.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Z=k.getViewportCount();for(let fe=0;fe<Z;fe++){const Le=k.getViewport(fe);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),R.viewport(a),k.updateMatrices(V,fe),n=k.getFrustum(),b(T,A,k.camera,V,this.type)}k.isPointLightShadow!==!0&&this.type===bi&&y(k,A),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,w)};function y(E,T){const A=e.update(_);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xi(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,A,f,_,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,A,h,_,null)}function x(E,T,A,S){let M=null;const w=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)M=w;else if(M=A.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const R=M.uuid,I=T.uuid;let D=l[R];D===void 0&&(D={},l[R]=D);let F=D[I];F===void 0&&(F=M.clone(),D[I]=F,T.addEventListener("dispose",v)),M=F}if(M.visible=T.visible,M.wireframe=T.wireframe,S===bi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=i.properties.get(M);R.light=A}return M}function b(E,T,A,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===bi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const I=e.update(E),D=E.material;if(Array.isArray(D)){const F=I.groups;for(let O=0,V=F.length;O<V;O++){const k=F[O],J=D[k.materialIndex];if(J&&J.visible){const Z=x(E,J,S,M);E.onBeforeShadow(i,E,T,A,I,Z,k),i.renderBufferDirect(A,null,I,Z,E,k),E.onAfterShadow(i,E,T,A,I,Z,k)}}}else if(D.visible){const F=x(E,D,S,M);E.onBeforeShadow(i,E,T,A,I,F,null),i.renderBufferDirect(A,null,I,F,E,null),E.onAfterShadow(i,E,T,A,I,F,null)}}const R=E.children;for(let I=0,D=R.length;I<D;I++)b(R[I],T,A,S,M)}function v(E){E.target.removeEventListener("dispose",v);for(const A in l){const S=l[A],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const cy={[yl]:Ml,[Sl]:wl,[El]:Al,[os]:Tl,[Ml]:yl,[wl]:Sl,[Al]:El,[Tl]:os};function ly(i,e){function t(){let B=!1;const se=new tt;let ue=null;const ve=new tt(0,0,0,0);return{setMask:function(ne){ue!==ne&&!B&&(i.colorMask(ne,ne,ne,ne),ue=ne)},setLocked:function(ne){B=ne},setClear:function(ne,Q,Ee,We,ht){ht===!0&&(ne*=We,Q*=We,Ee*=We),se.set(ne,Q,Ee,We),ve.equals(se)===!1&&(i.clearColor(ne,Q,Ee,We),ve.copy(se))},reset:function(){B=!1,ue=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,se=!1,ue=null,ve=null,ne=null;return{setReversed:function(Q){if(se!==Q){const Ee=e.get("EXT_clip_control");Q?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),se=Q;const We=ne;ne=null,this.setClear(We)}},getReversed:function(){return se},setTest:function(Q){Q?$(i.DEPTH_TEST):j(i.DEPTH_TEST)},setMask:function(Q){ue!==Q&&!B&&(i.depthMask(Q),ue=Q)},setFunc:function(Q){if(se&&(Q=cy[Q]),ve!==Q){switch(Q){case yl:i.depthFunc(i.NEVER);break;case Ml:i.depthFunc(i.ALWAYS);break;case Sl:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case El:i.depthFunc(i.EQUAL);break;case Tl:i.depthFunc(i.GEQUAL);break;case wl:i.depthFunc(i.GREATER);break;case Al:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Q}},setLocked:function(Q){B=Q},setClear:function(Q){ne!==Q&&(se&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){B=!1,ue=null,ve=null,ne=null,se=!1}}}function r(){let B=!1,se=null,ue=null,ve=null,ne=null,Q=null,Ee=null,We=null,ht=null;return{setTest:function(rt){B||(rt?$(i.STENCIL_TEST):j(i.STENCIL_TEST))},setMask:function(rt){se!==rt&&!B&&(i.stencilMask(rt),se=rt)},setFunc:function(rt,ui,Zn){(ue!==rt||ve!==ui||ne!==Zn)&&(i.stencilFunc(rt,ui,Zn),ue=rt,ve=ui,ne=Zn)},setOp:function(rt,ui,Zn){(Q!==rt||Ee!==ui||We!==Zn)&&(i.stencilOp(rt,ui,Zn),Q=rt,Ee=ui,We=Zn)},setLocked:function(rt){B=rt},setClear:function(rt){ht!==rt&&(i.clearStencil(rt),ht=rt)},reset:function(){B=!1,se=null,ue=null,ve=null,ne=null,Q=null,Ee=null,We=null,ht=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,x=null,b=null,v=null,E=null,T=new Be(0,0,0),A=0,S=!1,M=null,w=null,R=null,I=null,D=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,V=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(k)[1]),O=V>=1):k.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),O=V>=2);let J=null,Z={};const fe=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ye=new tt().fromArray(fe),$e=new tt().fromArray(Le);function ze(B,se,ue,ve){const ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(B,Q),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<ue;Ee++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(se+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}const X={};X[i.TEXTURE_2D]=ze(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ze(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ze(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ze(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(os),ge(!1),ce(_f),$(i.CULL_FACE),Fe(Wi);function $(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function j(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function ae(B,se){return u[B]!==se?(i.bindFramebuffer(B,se),u[B]=se,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=se),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=se),!0):!1}function oe(B,se){let ue=h,ve=!1;if(B){ue=f.get(se),ue===void 0&&(ue=[],f.set(se,ue));const ne=B.textures;if(ue.length!==ne.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,Ee=ne.length;Q<Ee;Q++)ue[Q]=i.COLOR_ATTACHMENT0+Q;ue.length=ne.length,ve=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ue)}function Ie(B){return g!==B?(i.useProgram(B),g=B,!0):!1}const ee={[pr]:i.FUNC_ADD,[ym]:i.FUNC_SUBTRACT,[Mm]:i.FUNC_REVERSE_SUBTRACT};ee[Sm]=i.MIN,ee[Em]=i.MAX;const U={[Tm]:i.ZERO,[wm]:i.ONE,[Am]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Dm]:i.SRC_ALPHA_SATURATE,[Lm]:i.DST_COLOR,[Cm]:i.DST_ALPHA,[Rm]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[Im]:i.ONE_MINUS_DST_COLOR,[Pm]:i.ONE_MINUS_DST_ALPHA,[Um]:i.CONSTANT_COLOR,[Nm]:i.ONE_MINUS_CONSTANT_COLOR,[Fm]:i.CONSTANT_ALPHA,[Om]:i.ONE_MINUS_CONSTANT_ALPHA};function Fe(B,se,ue,ve,ne,Q,Ee,We,ht,rt){if(B===Wi){_===!0&&(j(i.BLEND),_=!1);return}if(_===!1&&($(i.BLEND),_=!0),B!==vm){if(B!==m||rt!==S){if((p!==pr||b!==pr)&&(i.blendEquation(i.FUNC_ADD),p=pr,b=pr),rt)switch(B){case ns:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFunc(i.ONE,i.ONE);break;case xf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case vf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ns:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}y=null,x=null,v=null,E=null,T.set(0,0,0),A=0,m=B,S=rt}return}ne=ne||se,Q=Q||ue,Ee=Ee||ve,(se!==p||ne!==b)&&(i.blendEquationSeparate(ee[se],ee[ne]),p=se,b=ne),(ue!==y||ve!==x||Q!==v||Ee!==E)&&(i.blendFuncSeparate(U[ue],U[ve],U[Q],U[Ee]),y=ue,x=ve,v=Q,E=Ee),(We.equals(T)===!1||ht!==A)&&(i.blendColor(We.r,We.g,We.b,ht),T.copy(We),A=ht),m=B,S=!1}function Me(B,se){B.side===an?j(i.CULL_FACE):$(i.CULL_FACE);let ue=B.side===qt;se&&(ue=!ue),ge(ue),B.blending===ns&&B.transparent===!1?Fe(Wi):Fe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),be(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):j(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function ce(B){B!==bm?($(i.CULL_FACE),B!==w&&(B===_f?i.cullFace(i.BACK):B===_m?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):j(i.CULL_FACE),w=B}function et(B){B!==R&&(O&&i.lineWidth(B),R=B)}function be(B,se,ue){B?($(i.POLYGON_OFFSET_FILL),(I!==se||D!==ue)&&(i.polygonOffset(se,ue),I=se,D=ue)):j(i.POLYGON_OFFSET_FILL)}function Ge(B){B?$(i.SCISSOR_TEST):j(i.SCISSOR_TEST)}function Ft(B){B===void 0&&(B=i.TEXTURE0+F-1),J!==B&&(i.activeTexture(B),J=B)}function wt(B,se,ue){ue===void 0&&(J===null?ue=i.TEXTURE0+F-1:ue=J);let ve=Z[ue];ve===void 0&&(ve={type:void 0,texture:void 0},Z[ue]=ve),(ve.type!==B||ve.texture!==se)&&(J!==ue&&(i.activeTexture(ue),J=ue),i.bindTexture(B,se||X[B]),ve.type=B,ve.texture=se)}function N(){const B=Z[J];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function C(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function te(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function re(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(B){Ye.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ye.copy(B))}function He(B){$e.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),$e.copy(B))}function Ce(B,se){let ue=l.get(se);ue===void 0&&(ue=new WeakMap,l.set(se,ue));let ve=ue.get(B);ve===void 0&&(ve=i.getUniformBlockIndex(se,B.name),ue.set(B,ve))}function he(B,se){const ve=l.get(se).get(B);c.get(se)!==ve&&(i.uniformBlockBinding(se,ve,B.__bindingPointIndex),c.set(se,ve))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,Z={},u={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,y=null,x=null,b=null,v=null,E=null,T=new Be(0,0,0),A=0,S=!1,M=null,w=null,R=null,I=null,D=null,Ye.set(0,0,i.canvas.width,i.canvas.height),$e.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:j,bindFramebuffer:ae,drawBuffers:oe,useProgram:Ie,setBlending:Fe,setMaterial:Me,setFlipSided:ge,setCullFace:ce,setLineWidth:et,setPolygonOffset:be,setScissorTest:Ge,activeTexture:Ft,bindTexture:wt,unbindTexture:N,compressedTexImage2D:C,compressedTexImage3D:G,texImage2D:Re,texImage3D:re,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:le,texStorage3D:we,texSubImage2D:K,texSubImage3D:te,compressedTexSubImage2D:Y,compressedTexSubImage3D:Pe,scissor:me,viewport:He,reset:je}}function uy(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(N,C){return h?new OffscreenCanvas(N,C):ha("canvas")}function _(N,C,G){let K=1;const te=wt(N);if((te.width>G||te.height>G)&&(K=G/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const Y=Math.floor(K*te.width),Pe=Math.floor(K*te.height);u===void 0&&(u=g(Y,Pe));const le=C?g(Y,Pe):u;return le.width=Y,le.height=Pe,le.getContext("2d").drawImage(N,0,0,Y,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Y+"x"+Pe+")."),le}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),N;return N}function m(N){return N.generateMipmaps}function p(N){i.generateMipmap(N)}function y(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(N,C,G,K,te=!1){if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Y=C;if(C===i.RED&&(G===i.FLOAT&&(Y=i.R32F),G===i.HALF_FLOAT&&(Y=i.R16F),G===i.UNSIGNED_BYTE&&(Y=i.R8)),C===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.R8UI),G===i.UNSIGNED_SHORT&&(Y=i.R16UI),G===i.UNSIGNED_INT&&(Y=i.R32UI),G===i.BYTE&&(Y=i.R8I),G===i.SHORT&&(Y=i.R16I),G===i.INT&&(Y=i.R32I)),C===i.RG&&(G===i.FLOAT&&(Y=i.RG32F),G===i.HALF_FLOAT&&(Y=i.RG16F),G===i.UNSIGNED_BYTE&&(Y=i.RG8)),C===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RG8UI),G===i.UNSIGNED_SHORT&&(Y=i.RG16UI),G===i.UNSIGNED_INT&&(Y=i.RG32UI),G===i.BYTE&&(Y=i.RG8I),G===i.SHORT&&(Y=i.RG16I),G===i.INT&&(Y=i.RG32I)),C===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),G===i.UNSIGNED_INT&&(Y=i.RGB32UI),G===i.BYTE&&(Y=i.RGB8I),G===i.SHORT&&(Y=i.RGB16I),G===i.INT&&(Y=i.RGB32I)),C===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),G===i.UNSIGNED_INT&&(Y=i.RGBA32UI),G===i.BYTE&&(Y=i.RGBA8I),G===i.SHORT&&(Y=i.RGBA16I),G===i.INT&&(Y=i.RGBA32I)),C===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),C===i.RGBA){const Pe=te?Ao:Qe.getTransfer(K);G===i.FLOAT&&(Y=i.RGBA32F),G===i.HALF_FLOAT&&(Y=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Y=Pe===ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(N,C){let G;return N?C===null||C===vr||C===ca?G=i.DEPTH24_STENCIL8:C===Gn?G=i.DEPTH32F_STENCIL8:C===oa&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===vr||C===ca?G=i.DEPTH_COMPONENT24:C===Gn?G=i.DEPTH_COMPONENT32F:C===oa&&(G=i.DEPTH_COMPONENT16),G}function v(N,C){return m(N)===!0||N.isFramebufferTexture&&N.minFilter!==$t&&N.minFilter!==Jt?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function E(N){const C=N.target;C.removeEventListener("dispose",E),A(C),C.isVideoTexture&&d.delete(C)}function T(N){const C=N.target;C.removeEventListener("dispose",T),M(C)}function A(N){const C=n.get(N);if(C.__webglInit===void 0)return;const G=N.source,K=f.get(G);if(K){const te=K[C.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(N),Object.keys(K).length===0&&f.delete(G)}n.remove(N)}function S(N){const C=n.get(N);i.deleteTexture(C.__webglTexture);const G=N.source,K=f.get(G);delete K[C.__cacheKey],a.memory.textures--}function M(N){const C=n.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),n.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(C.__webglFramebuffer[K]))for(let te=0;te<C.__webglFramebuffer[K].length;te++)i.deleteFramebuffer(C.__webglFramebuffer[K][te]);else i.deleteFramebuffer(C.__webglFramebuffer[K]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[K])}else{if(Array.isArray(C.__webglFramebuffer))for(let K=0;K<C.__webglFramebuffer.length;K++)i.deleteFramebuffer(C.__webglFramebuffer[K]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let K=0;K<C.__webglColorRenderbuffer.length;K++)C.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[K]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const G=N.textures;for(let K=0,te=G.length;K<te;K++){const Y=n.get(G[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(G[K])}n.remove(N)}let w=0;function R(){w=0}function I(){const N=w;return N>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+r.maxTextures),w+=1,N}function D(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function F(N,C){const G=n.get(N);if(N.isVideoTexture&&Ge(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&G.__version!==N.version){const K=N.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(G,N,C);return}}else N.isExternalTexture&&(G.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+C)}function O(N,C){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){X(G,N,C);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+C)}function V(N,C){const G=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&G.__version!==N.version){X(G,N,C);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+C)}function k(N,C){const G=n.get(N);if(N.version>0&&G.__version!==N.version){$(G,N,C);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+C)}const J={[us]:i.REPEAT,[Vi]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},Z={[$t]:i.NEAREST,[Yh]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[Jt]:i.LINEAR,[go]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},fe={[Zm]:i.NEVER,[rg]:i.ALWAYS,[Qm]:i.LESS,[ip]:i.LEQUAL,[eg]:i.EQUAL,[ig]:i.GEQUAL,[tg]:i.GREATER,[ng]:i.NOTEQUAL};function Le(N,C){if(C.type===Gn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Jt||C.magFilter===go||C.magFilter===js||C.magFilter===Vn||C.minFilter===Jt||C.minFilter===go||C.minFilter===js||C.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,J[C.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,J[C.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,J[C.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Z[C.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Z[C.minFilter]),C.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,fe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===$t||C.minFilter!==js&&C.minFilter!==Vn||C.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Ye(N,C){let G=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",E));const K=C.source;let te=f.get(K);te===void 0&&(te={},f.set(K,te));const Y=D(C);if(Y!==N.__cacheKey){te[Y]===void 0&&(te[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[Y].usedTimes++;const Pe=te[N.__cacheKey];Pe!==void 0&&(te[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&S(C)),N.__cacheKey=Y,N.__webglTexture=te[Y].texture}return G}function $e(N,C,G){return Math.floor(Math.floor(N/G)/C)}function ze(N,C,G,K){const Y=N.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,G,K,C.data);else{Y.sort((re,me)=>re.start-me.start);let Pe=0;for(let re=1;re<Y.length;re++){const me=Y[Pe],He=Y[re],Ce=me.start+me.count,he=$e(He.start,C.width,4),je=$e(me.start,C.width,4);He.start<=Ce+1&&he===je&&$e(He.start+He.count-1,C.width,4)===he?me.count=Math.max(me.count,He.start+He.count-me.start):(++Pe,Y[Pe]=He)}Y.length=Pe+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let re=0,me=Y.length;re<me;re++){const He=Y[re],Ce=Math.floor(He.start/4),he=Math.ceil(He.count/4),je=Ce%C.width,B=Math.floor(Ce/C.width),se=he,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,je,B,se,ue,G,K,C.data)}N.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function X(N,C,G){let K=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(K=i.TEXTURE_3D);const te=Ye(N,C),Y=C.source;t.bindTexture(K,N.__webglTexture,i.TEXTURE0+G);const Pe=n.get(Y);if(Y.version!==Pe.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const le=Qe.getPrimaries(Qe.workingColorSpace),we=C.colorSpace===zi?null:Qe.getPrimaries(C.colorSpace),Re=C.colorSpace===zi||le===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let re=_(C.image,!1,r.maxTextureSize);re=Ft(C,re);const me=s.convert(C.format,C.colorSpace),He=s.convert(C.type);let Ce=x(C.internalFormat,me,He,C.colorSpace,C.isVideoTexture);Le(K,C);let he;const je=C.mipmaps,B=C.isVideoTexture!==!0,se=Pe.__version===void 0||te===!0,ue=Y.dataReady,ve=v(C,re);if(C.isDepthTexture)Ce=b(C.format===ua,C.type),se&&(B?t.texStorage2D(i.TEXTURE_2D,1,Ce,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,me,He,null));else if(C.isDataTexture)if(je.length>0){B&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,je[0].width,je[0].height);for(let ne=0,Q=je.length;ne<Q;ne++)he=je[ne],B?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,He,he.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,he.width,he.height,0,me,He,he.data);C.generateMipmaps=!1}else B?(se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,re.width,re.height),ue&&ze(C,re,me,He)):t.texImage2D(i.TEXTURE_2D,0,Ce,re.width,re.height,0,me,He,re.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){B&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,je[0].width,je[0].height,re.depth);for(let ne=0,Q=je.length;ne<Q;ne++)if(he=je[ne],C.format!==wn)if(me!==null)if(B){if(ue)if(C.layerUpdates.size>0){const Ee=dd(he.width,he.height,C.format,C.type);for(const We of C.layerUpdates){const ht=he.data.subarray(We*Ee/he.data.BYTES_PER_ELEMENT,(We+1)*Ee/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,We,he.width,he.height,1,me,ht)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,me,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,he.width,he.height,re.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,he.width,he.height,re.depth,me,He,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,Ce,he.width,he.height,re.depth,0,me,He,he.data)}else{B&&se&&t.texStorage2D(i.TEXTURE_2D,ve,Ce,je[0].width,je[0].height);for(let ne=0,Q=je.length;ne<Q;ne++)he=je[ne],C.format!==wn?me!==null?B?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,he.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,Ce,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,he.width,he.height,me,He,he.data):t.texImage2D(i.TEXTURE_2D,ne,Ce,he.width,he.height,0,me,He,he.data)}else if(C.isDataArrayTexture)if(B){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Ce,re.width,re.height,re.depth),ue)if(C.layerUpdates.size>0){const ne=dd(re.width,re.height,C.format,C.type);for(const Q of C.layerUpdates){const Ee=re.data.subarray(Q*ne/re.data.BYTES_PER_ELEMENT,(Q+1)*ne/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,me,He,Ee)}C.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,He,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,re.width,re.height,re.depth,0,me,He,re.data);else if(C.isData3DTexture)B?(se&&t.texStorage3D(i.TEXTURE_3D,ve,Ce,re.width,re.height,re.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,He,re.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,re.width,re.height,re.depth,0,me,He,re.data);else if(C.isFramebufferTexture){if(se)if(B)t.texStorage2D(i.TEXTURE_2D,ve,Ce,re.width,re.height);else{let ne=re.width,Q=re.height;for(let Ee=0;Ee<ve;Ee++)t.texImage2D(i.TEXTURE_2D,Ee,Ce,ne,Q,0,me,He,null),ne>>=1,Q>>=1}}else if(je.length>0){if(B&&se){const ne=wt(je[0]);t.texStorage2D(i.TEXTURE_2D,ve,Ce,ne.width,ne.height)}for(let ne=0,Q=je.length;ne<Q;ne++)he=je[ne],B?ue&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,me,He,he):t.texImage2D(i.TEXTURE_2D,ne,Ce,me,He,he);C.generateMipmaps=!1}else if(B){if(se){const ne=wt(re);t.texStorage2D(i.TEXTURE_2D,ve,Ce,ne.width,ne.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,He,re)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,He,re);m(C)&&p(K),Pe.__version=Y.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function $(N,C,G){if(C.image.length!==6)return;const K=Ye(N,C),te=C.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+G);const Y=n.get(te);if(te.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+G);const Pe=Qe.getPrimaries(Qe.workingColorSpace),le=C.colorSpace===zi?null:Qe.getPrimaries(C.colorSpace),we=C.colorSpace===zi||Pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=C.isCompressedTexture||C.image[0].isCompressedTexture,re=C.image[0]&&C.image[0].isDataTexture,me=[];for(let Q=0;Q<6;Q++)!Re&&!re?me[Q]=_(C.image[Q],!0,r.maxCubemapSize):me[Q]=re?C.image[Q].image:C.image[Q],me[Q]=Ft(C,me[Q]);const He=me[0],Ce=s.convert(C.format,C.colorSpace),he=s.convert(C.type),je=x(C.internalFormat,Ce,he,C.colorSpace),B=C.isVideoTexture!==!0,se=Y.__version===void 0||K===!0,ue=te.dataReady;let ve=v(C,He);Le(i.TEXTURE_CUBE_MAP,C);let ne;if(Re){B&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,je,He.width,He.height);for(let Q=0;Q<6;Q++){ne=me[Q].mipmaps;for(let Ee=0;Ee<ne.length;Ee++){const We=ne[Ee];C.format!==wn?Ce!==null?B?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,We.width,We.height,Ce,We.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,je,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,0,0,We.width,We.height,Ce,he,We.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee,je,We.width,We.height,0,Ce,he,We.data)}}}else{if(ne=C.mipmaps,B&&se){ne.length>0&&ve++;const Q=wt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me[Q].width,me[Q].height,Ce,he,me[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,me[Q].width,me[Q].height,0,Ce,he,me[Q].data);for(let Ee=0;Ee<ne.length;Ee++){const ht=ne[Ee].image[Q].image;B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,ht.width,ht.height,Ce,he,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,je,ht.width,ht.height,0,Ce,he,ht.data)}}else{B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ce,he,me[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Ce,he,me[Q]);for(let Ee=0;Ee<ne.length;Ee++){const We=ne[Ee];B?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,0,0,Ce,he,We.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Ee+1,je,Ce,he,We.image[Q])}}}m(C)&&p(i.TEXTURE_CUBE_MAP),Y.__version=te.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function j(N,C,G,K,te,Y){const Pe=s.convert(G.format,G.colorSpace),le=s.convert(G.type),we=x(G.internalFormat,Pe,le,G.colorSpace),Re=n.get(C),re=n.get(G);if(re.__renderTarget=C,!Re.__hasExternalTextures){const me=Math.max(1,C.width>>Y),He=Math.max(1,C.height>>Y);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Y,we,me,He,C.depth,0,Pe,le,null):t.texImage2D(te,Y,we,me,He,0,Pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),be(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,te,re.__webglTexture,0,et(C)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,te,re.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(N,C,G){if(i.bindRenderbuffer(i.RENDERBUFFER,N),C.depthBuffer){const K=C.depthTexture,te=K&&K.isDepthTexture?K.type:null,Y=b(C.stencilBuffer,te),Pe=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=et(C);be(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Y,C.width,C.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Y,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Y,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,N)}else{const K=C.textures;for(let te=0;te<K.length;te++){const Y=K[te],Pe=s.convert(Y.format,Y.colorSpace),le=s.convert(Y.type),we=x(Y.internalFormat,Pe,le,Y.colorSpace),Re=et(C);G&&be(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,we,C.width,C.height):be(C)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,we,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,we,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function oe(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(C.depthTexture);K.__renderTarget=C,(!K.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const te=K.__webglTexture,Y=et(C);if(C.depthTexture.format===la)be(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(C.depthTexture.format===ua)be(C)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const C=n.get(N),G=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const K=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),K){const te=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),C.__depthDisposeCallback=te}C.__boundDepthTexture=K}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");const K=N.texture.mipmaps;K&&K.length>0?oe(C.__webglFramebuffer[0],N):oe(C.__webglFramebuffer,N)}else if(G){C.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[K]),C.__webglDepthbuffer[K]===void 0)C.__webglDepthbuffer[K]=i.createRenderbuffer(),ae(C.__webglDepthbuffer[K],N,!1);else{const te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=C.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}else{const K=N.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),ae(C.__webglDepthbuffer,N,!1);else{const te=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(N,C,G){const K=n.get(N);C!==void 0&&j(K.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ie(N)}function U(N){const C=N.texture,G=n.get(N),K=n.get(C);N.addEventListener("dispose",T);const te=N.textures,Y=N.isWebGLCubeRenderTarget===!0,Pe=te.length>1;if(Pe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=C.version,a.memory.textures++),Y){G.__webglFramebuffer=[];for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer[le]=[];for(let we=0;we<C.mipmaps.length;we++)G.__webglFramebuffer[le][we]=i.createFramebuffer()}else G.__webglFramebuffer[le]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){G.__webglFramebuffer=[];for(let le=0;le<C.mipmaps.length;le++)G.__webglFramebuffer[le]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let le=0,we=te.length;le<we;le++){const Re=n.get(te[le]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&be(N)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const we=te[le];G.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[le]);const Re=s.convert(we.format,we.colorSpace),re=s.convert(we.type),me=x(we.internalFormat,Re,re,we.colorSpace,N.isXRRenderTarget===!0),He=et(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,me,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,G.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(G.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Le(i.TEXTURE_CUBE_MAP,C);for(let le=0;le<6;le++)if(C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)j(G.__webglFramebuffer[le][we],N,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else j(G.__webglFramebuffer[le],N,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(C)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let le=0,we=te.length;le<we;le++){const Re=te[le],re=n.get(Re);let me=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(me=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,re.__webglTexture),Le(me,Re),j(G.__webglFramebuffer,N,Re,i.COLOR_ATTACHMENT0+le,me,0),m(Re)&&p(me)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,K.__webglTexture),Le(le,C),C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)j(G.__webglFramebuffer[we],N,C,i.COLOR_ATTACHMENT0,le,we);else j(G.__webglFramebuffer,N,C,i.COLOR_ATTACHMENT0,le,0);m(C)&&p(le),t.unbindTexture()}N.depthBuffer&&Ie(N)}function Fe(N){const C=N.textures;for(let G=0,K=C.length;G<K;G++){const te=C[G];if(m(te)){const Y=y(N),Pe=n.get(te).__webglTexture;t.bindTexture(Y,Pe),p(Y),t.unbindTexture()}}}const Me=[],ge=[];function ce(N){if(N.samples>0){if(be(N)===!1){const C=N.textures,G=N.width,K=N.height;let te=i.COLOR_BUFFER_BIT;const Y=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(N),le=C.length>1;if(le)for(let Re=0;Re<C.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const we=N.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Re=0;Re<C.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=n.get(C[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,G,K,0,0,G,K,te,i.NEAREST),c===!0&&(Me.length=0,ge.length=0,Me.push(i.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Me.push(Y),ge.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Re=0;Re<C.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Re]);const re=n.get(C[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&c){const C=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function et(N){return Math.min(r.maxSamples,N.samples)}function be(N){const C=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ge(N){const C=a.render.frame;d.get(N)!==C&&(d.set(N,C),N.update())}function Ft(N,C){const G=N.colorSpace,K=N.format,te=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||G!==Zt&&G!==zi&&(Qe.getTransfer(G)===ct?(K!==wn||te!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),C}function wt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(l.width=N.naturalWidth||N.width,l.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(l.width=N.displayWidth,l.height=N.displayHeight):(l.width=N.width,l.height=N.height),l}this.allocateTextureUnit=I,this.resetTextureUnits=R,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=k,this.rebindTextures=ee,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=j,this.useMultisampledRTT=be}function fy(i,e){function t(n,r=zi){let s;const a=Qe.getTransfer(r);if(n===oi)return i.UNSIGNED_BYTE;if(n===Lu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Iu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$h)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Kh)return i.BYTE;if(n===Jh)return i.SHORT;if(n===oa)return i.UNSIGNED_SHORT;if(n===Pu)return i.INT;if(n===vr)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===xs)return i.HALF_FLOAT;if(n===Qh)return i.ALPHA;if(n===ep)return i.RGB;if(n===wn)return i.RGBA;if(n===la)return i.DEPTH_COMPONENT;if(n===ua)return i.DEPTH_STENCIL;if(n===Du)return i.RED;if(n===Uu)return i.RED_INTEGER;if(n===tp)return i.RG;if(n===Nu)return i.RG_INTEGER;if(n===Fu)return i.RGBA_INTEGER;if(n===bo||n===_o||n===xo||n===vo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pl||n===Ll||n===Il||n===Dl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Pl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ll)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Il)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ul||n===Nl||n===Fl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ul||n===Nl)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===jl||n===Xl||n===Yl||n===Kl||n===Jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ol)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$l||n===Zl||n===Ql)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===$l)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ql)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===eu||n===tu||n===nu||n===iu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===eu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===iu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ca?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const dy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hy=`
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

}`;class py{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Mp(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:dy,fragmentShader:hy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class my extends vs{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new py,p={},y=t.getContextAttributes();let x=null,b=null;const v=[],E=[],T=new Ue;let A=null;const S=new Gt;S.viewport=new tt;const M=new Gt;M.viewport=new tt;const w=[S,M],R=new Tb;let I=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=v[X];return $===void 0&&($=new hc,v[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=v[X];return $===void 0&&($=new hc,v[X]=$),$.getGripSpace()},this.getHand=function(X){let $=v[X];return $===void 0&&($=new hc,v[X]=$),$.getHandSpace()};function F(X){const $=E.indexOf(X.inputSource);if($===-1)return;const j=v[$];j!==void 0&&(j.update(X.inputSource,X.frame,l||a),j.dispatchEvent({type:X.type,data:X.inputSource}))}function O(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",V);for(let X=0;X<v.length;X++){const $=E[X];$!==null&&(E[X]=null,v[X].disconnect($))}I=null,D=null,m.reset();for(const X in p)delete p[X];e.setRenderTarget(x),h=null,f=null,u=null,r=null,b=null,ze.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",O),r.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(T),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let j=null,ae=null,oe=null;y.depth&&(oe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=y.stencil?ua:la,ae=y.stencil?ca:vr);const Ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(Ie),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Xi(f.textureWidth,f.textureHeight,{format:wn,type:oi,depthTexture:new yp(f.textureWidth,f.textureHeight,ae,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const j={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Xi(h.framebufferWidth,h.framebufferHeight,{format:wn,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(X){for(let $=0;$<X.removed.length;$++){const j=X.removed[$],ae=E.indexOf(j);ae>=0&&(E[ae]=null,v[ae].disconnect(j))}for(let $=0;$<X.added.length;$++){const j=X.added[$];let ae=E.indexOf(j);if(ae===-1){for(let Ie=0;Ie<v.length;Ie++)if(Ie>=E.length){E.push(j),ae=Ie;break}else if(E[Ie]===null){E[Ie]=j,ae=Ie;break}if(ae===-1)break}const oe=v[ae];oe&&oe.connect(j)}}const k=new L,J=new L;function Z(X,$,j){k.setFromMatrixPosition($.matrixWorld),J.setFromMatrixPosition(j.matrixWorld);const ae=k.distanceTo(J),oe=$.projectionMatrix.elements,Ie=j.projectionMatrix.elements,ee=oe[14]/(oe[10]-1),U=oe[14]/(oe[10]+1),Fe=(oe[9]+1)/oe[5],Me=(oe[9]-1)/oe[5],ge=(oe[8]-1)/oe[0],ce=(Ie[8]+1)/Ie[0],et=ee*ge,be=ee*ce,Ge=ae/(-ge+ce),Ft=Ge*-ge;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ft),X.translateZ(Ge),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),oe[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const wt=ee+Ge,N=U+Ge,C=et-Ft,G=be+(ae-Ft),K=Fe*U/N*wt,te=Me*U/N*wt;X.projectionMatrix.makePerspective(C,G,K,te,wt,N),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function fe(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let $=X.near,j=X.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(j=m.depthFar)),R.near=M.near=S.near=$,R.far=M.far=S.far=j,(I!==R.near||D!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),I=R.near,D=R.far),R.layers.mask=X.layers.mask|6,S.layers.mask=R.layers.mask&3,M.layers.mask=R.layers.mask&5;const ae=X.parent,oe=R.cameras;fe(R,ae);for(let Ie=0;Ie<oe.length;Ie++)fe(oe[Ie],ae);oe.length===2?Z(R,S,M):R.projectionMatrix.copy(S.projectionMatrix),Le(X,R,ae)};function Le(X,$,j){j===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(j.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(R)},this.getCameraTexture=function(X){return p[X]};let Ye=null;function $e(X,$){if(d=$.getViewerPose(l||a),g=$,d!==null){const j=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ae=!1;j.length!==R.cameras.length&&(R.cameras.length=0,ae=!0);for(let U=0;U<j.length;U++){const Fe=j[U];let Me=null;if(h!==null)Me=h.getViewport(Fe);else{const ce=u.getViewSubImage(f,Fe);Me=ce.viewport,U===0&&(e.setRenderTargetTextures(b,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(b))}let ge=w[U];ge===void 0&&(ge=new Gt,ge.layers.enable(U),ge.viewport=new tt,w[U]=ge),ge.matrix.fromArray(Fe.transform.matrix),ge.matrix.decompose(ge.position,ge.quaternion,ge.scale),ge.projectionMatrix.fromArray(Fe.projectionMatrix),ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),ge.viewport.set(Me.x,Me.y,Me.width,Me.height),U===0&&(R.matrix.copy(ge.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ae===!0&&R.cameras.push(ge)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const U=u.getDepthInformation(j[0]);U&&U.isValid&&U.texture&&m.init(U,r.renderState)}if(oe&&oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<j.length;U++){const Fe=j[U].camera;if(Fe){let Me=p[Fe];Me||(Me=new Mp,p[Fe]=Me);const ge=u.getCameraImage(Fe);Me.sourceTexture=ge}}}}for(let j=0;j<v.length;j++){const ae=E[j],oe=v[j];ae!==null&&oe!==void 0&&oe.update(ae,$,l||a)}Ye&&Ye(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const ze=new Rp;ze.setAnimationLoop($e),this.setAnimationLoop=function(X){Ye=X},this.dispose=function(){}}}const ar=new Nn,gy=new Ne;function by(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lp(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,x,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),x=y.envMap,b=y.envMapRotation;x&&(m.envMap.value=x,ar.copy(b),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(gy.makeRotationFromEuler(ar)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function _y(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=r[y.id];b===void 0&&(g(y),b=d(y),r[y.id]=b,y.addEventListener("dispose",m));const v=x.program;n.updateUBOMapping(y,v);const E=e.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function d(y){const x=u();y.__bindingPointIndex=x;const b=i.createBuffer(),v=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],b=y.uniforms,v=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,T=b.length;E<T;E++){const A=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=A.length;S<M;S++){const w=A[S];if(h(w,E,S,v)===!0){const R=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let F=0;F<I.length;F++){const O=I[F],V=_(O);typeof O=="number"||typeof O=="boolean"?(w.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,R+D,w.__data)):O.isMatrix3?(w.__data[0]=O.elements[0],w.__data[1]=O.elements[1],w.__data[2]=O.elements[2],w.__data[3]=0,w.__data[4]=O.elements[3],w.__data[5]=O.elements[4],w.__data[6]=O.elements[5],w.__data[7]=0,w.__data[8]=O.elements[6],w.__data[9]=O.elements[7],w.__data[10]=O.elements[8],w.__data[11]=0):(O.toArray(w.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,R,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,x,b,v){const E=y.value,T=x+"_"+b;if(v[T]===void 0)return typeof E=="number"||typeof E=="boolean"?v[T]=E:v[T]=E.clone(),!0;{const A=v[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return v[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){const x=y.uniforms;let b=0;const v=16;for(let T=0,A=x.length;T<A;T++){const S=Array.isArray(x[T])?x[T]:[x[T]];for(let M=0,w=S.length;M<w;M++){const R=S[M],I=Array.isArray(R.value)?R.value:[R.value];for(let D=0,F=I.length;D<F;D++){const O=I[D],V=_(O),k=b%v,J=k%V.boundary,Z=k+J;b+=J,Z!==0&&v-Z<V.storage&&(b+=v-Z),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=V.storage}}}const E=b%v;return E>0&&(b+=v-E),y.__size=b,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class xy{constructor(e={}){const{canvas:t=yg(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=Rt;let E=0,T=0,A=null,S=-1,M=null;const w=new tt,R=new tt;let I=null;const D=new Be(0);let F=0,O=t.width,V=t.height,k=1,J=null,Z=null;const fe=new tt(0,0,O,V),Le=new tt(0,0,O,V);let Ye=!1;const $e=new Gu;let ze=!1,X=!1;const $=new Ne,j=new L,ae=new tt,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function ee(){return A===null?k:1}let U=n;function Fe(P,z){return t.getContext(P,z)}try{const P={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_a}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",ne,!1),U===null){const z="webgl2";if(U=Fe(z,P),U===null)throw Fe(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Me,ge,ce,et,be,Ge,Ft,wt,N,C,G,K,te,Y,Pe,le,we,Re,re,me,He,Ce,he,je;function B(){Me=new Cx(U),Me.init(),Ce=new fy(U,Me),ge=new Mx(U,Me,e,Ce),ce=new ly(U,Me),ge.reversedDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),et=new Ix(U),be=new Jv,Ge=new uy(U,Me,ce,be,ge,Ce,et),Ft=new Ex(b),wt=new Rx(b),N=new Bb(U),he=new vx(U,N),C=new Px(U,N,et,he),G=new Ux(U,C,N,et),re=new Dx(U,ge,Ge),le=new Sx(be),K=new Kv(b,Ft,wt,Me,ge,he,le),te=new by(b,be),Y=new Zv,Pe=new ry(Me),Re=new xx(b,Ft,wt,ce,G,h,c),we=new oy(b,G,ge),je=new _y(U,et,ge,ce),me=new yx(U,Me,et),He=new Lx(U,Me,et),et.programs=K.programs,b.capabilities=ge,b.extensions=Me,b.properties=be,b.renderLists=Y,b.shadowMap=we,b.state=ce,b.info=et}B();const se=new my(b,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const P=Me.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Me.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(O,V,!1))},this.getSize=function(P){return P.set(O,V)},this.setSize=function(P,z,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=P,V=z,t.width=Math.floor(P*k),t.height=Math.floor(z*k),W===!0&&(t.style.width=P+"px",t.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(O*k,V*k).floor()},this.setDrawingBufferSize=function(P,z,W){O=P,V=z,k=W,t.width=Math.floor(P*W),t.height=Math.floor(z*W),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,z,W,q){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,z,W,q),ce.viewport(w.copy(fe).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(Le)},this.setScissor=function(P,z,W,q){P.isVector4?Le.set(P.x,P.y,P.z,P.w):Le.set(P,z,W,q),ce.scissor(R.copy(Le).multiplyScalar(k).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(P){ce.setScissorTest(Ye=P)},this.setOpaqueSort=function(P){J=P},this.setTransparentSort=function(P){Z=P},this.getClearColor=function(P){return P.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(P=!0,z=!0,W=!0){let q=0;if(P){let H=!1;if(A!==null){const ie=A.texture.format;H=ie===Fu||ie===Nu||ie===Uu}if(H){const ie=A.texture.type,pe=ie===oi||ie===vr||ie===oa||ie===ca||ie===Lu||ie===Iu,Se=Re.getClearColor(),_e=Re.getClearAlpha(),ke=Se.r,Ve=Se.g,De=Se.b;pe?(g[0]=ke,g[1]=Ve,g[2]=De,g[3]=_e,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=ke,_[1]=Ve,_[2]=De,_[3]=_e,U.clearBufferiv(U.COLOR,0,_))}else q|=U.COLOR_BUFFER_BIT}z&&(q|=U.DEPTH_BUFFER_BIT),W&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),Re.dispose(),Y.dispose(),Pe.dispose(),be.dispose(),Ft.dispose(),wt.dispose(),G.dispose(),he.dispose(),je.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",Zn),se.removeEventListener("sessionend",df),Qi.stop()};function ue(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=et.autoReset,z=we.enabled,W=we.autoUpdate,q=we.needsUpdate,H=we.type;B(),et.autoReset=P,we.enabled=z,we.autoUpdate=W,we.needsUpdate=q,we.type=H}function ne(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Q(P){const z=P.target;z.removeEventListener("dispose",Q),Ee(z)}function Ee(P){We(P),be.remove(P)}function We(P){const z=be.get(P).programs;z!==void 0&&(z.forEach(function(W){K.releaseProgram(W)}),P.isShaderMaterial&&K.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,W,q,H,ie){z===null&&(z=oe);const pe=H.isMesh&&H.matrixWorld.determinant()<0,Se=fm(P,z,W,q,H);ce.setMaterial(q,pe);let _e=W.index,ke=1;if(q.wireframe===!0){if(_e=C.getWireframeAttribute(W),_e===void 0)return;ke=2}const Ve=W.drawRange,De=W.attributes.position;let Ze=Ve.start*ke,ot=(Ve.start+Ve.count)*ke;ie!==null&&(Ze=Math.max(Ze,ie.start*ke),ot=Math.min(ot,(ie.start+ie.count)*ke)),_e!==null?(Ze=Math.max(Ze,0),ot=Math.min(ot,_e.count)):De!=null&&(Ze=Math.max(Ze,0),ot=Math.min(ot,De.count));const Et=ot-Ze;if(Et<0||Et===1/0)return;he.setup(H,q,Se,W,_e);let gt,ft=me;if(_e!==null&&(gt=N.get(_e),ft=He,ft.setIndex(gt)),H.isMesh)q.wireframe===!0?(ce.setLineWidth(q.wireframeLinewidth*ee()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(H.isLine){let Oe=q.linewidth;Oe===void 0&&(Oe=1),ce.setLineWidth(Oe*ee()),H.isLineSegments?ft.setMode(U.LINES):H.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else H.isPoints?ft.setMode(U.POINTS):H.isSprite&&ft.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)pa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Oe=H._multiDrawStarts,yt=H._multiDrawCounts,it=H._multiDrawCount,un=_e?N.get(_e).bytesPerElement:1,Sr=be.get(q).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)Sr.setValue(U,"_gl_DrawID",fn),ft.render(Oe[fn]/un,yt[fn])}else if(H.isInstancedMesh)ft.renderInstances(Ze,Et,H.count);else if(W.isInstancedBufferGeometry){const Oe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,yt=Math.min(W.instanceCount,Oe);ft.renderInstances(Ze,Et,yt)}else ft.render(Ze,Et)};function ht(P,z,W){P.transparent===!0&&P.side===an&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Sa(P,z,W),P.side=Dn,P.needsUpdate=!0,Sa(P,z,W),P.side=an):Sa(P,z,W)}this.compile=function(P,z,W=null){W===null&&(W=P),p=Pe.get(W),p.init(z),x.push(p),W.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),P!==W&&P.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const q=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ie=H.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const Se=ie[pe];ht(Se,W,H),q.add(Se)}else ht(ie,W,H),q.add(ie)}),p=x.pop(),q},this.compileAsync=function(P,z,W=null){const q=this.compile(P,z,W);return new Promise(H=>{function ie(){if(q.forEach(function(pe){be.get(pe).currentProgram.isReady()&&q.delete(pe)}),q.size===0){H(P);return}setTimeout(ie,10)}Me.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let rt=null;function ui(P){rt&&rt(P)}function Zn(){Qi.stop()}function df(){Qi.start()}const Qi=new Rp;Qi.setAnimationLoop(ui),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(P){rt=P,se.setAnimationLoop(P),P===null?Qi.stop():Qi.start()},se.addEventListener("sessionstart",Zn),se.addEventListener("sessionend",df),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(z),z=se.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,z,A),p=Pe.get(P,x.length),p.init(z),x.push(p),$.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),$e.setFromProjectionMatrix($,ri,z.reversedDepth),X=this.localClippingEnabled,ze=le.init(this.clippingPlanes,X),m=Y.get(P,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){const ie=b.xr.getDepthSensingMesh();ie!==null&&Wo(ie,z,-1/0,b.sortObjects)}Wo(P,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(J,Z),Ie=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ie&&Re.addToRenderList(m,P),this.info.render.frame++,ze===!0&&le.beginShadows();const W=p.state.shadowsArray;we.render(W,P,z),ze===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ie=z.cameras;if(H.length>0)for(let pe=0,Se=ie.length;pe<Se;pe++){const _e=ie[pe];pf(q,H,P,_e)}Ie&&Re.render(P);for(let pe=0,Se=ie.length;pe<Se;pe++){const _e=ie[pe];hf(m,P,_e,_e.viewport)}}else H.length>0&&pf(q,H,P,z),Ie&&Re.render(P),hf(m,P,z);A!==null&&T===0&&(Ge.updateMultisampleRenderTarget(A),Ge.updateRenderTargetMipmap(A)),P.isScene===!0&&P.onAfterRender(b,P,z),he.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(p=x[x.length-1],ze===!0&&le.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Wo(P,z,W,q){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)W=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||$e.intersectsSprite(P)){q&&ae.setFromMatrixPosition(P.matrixWorld).applyMatrix4($);const pe=G.update(P),Se=P.material;Se.visible&&m.push(P,pe,Se,W,ae.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||$e.intersectsObject(P))){const pe=G.update(P),Se=P.material;if(q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),ae.copy(P.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),ae.copy(pe.boundingSphere.center)),ae.applyMatrix4(P.matrixWorld).applyMatrix4($)),Array.isArray(Se)){const _e=pe.groups;for(let ke=0,Ve=_e.length;ke<Ve;ke++){const De=_e[ke],Ze=Se[De.materialIndex];Ze&&Ze.visible&&m.push(P,pe,Ze,W,ae.z,De)}}else Se.visible&&m.push(P,pe,Se,W,ae.z,null)}}const ie=P.children;for(let pe=0,Se=ie.length;pe<Se;pe++)Wo(ie[pe],z,W,q)}function hf(P,z,W,q){const H=P.opaque,ie=P.transmissive,pe=P.transparent;p.setupLightsView(W),ze===!0&&le.setGlobalState(b.clippingPlanes,W),q&&ce.viewport(w.copy(q)),H.length>0&&Ma(H,z,W),ie.length>0&&Ma(ie,z,W),pe.length>0&&Ma(pe,z,W),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function pf(P,z,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Xi(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float")?xs:oi,minFilter:Vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const ie=p.state.transmissionRenderTarget[q.id],pe=q.viewport||w;ie.setSize(pe.z*b.transmissionResolutionScale,pe.w*b.transmissionResolutionScale);const Se=b.getRenderTarget(),_e=b.getActiveCubeFace(),ke=b.getActiveMipmapLevel();b.setRenderTarget(ie),b.getClearColor(D),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear(),Ie&&Re.render(W);const Ve=b.toneMapping;b.toneMapping=qi;const De=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),ze===!0&&le.setGlobalState(b.clippingPlanes,q),Ma(P,W,q),Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie),Me.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let ot=0,Et=z.length;ot<Et;ot++){const gt=z[ot],ft=gt.object,Oe=gt.geometry,yt=gt.material,it=gt.group;if(yt.side===an&&ft.layers.test(q.layers)){const un=yt.side;yt.side=qt,yt.needsUpdate=!0,mf(ft,W,q,Oe,yt,it),yt.side=un,yt.needsUpdate=!0,Ze=!0}}Ze===!0&&(Ge.updateMultisampleRenderTarget(ie),Ge.updateRenderTargetMipmap(ie))}b.setRenderTarget(Se,_e,ke),b.setClearColor(D,F),De!==void 0&&(q.viewport=De),b.toneMapping=Ve}function Ma(P,z,W){const q=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ie=P.length;H<ie;H++){const pe=P[H],Se=pe.object,_e=pe.geometry,ke=pe.group;let Ve=pe.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),Se.layers.test(W.layers)&&mf(Se,z,W,_e,Ve,ke)}}function mf(P,z,W,q,H,ie){P.onBeforeRender(b,z,W,q,H,ie),P.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(b,z,W,q,P,ie),H.transparent===!0&&H.side===an&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,b.renderBufferDirect(W,z,q,H,P,ie),H.side=Dn,H.needsUpdate=!0,b.renderBufferDirect(W,z,q,H,P,ie),H.side=an):b.renderBufferDirect(W,z,q,H,P,ie),P.onAfterRender(b,z,W,q,H,ie)}function Sa(P,z,W){z.isScene!==!0&&(z=oe);const q=be.get(P),H=p.state.lights,ie=p.state.shadowsArray,pe=H.state.version,Se=K.getParameters(P,H.state,ie,z,W),_e=K.getProgramCacheKey(Se);let ke=q.programs;q.environment=P.isMeshStandardMaterial?z.environment:null,q.fog=z.fog,q.envMap=(P.isMeshStandardMaterial?wt:Ft).get(P.envMap||q.environment),q.envMapRotation=q.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,ke===void 0&&(P.addEventListener("dispose",Q),ke=new Map,q.programs=ke);let Ve=ke.get(_e);if(Ve!==void 0){if(q.currentProgram===Ve&&q.lightsStateVersion===pe)return bf(P,Se),Ve}else Se.uniforms=K.getUniforms(P),P.onBeforeCompile(Se,b),Ve=K.acquireProgram(Se,_e),ke.set(_e,Ve),q.uniforms=Se.uniforms;const De=q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=le.uniform),bf(P,Se),q.needsLights=hm(P),q.lightsStateVersion=pe,q.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),q.currentProgram=Ve,q.uniformsList=null,Ve}function gf(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=yo.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function bf(P,z){const W=be.get(P);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function fm(P,z,W,q,H){z.isScene!==!0&&(z=oe),Ge.resetTextureUnits();const ie=z.fog,pe=q.isMeshStandardMaterial?z.environment:null,Se=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Zt,_e=(q.isMeshStandardMaterial?wt:Ft).get(q.envMap||pe),ke=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ve=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),De=!!W.morphAttributes.position,Ze=!!W.morphAttributes.normal,ot=!!W.morphAttributes.color;let Et=qi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Et=b.toneMapping);const gt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=gt!==void 0?gt.length:0,Oe=be.get(q),yt=p.state.lights;if(ze===!0&&(X===!0||P!==M)){const Xt=P===M&&q.id===S;le.setState(q,P,Xt)}let it=!1;q.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==yt.state.version||Oe.outputColorSpace!==Se||H.isBatchedMesh&&Oe.batching===!1||!H.isBatchedMesh&&Oe.batching===!0||H.isBatchedMesh&&Oe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Oe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Oe.instancing===!1||!H.isInstancedMesh&&Oe.instancing===!0||H.isSkinnedMesh&&Oe.skinning===!1||!H.isSkinnedMesh&&Oe.skinning===!0||H.isInstancedMesh&&Oe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Oe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Oe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Oe.instancingMorph===!1&&H.morphTexture!==null||Oe.envMap!==_e||q.fog===!0&&Oe.fog!==ie||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==le.numPlanes||Oe.numIntersection!==le.numIntersection)||Oe.vertexAlphas!==ke||Oe.vertexTangents!==Ve||Oe.morphTargets!==De||Oe.morphNormals!==Ze||Oe.morphColors!==ot||Oe.toneMapping!==Et||Oe.morphTargetsCount!==ft)&&(it=!0):(it=!0,Oe.__version=q.version);let un=Oe.currentProgram;it===!0&&(un=Sa(q,z,H));let Sr=!1,fn=!1,ws=!1;const Mt=un.getUniforms(),yn=Oe.uniforms;if(ce.useProgram(un.program)&&(Sr=!0,fn=!0,ws=!0),q.id!==S&&(S=q.id,fn=!0),Sr||M!==P){ce.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Mt.setValue(U,"projectionMatrix",P.projectionMatrix),Mt.setValue(U,"viewMatrix",P.matrixWorldInverse);const tn=Mt.map.cameraPosition;tn!==void 0&&tn.setValue(U,j.setFromMatrixPosition(P.matrixWorld)),ge.logarithmicDepthBuffer&&Mt.setValue(U,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(U,"isOrthographic",P.isOrthographicCamera===!0),M!==P&&(M=P,fn=!0,ws=!0)}if(H.isSkinnedMesh){Mt.setOptional(U,H,"bindMatrix"),Mt.setOptional(U,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),Mt.setValue(U,"boneTexture",Xt.boneTexture,Ge))}H.isBatchedMesh&&(Mt.setOptional(U,H,"batchingTexture"),Mt.setValue(U,"batchingTexture",H._matricesTexture,Ge),Mt.setOptional(U,H,"batchingIdTexture"),Mt.setValue(U,"batchingIdTexture",H._indirectTexture,Ge),Mt.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&Mt.setValue(U,"batchingColorTexture",H._colorsTexture,Ge));const Mn=W.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&re.update(H,W,un),(fn||Oe.receiveShadow!==H.receiveShadow)&&(Oe.receiveShadow=H.receiveShadow,Mt.setValue(U,"receiveShadow",H.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(yn.envMap.value=_e,yn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&z.environment!==null&&(yn.envMapIntensity.value=z.environmentIntensity),fn&&(Mt.setValue(U,"toneMappingExposure",b.toneMappingExposure),Oe.needsLights&&dm(yn,ws),ie&&q.fog===!0&&te.refreshFogUniforms(yn,ie),te.refreshMaterialUniforms(yn,q,k,V,p.state.transmissionRenderTarget[P.id]),yo.upload(U,gf(Oe),yn,Ge)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(yo.upload(U,gf(Oe),yn,Ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(U,"center",H.center),Mt.setValue(U,"modelViewMatrix",H.modelViewMatrix),Mt.setValue(U,"normalMatrix",H.normalMatrix),Mt.setValue(U,"modelMatrix",H.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Xt=q.uniformsGroups;for(let tn=0,qo=Xt.length;tn<qo;tn++){const er=Xt[tn];je.update(er,un),je.bind(er,un)}}return un}function dm(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function hm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(P,z,W){const q=be.get(P);q.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),be.get(P.texture).__webglTexture=z,be.get(P.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,z){const W=be.get(P);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0};const pm=U.createFramebuffer();this.setRenderTarget=function(P,z=0,W=0){A=P,E=z,T=W;let q=!0,H=null,ie=!1,pe=!1;if(P){const _e=be.get(P);if(_e.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(U.FRAMEBUFFER,null),q=!1;else if(_e.__webglFramebuffer===void 0)Ge.setupRenderTarget(P);else if(_e.__hasExternalTextures)Ge.rebindTextures(P,be.get(P.texture).__webglTexture,be.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(_e.__boundDepthTexture!==De){if(De!==null&&be.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ge.setupDepthRenderbuffer(P)}}const ke=P.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(pe=!0);const Ve=be.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?H=Ve[z][W]:H=Ve[z],ie=!0):P.samples>0&&Ge.useMultisampledRTT(P)===!1?H=be.get(P).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[W]:H=Ve,w.copy(P.viewport),R.copy(P.scissor),I=P.scissorTest}else w.copy(fe).multiplyScalar(k).floor(),R.copy(Le).multiplyScalar(k).floor(),I=Ye;if(W!==0&&(H=pm),ce.bindFramebuffer(U.FRAMEBUFFER,H)&&q&&ce.drawBuffers(P,H),ce.viewport(w),ce.scissor(R),ce.setScissorTest(I),ie){const _e=be.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,_e.__webglTexture,W)}else if(pe){const _e=z;for(let ke=0;ke<P.textures.length;ke++){const Ve=be.get(P.textures[ke]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ke,Ve.__webglTexture,W,_e)}}else if(P!==null&&W!==0){const _e=be.get(P.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,_e.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(P,z,W,q,H,ie,pe,Se=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e){ce.bindFramebuffer(U.FRAMEBUFFER,_e);try{const ke=P.textures[Se],Ve=ke.format,De=ke.type;if(!ge.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-q&&W>=0&&W<=P.height-H&&(P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(z,W,q,H,Ce.convert(Ve),Ce.convert(De),ie))}finally{const ke=A!==null?be.get(A).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,z,W,q,H,ie,pe,Se=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=be.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pe!==void 0&&(_e=_e[pe]),_e)if(z>=0&&z<=P.width-q&&W>=0&&W<=P.height-H){ce.bindFramebuffer(U.FRAMEBUFFER,_e);const ke=P.textures[Se],Ve=ke.format,De=ke.type;if(!ge.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),P.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Se),U.readPixels(z,W,q,H,Ce.convert(Ve),Ce.convert(De),0);const ot=A!==null?be.get(A).__webglFramebuffer:null;ce.bindFramebuffer(U.FRAMEBUFFER,ot);const Et=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Mg(U,Et,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(Ze),U.deleteSync(Et),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,z=null,W=0){const q=Math.pow(2,-W),H=Math.floor(P.image.width*q),ie=Math.floor(P.image.height*q),pe=z!==null?z.x:0,Se=z!==null?z.y:0;Ge.setTexture2D(P,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,pe,Se,H,ie),ce.unbindTexture()};const mm=U.createFramebuffer(),gm=U.createFramebuffer();this.copyTextureToTexture=function(P,z,W=null,q=null,H=0,ie=null){ie===null&&(H!==0?(pa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=H,H=0):ie=0);let pe,Se,_e,ke,Ve,De,Ze,ot,Et;const gt=P.isCompressedTexture?P.mipmaps[ie]:P.image;if(W!==null)pe=W.max.x-W.min.x,Se=W.max.y-W.min.y,_e=W.isBox3?W.max.z-W.min.z:1,ke=W.min.x,Ve=W.min.y,De=W.isBox3?W.min.z:0;else{const Mn=Math.pow(2,-H);pe=Math.floor(gt.width*Mn),Se=Math.floor(gt.height*Mn),P.isDataArrayTexture?_e=gt.depth:P.isData3DTexture?_e=Math.floor(gt.depth*Mn):_e=1,ke=0,Ve=0,De=0}q!==null?(Ze=q.x,ot=q.y,Et=q.z):(Ze=0,ot=0,Et=0);const ft=Ce.convert(z.format),Oe=Ce.convert(z.type);let yt;z.isData3DTexture?(Ge.setTexture3D(z,0),yt=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ge.setTexture2DArray(z,0),yt=U.TEXTURE_2D_ARRAY):(Ge.setTexture2D(z,0),yt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const it=U.getParameter(U.UNPACK_ROW_LENGTH),un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Sr=U.getParameter(U.UNPACK_SKIP_PIXELS),fn=U.getParameter(U.UNPACK_SKIP_ROWS),ws=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ke),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),U.pixelStorei(U.UNPACK_SKIP_IMAGES,De);const Mt=P.isDataArrayTexture||P.isData3DTexture,yn=z.isDataArrayTexture||z.isData3DTexture;if(P.isDepthTexture){const Mn=be.get(P),Xt=be.get(z),tn=be.get(Mn.__renderTarget),qo=be.get(Xt.__renderTarget);ce.bindFramebuffer(U.READ_FRAMEBUFFER,tn.__webglFramebuffer),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,qo.__webglFramebuffer);for(let er=0;er<_e;er++)Mt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(P).__webglTexture,H,De+er),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(z).__webglTexture,ie,Et+er)),U.blitFramebuffer(ke,Ve,pe,Se,Ze,ot,pe,Se,U.DEPTH_BUFFER_BIT,U.NEAREST);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||be.has(P)){const Mn=be.get(P),Xt=be.get(z);ce.bindFramebuffer(U.READ_FRAMEBUFFER,mm),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,gm);for(let tn=0;tn<_e;tn++)Mt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,H,De+tn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,H),yn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Xt.__webglTexture,ie,Et+tn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Xt.__webglTexture,ie),H!==0?U.blitFramebuffer(ke,Ve,pe,Se,Ze,ot,pe,Se,U.COLOR_BUFFER_BIT,U.NEAREST):yn?U.copyTexSubImage3D(yt,ie,Ze,ot,Et+tn,ke,Ve,pe,Se):U.copyTexSubImage2D(yt,ie,Ze,ot,ke,Ve,pe,Se);ce.bindFramebuffer(U.READ_FRAMEBUFFER,null),ce.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else yn?P.isDataTexture||P.isData3DTexture?U.texSubImage3D(yt,ie,Ze,ot,Et,pe,Se,_e,ft,Oe,gt.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,ie,Ze,ot,Et,pe,Se,_e,ft,gt.data):U.texSubImage3D(yt,ie,Ze,ot,Et,pe,Se,_e,ft,Oe,gt):P.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ie,Ze,ot,pe,Se,ft,Oe,gt.data):P.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ie,Ze,ot,gt.width,gt.height,ft,gt.data):U.texSubImage2D(U.TEXTURE_2D,ie,Ze,ot,pe,Se,ft,Oe,gt);U.pixelStorei(U.UNPACK_ROW_LENGTH,it),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Sr),U.pixelStorei(U.UNPACK_SKIP_ROWS,fn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ws),ie===0&&z.generateMipmaps&&U.generateMipmap(yt),ce.unbindTexture()},this.initRenderTarget=function(P){be.get(P).__webglFramebuffer===void 0&&Ge.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?Ge.setTextureCube(P,0):P.isData3DTexture?Ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?Ge.setTexture2DArray(P,0):Ge.setTexture2D(P,0),ce.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,ce.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}}function Dp(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,c=new jt;let l=0;for(let d=0;d<i.length;++d){const u=i[d];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in u.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(u.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in u.morphAttributes){if(!r.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(u.morphAttributes[h])}if(e){let h;if(t)h=u.index.count;else if(u.attributes.position!==void 0)h=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0;const u=[];for(let f=0;f<i.length;++f){const h=i[f].index;for(let g=0;g<h.count;++g)u.push(h.getX(g)+d);d+=i[f].attributes.position.count}c.setIndex(u)}for(const d in s){const u=Fd(s[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,u)}for(const d in a){const u=a[d][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let f=0;f<u;++f){const h=[];for(let _=0;_<a[d].length;++_)h.push(a[d][_][f]);const g=Fd(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(g)}}return c}function Fd(i){let e,t,n,r=-1,s=0;for(let l=0;l<i.length;++l){const d=i[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=d.gpuType),r!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=d.count*t}const a=new e(s),o=new kt(a,t,n);let c=0;for(let l=0;l<i.length;++l){const d=i[l];if(d.isInterleavedBufferAttribute){const u=c/t;for(let f=0,h=d.count;f<h;f++)for(let g=0;g<t;g++){const _=d.getComponent(f,g);o.setComponent(f+u,g,_)}}else a.set(d.array,c);c+=d.count*t}return r!==void 0&&(o.gpuType=r),o}function Od(i,e){if(e===Ym)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ru||e===np){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===ru)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Zu extends Ss{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)}),this.register(function(t){return new Fy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new Oy(t)}),this.register(function(t){return new By(t)})}load(e,t,n,r){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=ta.extractUrlBase(e);a=ta.resolveURL(l,this.path)}else a=ta.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Tp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(d){t(d),s.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Up){try{a[Je.KHR_BINARY_GLTF]=new ky(e)}catch(u){r&&r(u);return}s=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Zy(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const u=s.extensionsUsed[d],f=s.extensionsRequired||[];switch(u){case Je.KHR_MATERIALS_UNLIT:a[u]=new My;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[u]=new zy(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[u]=new Hy;break;case Je.KHR_MESH_QUANTIZATION:a[u]=new Vy;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function vy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yy{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const d=new Be(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Zt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Sb(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Ap(d),l.distance=u;break;case"spot":l=new wp(d),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ei(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class My{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Wn}extendParams(e,t,n){const r=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Rt))}return Promise.all(r)}}class Sy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Ey{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class wy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Rt)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Ry{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class Cy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(o[0],o[1],o[2],Zt),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ly{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(o[0],o[1],o[2],Zt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Rt)),Promise.all(s)}}class Iy{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Dy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Uy{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Ny{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Fy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Oy{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=r.byteOffset||0,l=r.byteLength||0,d=r.count,u=r.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,f,r.mode,r.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(h),d,u,f,r.mode,r.filter),h})})}else return null}}class By{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Tn.TRIANGLES&&l.mode!==Tn.TRIANGLE_STRIP&&l.mode!==Tn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),u=d.isGroup?d.children:[d],f=l[0].count,h=[];for(const g of u){const _=new Ne,m=new L,p=new vn,y=new L(1,1,1),x=new gp(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),x.setMatrixAt(b,_.compose(m,p,y));for(const b in c)if(b==="_COLOR_0"){const v=c[b];x.instanceColor=new au(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),h.push(x)}return d.isGroup?(d.clear(),d.add(...h),d):h[0]}))}}const Up="glTF",Ns=12,Bd={JSON:1313821514,BIN:5130562};class ky{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ns),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Up)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Ns,s=new DataView(e,Ns);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Bd.JSON){const l=new Uint8Array(e,Ns+a,o);this.content=n.decode(l)}else if(c===Bd.BIN){const l=Ns+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class zy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const u=fu[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=fu[d]||d.toLowerCase();if(a[d]!==void 0){const f=n.accessors[e.attributes[d]],h=rs[f.componentType];l[u]=h.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(u,f){r.decodeDracoFile(d,function(h){for(const g in h.attributes){const _=h.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}u(h)},o,l,Zt,f)})})}}class Hy{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Vy{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Np extends xa{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=r-t,u=(n-t)/d,f=u*u,h=f*u,g=e*l,_=g-l,m=-2*h+3*f,p=h-f,y=1-m,x=p-f+u;for(let b=0;b!==o;b++){const v=a[_+b+o],E=a[_+b+c]*d,T=a[g+b+o],A=a[g+b]*d;s[b]=y*v+x*E+m*T+p*A}return s}}const Gy=new vn;class Wy extends Np{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return Gy.fromArray(s).normalize().toArray(s),s}}const Tn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kd={9728:$t,9729:Jt,9984:Yh,9985:go,9986:js,9987:Vn},zd={33071:Vi,33648:wo,10497:us},Rc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},fu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Di={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qy={CUBICSPLINE:void 0,LINEAR:da,STEP:fa},Cc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function jy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new mn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function or(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ei(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Xy(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,d=e.length;l<d;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(f)}if(r){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(f)}if(s){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],u=l[1],f=l[2];return n&&(i.morphAttributes.position=d),r&&(i.morphAttributes.normal=u),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function Yy(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ky(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Pc(t.attributes):e=i.indices+":"+Pc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+Pc(i.targets[n]);return e}function Pc(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function du(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const $y=new Ne;class Zy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);r=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&r<17||s&&a<98?this.textureLoader=new _b(this.options.manager):this.textureLoader=new Eb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Tp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};return or(s,o,r),ei(o,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())s(d,o.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(ta.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Rc[r.type],o=rs[r.componentType],c=r.normalized===!0,l=new o(r.count*a);return Promise.resolve(new kt(l,a,c))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=Rc[r.type],l=rs[r.componentType],d=l.BYTES_PER_ELEMENT,u=d*c,f=r.byteOffset||0,h=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let _,m;if(h&&h!==u){const p=Math.floor(f/h),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+p+":"+r.count;let x=t.cache.get(y);x||(_=new l(o,p*h,r.count*h/d),x=new jg(_,h/d),t.cache.add(y,x)),m=new Hu(x,c,f%h/d,g)}else o===null?_=new l(r.count*c):_=new l(o,f,r.count*c),m=new kt(_,c,g);if(r.sparse!==void 0){const p=Rc.SCALAR,y=rs[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,b=r.sparse.values.byteOffset||0,v=new y(a[1],x,r.sparse.count*p),E=new l(a[2],b,r.sparse.count*c);o!==null&&(m=new kt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,A=v.length;T<A;T++){const S=v[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return d.magFilter=kd[f.magFilter]||Jt,d.minFilter=kd[f.minFilter]||Vn,d.wrapS=zd[f.wrapS]||us,d.wrapT=zd[f.wrapT]||us,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==$t&&d.minFilter!==Jt,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=r.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(u){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){const m=new It(_);m.needsUpdate=!0,f(m)}),t.load(ta.resolveURL(u,s.path),g,void 0,h)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),ei(u,a),u.userData.mimeType=a.mimeType||Jy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new _p,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new bp,Xn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return mn}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const u=r[Je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Zt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Rt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=an);const d=s.alphaMode||Cc.OPAQUE;if(d===Cc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===Cc.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==Wn&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ue(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==Wn&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==Wn){const u=s.emissiveFactor;o.emissive=new Be().setRGB(u[0],u[1],u[2],Zt)}return s.emissiveTexture!==void 0&&a!==Wn&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Rt)),Promise.all(l).then(function(){const u=new a(o);return s.name&&(u.name=s.name),ei(u,s),t.associations.set(u,{materials:e}),s.extensions&&or(r,u,s),u})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Ky(l),u=r[d];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?f=s(l):f=Hd(new jt,l,t),r[d]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?jy(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],u=[];for(let h=0,g=d.length;h<g;h++){const _=d[h],m=a[h];let p;const y=l[h];if(m.mode===Tn.TRIANGLES||m.mode===Tn.TRIANGLE_STRIP||m.mode===Tn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Yg(_,y):new lt(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Tn.TRIANGLE_STRIP?p.geometry=Od(p.geometry,np):m.mode===Tn.TRIANGLE_FAN&&(p.geometry=Od(p.geometry,ru));else if(m.mode===Tn.LINES)p=new eb(_,y);else if(m.mode===Tn.LINE_STRIP)p=new Wu(_,y);else if(m.mode===Tn.LINE_LOOP)p=new tb(_,y);else if(m.mode===Tn.POINTS)p=new xp(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Yy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),ei(p,s),m.extensions&&or(r,p,m),t.assignFinalMaterial(p),u.push(p)}for(let h=0,g=u.length;h<g;h++)t.associations.set(u[h],{meshes:e,primitives:h});if(u.length===1)return s.extensions&&or(r,u[0],s),u[0];const f=new gn;s.extensions&&or(r,f,s),t.associations.set(f,{meshes:e});for(let h=0,g=u.length;h<g;h++)f.add(u[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(Un.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Xu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ei(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const u=a[l];if(u){o.push(u);const f=new Ne;s!==null&&f.fromArray(s.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Vu(o,c)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let u=0,f=r.channels.length;u<f;u++){const h=r.channels[u],g=r.samplers[h.sampler],_=h.target,m=_.node,p=r.parameters!==void 0?r.parameters[g.input]:g.input,y=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),d.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(u){const f=u[0],h=u[1],g=u[2],_=u[3],m=u[4],p=[];for(let x=0,b=f.length;x<b;x++){const v=f[x],E=h[x],T=g[x],A=_[x],S=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,E,T,A,S);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}const y=new fb(s,void 0,p);return ei(y,r),y})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=r.weights.length;c<l;c++)o.morphTargetInfluences[c]=r.weights[c]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const d=l[0],u=l[1],f=l[2];f!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(f,$y)});for(let h=0,g=u.length;h<g;h++)d.add(u[h]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(s.isBone===!0?d=new pp:l.length>1?d=new gn:l.length===1?d=l[0]:d=new bt,d!==l[0])for(let u=0,f=l.length;u<f;u++)d.add(l[u]);if(s.name&&(d.userData.name=s.name,d.name=a),ei(d,s),s.extensions&&or(n,d,s),s.matrix!==void 0){const u=new Ne;u.fromArray(s.matrix),d.applyMatrix4(u)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!r.associations.has(d))r.associations.set(d,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const u=r.associations.get(d);r.associations.set(d,{...u})}return r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new gn;n.name&&(s.name=r.createUniqueName(n.name)),ei(s,n),n.extensions&&or(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(r.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,u=c.length;d<u;d++)s.add(c[d]);const l=d=>{const u=new Map;for(const[f,h]of r.associations)(f instanceof Xn||f instanceof It)&&u.set(f,h);return d.traverse(f=>{const h=r.associations.get(f);h!=null&&u.set(f,h)}),u};return r.associations=l(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,c=[];Di[s.path]===Di.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Di[s.path]){case Di.weights:l=hs;break;case Di.rotation:l=ps;break;case Di.translation:case Di.scale:l=ms;break;default:switch(n.itemSize){case 1:l=hs;break;case 2:case 3:default:l=ms;break}break}const d=r.interpolation!==void 0?qy[r.interpolation]:da,u=this._getArrayFromAccessor(n);for(let f=0,h=c.length;f<h;f++){const g=new l(c[f]+"."+Di[s.path],t.array,u,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=du(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof ps?Wy:Np;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qy(i,e,t){const n=e.attributes,r=new nt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(r.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),o.normalized){const d=du(rs[o.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new L,c=new L;for(let l=0,d=s.length;l<d;l++){const u=s[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const _=du(rs[f.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new Jn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function Hd(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=fu[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Qe.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),ei(i,e),Qy(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?Xy(i,e.targets,t):i})}class eM extends hp{constructor(){super();const e=new Ji;e.deleteAttribute("uv");const t=new mn({side:qt}),n=new mn,r=new Ap(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new lt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new gp(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new lt(e,Vr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new lt(e,Vr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new lt(e,Vr(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new lt(e,Vr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new lt(e,Vr(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const h=new lt(e,Vr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Vr(i){return new nb({color:0,emissive:16777215,emissiveIntensity:i})}const Fp=0,tM=1,nM=2,Vd=2,Lc=1.25,Gd=1,na=32,Bo=65535,iM=Math.pow(2,-24),Ic=Symbol("SKIP_GENERATION");function rM(i){return i.index?i.index.count:i.attributes.position.count}function Zi(i){return rM(i)/3}function sM(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function aM(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=sM(t,n);i.setIndex(new kt(r,1));for(let s=0;s<t;s++)r[s]=s}}function Op(i,e){const t=Zi(i),n=e||i.drawRange,r=n.start/3,s=(n.start+n.count)/3,a=Math.max(0,r),o=Math.min(t,s)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Bp(i,e){if(!i.groups||!i.groups.length)return Op(i,e);const t=[],n=new Set,r=e||i.drawRange,s=r.start/3,a=(r.start+r.count)/3;for(const c of i.groups){const l=c.start/3,d=(c.start+c.count)/3;n.add(Math.max(s,l)),n.add(Math.min(a,d))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],d=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(d-l)})}return t}function oM(i,e){const t=Zi(i),n=Bp(i,e).sort((a,o)=>a.offset-o.offset),r=n[n.length-1];r.count=Math.min(t-r.offset,r.count);let s=0;return n.forEach(({count:a})=>s+=a),t!==s}function Dc(i,e,t,n,r){let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,d=-1/0,u=1/0,f=1/0,h=1/0,g=-1/0,_=-1/0,m=-1/0;for(let p=e*6,y=(e+t)*6;p<y;p+=6){const x=i[p+0],b=i[p+1],v=x-b,E=x+b;v<s&&(s=v),E>c&&(c=E),x<u&&(u=x),x>g&&(g=x);const T=i[p+2],A=i[p+3],S=T-A,M=T+A;S<a&&(a=S),M>l&&(l=M),T<f&&(f=T),T>_&&(_=T);const w=i[p+4],R=i[p+5],I=w-R,D=w+R;I<o&&(o=I),D>d&&(d=D),w<h&&(h=w),w>m&&(m=w)}n[0]=s,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=d,r[0]=u,r[1]=f,r[2]=h,r[3]=g,r[4]=_,r[5]=m}function cM(i,e=null,t=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,a=Zi(i),o=r.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=r.array,d=r.offset||0;let u=3;r.isInterleavedBufferAttribute&&(u=r.data.stride);const f=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,_=h*6;let m=g+0,p=g+1,y=g+2;s&&(m=s[m],p=s[p],y=s[y]),o||(m=m*u+d,p=p*u+d,y=y*u+d);for(let x=0;x<3;x++){let b,v,E;o?(b=r[f[x]](m),v=r[f[x]](p),E=r[f[x]](y)):(b=l[m+x],v=l[p+x],E=l[y+x]);let T=b;v<T&&(T=v),E<T&&(T=E);let A=b;v>A&&(A=v),E>A&&(A=E);const S=(A-T)/2,M=x*2;c[_+M+0]=T+S,c[_+M+1]=S+(Math.abs(T)+S)*iM}}return c}function Tt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function Wd(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>t&&(t=r,e=n)}return e}function qd(i,e){e.set(i)}function jd(i,e,t){let n,r;for(let s=0;s<3;s++){const a=s+3;n=i[s],r=e[s],t[s]=n<r?n:r,n=i[a],r=e[a],t[a]=n>r?n:r}}function Za(i,e,t){for(let n=0;n<3;n++){const r=e[i+2*n],s=e[i+2*n+1],a=r-s,o=r+s;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Fs(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const _i=32,lM=(i,e)=>i.candidate-e.candidate,Ui=new Array(_i).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Qa=new Float32Array(6);function uM(i,e,t,n,r,s){let a=-1,o=0;if(s===Fp)a=Wd(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===tM)a=Wd(i),a!==-1&&(o=fM(t,n,r,a));else if(s===nM){const c=Fs(i);let l=Lc*r;const d=n*6,u=(n+r)*6;for(let f=0;f<3;f++){const h=e[f],m=(e[f+3]-h)/_i;if(r<_i/4){const p=[...Ui];p.length=r;let y=0;for(let b=d;b<u;b+=6,y++){const v=p[y];v.candidate=t[b+2*f],v.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:A}=v;for(let S=0;S<3;S++)A[S]=1/0,A[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;Za(b,t,E)}p.sort(lM);let x=r;for(let b=0;b<x;b++){const v=p[b];for(;b+1<x&&p[b+1].candidate===v.candidate;)p.splice(b+1,1),x--}for(let b=d;b<u;b+=6){const v=t[b+2*f];for(let E=0;E<x;E++){const T=p[E];v>=T.candidate?Za(b,t,T.rightCacheBounds):(Za(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<x;b++){const v=p[b],E=v.count,T=r-v.count,A=v.leftCacheBounds,S=v.rightCacheBounds;let M=0;E!==0&&(M=Fs(A)/c);let w=0;T!==0&&(w=Fs(S)/c);const R=Gd+Lc*(M*E+w*T);R<l&&(a=f,l=R,o=v.candidate)}}else{for(let x=0;x<_i;x++){const b=Ui[x];b.count=0,b.candidate=h+m+x*m;const v=b.bounds;for(let E=0;E<3;E++)v[E]=1/0,v[E+3]=-1/0}for(let x=d;x<u;x+=6){let E=~~((t[x+2*f]-h)/m);E>=_i&&(E=_i-1);const T=Ui[E];T.count++,Za(x,t,T.bounds)}const p=Ui[_i-1];qd(p.bounds,p.rightCacheBounds);for(let x=_i-2;x>=0;x--){const b=Ui[x],v=Ui[x+1];jd(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let x=0;x<_i-1;x++){const b=Ui[x],v=b.count,E=b.bounds,A=Ui[x+1].rightCacheBounds;v!==0&&(y===0?qd(E,Qa):jd(E,Qa,Qa)),y+=v;let S=0,M=0;y!==0&&(S=Fs(Qa)/c);const w=r-y;w!==0&&(M=Fs(A)/c);const R=Gd+Lc*(S*y+M*w);R<l&&(a=f,l=R,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function fM(i,e,t,n){let r=0;for(let s=e,a=e+t;s<a;s++)r+=i[s*6+n*2];return r/t}class Uc{constructor(){this.boundingData=new Float32Array(6)}}function dM(i,e,t,n,r,s){let a=n,o=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let d=0;d<3;d++){let u=e[a*3+d];e[a*3+d]=e[o*3+d],e[o*3+d]=u}for(let d=0;d<6;d++){let u=t[a*6+d];t[a*6+d]=t[o*6+d],t[o*6+d]=u}a++,o--}else return a}}function hM(i,e,t,n,r,s){let a=n,o=n+r-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let d=i[a];i[a]=i[o],i[o]=d;for(let u=0;u<6;u++){let f=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=f}a++,o--}else return a}}function on(i,e){return e[i+15]===65535}function bn(i,e){return e[i+6]}function An(i,e){return e[i+14]}function Rn(i){return i+8}function Cn(i,e){return e[i+6]}function kp(i,e){return e[i+7]}let zp,Ys,Mo,Hp;const pM=Math.pow(2,32);function hu(i){return"count"in i?1:1+hu(i.left)+hu(i.right)}function mM(i,e,t){return zp=new Float32Array(t),Ys=new Uint32Array(t),Mo=new Uint16Array(t),Hp=new Uint8Array(t),pu(i,e)}function pu(i,e){const t=i/4,n=i/2,r="count"in e,s=e.boundingData;for(let a=0;a<6;a++)zp[t+a]=s[a];if(r)if(e.buffer){const a=e.buffer;Hp.set(new Uint8Array(a),i);for(let o=i,c=i+a.byteLength;o<c;o+=na){const l=o/2;on(l,Mo)||(Ys[o/4+6]+=t)}return i+a.byteLength}else{const a=e.offset,o=e.count;return Ys[t+6]=a,Mo[n+14]=o,Mo[n+15]=Bo,i+na}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=pu(i+na,a),l/4>pM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ys[t+6]=l/4,l=pu(l,o),Ys[t+7]=c,l}}function gM(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,r=n?4:2,s=e?new SharedArrayBuffer(t*r):new ArrayBuffer(t*r),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function bM(i,e,t,n,r){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:d}=r,u=i._indirectBuffer,f=i.geometry,h=f.index?f.index.array:null,g=d?hM:dM,_=Zi(f),m=new Float32Array(6);let p=!1;const y=new Uc;return Dc(e,t,n,y.boundingData,m),b(y,t,n,m),y;function x(v){l&&l(v/_)}function b(v,E,T,A=null,S=0){if(!p&&S>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),T<=o||S>=s)return x(E+T),v.offset=E,v.count=T,v;const M=uM(v.boundingData,A,e,E,T,c);if(M.axis===-1)return x(E+T),v.offset=E,v.count=T,v;const w=g(u,h,e,E,T,M);if(w===E||w===E+T)x(E+T),v.offset=E,v.count=T;else{v.splitAxis=M.axis;const R=new Uc,I=E,D=w-E;v.left=R,Dc(e,I,D,R.boundingData,m),b(R,I,D,m,S+1);const F=new Uc,O=w,V=T-D;v.right=F,Dc(e,O,V,F.boundingData,m),b(F,O,V,m,S+1)}return v}}function _M(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=gM(t,e.useSharedArrayBuffer),oM(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||aM(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Op(t,e.range),s=cM(t,null,r[0].offset,r[0].count),a=e.indirect?r:Bp(t,e.range);i._roots=a.map(o=>{const c=bM(i,s,o.offset,o.count,e),l=hu(c),d=new n(na*l);return mM(0,c,d),d})}class wi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let s=0,a=e.length;s<a;s++){const c=e[s][t];n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s],c=e.dot(o);n=c<n?c:n,r=c>r?c:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}wi.prototype.setFromBox=(function(){const i=new L;return function(t,n){const r=n.min,s=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let d=0;d<=1;d++){i.x=r.x*c+s.x*(1-c),i.y=r.y*l+s.y*(1-l),i.z=r.z*d+s.z*(1-d);const u=t.dot(i);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}})();const xM=(function(){const i=new L,e=new L,t=new L;return function(r,s,a){const o=r.start,c=i,l=s.start,d=e;t.subVectors(o,l),i.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const u=t.dot(d),f=d.dot(c),h=d.dot(d),g=t.dot(c),m=c.dot(c)*h-f*f;let p,y;m!==0?p=(u*f-g*h)/m:p=0,y=(u+p*f)/h,a.x=p,a.y=y}})(),Qu=(function(){const i=new Ue,e=new L,t=new L;return function(r,s,a,o){xM(r,s,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){r.at(c,a),s.at(l,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let d;c<0?d=r.start:d=r.end;let u;l<0?u=s.start:u=s.end;const f=e,h=t;if(r.closestPointToPoint(u,!0,e),s.closestPointToPoint(d,!0,t),f.distanceToSquared(u)<=h.distanceToSquared(d)){a.copy(f),o.copy(u);return}else{a.copy(d),o.copy(h);return}}}})(),vM=(function(){const i=new L,e=new L,t=new ti,n=new ci;return function(s,a){const{radius:o,center:c}=s,{a:l,b:d,c:u}=a;if(n.start=l,n.end=d,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o)||(n.start=d,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=o))return!0;const _=a.getPlane(t);if(Math.abs(_.distanceToPoint(c))<=o){const p=_.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),yM=["x","y","z"],xi=1e-15,Xd=xi*xi;function En(i){return Math.abs(i)<xi}class Kn extends Lt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new wi),this.points=[this.a,this.b,this.c],this.plane=new ti,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ci,this.needsUpdate=!0}intersectsSphere(e){return vM(e,this)}update(){const e=this.a,t=this.b,n=this.c,r=this.points,s=this.satAxes,a=this.satBounds,o=s[0],c=a[0];this.getNormal(o),c.setFromPoints(o,r);const l=s[1],d=a[1];l.subVectors(e,t),d.setFromPoints(l,r);const u=s[2],f=a[2];u.subVectors(t,n),f.setFromPoints(u,r);const h=s[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,r);const _=l.length(),m=u.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,_<xi?m<xi||p<xi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<xi?p<xi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<xi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Kn.prototype.closestPointToSegment=(function(){const i=new L,e=new L,t=new ci;return function(r,s=null,a=null){const{start:o,end:c}=r,l=this.points;let d,u=1/0;for(let f=0;f<3;f++){const h=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[h]),Qu(t,r,i,e),d=i.distanceToSquared(e),d<u&&(u=d,s&&s.copy(i),a&&a.copy(e))}return this.closestPointToPoint(o,i),d=o.distanceToSquared(i),d<u&&(u=d,s&&s.copy(i),a&&a.copy(o)),this.closestPointToPoint(c,i),d=c.distanceToSquared(i),d<u&&(u=d,s&&s.copy(i),a&&a.copy(c)),Math.sqrt(u)}})();Kn.prototype.intersectsTriangle=(function(){const i=new Kn,e=new wi,t=new wi,n=new L,r=new L,s=new L,a=new L,o=new ci,c=new ci,l=new L,d=new Ue,u=new Ue;function f(x,b,v,E){const T=n;!x.isDegenerateIntoPoint&&!x.isDegenerateIntoSegment?T.copy(x.plane.normal):T.copy(b.plane.normal);const A=x.satBounds,S=x.satAxes;for(let R=1;R<4;R++){const I=A[R],D=S[R];if(e.setFromPoints(D,b.points),I.isSeparated(e)||(a.copy(T).cross(D),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const M=b.satBounds,w=b.satAxes;for(let R=1;R<4;R++){const I=M[R],D=w[R];if(e.setFromPoints(D,x.points),I.isSeparated(e)||(a.crossVectors(T,D),e.setFromPoints(a,x.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return v&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function h(x,b,v,E,T,A,S,M,w,R,I){let D=S/(S-M);R.x=E+(T-E)*D,I.start.subVectors(b,x).multiplyScalar(D).add(x),D=S/(S-w),R.y=E+(A-E)*D,I.end.subVectors(v,x).multiplyScalar(D).add(x)}function g(x,b,v,E,T,A,S,M,w,R,I){if(T>0)h(x.c,x.a,x.b,E,b,v,w,S,M,R,I);else if(A>0)h(x.b,x.a,x.c,v,b,E,M,S,w,R,I);else if(M*w>0||S!=0)h(x.a,x.b,x.c,b,v,E,S,M,w,R,I);else if(M!=0)h(x.b,x.a,x.c,v,b,E,M,S,w,R,I);else if(w!=0)h(x.c,x.a,x.b,E,b,v,w,S,M,R,I);else return!0;return!1}function _(x,b,v,E){const T=b.degenerateSegment,A=x.plane.distanceToPoint(T.start),S=x.plane.distanceToPoint(T.end);return En(A)?En(S)?f(x,b,v,E):(v&&(v.start.copy(T.start),v.end.copy(T.start)),x.containsPoint(T.start)):En(S)?(v&&(v.start.copy(T.end),v.end.copy(T.end)),x.containsPoint(T.end)):x.plane.intersectLine(T,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),x.containsPoint(n)):!1}function m(x,b,v){const E=b.a;return En(x.plane.distanceToPoint(E))&&x.containsPoint(E)?(v&&(v.start.copy(E),v.end.copy(E)),!0):!1}function p(x,b,v){const E=x.degenerateSegment,T=b.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<Xd?(v&&(v.start.copy(T),v.end.copy(T)),!0):!1}function y(x,b,v,E){if(x.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const T=x.degenerateSegment,A=b.degenerateSegment,S=r,M=s;T.delta(S),A.delta(M);const w=n.subVectors(A.start,T.start),R=S.x*M.y-S.y*M.x;if(En(R))return!1;const I=(w.x*M.y-w.y*M.x)/R,D=-(S.x*w.y-S.y*w.x)/R;if(I<0||I>1||D<0||D>1)return!1;const F=T.start.z+S.z*I,O=A.start.z+M.z*D;return En(F-O)?(v&&(v.start.copy(T.start).addScaledVector(S,I),v.end.copy(T.start).addScaledVector(S,I)),!0):!1}else return b.isDegenerateIntoPoint?p(x,b,v):_(b,x,v,E);else{if(x.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(x.a)<Xd?(v&&(v.start.copy(x.a),v.end.copy(x.a)),!0):!1:b.isDegenerateIntoSegment?p(b,x,v):m(b,x,v);if(b.isDegenerateIntoPoint)return m(x,b,v);if(b.isDegenerateIntoSegment)return _(x,b,v,E)}}return function(b,v=null,E=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(i.copy(b),i.update(),b=i);const T=y(this,b,v,E);if(T!==void 0)return T;const A=this.plane,S=b.plane;let M=S.distanceToPoint(this.a),w=S.distanceToPoint(this.b),R=S.distanceToPoint(this.c);En(M)&&(M=0),En(w)&&(w=0),En(R)&&(R=0);const I=M*w,D=M*R;if(I>0&&D>0)return!1;let F=A.distanceToPoint(b.a),O=A.distanceToPoint(b.b),V=A.distanceToPoint(b.c);En(F)&&(F=0),En(O)&&(O=0),En(V)&&(V=0);const k=F*O,J=F*V;if(k>0&&J>0)return!1;r.copy(A.normal),s.copy(S.normal);const Z=r.cross(s);let fe=0,Le=Math.abs(Z.x);const Ye=Math.abs(Z.y);Ye>Le&&(Le=Ye,fe=1),Math.abs(Z.z)>Le&&(fe=2);const ze=yM[fe],X=this.a[ze],$=this.b[ze],j=this.c[ze],ae=b.a[ze],oe=b.b[ze],Ie=b.c[ze];if(g(this,X,$,j,I,D,M,w,R,d,o))return f(this,b,v,E);if(g(b,ae,oe,Ie,k,J,F,O,V,u,c))return f(this,b,v,E);if(d.y<d.x){const ee=d.y;d.y=d.x,d.x=ee,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(u.y<u.x){const ee=u.y;u.y=u.x,u.x=ee,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return d.y<u.x||u.y<d.x?!1:(v&&(u.x>d.x?v.start.copy(c.start):v.start.copy(o.start),u.y<d.y?v.end.copy(c.end):v.end.copy(o.end)),!0)}})();Kn.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();Kn.prototype.distanceToTriangle=(function(){const i=new L,e=new L,t=["a","b","c"],n=new ci,r=new ci;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let d=1/0;for(let u=0;u<3;u++){let f;const h=t[u],g=a[h];this.closestPointToPoint(g,i),f=g.distanceToSquared(i),f<d&&(d=f,o&&o.copy(i),c&&c.copy(g));const _=this[h];a.closestPointToPoint(_,i),f=_.distanceToSquared(i),f<d&&(d=f,o&&o.copy(_),c&&c.copy(i))}for(let u=0;u<3;u++){const f=t[u],h=t[(u+1)%3];n.set(this[f],this[h]);for(let g=0;g<3;g++){const _=t[g],m=t[(g+1)%3];r.set(a[_],a[m]),Qu(n,r,i,e);const p=i.distanceToSquared(e);p<d&&(d=p,o&&o.copy(i),c&&c.copy(e))}}return Math.sqrt(d)}})();class en{constructor(e,t,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Ne,this.invMatrix=new Ne,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new wi),this.alignedSatBounds=new Array(3).fill().map(()=>new wi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}en.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,r=this.points;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let u=0;u<=1;u++){const f=1*l|2*d|4*u,h=r[f];h.x=l?n.x:t.x,h.y=d?n.y:t.y,h.z=u?n.z:t.z,h.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,o=r[0];for(let l=0;l<3;l++){const d=a[l],u=s[l],f=1<<l,h=r[f];d.subVectors(o,h),u.setFromPoints(d,r)}const c=this.alignedSatBounds;c[0].setFromPointsField(r,"x"),c[1].setFromPointsField(r,"y"),c[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();en.prototype.intersectsBox=(function(){const i=new wi;return function(t){this.needsUpdate&&this.update();const n=t.min,r=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,o[0].isSeparated(i)||(i.min=n.y,i.max=r.y,o[1].isSeparated(i))||(i.min=n.z,i.max=r.z,o[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){const l=a[c],d=s[c];if(i.setFromBox(l,t),d.isSeparated(i))return!1}return!0}})();en.prototype.intersectsTriangle=(function(){const i=new Kn,e=new Array(3),t=new wi,n=new wi,r=new L;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let f=0;f<3;f++){const h=o[f],g=c[f];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,d=a.satAxes,u=this.points;for(let f=0;f<3;f++){const h=l[f],g=d[f];if(t.setFromPoints(g,u),h.isSeparated(t))return!1}for(let f=0;f<3;f++){const h=c[f];for(let g=0;g<4;g++){const _=d[g];if(r.crossVectors(h,_),t.setFromPoints(r,e),n.setFromPoints(r,u),t.isSeparated(n))return!1}}return!0}})();en.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();en.prototype.distanceToPoint=(function(){const i=new L;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}})();en.prototype.distanceToBox=(function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new ci),t=new Array(12).fill().map(()=>new ci),n=new L,r=new L;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(r),this.closestPointToPoint(r,n),a.closestPointToPoint(n,r),c&&c.copy(n),l&&l.copy(r)),0;const d=o*o,u=a.min,f=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];r.copy(p).clamp(u,f);const y=p.distanceToSquared(r);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(r),y<d))return Math.sqrt(y)}let _=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const x=(m+1)%3,b=(m+2)%3,v=p<<x|y<<b,E=1<<m|p<<x|y<<b,T=h[v],A=h[E];e[_].set(T,A);const M=i[m],w=i[x],R=i[b],I=t[_],D=I.start,F=I.end;D[M]=u[M],D[w]=p?u[w]:f[w],D[R]=y?u[R]:f[w],F[M]=f[M],F[w]=p?u[w]:f[w],F[R]=y?u[R]:f[w],_++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){r.x=m?f.x:u.x,r.y=p?f.y:u.y,r.z=y?f.z:u.z,this.closestPointToPoint(r,n);const x=r.distanceToSquared(n);if(x<g&&(g=x,c&&c.copy(n),l&&l.copy(r),x<d))return Math.sqrt(x)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const x=t[y];Qu(p,x,n,r);const b=n.distanceToSquared(r);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(r),b<d))return Math.sqrt(b)}}return Math.sqrt(g)}})();class ef{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class MM extends ef{constructor(){super(()=>new Kn)}}const Pn=new MM;class SM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const _t=new SM;let Gi,es;const Gr=[],eo=new ef(()=>new nt);function EM(i,e,t,n,r,s){Gi=eo.getPrimitive(),es=eo.getPrimitive(),Gr.push(Gi,es),_t.setBuffer(i._roots[e]);const a=mu(0,i.geometry,t,n,r,s);_t.clearBuffer(),eo.releasePrimitive(Gi),eo.releasePrimitive(es),Gr.pop(),Gr.pop();const o=Gr.length;return o>0&&(es=Gr[o-1],Gi=Gr[o-2]),a}function mu(i,e,t,n,r=null,s=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=_t;let d=i*2;if(on(d,c)){const g=bn(i,l),_=An(d,c);return Tt(i,o,Gi),n(g,_,!1,a,s+i,Gi)}else{let R=function(D){const{uint16Array:F,uint32Array:O}=_t;let V=D*2;for(;!on(V,F);)D=Rn(D),V=D*2;return bn(D,O)},I=function(D){const{uint16Array:F,uint32Array:O}=_t;let V=D*2;for(;!on(V,F);)D=Cn(D,O),V=D*2;return bn(D,O)+An(V,F)};var f=R,h=I;const g=Rn(i),_=Cn(i,l);let m=g,p=_,y,x,b,v;if(r&&(b=Gi,v=es,Tt(m,o,b),Tt(p,o,v),y=r(b),x=r(v),x<y)){m=_,p=g;const D=y;y=x,x=D,b=v}b||(b=Gi,Tt(m,o,b));const E=on(m*2,c),T=t(b,E,y,a+1,s+m);let A;if(T===Vd){const D=R(m),O=I(m)-D;A=n(D,O,!0,a+1,s+m,b)}else A=T&&mu(m,e,t,n,r,s,a+1);if(A)return!0;v=es,Tt(p,o,v);const S=on(p*2,c),M=t(v,S,x,a+1,s+p);let w;if(M===Vd){const D=R(p),O=I(p)-D;w=n(D,O,!0,a+1,s+p,v)}else w=M&&mu(p,e,t,n,r,s,a+1);return!!w}}const Os=new L,Nc=new L;function TM(i,e,t={},n=0,r=1/0){const s=n*n,a=r*r;let o=1/0,c=null;if(i.shapecast({boundsTraverseOrder:d=>(Os.copy(e).clamp(d.min,d.max),Os.distanceToSquared(e)),intersectsBounds:(d,u,f)=>f<o&&f<a,intersectsTriangle:(d,u)=>{d.closestPointToPoint(e,Os);const f=e.distanceToSquared(Os);return f<o&&(Nc.copy(Os),o=f,c=u),f<s}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Nc):t.point=Nc.clone(),t.distance=l,t.faceIndex=c,t}const to=parseInt(_a)>=169,wM=parseInt(_a)<=161,cr=new L,lr=new L,ur=new L,no=new Ue,io=new Ue,ro=new Ue,Yd=new L,Kd=new L,Jd=new L,Bs=new L;function AM(i,e,t,n,r,s,a,o){let c;if(s===qt?c=i.intersectTriangle(n,t,e,!0,r):c=i.intersectTriangle(e,t,n,s!==an,r),c===null)return null;const l=i.origin.distanceTo(r);return l<a||l>o?null:{distance:l,point:r.clone()}}function RM(i,e,t,n,r,s,a,o,c,l,d){cr.fromBufferAttribute(e,s),lr.fromBufferAttribute(e,a),ur.fromBufferAttribute(e,o);const u=AM(i,cr,lr,ur,Bs,c,l,d);if(u){if(n){no.fromBufferAttribute(n,s),io.fromBufferAttribute(n,a),ro.fromBufferAttribute(n,o),u.uv=new Ue;const h=Lt.getInterpolation(Bs,cr,lr,ur,no,io,ro,u.uv);to||(u.uv=h)}if(r){no.fromBufferAttribute(r,s),io.fromBufferAttribute(r,a),ro.fromBufferAttribute(r,o),u.uv1=new Ue;const h=Lt.getInterpolation(Bs,cr,lr,ur,no,io,ro,u.uv1);to||(u.uv1=h),wM&&(u.uv2=u.uv1)}if(t){Yd.fromBufferAttribute(t,s),Kd.fromBufferAttribute(t,a),Jd.fromBufferAttribute(t,o),u.normal=new L;const h=Lt.getInterpolation(Bs,cr,lr,ur,Yd,Kd,Jd,u.normal);u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1),to||(u.normal=h)}const f={a:s,b:a,c:o,normal:new L,materialIndex:0};if(Lt.getNormal(cr,lr,ur,f.normal),u.face=f,u.faceIndex=s,to){const h=new L;Lt.getBarycoord(Bs,cr,lr,ur,h),u.barycoord=h}}return u}function ko(i,e,t,n,r,s,a){const o=n*3;let c=o+0,l=o+1,d=o+2;const u=i.index;i.index&&(c=u.getX(c),l=u.getX(l),d=u.getX(d));const{position:f,normal:h,uv:g,uv1:_}=i.attributes,m=RM(t,f,h,g,_,c,l,d,e,s,a);return m?(m.faceIndex=n,r&&r.push(m),m):null}function Ct(i,e,t,n){const r=i.a,s=i.b,a=i.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),r.x=n.getX(o),r.y=n.getY(o),r.z=n.getZ(o),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function CM(i,e,t,n,r,s,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let d=n,u=n+r;d<u;d++)ko(c,e,t,d,s,a,o)}function PM(i,e,t,n,r,s,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,d=null;for(let u=n,f=n+r;u<f;u++){let h;h=ko(o,e,t,u,null,s,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function LM(i,e,t,n,r,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=i,u=e+i;d<u;d++){let f;if(f=d,Ct(a,f*3,c,l),a.needsUpdate=!0,n(a,f,r,s))return!0}return!1}function IM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,a,o,c,l=0;const d=i._roots;for(let f=0,h=d.length;f<h;f++)s=d[f],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(f,h,g=!1){const _=f*2;if(o[_+15]===Bo){const p=a[f+6],y=o[_+14];let x=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,A=-1/0;for(let S=3*p,M=3*(p+y);S<M;S++){let w=n[S];const R=r.getX(w),I=r.getY(w),D=r.getZ(w);R<x&&(x=R),R>E&&(E=R),I<b&&(b=I),I>T&&(T=I),D<v&&(v=D),D>A&&(A=D)}return c[f+0]!==x||c[f+1]!==b||c[f+2]!==v||c[f+3]!==E||c[f+4]!==T||c[f+5]!==A?(c[f+0]=x,c[f+1]=b,c[f+2]=v,c[f+3]=E,c[f+4]=T,c[f+5]=A,!0):!1}else{const p=f+8,y=a[f+6],x=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(x),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const A=v||E,S=v||T;let M=!1;A&&(M=u(p,h,v));let w=!1;S&&(w=u(y,h,v));const R=M||w;if(R)for(let I=0;I<3;I++){const D=p+I,F=y+I,O=c[D],V=c[D+3],k=c[F],J=c[F+3];c[f+I]=O<k?O:k,c[f+I+3]=V>J?V:J}return R}}}function Yi(i,e,t,n,r){let s,a,o,c,l,d;const u=1/t.direction.x,f=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,_=t.origin.y,m=t.origin.z;let p=e[i],y=e[i+3],x=e[i+1],b=e[i+3+1],v=e[i+2],E=e[i+3+2];return u>=0?(s=(p-g)*u,a=(y-g)*u):(s=(y-g)*u,a=(p-g)*u),f>=0?(o=(x-_)*f,c=(b-_)*f):(o=(b-_)*f,c=(x-_)*f),s>c||o>a||((o>s||isNaN(s))&&(s=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(v-m)*h,d=(E-m)*h):(l=(E-m)*h,d=(v-m)*h),s>d||l>a)?!1:((l>s||s!==s)&&(s=l),(d<a||a!==a)&&(a=d),s<=r&&a>=n)}function DM(i,e,t,n,r,s,a,o){const{geometry:c,_indirectBuffer:l}=i;for(let d=n,u=n+r;d<u;d++){let f=l?l[d]:d;ko(c,e,t,f,s,a,o)}}function UM(i,e,t,n,r,s,a){const{geometry:o,_indirectBuffer:c}=i;let l=1/0,d=null;for(let u=n,f=n+r;u<f;u++){let h;h=ko(o,e,t,c?c[u]:u,null,s,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function NM(i,e,t,n,r,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=i,u=e+i;d<u;d++){let f;if(f=t.resolveTriangleIndex(d),Ct(a,f*3,c,l),a.needsUpdate=!0,n(a,f,r,s))return!0}return!1}function FM(i,e,t,n,r,s,a){_t.setBuffer(i._roots[e]),gu(0,i,t,n,r,s,a),_t.clearBuffer()}function gu(i,e,t,n,r,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,d=i*2;if(on(d,c)){const f=bn(i,l),h=An(d,c);CM(e,t,n,f,h,r,s,a)}else{const f=Rn(i);Yi(f,o,n,s,a)&&gu(f,e,t,n,r,s,a);const h=Cn(i,l);Yi(h,o,n,s,a)&&gu(h,e,t,n,r,s,a)}}const OM=["x","y","z"];function BM(i,e,t,n,r,s){_t.setBuffer(i._roots[e]);const a=bu(0,i,t,n,r,s);return _t.clearBuffer(),a}function bu(i,e,t,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=i*2;if(on(l,o)){const u=bn(i,c),f=An(l,o);return PM(e,t,n,u,f,r,s)}else{const u=kp(i,c),f=OM[u],g=n.direction[f]>=0;let _,m;g?(_=Rn(i),m=Cn(i,c)):(_=Cn(i,c),m=Rn(i));const y=Yi(_,a,n,r,s)?bu(_,e,t,n,r,s):null;if(y){const v=y.point[f];if(g?v<=a[m+u]:v>=a[m+u+3])return y}const b=Yi(m,a,n,r,s)?bu(m,e,t,n,r,s):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const so=new nt,Wr=new Kn,qr=new Kn,ks=new Ne,$d=new en,ao=new en;function kM(i,e,t,n){_t.setBuffer(i._roots[e]);const r=_u(0,i,t,n);return _t.clearBuffer(),r}function _u(i,e,t,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),$d.set(t.boundingBox.min,t.boundingBox.max,n),r=$d),on(c,a)){const d=e.geometry,u=d.index,f=d.attributes.position,h=t.index,g=t.attributes.position,_=bn(i,o),m=An(c,a);if(ks.copy(n).invert(),t.boundsTree)return Tt(i,s,ao),ao.matrix.copy(ks),ao.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>ao.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_*3,b=(m+_)*3;x<b;x+=3)if(Ct(qr,x,u,f),qr.needsUpdate=!0,y.intersectsTriangle(qr))return!0;return!1}});{const p=Zi(t);for(let y=_*3,x=(m+_)*3;y<x;y+=3){Ct(Wr,y,u,f),Wr.a.applyMatrix4(ks),Wr.b.applyMatrix4(ks),Wr.c.applyMatrix4(ks),Wr.needsUpdate=!0;for(let b=0,v=p*3;b<v;b+=3)if(Ct(qr,b,h,g),qr.needsUpdate=!0,Wr.intersectsTriangle(qr))return!0}}}else{const d=i+8,u=o[i+6];return Tt(d,s,so),!!(r.intersectsBox(so)&&_u(d,e,t,n,r)||(Tt(u,s,so),r.intersectsBox(so)&&_u(u,e,t,n,r)))}}const oo=new Ne,Fc=new en,zs=new en,zM=new L,HM=new L,VM=new L,GM=new L;function WM(i,e,t,n={},r={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Fc.set(e.boundingBox.min,e.boundingBox.max,t),Fc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,u=e.index,f=Pn.getPrimitive(),h=Pn.getPrimitive();let g=zM,_=HM,m=null,p=null;r&&(m=VM,p=GM);let y=1/0,x=null,b=null;return oo.copy(t).invert(),zs.matrix.copy(oo),i.shapecast({boundsTraverseOrder:v=>Fc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(zs.min.copy(v.min),zs.max.copy(v.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>zs.distanceToBox(A),intersectsBounds:(A,S,M)=>M<y&&M<a,intersectsRange:(A,S)=>{for(let M=A,w=A+S;M<w;M++){Ct(h,3*M,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let R=v,I=v+E;R<I;R++){Ct(f,3*R,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(h,g,m);if(D<y&&(_.copy(g),p&&p.copy(m),y=D,x=R,b=M),D<s)return!0}}}});{const T=Zi(e);for(let A=0,S=T;A<S;A++){Ct(h,3*A,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,w=v+E;M<w;M++){Ct(f,3*M,l,c),f.needsUpdate=!0;const R=f.distanceToTriangle(h,g,m);if(R<y&&(_.copy(g),p&&p.copy(m),y=R,x=M,b=A),R<s)return!0}}}}}),Pn.releasePrimitive(f),Pn.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(oo),_.applyMatrix4(oo),r.distance=_.sub(r.point).length(),r.faceIndex=b),n)}function qM(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,a,o,c,l=0;const d=i._roots;for(let f=0,h=d.length;f<h;f++)s=d[f],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),u(0,l),l+=s.byteLength;function u(f,h,g=!1){const _=f*2;if(o[_+15]===Bo){const p=a[f+6],y=o[_+14];let x=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,A=-1/0;for(let S=p,M=p+y;S<M;S++){const w=3*i.resolveTriangleIndex(S);for(let R=0;R<3;R++){let I=w+R;I=n?n[I]:I;const D=r.getX(I),F=r.getY(I),O=r.getZ(I);D<x&&(x=D),D>E&&(E=D),F<b&&(b=F),F>T&&(T=F),O<v&&(v=O),O>A&&(A=O)}}return c[f+0]!==x||c[f+1]!==b||c[f+2]!==v||c[f+3]!==E||c[f+4]!==T||c[f+5]!==A?(c[f+0]=x,c[f+1]=b,c[f+2]=v,c[f+3]=E,c[f+4]=T,c[f+5]=A,!0):!1}else{const p=f+8,y=a[f+6],x=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(x),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const A=v||E,S=v||T;let M=!1;A&&(M=u(p,h,v));let w=!1;S&&(w=u(y,h,v));const R=M||w;if(R)for(let I=0;I<3;I++){const D=p+I,F=y+I,O=c[D],V=c[D+3],k=c[F],J=c[F+3];c[f+I]=O<k?O:k,c[f+I+3]=V>J?V:J}return R}}}function jM(i,e,t,n,r,s,a){_t.setBuffer(i._roots[e]),xu(0,i,t,n,r,s,a),_t.clearBuffer()}function xu(i,e,t,n,r,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,d=i*2;if(on(d,c)){const f=bn(i,l),h=An(d,c);DM(e,t,n,f,h,r,s,a)}else{const f=Rn(i);Yi(f,o,n,s,a)&&xu(f,e,t,n,r,s,a);const h=Cn(i,l);Yi(h,o,n,s,a)&&xu(h,e,t,n,r,s,a)}}const XM=["x","y","z"];function YM(i,e,t,n,r,s){_t.setBuffer(i._roots[e]);const a=vu(0,i,t,n,r,s);return _t.clearBuffer(),a}function vu(i,e,t,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=i*2;if(on(l,o)){const u=bn(i,c),f=An(l,o);return UM(e,t,n,u,f,r,s)}else{const u=kp(i,c),f=XM[u],g=n.direction[f]>=0;let _,m;g?(_=Rn(i),m=Cn(i,c)):(_=Cn(i,c),m=Rn(i));const y=Yi(_,a,n,r,s)?vu(_,e,t,n,r,s):null;if(y){const v=y.point[f];if(g?v<=a[m+u]:v>=a[m+u+3])return y}const b=Yi(m,a,n,r,s)?vu(m,e,t,n,r,s):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const co=new nt,jr=new Kn,Xr=new Kn,Hs=new Ne,Zd=new en,lo=new en;function KM(i,e,t,n){_t.setBuffer(i._roots[e]);const r=yu(0,i,t,n);return _t.clearBuffer(),r}function yu(i,e,t,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),Zd.set(t.boundingBox.min,t.boundingBox.max,n),r=Zd),on(c,a)){const d=e.geometry,u=d.index,f=d.attributes.position,h=t.index,g=t.attributes.position,_=bn(i,o),m=An(c,a);if(Hs.copy(n).invert(),t.boundsTree)return Tt(i,s,lo),lo.matrix.copy(Hs),lo.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>lo.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let x=_,b=m+_;x<b;x++)if(Ct(Xr,3*e.resolveTriangleIndex(x),u,f),Xr.needsUpdate=!0,y.intersectsTriangle(Xr))return!0;return!1}});{const p=Zi(t);for(let y=_,x=m+_;y<x;y++){const b=e.resolveTriangleIndex(y);Ct(jr,3*b,u,f),jr.a.applyMatrix4(Hs),jr.b.applyMatrix4(Hs),jr.c.applyMatrix4(Hs),jr.needsUpdate=!0;for(let v=0,E=p*3;v<E;v+=3)if(Ct(Xr,v,h,g),Xr.needsUpdate=!0,jr.intersectsTriangle(Xr))return!0}}}else{const d=i+8,u=o[i+6];return Tt(d,s,co),!!(r.intersectsBox(co)&&yu(d,e,t,n,r)||(Tt(u,s,co),r.intersectsBox(co)&&yu(u,e,t,n,r)))}}const uo=new Ne,Oc=new en,Vs=new en,JM=new L,$M=new L,ZM=new L,QM=new L;function eS(i,e,t,n={},r={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Oc.set(e.boundingBox.min,e.boundingBox.max,t),Oc.needsUpdate=!0;const o=i.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,u=e.index,f=Pn.getPrimitive(),h=Pn.getPrimitive();let g=JM,_=$M,m=null,p=null;r&&(m=ZM,p=QM);let y=1/0,x=null,b=null;return uo.copy(t).invert(),Vs.matrix.copy(uo),i.shapecast({boundsTraverseOrder:v=>Oc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(Vs.min.copy(v.min),Vs.max.copy(v.max),Vs.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:A=>Vs.distanceToBox(A),intersectsBounds:(A,S,M)=>M<y&&M<a,intersectsRange:(A,S)=>{for(let M=A,w=A+S;M<w;M++){const R=T.resolveTriangleIndex(M);Ct(h,3*R,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let I=v,D=v+E;I<D;I++){const F=i.resolveTriangleIndex(I);Ct(f,3*F,l,c),f.needsUpdate=!0;const O=f.distanceToTriangle(h,g,m);if(O<y&&(_.copy(g),p&&p.copy(m),y=O,x=I,b=M),O<s)return!0}}}})}else{const T=Zi(e);for(let A=0,S=T;A<S;A++){Ct(h,3*A,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,w=v+E;M<w;M++){const R=i.resolveTriangleIndex(M);Ct(f,3*R,l,c),f.needsUpdate=!0;const I=f.distanceToTriangle(h,g,m);if(I<y&&(_.copy(g),p&&p.copy(m),y=I,x=M,b=A),I<s)return!0}}}}}),Pn.releasePrimitive(f),Pn.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=x,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(uo),_.applyMatrix4(uo),r.distance=_.sub(r.point).length(),r.faceIndex=b),n)}function tS(){return typeof SharedArrayBuffer<"u"}const ia=new _t.constructor,Lo=new _t.constructor,ki=new ef(()=>new nt),Yr=new nt,Kr=new nt,Bc=new nt,kc=new nt;let zc=!1;function nS(i,e,t,n){if(zc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");zc=!0;const r=i._roots,s=e._roots;let a,o=0,c=0;const l=new Ne().copy(t).invert();for(let d=0,u=r.length;d<u;d++){ia.setBuffer(r[d]),c=0;const f=ki.getPrimitive();Tt(0,ia.float32Array,f),f.applyMatrix4(l);for(let h=0,g=s.length;h<g&&(Lo.setBuffer(s[h]),a=zn(0,0,t,l,n,o,c,0,0,f),Lo.clearBuffer(),c+=s[h].length,!a);h++);if(ki.releasePrimitive(f),ia.clearBuffer(),o+=r[d].length,a)break}return zc=!1,a}function zn(i,e,t,n,r,s=0,a=0,o=0,c=0,l=null,d=!1){let u,f;d?(u=Lo,f=ia):(u=ia,f=Lo);const h=u.float32Array,g=u.uint32Array,_=u.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,x=i*2,b=e*2,v=on(x,_),E=on(b,y);let T=!1;if(E&&v)d?T=r(bn(e,p),An(e*2,y),bn(i,g),An(i*2,_),c,a+e,o,s+i):T=r(bn(i,g),An(i*2,_),bn(e,p),An(e*2,y),o,s+i,c,a+e);else if(E){const A=ki.getPrimitive();Tt(e,m,A),A.applyMatrix4(t);const S=Rn(i),M=Cn(i,g);Tt(S,h,Yr),Tt(M,h,Kr);const w=A.intersectsBox(Yr),R=A.intersectsBox(Kr);T=w&&zn(e,S,n,t,r,a,s,c,o+1,A,!d)||R&&zn(e,M,n,t,r,a,s,c,o+1,A,!d),ki.releasePrimitive(A)}else{const A=Rn(e),S=Cn(e,p);Tt(A,m,Bc),Tt(S,m,kc);const M=l.intersectsBox(Bc),w=l.intersectsBox(kc);if(M&&w)T=zn(i,A,t,n,r,s,a,o,c+1,l,d)||zn(i,S,t,n,r,s,a,o,c+1,l,d);else if(M)if(v)T=zn(i,A,t,n,r,s,a,o,c+1,l,d);else{const R=ki.getPrimitive();R.copy(Bc).applyMatrix4(t);const I=Rn(i),D=Cn(i,g);Tt(I,h,Yr),Tt(D,h,Kr);const F=R.intersectsBox(Yr),O=R.intersectsBox(Kr);T=F&&zn(A,I,n,t,r,a,s,c,o+1,R,!d)||O&&zn(A,D,n,t,r,a,s,c,o+1,R,!d),ki.releasePrimitive(R)}else if(w)if(v)T=zn(i,S,t,n,r,s,a,o,c+1,l,d);else{const R=ki.getPrimitive();R.copy(kc).applyMatrix4(t);const I=Rn(i),D=Cn(i,g);Tt(I,h,Yr),Tt(D,h,Kr);const F=R.intersectsBox(Yr),O=R.intersectsBox(Kr);T=F&&zn(S,I,n,t,r,a,s,c,o+1,R,!d)||O&&zn(S,D,n,t,r,a,s,c,o+1,R,!d),ki.releasePrimitive(R)}}return T}const fo=new en,Qd=new nt,iS={strategy:Fp,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class tf{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,r=e._roots,s=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:r.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:r,index:a?a.array:null,indirectBuffer:s},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:a}=e,o=new tf(t,{...n,[Ic]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new kt(e.index,1,!1);t.setIndex(l)}else c.array!==r&&(c.array.set(r),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...iS,[Ic]:!1},t),t.useSharedArrayBuffer&&!tS())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Ic]||(_M(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new nt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?qM:IM)(this,e)}traverse(e,t=0){const n=this._roots[t],r=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,d=s[l+15]===Bo;if(d){const u=r[o+6],f=s[l+14];e(c,d,new Float32Array(n,o*4,6),u,f)}else{const u=o+na/4,f=r[o+6],h=r[o+7];e(c,d,new Float32Array(n,o*4,6),h)||(a(u,c+1),a(f,c+1))}}}raycast(e,t=Dn,n=0,r=1/0){const s=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),d=a.groups,u=c?t.side:t,f=this.indirect?jM:FM;for(let h=0,g=s.length;h<g;h++){const _=l?t[d[h].materialIndex].side:u,m=o.length;if(f(this,h,_,e,o,n,r),l){const p=d[h].materialIndex;for(let y=m,x=o.length;y<x;y++)o[y].face.materialIndex=p}}return o}raycastFirst(e,t=Dn,n=0,r=1/0){const s=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const d=a.groups,u=o?t.side:t,f=this.indirect?YM:BM;for(let h=0,g=s.length;h<g;h++){const _=c?t[d[h].materialIndex].side:u,m=f(this,h,_,e,n,r);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=d[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const r=this._roots,s=this.indirect?KM:kM;for(let a=0,o=r.length;a<o&&(n=s(this,a,e,t),!n);a++);return n}shapecast(e){const t=Pn.getPrimitive(),n=this.indirect?NM:LM;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const u=a;a=(f,h,g,_,m)=>u(f,h,g,_,m)?!0:n(f,h,this,o,g,_,t)}else a||(o?a=(u,f,h,g)=>n(u,f,this,o,h,g,t):a=(u,f,h)=>h);let c=!1,l=0;const d=this._roots;for(let u=0,f=d.length;u<f;u++){const h=d[u];if(c=EM(this,u,s,a,r,l),c)break;l+=h.byteLength}return Pn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const a=Pn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const _=this.resolveTriangleIndex(g);Ct(a,_*3,o,c)}:g=>{Ct(a,g*3,o,c)},d=Pn.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,h=e.indirect?g=>{const _=e.resolveTriangleIndex(g);Ct(d,_*3,u,f)}:g=>{Ct(d,g*3,u,f)};if(s){const g=(_,m,p,y,x,b,v,E)=>{for(let T=p,A=p+y;T<A;T++){h(T),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let S=_,M=_+m;S<M;S++)if(l(S),a.needsUpdate=!0,s(a,d,S,T,x,b,v,E))return!0}return!1};if(r){const _=r;r=function(m,p,y,x,b,v,E,T){return _(m,p,y,x,b,v,E,T)?!0:g(m,p,y,x,b,v,E,T)}}else r=g}return nS(this,e,t,r)}intersectsBox(e,t){return fo.set(e.min,e.max,t),fo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>fo.intersectsBox(n),intersectsTriangle:n=>fo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},s=0,a=1/0){return(this.indirect?eS:WM)(this,e,t,n,r,s,a)}closestPointToPoint(e,t={},n=0,r=1/0){return TM(this,e,t,n,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Tt(0,new Float32Array(n),Qd),e.union(Qd)}),e}}const si=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class rS{constructor(e){const n=e.filter(r=>r.id!=="COL_floor").map(r=>new Ji(...r.size).applyMatrix4(new Ne().makeRotationY(r.rotationY||0)).translate(...r.center));this.geometry=Dp(n),n.forEach(r=>r.dispose()),this.bvh=new tf(this.geometry),this.radius=.25,this.velocity=new L,this.segment=new ci,this.bounds=new nt,this.onTriangle=new L,this.onCapsule=new L,this.normal=new L,this.contacts=0,this.speed=si.speed,this.correction=new L,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:r=>r.intersectsBox(this.bounds),intersectsTriangle:r=>{if(r.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const s=r.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(s>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&r.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-s+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const r=Math.max(1,Math.ceil(n/.008333333333333333)),s=n/r;for(let a=0;a<r;a++)this.step(e,t,s)}}const Mu=.36;function eh(i,e){const t=i[0]-e.center[0],n=i[1]-e.center[2],r=e.rotationY||0,s=Math.cos(r),a=Math.sin(r);return[s*t-a*n,a*t+s*n]}function th(i,e,t,n=Mu){const r=eh(i,t),s=eh(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const d=s[l]-r[l];if(Math.abs(d)<1e-10){if(Math.abs(r[l])>=a[l])return!1;continue}let u=(-a[l]-r[l])/d,f=(a[l]-r[l])/d;if(u>f&&([u,f]=[f,u]),o=Math.max(o,u),c=Math.min(c,f),o>=c)return!1}return c>0&&o<1}function sS(i,e,t=.27){if(e.shape==="axial_gallery"){const[n,r]=i,s=n>=-8+t&&n<=8-t&&r>=-11&&r<=11-t,a=n>=-2.6+t&&n<=2.6-t&&r>=-22+t&&r<=-11;return s||a}return Math.abs(i[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(i[0])+.5*Math.abs(i[1])<=e.apothem-t}function Vp(i,e,t){const n=[i[0],i[2]],r=[e[0],e[2]],s=t.colliders.filter(f=>f.id!=="COL_floor"),a=(f,h)=>!s.some(g=>th(f,h,g,.27));if(a(n,r))return[[...e]];const o=[n,r];for(const f of s){const h=Math.cos(f.rotationY||0),g=Math.sin(f.rotationY||0);for(const _ of[-1,1])for(const m of[-1,1]){const p=_*(f.size[0]/2+Mu),y=m*(f.size[2]/2+Mu),x=[f.center[0]+h*p+g*y,f.center[2]-g*p+h*y];sS(x,t.layout)&&!s.some(b=>th(x,x,b,.27))&&o.push(x)}}const c=o.map(()=>1/0),l=o.map(()=>-1),d=new Set;for(c[0]=0;d.size<o.length;){let f=-1;for(let h=0;h<o.length;h++)!d.has(h)&&(f<0||c[h]<c[f])&&(f=h);if(f<0||!Number.isFinite(c[f]))return[];if(f===1)break;d.add(f);for(let h=0;h<o.length;h++){if(d.has(h)||!a(o[f],o[h]))continue;const g=c[f]+Math.hypot(o[f][0]-o[h][0],o[f][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=f)}}const u=[];for(let f=1;f!==0;f=l[f]){if(f<0)return[];u.unshift([o[f][0],e[1],o[f][1]])}return u}class aS{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(r=>r.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const r of this.parts)r.mesh.position.x=r.closedX+r.sign*r.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class br extends lt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;const n=this,r=t.color!==void 0?new Be(t.color):new Be(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||br.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,d=new ti,u=new L,f=new L,h=new L,g=new Ne,_=new L(0,0,-1),m=new tt,p=new L,y=new L,x=new tt,b=new Ne,v=this.camera,E=new Xi(s,a,{samples:l,type:xs}),T=new xn({name:c.name!==void 0?c.name:"unspecified",uniforms:up.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=r,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(A,S,M){if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,h),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),g.extractRotation(M.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(h),y.subVectors(f,_),y.reflect(u).negate(),y.add(f),v.position.copy(p),v.up.set(0,1,0),v.up.applyMatrix4(g),v.up.reflect(u),v.lookAt(y),v.far=M.far,v.updateMatrixWorld(),v.projectionMatrix.copy(M.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(v.projectionMatrix),b.multiply(v.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(u,f),d.applyMatrix4(v.matrixWorldInverse),m.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const R=v.projectionMatrix;x.x=(Math.sign(m.x)+R.elements[8])/R.elements[0],x.y=(Math.sign(m.y)+R.elements[9])/R.elements[5],x.z=-1,x.w=(1+R.elements[10])/R.elements[14],m.multiplyScalar(2/m.dot(x)),R.elements[2]=m.x,R.elements[6]=m.y,R.elements[10]=m.z+1-o,R.elements[14]=m.w,n.visible=!1;const I=A.getRenderTarget(),D=A.xr.enabled,F=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(E),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(S,v),A.xr.enabled=D,A.shadowMap.autoUpdate=F,A.setRenderTarget(I);const O=M.viewport;O!==void 0&&A.state.viewport(O),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}br.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function oS(i,e,t){const n={...br.ReflectorShader,vertexShader:br.ReflectorShader.vertexShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vUv = textureMatrix * vec4( position, 1.0 );",`vUv = textureMatrix * vec4( position, 1.0 );
vFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;`),fragmentShader:br.ReflectorShader.fragmentShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vec4 base = texture2DProj( tDiffuse, vUv );",`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},r=new br(new $i(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});r.name="R11 polished marble floor reflection",r.rotation.x=-Math.PI/2,r.position.set(0,.016,-5.5),r.material.transparent=!0,r.material.depthWrite=!1,r.renderOrder=1,i.add(r);const s=[],a=[],o={position:new L(1/0,1/0,1/0),quaternion:new vn,time:-1/0},c=r.onBeforeRender;r.onBeforeRender=function(d,u,f,...h){const g=performance.now();if(!(o.position.distanceToSquared(f.position)>1e-10||1-Math.abs(o.quaternion.dot(f.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(f.position),o.quaternion.copy(f.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,d,u,f,...h)}finally{a.forEach((p,y)=>p.visible=m[y])}},t.traverse(d=>{if(!d.isMesh)return;const u=Array.isArray(d.material)?d.material:[d.material];u.some(f=>f.name.toLowerCase().includes("glass"))&&a.push(d);for(const f of u){if(f.name.includes("hologram data curtain")){const h=new xn({uniforms:{pattern:{value:f.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:an,blending:as,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});d.material=h,d.renderOrder=3,s.push(h)}f.name.includes("cyan edge light")&&(f.color.set(358655),f.emissive.set(358655),f.emissiveIntensity=2)}});let l=0;return{reflector:r,update(d,u){if(!u){l+=d*.026;for(const f of s)f.uniforms.phase.value=l}}}}function cS(i,e,t){return i==="walk"&&(e??!t)}function lS(i){let e=null;return()=>e||(e=Promise.resolve().then(i).finally(()=>{e=null}),e)}function uS(i,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(i.rotation.order="YXZ",i.rotation.y-=e*n,i.rotation.x=Un.clamp(i.rotation.x-t*n,-1.15,1.15),i.rotation.z=0,!0)}function fS(i,e){if(!Number.isFinite(i)||!Number.isFinite(e)||e<=0)return 0;const t=Un.clamp(i/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function dS(i,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return i?i.id!==void 0&&i.id!==e.pointerId?null:{point:t,dx:t.x-i.x,dy:t.y-i.y}:{point:t,dx:0,dy:0}}function hS(i,e,t,n=!1){const r=Number.isFinite(e.timeStamp)?e.timeStamp:t,s={x:e.clientX,y:e.clientY,stamp:r},a={point:s,dx:0,dy:0};if((i==null?void 0:i.stamp)>r)return{...a,point:i};if(t-r>150)return s.recovery="fresh",a;if(!i)return a;const o=s.x-i.x,c=s.y-i.y;if(i.recovery){const l=Number.isFinite(e.movementX)&&Number.isFinite(e.movementY),d=Math.max(32,.5*Math.max(Math.hypot(o,c),Math.hypot(e.movementX,e.movementY))),u=!n&&l&&Math.hypot(o-e.movementX,c-e.movementY)>d;if(u&&(s.recovery="align"),i.recovery==="fresh"||u)return a}return{point:s,dx:n?e.movementX:o,dy:n?e.movementY:c}}function Gp(i,e){(e==null?void 0:e.id)!==void 0&&i.hasPointerCapture(e.id)&&i.releasePointerCapture(e.id)}function pS(i,e){return(i==null?void 0:i.id)!==void 0&&i.id===e.pointerId}function mS(i=7){let e=null,t=!1;return{down(n){n.isPrimary!==!1&&(e={id:n.pointerId,x:n.clientX,y:n.clientY,active:!0},t=!1)},move(n){!(e!=null&&e.active)||e.id!==n.pointerId||Math.hypot(n.clientX-e.x,n.clientY-e.y)>i&&(t=!0)},end(n,r=!1){!(e!=null&&e.active)||e.id!==n.pointerId||(e.active=!1,r&&(t=!0))},click(n=!1){const r=t&&!n;return e=null,t=!1,r}}}function Wp(i){const e=new L(...i.position);let t,n;if(i.side==="front")t=e.clone().add(new L(0,0,i.distance||3.15)),n=new L(1,0,0);else{const c=i.side==="left"?-1:1;t=e.clone().add(new L(-c*3.15,0,0)),n=new L(0,0,c)}t.y=1.65;const r=i.lateral||1.18,s=t.clone().addScaledVector(n,-r),a=t.clone().addScaledVector(n,r),o=e.clone();return o.y=i.targetHeight??.95,{left:s,right:a,front:t,target:o}}class gS{constructor(e,{reduced:t=!1}={}){this.views=Wp(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const r=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(r,this.elapsed+Math.max(0,t));const s=Un.smoothstep(this.elapsed/r,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],s),e.lookAt(this.views.target),this.elapsed>=r&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class bS{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const r=this.spec;if(this.phase==="opening")e.position.fromArray(r.outside),e.lookAt(new L(...r.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(r.walkDuration,this.elapsed+Math.max(0,n));const s=Un.smoothstep(this.elapsed/r.walkDuration,0,1);e.position.lerpVectors(new L(...r.outside),new L(...r.inside),s),e.lookAt(new L(...r.lookAt)),this.elapsed>=r.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(r.inside),e.lookAt(new L(...r.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var qp=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var r=WebAssembly.validate(t)?o(e):o(i),s,a=WebAssembly.instantiate(r,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),x=0;x<p.length;++x){var b=p.charCodeAt(x);y[x]=b>96?b-97:b>64?b-39:b+4}for(var v=0,x=0;x<p.length;++x)y[v++]=y[x]<60?n[y[x]]:(y[x]-60)*64+y[++x];return y.buffer.slice(0,v)}function c(p,y,x,b,v,E,T){var A=p.exports.sbrk,S=b+3&-4,M=A(S*v),w=A(E.length),R=new Uint8Array(p.exports.memory.buffer);R.set(E,w);var I=y(M,b,v,w,E.length);if(I==0&&T&&T(M,S,v),x.set(R.subarray(M,M+b*v)),A(M-A(0)),I!=0)throw new Error("Malformed buffer data: "+I)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function h(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(x){var b=x.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(r)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),x=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(x),v=u.length;v<p;++v)u[v]=h(b);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function _(p,y,x,b,v){for(var E=u[0],T=1;T<u.length;++T)u[T].pending<E.pending&&(E=u[T]);return new Promise(function(A,S){var M=new Uint8Array(x),w=++f;E.pending+=p,E.requests[w]={resolve:A,reject:S},E.object.postMessage({id:w,count:p,size:y,source:M,mode:b,filter:v},[M.buffer])})}function m(p){var y=p.data;if(!y.id)return self.close();self.ready.then(function(x){try{var b=new Uint8Array(y.count*y.size);c(x,x.exports[y.mode],b,y.count,y.size,y.source,x.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,x,b,v){c(s,s.exports.meshopt_decodeVertexBuffer,p,y,x,b,s.exports[l[v]])},decodeIndexBuffer:function(p,y,x,b){c(s,s.exports.meshopt_decodeIndexBuffer,p,y,x,b)},decodeIndexSequence:function(p,y,x,b){c(s,s.exports.meshopt_decodeIndexSequence,p,y,x,b)},decodeGltfBuffer:function(p,y,x,b,v,E){c(s,s.exports[d[v]],p,y,x,b,s.exports[l[E]])},decodeGltfBufferAsync:function(p,y,x,b,v){return u.length>0?_(p,y,x,d[b],l[v]):a.then(function(){var E=new Uint8Array(p*y);return c(s,s.exports[d[b]],E,p,y,x,s.exports[l[v]]),E})}}})();const fr=.79,nn="/artifacts/",ss=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,fr,6.6],modelDesktop:`${nn}phoenix-web-desktop.glb`,modelMobile:`${nn}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,fr,0],modelDesktop:`${nn}bronze-head-web-desktop.glb`,modelMobile:`${nn}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,fr,-6.6],modelDesktop:`${nn}cloud-mirror-web-desktop.glb`,modelMobile:`${nn}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,fr,6.6],modelDesktop:`${nn}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${nn}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,fr,0],modelDesktop:`${nn}longquan-figure-web-desktop.glb`,modelMobile:`${nn}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,fr,-6.6],modelDesktop:`${nn}pipa-figurine-web-desktop.glb`,modelMobile:`${nn}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,fr,-20.7],modelDesktop:`${nn}speechless-buddha-web-desktop.glb`,modelMobile:`${nn}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function _S(i,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);i.traverse(r=>{if(r.isMesh){r.userData.artifactId=e.artifactId;for(const s of Array.isArray(r.material)?r.material:[r.material]){s.roughness=e.roughness,s.metalness=e.metalness,s.envMapIntensity=.42;for(const a of Object.values(s))a!=null&&a.isTexture&&(a.magFilter=Jt,a.minFilter=Vn,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function xS(i,e){const t=new gn;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new gn;n.rotation.y=e.rotationY,n.add(i),t.add(n),t.updateMatrixWorld(!0);const r=new nt().setFromObject(n,!0),s=r.getSize(new L);if(r.isEmpty()||s.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/s.y,e.maxWidth/Math.max(s.x,s.z)),o=r.getCenter(new L);n.scale.setScalar(a),n.position.set(-o.x*a,-r.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new nt().setFromObject(t,!0);let l=0,d=0;return t.traverse(u=>{var f;u.isMesh&&(u.userData.artifactId=e.artifactId,d++,l+=(((f=u.geometry.index)==null?void 0:f.count)??u.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new L),size:c.getSize(new L),triangleCount:l,meshCount:d}}async function vS({scene:i,renderer:e,manifest:t,onArtifact:n,mobile:r=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:s=new Zu().setMeshoptDecoder(qp)}){const o=[],c=[];return await Promise.all(ss.map(async l=>{const d=r?l.modelMobile:l.modelDesktop;let u;try{const f=await s.loadAsync(d);_S(f.scene,l,e),u={...xS(f.scene,l),modelUrl:d},i.add(u.object),o.push(u)}catch(f){c.push({artifactId:l.artifactId,name:l.name,modelUrl:d,message:f.message});return}n==null||n(u)})),o.sort((l,d)=>ss.indexOf(l.assignment)-ss.indexOf(d.assignment)),{records:o,failures:c}}function yS(i){var r,s;const e=(s=(r=i==null?void 0:i.object)==null?void 0:r.children[0])==null?void 0:s.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}function MS(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Jr={},Hc,nh;function SS(){return nh||(nh=1,Hc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),Hc}var Vc={},Ni={},ih;function yr(){if(ih)return Ni;ih=1;let i;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ni.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Ni.getSymbolTotalCodewords=function(n){return e[n]},Ni.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Ni.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');i=n},Ni.isKanjiModeEnabled=function(){return typeof i<"u"},Ni.toSJIS=function(n){return i(n)},Ni}var Gc={},rh;function nf(){return rh||(rh=1,(function(i){i.L={bit:1},i.M={bit:0},i.Q={bit:3},i.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return i.L;case"m":case"medium":return i.M;case"q":case"quartile":return i.Q;case"h":case"high":return i.H;default:throw new Error("Unknown EC Level: "+t)}}i.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},i.from=function(n,r){if(i.isValid(n))return n;try{return e(n)}catch{return r}}})(Gc)),Gc}var Wc,sh;function ES(){if(sh)return Wc;sh=1;function i(){this.buffer=[],this.length=0}return i.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Wc=i,Wc}var qc,ah;function TS(){if(ah)return qc;ah=1;function i(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return i.prototype.set=function(e,t,n,r){const s=e*this.size+t;this.data[s]=n,r&&(this.reservedBit[s]=!0)},i.prototype.get=function(e,t){return this.data[e*this.size+t]},i.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},i.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},qc=i,qc}var jc={},oh;function wS(){return oh||(oh=1,(function(i){const e=yr().getSymbolSize;i.getRowColCoords=function(n){if(n===1)return[];const r=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*r-2))*2,o=[s-7];for(let c=1;c<r-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},i.getPositions=function(n){const r=[],s=i.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||r.push([s[o],s[c]]);return r}})(jc)),jc}var Xc={},ch;function AS(){if(ch)return Xc;ch=1;const i=yr().getSymbolSize,e=7;return Xc.getPositions=function(n){const r=i(n);return[[0,0],[r-e,0],[0,r-e]]},Xc}var Yc={},lh;function RS(){return lh||(lh=1,(function(i){i.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};i.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},i.from=function(r){return i.isValid(r)?parseInt(r,10):void 0},i.getPenaltyN1=function(r){const s=r.size;let a=0,o=0,c=0,l=null,d=null;for(let u=0;u<s;u++){o=c=0,l=d=null;for(let f=0;f<s;f++){let h=r.get(u,f);h===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=h,o=1),h=r.get(f,u),h===d?c++:(c>=5&&(a+=e.N1+(c-5)),d=h,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},i.getPenaltyN2=function(r){const s=r.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=r.get(o,c)+r.get(o,c+1)+r.get(o+1,c)+r.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},i.getPenaltyN3=function(r){const s=r.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let d=0;d<s;d++)o=o<<1&2047|r.get(l,d),d>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|r.get(d,l),d>=10&&(c===1488||c===93)&&a++}return a*e.N3},i.getPenaltyN4=function(r){let s=0;const a=r.data.length;for(let c=0;c<a;c++)s+=r.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,r,s){switch(n){case i.Patterns.PATTERN000:return(r+s)%2===0;case i.Patterns.PATTERN001:return r%2===0;case i.Patterns.PATTERN010:return s%3===0;case i.Patterns.PATTERN011:return(r+s)%3===0;case i.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(s/3))%2===0;case i.Patterns.PATTERN101:return r*s%2+r*s%3===0;case i.Patterns.PATTERN110:return(r*s%2+r*s%3)%2===0;case i.Patterns.PATTERN111:return(r*s%3+(r+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}i.applyMask=function(r,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(r,c,o))},i.getBestMask=function(r,s){const a=Object.keys(i.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),i.applyMask(l,r);const d=i.getPenaltyN1(r)+i.getPenaltyN2(r)+i.getPenaltyN3(r)+i.getPenaltyN4(r);i.applyMask(l,r),d<c&&(c=d,o=l)}return o}})(Yc)),Yc}var ho={},uh;function jp(){if(uh)return ho;uh=1;const i=nf(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ho.getBlocksCount=function(r,s){switch(s){case i.L:return e[(r-1)*4+0];case i.M:return e[(r-1)*4+1];case i.Q:return e[(r-1)*4+2];case i.H:return e[(r-1)*4+3];default:return}},ho.getTotalCodewordsCount=function(r,s){switch(s){case i.L:return t[(r-1)*4+0];case i.M:return t[(r-1)*4+1];case i.Q:return t[(r-1)*4+2];case i.H:return t[(r-1)*4+3];default:return}},ho}var Kc={},Gs={},fh;function CS(){if(fh)return Gs;fh=1;const i=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let r=0;r<255;r++)i[r]=n,e[n]=r,n<<=1,n&256&&(n^=285);for(let r=255;r<512;r++)i[r]=i[r-255]})(),Gs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Gs.exp=function(n){return i[n]},Gs.mul=function(n,r){return n===0||r===0?0:i[e[n]+e[r]]},Gs}var dh;function PS(){return dh||(dh=1,(function(i){const e=CS();i.mul=function(n,r){const s=new Uint8Array(n.length+r.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<r.length;o++)s[a+o]^=e.mul(n[a],r[o]);return s},i.mod=function(n,r){let s=new Uint8Array(n);for(;s.length-r.length>=0;){const a=s[0];for(let c=0;c<r.length;c++)s[c]^=e.mul(r[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},i.generateECPolynomial=function(n){let r=new Uint8Array([1]);for(let s=0;s<n;s++)r=i.mul(r,new Uint8Array([1,e.exp(s)]));return r}})(Kc)),Kc}var Jc,hh;function LS(){if(hh)return Jc;hh=1;const i=PS();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=i.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const r=new Uint8Array(n.length+this.degree);r.set(n);const s=i.mod(r,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Jc=e,Jc}var $c={},Zc={},Qc={},ph;function Xp(){return ph||(ph=1,Qc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Qc}var Qn={},mh;function Yp(){if(mh)return Qn;mh=1;const i="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Qn.KANJI=new RegExp(t,"g"),Qn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Qn.BYTE=new RegExp(n,"g"),Qn.NUMERIC=new RegExp(i,"g"),Qn.ALPHANUMERIC=new RegExp(e,"g");const r=new RegExp("^"+t+"$"),s=new RegExp("^"+i+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Qn.testKanji=function(c){return r.test(c)},Qn.testNumeric=function(c){return s.test(c)},Qn.testAlphanumeric=function(c){return a.test(c)},Qn}var gh;function Mr(){return gh||(gh=1,(function(i){const e=Xp(),t=Yp();i.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},i.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},i.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},i.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},i.MIXED={bit:-1},i.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},i.getBestModeForData=function(s){return t.testNumeric(s)?i.NUMERIC:t.testAlphanumeric(s)?i.ALPHANUMERIC:t.testKanji(s)?i.KANJI:i.BYTE},i.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},i.isValid=function(s){return s&&s.bit&&s.ccBits};function n(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return i.NUMERIC;case"alphanumeric":return i.ALPHANUMERIC;case"kanji":return i.KANJI;case"byte":return i.BYTE;default:throw new Error("Unknown mode: "+r)}}i.from=function(s,a){if(i.isValid(s))return s;try{return n(s)}catch{return a}}})(Zc)),Zc}var bh;function IS(){return bh||(bh=1,(function(i){const e=yr(),t=jp(),n=nf(),r=Mr(),s=Xp(),a=7973,o=e.getBCHDigit(a);function c(f,h,g){for(let _=1;_<=40;_++)if(h<=i.getCapacity(_,g,f))return _}function l(f,h){return r.getCharCountIndicator(f,h)+4}function d(f,h){let g=0;return f.forEach(function(_){const m=l(_.mode,h);g+=m+_.getBitsLength()}),g}function u(f,h){for(let g=1;g<=40;g++)if(d(f,g)<=i.getCapacity(g,h,r.MIXED))return g}i.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},i.getCapacity=function(h,g,_){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof _>"u"&&(_=r.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),y=(m-p)*8;if(_===r.MIXED)return y;const x=y-l(_,h);switch(_){case r.NUMERIC:return Math.floor(x/10*3);case r.ALPHANUMERIC:return Math.floor(x/11*2);case r.KANJI:return Math.floor(x/13);case r.BYTE:default:return Math.floor(x/8)}},i.getBestVersionForData=function(h,g){let _;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return u(h,m);if(h.length===0)return 1;_=h[0]}else _=h;return c(_.mode,_.getLength(),m)},i.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return h<<12|g}})($c)),$c}var el={},_h;function DS(){if(_h)return el;_h=1;const i=yr(),e=1335,t=21522,n=i.getBCHDigit(e);return el.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;i.getBCHDigit(c)-n>=0;)c^=e<<i.getBCHDigit(c)-n;return(o<<10|c)^t},el}var tl={},nl,xh;function US(){if(xh)return nl;xh=1;const i=Mr();function e(t){this.mode=i.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let r,s,a;for(r=0;r+3<=this.data.length;r+=3)s=this.data.substr(r,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-r;o>0&&(s=this.data.substr(r),a=parseInt(s,10),n.put(a,o*3+1))},nl=e,nl}var il,vh;function NS(){if(vh)return il;vh=1;const i=Mr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=i.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(r){return 11*Math.floor(r/2)+6*(r%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(r){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),r.put(a,11)}this.data.length%2&&r.put(e.indexOf(this.data[s]),6)},il=t,il}var rl,yh;function FS(){if(yh)return rl;yh=1;const i=Mr();function e(t){this.mode=i.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,r=this.data.length;n<r;n++)t.put(this.data[n],8)},rl=e,rl}var sl,Mh;function OS(){if(Mh)return sl;Mh=1;const i=Mr(),e=yr();function t(n){this.mode=i.KANJI,this.data=n}return t.getBitsLength=function(r){return r*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let r;for(r=0;r<this.data.length;r++){let s=e.toSJIS(this.data[r]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[r]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},sl=t,sl}var al={exports:{}},Sh;function BS(){return Sh||(Sh=1,(function(i){var e={single_source_shortest_paths:function(t,n,r){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,d,u,f,h,g,_,m;!o.empty();){c=o.pop(),l=c.value,u=c.cost,f=t[l]||{};for(d in f)f.hasOwnProperty(d)&&(h=f[d],g=u+h,_=a[d],m=typeof a[d]>"u",(m||_>g)&&(a[d]=g,o.push(d,g),s[d]=l))}if(typeof r<"u"&&typeof a[r]>"u"){var p=["Could not find a path from ",n," to ",r,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var r=[],s=n;s;)r.push(s),t[s],s=t[s];return r.reverse(),r},find_path:function(t,n,r){var s=e.single_source_shortest_paths(t,n,r);return e.extract_shortest_path_from_predecessor_list(s,r)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,r={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(r[s]=n[s]);return r.queue=[],r.sorter=t.sorter||n.default_sorter,r},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var r={value:t,cost:n};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};i.exports=e})(al)),al.exports}var Eh;function kS(){return Eh||(Eh=1,(function(i){const e=Mr(),t=US(),n=NS(),r=FS(),s=OS(),a=Yp(),o=yr(),c=BS();function l(p){return unescape(encodeURIComponent(p)).length}function d(p,y,x){const b=[];let v;for(;(v=p.exec(x))!==null;)b.push({data:v[0],index:v.index,mode:y,length:v[0].length});return b}function u(p){const y=d(a.NUMERIC,e.NUMERIC,p),x=d(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,v;return o.isKanjiModeEnabled()?(b=d(a.BYTE,e.BYTE,p),v=d(a.KANJI,e.KANJI,p)):(b=d(a.BYTE_KANJI,e.BYTE,p),v=[]),y.concat(x,b,v).sort(function(T,A){return T.index-A.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function f(p,y){switch(y){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return r.getBitsLength(p)}}function h(p){return p.reduce(function(y,x){const b=y.length-1>=0?y[y.length-1]:null;return b&&b.mode===x.mode?(y[y.length-1].data+=x.data,y):(y.push(x),y)},[])}function g(p){const y=[];for(let x=0;x<p.length;x++){const b=p[x];switch(b.mode){case e.NUMERIC:y.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:y.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:y.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:y.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return y}function _(p,y){const x={},b={start:{}};let v=["start"];for(let E=0;E<p.length;E++){const T=p[E],A=[];for(let S=0;S<T.length;S++){const M=T[S],w=""+E+S;A.push(w),x[w]={node:M,lastCount:0},b[w]={};for(let R=0;R<v.length;R++){const I=v[R];x[I]&&x[I].node.mode===M.mode?(b[I][w]=f(x[I].lastCount+M.length,M.mode)-f(x[I].lastCount,M.mode),x[I].lastCount+=M.length):(x[I]&&(x[I].lastCount=M.length),b[I][w]=f(M.length,M.mode)+4+e.getCharCountIndicator(M.mode,y))}}v=A}for(let E=0;E<v.length;E++)b[v[E]].end=0;return{map:b,table:x}}function m(p,y){let x;const b=e.getBestModeForData(p);if(x=e.from(y,b),x!==e.BYTE&&x.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(x)+`.
 Suggested mode is: `+e.toString(b));switch(x===e.KANJI&&!o.isKanjiModeEnabled()&&(x=e.BYTE),x){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new r(p)}}i.fromArray=function(y){return y.reduce(function(x,b){return typeof b=="string"?x.push(m(b,null)):b.data&&x.push(m(b.data,b.mode)),x},[])},i.fromString=function(y,x){const b=u(y,o.isKanjiModeEnabled()),v=g(b),E=_(v,x),T=c.find_path(E.map,"start","end"),A=[];for(let S=1;S<T.length-1;S++)A.push(E.table[T[S]].node);return i.fromArray(h(A))},i.rawSplit=function(y){return i.fromArray(u(y,o.isKanjiModeEnabled()))}})(tl)),tl}var Th;function zS(){if(Th)return Vc;Th=1;const i=yr(),e=nf(),t=ES(),n=TS(),r=wS(),s=AS(),a=RS(),o=jp(),c=LS(),l=IS(),d=DS(),u=Mr(),f=kS();function h(E,T){const A=E.size,S=s.getPositions(T);for(let M=0;M<S.length;M++){const w=S[M][0],R=S[M][1];for(let I=-1;I<=7;I++)if(!(w+I<=-1||A<=w+I))for(let D=-1;D<=7;D++)R+D<=-1||A<=R+D||(I>=0&&I<=6&&(D===0||D===6)||D>=0&&D<=6&&(I===0||I===6)||I>=2&&I<=4&&D>=2&&D<=4?E.set(w+I,R+D,!0,!0):E.set(w+I,R+D,!1,!0))}}function g(E){const T=E.size;for(let A=8;A<T-8;A++){const S=A%2===0;E.set(A,6,S,!0),E.set(6,A,S,!0)}}function _(E,T){const A=r.getPositions(T);for(let S=0;S<A.length;S++){const M=A[S][0],w=A[S][1];for(let R=-2;R<=2;R++)for(let I=-2;I<=2;I++)R===-2||R===2||I===-2||I===2||R===0&&I===0?E.set(M+R,w+I,!0,!0):E.set(M+R,w+I,!1,!0)}}function m(E,T){const A=E.size,S=l.getEncodedBits(T);let M,w,R;for(let I=0;I<18;I++)M=Math.floor(I/3),w=I%3+A-8-3,R=(S>>I&1)===1,E.set(M,w,R,!0),E.set(w,M,R,!0)}function p(E,T,A){const S=E.size,M=d.getEncodedBits(T,A);let w,R;for(w=0;w<15;w++)R=(M>>w&1)===1,w<6?E.set(w,8,R,!0):w<8?E.set(w+1,8,R,!0):E.set(S-15+w,8,R,!0),w<8?E.set(8,S-w-1,R,!0):w<9?E.set(8,15-w-1+1,R,!0):E.set(8,15-w-1,R,!0);E.set(S-8,8,1,!0)}function y(E,T){const A=E.size;let S=-1,M=A-1,w=7,R=0;for(let I=A-1;I>0;I-=2)for(I===6&&I--;;){for(let D=0;D<2;D++)if(!E.isReserved(M,I-D)){let F=!1;R<T.length&&(F=(T[R]>>>w&1)===1),E.set(M,I-D,F),w--,w===-1&&(R++,w=7)}if(M+=S,M<0||A<=M){M-=S,S=-S;break}}}function x(E,T,A){const S=new t;A.forEach(function(D){S.put(D.mode.bit,4),S.put(D.getLength(),u.getCharCountIndicator(D.mode,E)),D.write(S)});const M=i.getSymbolTotalCodewords(E),w=o.getTotalCodewordsCount(E,T),R=(M-w)*8;for(S.getLengthInBits()+4<=R&&S.put(0,4);S.getLengthInBits()%8!==0;)S.putBit(0);const I=(R-S.getLengthInBits())/8;for(let D=0;D<I;D++)S.put(D%2?17:236,8);return b(S,E,T)}function b(E,T,A){const S=i.getSymbolTotalCodewords(T),M=o.getTotalCodewordsCount(T,A),w=S-M,R=o.getBlocksCount(T,A),I=S%R,D=R-I,F=Math.floor(S/R),O=Math.floor(w/R),V=O+1,k=F-O,J=new c(k);let Z=0;const fe=new Array(R),Le=new Array(R);let Ye=0;const $e=new Uint8Array(E.buffer);for(let ae=0;ae<R;ae++){const oe=ae<D?O:V;fe[ae]=$e.slice(Z,Z+oe),Le[ae]=J.encode(fe[ae]),Z+=oe,Ye=Math.max(Ye,oe)}const ze=new Uint8Array(S);let X=0,$,j;for($=0;$<Ye;$++)for(j=0;j<R;j++)$<fe[j].length&&(ze[X++]=fe[j][$]);for($=0;$<k;$++)for(j=0;j<R;j++)ze[X++]=Le[j][$];return ze}function v(E,T,A,S){let M;if(Array.isArray(E))M=f.fromArray(E);else if(typeof E=="string"){let F=T;if(!F){const O=f.rawSplit(E);F=l.getBestVersionForData(O,A)}M=f.fromString(E,F||40)}else throw new Error("Invalid data");const w=l.getBestVersionForData(M,A);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=w;else if(T<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const R=x(T,A,M),I=i.getSymbolSize(T),D=new n(I);return h(D,T),g(D),_(D,T),p(D,A,0),T>=7&&m(D,T),y(D,R),isNaN(S)&&(S=a.getBestMask(D,p.bind(null,D,A))),a.applyMask(S,D),p(D,A,S),{modules:D,version:T,errorCorrectionLevel:A,maskPattern:S,segments:M}}return Vc.create=function(T,A){if(typeof T>"u"||T==="")throw new Error("No input text");let S=e.M,M,w;return typeof A<"u"&&(S=e.from(A.errorCorrectionLevel,e.M),M=l.from(A.version),w=a.from(A.maskPattern),A.toSJISFunc&&i.setToSJISFunction(A.toSJISFunc)),v(T,M,S,w)},Vc}var ol={},cl={},wh;function Kp(){return wh||(wh=1,(function(i){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const r=parseInt(n.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+n.slice(0,6).join("")}}i.getOptions=function(n){n||(n={}),n.color||(n.color={});const r=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:r,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},i.getScale=function(n,r){return r.width&&r.width>=n+r.margin*2?r.width/(n+r.margin*2):r.scale},i.getImageWidth=function(n,r){const s=i.getScale(n,r);return Math.floor((n+r.margin*2)*s)},i.qrToImageData=function(n,r,s){const a=r.modules.size,o=r.modules.data,c=i.getScale(a,s),l=Math.floor((a+s.margin*2)*c),d=s.margin*c,u=[s.color.light,s.color.dark];for(let f=0;f<l;f++)for(let h=0;h<l;h++){let g=(f*l+h)*4,_=s.color.light;if(f>=d&&h>=d&&f<l-d&&h<l-d){const m=Math.floor((f-d)/c),p=Math.floor((h-d)/c);_=u[o[m*a+p]?1:0]}n[g++]=_.r,n[g++]=_.g,n[g++]=_.b,n[g]=_.a}}})(cl)),cl}var Ah;function HS(){return Ah||(Ah=1,(function(i){const e=Kp();function t(r,s,a){r.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}i.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const d=e.getImageWidth(s.modules.size,c),u=l.getContext("2d"),f=u.createImageData(d,d);return e.qrToImageData(f.data,s,c),t(u,l,d),u.putImageData(f,0,0),l},i.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=i.render(s,a,c),d=c.type||"image/png",u=c.rendererOpts||{};return l.toDataURL(d,u.quality)}})(ol)),ol}var ll={},Rh;function VS(){if(Rh)return ll;Rh=1;const i=Kp();function e(r,s){const a=r.a/255,o=s+'="'+r.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(r,s,a){let o=r+s;return typeof a<"u"&&(o+=" "+a),o}function n(r,s,a){let o="",c=0,l=!1,d=0;for(let u=0;u<r.length;u++){const f=Math.floor(u%s),h=Math.floor(u/s);!f&&!l&&(l=!0),r[u]?(d++,u>0&&f>0&&r[u-1]||(o+=l?t("M",f+a,.5+h+a):t("m",c,0),c=0,l=!1),f+1<s&&r[u+1]||(o+=t("h",d),d=0)):c++}return o}return ll.render=function(s,a,o){const c=i.getOptions(a),l=s.modules.size,d=s.modules.data,u=l+c.margin*2,f=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+u+"v"+u+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(d,l,c.margin)+'"/>',g='viewBox="0 0 '+u+" "+u+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+f+h+`</svg>
`;return typeof o=="function"&&o(null,m),m},ll}var Ch;function GS(){if(Ch)return Jr;Ch=1;const i=SS(),e=zS(),t=HS(),n=VS();function r(s,a,o,c,l){const d=[].slice.call(arguments,1),u=d.length,f=typeof d[u-1]=="function";if(!f&&!i())throw new Error("Callback required as last argument");if(f){if(u<2)throw new Error("Too few arguments provided");u===2?(l=o,o=a,a=c=void 0):u===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(u<1)throw new Error("Too few arguments provided");return u===1?(o=a,a=c=void 0):u===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(h,g){try{const _=e.create(o,c);h(s(_,a,c))}catch(_){g(_)}})}try{const h=e.create(o,c);l(null,s(h,a,c))}catch(h){l(h)}}return Jr.create=e.create,Jr.toCanvas=r.bind(null,t.render),Jr.toDataURL=r.bind(null,t.renderToDataURL),Jr.toString=r.bind(null,function(s,a,o){return n.render(s,o)}),Jr}var WS=GS();const qS=MS(WS),rf={"phoenix-ewer":"凤首昂起，卷尾成柄。","bronze-head":"轮廓在光中显现，锈色层层铺开。","cloud-mirror":"连弧相接，细纹在铜色中回旋。","liquan-bodhisattva":"沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。","longquan-figure":"青釉如山色，露胎似暖土。","pipa-figurine":"陶色留住衣褶，也留住抱琴的姿态。","speechless-buddha":"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。"};function jS(i,e=globalThis.location){const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.username="",t.password="",t.searchParams.set("artifact",i),t.href}function XS(i){return["localhost","127.0.0.1","[::1]"].includes(new URL(i).hostname)}function YS(i){if(!i)return!1;const e=i.x*1024,t=(1-i.y)*248;return e>=777&&e<=995&&t>=10&&t<=240}function KS(i,e=8){const t=qS.create(i,{errorCorrectionLevel:"M"}),n=t.modules.size,r=4,s=(n+r*2)*e,a=new Uint8ClampedArray(s*s*4).fill(255);for(let o=0;o<s;o++)for(let c=0;c<s;c++){const l=Math.floor(c/e)-r,d=Math.floor(o/e)-r;if(l<0||d<0||l>=n||d>=n||!t.modules.get(d,l))continue;const u=(o*s+c)*4;a[u]=a[u+1]=a[u+2]=0}return{size:s,pixels:a,quiet:r,modules:n,scale:e}}function JS(i){const[e,,t]=i.position;if(i.cabinetId==="story")return{position:[e,.705,t+.935],rotationY:0,rotationX:-65*Math.PI/180};const n=e<0?1:-1;return{position:[e+n*.935,.705,t],rotationY:n*Math.PI/2,rotationX:-65*Math.PI/180}}function $S({now:i=()=>performance.now(),schedule:e=setTimeout,unschedule:t=clearTimeout}={}){let n=0,r=0,s=null,a=0,o=!1;function c(){a++,t(s),s=null,o=!0}return{start(l){c(),n=i(),r=l,o=!1},ready(l){if(o)return;o=!0;const d=a;s=e(()=>{s=null,d===a&&l()},Math.max(0,r-(i()-n)))},cancel:c}}function ZS({captureFrame:i,isReduced:e}){const t=document.createElement("section");t.className="artifact-journey",t.innerHTML='<canvas class="journey-scene" aria-hidden="true"></canvas><div class="journey-shade" aria-hidden="true"></div><div class="journey-threshold" aria-hidden="true"></div><div class="journey-copy"><span class="journey-kicker">一器 · 一世界</span><h2></h2><p class="journey-line"></p><div class="journey-trace" aria-hidden="true"><i></i></div><p class="journey-note" role="status">光里的细节，正慢慢靠近。</p><div class="journey-actions" hidden><button type="button">重新载入</button><a target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>';const n=t.querySelector("canvas"),r=t.querySelector(".journey-note"),s=t.querySelector(".journey-actions"),a=$S();let o=0,c=null,l=!1;function d(){l=!1,a.cancel(),cancelAnimationFrame(o),clearTimeout(c),n.width=n.height=1,t.hidden=!0}function u(f,h={x:.5,y:.5}){d(),l=!0,t.hidden=!1;const g=e();t.classList.toggle("journey-reduced",g),t.dataset.phase="start",t.style.setProperty("--focus-x",`${Math.max(.1,Math.min(.9,h.x))*100}%`),t.style.setProperty("--focus-y",`${Math.max(.1,Math.min(.9,h.y))*100}%`),t.querySelector("h2").textContent=f.name,t.querySelector(".journey-line").textContent=rf[f.artifactId]||"循着器物的轮廓，走进它的故事。",r.textContent="光里的细节，正慢慢靠近。",s.hidden=!0;try{const _=i==null?void 0:i();if(_!=null&&_.width&&(_!=null&&_.height)){const m=Math.min(1,1600/_.width);n.width=Math.round(_.width*m),n.height=Math.round(_.height*m),n.getContext("2d").drawImage(_,0,0,n.width,n.height)}}catch{n.width=n.height=1}a.start(g?0:1150),o=requestAnimationFrame(()=>{l&&(t.dataset.phase="approach")})}return{element:t,retryButton:s.querySelector("button"),standalone:s.querySelector("a"),start:u,cancel:d,reveal(f,h){a.ready(()=>{l&&(t.dataset.phase="reveal",f(),c=setTimeout(()=>{l&&(t.hidden=!0,n.width=n.height=1,h())},e()?120:950))})},fail(f){a.cancel(),clearTimeout(c),cancelAnimationFrame(o),t.hidden=!1,t.dataset.phase="error",r.textContent=f,s.hidden=!1}}}const Ph="museum-artifact-v1";function QS({canvas:i,camera:e,scene:t,assignments:n,colliders:r=[],getMode:s,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:d=()=>{},captureFrame:u,detailUrl:f=new URL("/",`${location.protocol}//${location.hostname}:5189`).href}){const h=document.createElement("button");h.id="artifactHint",h.className="artifact-entry",h.hidden=!0;const g=document.createElement("dialog");g.id="artifactDetail",g.className="artifact-detail",g.setAttribute("aria-label","文物详情"),g.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div>',document.body.append(h,g);const _=g.querySelector(".artifact-detail-host"),m=()=>{var ee;return((ee=document.querySelector("#motion"))==null?void 0:ee.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},p=ZS({captureFrame:u,isReduced:m});g.append(p.element);const y=g.querySelector("#closeArtifactDetail"),x=p.retryButton,b=p.standalone,v=new Ju,E=new Ue,T=new L,A=new L,S=new Ki,M=new L,w=new AbortController,R=new Map,I=r.map(ee=>({id:ee.id,box:new nt().setFromCenterAndSize(new L(...ee.center),new L(...ee.size))}));let D=null,F=null,O=null,V=null,k=!1,J={x:.5,y:.5},Z=null,fe=!1;function Le(ee){let U=R.get(ee.artifactId);if(U)return U;const Fe=t.getObjectByName(`HallArtifact_${ee.artifactId}`);if(!Fe)return null;Fe.updateWorldMatrix(!0,!0);const Me=new nt().setFromObject(Fe);return U={assignment:ee,object:Fe,bounds:Me,center:Me.getCenter(new L)},R.set(ee.artifactId,U),U}function Ye(ee,U=ee.center){const Fe=e.position.distanceTo(U);return S.set(e.position,A.subVectors(U,e.position).normalize()),!I.some(({id:Me,box:ge})=>(Me.includes("exhibit")||Me.includes("Far gallery"))&&ge.containsPoint(ee.center)?!1:S.intersectBox(ge,M)&&e.position.distanceTo(M)<Fe-.05)}function $e(){return!g.open&&a()&&!o()&&["walk","paused"].includes(s())}function ze(ee,U=!1){if(e.position.distanceTo(ee.center)>4.8||(T.copy(ee.center).project(e),T.z<-1||T.z>1||Math.abs(T.x)>.92||Math.abs(T.y)>.82))return!1;const Fe=Math.hypot(T.x*i.clientWidth/2,T.y*i.clientHeight/2);return(U||Fe<175)&&Ye(ee)}function X(){D=null,h.hidden=!0,i.dataset.artifactAim=""}function $({selectedExhibit:ee=null,observationPhase:U=i.dataset.observationPhase}={}){if(!$e())return X(),null;const Fe=(ee==null?void 0:ee.id)??ee,Me=U==="complete"&&s()==="paused";let ge=null;if(Me){const ce=n.find(be=>String(be.cabinetId)===String(Fe)),et=ce&&Le(ce);et&&ze(et,!0)&&(ge=et)}if(!ge){let ce=1/0;for(const et of n){const be=Le(et);if(!be||!ze(be))continue;const Ge=e.position.distanceToSquared(be.center);Ge<ce&&(ce=Ge,ge=be)}}if(D=ge||null,h.hidden=!D,i.dataset.artifactAim=(D==null?void 0:D.assignment.artifactId)||"",D){const{name:ce,nickname:et}=D.assignment;h.textContent=`${ce}${et?` · ${et}`:""}　查看详情 ↗`,h.setAttribute("aria-label",`查看${ce}详情`),h.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(D==null?void 0:D.assignment.artifactId)||null}function j(ee){!g.open||!F||(clearTimeout(V),k=!1,g.dataset.phase="error",y.hidden=!1,p.fail(ee))}function ae(){if(!g.open||!F)return;clearTimeout(V),k=!1,y.hidden=!1,g.dataset.phase="approach",_.inert=!0,_.setAttribute("aria-hidden","true"),p.start(F,J);const ee=new URL(f,location.href);ee.searchParams.set("artifact",F.artifactId),ee.searchParams.set("museumEmbed","1"),ee.searchParams.set("parentOrigin",location.origin),ee.searchParams.set("returnUrl",location.href);const U=new URL(ee);U.searchParams.delete("museumEmbed"),U.searchParams.delete("parentOrigin"),b.href=U.href,_.replaceChildren(),O=document.createElement("iframe"),O.title=`${F.name}互动详情`,O.allow="autoplay";const Fe=O;O.addEventListener("error",()=>{O===Fe&&j("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),O.src=ee.href,_.append(O),V=setTimeout(()=>j("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function oe(ee=D==null?void 0:D.assignment.artifactId,{focusPoint:U}={}){var ge;const Fe=n.find(ce=>ce.artifactId===ee);if(!Fe||g.open)return!1;F=Fe;const Me=U||((ge=Le(Fe))==null?void 0:ge.center);return Me?(T.copy(Me).project(e),J={x:(T.x+1)/2,y:(1-T.y)/2}):J={x:.5,y:.5},X(),l(Fe),g.setAttribute("aria-label",`${Fe.name}详情`),g.showModal(),document.body.classList.add("artifact-detail-open"),ae(),y.focus({preventScroll:!0}),!0}function Ie(){return g.open?(clearTimeout(V),p.cancel(),_.replaceChildren(),O=null,k=!1,g.close(),document.body.classList.remove("artifact-detail-open"),d(F),F=null,i.focus({preventScroll:!0}),!0):!1}return h.addEventListener("click",()=>{D&&$e()&&ze(D,!0)&&oe()}),y.addEventListener("click",Ie),x.addEventListener("click",ae),g.addEventListener("cancel",ee=>{ee.preventDefault(),Ie()}),i.addEventListener("pointerdown",ee=>{Z||(Z={id:ee.pointerId,x:ee.clientX,y:ee.clientY},fe=!1)},{signal:w.signal}),i.addEventListener("pointermove",ee=>{(Z==null?void 0:Z.id)===ee.pointerId&&Math.hypot(ee.clientX-Z.x,ee.clientY-Z.y)>7&&(fe=!0)},{signal:w.signal}),i.addEventListener("pointerup",ee=>{(Z==null?void 0:Z.id)===ee.pointerId&&(Z=null)},{signal:w.signal}),i.addEventListener("pointercancel",ee=>{(Z==null?void 0:Z.id)===ee.pointerId&&(Z=null,fe=!0)},{signal:w.signal}),i.addEventListener("lostpointercapture",ee=>{(Z==null?void 0:Z.id)===ee.pointerId&&(Z=null,fe=!0)},{signal:w.signal}),i.addEventListener("click",ee=>{if(fe||!$e())return;if(document.pointerLockElement===i)E.set(0,0);else{const ce=i.getBoundingClientRect();E.set((ee.clientX-ce.left)/ce.width*2-1,-(ee.clientY-ce.top)/ce.height*2+1)}if(v.setFromCamera(E,e),v.intersectObjects(c(),!1).some(ce=>ce.distance<12))return;const U=n.map(Le).filter(Boolean),Me=v.intersectObjects(U.map(ce=>ce.object),!0)[0];if(!Me||Me.distance>4.8)return;const ge=U.find(ce=>ce.assignment.artifactId===Me.object.userData.artifactId);ge&&Ye(ge,Me.point)&&oe(ge.assignment.artifactId)&&(ee.preventDefault(),ee.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("keydown",ee=>{var U;if(ee.key==="Escape"&&g.open){ee.preventDefault(),ee.stopImmediatePropagation(),Ie();return}ee.code!=="KeyE"||ee.repeat||!D||!$e()||/INPUT|TEXTAREA|SELECT/.test((U=document.activeElement)==null?void 0:U.tagName)||ze(D,!0)&&oe()&&(ee.preventDefault(),ee.stopImmediatePropagation())},{capture:!0,signal:w.signal}),window.addEventListener("message",ee=>{var Me;const U=new URL(f,location.href).origin;if(!g.open||ee.origin!==U||ee.source!==(O==null?void 0:O.contentWindow)||((Me=ee.data)==null?void 0:Me.channel)!==Ph)return;const Fe=n.find(ge=>ge.artifactId===ee.data.artifactId);if(Fe&&(F=Fe,g.setAttribute("aria-label",`${Fe.name}详情`)),ee.data.type==="loading"&&(k=!1,y.hidden=!1,g.dataset.phase==="ready"&&(g.dataset.phase="approach",p.start(F,J)),clearTimeout(V),V=setTimeout(()=>j("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),ee.data.type==="ready"){if(k)return;k=!0,clearTimeout(V);const ge=O;p.reveal(()=>{O!==ge||!g.open||(g.dataset.phase="reveal",ge.contentWindow.postMessage({channel:Ph,type:"enter",reduced:m()},U))},()=>{O!==ge||!g.open||(g.dataset.phase="ready",_.inert=!1,_.removeAttribute("aria-hidden"),y.hidden=!0,ge.focus())})}ee.data.type==="error"&&j("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),ee.data.type==="close"&&Ie()},{signal:w.signal}),{update:$,open:oe,close:Ie,dispose(){Ie(),clearTimeout(V),w.abort(),R.clear(),h.remove(),g.remove()},isOpen:()=>g.open,get state(){return{open:g.open,ready:k,artifactId:(F==null?void 0:F.artifactId)||null,aimedArtifactId:(D==null?void 0:D.assignment.artifactId)||null}}}}const eE=Object.freeze({"phoenix-ewer":-Math.PI/2,"bronze-head":-Math.PI/2,"cloud-mirror":-Math.PI/2,"liquan-bodhisattva":-Math.PI/2,"longquan-figure":-Math.PI/2,"pipa-figurine":-Math.PI/2,"speechless-buddha":-Math.PI/2});function ul(i){return Number.isFinite(i.frontRotationY)?i.frontRotationY:eE[i.artifactId||i.id]??0}const St=new Lt,po=new L,Lh=new Ue,Ih=new Ue,Dh=new Ue;class tE{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,r=e?e.count/3:t.count/3,s=new Float32Array(r);for(let c=0;c<r;c++){let l=1,d=3*c,u=3*c+1,f=3*c+2;e&&(d=e.getX(d),u=e.getX(u),f=e.getX(f)),n&&(l=n.getX(d)+n.getX(u)+n.getX(f)),St.a.fromBufferAttribute(t,d),St.b.fromBufferAttribute(t,u),St.c.fromBufferAttribute(t,f),l*=St.getArea(),s[c]=l}const a=new Float32Array(r);let o=0;for(let c=0;c<r;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,r){const s=this._sampleFaceIndex();return this._sampleFace(s,e,t,n,r)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,r=t.length-1,s=-1;for(;n<=r;){const a=Math.ceil((n+r)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?r=a-1:n=a+1}return s}_sampleFace(e,t,n,r,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,d=e*3+1,u=e*3+2;return c&&(l=c.getX(l),d=c.getX(d),u=c.getX(u)),St.a.fromBufferAttribute(this.positionAttribute,l),St.b.fromBufferAttribute(this.positionAttribute,d),St.c.fromBufferAttribute(this.positionAttribute,u),t.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(St.a.fromBufferAttribute(this.normalAttribute,l),St.b.fromBufferAttribute(this.normalAttribute,d),St.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)).normalize()):St.getNormal(n)),r!==void 0&&this.colorAttribute!==void 0&&(St.a.fromBufferAttribute(this.colorAttribute,l),St.b.fromBufferAttribute(this.colorAttribute,d),St.c.fromBufferAttribute(this.colorAttribute,u),po.set(0,0,0).addScaledVector(St.a,a).addScaledVector(St.b,o).addScaledVector(St.c,1-(a+o)),r.r=po.x,r.g=po.y,r.b=po.z),s!==void 0&&this.uvAttribute!==void 0&&(Lh.fromBufferAttribute(this.uvAttribute,l),Ih.fromBufferAttribute(this.uvAttribute,d),Dh.fromBufferAttribute(this.uvAttribute,u),s.set(0,0).addScaledVector(Lh,a).addScaledVector(Ih,o).addScaledVector(Dh,1-(a+o))),this}}const ra=5,Io=.6;function nE(i){const e=Math.max(0,i);return{due:e>=ra,opacity:Un.smoothstep(e,0,Io)*(1-Un.smoothstep(e,ra-Io,ra))}}function dr(i,e=!1){const t=new Set,n=new Set,r=new Set;i.traverse(s=>{s.geometry&&(!e||s.isPoints)&&t.add(s.geometry);for(const a of s.material?Array.isArray(s.material)?s.material:[s.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&r.add(o)}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),r.forEach(s=>{var a,o,c;s.dispose(),(c=(o=(a=s.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),i.removeFromParent()}async function iE(i,e){const t=new tE(i),n=t.positionAttribute,r=t.indexAttribute,s=((r==null?void 0:r.count)??n.count)/3,a=new Float32Array(s),o=new Lt;let c=0;for(let l=0;l<s;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let d=l;d<Math.min(s,l+8192);d++){const u=d*3;o.a.fromBufferAttribute(n,r?r.getX(u):u),o.b.fromBufferAttribute(n,r?r.getX(u+1):u+1),o.c.fromBufferAttribute(n,r?r.getX(u+2):u+2),c+=o.getArea(),a[d]=c}l+8192<s&&await new Promise(d=>setTimeout(d,0))}return t.distribution=a,t}async function rE(i,e,t){i.updateMatrixWorld(!0);const n=new nt().setFromObject(i),r=n.getSize(new L);if(n.isEmpty()||!Number.isFinite(r.length())||r.length()===0)throw new Error("模型没有可展示的几何体");const s=Math.min(1.5/Math.max(r.y,.001),1.6/Math.max(r.x,r.z,.001)),a=n.getCenter(new L),o=new gn;o.add(i),i.position.sub(a),o.scale.setScalar(s),o.position.y=.13+r.y*s/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],d=new Set;i.traverse(x=>{if(!x.isMesh||!x.geometry.attributes.position)return;l.push(x);const b=Array.isArray(x.material)?x.material:[x.material];for(const v of b)d.add(v),v.transparent=!0,v.depthWrite=!1,v.onBeforeCompile=E=>{E.uniforms.holoOpacity=c.opacity,E.uniforms.holoTime=c.time,E.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
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
          #include <opaque_fragment>`)},v.customProgramCacheKey=()=>"museum-jade-edge-v2",v.needsUpdate=!0});const u=[],f=o.matrixWorld.clone().invert(),h=new L,g=e?550:1200,_=l.reduce((x,b)=>x+b.geometry.attributes.position.count,0);for(const x of l){const b=new Ne().multiplyMatrices(f,x.matrixWorld);{const v=await iE(x,t),E=Math.max(1,Math.round(g*x.geometry.attributes.position.count/_));for(let T=0;T<E;T++)v.sample(h),h.applyMatrix4(b),u.push(h.x,h.y,h.z)}}const m=[];for(let x=0;x<u.length/3;x++){const b=x*2.39996323,v=(.08+.12*(x*.61803399%1))/s;m.push(Math.cos(b)*v,Math.sin(x*1.37)*v*.6,Math.sin(b)*v)}const p=new jt;p.setAttribute("position",new Dt(u,3)),p.setAttribute("scatterOffset",new Dt(m,3));const y=new xn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:as,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new xp(p,y)),{object:o,uniforms:c,surfaceMaterials:d}}function sE({scene:i,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null,prepareForRender:r=null}){const s=new gn;s.position.fromArray(e),i.add(s);for(const[w,R,I]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const D=new lt(new qu(w,.008,6,96),new Wn({color:R,transparent:!0,opacity:I,depthWrite:!1}));D.rotation.x=Math.PI/2,D.position.y=.025,s.add(D)}const a=new xn({transparent:!0,depthWrite:!1,blending:as,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),o=new lt(new $i(2.1,2.1),a);o.rotation.x=-Math.PI/2,o.position.y=.018,s.add(o);const c=new xn({side:an,transparent:!0,depthWrite:!1,blending:as,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),l=new lt(new gr(.76,.91,1.85,48,1,!0),c);l.position.y=.96,s.add(l);let d=[],u=0,f=null,h=null,g=null,_=0,m=0,p=0,y=0,x=0,b=!1,v=!1,E=null;const T=new Zu().setMeshoptDecoder(qp);function A(w){w&&dr(w.object,w.sharedResources)}function S(w){var O;if(b||g||h||!d.length||m<y)return;const R=d[w],I=x,D=new AbortController;g={controller:D,target:w};const F=new URL(R.modelUrl,((O=globalThis.location)==null?void 0:O.href)||"http://localhost/");(async()=>{let V,k;try{if(n)V=await n(R,D.signal);else{const J=await fetch(F,{signal:D.signal});if(!J.ok)throw new Error(`模型加载失败 (${J.status})`);V=await T.parseAsync(await J.arrayBuffer(),new URL(".",F).href)}if(b||I!==x){dr(V.scene,V.sharedResources);return}if(k=await rE(V.scene,t,D.signal),b||I!==x){dr(k.object,V.sharedResources);return}if(k.object.rotation.y=ul(R),r&&await r(k.object,D.signal),D.signal.throwIfAborted(),b||I!==x){dr(k.object,V.sharedResources);return}h={...k,record:R,index:w,sharedResources:!!V.sharedResources},E=null}catch(J){k?dr(k.object,V.sharedResources):V!=null&&V.scene&&dr(V.scene,V.sharedResources),!b&&I===x&&J.name!=="AbortError"&&(E=String(J.message||J),u=w,y=m+ra)}finally{I===x&&(g=null)}})()}function M(){A(f),f=h,h=null,u=f.index,s.add(f.object),_=0}return{setModels(w){x++,g==null||g.controller.abort(),g=null,A(f),A(h),f=null,h=null,d=(w||[]).filter(R=>(R==null?void 0:R.id)&&(R==null?void 0:R.modelUrl)).map(R=>({...R})),u=0,_=0,y=0,E=null,b||S(0)},update(w,{paused:R=!1,reduced:I=!1}={}){if(b)return;const D=Number.isFinite(w)?Math.max(0,w):0;if(v&&!R&&(_=0),v=R,!f&&h&&M(),R||(m+=D,_+=D),I||(p+=Math.min(D,.1)),f){const F=nE(_);if(R){const O=1-Math.exp(-D*12);f.uniforms.opacity.value=Un.lerp(f.uniforms.opacity.value,1,O),f.uniforms.dispersion.value=Un.lerp(f.uniforms.dispersion.value,0,O);for(const V of f.surfaceMaterials)V.depthWrite=!1}else{f.uniforms.opacity.value=d.length<2||!h?1:F.opacity,f.uniforms.dispersion.value=I?0:1-f.uniforms.opacity.value;for(const O of f.surfaceMaterials)O.depthWrite=f.uniforms.opacity.value>.98}f.uniforms.time.value=p,R||(f.object.rotation.y=ul(f.record)+(I?0:Math.sin(_*.7)*.07)),!R&&F.due&&h&&M()}!h&&!g&&d.length&&(!f||d.length>1)&&S(f||E?(u+1)%d.length:u)},getCurrent(){return f?{...f.record}:null},getState(){return{status:b?"disposed":f?"ready":g?"loading":E?"error":"empty",error:E,currentId:(f==null?void 0:f.record.id)??null,nextId:(h==null?void 0:h.record.id)??null,loading:!!g,rotationY:(f==null?void 0:f.object.rotation.y)??null,frontRotationY:f?ul(f.record):null,count:d.length,paused:v,elapsed:_,index:(f==null?void 0:f.index)??u,phase:f?_<Io?"forming":_>=ra-Io?"dispersing":"holding":"waiting"}},dispose(){b||(b=!0,x++,g==null||g.controller.abort(),g=null,A(f),A(h),f=null,h=null,dr(s))}}}const aE="http://127.0.0.1:4317/images";function oE(i=globalThis.location){if(!i)return aE;const e=new URL("/images",i.href||`http://${i.hostname}/`);return e.port="4317",e.href}function cE({mobile:i=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return ss.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:i?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function lE({signal:i,mobile:e}={}){return i==null||i.throwIfAborted(),cE({mobile:e})}function uE(i=[0,.92,0]){const[e,t,n]=i;return{anchor:new L(e,t+.12,n+1.1),box:new nt(new L(e-1.26,t+.005,n+.72),new L(e+1.26,t+.3,n+1.58))}}function fE({available:i,target:e,hovered:t,active:n,lastHit:r,now:s,holdMs:a=450}){return i?t&&t===n?{active:n,lastHit:s}:e?{active:e,lastHit:s}:{active:s-r<a?n:null,lastHit:r}:{active:null,lastHit:-1/0}}function dE(i,e,t){const n=i.intersectSphere(e,new L),r=i.intersectBox(t,new L);return r&&(!n||i.origin.distanceToSquared(r)<=i.origin.distanceToSquared(n))?"workbench":n?"artifact":null}function hE(i=[0,.92,0],{label:e=!0}={}){const t=new gn;t.name="Restoration atelier — tools and ceramic study",t.position.fromArray(i);const n={wood:new mn({color:5850169,roughness:.72}),felt:new mn({color:3357494,roughness:.96}),brass:new mn({color:12098661,metalness:.65,roughness:.42,emissive:7225879,emissiveIntensity:.06}),steel:new mn({color:12371651,metalness:.8,roughness:.33}),glaze:new mn({color:8235941,metalness:.08,roughness:.3}),clay:new mn({color:12821117,roughness:.86}),paper:new mn({color:14273968,roughness:.95}),bristle:new mn({color:14073227,roughness:1})},r=new Map;function s(u,f,h,g=[0,0,0]){const _=new lt(u);_.position.set(...h),_.rotation.set(...g),_.updateMatrix();let m=u.index?u.toNonIndexed():u.clone();u.dispose(),m.applyMatrix4(_.matrix),m.deleteAttribute("uv"),r.has(f)||r.set(f,[]),r.get(f).push(m)}const a=(u,f,h,g)=>s(new Ji(...f),u,h,g);function o(u,f,h,g,_=g){const m=new L(...f),p=new L(...h),y=p.clone().sub(m),x=new Nn().setFromQuaternion(new vn().setFromUnitVectors(new L(0,1,0),y.clone().normalize()));s(new gr(_,g,y.length(),10),u,m.add(p).multiplyScalar(.5).toArray(),[x.x,x.y,x.z])}a("wood",[2.5,.05,.8],[0,.028,1.15]),a("felt",[2.4,.012,.7],[0,.059,1.15]);for(const u of[-1.22,1.22])a("brass",[.014,.006,.7],[u,.06,1.15]);for(const u of[.77,1.53])a("brass",[2.44,.006,.012],[0,.06,u]);a("paper",[.68,.006,.49],[-.73,.069,1.12],[0,-.1,0]);function c(u,f,h,g,_=0,m=0){const y=[],x=[],b=[],v=(T,A,S)=>{const M=(A?.27:.13)-(S?.016:0);return[Math.cos(T)*M,A?.19:.008,Math.sin(T)*M]},E=(T,A,S,M,w)=>T.push(...A,...S,...w,...S,...M,...w);for(let T=0;T<12;T++){const A=h+g*T/12,S=h+g*(T+1)/12;E(y,v(A,!1,!1),v(A,!0,!1),v(S,!0,!1),v(S,!1,!1)),E(x,v(A,!1,!0),v(S,!1,!0),v(S,!0,!0),v(A,!0,!0)),E(b,v(A,!0,!1),v(A,!0,!0),v(S,!0,!0),v(S,!0,!1))}for(const T of[h,h+g])E(b,v(T,!1,!1),v(T,!1,!0),v(T,!0,!0),v(T,!0,!1));for(const[T,A]of[["glaze",y],["glaze",x],["clay",b]]){const S=new jt;S.setAttribute("position",new Dt(A,3)),S.computeVertexNormals(),s(S,T,[u,.074+_,f],[m,0,0])}}c(-.65,1.13,.1,1.45),c(-.65,1.13,1.61,1.25),c(-.65,1.13,3,1.05),s(new gr(.127,.127,.009,32),"glaze",[-.65,.083,1.13]);function l(u,f,h,g=1){const _=[[-.12,-.07],[.08,-.09],[.14,.03],[.01,.1],[-.11,.04]].map(([y,x])=>[g*(y*Math.cos(h)-x*Math.sin(h)),.014,-g*(y*Math.sin(h)+x*Math.cos(h))]),m=[],p=[];for(let y=0;y<_.length;y++){const x=_[y],b=_[(y+1)%_.length],v=[x[0],0,x[2]],E=[b[0],0,b[2]];m.push(0,.014,0,...x,...b),p.push(...x,...v,...b,...b,...v,...E)}for(const[y,x]of[["glaze",m],["clay",p]]){const b=new jt;b.setAttribute("position",new Dt(x,3)),b.computeVertexNormals(),s(b,y,[u,.07,f])}}l(-.1,1,.2),l(-.02,1.31,1.2,.8),l(-.3,1.29,2.2,.55),a("brass",[.075,.01,.49],[.3,.078,1.12]);for(let u=0;u<19;u++)a("wood",[u%5===0?.043:.022,.002,.002],[.313,.084,.9+u*.024]);a("wood",[.64,.026,.63],[.79,.078,1.15]),a("felt",[.58,.008,.57],[.79,.095,1.15]),o("wood",[.59,.12,1.4],[.59,.12,1.08],.014,.011),o("brass",[.59,.12,1.08],[.59,.12,1.02],.014),o("bristle",[.59,.12,1.02],[.59,.12,.93],.017,.006),o("wood",[.77,.12,1.4],[.77,.12,1.17],.016),o("steel",[.77,.12,1.17],[.77,.12,1.05],.006),a("steel",[.04,.006,.11],[.77,.12,1.005]),o("steel",[.94,.12,1.4],[.91,.12,.96],.006),o("steel",[.94,.12,1.4],[.98,.12,.96],.006),s(new gr(.06,.048,.06,20,1,!0),"paper",[1.08,.127,.98]),s(new gr(.043,.043,.004,20),"wood",[1.08,.12,.98]);for(const[u,f]of r){const h=Dp(f);f.forEach(_=>_.dispose());const g=new lt(h,n[u]);g.name=`Atelier ${u}`,t.add(g)}let d;if(e&&typeof document<"u"){const u=document.createElement("canvas");u.width=768,u.height=112;const f=u.getContext("2d");f.fillStyle="#d4c4a1",f.fillRect(0,0,768,112),f.fillStyle="#45392c",f.textAlign="center",f.font='30px "Noto Serif SC", SimSun, serif',f.fillText("修 复 工 坊",384,44),f.font="14px sans-serif",f.fillText("RESTORATION ATELIER  ·  照片 / 修复 / 建模",384,80),d=new vp(u),d.colorSpace=Rt;const h=new lt(new $i(.7,.102),new Wn({map:d}));h.rotation.x=-Math.PI/2,h.position.set(-.3,.067,1.49),t.add(h)}return{group:t,setActive(u){n.brass.emissiveIntensity=u?.32:.06},dispose(){t.traverse(u=>{u.isMesh&&(u.geometry.dispose(),u.material.dispose())}),d==null||d.dispose(),t.removeFromParent()}}}function pE({canvas:i,camera:e,scene:t,stage:n,position:r=[0,.92,0],colliders:s=[],isAvailable:a=()=>!0,onOpen:o=()=>{},onView:c=()=>!1}){const l=new AbortController,d=(j,ae,oe,Ie={})=>j.addEventListener(ae,oe,{...Ie,signal:l.signal}),u=document.createElement("section");u.className="hologram-entry",u.hidden=!0,u.setAttribute("aria-label","全息文物简介"),u.innerHTML='<small>全息馆藏 <span class="hologram-cycle"></span></small><strong></strong><p></p><button type="button" aria-label="进入当前文物的世界">走进文物的世界 <span>↗</span></button><span class="hologram-key">点击投影 / 按 E 进入</span>';const f=document.createElement("a");f.className="hologram-workbench",f.hidden=!0,f.href=oE(),f.target="_blank",f.rel="noopener",f.setAttribute("aria-label","打开文物修复工作台，新标签页打开"),f.innerHTML='<span class="hologram-workbench-mark" aria-hidden="true"><svg viewBox="0 0 40 40"><path d="M10 29c5 2 10 2 14 0M10 31v-9m16 8v-8M14 21l11-13 5 4-12 12-6 2zM23 10l5 4"/></svg></span><span class="hologram-workbench-copy"><small>修复工坊 · RESTORATION</small><strong>文物修复工作台</strong><span>上传照片 · 修复与建模</span></span><span class="hologram-workbench-action"><span aria-hidden="true">↗</span><small>点击开启</small></span>',document.body.append(u,f);const h=hE(r);t.add(h.group);const g=new L(...r),_=g.clone().add(new L(0,.88,0)),m=uE(r),p=m.anchor,y=new Jn(_,.85),x=new Ue,b=new Ue,v=new L,E=new L,T=new L,A=new Ju,S=new Ki,M=s.map(j=>new nt().setFromCenterAndSize(new L(...j.center),new L(...j.size))).filter(j=>!j.containsPoint(g));let w=!1,R=!1,I=!1,D=!1,F=!1,O=!1,V=null,k={active:null,lastHit:-1/0},J=null,Z=0;function fe(j){if(v.copy(j).project(e),v.z<-1||v.z>1||Math.abs(v.x)>.95||Math.abs(v.y)>.95)return!1;const ae=e.position.distanceTo(j);return S.set(e.position,E.subVectors(j,e.position).normalize()),!M.some(oe=>S.intersectBox(oe,T)&&e.position.distanceTo(T)<ae-.1)}function Le(j=x){return A.setFromCamera(j,e),dE(A.ray,y,m.box)}function Ye(j){if(f.hidden)return!1;const ae=i.getBoundingClientRect(),oe=f.getBoundingClientRect(),Ie=ae.left+(j.x+1)*ae.width/2,ee=ae.top+(1-j.y)*ae.height/2;return Ie>=oe.left&&Ie<=oe.right&&ee>=oe.top&&ee<=oe.bottom}function $e(){return document.pointerLockElement===i||i.dataset.mode==="walk"||matchMedia("(pointer:coarse)").matches}function ze(){if(O)return;if(R=a()&&Math.hypot(e.position.x-g.x,e.position.z-g.z)<4.5&&(fe(_)||fe(p)),!R){I=!1,D=!1,F=!1,w=!1,u.hidden=!0,f.hidden=!0,k={active:null,lastHit:-1/0},h.setActive(!1);return}const j=i.getBoundingClientRect();v.copy(p).project(e);const ae=innerWidth<700;f.style.top=`${ae?Math.min(innerHeight-204,Math.max(innerHeight*.55,j.top+(1-v.y)*j.height/2)):Math.max(135,innerHeight*.3)}px`;const oe=$e()?b:x,Ie=Le(oe);F=Ie==="workbench"||Ye(oe);const ee=$e()?null:!f.hidden&&D?"workbench":!u.hidden&&I?"artifact":null;if(k=fE({available:R,target:F?"workbench":Ie,hovered:ee,active:k.active,lastHit:k.lastHit,now:performance.now()}),w=k.active==="artifact",u.hidden=!w,f.hidden=k.active!=="workbench",u.hidden&&(I=!1),f.hidden&&(D=!1),h.setActive(k.active==="workbench"),f.dataset.aimed=String(F||D),f.querySelector(".hologram-workbench-action small").textContent=matchMedia("(pointer:coarse)").matches?"轻触开启":F?"点击 / E":"点击开启",!w)return;const U=n.getCurrent(),Fe=n.getState();u.dataset.modelId=(U==null?void 0:U.artifactId)||"",u.querySelector("strong").textContent=(U==null?void 0:U.name)||"等待一件器物到来",u.querySelector(".hologram-cycle").textContent=U?`${String(Fe.index+1).padStart(2,"0")} / ${String(Fe.count).padStart(2,"0")}`:"",u.querySelector("p").textContent=U?rf[U.artifactId]||"循着轮廓，走进器物的故事。":"光影正在准备，稍候即可走近。",u.querySelector("button").disabled=!(U!=null&&U.artifactId)}function X(){if(!w||!a())return!1;const j=n.getCurrent();if(!(j!=null&&j.artifactId))return!1;V=j.artifactId;const ae=c(V,{focusPoint:_});return ae&&(u.hidden=!0,f.hidden=!0,I=!1),ae}d(u,"pointerenter",()=>{I=!0}),d(u,"pointerleave",()=>{I=!1}),d(u.querySelector("button"),"click",X),d(f,"pointerenter",()=>{D=!0}),d(f,"pointerleave",()=>{D=!1}),d(f,"click",j=>{if(!R||!a()){j.preventDefault();return}o()});function $(){return!R||!a()?!1:(f.click(),!0)}return d(i,"pointermove",j=>{const ae=i.getBoundingClientRect();x.set((j.clientX-ae.left)/ae.width*2-1,-(j.clientY-ae.top)/ae.height*2+1),(J==null?void 0:J.id)===j.pointerId&&(Z=Math.max(Z,Math.hypot(j.clientX-J.x,j.clientY-J.y)))}),d(i,"pointerdown",j=>{J||(J={id:j.pointerId,x:j.clientX,y:j.clientY},Z=0)}),d(i,"pointerup",j=>{(J==null?void 0:J.id)===j.pointerId&&(J=null)}),d(i,"pointercancel",()=>{J=null,Z=1/0}),d(i,"click",j=>{if(Z>7||!R||!a())return;const ae=i.getBoundingClientRect(),oe=document.pointerLockElement===i?b:new Ue((j.clientX-ae.left)/ae.width*2-1,-(j.clientY-ae.top)/ae.height*2+1),Ie=Le(oe);if(Ie==="workbench"||Ye(oe)){$()&&(j.preventDefault(),j.stopImmediatePropagation());return}Ie==="artifact"&&(w=!0,X()&&(j.preventDefault(),j.stopImmediatePropagation()))},{capture:!0}),d(window,"keydown",j=>{var oe;if(j.code!=="KeyE"||j.repeat||/INPUT|TEXTAREA|SELECT/.test((oe=document.activeElement)==null?void 0:oe.tagName))return;const ae=$e()?b:x;if(R&&(D||Le(ae)==="workbench"||Ye(ae))){$()&&(j.preventDefault(),j.stopImmediatePropagation());return}X()&&(j.preventDefault(),j.stopImmediatePropagation())},{capture:!0}),{update:ze,isOpen:()=>!1,isEngaged:()=>k.active!==null&&R,getState:()=>({engaged:w,nearby:R,workbenchAimed:F,activeTarget:k.active,open:!1,modelId:V,viewing:!1}),dispose(){O=!0,l.abort(),u.remove(),f.remove(),h.dispose()}}}const Uh="COL_central_inscription",mE="Web_R14_Central_front_inscription",Nh=.002;function gE(i,e,{replaceNumberPlates:t=!1}={}){i.updateMatrixWorld(!0);const n=new L,s=e.colliders.filter(l=>l.id==="COL_central_case"||/COL_(Left|Right) exhibit/.test(l.id)||l.id==="COL_Far gallery porcelain").map(l=>({id:l.id,center:l.center,bounds:new nt,glassBounds:new nt}));let a=null;i.traverse(l=>{if(!l.isMesh)return;(l.name===mE||l.name==="Web_R14_Central front inscription")&&(a=l);const u=(Array.isArray(l.material)?l.material:[l.material]).some(h=>h.name.toLowerCase().includes("display glass")),f=l.geometry.attributes.position;for(let h=0;h<f.count;h++)if(n.fromBufferAttribute(f,h).applyMatrix4(l.matrixWorld),!(n.y<.05||n.y>2.5))for(const g of s){const m=g.id==="COL_central_case"?2.1:1.25;Math.abs(n.x-g.center[0])>m||Math.abs(n.z-g.center[2])>m||(g.bounds.expandByPoint(n),u&&g.glassBounds.expandByPoint(n))}});const o=[],c=[];for(const l of e.exhibits??[]){const d=i.getObjectByName(`Web_R17_Exhibit_${l.id}_number_plaque`),u=i.getObjectByName(`Web_R17_Exhibit_${l.id}_number_label`);if(!d||!u)continue;if(t){d.visible=!1,u.visible=!1,c.push(d.name,u.name);const v=e.colliders.findIndex(E=>E.id===`COL_exhibit_plaque_${l.id}`);v!==-1&&e.colliders.splice(v,1);continue}d.visible=!0,u.visible=!0;const f=l.side==="left"?1:-1,h=l.position[0],g=new nt().setFromObject(d,!0),_=f>0?g.min.x:g.max.x,m=h+f*1.154,p=f*Math.max(0,f*(m-_));for(const v of[d,u]){const E=v.getWorldPosition(new L);E.x+=p,v.position.copy(v.parent.worldToLocal(E)),v.updateMatrixWorld(!0),c.push(v.name)}const y=new nt().setFromObject(d,!0);y.union(new nt().setFromObject(u,!0)).expandByScalar(Nh);const x={id:`COL_exhibit_plaque_${l.id}`,kind:"exhibit_number_plaque",center:y.getCenter(new L).toArray(),size:y.getSize(new L).toArray(),rotationY:0,measuredNode:d.name},b=e.colliders.findIndex(v=>v.id===x.id);b===-1?e.colliders.push(x):e.colliders[b]=x,o.push(x)}if(a){const l=new nt().setFromObject(a,!0).expandByScalar(Nh),d={id:Uh,kind:"exhibit_inscription",center:l.getCenter(new L).toArray(),size:l.getSize(new L).toArray(),rotationY:0,measuredNode:a.name},u=e.colliders.findIndex(f=>f.id===Uh);u===-1?e.colliders.push(d):e.colliders[u]=d,o.push(d)}return{modelModified:c.length>0,repairedNodes:c,addedColliders:o,measurements:s.map(l=>({id:l.id,bounds:{min:l.bounds.min.toArray(),max:l.bounds.max.toArray()},glassBounds:l.glassBounds.isEmpty()?null:{min:l.glassBounds.min.toArray(),max:l.glassBounds.max.toArray()}}))}}const So={"speechless-buddha":{name:"默然笺",paper:"#e8eadd",ink:"#435144",accent:"#9a8b59",muted:"#707b68",motto:"不必多言，相逢已好。",motif:"still"},"phoenix-ewer":{name:"青花笺",paper:"#f5f1e7",ink:"#193b66",accent:"#315f97",muted:"#737b87",motto:"一抹青蓝，留住此刻。",motif:"waves"},"bronze-head":{name:"铜影铭",paper:"#123830",ink:"#f2e6c8",accent:"#c2a66c",muted:"#b9c5b4",motto:"铜色无言，目光有声。",motif:"angles"},"cloud-mirror":{name:"照影笺",paper:"#f0e0c6",ink:"#634a37",accent:"#9c703f",muted:"#887668",motto:"照见流光，也照见相逢。",motif:"arcs"},"liquan-bodhisattva":{name:"静观笺",paper:"#eeeae2",ink:"#514e48",accent:"#b4a078",muted:"#848075",motto:"静观一瞬，心有回响。",motif:"halo"},"longquan-figure":{name:"青瓷笺",paper:"#dfece1",ink:"#2b5647",accent:"#5d8b73",muted:"#6d8274",motto:"梅子青里，时间温润。",motif:"contours"},"pipa-figurine":{name:"遗音笺",paper:"#4a2932",ink:"#f5e4d1",accent:"#d6b581",muted:"#cbb8aa",motto:"弦声虽远，余韵犹在。",motif:"strings"}};function bE(i){return{...Object.hasOwn(So,i)?So[i]:So["phoenix-ewer"]}}function _E(i){return Object.hasOwn(So,i)?`/images/checkin/portraits/${encodeURIComponent(i)}.webp`:null}function fl(i,e,t,n,r){i.save(),i.translate(e,t),i.rotate(n),i.scale(r,r),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-92,110,-100,-76,0,-210),i.bezierCurveTo(100,-76,92,110,0,210),i.stroke(),i.beginPath(),i.moveTo(0,210),i.bezierCurveTo(-8,70,6,-100,0,-210);for(let s=0;s<7;s++){const a=-135+s*45;i.moveTo(0,a+36),i.quadraticCurveTo(-42,a+20,-62,a-8),i.moveTo(0,a+36),i.quadraticCurveTo(42,a+20,62,a-8)}i.stroke(),i.restore()}function xE(i,e,t,n){i.save(),i.translate(e,t),i.scale(n/400,n/400);for(let r=-4;r<=4;r++)i.save(),i.rotate(r*.25),i.beginPath(),i.moveTo(0,72),i.bezierCurveTo(-60,8,-48,-64,0,-112),i.bezierCurveTo(48,-64,60,8,0,72),i.stroke(),i.restore();i.restore()}function Jp(i,e){i.strokeStyle=e.accent,i.globalAlpha=.3,i.lineWidth=3,fl(i,152,686,-.26,1.2),fl(i,900,696,.28,1.25),fl(i,1012,690,.45,1.05),i.globalAlpha=.25;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(-30,925+t*15),i.bezierCurveTo(200,840+t*14,288,1040+t*12,530,953+t*13),i.bezierCurveTo(760,860+t*12,910,1030+t*12,1120,925+t*15),i.stroke()}function vE(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.lineWidth=3;for(let t=0;t<3;t++){const n=t*36;i.beginPath(),i.moveTo(540,385+n),i.lineTo(958-n,555+n/3),i.lineTo(958-n,907-n/3),i.lineTo(540,1045-n),i.lineTo(122+n,907-n/3),i.lineTo(122+n,555+n/3),i.closePath(),i.globalAlpha=t===0?.07:.03,i.fill(),i.globalAlpha=.32-t*.06,i.stroke()}i.globalAlpha=.34;for(let t=0;t<22;t++){const n=t*Math.PI*2/22;i.beginPath(),i.moveTo(540+Math.cos(n)*305,713+Math.sin(n)*305),i.lineTo(540+Math.cos(n)*330,713+Math.sin(n)*330),i.stroke()}for(const t of[78,1002])for(let n=440;n<1020;n+=88)i.beginPath(),i.moveTo(t,n),i.lineTo(t+28,n),i.lineTo(t+28,n+50),i.lineTo(t+10,n+50),i.lineTo(t+10,n+22),i.stroke()}function yE(i,e){i.strokeStyle=e.accent,i.lineWidth=3,i.globalAlpha=.4;for(const t of[230,265,290,310])i.beginPath(),i.arc(540,710,t,0,Math.PI*2),i.stroke();i.globalAlpha=.32;for(let t=0;t<8;t++){const n=t*Math.PI/4;i.beginPath(),i.arc(540+Math.cos(n)*208,710+Math.sin(n)*208,83,0,Math.PI*2),i.stroke()}i.lineWidth=2,i.globalAlpha=.22;for(let t=0;t<48;t++){const n=t*Math.PI/24;i.beginPath(),i.moveTo(540+Math.cos(n)*295,710+Math.sin(n)*295),i.lineTo(540+Math.cos(n)*305,710+Math.sin(n)*305),i.stroke()}}function ME(i,e){i.strokeStyle=e.accent,i.lineWidth=3;for(let t=0;t<4;t++){const n=194+t*27;i.globalAlpha=.36-t*.045,i.beginPath(),i.moveTo(540-n,1040),i.lineTo(540-n,690),i.arc(540,690,n,Math.PI,Math.PI*2),i.lineTo(540+n,1040),i.stroke()}i.globalAlpha=.3,xE(i,540,970,710),i.lineWidth=2,i.globalAlpha=.16;for(let t=0;t<7;t++)i.beginPath(),i.moveTo(70+t*13,410),i.lineTo(70+t*13,985),i.moveTo(1010-t*13,410),i.lineTo(1010-t*13,985),i.stroke()}function SE(i,e){i.fillStyle=e.accent,i.strokeStyle=e.accent;for(let t=0;t<6;t++){const n=t*62;i.beginPath(),i.moveTo(-80,665+n),i.bezierCurveTo(130,330+n,235,940+n,475,615+n),i.bezierCurveTo(680,345+n,870,810+n,1160,500+n),i.lineTo(1160,1090),i.lineTo(-80,1090),i.closePath(),i.globalAlpha=.045+t*.012,i.fill(),i.globalAlpha=.21,i.lineWidth=2,i.stroke()}i.strokeStyle="#b69965",i.globalAlpha=.42,i.beginPath(),i.moveTo(998,395),i.lineTo(949,495),i.lineTo(976,580),i.lineTo(906,650),i.lineTo(925,754),i.lineTo(860,843),i.lineTo(883,953),i.stroke()}function EE(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent,i.globalAlpha=.1,i.beginPath(),i.arc(832,574,170,0,Math.PI*2),i.fill(),i.globalAlpha=.44,i.lineWidth=2,i.stroke();for(let t=0;t<4;t++){const n=113+t*25;i.beginPath(),i.moveTo(n,378),i.bezierCurveTo(n+250,560,n-70,800,n+200,1030),i.stroke()}i.globalAlpha=.22;for(let t=0;t<6;t++)i.beginPath(),i.moveTo(805+t*18,700),i.bezierCurveTo(610+t*23,830,978+t*23,913,870+t*21,1040),i.stroke()}function TE(i,e){i.strokeStyle=e.accent,i.fillStyle=e.accent;for(let t=0;t<3;t++)i.beginPath(),i.arc(540,695,245+t*30,0,Math.PI*2),i.globalAlpha=t===0?.085:.035,i.fill(),i.globalAlpha=.3-t*.055,i.lineWidth=t===0?3:2,i.stroke();i.globalAlpha=.46;for(let t=0;t<3;t++)i.beginPath(),i.arc(864+t*35,429,6,0,Math.PI*2),i.fill();i.lineWidth=5;for(const t of[914,935])i.beginPath(),i.moveTo(t,856),i.lineTo(t+5,896),i.stroke();i.globalAlpha=.24,i.lineWidth=2;for(let t=0;t<4;t++)i.beginPath(),i.moveTo(55,926+t*19),i.bezierCurveTo(110,894+t*19,175,961+t*19,246,924+t*19),i.stroke()}const wE={waves:Jp,angles:vE,arcs:yE,halo:ME,contours:SE,strings:EE,still:TE};function AE(i,e){i.save();const t=i.createRadialGradient(1010,545,20,540,690,1050);t.addColorStop(0,e.accent+"38"),t.addColorStop(.62,e.accent+"0c"),t.addColorStop(1,e.accent+"00"),i.fillStyle=t,i.fillRect(0,0,1080,1440),i.fillStyle=e.ink,i.globalAlpha=.027;for(let r=0;r<1600;r++)i.fillRect(r*73%1080,r*137%1440,1+r%3*.35,.8);i.globalAlpha=1,i.beginPath(),i.rect(44,378,992,650),i.clip(),(wE[e.motif]||Jp)(i,e);const n=i.createRadialGradient(540,710,80,540,710,345);n.addColorStop(0,e.paper+"e6"),n.addColorStop(.65,e.paper+"99"),n.addColorStop(1,e.paper+"00"),i.globalAlpha=1,i.fillStyle=n,i.fillRect(44,378,992,650),i.restore()}function RE(i){const e=document.createElement("canvas");return e.width=e.height=i.size,e.getContext("2d").putImageData(new ImageData(i.pixels,i.size,i.size),0,0),e}function Fh(i,e,t,n,r,s){let a="";for(const o of e)i.measureText(a+o).width>r&&(i.fillText(a,t,n),a="",n+=s),a+=o;i.fillText(a,t,n)}function CE({scene:i,camera:e,canvas:t,assignments:n,onView:r=()=>{},isAvailable:s=()=>!0,onOpen:a=()=>{},onClose:o=()=>{},location:c=globalThis.location,maxDistance:l=4.8}){const d=new gn;d.name="ExhibitLabels",i.add(d);const u=new $i(1.24,.3),f=new L,h=new L,g=new L,_=new L,m=new AbortController,p=document.createElement("dialog");p.className="exhibit-label-dialog",p.setAttribute("aria-label","文物高清二维码"),p.innerHTML='<canvas class="exhibit-card-background" aria-hidden="true"></canvas><button class="exhibit-label-close" type="button" aria-label="关闭二维码卡片">×</button><div class="exhibit-card-content"><p class="exhibit-label-kicker"></p><h2></h2><p class="exhibit-card-motto"></p><div class="exhibit-card-portrait"><img alt=""><span class="exhibit-card-image-fallback" hidden>文物影像暂未载入</span></div><div class="exhibit-card-rule"><span>一器 · 一世界</span><span class="exhibit-card-theme-name"></span></div><div class="exhibit-label-qr"></div><p class="exhibit-label-scan">高清二维码 · 扫码查看文物</p><p class="exhibit-label-network"></p><button class="exhibit-label-view" type="button">走进文物的世界 ↗</button></div>',document.body.append(p);const y=p.querySelector(".exhibit-card-portrait img");y.addEventListener("error",()=>{y.hidden=!0,p.querySelector(".exhibit-card-image-fallback").hidden=!1},{signal:m.signal});const x=p.querySelector(".exhibit-card-background");x.width=540,x.height=720;let b=null,v=!1;const E=n.map((M,w)=>{const R=jS(M.artifactId,c),I=RE(KS(R)),D=document.createElement("canvas");D.width=1024,D.height=248;const F=D.getContext("2d");F.fillStyle="#f5f0e4",F.fillRect(0,0,1024,248),F.strokeStyle="#ad894c",F.lineWidth=3,F.strokeRect(14,14,996,220),F.fillStyle="#826638",F.font="20px sans-serif",F.fillText(`${String(w+1).padStart(2,"0")}  /  重器新生 · 馆藏`,36,44),F.fillStyle="#242723",F.font='bold 31px "Microsoft YaHei", sans-serif',Fh(F,M.name,36,94,700,40),F.font='22px "Microsoft YaHei", sans-serif',Fh(F,rf[M.artifactId]??"",36,149,675,29),F.imageSmoothingEnabled=!1,F.drawImage(I,797,30,178,178),F.fillStyle="#826638",F.font='16px "Microsoft YaHei", sans-serif',F.textAlign="center",F.fillText("点击查看高清二维码",886,231);const O=new vp(D);O.colorSpace=Rt;const V=new Wn({map:O,toneMapped:!1}),k=new lt(u,V),J=JS(M);k.position.fromArray(J.position),k.rotation.order="YXZ",k.rotation.set(J.rotationX,J.rotationY,0),k.userData.cabinetId=M.cabinetId,k.userData.artifactId=M.artifactId,k.name=`ExhibitLabel_${M.artifactId}`,d.add(k);const Z=document.createElement("button");Z.type="button",Z.className="exhibit-qr-hit",Z.setAttribute("aria-label",`查看${M.name}高清二维码`),Z.setAttribute("aria-haspopup","dialog"),Z.hidden=!0,document.body.append(Z);const fe={assignment:M,url:R,qr:I,mesh:k,material:V,texture:O,button:Z,index:w};return Z.addEventListener("click",Le=>{Le.stopPropagation(),s()&&T(fe)},{signal:m.signal}),fe});function T(M){b=M;const w=bE(M.assignment.artifactId);p.dataset.artifactId=M.assignment.artifactId;for(const I of["paper","ink","accent","muted"])p.style.setProperty(`--card-${I}`,w[I]);const R=x.getContext("2d");R.clearRect(0,0,x.width,x.height),R.save(),R.scale(.5,.5),AE(R,w),R.restore(),y.hidden=!1,p.querySelector(".exhibit-card-image-fallback").hidden=!0,y.alt=M.assignment.name,y.src=_E(M.assignment.artifactId),p.querySelector(".exhibit-label-kicker").textContent=`${String(M.index+1).padStart(2,"0")} / 重器新生 · 文物观览卡`,p.querySelector("h2").textContent=M.assignment.name,p.querySelector(".exhibit-card-motto").textContent=w.motto,p.querySelector(".exhibit-card-theme-name").textContent=w.name,p.querySelector(".exhibit-label-qr").replaceChildren(M.qr),p.querySelector(".exhibit-label-network").textContent=XS(M.url)?"当前是本机地址，手机无法直接扫码。请用电脑的局域网地址进入展厅，并确保手机与电脑连接同一网络。":"手机与电脑连接同一网络即可扫码浏览。",E.forEach(I=>{I.button.hidden=!0}),a(M.assignment),p.showModal()}function A(){!b||p.open||(b=null,o())}function S(){p.open&&p.close(),A()}return p.querySelector(".exhibit-label-close").addEventListener("click",S,{signal:m.signal}),p.addEventListener("close",A,{signal:m.signal}),p.querySelector(".exhibit-label-view").addEventListener("click",()=>{const M=b==null?void 0:b.assignment;S(),M&&r(M.artifactId)},{signal:m.signal}),{group:d,records:E,openLabel(M){if(v||p.open||!s())return!1;const w=E.find(R=>R.assignment.artifactId===M);return w?(T(w),!0):!1},get isOpen(){return p.open},close:S,update(){if(v)return;const M=t.getBoundingClientRect();let w=!1;for(const R of E){const{mesh:I,button:D}=R;I.getWorldPosition(f),h.subVectors(e.position,f),g.set(0,0,1).applyQuaternion(I.quaternion);const F=!p.open&&s()&&h.length()<=l&&h.dot(g)>0;if(_.set((886/1024-.5)*1.24,(.5-128/248)*.3,0),I.localToWorld(_),f.copy(_).project(e),D.hidden=!F||f.z<-1||f.z>1||Math.abs(f.x)>.84||Math.abs(f.y)>.85,!D.hidden){w=!0;const O=e.position.distanceTo(_),V=M.height/(2*Math.tan(e.fov*Math.PI/360)*O),k=Math.max(36,Math.min(150,.23*V));D.style.width=`${k}px`,D.style.height=`${Math.max(36,k*.85)}px`,D.style.left=`${M.left+(f.x+1)*M.width/2}px`,D.style.top=`${M.top+(1-f.y)*M.height/2}px`}}document.body.classList.toggle("has-readable-label",w)},dispose(){if(!v){v=!0,S(),m.abort(),p.remove(),document.body.classList.remove("has-readable-label");for(const M of E)M.button.remove(),M.texture.dispose(),M.material.dispose();u.dispose(),d.removeFromParent()}}}}const Ae=i=>document.querySelector(i),Pt=new hp;Pt.background=new Be("#101611");const dt=new xy({antialias:!0,powerPreference:"high-performance"});dt.setPixelRatio(Math.min(devicePixelRatio,1.25));dt.setSize(innerWidth,innerHeight);dt.outputColorSpace=Rt;dt.toneMapping=jh;dt.toneMappingExposure=1.1;Ae("#canvas").appendChild(dt.domElement);dt.domElement.tabIndex=0;const ye=new Gt(58,innerWidth/innerHeight,.05,140);ye.position.set(0,1.7,7.7);ye.rotation.order="YXZ";const $p=new lu(dt),Zp=new eM;Pt.environment=$p.fromScene(Zp,.02).texture;Zp.dispose();$p.dispose();Pt.environmentIntensity=.48;Pt.add(new xb(14149106,1514020,.85));const Te=dt.domElement;Te.setAttribute("aria-label","可交互数字展厅");const mt={reticle:Ae("#reticle"),aim:Ae("#aimHint"),story:Ae("#story"),guide:Ae("#guide"),walk:Ae("#walk")},Qp=[];let Ln=null,ji=!1,_r=null,sa=!1,In=!1,ii=null,Ei=null,ma=null,cn=null,Bt=null,vt=null,Ws=[],Oh=[],zt=null,pt=null,Do=null,Bh=null,Eo=!1;const Su=new AbortController;function Qt(){return!!(Bt!=null&&Bt.isOpen()||pt!=null&&pt.isOpen()||vt!=null&&vt.isOpen)}async function PE(){if(!(Eo||!zt||pt!=null&&pt.isEngaged()&&zt.getCurrent())){Eo=!0;try{const i=await lE({signal:Su.signal});if(Su.signal.aborted)return;const e=JSON.stringify(i);e!==Bh&&(!(pt!=null&&pt.isEngaged())||!zt.getCurrent())&&(zt.setModels(i),Bh=e),Do=null}catch(i){i.name!=="AbortError"&&(Do=i.message)}finally{Eo=!1}}}const Eu=[],dl=new Ju,hl=new Ue,em=new vn,Tu=new L(0,1.55,8.94),Fi=new L;let sn,xt,Wt=!1,tm=0,yi=!1,xe="paused",Fn=!1,ai=matchMedia("(prefers-reduced-motion: reduce)").matches,xr=[],gs=null,aa=null,Bi=0,wu=0,ln=null,Ti=null,kh=!1,zo=!1,nm=Ae("#edgeTurn").checked;const LE=lS(()=>Te.requestPointerLock());let bs=performance.now(),pl=0,ml=0,Mi=!1,Ks=0,qn=si.speed,pn=0,To=0,Js=0,gl=0,bl=0;const ts=new Map,rn=new Set,ga=ye.position.clone(),zh=new L,Oi=new L,Au=new L(3.7,1.35,7.6),_l=new L,Hh=new Ki,Vh=new vn,Gh=new vn,Hi=[],$s=[],Zs=[];let Zr=Math.min(devicePixelRatio,1.25),qs=null,$r=0;const Uo={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function Ho(){Bi=ye.rotation.y,wu=ye.rotation.x}function sf(){const i=Ti;Ti=null,Gp(Te,i)}function af(){ye.position.y-=pn,pn=0,Js=0,rn.clear();for(const[i,e]of ts)Gp(i,{id:e});ts.clear(),ln=null,sf(),sn==null||sn.stop(),ga.copy(ye.position),Ho()}function va(){const i=document.pointerLockElement===Te;Te.dataset.lookMode=xe==="walk"&&Fn?i?"pointer-lock":zo?"right-drag":"mouse-follow":"paused",mt.walk.textContent=xe==="walk"&&Fn?i?"暂停环顾 · Esc":"点击锁定鼠标 · 连续转向":"继续鼠标环顾",Ae("#walkHint").textContent=i?"WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情":"点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停"}function ut(i,e){i!=="story"&&(aa=null),i!=="guide"&&(xr=[],gs=null),i!=="observe"&&(Ei=null),i!=="guide"&&(ma=null),xe=i,Fn=cS(i,e,matchMedia("(pointer:coarse)").matches),af(),i!=="walk"&&document.pointerLockElement===Te&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",Fn),document.body.classList.toggle("free-visit",i==="walk"),document.querySelector("footer").inert=i==="walk"||i==="entering",Ae("#caseChoices").inert=i==="walk"||i==="entering",Te.dataset.mode=xe,va(),mt.story.hidden=i!=="story"}let Ru;function ba(i){clearTimeout(Ru),Ae("#status").textContent=i,Ae("#status").classList.add("show"),Ru=setTimeout(()=>Ae("#status").classList.remove("show"),2600)}function ya(){Wt&&(yi=!0,Ae("#intro").classList.add("dismissed"),Ae("#intro").inert=!0,Te.focus())}function of(i){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=i;document.body.classList.toggle("entering-gallery",i)}function IE(){ya(),ut("entering"),In=!1,sa=!1,cn=null,Ln.reset(),Ln.target=1,ii=new bS(xt.entrySequence),ye.position.fromArray(xt.entrySequence.outside),ye.lookAt(new L(...xt.entrySequence.lookAt)),Ho(),of(!0),Ae("#caseChoices").hidden=!0,Ae("#location").textContent="推门入馆 · 正在打开玻璃门",Te.dataset.entryPhase="opening",matchMedia("(pointer:coarse)").matches||Vo()}async function im(){if(!(!Wt||Qt()||xe==="story"||xe==="entering"||mt.guide.open)){if(!In){IE();return}if(xe==="walk"&&Fn&&document.pointerLockElement===Te){ut("paused");return}ya(),ut("walk",!matchMedia("(pointer:coarse)").matches),Fn&&await Vo()}}async function Vo(){if(!(document.pointerLockElement===Te||!["walk","entering"].includes(xe)||Qt()||mt.guide.open)){try{await LE()}catch(i){Te.dataset.lockError=i.name||"Unavailable",["walk","entering"].includes(xe)&&!Qt()&&ba("鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身")}va()}}function DE(){sa=!1,ut("paused"),yi=!1,In=!1,ii=null,cn=null,of(!1),Ae("#caseChoices").hidden=!0,Ln.reset(),ye.position.fromArray(Uo.entrance.p),ye.quaternion.copy(em),ga.copy(ye.position),Ho(),To=0,qn=si.speed,sn.speed=qn,Ae("#speed").value=qn,Ae("#speedValue").textContent=qn.toFixed(1)+" 米/秒",Mi=!1,ji=!1,Ks=0,Yn.hidden=!0,_n.hidden=!0,mt.aim.textContent="",mt.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),Ae("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view==="entrance")),clearTimeout(Ru),Ae("#status").classList.remove("show"),mt.guide.open&&mt.guide.close(),Ae("#intro").inert=!1,Ae("#intro").classList.remove("dismissed"),Ae("#enter").focus({preventScroll:!0})}function rm(){if(xe==="entering"){rn.clear(),ln=null,sf();return}if(xe==="story"){af();return}ut("paused")}function sm(i){if(!Wt||Qt()||xe==="entering")return;if(i==="cases"){Ae("#caseChoices").hidden=!1,Go(Number.isInteger(cn==null?void 0:cn.id)?cn.id:1);return}if(i==="hero"||i==="story"){om(xt.observationTargets[i],i);return}Ae("#caseChoices").hidden=!0,cn=null,ma=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),ya(),ut("guide");const e=Uo[i];if(gs=new L(...e.t),ai)ye.position.fromArray(e.p),ye.lookAt(gs),ut("paused");else{const t=Vp(ye.position.toArray(),e.p,xt);if(!t.length){ba("请先离开展柜边缘，再选择参观点"),ut("paused");return}xr=t.map(n=>new L(...n))}Ae("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===i))}function am(i){ut("observe"),cn=i,Ei=new gS(i,{reduced:ai}),ye.position.copy(Ei.views.left),ye.lookAt(Ei.views.target),Te.dataset.selectedExhibit=String(i.id),Te.dataset.observationPhase="left",Ae("#location").textContent=i.label+" · 左侧观察"}function Go(i){if(!Wt||Qt()||xe==="entering")return;const e=xt.exhibits.find(t=>t.id===Number(i));e&&om(e,"cases")}function om(i,e){if(!Wt||Qt()||xe==="entering")return;ya(),ut("guide"),cn=i,Ae("#caseChoices").hidden=e!=="cases";const t=Wp(i);if(gs=t.target,document.querySelectorAll("[data-view]").forEach(r=>r.classList.toggle("active",r.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(r=>{const s=Number(r.dataset.exhibit)===i.id;r.classList.toggle("active",s),r.setAttribute("aria-pressed",String(s))}),Ae("#location").textContent=i.label+" · 前往左侧观察位",Te.dataset.selectedExhibit=String(i.id),Te.dataset.observationPhase="approach",ai){am(i);return}const n=Vp(ye.position.toArray(),t.left.toArray(),xt);if(!n.length){ba("请先离开展柜边缘，再选择观察位置"),ut("paused");return}ma=i,xr=n.map(r=>new L(...r))}Ae("#enter").onclick=im;mt.walk.onclick=im;document.querySelectorAll("[data-view]").forEach(i=>i.onclick=()=>sm(i.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(i=>i.onclick=()=>Go(i.dataset.exhibit));Ae("#help").onclick=()=>{Qt()||xe==="story"||xe==="entering"||(ut("paused"),mt.guide.showModal())};Ae("#closeHelp").onclick=()=>mt.guide.close();function cm(){Ae("#motion").setAttribute("aria-pressed",String(ai)),Ae("#motion").textContent=ai?"动态已减弱":"减弱动态"}cm();Ae("#motion").onclick=()=>{ai=!ai,cm()};Ae("#speed").min=si.minSpeed;Ae("#speed").max=si.maxSpeed;Ae("#speed").step=si.step;Ae("#speed").value=qn;Ae("#speedValue").textContent=qn.toFixed(1)+" 米/秒";Ae("#speed").oninput=i=>{const e=Number(i.target.value);qn=Un.clamp(Number.isFinite(e)?e:si.speed,si.minSpeed,si.maxSpeed),i.target.value=qn,sn&&(sn.speed=qn),Ae("#speedValue").textContent=qn.toFixed(1)+" 米/秒"};Ae("#edgeTurn").onchange=i=>{nm=i.target.checked,ln=null};const Yn=document.createElement("button");Yn.className="hotspot";Yn.textContent="＋ 开启故事";Yn.hidden=!0;Ae("#hotspots").appendChild(Yn);function cf(){if(xe==="story"||mt.guide.open||!Wt)return;const i={p:ye.position.clone(),q:ye.quaternion.clone()};i.p.y-=pn,ut("story"),aa=i}Yn.onclick=cf;const _n=document.createElement("button");_n.className="hotspot";_n.id="doorHotspot";_n.textContent="推开玻璃门";_n.hidden=!0;Ae("#hotspots").appendChild(_n);function lf(){!Wt||!In||xe==="story"||xe==="entering"||mt.guide.open||Ln.toggle()}_n.onclick=lf;function uf(){xe==="story"&&(aa&&(ye.position.copy(aa.p),pn=0,ye.quaternion.copy(aa.q)),ut("paused"),Te.focus())}Ae("#closeStory").onclick=uf;Ae("#returnStory").onclick=uf;function lm(i,e){Qt()||uS(ye,i,e)&&Ho()}document.addEventListener("mousemove",i=>{if(xe!=="walk"||!Fn||Qt()||mt.guide.open)return;const e=document.pointerLockElement===Te;if(!e&&zo&&!(i.buttons&2)){ln=null;return}const t=hS(ln,i,performance.now(),e);lm(t.dx,t.dy),ln=t.point});window.addEventListener("mouseout",i=>{i.relatedTarget||(ln=null)});const Ts=mS();Te.addEventListener("pointerdown",i=>Ts.down(i),!0);Te.addEventListener("pointermove",i=>{document.pointerLockElement!==Te&&Ts.move(i)},!0);Te.addEventListener("pointerup",i=>Ts.end(i),!0);Te.addEventListener("pointercancel",i=>Ts.end(i,!0),!0);Te.addEventListener("lostpointercapture",i=>{i.pointerType==="touch"&&Ts.end(i,!0)},!0);Te.addEventListener("click",i=>{Ts.click(document.pointerLockElement===Te)&&(i.preventDefault(),i.stopImmediatePropagation())},!0);Te.addEventListener("pointerdown",i=>{!Wt||Qt()||!In||xe==="story"||xe==="entering"||mt.guide.open||(Te.focus(),i.pointerType==="mouse"&&i.button===2&&document.pointerLockElement!==Te?((xe!=="walk"||!Fn)&&ut("walk",!0),zo=!0,ln={x:i.clientX,y:i.clientY},va()):i.pointerType==="mouse"&&i.button===0&&i.isTrusted&&xe==="walk"&&Fn&&Vo(),i.pointerType==="touch"&&!Ti&&(xe!=="walk"&&ut("walk",!1),Ti={id:i.pointerId,x:i.clientX,y:i.clientY},Te.setPointerCapture(i.pointerId)))});Te.addEventListener("contextmenu",i=>{xe==="walk"&&i.preventDefault()});window.addEventListener("pointerup",i=>{i.pointerType==="mouse"&&i.button===2&&(ln=null)});Te.addEventListener("pointermove",i=>{if(!Ti||xe!=="walk"||Qt())return;const e=dS(Ti,i);e&&(lm(e.dx,e.dy),Ti=e.point)});for(const i of["pointerup","pointercancel","lostpointercapture"])Te.addEventListener(i,e=>{pS(Ti,e)&&(Ti=null)});Te.addEventListener("click",i=>{if(!Wt||Qt()||xe==="entering"||mt.guide.open)return;if(xe==="walk"&&Mi){cf();return}if((xe==="walk"||xe==="paused")&&ji){lf();return}if(document.pointerLockElement===Te)hl.set(0,0);else{const n=Te.getBoundingClientRect();hl.set((i.clientX-n.left)/n.width*2-1,-(i.clientY-n.top)/n.height*2+1)}dl.setFromCamera(hl,ye);const e=vt&&dl.intersectObjects(vt.records.map(n=>n.mesh),!1)[0];if(e&&e.distance<4.8&&YS(e.uv)&&vt.openLabel(e.object.userData.artifactId)){i.preventDefault(),i.stopImmediatePropagation();return}const t=dl.intersectObjects(Eu,!1)[0];t&&t.distance<12&&Go(t.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const i=document.pointerLockElement===Te;if(document.body.classList.toggle("walking",i),Te.dataset.locked=String(i),i&&!["walk","entering"].includes(xe)){document.exitPointerLock();return}ln=null,sf(),i?(zo=!1,delete Te.dataset.lockError):kh&&xe==="walk"&&ut("paused"),kh=i,va()});document.addEventListener("pointerlockerror",()=>{ln=null,va()});const Wh=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",i=>{if(!Qt()){if(xe==="entering"){(Wh.has(i.code)||i.key==="Escape")&&i.preventDefault();return}if(i.key==="Escape"){xe==="story"?uf():ut("paused");return}if(!(mt.guide.open||xe==="story")){if(i.code==="KeyE"&&Mi){cf();return}if(i.code==="KeyE"&&ji){i.repeat||lf();return}document.activeElement!==Te||!yi||!In||!Wh.has(i.code)||(i.preventDefault(),xe!=="walk"&&(ut("walk"),Fn&&Vo()),rn.add(i.code))}}});window.addEventListener("keyup",i=>rn.delete(i.code));window.addEventListener("blur",rm);document.addEventListener("visibilitychange",()=>{document.hidden&&rm(),bs=performance.now()});for(const i of document.querySelectorAll("[data-move]")){i.addEventListener("pointerdown",e=>{!Wt||Qt()||!In||mt.guide.open||xe==="story"||xe==="entering"||ts.has(i)||(e.preventDefault(),ya(),xe!=="walk"&&ut("walk"),ts.set(i,e.pointerId),rn.add(i.dataset.move),i.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,t=>{ts.get(i)===t.pointerId&&(ts.delete(i),rn.delete(i.dataset.move))})}function UE(i){Oi.copy(Au).project(ye),_l.subVectors(Au,ye.position);const e=_l.length();let t=xt.storyEnabled!==!1&&yi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!mt.guide.open&&e<3.5&&Oi.z<1&&Math.abs(Oi.x)<1&&Math.abs(Oi.y)<1;if(t){Hh.set(ye.position,_l.normalize());const s=sn.bvh.raycastFirst(Hh,an);s&&s.distance<e-.5&&(t=!1)}Yn.hidden=!t;let n=t&&Math.hypot(Oi.x*innerWidth,Oi.y*innerHeight)<(Mi?110:80);n?Ks||(Ks=i):Ks=0,Mi=n&&i-Ks>100,Fi.copy(Tu).project(ye);const r=In&&yi&&xe!=="story"&&xe!=="guide"&&xe!=="entering"&&xe!=="observe"&&!mt.guide.open&&ye.position.distanceTo(Tu)<4.2&&Fi.z<1&&Math.abs(Fi.x)<.95&&Math.abs(Fi.y)<.95;ji=r&&Math.hypot(Fi.x*innerWidth,Fi.y*innerHeight)<140,_n.hidden=!r,r&&(_n.textContent=Ln.target?"合上玻璃门":"推开玻璃门",_n.style.left=`${(Fi.x*.5+.5)*innerWidth}px`,_n.style.top=`${(-Fi.y*.5+.5)*innerHeight+65}px`),mt.reticle.classList.toggle("target",Mi||ji),mt.aim.textContent=Mi?"点击 / E · 开启故事":ji?`点击 / E · ${Ln.target?"合上":"推开"}玻璃门`:"",t&&!Fn&&(Yn.style.left=`${(Oi.x*.5+.5)*innerWidth}px`,Yn.style.top=`${(-Oi.y*.5+.5)*innerHeight}px`)}function mo(i,e){if(!i.length)return 0;const t=[...i].sort((n,r)=>n-r);return t[Math.floor((t.length-1)*e)]}function um(){return{frameP50:mo(Hi,.5),frameP95:mo(Hi,.95),updateP95:mo($s,.95),renderP95:mo(Zs,.95),sampleCount:Hi.length,resolution:Zr}}function NE(i){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=i[e];t&&(t.magFilter=Jt,t.minFilter=Vn,t.generateMipmaps=!0,t.anisotropy=Math.min(8,dt.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function FE(){try{xt=await(await fetch("/scene_manifest.json")).json();for(const[a,o]of Object.entries(xt.views))Object.assign(Uo[a],o);ye.position.fromArray(Uo.entrance.p);const i=xt.anchors.find(a=>a.id==="HOTSPOT_Story");Au.fromArray(i.position),Tu.fromArray(xt.layout.doorPoint);const e=await new Zu().loadAsync("/"+xt.model,a=>{a.total&&(Ae("#load").textContent=`载入模型 ${Math.round(a.loaded/a.total*100)}%`)}),t=gE(e.scene,xt,{replaceNumberPlates:!0});sn=new rS(xt.colliders),e.scene.traverse(a=>{var c;if(!a.isMesh)return;a.visible&&a.userData.exhibitId&&Eu.push(a),(c=a.material)!=null&&c.name.startsWith("Baked diffuse")&&(a.material=new Wn({map:a.material.emissiveMap,color:a.material.emissive.clone().multiplyScalar(.79)}));const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l.transparent||(l.side=Dn),l.name.toLowerCase().includes("glass")&&(l.transmission=0,l.forceSinglePass=!0,l.transparent=!0,l.opacity=.055,l.depthWrite=!1,l.roughness=.035,l.envMapIntensity=.45,l.color.set(13493742),l.needsUpdate=!0),l.name.includes("Idle screen")&&(l.color.set(5400924),l.emissive.set(7440239),l.emissiveIntensity=.35,Qp.push(l)),NE(l)}),Pt.add(e.scene),Ln=new aS(e.scene),_r=oS(Pt,dt,e.scene),Pt.background=new Be(463389);for(const a of xt.lights.filter(o=>o.type==="SPOT"&&o.name.includes("Gallery")).slice(0,4)){const o=new wp(new Be(...a.color),10,8,Math.PI/5,.6,2);o.position.fromArray(a.position),o.target.position.set(a.position[0],.5,a.position[2]),Pt.add(o,o.target)}Wt=!0,tm=performance.now(),em.copy(ye.quaternion),ga.copy(ye.position),document.body.dataset.ready="true",Te.dataset.collision="BVH capsule",Ae("#walk").disabled=!1,Ae("#enter").disabled=!1,Ae("#enter").textContent="进入展厅 →",Ae("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:dt,scene:Pt,camera:ye,navigate:sm,selectExhibit:Go,door:Ln,getVisitState:()=>({entered:yi,visitReady:In,mode:xe,entryPhase:ii==null?void 0:ii.phase,observationPhase:Ei==null?void 0:Ei.phase,selectedExhibit:cn==null?void 0:cn.id}),getMetrics:()=>({...um(),drawCalls:dt.info.render.calls,triangles:dt.info.render.triangles,position:ye.position.toArray()})},Bt=QS({canvas:Te,camera:ye,scene:Pt,assignments:ss,captureFrame:()=>(dt.render(Pt,ye),Te),getMode:()=>xe,isEntered:()=>yi,isBlocked:()=>(vt==null?void 0:vt.isOpen)||(pt==null?void 0:pt.isEngaged())||!Wt||xe==="entering"||xe==="story"||mt.guide.open||ji||Mi,colliders:xt.colliders,getPriorityTargets:()=>[...Eu,...(vt==null?void 0:vt.records.map(a=>a.mesh))||[]],onOpen:()=>ut("paused"),onClose:()=>{ut("paused"),bs=performance.now(),Te.focus({preventScroll:!0})}}),xt.observationTargets.hero.distance=3,xt.observationTargets.hero.targetHeight=1.8;const n=xt.centralPlatform.position;zt=sE({scene:Pt,position:n,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,prepareForRender:async(a,o)=>{o.throwIfAborted(),await dt.compileAsync(a,ye,Pt),o.throwIfAborted();const c=_r==null?void 0:_r.reflector.getRenderTarget();if(c){const l=dt.getRenderTarget();let d;try{dt.setRenderTarget(c),d=dt.compileAsync(a,ye,Pt)}finally{dt.setRenderTarget(l)}await d,o.throwIfAborted()}},loadModel:async(a,o)=>{await s,o.throwIfAborted();const c=Ws.find(l=>l.assignment.artifactId===a.artifactId);if(!c)throw new Error("馆藏模型暂未载入");return yS(c)}});const r={getCurrent:()=>zt.getCurrent(),getState:()=>({...zt.getState(),...Do&&!zt.getCurrent()?{status:"error",error:Do}:{},libraryLoading:Eo})};pt=pE({canvas:Te,camera:ye,scene:Pt,stage:r,position:n,colliders:xt.colliders,isAvailable:()=>Wt&&yi&&(In||Te.dataset.observationPhase==="complete")&&["walk","paused"].includes(xe)&&!(Bt!=null&&Bt.isOpen())&&!(vt!=null&&vt.isOpen)&&!mt.guide.open&&!ji&&!Mi,onOpen:()=>{ut("paused"),Yn.hidden=!0,_n.hidden=!0},onView:(a,o)=>Bt.open(a,o)}),window.museum.getHologram=()=>({...r.getState(),interaction:pt.getState(),model:zt.getCurrent()}),window.museum.getGeometryRepair=()=>t,vt=CE({scene:Pt,camera:ye,canvas:Te,assignments:ss,isAvailable:()=>Wt&&yi&&In&&["walk","paused"].includes(xe)&&!(Bt!=null&&Bt.isOpen())&&!(pt!=null&&pt.isOpen())&&!mt.guide.open,onOpen:()=>{ut("paused"),Yn.hidden=!0,_n.hidden=!0},onClose:()=>{ut("paused"),bs=performance.now()},onView:a=>Bt.open(a)}),window.museum.getLabels=()=>({open:vt.isOpen,records:vt.records.map(a=>({artifactId:a.assignment.artifactId,url:a.url,position:a.mesh.position.toArray()}))}),window.museum.artifactsReady=!1;const s=vS({scene:Pt,renderer:dt,manifest:xt,onArtifact:a=>{Ws.push(a),Te.dataset.artifactCount=String(Ws.length);const o=a.assignment.cabinetId==="story"?xt.observationTargets.story:xt.exhibits.find(c=>c.id===a.assignment.cabinetId);o&&(o.targetHeight=a.center.y)}}).then(({records:a,failures:o})=>{Ws=a,Oh=o,window.museum.artifactsReady=!0,Te.dataset.artifactCount=String(a.length),Te.dataset.artifactFailures=String(o.length),o.length&&ba("部分文物暂未载入，可以继续参观或刷新重试")}).catch(a=>{Te.dataset.artifactFailures="7",console.error("文物载入失败",a),ba("文物暂未载入，请刷新重试")});PE(),window.museum.getArtifacts=()=>({records:Ws.map(a=>({artifactId:a.assignment.artifactId,cabinetId:a.assignment.cabinetId,bounds:{min:a.bounds.min.toArray(),max:a.bounds.max.toArray()}})),failures:Oh})}catch(i){console.error(i),Ae("#load").textContent="展厅加载失败，请刷新重试",Ae("#status").textContent=i.message}}FE();let _s=0;function ff(i){_s=requestAnimationFrame(ff);const e=(i-bs)/1e3,t=Math.min(e,.06);if(bs=i,document.hidden||Qt())return;Wt&&sa&&(sa=!1,xe!=="entering"&&Ln.target===1&&Ln.progress===1&&DE()),ye.position.y-=pn,pn=0;const n=ye.position.x,r=ye.position.z,s=performance.now();if(!Wt){dt.render(Pt,ye);return}if(xe==="entering")ii.update(ye,Ln,t)?(ii=null,In=!0,of(!1),ut("walk",!matchMedia("(pointer:coarse)").matches),Te.focus(),Te.dataset.entryPhase="complete",Ae("#location").textContent="入口序厅 · 可自由参观"):(Te.dataset.entryPhase=ii.phase,Ae("#location").textContent=ii.phase==="opening"?"推门入馆 · 正在打开玻璃门":ii.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(xe==="observe"){const u=Ei.update(ye,t),f=Ei.phase;Te.dataset.observationPhase=f,Ae("#location").textContent=cn.label+" · "+(f==="left"?"左侧观察":f.startsWith("right")?"右侧观察":f==="front"?"移向正视位置":"正视图"),u&&(ut("paused"),Te.dataset.observationPhase="complete")}else if(xe==="guide"&&xr.length){const u=xr[0],f=ye.position.distanceTo(u);ye.position.lerp(u,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(f,.001))),Vh.copy(ye.quaternion),ye.lookAt(gs),Gh.copy(ye.quaternion),ye.quaternion.copy(Vh).slerp(Gh,1-Math.exp(-5*t)),f<.008&&(ye.position.copy(u),xr.shift()),xr.length||(ye.lookAt(gs),ma?am(ma):ut("paused"))}else if(xe==="walk"){nm&&Fn&&ln&&document.pointerLockElement!==Te&&(Bi-=fS(ln.x,innerWidth)*t),ye.rotation.set(wu,Bi,0);const u=Number(rn.has("KeyW")||rn.has("ArrowUp"))-Number(rn.has("KeyS")||rn.has("ArrowDown")),f=Number(rn.has("KeyD")||rn.has("ArrowRight"))-Number(rn.has("KeyA")||rn.has("ArrowLeft"));sn.speed=qn,zh.set(-Math.sin(Bi)*u+Math.cos(Bi)*f,0,-Math.cos(Bi)*u-Math.sin(Bi)*f).normalize(),sn.update(ga,zh,t),ye.position.copy(ga)}const a=Math.hypot(ye.position.x-n,ye.position.z-r),o=xe==="walk"&&a>1e-4;if(ai)Js=0,pn=0;else{const u=o?Math.min(1,a/Math.max(t,.001)/si.speed):0;Js=Un.lerp(Js,u,1-Math.exp(-16*t)),o&&(To=(To+a*Math.PI*2/2.2)%(Math.PI*2)),pn=Math.sin(To)*.008*Js,Math.abs(pn)<1e-5&&(pn=0)}if(gl=Math.max(gl,Math.abs(pn)),bl=Math.max(bl,sn.speed),ye.position.y+=pn,pl+=t,pl>.05){if(UE(i),pt==null||pt.update(),vt==null||vt.update(),Bt==null||Bt.update({selectedExhibit:cn,observationPhase:Te.dataset.observationPhase}),zt){const u=zt.getState();Object.assign(Te.dataset,{hologramId:u.currentId||"",hologramPhase:u.phase||u.status,hologramPaused:String(u.paused),hologramCount:String(u.count)})}pl=0}for(const u of Qp)u.emissiveIntensity=Un.lerp(u.emissiveIntensity,xe==="story"?.8:.35,1-Math.exp(-3*t));Ln.update(t)&&xe!=="entering"&&(sa=!0),_r==null||_r.update(t,ai),zt==null||zt.update(t,{paused:!!(pt!=null&&pt.isEngaged()||mt.guide.open||xe==="story"),reduced:ai});const c=performance.now()-s;qs!==null&&(Zr=qs,qs=null,dt.setPixelRatio(Zr));const l=performance.now();dt.render(Pt,ye);const d=performance.now()-l;if(!document.hidden&&i-tm>2500&&e<.25&&(Hi.push(e*1e3),$s.push(c),Zs.push(d),Hi.length>180&&(Hi.shift(),$s.shift(),Zs.shift())),ml+=t,ml>1){const u=um();u.sampleCount>=30&&u.frameP95>24?$r++:$r=0,$r>=2&&Zr>1?(qs=1,Hi.length=0,$s.length=0,Zs.length=0,$r=0):$r>=3&&u.frameP95>35&&Zr>.85&&(qs=.85,Hi.length=0,$s.length=0,Zs.length=0,$r=0),Object.assign(Te.dataset,{position:ye.position.toArray().map(f=>f.toFixed(3)).join(","),direction:[Bi,wu].map(f=>f.toFixed(4)).join(","),mode:xe,bob:pn.toFixed(4),bobPeak:gl.toFixed(4),maxWalkSpeed:bl,speed:sn.speed,contacts:sn.contacts,queries:sn.queries,calls:dt.info.render.calls,triangles:dt.info.render.triangles,frameP50:u.frameP50.toFixed(2),frameP95:u.frameP95.toFixed(2),updateP95:u.updateP95.toFixed(2),renderP95:u.renderP95.toFixed(2),samples:u.sampleCount,dpr:Zr}),ml=0}}_s=requestAnimationFrame(ff);window.addEventListener("resize",()=>{ln=null,ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),dt.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",i=>{cancelAnimationFrame(_s),_s=0,af(),!i.persisted&&(Su.abort(),vt==null||vt.dispose(),Bt==null||Bt.dispose(),pt==null||pt.dispose(),zt==null||zt.dispose())});window.addEventListener("pageshow",i=>{i.persisted&&(bs=performance.now(),_s||(_s=requestAnimationFrame(ff)))});
