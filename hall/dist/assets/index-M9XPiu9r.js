(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ba="180",dm=0,pf=1,hm=2,Vh=1,pm=2,gi=3,Ln=0,qt=1,sn=2,Gi=0,ns=1,ss=2,mf=3,gf=4,mm=5,fr=100,gm=101,bm=102,_m=103,xm=104,vm=200,ym=201,Mm=202,Sm=203,gl=204,bl=205,Em=206,Tm=207,wm=208,Am=209,Rm=210,Cm=211,Pm=212,Lm=213,Im=214,_l=0,xl=1,vl=2,as=3,yl=4,Ml=5,Sl=6,El=7,wu=0,Dm=1,Um=2,Wi=0,Nm=1,Fm=2,Om=3,Bm=4,km=5,Gh=6,zm=7,bf="attached",Hm="detached",Wh=300,os=301,cs=302,Tl=303,wl=304,Do=306,ls=1e3,Hi=1001,Eo=1002,Jt=1003,qh=1004,Ws=1005,Kt=1006,mo=1007,zn=1008,si=1009,Xh=1010,jh=1011,sa=1012,Au=1013,_r=1014,Hn=1015,bs=1016,Ru=1017,Cu=1018,aa=1020,Yh=35902,Kh=35899,Jh=1021,$h=1022,Sn=1023,oa=1026,ca=1027,Pu=1028,Lu=1029,Zh=1030,Iu=1031,Du=1033,go=33776,bo=33777,_o=33778,xo=33779,Al=35840,Rl=35841,Cl=35842,Pl=35843,Ll=36196,Il=37492,Dl=37496,Ul=37808,Nl=37809,Fl=37810,Ol=37811,Bl=37812,kl=37813,zl=37814,Hl=37815,Vl=37816,Gl=37817,Wl=37818,ql=37819,Xl=37820,jl=37821,Yl=36492,Kl=36494,Jl=36495,$l=36283,Zl=36284,Ql=36285,eu=36286,la=2300,ua=2301,Wo=2302,_f=2400,xf=2401,vf=2402,Vm=2500,Gm=0,Qh=1,tu=2,Wm=3200,qm=3201,Uu=0,Xm=1,ki="",Ct="srgb",$t="srgb-linear",To="linear",ct="srgb",Er=7680,yf=519,jm=512,Ym=513,Km=514,ep=515,Jm=516,$m=517,Zm=518,Qm=519,nu=35044,Mf="300 es",ti=2e3,wo=2001;class _s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sf=1234567;const $s=Math.PI/180,us=180/Math.PI;function Gn(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ht[r&255]+Ht[r>>8&255]+Ht[r>>16&255]+Ht[r>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]).toLowerCase()}function Ve(r,e,t){return Math.max(e,Math.min(t,r))}function Nu(r,e){return(r%e+e)%e}function eg(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tg(r,e,t){return r!==e?(t-r)/(e-r):0}function Zs(r,e,t){return(1-t)*r+t*e}function ng(r,e,t,n){return Zs(r,e,1-Math.exp(-t*n))}function ig(r,e=1){return e-Math.abs(Nu(r,e*2)-e)}function rg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function sg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ag(r,e){return r+Math.floor(Math.random()*(e-r+1))}function og(r,e){return r+Math.random()*(e-r)}function cg(r){return r*(.5-Math.random())}function lg(r){r!==void 0&&(Sf=r);let e=Sf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ug(r){return r*$s}function fg(r){return r*us}function dg(r){return(r&r-1)===0&&r!==0}function hg(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function pg(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function mg(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),f=a((e+n)/2),d=s((e-n)/2),u=a((e-n)/2),h=s((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":r.set(o*f,c*d,c*u,o*l);break;case"YZY":r.set(c*u,o*f,c*d,o*l);break;case"ZXZ":r.set(c*d,c*u,o*f,o*l);break;case"XZX":r.set(o*f,c*g,c*h,o*l);break;case"YXY":r.set(c*h,o*f,c*g,o*l);break;case"ZYZ":r.set(c*g,c*h,o*f,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function kn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const In={DEG2RAD:$s,RAD2DEG:us,generateUUID:Gn,clamp:Ve,euclideanModulo:Nu,mapLinear:eg,inverseLerp:tg,lerp:Zs,damp:ng,pingpong:ig,smoothstep:rg,smootherstep:sg,randInt:ag,randFloat:og,randFloatSpread:cg,seededRandom:lg,degToRad:ug,radToDeg:fg,isPowerOfTwo:dg,ceilPowerOfTwo:hg,floorPowerOfTwo:pg,setQuaternionFromProperEuler:mg,normalize:rt,denormalize:kn};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Un{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],f=n[i+2],d=n[i+3];const u=s[a+0],h=s[a+1],g=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(d!==x||c!==u||l!==h||f!==g){let m=1-o;const p=c*u+l*h+f*g+d*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),E=Math.atan2(v,p*M);m=Math.sin(m*E)/v,o=Math.sin(o*E)/v}const b=o*M;if(c=c*m+u*b,l=l*m+h*b,f=f*m+g*b,d=d*m+x*b,m===1-o){const v=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=v,l*=v,f*=v,d*=v}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],f=n[i+3],d=s[a],u=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+f*d+c*h-l*u,e[t+1]=c*g+f*u+l*d-o*h,e[t+2]=l*g+f*h+o*u-c*d,e[t+3]=f*g-o*d-c*u-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(i/2),d=o(s/2),u=c(n/2),h=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=u*f*d+l*h*g,this._y=l*h*d-u*f*g,this._z=l*f*g+u*h*d,this._w=l*f*d-u*h*g;break;case"YXZ":this._x=u*f*d+l*h*g,this._y=l*h*d-u*f*g,this._z=l*f*g-u*h*d,this._w=l*f*d+u*h*g;break;case"ZXY":this._x=u*f*d-l*h*g,this._y=l*h*d+u*f*g,this._z=l*f*g+u*h*d,this._w=l*f*d-u*h*g;break;case"ZYX":this._x=u*f*d-l*h*g,this._y=l*h*d+u*f*g,this._z=l*f*g-u*h*d,this._w=l*f*d+u*h*g;break;case"YZX":this._x=u*f*d+l*h*g,this._y=l*h*d+u*f*g,this._z=l*f*g-u*h*d,this._w=l*f*d-u*h*g;break;case"XZY":this._x=u*f*d-l*h*g,this._y=l*h*d-u*f*g,this._z=l*f*g+u*h*d,this._w=l*f*d+u*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],d=t[10],u=n+o+d;if(u>0){const h=.5/Math.sqrt(u+1);this._w=.25/h,this._x=(f-c)*h,this._y=(s-l)*h,this._z=(a-i)*h}else if(n>o&&n>d){const h=2*Math.sqrt(1+n-o-d);this._w=(f-c)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-n-d);this._w=(s-l)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(c+f)/h}else{const h=2*Math.sqrt(1+d-n-o);this._w=(a-i)/h,this._x=(s+l)/h,this._y=(c+f)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+i*l-s*c,this._y=i*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-i*o,this._w=a*f-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),d=Math.sin((1-t)*f)/l,u=Math.sin(t*f)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ef.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),f=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*f,this.y=n+c*f+o*l-s*d,this.z=i+c*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new I,Ef=new Un;class We{constructor(e,t,n,i,s,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],d=n[7],u=n[2],h=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],_=i[4],b=i[7],v=i[2],E=i[5],T=i[8];return s[0]=a*x+o*M+c*v,s[3]=a*m+o*_+c*E,s[6]=a*p+o*b+c*T,s[1]=l*x+f*M+d*v,s[4]=l*m+f*_+d*E,s[7]=l*p+f*b+d*T,s[2]=u*x+h*M+g*v,s[5]=u*m+h*_+g*E,s[8]=u*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=f*a-o*l,u=o*c-f*s,h=l*s-a*c,g=t*d+n*u+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*l-f*n)*x,e[2]=(o*n-i*a)*x,e[3]=u*x,e[4]=(f*t-i*c)*x,e[5]=(i*s-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xo.makeScale(e,t)),this}rotate(e){return this.premultiply(Xo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xo=new We;function tp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function fa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gg(){const r=fa("canvas");return r.style.display="block",r}const Tf={};function da(r){r in Tf||(Tf[r]=!0,console.warn(r))}function bg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const wf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function _g(){const r={enabled:!0,workingColorSpace:$t,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(i.r=is(i.r),i.g=is(i.g),i.b=is(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ki?To:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return da("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return da("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[$t]:{primaries:e,whitePoint:n,transfer:To,toXYZ:wf,fromXYZ:Af,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:ct,toXYZ:wf,fromXYZ:Af,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),r}const Ze=_g();function Mi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Tr;class xg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Tr===void 0&&(Tr=fa("canvas")),Tr.width=e.width,Tr.height=e.height;const i=Tr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Tr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=fa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Mi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mi(t[n]/255)*255):t[n]=Mi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vg=0;class Fu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Gn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(jo(i[a].image)):s.push(jo(i[a]))}else s=jo(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function jo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xg.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yg=0;const Yo=new I;class Lt extends _s{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=Hi,i=Hi,s=Kt,a=zn,o=Sn,c=si,l=Lt.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Gn(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ls:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ls:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Wh;Lt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],f=c[4],d=c[8],u=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(f-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(h+1)/2,v=(p+1)/2,E=(f+u)/4,T=(d+x)/4,R=(g+m)/4;return _>b&&_>v?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=T/n):b>v?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=E/i,s=R/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=T/s,i=R/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-f)/M,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mg extends _s{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new Lt(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Fu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends Mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class np extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sg extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nt{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(e.matrixWorld),this.union(Sa)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ea.subVectors(this.max,Ts),wr.subVectors(e.a,Ts),Ar.subVectors(e.b,Ts),Rr.subVectors(e.c,Ts),wi.subVectors(Ar,wr),Ai.subVectors(Rr,Ar),Zi.subVectors(wr,Rr);let t=[0,-wi.z,wi.y,0,-Ai.z,Ai.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ai.z,0,-Ai.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ai.y,Ai.x,0,-Zi.y,Zi.x,0];return!Ko(t,wr,Ar,Rr,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Ko(t,wr,Ar,Rr,Ea))?!1:(Ta.crossVectors(wi,Ai),t=[Ta.x,Ta.y,Ta.z],Ko(t,wr,Ar,Rr,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new I,new I,new I,new I,new I,new I,new I,new I],Nn=new I,Sa=new nt,wr=new I,Ar=new I,Rr=new I,wi=new I,Ai=new I,Zi=new I,Ts=new I,Ea=new I,Ta=new I,Qi=new I;function Ko(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Qi.fromArray(r,s);const o=i.x*Math.abs(Qi.x)+i.y*Math.abs(Qi.y)+i.z*Math.abs(Qi.z),c=e.dot(Qi),l=t.dot(Qi),f=n.dot(Qi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Eg=new nt,ws=new I,Jo=new I;class oi{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ws.subVectors(e,this.center);const t=ws.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ws.copy(e.center).add(Jo)),this.expandByPoint(ws.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const fi=new I,$o=new I,wa=new I,Ri=new I,Zo=new I,Aa=new I,Qo=new I;class Yi{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,t),fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){$o.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub($o);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Ri.dot(this.direction),c=-Ri.dot(wa),l=Ri.lengthSq(),f=Math.abs(1-a*a);let d,u,h,g;if(f>0)if(d=a*c-o,u=a*o-c,g=s*f,d>=0)if(u>=-g)if(u<=g){const x=1/f;d*=x,u*=x,h=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;else u=-s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-s,-c),s),h=u*(u+2*c)+l):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+u*(u+2*c)+l);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),h=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy($o).addScaledVector(wa,u),h}intersectSphere(e,t){fi.subVectors(e.center,this.origin);const n=fi.dot(this.direction),i=fi.dot(fi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,i=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,i=(e.min.x-u.x)*l),f>=0?(s=(e.min.y-u.y)*f,a=(e.max.y-u.y)*f):(s=(e.max.y-u.y)*f,a=(e.min.y-u.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,t,n,i,s){Zo.subVectors(t,e),Aa.subVectors(n,e),Qo.crossVectors(Zo,Aa);let a=this.direction.dot(Qo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ri.subVectors(this.origin,e);const c=o*this.direction.dot(Aa.crossVectors(Ri,Aa));if(c<0)return null;const l=o*this.direction.dot(Zo.cross(Ri));if(l<0||c+l>a)return null;const f=-o*Ri.dot(Qo);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(e,t,n,i,s,a,o,c,l,f,d,u,h,g,x,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,f,d,u,h,g,x,m)}set(e,t,n,i,s,a,o,c,l,f,d,u,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=d,p[14]=u,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Cr.setFromMatrixColumn(e,0).length(),s=1/Cr.setFromMatrixColumn(e,1).length(),a=1/Cr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*f,h=a*d,g=o*f,x=o*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=h+g*l,t[5]=u-x*l,t[9]=-o*c,t[2]=x-u*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*f,h=c*d,g=l*f,x=l*d;t[0]=u+x*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=h*o-g,t[6]=x+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*f,h=c*d,g=l*f,x=l*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*f,t[9]=x-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*f,h=a*d,g=o*f,x=o*d;t[0]=c*f,t[4]=g*l-h,t[8]=u*l+x,t[1]=c*d,t[5]=x*l+u,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*f,t[4]=x-u*d,t[8]=g*d+h,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=h*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=u*d+x,t[5]=a*f,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*f,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Tg,e,wg)}lookAt(e,t,n){const i=this.elements;return dn.subVectors(e,t),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(n,dn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(n,dn)),Ci.normalize(),Ra.crossVectors(dn,Ci),i[0]=Ci.x,i[4]=Ra.x,i[8]=dn.x,i[1]=Ci.y,i[5]=Ra.y,i[9]=dn.y,i[2]=Ci.z,i[6]=Ra.z,i[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],d=n[5],u=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],b=n[11],v=n[15],E=i[0],T=i[4],R=i[8],S=i[12],y=i[1],w=i[5],A=i[9],L=i[13],D=i[2],F=i[6],B=i[10],G=i[14],k=i[3],Z=i[7],se=i[11],fe=i[15];return s[0]=a*E+o*y+c*D+l*k,s[4]=a*T+o*w+c*F+l*Z,s[8]=a*R+o*A+c*B+l*se,s[12]=a*S+o*L+c*G+l*fe,s[1]=f*E+d*y+u*D+h*k,s[5]=f*T+d*w+u*F+h*Z,s[9]=f*R+d*A+u*B+h*se,s[13]=f*S+d*L+u*G+h*fe,s[2]=g*E+x*y+m*D+p*k,s[6]=g*T+x*w+m*F+p*Z,s[10]=g*R+x*A+m*B+p*se,s[14]=g*S+x*L+m*G+p*fe,s[3]=M*E+_*y+b*D+v*k,s[7]=M*T+_*w+b*F+v*Z,s[11]=M*R+_*A+b*B+v*se,s[15]=M*S+_*L+b*G+v*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],d=e[6],u=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*c*d-i*l*d-s*o*u+n*l*u+i*o*h-n*c*h)+x*(+t*c*h-t*l*u+s*a*u-i*a*h+i*l*f-s*c*f)+m*(+t*l*d-t*o*h-s*a*d+n*a*h+s*o*f-n*l*f)+p*(-i*o*f-t*c*d+t*o*u+i*a*d-n*a*u+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=e[9],u=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=d*m*l-x*u*l+x*c*h-o*m*h-d*c*p+o*u*p,_=g*u*l-f*m*l-g*c*h+a*m*h+f*c*p-a*u*p,b=f*x*l-g*d*l+g*o*h-a*x*h-f*o*p+a*d*p,v=g*d*c-f*x*c-g*o*u+a*x*u+f*o*m-a*d*m,E=t*M+n*_+i*b+s*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=M*T,e[1]=(x*u*s-d*m*s-x*i*h+n*m*h+d*i*p-n*u*p)*T,e[2]=(o*m*s-x*c*s+x*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(d*c*s-o*u*s-d*i*l+n*u*l+o*i*h-n*c*h)*T,e[4]=_*T,e[5]=(f*m*s-g*u*s+g*i*h-t*m*h-f*i*p+t*u*p)*T,e[6]=(g*c*s-a*m*s-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*u*s-f*c*s+f*i*l-t*u*l-a*i*h+t*c*h)*T,e[8]=b*T,e[9]=(g*d*s-f*x*s-g*n*h+t*x*h+f*n*p-t*d*p)*T,e[10]=(a*x*s-g*o*s+g*n*l-t*x*l-a*n*p+t*o*p)*T,e[11]=(f*o*s-a*d*s-f*n*l+t*d*l+a*n*h-t*o*h)*T,e[12]=v*T,e[13]=(f*x*i-g*d*i+g*n*u-t*x*u-f*n*m+t*d*m)*T,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*T,e[15]=(a*d*i-f*o*i+f*n*c-t*d*c-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,f*o+n,f*c-i*a,0,l*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,d=o+o,u=s*l,h=s*f,g=s*d,x=a*f,m=a*d,p=o*d,M=c*l,_=c*f,b=c*d,v=n.x,E=n.y,T=n.z;return i[0]=(1-(x+p))*v,i[1]=(h+b)*v,i[2]=(g-_)*v,i[3]=0,i[4]=(h-b)*E,i[5]=(1-(u+p))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(m-M)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Cr.set(i[0],i[1],i[2]).length();const a=Cr.set(i[4],i[5],i[6]).length(),o=Cr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Fn.copy(this);const l=1/s,f=1/a,d=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=d,Fn.elements[9]*=d,Fn.elements[10]*=d,t.setFromRotationMatrix(Fn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=ti,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===ti)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===wo)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ti,c=!1){const l=this.elements,f=2/(t-e),d=2/(n-i),u=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===ti)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===wo)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Cr=new I,Fn=new Ue,Tg=new I(0,0,0),wg=new I(1,1,1),Ci=new I,Ra=new I,dn=new I,Rf=new Ue,Cf=new Un;class Xn{constructor(e=0,t=0,n=0,i=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],f=i[9],d=i[2],u=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cf.setFromEuler(this),this.setFromQuaternion(Cf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Ou{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const Pf=new I,Pr=new Un,di=new Ue,Ca=new I,As=new I,Rg=new I,Cg=new Un,Lf=new I(1,0,0),If=new I(0,1,0),Df=new I(0,0,1),Uf={type:"added"},Pg={type:"removed"},Lr={type:"childadded",child:null},ec={type:"childremoved",child:null};class bt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new I,t=new Xn,n=new Un,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ue},normalMatrix:{value:new We}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ou,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.multiply(Pr),this}rotateOnWorldAxis(e,t){return Pr.setFromAxisAngle(e,t),this.quaternion.premultiply(Pr),this}rotateX(e){return this.rotateOnAxis(Lf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,t){return Pf.copy(e).applyQuaternion(this.quaternion),this.position.add(Pf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(As,Ca,this.up):di.lookAt(Ca,As,this.up),this.quaternion.setFromRotationMatrix(di),i&&(di.extractRotation(i.matrixWorld),Pr.setFromRotationMatrix(di),this.quaternion.premultiply(Pr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,e,Rg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Cg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),u=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}bt.DEFAULT_UP=new I(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new I,hi=new I,tc=new I,pi=new I,Ir=new I,Dr=new I,Nf=new I,nc=new I,ic=new I,rc=new I,sc=new et,ac=new et,oc=new et;class Pt{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),On.subVectors(e,t),i.cross(On);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){On.subVectors(i,t),hi.subVectors(n,t),tc.subVectors(e,t);const a=On.dot(On),o=On.dot(hi),c=On.dot(tc),l=hi.dot(hi),f=hi.dot(tc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const u=1/d,h=(l*c-o*f)*u,g=(a*f-o*c)*u;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,pi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pi.x),c.addScaledVector(a,pi.y),c.addScaledVector(o,pi.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return sc.setScalar(0),ac.setScalar(0),oc.setScalar(0),sc.fromBufferAttribute(e,t),ac.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(sc,s.x),a.addScaledVector(ac,s.y),a.addScaledVector(oc,s.z),a}static isFrontFacing(e,t,n,i){return On.subVectors(n,t),hi.subVectors(e,t),On.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),On.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Pt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Pt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Pt.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Pt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Pt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ir.subVectors(i,n),Dr.subVectors(s,n),nc.subVectors(e,n);const c=Ir.dot(nc),l=Dr.dot(nc);if(c<=0&&l<=0)return t.copy(n);ic.subVectors(e,i);const f=Ir.dot(ic),d=Dr.dot(ic);if(f>=0&&d<=f)return t.copy(i);const u=c*d-f*l;if(u<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(Ir,a);rc.subVectors(e,s);const h=Ir.dot(rc),g=Dr.dot(rc);if(g>=0&&h<=g)return t.copy(s);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Dr,o);const m=f*g-h*d;if(m<=0&&d-f>=0&&h-g>=0)return Nf.subVectors(s,i),o=(d-f)/(d-f+(h-g)),t.copy(i).addScaledVector(Nf,o);const p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Ir,a).addScaledVector(Dr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Fe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Ze.workingColorSpace){if(e=Nu(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=cc(a,s,e+1/3),this.g=cc(a,s,e),this.b=cc(a,s,e-1/3)}return Ze.colorSpaceToWorking(this,i),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){const n=ip[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=is(e.r),this.g=is(e.g),this.b=is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Ze.workingToColorSpace(Vt.copy(this),e),Math.round(Ve(Vt.r*255,0,255))*65536+Math.round(Ve(Vt.g*255,0,255))*256+Math.round(Ve(Vt.b*255,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Vt.copy(this),t);const n=Vt.r,i=Vt.g,s=Vt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=Ct){Ze.workingToColorSpace(Vt.copy(this),e);const t=Vt.r,n=Vt.g,i=Vt.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+t,Pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pi),e.getHSL(Pa);const n=Zs(Pi.h,Pa.h,t),i=Zs(Pi.s,Pa.s,t),s=Zs(Pi.l,Pa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Fe;Fe.NAMES=ip;let Lg=0;class Wn extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Gn(),this.name="",this.type="Material",this.blending=ns,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gl,this.blendDst=bl,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==fr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ni extends Wn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new I,La=new Oe;let Ig=0;class Ot{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nu,this.updateRanges=[],this.gpuType=Hn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=kn(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=kn(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=kn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=kn(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nu&&(e.usage=this.usage),e}}class rp extends Ot{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sp extends Ot{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zt extends Ot{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dg=0;const vn=new Ue,lc=new bt,Ur=new I,hn=new nt,Rs=new nt,Nt=new I;class ln extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tp(e)?sp:rp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,t,n){return vn.makeTranslation(e,t,n),this.applyMatrix4(vn),this}scale(e,t,n){return vn.makeScale(e,t,n),this.applyMatrix4(vn),this}lookAt(e){return lc.lookAt(e),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new zt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(hn.min,Rs.min),hn.expandByPoint(Nt),Nt.addVectors(hn.max,Rs.max),hn.expandByPoint(Nt)):(hn.expandByPoint(Rs.min),hn.expandByPoint(Rs.max))}hn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Nt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Nt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Nt.fromBufferAttribute(o,l),c&&(Ur.fromBufferAttribute(e,l),Nt.add(Ur)),i=Math.max(i,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ot(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new I,c[R]=new I;const l=new I,f=new I,d=new I,u=new Oe,h=new Oe,g=new Oe,x=new I,m=new I;function p(R,S,y){l.fromBufferAttribute(n,R),f.fromBufferAttribute(n,S),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,R),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),f.sub(l),d.sub(l),h.sub(u),g.sub(u);const w=1/(h.x*g.y-g.x*h.y);isFinite(w)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(w),m.copy(d).multiplyScalar(h.x).addScaledVector(f,-g.x).multiplyScalar(w),o[R].add(x),o[S].add(x),o[y].add(x),c[R].add(m),c[S].add(m),c[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,S=M.length;R<S;++R){const y=M[R],w=y.start,A=y.count;for(let L=w,D=w+A;L<D;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const _=new I,b=new I,v=new I,E=new I;function T(R){v.fromBufferAttribute(i,R),E.copy(v);const S=o[R];_.copy(S),_.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const w=b.dot(c[R])<0?-1:1;a.setXYZW(R,_.x,_.y,_.z,w)}for(let R=0,S=M.length;R<S;++R){const y=M[R],w=y.start,A=y.count;for(let L=w,D=w+A;L<D;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ot(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,h=n.count;u<h;u++)n.setXYZ(u,0,0,0);const i=new I,s=new I,a=new I,o=new I,c=new I,l=new I,f=new I,d=new I;if(e)for(let u=0,h=e.count;u<h;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,h=t.count;u<h;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,d=o.normalized,u=new l.constructor(c.length*f);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*f;for(let p=0;p<f;p++)u[g++]=l[h++]}return new Ot(u,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const u=l[f],h=e(u,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,u=l.length;d<u;d++){const h=l[d];f.push(h.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let u=0,h=d.length;u<h;u++)f.push(d[u].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ff=new Ue,er=new Yi,Ia=new oi,Of=new I,Da=new I,Ua=new I,Na=new I,uc=new I,Fa=new I,Bf=new I,Oa=new I;class gt extends bt{constructor(e=new ln,t=new ni){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],d=s[c];f!==0&&(uc.fromBufferAttribute(d,e),a?Fa.addScaledVector(uc,f):Fa.addScaledVector(uc.sub(t),f))}t.add(Fa)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),er.copy(e.ray).recast(e.near),!(Ia.containsPoint(er.origin)===!1&&(er.intersectSphere(Ia,Of)===null||er.origin.distanceToSquared(Of)>(e.far-e.near)**2))&&(Ff.copy(s).invert(),er.copy(e.ray).applyMatrix4(Ff),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,u=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,v=_;b<v;b+=3){const E=o.getX(b),T=o.getX(b+1),R=o.getX(b+2);i=Ba(this,p,e,n,l,f,d,E,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);i=Ba(this,a,e,n,l,f,d,M,_,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,v=_;b<v;b+=3){const E=b,T=b+1,R=b+2;i=Ba(this,p,e,n,l,f,d,E,T,R),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=m,_=m+1,b=m+2;i=Ba(this,a,e,n,l,f,d,M,_,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Ug(r,e,t,n,i,s,a,o){let c;if(e.side===qt?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Ln,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:r}}function Ba(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Da),r.getVertexPosition(c,Ua),r.getVertexPosition(l,Na);const f=Ug(r,e,t,n,Da,Ua,Na,Bf);if(f){const d=new I;Pt.getBarycoord(Bf,Da,Ua,Na,d),i&&(f.uv=Pt.getInterpolatedAttribute(i,o,c,l,d,new Oe)),s&&(f.uv1=Pt.getInterpolatedAttribute(s,o,c,l,d,new Oe)),a&&(f.normal=Pt.getInterpolatedAttribute(a,o,c,l,d,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new I,materialIndex:0};Pt.getNormal(Da,Ua,Na,u.normal),f.face=u,f.barycoord=d}return f}class xr extends ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],d=[];let u=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(d,2));function g(x,m,p,M,_,b,v,E,T,R,S){const y=b/T,w=v/R,A=b/2,L=v/2,D=E/2,F=T+1,B=R+1;let G=0,k=0;const Z=new I;for(let se=0;se<B;se++){const fe=se*w-L;for(let Ie=0;Ie<F;Ie++){const qe=Ie*y-A;Z[x]=qe*M,Z[m]=fe*_,Z[p]=D,l.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=E>0?1:-1,f.push(Z.x,Z.y,Z.z),d.push(Ie/T),d.push(1-se/R),G+=1}}for(let se=0;se<R;se++)for(let fe=0;fe<T;fe++){const Ie=u+fe+F*se,qe=u+fe+F*(se+1),Qe=u+(fe+1)+F*(se+1),ee=u+(fe+1)+F*se;c.push(Ie,qe,ee),c.push(qe,Qe,ee),k+=6}o.addGroup(h,k,S),h+=k,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Yt(r){const e={};for(let t=0;t<r.length;t++){const n=fs(r[t]);for(const i in n)e[i]=n[i]}return e}function Ng(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function ap(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const op={clone:fs,merge:Yt};var Fg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Wn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fg,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Ng(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cp extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Li=new I,kf=new Oe,zf=new Oe;class Gt extends cp{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($s*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan($s*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,t){return this.getViewBounds(e,kf,zf),t.subVectors(zf,kf)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($s*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Nr=-90,Fr=1;class Bg extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gt(Nr,Fr,e,t);i.layers=this.layers,this.add(i);const s=new Gt(Nr,Fr,e,t);s.layers=this.layers,this.add(s);const a=new Gt(Nr,Fr,e,t);a.layers=this.layers,this.add(a);const o=new Gt(Nr,Fr,e,t);o.layers=this.layers,this.add(o);const c=new Gt(Nr,Fr,e,t);c.layers=this.layers,this.add(c);const l=new Gt(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(d,u,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lp extends Lt{constructor(e=[],t=os,n,i,s,a,o,c,l,f){super(e,t,n,i,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kg extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lp(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new xr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:Gi});s.uniforms.tEquirect.value=t;const a=new gt(i,s),o=t.minFilter;return t.minFilter===zn&&(t.minFilter=Kt),new Bg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class En extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zg={type:"move"};class fc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new En,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new En,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new En,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=f.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&u>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new En;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class up extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Hg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nu,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new I;class Bu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=kn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=kn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=kn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=kn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=kn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),s=rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ot(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Bu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Hf=new I,Vf=new et,Gf=new et,Vg=new I,Wf=new Ue,ka=new I,dc=new oi,qf=new Ue,hc=new Yi;class Gg extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bf,this.bindMatrix=new Ue,this.bindMatrixInverse=new Ue,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new nt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingBox.expandByPoint(ka)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new oi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ka),this.boundingSphere.expandByPoint(ka)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dc.copy(this.boundingSphere),dc.applyMatrix4(i),e.ray.intersectsSphere(dc)!==!1&&(qf.copy(i).invert(),hc.copy(e.ray).applyMatrix4(qf),!(this.boundingBox!==null&&hc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hm?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Vf.fromBufferAttribute(i.attributes.skinIndex,e),Gf.fromBufferAttribute(i.attributes.skinWeight,e),Hf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Gf.getComponent(s);if(a!==0){const o=Vf.getComponent(s);Wf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Vg.copy(Hf).applyMatrix4(Wf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fp extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dp extends Lt{constructor(e=null,t=1,n=1,i,s,a,o,c,l=Jt,f=Jt,d,u){super(null,a,o,c,l,f,i,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xf=new Ue,Wg=new Ue;class ku{constructor(e=[],t=[]){this.uuid=Gn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ue)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ue;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Wg;Xf.multiplyMatrices(o,t[s]),Xf.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ku(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new dp(t,e,e,Sn,Hn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new fp),this.bones.push(a),this.boneInverses.push(new Ue().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class iu extends Ot{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Or=new Ue,jf=new Ue,za=[],Yf=new nt,qg=new Ue,Cs=new gt,Ps=new oi;class hp extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new iu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new nt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Yf.copy(e.boundingBox).applyMatrix4(Or),this.boundingBox.union(Yf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new oi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Or),Ps.copy(e.boundingSphere).applyMatrix4(Or),this.boundingSphere.union(Ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),e.ray.intersectsSphere(Ps)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Or),jf.multiplyMatrices(n,Or),Cs.matrixWorld=jf,Cs.raycast(e,za);for(let a=0,o=za.length;a<o;a++){const c=za[a];c.instanceId=s,c.object=this,t.push(c)}za.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new iu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new dp(new Float32Array(i*this.count),i,this.count,Pu,Hn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const pc=new I,Xg=new I,jg=new We;class Zn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(Xg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jg.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const tr=new oi,Yg=new Oe(.5,.5),Ha=new I;class zu{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ti,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],d=s[5],u=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],M=s[12],_=s[13],b=s[14],v=s[15];if(i[0].setComponents(l-a,h-f,p-g,v-M).normalize(),i[1].setComponents(l+a,h+f,p+g,v+M).normalize(),i[2].setComponents(l+o,h+d,p+x,v+_).normalize(),i[3].setComponents(l-o,h-d,p-x,v-_).normalize(),n)i[4].setComponents(c,u,m,b).normalize(),i[5].setComponents(l-c,h-u,p-m,v-b).normalize();else if(i[4].setComponents(l-c,h-u,p-m,v-b).normalize(),t===ti)i[5].setComponents(l+c,h+u,p+m,v+b).normalize();else if(t===wo)i[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);const t=Yg.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ha.x=i.normal.x>0?e.max.x:e.min.x,Ha.y=i.normal.y>0?e.max.y:e.min.y,Ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pp extends Wn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ao=new I,Ro=new I,Kf=new Ue,Ls=new Yi,Va=new oi,mc=new I,Jf=new I;class Hu extends bt{constructor(e=new ln,t=new pp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Ao.fromBufferAttribute(t,i-1),Ro.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Ao.distanceTo(Ro);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Va.copy(n.boundingSphere),Va.applyMatrix4(i),Va.radius+=s,e.ray.intersectsSphere(Va)===!1)return;Kf.copy(i).invert(),Ls.copy(e.ray).applyMatrix4(Kf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=l){const p=f.getX(x),M=f.getX(x+1),_=Ga(this,e,Ls,c,p,M,x);_&&t.push(_)}if(this.isLineLoop){const x=f.getX(g-1),m=f.getX(h),p=Ga(this,e,Ls,c,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=l){const p=Ga(this,e,Ls,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=Ga(this,e,Ls,c,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ga(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(Ao.fromBufferAttribute(o,i),Ro.fromBufferAttribute(o,s),t.distanceSqToSegment(Ao,Ro,mc,Jf)>n)return;mc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(mc);if(!(l<e.near||l>e.far))return{distance:l,point:Jf.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const $f=new I,Zf=new I;class Kg extends Hu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)$f.fromBufferAttribute(t,i),Zf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$f.distanceTo(Zf);e.setAttribute("lineDistance",new zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jg extends Hu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mp extends Wn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qf=new Ue,ru=new Yi,Wa=new oi,qa=new I;class gp extends bt{constructor(e=new ln,t=new mp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Qf.copy(i).invert(),ru.copy(e.ray).applyMatrix4(Qf);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const u=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=u,x=h;g<x;g++){const m=l.getX(g);qa.fromBufferAttribute(d,m),ed(qa,m,c,i,e,t,this)}}else{const u=Math.max(0,a.start),h=Math.min(d.count,a.start+a.count);for(let g=u,x=h;g<x;g++)qa.fromBufferAttribute(d,g),ed(qa,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ed(r,e,t,n,i,s,a){const o=ru.distanceSqToPoint(r);if(o<t){const c=new I;ru.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $g extends Lt{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bp extends Lt{constructor(e,t,n=_r,i,s,a,o=Jt,c=Jt,l,f=oa,d=1){if(f!==oa&&f!==ca)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:d};super(u,i,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _p extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Vu extends ln{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],u=[],h=[];let g=0;const x=[],m=n/2;let p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(f),this.setAttribute("position",new zt(d,3)),this.setAttribute("normal",new zt(u,3)),this.setAttribute("uv",new zt(h,2));function M(){const b=new I,v=new I;let E=0;const T=(t-e)/n;for(let R=0;R<=s;R++){const S=[],y=R/s,w=y*(t-e)+e;for(let A=0;A<=i;A++){const L=A/i,D=L*c+o,F=Math.sin(D),B=Math.cos(D);v.x=w*F,v.y=-y*n+m,v.z=w*B,d.push(v.x,v.y,v.z),b.set(F,T,B).normalize(),u.push(b.x,b.y,b.z),h.push(L,1-y),S.push(g++)}x.push(S)}for(let R=0;R<i;R++)for(let S=0;S<s;S++){const y=x[S][R],w=x[S+1][R],A=x[S+1][R+1],L=x[S][R+1];(e>0||S!==0)&&(f.push(y,w,L),E+=3),(t>0||S!==s-1)&&(f.push(w,A,L),E+=3)}l.addGroup(p,E,0),p+=E}function _(b){const v=g,E=new Oe,T=new I;let R=0;const S=b===!0?e:t,y=b===!0?1:-1;for(let A=1;A<=i;A++)d.push(0,m*y,0),u.push(0,y,0),h.push(.5,.5),g++;const w=g;for(let A=0;A<=i;A++){const D=A/i*c+o,F=Math.cos(D),B=Math.sin(D);T.x=S*B,T.y=m*y,T.z=S*F,d.push(T.x,T.y,T.z),u.push(0,y,0),E.x=F*.5+.5,E.y=B*.5*y+.5,h.push(E.x,E.y),g++}for(let A=0;A<i;A++){const L=v+A,D=w+A;b===!0?f.push(D,D+1,L):f.push(D+1,D,L),R+=3}l.addGroup(p,R,b===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vu(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr extends ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,f=c+1,d=e/o,u=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<f;p++){const M=p*u-a;for(let _=0;_<l;_++){const b=_*d-s;g.push(b,-M,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const _=M+l*p,b=M+l*(p+1),v=M+1+l*(p+1),E=M+1+l*p;h.push(_,b,E),h.push(b,v,E)}this.setIndex(h),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Gu extends ln{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],f=new I,d=new I,u=new I;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const x=g/i*s,m=h/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),l.push(g/i),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const x=(i+1)*h+g-1,m=(i+1)*(h-1)+g-1,p=(i+1)*(h-1)+g,M=(i+1)*h+g;a.push(x,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ha extends Wn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends ha{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Zg extends Wn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uu,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends Wn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends Wn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Xa(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function tb(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function nb(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function td(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let c=0;c!==e;++c)i[a++]=r[o+c]}return i}function xp(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class _a{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ib extends _a{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_f,endingEnd:_f}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case xf:s=e,o=2*t-n;break;case vf:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case xf:a=e,c=2*n-t;break;case vf:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,f=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*f,this._offsetNext=a*f}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-h)*m+(1.5+h)*x+.5*g,b=h*m-h*x;for(let v=0;v!==o;++v)s[v]=p*a[f+v]+M*a[l+v]+_*a[c+v]+b*a[d+v];return s}}class rb extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,f=(n-t)/(i-t),d=1-f;for(let u=0;u!==o;++u)s[u]=a[l+u]*d+a[c+u]*f;return s}}class sb extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Yn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xa(t,this.TimeBufferType),this.values=Xa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xa(e.times,Array),values:Xa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new rb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ib(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case ua:t=this.InterpolantFactoryMethodLinear;break;case Wo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&tb(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Wo,s=e.length-1;let a=1;for(let o=1;o<s;++o){let c=!1;const l=e[o],f=e[o+1];if(l!==f&&(o!==1||l!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,h=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let h=0;h!==n;++h)t[u+h]=t[d+h]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=ua;class xs extends Yn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=la;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class vp extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}vp.prototype.ValueTypeName="color";class ds extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}ds.prototype.ValueTypeName="number";class ab extends _a{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let f=l+o;l!==f;l+=4)Un.slerpFlat(s,0,a,l-o,a,l,c);return s}}class hs extends Yn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ab(this.times,this.values,this.getValueSize(),e)}}hs.prototype.ValueTypeName="quaternion";hs.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Yn{constructor(e,t,n){super(e,t,n)}}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=la;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class ps extends Yn{constructor(e,t,n,i){super(e,t,n,i)}}ps.prototype.ValueTypeName="vector";class ob{constructor(e="",t=-1,n=[],i=Vm){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Gn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(lb(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Yn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let c=[],l=[];c.push((o+s-1)%s,o,(o+1)%s),l.push(0,1,0);const f=nb(c);c=td(c,1,f),l=td(l,1,f),!i&&c[0]===0&&(c.push(s),l.push(l[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],f=l.name.match(s);if(f&&f.length>1){const d=f[1];let u=i[d];u||(i[d]=u=[]),u.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,h,g,x){if(h.length!==0){const m=[],p=[];xp(h,m,p,g),m.length!==0&&x.push(new d(u,m,p))}},i=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let d=0;d<l.length;d++){const u=l[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const h={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)h[u[g].morphTargets[x]]=-1;for(const x in h){const m=[],p=[];for(let M=0;M!==u[g].morphTargets.length;++M){const _=u[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new ds(".morphTargetInfluence["+x+"]",m,p))}c=h.length*a}else{const h=".bones["+t[d].name+"]";n(ps,h+".position",u,"pos",i),n(hs,h+".quaternion",u,"rot",i),n(ps,h+".scale",u,"scl",i)}}return i.length===0?null:new this(s,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function cb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return ps;case"color":return vp;case"quaternion":return hs;case"bool":case"boolean":return xs;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function lb(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cb(r.type);if(r.times===void 0){const t=[],n=[];xp(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const xi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class ub{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(f){o++,s===!1&&i.onStart!==void 0&&i.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,i.onProgress!==void 0&&i.onProgress(f,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,d){return l.push(f,d),this},this.removeHandler=function(f){const d=l.indexOf(f);return d!==-1&&l.splice(d,2),this},this.getHandler=function(f){for(let d=0,u=l.length;d<u;d+=2){const h=l[d],g=l[d+1];if(h.global&&(h.lastIndex=0),h.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const fb=new ub;class ys{constructor(e){this.manager=e!==void 0?e:fb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class db extends Error{constructor(e,t){super(e),this.response=t}}class yp extends ys{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=xi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:n,onError:i});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const f=mi[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=u?parseInt(u):0,g=h!==0;let x=0;const m=new ReadableStream({start(p){M();function M(){d.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:h});for(let E=0,T=f.length;E<T;E++){const R=f[E];R.onProgress&&R.onProgress(v)}p.enqueue(b),M()}},_=>{p.error(_)})}}});return new Response(m)}else throw new db(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,h=new TextDecoder(u);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{xi.add(`file:${e}`,l);const f=mi[e];delete mi[e];for(let d=0,u=f.length;d<u;d++){const h=f[d];h.onLoad&&h.onLoad(l)}}).catch(l=>{const f=mi[e];if(f===void 0)throw this.manager.itemError(e),l;delete mi[e];for(let d=0,u=f.length;d<u;d++){const h=f[d];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Br=new WeakMap;class hb extends ys{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=Br.get(a);d===void 0&&(d=[],Br.set(a,d)),d.push({onLoad:t,onError:i})}return a}const o=fa("img");function c(){f(),t&&t(this);const d=Br.get(this)||[];for(let u=0;u<d.length;u++){const h=d[u];h.onLoad&&h.onLoad(this)}Br.delete(this),s.manager.itemEnd(e)}function l(d){f(),i&&i(d),xi.remove(`image:${e}`);const u=Br.get(this)||[];for(let h=0;h<u.length;h++){const g=u[h];g.onError&&g.onError(d)}Br.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class pb extends ys{constructor(e){super(e)}load(e,t,n,i){const s=new Lt,a=new hb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Uo extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class mb extends Uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const gc=new Ue,nd=new I,id=new I;class Wu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zu,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;nd.setFromMatrixPosition(e.matrixWorld),t.position.copy(nd),id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(id),t.updateMatrixWorld(),gc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends Wu{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mp extends Uo{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const rd=new Ue,Is=new I,bc=new I;class bb extends Wu{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Is.setFromMatrixPosition(e.matrixWorld),n.position.copy(Is),bc.copy(n.position),bc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(bc),n.updateMatrixWorld(),i.makeTranslation(-Is.x,-Is.y,-Is.z),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,n.coordinateSystem,n.reversedDepth)}}class Sp extends Uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new bb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qu extends cp{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _b extends Wu{constructor(){super(new qu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xb extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new _b}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qs{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const _c=new WeakMap;class vb extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=xi.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(l=>{if(_c.has(a)===!0)i&&i(_c.get(a)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(l),s.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){return xi.add(`image-bitmap:${e}`,l),t&&t(l),s.manager.itemEnd(e),l}).catch(function(l){i&&i(l),_c.set(c,l),xi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});xi.add(`image-bitmap:${e}`,c),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class yb extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xu="\\[\\]\\.:\\/",Mb=new RegExp("["+Xu+"]","g"),ju="[^"+Xu+"]",Sb="[^"+Xu.replace("\\.","")+"]",Eb=/((?:WC+[\/:])*)/.source.replace("WC",ju),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),wb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ju),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ju),Rb=new RegExp("^"+Eb+Tb+wb+Ab+"$"),Cb=["material","materials","bones","map"];class Pb{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=Rb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Cb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===l){l=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=Pb;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const sd=new Ue;class Ep{constructor(e,t,n=0,i=1/0){this.ray=new Yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Ou,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sd),this}intersectObject(e,t=!0,n=[]){return su(e,this,n,t),n.sort(ad),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)su(e[i],this,n,t);return n.sort(ad),n}}function ad(r,e){return r.distance-e.distance}function su(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)su(s[a],e,t,!0)}}const od=new I,ja=new I,kr=new I,zr=new I,xc=new I,Lb=new I,Ib=new I;class ai{constructor(e=new I,t=new I){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){od.subVectors(e,this.start),ja.subVectors(this.end,this.start);const n=ja.dot(ja);let s=ja.dot(od)/n;return t&&(s=Ve(s,0,1)),s}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=Lb,n=Ib){const i=10000000000000001e-32;let s,a;const o=this.start,c=e.start,l=this.end,f=e.end;kr.subVectors(l,o),zr.subVectors(f,c),xc.subVectors(o,c);const d=kr.dot(kr),u=zr.dot(zr),h=zr.dot(xc);if(d<=i&&u<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(d<=i)s=0,a=h/u,a=Ve(a,0,1);else{const g=kr.dot(xc);if(u<=i)a=0,s=Ve(-g/d,0,1);else{const x=kr.dot(zr),m=d*u-x*x;m!==0?s=Ve((x*h-g*u)/m,0,1):s=0,a=(x*s+h)/u,a<0?(a=0,s=Ve(-g/d,0,1)):a>1&&(a=1,s=Ve((x-g)/d,0,1))}}return t.copy(o).add(kr.multiplyScalar(s)),n.copy(c).add(zr.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function cd(r,e,t,n){const i=Db(n);switch(t){case Jh:return r*e;case Pu:return r*e/i.components*i.byteLength;case Lu:return r*e/i.components*i.byteLength;case Zh:return r*e*2/i.components*i.byteLength;case Iu:return r*e*2/i.components*i.byteLength;case $h:return r*e*3/i.components*i.byteLength;case Sn:return r*e*4/i.components*i.byteLength;case Du:return r*e*4/i.components*i.byteLength;case go:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case _o:case xo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Rl:case Pl:return Math.max(r,16)*Math.max(e,8)/4;case Al:case Cl:return Math.max(r,8)*Math.max(e,8)/2;case Ll:case Il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ul:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Bl:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case kl:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hl:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Wl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ql:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xl:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case jl:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yl:case Kl:case Jl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case $l:case Zl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ql:case eu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Db(r){switch(r){case si:case Xh:return{byteLength:1,components:1};case sa:case jh:case bs:return{byteLength:2,components:1};case Ru:case Cu:return{byteLength:2,components:4};case _r:case Au:case Hn:return{byteLength:4,components:1};case Yh:case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ba}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ba);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Tp(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ub(r){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,d=l.byteLength,u=r.createBuffer();r.bindBuffer(c,u),r.bufferData(c,l,f),o.onUploadCallback();let h;if(l instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=r.SHORT;else if(l instanceof Uint32Array)h=r.UNSIGNED_INT;else if(l instanceof Int32Array)h=r.INT;else if(l instanceof Int8Array)h=r.BYTE;else if(l instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const f=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,f);else{d.sort((h,g)=>h.start-g.start);let u=0;for(let h=1;h<d.length;h++){const g=d[u],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];r.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Nb=`#ifdef USE_ALPHAHASH
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
#endif`,Xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jb=`float G_BlinnPhong_Implicit( ) {
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
#endif`,X_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,j_=`#ifdef USE_INSTANCING_MORPH
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
}`,X0=`uniform float scale;
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
}`,j0=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:Nb,alphahash_pars_fragment:Fb,alphamap_fragment:Ob,alphamap_pars_fragment:Bb,alphatest_fragment:kb,alphatest_pars_fragment:zb,aomap_fragment:Hb,aomap_pars_fragment:Vb,batching_pars_vertex:Gb,batching_vertex:Wb,begin_vertex:qb,beginnormal_vertex:Xb,bsdfs:jb,iridescence_fragment:Yb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:Qb,color_fragment:e_,color_pars_fragment:t_,color_pars_vertex:n_,color_vertex:i_,common:r_,cube_uv_reflection_fragment:s_,defaultnormal_vertex:a_,displacementmap_pars_vertex:o_,displacementmap_vertex:c_,emissivemap_fragment:l_,emissivemap_pars_fragment:u_,colorspace_fragment:f_,colorspace_pars_fragment:d_,envmap_fragment:h_,envmap_common_pars_fragment:p_,envmap_pars_fragment:m_,envmap_pars_vertex:g_,envmap_physical_pars_fragment:A_,envmap_vertex:b_,fog_vertex:__,fog_pars_vertex:x_,fog_fragment:v_,fog_pars_fragment:y_,gradientmap_pars_fragment:M_,lightmap_pars_fragment:S_,lights_lambert_fragment:E_,lights_lambert_pars_fragment:T_,lights_pars_begin:w_,lights_toon_fragment:R_,lights_toon_pars_fragment:C_,lights_phong_fragment:P_,lights_phong_pars_fragment:L_,lights_physical_fragment:I_,lights_physical_pars_fragment:D_,lights_fragment_begin:U_,lights_fragment_maps:N_,lights_fragment_end:F_,logdepthbuf_fragment:O_,logdepthbuf_pars_fragment:B_,logdepthbuf_pars_vertex:k_,logdepthbuf_vertex:z_,map_fragment:H_,map_pars_fragment:V_,map_particle_fragment:G_,map_particle_pars_fragment:W_,metalnessmap_fragment:q_,metalnessmap_pars_fragment:X_,morphinstance_vertex:j_,morphcolor_vertex:Y_,morphnormal_vertex:K_,morphtarget_pars_vertex:J_,morphtarget_vertex:$_,normal_fragment_begin:Z_,normal_fragment_maps:Q_,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:r0,clearcoat_normal_fragment_maps:s0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:c0,packing:l0,premultiplied_alpha_fragment:u0,project_vertex:f0,dithering_fragment:d0,dithering_pars_fragment:h0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:b0,shadowmap_vertex:_0,shadowmask_pars_fragment:x0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:E0,specularmap_pars_fragment:T0,tonemapping_fragment:w0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:L0,uv_vertex:I0,worldpos_vertex:D0,background_vert:U0,background_frag:N0,backgroundCube_vert:F0,backgroundCube_frag:O0,cube_vert:B0,cube_frag:k0,depth_vert:z0,depth_frag:H0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:q0,linedashed_vert:X0,linedashed_frag:j0,meshbasic_vert:Y0,meshbasic_frag:K0,meshlambert_vert:J0,meshlambert_frag:$0,meshmatcap_vert:Z0,meshmatcap_frag:Q0,meshnormal_vert:ex,meshnormal_frag:tx,meshphong_vert:nx,meshphong_frag:ix,meshphysical_vert:rx,meshphysical_frag:sx,meshtoon_vert:ax,meshtoon_frag:ox,points_vert:cx,points_frag:lx,shadow_vert:ux,shadow_frag:fx,sprite_vert:dx,sprite_frag:hx},le={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Qn={basic:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:Yt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:Yt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:Yt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Fe(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:Yt([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:Yt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:Yt([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:Yt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:Yt([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:Yt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:Yt([le.lights,le.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Qn.physical={uniforms:Yt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ya={r:0,b:0,g:0},nr=new Xn,px=new Ue;function mx(r,e,t,n,i,s,a){const o=new Fe(0);let c=s===!0?0:1,l,f,d=null,u=0,h=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1;const v=g(_);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===Do)?(f===void 0&&(f=new gt(new xr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:fs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(E,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),nr.copy(b.backgroundRotation),nr.x*=-1,nr.y*=-1,nr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(nr.y*=-1,nr.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(px.makeRotationFromEuler(nr)),f.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ct,(d!==v||u!==v.version||h!==r.toneMapping)&&(f.material.needsUpdate=!0,d=v,u=v.version,h=r.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new vr(2,2),new bn({name:"BackgroundMaterial",uniforms:fs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==ct,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,h=r.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(Ya,ap(r)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,b,a)}function M(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:M}}function gx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function o(y,w,A,L,D){let F=!1;const B=d(L,A,w);s!==B&&(s=B,l(s.object)),F=h(y,L,A,D),F&&g(y,L,A,D),D!==null&&e.update(D,r.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,b(y,w,A,L),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return r.createVertexArray()}function l(y){return r.bindVertexArray(y)}function f(y){return r.deleteVertexArray(y)}function d(y,w,A){const L=A.wireframe===!0;let D=n[y.id];D===void 0&&(D={},n[y.id]=D);let F=D[w.id];F===void 0&&(F={},D[w.id]=F);let B=F[L];return B===void 0&&(B=u(c()),F[L]=B),B}function u(y){const w=[],A=[],L=[];for(let D=0;D<t;D++)w[D]=0,A[D]=0,L[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:A,attributeDivisors:L,object:y,attributes:{},index:null}}function h(y,w,A,L){const D=s.attributes,F=w.attributes;let B=0;const G=A.getAttributes();for(const k in G)if(G[k].location>=0){const se=D[k];let fe=F[k];if(fe===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor)),se===void 0||se.attribute!==fe||fe&&se.data!==fe.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(y,w,A,L){const D={},F=w.attributes;let B=0;const G=A.getAttributes();for(const k in G)if(G[k].location>=0){let se=F[k];se===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(se=y.instanceColor));const fe={};fe.attribute=se,se&&se.data&&(fe.data=se.data),D[k]=fe,B++}s.attributes=D,s.attributesNum=B,s.index=L}function x(){const y=s.newAttributes;for(let w=0,A=y.length;w<A;w++)y[w]=0}function m(y){p(y,0)}function p(y,w){const A=s.newAttributes,L=s.enabledAttributes,D=s.attributeDivisors;A[y]=1,L[y]===0&&(r.enableVertexAttribArray(y),L[y]=1),D[y]!==w&&(r.vertexAttribDivisor(y,w),D[y]=w)}function M(){const y=s.newAttributes,w=s.enabledAttributes;for(let A=0,L=w.length;A<L;A++)w[A]!==y[A]&&(r.disableVertexAttribArray(A),w[A]=0)}function _(y,w,A,L,D,F,B){B===!0?r.vertexAttribIPointer(y,w,A,D,F):r.vertexAttribPointer(y,w,A,L,D,F)}function b(y,w,A,L){x();const D=L.attributes,F=A.getAttributes(),B=w.defaultAttributeValues;for(const G in F){const k=F[G];if(k.location>=0){let Z=D[G];if(Z===void 0&&(G==="instanceMatrix"&&y.instanceMatrix&&(Z=y.instanceMatrix),G==="instanceColor"&&y.instanceColor&&(Z=y.instanceColor)),Z!==void 0){const se=Z.normalized,fe=Z.itemSize,Ie=e.get(Z);if(Ie===void 0)continue;const qe=Ie.buffer,Qe=Ie.type,ee=Ie.bytesPerElement,W=Qe===r.INT||Qe===r.UNSIGNED_INT||Z.gpuType===Au;if(Z.isInterleavedBufferAttribute){const q=Z.data,ae=q.stride,xe=Z.offset;if(q.isInstancedInterleavedBuffer){for(let Y=0;Y<k.locationSize;Y++)p(k.location+Y,q.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Y=0;Y<k.locationSize;Y++)m(k.location+Y);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let Y=0;Y<k.locationSize;Y++)_(k.location+Y,fe/k.locationSize,Qe,se,ae*ee,(xe+fe/k.locationSize*Y)*ee,W)}else{if(Z.isInstancedBufferAttribute){for(let q=0;q<k.locationSize;q++)p(k.location+q,Z.meshPerAttribute);y.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let q=0;q<k.locationSize;q++)m(k.location+q);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let q=0;q<k.locationSize;q++)_(k.location+q,fe/k.locationSize,Qe,se,fe*ee,fe/k.locationSize*q*ee,W)}}else if(B!==void 0){const se=B[G];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(k.location,se);break;case 3:r.vertexAttrib3fv(k.location,se);break;case 4:r.vertexAttrib4fv(k.location,se);break;default:r.vertexAttrib1fv(k.location,se)}}}}M()}function v(){R();for(const y in n){const w=n[y];for(const A in w){const L=w[A];for(const D in L)f(L[D].object),delete L[D];delete w[A]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const w=n[y.id];for(const A in w){const L=w[A];for(const D in L)f(L[D].object),delete L[D];delete w[A]}delete n[y.id]}function T(y){for(const w in n){const A=n[w];if(A[y.id]===void 0)continue;const L=A[y.id];for(const D in L)f(L[D].object),delete L[D];delete A[y.id]}}function R(){S(),a=!0,s!==i&&(s=i,l(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function bx(r,e,t){let n;function i(l){n=l}function s(l,f){r.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,d){d!==0&&(r.drawArraysInstanced(n,l,f,d),t.update(f,n,d))}function o(l,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,d);let h=0;for(let g=0;g<d;g++)h+=f[g];t.update(h,n,1)}function c(l,f,d,u){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],f[g],u[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,f,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=f[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function _x(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==Sn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===bs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==si&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Hn&&!R)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function xx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Zn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const h=d.length!==0||u||n!==0||i;return i=u,n=d.length,h},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=f(d,u,0)},this.setState=function(d,u,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?f(null):l();else{const M=s?0:n,_=M*4;let b=p.clippingState||null;c.value=b,b=f(g,u,_,h);for(let v=0;v!==_;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,u,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=h;_!==x;++_,b+=4)a.copy(d[_]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vx(r){let e=new WeakMap;function t(a,o){return o===Tl?a.mapping=os:o===wl&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Tl||o===wl)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new kg(c.height);return l.fromEquirectangularTexture(r,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Qr=4,ld=[.125,.215,.35,.446,.526,.582],dr=20,vc=new qu,ud=new Fe;let yc=null,Mc=0,Sc=0,Ec=!1;const ur=(1+Math.sqrt(5))/2,Hr=1/ur,fd=[new I(-ur,Hr,0),new I(ur,Hr,0),new I(-Hr,0,ur),new I(Hr,0,ur),new I(0,ur,-Hr),new I(0,ur,Hr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],yx=new I;class au{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=yx}=s;yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yc,Mc,Sc),this._renderer.xr.enabled=Ec,e.scissorTest=!1,Ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===os||e.mapping===cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yc=this._renderer.getRenderTarget(),Mc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:bs,format:Sn,colorSpace:$t,depthBuffer:!1},i=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mx(s)),this._blurMaterial=Sx(s,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,i,s){const c=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(ud),d.toneMapping=Wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null));const x=new ni({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new gt(new xr,x);let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(ud),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[_],s.y,s.z)):b===1?(c.up.set(0,0,l[_]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[_],s.z)):(c.up.set(0,l[_],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[_]));const v=this._cubeSize;Ka(i,b*v,_>2?v:0,v,v),d.setRenderTarget(i),p&&d.render(m,c),d.render(e,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===os||e.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ka(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,vc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=fd[(i-s-1)%fd.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new gt(this._lodPlanes[i],l),u=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*dr-1),x=s/g,m=isFinite(s)?1+Math.floor(f*x):dr;m>dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);const p=[];let M=0;for(let T=0;T<dr;++T){const R=T/x,S=Math.exp(-R*R/2);p.push(S),T===0?M+=S:T<m&&(M+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-n;const b=this._sizeLods[i],v=3*b*(i>_-Qr?i-_+Qr:0),E=4*(this._cubeSize-b);Ka(t,v,E,3*b,2*b),c.setRenderTarget(t),c.render(d,vc)}}function Mx(r){const e=[],t=[],n=[];let i=r;const s=r-Qr+1+ld.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>r-Qr?c=ld[a-r+Qr-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,d=1+l,u=[f,f,d,f,d,d,f,f,d,d,f,d],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),_=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,R=E>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(S,x*g*E),_.set(u,m*g*E);const y=[E,E,E,E,E,E];b.set(y,p*g*E)}const v=new ln;v.setAttribute("position",new Ot(M,x)),v.setAttribute("uv",new Ot(_,m)),v.setAttribute("faceIndex",new Ot(b,p)),e.push(v),i>Qr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dd(r,e,t){const n=new Xi(r,e,t);return n.texture.mapping=Do,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ka(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Sx(r,e,t){const n=new Float32Array(dr),i=new I(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function hd(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function pd(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Yu(){return`

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
	`}function Ex(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Tl||c===wl,f=c===os||c===cs;if(l||f){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new au(r)),d=l?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return l&&h&&h.height>0||f&&h&&i(h)?(t===null&&(t=new au(r)),d=l?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function i(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wx(r,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete i[u.id];const h=s.get(u);h&&(e.remove(h),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const h in u)e.update(u[h],r.ARRAY_BUFFER)}function l(d){const u=[],h=d.index,g=d.attributes.position;let x=0;if(h!==null){const M=h.array;x=h.version;for(let _=0,b=M.length;_<b;_+=3){const v=M[_+0],E=M[_+1],T=M[_+2];u.push(v,E,E,T,T,v)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,b=M.length/3-1;_<b;_+=3){const v=_+0,E=_+1,T=_+2;u.push(v,E,E,T,T,v)}}else return;const m=new(tp(u)?sp:rp)(u,1);m.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const u=s.get(d);if(u){const h=d.index;h!==null&&u.version<h.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function Ax(r,e,t){let n;function i(u){n=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function c(u,h){r.drawElements(n,h,s,u*a),t.update(h,n,1)}function l(u,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,u*a,g),t.update(h,n,g))}function f(u,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function d(u,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)l(u[p]/a,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,u,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function Rx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cx(r,e,t){const n=new WeakMap,i=new et;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var h=y;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*E*4*d),R=new np(T,v,E,d);R.type=Hn,R.needsUpdate=!0;const S=b*4;for(let w=0;w<d;w++){const A=p[w],L=M[w],D=_[w],F=v*E*4*w;for(let B=0;B<A.count;B++){const G=B*S;g===!0&&(i.fromBufferAttribute(A,B),T[F+G+0]=i.x,T[F+G+1]=i.y,T[F+G+2]=i.z,T[F+G+3]=0),x===!0&&(i.fromBufferAttribute(L,B),T[F+G+4]=i.x,T[F+G+5]=i.y,T[F+G+6]=i.z,T[F+G+7]=0),m===!0&&(i.fromBufferAttribute(D,B),T[F+G+8]=i.x,T[F+G+9]=i.y,T[F+G+10]=i.z,T[F+G+11]=D.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new Oe(v,E)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(r,"morphTargetBaseInfluence",x),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function Px(r,e,t,n){let i=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,d=e.get(c,f);if(i.get(d)!==l&&(e.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const wp=new Lt,md=new bp(1,1),Ap=new np,Rp=new Sg,Cp=new lp,gd=[],bd=[],_d=new Float32Array(16),xd=new Float32Array(9),vd=new Float32Array(4);function Ms(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=gd[i];if(s===void 0&&(s=new Float32Array(i),gd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Dt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function No(r,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Lx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Dt(t,e)}}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Dt(t,e)}}function Ux(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Dt(t,e)}}function Nx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;vd.set(n),r.uniformMatrix2fv(this.addr,!1,vd),Dt(t,n)}}function Fx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;xd.set(n),r.uniformMatrix3fv(this.addr,!1,xd),Dt(t,n)}}function Ox(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(It(t,n))return;_d.set(n),r.uniformMatrix4fv(this.addr,!1,_d),Dt(t,n)}}function Bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function kx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Dt(t,e)}}function zx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Dt(t,e)}}function Hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Dt(t,e)}}function Vx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Gx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Dt(t,e)}}function Wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Dt(t,e)}}function qx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Dt(t,e)}}function Xx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(md.compareFunction=ep,s=md):s=wp,t.setTexture2D(e||s,i)}function jx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rp,i)}function Yx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cp,i)}function Kx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ap,i)}function Jx(r){switch(r){case 5126:return Lx;case 35664:return Ix;case 35665:return Dx;case 35666:return Ux;case 35674:return Nx;case 35675:return Fx;case 35676:return Ox;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Hx;case 5125:return Vx;case 36294:return Gx;case 36295:return Wx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Xx;case 35679:case 36299:case 36307:return jx;case 35680:case 36300:case 36308:case 36293:return Yx;case 36289:case 36303:case 36311:case 36292:return Kx}}function $x(r,e){r.uniform1fv(this.addr,e)}function Zx(r,e){const t=Ms(e,this.size,2);r.uniform2fv(this.addr,t)}function Qx(r,e){const t=Ms(e,this.size,3);r.uniform3fv(this.addr,t)}function ev(r,e){const t=Ms(e,this.size,4);r.uniform4fv(this.addr,t)}function tv(r,e){const t=Ms(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function nv(r,e){const t=Ms(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function iv(r,e){const t=Ms(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function rv(r,e){r.uniform1iv(this.addr,e)}function sv(r,e){r.uniform2iv(this.addr,e)}function av(r,e){r.uniform3iv(this.addr,e)}function ov(r,e){r.uniform4iv(this.addr,e)}function cv(r,e){r.uniform1uiv(this.addr,e)}function lv(r,e){r.uniform2uiv(this.addr,e)}function uv(r,e){r.uniform3uiv(this.addr,e)}function fv(r,e){r.uniform4uiv(this.addr,e)}function dv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||wp,s[a])}function hv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Rp,s[a])}function pv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cp,s[a])}function mv(r,e,t){const n=this.cache,i=e.length,s=No(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Dt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ap,s[a])}function gv(r){switch(r){case 5126:return $x;case 35664:return Zx;case 35665:return Qx;case 35666:return ev;case 35674:return tv;case 35675:return nv;case 35676:return iv;case 5124:case 35670:return rv;case 35667:case 35671:return sv;case 35668:case 35672:return av;case 35669:case 35673:return ov;case 5125:return cv;case 36294:return lv;case 36295:return uv;case 36296:return fv;case 35678:case 36198:case 36298:case 36306:case 35682:return dv;case 35679:case 36299:case 36307:return hv;case 35680:case 36300:case 36308:case 36293:return pv;case 36289:case 36303:case 36311:case 36292:return mv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jx(t.type)}}class _v{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gv(t.type)}}class xv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function yd(r,e){r.seq.push(e),r.map[e.id]=e}function vv(r,e,t){const n=r.name,i=n.length;for(Tc.lastIndex=0;;){const s=Tc.exec(n),a=Tc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){yd(t,l===void 0?new bv(o,r,e):new _v(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new xv(o),yd(t,d)),t=d}}}class vo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);vv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Md(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const yv=37297;let Mv=0;function Sv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Sd=new We;function Ev(r){Ze._getMatrix(Sd,Ze.workingColorSpace,r);const e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(r)){case To:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ed(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Sv(r.getShaderSource(e),o)}else return s}function Tv(r,e){const t=Ev(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function wv(r,e){let t;switch(e){case Nm:t="Linear";break;case Fm:t="Reinhard";break;case Om:t="Cineon";break;case Bm:t="ACESFilmic";break;case Gh:t="AgX";break;case zm:t="Neutral";break;case km:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ja=new I;function Av(){Ze.getLuminanceCoefficients(Ja);const r=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Cv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function qs(r){return r!==""}function Td(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ou(r){return r.replace(Lv,Dv)}const Iv=new Map;function Dv(r,e){let t=Ye[e];if(t===void 0){const n=Iv.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ou(t)}const Uv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(r){return r.replace(Uv,Nv)}function Nv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Rd(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function Fv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vh?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function Ov(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case cs:e="ENVMAP_TYPE_CUBE";break;case Do:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Bv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case cs:e="ENVMAP_MODE_REFRACTION";break}return e}function kv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case wu:e="ENVMAP_BLENDING_MULTIPLY";break;case Dm:e="ENVMAP_BLENDING_MIX";break;case Um:e="ENVMAP_BLENDING_ADD";break}return e}function zv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Fv(t),l=Ov(t),f=Bv(t),d=kv(t),u=zv(t),h=Rv(t),g=Cv(s),x=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qs).join(`
`),p.length>0&&(p+=`
`)):(m=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),p=[Rd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Wi?wv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Tv("linearToOutputTexel",t.outputColorSpace),Av(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qs).join(`
`)),a=ou(a),a=Td(a,t),a=wd(a,t),o=ou(o),o=Td(o,t),o=wd(o,t),a=Ad(a),o=Ad(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+a,b=M+p+o,v=Md(i,i.VERTEX_SHADER,_),E=Md(i,i.FRAGMENT_SHADER,b);i.attachShader(x,v),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(w){if(r.debug.checkShaderErrors){const A=i.getProgramInfoLog(x)||"",L=i.getShaderInfoLog(v)||"",D=i.getShaderInfoLog(E)||"",F=A.trim(),B=L.trim(),G=D.trim();let k=!0,Z=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(k=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,x,v,E);else{const se=Ed(i,v,"vertex"),fe=Ed(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+se+`
`+fe)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(Z=!1);Z&&(w.diagnostics={runnable:k,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:p}})}i.deleteShader(v),i.deleteShader(E),R=new vo(i,x),S=Pv(i,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,yv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Mv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=E,this}let Vv=0;class Gv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wv(e),t.set(e,n)),n}}class Wv{constructor(e){this.id=Vv++,this.code=e,this.usedTimes=0}}function qv(r,e,t,n,i,s,a){const o=new Ou,c=new Gv,l=new Set,f=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,w,A,L){const D=A.fog,F=L.geometry,B=S.isMeshStandardMaterial?A.environment:null,G=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),k=G&&G.mapping===Do?G.image.height:null,Z=g[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,fe=se!==void 0?se.length:0;let Ie=0;F.morphAttributes.position!==void 0&&(Ie=1),F.morphAttributes.normal!==void 0&&(Ie=2),F.morphAttributes.color!==void 0&&(Ie=3);let qe,Qe,ee,W;if(Z){const it=Qn[Z];qe=it.vertexShader,Qe=it.fragmentShader}else qe=S.vertexShader,Qe=S.fragmentShader,c.update(S),ee=c.getVertexShaderID(S),W=c.getFragmentShaderID(S);const q=r.getRenderTarget(),ae=r.state.buffers.depth.getReversed(),xe=L.isInstancedMesh===!0,Y=L.isBatchedMesh===!0,pe=!!S.map,Xe=!!S.matcap,N=!!G,Ke=!!S.aoMap,ge=!!S.lightMap,Pe=!!S.bumpMap,me=!!S.normalMap,lt=!!S.displacementMap,Te=!!S.emissiveMap,je=!!S.metalnessMap,Ut=!!S.roughnessMap,Tt=S.anisotropy>0,U=S.clearcoat>0,C=S.dispersion>0,V=S.iridescence>0,J=S.sheen>0,Q=S.transmission>0,K=Tt&&!!S.anisotropyMap,Le=U&&!!S.clearcoatMap,oe=U&&!!S.clearcoatNormalMap,we=U&&!!S.clearcoatRoughnessMap,Re=V&&!!S.iridescenceMap,ie=V&&!!S.iridescenceThicknessMap,he=J&&!!S.sheenColorMap,ke=J&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,ue=!!S.specularColorMap,Ge=!!S.specularIntensityMap,O=Q&&!!S.transmissionMap,re=Q&&!!S.thicknessMap,ce=!!S.gradientMap,ve=!!S.alphaMap,te=S.alphaTest>0,$=!!S.alphaHash,Se=!!S.extensions;let He=Wi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(He=r.toneMapping);const ft={shaderID:Z,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:Qe,defines:S.defines,customVertexShaderID:ee,customFragmentShaderID:W,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Y,batchingColor:Y&&L._colorsTexture!==null,instancing:xe,instancingColor:xe&&L.instanceColor!==null,instancingMorph:xe&&L.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:q===null?r.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:$t,alphaToCoverage:!!S.alphaToCoverage,map:pe,matcap:Xe,envMap:N,envMapMode:N&&G.mapping,envMapCubeUVHeight:k,aoMap:Ke,lightMap:ge,bumpMap:Pe,normalMap:me,displacementMap:u&&lt,emissiveMap:Te,normalMapObjectSpace:me&&S.normalMapType===Xm,normalMapTangentSpace:me&&S.normalMapType===Uu,metalnessMap:je,roughnessMap:Ut,anisotropy:Tt,anisotropyMap:K,clearcoat:U,clearcoatMap:Le,clearcoatNormalMap:oe,clearcoatRoughnessMap:we,dispersion:C,iridescence:V,iridescenceMap:Re,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:he,sheenRoughnessMap:ke,specularMap:Ce,specularColorMap:ue,specularIntensityMap:Ge,transmission:Q,transmissionMap:O,thicknessMap:re,gradientMap:ce,opaque:S.transparent===!1&&S.blending===ns&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:te,alphaHash:$,combine:S.combine,mapUv:pe&&x(S.map.channel),aoMapUv:Ke&&x(S.aoMap.channel),lightMapUv:ge&&x(S.lightMap.channel),bumpMapUv:Pe&&x(S.bumpMap.channel),normalMapUv:me&&x(S.normalMap.channel),displacementMapUv:lt&&x(S.displacementMap.channel),emissiveMapUv:Te&&x(S.emissiveMap.channel),metalnessMapUv:je&&x(S.metalnessMap.channel),roughnessMapUv:Ut&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:ke&&x(S.sheenRoughnessMap.channel),specularMapUv:Ce&&x(S.specularMap.channel),specularColorMapUv:ue&&x(S.specularColorMap.channel),specularIntensityMapUv:Ge&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:re&&x(S.thicknessMap.channel),alphaMapUv:ve&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(me||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(pe||ve),fog:!!D,useFog:S.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ae,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ie,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&w.length>0,shadowMapType:r.shadowMap.type,toneMapping:He,decodeVideoTexture:pe&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===ct,decodeVideoTextureEmissive:Te&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===sn,flipSided:S.side===qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Y)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const w in S.defines)y.push(w),y.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(M(y,S),_(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function M(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function _(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const y=g[S.type];let w;if(y){const A=Qn[y];w=op.clone(A.uniforms)}else w=S.uniforms;return w}function v(S,y){let w;for(let A=0,L=f.length;A<L;A++){const D=f[A];if(D.cacheKey===y){w=D,++w.usedTimes;break}}return w===void 0&&(w=new Hv(r,y,S,s),f.push(w)),w}function E(S){if(--S.usedTimes===0){const y=f.indexOf(S);f[y]=f[f.length-1],f.pop(),S.destroy()}}function T(S){c.remove(S)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:f,dispose:R}}function Xv(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function jv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Cd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,h,g,x,m){let p=r[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:h,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},r[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function o(d,u,h,g,x,m){const p=a(d,u,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(d,u,h,g,x,m){const p=a(d,u,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function l(d,u){t.length>1&&t.sort(d||jv),n.length>1&&n.sort(u||Cd),i.length>1&&i.sort(u||Cd)}function f(){for(let d=e,u=r.length;d<u;d++){const h=r[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:c,finish:f,sort:l}}function Yv(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Pd,r.set(n,[a])):i>=s.length?(a=new Pd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Kv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Fe};break;case"SpotLight":t={position:new I,direction:new I,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function Jv(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let $v=0;function Zv(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Qv(r){const e=new Kv,t=Jv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const i=new I,s=new Ue,a=new Ue;function o(l){let f=0,d=0,u=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,_=0,b=0,v=0,E=0,T=0;l.sort(Zv);for(let S=0,y=l.length;S<y;S++){const w=l[S],A=w.color,L=w.intensity,D=w.distance,F=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)f+=A.r*L,d+=A.g*L,u+=A.b*L;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],L);T++}else if(w.isDirectionalLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,k=t.get(w);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.directionalShadow[h]=k,n.directionalShadowMap[h]=F,n.directionalShadowMatrix[h]=w.shadow.matrix,M++}n.directional[h]=B,h++}else if(w.isSpotLight){const B=e.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(A).multiplyScalar(L),B.distance=D,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[x]=B;const G=w.shadow;if(w.map&&(n.spotLightMap[v]=w.map,v++,G.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[x]=G.matrix,w.castShadow){const k=t.get(w);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=F,b++}x++}else if(w.isRectAreaLight){const B=e.get(w);B.color.copy(A).multiplyScalar(L),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=B,m++}else if(w.isPointLight){const B=e.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const G=w.shadow,k=t.get(w);k.shadowIntensity=G.intensity,k.shadowBias=G.bias,k.shadowNormalBias=G.normalBias,k.shadowRadius=G.radius,k.shadowMapSize=G.mapSize,k.shadowCameraNear=G.camera.near,k.shadowCameraFar=G.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=w.shadow.matrix,_++}n.point[g]=B,g++}else if(w.isHemisphereLight){const B=e.get(w);B.skyColor.copy(w.color).multiplyScalar(L),B.groundColor.copy(w.groundColor).multiplyScalar(L),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==b||R.numSpotMaps!==v||R.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,R.directionalLength=h,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=b,R.numSpotMaps=v,R.numLightProbes=T,n.version=$v++)}function c(l,f){let d=0,u=0,h=0,g=0,x=0;const m=f.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const _=l[p];if(_.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),d++}else if(_.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const b=n.point[u];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),u++}else if(_.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Ld(r){const e=new Qv(r),t=[],n=[];function i(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function ey(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Ld(r),e.set(i,[o])):s>=a.length?(o=new Ld(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const ty=`void main() {
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
}`;function iy(r,e,t){let n=new zu;const i=new Oe,s=new Oe,a=new et,o=new Qg({depthPacking:qm}),c=new eb,l={},f=t.maxTextureSize,d={[Ln]:qt,[qt]:Ln,[sn]:sn},u=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:ty,fragmentShader:ny}),h=u.clone();h.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new Ot(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let p=this.type;this.render=function(E,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),A=r.state;A.setBlending(Gi),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const L=p!==gi&&this.type===gi,D=p===gi&&this.type!==gi;for(let F=0,B=E.length;F<B;F++){const G=E[F],k=G.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const Z=k.getFrameExtents();if(i.multiply(Z),s.copy(k.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/Z.x),i.x=s.x*Z.x,k.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/Z.y),i.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||L===!0||D===!0){const fe=this.type!==gi?{minFilter:Jt,magFilter:Jt}:{};k.map!==null&&k.map.dispose(),k.map=new Xi(i.x,i.y,fe),k.map.texture.name=G.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const se=k.getViewportCount();for(let fe=0;fe<se;fe++){const Ie=k.getViewport(fe);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),A.viewport(a),k.updateMatrices(G,fe),n=k.getFrustum(),b(T,R,k.camera,G,this.type)}k.isPointLightShadow!==!0&&this.type===gi&&M(k,R),k.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(S,y,w)};function M(E,T){const R=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Xi(i.x,i.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,R,u,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,R,h,x,null)}function _(E,T,R,S){let y=null;const w=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)y=w;else if(y=R.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const A=y.uuid,L=T.uuid;let D=l[A];D===void 0&&(D={},l[A]=D);let F=D[L];F===void 0&&(F=y.clone(),D[L]=F,T.addEventListener("dispose",v)),y=F}if(y.visible=T.visible,y.wireframe=T.wireframe,S===gi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:d[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const A=r.properties.get(y);A.light=R}return y}function b(E,T,R,S,y){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===gi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);const L=e.update(E),D=E.material;if(Array.isArray(D)){const F=L.groups;for(let B=0,G=F.length;B<G;B++){const k=F[B],Z=D[k.materialIndex];if(Z&&Z.visible){const se=_(E,Z,S,y);E.onBeforeShadow(r,E,T,R,L,se,k),r.renderBufferDirect(R,null,L,se,E,k),E.onAfterShadow(r,E,T,R,L,se,k)}}}else if(D.visible){const F=_(E,D,S,y);E.onBeforeShadow(r,E,T,R,L,F,null),r.renderBufferDirect(R,null,L,F,E,null),E.onAfterShadow(r,E,T,R,L,F,null)}}const A=E.children;for(let L=0,D=A.length;L<D;L++)b(A[L],T,R,S,y)}function v(E){E.target.removeEventListener("dispose",v);for(const R in l){const S=l[R],y=E.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const ry={[_l]:xl,[vl]:Sl,[yl]:El,[as]:Ml,[xl]:_l,[Sl]:vl,[El]:yl,[Ml]:as};function sy(r,e){function t(){let O=!1;const re=new et;let ce=null;const ve=new et(0,0,0,0);return{setMask:function(te){ce!==te&&!O&&(r.colorMask(te,te,te,te),ce=te)},setLocked:function(te){O=te},setClear:function(te,$,Se,He,ft){ft===!0&&(te*=He,$*=He,Se*=He),re.set(te,$,Se,He),ve.equals(re)===!1&&(r.clearColor(te,$,Se,He),ve.copy(re))},reset:function(){O=!1,ce=null,ve.set(-1,0,0,0)}}}function n(){let O=!1,re=!1,ce=null,ve=null,te=null;return{setReversed:function($){if(re!==$){const Se=e.get("EXT_clip_control");$?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),re=$;const He=te;te=null,this.setClear(He)}},getReversed:function(){return re},setTest:function($){$?q(r.DEPTH_TEST):ae(r.DEPTH_TEST)},setMask:function($){ce!==$&&!O&&(r.depthMask($),ce=$)},setFunc:function($){if(re&&($=ry[$]),ve!==$){switch($){case _l:r.depthFunc(r.NEVER);break;case xl:r.depthFunc(r.ALWAYS);break;case vl:r.depthFunc(r.LESS);break;case as:r.depthFunc(r.LEQUAL);break;case yl:r.depthFunc(r.EQUAL);break;case Ml:r.depthFunc(r.GEQUAL);break;case Sl:r.depthFunc(r.GREATER);break;case El:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ve=$}},setLocked:function($){O=$},setClear:function($){te!==$&&(re&&($=1-$),r.clearDepth($),te=$)},reset:function(){O=!1,ce=null,ve=null,te=null,re=!1}}}function i(){let O=!1,re=null,ce=null,ve=null,te=null,$=null,Se=null,He=null,ft=null;return{setTest:function(it){O||(it?q(r.STENCIL_TEST):ae(r.STENCIL_TEST))},setMask:function(it){re!==it&&!O&&(r.stencilMask(it),re=it)},setFunc:function(it,li,Kn){(ce!==it||ve!==li||te!==Kn)&&(r.stencilFunc(it,li,Kn),ce=it,ve=li,te=Kn)},setOp:function(it,li,Kn){($!==it||Se!==li||He!==Kn)&&(r.stencilOp(it,li,Kn),$=it,Se=li,He=Kn)},setLocked:function(it){O=it},setClear:function(it){ft!==it&&(r.clearStencil(it),ft=it)},reset:function(){O=!1,re=null,ce=null,ve=null,te=null,$=null,Se=null,He=null,ft=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let f={},d={},u=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,_=null,b=null,v=null,E=null,T=new Fe(0,0,0),R=0,S=!1,y=null,w=null,A=null,L=null,D=null;const F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(k)[1]),B=G>=1):k.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),B=G>=2);let Z=null,se={};const fe=r.getParameter(r.SCISSOR_BOX),Ie=r.getParameter(r.VIEWPORT),qe=new et().fromArray(fe),Qe=new et().fromArray(Ie);function ee(O,re,ce,ve){const te=new Uint8Array(4),$=r.createTexture();r.bindTexture(O,$),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Se=0;Se<ce;Se++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(re,0,r.RGBA,1,1,ve,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(re+Se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return $}const W={};W[r.TEXTURE_2D]=ee(r.TEXTURE_2D,r.TEXTURE_2D,1),W[r.TEXTURE_CUBE_MAP]=ee(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[r.TEXTURE_2D_ARRAY]=ee(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),W[r.TEXTURE_3D]=ee(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(r.DEPTH_TEST),a.setFunc(as),Pe(!1),me(pf),q(r.CULL_FACE),Ke(Gi);function q(O){f[O]!==!0&&(r.enable(O),f[O]=!0)}function ae(O){f[O]!==!1&&(r.disable(O),f[O]=!1)}function xe(O,re){return d[O]!==re?(r.bindFramebuffer(O,re),d[O]=re,O===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=re),O===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=re),!0):!1}function Y(O,re){let ce=h,ve=!1;if(O){ce=u.get(re),ce===void 0&&(ce=[],u.set(re,ce));const te=O.textures;if(ce.length!==te.length||ce[0]!==r.COLOR_ATTACHMENT0){for(let $=0,Se=te.length;$<Se;$++)ce[$]=r.COLOR_ATTACHMENT0+$;ce.length=te.length,ve=!0}}else ce[0]!==r.BACK&&(ce[0]=r.BACK,ve=!0);ve&&r.drawBuffers(ce)}function pe(O){return g!==O?(r.useProgram(O),g=O,!0):!1}const Xe={[fr]:r.FUNC_ADD,[gm]:r.FUNC_SUBTRACT,[bm]:r.FUNC_REVERSE_SUBTRACT};Xe[_m]=r.MIN,Xe[xm]=r.MAX;const N={[vm]:r.ZERO,[ym]:r.ONE,[Mm]:r.SRC_COLOR,[gl]:r.SRC_ALPHA,[Rm]:r.SRC_ALPHA_SATURATE,[wm]:r.DST_COLOR,[Em]:r.DST_ALPHA,[Sm]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[Am]:r.ONE_MINUS_DST_COLOR,[Tm]:r.ONE_MINUS_DST_ALPHA,[Cm]:r.CONSTANT_COLOR,[Pm]:r.ONE_MINUS_CONSTANT_COLOR,[Lm]:r.CONSTANT_ALPHA,[Im]:r.ONE_MINUS_CONSTANT_ALPHA};function Ke(O,re,ce,ve,te,$,Se,He,ft,it){if(O===Gi){x===!0&&(ae(r.BLEND),x=!1);return}if(x===!1&&(q(r.BLEND),x=!0),O!==mm){if(O!==m||it!==S){if((p!==fr||b!==fr)&&(r.blendEquation(r.FUNC_ADD),p=fr,b=fr),it)switch(O){case ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ss:r.blendFunc(r.ONE,r.ONE);break;case mf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gf:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ss:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case mf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,_=null,v=null,E=null,T.set(0,0,0),R=0,m=O,S=it}return}te=te||re,$=$||ce,Se=Se||ve,(re!==p||te!==b)&&(r.blendEquationSeparate(Xe[re],Xe[te]),p=re,b=te),(ce!==M||ve!==_||$!==v||Se!==E)&&(r.blendFuncSeparate(N[ce],N[ve],N[$],N[Se]),M=ce,_=ve,v=$,E=Se),(He.equals(T)===!1||ft!==R)&&(r.blendColor(He.r,He.g,He.b,ft),T.copy(He),R=ft),m=O,S=!1}function ge(O,re){O.side===sn?ae(r.CULL_FACE):q(r.CULL_FACE);let ce=O.side===qt;re&&(ce=!ce),Pe(ce),O.blending===ns&&O.transparent===!1?Ke(Gi):Ke(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const ve=O.stencilWrite;o.setTest(ve),ve&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(r.SAMPLE_ALPHA_TO_COVERAGE):ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function Pe(O){y!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),y=O)}function me(O){O!==dm?(q(r.CULL_FACE),O!==w&&(O===pf?r.cullFace(r.BACK):O===hm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ae(r.CULL_FACE),w=O}function lt(O){O!==A&&(B&&r.lineWidth(O),A=O)}function Te(O,re,ce){O?(q(r.POLYGON_OFFSET_FILL),(L!==re||D!==ce)&&(r.polygonOffset(re,ce),L=re,D=ce)):ae(r.POLYGON_OFFSET_FILL)}function je(O){O?q(r.SCISSOR_TEST):ae(r.SCISSOR_TEST)}function Ut(O){O===void 0&&(O=r.TEXTURE0+F-1),Z!==O&&(r.activeTexture(O),Z=O)}function Tt(O,re,ce){ce===void 0&&(Z===null?ce=r.TEXTURE0+F-1:ce=Z);let ve=se[ce];ve===void 0&&(ve={type:void 0,texture:void 0},se[ce]=ve),(ve.type!==O||ve.texture!==re)&&(Z!==ce&&(r.activeTexture(ce),Z=ce),r.bindTexture(O,re||W[O]),ve.type=O,ve.texture=re)}function U(){const O=se[Z];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{r.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{r.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Le(){try{r.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{r.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{r.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{r.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{r.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(O){qe.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),qe.copy(O))}function ke(O){Qe.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Qe.copy(O))}function Ce(O,re){let ce=l.get(re);ce===void 0&&(ce=new WeakMap,l.set(re,ce));let ve=ce.get(O);ve===void 0&&(ve=r.getUniformBlockIndex(re,O.name),ce.set(O,ve))}function ue(O,re){const ve=l.get(re).get(O);c.get(re)!==ve&&(r.uniformBlockBinding(re,ve,O.__bindingPointIndex),c.set(re,ve))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},Z=null,se={},d={},u=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,_=null,b=null,v=null,E=null,T=new Fe(0,0,0),R=0,S=!1,y=null,w=null,A=null,L=null,D=null,qe.set(0,0,r.canvas.width,r.canvas.height),Qe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:ae,bindFramebuffer:xe,drawBuffers:Y,useProgram:pe,setBlending:Ke,setMaterial:ge,setFlipSided:Pe,setCullFace:me,setLineWidth:lt,setPolygonOffset:Te,setScissorTest:je,activeTexture:Ut,bindTexture:Tt,unbindTexture:U,compressedTexImage2D:C,compressedTexImage3D:V,texImage2D:Re,texImage3D:ie,updateUBOMapping:Ce,uniformBlockBinding:ue,texStorage2D:oe,texStorage3D:we,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:K,compressedTexSubImage3D:Le,scissor:he,viewport:ke,reset:Ge}}function ay(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,f=new WeakMap;let d;const u=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,C){return h?new OffscreenCanvas(U,C):fa("canvas")}function x(U,C,V){let J=1;const Q=Tt(U);if((Q.width>V||Q.height>V)&&(J=V/Math.max(Q.width,Q.height)),J<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const K=Math.floor(J*Q.width),Le=Math.floor(J*Q.height);d===void 0&&(d=g(K,Le));const oe=C?g(K,Le):d;return oe.width=K,oe.height=Le,oe.getContext("2d").drawImage(U,0,0,K,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Le+")."),oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function M(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(U,C,V,J,Q=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let K=C;if(C===r.RED&&(V===r.FLOAT&&(K=r.R32F),V===r.HALF_FLOAT&&(K=r.R16F),V===r.UNSIGNED_BYTE&&(K=r.R8)),C===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.R8UI),V===r.UNSIGNED_SHORT&&(K=r.R16UI),V===r.UNSIGNED_INT&&(K=r.R32UI),V===r.BYTE&&(K=r.R8I),V===r.SHORT&&(K=r.R16I),V===r.INT&&(K=r.R32I)),C===r.RG&&(V===r.FLOAT&&(K=r.RG32F),V===r.HALF_FLOAT&&(K=r.RG16F),V===r.UNSIGNED_BYTE&&(K=r.RG8)),C===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RG8UI),V===r.UNSIGNED_SHORT&&(K=r.RG16UI),V===r.UNSIGNED_INT&&(K=r.RG32UI),V===r.BYTE&&(K=r.RG8I),V===r.SHORT&&(K=r.RG16I),V===r.INT&&(K=r.RG32I)),C===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGB8UI),V===r.UNSIGNED_SHORT&&(K=r.RGB16UI),V===r.UNSIGNED_INT&&(K=r.RGB32UI),V===r.BYTE&&(K=r.RGB8I),V===r.SHORT&&(K=r.RGB16I),V===r.INT&&(K=r.RGB32I)),C===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),V===r.UNSIGNED_INT&&(K=r.RGBA32UI),V===r.BYTE&&(K=r.RGBA8I),V===r.SHORT&&(K=r.RGBA16I),V===r.INT&&(K=r.RGBA32I)),C===r.RGB&&(V===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),V===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),C===r.RGBA){const Le=Q?To:Ze.getTransfer(J);V===r.FLOAT&&(K=r.RGBA32F),V===r.HALF_FLOAT&&(K=r.RGBA16F),V===r.UNSIGNED_BYTE&&(K=Le===ct?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function b(U,C){let V;return U?C===null||C===_r||C===aa?V=r.DEPTH24_STENCIL8:C===Hn?V=r.DEPTH32F_STENCIL8:C===sa&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===_r||C===aa?V=r.DEPTH_COMPONENT24:C===Hn?V=r.DEPTH_COMPONENT32F:C===sa&&(V=r.DEPTH_COMPONENT16),V}function v(U,C){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Jt&&U.minFilter!==Kt?Math.log2(Math.max(C.width,C.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?C.mipmaps.length:1}function E(U){const C=U.target;C.removeEventListener("dispose",E),R(C),C.isVideoTexture&&f.delete(C)}function T(U){const C=U.target;C.removeEventListener("dispose",T),y(C)}function R(U){const C=n.get(U);if(C.__webglInit===void 0)return;const V=U.source,J=u.get(V);if(J){const Q=J[C.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&S(U),Object.keys(J).length===0&&u.delete(V)}n.remove(U)}function S(U){const C=n.get(U);r.deleteTexture(C.__webglTexture);const V=U.source,J=u.get(V);delete J[C.__cacheKey],a.memory.textures--}function y(U){const C=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(C.__webglFramebuffer[J]))for(let Q=0;Q<C.__webglFramebuffer[J].length;Q++)r.deleteFramebuffer(C.__webglFramebuffer[J][Q]);else r.deleteFramebuffer(C.__webglFramebuffer[J]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[J])}else{if(Array.isArray(C.__webglFramebuffer))for(let J=0;J<C.__webglFramebuffer.length;J++)r.deleteFramebuffer(C.__webglFramebuffer[J]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let J=0;J<C.__webglColorRenderbuffer.length;J++)C.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[J]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const V=U.textures;for(let J=0,Q=V.length;J<Q;J++){const K=n.get(V[J]);K.__webglTexture&&(r.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[J])}n.remove(U)}let w=0;function A(){w=0}function L(){const U=w;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),w+=1,U}function D(U){const C=[];return C.push(U.wrapS),C.push(U.wrapT),C.push(U.wrapR||0),C.push(U.magFilter),C.push(U.minFilter),C.push(U.anisotropy),C.push(U.internalFormat),C.push(U.format),C.push(U.type),C.push(U.generateMipmaps),C.push(U.premultiplyAlpha),C.push(U.flipY),C.push(U.unpackAlignment),C.push(U.colorSpace),C.join()}function F(U,C){const V=n.get(U);if(U.isVideoTexture&&je(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&V.__version!==U.version){const J=U.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,U,C);return}}else U.isExternalTexture&&(V.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+C)}function B(U,C){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){W(V,U,C);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+C)}function G(U,C){const V=n.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&V.__version!==U.version){W(V,U,C);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+C)}function k(U,C){const V=n.get(U);if(U.version>0&&V.__version!==U.version){q(V,U,C);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+C)}const Z={[ls]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[Eo]:r.MIRRORED_REPEAT},se={[Jt]:r.NEAREST,[qh]:r.NEAREST_MIPMAP_NEAREST,[Ws]:r.NEAREST_MIPMAP_LINEAR,[Kt]:r.LINEAR,[mo]:r.LINEAR_MIPMAP_NEAREST,[zn]:r.LINEAR_MIPMAP_LINEAR},fe={[jm]:r.NEVER,[Qm]:r.ALWAYS,[Ym]:r.LESS,[ep]:r.LEQUAL,[Km]:r.EQUAL,[Zm]:r.GEQUAL,[Jm]:r.GREATER,[$m]:r.NOTEQUAL};function Ie(U,C){if(C.type===Hn&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===Kt||C.magFilter===mo||C.magFilter===Ws||C.magFilter===zn||C.minFilter===Kt||C.minFilter===mo||C.minFilter===Ws||C.minFilter===zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,Z[C.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,Z[C.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,Z[C.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,se[C.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,se[C.minFilter]),C.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,fe[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Jt||C.minFilter!==Ws&&C.minFilter!==zn||C.type===Hn&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(U,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function qe(U,C){let V=!1;U.__webglInit===void 0&&(U.__webglInit=!0,C.addEventListener("dispose",E));const J=C.source;let Q=u.get(J);Q===void 0&&(Q={},u.set(J,Q));const K=D(C);if(K!==U.__cacheKey){Q[K]===void 0&&(Q[K]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[K].usedTimes++;const Le=Q[U.__cacheKey];Le!==void 0&&(Q[U.__cacheKey].usedTimes--,Le.usedTimes===0&&S(C)),U.__cacheKey=K,U.__webglTexture=Q[K].texture}return V}function Qe(U,C,V){return Math.floor(Math.floor(U/V)/C)}function ee(U,C,V,J){const K=U.updateRanges;if(K.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,V,J,C.data);else{K.sort((ie,he)=>ie.start-he.start);let Le=0;for(let ie=1;ie<K.length;ie++){const he=K[Le],ke=K[ie],Ce=he.start+he.count,ue=Qe(ke.start,C.width,4),Ge=Qe(he.start,C.width,4);ke.start<=Ce+1&&ue===Ge&&Qe(ke.start+ke.count-1,C.width,4)===ue?he.count=Math.max(he.count,ke.start+ke.count-he.start):(++Le,K[Le]=ke)}K.length=Le+1;const oe=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),Re=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let ie=0,he=K.length;ie<he;ie++){const ke=K[ie],Ce=Math.floor(ke.start/4),ue=Math.ceil(ke.count/4),Ge=Ce%C.width,O=Math.floor(Ce/C.width),re=ue,ce=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ge,O,re,ce,V,J,C.data)}U.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,Re)}}function W(U,C,V){let J=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(J=r.TEXTURE_3D);const Q=qe(U,C),K=C.source;t.bindTexture(J,U.__webglTexture,r.TEXTURE0+V);const Le=n.get(K);if(K.version!==Le.__version||Q===!0){t.activeTexture(r.TEXTURE0+V);const oe=Ze.getPrimaries(Ze.workingColorSpace),we=C.colorSpace===ki?null:Ze.getPrimaries(C.colorSpace),Re=C.colorSpace===ki||oe===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let ie=x(C.image,!1,i.maxTextureSize);ie=Ut(C,ie);const he=s.convert(C.format,C.colorSpace),ke=s.convert(C.type);let Ce=_(C.internalFormat,he,ke,C.colorSpace,C.isVideoTexture);Ie(J,C);let ue;const Ge=C.mipmaps,O=C.isVideoTexture!==!0,re=Le.__version===void 0||Q===!0,ce=K.dataReady,ve=v(C,ie);if(C.isDepthTexture)Ce=b(C.format===ca,C.type),re&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ce,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,Ce,ie.width,ie.height,0,he,ke,null));else if(C.isDataTexture)if(Ge.length>0){O&&re&&t.texStorage2D(r.TEXTURE_2D,ve,Ce,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)ue=Ge[te],O?ce&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,he,ke,ue.data):t.texImage2D(r.TEXTURE_2D,te,Ce,ue.width,ue.height,0,he,ke,ue.data);C.generateMipmaps=!1}else O?(re&&t.texStorage2D(r.TEXTURE_2D,ve,Ce,ie.width,ie.height),ce&&ee(C,ie,he,ke)):t.texImage2D(r.TEXTURE_2D,0,Ce,ie.width,ie.height,0,he,ke,ie.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){O&&re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Ce,Ge[0].width,Ge[0].height,ie.depth);for(let te=0,$=Ge.length;te<$;te++)if(ue=Ge[te],C.format!==Sn)if(he!==null)if(O){if(ce)if(C.layerUpdates.size>0){const Se=cd(ue.width,ue.height,C.format,C.type);for(const He of C.layerUpdates){const ft=ue.data.subarray(He*Se/ue.data.BYTES_PER_ELEMENT,(He+1)*Se/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,He,ue.width,ue.height,1,he,ft)}C.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,he,ue.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,Ce,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ce&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,he,ke,ue.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,Ce,ue.width,ue.height,ie.depth,0,he,ke,ue.data)}else{O&&re&&t.texStorage2D(r.TEXTURE_2D,ve,Ce,Ge[0].width,Ge[0].height);for(let te=0,$=Ge.length;te<$;te++)ue=Ge[te],C.format!==Sn?he!==null?O?ce&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,he,ue.data):t.compressedTexImage2D(r.TEXTURE_2D,te,Ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ce&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ue.width,ue.height,he,ke,ue.data):t.texImage2D(r.TEXTURE_2D,te,Ce,ue.width,ue.height,0,he,ke,ue.data)}else if(C.isDataArrayTexture)if(O){if(re&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,Ce,ie.width,ie.height,ie.depth),ce)if(C.layerUpdates.size>0){const te=cd(ie.width,ie.height,C.format,C.type);for(const $ of C.layerUpdates){const Se=ie.data.subarray($*te/ie.data.BYTES_PER_ELEMENT,($+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,he,ke,Se)}C.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,ke,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ce,ie.width,ie.height,ie.depth,0,he,ke,ie.data);else if(C.isData3DTexture)O?(re&&t.texStorage3D(r.TEXTURE_3D,ve,Ce,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,ke,ie.data)):t.texImage3D(r.TEXTURE_3D,0,Ce,ie.width,ie.height,ie.depth,0,he,ke,ie.data);else if(C.isFramebufferTexture){if(re)if(O)t.texStorage2D(r.TEXTURE_2D,ve,Ce,ie.width,ie.height);else{let te=ie.width,$=ie.height;for(let Se=0;Se<ve;Se++)t.texImage2D(r.TEXTURE_2D,Se,Ce,te,$,0,he,ke,null),te>>=1,$>>=1}}else if(Ge.length>0){if(O&&re){const te=Tt(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ve,Ce,te.width,te.height)}for(let te=0,$=Ge.length;te<$;te++)ue=Ge[te],O?ce&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,he,ke,ue):t.texImage2D(r.TEXTURE_2D,te,Ce,he,ke,ue);C.generateMipmaps=!1}else if(O){if(re){const te=Tt(ie);t.texStorage2D(r.TEXTURE_2D,ve,Ce,te.width,te.height)}ce&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,ke,ie)}else t.texImage2D(r.TEXTURE_2D,0,Ce,he,ke,ie);m(C)&&p(J),Le.__version=K.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function q(U,C,V){if(C.image.length!==6)return;const J=qe(U,C),Q=C.source;t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+V);const K=n.get(Q);if(Q.version!==K.__version||J===!0){t.activeTexture(r.TEXTURE0+V);const Le=Ze.getPrimaries(Ze.workingColorSpace),oe=C.colorSpace===ki?null:Ze.getPrimaries(C.colorSpace),we=C.colorSpace===ki||Le===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Re=C.isCompressedTexture||C.image[0].isCompressedTexture,ie=C.image[0]&&C.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Re&&!ie?he[$]=x(C.image[$],!0,i.maxCubemapSize):he[$]=ie?C.image[$].image:C.image[$],he[$]=Ut(C,he[$]);const ke=he[0],Ce=s.convert(C.format,C.colorSpace),ue=s.convert(C.type),Ge=_(C.internalFormat,Ce,ue,C.colorSpace),O=C.isVideoTexture!==!0,re=K.__version===void 0||J===!0,ce=Q.dataReady;let ve=v(C,ke);Ie(r.TEXTURE_CUBE_MAP,C);let te;if(Re){O&&re&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ge,ke.width,ke.height);for(let $=0;$<6;$++){te=he[$].mipmaps;for(let Se=0;Se<te.length;Se++){const He=te[Se];C.format!==Sn?Ce!==null?O?ce&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,Ce,He.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,0,0,He.width,He.height,Ce,ue,He.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se,Ge,He.width,He.height,0,Ce,ue,He.data)}}}else{if(te=C.mipmaps,O&&re){te.length>0&&ve++;const $=Tt(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ve,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ie){O?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Ce,ue,he[$].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,he[$].width,he[$].height,0,Ce,ue,he[$].data);for(let Se=0;Se<te.length;Se++){const ft=te[Se].image[$].image;O?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,ft.width,ft.height,Ce,ue,ft.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Ge,ft.width,ft.height,0,Ce,ue,ft.data)}}else{O?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Ce,ue,he[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Ce,ue,he[$]);for(let Se=0;Se<te.length;Se++){const He=te[Se];O?ce&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,0,0,Ce,ue,He.image[$]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+$,Se+1,Ge,Ce,ue,He.image[$])}}}m(C)&&p(r.TEXTURE_CUBE_MAP),K.__version=Q.version,C.onUpdate&&C.onUpdate(C)}U.__version=C.version}function ae(U,C,V,J,Q,K){const Le=s.convert(V.format,V.colorSpace),oe=s.convert(V.type),we=_(V.internalFormat,Le,oe,V.colorSpace),Re=n.get(C),ie=n.get(V);if(ie.__renderTarget=C,!Re.__hasExternalTextures){const he=Math.max(1,C.width>>K),ke=Math.max(1,C.height>>K);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,K,we,he,ke,C.depth,0,Le,oe,null):t.texImage2D(Q,K,we,he,ke,0,Le,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,U),Te(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,ie.__webglTexture,0,lt(C)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,ie.__webglTexture,K),t.bindFramebuffer(r.FRAMEBUFFER,null)}function xe(U,C,V){if(r.bindRenderbuffer(r.RENDERBUFFER,U),C.depthBuffer){const J=C.depthTexture,Q=J&&J.isDepthTexture?J.type:null,K=b(C.stencilBuffer,Q),Le=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=lt(C);Te(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,K,C.width,C.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,K,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,K,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Le,r.RENDERBUFFER,U)}else{const J=C.textures;for(let Q=0;Q<J.length;Q++){const K=J[Q],Le=s.convert(K.format,K.colorSpace),oe=s.convert(K.type),we=_(K.internalFormat,Le,oe,K.colorSpace),Re=lt(C);V&&Te(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,we,C.width,C.height):Te(C)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Re,we,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,we,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Y(U,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,U),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(C.depthTexture);J.__renderTarget=C,(!J.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),F(C.depthTexture,0);const Q=J.__webglTexture,K=lt(C);if(C.depthTexture.format===oa)Te(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(C.depthTexture.format===ca)Te(C)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function pe(U){const C=n.get(U),V=U.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==U.depthTexture){const J=U.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),J){const Q=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,J.removeEventListener("dispose",Q)};J.addEventListener("dispose",Q),C.__depthDisposeCallback=Q}C.__boundDepthTexture=J}if(U.depthTexture&&!C.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");const J=U.texture.mipmaps;J&&J.length>0?Y(C.__webglFramebuffer[0],U):Y(C.__webglFramebuffer,U)}else if(V){C.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[J]),C.__webglDepthbuffer[J]===void 0)C.__webglDepthbuffer[J]=r.createRenderbuffer(),xe(C.__webglDepthbuffer[J],U,!1);else{const Q=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=C.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}else{const J=U.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),xe(C.__webglDepthbuffer,U,!1);else{const Q=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,K=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,K),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,K)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(U,C,V){const J=n.get(U);C!==void 0&&ae(J.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&pe(U)}function N(U){const C=U.texture,V=n.get(U),J=n.get(C);U.addEventListener("dispose",T);const Q=U.textures,K=U.isWebGLCubeRenderTarget===!0,Le=Q.length>1;if(Le||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=C.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let we=0;we<C.mipmaps.length;we++)V.__webglFramebuffer[oe][we]=r.createFramebuffer()}else V.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<C.mipmaps.length;oe++)V.__webglFramebuffer[oe]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Le)for(let oe=0,we=Q.length;oe<we;oe++){const Re=n.get(Q[oe]);Re.__webglTexture===void 0&&(Re.__webglTexture=r.createTexture(),a.memory.textures++)}if(U.samples>0&&Te(U)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const we=Q[oe];V.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const Re=s.convert(we.format,we.colorSpace),ie=s.convert(we.type),he=_(we.internalFormat,Re,ie,we.colorSpace,U.isXRRenderTarget===!0),ke=lt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,ke,he,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),xe(V.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(K){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ie(r.TEXTURE_CUBE_MAP,C);for(let oe=0;oe<6;oe++)if(C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)ae(V.__webglFramebuffer[oe][we],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,we);else ae(V.__webglFramebuffer[oe],U,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(C)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let oe=0,we=Q.length;oe<we;oe++){const Re=Q[oe],ie=n.get(Re);let he=r.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Ie(he,Re),ae(V.__webglFramebuffer,U,Re,r.COLOR_ATTACHMENT0+oe,he,0),m(Re)&&p(he)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(oe=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,J.__webglTexture),Ie(oe,C),C.mipmaps&&C.mipmaps.length>0)for(let we=0;we<C.mipmaps.length;we++)ae(V.__webglFramebuffer[we],U,C,r.COLOR_ATTACHMENT0,oe,we);else ae(V.__webglFramebuffer,U,C,r.COLOR_ATTACHMENT0,oe,0);m(C)&&p(oe),t.unbindTexture()}U.depthBuffer&&pe(U)}function Ke(U){const C=U.textures;for(let V=0,J=C.length;V<J;V++){const Q=C[V];if(m(Q)){const K=M(U),Le=n.get(Q).__webglTexture;t.bindTexture(K,Le),p(K),t.unbindTexture()}}}const ge=[],Pe=[];function me(U){if(U.samples>0){if(Te(U)===!1){const C=U.textures,V=U.width,J=U.height;let Q=r.COLOR_BUFFER_BIT;const K=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Le=n.get(U),oe=C.length>1;if(oe)for(let Re=0;Re<C.length;Re++)t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const we=U.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<C.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const ie=n.get(C[Re]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,V,J,0,0,V,J,Q,r.NEAREST),c===!0&&(ge.length=0,Pe.length=0,ge.push(r.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ge.push(K),Pe.push(K),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Pe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Re=0;Re<C.length;Re++){t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const ie=n.get(C[Re]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Le.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Re,r.TEXTURE_2D,ie,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const C=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function lt(U){return Math.min(i.maxSamples,U.samples)}function Te(U){const C=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function je(U){const C=a.render.frame;f.get(U)!==C&&(f.set(U,C),U.update())}function Ut(U,C){const V=U.colorSpace,J=U.format,Q=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||V!==$t&&V!==ki&&(Ze.getTransfer(V)===ct?(J!==Sn||Q!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),C}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=L,this.resetTextureUnits=A,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=k,this.rebindTextures=Xe,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Te}function oy(r,e){function t(n,i=ki){let s;const a=Ze.getTransfer(i);if(n===si)return r.UNSIGNED_BYTE;if(n===Ru)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Cu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return r.BYTE;if(n===jh)return r.SHORT;if(n===sa)return r.UNSIGNED_SHORT;if(n===Au)return r.INT;if(n===_r)return r.UNSIGNED_INT;if(n===Hn)return r.FLOAT;if(n===bs)return r.HALF_FLOAT;if(n===Jh)return r.ALPHA;if(n===$h)return r.RGB;if(n===Sn)return r.RGBA;if(n===oa)return r.DEPTH_COMPONENT;if(n===ca)return r.DEPTH_STENCIL;if(n===Pu)return r.RED;if(n===Lu)return r.RED_INTEGER;if(n===Zh)return r.RG;if(n===Iu)return r.RG_INTEGER;if(n===Du)return r.RGBA_INTEGER;if(n===go||n===bo||n===_o||n===xo)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Al||n===Rl||n===Cl||n===Pl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Al)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ll||n===Il||n===Dl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ll||n===Il)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Dl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ul||n===Nl||n===Fl||n===Ol||n===Bl||n===kl||n===zl||n===Hl||n===Vl||n===Gl||n===Wl||n===ql||n===Xl||n===jl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ul)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ol)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===kl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Wl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jl)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yl||n===Kl||n===Jl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yl)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$l||n===Zl||n===Ql||n===eu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$l)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Zl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ql)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const cy=`
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

}`;class uy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new _p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bn({vertexShader:cy,fragmentShader:ly,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new vr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fy extends _s{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,d=null,u=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new uy,p={},M=t.getContextAttributes();let _=null,b=null;const v=[],E=[],T=new Oe;let R=null;const S=new Gt;S.viewport=new et;const y=new Gt;y.viewport=new et;const w=[S,y],A=new yb;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let q=v[W];return q===void 0&&(q=new fc,v[W]=q),q.getTargetRaySpace()},this.getControllerGrip=function(W){let q=v[W];return q===void 0&&(q=new fc,v[W]=q),q.getGripSpace()},this.getHand=function(W){let q=v[W];return q===void 0&&(q=new fc,v[W]=q),q.getHandSpace()};function F(W){const q=E.indexOf(W.inputSource);if(q===-1)return;const ae=v[q];ae!==void 0&&(ae.update(W.inputSource,W.frame,l||a),ae.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",G);for(let W=0;W<v.length;W++){const q=E[W];q!==null&&(E[W]=null,v[W].disconnect(q))}L=null,D=null,m.reset();for(const W in p)delete p[W];e.setRenderTarget(_),h=null,u=null,d=null,i=null,b=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(W){l=W},this.getBaseLayer=function(){return u!==null?u:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",B),i.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,xe=null,Y=null;M.depth&&(Y=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=M.stencil?ca:oa,xe=M.stencil?aa:_r);const pe={colorFormat:t.RGBA8,depthFormat:Y,scaleFactor:s};d=this.getBinding(),u=d.createProjectionLayer(pe),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Xi(u.textureWidth,u.textureHeight,{format:Sn,type:si,depthTexture:new bp(u.textureWidth,u.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,ae),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Xi(h.framebufferWidth,h.framebufferHeight,{format:Sn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function G(W){for(let q=0;q<W.removed.length;q++){const ae=W.removed[q],xe=E.indexOf(ae);xe>=0&&(E[xe]=null,v[xe].disconnect(ae))}for(let q=0;q<W.added.length;q++){const ae=W.added[q];let xe=E.indexOf(ae);if(xe===-1){for(let pe=0;pe<v.length;pe++)if(pe>=E.length){E.push(ae),xe=pe;break}else if(E[pe]===null){E[pe]=ae,xe=pe;break}if(xe===-1)break}const Y=v[xe];Y&&Y.connect(ae)}}const k=new I,Z=new I;function se(W,q,ae){k.setFromMatrixPosition(q.matrixWorld),Z.setFromMatrixPosition(ae.matrixWorld);const xe=k.distanceTo(Z),Y=q.projectionMatrix.elements,pe=ae.projectionMatrix.elements,Xe=Y[14]/(Y[10]-1),N=Y[14]/(Y[10]+1),Ke=(Y[9]+1)/Y[5],ge=(Y[9]-1)/Y[5],Pe=(Y[8]-1)/Y[0],me=(pe[8]+1)/pe[0],lt=Xe*Pe,Te=Xe*me,je=xe/(-Pe+me),Ut=je*-Pe;if(q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ut),W.translateZ(je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Y[10]===-1)W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Tt=Xe+je,U=N+je,C=lt-Ut,V=Te+(xe-Ut),J=Ke*N/U*Tt,Q=ge*N/U*Tt;W.projectionMatrix.makePerspective(C,V,J,Q,Tt,U),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function fe(W,q){q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let q=W.near,ae=W.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ae=m.depthFar)),A.near=y.near=S.near=q,A.far=y.far=S.far=ae,(L!==A.near||D!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),L=A.near,D=A.far),A.layers.mask=W.layers.mask|6,S.layers.mask=A.layers.mask&3,y.layers.mask=A.layers.mask&5;const xe=W.parent,Y=A.cameras;fe(A,xe);for(let pe=0;pe<Y.length;pe++)fe(Y[pe],xe);Y.length===2?se(A,S,y):A.projectionMatrix.copy(S.projectionMatrix),Ie(W,A,xe)};function Ie(W,q,ae){ae===null?W.matrix.copy(q.matrixWorld):(W.matrix.copy(ae.matrixWorld),W.matrix.invert(),W.matrix.multiply(q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(q.projectionMatrix),W.projectionMatrixInverse.copy(q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=us*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(u===null&&h===null))return c},this.setFoveation=function(W){c=W,u!==null&&(u.fixedFoveation=W),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(W){return p[W]};let qe=null;function Qe(W,q){if(f=q.getViewerPose(l||a),g=q,f!==null){const ae=f.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let xe=!1;ae.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let N=0;N<ae.length;N++){const Ke=ae[N];let ge=null;if(h!==null)ge=h.getViewport(Ke);else{const me=d.getViewSubImage(u,Ke);ge=me.viewport,N===0&&(e.setRenderTargetTextures(b,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(b))}let Pe=w[N];Pe===void 0&&(Pe=new Gt,Pe.layers.enable(N),Pe.viewport=new et,w[N]=Pe),Pe.matrix.fromArray(Ke.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ke.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ge.x,ge.y,ge.width,ge.height),N===0&&(A.matrix.copy(Pe.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(Pe)}const Y=i.enabledFeatures;if(Y&&Y.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const N=d.getDepthInformation(ae[0]);N&&N.isValid&&N.texture&&m.init(N,i.renderState)}if(Y&&Y.includes("camera-access")&&x){e.state.unbindTexture(),d=n.getBinding();for(let N=0;N<ae.length;N++){const Ke=ae[N].camera;if(Ke){let ge=p[Ke];ge||(ge=new _p,p[Ke]=ge);const Pe=d.getCameraImage(Ke);ge.sourceTexture=Pe}}}}for(let ae=0;ae<v.length;ae++){const xe=E[ae],Y=v[ae];xe!==null&&Y!==void 0&&Y.update(xe,q,l||a)}qe&&qe(W,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const ee=new Tp;ee.setAnimationLoop(Qe),this.setAnimationLoop=function(W){qe=W},this.dispose=function(){}}}const ir=new Xn,dy=new Ue;function hy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ap(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),_=M.envMap,b=M.envMapRotation;_&&(m.envMap.value=_,ir.copy(b),ir.x*=-1,ir.y*=-1,ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ir.y*=-1,ir.z*=-1),m.envMapRotation.value.setFromMatrix4(dy.makeRotationFromEuler(ir)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function py(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){const b=_.program;n.uniformBlockBinding(M,b)}function l(M,_){let b=i[M.id];b===void 0&&(g(M),b=f(M),i[M.id]=b,M.addEventListener("dispose",m));const v=_.program;n.updateUBOMapping(M,v);const E=e.render.frame;s[M.id]!==E&&(u(M),s[M.id]=E)}function f(M){const _=d();M.__bindingPointIndex=_;const b=r.createBuffer(),v=M.__size,E=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,v,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,b),b}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const _=i[M.id],b=M.uniforms,v=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,T=b.length;E<T;E++){const R=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,y=R.length;S<y;S++){const w=R[S];if(h(w,E,S,v)===!0){const A=w.__offset,L=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let F=0;F<L.length;F++){const B=L[F],G=x(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,A+D,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,D),D+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,A,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(M,_,b,v){const E=M.value,T=_+"_"+b;if(v[T]===void 0)return typeof E=="number"||typeof E=="boolean"?v[T]=E:v[T]=E.clone(),!0;{const R=v[T];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return v[T]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function g(M){const _=M.uniforms;let b=0;const v=16;for(let T=0,R=_.length;T<R;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let y=0,w=S.length;y<w;y++){const A=S[y],L=Array.isArray(A.value)?A.value:[A.value];for(let D=0,F=L.length;D<F;D++){const B=L[D],G=x(B),k=b%v,Z=k%G.boundary,se=k+Z;b+=Z,se!==0&&v-se<G.storage&&(b+=v-se),A.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,b+=G.storage}}}const E=b%v;return E>0&&(b+=v-E),M.__size=b,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:c,update:l,dispose:p}}class my{constructor(e={}){const{canvas:t=gg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=Ct;let E=0,T=0,R=null,S=-1,y=null;const w=new et,A=new et;let L=null;const D=new Fe(0);let F=0,B=t.width,G=t.height,k=1,Z=null,se=null;const fe=new et(0,0,B,G),Ie=new et(0,0,B,G);let qe=!1;const Qe=new zu;let ee=!1,W=!1;const q=new Ue,ae=new I,xe=new et,Y={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pe=!1;function Xe(){return R===null?k:1}let N=n;function Ke(P,z){return t.getContext(P,z)}try{const P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ba}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",te,!1),N===null){const z="webgl2";if(N=Ke(z,P),N===null)throw Ke(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ge,Pe,me,lt,Te,je,Ut,Tt,U,C,V,J,Q,K,Le,oe,we,Re,ie,he,ke,Ce,ue,Ge;function O(){ge=new Tx(N),ge.init(),Ce=new oy(N,ge),Pe=new _x(N,ge,e,Ce),me=new sy(N,ge),Pe.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),lt=new Rx(N),Te=new Xv,je=new ay(N,ge,me,Te,Pe,Ce,lt),Ut=new vx(b),Tt=new Ex(b),U=new Ub(N),ue=new gx(N,U),C=new wx(N,U,lt,ue),V=new Px(N,C,U,lt),ie=new Cx(N,Pe,je),oe=new xx(Te),J=new qv(b,Ut,Tt,ge,Pe,ue,oe),Q=new hy(b,Te),K=new Yv,Le=new ey(ge),Re=new mx(b,Ut,Tt,me,V,h,c),we=new iy(b,V,Pe),Ge=new py(N,lt,Pe,me),he=new bx(N,ge,lt),ke=new Ax(N,ge,lt),lt.programs=J.programs,b.capabilities=Pe,b.extensions=ge,b.properties=Te,b.renderLists=K,b.shadowMap=we,b.state=me,b.info=lt}O();const re=new fy(b,N);this.xr=re,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const P=ge.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ge.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(P){P!==void 0&&(k=P,this.setSize(B,G,!1))},this.getSize=function(P){return P.set(B,G)},this.setSize=function(P,z,X=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,G=z,t.width=Math.floor(P*k),t.height=Math.floor(z*k),X===!0&&(t.style.width=P+"px",t.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(B*k,G*k).floor()},this.setDrawingBufferSize=function(P,z,X){B=P,G=z,k=X,t.width=Math.floor(P*X),t.height=Math.floor(z*X),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(w)},this.getViewport=function(P){return P.copy(fe)},this.setViewport=function(P,z,X,j){P.isVector4?fe.set(P.x,P.y,P.z,P.w):fe.set(P,z,X,j),me.viewport(w.copy(fe).multiplyScalar(k).round())},this.getScissor=function(P){return P.copy(Ie)},this.setScissor=function(P,z,X,j){P.isVector4?Ie.set(P.x,P.y,P.z,P.w):Ie.set(P,z,X,j),me.scissor(A.copy(Ie).multiplyScalar(k).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(P){me.setScissorTest(qe=P)},this.setOpaqueSort=function(P){Z=P},this.setTransparentSort=function(P){se=P},this.getClearColor=function(P){return P.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(P=!0,z=!0,X=!0){let j=0;if(P){let H=!1;if(R!==null){const ne=R.texture.format;H=ne===Du||ne===Iu||ne===Lu}if(H){const ne=R.texture.type,de=ne===si||ne===_r||ne===sa||ne===aa||ne===Ru||ne===Cu,Me=Re.getClearColor(),be=Re.getClearAlpha(),Be=Me.r,ze=Me.g,De=Me.b;de?(g[0]=Be,g[1]=ze,g[2]=De,g[3]=be,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Be,x[1]=ze,x[2]=De,x[3]=be,N.clearBufferiv(N.COLOR,0,x))}else j|=N.COLOR_BUFFER_BIT}z&&(j|=N.DEPTH_BUFFER_BIT),X&&(j|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Re.dispose(),K.dispose(),Le.dispose(),Te.dispose(),Ut.dispose(),Tt.dispose(),V.dispose(),ue.dispose(),Ge.dispose(),J.dispose(),re.dispose(),re.removeEventListener("sessionstart",Kn),re.removeEventListener("sessionend",cf),Ji.stop()};function ce(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=lt.autoReset,z=we.enabled,X=we.autoUpdate,j=we.needsUpdate,H=we.type;O(),lt.autoReset=P,we.enabled=z,we.autoUpdate=X,we.needsUpdate=j,we.type=H}function te(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function $(P){const z=P.target;z.removeEventListener("dispose",$),Se(z)}function Se(P){He(P),Te.remove(P)}function He(P){const z=Te.get(P).programs;z!==void 0&&(z.forEach(function(X){J.releaseProgram(X)}),P.isShaderMaterial&&J.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,X,j,H,ne){z===null&&(z=Y);const de=H.isMesh&&H.matrixWorld.determinant()<0,Me=am(P,z,X,j,H);me.setMaterial(j,de);let be=X.index,Be=1;if(j.wireframe===!0){if(be=C.getWireframeAttribute(X),be===void 0)return;Be=2}const ze=X.drawRange,De=X.attributes.position;let $e=ze.start*Be,ot=(ze.start+ze.count)*Be;ne!==null&&($e=Math.max($e,ne.start*Be),ot=Math.min(ot,(ne.start+ne.count)*Be)),be!==null?($e=Math.max($e,0),ot=Math.min(ot,be.count)):De!=null&&($e=Math.max($e,0),ot=Math.min(ot,De.count));const St=ot-$e;if(St<0||St===1/0)return;ue.setup(H,j,Me,X,be);let mt,ut=he;if(be!==null&&(mt=U.get(be),ut=ke,ut.setIndex(mt)),H.isMesh)j.wireframe===!0?(me.setLineWidth(j.wireframeLinewidth*Xe()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(H.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),me.setLineWidth(Ne*Xe()),H.isLineSegments?ut.setMode(N.LINES):H.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else H.isPoints?ut.setMode(N.POINTS):H.isSprite&&ut.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)da("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ut.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ut.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ne=H._multiDrawStarts,vt=H._multiDrawCounts,tt=H._multiDrawCount,un=be?U.get(be).bytesPerElement:1,Sr=Te.get(j).currentProgram.getUniforms();for(let fn=0;fn<tt;fn++)Sr.setValue(N,"_gl_DrawID",fn),ut.render(Ne[fn]/un,vt[fn])}else if(H.isInstancedMesh)ut.renderInstances($e,St,H.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,vt=Math.min(X.instanceCount,Ne);ut.renderInstances($e,St,vt)}else ut.render($e,St)};function ft(P,z,X){P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=qt,P.needsUpdate=!0,Ma(P,z,X),P.side=Ln,P.needsUpdate=!0,Ma(P,z,X),P.side=sn):Ma(P,z,X)}this.compile=function(P,z,X=null){X===null&&(X=P),p=Le.get(X),p.init(z),_.push(p),X.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),P!==X&&P.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const j=new Set;return P.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ne=H.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const Me=ne[de];ft(Me,X,H),j.add(Me)}else ft(ne,X,H),j.add(ne)}),p=_.pop(),j},this.compileAsync=function(P,z,X=null){const j=this.compile(P,z,X);return new Promise(H=>{function ne(){if(j.forEach(function(de){Te.get(de).currentProgram.isReady()&&j.delete(de)}),j.size===0){H(P);return}setTimeout(ne,10)}ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let it=null;function li(P){it&&it(P)}function Kn(){Ji.stop()}function cf(){Ji.start()}const Ji=new Tp;Ji.setAnimationLoop(li),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(P){it=P,re.setAnimationLoop(P),P===null?Ji.stop():Ji.start()},re.addEventListener("sessionstart",Kn),re.addEventListener("sessionend",cf),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(z),z=re.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,z,R),p=Le.get(P,_.length),p.init(z),_.push(p),q.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(q,ti,z.reversedDepth),W=this.localClippingEnabled,ee=oe.init(this.clippingPlanes,W),m=K.get(P,M.length),m.init(),M.push(m),re.enabled===!0&&re.isPresenting===!0){const ne=b.xr.getDepthSensingMesh();ne!==null&&Vo(ne,z,-1/0,b.sortObjects)}Vo(P,z,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(Z,se),pe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pe&&Re.addToRenderList(m,P),this.info.render.frame++,ee===!0&&oe.beginShadows();const X=p.state.shadowsArray;we.render(X,P,z),ee===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ne=z.cameras;if(H.length>0)for(let de=0,Me=ne.length;de<Me;de++){const be=ne[de];uf(j,H,P,be)}pe&&Re.render(P);for(let de=0,Me=ne.length;de<Me;de++){const be=ne[de];lf(m,P,be,be.viewport)}}else H.length>0&&uf(j,H,P,z),pe&&Re.render(P),lf(m,P,z);R!==null&&T===0&&(je.updateMultisampleRenderTarget(R),je.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(b,P,z),ue.resetDefaultState(),S=-1,y=null,_.pop(),_.length>0?(p=_[_.length-1],ee===!0&&oe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Vo(P,z,X,j){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)X=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Qe.intersectsSprite(P)){j&&xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(q);const de=V.update(P),Me=P.material;Me.visible&&m.push(P,de,Me,X,xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Qe.intersectsObject(P))){const de=V.update(P),Me=P.material;if(j&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),xe.copy(P.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),xe.copy(de.boundingSphere.center)),xe.applyMatrix4(P.matrixWorld).applyMatrix4(q)),Array.isArray(Me)){const be=de.groups;for(let Be=0,ze=be.length;Be<ze;Be++){const De=be[Be],$e=Me[De.materialIndex];$e&&$e.visible&&m.push(P,de,$e,X,xe.z,De)}}else Me.visible&&m.push(P,de,Me,X,xe.z,null)}}const ne=P.children;for(let de=0,Me=ne.length;de<Me;de++)Vo(ne[de],z,X,j)}function lf(P,z,X,j){const H=P.opaque,ne=P.transmissive,de=P.transparent;p.setupLightsView(X),ee===!0&&oe.setGlobalState(b.clippingPlanes,X),j&&me.viewport(w.copy(j)),H.length>0&&ya(H,z,X),ne.length>0&&ya(ne,z,X),de.length>0&&ya(de,z,X),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function uf(P,z,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Xi(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?bs:si,minFilter:zn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ne=p.state.transmissionRenderTarget[j.id],de=j.viewport||w;ne.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);const Me=b.getRenderTarget(),be=b.getActiveCubeFace(),Be=b.getActiveMipmapLevel();b.setRenderTarget(ne),b.getClearColor(D),F=b.getClearAlpha(),F<1&&b.setClearColor(16777215,.5),b.clear(),pe&&Re.render(X);const ze=b.toneMapping;b.toneMapping=Wi;const De=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),ee===!0&&oe.setGlobalState(b.clippingPlanes,j),ya(P,X,j),je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne),ge.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ot=0,St=z.length;ot<St;ot++){const mt=z[ot],ut=mt.object,Ne=mt.geometry,vt=mt.material,tt=mt.group;if(vt.side===sn&&ut.layers.test(j.layers)){const un=vt.side;vt.side=qt,vt.needsUpdate=!0,ff(ut,X,j,Ne,vt,tt),vt.side=un,vt.needsUpdate=!0,$e=!0}}$e===!0&&(je.updateMultisampleRenderTarget(ne),je.updateRenderTargetMipmap(ne))}b.setRenderTarget(Me,be,Be),b.setClearColor(D,F),De!==void 0&&(j.viewport=De),b.toneMapping=ze}function ya(P,z,X){const j=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ne=P.length;H<ne;H++){const de=P[H],Me=de.object,be=de.geometry,Be=de.group;let ze=de.material;ze.allowOverride===!0&&j!==null&&(ze=j),Me.layers.test(X.layers)&&ff(Me,z,X,be,ze,Be)}}function ff(P,z,X,j,H,ne){P.onBeforeRender(b,z,X,j,H,ne),P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),H.onBeforeRender(b,z,X,j,P,ne),H.transparent===!0&&H.side===sn&&H.forceSinglePass===!1?(H.side=qt,H.needsUpdate=!0,b.renderBufferDirect(X,z,j,H,P,ne),H.side=Ln,H.needsUpdate=!0,b.renderBufferDirect(X,z,j,H,P,ne),H.side=sn):b.renderBufferDirect(X,z,j,H,P,ne),P.onAfterRender(b,z,X,j,H,ne)}function Ma(P,z,X){z.isScene!==!0&&(z=Y);const j=Te.get(P),H=p.state.lights,ne=p.state.shadowsArray,de=H.state.version,Me=J.getParameters(P,H.state,ne,z,X),be=J.getProgramCacheKey(Me);let Be=j.programs;j.environment=P.isMeshStandardMaterial?z.environment:null,j.fog=z.fog,j.envMap=(P.isMeshStandardMaterial?Tt:Ut).get(P.envMap||j.environment),j.envMapRotation=j.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Be===void 0&&(P.addEventListener("dispose",$),Be=new Map,j.programs=Be);let ze=Be.get(be);if(ze!==void 0){if(j.currentProgram===ze&&j.lightsStateVersion===de)return hf(P,Me),ze}else Me.uniforms=J.getUniforms(P),P.onBeforeCompile(Me,b),ze=J.acquireProgram(Me,be),Be.set(be,ze),j.uniforms=Me.uniforms;const De=j.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(De.clippingPlanes=oe.uniform),hf(P,Me),j.needsLights=cm(P),j.lightsStateVersion=de,j.needsLights&&(De.ambientLightColor.value=H.state.ambient,De.lightProbe.value=H.state.probe,De.directionalLights.value=H.state.directional,De.directionalLightShadows.value=H.state.directionalShadow,De.spotLights.value=H.state.spot,De.spotLightShadows.value=H.state.spotShadow,De.rectAreaLights.value=H.state.rectArea,De.ltc_1.value=H.state.rectAreaLTC1,De.ltc_2.value=H.state.rectAreaLTC2,De.pointLights.value=H.state.point,De.pointLightShadows.value=H.state.pointShadow,De.hemisphereLights.value=H.state.hemi,De.directionalShadowMap.value=H.state.directionalShadowMap,De.directionalShadowMatrix.value=H.state.directionalShadowMatrix,De.spotShadowMap.value=H.state.spotShadowMap,De.spotLightMatrix.value=H.state.spotLightMatrix,De.spotLightMap.value=H.state.spotLightMap,De.pointShadowMap.value=H.state.pointShadowMap,De.pointShadowMatrix.value=H.state.pointShadowMatrix),j.currentProgram=ze,j.uniformsList=null,ze}function df(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=vo.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function hf(P,z){const X=Te.get(P);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.batchingColor=z.batchingColor,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.instancingMorph=z.instancingMorph,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function am(P,z,X,j,H){z.isScene!==!0&&(z=Y),je.resetTextureUnits();const ne=z.fog,de=j.isMeshStandardMaterial?z.environment:null,Me=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$t,be=(j.isMeshStandardMaterial?Tt:Ut).get(j.envMap||de),Be=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!X.morphAttributes.position,$e=!!X.morphAttributes.normal,ot=!!X.morphAttributes.color;let St=Wi;j.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(St=b.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=mt!==void 0?mt.length:0,Ne=Te.get(j),vt=p.state.lights;if(ee===!0&&(W===!0||P!==y)){const Xt=P===y&&j.id===S;oe.setState(j,P,Xt)}let tt=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==vt.state.version||Ne.outputColorSpace!==Me||H.isBatchedMesh&&Ne.batching===!1||!H.isBatchedMesh&&Ne.batching===!0||H.isBatchedMesh&&Ne.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ne.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ne.instancing===!1||!H.isInstancedMesh&&Ne.instancing===!0||H.isSkinnedMesh&&Ne.skinning===!1||!H.isSkinnedMesh&&Ne.skinning===!0||H.isInstancedMesh&&Ne.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ne.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ne.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ne.instancingMorph===!1&&H.morphTexture!==null||Ne.envMap!==be||j.fog===!0&&Ne.fog!==ne||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==Be||Ne.vertexTangents!==ze||Ne.morphTargets!==De||Ne.morphNormals!==$e||Ne.morphColors!==ot||Ne.toneMapping!==St||Ne.morphTargetsCount!==ut)&&(tt=!0):(tt=!0,Ne.__version=j.version);let un=Ne.currentProgram;tt===!0&&(un=Ma(j,z,H));let Sr=!1,fn=!1,Es=!1;const yt=un.getUniforms(),_n=Ne.uniforms;if(me.useProgram(un.program)&&(Sr=!0,fn=!0,Es=!0),j.id!==S&&(S=j.id,fn=!0),Sr||y!==P){me.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),yt.setValue(N,"projectionMatrix",P.projectionMatrix),yt.setValue(N,"viewMatrix",P.matrixWorldInverse);const en=yt.map.cameraPosition;en!==void 0&&en.setValue(N,ae.setFromMatrixPosition(P.matrixWorld)),Pe.logarithmicDepthBuffer&&yt.setValue(N,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&yt.setValue(N,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,fn=!0,Es=!0)}if(H.isSkinnedMesh){yt.setOptional(N,H,"bindMatrix"),yt.setOptional(N,H,"bindMatrixInverse");const Xt=H.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),yt.setValue(N,"boneTexture",Xt.boneTexture,je))}H.isBatchedMesh&&(yt.setOptional(N,H,"batchingTexture"),yt.setValue(N,"batchingTexture",H._matricesTexture,je),yt.setOptional(N,H,"batchingIdTexture"),yt.setValue(N,"batchingIdTexture",H._indirectTexture,je),yt.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(N,"batchingColorTexture",H._colorsTexture,je));const xn=X.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&ie.update(H,X,un),(fn||Ne.receiveShadow!==H.receiveShadow)&&(Ne.receiveShadow=H.receiveShadow,yt.setValue(N,"receiveShadow",H.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(_n.envMap.value=be,_n.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),fn&&(yt.setValue(N,"toneMappingExposure",b.toneMappingExposure),Ne.needsLights&&om(_n,Es),ne&&j.fog===!0&&Q.refreshFogUniforms(_n,ne),Q.refreshMaterialUniforms(_n,j,k,G,p.state.transmissionRenderTarget[P.id]),vo.upload(N,df(Ne),_n,je)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(vo.upload(N,df(Ne),_n,je),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&yt.setValue(N,"center",H.center),yt.setValue(N,"modelViewMatrix",H.modelViewMatrix),yt.setValue(N,"normalMatrix",H.normalMatrix),yt.setValue(N,"modelMatrix",H.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Xt=j.uniformsGroups;for(let en=0,Go=Xt.length;en<Go;en++){const $i=Xt[en];Ge.update($i,un),Ge.bind($i,un)}}return un}function om(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function cm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,z,X){const j=Te.get(P);j.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Te.get(P.texture).__webglTexture=z,Te.get(P.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:X,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,z){const X=Te.get(P);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0};const lm=N.createFramebuffer();this.setRenderTarget=function(P,z=0,X=0){R=P,E=z,T=X;let j=!0,H=null,ne=!1,de=!1;if(P){const be=Te.get(P);if(be.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(N.FRAMEBUFFER,null),j=!1;else if(be.__webglFramebuffer===void 0)je.setupRenderTarget(P);else if(be.__hasExternalTextures)je.rebindTextures(P,Te.get(P.texture).__webglTexture,Te.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const De=P.depthTexture;if(be.__boundDepthTexture!==De){if(De!==null&&Te.has(De)&&(P.width!==De.image.width||P.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(P)}}const Be=P.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(de=!0);const ze=Te.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ze[z])?H=ze[z][X]:H=ze[z],ne=!0):P.samples>0&&je.useMultisampledRTT(P)===!1?H=Te.get(P).__webglMultisampledFramebuffer:Array.isArray(ze)?H=ze[X]:H=ze,w.copy(P.viewport),A.copy(P.scissor),L=P.scissorTest}else w.copy(fe).multiplyScalar(k).floor(),A.copy(Ie).multiplyScalar(k).floor(),L=qe;if(X!==0&&(H=lm),me.bindFramebuffer(N.FRAMEBUFFER,H)&&j&&me.drawBuffers(P,H),me.viewport(w),me.scissor(A),me.setScissorTest(L),ne){const be=Te.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+z,be.__webglTexture,X)}else if(de){const be=z;for(let Be=0;Be<P.textures.length;Be++){const ze=Te.get(P.textures[Be]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Be,ze.__webglTexture,X,be)}}else if(P!==null&&X!==0){const be=Te.get(P.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,be.__webglTexture,X)}S=-1},this.readRenderTargetPixels=function(P,z,X,j,H,ne,de,Me=0){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(be=be[de]),be){me.bindFramebuffer(N.FRAMEBUFFER,be);try{const Be=P.textures[Me],ze=Be.format,De=Be.type;if(!Pe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pe.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-j&&X>=0&&X<=P.height-H&&(P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(z,X,j,H,Ce.convert(ze),Ce.convert(De),ne))}finally{const Be=R!==null?Te.get(R).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,z,X,j,H,ne,de,Me=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Te.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&de!==void 0&&(be=be[de]),be)if(z>=0&&z<=P.width-j&&X>=0&&X<=P.height-H){me.bindFramebuffer(N.FRAMEBUFFER,be);const Be=P.textures[Me],ze=Be.format,De=Be.type;if(!Pe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pe.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.bufferData(N.PIXEL_PACK_BUFFER,ne.byteLength,N.STREAM_READ),P.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Me),N.readPixels(z,X,j,H,Ce.convert(ze),Ce.convert(De),0);const ot=R!==null?Te.get(R).__webglFramebuffer:null;me.bindFramebuffer(N.FRAMEBUFFER,ot);const St=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bg(N,St,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,$e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ne),N.deleteBuffer($e),N.deleteSync(St),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,z=null,X=0){const j=Math.pow(2,-X),H=Math.floor(P.image.width*j),ne=Math.floor(P.image.height*j),de=z!==null?z.x:0,Me=z!==null?z.y:0;je.setTexture2D(P,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,de,Me,H,ne),me.unbindTexture()};const um=N.createFramebuffer(),fm=N.createFramebuffer();this.copyTextureToTexture=function(P,z,X=null,j=null,H=0,ne=null){ne===null&&(H!==0?(da("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=H,H=0):ne=0);let de,Me,be,Be,ze,De,$e,ot,St;const mt=P.isCompressedTexture?P.mipmaps[ne]:P.image;if(X!==null)de=X.max.x-X.min.x,Me=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Be=X.min.x,ze=X.min.y,De=X.isBox3?X.min.z:0;else{const xn=Math.pow(2,-H);de=Math.floor(mt.width*xn),Me=Math.floor(mt.height*xn),P.isDataArrayTexture?be=mt.depth:P.isData3DTexture?be=Math.floor(mt.depth*xn):be=1,Be=0,ze=0,De=0}j!==null?($e=j.x,ot=j.y,St=j.z):($e=0,ot=0,St=0);const ut=Ce.convert(z.format),Ne=Ce.convert(z.type);let vt;z.isData3DTexture?(je.setTexture3D(z,0),vt=N.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(je.setTexture2DArray(z,0),vt=N.TEXTURE_2D_ARRAY):(je.setTexture2D(z,0),vt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,z.unpackAlignment);const tt=N.getParameter(N.UNPACK_ROW_LENGTH),un=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Sr=N.getParameter(N.UNPACK_SKIP_PIXELS),fn=N.getParameter(N.UNPACK_SKIP_ROWS),Es=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Be),N.pixelStorei(N.UNPACK_SKIP_ROWS,ze),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const yt=P.isDataArrayTexture||P.isData3DTexture,_n=z.isDataArrayTexture||z.isData3DTexture;if(P.isDepthTexture){const xn=Te.get(P),Xt=Te.get(z),en=Te.get(xn.__renderTarget),Go=Te.get(Xt.__renderTarget);me.bindFramebuffer(N.READ_FRAMEBUFFER,en.__webglFramebuffer),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,Go.__webglFramebuffer);for(let $i=0;$i<be;$i++)yt&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(P).__webglTexture,H,De+$i),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(z).__webglTexture,ne,St+$i)),N.blitFramebuffer(Be,ze,de,Me,$e,ot,de,Me,N.DEPTH_BUFFER_BIT,N.NEAREST);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||P.isRenderTargetTexture||Te.has(P)){const xn=Te.get(P),Xt=Te.get(z);me.bindFramebuffer(N.READ_FRAMEBUFFER,um),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,fm);for(let en=0;en<be;en++)yt?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,xn.__webglTexture,H,De+en):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xn.__webglTexture,H),_n?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Xt.__webglTexture,ne,St+en):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Xt.__webglTexture,ne),H!==0?N.blitFramebuffer(Be,ze,de,Me,$e,ot,de,Me,N.COLOR_BUFFER_BIT,N.NEAREST):_n?N.copyTexSubImage3D(vt,ne,$e,ot,St+en,Be,ze,de,Me):N.copyTexSubImage2D(vt,ne,$e,ot,Be,ze,de,Me);me.bindFramebuffer(N.READ_FRAMEBUFFER,null),me.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _n?P.isDataTexture||P.isData3DTexture?N.texSubImage3D(vt,ne,$e,ot,St,de,Me,be,ut,Ne,mt.data):z.isCompressedArrayTexture?N.compressedTexSubImage3D(vt,ne,$e,ot,St,de,Me,be,ut,mt.data):N.texSubImage3D(vt,ne,$e,ot,St,de,Me,be,ut,Ne,mt):P.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ne,$e,ot,de,Me,ut,Ne,mt.data):P.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ne,$e,ot,mt.width,mt.height,ut,mt.data):N.texSubImage2D(N.TEXTURE_2D,ne,$e,ot,de,Me,ut,Ne,mt);N.pixelStorei(N.UNPACK_ROW_LENGTH,tt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,un),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Sr),N.pixelStorei(N.UNPACK_SKIP_ROWS,fn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Es),ne===0&&z.generateMipmaps&&N.generateMipmap(vt),me.unbindTexture()},this.initRenderTarget=function(P){Te.get(P).__webglFramebuffer===void 0&&je.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?je.setTextureCube(P,0):P.isData3DTexture?je.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?je.setTexture2DArray(P,0):je.setTexture2D(P,0),me.unbindTexture()},this.resetState=function(){E=0,T=0,R=null,me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function gy(r,e=!1){const t=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},a={},o=r[0].morphTargetsRelative,c=new ln;let l=0;for(let f=0;f<r.length;++f){const d=r[f];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;s[h]===void 0&&(s[h]=[]),s[h].push(d.attributes[h]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in d.morphAttributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(e){let h;if(t)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+f+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,f),l+=h}}if(t){let f=0;const d=[];for(let u=0;u<r.length;++u){const h=r[u].index;for(let g=0;g<h.count;++g)d.push(h.getX(g)+f);f+=r[u].attributes.position.count}c.setIndex(d)}for(const f in s){const d=Id(s[f]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" attribute."),null;c.setAttribute(f,d)}for(const f in a){const d=a[f][0].length;if(d===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[f]=[];for(let u=0;u<d;++u){const h=[];for(let x=0;x<a[f].length;++x)h.push(a[f][x][u]);const g=Id(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+f+" morphAttribute."),null;c.morphAttributes[f].push(g)}}return c}function Id(r){let e,t,n,i=-1,s=0;for(let l=0;l<r.length;++l){const f=r[l];if(e===void 0&&(e=f.array.constructor),e!==f.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=f.itemSize),t!==f.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=f.normalized),n!==f.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=f.gpuType),i!==f.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=f.count*t}const a=new e(s),o=new Ot(a,t,n);let c=0;for(let l=0;l<r.length;++l){const f=r[l];if(f.isInterleavedBufferAttribute){const d=c/t;for(let u=0,h=f.count;u<h;u++)for(let g=0;g<t;g++){const x=f.getComponent(u,g);o.setComponent(u+d,g,x)}}else a.set(f.array,c);c+=f.count*t}return i!==void 0&&(o.gpuType=i),o}function Dd(r,e){if(e===Gm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===tu||e===Qh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===tu)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ku extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new yy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new Ly(t)}),this.register(function(t){return new Iy(t)}),this.register(function(t){return new Dy(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new Ry(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new Py(t)}),this.register(function(t){return new Cy(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new Uy(t)}),this.register(function(t){return new Ny(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Qs.extractUrlBase(e);a=Qs.resolveURL(l,this.path)}else a=Qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new yp(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,a,function(f){t(f),s.manager.itemEnd(e)},o)}catch(f){o(f)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},c=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Pp){try{a[Je.KHR_BINARY_GLTF]=new Fy(e)}catch(d){i&&i(d);return}s=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else s=JSON.parse(c.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ky(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const d=this.pluginCallbacks[f](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const d=s.extensionsUsed[f],u=s.extensionsRequired||[];switch(d){case Je.KHR_MATERIALS_UNLIT:a[d]=new xy;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[d]=new Oy(s,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[d]=new By;break;case Je.KHR_MESH_QUANTIZATION:a[d]=new ky;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function by(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _y{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const f=new Fe(16777215);c.color!==void 0&&f.setRGB(c.color[0],c.color[1],c.color[2],$t);const d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new xb(f),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Sp(f),l.distance=d;break;case"spot":l=new Mp(f),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),$n(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class xy{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return ni}extendParams(e,t,n){const i=[];e.color=new Fe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],$t),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Ct))}return Promise.all(i)}}class vy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class yy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(o,o)}return Promise.all(s)}}class My{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class Sy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class Ey{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],$t)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ct)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class Ty{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class wy{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(o[0],o[1],o[2],$t),Promise.all(s)}}class Ay{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Ry{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(o[0],o[1],o[2],$t),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ct)),Promise.all(s)}}class Cy{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class Py{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class Ly{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class Iy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Dy{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class Uy{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,f=i.count,d=i.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,d,u,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(f*d);return a.decodeGltfBuffer(new Uint8Array(h),f,d,u,i.mode,i.filter),h})})}else return null}}class Ny{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Mn.TRIANGLES&&l.mode!==Mn.TRIANGLE_STRIP&&l.mode!==Mn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(f=>(c[l]=f,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const f=l.pop(),d=f.isGroup?f.children:[f],u=l[0].count,h=[];for(const g of d){const x=new Ue,m=new I,p=new Un,M=new I(1,1,1),_=new hp(g.geometry,g.material,u);for(let b=0;b<u;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&M.fromBufferAttribute(c.SCALE,b),_.setMatrixAt(b,x.compose(m,p,M));for(const b in c)if(b==="_COLOR_0"){const v=c[b];_.instanceColor=new iu(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);bt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),h.push(_)}return f.isGroup?(f.clear(),f.add(...h),f):h[0]}))}}const Pp="glTF",Ds=12,Ud={JSON:1313821514,BIN:5130562};class Fy{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ds),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Pp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ds,s=new DataView(e,Ds);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const c=s.getUint32(a,!0);if(a+=4,c===Ud.JSON){const l=new Uint8Array(e,Ds+a,o);this.content=n.decode(l)}else if(c===Ud.BIN){const l=Ds+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Oy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const f in a){const d=cu[f]||f.toLowerCase();o[d]=a[f]}for(const f in e.attributes){const d=cu[f]||f.toLowerCase();if(a[f]!==void 0){const u=n.accessors[e.attributes[f]],h=rs[u.componentType];l[d]=h.name,c[d]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(d,u){i.decodeDracoFile(f,function(h){for(const g in h.attributes){const x=h.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}d(h)},o,l,$t,u)})})}}class By{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ky{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class Lp extends _a{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,f=i-t,d=(n-t)/f,u=d*d,h=u*d,g=e*l,x=g-l,m=-2*h+3*u,p=h-u,M=1-m,_=p-u+d;for(let b=0;b!==o;b++){const v=a[x+b+o],E=a[x+b+c]*f,T=a[g+b+o],R=a[g+b]*f;s[b]=M*v+_*E+m*T+p*R}return s}}const zy=new Un;class Hy extends Lp{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return zy.fromArray(s).normalize().toArray(s),s}}const Mn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},rs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Nd={9728:Jt,9729:Kt,9984:qh,9985:mo,9986:Ws,9987:zn},Fd={33071:Hi,33648:Eo,10497:ls},wc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ii={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Vy={CUBICSPLINE:void 0,LINEAR:ua,STEP:la},Ac={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Gy(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new ha({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ln})),r.DefaultMaterial}function rr(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $n(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Wy(r,e,t){let n=!1,i=!1,s=!1;for(let l=0,f=e.length;l<f;l++){const d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],c=[];for(let l=0,f=e.length;l<f;l++){const d=e[l];if(n){const u=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):r.attributes.position;a.push(u)}if(i){const u=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):r.attributes.normal;o.push(u)}if(s){const u=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):r.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const f=l[0],d=l[1],u=l[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=d),s&&(r.morphAttributes.color=u),r.morphTargetsRelative=!0,r})}function qy(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xy(r){let e;const t=r.extensions&&r.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Rc(t.attributes):e=r.indices+":"+Rc(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Rc(r.targets[n]);return e}function Rc(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function lu(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function jy(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Yy=new Ue;class Ky{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new by,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new pb(this.options.manager):this.textureLoader=new vb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yp(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return rr(s,o,i),$n(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,f]of a.children.entries())s(f,o.children[l])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Qs.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=wc[i.type],o=rs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ot(l,a,c))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],c=wc[i.type],l=rs[i.componentType],f=l.BYTES_PER_ELEMENT,d=f*c,u=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(h&&h!==d){const p=Math.floor(u/h),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(M);_||(x=new l(o,p*h,i.count*h/f),_=new Hg(x,h/f),t.cache.add(M,_)),m=new Bu(_,c,u%h/f,g)}else o===null?x=new l(i.count*c):x=new l(o,u,i.count*c),m=new Ot(x,c,g);if(i.sparse!==void 0){const p=wc.SCALAR,M=rs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,v=new M(a[1],_,i.sparse.count*p),E=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new Ot(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=v.length;T<R;T++){const S=v[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=a.name||o.name||"",f.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(f.name=o.uri);const u=(s.samplers||{})[a.sampler]||{};return f.magFilter=Nd[u.magFilter]||Kt,f.minFilter=Nd[u.minFilter]||zn,f.wrapS=Fd[u.wrapS]||ls,f.wrapT=Fd[u.wrapT]||ls,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==Jt&&f.minFilter!==Kt,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(d){l=!0;const u=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(u),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(c).then(function(d){return new Promise(function(u,h){let g=u;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Lt(x);m.needsUpdate=!0,u(m)}),t.load(Qs.resolveURL(d,s.path),g,void 0,h)})}).then(function(d){return l===!0&&o.revokeObjectURL(c),$n(d,a),d.userData.mimeType=a.mimeType||jy(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=s.associations.get(a);a=s.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new mp,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new pp,Wn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),s&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ha}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},c=s.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const d=i[Je.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,s,t))}else{const d=s.pbrMetallicRoughness||{};if(o.color=new Fe(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){const u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],$t),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",d.baseColorTexture,Ct)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=sn);const f=s.alphaMode||Ac.OPAQUE;if(f===Ac.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,f===Ac.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ni&&(l.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Oe(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&a!==ni&&(l.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ni){const d=s.emissiveFactor;o.emissive=new Fe().setRGB(d[0],d[1],d[2],$t)}return s.emissiveTexture!==void 0&&a!==ni&&l.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ct)),Promise.all(l).then(function(){const d=new a(o);return s.name&&(d.name=s.name),$n(d,s),t.associations.set(d,{materials:e}),s.extensions&&rr(i,d,s),d})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Od(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],f=Xy(l),d=i[f];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?u=s(l):u=Od(new ln,l,t),i[f]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const f=a[c].material===void 0?Gy(this.cache):this.getDependency("material",a[c].material);o.push(f)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),f=c[c.length-1],d=[];for(let h=0,g=f.length;h<g;h++){const x=f[h],m=a[h];let p;const M=l[h];if(m.mode===Mn.TRIANGLES||m.mode===Mn.TRIANGLE_STRIP||m.mode===Mn.TRIANGLE_FAN||m.mode===void 0)p=s.isSkinnedMesh===!0?new Gg(x,M):new gt(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Mn.TRIANGLE_STRIP?p.geometry=Dd(p.geometry,Qh):m.mode===Mn.TRIANGLE_FAN&&(p.geometry=Dd(p.geometry,tu));else if(m.mode===Mn.LINES)p=new Kg(x,M);else if(m.mode===Mn.LINE_STRIP)p=new Hu(x,M);else if(m.mode===Mn.LINE_LOOP)p=new Jg(x,M);else if(m.mode===Mn.POINTS)p=new gp(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&qy(p,s),p.name=t.createUniqueName(s.name||"mesh_"+e),$n(p,s),m.extensions&&rr(i,p,m),t.assignFinalMaterial(p),d.push(p)}for(let h=0,g=d.length;h<g;h++)t.associations.set(d[h],{meshes:e,primitives:h});if(d.length===1)return s.extensions&&rr(i,d[0],s),d[0];const u=new En;s.extensions&&rr(i,u,s),t.associations.set(u,{meshes:e});for(let h=0,g=d.length;h<g;h++)u.add(d[h]);return u})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(In.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new qu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],c=[];for(let l=0,f=a.length;l<f;l++){const d=a[l];if(d){o.push(d);const u=new Ue;s!==null&&u.fromArray(s.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new ku(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],f=[];for(let d=0,u=i.channels.length;d<u;d++){const h=i.channels[d],g=i.samplers[h.sampler],x=h.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,M=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),f.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(f)]).then(function(d){const u=d[0],h=d[1],g=d[2],x=d[3],m=d[4],p=[];for(let _=0,b=u.length;_<b;_++){const v=u[_],E=h[_],T=g[_],R=x[_],S=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const y=n._createAnimationTracks(v,E,T,R,S);if(y)for(let w=0;w<y.length;w++)p.push(y[w])}const M=new ob(s,void 0,p);return $n(M,i),M})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,f=o.length;l<f;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),c]).then(function(l){const f=l[0],d=l[1],u=l[2];u!==null&&f.traverse(function(h){h.isSkinnedMesh&&h.bind(u,Yy)});for(let h=0,g=d.length;h<g;h++)f.add(d[h]);return f})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(l){return i._getNodeRef(i.cameraCache,s.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let f;if(s.isBone===!0?f=new fp:l.length>1?f=new En:l.length===1?f=l[0]:f=new bt,f!==l[0])for(let d=0,u=l.length;d<u;d++)f.add(l[d]);if(s.name&&(f.userData.name=s.name,f.name=a),$n(f,s),s.extensions&&rr(n,f,s),s.matrix!==void 0){const d=new Ue;d.fromArray(s.matrix),f.applyMatrix4(d)}else s.translation!==void 0&&f.position.fromArray(s.translation),s.rotation!==void 0&&f.quaternion.fromArray(s.rotation),s.scale!==void 0&&f.scale.fromArray(s.scale);if(!i.associations.has(f))i.associations.set(f,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const d=i.associations.get(f);i.associations.set(f,{...d})}return i.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new En;n.name&&(s.name=i.createUniqueName(n.name)),$n(s,n),n.extensions&&rr(t,s,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let f=0,d=c.length;f<d;f++)s.add(c[f]);const l=f=>{const d=new Map;for(const[u,h]of i.associations)(u instanceof Wn||u instanceof Lt)&&d.set(u,h);return f.traverse(u=>{const h=i.associations.get(u);h!=null&&d.set(u,h)}),d};return i.associations=l(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,c=[];Ii[s.path]===Ii.weights?e.traverse(function(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}):c.push(o);let l;switch(Ii[s.path]){case Ii.weights:l=ds;break;case Ii.rotation:l=hs;break;case Ii.translation:case Ii.scale:l=ps;break;default:switch(n.itemSize){case 1:l=ds;break;case 2:case 3:default:l=ps;break}break}const f=i.interpolation!==void 0?Vy[i.interpolation]:ua,d=this._getArrayFromAccessor(n);for(let u=0,h=c.length;u<h;u++){const g=new l(c[u]+"."+Ii[s.path],t.array,d,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=lu(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof hs?Hy:Lp;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Jy(r,e,t){const n=e.attributes,i=new nt;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){const f=lu(rs[o.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new I,c=new I;for(let l=0,f=s.length;l<f;l++){const d=s[l];if(d.POSITION!==void 0){const u=t.json.accessors[d.POSITION],h=u.min,g=u.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),u.normalized){const x=lu(rs[u.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new oi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Od(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(c){r.setAttribute(o,c)})}for(const a in n){const o=cu[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return Ze.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),$n(r,e),Jy(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Wy(r,e.targets,t):r})}class $y extends up{constructor(){super();const e=new xr;e.deleteAttribute("uv");const t=new ha({side:qt}),n=new ha,i=new Sp(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const s=new gt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new hp(e,n,6),o=new bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new gt(e,Vr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new gt(e,Vr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const f=new gt(e,Vr(17));f.position.set(14.904,12.198,-1.832),f.scale.set(.15,4.265,6.331),this.add(f);const d=new gt(e,Vr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const u=new gt(e,Vr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const h=new gt(e,Vr(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Vr(r){return new Zg({color:0,emissive:16777215,emissiveIntensity:r})}const Ip=0,Zy=1,Qy=2,Bd=2,Cc=1.25,kd=1,ea=32,Fo=65535,eM=Math.pow(2,-24),Pc=Symbol("SKIP_GENERATION");function tM(r){return r.index?r.index.count:r.attributes.position.count}function Ki(r){return tM(r)/3}function nM(r,e=ArrayBuffer){return r>65535?new Uint32Array(new e(4*r)):new Uint16Array(new e(2*r))}function iM(r,e){if(!r.index){const t=r.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=nM(t,n);r.setIndex(new Ot(i,1));for(let s=0;s<t;s++)i[s]=s}}function Dp(r,e){const t=Ki(r),n=e||r.drawRange,i=n.start/3,s=(n.start+n.count)/3,a=Math.max(0,i),o=Math.min(t,s)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function Up(r,e){if(!r.groups||!r.groups.length)return Dp(r,e);const t=[],n=new Set,i=e||r.drawRange,s=i.start/3,a=(i.start+i.count)/3;for(const c of r.groups){const l=c.start/3,f=(c.start+c.count)/3;n.add(Math.max(s,l)),n.add(Math.min(a,f))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],f=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(f-l)})}return t}function rM(r,e){const t=Ki(r),n=Up(r,e).sort((a,o)=>a.offset-o.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let s=0;return n.forEach(({count:a})=>s+=a),t!==s}function Lc(r,e,t,n,i){let s=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,f=-1/0,d=1/0,u=1/0,h=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=e*6,M=(e+t)*6;p<M;p+=6){const _=r[p+0],b=r[p+1],v=_-b,E=_+b;v<s&&(s=v),E>c&&(c=E),_<d&&(d=_),_>g&&(g=_);const T=r[p+2],R=r[p+3],S=T-R,y=T+R;S<a&&(a=S),y>l&&(l=y),T<u&&(u=T),T>x&&(x=T);const w=r[p+4],A=r[p+5],L=w-A,D=w+A;L<o&&(o=L),D>f&&(f=D),w<h&&(h=w),w>m&&(m=w)}n[0]=s,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=f,i[0]=d,i[1]=u,i[2]=h,i[3]=g,i[4]=x,i[5]=m}function sM(r,e=null,t=null,n=null){const i=r.attributes.position,s=r.index?r.index.array:null,a=Ki(r),o=i.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=i.array,f=i.offset||0;let d=3;i.isInterleavedBufferAttribute&&(d=i.data.stride);const u=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,x=h*6;let m=g+0,p=g+1,M=g+2;s&&(m=s[m],p=s[p],M=s[M]),o||(m=m*d+f,p=p*d+f,M=M*d+f);for(let _=0;_<3;_++){let b,v,E;o?(b=i[u[_]](m),v=i[u[_]](p),E=i[u[_]](M)):(b=l[m+_],v=l[p+_],E=l[M+_]);let T=b;v<T&&(T=v),E<T&&(T=E);let R=b;v>R&&(R=v),E>R&&(R=E);const S=(R-T)/2,y=_*2;c[x+y+0]=T+S,c[x+y+1]=S+(Math.abs(T)+S)*eM}}return c}function Et(r,e,t){return t.min.x=e[r],t.min.y=e[r+1],t.min.z=e[r+2],t.max.x=e[r+3],t.max.y=e[r+4],t.max.z=e[r+5],t}function zd(r){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=r[n+3]-r[n];i>t&&(t=i,e=n)}return e}function Hd(r,e){e.set(r)}function Vd(r,e,t){let n,i;for(let s=0;s<3;s++){const a=s+3;n=r[s],i=e[s],t[s]=n<i?n:i,n=r[a],i=e[a],t[a]=n>i?n:i}}function $a(r,e,t){for(let n=0;n<3;n++){const i=e[r+2*n],s=e[r+2*n+1],a=i-s,o=i+s;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Us(r){const e=r[3]-r[0],t=r[4]-r[1],n=r[5]-r[2];return 2*(e*t+t*n+n*e)}const bi=32,aM=(r,e)=>r.candidate-e.candidate,Di=new Array(bi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Za=new Float32Array(6);function oM(r,e,t,n,i,s){let a=-1,o=0;if(s===Ip)a=zd(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(s===Zy)a=zd(r),a!==-1&&(o=cM(t,n,i,a));else if(s===Qy){const c=Us(r);let l=Cc*i;const f=n*6,d=(n+i)*6;for(let u=0;u<3;u++){const h=e[u],m=(e[u+3]-h)/bi;if(i<bi/4){const p=[...Di];p.length=i;let M=0;for(let b=f;b<d;b+=6,M++){const v=p[M];v.candidate=t[b+2*u],v.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:R}=v;for(let S=0;S<3;S++)R[S]=1/0,R[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;$a(b,t,E)}p.sort(aM);let _=i;for(let b=0;b<_;b++){const v=p[b];for(;b+1<_&&p[b+1].candidate===v.candidate;)p.splice(b+1,1),_--}for(let b=f;b<d;b+=6){const v=t[b+2*u];for(let E=0;E<_;E++){const T=p[E];v>=T.candidate?$a(b,t,T.rightCacheBounds):($a(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<_;b++){const v=p[b],E=v.count,T=i-v.count,R=v.leftCacheBounds,S=v.rightCacheBounds;let y=0;E!==0&&(y=Us(R)/c);let w=0;T!==0&&(w=Us(S)/c);const A=kd+Cc*(y*E+w*T);A<l&&(a=u,l=A,o=v.candidate)}}else{for(let _=0;_<bi;_++){const b=Di[_];b.count=0,b.candidate=h+m+_*m;const v=b.bounds;for(let E=0;E<3;E++)v[E]=1/0,v[E+3]=-1/0}for(let _=f;_<d;_+=6){let E=~~((t[_+2*u]-h)/m);E>=bi&&(E=bi-1);const T=Di[E];T.count++,$a(_,t,T.bounds)}const p=Di[bi-1];Hd(p.bounds,p.rightCacheBounds);for(let _=bi-2;_>=0;_--){const b=Di[_],v=Di[_+1];Vd(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let M=0;for(let _=0;_<bi-1;_++){const b=Di[_],v=b.count,E=b.bounds,R=Di[_+1].rightCacheBounds;v!==0&&(M===0?Hd(E,Za):Vd(E,Za,Za)),M+=v;let S=0,y=0;M!==0&&(S=Us(Za)/c);const w=i-M;w!==0&&(y=Us(R)/c);const A=kd+Cc*(S*M+y*w);A<l&&(a=u,l=A,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function cM(r,e,t,n){let i=0;for(let s=e,a=e+t;s<a;s++)i+=r[s*6+n*2];return i/t}class Ic{constructor(){this.boundingData=new Float32Array(6)}}function lM(r,e,t,n,i,s){let a=n,o=n+i-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let f=0;f<3;f++){let d=e[a*3+f];e[a*3+f]=e[o*3+f],e[o*3+f]=d}for(let f=0;f<6;f++){let d=t[a*6+f];t[a*6+f]=t[o*6+f],t[o*6+f]=d}a++,o--}else return a}}function uM(r,e,t,n,i,s){let a=n,o=n+i-1;const c=s.pos,l=s.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let f=r[a];r[a]=r[o],r[o]=f;for(let d=0;d<6;d++){let u=t[a*6+d];t[a*6+d]=t[o*6+d],t[o*6+d]=u}a++,o--}else return a}}function an(r,e){return e[r+15]===65535}function mn(r,e){return e[r+6]}function Tn(r,e){return e[r+14]}function wn(r){return r+8}function An(r,e){return e[r+6]}function Np(r,e){return e[r+7]}let Fp,Xs,yo,Op;const fM=Math.pow(2,32);function uu(r){return"count"in r?1:1+uu(r.left)+uu(r.right)}function dM(r,e,t){return Fp=new Float32Array(t),Xs=new Uint32Array(t),yo=new Uint16Array(t),Op=new Uint8Array(t),fu(r,e)}function fu(r,e){const t=r/4,n=r/2,i="count"in e,s=e.boundingData;for(let a=0;a<6;a++)Fp[t+a]=s[a];if(i)if(e.buffer){const a=e.buffer;Op.set(new Uint8Array(a),r);for(let o=r,c=r+a.byteLength;o<c;o+=ea){const l=o/2;an(l,yo)||(Xs[o/4+6]+=t)}return r+a.byteLength}else{const a=e.offset,o=e.count;return Xs[t+6]=a,yo[n+14]=o,yo[n+15]=Fo,r+ea}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=fu(r+ea,a),l/4>fM)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Xs[t+6]=l/4,l=fu(l,o),Xs[t+7]=c,l}}function hM(r,e){const t=(r.index?r.index.count:r.attributes.position.count)/3,n=t>2**16,i=n?4:2,s=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function pM(r,e,t,n,i){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:f}=i,d=r._indirectBuffer,u=r.geometry,h=u.index?u.index.array:null,g=f?uM:lM,x=Ki(u),m=new Float32Array(6);let p=!1;const M=new Ic;return Lc(e,t,n,M.boundingData,m),b(M,t,n,m),M;function _(v){l&&l(v/x)}function b(v,E,T,R=null,S=0){if(!p&&S>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(u))),T<=o||S>=s)return _(E+T),v.offset=E,v.count=T,v;const y=oM(v.boundingData,R,e,E,T,c);if(y.axis===-1)return _(E+T),v.offset=E,v.count=T,v;const w=g(d,h,e,E,T,y);if(w===E||w===E+T)_(E+T),v.offset=E,v.count=T;else{v.splitAxis=y.axis;const A=new Ic,L=E,D=w-E;v.left=A,Lc(e,L,D,A.boundingData,m),b(A,L,D,m,S+1);const F=new Ic,B=w,G=T-D;v.right=F,Lc(e,B,G,F.boundingData,m),b(F,B,G,m,S+1)}return v}}function mM(r,e){const t=r.geometry;e.indirect&&(r._indirectBuffer=hM(t,e.useSharedArrayBuffer),rM(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),r._indirectBuffer||iM(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Dp(t,e.range),s=sM(t,null,i[0].offset,i[0].count),a=e.indirect?i:Up(t,e.range);r._roots=a.map(o=>{const c=pM(r,s,o.offset,o.count,e),l=uu(c),f=new n(ea*l);return dM(0,c,f),f})}class Ti{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let s=0,a=e.length;s<a;s++){const c=e[s][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Ti.prototype.setFromBox=(function(){const r=new I;return function(t,n){const i=n.min,s=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){r.x=i.x*c+s.x*(1-c),r.y=i.y*l+s.y*(1-l),r.z=i.z*f+s.z*(1-f);const d=t.dot(r);a=Math.min(d,a),o=Math.max(d,o)}this.min=a,this.max=o}})();const gM=(function(){const r=new I,e=new I,t=new I;return function(i,s,a){const o=i.start,c=r,l=s.start,f=e;t.subVectors(o,l),r.subVectors(i.end,i.start),e.subVectors(s.end,s.start);const d=t.dot(f),u=f.dot(c),h=f.dot(f),g=t.dot(c),m=c.dot(c)*h-u*u;let p,M;m!==0?p=(d*u-g*h)/m:p=0,M=(d+p*u)/h,a.x=p,a.y=M}})(),Ju=(function(){const r=new Oe,e=new I,t=new I;return function(i,s,a,o){gM(i,s,r);let c=r.x,l=r.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,a),s.at(l,o);return}else if(c>=0&&c<=1){l<0?s.at(0,o):s.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?i.at(0,a):i.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let f;c<0?f=i.start:f=i.end;let d;l<0?d=s.start:d=s.end;const u=e,h=t;if(i.closestPointToPoint(d,!0,e),s.closestPointToPoint(f,!0,t),u.distanceToSquared(d)<=h.distanceToSquared(f)){a.copy(u),o.copy(d);return}else{a.copy(f),o.copy(h);return}}}})(),bM=(function(){const r=new I,e=new I,t=new Zn,n=new ai;return function(s,a){const{radius:o,center:c}=s,{a:l,b:f,c:d}=a;if(n.start=l,n.end=f,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o||(n.start=l,n.end=d,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o)||(n.start=f,n.end=d,n.closestPointToPoint(c,!0,r).distanceTo(c)<=o))return!0;const x=a.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=o){const p=x.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),_M=["x","y","z"],_i=1e-15,Gd=_i*_i;function yn(r){return Math.abs(r)<_i}class jn extends Pt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new I),this.satBounds=new Array(4).fill().map(()=>new Ti),this.points=[this.a,this.b,this.c],this.plane=new Zn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ai,this.needsUpdate=!0}intersectsSphere(e){return bM(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,s=this.satAxes,a=this.satBounds,o=s[0],c=a[0];this.getNormal(o),c.setFromPoints(o,i);const l=s[1],f=a[1];l.subVectors(e,t),f.setFromPoints(l,i);const d=s[2],u=a[2];d.subVectors(t,n),u.setFromPoints(d,i);const h=s[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,i);const x=l.length(),m=d.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<_i?m<_i||p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<_i?p<_i?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<_i&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}jn.prototype.closestPointToSegment=(function(){const r=new I,e=new I,t=new ai;return function(i,s=null,a=null){const{start:o,end:c}=i,l=this.points;let f,d=1/0;for(let u=0;u<3;u++){const h=(u+1)%3;t.start.copy(l[u]),t.end.copy(l[h]),Ju(t,i,r,e),f=r.distanceToSquared(e),f<d&&(d=f,s&&s.copy(r),a&&a.copy(e))}return this.closestPointToPoint(o,r),f=o.distanceToSquared(r),f<d&&(d=f,s&&s.copy(r),a&&a.copy(o)),this.closestPointToPoint(c,r),f=c.distanceToSquared(r),f<d&&(d=f,s&&s.copy(r),a&&a.copy(c)),Math.sqrt(d)}})();jn.prototype.intersectsTriangle=(function(){const r=new jn,e=new Ti,t=new Ti,n=new I,i=new I,s=new I,a=new I,o=new ai,c=new ai,l=new I,f=new Oe,d=new Oe;function u(_,b,v,E){const T=n;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?T.copy(_.plane.normal):T.copy(b.plane.normal);const R=_.satBounds,S=_.satAxes;for(let A=1;A<4;A++){const L=R[A],D=S[A];if(e.setFromPoints(D,b.points),L.isSeparated(e)||(a.copy(T).cross(D),e.setFromPoints(a,_.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const y=b.satBounds,w=b.satAxes;for(let A=1;A<4;A++){const L=y[A],D=w[A];if(e.setFromPoints(D,_.points),L.isSeparated(e)||(a.crossVectors(T,D),e.setFromPoints(a,_.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return v&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function h(_,b,v,E,T,R,S,y,w,A,L){let D=S/(S-y);A.x=E+(T-E)*D,L.start.subVectors(b,_).multiplyScalar(D).add(_),D=S/(S-w),A.y=E+(R-E)*D,L.end.subVectors(v,_).multiplyScalar(D).add(_)}function g(_,b,v,E,T,R,S,y,w,A,L){if(T>0)h(_.c,_.a,_.b,E,b,v,w,S,y,A,L);else if(R>0)h(_.b,_.a,_.c,v,b,E,y,S,w,A,L);else if(y*w>0||S!=0)h(_.a,_.b,_.c,b,v,E,S,y,w,A,L);else if(y!=0)h(_.b,_.a,_.c,v,b,E,y,S,w,A,L);else if(w!=0)h(_.c,_.a,_.b,E,b,v,w,S,y,A,L);else return!0;return!1}function x(_,b,v,E){const T=b.degenerateSegment,R=_.plane.distanceToPoint(T.start),S=_.plane.distanceToPoint(T.end);return yn(R)?yn(S)?u(_,b,v,E):(v&&(v.start.copy(T.start),v.end.copy(T.start)),_.containsPoint(T.start)):yn(S)?(v&&(v.start.copy(T.end),v.end.copy(T.end)),_.containsPoint(T.end)):_.plane.intersectLine(T,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),_.containsPoint(n)):!1}function m(_,b,v){const E=b.a;return yn(_.plane.distanceToPoint(E))&&_.containsPoint(E)?(v&&(v.start.copy(E),v.end.copy(E)),!0):!1}function p(_,b,v){const E=_.degenerateSegment,T=b.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<Gd?(v&&(v.start.copy(T),v.end.copy(T)),!0):!1}function M(_,b,v,E){if(_.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const T=_.degenerateSegment,R=b.degenerateSegment,S=i,y=s;T.delta(S),R.delta(y);const w=n.subVectors(R.start,T.start),A=S.x*y.y-S.y*y.x;if(yn(A))return!1;const L=(w.x*y.y-w.y*y.x)/A,D=-(S.x*w.y-S.y*w.x)/A;if(L<0||L>1||D<0||D>1)return!1;const F=T.start.z+S.z*L,B=R.start.z+y.z*D;return yn(F-B)?(v&&(v.start.copy(T.start).addScaledVector(S,L),v.end.copy(T.start).addScaledVector(S,L)),!0):!1}else return b.isDegenerateIntoPoint?p(_,b,v):x(b,_,v,E);else{if(_.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(_.a)<Gd?(v&&(v.start.copy(_.a),v.end.copy(_.a)),!0):!1:b.isDegenerateIntoSegment?p(b,_,v):m(b,_,v);if(b.isDegenerateIntoPoint)return m(_,b,v);if(b.isDegenerateIntoSegment)return x(_,b,v,E)}}return function(b,v=null,E=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(r.copy(b),r.update(),b=r);const T=M(this,b,v,E);if(T!==void 0)return T;const R=this.plane,S=b.plane;let y=S.distanceToPoint(this.a),w=S.distanceToPoint(this.b),A=S.distanceToPoint(this.c);yn(y)&&(y=0),yn(w)&&(w=0),yn(A)&&(A=0);const L=y*w,D=y*A;if(L>0&&D>0)return!1;let F=R.distanceToPoint(b.a),B=R.distanceToPoint(b.b),G=R.distanceToPoint(b.c);yn(F)&&(F=0),yn(B)&&(B=0),yn(G)&&(G=0);const k=F*B,Z=F*G;if(k>0&&Z>0)return!1;i.copy(R.normal),s.copy(S.normal);const se=i.cross(s);let fe=0,Ie=Math.abs(se.x);const qe=Math.abs(se.y);qe>Ie&&(Ie=qe,fe=1),Math.abs(se.z)>Ie&&(fe=2);const ee=_M[fe],W=this.a[ee],q=this.b[ee],ae=this.c[ee],xe=b.a[ee],Y=b.b[ee],pe=b.c[ee];if(g(this,W,q,ae,L,D,y,w,A,f,o))return u(this,b,v,E);if(g(b,xe,Y,pe,k,Z,F,B,G,d,c))return u(this,b,v,E);if(f.y<f.x){const Xe=f.y;f.y=f.x,f.x=Xe,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(d.y<d.x){const Xe=d.y;d.y=d.x,d.x=Xe,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return f.y<d.x||d.y<f.x?!1:(v&&(d.x>f.x?v.start.copy(c.start):v.start.copy(o.start),d.y<f.y?v.end.copy(c.end):v.end.copy(o.end)),!0)}})();jn.prototype.distanceToPoint=(function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();jn.prototype.distanceToTriangle=(function(){const r=new I,e=new I,t=["a","b","c"],n=new ai,i=new ai;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let f=1/0;for(let d=0;d<3;d++){let u;const h=t[d],g=a[h];this.closestPointToPoint(g,r),u=g.distanceToSquared(r),u<f&&(f=u,o&&o.copy(r),c&&c.copy(g));const x=this[h];a.closestPointToPoint(x,r),u=x.distanceToSquared(r),u<f&&(f=u,o&&o.copy(x),c&&c.copy(r))}for(let d=0;d<3;d++){const u=t[d],h=t[(d+1)%3];n.set(this[u],this[h]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];i.set(a[x],a[m]),Ju(n,i,r,e);const p=r.distanceToSquared(e);p<f&&(f=p,o&&o.copy(r),c&&c.copy(e))}}return Math.sqrt(f)}})();class Qt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new I,this.max=new I,this.matrix=new Ue,this.invMatrix=new Ue,this.points=new Array(8).fill().map(()=>new I),this.satAxes=new Array(3).fill().map(()=>new I),this.satBounds=new Array(3).fill().map(()=>new Ti),this.alignedSatBounds=new Array(3).fill().map(()=>new Ti),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Qt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let d=0;d<=1;d++){const u=1*l|2*f|4*d,h=i[u];h.x=l?n.x:t.x,h.y=f?n.y:t.y,h.z=d?n.z:t.z,h.applyMatrix4(e)}const s=this.satBounds,a=this.satAxes,o=i[0];for(let l=0;l<3;l++){const f=a[l],d=s[l],u=1<<l,h=i[u];f.subVectors(o,h),d.setFromPoints(f,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Qt.prototype.intersectsBox=(function(){const r=new Ti;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(r.min=n.x,r.max=i.x,o[0].isSeparated(r)||(r.min=n.y,r.max=i.y,o[1].isSeparated(r))||(r.min=n.z,r.max=i.z,o[2].isSeparated(r)))return!1;for(let c=0;c<3;c++){const l=a[c],f=s[c];if(r.setFromBox(l,t),f.isSeparated(r))return!1}return!0}})();Qt.prototype.intersectsTriangle=(function(){const r=new jn,e=new Array(3),t=new Ti,n=new Ti,i=new I;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(r.copy(a),r.update(),a=r);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let u=0;u<3;u++){const h=o[u],g=c[u];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,f=a.satAxes,d=this.points;for(let u=0;u<3;u++){const h=l[u],g=f[u];if(t.setFromPoints(g,d),h.isSeparated(t))return!1}for(let u=0;u<3;u++){const h=c[u];for(let g=0;g<4;g++){const x=f[g];if(i.crossVectors(h,x),t.setFromPoints(i,e),n.setFromPoints(i,d),t.isSeparated(n))return!1}}return!0}})();Qt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Qt.prototype.distanceToPoint=(function(){const r=new I;return function(t){return this.closestPointToPoint(t,r),t.distanceTo(r)}})();Qt.prototype.distanceToBox=(function(){const r=["x","y","z"],e=new Array(12).fill().map(()=>new ai),t=new Array(12).fill().map(()=>new ai),n=new I,i=new I;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const f=o*o,d=a.min,u=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];i.copy(p).clamp(d,u);const M=p.distanceToSquared(i);if(M<g&&(g=M,c&&c.copy(p),l&&l.copy(i),M<f))return Math.sqrt(M)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let M=0;M<=1;M++){const _=(m+1)%3,b=(m+2)%3,v=p<<_|M<<b,E=1<<m|p<<_|M<<b,T=h[v],R=h[E];e[x].set(T,R);const y=r[m],w=r[_],A=r[b],L=t[x],D=L.start,F=L.end;D[y]=d[y],D[w]=p?d[w]:u[w],D[A]=M?d[A]:u[w],F[y]=u[y],F[w]=p?d[w]:u[w],F[A]=M?d[A]:u[w],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let M=0;M<=1;M++){i.x=m?u.x:d.x,i.y=p?u.y:d.y,i.z=M?u.z:d.z,this.closestPointToPoint(i,n);const _=i.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<f))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=e[m];for(let M=0;M<12;M++){const _=t[M];Ju(p,_,n,i);const b=n.distanceToSquared(i);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(i),b<f))return Math.sqrt(b)}}return Math.sqrt(g)}})();class $u{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class xM extends $u{constructor(){super(()=>new jn)}}const Rn=new xM;class vM{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const _t=new vM;let Vi,es;const Gr=[],Qa=new $u(()=>new nt);function yM(r,e,t,n,i,s){Vi=Qa.getPrimitive(),es=Qa.getPrimitive(),Gr.push(Vi,es),_t.setBuffer(r._roots[e]);const a=du(0,r.geometry,t,n,i,s);_t.clearBuffer(),Qa.releasePrimitive(Vi),Qa.releasePrimitive(es),Gr.pop(),Gr.pop();const o=Gr.length;return o>0&&(es=Gr[o-1],Vi=Gr[o-2]),a}function du(r,e,t,n,i=null,s=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=_t;let f=r*2;if(an(f,c)){const g=mn(r,l),x=Tn(f,c);return Et(r,o,Vi),n(g,x,!1,a,s+r,Vi)}else{let A=function(D){const{uint16Array:F,uint32Array:B}=_t;let G=D*2;for(;!an(G,F);)D=wn(D),G=D*2;return mn(D,B)},L=function(D){const{uint16Array:F,uint32Array:B}=_t;let G=D*2;for(;!an(G,F);)D=An(D,B),G=D*2;return mn(D,B)+Tn(G,F)};var u=A,h=L;const g=wn(r),x=An(r,l);let m=g,p=x,M,_,b,v;if(i&&(b=Vi,v=es,Et(m,o,b),Et(p,o,v),M=i(b),_=i(v),_<M)){m=x,p=g;const D=M;M=_,_=D,b=v}b||(b=Vi,Et(m,o,b));const E=an(m*2,c),T=t(b,E,M,a+1,s+m);let R;if(T===Bd){const D=A(m),B=L(m)-D;R=n(D,B,!0,a+1,s+m,b)}else R=T&&du(m,e,t,n,i,s,a+1);if(R)return!0;v=es,Et(p,o,v);const S=an(p*2,c),y=t(v,S,_,a+1,s+p);let w;if(y===Bd){const D=A(p),B=L(p)-D;w=n(D,B,!0,a+1,s+p,v)}else w=y&&du(p,e,t,n,i,s,a+1);return!!w}}const Ns=new I,Dc=new I;function MM(r,e,t={},n=0,i=1/0){const s=n*n,a=i*i;let o=1/0,c=null;if(r.shapecast({boundsTraverseOrder:f=>(Ns.copy(e).clamp(f.min,f.max),Ns.distanceToSquared(e)),intersectsBounds:(f,d,u)=>u<o&&u<a,intersectsTriangle:(f,d)=>{f.closestPointToPoint(e,Ns);const u=e.distanceToSquared(Ns);return u<o&&(Dc.copy(Ns),o=u,c=d),u<s}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(Dc):t.point=Dc.clone(),t.distance=l,t.faceIndex=c,t}const eo=parseInt(ba)>=169,SM=parseInt(ba)<=161,sr=new I,ar=new I,or=new I,to=new Oe,no=new Oe,io=new Oe,Wd=new I,qd=new I,Xd=new I,Fs=new I;function EM(r,e,t,n,i,s,a,o){let c;if(s===qt?c=r.intersectTriangle(n,t,e,!0,i):c=r.intersectTriangle(e,t,n,s!==sn,i),c===null)return null;const l=r.origin.distanceTo(i);return l<a||l>o?null:{distance:l,point:i.clone()}}function TM(r,e,t,n,i,s,a,o,c,l,f){sr.fromBufferAttribute(e,s),ar.fromBufferAttribute(e,a),or.fromBufferAttribute(e,o);const d=EM(r,sr,ar,or,Fs,c,l,f);if(d){if(n){to.fromBufferAttribute(n,s),no.fromBufferAttribute(n,a),io.fromBufferAttribute(n,o),d.uv=new Oe;const h=Pt.getInterpolation(Fs,sr,ar,or,to,no,io,d.uv);eo||(d.uv=h)}if(i){to.fromBufferAttribute(i,s),no.fromBufferAttribute(i,a),io.fromBufferAttribute(i,o),d.uv1=new Oe;const h=Pt.getInterpolation(Fs,sr,ar,or,to,no,io,d.uv1);eo||(d.uv1=h),SM&&(d.uv2=d.uv1)}if(t){Wd.fromBufferAttribute(t,s),qd.fromBufferAttribute(t,a),Xd.fromBufferAttribute(t,o),d.normal=new I;const h=Pt.getInterpolation(Fs,sr,ar,or,Wd,qd,Xd,d.normal);d.normal.dot(r.direction)>0&&d.normal.multiplyScalar(-1),eo||(d.normal=h)}const u={a:s,b:a,c:o,normal:new I,materialIndex:0};if(Pt.getNormal(sr,ar,or,u.normal),d.face=u,d.faceIndex=s,eo){const h=new I;Pt.getBarycoord(Fs,sr,ar,or,h),d.barycoord=h}}return d}function Oo(r,e,t,n,i,s,a){const o=n*3;let c=o+0,l=o+1,f=o+2;const d=r.index;r.index&&(c=d.getX(c),l=d.getX(l),f=d.getX(f));const{position:u,normal:h,uv:g,uv1:x}=r.attributes,m=TM(t,u,h,g,x,c,l,f,e,s,a);return m?(m.faceIndex=n,i&&i.push(m),m):null}function Rt(r,e,t,n){const i=r.a,s=r.b,a=r.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),s.x=n.getX(c),s.y=n.getY(c),s.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function wM(r,e,t,n,i,s,a,o){const{geometry:c,_indirectBuffer:l}=r;for(let f=n,d=n+i;f<d;f++)Oo(c,e,t,f,s,a,o)}function AM(r,e,t,n,i,s,a){const{geometry:o,_indirectBuffer:c}=r;let l=1/0,f=null;for(let d=n,u=n+i;d<u;d++){let h;h=Oo(o,e,t,d,null,s,a),h&&h.distance<l&&(f=h,l=h.distance)}return f}function RM(r,e,t,n,i,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let f=r,d=e+r;f<d;f++){let u;if(u=f,Rt(a,u*3,c,l),a.needsUpdate=!0,n(a,u,i,s))return!0}return!1}function CM(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,a,o,c,l=0;const f=r._roots;for(let u=0,h=f.length;u<h;u++)s=f[u],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),d(0,l),l+=s.byteLength;function d(u,h,g=!1){const x=u*2;if(o[x+15]===Fo){const p=a[u+6],M=o[x+14];let _=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,R=-1/0;for(let S=3*p,y=3*(p+M);S<y;S++){let w=n[S];const A=i.getX(w),L=i.getY(w),D=i.getZ(w);A<_&&(_=A),A>E&&(E=A),L<b&&(b=L),L>T&&(T=L),D<v&&(v=D),D>R&&(R=D)}return c[u+0]!==_||c[u+1]!==b||c[u+2]!==v||c[u+3]!==E||c[u+4]!==T||c[u+5]!==R?(c[u+0]=_,c[u+1]=b,c[u+2]=v,c[u+3]=E,c[u+4]=T,c[u+5]=R,!0):!1}else{const p=u+8,M=a[u+6],_=p+h,b=M+h;let v=g,E=!1,T=!1;e?v||(E=e.has(_),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const R=v||E,S=v||T;let y=!1;R&&(y=d(p,h,v));let w=!1;S&&(w=d(M,h,v));const A=y||w;if(A)for(let L=0;L<3;L++){const D=p+L,F=M+L,B=c[D],G=c[D+3],k=c[F],Z=c[F+3];c[u+L]=B<k?B:k,c[u+L+3]=G>Z?G:Z}return A}}}function ji(r,e,t,n,i){let s,a,o,c,l,f;const d=1/t.direction.x,u=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,x=t.origin.y,m=t.origin.z;let p=e[r],M=e[r+3],_=e[r+1],b=e[r+3+1],v=e[r+2],E=e[r+3+2];return d>=0?(s=(p-g)*d,a=(M-g)*d):(s=(M-g)*d,a=(p-g)*d),u>=0?(o=(_-x)*u,c=(b-x)*u):(o=(b-x)*u,c=(_-x)*u),s>c||o>a||((o>s||isNaN(s))&&(s=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(v-m)*h,f=(E-m)*h):(l=(E-m)*h,f=(v-m)*h),s>f||l>a)?!1:((l>s||s!==s)&&(s=l),(f<a||a!==a)&&(a=f),s<=i&&a>=n)}function PM(r,e,t,n,i,s,a,o){const{geometry:c,_indirectBuffer:l}=r;for(let f=n,d=n+i;f<d;f++){let u=l?l[f]:f;Oo(c,e,t,u,s,a,o)}}function LM(r,e,t,n,i,s,a){const{geometry:o,_indirectBuffer:c}=r;let l=1/0,f=null;for(let d=n,u=n+i;d<u;d++){let h;h=Oo(o,e,t,c?c[d]:d,null,s,a),h&&h.distance<l&&(f=h,l=h.distance)}return f}function IM(r,e,t,n,i,s,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let f=r,d=e+r;f<d;f++){let u;if(u=t.resolveTriangleIndex(f),Rt(a,u*3,c,l),a.needsUpdate=!0,n(a,u,i,s))return!0}return!1}function DM(r,e,t,n,i,s,a){_t.setBuffer(r._roots[e]),hu(0,r,t,n,i,s,a),_t.clearBuffer()}function hu(r,e,t,n,i,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,f=r*2;if(an(f,c)){const u=mn(r,l),h=Tn(f,c);wM(e,t,n,u,h,i,s,a)}else{const u=wn(r);ji(u,o,n,s,a)&&hu(u,e,t,n,i,s,a);const h=An(r,l);ji(h,o,n,s,a)&&hu(h,e,t,n,i,s,a)}}const UM=["x","y","z"];function NM(r,e,t,n,i,s){_t.setBuffer(r._roots[e]);const a=pu(0,r,t,n,i,s);return _t.clearBuffer(),a}function pu(r,e,t,n,i,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=r*2;if(an(l,o)){const d=mn(r,c),u=Tn(l,o);return AM(e,t,n,d,u,i,s)}else{const d=Np(r,c),u=UM[d],g=n.direction[u]>=0;let x,m;g?(x=wn(r),m=An(r,c)):(x=An(r,c),m=wn(r));const M=ji(x,a,n,i,s)?pu(x,e,t,n,i,s):null;if(M){const v=M.point[u];if(g?v<=a[m+d]:v>=a[m+d+3])return M}const b=ji(m,a,n,i,s)?pu(m,e,t,n,i,s):null;return M&&b?M.distance<=b.distance?M:b:M||b||null}}const ro=new nt,Wr=new jn,qr=new jn,Os=new Ue,jd=new Qt,so=new Qt;function FM(r,e,t,n){_t.setBuffer(r._roots[e]);const i=mu(0,r,t,n);return _t.clearBuffer(),i}function mu(r,e,t,n,i=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),jd.set(t.boundingBox.min,t.boundingBox.max,n),i=jd),an(c,a)){const f=e.geometry,d=f.index,u=f.attributes.position,h=t.index,g=t.attributes.position,x=mn(r,o),m=Tn(c,a);if(Os.copy(n).invert(),t.boundsTree)return Et(r,s,so),so.matrix.copy(Os),so.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>so.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let _=x*3,b=(m+x)*3;_<b;_+=3)if(Rt(qr,_,d,u),qr.needsUpdate=!0,M.intersectsTriangle(qr))return!0;return!1}});{const p=Ki(t);for(let M=x*3,_=(m+x)*3;M<_;M+=3){Rt(Wr,M,d,u),Wr.a.applyMatrix4(Os),Wr.b.applyMatrix4(Os),Wr.c.applyMatrix4(Os),Wr.needsUpdate=!0;for(let b=0,v=p*3;b<v;b+=3)if(Rt(qr,b,h,g),qr.needsUpdate=!0,Wr.intersectsTriangle(qr))return!0}}}else{const f=r+8,d=o[r+6];return Et(f,s,ro),!!(i.intersectsBox(ro)&&mu(f,e,t,n,i)||(Et(d,s,ro),i.intersectsBox(ro)&&mu(d,e,t,n,i)))}}const ao=new Ue,Uc=new Qt,Bs=new Qt,OM=new I,BM=new I,kM=new I,zM=new I;function HM(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Uc.set(e.boundingBox.min,e.boundingBox.max,t),Uc.needsUpdate=!0;const o=r.geometry,c=o.attributes.position,l=o.index,f=e.attributes.position,d=e.index,u=Rn.getPrimitive(),h=Rn.getPrimitive();let g=OM,x=BM,m=null,p=null;i&&(m=kM,p=zM);let M=1/0,_=null,b=null;return ao.copy(t).invert(),Bs.matrix.copy(ao),r.shapecast({boundsTraverseOrder:v=>Uc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<M&&T<a?(E&&(Bs.min.copy(v.min),Bs.max.copy(v.max),Bs.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:R=>Bs.distanceToBox(R),intersectsBounds:(R,S,y)=>y<M&&y<a,intersectsRange:(R,S)=>{for(let y=R,w=R+S;y<w;y++){Rt(h,3*y,d,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let A=v,L=v+E;A<L;A++){Rt(u,3*A,l,c),u.needsUpdate=!0;const D=u.distanceToTriangle(h,g,m);if(D<M&&(x.copy(g),p&&p.copy(m),M=D,_=A,b=y),D<s)return!0}}}});{const T=Ki(e);for(let R=0,S=T;R<S;R++){Rt(h,3*R,d,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let y=v,w=v+E;y<w;y++){Rt(u,3*y,l,c),u.needsUpdate=!0;const A=u.distanceToTriangle(h,g,m);if(A<M&&(x.copy(g),p&&p.copy(m),M=A,_=y,b=R),A<s)return!0}}}}}),Rn.releasePrimitive(u),Rn.releasePrimitive(h),M===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=M,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(ao),x.applyMatrix4(ao),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function VM(r,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=r.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let s,a,o,c,l=0;const f=r._roots;for(let u=0,h=f.length;u<h;u++)s=f[u],a=new Uint32Array(s),o=new Uint16Array(s),c=new Float32Array(s),d(0,l),l+=s.byteLength;function d(u,h,g=!1){const x=u*2;if(o[x+15]===Fo){const p=a[u+6],M=o[x+14];let _=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,R=-1/0;for(let S=p,y=p+M;S<y;S++){const w=3*r.resolveTriangleIndex(S);for(let A=0;A<3;A++){let L=w+A;L=n?n[L]:L;const D=i.getX(L),F=i.getY(L),B=i.getZ(L);D<_&&(_=D),D>E&&(E=D),F<b&&(b=F),F>T&&(T=F),B<v&&(v=B),B>R&&(R=B)}}return c[u+0]!==_||c[u+1]!==b||c[u+2]!==v||c[u+3]!==E||c[u+4]!==T||c[u+5]!==R?(c[u+0]=_,c[u+1]=b,c[u+2]=v,c[u+3]=E,c[u+4]=T,c[u+5]=R,!0):!1}else{const p=u+8,M=a[u+6],_=p+h,b=M+h;let v=g,E=!1,T=!1;e?v||(E=e.has(_),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const R=v||E,S=v||T;let y=!1;R&&(y=d(p,h,v));let w=!1;S&&(w=d(M,h,v));const A=y||w;if(A)for(let L=0;L<3;L++){const D=p+L,F=M+L,B=c[D],G=c[D+3],k=c[F],Z=c[F+3];c[u+L]=B<k?B:k,c[u+L+3]=G>Z?G:Z}return A}}}function GM(r,e,t,n,i,s,a){_t.setBuffer(r._roots[e]),gu(0,r,t,n,i,s,a),_t.clearBuffer()}function gu(r,e,t,n,i,s,a){const{float32Array:o,uint16Array:c,uint32Array:l}=_t,f=r*2;if(an(f,c)){const u=mn(r,l),h=Tn(f,c);PM(e,t,n,u,h,i,s,a)}else{const u=wn(r);ji(u,o,n,s,a)&&gu(u,e,t,n,i,s,a);const h=An(r,l);ji(h,o,n,s,a)&&gu(h,e,t,n,i,s,a)}}const WM=["x","y","z"];function qM(r,e,t,n,i,s){_t.setBuffer(r._roots[e]);const a=bu(0,r,t,n,i,s);return _t.clearBuffer(),a}function bu(r,e,t,n,i,s){const{float32Array:a,uint16Array:o,uint32Array:c}=_t;let l=r*2;if(an(l,o)){const d=mn(r,c),u=Tn(l,o);return LM(e,t,n,d,u,i,s)}else{const d=Np(r,c),u=WM[d],g=n.direction[u]>=0;let x,m;g?(x=wn(r),m=An(r,c)):(x=An(r,c),m=wn(r));const M=ji(x,a,n,i,s)?bu(x,e,t,n,i,s):null;if(M){const v=M.point[u];if(g?v<=a[m+d]:v>=a[m+d+3])return M}const b=ji(m,a,n,i,s)?bu(m,e,t,n,i,s):null;return M&&b?M.distance<=b.distance?M:b:M||b||null}}const oo=new nt,Xr=new jn,jr=new jn,ks=new Ue,Yd=new Qt,co=new Qt;function XM(r,e,t,n){_t.setBuffer(r._roots[e]);const i=_u(0,r,t,n);return _t.clearBuffer(),i}function _u(r,e,t,n,i=null){const{float32Array:s,uint16Array:a,uint32Array:o}=_t;let c=r*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),Yd.set(t.boundingBox.min,t.boundingBox.max,n),i=Yd),an(c,a)){const f=e.geometry,d=f.index,u=f.attributes.position,h=t.index,g=t.attributes.position,x=mn(r,o),m=Tn(c,a);if(ks.copy(n).invert(),t.boundsTree)return Et(r,s,co),co.matrix.copy(ks),co.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:M=>co.intersectsBox(M),intersectsTriangle:M=>{M.a.applyMatrix4(n),M.b.applyMatrix4(n),M.c.applyMatrix4(n),M.needsUpdate=!0;for(let _=x,b=m+x;_<b;_++)if(Rt(jr,3*e.resolveTriangleIndex(_),d,u),jr.needsUpdate=!0,M.intersectsTriangle(jr))return!0;return!1}});{const p=Ki(t);for(let M=x,_=m+x;M<_;M++){const b=e.resolveTriangleIndex(M);Rt(Xr,3*b,d,u),Xr.a.applyMatrix4(ks),Xr.b.applyMatrix4(ks),Xr.c.applyMatrix4(ks),Xr.needsUpdate=!0;for(let v=0,E=p*3;v<E;v+=3)if(Rt(jr,v,h,g),jr.needsUpdate=!0,Xr.intersectsTriangle(jr))return!0}}}else{const f=r+8,d=o[r+6];return Et(f,s,oo),!!(i.intersectsBox(oo)&&_u(f,e,t,n,i)||(Et(d,s,oo),i.intersectsBox(oo)&&_u(d,e,t,n,i)))}}const lo=new Ue,Nc=new Qt,zs=new Qt,jM=new I,YM=new I,KM=new I,JM=new I;function $M(r,e,t,n={},i={},s=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Nc.set(e.boundingBox.min,e.boundingBox.max,t),Nc.needsUpdate=!0;const o=r.geometry,c=o.attributes.position,l=o.index,f=e.attributes.position,d=e.index,u=Rn.getPrimitive(),h=Rn.getPrimitive();let g=jM,x=YM,m=null,p=null;i&&(m=KM,p=JM);let M=1/0,_=null,b=null;return lo.copy(t).invert(),zs.matrix.copy(lo),r.shapecast({boundsTraverseOrder:v=>Nc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<M&&T<a?(E&&(zs.min.copy(v.min),zs.max.copy(v.max),zs.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:R=>zs.distanceToBox(R),intersectsBounds:(R,S,y)=>y<M&&y<a,intersectsRange:(R,S)=>{for(let y=R,w=R+S;y<w;y++){const A=T.resolveTriangleIndex(y);Rt(h,3*A,d,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let L=v,D=v+E;L<D;L++){const F=r.resolveTriangleIndex(L);Rt(u,3*F,l,c),u.needsUpdate=!0;const B=u.distanceToTriangle(h,g,m);if(B<M&&(x.copy(g),p&&p.copy(m),M=B,_=L,b=y),B<s)return!0}}}})}else{const T=Ki(e);for(let R=0,S=T;R<S;R++){Rt(h,3*R,d,f),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let y=v,w=v+E;y<w;y++){const A=r.resolveTriangleIndex(y);Rt(u,3*A,l,c),u.needsUpdate=!0;const L=u.distanceToTriangle(h,g,m);if(L<M&&(x.copy(g),p&&p.copy(m),M=L,_=y,b=R),L<s)return!0}}}}}),Rn.releasePrimitive(u),Rn.releasePrimitive(h),M===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=M,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(lo),x.applyMatrix4(lo),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function ZM(){return typeof SharedArrayBuffer<"u"}const ta=new _t.constructor,Co=new _t.constructor,Bi=new $u(()=>new nt),Yr=new nt,Kr=new nt,Fc=new nt,Oc=new nt;let Bc=!1;function QM(r,e,t,n){if(Bc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Bc=!0;const i=r._roots,s=e._roots;let a,o=0,c=0;const l=new Ue().copy(t).invert();for(let f=0,d=i.length;f<d;f++){ta.setBuffer(i[f]),c=0;const u=Bi.getPrimitive();Et(0,ta.float32Array,u),u.applyMatrix4(l);for(let h=0,g=s.length;h<g&&(Co.setBuffer(s[h]),a=Bn(0,0,t,l,n,o,c,0,0,u),Co.clearBuffer(),c+=s[h].length,!a);h++);if(Bi.releasePrimitive(u),ta.clearBuffer(),o+=i[f].length,a)break}return Bc=!1,a}function Bn(r,e,t,n,i,s=0,a=0,o=0,c=0,l=null,f=!1){let d,u;f?(d=Co,u=ta):(d=ta,u=Co);const h=d.float32Array,g=d.uint32Array,x=d.uint16Array,m=u.float32Array,p=u.uint32Array,M=u.uint16Array,_=r*2,b=e*2,v=an(_,x),E=an(b,M);let T=!1;if(E&&v)f?T=i(mn(e,p),Tn(e*2,M),mn(r,g),Tn(r*2,x),c,a+e,o,s+r):T=i(mn(r,g),Tn(r*2,x),mn(e,p),Tn(e*2,M),o,s+r,c,a+e);else if(E){const R=Bi.getPrimitive();Et(e,m,R),R.applyMatrix4(t);const S=wn(r),y=An(r,g);Et(S,h,Yr),Et(y,h,Kr);const w=R.intersectsBox(Yr),A=R.intersectsBox(Kr);T=w&&Bn(e,S,n,t,i,a,s,c,o+1,R,!f)||A&&Bn(e,y,n,t,i,a,s,c,o+1,R,!f),Bi.releasePrimitive(R)}else{const R=wn(e),S=An(e,p);Et(R,m,Fc),Et(S,m,Oc);const y=l.intersectsBox(Fc),w=l.intersectsBox(Oc);if(y&&w)T=Bn(r,R,t,n,i,s,a,o,c+1,l,f)||Bn(r,S,t,n,i,s,a,o,c+1,l,f);else if(y)if(v)T=Bn(r,R,t,n,i,s,a,o,c+1,l,f);else{const A=Bi.getPrimitive();A.copy(Fc).applyMatrix4(t);const L=wn(r),D=An(r,g);Et(L,h,Yr),Et(D,h,Kr);const F=A.intersectsBox(Yr),B=A.intersectsBox(Kr);T=F&&Bn(R,L,n,t,i,a,s,c,o+1,A,!f)||B&&Bn(R,D,n,t,i,a,s,c,o+1,A,!f),Bi.releasePrimitive(A)}else if(w)if(v)T=Bn(r,S,t,n,i,s,a,o,c+1,l,f);else{const A=Bi.getPrimitive();A.copy(Oc).applyMatrix4(t);const L=wn(r),D=An(r,g);Et(L,h,Yr),Et(D,h,Kr);const F=A.intersectsBox(Yr),B=A.intersectsBox(Kr);T=F&&Bn(S,L,n,t,i,a,s,c,o+1,A,!f)||B&&Bn(S,D,n,t,i,a,s,c,o+1,A,!f),Bi.releasePrimitive(A)}}return T}const uo=new Qt,Kd=new nt,eS={strategy:Ip,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Zu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,s=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:i.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:i,index:a?a.array:null,indirectBuffer:s},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:s,indirectBuffer:a}=e,o=new Zu(t,{...n,[Pc]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new Ot(e.index,1,!1);t.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...eS,[Pc]:!1},t),t.useSharedArrayBuffer&&!ZM())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[Pc]||(mM(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new nt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?VM:CM)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,f=s[l+15]===Fo;if(f){const d=i[o+6],u=s[l+14];e(c,f,new Float32Array(n,o*4,6),d,u)}else{const d=o+ea/4,u=i[o+6],h=i[o+7];e(c,f,new Float32Array(n,o*4,6),h)||(a(d,c+1),a(u,c+1))}}}raycast(e,t=Ln,n=0,i=1/0){const s=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),f=a.groups,d=c?t.side:t,u=this.indirect?GM:DM;for(let h=0,g=s.length;h<g;h++){const x=l?t[f[h].materialIndex].side:d,m=o.length;if(u(this,h,x,e,o,n,i),l){const p=f[h].materialIndex;for(let M=m,_=o.length;M<_;M++)o[M].face.materialIndex=p}}return o}raycastFirst(e,t=Ln,n=0,i=1/0){const s=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const f=a.groups,d=o?t.side:t,u=this.indirect?qM:NM;for(let h=0,g=s.length;h<g;h++){const x=c?t[f[h].materialIndex].side:d,m=u(this,h,x,e,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=f[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,s=this.indirect?XM:FM;for(let a=0,o=i.length;a<o&&(n=s(this,a,e,t),!n);a++);return n}shapecast(e){const t=Rn.getPrimitive(),n=this.indirect?IM:RM;let{boundsTraverseOrder:i,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const d=a;a=(u,h,g,x,m)=>d(u,h,g,x,m)?!0:n(u,h,this,o,g,x,t)}else a||(o?a=(d,u,h,g)=>n(d,u,this,o,h,g,t):a=(d,u,h)=>h);let c=!1,l=0;const f=this._roots;for(let d=0,u=f.length;d<u;d++){const h=f[d];if(c=yM(this,d,s,a,i,l),c)break;l+=h.byteLength}return Rn.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:s}=n;const a=Rn.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);Rt(a,x*3,o,c)}:g=>{Rt(a,g*3,o,c)},f=Rn.getPrimitive(),d=e.geometry.index,u=e.geometry.attributes.position,h=e.indirect?g=>{const x=e.resolveTriangleIndex(g);Rt(f,x*3,d,u)}:g=>{Rt(f,g*3,d,u)};if(s){const g=(x,m,p,M,_,b,v,E)=>{for(let T=p,R=p+M;T<R;T++){h(T),f.a.applyMatrix4(t),f.b.applyMatrix4(t),f.c.applyMatrix4(t),f.needsUpdate=!0;for(let S=x,y=x+m;S<y;S++)if(l(S),a.needsUpdate=!0,s(a,f,S,T,_,b,v,E))return!0}return!1};if(i){const x=i;i=function(m,p,M,_,b,v,E,T){return x(m,p,M,_,b,v,E,T)?!0:g(m,p,M,_,b,v,E,T)}}else i=g}return QM(this,e,t,i)}intersectsBox(e,t){return uo.set(e.min,e.max,t),uo.needsUpdate=!0,this.shapecast({intersectsBounds:n=>uo.intersectsBox(n),intersectsTriangle:n=>uo.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},s=0,a=1/0){return(this.indirect?$M:HM)(this,e,t,n,i,s,a)}closestPointToPoint(e,t={},n=0,i=1/0){return MM(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Et(0,new Float32Array(n),Kd),e.union(Kd)}),e}}const ii=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class tS{constructor(e){const n=e.filter(i=>i.id!=="COL_floor").map(i=>new xr(...i.size).applyMatrix4(new Ue().makeRotationY(i.rotationY||0)).translate(...i.center));this.geometry=gy(n),n.forEach(i=>i.dispose()),this.bvh=new Zu(this.geometry),this.radius=.25,this.velocity=new I,this.segment=new ai,this.bounds=new nt,this.onTriangle=new I,this.onCapsule=new I,this.normal=new I,this.contacts=0,this.speed=ii.speed,this.correction=new I,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:i=>i.intersectsBox(this.bounds),intersectsTriangle:i=>{if(i.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const s=i.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(s>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&i.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-s+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const i=Math.max(1,Math.ceil(n/.008333333333333333)),s=n/i;for(let a=0;a<i;a++)this.step(e,t,s)}}const xu=.36;function Jd(r,e){const t=r[0]-e.center[0],n=r[1]-e.center[2],i=e.rotationY||0,s=Math.cos(i),a=Math.sin(i);return[s*t-a*n,a*t+s*n]}function $d(r,e,t,n=xu){const i=Jd(r,t),s=Jd(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const f=s[l]-i[l];if(Math.abs(f)<1e-10){if(Math.abs(i[l])>=a[l])return!1;continue}let d=(-a[l]-i[l])/f,u=(a[l]-i[l])/f;if(d>u&&([d,u]=[u,d]),o=Math.max(o,d),c=Math.min(c,u),o>=c)return!1}return c>0&&o<1}function nS(r,e,t=.27){if(e.shape==="axial_gallery"){const[n,i]=r,s=n>=-8+t&&n<=8-t&&i>=-11&&i<=11-t,a=n>=-2.6+t&&n<=2.6-t&&i>=-22+t&&i<=-11;return s||a}return Math.abs(r[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(r[0])+.5*Math.abs(r[1])<=e.apothem-t}function Bp(r,e,t){const n=[r[0],r[2]],i=[e[0],e[2]],s=t.colliders.filter(u=>u.id!=="COL_floor"),a=(u,h)=>!s.some(g=>$d(u,h,g,.27));if(a(n,i))return[[...e]];const o=[n,i];for(const u of s){const h=Math.cos(u.rotationY||0),g=Math.sin(u.rotationY||0);for(const x of[-1,1])for(const m of[-1,1]){const p=x*(u.size[0]/2+xu),M=m*(u.size[2]/2+xu),_=[u.center[0]+h*p+g*M,u.center[2]-g*p+h*M];nS(_,t.layout)&&!s.some(b=>$d(_,_,b,.27))&&o.push(_)}}const c=o.map(()=>1/0),l=o.map(()=>-1),f=new Set;for(c[0]=0;f.size<o.length;){let u=-1;for(let h=0;h<o.length;h++)!f.has(h)&&(u<0||c[h]<c[u])&&(u=h);if(u<0||!Number.isFinite(c[u]))return[];if(u===1)break;f.add(u);for(let h=0;h<o.length;h++){if(f.has(h)||!a(o[u],o[h]))continue;const g=c[u]+Math.hypot(o[u][0]-o[h][0],o[u][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=u)}}const d=[];for(let u=1;u!==0;u=l[u]){if(u<0)return[];d.unshift([o[u][0],e[1],o[u][1]])}return d}class iS{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(i=>i.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const i of this.parts)i.mesh.position.x=i.closedX+i.sign*i.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class hr extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Gt;const n=this,i=t.color!==void 0?new Fe(t.color):new Fe(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||hr.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,f=new Zn,d=new I,u=new I,h=new I,g=new Ue,x=new I(0,0,-1),m=new et,p=new I,M=new I,_=new et,b=new Ue,v=this.camera,E=new Xi(s,a,{samples:l,type:bs}),T=new bn({name:c.name!==void 0?c.name:"unspecified",uniforms:op.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(R,S,y){if(u.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(y.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(u,h),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(u),g.extractRotation(y.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(h),M.subVectors(u,x),M.reflect(d).negate(),M.add(u),v.position.copy(p),v.up.set(0,1,0),v.up.applyMatrix4(g),v.up.reflect(d),v.lookAt(M),v.far=y.far,v.updateMatrixWorld(),v.projectionMatrix.copy(y.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(v.projectionMatrix),b.multiply(v.matrixWorldInverse),b.multiply(n.matrixWorld),f.setFromNormalAndCoplanarPoint(d,u),f.applyMatrix4(v.matrixWorldInverse),m.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const A=v.projectionMatrix;_.x=(Math.sign(m.x)+A.elements[8])/A.elements[0],_.y=(Math.sign(m.y)+A.elements[9])/A.elements[5],_.z=-1,_.w=(1+A.elements[10])/A.elements[14],m.multiplyScalar(2/m.dot(_)),A.elements[2]=m.x,A.elements[6]=m.y,A.elements[10]=m.z+1-o,A.elements[14]=m.w,n.visible=!1;const L=R.getRenderTarget(),D=R.xr.enabled,F=R.shadowMap.autoUpdate;R.xr.enabled=!1,R.shadowMap.autoUpdate=!1,R.setRenderTarget(E),R.state.buffers.depth.setMask(!0),R.autoClear===!1&&R.clear(),R.render(S,v),R.xr.enabled=D,R.shadowMap.autoUpdate=F,R.setRenderTarget(L);const B=y.viewport;B!==void 0&&R.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}hr.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},i=new hr(new vr(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});i.name="R11 polished marble floor reflection",i.rotation.x=-Math.PI/2,i.position.set(0,.016,-5.5),i.material.transparent=!0,i.material.depthWrite=!1,i.renderOrder=1,r.add(i);const s=[],a=[],o={position:new I(1/0,1/0,1/0),quaternion:new Un,time:-1/0},c=i.onBeforeRender;i.onBeforeRender=function(f,d,u,...h){const g=performance.now();if(!(o.position.distanceToSquared(u.position)>1e-10||1-Math.abs(o.quaternion.dot(u.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(u.position),o.quaternion.copy(u.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,f,d,u,...h)}finally{a.forEach((p,M)=>p.visible=m[M])}},t.traverse(f=>{if(!f.isMesh)return;const d=Array.isArray(f.material)?f.material:[f.material];d.some(u=>u.name.toLowerCase().includes("glass"))&&a.push(f);for(const u of d){if(u.name.includes("hologram data curtain")){const h=new bn({uniforms:{pattern:{value:u.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:sn,blending:ss,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});f.material=h,f.renderOrder=3,s.push(h)}u.name.includes("cyan edge light")&&(u.color.set(358655),u.emissive.set(358655),u.emissiveIntensity=2)}});let l=0;return{reflector:i,update(f,d){if(!d){l+=f*.026;for(const u of s)u.uniforms.phase.value=l}}}}function sS(r,e,t){return r==="walk"&&(e??!t)}function aS(r){let e=null;return()=>e||(e=Promise.resolve().then(r).finally(()=>{e=null}),e)}function oS(r,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(r.rotation.order="YXZ",r.rotation.y-=e*n,r.rotation.x=In.clamp(r.rotation.x-t*n,-1.15,1.15),r.rotation.z=0,!0)}function cS(r,e){if(!Number.isFinite(r)||!Number.isFinite(e)||e<=0)return 0;const t=In.clamp(r/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function lS(r,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return r?r.id!==void 0&&r.id!==e.pointerId?null:{point:t,dx:t.x-r.x,dy:t.y-r.y}:{point:t,dx:0,dy:0}}function uS(r,e,t,n=!1){const i=Number.isFinite(e.timeStamp)?e.timeStamp:t,s={x:e.clientX,y:e.clientY,stamp:i},a={point:s,dx:0,dy:0};if((r==null?void 0:r.stamp)>i)return{...a,point:r};if(t-i>150)return s.recovery="fresh",a;if(!r)return a;const o=s.x-r.x,c=s.y-r.y;if(r.recovery){const l=Number.isFinite(e.movementX)&&Number.isFinite(e.movementY),f=Math.max(32,.5*Math.max(Math.hypot(o,c),Math.hypot(e.movementX,e.movementY))),d=!n&&l&&Math.hypot(o-e.movementX,c-e.movementY)>f;if(d&&(s.recovery="align"),r.recovery==="fresh"||d)return a}return{point:s,dx:n?e.movementX:o,dy:n?e.movementY:c}}function kp(r,e){(e==null?void 0:e.id)!==void 0&&r.hasPointerCapture(e.id)&&r.releasePointerCapture(e.id)}function fS(r,e){return(r==null?void 0:r.id)!==void 0&&r.id===e.pointerId}function dS(r=7){let e=null,t=!1;return{down(n){n.isPrimary!==!1&&(e={id:n.pointerId,x:n.clientX,y:n.clientY,active:!0},t=!1)},move(n){!(e!=null&&e.active)||e.id!==n.pointerId||Math.hypot(n.clientX-e.x,n.clientY-e.y)>r&&(t=!0)},end(n,i=!1){!(e!=null&&e.active)||e.id!==n.pointerId||(e.active=!1,i&&(t=!0))},click(n=!1){const i=t&&!n;return e=null,t=!1,i}}}function zp(r){const e=new I(...r.position);let t,n;if(r.side==="front")t=e.clone().add(new I(0,0,r.distance||3.15)),n=new I(1,0,0);else{const c=r.side==="left"?-1:1;t=e.clone().add(new I(-c*3.15,0,0)),n=new I(0,0,c)}t.y=1.65;const i=r.lateral||1.18,s=t.clone().addScaledVector(n,-i),a=t.clone().addScaledVector(n,i),o=e.clone();return o.y=r.targetHeight??.95,{left:s,right:a,front:t,target:o}}class hS{constructor(e,{reduced:t=!1}={}){this.views=zp(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const i=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(i,this.elapsed+Math.max(0,t));const s=In.smoothstep(this.elapsed/i,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],s),e.lookAt(this.views.target),this.elapsed>=i&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class pS{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const i=this.spec;if(this.phase==="opening")e.position.fromArray(i.outside),e.lookAt(new I(...i.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(i.walkDuration,this.elapsed+Math.max(0,n));const s=In.smoothstep(this.elapsed/i.walkDuration,0,1);e.position.lerpVectors(new I(...i.outside),new I(...i.inside),s),e.lookAt(new I(...i.lookAt)),this.elapsed>=i.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(i.inside),e.lookAt(new I(...i.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var Hp=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(r),s,a=WebAssembly.instantiate(i,{}).then(function(p){s=p.instance,s.exports.__wasm_call_ctors()});function o(p){for(var M=new Uint8Array(p.length),_=0;_<p.length;++_){var b=p.charCodeAt(_);M[_]=b>96?b-97:b>64?b-39:b+4}for(var v=0,_=0;_<p.length;++_)M[v++]=M[_]<60?n[M[_]]:(M[_]-60)*64+M[++_];return M.buffer.slice(0,v)}function c(p,M,_,b,v,E,T){var R=p.exports.sbrk,S=b+3&-4,y=R(S*v),w=R(E.length),A=new Uint8Array(p.exports.memory.buffer);A.set(E,w);var L=M(y,b,v,w,E.length);if(L==0&&T&&T(y,S,v),_.set(A.subarray(y,y+b*v)),R(y-R(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},f={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],u=0;function h(p){var M={object:new Worker(p),pending:0,requests:{}};return M.object.onmessage=function(_){var b=_.data;M.pending-=b.count,M.requests[b.id][b.action](b.value),delete M.requests[b.id]},M}function g(p){for(var M="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),_=new Blob([M],{type:"text/javascript"}),b=URL.createObjectURL(_),v=d.length;v<p;++v)d[v]=h(b);for(var v=p;v<d.length;++v)d[v].object.postMessage({});d.length=p,URL.revokeObjectURL(b)}function x(p,M,_,b,v){for(var E=d[0],T=1;T<d.length;++T)d[T].pending<E.pending&&(E=d[T]);return new Promise(function(R,S){var y=new Uint8Array(_),w=++u;E.pending+=p,E.requests[w]={resolve:R,reject:S},E.object.postMessage({id:w,count:p,size:M,source:y,mode:b,filter:v},[y.buffer])})}function m(p){var M=p.data;if(!M.id)return self.close();self.ready.then(function(_){try{var b=new Uint8Array(M.count*M.size);c(_,_.exports[M.mode],b,M.count,M.size,M.source,_.exports[M.filter]),self.postMessage({id:M.id,count:M.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:M.id,count:M.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,M,_,b,v){c(s,s.exports.meshopt_decodeVertexBuffer,p,M,_,b,s.exports[l[v]])},decodeIndexBuffer:function(p,M,_,b){c(s,s.exports.meshopt_decodeIndexBuffer,p,M,_,b)},decodeIndexSequence:function(p,M,_,b){c(s,s.exports.meshopt_decodeIndexSequence,p,M,_,b)},decodeGltfBuffer:function(p,M,_,b,v,E){c(s,s.exports[f[v]],p,M,_,b,s.exports[l[E]])},decodeGltfBufferAsync:function(p,M,_,b,v){return d.length>0?x(p,M,_,f[b],l[v]):a.then(function(){var E=new Uint8Array(p*M);return c(s,s.exports[f[b]],E,p,M,_,s.exports[l[v]]),E})}}})();const cr=.79,tn="/artifacts/",gr=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,cr,6.6],modelDesktop:`${tn}phoenix-web-desktop.glb`,modelMobile:`${tn}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,cr,0],modelDesktop:`${tn}bronze-head-web-desktop.glb`,modelMobile:`${tn}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,cr,-6.6],modelDesktop:`${tn}cloud-mirror-web-desktop.glb`,modelMobile:`${tn}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,cr,6.6],modelDesktop:`${tn}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${tn}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,cr,0],modelDesktop:`${tn}longquan-figure-web-desktop.glb`,modelMobile:`${tn}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,cr,-6.6],modelDesktop:`${tn}pipa-figurine-web-desktop.glb`,modelMobile:`${tn}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,cr,-20.7],modelDesktop:`${tn}speechless-buddha-web-desktop.glb`,modelMobile:`${tn}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function mS(r,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);r.traverse(i=>{if(i.isMesh){i.userData.artifactId=e.artifactId;for(const s of Array.isArray(i.material)?i.material:[i.material]){s.roughness=e.roughness,s.metalness=e.metalness,s.envMapIntensity=.42;for(const a of Object.values(s))a!=null&&a.isTexture&&(a.magFilter=Kt,a.minFilter=zn,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function gS(r,e){const t=new En;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new En;n.rotation.y=e.rotationY,n.add(r),t.add(n),t.updateMatrixWorld(!0);const i=new nt().setFromObject(n,!0),s=i.getSize(new I);if(i.isEmpty()||s.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/s.y,e.maxWidth/Math.max(s.x,s.z)),o=i.getCenter(new I);n.scale.setScalar(a),n.position.set(-o.x*a,-i.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new nt().setFromObject(t,!0);let l=0,f=0;return t.traverse(d=>{var u;d.isMesh&&(d.userData.artifactId=e.artifactId,f++,l+=(((u=d.geometry.index)==null?void 0:u.count)??d.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new I),size:c.getSize(new I),triangleCount:l,meshCount:f}}async function bS({scene:r,renderer:e,manifest:t,onArtifact:n,mobile:i=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:s=new Ku().setMeshoptDecoder(Hp)}){const o=[],c=[];return await Promise.all(gr.map(async l=>{const f=i?l.modelMobile:l.modelDesktop;let d;try{const u=await s.loadAsync(f);mS(u.scene,l,e),d={...gS(u.scene,l),modelUrl:f},r.add(d.object),o.push(d)}catch(u){c.push({artifactId:l.artifactId,name:l.name,modelUrl:f,message:u.message});return}n==null||n(d)})),o.sort((l,f)=>gr.indexOf(l.assignment)-gr.indexOf(f.assignment)),{records:o,failures:c}}function _S(r){var i,s;const e=(s=(i=r==null?void 0:r.object)==null?void 0:i.children[0])==null?void 0:s.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}const Zd="museum-artifact-v1";function xS({canvas:r,camera:e,scene:t,assignments:n,colliders:i=[],getMode:s,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:f=()=>{},detailUrl:d="http://127.0.0.1:5189/"}){const u=document.createElement("button");u.id="artifactHint",u.className="artifact-entry",u.hidden=!0;const h=document.createElement("dialog");h.id="artifactDetail",h.className="artifact-detail",h.setAttribute("aria-label","文物详情"),h.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div><div class="artifact-detail-status" role="status"><p></p><div><button type="button" id="retryArtifactDetail" hidden>重新载入</button><a id="standaloneArtifactDetail" target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>',document.body.append(u,h);const g=h.querySelector(".artifact-detail-host"),x=h.querySelector(".artifact-detail-status"),m=x.querySelector("p"),p=h.querySelector("#closeArtifactDetail"),M=h.querySelector("#retryArtifactDetail"),_=h.querySelector("#standaloneArtifactDetail"),b=new Ep,v=new Oe,E=new I,T=new I,R=new Yi,S=new I,y=new AbortController,w=new Map,A=i.map(Y=>({id:Y.id,box:new nt().setFromCenterAndSize(new I(...Y.center),new I(...Y.size))}));let L=null,D=null,F=null,B=null,G=!1,k=null,Z=!1;function se(Y){let pe=w.get(Y.artifactId);if(pe)return pe;const Xe=t.getObjectByName(`HallArtifact_${Y.artifactId}`);if(!Xe)return null;Xe.updateWorldMatrix(!0,!0);const N=new nt().setFromObject(Xe);return pe={assignment:Y,object:Xe,bounds:N,center:N.getCenter(new I)},w.set(Y.artifactId,pe),pe}function fe(Y,pe=Y.center){const Xe=e.position.distanceTo(pe);return R.set(e.position,T.subVectors(pe,e.position).normalize()),!A.some(({id:N,box:Ke})=>(N.includes("exhibit")||N.includes("Far gallery"))&&Ke.containsPoint(Y.center)?!1:R.intersectBox(Ke,S)&&e.position.distanceTo(S)<Xe-.05)}function Ie(){return!h.open&&a()&&!o()&&["walk","paused"].includes(s())}function qe(Y,pe=!1){if(e.position.distanceTo(Y.center)>4.8||(E.copy(Y.center).project(e),E.z<-1||E.z>1||Math.abs(E.x)>.92||Math.abs(E.y)>.82))return!1;const Xe=Math.hypot(E.x*r.clientWidth/2,E.y*r.clientHeight/2);return(pe||Xe<175)&&fe(Y)}function Qe(){L=null,u.hidden=!0,r.dataset.artifactAim=""}function ee({selectedExhibit:Y=null,observationPhase:pe=r.dataset.observationPhase}={}){if(!Ie())return Qe(),null;const Xe=(Y==null?void 0:Y.id)??Y,N=pe==="complete"&&s()==="paused";let Ke=null;if(N){const ge=n.find(me=>String(me.cabinetId)===String(Xe)),Pe=ge&&se(ge);Pe&&qe(Pe,!0)&&(Ke=Pe)}if(!Ke){let ge=1/0;for(const Pe of n){const me=se(Pe);if(!me||!qe(me))continue;const lt=e.position.distanceToSquared(me.center);lt<ge&&(ge=lt,Ke=me)}}if(L=Ke||null,u.hidden=!L,r.dataset.artifactAim=(L==null?void 0:L.assignment.artifactId)||"",L){const{name:ge,nickname:Pe}=L.assignment;u.textContent=`${ge}${Pe?` · ${Pe}`:""}　查看详情 ↗`,u.setAttribute("aria-label",`查看${ge}详情`),u.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(L==null?void 0:L.assignment.artifactId)||null}function W(Y){!h.open||!D||(p.hidden=!1,x.hidden=!1,m.textContent=Y,M.hidden=!1)}function q(){if(!h.open||!D)return;clearTimeout(B),G=!1,p.hidden=!1,x.hidden=!1,M.hidden=!0,m.textContent=`正在载入${D.name}的互动详情…`;const Y=new URL(d,location.href);Y.searchParams.set("artifact",D.artifactId),Y.searchParams.set("museumEmbed","1"),Y.searchParams.set("parentOrigin",location.origin),Y.searchParams.set("returnUrl",location.href);const pe=new URL(Y);pe.searchParams.delete("museumEmbed"),pe.searchParams.delete("parentOrigin"),_.href=pe.href,g.replaceChildren(),F=document.createElement("iframe"),F.title=`${D.name}互动详情`,F.allow="autoplay";const Xe=F;F.addEventListener("error",()=>{F===Xe&&W("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),F.src=Y.href,g.append(F),B=setTimeout(()=>W("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function ae(Y=L==null?void 0:L.assignment.artifactId){const pe=n.find(Xe=>Xe.artifactId===Y);return!pe||h.open?!1:(D=pe,Qe(),l(pe),h.setAttribute("aria-label",`${pe.name}详情`),h.showModal(),document.body.classList.add("artifact-detail-open"),q(),p.focus({preventScroll:!0}),!0)}function xe(){return h.open?(clearTimeout(B),g.replaceChildren(),F=null,G=!1,h.close(),document.body.classList.remove("artifact-detail-open"),f(D),D=null,r.focus({preventScroll:!0}),!0):!1}return u.addEventListener("click",()=>{L&&Ie()&&qe(L,!0)&&ae()}),p.addEventListener("click",xe),M.addEventListener("click",q),h.addEventListener("cancel",Y=>{Y.preventDefault(),xe()}),r.addEventListener("pointerdown",Y=>{k||(k={id:Y.pointerId,x:Y.clientX,y:Y.clientY},Z=!1)},{signal:y.signal}),r.addEventListener("pointermove",Y=>{(k==null?void 0:k.id)===Y.pointerId&&Math.hypot(Y.clientX-k.x,Y.clientY-k.y)>7&&(Z=!0)},{signal:y.signal}),r.addEventListener("pointerup",Y=>{(k==null?void 0:k.id)===Y.pointerId&&(k=null)},{signal:y.signal}),r.addEventListener("pointercancel",Y=>{(k==null?void 0:k.id)===Y.pointerId&&(k=null,Z=!0)},{signal:y.signal}),r.addEventListener("lostpointercapture",Y=>{(k==null?void 0:k.id)===Y.pointerId&&(k=null,Z=!0)},{signal:y.signal}),r.addEventListener("click",Y=>{if(Z||!Ie())return;if(document.pointerLockElement===r)v.set(0,0);else{const ge=r.getBoundingClientRect();v.set((Y.clientX-ge.left)/ge.width*2-1,-(Y.clientY-ge.top)/ge.height*2+1)}if(b.setFromCamera(v,e),b.intersectObjects(c(),!1).some(ge=>ge.distance<12))return;const pe=n.map(se).filter(Boolean),N=b.intersectObjects(pe.map(ge=>ge.object),!0)[0];if(!N||N.distance>4.8)return;const Ke=pe.find(ge=>ge.assignment.artifactId===N.object.userData.artifactId);Ke&&fe(Ke,N.point)&&ae(Ke.assignment.artifactId)&&(Y.preventDefault(),Y.stopImmediatePropagation())},{capture:!0,signal:y.signal}),window.addEventListener("keydown",Y=>{var pe;if(Y.key==="Escape"&&h.open){Y.preventDefault(),Y.stopImmediatePropagation(),xe();return}Y.code!=="KeyE"||Y.repeat||!L||!Ie()||/INPUT|TEXTAREA|SELECT/.test((pe=document.activeElement)==null?void 0:pe.tagName)||qe(L,!0)&&ae()&&(Y.preventDefault(),Y.stopImmediatePropagation())},{capture:!0,signal:y.signal}),window.addEventListener("message",Y=>{var N,Ke;const pe=new URL(d,location.href).origin;if(!h.open||Y.origin!==pe||Y.source!==(F==null?void 0:F.contentWindow)||((N=Y.data)==null?void 0:N.channel)!==Zd)return;const Xe=n.find(ge=>ge.artifactId===Y.data.artifactId);Xe&&(D=Xe,h.setAttribute("aria-label",`${Xe.name}详情`)),Y.data.type==="loading"&&(G=!1,p.hidden=!1,x.hidden=!1,M.hidden=!0,m.textContent=`正在载入${D.name}的互动详情…`,clearTimeout(B),B=setTimeout(()=>W("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),Y.data.type==="ready"&&(G=!0,clearTimeout(B),x.hidden=!0,p.hidden=!0,F.contentWindow.postMessage({channel:Zd,type:"enter",reduced:((Ke=document.querySelector("#motion"))==null?void 0:Ke.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},pe),F.focus()),Y.data.type==="error"&&W("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),Y.data.type==="close"&&xe()},{signal:y.signal}),{update:ee,open:ae,close:xe,dispose(){xe(),clearTimeout(B),y.abort(),w.clear(),u.remove(),h.remove()},isOpen:()=>h.open,get state(){return{open:h.open,ready:G,artifactId:(D==null?void 0:D.artifactId)||null,aimedArtifactId:(L==null?void 0:L.assignment.artifactId)||null}}}}const vS=Object.freeze({"phoenix-ewer":-Math.PI/2,"bronze-head":-Math.PI/2,"cloud-mirror":-Math.PI/2,"liquan-bodhisattva":-Math.PI/2,"longquan-figure":-Math.PI/2,"pipa-figurine":-Math.PI/2,"speechless-buddha":-Math.PI/2});function kc(r){return Number.isFinite(r.frontRotationY)?r.frontRotationY:vS[r.artifactId||r.id]??0}const Mt=new Pt,fo=new I,Qd=new Oe,eh=new Oe,th=new Oe;class yS{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,s=new Float32Array(i);for(let c=0;c<i;c++){let l=1,f=3*c,d=3*c+1,u=3*c+2;e&&(f=e.getX(f),d=e.getX(d),u=e.getX(u)),n&&(l=n.getX(f)+n.getX(d)+n.getX(u)),Mt.a.fromBufferAttribute(t,f),Mt.b.fromBufferAttribute(t,d),Mt.c.fromBufferAttribute(t,u),l*=Mt.getArea(),s[c]=l}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=s[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const s=this._sampleFaceIndex();return this._sampleFace(s,e,t,n,i)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,s=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){s=a;break}else e<t[a]?i=a-1:n=a+1}return s}_sampleFace(e,t,n,i,s){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,f=e*3+1,d=e*3+2;return c&&(l=c.getX(l),f=c.getX(f),d=c.getX(d)),Mt.a.fromBufferAttribute(this.positionAttribute,l),Mt.b.fromBufferAttribute(this.positionAttribute,f),Mt.c.fromBufferAttribute(this.positionAttribute,d),t.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(Mt.a.fromBufferAttribute(this.normalAttribute,l),Mt.b.fromBufferAttribute(this.normalAttribute,f),Mt.c.fromBufferAttribute(this.normalAttribute,d),n.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)).normalize()):Mt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(Mt.a.fromBufferAttribute(this.colorAttribute,l),Mt.b.fromBufferAttribute(this.colorAttribute,f),Mt.c.fromBufferAttribute(this.colorAttribute,d),fo.set(0,0,0).addScaledVector(Mt.a,a).addScaledVector(Mt.b,o).addScaledVector(Mt.c,1-(a+o)),i.r=fo.x,i.g=fo.y,i.b=fo.z),s!==void 0&&this.uvAttribute!==void 0&&(Qd.fromBufferAttribute(this.uvAttribute,l),eh.fromBufferAttribute(this.uvAttribute,f),th.fromBufferAttribute(this.uvAttribute,d),s.set(0,0).addScaledVector(Qd,a).addScaledVector(eh,o).addScaledVector(th,1-(a+o))),this}}const na=5,Po=.6;function MS(r){const e=Math.max(0,r);return{due:e>=na,opacity:In.smoothstep(e,0,Po)*(1-In.smoothstep(e,na-Po,na))}}function lr(r,e=!1){const t=new Set,n=new Set,i=new Set;r.traverse(s=>{s.geometry&&(!e||s.isPoints)&&t.add(s.geometry);for(const a of s.material?Array.isArray(s.material)?s.material:[s.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&i.add(o)}),t.forEach(s=>s.dispose()),n.forEach(s=>s.dispose()),i.forEach(s=>{var a,o,c;s.dispose(),(c=(o=(a=s.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),r.removeFromParent()}async function SS(r,e){const t=new yS(r),n=t.positionAttribute,i=t.indexAttribute,s=((i==null?void 0:i.count)??n.count)/3,a=new Float32Array(s),o=new Pt;let c=0;for(let l=0;l<s;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let f=l;f<Math.min(s,l+8192);f++){const d=f*3;o.a.fromBufferAttribute(n,i?i.getX(d):d),o.b.fromBufferAttribute(n,i?i.getX(d+1):d+1),o.c.fromBufferAttribute(n,i?i.getX(d+2):d+2),c+=o.getArea(),a[f]=c}l+8192<s&&await new Promise(f=>setTimeout(f,0))}return t.distribution=a,t}async function ES(r,e,t){r.updateMatrixWorld(!0);const n=new nt().setFromObject(r),i=n.getSize(new I);if(n.isEmpty()||!Number.isFinite(i.length())||i.length()===0)throw new Error("模型没有可展示的几何体");const s=Math.min(1.5/Math.max(i.y,.001),1.6/Math.max(i.x,i.z,.001)),a=n.getCenter(new I),o=new En;o.add(r),r.position.sub(a),o.scale.setScalar(s),o.position.y=.13+i.y*s/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],f=new Set;r.traverse(_=>{if(!_.isMesh||!_.geometry.attributes.position)return;l.push(_);const b=Array.isArray(_.material)?_.material:[_.material];for(const v of b)f.add(v),v.transparent=!0,v.depthWrite=!1,v.onBeforeCompile=E=>{E.uniforms.holoOpacity=c.opacity,E.uniforms.holoTime=c.time,E.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
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
          #include <opaque_fragment>`)},v.customProgramCacheKey=()=>"museum-jade-edge-v2",v.needsUpdate=!0});const d=[],u=o.matrixWorld.clone().invert(),h=new I,g=e?550:1200,x=l.reduce((_,b)=>_+b.geometry.attributes.position.count,0);for(const _ of l){const b=new Ue().multiplyMatrices(u,_.matrixWorld);{const v=await SS(_,t),E=Math.max(1,Math.round(g*_.geometry.attributes.position.count/x));for(let T=0;T<E;T++)v.sample(h),h.applyMatrix4(b),d.push(h.x,h.y,h.z)}}const m=[];for(let _=0;_<d.length/3;_++){const b=_*2.39996323,v=(.08+.12*(_*.61803399%1))/s;m.push(Math.cos(b)*v,Math.sin(_*1.37)*v*.6,Math.sin(b)*v)}const p=new ln;p.setAttribute("position",new zt(d,3)),p.setAttribute("scatterOffset",new zt(m,3));const M=new bn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:ss,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new gp(p,M)),{object:o,uniforms:c,surfaceMaterials:f}}function TS({scene:r,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null,prepareForRender:i=null}){const s=new En;s.position.fromArray(e),r.add(s);for(const[w,A,L]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const D=new gt(new Gu(w,.008,6,96),new ni({color:A,transparent:!0,opacity:L,depthWrite:!1}));D.rotation.x=Math.PI/2,D.position.y=.025,s.add(D)}const a=new bn({transparent:!0,depthWrite:!1,blending:ss,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),o=new gt(new vr(2.1,2.1),a);o.rotation.x=-Math.PI/2,o.position.y=.018,s.add(o);const c=new bn({side:sn,transparent:!0,depthWrite:!1,blending:ss,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),l=new gt(new Vu(.76,.91,1.85,48,1,!0),c);l.position.y=.96,s.add(l);let f=[],d=0,u=null,h=null,g=null,x=0,m=0,p=0,M=0,_=0,b=!1,v=!1,E=null;const T=new Ku().setMeshoptDecoder(Hp);function R(w){w&&lr(w.object,w.sharedResources)}function S(w){var B;if(b||g||h||!f.length||m<M)return;const A=f[w],L=_,D=new AbortController;g={controller:D,target:w};const F=new URL(A.modelUrl,((B=globalThis.location)==null?void 0:B.href)||"http://localhost/");(async()=>{let G,k;try{if(n)G=await n(A,D.signal);else{const Z=await fetch(F,{signal:D.signal});if(!Z.ok)throw new Error(`模型加载失败 (${Z.status})`);G=await T.parseAsync(await Z.arrayBuffer(),new URL(".",F).href)}if(b||L!==_){lr(G.scene,G.sharedResources);return}if(k=await ES(G.scene,t,D.signal),b||L!==_){lr(k.object,G.sharedResources);return}if(k.object.rotation.y=kc(A),i&&await i(k.object,D.signal),D.signal.throwIfAborted(),b||L!==_){lr(k.object,G.sharedResources);return}h={...k,record:A,index:w,sharedResources:!!G.sharedResources},E=null}catch(Z){k?lr(k.object,G.sharedResources):G!=null&&G.scene&&lr(G.scene,G.sharedResources),!b&&L===_&&Z.name!=="AbortError"&&(E=String(Z.message||Z),d=w,M=m+na)}finally{L===_&&(g=null)}})()}function y(){R(u),u=h,h=null,d=u.index,s.add(u.object),x=0}return{setModels(w){_++,g==null||g.controller.abort(),g=null,R(u),R(h),u=null,h=null,f=(w||[]).filter(A=>(A==null?void 0:A.id)&&(A==null?void 0:A.modelUrl)).map(A=>({...A})),d=0,x=0,M=0,E=null,b||S(0)},update(w,{paused:A=!1,reduced:L=!1}={}){if(b)return;const D=Number.isFinite(w)?Math.max(0,w):0;if(v&&!A&&(x=0),v=A,!u&&h&&y(),A||(m+=D,x+=D),L||(p+=Math.min(D,.1)),u){const F=MS(x);if(A){const B=1-Math.exp(-D*12);u.uniforms.opacity.value=In.lerp(u.uniforms.opacity.value,1,B),u.uniforms.dispersion.value=In.lerp(u.uniforms.dispersion.value,0,B);for(const G of u.surfaceMaterials)G.depthWrite=!1}else{u.uniforms.opacity.value=f.length<2||!h?1:F.opacity,u.uniforms.dispersion.value=L?0:1-u.uniforms.opacity.value;for(const B of u.surfaceMaterials)B.depthWrite=u.uniforms.opacity.value>.98}u.uniforms.time.value=p,A||(u.object.rotation.y=kc(u.record)+(L?0:Math.sin(x*.7)*.07)),!A&&F.due&&h&&y()}!h&&!g&&f.length&&(!u||f.length>1)&&S(u||E?(d+1)%f.length:d)},getCurrent(){return u?{...u.record}:null},getState(){return{status:b?"disposed":u?"ready":g?"loading":E?"error":"empty",error:E,currentId:(u==null?void 0:u.record.id)??null,nextId:(h==null?void 0:h.record.id)??null,loading:!!g,rotationY:(u==null?void 0:u.object.rotation.y)??null,frontRotationY:u?kc(u.record):null,count:f.length,paused:v,elapsed:x,index:(u==null?void 0:u.index)??d,phase:u?x<Po?"forming":x>=na-Po?"dispersing":"holding":"waiting"}},dispose(){b||(b=!0,_++,g==null||g.controller.abort(),g=null,R(u),R(h),u=null,h=null,lr(s))}}}const wS="http://127.0.0.1:4317/images";function AS(r=globalThis.location){if(!r)return wS;const e=new URL("/images",r.href||`http://${r.hostname}/`);return e.port="4317",e.href}function RS({mobile:r=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return gr.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:r?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function CS({signal:r,mobile:e}={}){return r==null||r.throwIfAborted(),RS({mobile:e})}function PS(r,e=globalThis.location){if(!gr.some(n=>n.artifactId===r))throw new Error("未知馆藏");const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.searchParams.set("artifact",r),t.searchParams.set("museumEmbed","1"),t.searchParams.set("parentOrigin",e.origin),t.searchParams.set("returnUrl",e.href),t}function LS({canvas:r,camera:e,scene:t,stage:n,position:i=[0,.92,0],colliders:s=[],isAvailable:a=()=>!0,onOpen:o=()=>{},onClose:c=()=>{}}){const l=new AbortController,f=(ee,W,q,ae={})=>ee.addEventListener(W,q,{...ae,signal:l.signal}),d=document.createElement("section");d.className="hologram-entry",d.hidden=!0,d.setAttribute("aria-label","中央全息展台"),d.innerHTML='<small>中央全息展台</small><strong></strong><span class="hologram-cycle"></span><p></p><div><button type="button" data-action="view" aria-label="查看当前文物">查看文物</button><button type="button" data-action="workbench" aria-label="进入文物修复台，新标签页打开">修复台 ↗</button></div><span class="hologram-key">点击模型或按 E 选择</span>';const u=document.createElement("dialog");u.className="hologram-dialog",u.innerHTML='<header><div><small>全息藏品</small><h2></h2></div><button type="button" data-action="close">返回展厅 · Esc</button></header><div class="hologram-choices"><p></p><div class="hologram-choice-grid"><button type="button" data-action="view"><small>馆藏 · 01</small><strong>查看当前文物</strong><span>文物故事、三维细节与观察线索</span></button><button type="button" data-action="workbench"><small>修复 · 02</small><strong>文物修复工作台 ↗</strong><span>在独立窗口开始图像修复</span></button></div></div><div class="hologram-viewer" hidden></div><div class="hologram-feedback"><p class="hologram-status" role="status"></p><button type="button" data-action="retry" hidden>重新载入详情</button></div>',document.body.append(d,u);const h=u.querySelector("h2");h.id="hologram-dialog-title",u.setAttribute("aria-labelledby",h.id);const g=u.querySelector(".hologram-choices"),x=u.querySelector(".hologram-viewer"),m=u.querySelector(".hologram-status"),p=u.querySelector('[data-action="retry"]'),M=new I(...i),_=M.clone();_.y+=.88;const b=()=>"查看馆藏介绍、文物故事与三维细节。",v=new I,E=new I,T=new Yi,R=s.map(ee=>new nt().setFromCenterAndSize(new I(...ee.center),new I(...ee.size))).filter(ee=>!ee.containsPoint(M));let S=!1,y=null,w=null,A=null;const L=new URL(location.href);L.port="5189",L.pathname="/",L.search="",L.hash="";let D=!1,F=null,B=0;function G(){if(v.copy(_).project(e),v.z<-1||v.z>1||Math.abs(v.x)>.9||Math.abs(v.y)>.9)return!1;const ee=e.position.distanceTo(_);return T.set(e.position,E.subVectors(_,e.position).normalize()),!R.some(W=>{const q=T.intersectBox(W,new I);return q&&e.position.distanceTo(q)<ee-.1})}function k(){if(D)return;if(u.open){d.hidden=!0;return}const ee=Math.hypot(e.position.x-M.x,e.position.z-M.z);if(S=a()&&ee<=(S?3.9:3.3)&&G(),d.hidden=!S,!S)return;const W=n.getCurrent();d.dataset.modelId=(W==null?void 0:W.id)||"",d.querySelector("strong").textContent=(W==null?void 0:W.name)||"全息展台";const q=n.getState();d.querySelector(".hologram-cycle").textContent=W&&q.count?`馆藏 ${q.index+1} / ${q.count} · 已暂停轮播`:"已暂停轮播",d.dataset.status=(q==null?void 0:q.status)||"empty",d.querySelector("p").textContent=W?b():(q==null?void 0:q.status)==="loading"?"正在载入全息模型…":(q==null?void 0:q.status)==="error"?"展台文物暂时无法载入，可稍后重试。":"暂无可展示的馆藏。",d.querySelector('[data-action="view"]').disabled=!(W!=null&&W.artifactId)}function Z(){clearTimeout(A),A=null;const ee=w;w=null,ee&&(ee.remove(),ee.src="about:blank"),x.replaceChildren(),u.classList.remove("hologram-detail-active")}function se(ee){clearTimeout(A),A=null,!(D||!u.open||!w)&&(m.textContent=ee,p.hidden=!1,u.dataset.status="error")}function fe(){u.open&&(Z(),u.close(),y=null,u.dataset.status="closed",document.body.classList.remove("hologram-open"),c(),r.focus({preventScroll:!0}),k())}function Ie(){return u.open||!S||!a()?!1:(y=n.getCurrent()?{...n.getCurrent()}:null,h.textContent=(y==null?void 0:y.name)||"中央全息展台",u.dataset.modelId=(y==null?void 0:y.id)||"",u.dataset.status="choices",g.querySelector("p").textContent=b(y==null?void 0:y.objective),g.querySelector('[data-action="view"]').disabled=!(y!=null&&y.artifactId),g.hidden=!1,x.hidden=!0,p.hidden=!0,m.textContent="",d.hidden=!0,document.pointerLockElement===r&&document.exitPointerLock(),u.showModal(),document.body.classList.add("hologram-open"),o(),!0)}function qe(){if(!u.open||!(y!=null&&y.artifactId))return;Z(),g.hidden=!0,x.hidden=!1,p.hidden=!0,m.textContent=`正在载入${y.name}的互动详情…`,u.dataset.status="loading",u.classList.add("hologram-detail-active");const ee=PS(y.artifactId);w=document.createElement("iframe");const W=w;w.title=`${y.name}互动详情`,w.allow="autoplay",f(w,"error",()=>{w===W&&u.open&&se("互动详情暂时无法连接，请重新载入或返回展厅。")}),w.src=ee.href,x.append(w),A=setTimeout(()=>{w===W&&se("互动详情尚未就绪。请确认文物详情服务已启动，再重新载入。")},25e3)}f(window,"message",ee=>{var W,q;if(!(!u.open||!w||ee.origin!==L.origin||ee.source!==w.contentWindow||((W=ee.data)==null?void 0:W.channel)!=="museum-artifact-v1")){if(ee.data.type==="close"){fe();return}if(ee.data.type==="error"){se("互动详情暂时无法载入，请重新载入或返回展厅。");return}ee.data.type==="loading"&&(u.dataset.status="loading",m.textContent="正在载入互动详情…",p.hidden=!0,clearTimeout(A),A=setTimeout(()=>se("互动详情尚未就绪，请重新载入。"),25e3)),ee.data.type==="ready"&&(clearTimeout(A),A=null,u.dataset.status="ready",m.textContent="",p.hidden=!0,w.contentWindow.postMessage({channel:"museum-artifact-v1",type:"enter",reduced:((q=document.querySelector("#motion"))==null?void 0:q.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},L.origin),w.focus())}});function Qe(ee){const W=ee.target.closest("[data-action]");if(!W||W.disabled)return;const q=W.dataset.action;if(q==="close"){fe();return}if(q==="workbench"){window.open(AS(),"_blank","noopener"),u.open&&(m.textContent="修复台已在新标签页打开。完成后可返回展厅继续参观。");return}!u.open&&!Ie()||(q==="view"||q==="retry")&&qe()}return f(d,"click",Qe),f(u,"click",Qe),f(u,"cancel",ee=>{ee.preventDefault(),fe()}),f(window,"keydown",ee=>{var W;if(ee.key==="Escape"&&u.open){ee.preventDefault(),ee.stopImmediatePropagation(),fe();return}ee.code!=="KeyE"||ee.repeat||/INPUT|TEXTAREA|SELECT/.test((W=document.activeElement)==null?void 0:W.tagName)||Ie()&&(ee.preventDefault(),ee.stopImmediatePropagation())},{capture:!0}),f(r,"pointerdown",ee=>{F={x:ee.clientX,y:ee.clientY},B=0}),f(r,"pointermove",ee=>{F&&(B=Math.max(B,Math.hypot(ee.clientX-F.x,ee.clientY-F.y)))}),f(r,"pointercancel",()=>{F=null,B=1/0}),f(r,"click",ee=>{const W=B>7;if(F=null,W||!S||u.open)return;const q=r.getBoundingClientRect(),ae=document.pointerLockElement===r?0:(ee.clientX-q.left)/q.width*2-1,xe=document.pointerLockElement===r?0:-(ee.clientY-q.top)/q.height*2+1;v.copy(_).project(e),!(Math.hypot((v.x-ae)*q.width/2,(v.y-xe)*q.height/2)>145)&&Ie()&&(ee.preventDefault(),ee.stopImmediatePropagation())},{capture:!0}),{update:k,isOpen:()=>u.open,isEngaged:()=>S||u.open,getState:()=>({engaged:S,open:u.open,modelId:(y==null?void 0:y.id)??null,viewing:!!w}),dispose(){fe(),D=!0,l.abort(),Z(),d.remove(),u.remove()}}}const nh="COL_central_inscription",IS="Web_R14_Central_front_inscription",ih=.002;function DS(r,e,{replaceNumberPlates:t=!1}={}){r.updateMatrixWorld(!0);const n=new I,s=e.colliders.filter(l=>l.id==="COL_central_case"||/COL_(Left|Right) exhibit/.test(l.id)||l.id==="COL_Far gallery porcelain").map(l=>({id:l.id,center:l.center,bounds:new nt,glassBounds:new nt}));let a=null;r.traverse(l=>{if(!l.isMesh)return;(l.name===IS||l.name==="Web_R14_Central front inscription")&&(a=l);const d=(Array.isArray(l.material)?l.material:[l.material]).some(h=>h.name.toLowerCase().includes("display glass")),u=l.geometry.attributes.position;for(let h=0;h<u.count;h++)if(n.fromBufferAttribute(u,h).applyMatrix4(l.matrixWorld),!(n.y<.05||n.y>2.5))for(const g of s){const m=g.id==="COL_central_case"?2.1:1.25;Math.abs(n.x-g.center[0])>m||Math.abs(n.z-g.center[2])>m||(g.bounds.expandByPoint(n),d&&g.glassBounds.expandByPoint(n))}});const o=[],c=[];for(const l of e.exhibits??[]){const f=r.getObjectByName(`Web_R17_Exhibit_${l.id}_number_plaque`),d=r.getObjectByName(`Web_R17_Exhibit_${l.id}_number_label`);if(!f||!d)continue;if(t){f.visible=!1,d.visible=!1,c.push(f.name,d.name);const v=e.colliders.findIndex(E=>E.id===`COL_exhibit_plaque_${l.id}`);v!==-1&&e.colliders.splice(v,1);continue}f.visible=!0,d.visible=!0;const u=l.side==="left"?1:-1,h=l.position[0],g=new nt().setFromObject(f,!0),x=u>0?g.min.x:g.max.x,m=h+u*1.154,p=u*Math.max(0,u*(m-x));for(const v of[f,d]){const E=v.getWorldPosition(new I);E.x+=p,v.position.copy(v.parent.worldToLocal(E)),v.updateMatrixWorld(!0),c.push(v.name)}const M=new nt().setFromObject(f,!0);M.union(new nt().setFromObject(d,!0)).expandByScalar(ih);const _={id:`COL_exhibit_plaque_${l.id}`,kind:"exhibit_number_plaque",center:M.getCenter(new I).toArray(),size:M.getSize(new I).toArray(),rotationY:0,measuredNode:f.name},b=e.colliders.findIndex(v=>v.id===_.id);b===-1?e.colliders.push(_):e.colliders[b]=_,o.push(_)}if(a){const l=new nt().setFromObject(a,!0).expandByScalar(ih),f={id:nh,kind:"exhibit_inscription",center:l.getCenter(new I).toArray(),size:l.getSize(new I).toArray(),rotationY:0,measuredNode:a.name},d=e.colliders.findIndex(u=>u.id===nh);d===-1?e.colliders.push(f):e.colliders[d]=f,o.push(f)}return{modelModified:c.length>0,repairedNodes:c,addedColliders:o,measurements:s.map(l=>({id:l.id,bounds:{min:l.bounds.min.toArray(),max:l.bounds.max.toArray()},glassBounds:l.glassBounds.isEmpty()?null:{min:l.glassBounds.min.toArray(),max:l.glassBounds.max.toArray()}}))}}function US(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Jr={},zc,rh;function NS(){return rh||(rh=1,zc=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then}),zc}var Hc={},Ui={},sh;function yr(){if(sh)return Ui;sh=1;let r;const e=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];return Ui.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17},Ui.getSymbolTotalCodewords=function(n){return e[n]},Ui.getBCHDigit=function(t){let n=0;for(;t!==0;)n++,t>>>=1;return n},Ui.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');r=n},Ui.isKanjiModeEnabled=function(){return typeof r<"u"},Ui.toSJIS=function(n){return r(n)},Ui}var Vc={},ah;function Qu(){return ah||(ah=1,(function(r){r.L={bit:1},r.M={bit:0},r.Q={bit:3},r.H={bit:2};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"l":case"low":return r.L;case"m":case"medium":return r.M;case"q":case"quartile":return r.Q;case"h":case"high":return r.H;default:throw new Error("Unknown EC Level: "+t)}}r.isValid=function(n){return n&&typeof n.bit<"u"&&n.bit>=0&&n.bit<4},r.from=function(n,i){if(r.isValid(n))return n;try{return e(n)}catch{return i}}})(Vc)),Vc}var Gc,oh;function FS(){if(oh)return Gc;oh=1;function r(){this.buffer=[],this.length=0}return r.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},Gc=r,Gc}var Wc,ch;function OS(){if(ch)return Wc;ch=1;function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}return r.prototype.set=function(e,t,n,i){const s=e*this.size+t;this.data[s]=n,i&&(this.reservedBit[s]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},Wc=r,Wc}var qc={},lh;function BS(){return lh||(lh=1,(function(r){const e=yr().getSymbolSize;r.getRowColCoords=function(n){if(n===1)return[];const i=Math.floor(n/7)+2,s=e(n),a=s===145?26:Math.ceil((s-13)/(2*i-2))*2,o=[s-7];for(let c=1;c<i-1;c++)o[c]=o[c-1]-a;return o.push(6),o.reverse()},r.getPositions=function(n){const i=[],s=r.getRowColCoords(n),a=s.length;for(let o=0;o<a;o++)for(let c=0;c<a;c++)o===0&&c===0||o===0&&c===a-1||o===a-1&&c===0||i.push([s[o],s[c]]);return i}})(qc)),qc}var Xc={},uh;function kS(){if(uh)return Xc;uh=1;const r=yr().getSymbolSize,e=7;return Xc.getPositions=function(n){const i=r(n);return[[0,0],[i-e,0],[0,i-e]]},Xc}var jc={},fh;function zS(){return fh||(fh=1,(function(r){r.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const e={N1:3,N2:3,N3:40,N4:10};r.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},r.from=function(i){return r.isValid(i)?parseInt(i,10):void 0},r.getPenaltyN1=function(i){const s=i.size;let a=0,o=0,c=0,l=null,f=null;for(let d=0;d<s;d++){o=c=0,l=f=null;for(let u=0;u<s;u++){let h=i.get(d,u);h===l?o++:(o>=5&&(a+=e.N1+(o-5)),l=h,o=1),h=i.get(u,d),h===f?c++:(c>=5&&(a+=e.N1+(c-5)),f=h,c=1)}o>=5&&(a+=e.N1+(o-5)),c>=5&&(a+=e.N1+(c-5))}return a},r.getPenaltyN2=function(i){const s=i.size;let a=0;for(let o=0;o<s-1;o++)for(let c=0;c<s-1;c++){const l=i.get(o,c)+i.get(o,c+1)+i.get(o+1,c)+i.get(o+1,c+1);(l===4||l===0)&&a++}return a*e.N2},r.getPenaltyN3=function(i){const s=i.size;let a=0,o=0,c=0;for(let l=0;l<s;l++){o=c=0;for(let f=0;f<s;f++)o=o<<1&2047|i.get(l,f),f>=10&&(o===1488||o===93)&&a++,c=c<<1&2047|i.get(f,l),f>=10&&(c===1488||c===93)&&a++}return a*e.N3},r.getPenaltyN4=function(i){let s=0;const a=i.data.length;for(let c=0;c<a;c++)s+=i.data[c];return Math.abs(Math.ceil(s*100/a/5)-10)*e.N4};function t(n,i,s){switch(n){case r.Patterns.PATTERN000:return(i+s)%2===0;case r.Patterns.PATTERN001:return i%2===0;case r.Patterns.PATTERN010:return s%3===0;case r.Patterns.PATTERN011:return(i+s)%3===0;case r.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(s/3))%2===0;case r.Patterns.PATTERN101:return i*s%2+i*s%3===0;case r.Patterns.PATTERN110:return(i*s%2+i*s%3)%2===0;case r.Patterns.PATTERN111:return(i*s%3+(i+s)%2)%2===0;default:throw new Error("bad maskPattern:"+n)}}r.applyMask=function(i,s){const a=s.size;for(let o=0;o<a;o++)for(let c=0;c<a;c++)s.isReserved(c,o)||s.xor(c,o,t(i,c,o))},r.getBestMask=function(i,s){const a=Object.keys(r.Patterns).length;let o=0,c=1/0;for(let l=0;l<a;l++){s(l),r.applyMask(l,i);const f=r.getPenaltyN1(i)+r.getPenaltyN2(i)+r.getPenaltyN3(i)+r.getPenaltyN4(i);r.applyMask(l,i),f<c&&(c=f,o=l)}return o}})(jc)),jc}var ho={},dh;function Vp(){if(dh)return ho;dh=1;const r=Qu(),e=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],t=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];return ho.getBlocksCount=function(i,s){switch(s){case r.L:return e[(i-1)*4+0];case r.M:return e[(i-1)*4+1];case r.Q:return e[(i-1)*4+2];case r.H:return e[(i-1)*4+3];default:return}},ho.getTotalCodewordsCount=function(i,s){switch(s){case r.L:return t[(i-1)*4+0];case r.M:return t[(i-1)*4+1];case r.Q:return t[(i-1)*4+2];case r.H:return t[(i-1)*4+3];default:return}},ho}var Yc={},Hs={},hh;function HS(){if(hh)return Hs;hh=1;const r=new Uint8Array(512),e=new Uint8Array(256);return(function(){let n=1;for(let i=0;i<255;i++)r[i]=n,e[n]=i,n<<=1,n&256&&(n^=285);for(let i=255;i<512;i++)r[i]=r[i-255]})(),Hs.log=function(n){if(n<1)throw new Error("log("+n+")");return e[n]},Hs.exp=function(n){return r[n]},Hs.mul=function(n,i){return n===0||i===0?0:r[e[n]+e[i]]},Hs}var ph;function VS(){return ph||(ph=1,(function(r){const e=HS();r.mul=function(n,i){const s=new Uint8Array(n.length+i.length-1);for(let a=0;a<n.length;a++)for(let o=0;o<i.length;o++)s[a+o]^=e.mul(n[a],i[o]);return s},r.mod=function(n,i){let s=new Uint8Array(n);for(;s.length-i.length>=0;){const a=s[0];for(let c=0;c<i.length;c++)s[c]^=e.mul(i[c],a);let o=0;for(;o<s.length&&s[o]===0;)o++;s=s.slice(o)}return s},r.generateECPolynomial=function(n){let i=new Uint8Array([1]);for(let s=0;s<n;s++)i=r.mul(i,new Uint8Array([1,e.exp(s)]));return i}})(Yc)),Yc}var Kc,mh;function GS(){if(mh)return Kc;mh=1;const r=VS();function e(t){this.genPoly=void 0,this.degree=t,this.degree&&this.initialize(this.degree)}return e.prototype.initialize=function(n){this.degree=n,this.genPoly=r.generateECPolynomial(this.degree)},e.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(n.length+this.degree);i.set(n);const s=r.mod(i,this.genPoly),a=this.degree-s.length;if(a>0){const o=new Uint8Array(this.degree);return o.set(s,a),o}return s},Kc=e,Kc}var Jc={},$c={},Zc={},gh;function Gp(){return gh||(gh=1,Zc.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}),Zc}var Jn={},bh;function Wp(){if(bh)return Jn;bh=1;const r="[0-9]+",e="[A-Z $%*+\\-./:]+";let t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";t=t.replace(/u/g,"\\u");const n="(?:(?![A-Z0-9 $%*+\\-./:]|"+t+`)(?:.|[\r
]))+`;Jn.KANJI=new RegExp(t,"g"),Jn.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),Jn.BYTE=new RegExp(n,"g"),Jn.NUMERIC=new RegExp(r,"g"),Jn.ALPHANUMERIC=new RegExp(e,"g");const i=new RegExp("^"+t+"$"),s=new RegExp("^"+r+"$"),a=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");return Jn.testKanji=function(c){return i.test(c)},Jn.testNumeric=function(c){return s.test(c)},Jn.testAlphanumeric=function(c){return a.test(c)},Jn}var _h;function Mr(){return _h||(_h=1,(function(r){const e=Gp(),t=Wp();r.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},r.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},r.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},r.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},r.MIXED={bit:-1},r.getCharCountIndicator=function(s,a){if(!s.ccBits)throw new Error("Invalid mode: "+s);if(!e.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?s.ccBits[0]:a<27?s.ccBits[1]:s.ccBits[2]},r.getBestModeForData=function(s){return t.testNumeric(s)?r.NUMERIC:t.testAlphanumeric(s)?r.ALPHANUMERIC:t.testKanji(s)?r.KANJI:r.BYTE},r.toString=function(s){if(s&&s.id)return s.id;throw new Error("Invalid mode")},r.isValid=function(s){return s&&s.bit&&s.ccBits};function n(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return r.NUMERIC;case"alphanumeric":return r.ALPHANUMERIC;case"kanji":return r.KANJI;case"byte":return r.BYTE;default:throw new Error("Unknown mode: "+i)}}r.from=function(s,a){if(r.isValid(s))return s;try{return n(s)}catch{return a}}})($c)),$c}var xh;function WS(){return xh||(xh=1,(function(r){const e=yr(),t=Vp(),n=Qu(),i=Mr(),s=Gp(),a=7973,o=e.getBCHDigit(a);function c(u,h,g){for(let x=1;x<=40;x++)if(h<=r.getCapacity(x,g,u))return x}function l(u,h){return i.getCharCountIndicator(u,h)+4}function f(u,h){let g=0;return u.forEach(function(x){const m=l(x.mode,h);g+=m+x.getBitsLength()}),g}function d(u,h){for(let g=1;g<=40;g++)if(f(u,g)<=r.getCapacity(g,h,i.MIXED))return g}r.from=function(h,g){return s.isValid(h)?parseInt(h,10):g},r.getCapacity=function(h,g,x){if(!s.isValid(h))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=i.BYTE);const m=e.getSymbolTotalCodewords(h),p=t.getTotalCodewordsCount(h,g),M=(m-p)*8;if(x===i.MIXED)return M;const _=M-l(x,h);switch(x){case i.NUMERIC:return Math.floor(_/10*3);case i.ALPHANUMERIC:return Math.floor(_/11*2);case i.KANJI:return Math.floor(_/13);case i.BYTE:default:return Math.floor(_/8)}},r.getBestVersionForData=function(h,g){let x;const m=n.from(g,n.M);if(Array.isArray(h)){if(h.length>1)return d(h,m);if(h.length===0)return 1;x=h[0]}else x=h;return c(x.mode,x.getLength(),m)},r.getEncodedBits=function(h){if(!s.isValid(h)||h<7)throw new Error("Invalid QR Code version");let g=h<<12;for(;e.getBCHDigit(g)-o>=0;)g^=a<<e.getBCHDigit(g)-o;return h<<12|g}})(Jc)),Jc}var Qc={},vh;function qS(){if(vh)return Qc;vh=1;const r=yr(),e=1335,t=21522,n=r.getBCHDigit(e);return Qc.getEncodedBits=function(s,a){const o=s.bit<<3|a;let c=o<<10;for(;r.getBCHDigit(c)-n>=0;)c^=e<<r.getBCHDigit(c)-n;return(o<<10|c)^t},Qc}var el={},tl,yh;function XS(){if(yh)return tl;yh=1;const r=Mr();function e(t){this.mode=r.NUMERIC,this.data=t.toString()}return e.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(n){let i,s,a;for(i=0;i+3<=this.data.length;i+=3)s=this.data.substr(i,3),a=parseInt(s,10),n.put(a,10);const o=this.data.length-i;o>0&&(s=this.data.substr(i),a=parseInt(s,10),n.put(a,o*3+1))},tl=e,tl}var nl,Mh;function jS(){if(Mh)return nl;Mh=1;const r=Mr(),e=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function t(n){this.mode=r.ALPHANUMERIC,this.data=n}return t.getBitsLength=function(i){return 11*Math.floor(i/2)+6*(i%2)},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(i){let s;for(s=0;s+2<=this.data.length;s+=2){let a=e.indexOf(this.data[s])*45;a+=e.indexOf(this.data[s+1]),i.put(a,11)}this.data.length%2&&i.put(e.indexOf(this.data[s]),6)},nl=t,nl}var il,Sh;function YS(){if(Sh)return il;Sh=1;const r=Mr();function e(t){this.mode=r.BYTE,typeof t=="string"?this.data=new TextEncoder().encode(t):this.data=new Uint8Array(t)}return e.getBitsLength=function(n){return n*8},e.prototype.getLength=function(){return this.data.length},e.prototype.getBitsLength=function(){return e.getBitsLength(this.data.length)},e.prototype.write=function(t){for(let n=0,i=this.data.length;n<i;n++)t.put(this.data[n],8)},il=e,il}var rl,Eh;function KS(){if(Eh)return rl;Eh=1;const r=Mr(),e=yr();function t(n){this.mode=r.KANJI,this.data=n}return t.getBitsLength=function(i){return i*13},t.prototype.getLength=function(){return this.data.length},t.prototype.getBitsLength=function(){return t.getBitsLength(this.data.length)},t.prototype.write=function(n){let i;for(i=0;i<this.data.length;i++){let s=e.toSJIS(this.data[i]);if(s>=33088&&s<=40956)s-=33088;else if(s>=57408&&s<=60351)s-=49472;else throw new Error("Invalid SJIS character: "+this.data[i]+`
Make sure your charset is UTF-8`);s=(s>>>8&255)*192+(s&255),n.put(s,13)}},rl=t,rl}var sl={exports:{}},Th;function JS(){return Th||(Th=1,(function(r){var e={single_source_shortest_paths:function(t,n,i){var s={},a={};a[n]=0;var o=e.PriorityQueue.make();o.push(n,0);for(var c,l,f,d,u,h,g,x,m;!o.empty();){c=o.pop(),l=c.value,d=c.cost,u=t[l]||{};for(f in u)u.hasOwnProperty(f)&&(h=u[f],g=d+h,x=a[f],m=typeof a[f]>"u",(m||x>g)&&(a[f]=g,o.push(f,g),s[f]=l))}if(typeof i<"u"&&typeof a[i]>"u"){var p=["Could not find a path from ",n," to ",i,"."].join("");throw new Error(p)}return s},extract_shortest_path_from_predecessor_list:function(t,n){for(var i=[],s=n;s;)i.push(s),t[s],s=t[s];return i.reverse(),i},find_path:function(t,n,i){var s=e.single_source_shortest_paths(t,n,i);return e.extract_shortest_path_from_predecessor_list(s,i)},PriorityQueue:{make:function(t){var n=e.PriorityQueue,i={},s;t=t||{};for(s in n)n.hasOwnProperty(s)&&(i[s]=n[s]);return i.queue=[],i.sorter=t.sorter||n.default_sorter,i},default_sorter:function(t,n){return t.cost-n.cost},push:function(t,n){var i={value:t,cost:n};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};r.exports=e})(sl)),sl.exports}var wh;function $S(){return wh||(wh=1,(function(r){const e=Mr(),t=XS(),n=jS(),i=YS(),s=KS(),a=Wp(),o=yr(),c=JS();function l(p){return unescape(encodeURIComponent(p)).length}function f(p,M,_){const b=[];let v;for(;(v=p.exec(_))!==null;)b.push({data:v[0],index:v.index,mode:M,length:v[0].length});return b}function d(p){const M=f(a.NUMERIC,e.NUMERIC,p),_=f(a.ALPHANUMERIC,e.ALPHANUMERIC,p);let b,v;return o.isKanjiModeEnabled()?(b=f(a.BYTE,e.BYTE,p),v=f(a.KANJI,e.KANJI,p)):(b=f(a.BYTE_KANJI,e.BYTE,p),v=[]),M.concat(_,b,v).sort(function(T,R){return T.index-R.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function u(p,M){switch(M){case e.NUMERIC:return t.getBitsLength(p);case e.ALPHANUMERIC:return n.getBitsLength(p);case e.KANJI:return s.getBitsLength(p);case e.BYTE:return i.getBitsLength(p)}}function h(p){return p.reduce(function(M,_){const b=M.length-1>=0?M[M.length-1]:null;return b&&b.mode===_.mode?(M[M.length-1].data+=_.data,M):(M.push(_),M)},[])}function g(p){const M=[];for(let _=0;_<p.length;_++){const b=p[_];switch(b.mode){case e.NUMERIC:M.push([b,{data:b.data,mode:e.ALPHANUMERIC,length:b.length},{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.ALPHANUMERIC:M.push([b,{data:b.data,mode:e.BYTE,length:b.length}]);break;case e.KANJI:M.push([b,{data:b.data,mode:e.BYTE,length:l(b.data)}]);break;case e.BYTE:M.push([{data:b.data,mode:e.BYTE,length:l(b.data)}])}}return M}function x(p,M){const _={},b={start:{}};let v=["start"];for(let E=0;E<p.length;E++){const T=p[E],R=[];for(let S=0;S<T.length;S++){const y=T[S],w=""+E+S;R.push(w),_[w]={node:y,lastCount:0},b[w]={};for(let A=0;A<v.length;A++){const L=v[A];_[L]&&_[L].node.mode===y.mode?(b[L][w]=u(_[L].lastCount+y.length,y.mode)-u(_[L].lastCount,y.mode),_[L].lastCount+=y.length):(_[L]&&(_[L].lastCount=y.length),b[L][w]=u(y.length,y.mode)+4+e.getCharCountIndicator(y.mode,M))}}v=R}for(let E=0;E<v.length;E++)b[v[E]].end=0;return{map:b,table:_}}function m(p,M){let _;const b=e.getBestModeForData(p);if(_=e.from(M,b),_!==e.BYTE&&_.bit<b.bit)throw new Error('"'+p+'" cannot be encoded with mode '+e.toString(_)+`.
 Suggested mode is: `+e.toString(b));switch(_===e.KANJI&&!o.isKanjiModeEnabled()&&(_=e.BYTE),_){case e.NUMERIC:return new t(p);case e.ALPHANUMERIC:return new n(p);case e.KANJI:return new s(p);case e.BYTE:return new i(p)}}r.fromArray=function(M){return M.reduce(function(_,b){return typeof b=="string"?_.push(m(b,null)):b.data&&_.push(m(b.data,b.mode)),_},[])},r.fromString=function(M,_){const b=d(M,o.isKanjiModeEnabled()),v=g(b),E=x(v,_),T=c.find_path(E.map,"start","end"),R=[];for(let S=1;S<T.length-1;S++)R.push(E.table[T[S]].node);return r.fromArray(h(R))},r.rawSplit=function(M){return r.fromArray(d(M,o.isKanjiModeEnabled()))}})(el)),el}var Ah;function ZS(){if(Ah)return Hc;Ah=1;const r=yr(),e=Qu(),t=FS(),n=OS(),i=BS(),s=kS(),a=zS(),o=Vp(),c=GS(),l=WS(),f=qS(),d=Mr(),u=$S();function h(E,T){const R=E.size,S=s.getPositions(T);for(let y=0;y<S.length;y++){const w=S[y][0],A=S[y][1];for(let L=-1;L<=7;L++)if(!(w+L<=-1||R<=w+L))for(let D=-1;D<=7;D++)A+D<=-1||R<=A+D||(L>=0&&L<=6&&(D===0||D===6)||D>=0&&D<=6&&(L===0||L===6)||L>=2&&L<=4&&D>=2&&D<=4?E.set(w+L,A+D,!0,!0):E.set(w+L,A+D,!1,!0))}}function g(E){const T=E.size;for(let R=8;R<T-8;R++){const S=R%2===0;E.set(R,6,S,!0),E.set(6,R,S,!0)}}function x(E,T){const R=i.getPositions(T);for(let S=0;S<R.length;S++){const y=R[S][0],w=R[S][1];for(let A=-2;A<=2;A++)for(let L=-2;L<=2;L++)A===-2||A===2||L===-2||L===2||A===0&&L===0?E.set(y+A,w+L,!0,!0):E.set(y+A,w+L,!1,!0)}}function m(E,T){const R=E.size,S=l.getEncodedBits(T);let y,w,A;for(let L=0;L<18;L++)y=Math.floor(L/3),w=L%3+R-8-3,A=(S>>L&1)===1,E.set(y,w,A,!0),E.set(w,y,A,!0)}function p(E,T,R){const S=E.size,y=f.getEncodedBits(T,R);let w,A;for(w=0;w<15;w++)A=(y>>w&1)===1,w<6?E.set(w,8,A,!0):w<8?E.set(w+1,8,A,!0):E.set(S-15+w,8,A,!0),w<8?E.set(8,S-w-1,A,!0):w<9?E.set(8,15-w-1+1,A,!0):E.set(8,15-w-1,A,!0);E.set(S-8,8,1,!0)}function M(E,T){const R=E.size;let S=-1,y=R-1,w=7,A=0;for(let L=R-1;L>0;L-=2)for(L===6&&L--;;){for(let D=0;D<2;D++)if(!E.isReserved(y,L-D)){let F=!1;A<T.length&&(F=(T[A]>>>w&1)===1),E.set(y,L-D,F),w--,w===-1&&(A++,w=7)}if(y+=S,y<0||R<=y){y-=S,S=-S;break}}}function _(E,T,R){const S=new t;R.forEach(function(D){S.put(D.mode.bit,4),S.put(D.getLength(),d.getCharCountIndicator(D.mode,E)),D.write(S)});const y=r.getSymbolTotalCodewords(E),w=o.getTotalCodewordsCount(E,T),A=(y-w)*8;for(S.getLengthInBits()+4<=A&&S.put(0,4);S.getLengthInBits()%8!==0;)S.putBit(0);const L=(A-S.getLengthInBits())/8;for(let D=0;D<L;D++)S.put(D%2?17:236,8);return b(S,E,T)}function b(E,T,R){const S=r.getSymbolTotalCodewords(T),y=o.getTotalCodewordsCount(T,R),w=S-y,A=o.getBlocksCount(T,R),L=S%A,D=A-L,F=Math.floor(S/A),B=Math.floor(w/A),G=B+1,k=F-B,Z=new c(k);let se=0;const fe=new Array(A),Ie=new Array(A);let qe=0;const Qe=new Uint8Array(E.buffer);for(let xe=0;xe<A;xe++){const Y=xe<D?B:G;fe[xe]=Qe.slice(se,se+Y),Ie[xe]=Z.encode(fe[xe]),se+=Y,qe=Math.max(qe,Y)}const ee=new Uint8Array(S);let W=0,q,ae;for(q=0;q<qe;q++)for(ae=0;ae<A;ae++)q<fe[ae].length&&(ee[W++]=fe[ae][q]);for(q=0;q<k;q++)for(ae=0;ae<A;ae++)ee[W++]=Ie[ae][q];return ee}function v(E,T,R,S){let y;if(Array.isArray(E))y=u.fromArray(E);else if(typeof E=="string"){let F=T;if(!F){const B=u.rawSplit(E);F=l.getBestVersionForData(B,R)}y=u.fromString(E,F||40)}else throw new Error("Invalid data");const w=l.getBestVersionForData(y,R);if(!w)throw new Error("The amount of data is too big to be stored in a QR Code");if(!T)T=w;else if(T<w)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+w+`.
`);const A=_(T,R,y),L=r.getSymbolSize(T),D=new n(L);return h(D,T),g(D),x(D,T),p(D,R,0),T>=7&&m(D,T),M(D,A),isNaN(S)&&(S=a.getBestMask(D,p.bind(null,D,R))),a.applyMask(S,D),p(D,R,S),{modules:D,version:T,errorCorrectionLevel:R,maskPattern:S,segments:y}}return Hc.create=function(T,R){if(typeof T>"u"||T==="")throw new Error("No input text");let S=e.M,y,w;return typeof R<"u"&&(S=e.from(R.errorCorrectionLevel,e.M),y=l.from(R.version),w=a.from(R.maskPattern),R.toSJISFunc&&r.setToSJISFunction(R.toSJISFunc)),v(T,y,S,w)},Hc}var al={},ol={},Rh;function qp(){return Rh||(Rh=1,(function(r){function e(t){if(typeof t=="number"&&(t=t.toString()),typeof t!="string")throw new Error("Color should be defined as hex string");let n=t.slice().replace("#","").split("");if(n.length<3||n.length===5||n.length>8)throw new Error("Invalid hex color: "+t);(n.length===3||n.length===4)&&(n=Array.prototype.concat.apply([],n.map(function(s){return[s,s]}))),n.length===6&&n.push("F","F");const i=parseInt(n.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+n.slice(0,6).join("")}}r.getOptions=function(n){n||(n={}),n.color||(n.color={});const i=typeof n.margin>"u"||n.margin===null||n.margin<0?4:n.margin,s=n.width&&n.width>=21?n.width:void 0,a=n.scale||4;return{width:s,scale:s?4:a,margin:i,color:{dark:e(n.color.dark||"#000000ff"),light:e(n.color.light||"#ffffffff")},type:n.type,rendererOpts:n.rendererOpts||{}}},r.getScale=function(n,i){return i.width&&i.width>=n+i.margin*2?i.width/(n+i.margin*2):i.scale},r.getImageWidth=function(n,i){const s=r.getScale(n,i);return Math.floor((n+i.margin*2)*s)},r.qrToImageData=function(n,i,s){const a=i.modules.size,o=i.modules.data,c=r.getScale(a,s),l=Math.floor((a+s.margin*2)*c),f=s.margin*c,d=[s.color.light,s.color.dark];for(let u=0;u<l;u++)for(let h=0;h<l;h++){let g=(u*l+h)*4,x=s.color.light;if(u>=f&&h>=f&&u<l-f&&h<l-f){const m=Math.floor((u-f)/c),p=Math.floor((h-f)/c);x=d[o[m*a+p]?1:0]}n[g++]=x.r,n[g++]=x.g,n[g++]=x.b,n[g]=x.a}}})(ol)),ol}var Ch;function QS(){return Ch||(Ch=1,(function(r){const e=qp();function t(i,s,a){i.clearRect(0,0,s.width,s.height),s.style||(s.style={}),s.height=a,s.width=a,s.style.height=a+"px",s.style.width=a+"px"}function n(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}r.render=function(s,a,o){let c=o,l=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(l=n()),c=e.getOptions(c);const f=e.getImageWidth(s.modules.size,c),d=l.getContext("2d"),u=d.createImageData(f,f);return e.qrToImageData(u.data,s,c),t(d,l,f),d.putImageData(u,0,0),l},r.renderToDataURL=function(s,a,o){let c=o;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const l=r.render(s,a,c),f=c.type||"image/png",d=c.rendererOpts||{};return l.toDataURL(f,d.quality)}})(al)),al}var cl={},Ph;function eE(){if(Ph)return cl;Ph=1;const r=qp();function e(i,s){const a=i.a/255,o=s+'="'+i.hex+'"';return a<1?o+" "+s+'-opacity="'+a.toFixed(2).slice(1)+'"':o}function t(i,s,a){let o=i+s;return typeof a<"u"&&(o+=" "+a),o}function n(i,s,a){let o="",c=0,l=!1,f=0;for(let d=0;d<i.length;d++){const u=Math.floor(d%s),h=Math.floor(d/s);!u&&!l&&(l=!0),i[d]?(f++,d>0&&u>0&&i[d-1]||(o+=l?t("M",u+a,.5+h+a):t("m",c,0),c=0,l=!1),u+1<s&&i[d+1]||(o+=t("h",f),f=0)):c++}return o}return cl.render=function(s,a,o){const c=r.getOptions(a),l=s.modules.size,f=s.modules.data,d=l+c.margin*2,u=c.color.light.a?"<path "+e(c.color.light,"fill")+' d="M0 0h'+d+"v"+d+'H0z"/>':"",h="<path "+e(c.color.dark,"stroke")+' d="'+n(f,l,c.margin)+'"/>',g='viewBox="0 0 '+d+" "+d+'"',m='<svg xmlns="http://www.w3.org/2000/svg" '+(c.width?'width="'+c.width+'" height="'+c.width+'" ':"")+g+' shape-rendering="crispEdges">'+u+h+`</svg>
`;return typeof o=="function"&&o(null,m),m},cl}var Lh;function tE(){if(Lh)return Jr;Lh=1;const r=NS(),e=ZS(),t=QS(),n=eE();function i(s,a,o,c,l){const f=[].slice.call(arguments,1),d=f.length,u=typeof f[d-1]=="function";if(!u&&!r())throw new Error("Callback required as last argument");if(u){if(d<2)throw new Error("Too few arguments provided");d===2?(l=o,o=a,a=c=void 0):d===3&&(a.getContext&&typeof l>"u"?(l=c,c=void 0):(l=c,c=o,o=a,a=void 0))}else{if(d<1)throw new Error("Too few arguments provided");return d===1?(o=a,a=c=void 0):d===2&&!a.getContext&&(c=o,o=a,a=void 0),new Promise(function(h,g){try{const x=e.create(o,c);h(s(x,a,c))}catch(x){g(x)}})}try{const h=e.create(o,c);l(null,s(h,a,c))}catch(h){l(h)}}return Jr.create=e.create,Jr.toCanvas=i.bind(null,t.render),Jr.toDataURL=i.bind(null,t.renderToDataURL),Jr.toString=i.bind(null,function(s,a,o){return n.render(s,o)}),Jr}var nE=tE();const iE=US(nE),Ih={"phoenix-ewer":"凤首昂起，卷尾成柄。","bronze-head":"轮廓在光中显现，锈色层层铺开。","cloud-mirror":"连弧相接，细纹在铜色中回旋。","liquan-bodhisattva":"沿着头冠、面庞、肩部与衣摆慢慢向下看，留意哪里转弯，哪里收住，哪里又让出一片空隙。","longquan-figure":"青釉如山色，露胎似暖土。","pipa-figurine":"陶色留住衣褶，也留住抱琴的姿态。","speechless-buddha":"靠近眉眼，看眼睑与嘴角如何组成这一份淡定。"};function rE(r,e=globalThis.location){const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.username="",t.password="",t.searchParams.set("artifact",r),t.href}function sE(r){return["localhost","127.0.0.1","[::1]"].includes(new URL(r).hostname)}function aE(r,e=8){const t=iE.create(r,{errorCorrectionLevel:"M"}),n=t.modules.size,i=4,s=(n+i*2)*e,a=new Uint8ClampedArray(s*s*4).fill(255);for(let o=0;o<s;o++)for(let c=0;c<s;c++){const l=Math.floor(c/e)-i,f=Math.floor(o/e)-i;if(l<0||f<0||l>=n||f>=n||!t.modules.get(f,l))continue;const d=(o*s+c)*4;a[d]=a[d+1]=a[d+2]=0}return{size:s,pixels:a,quiet:i,modules:n,scale:e}}function oE(r){const[e,,t]=r.position;if(r.cabinetId==="story")return{position:[e,.705,t+.935],rotationY:0,rotationX:-65*Math.PI/180};const n=e<0?1:-1;return{position:[e+n*.935,.705,t],rotationY:n*Math.PI/2,rotationX:-65*Math.PI/180}}function cE(r){const e=document.createElement("canvas");return e.width=e.height=r.size,e.getContext("2d").putImageData(new ImageData(r.pixels,r.size,r.size),0,0),e}function Dh(r,e,t,n,i,s){let a="";for(const o of e)r.measureText(a+o).width>i&&(r.fillText(a,t,n),a="",n+=s),a+=o;r.fillText(a,t,n)}function lE({scene:r,camera:e,canvas:t,assignments:n,onView:i=()=>{},isAvailable:s=()=>!0,onOpen:a=()=>{},onClose:o=()=>{},location:c=globalThis.location,maxDistance:l=4.8}){const f=new En;f.name="ExhibitLabels",r.add(f);const d=new vr(1.24,.3),u=new I,h=new I,g=new I,x=new AbortController,m=document.createElement("dialog");m.className="exhibit-label-dialog",m.setAttribute("aria-label","馆藏讲解板"),m.innerHTML='<button class="exhibit-label-close" type="button" aria-label="关闭讲解板">×</button><p class="exhibit-label-kicker"></p><h2></h2><p class="exhibit-label-copy"></p><div class="exhibit-label-qr"></div><p class="exhibit-label-scan">手机扫码 · 独立浏览文物</p><p class="exhibit-label-network"></p><button class="exhibit-label-view" type="button">查看详情 ↗</button><a class="exhibit-label-link" target="_blank" rel="noopener">独立打开详情 ↗</a>',document.body.append(m);let p=null,M=!1;const _=n.map((T,R)=>{const S=rE(T.artifactId,c),y=cE(aE(S)),w=document.createElement("canvas");w.width=1024,w.height=248;const A=w.getContext("2d");A.fillStyle="#f5f0e4",A.fillRect(0,0,1024,248),A.strokeStyle="#ad894c",A.lineWidth=3,A.strokeRect(14,14,996,220),A.fillStyle="#826638",A.font="20px sans-serif",A.fillText(`${String(R+1).padStart(2,"0")}  /  重器新生 · 馆藏`,36,44),A.fillStyle="#242723",A.font='bold 31px "Microsoft YaHei", sans-serif',Dh(A,T.name,36,94,700,40),A.font='22px "Microsoft YaHei", sans-serif',Dh(A,Ih[T.artifactId]??"",36,149,675,29),A.imageSmoothingEnabled=!1,A.drawImage(y,797,30,178,178),A.fillStyle="#826638",A.font="18px sans-serif",A.fillText("扫码看详情",832,231);const L=new $g(w);L.colorSpace=Ct;const D=new ni({map:L,toneMapped:!1}),F=new gt(d,D),B=oE(T);F.position.fromArray(B.position),F.rotation.order="YXZ",F.rotation.set(B.rotationX,B.rotationY,0),F.userData.cabinetId=T.cabinetId,F.userData.artifactId=T.artifactId,F.name=`ExhibitLabel_${T.artifactId}`,f.add(F);const G=document.createElement("button");G.type="button",G.className="exhibit-label-hotspot",G.textContent="展开讲解板 ＋",G.setAttribute("aria-label",`展开${T.name}讲解板与二维码`),G.hidden=!0,document.body.append(G);const k={assignment:T,url:S,qr:y,mesh:F,material:D,texture:L,button:G,index:R};return G.addEventListener("click",Z=>{Z.stopPropagation(),s()&&b(k)},{signal:x.signal}),k});function b(T){p=T,m.querySelector(".exhibit-label-kicker").textContent=`${String(T.index+1).padStart(2,"0")} / 重器新生 · 馆藏`,m.querySelector("h2").textContent=T.assignment.name,m.querySelector(".exhibit-label-copy").textContent=Ih[T.assignment.artifactId]??"",m.querySelector(".exhibit-label-qr").replaceChildren(T.qr),m.querySelector(".exhibit-label-link").href=T.url,m.querySelector(".exhibit-label-network").textContent=sE(T.url)?"当前是本机地址，手机无法直接扫码。请用电脑的局域网地址进入展厅，并确保手机与电脑连接同一网络。":"手机与电脑连接同一网络即可扫码浏览。",_.forEach(R=>{R.button.hidden=!0}),a(T.assignment),m.showModal()}function v(){!p||m.open||(p=null,o())}function E(){m.open&&m.close(),v()}return m.querySelector(".exhibit-label-close").addEventListener("click",E,{signal:x.signal}),m.addEventListener("close",v,{signal:x.signal}),m.querySelector(".exhibit-label-view").addEventListener("click",()=>{const T=p==null?void 0:p.assignment;E(),T&&i(T.artifactId)},{signal:x.signal}),{group:f,records:_,openLabel(T){if(M||m.open||!s())return!1;const R=_.find(S=>S.assignment.artifactId===T);return R?(b(R),!0):!1},get isOpen(){return m.open},close:E,update(){if(M)return;const T=t.getBoundingClientRect();for(const R of _){const{mesh:S,button:y}=R;S.getWorldPosition(u),h.subVectors(e.position,u),g.set(0,0,1).applyQuaternion(S.quaternion);const w=!m.open&&s()&&h.length()<=l&&h.dot(g)>0;u.project(e),y.hidden=!w||u.z<-1||u.z>1||Math.abs(u.x)>.84||Math.abs(u.y)>.85,y.hidden||(y.style.left=`${T.left+(u.x+1)*T.width/2}px`,y.style.top=`${T.top+(1-u.y)*T.height/2}px`)}},dispose(){if(!M){M=!0,E(),x.abort(),m.remove();for(const T of _)T.button.remove(),T.texture.dispose(),T.material.dispose();d.dispose(),f.removeFromParent()}}}}const Ae=r=>document.querySelector(r),Ft=new up;Ft.background=new Fe("#101611");const dt=new my({antialias:!0,powerPreference:"high-performance"});dt.setPixelRatio(Math.min(devicePixelRatio,1.25));dt.setSize(innerWidth,innerHeight);dt.outputColorSpace=Ct;dt.toneMapping=Gh;dt.toneMappingExposure=1.1;Ae("#canvas").appendChild(dt.domElement);dt.domElement.tabIndex=0;const ye=new Gt(58,innerWidth/innerHeight,.05,140);ye.position.set(0,1.7,7.7);ye.rotation.order="YXZ";const Xp=new au(dt),jp=new $y;Ft.environment=Xp.fromScene(jp,.02).texture;jp.dispose();Xp.dispose();Ft.environmentIntensity=.48;Ft.add(new mb(14149106,1514020,.85));const Ee=dt.domElement;Ee.setAttribute("aria-label","可交互数字展厅");const pt={reticle:Ae("#reticle"),aim:Ae("#aimHint"),story:Ae("#story"),guide:Ae("#guide"),walk:Ae("#walk")},Yp=[];let Cn=null,qi=!1,pr=null,ia=!1,Pn=!1,ei=null,Si=null,pa=null,on=null,Bt=null,wt=null,Vs=[],Uh=[],kt=null,ht=null,Lo=null,Nh=null,Mo=!1;const vu=new AbortController;function Zt(){return!!(Bt!=null&&Bt.isOpen()||ht!=null&&ht.isOpen()||wt!=null&&wt.isOpen)}async function uE(){if(!(Mo||!kt||ht!=null&&ht.isEngaged()&&kt.getCurrent())){Mo=!0;try{const r=await CS({signal:vu.signal});if(vu.signal.aborted)return;const e=JSON.stringify(r);e!==Nh&&(!(ht!=null&&ht.isEngaged())||!kt.getCurrent())&&(kt.setModels(r),Nh=e),Lo=null}catch(r){r.name!=="AbortError"&&(Lo=r.message)}finally{Mo=!1}}}const yu=[],ll=new Ep,ul=new Oe,Kp=new Un,Mu=new I(0,1.55,8.94),Ni=new I;let rn,xt,Wt=!1,Jp=0,vi=!1,_e="paused",Dn=!1,ri=matchMedia("(prefers-reduced-motion: reduce)").matches,mr=[],ms=null,ra=null,Oi=0,Su=0,cn=null,Ei=null,Fh=!1,Bo=!1,$p=Ae("#edgeTurn").checked;const fE=aS(()=>Ee.requestPointerLock());let br=performance.now(),fl=0,dl=0,yi=!1,js=0,Vn=ii.speed,pn=0,So=0,Ys=0,hl=0,pl=0;const ts=new Map,nn=new Set,ma=ye.position.clone(),Oh=new I,Fi=new I,Eu=new I(3.7,1.35,7.6),ml=new I,Bh=new Yi,kh=new Un,zh=new Un,zi=[],Ks=[],Js=[];let Zr=Math.min(devicePixelRatio,1.25),Gs=null,$r=0;const Io={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function ko(){Oi=ye.rotation.y,Su=ye.rotation.x}function ef(){const r=Ei;Ei=null,kp(Ee,r)}function tf(){ye.position.y-=pn,pn=0,Ys=0,nn.clear();for(const[r,e]of ts)kp(r,{id:e});ts.clear(),cn=null,ef(),rn==null||rn.stop(),ma.copy(ye.position),ko()}function xa(){const r=document.pointerLockElement===Ee;Ee.dataset.lookMode=_e==="walk"&&Dn?r?"pointer-lock":Bo?"right-drag":"mouse-follow":"paused",pt.walk.textContent=_e==="walk"&&Dn?r?"暂停环顾 · Esc":"点击锁定鼠标 · 连续转向":"继续鼠标环顾",Ae("#walkHint").textContent=r?"WASD 行走 · Esc 暂停 · 对准文物后点击 / E 查看详情":"点击画面锁定鼠标 · 未锁定时可按住右键反复拖动转身 · Esc 暂停"}function at(r,e){r!=="story"&&(ra=null),r!=="guide"&&(mr=[],ms=null),r!=="observe"&&(Si=null),r!=="guide"&&(pa=null),_e=r,Dn=sS(r,e,matchMedia("(pointer:coarse)").matches),tf(),r!=="walk"&&document.pointerLockElement===Ee&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",Dn),document.body.classList.toggle("free-visit",r==="walk"),document.querySelector("footer").inert=r==="walk"||r==="entering",Ae("#caseChoices").inert=r==="walk"||r==="entering",Ee.dataset.mode=_e,xa(),pt.story.hidden=r!=="story"}let Tu;function ga(r){clearTimeout(Tu),Ae("#status").textContent=r,Ae("#status").classList.add("show"),Tu=setTimeout(()=>Ae("#status").classList.remove("show"),2600)}function va(){Wt&&(vi=!0,Ae("#intro").classList.add("dismissed"),Ae("#intro").inert=!0,Ee.focus())}function nf(r){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=r;document.body.classList.toggle("entering-gallery",r)}function dE(){va(),at("entering"),Pn=!1,ia=!1,on=null,Cn.reset(),Cn.target=1,ei=new pS(xt.entrySequence),ye.position.fromArray(xt.entrySequence.outside),ye.lookAt(new I(...xt.entrySequence.lookAt)),ko(),nf(!0),Ae("#caseChoices").hidden=!0,Ae("#location").textContent="推门入馆 · 正在打开玻璃门",Ee.dataset.entryPhase="opening",matchMedia("(pointer:coarse)").matches||zo()}async function Zp(){if(!(!Wt||Zt()||_e==="story"||_e==="entering"||pt.guide.open)){if(!Pn){dE();return}if(_e==="walk"&&Dn&&document.pointerLockElement===Ee){at("paused");return}va(),at("walk",!matchMedia("(pointer:coarse)").matches),Dn&&await zo()}}async function zo(){if(!(document.pointerLockElement===Ee||!["walk","entering"].includes(_e)||Zt()||pt.guide.open)){try{await fE()}catch(r){Ee.dataset.lockError=r.name||"Unavailable",["walk","entering"].includes(_e)&&!Zt()&&ga("鼠标暂未锁定，可点击画面重试；也可按住右键拖动转身")}xa()}}function hE(){ia=!1,at("paused"),vi=!1,Pn=!1,ei=null,on=null,nf(!1),Ae("#caseChoices").hidden=!0,Cn.reset(),ye.position.fromArray(Io.entrance.p),ye.quaternion.copy(Kp),ma.copy(ye.position),ko(),So=0,Vn=ii.speed,rn.speed=Vn,Ae("#speed").value=Vn,Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒",yi=!1,qi=!1,js=0,qn.hidden=!0,gn.hidden=!0,pt.aim.textContent="",pt.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),Ae("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(r=>r.classList.toggle("active",r.dataset.view==="entrance")),clearTimeout(Tu),Ae("#status").classList.remove("show"),pt.guide.open&&pt.guide.close(),Ae("#intro").inert=!1,Ae("#intro").classList.remove("dismissed"),Ae("#enter").focus({preventScroll:!0})}function Qp(){if(_e==="entering"){nn.clear(),cn=null,ef();return}if(_e==="story"){tf();return}at("paused")}function em(r){if(!Wt||Zt()||_e==="entering")return;if(r==="cases"){Ae("#caseChoices").hidden=!1,Ho(Number.isInteger(on==null?void 0:on.id)?on.id:1);return}if(r==="hero"||r==="story"){nm(xt.observationTargets[r],r);return}Ae("#caseChoices").hidden=!0,on=null,pa=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),va(),at("guide");const e=Io[r];if(ms=new I(...e.t),ri)ye.position.fromArray(e.p),ye.lookAt(ms),at("paused");else{const t=Bp(ye.position.toArray(),e.p,xt);if(!t.length){ga("请先离开展柜边缘，再选择参观点"),at("paused");return}mr=t.map(n=>new I(...n))}Ae("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===r))}function tm(r){at("observe"),on=r,Si=new hS(r,{reduced:ri}),ye.position.copy(Si.views.left),ye.lookAt(Si.views.target),Ee.dataset.selectedExhibit=String(r.id),Ee.dataset.observationPhase="left",Ae("#location").textContent=r.label+" · 左侧观察"}function Ho(r){if(!Wt||Zt()||_e==="entering")return;const e=xt.exhibits.find(t=>t.id===Number(r));e&&nm(e,"cases")}function nm(r,e){if(!Wt||Zt()||_e==="entering")return;va(),at("guide"),on=r,Ae("#caseChoices").hidden=e!=="cases";const t=zp(r);if(ms=t.target,document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(i=>{const s=Number(i.dataset.exhibit)===r.id;i.classList.toggle("active",s),i.setAttribute("aria-pressed",String(s))}),Ae("#location").textContent=r.label+" · 前往左侧观察位",Ee.dataset.selectedExhibit=String(r.id),Ee.dataset.observationPhase="approach",ri){tm(r);return}const n=Bp(ye.position.toArray(),t.left.toArray(),xt);if(!n.length){ga("请先离开展柜边缘，再选择观察位置"),at("paused");return}pa=r,mr=n.map(i=>new I(...i))}Ae("#enter").onclick=Zp;pt.walk.onclick=Zp;document.querySelectorAll("[data-view]").forEach(r=>r.onclick=()=>em(r.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(r=>r.onclick=()=>Ho(r.dataset.exhibit));Ae("#help").onclick=()=>{Zt()||_e==="story"||_e==="entering"||(at("paused"),pt.guide.showModal())};Ae("#closeHelp").onclick=()=>pt.guide.close();function im(){Ae("#motion").setAttribute("aria-pressed",String(ri)),Ae("#motion").textContent=ri?"动态已减弱":"减弱动态"}im();Ae("#motion").onclick=()=>{ri=!ri,im()};Ae("#speed").min=ii.minSpeed;Ae("#speed").max=ii.maxSpeed;Ae("#speed").step=ii.step;Ae("#speed").value=Vn;Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒";Ae("#speed").oninput=r=>{const e=Number(r.target.value);Vn=In.clamp(Number.isFinite(e)?e:ii.speed,ii.minSpeed,ii.maxSpeed),r.target.value=Vn,rn&&(rn.speed=Vn),Ae("#speedValue").textContent=Vn.toFixed(1)+" 米/秒"};Ae("#edgeTurn").onchange=r=>{$p=r.target.checked,cn=null};const qn=document.createElement("button");qn.className="hotspot";qn.textContent="＋ 开启故事";qn.hidden=!0;Ae("#hotspots").appendChild(qn);function rf(){if(_e==="story"||pt.guide.open||!Wt)return;const r={p:ye.position.clone(),q:ye.quaternion.clone()};r.p.y-=pn,at("story"),ra=r}qn.onclick=rf;const gn=document.createElement("button");gn.className="hotspot";gn.id="doorHotspot";gn.textContent="推开玻璃门";gn.hidden=!0;Ae("#hotspots").appendChild(gn);function sf(){!Wt||!Pn||_e==="story"||_e==="entering"||pt.guide.open||Cn.toggle()}gn.onclick=sf;function af(){_e==="story"&&(ra&&(ye.position.copy(ra.p),pn=0,ye.quaternion.copy(ra.q)),at("paused"),Ee.focus())}Ae("#closeStory").onclick=af;Ae("#returnStory").onclick=af;function rm(r,e){Zt()||oS(ye,r,e)&&ko()}document.addEventListener("mousemove",r=>{if(_e!=="walk"||!Dn||Zt()||pt.guide.open)return;const e=document.pointerLockElement===Ee;if(!e&&Bo&&!(r.buttons&2)){cn=null;return}const t=uS(cn,r,performance.now(),e);rm(t.dx,t.dy),cn=t.point});window.addEventListener("mouseout",r=>{r.relatedTarget||(cn=null)});const Ss=dS();Ee.addEventListener("pointerdown",r=>Ss.down(r),!0);Ee.addEventListener("pointermove",r=>{document.pointerLockElement!==Ee&&Ss.move(r)},!0);Ee.addEventListener("pointerup",r=>Ss.end(r),!0);Ee.addEventListener("pointercancel",r=>Ss.end(r,!0),!0);Ee.addEventListener("lostpointercapture",r=>{r.pointerType==="touch"&&Ss.end(r,!0)},!0);Ee.addEventListener("click",r=>{Ss.click(document.pointerLockElement===Ee)&&(r.preventDefault(),r.stopImmediatePropagation())},!0);Ee.addEventListener("pointerdown",r=>{!Wt||Zt()||!Pn||_e==="story"||_e==="entering"||pt.guide.open||(Ee.focus(),r.pointerType==="mouse"&&r.button===2&&document.pointerLockElement!==Ee?((_e!=="walk"||!Dn)&&at("walk",!0),Bo=!0,cn={x:r.clientX,y:r.clientY},xa()):r.pointerType==="mouse"&&r.button===0&&r.isTrusted&&_e==="walk"&&Dn&&zo(),r.pointerType==="touch"&&!Ei&&(_e!=="walk"&&at("walk",!1),Ei={id:r.pointerId,x:r.clientX,y:r.clientY},Ee.setPointerCapture(r.pointerId)))});Ee.addEventListener("contextmenu",r=>{_e==="walk"&&r.preventDefault()});window.addEventListener("pointerup",r=>{r.pointerType==="mouse"&&r.button===2&&(cn=null)});Ee.addEventListener("pointermove",r=>{if(!Ei||_e!=="walk"||Zt())return;const e=lS(Ei,r);e&&(rm(e.dx,e.dy),Ei=e.point)});for(const r of["pointerup","pointercancel","lostpointercapture"])Ee.addEventListener(r,e=>{fS(Ei,e)&&(Ei=null)});Ee.addEventListener("click",r=>{if(!Wt||Zt()||_e==="entering"||pt.guide.open)return;if(_e==="walk"&&yi){rf();return}if((_e==="walk"||_e==="paused")&&qi){sf();return}if(document.pointerLockElement===Ee)ul.set(0,0);else{const n=Ee.getBoundingClientRect();ul.set((r.clientX-n.left)/n.width*2-1,-(r.clientY-n.top)/n.height*2+1)}ll.setFromCamera(ul,ye);const e=wt&&ll.intersectObjects(wt.records.map(n=>n.mesh),!1)[0];if(e&&e.distance<4.8&&wt.openLabel(e.object.userData.artifactId)){r.preventDefault(),r.stopImmediatePropagation();return}const t=ll.intersectObjects(yu,!1)[0];t&&t.distance<12&&Ho(t.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const r=document.pointerLockElement===Ee;if(document.body.classList.toggle("walking",r),Ee.dataset.locked=String(r),r&&!["walk","entering"].includes(_e)){document.exitPointerLock();return}cn=null,ef(),r?(Bo=!1,delete Ee.dataset.lockError):Fh&&_e==="walk"&&at("paused"),Fh=r,xa()});document.addEventListener("pointerlockerror",()=>{cn=null,xa()});const Hh=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",r=>{if(!Zt()){if(_e==="entering"){(Hh.has(r.code)||r.key==="Escape")&&r.preventDefault();return}if(r.key==="Escape"){_e==="story"?af():at("paused");return}if(!(pt.guide.open||_e==="story")){if(r.code==="KeyE"&&yi){rf();return}if(r.code==="KeyE"&&qi){r.repeat||sf();return}document.activeElement!==Ee||!vi||!Pn||!Hh.has(r.code)||(r.preventDefault(),_e!=="walk"&&(at("walk"),Dn&&zo()),nn.add(r.code))}}});window.addEventListener("keyup",r=>nn.delete(r.code));window.addEventListener("blur",Qp);document.addEventListener("visibilitychange",()=>{document.hidden&&Qp(),br=performance.now()});for(const r of document.querySelectorAll("[data-move]")){r.addEventListener("pointerdown",e=>{!Wt||Zt()||!Pn||pt.guide.open||_e==="story"||_e==="entering"||ts.has(r)||(e.preventDefault(),va(),_e!=="walk"&&at("walk"),ts.set(r,e.pointerId),nn.add(r.dataset.move),r.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])r.addEventListener(e,t=>{ts.get(r)===t.pointerId&&(ts.delete(r),nn.delete(r.dataset.move))})}function pE(r){Fi.copy(Eu).project(ye),ml.subVectors(Eu,ye.position);const e=ml.length();let t=xt.storyEnabled!==!1&&vi&&_e!=="story"&&_e!=="guide"&&_e!=="entering"&&_e!=="observe"&&!pt.guide.open&&e<3.5&&Fi.z<1&&Math.abs(Fi.x)<1&&Math.abs(Fi.y)<1;if(t){Bh.set(ye.position,ml.normalize());const s=rn.bvh.raycastFirst(Bh,sn);s&&s.distance<e-.5&&(t=!1)}qn.hidden=!t;let n=t&&Math.hypot(Fi.x*innerWidth,Fi.y*innerHeight)<(yi?110:80);n?js||(js=r):js=0,yi=n&&r-js>100,Ni.copy(Mu).project(ye);const i=Pn&&vi&&_e!=="story"&&_e!=="guide"&&_e!=="entering"&&_e!=="observe"&&!pt.guide.open&&ye.position.distanceTo(Mu)<4.2&&Ni.z<1&&Math.abs(Ni.x)<.95&&Math.abs(Ni.y)<.95;qi=i&&Math.hypot(Ni.x*innerWidth,Ni.y*innerHeight)<140,gn.hidden=!i,i&&(gn.textContent=Cn.target?"合上玻璃门":"推开玻璃门",gn.style.left=`${(Ni.x*.5+.5)*innerWidth}px`,gn.style.top=`${(-Ni.y*.5+.5)*innerHeight+65}px`),pt.reticle.classList.toggle("target",yi||qi),pt.aim.textContent=yi?"点击 / E · 开启故事":qi?`点击 / E · ${Cn.target?"合上":"推开"}玻璃门`:"",t&&!Dn&&(qn.style.left=`${(Fi.x*.5+.5)*innerWidth}px`,qn.style.top=`${(-Fi.y*.5+.5)*innerHeight}px`)}function po(r,e){if(!r.length)return 0;const t=[...r].sort((n,i)=>n-i);return t[Math.floor((t.length-1)*e)]}function sm(){return{frameP50:po(zi,.5),frameP95:po(zi,.95),updateP95:po(Ks,.95),renderP95:po(Js,.95),sampleCount:zi.length,resolution:Zr}}function mE(r){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=r[e];t&&(t.magFilter=Kt,t.minFilter=zn,t.generateMipmaps=!0,t.anisotropy=Math.min(8,dt.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function gE(){try{xt=await(await fetch("/scene_manifest.json")).json();for(const[a,o]of Object.entries(xt.views))Object.assign(Io[a],o);ye.position.fromArray(Io.entrance.p);const r=xt.anchors.find(a=>a.id==="HOTSPOT_Story");Eu.fromArray(r.position),Mu.fromArray(xt.layout.doorPoint);const e=await new Ku().loadAsync("/"+xt.model,a=>{a.total&&(Ae("#load").textContent=`载入模型 ${Math.round(a.loaded/a.total*100)}%`)}),t=DS(e.scene,xt,{replaceNumberPlates:!0});rn=new tS(xt.colliders),e.scene.traverse(a=>{var c;if(!a.isMesh)return;a.visible&&a.userData.exhibitId&&yu.push(a),(c=a.material)!=null&&c.name.startsWith("Baked diffuse")&&(a.material=new ni({map:a.material.emissiveMap,color:a.material.emissive.clone().multiplyScalar(.79)}));const o=Array.isArray(a.material)?a.material:[a.material];for(const l of o)l.transparent||(l.side=Ln),l.name.toLowerCase().includes("glass")&&(l.transmission=0,l.forceSinglePass=!0,l.transparent=!0,l.opacity=.055,l.depthWrite=!1,l.roughness=.035,l.envMapIntensity=.45,l.color.set(13493742),l.needsUpdate=!0),l.name.includes("Idle screen")&&(l.color.set(5400924),l.emissive.set(7440239),l.emissiveIntensity=.35,Yp.push(l)),mE(l)}),Ft.add(e.scene),Cn=new iS(e.scene),pr=rS(Ft,dt,e.scene),Ft.background=new Fe(463389);for(const a of xt.lights.filter(o=>o.type==="SPOT"&&o.name.includes("Gallery")).slice(0,4)){const o=new Mp(new Fe(...a.color),10,8,Math.PI/5,.6,2);o.position.fromArray(a.position),o.target.position.set(a.position[0],.5,a.position[2]),Ft.add(o,o.target)}Wt=!0,Jp=performance.now(),Kp.copy(ye.quaternion),ma.copy(ye.position),document.body.dataset.ready="true",Ee.dataset.collision="BVH capsule",Ae("#walk").disabled=!1,Ae("#enter").disabled=!1,Ae("#enter").textContent="进入展厅 →",Ae("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:dt,scene:Ft,camera:ye,navigate:em,selectExhibit:Ho,door:Cn,getVisitState:()=>({entered:vi,visitReady:Pn,mode:_e,entryPhase:ei==null?void 0:ei.phase,observationPhase:Si==null?void 0:Si.phase,selectedExhibit:on==null?void 0:on.id}),getMetrics:()=>({...sm(),drawCalls:dt.info.render.calls,triangles:dt.info.render.triangles,position:ye.position.toArray()})},Bt=xS({canvas:Ee,camera:ye,scene:Ft,assignments:gr,getMode:()=>_e,isEntered:()=>vi,isBlocked:()=>(wt==null?void 0:wt.isOpen)||(ht==null?void 0:ht.isEngaged())||!Wt||_e==="entering"||_e==="story"||pt.guide.open||qi||yi,colliders:xt.colliders,getPriorityTargets:()=>yu,onOpen:()=>at("paused"),onClose:()=>{at("paused"),br=performance.now(),Ee.focus({preventScroll:!0})}}),xt.observationTargets.hero.distance=3,xt.observationTargets.hero.targetHeight=1.8;const n=xt.centralPlatform.position;kt=TS({scene:Ft,position:n,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,prepareForRender:async(a,o)=>{o.throwIfAborted(),await dt.compileAsync(a,ye,Ft),o.throwIfAborted();const c=pr==null?void 0:pr.reflector.getRenderTarget();if(c){const l=dt.getRenderTarget();let f;try{dt.setRenderTarget(c),f=dt.compileAsync(a,ye,Ft)}finally{dt.setRenderTarget(l)}await f,o.throwIfAborted()}},loadModel:async(a,o)=>{await s,o.throwIfAborted();const c=Vs.find(l=>l.assignment.artifactId===a.artifactId);if(!c)throw new Error("馆藏模型暂未载入");return _S(c)}});const i={getCurrent:()=>kt.getCurrent(),getState:()=>({...kt.getState(),...Lo&&!kt.getCurrent()?{status:"error",error:Lo}:{},libraryLoading:Mo})};ht=LS({canvas:Ee,camera:ye,scene:Ft,stage:i,position:n,colliders:xt.colliders,isAvailable:()=>Wt&&vi&&(Pn||Ee.dataset.observationPhase==="complete")&&["walk","paused"].includes(_e)&&!(Bt!=null&&Bt.isOpen())&&!(wt!=null&&wt.isOpen)&&!pt.guide.open&&!qi&&!yi,onOpen:()=>{at("paused"),qn.hidden=!0,gn.hidden=!0},onClose:()=>{at("paused"),br=performance.now(),Ee.focus({preventScroll:!0})}}),window.museum.getHologram=()=>({...i.getState(),interaction:ht.getState(),model:kt.getCurrent()}),window.museum.getGeometryRepair=()=>t,wt=lE({scene:Ft,camera:ye,canvas:Ee,assignments:gr,isAvailable:()=>Wt&&vi&&Pn&&["walk","paused"].includes(_e)&&!(Bt!=null&&Bt.isOpen())&&!(ht!=null&&ht.isOpen())&&!pt.guide.open,onOpen:()=>{at("paused"),qn.hidden=!0,gn.hidden=!0},onClose:()=>{at("paused"),br=performance.now()},onView:a=>Bt.open(a)}),window.museum.getLabels=()=>({open:wt.isOpen,records:wt.records.map(a=>({artifactId:a.assignment.artifactId,url:a.url,position:a.mesh.position.toArray()}))}),window.museum.artifactsReady=!1;const s=bS({scene:Ft,renderer:dt,manifest:xt,onArtifact:a=>{Vs.push(a),Ee.dataset.artifactCount=String(Vs.length);const o=a.assignment.cabinetId==="story"?xt.observationTargets.story:xt.exhibits.find(c=>c.id===a.assignment.cabinetId);o&&(o.targetHeight=a.center.y)}}).then(({records:a,failures:o})=>{Vs=a,Uh=o,window.museum.artifactsReady=!0,Ee.dataset.artifactCount=String(a.length),Ee.dataset.artifactFailures=String(o.length),o.length&&ga("部分文物暂未载入，可以继续参观或刷新重试")}).catch(a=>{Ee.dataset.artifactFailures="7",console.error("文物载入失败",a),ga("文物暂未载入，请刷新重试")});uE(),window.museum.getArtifacts=()=>({records:Vs.map(a=>({artifactId:a.assignment.artifactId,cabinetId:a.assignment.cabinetId,bounds:{min:a.bounds.min.toArray(),max:a.bounds.max.toArray()}})),failures:Uh})}catch(r){console.error(r),Ae("#load").textContent="展厅加载失败，请刷新重试",Ae("#status").textContent=r.message}}gE();let gs=0;function of(r){gs=requestAnimationFrame(of);const e=(r-br)/1e3,t=Math.min(e,.06);if(br=r,document.hidden||Zt())return;Wt&&ia&&(ia=!1,_e!=="entering"&&Cn.target===1&&Cn.progress===1&&hE()),ye.position.y-=pn,pn=0;const n=ye.position.x,i=ye.position.z,s=performance.now();if(!Wt){dt.render(Ft,ye);return}if(_e==="entering")ei.update(ye,Cn,t)?(ei=null,Pn=!0,nf(!1),at("walk",!matchMedia("(pointer:coarse)").matches),Ee.focus(),Ee.dataset.entryPhase="complete",Ae("#location").textContent="入口序厅 · 可自由参观"):(Ee.dataset.entryPhase=ei.phase,Ae("#location").textContent=ei.phase==="opening"?"推门入馆 · 正在打开玻璃门":ei.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(_e==="observe"){const d=Si.update(ye,t),u=Si.phase;Ee.dataset.observationPhase=u,Ae("#location").textContent=on.label+" · "+(u==="left"?"左侧观察":u.startsWith("right")?"右侧观察":u==="front"?"移向正视位置":"正视图"),d&&(at("paused"),Ee.dataset.observationPhase="complete")}else if(_e==="guide"&&mr.length){const d=mr[0],u=ye.position.distanceTo(d);ye.position.lerp(d,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(u,.001))),kh.copy(ye.quaternion),ye.lookAt(ms),zh.copy(ye.quaternion),ye.quaternion.copy(kh).slerp(zh,1-Math.exp(-5*t)),u<.008&&(ye.position.copy(d),mr.shift()),mr.length||(ye.lookAt(ms),pa?tm(pa):at("paused"))}else if(_e==="walk"){$p&&Dn&&cn&&document.pointerLockElement!==Ee&&(Oi-=cS(cn.x,innerWidth)*t),ye.rotation.set(Su,Oi,0);const d=Number(nn.has("KeyW")||nn.has("ArrowUp"))-Number(nn.has("KeyS")||nn.has("ArrowDown")),u=Number(nn.has("KeyD")||nn.has("ArrowRight"))-Number(nn.has("KeyA")||nn.has("ArrowLeft"));rn.speed=Vn,Oh.set(-Math.sin(Oi)*d+Math.cos(Oi)*u,0,-Math.cos(Oi)*d-Math.sin(Oi)*u).normalize(),rn.update(ma,Oh,t),ye.position.copy(ma)}const a=Math.hypot(ye.position.x-n,ye.position.z-i),o=_e==="walk"&&a>1e-4;if(ri)Ys=0,pn=0;else{const d=o?Math.min(1,a/Math.max(t,.001)/ii.speed):0;Ys=In.lerp(Ys,d,1-Math.exp(-16*t)),o&&(So=(So+a*Math.PI*2/2.2)%(Math.PI*2)),pn=Math.sin(So)*.008*Ys,Math.abs(pn)<1e-5&&(pn=0)}if(hl=Math.max(hl,Math.abs(pn)),pl=Math.max(pl,rn.speed),ye.position.y+=pn,fl+=t,fl>.05){if(pE(r),ht==null||ht.update(),wt==null||wt.update(),Bt==null||Bt.update({selectedExhibit:on,observationPhase:Ee.dataset.observationPhase}),kt){const d=kt.getState();Object.assign(Ee.dataset,{hologramId:d.currentId||"",hologramPhase:d.phase||d.status,hologramPaused:String(d.paused),hologramCount:String(d.count)})}fl=0}for(const d of Yp)d.emissiveIntensity=In.lerp(d.emissiveIntensity,_e==="story"?.8:.35,1-Math.exp(-3*t));Cn.update(t)&&_e!=="entering"&&(ia=!0),pr==null||pr.update(t,ri),kt==null||kt.update(t,{paused:!!(ht!=null&&ht.isEngaged()||pt.guide.open||_e==="story"),reduced:ri});const c=performance.now()-s;Gs!==null&&(Zr=Gs,Gs=null,dt.setPixelRatio(Zr));const l=performance.now();dt.render(Ft,ye);const f=performance.now()-l;if(!document.hidden&&r-Jp>2500&&e<.25&&(zi.push(e*1e3),Ks.push(c),Js.push(f),zi.length>180&&(zi.shift(),Ks.shift(),Js.shift())),dl+=t,dl>1){const d=sm();d.sampleCount>=30&&d.frameP95>24?$r++:$r=0,$r>=2&&Zr>1?(Gs=1,zi.length=0,Ks.length=0,Js.length=0,$r=0):$r>=3&&d.frameP95>35&&Zr>.85&&(Gs=.85,zi.length=0,Ks.length=0,Js.length=0,$r=0),Object.assign(Ee.dataset,{position:ye.position.toArray().map(u=>u.toFixed(3)).join(","),direction:[Oi,Su].map(u=>u.toFixed(4)).join(","),mode:_e,bob:pn.toFixed(4),bobPeak:hl.toFixed(4),maxWalkSpeed:pl,speed:rn.speed,contacts:rn.contacts,queries:rn.queries,calls:dt.info.render.calls,triangles:dt.info.render.triangles,frameP50:d.frameP50.toFixed(2),frameP95:d.frameP95.toFixed(2),updateP95:d.updateP95.toFixed(2),renderP95:d.renderP95.toFixed(2),samples:d.sampleCount,dpr:Zr}),dl=0}}gs=requestAnimationFrame(of);window.addEventListener("resize",()=>{cn=null,ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),dt.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",r=>{cancelAnimationFrame(gs),gs=0,tf(),!r.persisted&&(vu.abort(),wt==null||wt.dispose(),Bt==null||Bt.dispose(),ht==null||ht.dispose(),kt==null||kt.dispose())});window.addEventListener("pageshow",r=>{r.persisted&&(br=performance.now(),gs||(gs=requestAnimationFrame(of)))});
