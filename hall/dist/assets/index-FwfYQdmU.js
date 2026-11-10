(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const aa="180",Yh=0,Pu=1,Jh=2,Rd=1,$h=2,hi=3,An=0,Ht=1,tn=2,zi=0,Xs=1,Ys=2,Lu=3,Du=4,Zh=5,cs=100,Qh=101,ep=102,tp=103,np=104,ip=200,sp=201,rp=202,ap=203,Dc=204,Ic=205,op=206,cp=207,lp=208,up=209,fp=210,dp=211,hp=212,pp=213,mp=214,Uc=0,Fc=1,Nc=2,Js=3,Oc=4,Bc=5,kc=6,zc=7,Wl=0,gp=1,bp=2,Hi=0,_p=1,xp=2,vp=3,yp=4,Mp=5,Cd=6,Sp=7,Iu="attached",Ep="detached",Pd=300,$s=301,Zs=302,Hc=303,Vc=304,Mo=306,Qs=1e3,Bi=1001,fo=1002,qt=1003,Ld=1004,Ur=1005,jt=1006,to=1007,Fn=1008,ti=1009,Dd=1010,Id=1011,Yr=1012,Xl=1013,ds=1014,Nn=1015,cr=1016,jl=1017,ql=1018,Jr=1020,Ud=35902,Fd=35899,Nd=1021,Od=1022,vn=1023,$r=1026,Zr=1027,Kl=1028,Yl=1029,Bd=1030,Jl=1031,$l=1033,no=33776,io=33777,so=33778,ro=33779,Gc=35840,Wc=35841,Xc=35842,jc=35843,qc=36196,Kc=37492,Yc=37496,Jc=37808,$c=37809,Zc=37810,Qc=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,cl=37820,ll=37821,ul=36492,fl=36494,dl=36495,hl=36283,pl=36284,ml=36285,gl=36286,Qr=2300,ea=2301,Lo=2302,Uu=2400,Fu=2401,Nu=2402,Tp=2500,wp=0,kd=1,bl=2,Ap=3200,Rp=3201,Zl=0,Cp=1,Ni="",It="srgb",Yt="srgb-linear",ho="linear",at="srgb",ms=7680,Ou=519,Pp=512,Lp=513,Dp=514,zd=515,Ip=516,Up=517,Fp=518,Np=519,_l=35044,Bu="300 es",Jn=2e3,po=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ku=1234567;const Hr=Math.PI/180,er=180/Math.PI;function kn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Bt[s&255]+Bt[s>>8&255]+Bt[s>>16&255]+Bt[s>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]).toLowerCase()}function Ve(s,e,t){return Math.max(e,Math.min(t,s))}function Ql(s,e){return(s%e+e)%e}function Op(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Bp(s,e,t){return s!==e?(t-s)/(e-s):0}function Vr(s,e,t){return(1-t)*s+t*e}function kp(s,e,t,n){return Vr(s,e,1-Math.exp(-t*n))}function zp(s,e=1){return e-Math.abs(Ql(s,e*2)-e)}function Hp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Vp(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Wp(s,e){return s+Math.random()*(e-s)}function Xp(s){return s*(.5-Math.random())}function jp(s){s!==void 0&&(ku=s);let e=ku+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qp(s){return s*Hr}function Kp(s){return s*er}function Yp(s){return(s&s-1)===0&&s!==0}function Jp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $p(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zp(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),d=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),h=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*d,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*d,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*d,o*l);break;case"XZX":s.set(o*d,c*g,c*h,o*l);break;case"YXY":s.set(c*h,o*d,c*g,o*l);break;case"ZYZ":s.set(c*g,c*h,o*d,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function it(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Rn={DEG2RAD:Hr,RAD2DEG:er,generateUUID:kn,clamp:Ve,euclideanModulo:Ql,mapLinear:Op,inverseLerp:Bp,lerp:Vr,damp:kp,pingpong:zp,smoothstep:Hp,smootherstep:Vp,randInt:Gp,randFloat:Wp,randFloatSpread:Xp,seededRandom:jp,degToRad:qp,radToDeg:Kp,isPowerOfTwo:Yp,ceilPowerOfTwo:Jp,floorPowerOfTwo:$p,setQuaternionFromProperEuler:Zp,normalize:it,denormalize:Un};class Ue{constructor(e=0,t=0){Ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],d=n[i+2],u=n[i+3];const f=r[a+0],h=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==f||l!==h||d!==g){let m=1-o;const p=c*f+l*h+d*g+u*x,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const v=Math.sqrt(_),E=Math.atan2(v,p*y);m=Math.sin(m*E)/v,o=Math.sin(o*E)/v}const b=o*y;if(c=c*m+f*b,l=l*m+h*b,d=d*m+g*b,u=u*m+x*b,m===1-o){const v=1/Math.sqrt(c*c+l*l+d*d+u*u);c*=v,l*=v,d*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],d=n[i+3],u=r[a],f=r[a+1],h=r[a+2],g=r[a+3];return e[t]=o*g+d*u+c*h-l*f,e[t+1]=c*g+d*f+l*u-o*h,e[t+2]=l*g+d*h+o*f-c*u,e[t+3]=d*g-o*u-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),d=o(i/2),u=o(r/2),f=c(n/2),h=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u+f*h*g;break;case"YZX":this._x=f*d*u+l*h*g,this._y=l*h*u+f*d*g,this._z=l*d*g-f*h*u,this._w=l*d*u-f*h*g;break;case"XZY":this._x=f*d*u-l*h*g,this._y=l*h*u-f*d*g,this._z=l*d*g+f*h*u,this._w=l*d*u+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],d=t[6],u=t[10],f=n+o+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-c)*h,this._y=(r-l)*h,this._z=(a-i)*h}else if(n>o&&n>u){const h=2*Math.sqrt(1+n-o-u);this._w=(d-c)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(r+l)/h}else if(o>u){const h=2*Math.sqrt(1+o-n-u);this._w=(r-l)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(c+d)/h}else{const h=2*Math.sqrt(1+u-n-o);this._w=(a-i)/h,this._x=(r+l)/h,this._y=(c+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,d=t._w;return this._x=n*d+a*o+i*l-r*c,this._y=i*d+a*c+r*o-n*l,this._z=r*d+a*l+n*c-i*o,this._w=a*d-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const h=1-t;return this._w=h*a+t*this._w,this._x=h*n+t*this._x,this._y=h*i+t*this._y,this._z=h*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),d=Math.atan2(l,o),u=Math.sin((1-t)*d)/l,f=Math.sin(t*d)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),d=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*d,this.y=n+c*d+o*l-r*u,this.z=i+c*u+r*d-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new P,zu=new Cn;class We{constructor(e,t,n,i,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const d=this.elements;return d[0]=e,d[1]=i,d[2]=o,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=a,d[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],d=n[4],u=n[7],f=n[2],h=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],_=i[4],b=i[7],v=i[2],E=i[5],T=i[8];return r[0]=a*x+o*y+c*v,r[3]=a*m+o*_+c*E,r[6]=a*p+o*b+c*T,r[1]=l*x+d*y+u*v,r[4]=l*m+d*_+u*E,r[7]=l*p+d*b+u*T,r[2]=f*x+h*y+g*v,r[5]=f*m+h*_+g*E,r[8]=f*p+h*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8];return t*a*d-t*o*l-n*r*d+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=d*a-o*l,f=o*c-d*r,h=l*r-a*c,g=t*u+n*f+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*l-d*n)*x,e[2]=(o*n-i*a)*x,e[3]=f*x,e[4]=(d*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=h*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Io.makeScale(e,t)),this}rotate(e){return this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new We;function Hd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ta(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Qp(){const s=ta("canvas");return s.style.display="block",s}const Hu={};function na(s){s in Hu||(Hu[s]=!0,console.warn(s))}function em(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Vu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tm(){const s={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(i.r=xi(i.r),i.g=xi(i.g),i.b=xi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(i.r=js(i.r),i.g=js(i.g),i.b=js(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?ho:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return na("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return na("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Yt]:{primaries:e,whitePoint:n,transfer:ho,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),s}const $e=tm();function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let gs;class nm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=ta("canvas")),gs.width=e.width,gs.height=e.height;const i=gs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xi(t[n]/255)*255):t[n]=xi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let im=0;class eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=kn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Uo(i[a].image)):r.push(Uo(i[a]))}else r=Uo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Uo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?nm.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sm=0;const Fo=new P;class Ut extends lr{constructor(e=Ut.DEFAULT_IMAGE,t=Ut.DEFAULT_MAPPING,n=Bi,i=Bi,r=jt,a=Fn,o=vn,c=ti,l=Ut.DEFAULT_ANISOTROPY,d=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=kn(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Fo).x}get height(){return this.source.getSize(Fo).y}get depth(){return this.source.getSize(Fo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qs:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qs:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=Pd;Ut.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,n=0,i=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],d=c[4],u=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(l+1)/2,b=(h+1)/2,v=(p+1)/2,E=(d+f)/4,T=(u+x)/4,C=(g+m)/4;return _>b&&_>v?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=E/n,r=T/n):b>v?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=C/i):v<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(v),n=T/r,i=C/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(f-d)/y,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rm extends lr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const i={width:e,height:t,depth:n.depth},r=new Ut(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new eu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends rm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Vd extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class am extends Ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(r,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fa.copy(n.boundingBox)),fa.applyMatrix4(e.matrixWorld),this.union(fa)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gr),da.subVectors(this.max,gr),bs.subVectors(e.a,gr),_s.subVectors(e.b,gr),xs.subVectors(e.c,gr),Si.subVectors(_s,bs),Ei.subVectors(xs,_s),Ji.subVectors(bs,xs);let t=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Ji.z,Ji.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Ji.z,0,-Ji.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Ji.y,Ji.x,0];return!No(t,bs,_s,xs,da)||(t=[1,0,0,0,1,0,0,0,1],!No(t,bs,_s,xs,da))?!1:(ha.crossVectors(Si,Ei),t=[ha.x,ha.y,ha.z],No(t,bs,_s,xs,da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,fa=new ut,bs=new P,_s=new P,xs=new P,Si=new P,Ei=new P,Ji=new P,gr=new P,da=new P,ha=new P,$i=new P;function No(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){$i.fromArray(s,r);const o=i.x*Math.abs($i.x)+i.y*Math.abs($i.y)+i.z*Math.abs($i.z),c=e.dot($i),l=t.dot($i),d=n.dot($i);if(Math.max(-Math.max(c,l,d),Math.min(c,l,d))>o)return!1}return!0}const om=new ut,br=new P,Oo=new P;class si{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):om.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(Oo)),this.expandByPoint(br.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ci=new P,Bo=new P,pa=new P,Ti=new P,ko=new P,ma=new P,zo=new P;class ji{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Bo);const r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=Ti.dot(this.direction),c=-Ti.dot(pa),l=Ti.lengthSq(),d=Math.abs(1-a*a);let u,f,h,g;if(d>0)if(u=a*c-o,f=a*o-c,g=r*d,u>=0)if(f>=-g)if(f<=g){const x=1/d;u*=x,f*=x,h=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),h=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),h=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bo).addScaledVector(pa,f),h}intersectSphere(e,t){ci.subVectors(e.center,this.origin);const n=ci.dot(this.direction),i=ci.dot(ci)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,i,r){ko.subVectors(t,e),ma.subVectors(n,e),zo.crossVectors(ko,ma);let a=this.direction.dot(zo),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const c=o*this.direction.dot(ma.crossVectors(Ti,ma));if(c<0)return null;const l=o*this.direction.dot(ko.cross(Ti));if(l<0||c+l>a)return null;const d=-o*Ti.dot(zo);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,t,n,i,r,a,o,c,l,d,u,f,h,g,x,m){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,d,u,f,h,g,x,m)}set(e,t,n,i,r,a,o,c,l,d,u,f,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),d=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*d,h=a*u,g=o*d,x=o*u;t[0]=c*d,t[4]=-c*u,t[8]=l,t[1]=h+g*l,t[5]=f-x*l,t[9]=-o*c,t[2]=x-f*l,t[6]=g+h*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*d,h=c*u,g=l*d,x=l*u;t[0]=f+x*o,t[4]=g*o-h,t[8]=a*l,t[1]=a*u,t[5]=a*d,t[9]=-o,t[2]=h*o-g,t[6]=x+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*d,h=c*u,g=l*d,x=l*u;t[0]=f-x*o,t[4]=-a*u,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*d,t[9]=x-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*d,h=a*u,g=o*d,x=o*u;t[0]=c*d,t[4]=g*l-h,t[8]=f*l+x,t[1]=c*u,t[5]=x*l+f,t[9]=h*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=x-f*u,t[8]=g*u+h,t[1]=u,t[5]=a*d,t[9]=-o*d,t[2]=-l*d,t[6]=h*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*c,h=a*l,g=o*c,x=o*l;t[0]=c*d,t[4]=-u,t[8]=l*d,t[1]=f*u+x,t[5]=a*d,t[9]=h*u-g,t[2]=g*u-h,t[6]=o*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cm,e,lm)}lookAt(e,t,n){const i=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),wi.crossVectors(n,cn),wi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),wi.crossVectors(n,cn)),wi.normalize(),ga.crossVectors(cn,wi),i[0]=wi.x,i[4]=ga.x,i[8]=cn.x,i[1]=wi.y,i[5]=ga.y,i[9]=cn.y,i[2]=wi.z,i[6]=ga.z,i[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],d=n[1],u=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],_=n[7],b=n[11],v=n[15],E=i[0],T=i[4],C=i[8],S=i[12],M=i[1],A=i[5],L=i[9],D=i[13],F=i[2],O=i[6],B=i[10],j=i[14],G=i[3],ee=i[7],ae=i[11],pe=i[15];return r[0]=a*E+o*M+c*F+l*G,r[4]=a*T+o*A+c*O+l*ee,r[8]=a*C+o*L+c*B+l*ae,r[12]=a*S+o*D+c*j+l*pe,r[1]=d*E+u*M+f*F+h*G,r[5]=d*T+u*A+f*O+h*ee,r[9]=d*C+u*L+f*B+h*ae,r[13]=d*S+u*D+f*j+h*pe,r[2]=g*E+x*M+m*F+p*G,r[6]=g*T+x*A+m*O+p*ee,r[10]=g*C+x*L+m*B+p*ae,r[14]=g*S+x*D+m*j+p*pe,r[3]=y*E+_*M+b*F+v*G,r[7]=y*T+_*A+b*O+v*ee,r[11]=y*C+_*L+b*B+v*ae,r[15]=y*S+_*D+b*j+v*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],d=e[2],u=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*h-n*c*h)+x*(+t*c*h-t*l*f+r*a*f-i*a*h+i*l*d-r*c*d)+m*(+t*l*u-t*o*h-r*a*u+n*a*h+r*o*d-n*l*d)+p*(-i*o*d-t*c*u+t*o*f+i*a*u-n*a*f+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],d=e[8],u=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*l-x*f*l+x*c*h-o*m*h-u*c*p+o*f*p,_=g*f*l-d*m*l-g*c*h+a*m*h+d*c*p-a*f*p,b=d*x*l-g*u*l+g*o*h-a*x*h-d*o*p+a*u*p,v=g*u*c-d*x*c-g*o*f+a*x*f+d*o*m-a*u*m,E=t*y+n*_+i*b+r*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=y*T,e[1]=(x*f*r-u*m*r-x*i*h+n*m*h+u*i*p-n*f*p)*T,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*p+n*c*p)*T,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*h-n*c*h)*T,e[4]=_*T,e[5]=(d*m*r-g*f*r+g*i*h-t*m*h-d*i*p+t*f*p)*T,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*T,e[7]=(a*f*r-d*c*r+d*i*l-t*f*l-a*i*h+t*c*h)*T,e[8]=b*T,e[9]=(g*u*r-d*x*r-g*n*h+t*x*h+d*n*p-t*u*p)*T,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*T,e[11]=(d*o*r-a*u*r-d*n*l+t*u*l+a*n*h-t*o*h)*T,e[12]=v*T,e[13]=(d*x*i-g*u*i+g*n*f-t*x*f-d*n*m+t*u*m)*T,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*T,e[15]=(a*u*i-d*o*i+d*n*c-t*u*c-a*n*f+t*o*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,d=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,d*o+n,d*c-i*a,0,l*c-i*o,d*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,d=a+a,u=o+o,f=r*l,h=r*d,g=r*u,x=a*d,m=a*u,p=o*u,y=c*l,_=c*d,b=c*u,v=n.x,E=n.y,T=n.z;return i[0]=(1-(x+p))*v,i[1]=(h+b)*v,i[2]=(g-_)*v,i[3]=0,i[4]=(h-b)*E,i[5]=(1-(f+p))*E,i[6]=(m+y)*E,i[7]=0,i[8]=(g+_)*T,i[9]=(m-y)*T,i[10]=(1-(f+x))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=vs.set(i[0],i[1],i[2]).length();const a=vs.set(i[4],i[5],i[6]).length(),o=vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ln.copy(this);const l=1/r,d=1/a,u=1/o;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=d,Ln.elements[5]*=d,Ln.elements[6]*=d,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=Jn,c=!1){const l=this.elements,d=2*r/(t-e),u=2*r/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===po)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=Jn,c=!1){const l=this.elements,d=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Jn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===po)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=d,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=u,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new P,Ln=new Pe,cm=new P(0,0,0),lm=new P(1,1,1),wi=new P,ga=new P,cn=new P,Wu=new Pe,Xu=new Cn;class Hn{constructor(e=0,t=0,n=0,i=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],d=i[9],u=i[2],f=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ve(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ve(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ve(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xu.setFromEuler(this),this.setFromQuaternion(Xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let um=0;const ju=new P,ys=new Cn,li=new Pe,ba=new P,_r=new P,fm=new P,dm=new Cn,qu=new P(1,0,0),Ku=new P(0,1,0),Yu=new P(0,0,1),Ju={type:"added"},hm={type:"removed"},Ms={type:"childadded",child:null},Ho={type:"childremoved",child:null};class dt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dt.DEFAULT_UP.clone();const e=new P,t=new Hn,n=new Cn,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new We}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ba.copy(e):ba.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(_r,ba,this.up):li.lookAt(ba,_r,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),ys.setFromRotationMatrix(li),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ju),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hm),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ju),Ms.child=e,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,e,fm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,dm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,d=c.length;l<d;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),d=a(e.images),u=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const d=o[l];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dt.DEFAULT_UP=new P(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new P,ui=new P,Vo=new P,fi=new P,Ss=new P,Es=new P,$u=new P,Go=new P,Wo=new P,Xo=new P,jo=new et,qo=new et,Ko=new et;class Rt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Dn.subVectors(e,t),i.cross(Dn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Dn.subVectors(i,t),ui.subVectors(n,t),Vo.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ui),c=Dn.dot(Vo),l=ui.dot(ui),d=ui.dot(Vo),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,h=(l*c-o*d)*f,g=(a*d-o*c)*f;return r.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,fi.x),c.addScaledVector(a,fi.y),c.addScaledVector(o,fi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return jo.setScalar(0),qo.setScalar(0),Ko.setScalar(0),jo.fromBufferAttribute(e,t),qo.fromBufferAttribute(e,n),Ko.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(qo,r.y),a.addScaledVector(Ko,r.z),a}static isFrontFacing(e,t,n,i){return Dn.subVectors(n,t),ui.subVectors(e,t),Dn.cross(ui).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Dn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Rt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Rt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Rt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Ss.subVectors(i,n),Es.subVectors(r,n),Go.subVectors(e,n);const c=Ss.dot(Go),l=Es.dot(Go);if(c<=0&&l<=0)return t.copy(n);Wo.subVectors(e,i);const d=Ss.dot(Wo),u=Es.dot(Wo);if(d>=0&&u<=d)return t.copy(i);const f=c*u-d*l;if(f<=0&&c>=0&&d<=0)return a=c/(c-d),t.copy(n).addScaledVector(Ss,a);Xo.subVectors(e,r);const h=Ss.dot(Xo),g=Es.dot(Xo);if(g>=0&&h<=g)return t.copy(r);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Es,o);const m=d*g-h*u;if(m<=0&&u-d>=0&&h-g>=0)return $u.subVectors(r,i),o=(u-d)/(u-d+(h-g)),t.copy(i).addScaledVector($u,o);const p=1/(m+x+f);return a=x*p,o=f*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Yo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=$e.workingColorSpace){if(e=Ql(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Yo(a,r,e+1/3),this.g=Yo(a,r,e),this.b=Yo(a,r,e-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(e,t=It){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){const n=Gd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return $e.workingToColorSpace(kt.copy(this),e),Math.round(Ve(kt.r*255,0,255))*65536+Math.round(Ve(kt.g*255,0,255))*256+Math.round(Ve(kt.b*255,0,255))}getHexString(e=It){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(kt.copy(this),t);const n=kt.r,i=kt.g,r=kt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const d=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=d<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=d,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(kt.copy(this),t),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=It){$e.workingToColorSpace(kt.copy(this),e);const t=kt.r,n=kt.g,i=kt.b;return e!==It?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+t,Ai.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ai),e.getHSL(_a);const n=Vr(Ai.h,_a.h,t),i=Vr(Ai.s,_a.s,t),r=Vr(Ai.l,_a.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new De;De.NAMES=Gd;let pm=0;class zn extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Xs,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Ic,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ou,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dc&&(n.blendSrc=this.blendSrc),this.blendDst!==Ic&&(n.blendDst=this.blendDst),this.blendEquation!==cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ou&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gi extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,xa=new Ue;let mm=0;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xa.fromBufferAttribute(this,t),xa.applyMatrix3(e),this.setXY(t,xa.x,xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_l&&(e.usage=this.usage),e}}class Wd extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Xd extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let gm=0;const bn=new Pe,Jo=new dt,Ts=new P,ln=new ut,xr=new ut,Dt=new P;class rn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hd(e)?Xd:Wd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ut);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];xr.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(ln.min,xr.min),ln.expandByPoint(Dt),Dt.addVectors(ln.max,xr.max),ln.expandByPoint(Dt)):(ln.expandByPoint(xr.min),ln.expandByPoint(xr.max))}ln.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)Dt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Dt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,d=o.count;l<d;l++)Dt.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(e,l),Dt.add(Ts)),i=Math.max(i,n.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<n.count;C++)o[C]=new P,c[C]=new P;const l=new P,d=new P,u=new P,f=new Ue,h=new Ue,g=new Ue,x=new P,m=new P;function p(C,S,M){l.fromBufferAttribute(n,C),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,C),h.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),d.sub(l),u.sub(l),h.sub(f),g.sub(f);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(A),m.copy(u).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(A),o[C].add(x),o[S].add(x),o[M].add(x),c[C].add(m),c[S].add(m),c[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,S=y.length;C<S;++C){const M=y[C],A=M.start,L=M.count;for(let D=A,F=A+L;D<F;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new P,b=new P,v=new P,E=new P;function T(C){v.fromBufferAttribute(i,C),E.copy(v);const S=o[C];_.copy(S),_.sub(v.multiplyScalar(v.dot(S))).normalize(),b.crossVectors(E,S);const A=b.dot(c[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,A)}for(let C=0,S=y.length;C<S;++C){const M=y[C],A=M.start,L=M.count;for(let D=A,F=A+L;D<F;D+=3)T(e.getX(D+0)),T(e.getX(D+1)),T(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const i=new P,r=new P,a=new P,o=new P,c=new P,l=new P,d=new P,u=new P;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(d),c.add(d),l.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=t.count;f<h;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),u.subVectors(i,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,c){const l=o.array,d=o.itemSize,u=o.normalized,f=new l.constructor(c.length*d);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*d;for(let p=0;p<d;p++)f[g++]=l[h++]}return new Ft(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let d=0,u=l.length;d<u;d++){const f=l[d],h=e(f,n);c.push(h)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],d=[];for(let u=0,f=l.length;u<f;u++){const h=l[u];d.push(h.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const d=i[l];this.setAttribute(l,d.clone(t))}const r=e.morphAttributes;for(const l in r){const d=[],u=r[l];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[l]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,d=a.length;l<d;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zu=new Pe,Zi=new ji,va=new si,Qu=new P,ya=new P,Ma=new P,Sa=new P,$o=new P,Ea=new P,ef=new P,Ta=new P;class gt extends dt{constructor(e=new rn,t=new gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ea.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const d=o[c],u=r[c];d!==0&&($o.fromBufferAttribute(u,e),a?Ea.addScaledVector($o,d):Ea.addScaledVector($o.sub(t),d))}t.add(Ea)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(va.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(va,Qu)===null||Zi.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Zu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(Zu),!(n.boundingBox!==null&&Zi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),_=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=_;b<v;b+=3){const E=o.getX(b),T=o.getX(b+1),C=o.getX(b+2);i=wa(this,p,e,n,l,d,u,E,T,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=o.getX(m),_=o.getX(m+1),b=o.getX(m+2);i=wa(this,a,e,n,l,d,u,y,_,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],y=Math.max(m.start,h.start),_=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let b=y,v=_;b<v;b+=3){const E=b,T=b+1,C=b+2;i=wa(this,p,e,n,l,d,u,E,T,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const y=m,_=m+1,b=m+2;i=wa(this,a,e,n,l,d,u,y,_,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function bm(s,e,t,n,i,r,a,o){let c;if(e.side===Ht?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===An,o),c===null)return null;Ta.copy(o),Ta.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Ta);return l<t.near||l>t.far?null:{distance:l,point:Ta.clone(),object:s}}function wa(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ya),s.getVertexPosition(c,Ma),s.getVertexPosition(l,Sa);const d=bm(s,e,t,n,ya,Ma,Sa,ef);if(d){const u=new P;Rt.getBarycoord(ef,ya,Ma,Sa,u),i&&(d.uv=Rt.getInterpolatedAttribute(i,o,c,l,u,new Ue)),r&&(d.uv1=Rt.getInterpolatedAttribute(r,o,c,l,u,new Ue)),a&&(d.normal=Rt.getInterpolatedAttribute(a,o,c,l,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};Rt.getNormal(ya,Ma,Sa,f.normal),d.face=f,d.barycoord=u}return d}class hs extends rn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],d=[],u=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(d,3)),this.setAttribute("uv",new Ot(u,2));function g(x,m,p,y,_,b,v,E,T,C,S){const M=b/T,A=v/C,L=b/2,D=v/2,F=E/2,O=T+1,B=C+1;let j=0,G=0;const ee=new P;for(let ae=0;ae<B;ae++){const pe=ae*A-D;for(let Oe=0;Oe<O;Oe++){const Je=Oe*M-L;ee[x]=Je*y,ee[m]=pe*_,ee[p]=F,l.push(ee.x,ee.y,ee.z),ee[x]=0,ee[m]=0,ee[p]=E>0?1:-1,d.push(ee.x,ee.y,ee.z),u.push(Oe/T),u.push(1-ae/C),j+=1}}for(let ae=0;ae<C;ae++)for(let pe=0;pe<T;pe++){const Oe=f+pe+O*ae,Je=f+pe+O*(ae+1),Ze=f+(pe+1)+O*(ae+1),te=f+(pe+1)+O*ae;c.push(Oe,Je,te),c.push(Je,Ze,te),G+=6}o.addGroup(h,G,S),h+=G,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Wt(s){const e={};for(let t=0;t<s.length;t++){const n=tr(s[t]);for(const i in n)e[i]=n[i]}return e}function _m(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function jd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const qd={clone:tr,merge:Wt};var xm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xm,this.fragmentShader=vm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=_m(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Kd extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ri=new P,tf=new Ue,nf=new Ue;class zt extends Kd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ri.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z),Ri.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ri.x,Ri.y).multiplyScalar(-e/Ri.z)}getViewSize(e,t){return this.getViewBounds(e,tf,nf),t.subVectors(nf,tf)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ws=-90,As=1;class ym extends dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new zt(ws,As,e,t);i.layers=this.layers,this.add(i);const r=new zt(ws,As,e,t);r.layers=this.layers,this.add(r);const a=new zt(ws,As,e,t);a.layers=this.layers,this.add(a);const o=new zt(ws,As,e,t);o.layers=this.layers,this.add(o);const c=new zt(ws,As,e,t);c.layers=this.layers,this.add(c);const l=new zt(ws,As,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===po)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yd extends Ut{constructor(e=[],t=$s,n,i,r,a,o,c,l,d){super(e,t,n,i,r,a,o,c,l,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mm extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yd(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new hs(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:zi});r.uniforms.tEquirect.value=t;const a=new gt(i,r),o=t.minFilter;return t.minFilter===Fn&&(t.minFilter=jt),new ym(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}class On extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new On,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new On,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new On,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new On;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jd extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Em{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new P;class nu{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sf=new P,rf=new et,af=new et,Tm=new P,of=new Pe,Aa=new P,Qo=new si,cf=new Pe,ec=new ji;class wm extends gt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Iu,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ut),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingBox.expandByPoint(Aa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new si),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Aa),this.boundingSphere.expandByPoint(Aa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(i),e.ray.intersectsSphere(Qo)!==!1&&(cf.copy(i).invert(),ec.copy(e.ray).applyMatrix4(cf),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Iu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ep?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rf.fromBufferAttribute(i.attributes.skinIndex,e),af.fromBufferAttribute(i.attributes.skinWeight,e),sf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=af.getComponent(r);if(a!==0){const o=rf.getComponent(r);of.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Tm.copy(sf).applyMatrix4(of),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class $d extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zd extends Ut{constructor(e=null,t=1,n=1,i,r,a,o,c,l=qt,d=qt,u,f){super(null,a,o,c,l,d,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lf=new Pe,Am=new Pe;class iu{constructor(e=[],t=[]){this.uuid=kn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Am;lf.multiplyMatrices(o,t[r]),lf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new iu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zd(t,e,e,vn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new $d),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class xl extends Ft{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new Pe,uf=new Pe,Ra=[],ff=new ut,Rm=new Pe,vr=new gt,yr=new si;class Qd extends gt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rm)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ut),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),ff.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(ff)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Rs),yr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Rs),uf.multiplyMatrices(n,Rs),vr.matrixWorld=uf,vr.raycast(e,Ra);for(let a=0,o=Ra.length;a<o;a++){const c=Ra[a];c.instanceId=r,c.object=this,t.push(c)}Ra.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zd(new Float32Array(i*this.count),i,this.count,Kl,Nn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const tc=new P,Cm=new P,Pm=new We;class qn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=tc.subVectors(n,t).cross(Cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Pm.getNormalMatrix(e),i=this.coplanarPoint(tc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new si,Lm=new Ue(.5,.5),Ca=new P;class su{constructor(e=new qn,t=new qn,n=new qn,i=new qn,r=new qn,a=new qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){const i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],d=r[4],u=r[5],f=r[6],h=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],_=r[13],b=r[14],v=r[15];if(i[0].setComponents(l-a,h-d,p-g,v-y).normalize(),i[1].setComponents(l+a,h+d,p+g,v+y).normalize(),i[2].setComponents(l+o,h+u,p+x,v+_).normalize(),i[3].setComponents(l-o,h-u,p-x,v-_).normalize(),n)i[4].setComponents(c,f,m,b).normalize(),i[5].setComponents(l-c,h-f,p-m,v-b).normalize();else if(i[4].setComponents(l-c,h-f,p-m,v-b).normalize(),t===Jn)i[5].setComponents(l+c,h+f,p+m,v+b).normalize();else if(t===po)i[5].setComponents(c,f,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){Qi.center.set(0,0,0);const t=Lm.distanceTo(e.center);return Qi.radius=.7071067811865476+t,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ca.x=i.normal.x>0?e.max.x:e.min.x,Ca.y=i.normal.y>0?e.max.y:e.min.y,Ca.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class eh extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mo=new P,go=new P,df=new Pe,Mr=new ji,Pa=new si,nc=new P,hf=new P;class ru extends dt{constructor(e=new rn,t=new eh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)mo.fromBufferAttribute(t,i-1),go.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=mo.distanceTo(go);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pa.copy(n.boundingSphere),Pa.applyMatrix4(i),Pa.radius+=r,e.ray.intersectsSphere(Pa)===!1)return;df.copy(i).invert(),Mr.copy(e.ray).applyMatrix4(df);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const h=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=l){const p=d.getX(x),y=d.getX(x+1),_=La(this,e,Mr,c,p,y,x);_&&t.push(_)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(h),p=La(this,e,Mr,c,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let x=h,m=g-1;x<m;x+=l){const p=La(this,e,Mr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=La(this,e,Mr,c,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function La(s,e,t,n,i,r,a){const o=s.geometry.attributes.position;if(mo.fromBufferAttribute(o,i),go.fromBufferAttribute(o,r),t.distanceSqToSegment(mo,go,nc,hf)>n)return;nc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(nc);if(!(l<e.near||l>e.far))return{distance:l,point:hf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}const pf=new P,mf=new P;class Dm extends ru{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pf.fromBufferAttribute(t,i),mf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pf.distanceTo(mf);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Im extends ru{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class th extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gf=new Pe,vl=new ji,Da=new si,Ia=new P;class nh extends dt{constructor(e=new rn,t=new th){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(i),Da.radius+=r,e.ray.intersectsSphere(Da)===!1)return;gf.copy(i).invert(),vl.copy(e.ray).applyMatrix4(gf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let g=f,x=h;g<x;g++){const m=l.getX(g);Ia.fromBufferAttribute(u,m),bf(Ia,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let g=f,x=h;g<x;g++)Ia.fromBufferAttribute(u,g),bf(Ia,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bf(s,e,t,n,i,r,a){const o=vl.distanceSqToPoint(s);if(o<t){const c=new P;vl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ih extends Ut{constructor(e,t,n=ds,i,r,a,o=qt,c=qt,l,d=$r,u=1){if(d!==$r&&d!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,i,r,a,o,c,d,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class sh extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class au extends rn{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const d=[],u=[],f=[],h=[];let g=0;const x=[],m=n/2;let p=0;y(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new Ot(u,3)),this.setAttribute("normal",new Ot(f,3)),this.setAttribute("uv",new Ot(h,2));function y(){const b=new P,v=new P;let E=0;const T=(t-e)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,A=M*(t-e)+e;for(let L=0;L<=i;L++){const D=L/i,F=D*c+o,O=Math.sin(F),B=Math.cos(F);v.x=A*O,v.y=-M*n+m,v.z=A*B,u.push(v.x,v.y,v.z),b.set(O,T,B).normalize(),f.push(b.x,b.y,b.z),h.push(D,1-M),S.push(g++)}x.push(S)}for(let C=0;C<i;C++)for(let S=0;S<r;S++){const M=x[S][C],A=x[S+1][C],L=x[S+1][C+1],D=x[S][C+1];(e>0||S!==0)&&(d.push(M,A,D),E+=3),(t>0||S!==r-1)&&(d.push(A,L,D),E+=3)}l.addGroup(p,E,0),p+=E}function _(b){const v=g,E=new Ue,T=new P;let C=0;const S=b===!0?e:t,M=b===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,m*M,0),f.push(0,M,0),h.push(.5,.5),g++;const A=g;for(let L=0;L<=i;L++){const F=L/i*c+o,O=Math.cos(F),B=Math.sin(F);T.x=S*B,T.y=m*M,T.z=S*O,u.push(T.x,T.y,T.z),f.push(0,M,0),E.x=O*.5+.5,E.y=B*.5*M+.5,h.push(E.x,E.y),g++}for(let L=0;L<i;L++){const D=v+L,F=A+L;b===!0?d.push(F,F+1,D):d.push(F+1,F,D),C+=3}l.addGroup(p,C,b===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ur extends rn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,d=c+1,u=e/o,f=t/c,h=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const y=p*f-a;for(let _=0;_<l;_++){const b=_*u-r;g.push(b,-y,0),x.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){const _=y+l*p,b=y+l*(p+1),v=y+1+l*(p+1),E=y+1+l*p;h.push(_,b,E),h.push(b,v,E)}this.setIndex(h),this.setAttribute("position",new Ot(g,3)),this.setAttribute("normal",new Ot(x,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class ou extends rn{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],d=new P,u=new P,f=new P;for(let h=0;h<=n;h++)for(let g=0;g<=i;g++){const x=g/i*r,m=h/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=i;g++){const x=(i+1)*h+g-1,m=(i+1)*(h-1)+g-1,p=(i+1)*(h-1)+g,y=(i+1)*h+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ia extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ri extends ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Um extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Wl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fm extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ua(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Om(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Bm(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function _f(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function rh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class oa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class km extends oa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Uu,endingEnd:Uu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fu:r=e,o=2*t-n;break;case Nu:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fu:a=e,c=2*n-t;break;case Nu:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,d=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,y=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,_=(-1-h)*m+(1.5+h)*x+.5*g,b=h*m-h*x;for(let v=0;v!==o;++v)r[v]=p*a[d+v]+y*a[l+v]+_*a[c+v]+b*a[u+v];return r}}class zm extends oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,d=(n-t)/(i-t),u=1-d;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*d;return r}}class Hm extends oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ua(t,this.TimeBufferType),this.values=Ua(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ua(e.times,Array),values:Ua(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new km(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case ea:t=this.InterpolantFactoryMethodLinear;break;case Lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return ea;case this.InterpolantFactoryMethodSmooth:return Lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Om(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Lo,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],d=e[o+1];if(l!==d&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,h=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[f+g]||x!==t[h+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[u+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Wn.prototype.ValueTypeName="";Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=ea;class fr extends Wn{constructor(e,t,n){super(e,t,n)}}fr.prototype.ValueTypeName="bool";fr.prototype.ValueBufferType=Array;fr.prototype.DefaultInterpolation=Qr;fr.prototype.InterpolantFactoryMethodLinear=void 0;fr.prototype.InterpolantFactoryMethodSmooth=void 0;class ah extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}ah.prototype.ValueTypeName="color";class nr extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}nr.prototype.ValueTypeName="number";class Vm extends oa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let d=l+o;l!==d;l+=4)Cn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ir extends Wn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Vm(this.times,this.values,this.getValueSize(),e)}}ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;class dr extends Wn{constructor(e,t,n){super(e,t,n)}}dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Qr;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends Wn{constructor(e,t,n,i){super(e,t,n,i)}}sr.prototype.ValueTypeName="vector";class Gm{constructor(e="",t=-1,n=[],i=Tp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=kn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Xm(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const d=Bm(c);c=_f(c,1,d),l=_f(l,1,d),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new nr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],d=l.name.match(r);if(d&&d.length>1){const u=d[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,h,g,x){if(h.length!==0){const m=[],p=[];rh(h,m,p,g),m.length!==0&&x.push(new u(f,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const h={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let x=0;x<f[g].morphTargets.length;x++)h[f[g].morphTargets[x]]=-1;for(const x in h){const m=[],p=[];for(let y=0;y!==f[g].morphTargets.length;++y){const _=f[g];m.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new nr(".morphTargetInfluence["+x+"]",m,p))}c=h.length*a}else{const h=".bones["+t[u].name+"]";n(sr,h+".position",f,"pos",i),n(ir,h+".quaternion",f,"rot",i),n(sr,h+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Wm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nr;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return ah;case"quaternion":return ir;case"bool":case"boolean":return fr;case"string":return dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Xm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wm(s.type);if(s.times===void 0){const t=[],n=[];rh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const bi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class jm{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){o++,r===!1&&i.onStart!==void 0&&i.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,i.onProgress!==void 0&&i.onProgress(d,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(d){i.onError!==void 0&&i.onError(d)},this.resolveURL=function(d){return c?c(d):d},this.setURLModifier=function(d){return c=d,this},this.addHandler=function(d,u){return l.push(d,u),this},this.removeHandler=function(d){const u=l.indexOf(d);return u!==-1&&l.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=l.length;u<f;u+=2){const h=l[u],g=l[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const qm=new jm;class hr{constructor(e){this.manager=e!==void 0?e:qm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}hr.DEFAULT_MATERIAL_NAME="__DEFAULT";const di={};class Km extends Error{constructor(e,t){super(e),this.response=t}}class oh extends hr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=bi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:i});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const d=di[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),h=f?parseInt(f):0,g=h!==0;let x=0;const m=new ReadableStream({start(p){y();function y(){u.read().then(({done:_,value:b})=>{if(_)p.close();else{x+=b.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:h});for(let E=0,T=d.length;E<T;E++){const C=d[E];C.onProgress&&C.onProgress(v)}p.enqueue(b),y()}},_=>{p.error(_)})}}});return new Response(m)}else throw new Km(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return l.json();default:if(o==="")return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,h=new TextDecoder(f);return l.arrayBuffer().then(g=>h.decode(g))}}}).then(l=>{bi.add(`file:${e}`,l);const d=di[e];delete di[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onLoad&&h.onLoad(l)}}).catch(l=>{const d=di[e];if(d===void 0)throw this.manager.itemError(e),l;delete di[e];for(let u=0,f=d.length;u<f;u++){const h=d[u];h.onError&&h.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Cs=new WeakMap;class Ym extends hr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=Cs.get(a);u===void 0&&(u=[],Cs.set(a,u)),u.push({onLoad:t,onError:i})}return a}const o=ta("img");function c(){d(),t&&t(this);const u=Cs.get(this)||[];for(let f=0;f<u.length;f++){const h=u[f];h.onLoad&&h.onLoad(this)}Cs.delete(this),r.manager.itemEnd(e)}function l(u){d(),i&&i(u),bi.remove(`image:${e}`);const f=Cs.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(u)}Cs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Jm extends hr{constructor(e){super(e)}load(e,t,n,i){const r=new Ut,a=new Ym(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class So extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $m extends So{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ic=new Pe,xf=new P,vf=new P;class cu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=ti,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new su,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;xf.setFromMatrixPosition(e.matrixWorld),t.position.copy(xf),vf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vf),t.updateMatrixWorld(),ic.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Zm extends cu{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ch extends So{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yf=new Pe,Sr=new P,sc=new P;class Qm extends cu{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ue(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Sr),sc.copy(n.position),sc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(sc),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf,n.coordinateSystem,n.reversedDepth)}}class lh extends So{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class lu extends Kd{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=d*this.view.offsetY,c=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eg extends cu{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends So{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new eg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Gr{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const rc=new WeakMap;class ng extends hr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=bi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(rc.has(a)===!0)i&&i(rc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return bi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),rc.set(c,l),bi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});bi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class ig extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const uu="\\[\\]\\.:\\/",sg=new RegExp("["+uu+"]","g"),fu="[^"+uu+"]",rg="[^"+uu.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",fu),og=/(WCOD+)?/.source.replace("WCOD",rg),cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fu),lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fu),ug=new RegExp("^"+ag+og+cg+lg+"$"),fg=["material","materials","bones","map"];class dg{constructor(e,t,n){const i=n||st.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class st{constructor(e,t,n){this.path=t,this.parsedPath=n||st.parseTrackName(t),this.node=st.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new st.Composite(e,t,n):new st(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sg,"")}static parseTrackName(e){const t=ug.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);fg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=st.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===l){l=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}st.Composite=dg;st.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};st.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};st.prototype.GetterByBindingType=[st.prototype._getValue_direct,st.prototype._getValue_array,st.prototype._getValue_arrayElement,st.prototype._getValue_toArray];st.prototype.SetterByBindingTypeAndVersioning=[[st.prototype._setValue_direct,st.prototype._setValue_direct_setNeedsUpdate,st.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[st.prototype._setValue_array,st.prototype._setValue_array_setNeedsUpdate,st.prototype._setValue_array_setMatrixWorldNeedsUpdate],[st.prototype._setValue_arrayElement,st.prototype._setValue_arrayElement_setNeedsUpdate,st.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[st.prototype._setValue_fromArray,st.prototype._setValue_fromArray_setNeedsUpdate,st.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Mf=new Pe;class uh{constructor(e,t,n=0,i=1/0){this.ray=new ji(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new tu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mf),this}intersectObject(e,t=!0,n=[]){return yl(e,this,n,t),n.sort(Sf),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)yl(e[i],this,n,t);return n.sort(Sf),n}}function Sf(s,e){return s.distance-e.distance}function yl(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)yl(r[a],e,t,!0)}}const Ef=new P,Fa=new P,Ps=new P,Ls=new P,ac=new P,hg=new P,pg=new P;class ni{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ef.subVectors(e,this.start),Fa.subVectors(this.end,this.start);const n=Fa.dot(Fa);let r=Fa.dot(Ef)/n;return t&&(r=Ve(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(e,t=hg,n=pg){const i=10000000000000001e-32;let r,a;const o=this.start,c=e.start,l=this.end,d=e.end;Ps.subVectors(l,o),Ls.subVectors(d,c),ac.subVectors(o,c);const u=Ps.dot(Ps),f=Ls.dot(Ls),h=Ls.dot(ac);if(u<=i&&f<=i)return t.copy(o),n.copy(c),t.sub(n),t.dot(t);if(u<=i)r=0,a=h/f,a=Ve(a,0,1);else{const g=Ps.dot(ac);if(f<=i)a=0,r=Ve(-g/u,0,1);else{const x=Ps.dot(Ls),m=u*f-x*x;m!==0?r=Ve((x*h-g*f)/m,0,1):r=0,a=(x*r+h)/f,a<0?(a=0,r=Ve(-g/u,0,1)):a>1&&(a=1,r=Ve((x-g)/u,0,1))}}return t.copy(o).add(Ps.multiplyScalar(r)),n.copy(c).add(Ls.multiplyScalar(a)),t.sub(n),t.dot(t)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}function Tf(s,e,t,n){const i=mg(n);switch(t){case Nd:return s*e;case Kl:return s*e/i.components*i.byteLength;case Yl:return s*e/i.components*i.byteLength;case Bd:return s*e*2/i.components*i.byteLength;case Jl:return s*e*2/i.components*i.byteLength;case Od:return s*e*3/i.components*i.byteLength;case vn:return s*e*4/i.components*i.byteLength;case $l:return s*e*4/i.components*i.byteLength;case no:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case so:case ro:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wc:case jc:return Math.max(s,16)*Math.max(e,8)/4;case Gc:case Xc:return Math.max(s,8)*Math.max(e,8)/2;case qc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ll:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ul:case fl:case dl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hl:case pl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(s){switch(s){case ti:case Dd:return{byteLength:1,components:1};case Yr:case Id:case cr:return{byteLength:2,components:1};case jl:case ql:return{byteLength:2,components:4};case ds:case Xl:case Nn:return{byteLength:4,components:1};case Ud:case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:aa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=aa);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function gg(s){const e=new WeakMap;function t(o,c){const l=o.array,d=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,d),o.onUploadCallback();let h;if(l instanceof Float32Array)h=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=s.HALF_FLOAT:h=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=s.SHORT;else if(l instanceof Uint32Array)h=s.UNSIGNED_INT;else if(l instanceof Int32Array)h=s.INT;else if(l instanceof Int8Array)h=s.BYTE;else if(l instanceof Uint8Array)h=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const d=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){const g=u[f],x=u[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){const x=u[h];s.bufferSubData(l,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
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
#endif`,xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sg=`#ifdef USE_AOMAP
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
#endif`,Eg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tg=`#ifdef USE_BATCHING
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
#endif`,wg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ig=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ng=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Og=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zg=`#define PI 3.141592653589793
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
} // validated`,Hg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vg=`vec3 transformedNormal = objectNormal;
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
#endif`,Gg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yg=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$g=`#ifdef USE_ENVMAP
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
#endif`,Zg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
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
#endif`,eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ib=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sb=`#ifdef USE_GRADIENTMAP
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
}`,rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ab=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cb=`uniform bool receiveShadow;
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
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pb=`PhysicalMaterial material;
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
#endif`,mb=`struct PhysicalMaterial {
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
}`,gb=`
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
#endif`,bb=`#if defined( RE_IndirectDiffuse )
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
#endif`,_b=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Eb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wb=`#if defined( USE_POINTS_UV )
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
#endif`,Ab=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Db=`#ifdef USE_MORPHTARGETS
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
#endif`,Ib=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ub=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ob=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kb=`#ifdef USE_NORMALMAP
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
#endif`,zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$b=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,b_=`uniform sampler2D t2D;
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,S_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`uniform float scale;
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
}`,C_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,U_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,B_=`#define PHONG
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
}`,k_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,X_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,q_=`uniform vec3 color;
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
}`,K_=`uniform float rotation;
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
}`,Y_=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:bg,alphahash_pars_fragment:_g,alphamap_fragment:xg,alphamap_pars_fragment:vg,alphatest_fragment:yg,alphatest_pars_fragment:Mg,aomap_fragment:Sg,aomap_pars_fragment:Eg,batching_pars_vertex:Tg,batching_vertex:wg,begin_vertex:Ag,beginnormal_vertex:Rg,bsdfs:Cg,iridescence_fragment:Pg,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ig,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Ng,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:kg,common:zg,cube_uv_reflection_fragment:Hg,defaultnormal_vertex:Vg,displacementmap_pars_vertex:Gg,displacementmap_vertex:Wg,emissivemap_fragment:Xg,emissivemap_pars_fragment:jg,colorspace_fragment:qg,colorspace_pars_fragment:Kg,envmap_fragment:Yg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:$g,envmap_pars_vertex:Zg,envmap_physical_pars_fragment:lb,envmap_vertex:Qg,fog_vertex:eb,fog_pars_vertex:tb,fog_fragment:nb,fog_pars_fragment:ib,gradientmap_pars_fragment:sb,lightmap_pars_fragment:rb,lights_lambert_fragment:ab,lights_lambert_pars_fragment:ob,lights_pars_begin:cb,lights_toon_fragment:ub,lights_toon_pars_fragment:fb,lights_phong_fragment:db,lights_phong_pars_fragment:hb,lights_physical_fragment:pb,lights_physical_pars_fragment:mb,lights_fragment_begin:gb,lights_fragment_maps:bb,lights_fragment_end:_b,logdepthbuf_fragment:xb,logdepthbuf_pars_fragment:vb,logdepthbuf_pars_vertex:yb,logdepthbuf_vertex:Mb,map_fragment:Sb,map_pars_fragment:Eb,map_particle_fragment:Tb,map_particle_pars_fragment:wb,metalnessmap_fragment:Ab,metalnessmap_pars_fragment:Rb,morphinstance_vertex:Cb,morphcolor_vertex:Pb,morphnormal_vertex:Lb,morphtarget_pars_vertex:Db,morphtarget_vertex:Ib,normal_fragment_begin:Ub,normal_fragment_maps:Fb,normal_pars_fragment:Nb,normal_pars_vertex:Ob,normal_vertex:Bb,normalmap_pars_fragment:kb,clearcoat_normal_fragment_begin:zb,clearcoat_normal_fragment_maps:Hb,clearcoat_pars_fragment:Vb,iridescence_pars_fragment:Gb,opaque_fragment:Wb,packing:Xb,premultiplied_alpha_fragment:jb,project_vertex:qb,dithering_fragment:Kb,dithering_pars_fragment:Yb,roughnessmap_fragment:Jb,roughnessmap_pars_fragment:$b,shadowmap_pars_fragment:Zb,shadowmap_pars_vertex:Qb,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:a_,specularmap_pars_fragment:o_,tonemapping_fragment:c_,tonemapping_pars_fragment:l_,transmission_fragment:u_,transmission_pars_fragment:f_,uv_pars_fragment:d_,uv_pars_vertex:h_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:b_,backgroundCube_vert:__,backgroundCube_frag:x_,cube_vert:v_,cube_frag:y_,depth_vert:M_,depth_frag:S_,distanceRGBA_vert:E_,distanceRGBA_frag:T_,equirect_vert:w_,equirect_frag:A_,linedashed_vert:R_,linedashed_frag:C_,meshbasic_vert:P_,meshbasic_frag:L_,meshlambert_vert:D_,meshlambert_frag:I_,meshmatcap_vert:U_,meshmatcap_frag:F_,meshnormal_vert:N_,meshnormal_frag:O_,meshphong_vert:B_,meshphong_frag:k_,meshphysical_vert:z_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:W_,points_frag:X_,shadow_vert:j_,shadow_frag:q_,sprite_vert:K_,sprite_frag:Y_},ue={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Kn={basic:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Wt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Wt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Wt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new De(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Wt([ue.points,ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Wt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Wt([ue.common,ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Wt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Wt([ue.sprite,ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Wt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Wt([ue.lights,ue.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Kn.physical={uniforms:Wt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Na={r:0,b:0,g:0},es=new Hn,J_=new Pe;function $_(s,e,t,n,i,r,a){const o=new De(0);let c=r===!0?0:1,l,d,u=null,f=0,h=null;function g(_){let b=_.isScene===!0?_.background:null;return b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b}function x(_){let b=!1;const v=g(_);v===null?p(o,c):v&&v.isColor&&(p(v,1),b=!0);const E=s.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===Mo)?(d===void 0&&(d=new gt(new hs(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:tr(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),es.copy(b.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(J_.makeRotationFromEuler(es)),d.material.toneMapped=$e.getTransfer(v.colorSpace)!==at,(u!==v||f!==v.version||h!==s.toneMapping)&&(d.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new gt(new ur(2,2),new hn({name:"BackgroundMaterial",uniforms:tr(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=$e.getTransfer(v.colorSpace)!==at,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==s.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,b){_.getRGB(Na,jd(s)),n.buffers.color.setClear(Na.r,Na.g,Na.b,b,a)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,b=1){o.set(_),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m,dispose:y}}function Z_(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(M,A,L,D,F){let O=!1;const B=u(D,L,A);r!==B&&(r=B,l(r.object)),O=h(M,D,L,F),O&&g(M,D,L,F),F!==null&&e.update(F,s.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(M,A,L,D),F!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return s.createVertexArray()}function l(M){return s.bindVertexArray(M)}function d(M){return s.deleteVertexArray(M)}function u(M,A,L){const D=L.wireframe===!0;let F=n[M.id];F===void 0&&(F={},n[M.id]=F);let O=F[A.id];O===void 0&&(O={},F[A.id]=O);let B=O[D];return B===void 0&&(B=f(c()),O[D]=B),B}function f(M){const A=[],L=[],D=[];for(let F=0;F<t;F++)A[F]=0,L[F]=0,D[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:L,attributeDivisors:D,object:M,attributes:{},index:null}}function h(M,A,L,D){const F=r.attributes,O=A.attributes;let B=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){const ae=F[G];let pe=O[G];if(pe===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(pe=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(pe=M.instanceColor)),ae===void 0||ae.attribute!==pe||pe&&ae.data!==pe.data)return!0;B++}return r.attributesNum!==B||r.index!==D}function g(M,A,L,D){const F={},O=A.attributes;let B=0;const j=L.getAttributes();for(const G in j)if(j[G].location>=0){let ae=O[G];ae===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ae=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ae=M.instanceColor));const pe={};pe.attribute=ae,ae&&ae.data&&(pe.data=ae.data),F[G]=pe,B++}r.attributes=F,r.attributesNum=B,r.index=D}function x(){const M=r.newAttributes;for(let A=0,L=M.length;A<L;A++)M[A]=0}function m(M){p(M,0)}function p(M,A){const L=r.newAttributes,D=r.enabledAttributes,F=r.attributeDivisors;L[M]=1,D[M]===0&&(s.enableVertexAttribArray(M),D[M]=1),F[M]!==A&&(s.vertexAttribDivisor(M,A),F[M]=A)}function y(){const M=r.newAttributes,A=r.enabledAttributes;for(let L=0,D=A.length;L<D;L++)A[L]!==M[L]&&(s.disableVertexAttribArray(L),A[L]=0)}function _(M,A,L,D,F,O,B){B===!0?s.vertexAttribIPointer(M,A,L,F,O):s.vertexAttribPointer(M,A,L,D,F,O)}function b(M,A,L,D){x();const F=D.attributes,O=L.getAttributes(),B=A.defaultAttributeValues;for(const j in O){const G=O[j];if(G.location>=0){let ee=F[j];if(ee===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(ee=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(ee=M.instanceColor)),ee!==void 0){const ae=ee.normalized,pe=ee.itemSize,Oe=e.get(ee);if(Oe===void 0)continue;const Je=Oe.buffer,Ze=Oe.type,te=Oe.bytesPerElement,V=Ze===s.INT||Ze===s.UNSIGNED_INT||ee.gpuType===Xl;if(ee.isInterleavedBufferAttribute){const q=ee.data,K=q.stride,oe=ee.offset;if(q.isInstancedInterleavedBuffer){for(let le=0;le<G.locationSize;le++)p(G.location+le,q.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let le=0;le<G.locationSize;le++)m(G.location+le);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let le=0;le<G.locationSize;le++)_(G.location+le,pe/G.locationSize,Ze,ae,K*te,(oe+pe/G.locationSize*le)*te,V)}else{if(ee.isInstancedBufferAttribute){for(let q=0;q<G.locationSize;q++)p(G.location+q,ee.meshPerAttribute);M.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let q=0;q<G.locationSize;q++)m(G.location+q);s.bindBuffer(s.ARRAY_BUFFER,Je);for(let q=0;q<G.locationSize;q++)_(G.location+q,pe/G.locationSize,Ze,ae,pe*te,pe/G.locationSize*q*te,V)}}else if(B!==void 0){const ae=B[j];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(G.location,ae);break;case 3:s.vertexAttrib3fv(G.location,ae);break;case 4:s.vertexAttrib4fv(G.location,ae);break;default:s.vertexAttrib1fv(G.location,ae)}}}}y()}function v(){C();for(const M in n){const A=n[M];for(const L in A){const D=A[L];for(const F in D)d(D[F].object),delete D[F];delete A[L]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const A=n[M.id];for(const L in A){const D=A[L];for(const F in D)d(D[F].object),delete D[F];delete A[L]}delete n[M.id]}function T(M){for(const A in n){const L=n[A];if(L[M.id]===void 0)continue;const D=L[M.id];for(const F in D)d(D[F].object),delete D[F];delete L[M.id]}}function C(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:S,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function Q_(s,e,t){let n;function i(l){n=l}function r(l,d){s.drawArrays(n,l,d),t.update(d,n,1)}function a(l,d,u){u!==0&&(s.drawArraysInstanced(n,l,d,u),t.update(d,n,u))}function o(l,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,n,1)}function c(l,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<l.length;g++)a(l[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,l,0,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*f[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function ex(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==vn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===cr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ti&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Nn&&!C)}function c(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const d=c(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,maxSamples:E}}function tx(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new qn,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||i;return i=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?d(null):l();else{const y=r?0:n,_=y*4;let b=p.clippingState||null;c.value=b,b=d(g,f,_,h);for(let v=0;v!==_;++v)b[v]=t[v];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=h;_!==x;++_,b+=4)a.copy(u[_]).applyMatrix4(y,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function nx(s){let e=new WeakMap;function t(a,o){return o===Hc?a.mapping=$s:o===Vc&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hc||o===Vc)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Mm(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Vs=4,wf=[.125,.215,.35,.446,.526,.582],ls=20,oc=new lu,Af=new De;let cc=null,lc=0,uc=0,fc=!1;const os=(1+Math.sqrt(5))/2,Ds=1/os,Rf=[new P(-os,Ds,0),new P(os,Ds,0),new P(-Ds,0,os),new P(Ds,0,os),new P(0,os,-Ds),new P(0,os,Ds),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],ix=new P;class Ml{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100,r={}){const{size:a=256,position:o=ix}=r;cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(cc,lc,uc),this._renderer.xr.enabled=fc,e.scissorTest=!1,Oa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$s||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),fc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:cr,format:vn,colorSpace:Yt,depthBuffer:!1},i=Cf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cf(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sx(r)),this._blurMaterial=rx(r,e,t)}return i}_compileMaterial(e){const t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,oc)}_sceneToCubeUV(e,t,n,i,r){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Af),u.toneMapping=Hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const x=new gi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),m=new gt(new hs,x);let p=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,p=!0):(x.color.copy(Af),p=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+d[_],r.y,r.z)):b===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+d[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+d[_]));const v=this._cubeSize;Oa(i,b*v,_>2?v:0,v,v),u.setRenderTarget(i),p&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===$s||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pf());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new gt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Oa(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,oc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Rf[(i-r-1)%Rf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new gt(this._lodPlanes[i],l),f=l.uniforms,h=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ls-1),x=r/g,m=isFinite(r)?1+Math.floor(d*x):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const p=[];let y=0;for(let T=0;T<ls;++T){const C=T/x,S=Math.exp(-C*C/2);p.push(S),T===0?y+=S:T<m&&(y+=2*S)}for(let T=0;T<p.length;T++)p[T]=p[T]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const b=this._sizeLods[i],v=3*b*(i>_-Vs?i-_+Vs:0),E=4*(this._cubeSize-b);Oa(t,v,E,3*b,2*b),c.setRenderTarget(t),c.render(u,oc)}}function sx(s){const e=[],t=[],n=[];let i=s;const r=s-Vs+1+wf.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Vs?c=wf[a-s+Vs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),d=-l,u=1+l,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*h),_=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let E=0;E<h;E++){const T=E%3*2/3-1,C=E>2?0:-1,S=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];y.set(S,x*g*E),_.set(f,m*g*E);const M=[E,E,E,E,E,E];b.set(M,p*g*E)}const v=new rn;v.setAttribute("position",new Ft(y,x)),v.setAttribute("uv",new Ft(_,m)),v.setAttribute("faceIndex",new Ft(b,p)),e.push(v),i>Vs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Cf(s,e,t){const n=new Wi(s,e,t);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oa(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function rx(s,e,t){const n=new Float32Array(ls),i=new P(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:du(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Pf(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:du(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Lf(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function du(){return`

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
	`}function ax(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Hc||c===Vc,d=c===$s||c===Zs;if(l||d){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ml(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const h=o.image;return l&&h&&h.height>0||d&&h&&i(h)?(t===null&&(t=new Ml(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let d=0;d<l;d++)o[d]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ox(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&na("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cx(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const h in f)e.update(f[h],s.ARRAY_BUFFER)}function l(u){const f=[],h=u.index,g=u.attributes.position;let x=0;if(h!==null){const y=h.array;x=h.version;for(let _=0,b=y.length;_<b;_+=3){const v=y[_+0],E=y[_+1],T=y[_+2];f.push(v,E,E,T,T,v)}}else if(g!==void 0){const y=g.array;x=g.version;for(let _=0,b=y.length/3-1;_<b;_+=3){const v=_+0,E=_+1,T=_+2;f.push(v,E,E,T,T,v)}}else return;const m=new(Hd(f)?Xd:Wd)(f,1);m.version=x;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function d(u){const f=r.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:d}}function lx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,h){s.drawElements(n,h,r,f*a),t.update(h,n,1)}function l(f,h,g){g!==0&&(s.drawElementsInstanced(n,h,r,f*a,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function u(f,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/a,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,r,f,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=h[y]*x[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function ux(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fx(s,e,t){const n=new WeakMap,i=new et;function r(a,o,c){const l=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var h=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let v=o.attributes.position.count*b,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*E*4*u),C=new Vd(T,v,E,u);C.type=Nn,C.needsUpdate=!0;const S=b*4;for(let A=0;A<u;A++){const L=p[A],D=y[A],F=_[A],O=v*E*4*A;for(let B=0;B<L.count;B++){const j=B*S;g===!0&&(i.fromBufferAttribute(L,B),T[O+j+0]=i.x,T[O+j+1]=i.y,T[O+j+2]=i.z,T[O+j+3]=0),x===!0&&(i.fromBufferAttribute(D,B),T[O+j+4]=i.x,T[O+j+5]=i.y,T[O+j+6]=i.z,T[O+j+7]=0),m===!0&&(i.fromBufferAttribute(F,B),T[O+j+8]=i.x,T[O+j+9]=i.y,T[O+j+10]=i.z,T[O+j+11]=F.itemSize===4?i.w:1)}}f={count:u,texture:C,size:new Ue(v,E)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",x),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,d=c.geometry,u=e.get(c,d);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const dh=new Ut,Df=new ih(1,1),hh=new Vd,ph=new am,mh=new Yd,If=[],Uf=[],Ff=new Float32Array(16),Nf=new Float32Array(9),Of=new Float32Array(4);function pr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=If[i];if(r===void 0&&(r=new Float32Array(i),If[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Pt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Eo(s,e){let t=Uf[e];t===void 0&&(t=new Int32Array(e),Uf[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function px(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2fv(this.addr,e),Pt(t,e)}}function mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;s.uniform3fv(this.addr,e),Pt(t,e)}}function gx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4fv(this.addr,e),Pt(t,e)}}function bx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Of.set(n),s.uniformMatrix2fv(this.addr,!1,Of),Pt(t,n)}}function _x(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Nf.set(n),s.uniformMatrix3fv(this.addr,!1,Nf),Pt(t,n)}}function xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Ct(t,n))return;Ff.set(n),s.uniformMatrix4fv(this.addr,!1,Ff),Pt(t,n)}}function vx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2iv(this.addr,e),Pt(t,e)}}function Mx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3iv(this.addr,e),Pt(t,e)}}function Sx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4iv(this.addr,e),Pt(t,e)}}function Ex(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Tx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;s.uniform2uiv(this.addr,e),Pt(t,e)}}function wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;s.uniform3uiv(this.addr,e),Pt(t,e)}}function Ax(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;s.uniform4uiv(this.addr,e),Pt(t,e)}}function Rx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=zd,r=Df):r=dh,t.setTexture2D(e||r,i)}function Cx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||ph,i)}function Px(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||mh,i)}function Lx(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||hh,i)}function Dx(s){switch(s){case 5126:return hx;case 35664:return px;case 35665:return mx;case 35666:return gx;case 35674:return bx;case 35675:return _x;case 35676:return xx;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return Ex;case 36294:return Tx;case 36295:return wx;case 36296:return Ax;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ix(s,e){s.uniform1fv(this.addr,e)}function Ux(s,e){const t=pr(e,this.size,2);s.uniform2fv(this.addr,t)}function Fx(s,e){const t=pr(e,this.size,3);s.uniform3fv(this.addr,t)}function Nx(s,e){const t=pr(e,this.size,4);s.uniform4fv(this.addr,t)}function Ox(s,e){const t=pr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bx(s,e){const t=pr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kx(s,e){const t=pr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zx(s,e){s.uniform1iv(this.addr,e)}function Hx(s,e){s.uniform2iv(this.addr,e)}function Vx(s,e){s.uniform3iv(this.addr,e)}function Gx(s,e){s.uniform4iv(this.addr,e)}function Wx(s,e){s.uniform1uiv(this.addr,e)}function Xx(s,e){s.uniform2uiv(this.addr,e)}function jx(s,e){s.uniform3uiv(this.addr,e)}function qx(s,e){s.uniform4uiv(this.addr,e)}function Kx(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||dh,r[a])}function Yx(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||ph,r[a])}function Jx(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||mh,r[a])}function $x(s,e,t){const n=this.cache,i=e.length,r=Eo(t,i);Ct(n,r)||(s.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||hh,r[a])}function Zx(s){switch(s){case 5126:return Ix;case 35664:return Ux;case 35665:return Fx;case 35666:return Nx;case 35674:return Ox;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return zx;case 35667:case 35671:return Hx;case 35668:case 35672:return Vx;case 35669:case 35673:return Gx;case 5125:return Wx;case 36294:return Xx;case 36295:return jx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return $x}}class Qx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dx(t.type)}}class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zx(t.type)}}class t0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function Bf(s,e){s.seq.push(e),s.map[e.id]=e}function n0(s,e,t){const n=s.name,i=n.length;for(dc.lastIndex=0;;){const r=dc.exec(n),a=dc.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Bf(t,l===void 0?new Qx(o,s,e):new e0(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new t0(o),Bf(t,u)),t=u}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);n0(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function kf(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const i0=37297;let s0=0;function r0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const zf=new We;function a0(s){$e._getMatrix(zf,$e.workingColorSpace,s);const e=`mat3( ${zf.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case ho:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hf(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+r0(s.getShaderSource(e),o)}else return r}function o0(s,e){const t=a0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c0(s,e){let t;switch(e){case _p:t="Linear";break;case xp:t="Reinhard";break;case vp:t="Cineon";break;case yp:t="ACESFilmic";break;case Cd:t="AgX";break;case Sp:t="Neutral";break;case Mp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new P;function l0(){$e.getLuminanceCoefficients(Ba);const s=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function f0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function d0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Fr(s){return s!==""}function Vf(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Gf(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(s){return s.replace(h0,m0)}const p0=new Map;function m0(s,e){let t=je[e];if(t===void 0){const n=p0.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sl(t)}const g0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wf(s){return s.replace(g0,b0)}function b0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Xf(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function _0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Rd?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===$h?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case $s:case Zs:e="ENVMAP_TYPE_CUBE";break;case Mo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Zs:e="ENVMAP_MODE_REFRACTION";break}return e}function y0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Wl:e="ENVMAP_BLENDING_MULTIPLY";break;case gp:e="ENVMAP_BLENDING_MIX";break;case bp:e="ENVMAP_BLENDING_ADD";break}return e}function M0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S0(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=_0(t),l=x0(t),d=v0(t),u=y0(t),f=M0(t),h=u0(t),g=f0(r),x=i.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Fr).join(`
`),p.length>0&&(p+=`
`)):(m=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),p=[Xf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?je.tonemapping_pars_fragment:"",t.toneMapping!==Hi?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,o0("linearToOutputTexel",t.outputColorSpace),l0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Sl(a),a=Vf(a,t),a=Gf(a,t),o=Sl(o),o=Vf(o,t),o=Gf(o,t),a=Wf(a),o=Wf(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=y+m+a,b=y+p+o,v=kf(i,i.VERTEX_SHADER,_),E=kf(i,i.FRAGMENT_SHADER,b);i.attachShader(x,v),i.attachShader(x,E),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(A){if(s.debug.checkShaderErrors){const L=i.getProgramInfoLog(x)||"",D=i.getShaderInfoLog(v)||"",F=i.getShaderInfoLog(E)||"",O=L.trim(),B=D.trim(),j=F.trim();let G=!0,ee=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(G=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,v,E);else{const ae=Hf(i,v,"vertex"),pe=Hf(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+ae+`
`+pe)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(B===""||j==="")&&(ee=!1);ee&&(A.diagnostics={runnable:G,programLog:O,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:p}})}i.deleteShader(v),i.deleteShader(E),C=new ao(i,x),S=d0(i,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,i0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=s0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=v,this.fragmentShader=E,this}let E0=0;class T0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=E0++,this.code=e,this.usedTimes=0}}function A0(s,e,t,n,i,r,a){const o=new tu,c=new T0,l=new Set,d=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,A,L,D){const F=L.fog,O=D.geometry,B=S.isMeshStandardMaterial?L.environment:null,j=(S.isMeshStandardMaterial?t:e).get(S.envMap||B),G=j&&j.mapping===Mo?j.image.height:null,ee=g[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const ae=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,pe=ae!==void 0?ae.length:0;let Oe=0;O.morphAttributes.position!==void 0&&(Oe=1),O.morphAttributes.normal!==void 0&&(Oe=2),O.morphAttributes.color!==void 0&&(Oe=3);let Je,Ze,te,V;if(ee){const nt=Kn[ee];Je=nt.vertexShader,Ze=nt.fragmentShader}else Je=S.vertexShader,Ze=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),V=c.getFragmentShaderID(S);const q=s.getRenderTarget(),K=s.state.buffers.depth.getReversed(),oe=D.isInstancedMesh===!0,le=D.isBatchedMesh===!0,Ce=!!S.map,Ye=!!S.matcap,U=!!j,Qe=!!S.aoMap,Fe=!!S.lightMap,Ie=!!S.bumpMap,xe=!!S.normalMap,pt=!!S.displacementMap,ve=!!S.emissiveMap,Xe=!!S.metalnessMap,Lt=!!S.roughnessMap,Tt=S.anisotropy>0,I=S.clearcoat>0,w=S.dispersion>0,H=S.iridescence>0,J=S.sheen>0,Z=S.transmission>0,Y=Tt&&!!S.anisotropyMap,Ae=I&&!!S.clearcoatMap,re=I&&!!S.clearcoatNormalMap,Me=I&&!!S.clearcoatRoughnessMap,Ee=H&&!!S.iridescenceMap,ie=H&&!!S.iridescenceThicknessMap,he=J&&!!S.sheenColorMap,Be=J&&!!S.sheenRoughnessMap,Te=!!S.specularMap,fe=!!S.specularColorMap,Ge=!!S.specularIntensityMap,N=Z&&!!S.transmissionMap,se=Z&&!!S.thicknessMap,ce=!!S.gradientMap,ge=!!S.alphaMap,Q=S.alphaTest>0,$=!!S.alphaHash,_e=!!S.extensions;let He=Hi;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(He=s.toneMapping);const ct={shaderID:ee,shaderType:S.type,shaderName:S.name,vertexShader:Je,fragmentShader:Ze,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:V,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:le,batchingColor:le&&D._colorsTexture!==null,instancing:oe,instancingColor:oe&&D.instanceColor!==null,instancingMorph:oe&&D.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Yt,alphaToCoverage:!!S.alphaToCoverage,map:Ce,matcap:Ye,envMap:U,envMapMode:U&&j.mapping,envMapCubeUVHeight:G,aoMap:Qe,lightMap:Fe,bumpMap:Ie,normalMap:xe,displacementMap:f&&pt,emissiveMap:ve,normalMapObjectSpace:xe&&S.normalMapType===Cp,normalMapTangentSpace:xe&&S.normalMapType===Zl,metalnessMap:Xe,roughnessMap:Lt,anisotropy:Tt,anisotropyMap:Y,clearcoat:I,clearcoatMap:Ae,clearcoatNormalMap:re,clearcoatRoughnessMap:Me,dispersion:w,iridescence:H,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:J,sheenColorMap:he,sheenRoughnessMap:Be,specularMap:Te,specularColorMap:fe,specularIntensityMap:Ge,transmission:Z,transmissionMap:N,thicknessMap:se,gradientMap:ce,opaque:S.transparent===!1&&S.blending===Xs&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:Q,alphaHash:$,combine:S.combine,mapUv:Ce&&x(S.map.channel),aoMapUv:Qe&&x(S.aoMap.channel),lightMapUv:Fe&&x(S.lightMap.channel),bumpMapUv:Ie&&x(S.bumpMap.channel),normalMapUv:xe&&x(S.normalMap.channel),displacementMapUv:pt&&x(S.displacementMap.channel),emissiveMapUv:ve&&x(S.emissiveMap.channel),metalnessMapUv:Xe&&x(S.metalnessMap.channel),roughnessMapUv:Lt&&x(S.roughnessMap.channel),anisotropyMapUv:Y&&x(S.anisotropyMap.channel),clearcoatMapUv:Ae&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:he&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:fe&&x(S.specularColorMap.channel),specularIntensityMapUv:Ge&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:se&&x(S.thicknessMap.channel),alphaMapUv:ge&&x(S.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(xe||Tt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!O.attributes.uv&&(Ce||ge),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:D.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:He,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:ve&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:_e&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&S.extensions.multiDraw===!0||le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const A in S.defines)M.push(A),M.push(S.defines[A]);return S.isRawShaderMaterial===!1&&(y(M,S),_(M,S),M.push(s.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function y(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function _(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=g[S.type];let A;if(M){const L=Kn[M];A=qd.clone(L.uniforms)}else A=S.uniforms;return A}function v(S,M){let A;for(let L=0,D=d.length;L<D;L++){const F=d[L];if(F.cacheKey===M){A=F,++A.usedTimes;break}}return A===void 0&&(A=new S0(s,M,S,r),d.push(A)),A}function E(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function T(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:d,dispose:C}}function R0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function C0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function jf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qf(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,h,g,x,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,f,h,g,x,m){const p=a(u,f,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function c(u,f,h,g,x,m){const p=a(u,f,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function l(u,f){t.length>1&&t.sort(u||C0),n.length>1&&n.sort(f||jf),i.length>1&&i.sort(f||jf)}function d(){for(let u=e,f=s.length;u<f;u++){const h=s[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:d,sort:l}}function P0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new qf,s.set(n,[a])):i>=r.length?(a=new qf,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function L0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new De};break;case"SpotLight":t={position:new P,direction:new P,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function D0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let I0=0;function U0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function F0(s){const e=new L0,t=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new P);const i=new P,r=new Pe,a=new Pe;function o(l){let d=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,y=0,_=0,b=0,v=0,E=0,T=0;l.sort(U0);for(let S=0,M=l.length;S<M;S++){const A=l[S],L=A.color,D=A.intensity,F=A.distance,O=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)d+=L.r*D,u+=L.g*D,f+=L.b*D;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],D);T++}else if(A.isDirectionalLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.directionalShadow[h]=G,n.directionalShadowMap[h]=O,n.directionalShadowMatrix[h]=A.shadow.matrix,y++}n.directional[h]=B,h++}else if(A.isSpotLight){const B=e.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(L).multiplyScalar(D),B.distance=F,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[x]=B;const j=A.shadow;if(A.map&&(n.spotLightMap[v]=A.map,v++,j.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[x]=j.matrix,A.castShadow){const G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=O,b++}x++}else if(A.isRectAreaLight){const B=e.get(A);B.color.copy(L).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=B,m++}else if(A.isPointLight){const B=e.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){const j=A.shadow,G=t.get(A);G.shadowIntensity=j.intensity,G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=B,g++}else if(A.isHemisphereLight){const B=e.get(A);B.skyColor.copy(A.color).multiplyScalar(D),B.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[p]=B,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==h||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==b||C.numSpotMaps!==v||C.numLightProbes!==T)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=b+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=T,C.directionalLength=h,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=b,C.numSpotMaps=v,C.numLightProbes=T,n.version=I0++)}function c(l,d){let u=0,f=0,h=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){const _=l[p];if(_.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(_.isSpotLight){const b=n.spot[h];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(_.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Kf(s){const e=new F0(s),t=[],n=[];function i(d){l.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function c(d){e.setupView(t,d)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function N0(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Kf(s),e.set(i,[o])):r>=a.length?(o=new Kf(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const O0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B0=`uniform sampler2D shadow_pass;
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
}`;function k0(s,e,t){let n=new su;const i=new Ue,r=new Ue,a=new et,o=new Fm({depthPacking:Rp}),c=new Nm,l={},d=t.maxTextureSize,u={[An]:Ht,[Ht]:An,[tn]:tn},f=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:O0,fragmentShader:B0}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new gt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rd;let p=this.type;this.render=function(E,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const S=s.getRenderTarget(),M=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),L=s.state;L.setBlending(zi),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=p!==hi&&this.type===hi,F=p===hi&&this.type!==hi;for(let O=0,B=E.length;O<B;O++){const j=E[O],G=j.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const ee=G.getFrameExtents();if(i.multiply(ee),r.copy(G.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/ee.x),i.x=r.x*ee.x,G.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/ee.y),i.y=r.y*ee.y,G.mapSize.y=r.y)),G.map===null||D===!0||F===!0){const pe=this.type!==hi?{minFilter:qt,magFilter:qt}:{};G.map!==null&&G.map.dispose(),G.map=new Wi(i.x,i.y,pe),G.map.texture.name=j.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ae=G.getViewportCount();for(let pe=0;pe<ae;pe++){const Oe=G.getViewport(pe);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),L.viewport(a),G.updateMatrices(j,pe),n=G.getFrustum(),b(T,C,G.camera,j,this.type)}G.isPointLightShadow!==!0&&this.type===hi&&y(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,M,A)};function y(E,T){const C=e.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,h.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Wi(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(T,null,C,f,x,null),h.uniforms.shadow_pass.value=E.mapPass.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(T,null,C,h,x,null)}function _(E,T,C,S){let M=null;const A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)M=A;else if(M=C.isPointLight===!0?c:o,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){const L=M.uuid,D=T.uuid;let F=l[L];F===void 0&&(F={},l[L]=F);let O=F[D];O===void 0&&(O=M.clone(),F[D]=O,T.addEventListener("dispose",v)),M=O}if(M.visible=T.visible,M.wireframe=T.wireframe,S===hi?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:u[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=s.properties.get(M);L.light=C}return M}function b(E,T,C,S,M){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===hi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const D=e.update(E),F=E.material;if(Array.isArray(F)){const O=D.groups;for(let B=0,j=O.length;B<j;B++){const G=O[B],ee=F[G.materialIndex];if(ee&&ee.visible){const ae=_(E,ee,S,M);E.onBeforeShadow(s,E,T,C,D,ae,G),s.renderBufferDirect(C,null,D,ae,E,G),E.onAfterShadow(s,E,T,C,D,ae,G)}}}else if(F.visible){const O=_(E,F,S,M);E.onBeforeShadow(s,E,T,C,D,O,null),s.renderBufferDirect(C,null,D,O,E,null),E.onAfterShadow(s,E,T,C,D,O,null)}}const L=E.children;for(let D=0,F=L.length;D<F;D++)b(L[D],T,C,S,M)}function v(E){E.target.removeEventListener("dispose",v);for(const C in l){const S=l[C],M=E.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const z0={[Uc]:Fc,[Nc]:kc,[Oc]:zc,[Js]:Bc,[Fc]:Uc,[kc]:Nc,[zc]:Oc,[Bc]:Js};function H0(s,e){function t(){let N=!1;const se=new et;let ce=null;const ge=new et(0,0,0,0);return{setMask:function(Q){ce!==Q&&!N&&(s.colorMask(Q,Q,Q,Q),ce=Q)},setLocked:function(Q){N=Q},setClear:function(Q,$,_e,He,ct){ct===!0&&(Q*=He,$*=He,_e*=He),se.set(Q,$,_e,He),ge.equals(se)===!1&&(s.clearColor(Q,$,_e,He),ge.copy(se))},reset:function(){N=!1,ce=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,se=!1,ce=null,ge=null,Q=null;return{setReversed:function($){if(se!==$){const _e=e.get("EXT_clip_control");$?_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.ZERO_TO_ONE_EXT):_e.clipControlEXT(_e.LOWER_LEFT_EXT,_e.NEGATIVE_ONE_TO_ONE_EXT),se=$;const He=Q;Q=null,this.setClear(He)}},getReversed:function(){return se},setTest:function($){$?q(s.DEPTH_TEST):K(s.DEPTH_TEST)},setMask:function($){ce!==$&&!N&&(s.depthMask($),ce=$)},setFunc:function($){if(se&&($=z0[$]),ge!==$){switch($){case Uc:s.depthFunc(s.NEVER);break;case Fc:s.depthFunc(s.ALWAYS);break;case Nc:s.depthFunc(s.LESS);break;case Js:s.depthFunc(s.LEQUAL);break;case Oc:s.depthFunc(s.EQUAL);break;case Bc:s.depthFunc(s.GEQUAL);break;case kc:s.depthFunc(s.GREATER);break;case zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ge=$}},setLocked:function($){N=$},setClear:function($){Q!==$&&(se&&($=1-$),s.clearDepth($),Q=$)},reset:function(){N=!1,ce=null,ge=null,Q=null,se=!1}}}function i(){let N=!1,se=null,ce=null,ge=null,Q=null,$=null,_e=null,He=null,ct=null;return{setTest:function(nt){N||(nt?q(s.STENCIL_TEST):K(s.STENCIL_TEST))},setMask:function(nt){se!==nt&&!N&&(s.stencilMask(nt),se=nt)},setFunc:function(nt,ai,Xn){(ce!==nt||ge!==ai||Q!==Xn)&&(s.stencilFunc(nt,ai,Xn),ce=nt,ge=ai,Q=Xn)},setOp:function(nt,ai,Xn){($!==nt||_e!==ai||He!==Xn)&&(s.stencilOp(nt,ai,Xn),$=nt,_e=ai,He=Xn)},setLocked:function(nt){N=nt},setClear:function(nt){ct!==nt&&(s.clearStencil(nt),ct=nt)},reset:function(){N=!1,se=null,ce=null,ge=null,Q=null,$=null,_e=null,He=null,ct=null}}}const r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let d={},u={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,y=null,_=null,b=null,v=null,E=null,T=new De(0,0,0),C=0,S=!1,M=null,A=null,L=null,D=null,F=null;const O=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(G)[1]),B=j>=1):G.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),B=j>=2);let ee=null,ae={};const pe=s.getParameter(s.SCISSOR_BOX),Oe=s.getParameter(s.VIEWPORT),Je=new et().fromArray(pe),Ze=new et().fromArray(Oe);function te(N,se,ce,ge){const Q=new Uint8Array(4),$=s.createTexture();s.bindTexture(N,$),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _e=0;_e<ce;_e++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,ge,0,s.RGBA,s.UNSIGNED_BYTE,Q):s.texImage2D(se+_e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Q);return $}const V={};V[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),V[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),V[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(s.DEPTH_TEST),a.setFunc(Js),Ie(!1),xe(Pu),q(s.CULL_FACE),Qe(zi);function q(N){d[N]!==!0&&(s.enable(N),d[N]=!0)}function K(N){d[N]!==!1&&(s.disable(N),d[N]=!1)}function oe(N,se){return u[N]!==se?(s.bindFramebuffer(N,se),u[N]=se,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=se),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=se),!0):!1}function le(N,se){let ce=h,ge=!1;if(N){ce=f.get(se),ce===void 0&&(ce=[],f.set(se,ce));const Q=N.textures;if(ce.length!==Q.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let $=0,_e=Q.length;$<_e;$++)ce[$]=s.COLOR_ATTACHMENT0+$;ce.length=Q.length,ge=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,ge=!0);ge&&s.drawBuffers(ce)}function Ce(N){return g!==N?(s.useProgram(N),g=N,!0):!1}const Ye={[cs]:s.FUNC_ADD,[Qh]:s.FUNC_SUBTRACT,[ep]:s.FUNC_REVERSE_SUBTRACT};Ye[tp]=s.MIN,Ye[np]=s.MAX;const U={[ip]:s.ZERO,[sp]:s.ONE,[rp]:s.SRC_COLOR,[Dc]:s.SRC_ALPHA,[fp]:s.SRC_ALPHA_SATURATE,[lp]:s.DST_COLOR,[op]:s.DST_ALPHA,[ap]:s.ONE_MINUS_SRC_COLOR,[Ic]:s.ONE_MINUS_SRC_ALPHA,[up]:s.ONE_MINUS_DST_COLOR,[cp]:s.ONE_MINUS_DST_ALPHA,[dp]:s.CONSTANT_COLOR,[hp]:s.ONE_MINUS_CONSTANT_COLOR,[pp]:s.CONSTANT_ALPHA,[mp]:s.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,se,ce,ge,Q,$,_e,He,ct,nt){if(N===zi){x===!0&&(K(s.BLEND),x=!1);return}if(x===!1&&(q(s.BLEND),x=!0),N!==Zh){if(N!==m||nt!==S){if((p!==cs||b!==cs)&&(s.blendEquation(s.FUNC_ADD),p=cs,b=cs),nt)switch(N){case Xs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ys:s.blendFunc(s.ONE,s.ONE);break;case Lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Du:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Xs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lu:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}y=null,_=null,v=null,E=null,T.set(0,0,0),C=0,m=N,S=nt}return}Q=Q||se,$=$||ce,_e=_e||ge,(se!==p||Q!==b)&&(s.blendEquationSeparate(Ye[se],Ye[Q]),p=se,b=Q),(ce!==y||ge!==_||$!==v||_e!==E)&&(s.blendFuncSeparate(U[ce],U[ge],U[$],U[_e]),y=ce,_=ge,v=$,E=_e),(He.equals(T)===!1||ct!==C)&&(s.blendColor(He.r,He.g,He.b,ct),T.copy(He),C=ct),m=N,S=!1}function Fe(N,se){N.side===tn?K(s.CULL_FACE):q(s.CULL_FACE);let ce=N.side===Ht;se&&(ce=!ce),Ie(ce),N.blending===Xs&&N.transparent===!1?Qe(zi):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):K(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(N){M!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),M=N)}function xe(N){N!==Yh?(q(s.CULL_FACE),N!==A&&(N===Pu?s.cullFace(s.BACK):N===Jh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):K(s.CULL_FACE),A=N}function pt(N){N!==L&&(B&&s.lineWidth(N),L=N)}function ve(N,se,ce){N?(q(s.POLYGON_OFFSET_FILL),(D!==se||F!==ce)&&(s.polygonOffset(se,ce),D=se,F=ce)):K(s.POLYGON_OFFSET_FILL)}function Xe(N){N?q(s.SCISSOR_TEST):K(s.SCISSOR_TEST)}function Lt(N){N===void 0&&(N=s.TEXTURE0+O-1),ee!==N&&(s.activeTexture(N),ee=N)}function Tt(N,se,ce){ce===void 0&&(ee===null?ce=s.TEXTURE0+O-1:ce=ee);let ge=ae[ce];ge===void 0&&(ge={type:void 0,texture:void 0},ae[ce]=ge),(ge.type!==N||ge.texture!==se)&&(ee!==ce&&(s.activeTexture(ce),ee=ce),s.bindTexture(N,se||V[N]),ge.type=N,ge.texture=se)}function I(){const N=ae[ee];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{s.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{s.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Y(){try{s.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ae(){try{s.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{s.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{s.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{s.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{s.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(N){Je.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Je.copy(N))}function Be(N){Ze.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),Ze.copy(N))}function Te(N,se){let ce=l.get(se);ce===void 0&&(ce=new WeakMap,l.set(se,ce));let ge=ce.get(N);ge===void 0&&(ge=s.getUniformBlockIndex(se,N.name),ce.set(N,ge))}function fe(N,se){const ge=l.get(se).get(N);c.get(se)!==ge&&(s.uniformBlockBinding(se,ge,N.__bindingPointIndex),c.set(se,ge))}function Ge(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ee=null,ae={},u={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,y=null,_=null,b=null,v=null,E=null,T=new De(0,0,0),C=0,S=!1,M=null,A=null,L=null,D=null,F=null,Je.set(0,0,s.canvas.width,s.canvas.height),Ze.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:K,bindFramebuffer:oe,drawBuffers:le,useProgram:Ce,setBlending:Qe,setMaterial:Fe,setFlipSided:Ie,setCullFace:xe,setLineWidth:pt,setPolygonOffset:ve,setScissorTest:Xe,activeTexture:Lt,bindTexture:Tt,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:Ee,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:fe,texStorage2D:re,texStorage3D:Me,texSubImage2D:J,texSubImage3D:Z,compressedTexSubImage2D:Y,compressedTexSubImage3D:Ae,scissor:he,viewport:Be,reset:Ge}}function V0(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ue,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,w){return h?new OffscreenCanvas(I,w):ta("canvas")}function x(I,w,H){let J=1;const Z=Tt(I);if((Z.width>H||Z.height>H)&&(J=H/Math.max(Z.width,Z.height)),J<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Y=Math.floor(J*Z.width),Ae=Math.floor(J*Z.height);u===void 0&&(u=g(Y,Ae));const re=w?g(Y,Ae):u;return re.width=Y,re.height=Ae,re.getContext("2d").drawImage(I,0,0,Y,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+Ae+")."),re}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){s.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(I,w,H,J,Z=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Y=w;if(w===s.RED&&(H===s.FLOAT&&(Y=s.R32F),H===s.HALF_FLOAT&&(Y=s.R16F),H===s.UNSIGNED_BYTE&&(Y=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.R8UI),H===s.UNSIGNED_SHORT&&(Y=s.R16UI),H===s.UNSIGNED_INT&&(Y=s.R32UI),H===s.BYTE&&(Y=s.R8I),H===s.SHORT&&(Y=s.R16I),H===s.INT&&(Y=s.R32I)),w===s.RG&&(H===s.FLOAT&&(Y=s.RG32F),H===s.HALF_FLOAT&&(Y=s.RG16F),H===s.UNSIGNED_BYTE&&(Y=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RG8UI),H===s.UNSIGNED_SHORT&&(Y=s.RG16UI),H===s.UNSIGNED_INT&&(Y=s.RG32UI),H===s.BYTE&&(Y=s.RG8I),H===s.SHORT&&(Y=s.RG16I),H===s.INT&&(Y=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGB8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGB16UI),H===s.UNSIGNED_INT&&(Y=s.RGB32UI),H===s.BYTE&&(Y=s.RGB8I),H===s.SHORT&&(Y=s.RGB16I),H===s.INT&&(Y=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(Y=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(Y=s.RGBA16UI),H===s.UNSIGNED_INT&&(Y=s.RGBA32UI),H===s.BYTE&&(Y=s.RGBA8I),H===s.SHORT&&(Y=s.RGBA16I),H===s.INT&&(Y=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(Y=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(Y=s.R11F_G11F_B10F)),w===s.RGBA){const Ae=Z?ho:$e.getTransfer(J);H===s.FLOAT&&(Y=s.RGBA32F),H===s.HALF_FLOAT&&(Y=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Y=Ae===at?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Y=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Y=s.RGB5_A1)}return(Y===s.R16F||Y===s.R32F||Y===s.RG16F||Y===s.RG32F||Y===s.RGBA16F||Y===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(I,w){let H;return I?w===null||w===ds||w===Jr?H=s.DEPTH24_STENCIL8:w===Nn?H=s.DEPTH32F_STENCIL8:w===Yr&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ds||w===Jr?H=s.DEPTH_COMPONENT24:w===Nn?H=s.DEPTH_COMPONENT32F:w===Yr&&(H=s.DEPTH_COMPONENT16),H}function v(I,w){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==qt&&I.minFilter!==jt?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function E(I){const w=I.target;w.removeEventListener("dispose",E),C(w),w.isVideoTexture&&d.delete(w)}function T(I){const w=I.target;w.removeEventListener("dispose",T),M(w)}function C(I){const w=n.get(I);if(w.__webglInit===void 0)return;const H=I.source,J=f.get(H);if(J){const Z=J[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(I),Object.keys(J).length===0&&f.delete(H)}n.remove(I)}function S(I){const w=n.get(I);s.deleteTexture(w.__webglTexture);const H=I.source,J=f.get(H);delete J[w.__cacheKey],a.memory.textures--}function M(I){const w=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(w.__webglFramebuffer[J]))for(let Z=0;Z<w.__webglFramebuffer[J].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[J][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[J]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[J])}else{if(Array.isArray(w.__webglFramebuffer))for(let J=0;J<w.__webglFramebuffer.length;J++)s.deleteFramebuffer(w.__webglFramebuffer[J]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let J=0;J<w.__webglColorRenderbuffer.length;J++)w.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[J]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=I.textures;for(let J=0,Z=H.length;J<Z;J++){const Y=n.get(H[J]);Y.__webglTexture&&(s.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(H[J])}n.remove(I)}let A=0;function L(){A=0}function D(){const I=A;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),A+=1,I}function F(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function O(I,w){const H=n.get(I);if(I.isVideoTexture&&Xe(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const J=I.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(H,I,w);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function B(I,w){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){V(H,I,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function j(I,w){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){V(H,I,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function G(I,w){const H=n.get(I);if(I.version>0&&H.__version!==I.version){q(H,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const ee={[Qs]:s.REPEAT,[Bi]:s.CLAMP_TO_EDGE,[fo]:s.MIRRORED_REPEAT},ae={[qt]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[Ur]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[to]:s.LINEAR_MIPMAP_NEAREST,[Fn]:s.LINEAR_MIPMAP_LINEAR},pe={[Pp]:s.NEVER,[Np]:s.ALWAYS,[Lp]:s.LESS,[zd]:s.LEQUAL,[Dp]:s.EQUAL,[Fp]:s.GEQUAL,[Ip]:s.GREATER,[Up]:s.NOTEQUAL};function Oe(I,w){if(w.type===Nn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===jt||w.magFilter===to||w.magFilter===Ur||w.magFilter===Fn||w.minFilter===jt||w.minFilter===to||w.minFilter===Ur||w.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,ee[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,ee[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,ee[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ae[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,pe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===qt||w.minFilter!==Ur&&w.minFilter!==Fn||w.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Je(I,w){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",E));const J=w.source;let Z=f.get(J);Z===void 0&&(Z={},f.set(J,Z));const Y=F(w);if(Y!==I.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),Z[Y].usedTimes++;const Ae=Z[I.__cacheKey];Ae!==void 0&&(Z[I.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(w)),I.__cacheKey=Y,I.__webglTexture=Z[Y].texture}return H}function Ze(I,w,H){return Math.floor(Math.floor(I/H)/w)}function te(I,w,H,J){const Y=I.updateRanges;if(Y.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,J,w.data);else{Y.sort((ie,he)=>ie.start-he.start);let Ae=0;for(let ie=1;ie<Y.length;ie++){const he=Y[Ae],Be=Y[ie],Te=he.start+he.count,fe=Ze(Be.start,w.width,4),Ge=Ze(he.start,w.width,4);Be.start<=Te+1&&fe===Ge&&Ze(Be.start+Be.count-1,w.width,4)===fe?he.count=Math.max(he.count,Be.start+Be.count-he.start):(++Ae,Y[Ae]=Be)}Y.length=Ae+1;const re=s.getParameter(s.UNPACK_ROW_LENGTH),Me=s.getParameter(s.UNPACK_SKIP_PIXELS),Ee=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ie=0,he=Y.length;ie<he;ie++){const Be=Y[ie],Te=Math.floor(Be.start/4),fe=Math.ceil(Be.count/4),Ge=Te%w.width,N=Math.floor(Te/w.width),se=fe,ce=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,N),t.texSubImage2D(s.TEXTURE_2D,0,Ge,N,se,ce,H,J,w.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,re),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Me),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ee)}}function V(I,w,H){let J=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(J=s.TEXTURE_3D);const Z=Je(I,w),Y=w.source;t.bindTexture(J,I.__webglTexture,s.TEXTURE0+H);const Ae=n.get(Y);if(Y.version!==Ae.__version||Z===!0){t.activeTexture(s.TEXTURE0+H);const re=$e.getPrimaries($e.workingColorSpace),Me=w.colorSpace===Ni?null:$e.getPrimaries(w.colorSpace),Ee=w.colorSpace===Ni||re===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=x(w.image,!1,i.maxTextureSize);ie=Lt(w,ie);const he=r.convert(w.format,w.colorSpace),Be=r.convert(w.type);let Te=_(w.internalFormat,he,Be,w.colorSpace,w.isVideoTexture);Oe(J,w);let fe;const Ge=w.mipmaps,N=w.isVideoTexture!==!0,se=Ae.__version===void 0||Z===!0,ce=Y.dataReady,ge=v(w,ie);if(w.isDepthTexture)Te=b(w.format===Zr,w.type),se&&(N?t.texStorage2D(s.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Be,null));else if(w.isDataTexture)if(Ge.length>0){N&&se&&t.texStorage2D(s.TEXTURE_2D,ge,Te,Ge[0].width,Ge[0].height);for(let Q=0,$=Ge.length;Q<$;Q++)fe=Ge[Q],N?ce&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,Be,fe.data):t.texImage2D(s.TEXTURE_2D,Q,Te,fe.width,fe.height,0,he,Be,fe.data);w.generateMipmaps=!1}else N?(se&&t.texStorage2D(s.TEXTURE_2D,ge,Te,ie.width,ie.height),ce&&te(w,ie,he,Be)):t.texImage2D(s.TEXTURE_2D,0,Te,ie.width,ie.height,0,he,Be,ie.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){N&&se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Te,Ge[0].width,Ge[0].height,ie.depth);for(let Q=0,$=Ge.length;Q<$;Q++)if(fe=Ge[Q],w.format!==vn)if(he!==null)if(N){if(ce)if(w.layerUpdates.size>0){const _e=Tf(fe.width,fe.height,w.format,w.type);for(const He of w.layerUpdates){const ct=fe.data.subarray(He*_e/fe.data.BYTES_PER_ELEMENT,(He+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,He,fe.width,fe.height,1,he,ct)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ie.depth,he,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Te,fe.width,fe.height,ie.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ce&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,fe.width,fe.height,ie.depth,he,Be,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Q,Te,fe.width,fe.height,ie.depth,0,he,Be,fe.data)}else{N&&se&&t.texStorage2D(s.TEXTURE_2D,ge,Te,Ge[0].width,Ge[0].height);for(let Q=0,$=Ge.length;Q<$;Q++)fe=Ge[Q],w.format!==vn?he!==null?N?ce&&t.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Q,Te,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ce&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,fe.width,fe.height,he,Be,fe.data):t.texImage2D(s.TEXTURE_2D,Q,Te,fe.width,fe.height,0,he,Be,fe.data)}else if(w.isDataArrayTexture)if(N){if(se&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,Te,ie.width,ie.height,ie.depth),ce)if(w.layerUpdates.size>0){const Q=Tf(ie.width,ie.height,w.format,w.type);for(const $ of w.layerUpdates){const _e=ie.data.subarray($*Q/ie.data.BYTES_PER_ELEMENT,($+1)*Q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,$,ie.width,ie.height,1,he,Be,_e)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Be,ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,he,Be,ie.data);else if(w.isData3DTexture)N?(se&&t.texStorage3D(s.TEXTURE_3D,ge,Te,ie.width,ie.height,ie.depth),ce&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Be,ie.data)):t.texImage3D(s.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,he,Be,ie.data);else if(w.isFramebufferTexture){if(se)if(N)t.texStorage2D(s.TEXTURE_2D,ge,Te,ie.width,ie.height);else{let Q=ie.width,$=ie.height;for(let _e=0;_e<ge;_e++)t.texImage2D(s.TEXTURE_2D,_e,Te,Q,$,0,he,Be,null),Q>>=1,$>>=1}}else if(Ge.length>0){if(N&&se){const Q=Tt(Ge[0]);t.texStorage2D(s.TEXTURE_2D,ge,Te,Q.width,Q.height)}for(let Q=0,$=Ge.length;Q<$;Q++)fe=Ge[Q],N?ce&&t.texSubImage2D(s.TEXTURE_2D,Q,0,0,he,Be,fe):t.texImage2D(s.TEXTURE_2D,Q,Te,he,Be,fe);w.generateMipmaps=!1}else if(N){if(se){const Q=Tt(ie);t.texStorage2D(s.TEXTURE_2D,ge,Te,Q.width,Q.height)}ce&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,he,Be,ie)}else t.texImage2D(s.TEXTURE_2D,0,Te,he,Be,ie);m(w)&&p(J),Ae.__version=Y.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function q(I,w,H){if(w.image.length!==6)return;const J=Je(I,w),Z=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+H);const Y=n.get(Z);if(Z.version!==Y.__version||J===!0){t.activeTexture(s.TEXTURE0+H);const Ae=$e.getPrimaries($e.workingColorSpace),re=w.colorSpace===Ni?null:$e.getPrimaries(w.colorSpace),Me=w.colorSpace===Ni||Ae===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,he=[];for(let $=0;$<6;$++)!Ee&&!ie?he[$]=x(w.image[$],!0,i.maxCubemapSize):he[$]=ie?w.image[$].image:w.image[$],he[$]=Lt(w,he[$]);const Be=he[0],Te=r.convert(w.format,w.colorSpace),fe=r.convert(w.type),Ge=_(w.internalFormat,Te,fe,w.colorSpace),N=w.isVideoTexture!==!0,se=Y.__version===void 0||J===!0,ce=Z.dataReady;let ge=v(w,Be);Oe(s.TEXTURE_CUBE_MAP,w);let Q;if(Ee){N&&se&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,Be.width,Be.height);for(let $=0;$<6;$++){Q=he[$].mipmaps;for(let _e=0;_e<Q.length;_e++){const He=Q[_e];w.format!==vn?Te!==null?N?ce&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,He.width,He.height,Te,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ge,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,0,0,He.width,He.height,Te,fe,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e,Ge,He.width,He.height,0,Te,fe,He.data)}}}else{if(Q=w.mipmaps,N&&se){Q.length>0&&ge++;const $=Tt(he[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ge,Ge,$.width,$.height)}for(let $=0;$<6;$++)if(ie){N?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,he[$].width,he[$].height,Te,fe,he[$].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,he[$].width,he[$].height,0,Te,fe,he[$].data);for(let _e=0;_e<Q.length;_e++){const ct=Q[_e].image[$].image;N?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,ct.width,ct.height,Te,fe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ge,ct.width,ct.height,0,Te,fe,ct.data)}}else{N?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Te,fe,he[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ge,Te,fe,he[$]);for(let _e=0;_e<Q.length;_e++){const He=Q[_e];N?ce&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,0,0,Te,fe,He.image[$]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+$,_e+1,Ge,Te,fe,He.image[$])}}}m(w)&&p(s.TEXTURE_CUBE_MAP),Y.__version=Z.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function K(I,w,H,J,Z,Y){const Ae=r.convert(H.format,H.colorSpace),re=r.convert(H.type),Me=_(H.internalFormat,Ae,re,H.colorSpace),Ee=n.get(w),ie=n.get(H);if(ie.__renderTarget=w,!Ee.__hasExternalTextures){const he=Math.max(1,w.width>>Y),Be=Math.max(1,w.height>>Y);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,Y,Me,he,Be,w.depth,0,Ae,re,null):t.texImage2D(Z,Y,Me,he,Be,0,Ae,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,Z,ie.__webglTexture,0,pt(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,Z,ie.__webglTexture,Y),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(I,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const J=w.depthTexture,Z=J&&J.isDepthTexture?J.type:null,Y=b(w.stencilBuffer,Z),Ae=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=pt(w);ve(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,Y,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,Y,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Y,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,I)}else{const J=w.textures;for(let Z=0;Z<J.length;Z++){const Y=J[Z],Ae=r.convert(Y.format,Y.colorSpace),re=r.convert(Y.type),Me=_(Y.internalFormat,Ae,re,Y.colorSpace),Ee=pt(w);H&&ve(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ee,Me,w.width,w.height):ve(w)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ee,Me,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Me,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function le(I,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(w.depthTexture);J.__renderTarget=w,(!J.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),O(w.depthTexture,0);const Z=J.__webglTexture,Y=pt(w);if(w.depthTexture.format===$r)ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(w.depthTexture.format===Zr)ve(w)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const w=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const J=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),J){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,J.removeEventListener("dispose",Z)};J.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=J}if(I.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const J=I.texture.mipmaps;J&&J.length>0?le(w.__webglFramebuffer[0],I):le(w.__webglFramebuffer,I)}else if(H){w.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[J]),w.__webglDepthbuffer[J]===void 0)w.__webglDepthbuffer[J]=s.createRenderbuffer(),oe(w.__webglDepthbuffer[J],I,!1);else{const Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}else{const J=I.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),oe(w.__webglDepthbuffer,I,!1);else{const Z=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Y),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,Y)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ye(I,w,H){const J=n.get(I);w!==void 0&&K(J.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ce(I)}function U(I){const w=I.texture,H=n.get(I),J=n.get(w);I.addEventListener("dispose",T);const Z=I.textures,Y=I.isWebGLCubeRenderTarget===!0,Ae=Z.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=w.version,a.memory.textures++),Y){H.__webglFramebuffer=[];for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[re]=[];for(let Me=0;Me<w.mipmaps.length;Me++)H.__webglFramebuffer[re][Me]=s.createFramebuffer()}else H.__webglFramebuffer[re]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let re=0;re<w.mipmaps.length;re++)H.__webglFramebuffer[re]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let re=0,Me=Z.length;re<Me;re++){const Ee=n.get(Z[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&ve(I)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){const Me=Z[re];H.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[re]);const Ee=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),he=_(Me.internalFormat,Ee,ie,Me.colorSpace,I.isXRRenderTarget===!0),Be=pt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,he,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,H.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),Oe(s.TEXTURE_CUBE_MAP,w);for(let re=0;re<6;re++)if(w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)K(H.__webglFramebuffer[re][Me],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,Me);else K(H.__webglFramebuffer[re],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(w)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,Me=Z.length;re<Me;re++){const Ee=Z[re],ie=n.get(Ee);let he=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Oe(he,Ee),K(H.__webglFramebuffer,I,Ee,s.COLOR_ATTACHMENT0+re,he,0),m(Ee)&&p(he)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(re=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,J.__webglTexture),Oe(re,w),w.mipmaps&&w.mipmaps.length>0)for(let Me=0;Me<w.mipmaps.length;Me++)K(H.__webglFramebuffer[Me],I,w,s.COLOR_ATTACHMENT0,re,Me);else K(H.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,re,0);m(w)&&p(re),t.unbindTexture()}I.depthBuffer&&Ce(I)}function Qe(I){const w=I.textures;for(let H=0,J=w.length;H<J;H++){const Z=w[H];if(m(Z)){const Y=y(I),Ae=n.get(Z).__webglTexture;t.bindTexture(Y,Ae),p(Y),t.unbindTexture()}}}const Fe=[],Ie=[];function xe(I){if(I.samples>0){if(ve(I)===!1){const w=I.textures,H=I.width,J=I.height;let Z=s.COLOR_BUFFER_BIT;const Y=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(I),re=w.length>1;if(re)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Me=I.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=n.get(w[Ee]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ie,0)}s.blitFramebuffer(0,0,H,J,0,0,H,J,Z,s.NEAREST),c===!0&&(Fe.length=0,Ie.length=0,Fe.push(s.COLOR_ATTACHMENT0+Ee),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Fe.push(Y),Ie.push(Y),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ie)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Fe))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);const ie=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.TEXTURE_2D,ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(I){return Math.min(i.maxSamples,I.samples)}function ve(I){const w=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Xe(I){const w=a.render.frame;d.get(I)!==w&&(d.set(I,w),I.update())}function Lt(I,w){const H=I.colorSpace,J=I.format,Z=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Yt&&H!==Ni&&($e.getTransfer(H)===at?(J!==vn||Z!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),w}function Tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=L,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=j,this.setTextureCube=G,this.rebindTextures=Ye,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=K,this.useMultisampledRTT=ve}function G0(s,e){function t(n,i=Ni){let r;const a=$e.getTransfer(i);if(n===ti)return s.UNSIGNED_BYTE;if(n===jl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ql)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ud)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fd)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dd)return s.BYTE;if(n===Id)return s.SHORT;if(n===Yr)return s.UNSIGNED_SHORT;if(n===Xl)return s.INT;if(n===ds)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===cr)return s.HALF_FLOAT;if(n===Nd)return s.ALPHA;if(n===Od)return s.RGB;if(n===vn)return s.RGBA;if(n===$r)return s.DEPTH_COMPONENT;if(n===Zr)return s.DEPTH_STENCIL;if(n===Kl)return s.RED;if(n===Yl)return s.RED_INTEGER;if(n===Bd)return s.RG;if(n===Jl)return s.RG_INTEGER;if(n===$l)return s.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===no)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===no)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gc||n===Wc||n===Xc||n===jc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Gc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===jc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qc||n===Kc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qc||n===Kc)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jc||n===$c||n===Zc||n===Qc||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===cl||n===ll)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Jc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qc)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ll)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===fl||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hl||n===pl||n===ml||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const W0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new sh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:W0,fragmentShader:X0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new ur(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q0 extends lr{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,d=null,u=null,f=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new j0,p={},y=t.getContextAttributes();let _=null,b=null;const v=[],E=[],T=new Ue;let C=null;const S=new zt;S.viewport=new et;const M=new zt;M.viewport=new et;const A=[S,M],L=new ig;let D=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let q=v[V];return q===void 0&&(q=new Zo,v[V]=q),q.getTargetRaySpace()},this.getControllerGrip=function(V){let q=v[V];return q===void 0&&(q=new Zo,v[V]=q),q.getGripSpace()},this.getHand=function(V){let q=v[V];return q===void 0&&(q=new Zo,v[V]=q),q.getHandSpace()};function O(V){const q=E.indexOf(V.inputSource);if(q===-1)return;const K=v[q];K!==void 0&&(K.update(V.inputSource,V.frame,l||a),K.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",B),i.removeEventListener("inputsourceschange",j);for(let V=0;V<v.length;V++){const q=E[V];q!==null&&(E[V]=null,v[V].disconnect(q))}D=null,F=null,m.reset();for(const V in p)delete p[V];e.setRenderTarget(_),h=null,f=null,u=null,i=null,b=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",B),i.addEventListener("inputsourceschange",j),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,oe=null,le=null;y.depth&&(le=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?Zr:$r,oe=y.stencil?Jr:ds);const Ce={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Wi(f.textureWidth,f.textureHeight,{format:vn,type:ti,depthTexture:new ih(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const K={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new Wi(h.framebufferWidth,h.framebufferHeight,{format:vn,type:ti,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(V){for(let q=0;q<V.removed.length;q++){const K=V.removed[q],oe=E.indexOf(K);oe>=0&&(E[oe]=null,v[oe].disconnect(K))}for(let q=0;q<V.added.length;q++){const K=V.added[q];let oe=E.indexOf(K);if(oe===-1){for(let Ce=0;Ce<v.length;Ce++)if(Ce>=E.length){E.push(K),oe=Ce;break}else if(E[Ce]===null){E[Ce]=K,oe=Ce;break}if(oe===-1)break}const le=v[oe];le&&le.connect(K)}}const G=new P,ee=new P;function ae(V,q,K){G.setFromMatrixPosition(q.matrixWorld),ee.setFromMatrixPosition(K.matrixWorld);const oe=G.distanceTo(ee),le=q.projectionMatrix.elements,Ce=K.projectionMatrix.elements,Ye=le[14]/(le[10]-1),U=le[14]/(le[10]+1),Qe=(le[9]+1)/le[5],Fe=(le[9]-1)/le[5],Ie=(le[8]-1)/le[0],xe=(Ce[8]+1)/Ce[0],pt=Ye*Ie,ve=Ye*xe,Xe=oe/(-Ie+xe),Lt=Xe*-Ie;if(q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Lt),V.translateZ(Xe),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),le[10]===-1)V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const Tt=Ye+Xe,I=U+Xe,w=pt-Lt,H=ve+(oe-Lt),J=Qe*U/I*Tt,Z=Fe*U/I*Tt;V.projectionMatrix.makePerspective(w,H,J,Z,Tt,I),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function pe(V,q){q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let q=V.near,K=V.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(K=m.depthFar)),L.near=M.near=S.near=q,L.far=M.far=S.far=K,(D!==L.near||F!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,F=L.far),L.layers.mask=V.layers.mask|6,S.layers.mask=L.layers.mask&3,M.layers.mask=L.layers.mask&5;const oe=V.parent,le=L.cameras;pe(L,oe);for(let Ce=0;Ce<le.length;Ce++)pe(le[Ce],oe);le.length===2?ae(L,S,M):L.projectionMatrix.copy(S.projectionMatrix),Oe(V,L,oe)};function Oe(V,q,K){K===null?V.matrix.copy(q.matrixWorld):(V.matrix.copy(K.matrixWorld),V.matrix.invert(),V.matrix.multiply(q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(q.projectionMatrix),V.projectionMatrixInverse.copy(q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=er*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(V){c=V,f!==null&&(f.fixedFoveation=V),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=V)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(V){return p[V]};let Je=null;function Ze(V,q){if(d=q.getViewerPose(l||a),g=q,d!==null){const K=d.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let oe=!1;K.length!==L.cameras.length&&(L.cameras.length=0,oe=!0);for(let U=0;U<K.length;U++){const Qe=K[U];let Fe=null;if(h!==null)Fe=h.getViewport(Qe);else{const xe=u.getViewSubImage(f,Qe);Fe=xe.viewport,U===0&&(e.setRenderTargetTextures(b,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(b))}let Ie=A[U];Ie===void 0&&(Ie=new zt,Ie.layers.enable(U),Ie.viewport=new et,A[U]=Ie),Ie.matrix.fromArray(Qe.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(Qe.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),U===0&&(L.matrix.copy(Ie.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),oe===!0&&L.cameras.push(Ie)}const le=i.enabledFeatures;if(le&&le.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const U=u.getDepthInformation(K[0]);U&&U.isValid&&U.texture&&m.init(U,i.renderState)}if(le&&le.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let U=0;U<K.length;U++){const Qe=K[U].camera;if(Qe){let Fe=p[Qe];Fe||(Fe=new sh,p[Qe]=Fe);const Ie=u.getCameraImage(Qe);Fe.sourceTexture=Ie}}}}for(let K=0;K<v.length;K++){const oe=E[K],le=v[K];oe!==null&&le!==void 0&&le.update(oe,q,l||a)}Je&&Je(V,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),g=null}const te=new fh;te.setAnimationLoop(Ze),this.setAnimationLoop=function(V){Je=V},this.dispose=function(){}}}const ts=new Hn,K0=new Pe;function Y0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,jd(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),d(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),_=y.envMap,b=y.envMapRotation;_&&(m.envMap.value=_,ts.copy(b),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),m.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ts)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function J0(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){const b=_.program;n.uniformBlockBinding(y,b)}function l(y,_){let b=i[y.id];b===void 0&&(g(y),b=d(y),i[y.id]=b,y.addEventListener("dispose",m));const v=_.program;n.updateUBOMapping(y,v);const E=e.render.frame;r[y.id]!==E&&(f(y),r[y.id]=E)}function d(y){const _=u();y.__bindingPointIndex=_;const b=s.createBuffer(),v=y.__size,E=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,v,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const _=i[y.id],b=y.uniforms,v=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let E=0,T=b.length;E<T;E++){const C=Array.isArray(b[E])?b[E]:[b[E]];for(let S=0,M=C.length;S<M;S++){const A=C[S];if(h(A,E,S,v)===!0){const L=A.__offset,D=Array.isArray(A.value)?A.value:[A.value];let F=0;for(let O=0;O<D.length;O++){const B=D[O],j=x(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,L+F,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,F),F+=j.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,L,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(y,_,b,v){const E=y.value,T=_+"_"+b;if(v[T]===void 0)return typeof E=="number"||typeof E=="boolean"?v[T]=E:v[T]=E.clone(),!0;{const C=v[T];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return v[T]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){const _=y.uniforms;let b=0;const v=16;for(let T=0,C=_.length;T<C;T++){const S=Array.isArray(_[T])?_[T]:[_[T]];for(let M=0,A=S.length;M<A;M++){const L=S[M],D=Array.isArray(L.value)?L.value:[L.value];for(let F=0,O=D.length;F<O;F++){const B=D[F],j=x(B),G=b%v,ee=G%j.boundary,ae=G+ee;b+=ee,ae!==0&&v-ae<j.storage&&(b+=v-ae),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=j.storage}}}const E=b%v;return E>0&&(b+=v-E),y.__size=b,y.__cache={},this}function x(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}class $0{constructor(e={}){const{canvas:t=Qp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let v=!1;this._outputColorSpace=It;let E=0,T=0,C=null,S=-1,M=null;const A=new et,L=new et;let D=null;const F=new De(0);let O=0,B=t.width,j=t.height,G=1,ee=null,ae=null;const pe=new et(0,0,B,j),Oe=new et(0,0,B,j);let Je=!1;const Ze=new su;let te=!1,V=!1;const q=new Pe,K=new P,oe=new et,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ye(){return C===null?G:1}let U=n;function Qe(R,k){return t.getContext(R,k)}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${aa}`),t.addEventListener("webglcontextlost",ce,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",Q,!1),U===null){const k="webgl2";if(U=Qe(k,R),U===null)throw Qe(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Fe,Ie,xe,pt,ve,Xe,Lt,Tt,I,w,H,J,Z,Y,Ae,re,Me,Ee,ie,he,Be,Te,fe,Ge;function N(){Fe=new ox(U),Fe.init(),Te=new G0(U,Fe),Ie=new ex(U,Fe,e,Te),xe=new H0(U,Fe),Ie.reversedDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),pt=new ux(U),ve=new R0,Xe=new V0(U,Fe,xe,ve,Ie,Te,pt),Lt=new nx(b),Tt=new ax(b),I=new gg(U),fe=new Z_(U,I),w=new cx(U,I,pt,fe),H=new dx(U,w,I,pt),ie=new fx(U,Ie,Xe),re=new tx(ve),J=new A0(b,Lt,Tt,Fe,Ie,fe,re),Z=new Y0(b,ve),Y=new P0,Ae=new N0(Fe),Ee=new $_(b,Lt,Tt,xe,H,h,c),Me=new k0(b,H,Ie),Ge=new J0(U,pt,Ie,xe),he=new Q_(U,Fe,pt),Be=new lx(U,Fe,pt),pt.programs=J.programs,b.capabilities=Ie,b.extensions=Fe,b.properties=ve,b.renderLists=Y,b.shadowMap=Me,b.state=xe,b.info=pt}N();const se=new q0(b,U);this.xr=se,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=Fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(B,j,!1))},this.getSize=function(R){return R.set(B,j)},this.setSize=function(R,k,W=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,j=k,t.width=Math.floor(R*G),t.height=Math.floor(k*G),W===!0&&(t.style.width=R+"px",t.style.height=k+"px"),this.setViewport(0,0,R,k)},this.getDrawingBufferSize=function(R){return R.set(B*G,j*G).floor()},this.setDrawingBufferSize=function(R,k,W){B=R,j=k,G=W,t.width=Math.floor(R*W),t.height=Math.floor(k*W),this.setViewport(0,0,R,k)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(pe)},this.setViewport=function(R,k,W,X){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,k,W,X),xe.viewport(A.copy(pe).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Oe)},this.setScissor=function(R,k,W,X){R.isVector4?Oe.set(R.x,R.y,R.z,R.w):Oe.set(R,k,W,X),xe.scissor(L.copy(Oe).multiplyScalar(G).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(R){xe.setScissorTest(Je=R)},this.setOpaqueSort=function(R){ee=R},this.setTransparentSort=function(R){ae=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(R=!0,k=!0,W=!0){let X=0;if(R){let z=!1;if(C!==null){const ne=C.texture.format;z=ne===$l||ne===Jl||ne===Yl}if(z){const ne=C.texture.type,de=ne===ti||ne===ds||ne===Yr||ne===Jr||ne===jl||ne===ql,be=Ee.getClearColor(),me=Ee.getClearAlpha(),Ne=be.r,ke=be.g,Re=be.b;de?(g[0]=Ne,g[1]=ke,g[2]=Re,g[3]=me,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=Ne,x[1]=ke,x[2]=Re,x[3]=me,U.clearBufferiv(U.COLOR,0,x))}else X|=U.COLOR_BUFFER_BIT}k&&(X|=U.DEPTH_BUFFER_BIT),W&&(X|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ce,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Ee.dispose(),Y.dispose(),Ae.dispose(),ve.dispose(),Lt.dispose(),Tt.dispose(),H.dispose(),fe.dispose(),Ge.dispose(),J.dispose(),se.dispose(),se.removeEventListener("sessionstart",Xn),se.removeEventListener("sessionend",Eu),Ki.stop()};function ce(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=pt.autoReset,k=Me.enabled,W=Me.autoUpdate,X=Me.needsUpdate,z=Me.type;N(),pt.autoReset=R,Me.enabled=k,Me.autoUpdate=W,Me.needsUpdate=X,Me.type=z}function Q(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $(R){const k=R.target;k.removeEventListener("dispose",$),_e(k)}function _e(R){He(R),ve.remove(R)}function He(R){const k=ve.get(R).programs;k!==void 0&&(k.forEach(function(W){J.releaseProgram(W)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,k,W,X,z,ne){k===null&&(k=le);const de=z.isMesh&&z.matrixWorld.determinant()<0,be=Gh(R,k,W,X,z);xe.setMaterial(X,de);let me=W.index,Ne=1;if(X.wireframe===!0){if(me=w.getWireframeAttribute(W),me===void 0)return;Ne=2}const ke=W.drawRange,Re=W.attributes.position;let Ke=ke.start*Ne,rt=(ke.start+ke.count)*Ne;ne!==null&&(Ke=Math.max(Ke,ne.start*Ne),rt=Math.min(rt,(ne.start+ne.count)*Ne)),me!==null?(Ke=Math.max(Ke,0),rt=Math.min(rt,me.count)):Re!=null&&(Ke=Math.max(Ke,0),rt=Math.min(rt,Re.count));const St=rt-Ke;if(St<0||St===1/0)return;fe.setup(z,X,be,W,me);let ft,ot=he;if(me!==null&&(ft=I.get(me),ot=Be,ot.setIndex(ft)),z.isMesh)X.wireframe===!0?(xe.setLineWidth(X.wireframeLinewidth*Ye()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(z.isLine){let Le=X.linewidth;Le===void 0&&(Le=1),xe.setLineWidth(Le*Ye()),z.isLineSegments?ot.setMode(U.LINES):z.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else z.isPoints?ot.setMode(U.POINTS):z.isSprite&&ot.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)na("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Fe.get("WEBGL_multi_draw"))ot.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Le=z._multiDrawStarts,_t=z._multiDrawCounts,tt=z._multiDrawCount,an=me?I.get(me).bytesPerElement:1,ps=ve.get(X).currentProgram.getUniforms();for(let on=0;on<tt;on++)ps.setValue(U,"_gl_DrawID",on),ot.render(Le[on]/an,_t[on])}else if(z.isInstancedMesh)ot.renderInstances(Ke,St,z.count);else if(W.isInstancedBufferGeometry){const Le=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,_t=Math.min(W.instanceCount,Le);ot.renderInstances(Ke,St,_t)}else ot.render(Ke,St)};function ct(R,k,W){R.transparent===!0&&R.side===tn&&R.forceSinglePass===!1?(R.side=Ht,R.needsUpdate=!0,ua(R,k,W),R.side=An,R.needsUpdate=!0,ua(R,k,W),R.side=tn):ua(R,k,W)}this.compile=function(R,k,W=null){W===null&&(W=R),p=Ae.get(W),p.init(k),_.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),R!==W&&R.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ne=z.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){const be=ne[de];ct(be,W,z),X.add(be)}else ct(ne,W,z),X.add(ne)}),p=_.pop(),X},this.compileAsync=function(R,k,W=null){const X=this.compile(R,k,W);return new Promise(z=>{function ne(){if(X.forEach(function(de){ve.get(de).currentProgram.isReady()&&X.delete(de)}),X.size===0){z(R);return}setTimeout(ne,10)}Fe.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let nt=null;function ai(R){nt&&nt(R)}function Xn(){Ki.stop()}function Eu(){Ki.start()}const Ki=new fh;Ki.setAnimationLoop(ai),typeof self<"u"&&Ki.setContext(self),this.setAnimationLoop=function(R){nt=R,se.setAnimationLoop(R),R===null?Ki.stop():Ki.start()},se.addEventListener("sessionstart",Xn),se.addEventListener("sessionend",Eu),this.render=function(R,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(k),k=se.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,k,C),p=Ae.get(R,_.length),p.init(k),_.push(p),q.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ze.setFromProjectionMatrix(q,Jn,k.reversedDepth),V=this.localClippingEnabled,te=re.init(this.clippingPlanes,V),m=Y.get(R,y.length),m.init(),y.push(m),se.enabled===!0&&se.isPresenting===!0){const ne=b.xr.getDepthSensingMesh();ne!==null&&Co(ne,k,-1/0,b.sortObjects)}Co(R,k,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ee,ae),Ce=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ce&&Ee.addToRenderList(m,R),this.info.render.frame++,te===!0&&re.beginShadows();const W=p.state.shadowsArray;Me.render(W,R,k),te===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ne=k.cameras;if(z.length>0)for(let de=0,be=ne.length;de<be;de++){const me=ne[de];wu(X,z,R,me)}Ce&&Ee.render(R);for(let de=0,be=ne.length;de<be;de++){const me=ne[de];Tu(m,R,me,me.viewport)}}else z.length>0&&wu(X,z,R,k),Ce&&Ee.render(R),Tu(m,R,k);C!==null&&T===0&&(Xe.updateMultisampleRenderTarget(C),Xe.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(b,R,k),fe.resetDefaultState(),S=-1,M=null,_.pop(),_.length>0?(p=_[_.length-1],te===!0&&re.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Co(R,k,W,X){if(R.visible===!1)return;if(R.layers.test(k.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(k);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ze.intersectsSprite(R)){X&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(q);const de=H.update(R),be=R.material;be.visible&&m.push(R,de,be,W,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ze.intersectsObject(R))){const de=H.update(R),be=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),oe.copy(de.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(q)),Array.isArray(be)){const me=de.groups;for(let Ne=0,ke=me.length;Ne<ke;Ne++){const Re=me[Ne],Ke=be[Re.materialIndex];Ke&&Ke.visible&&m.push(R,de,Ke,W,oe.z,Re)}}else be.visible&&m.push(R,de,be,W,oe.z,null)}}const ne=R.children;for(let de=0,be=ne.length;de<be;de++)Co(ne[de],k,W,X)}function Tu(R,k,W,X){const z=R.opaque,ne=R.transmissive,de=R.transparent;p.setupLightsView(W),te===!0&&re.setGlobalState(b.clippingPlanes,W),X&&xe.viewport(A.copy(X)),z.length>0&&la(z,k,W),ne.length>0&&la(ne,k,W),de.length>0&&la(de,k,W),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function wu(R,k,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Wi(1,1,{generateMipmaps:!0,type:Fe.has("EXT_color_buffer_half_float")||Fe.has("EXT_color_buffer_float")?cr:ti,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));const ne=p.state.transmissionRenderTarget[X.id],de=X.viewport||A;ne.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);const be=b.getRenderTarget(),me=b.getActiveCubeFace(),Ne=b.getActiveMipmapLevel();b.setRenderTarget(ne),b.getClearColor(F),O=b.getClearAlpha(),O<1&&b.setClearColor(16777215,.5),b.clear(),Ce&&Ee.render(W);const ke=b.toneMapping;b.toneMapping=Hi;const Re=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),te===!0&&re.setGlobalState(b.clippingPlanes,X),la(R,W,X),Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne),Fe.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let rt=0,St=k.length;rt<St;rt++){const ft=k[rt],ot=ft.object,Le=ft.geometry,_t=ft.material,tt=ft.group;if(_t.side===tn&&ot.layers.test(X.layers)){const an=_t.side;_t.side=Ht,_t.needsUpdate=!0,Au(ot,W,X,Le,_t,tt),_t.side=an,_t.needsUpdate=!0,Ke=!0}}Ke===!0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne))}b.setRenderTarget(be,me,Ne),b.setClearColor(F,O),Re!==void 0&&(X.viewport=Re),b.toneMapping=ke}function la(R,k,W){const X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ne=R.length;z<ne;z++){const de=R[z],be=de.object,me=de.geometry,Ne=de.group;let ke=de.material;ke.allowOverride===!0&&X!==null&&(ke=X),be.layers.test(W.layers)&&Au(be,k,W,me,ke,Ne)}}function Au(R,k,W,X,z,ne){R.onBeforeRender(b,k,W,X,z,ne),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(b,k,W,X,R,ne),z.transparent===!0&&z.side===tn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,b.renderBufferDirect(W,k,X,z,R,ne),z.side=An,z.needsUpdate=!0,b.renderBufferDirect(W,k,X,z,R,ne),z.side=tn):b.renderBufferDirect(W,k,X,z,R,ne),R.onAfterRender(b,k,W,X,z,ne)}function ua(R,k,W){k.isScene!==!0&&(k=le);const X=ve.get(R),z=p.state.lights,ne=p.state.shadowsArray,de=z.state.version,be=J.getParameters(R,z.state,ne,k,W),me=J.getProgramCacheKey(be);let Ne=X.programs;X.environment=R.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(R.isMeshStandardMaterial?Tt:Lt).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?k.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",$),Ne=new Map,X.programs=Ne);let ke=Ne.get(me);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===de)return Cu(R,be),ke}else be.uniforms=J.getUniforms(R),R.onBeforeCompile(be,b),ke=J.acquireProgram(be,me),Ne.set(me,ke),X.uniforms=be.uniforms;const Re=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Re.clippingPlanes=re.uniform),Cu(R,be),X.needsLights=Xh(R),X.lightsStateVersion=de,X.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMap.value=z.state.directionalShadowMap,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotShadowMap.value=z.state.spotShadowMap,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMap.value=z.state.pointShadowMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Ru(R){if(R.uniformsList===null){const k=R.currentProgram.getUniforms();R.uniformsList=ao.seqWithValue(k.seq,R.uniforms)}return R.uniformsList}function Cu(R,k){const W=ve.get(R);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.batchingColor=k.batchingColor,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Gh(R,k,W,X,z){k.isScene!==!0&&(k=le),Xe.resetTextureUnits();const ne=k.fog,de=X.isMeshStandardMaterial?k.environment:null,be=C===null?b.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Yt,me=(X.isMeshStandardMaterial?Tt:Lt).get(X.envMap||de),Ne=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,ke=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Re=!!W.morphAttributes.position,Ke=!!W.morphAttributes.normal,rt=!!W.morphAttributes.color;let St=Hi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(St=b.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ot=ft!==void 0?ft.length:0,Le=ve.get(X),_t=p.state.lights;if(te===!0&&(V===!0||R!==M)){const Vt=R===M&&X.id===S;re.setState(X,R,Vt)}let tt=!1;X.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==_t.state.version||Le.outputColorSpace!==be||z.isBatchedMesh&&Le.batching===!1||!z.isBatchedMesh&&Le.batching===!0||z.isBatchedMesh&&Le.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Le.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Le.instancing===!1||!z.isInstancedMesh&&Le.instancing===!0||z.isSkinnedMesh&&Le.skinning===!1||!z.isSkinnedMesh&&Le.skinning===!0||z.isInstancedMesh&&Le.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Le.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Le.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Le.instancingMorph===!1&&z.morphTexture!==null||Le.envMap!==me||X.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==Ne||Le.vertexTangents!==ke||Le.morphTargets!==Re||Le.morphNormals!==Ke||Le.morphColors!==rt||Le.toneMapping!==St||Le.morphTargetsCount!==ot)&&(tt=!0):(tt=!0,Le.__version=X.version);let an=Le.currentProgram;tt===!0&&(an=ua(X,k,z));let ps=!1,on=!1,mr=!1;const xt=an.getUniforms(),mn=Le.uniforms;if(xe.useProgram(an.program)&&(ps=!0,on=!0,mr=!0),X.id!==S&&(S=X.id,on=!0),ps||M!==R){xe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),xt.setValue(U,"projectionMatrix",R.projectionMatrix),xt.setValue(U,"viewMatrix",R.matrixWorldInverse);const $t=xt.map.cameraPosition;$t!==void 0&&$t.setValue(U,K.setFromMatrixPosition(R.matrixWorld)),Ie.logarithmicDepthBuffer&&xt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,on=!0,mr=!0)}if(z.isSkinnedMesh){xt.setOptional(U,z,"bindMatrix"),xt.setOptional(U,z,"bindMatrixInverse");const Vt=z.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),xt.setValue(U,"boneTexture",Vt.boneTexture,Xe))}z.isBatchedMesh&&(xt.setOptional(U,z,"batchingTexture"),xt.setValue(U,"batchingTexture",z._matricesTexture,Xe),xt.setOptional(U,z,"batchingIdTexture"),xt.setValue(U,"batchingIdTexture",z._indirectTexture,Xe),xt.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&xt.setValue(U,"batchingColorTexture",z._colorsTexture,Xe));const gn=W.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&ie.update(z,W,an),(on||Le.receiveShadow!==z.receiveShadow)&&(Le.receiveShadow=z.receiveShadow,xt.setValue(U,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(mn.envMap.value=me,mn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(mn.envMapIntensity.value=k.environmentIntensity),on&&(xt.setValue(U,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&Wh(mn,mr),ne&&X.fog===!0&&Z.refreshFogUniforms(mn,ne),Z.refreshMaterialUniforms(mn,X,G,j,p.state.transmissionRenderTarget[R.id]),ao.upload(U,Ru(Le),mn,Xe)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ao.upload(U,Ru(Le),mn,Xe),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(U,"center",z.center),xt.setValue(U,"modelViewMatrix",z.modelViewMatrix),xt.setValue(U,"normalMatrix",z.normalMatrix),xt.setValue(U,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vt=X.uniformsGroups;for(let $t=0,Po=Vt.length;$t<Po;$t++){const Yi=Vt[$t];Ge.update(Yi,an),Ge.bind(Yi,an)}}return an}function Wh(R,k){R.ambientLightColor.needsUpdate=k,R.lightProbe.needsUpdate=k,R.directionalLights.needsUpdate=k,R.directionalLightShadows.needsUpdate=k,R.pointLights.needsUpdate=k,R.pointLightShadows.needsUpdate=k,R.spotLights.needsUpdate=k,R.spotLightShadows.needsUpdate=k,R.rectAreaLights.needsUpdate=k,R.hemisphereLights.needsUpdate=k}function Xh(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,k,W){const X=ve.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ve.get(R.texture).__webglTexture=k,ve.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,k){const W=ve.get(R);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0};const jh=U.createFramebuffer();this.setRenderTarget=function(R,k=0,W=0){C=R,E=k,T=W;let X=!0,z=null,ne=!1,de=!1;if(R){const me=ve.get(R);if(me.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(U.FRAMEBUFFER,null),X=!1;else if(me.__webglFramebuffer===void 0)Xe.setupRenderTarget(R);else if(me.__hasExternalTextures)Xe.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Re=R.depthTexture;if(me.__boundDepthTexture!==Re){if(Re!==null&&ve.has(Re)&&(R.width!==Re.image.width||R.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(R)}}const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(de=!0);const ke=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[k])?z=ke[k][W]:z=ke[k],ne=!0):R.samples>0&&Xe.useMultisampledRTT(R)===!1?z=ve.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?z=ke[W]:z=ke,A.copy(R.viewport),L.copy(R.scissor),D=R.scissorTest}else A.copy(pe).multiplyScalar(G).floor(),L.copy(Oe).multiplyScalar(G).floor(),D=Je;if(W!==0&&(z=jh),xe.bindFramebuffer(U.FRAMEBUFFER,z)&&X&&xe.drawBuffers(R,z),xe.viewport(A),xe.scissor(L),xe.setScissorTest(D),ne){const me=ve.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,me.__webglTexture,W)}else if(de){const me=k;for(let Ne=0;Ne<R.textures.length;Ne++){const ke=ve.get(R.textures[Ne]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ne,ke.__webglTexture,W,me)}}else if(R!==null&&W!==0){const me=ve.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(R,k,W,X,z,ne,de,be=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){xe.bindFramebuffer(U.FRAMEBUFFER,me);try{const Ne=R.textures[be],ke=Ne.format,Re=Ne.type;if(!Ie.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=R.width-X&&W>=0&&W<=R.height-z&&(R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(k,W,X,z,Te.convert(ke),Te.convert(Re),ne))}finally{const Ne=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(R,k,W,X,z,ne,de,be=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(k>=0&&k<=R.width-X&&W>=0&&W<=R.height-z){xe.bindFramebuffer(U.FRAMEBUFFER,me);const Ne=R.textures[be],ke=Ne.format,Re=Ne.type;if(!Ie.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.bufferData(U.PIXEL_PACK_BUFFER,ne.byteLength,U.STREAM_READ),R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+be),U.readPixels(k,W,X,z,Te.convert(ke),Te.convert(Re),0);const rt=C!==null?ve.get(C).__webglFramebuffer:null;xe.bindFramebuffer(U.FRAMEBUFFER,rt);const St=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await em(U,St,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ke),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ne),U.deleteBuffer(Ke),U.deleteSync(St),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,k=null,W=0){const X=Math.pow(2,-W),z=Math.floor(R.image.width*X),ne=Math.floor(R.image.height*X),de=k!==null?k.x:0,be=k!==null?k.y:0;Xe.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,de,be,z,ne),xe.unbindTexture()};const qh=U.createFramebuffer(),Kh=U.createFramebuffer();this.copyTextureToTexture=function(R,k,W=null,X=null,z=0,ne=null){ne===null&&(z!==0?(na("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=z,z=0):ne=0);let de,be,me,Ne,ke,Re,Ke,rt,St;const ft=R.isCompressedTexture?R.mipmaps[ne]:R.image;if(W!==null)de=W.max.x-W.min.x,be=W.max.y-W.min.y,me=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,ke=W.min.y,Re=W.isBox3?W.min.z:0;else{const gn=Math.pow(2,-z);de=Math.floor(ft.width*gn),be=Math.floor(ft.height*gn),R.isDataArrayTexture?me=ft.depth:R.isData3DTexture?me=Math.floor(ft.depth*gn):me=1,Ne=0,ke=0,Re=0}X!==null?(Ke=X.x,rt=X.y,St=X.z):(Ke=0,rt=0,St=0);const ot=Te.convert(k.format),Le=Te.convert(k.type);let _t;k.isData3DTexture?(Xe.setTexture3D(k,0),_t=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Xe.setTexture2DArray(k,0),_t=U.TEXTURE_2D_ARRAY):(Xe.setTexture2D(k,0),_t=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);const tt=U.getParameter(U.UNPACK_ROW_LENGTH),an=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ps=U.getParameter(U.UNPACK_SKIP_PIXELS),on=U.getParameter(U.UNPACK_SKIP_ROWS),mr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ft.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ft.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ne),U.pixelStorei(U.UNPACK_SKIP_ROWS,ke),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Re);const xt=R.isDataArrayTexture||R.isData3DTexture,mn=k.isDataArrayTexture||k.isData3DTexture;if(R.isDepthTexture){const gn=ve.get(R),Vt=ve.get(k),$t=ve.get(gn.__renderTarget),Po=ve.get(Vt.__renderTarget);xe.bindFramebuffer(U.READ_FRAMEBUFFER,$t.__webglFramebuffer),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Po.__webglFramebuffer);for(let Yi=0;Yi<me;Yi++)xt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.get(R).__webglTexture,z,Re+Yi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ve.get(k).__webglTexture,ne,St+Yi)),U.blitFramebuffer(Ne,ke,de,be,Ke,rt,de,be,U.DEPTH_BUFFER_BIT,U.NEAREST);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||R.isRenderTargetTexture||ve.has(R)){const gn=ve.get(R),Vt=ve.get(k);xe.bindFramebuffer(U.READ_FRAMEBUFFER,qh),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kh);for(let $t=0;$t<me;$t++)xt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,z,Re+$t):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,z),mn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vt.__webglTexture,ne,St+$t):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,ne),z!==0?U.blitFramebuffer(Ne,ke,de,be,Ke,rt,de,be,U.COLOR_BUFFER_BIT,U.NEAREST):mn?U.copyTexSubImage3D(_t,ne,Ke,rt,St+$t,Ne,ke,de,be):U.copyTexSubImage2D(_t,ne,Ke,rt,Ne,ke,de,be);xe.bindFramebuffer(U.READ_FRAMEBUFFER,null),xe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else mn?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(_t,ne,Ke,rt,St,de,be,me,ot,Le,ft.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(_t,ne,Ke,rt,St,de,be,me,ot,ft.data):U.texSubImage3D(_t,ne,Ke,rt,St,de,be,me,ot,Le,ft):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,ne,Ke,rt,de,be,ot,Le,ft.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,ne,Ke,rt,ft.width,ft.height,ot,ft.data):U.texSubImage2D(U.TEXTURE_2D,ne,Ke,rt,de,be,ot,Le,ft);U.pixelStorei(U.UNPACK_ROW_LENGTH,tt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,an),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ps),U.pixelStorei(U.UNPACK_SKIP_ROWS,on),U.pixelStorei(U.UNPACK_SKIP_IMAGES,mr),ne===0&&k.generateMipmaps&&U.generateMipmap(_t),xe.unbindTexture()},this.initRenderTarget=function(R){ve.get(R).__webglFramebuffer===void 0&&Xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Xe.setTextureCube(R,0):R.isData3DTexture?Xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Xe.setTexture2DArray(R,0):Xe.setTexture2D(R,0),xe.unbindTexture()},this.resetState=function(){E=0,T=0,C=null,xe.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}}function Z0(s,e=!1){const t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new rn;let l=0;for(let d=0;d<s.length;++d){const u=s[d];let f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const h in u.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(u.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const h in u.morphAttributes){if(!i.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(u.morphAttributes[h])}if(e){let h;if(t)h=u.index.count;else if(u.attributes.position!==void 0)h=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,h,d),l+=h}}if(t){let d=0;const u=[];for(let f=0;f<s.length;++f){const h=s[f].index;for(let g=0;g<h.count;++g)u.push(h.getX(g)+d);d+=s[f].attributes.position.count}c.setIndex(u)}for(const d in r){const u=Yf(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;c.setAttribute(d,u)}for(const d in a){const u=a[d][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[d]=[];for(let f=0;f<u;++f){const h=[];for(let x=0;x<a[d].length;++x)h.push(a[d][x][f]);const g=Yf(h);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;c.morphAttributes[d].push(g)}}return c}function Yf(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){const d=s[l];if(e===void 0&&(e=d.array.constructor),e!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=d.itemSize),t!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=d.gpuType),i!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*t}const a=new e(r),o=new Ft(a,t,n);let c=0;for(let l=0;l<s.length;++l){const d=s[l];if(d.isInterleavedBufferAttribute){const u=c/t;for(let f=0,h=d.count;f<h;f++)for(let g=0;g<t;g++){const x=d.getComponent(f,g);o.setComponent(f+u,g,x)}}else a.set(d.array,c);c+=d.count*t}return i!==void 0&&(o.gpuType=i),o}function Jf(s,e){if(e===wp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===bl||e===kd){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===bl)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class hu extends hr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iv(t)}),this.register(function(t){return new sv(t)}),this.register(function(t){return new hv(t)}),this.register(function(t){return new pv(t)}),this.register(function(t){return new mv(t)}),this.register(function(t){return new av(t)}),this.register(function(t){return new ov(t)}),this.register(function(t){return new cv(t)}),this.register(function(t){return new lv(t)}),this.register(function(t){return new nv(t)}),this.register(function(t){return new uv(t)}),this.register(function(t){return new rv(t)}),this.register(function(t){return new dv(t)}),this.register(function(t){return new fv(t)}),this.register(function(t){return new ev(t)}),this.register(function(t){return new gv(t)}),this.register(function(t){return new bv(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=Gr.extractUrlBase(e);a=Gr.resolveURL(l,this.path)}else a=Gr.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new oh(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(d){t(d),r.manager.itemEnd(e)},o)}catch(d){o(d)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===gh){try{a[qe.KHR_BINARY_GLTF]=new _v(e)}catch(u){i&&i(u);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Lv(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const u=this.pluginCallbacks[d](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let d=0;d<r.extensionsUsed.length;++d){const u=r.extensionsUsed[d],f=r.extensionsRequired||[];switch(u){case qe.KHR_MATERIALS_UNLIT:a[u]=new tv;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new xv(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[u]=new vv;break;case qe.KHR_MESH_QUANTIZATION:a[u]=new yv;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Q0(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ev{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const d=new De(16777215);c.color!==void 0&&d.setRGB(c.color[0],c.color[1],c.color[2],Yt);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new tg(d),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new lh(d),l.distance=u;break;case"spot":l=new ch(d),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),jn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class tv{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return gi}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Yt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,It))}return Promise.all(i)}}class nv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class iv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ue(o,o)}return Promise.all(r)}}class sv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class rv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class av{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Yt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,It)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class ov{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class cv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(o[0],o[1],o[2],Yt),Promise.all(r)}}class lv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class uv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(o[0],o[1],o[2],Yt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,It)),Promise.all(r)}}class fv{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class dv{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ri}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class hv{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class pv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class mv{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class gv{constructor(e){this.name=qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,d=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(d,u,f,i.mode,i.filter).then(function(h){return h.buffer}):a.ready.then(function(){const h=new ArrayBuffer(d*u);return a.decodeGltfBuffer(new Uint8Array(h),d,u,f,i.mode,i.filter),h})})}else return null}}class bv{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==xn.TRIANGLES&&l.mode!==xn.TRIANGLE_STRIP&&l.mode!==xn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(d=>(c[l]=d,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const d=l.pop(),u=d.isGroup?d.children:[d],f=l[0].count,h=[];for(const g of u){const x=new Pe,m=new P,p=new Cn,y=new P(1,1,1),_=new Qd(g.geometry,g.material,f);for(let b=0;b<f;b++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,b),c.SCALE&&y.fromBufferAttribute(c.SCALE,b),_.setMatrixAt(b,x.compose(m,p,y));for(const b in c)if(b==="_COLOR_0"){const v=c[b];_.instanceColor=new xl(v.array,v.itemSize,v.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);dt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),h.push(_)}return d.isGroup?(d.clear(),d.add(...h),d):h[0]}))}}const gh="glTF",Er=12,$f={JSON:1313821514,BIN:5130562};class _v{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Er),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==gh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Er,r=new DataView(e,Er);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===$f.JSON){const l=new Uint8Array(e,Er+a,o);this.content=n.decode(l)}else if(c===$f.BIN){const l=Er+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xv{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const d in a){const u=El[d]||d.toLowerCase();o[u]=a[d]}for(const d in e.attributes){const u=El[d]||d.toLowerCase();if(a[d]!==void 0){const f=n.accessors[e.attributes[d]],h=qs[f.componentType];l[u]=h.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(d){return new Promise(function(u,f){i.decodeDracoFile(d,function(h){for(const g in h.attributes){const x=h.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(h)},o,l,Yt,f)})})}}class vv{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class yv{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}}class bh extends oa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,d=i-t,u=(n-t)/d,f=u*u,h=f*u,g=e*l,x=g-l,m=-2*h+3*f,p=h-f,y=1-m,_=p-f+u;for(let b=0;b!==o;b++){const v=a[x+b+o],E=a[x+b+c]*d,T=a[g+b+o],C=a[g+b]*d;r[b]=y*v+_*E+m*T+p*C}return r}}const Mv=new Cn;class Sv extends bh{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Mv.fromArray(r).normalize().toArray(r),r}}const xn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Zf={9728:qt,9729:jt,9984:Ld,9985:to,9986:Ur,9987:Fn},Qf={33071:Bi,33648:fo,10497:Qs},hc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},El={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ci={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ev={CUBICSPLINE:void 0,LINEAR:ea,STEP:Qr},pc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Tv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ia({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),s.DefaultMaterial}function ns(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function jn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,d=e.length;l<d;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,d=e.length;l<d;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const d=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=d),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function Av(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Rv(s){let e;const t=s.extensions&&s.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+mc(t.attributes):e=s.indices+":"+mc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+mc(s.targets[n]);return e}function mc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Tl(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cv(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Pv=new Pe;class Lv{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Q0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Jm(this.options.manager):this.textureLoader=new ng(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oh(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ns(r,o,i),jn(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,d]of a.children.entries())r(d,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(Gr.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=hc[i.type],o=qs[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new Ft(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=hc[i.type],l=qs[i.componentType],d=l.BYTES_PER_ELEMENT,u=d*c,f=i.byteOffset||0,h=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(h&&h!==u){const p=Math.floor(f/h),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let _=t.cache.get(y);_||(x=new l(o,p*h,i.count*h/d),_=new Em(x,h/d),t.cache.add(y,_)),m=new nu(_,c,f%h/d,g)}else o===null?x=new l(i.count*c):x=new l(o,f,i.count*c),m=new Ft(x,c,g);if(i.sparse!==void 0){const p=hc.SCALAR,y=qs[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,v=new y(a[1],_,i.sparse.count*p),E=new l(a[2],b,i.sparse.count*c);o!==null&&(m=new Ft(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,C=v.length;T<C;T++){const S=v[T];if(m.setX(S,E[T*c]),c>=2&&m.setY(S,E[T*c+1]),c>=3&&m.setZ(S,E[T*c+2]),c>=4&&m.setW(S,E[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(d){d.flipY=!1,d.name=a.name||o.name||"",d.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(d.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return d.magFilter=Zf[f.magFilter]||jt,d.minFilter=Zf[f.minFilter]||Fn,d.wrapS=Qf[f.wrapS]||Qs,d.wrapT=Qf[f.wrapT]||Qs,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==qt&&d.minFilter!==jt,i.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(c).then(function(u){return new Promise(function(f,h){let g=f;t.isImageBitmapLoader===!0&&(g=function(x){const m=new Ut(x);m.needsUpdate=!0,f(m)}),t.load(Gr.resolveURL(u,r.path),g,void 0,h)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),jn(u,a),u.userData.mimeType=a.mimeType||Cv(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new th,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new eh,zn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ia}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){const u=i[qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new De(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Yt),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,It)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=tn);const d=r.alphaMode||pc.OPAQUE;if(d===pc.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,d===pc.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==gi&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ue(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==gi&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==gi){const u=r.emissiveFactor;o.emissive=new De().setRGB(u[0],u[1],u[2],Yt)}return r.emissiveTexture!==void 0&&a!==gi&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,It)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),jn(u,r),t.associations.set(u,{materials:e}),r.extensions&&ns(i,u,r),u})}createUniqueName(e){const t=st.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return ed(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],d=Rv(l),u=i[d];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=ed(new rn,l,t),i[d]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const d=a[c].material===void 0?Tv(this.cache):this.getDependency("material",a[c].material);o.push(d)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),d=c[c.length-1],u=[];for(let h=0,g=d.length;h<g;h++){const x=d[h],m=a[h];let p;const y=l[h];if(m.mode===xn.TRIANGLES||m.mode===xn.TRIANGLE_STRIP||m.mode===xn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new wm(x,y):new gt(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===xn.TRIANGLE_STRIP?p.geometry=Jf(p.geometry,kd):m.mode===xn.TRIANGLE_FAN&&(p.geometry=Jf(p.geometry,bl));else if(m.mode===xn.LINES)p=new Dm(x,y);else if(m.mode===xn.LINE_STRIP)p=new ru(x,y);else if(m.mode===xn.LINE_LOOP)p=new Im(x,y);else if(m.mode===xn.POINTS)p=new nh(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Av(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),jn(p,r),m.extensions&&ns(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let h=0,g=u.length;h<g;h++)t.associations.set(u[h],{meshes:e,primitives:h});if(u.length===1)return r.extensions&&ns(i,u[0],r),u[0];const f=new On;r.extensions&&ns(i,f,r),t.associations.set(f,{meshes:e});for(let h=0,g=u.length;h<g;h++)f.add(u[h]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new zt(Rn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new lu(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),jn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,d=a.length;l<d;l++){const u=a[l];if(u){o.push(u);const f=new Pe;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new iu(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],d=[];for(let u=0,f=i.channels.length;u<f;u++){const h=i.channels[u],g=i.samplers[h.sampler],x=h.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),d.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(d)]).then(function(u){const f=u[0],h=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,b=f.length;_<b;_++){const v=f[_],E=h[_],T=g[_],C=x[_],S=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=n._createAnimationTracks(v,E,T,C,S);if(M)for(let A=0;A<M.length;A++)p.push(M[A])}const y=new Gm(r,void 0,p);return jn(y,i),y})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,d=o.length;l<d;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const d=l[0],u=l[1],f=l[2];f!==null&&d.traverse(function(h){h.isSkinnedMesh&&h.bind(f,Pv)});for(let h=0,g=u.length;h<g;h++)d.add(u[h]);return d})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let d;if(r.isBone===!0?d=new $d:l.length>1?d=new On:l.length===1?d=l[0]:d=new dt,d!==l[0])for(let u=0,f=l.length;u<f;u++)d.add(l[u]);if(r.name&&(d.userData.name=r.name,d.name=a),jn(d,r),r.extensions&&ns(n,d,r),r.matrix!==void 0){const u=new Pe;u.fromArray(r.matrix),d.applyMatrix4(u)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);if(!i.associations.has(d))i.associations.set(d,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){const u=i.associations.get(d);i.associations.set(d,{...u})}return i.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new On;n.name&&(r.name=i.createUniqueName(n.name)),jn(r,n),n.extensions&&ns(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let d=0,u=c.length;d<u;d++)r.add(c[d]);const l=d=>{const u=new Map;for(const[f,h]of i.associations)(f instanceof zn||f instanceof Ut)&&u.set(f,h);return d.traverse(f=>{const h=i.associations.get(f);h!=null&&u.set(f,h)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ci[r.path]===Ci.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Ci[r.path]){case Ci.weights:l=nr;break;case Ci.rotation:l=ir;break;case Ci.translation:case Ci.scale:l=sr;break;default:switch(n.itemSize){case 1:l=nr;break;case 2:case 3:default:l=sr;break}break}const d=i.interpolation!==void 0?Ev[i.interpolation]:ea,u=this._getArrayFromAccessor(n);for(let f=0,h=c.length;f<h;f++){const g=new l(c[f]+"."+Ci[r.path],t.array,u,d);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Tl(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ir?Sv:bh;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Dv(s,e,t){const n=e.attributes,i=new ut;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new P(c[0],c[1],c[2]),new P(l[0],l[1],l[2])),o.normalized){const d=Tl(qs[o.componentType]);i.min.multiplyScalar(d),i.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,c=new P;for(let l=0,d=r.length;l<d;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],h=f.min,g=f.max;if(h!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(h[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(h[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(h[2]),Math.abs(g[2]))),f.normalized){const x=Tl(qs[f.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new si;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function ed(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=El[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return $e.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),jn(s,e),Dv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wv(s,e.targets,t):s})}class Iv extends Jd{constructor(){super();const e=new hs;e.deleteAttribute("uv");const t=new ia({side:Ht}),n=new ia,i=new lh(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new gt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new Qd(e,n,6),o=new dt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const c=new gt(e,Is(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);const l=new gt(e,Is(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const d=new gt(e,Is(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const u=new gt(e,Is(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const f=new gt(e,Is(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const h=new gt(e,Is(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(s){return new Um({color:0,emissive:16777215,emissiveIntensity:s})}const _h=0,Uv=1,Fv=2,td=2,gc=1.25,nd=1,Wr=32,To=65535,Nv=Math.pow(2,-24),bc=Symbol("SKIP_GENERATION");function Ov(s){return s.index?s.index.count:s.attributes.position.count}function qi(s){return Ov(s)/3}function Bv(s,e=ArrayBuffer){return s>65535?new Uint32Array(new e(4*s)):new Uint16Array(new e(2*s))}function kv(s,e){if(!s.index){const t=s.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=Bv(t,n);s.setIndex(new Ft(i,1));for(let r=0;r<t;r++)i[r]=r}}function xh(s,e){const t=qi(s),n=e||s.drawRange,i=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,i),o=Math.min(t,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function vh(s,e){if(!s.groups||!s.groups.length)return xh(s,e);const t=[],n=new Set,i=e||s.drawRange,r=i.start/3,a=(i.start+i.count)/3;for(const c of s.groups){const l=c.start/3,d=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(a,d))}const o=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<o.length-1;c++){const l=o[c],d=o[c+1];t.push({offset:Math.floor(l),count:Math.floor(d-l)})}return t}function zv(s,e){const t=qi(s),n=vh(s,e).sort((a,o)=>a.offset-o.offset),i=n[n.length-1];i.count=Math.min(t-i.offset,i.count);let r=0;return n.forEach(({count:a})=>r+=a),t!==r}function _c(s,e,t,n,i){let r=1/0,a=1/0,o=1/0,c=-1/0,l=-1/0,d=-1/0,u=1/0,f=1/0,h=1/0,g=-1/0,x=-1/0,m=-1/0;for(let p=e*6,y=(e+t)*6;p<y;p+=6){const _=s[p+0],b=s[p+1],v=_-b,E=_+b;v<r&&(r=v),E>c&&(c=E),_<u&&(u=_),_>g&&(g=_);const T=s[p+2],C=s[p+3],S=T-C,M=T+C;S<a&&(a=S),M>l&&(l=M),T<f&&(f=T),T>x&&(x=T);const A=s[p+4],L=s[p+5],D=A-L,F=A+L;D<o&&(o=D),F>d&&(d=F),A<h&&(h=A),A>m&&(m=A)}n[0]=r,n[1]=a,n[2]=o,n[3]=c,n[4]=l,n[5]=d,i[0]=u,i[1]=f,i[2]=h,i[3]=g,i[4]=x,i[5]=m}function Hv(s,e=null,t=null,n=null){const i=s.attributes.position,r=s.index?s.index.array:null,a=qi(s),o=i.normalized;let c;e===null?c=new Float32Array(a*6):c=e,t=t||0,n=n||a;const l=i.array,d=i.offset||0;let u=3;i.isInterleavedBufferAttribute&&(u=i.data.stride);const f=["getX","getY","getZ"];for(let h=t;h<t+n;h++){const g=h*3,x=h*6;let m=g+0,p=g+1,y=g+2;r&&(m=r[m],p=r[p],y=r[y]),o||(m=m*u+d,p=p*u+d,y=y*u+d);for(let _=0;_<3;_++){let b,v,E;o?(b=i[f[_]](m),v=i[f[_]](p),E=i[f[_]](y)):(b=l[m+_],v=l[p+_],E=l[y+_]);let T=b;v<T&&(T=v),E<T&&(T=E);let C=b;v>C&&(C=v),E>C&&(C=E);const S=(C-T)/2,M=_*2;c[x+M+0]=T+S,c[x+M+1]=S+(Math.abs(T)+S)*Nv}}return c}function Et(s,e,t){return t.min.x=e[s],t.min.y=e[s+1],t.min.z=e[s+2],t.max.x=e[s+3],t.max.y=e[s+4],t.max.z=e[s+5],t}function id(s){let e=-1,t=-1/0;for(let n=0;n<3;n++){const i=s[n+3]-s[n];i>t&&(t=i,e=n)}return e}function sd(s,e){e.set(s)}function rd(s,e,t){let n,i;for(let r=0;r<3;r++){const a=r+3;n=s[r],i=e[r],t[r]=n<i?n:i,n=s[a],i=e[a],t[a]=n>i?n:i}}function ka(s,e,t){for(let n=0;n<3;n++){const i=e[s+2*n],r=e[s+2*n+1],a=i-r,o=i+r;a<t[n]&&(t[n]=a),o>t[n+3]&&(t[n+3]=o)}}function Tr(s){const e=s[3]-s[0],t=s[4]-s[1],n=s[5]-s[2];return 2*(e*t+t*n+n*e)}const pi=32,Vv=(s,e)=>s.candidate-e.candidate,Pi=new Array(pi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),za=new Float32Array(6);function Gv(s,e,t,n,i,r){let a=-1,o=0;if(r===_h)a=id(e),a!==-1&&(o=(e[a]+e[a+3])/2);else if(r===Uv)a=id(s),a!==-1&&(o=Wv(t,n,i,a));else if(r===Fv){const c=Tr(s);let l=gc*i;const d=n*6,u=(n+i)*6;for(let f=0;f<3;f++){const h=e[f],m=(e[f+3]-h)/pi;if(i<pi/4){const p=[...Pi];p.length=i;let y=0;for(let b=d;b<u;b+=6,y++){const v=p[y];v.candidate=t[b+2*f],v.count=0;const{bounds:E,leftCacheBounds:T,rightCacheBounds:C}=v;for(let S=0;S<3;S++)C[S]=1/0,C[S+3]=-1/0,T[S]=1/0,T[S+3]=-1/0,E[S]=1/0,E[S+3]=-1/0;ka(b,t,E)}p.sort(Vv);let _=i;for(let b=0;b<_;b++){const v=p[b];for(;b+1<_&&p[b+1].candidate===v.candidate;)p.splice(b+1,1),_--}for(let b=d;b<u;b+=6){const v=t[b+2*f];for(let E=0;E<_;E++){const T=p[E];v>=T.candidate?ka(b,t,T.rightCacheBounds):(ka(b,t,T.leftCacheBounds),T.count++)}}for(let b=0;b<_;b++){const v=p[b],E=v.count,T=i-v.count,C=v.leftCacheBounds,S=v.rightCacheBounds;let M=0;E!==0&&(M=Tr(C)/c);let A=0;T!==0&&(A=Tr(S)/c);const L=nd+gc*(M*E+A*T);L<l&&(a=f,l=L,o=v.candidate)}}else{for(let _=0;_<pi;_++){const b=Pi[_];b.count=0,b.candidate=h+m+_*m;const v=b.bounds;for(let E=0;E<3;E++)v[E]=1/0,v[E+3]=-1/0}for(let _=d;_<u;_+=6){let E=~~((t[_+2*f]-h)/m);E>=pi&&(E=pi-1);const T=Pi[E];T.count++,ka(_,t,T.bounds)}const p=Pi[pi-1];sd(p.bounds,p.rightCacheBounds);for(let _=pi-2;_>=0;_--){const b=Pi[_],v=Pi[_+1];rd(b.bounds,v.rightCacheBounds,b.rightCacheBounds)}let y=0;for(let _=0;_<pi-1;_++){const b=Pi[_],v=b.count,E=b.bounds,C=Pi[_+1].rightCacheBounds;v!==0&&(y===0?sd(E,za):rd(E,za,za)),y+=v;let S=0,M=0;y!==0&&(S=Tr(za)/c);const A=i-y;A!==0&&(M=Tr(C)/c);const L=nd+gc*(S*y+M*A);L<l&&(a=f,l=L,o=b.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function Wv(s,e,t,n){let i=0;for(let r=e,a=e+t;r<a;r++)i+=s[r*6+n*2];return i/t}class xc{constructor(){this.boundingData=new Float32Array(6)}}function Xv(s,e,t,n,i,r){let a=n,o=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){for(let d=0;d<3;d++){let u=e[a*3+d];e[a*3+d]=e[o*3+d],e[o*3+d]=u}for(let d=0;d<6;d++){let u=t[a*6+d];t[a*6+d]=t[o*6+d],t[o*6+d]=u}a++,o--}else return a}}function jv(s,e,t,n,i,r){let a=n,o=n+i-1;const c=r.pos,l=r.axis*2;for(;;){for(;a<=o&&t[a*6+l]<c;)a++;for(;a<=o&&t[o*6+l]>=c;)o--;if(a<o){let d=s[a];s[a]=s[o],s[o]=d;for(let u=0;u<6;u++){let f=t[a*6+u];t[a*6+u]=t[o*6+u],t[o*6+u]=f}a++,o--}else return a}}function nn(s,e){return e[s+15]===65535}function fn(s,e){return e[s+6]}function yn(s,e){return e[s+14]}function Mn(s){return s+8}function Sn(s,e){return e[s+6]}function yh(s,e){return e[s+7]}let Mh,Nr,oo,Sh;const qv=Math.pow(2,32);function wl(s){return"count"in s?1:1+wl(s.left)+wl(s.right)}function Kv(s,e,t){return Mh=new Float32Array(t),Nr=new Uint32Array(t),oo=new Uint16Array(t),Sh=new Uint8Array(t),Al(s,e)}function Al(s,e){const t=s/4,n=s/2,i="count"in e,r=e.boundingData;for(let a=0;a<6;a++)Mh[t+a]=r[a];if(i)if(e.buffer){const a=e.buffer;Sh.set(new Uint8Array(a),s);for(let o=s,c=s+a.byteLength;o<c;o+=Wr){const l=o/2;nn(l,oo)||(Nr[o/4+6]+=t)}return s+a.byteLength}else{const a=e.offset,o=e.count;return Nr[t+6]=a,oo[n+14]=o,oo[n+15]=To,s+Wr}else{const a=e.left,o=e.right,c=e.splitAxis;let l;if(l=Al(s+Wr,a),l/4>qv)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Nr[t+6]=l/4,l=Al(l,o),Nr[t+7]=c,l}}function Yv(s,e){const t=(s.index?s.index.count:s.attributes.position.count)/3,n=t>2**16,i=n?4:2,r=e?new SharedArrayBuffer(t*i):new ArrayBuffer(t*i),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,c=a.length;o<c;o++)a[o]=o;return a}function Jv(s,e,t,n,i){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:c,onProgress:l,indirect:d}=i,u=s._indirectBuffer,f=s.geometry,h=f.index?f.index.array:null,g=d?jv:Xv,x=qi(f),m=new Float32Array(6);let p=!1;const y=new xc;return _c(e,t,n,y.boundingData,m),b(y,t,n,m),y;function _(v){l&&l(v/x)}function b(v,E,T,C=null,S=0){if(!p&&S>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(f))),T<=o||S>=r)return _(E+T),v.offset=E,v.count=T,v;const M=Gv(v.boundingData,C,e,E,T,c);if(M.axis===-1)return _(E+T),v.offset=E,v.count=T,v;const A=g(u,h,e,E,T,M);if(A===E||A===E+T)_(E+T),v.offset=E,v.count=T;else{v.splitAxis=M.axis;const L=new xc,D=E,F=A-E;v.left=L,_c(e,D,F,L.boundingData,m),b(L,D,F,m,S+1);const O=new xc,B=A,j=T-F;v.right=O,_c(e,B,j,O.boundingData,m),b(O,B,j,m,S+1)}return v}}function $v(s,e){const t=s.geometry;e.indirect&&(s._indirectBuffer=Yv(t,e.useSharedArrayBuffer),zv(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),s._indirectBuffer||kv(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,i=xh(t,e.range),r=Hv(t,null,i[0].offset,i[0].count),a=e.indirect?i:vh(t,e.range);s._roots=a.map(o=>{const c=Jv(s,r,o.offset,o.count,e),l=wl(c),d=new n(Wr*l);return Kv(0,c,d),d})}class Mi{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,i=-1/0;for(let r=0,a=e.length;r<a;r++){const c=e[r][t];n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}setFromPoints(e,t){let n=1/0,i=-1/0;for(let r=0,a=t.length;r<a;r++){const o=t[r],c=e.dot(o);n=c<n?c:n,i=c>i?c:i}this.min=n,this.max=i}isSeparated(e){return this.min>e.max||e.min>this.max}}Mi.prototype.setFromBox=(function(){const s=new P;return function(t,n){const i=n.min,r=n.max;let a=1/0,o=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let d=0;d<=1;d++){s.x=i.x*c+r.x*(1-c),s.y=i.y*l+r.y*(1-l),s.z=i.z*d+r.z*(1-d);const u=t.dot(s);a=Math.min(u,a),o=Math.max(u,o)}this.min=a,this.max=o}})();const Zv=(function(){const s=new P,e=new P,t=new P;return function(i,r,a){const o=i.start,c=s,l=r.start,d=e;t.subVectors(o,l),s.subVectors(i.end,i.start),e.subVectors(r.end,r.start);const u=t.dot(d),f=d.dot(c),h=d.dot(d),g=t.dot(c),m=c.dot(c)*h-f*f;let p,y;m!==0?p=(u*f-g*h)/m:p=0,y=(u+p*f)/h,a.x=p,a.y=y}})(),pu=(function(){const s=new Ue,e=new P,t=new P;return function(i,r,a,o){Zv(i,r,s);let c=s.x,l=s.y;if(c>=0&&c<=1&&l>=0&&l<=1){i.at(c,a),r.at(l,o);return}else if(c>=0&&c<=1){l<0?r.at(0,o):r.at(1,o),i.closestPointToPoint(o,!0,a);return}else if(l>=0&&l<=1){c<0?i.at(0,a):i.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let d;c<0?d=i.start:d=i.end;let u;l<0?u=r.start:u=r.end;const f=e,h=t;if(i.closestPointToPoint(u,!0,e),r.closestPointToPoint(d,!0,t),f.distanceToSquared(u)<=h.distanceToSquared(d)){a.copy(f),o.copy(u);return}else{a.copy(d),o.copy(h);return}}}})(),Qv=(function(){const s=new P,e=new P,t=new qn,n=new ni;return function(r,a){const{radius:o,center:c}=r,{a:l,b:d,c:u}=a;if(n.start=l,n.end=d,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o||(n.start=l,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o)||(n.start=d,n.end=u,n.closestPointToPoint(c,!0,s).distanceTo(c)<=o))return!0;const x=a.getPlane(t);if(Math.abs(x.distanceToPoint(c))<=o){const p=x.projectPoint(c,e);if(a.containsPoint(p))return!0}return!1}})(),ey=["x","y","z"],mi=1e-15,ad=mi*mi;function _n(s){return Math.abs(s)<mi}class Vn extends Rt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Mi),this.points=[this.a,this.b,this.c],this.plane=new qn,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new ni,this.needsUpdate=!0}intersectsSphere(e){return Qv(e,this)}update(){const e=this.a,t=this.b,n=this.c,i=this.points,r=this.satAxes,a=this.satBounds,o=r[0],c=a[0];this.getNormal(o),c.setFromPoints(o,i);const l=r[1],d=a[1];l.subVectors(e,t),d.setFromPoints(l,i);const u=r[2],f=a[2];u.subVectors(t,n),f.setFromPoints(u,i);const h=r[3],g=a[3];h.subVectors(n,e),g.setFromPoints(h,i);const x=l.length(),m=u.length(),p=h.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,x<mi?m<mi||p<mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(n)):m<mi?p<mi?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):p<mi&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(o,e),this.needsUpdate=!1}}Vn.prototype.closestPointToSegment=(function(){const s=new P,e=new P,t=new ni;return function(i,r=null,a=null){const{start:o,end:c}=i,l=this.points;let d,u=1/0;for(let f=0;f<3;f++){const h=(f+1)%3;t.start.copy(l[f]),t.end.copy(l[h]),pu(t,i,s,e),d=s.distanceToSquared(e),d<u&&(u=d,r&&r.copy(s),a&&a.copy(e))}return this.closestPointToPoint(o,s),d=o.distanceToSquared(s),d<u&&(u=d,r&&r.copy(s),a&&a.copy(o)),this.closestPointToPoint(c,s),d=c.distanceToSquared(s),d<u&&(u=d,r&&r.copy(s),a&&a.copy(c)),Math.sqrt(u)}})();Vn.prototype.intersectsTriangle=(function(){const s=new Vn,e=new Mi,t=new Mi,n=new P,i=new P,r=new P,a=new P,o=new ni,c=new ni,l=new P,d=new Ue,u=new Ue;function f(_,b,v,E){const T=n;!_.isDegenerateIntoPoint&&!_.isDegenerateIntoSegment?T.copy(_.plane.normal):T.copy(b.plane.normal);const C=_.satBounds,S=_.satAxes;for(let L=1;L<4;L++){const D=C[L],F=S[L];if(e.setFromPoints(F,b.points),D.isSeparated(e)||(a.copy(T).cross(F),e.setFromPoints(a,_.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}const M=b.satBounds,A=b.satAxes;for(let L=1;L<4;L++){const D=M[L],F=A[L];if(e.setFromPoints(F,_.points),D.isSeparated(e)||(a.crossVectors(T,F),e.setFromPoints(a,_.points),t.setFromPoints(a,b.points),e.isSeparated(t)))return!1}return v&&(E||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),v.start.set(0,0,0),v.end.set(0,0,0)),!0}function h(_,b,v,E,T,C,S,M,A,L,D){let F=S/(S-M);L.x=E+(T-E)*F,D.start.subVectors(b,_).multiplyScalar(F).add(_),F=S/(S-A),L.y=E+(C-E)*F,D.end.subVectors(v,_).multiplyScalar(F).add(_)}function g(_,b,v,E,T,C,S,M,A,L,D){if(T>0)h(_.c,_.a,_.b,E,b,v,A,S,M,L,D);else if(C>0)h(_.b,_.a,_.c,v,b,E,M,S,A,L,D);else if(M*A>0||S!=0)h(_.a,_.b,_.c,b,v,E,S,M,A,L,D);else if(M!=0)h(_.b,_.a,_.c,v,b,E,M,S,A,L,D);else if(A!=0)h(_.c,_.a,_.b,E,b,v,A,S,M,L,D);else return!0;return!1}function x(_,b,v,E){const T=b.degenerateSegment,C=_.plane.distanceToPoint(T.start),S=_.plane.distanceToPoint(T.end);return _n(C)?_n(S)?f(_,b,v,E):(v&&(v.start.copy(T.start),v.end.copy(T.start)),_.containsPoint(T.start)):_n(S)?(v&&(v.start.copy(T.end),v.end.copy(T.end)),_.containsPoint(T.end)):_.plane.intersectLine(T,n)!=null?(v&&(v.start.copy(n),v.end.copy(n)),_.containsPoint(n)):!1}function m(_,b,v){const E=b.a;return _n(_.plane.distanceToPoint(E))&&_.containsPoint(E)?(v&&(v.start.copy(E),v.end.copy(E)),!0):!1}function p(_,b,v){const E=_.degenerateSegment,T=b.a;return E.closestPointToPoint(T,!0,n),T.distanceToSquared(n)<ad?(v&&(v.start.copy(T),v.end.copy(T)),!0):!1}function y(_,b,v,E){if(_.isDegenerateIntoSegment)if(b.isDegenerateIntoSegment){const T=_.degenerateSegment,C=b.degenerateSegment,S=i,M=r;T.delta(S),C.delta(M);const A=n.subVectors(C.start,T.start),L=S.x*M.y-S.y*M.x;if(_n(L))return!1;const D=(A.x*M.y-A.y*M.x)/L,F=-(S.x*A.y-S.y*A.x)/L;if(D<0||D>1||F<0||F>1)return!1;const O=T.start.z+S.z*D,B=C.start.z+M.z*F;return _n(O-B)?(v&&(v.start.copy(T.start).addScaledVector(S,D),v.end.copy(T.start).addScaledVector(S,D)),!0):!1}else return b.isDegenerateIntoPoint?p(_,b,v):x(b,_,v,E);else{if(_.isDegenerateIntoPoint)return b.isDegenerateIntoPoint?b.a.distanceToSquared(_.a)<ad?(v&&(v.start.copy(_.a),v.end.copy(_.a)),!0):!1:b.isDegenerateIntoSegment?p(b,_,v):m(b,_,v);if(b.isDegenerateIntoPoint)return m(_,b,v);if(b.isDegenerateIntoSegment)return x(_,b,v,E)}}return function(b,v=null,E=!1){this.needsUpdate&&this.update(),b.isExtendedTriangle?b.needsUpdate&&b.update():(s.copy(b),s.update(),b=s);const T=y(this,b,v,E);if(T!==void 0)return T;const C=this.plane,S=b.plane;let M=S.distanceToPoint(this.a),A=S.distanceToPoint(this.b),L=S.distanceToPoint(this.c);_n(M)&&(M=0),_n(A)&&(A=0),_n(L)&&(L=0);const D=M*A,F=M*L;if(D>0&&F>0)return!1;let O=C.distanceToPoint(b.a),B=C.distanceToPoint(b.b),j=C.distanceToPoint(b.c);_n(O)&&(O=0),_n(B)&&(B=0),_n(j)&&(j=0);const G=O*B,ee=O*j;if(G>0&&ee>0)return!1;i.copy(C.normal),r.copy(S.normal);const ae=i.cross(r);let pe=0,Oe=Math.abs(ae.x);const Je=Math.abs(ae.y);Je>Oe&&(Oe=Je,pe=1),Math.abs(ae.z)>Oe&&(pe=2);const te=ey[pe],V=this.a[te],q=this.b[te],K=this.c[te],oe=b.a[te],le=b.b[te],Ce=b.c[te];if(g(this,V,q,K,D,F,M,A,L,d,o))return f(this,b,v,E);if(g(b,oe,le,Ce,G,ee,O,B,j,u,c))return f(this,b,v,E);if(d.y<d.x){const Ye=d.y;d.y=d.x,d.x=Ye,l.copy(o.start),o.start.copy(o.end),o.end.copy(l)}if(u.y<u.x){const Ye=u.y;u.y=u.x,u.x=Ye,l.copy(c.start),c.start.copy(c.end),c.end.copy(l)}return d.y<u.x||u.y<d.x?!1:(v&&(u.x>d.x?v.start.copy(c.start):v.start.copy(o.start),u.y<d.y?v.end.copy(c.end):v.end.copy(o.end)),!0)}})();Vn.prototype.distanceToPoint=(function(){const s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Vn.prototype.distanceToTriangle=(function(){const s=new P,e=new P,t=["a","b","c"],n=new ni,i=new ni;return function(a,o=null,c=null){const l=o||c?n:null;if(this.intersectsTriangle(a,l))return(o||c)&&(o&&l.getCenter(o),c&&l.getCenter(c)),0;let d=1/0;for(let u=0;u<3;u++){let f;const h=t[u],g=a[h];this.closestPointToPoint(g,s),f=g.distanceToSquared(s),f<d&&(d=f,o&&o.copy(s),c&&c.copy(g));const x=this[h];a.closestPointToPoint(x,s),f=x.distanceToSquared(s),f<d&&(d=f,o&&o.copy(x),c&&c.copy(s))}for(let u=0;u<3;u++){const f=t[u],h=t[(u+1)%3];n.set(this[f],this[h]);for(let g=0;g<3;g++){const x=t[g],m=t[(g+1)%3];i.set(a[x],a[m]),pu(n,i,s,e);const p=s.distanceToSquared(e);p<d&&(d=p,o&&o.copy(s),c&&c.copy(e))}}return Math.sqrt(d)}})();class Jt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new Pe,this.invMatrix=new Pe,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Mi),this.alignedSatBounds=new Array(3).fill().map(()=>new Mi),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Jt.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,n=this.max,i=this.points;for(let l=0;l<=1;l++)for(let d=0;d<=1;d++)for(let u=0;u<=1;u++){const f=1*l|2*d|4*u,h=i[f];h.x=l?n.x:t.x,h.y=d?n.y:t.y,h.z=u?n.z:t.z,h.applyMatrix4(e)}const r=this.satBounds,a=this.satAxes,o=i[0];for(let l=0;l<3;l++){const d=a[l],u=r[l],f=1<<l,h=i[f];d.subVectors(o,h),u.setFromPoints(d,i)}const c=this.alignedSatBounds;c[0].setFromPointsField(i,"x"),c[1].setFromPointsField(i,"y"),c[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Jt.prototype.intersectsBox=(function(){const s=new Mi;return function(t){this.needsUpdate&&this.update();const n=t.min,i=t.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(s.min=n.x,s.max=i.x,o[0].isSeparated(s)||(s.min=n.y,s.max=i.y,o[1].isSeparated(s))||(s.min=n.z,s.max=i.z,o[2].isSeparated(s)))return!1;for(let c=0;c<3;c++){const l=a[c],d=r[c];if(s.setFromBox(l,t),d.isSeparated(s))return!1}return!0}})();Jt.prototype.intersectsTriangle=(function(){const s=new Vn,e=new Array(3),t=new Mi,n=new Mi,i=new P;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(s.copy(a),s.update(),a=s);const o=this.satBounds,c=this.satAxes;e[0]=a.a,e[1]=a.b,e[2]=a.c;for(let f=0;f<3;f++){const h=o[f],g=c[f];if(t.setFromPoints(g,e),h.isSeparated(t))return!1}const l=a.satBounds,d=a.satAxes,u=this.points;for(let f=0;f<3;f++){const h=l[f],g=d[f];if(t.setFromPoints(g,u),h.isSeparated(t))return!1}for(let f=0;f<3;f++){const h=c[f];for(let g=0;g<4;g++){const x=d[g];if(i.crossVectors(h,x),t.setFromPoints(i,e),n.setFromPoints(i,u),t.isSeparated(n))return!1}}return!0}})();Jt.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();Jt.prototype.distanceToPoint=(function(){const s=new P;return function(t){return this.closestPointToPoint(t,s),t.distanceTo(s)}})();Jt.prototype.distanceToBox=(function(){const s=["x","y","z"],e=new Array(12).fill().map(()=>new ni),t=new Array(12).fill().map(()=>new ni),n=new P,i=new P;return function(a,o=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(c||l)&&(a.getCenter(i),this.closestPointToPoint(i,n),a.closestPointToPoint(n,i),c&&c.copy(n),l&&l.copy(i)),0;const d=o*o,u=a.min,f=a.max,h=this.points;let g=1/0;for(let m=0;m<8;m++){const p=h[m];i.copy(p).clamp(u,f);const y=p.distanceToSquared(i);if(y<g&&(g=y,c&&c.copy(p),l&&l.copy(i),y<d))return Math.sqrt(y)}let x=0;for(let m=0;m<3;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){const _=(m+1)%3,b=(m+2)%3,v=p<<_|y<<b,E=1<<m|p<<_|y<<b,T=h[v],C=h[E];e[x].set(T,C);const M=s[m],A=s[_],L=s[b],D=t[x],F=D.start,O=D.end;F[M]=u[M],F[A]=p?u[A]:f[A],F[L]=y?u[L]:f[A],O[M]=f[M],O[A]=p?u[A]:f[A],O[L]=y?u[L]:f[A],x++}for(let m=0;m<=1;m++)for(let p=0;p<=1;p++)for(let y=0;y<=1;y++){i.x=m?f.x:u.x,i.y=p?f.y:u.y,i.z=y?f.z:u.z,this.closestPointToPoint(i,n);const _=i.distanceToSquared(n);if(_<g&&(g=_,c&&c.copy(n),l&&l.copy(i),_<d))return Math.sqrt(_)}for(let m=0;m<12;m++){const p=e[m];for(let y=0;y<12;y++){const _=t[y];pu(p,_,n,i);const b=n.distanceToSquared(i);if(b<g&&(g=b,c&&c.copy(n),l&&l.copy(i),b<d))return Math.sqrt(b)}}return Math.sqrt(g)}})();class mu{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class ty extends mu{constructor(){super(()=>new Vn)}}const En=new ty;class ny{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ht=new ny;let ki,Gs;const Us=[],Ha=new mu(()=>new ut);function iy(s,e,t,n,i,r){ki=Ha.getPrimitive(),Gs=Ha.getPrimitive(),Us.push(ki,Gs),ht.setBuffer(s._roots[e]);const a=Rl(0,s.geometry,t,n,i,r);ht.clearBuffer(),Ha.releasePrimitive(ki),Ha.releasePrimitive(Gs),Us.pop(),Us.pop();const o=Us.length;return o>0&&(Gs=Us[o-1],ki=Us[o-2]),a}function Rl(s,e,t,n,i=null,r=0,a=0){const{float32Array:o,uint16Array:c,uint32Array:l}=ht;let d=s*2;if(nn(d,c)){const g=fn(s,l),x=yn(d,c);return Et(s,o,ki),n(g,x,!1,a,r+s,ki)}else{let L=function(F){const{uint16Array:O,uint32Array:B}=ht;let j=F*2;for(;!nn(j,O);)F=Mn(F),j=F*2;return fn(F,B)},D=function(F){const{uint16Array:O,uint32Array:B}=ht;let j=F*2;for(;!nn(j,O);)F=Sn(F,B),j=F*2;return fn(F,B)+yn(j,O)};var f=L,h=D;const g=Mn(s),x=Sn(s,l);let m=g,p=x,y,_,b,v;if(i&&(b=ki,v=Gs,Et(m,o,b),Et(p,o,v),y=i(b),_=i(v),_<y)){m=x,p=g;const F=y;y=_,_=F,b=v}b||(b=ki,Et(m,o,b));const E=nn(m*2,c),T=t(b,E,y,a+1,r+m);let C;if(T===td){const F=L(m),B=D(m)-F;C=n(F,B,!0,a+1,r+m,b)}else C=T&&Rl(m,e,t,n,i,r,a+1);if(C)return!0;v=Gs,Et(p,o,v);const S=nn(p*2,c),M=t(v,S,_,a+1,r+p);let A;if(M===td){const F=L(p),B=D(p)-F;A=n(F,B,!0,a+1,r+p,v)}else A=M&&Rl(p,e,t,n,i,r,a+1);return!!A}}const wr=new P,vc=new P;function sy(s,e,t={},n=0,i=1/0){const r=n*n,a=i*i;let o=1/0,c=null;if(s.shapecast({boundsTraverseOrder:d=>(wr.copy(e).clamp(d.min,d.max),wr.distanceToSquared(e)),intersectsBounds:(d,u,f)=>f<o&&f<a,intersectsTriangle:(d,u)=>{d.closestPointToPoint(e,wr);const f=e.distanceToSquared(wr);return f<o&&(vc.copy(wr),o=f,c=u),f<r}}),o===1/0)return null;const l=Math.sqrt(o);return t.point?t.point.copy(vc):t.point=vc.clone(),t.distance=l,t.faceIndex=c,t}const Va=parseInt(aa)>=169,ry=parseInt(aa)<=161,is=new P,ss=new P,rs=new P,Ga=new Ue,Wa=new Ue,Xa=new Ue,od=new P,cd=new P,ld=new P,Ar=new P;function ay(s,e,t,n,i,r,a,o){let c;if(r===Ht?c=s.intersectTriangle(n,t,e,!0,i):c=s.intersectTriangle(e,t,n,r!==tn,i),c===null)return null;const l=s.origin.distanceTo(i);return l<a||l>o?null:{distance:l,point:i.clone()}}function oy(s,e,t,n,i,r,a,o,c,l,d){is.fromBufferAttribute(e,r),ss.fromBufferAttribute(e,a),rs.fromBufferAttribute(e,o);const u=ay(s,is,ss,rs,Ar,c,l,d);if(u){if(n){Ga.fromBufferAttribute(n,r),Wa.fromBufferAttribute(n,a),Xa.fromBufferAttribute(n,o),u.uv=new Ue;const h=Rt.getInterpolation(Ar,is,ss,rs,Ga,Wa,Xa,u.uv);Va||(u.uv=h)}if(i){Ga.fromBufferAttribute(i,r),Wa.fromBufferAttribute(i,a),Xa.fromBufferAttribute(i,o),u.uv1=new Ue;const h=Rt.getInterpolation(Ar,is,ss,rs,Ga,Wa,Xa,u.uv1);Va||(u.uv1=h),ry&&(u.uv2=u.uv1)}if(t){od.fromBufferAttribute(t,r),cd.fromBufferAttribute(t,a),ld.fromBufferAttribute(t,o),u.normal=new P;const h=Rt.getInterpolation(Ar,is,ss,rs,od,cd,ld,u.normal);u.normal.dot(s.direction)>0&&u.normal.multiplyScalar(-1),Va||(u.normal=h)}const f={a:r,b:a,c:o,normal:new P,materialIndex:0};if(Rt.getNormal(is,ss,rs,f.normal),u.face=f,u.faceIndex=r,Va){const h=new P;Rt.getBarycoord(Ar,is,ss,rs,h),u.barycoord=h}}return u}function wo(s,e,t,n,i,r,a){const o=n*3;let c=o+0,l=o+1,d=o+2;const u=s.index;s.index&&(c=u.getX(c),l=u.getX(l),d=u.getX(d));const{position:f,normal:h,uv:g,uv1:x}=s.attributes,m=oy(t,f,h,g,x,c,l,d,e,r,a);return m?(m.faceIndex=n,i&&i.push(m),m):null}function At(s,e,t,n){const i=s.a,r=s.b,a=s.c;let o=e,c=e+1,l=e+2;t&&(o=t.getX(o),c=t.getX(c),l=t.getX(l)),i.x=n.getX(o),i.y=n.getY(o),i.z=n.getZ(o),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),a.x=n.getX(l),a.y=n.getY(l),a.z=n.getZ(l)}function cy(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let d=n,u=n+i;d<u;d++)wo(c,e,t,d,r,a,o)}function ly(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,d=null;for(let u=n,f=n+i;u<f;u++){let h;h=wo(o,e,t,u,null,r,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function uy(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=s,u=e+s;d<u;d++){let f;if(f=d,At(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function fy(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const d=s._roots;for(let f=0,h=d.length;f<h;f++)r=d[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,h,g=!1){const x=f*2;if(o[x+15]===To){const p=a[f+6],y=o[x+14];let _=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=3*p,M=3*(p+y);S<M;S++){let A=n[S];const L=i.getX(A),D=i.getY(A),F=i.getZ(A);L<_&&(_=L),L>E&&(E=L),D<b&&(b=D),D>T&&(T=D),F<v&&(v=F),F>C&&(C=F)}return c[f+0]!==_||c[f+1]!==b||c[f+2]!==v||c[f+3]!==E||c[f+4]!==T||c[f+5]!==C?(c[f+0]=_,c[f+1]=b,c[f+2]=v,c[f+3]=E,c[f+4]=T,c[f+5]=C,!0):!1}else{const p=f+8,y=a[f+6],_=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(_),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const C=v||E,S=v||T;let M=!1;C&&(M=u(p,h,v));let A=!1;S&&(A=u(y,h,v));const L=M||A;if(L)for(let D=0;D<3;D++){const F=p+D,O=y+D,B=c[F],j=c[F+3],G=c[O],ee=c[O+3];c[f+D]=B<G?B:G,c[f+D+3]=j>ee?j:ee}return L}}}function Xi(s,e,t,n,i){let r,a,o,c,l,d;const u=1/t.direction.x,f=1/t.direction.y,h=1/t.direction.z,g=t.origin.x,x=t.origin.y,m=t.origin.z;let p=e[s],y=e[s+3],_=e[s+1],b=e[s+3+1],v=e[s+2],E=e[s+3+2];return u>=0?(r=(p-g)*u,a=(y-g)*u):(r=(y-g)*u,a=(p-g)*u),f>=0?(o=(_-x)*f,c=(b-x)*f):(o=(b-x)*f,c=(_-x)*f),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),h>=0?(l=(v-m)*h,d=(E-m)*h):(l=(E-m)*h,d=(v-m)*h),r>d||l>a)?!1:((l>r||r!==r)&&(r=l),(d<a||a!==a)&&(a=d),r<=i&&a>=n)}function dy(s,e,t,n,i,r,a,o){const{geometry:c,_indirectBuffer:l}=s;for(let d=n,u=n+i;d<u;d++){let f=l?l[d]:d;wo(c,e,t,f,r,a,o)}}function hy(s,e,t,n,i,r,a){const{geometry:o,_indirectBuffer:c}=s;let l=1/0,d=null;for(let u=n,f=n+i;u<f;u++){let h;h=wo(o,e,t,c?c[u]:u,null,r,a),h&&h.distance<l&&(d=h,l=h.distance)}return d}function py(s,e,t,n,i,r,a){const{geometry:o}=t,{index:c}=o,l=o.attributes.position;for(let d=s,u=e+s;d<u;d++){let f;if(f=t.resolveTriangleIndex(d),At(a,f*3,c,l),a.needsUpdate=!0,n(a,f,i,r))return!0}return!1}function my(s,e,t,n,i,r,a){ht.setBuffer(s._roots[e]),Cl(0,s,t,n,i,r,a),ht.clearBuffer()}function Cl(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ht,d=s*2;if(nn(d,c)){const f=fn(s,l),h=yn(d,c);cy(e,t,n,f,h,i,r,a)}else{const f=Mn(s);Xi(f,o,n,r,a)&&Cl(f,e,t,n,i,r,a);const h=Sn(s,l);Xi(h,o,n,r,a)&&Cl(h,e,t,n,i,r,a)}}const gy=["x","y","z"];function by(s,e,t,n,i,r){ht.setBuffer(s._roots[e]);const a=Pl(0,s,t,n,i,r);return ht.clearBuffer(),a}function Pl(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ht;let l=s*2;if(nn(l,o)){const u=fn(s,c),f=yn(l,o);return ly(e,t,n,u,f,i,r)}else{const u=yh(s,c),f=gy[u],g=n.direction[f]>=0;let x,m;g?(x=Mn(s),m=Sn(s,c)):(x=Sn(s,c),m=Mn(s));const y=Xi(x,a,n,i,r)?Pl(x,e,t,n,i,r):null;if(y){const v=y.point[f];if(g?v<=a[m+u]:v>=a[m+u+3])return y}const b=Xi(m,a,n,i,r)?Pl(m,e,t,n,i,r):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const ja=new ut,Fs=new Vn,Ns=new Vn,Rr=new Pe,ud=new Jt,qa=new Jt;function _y(s,e,t,n){ht.setBuffer(s._roots[e]);const i=Ll(0,s,t,n);return ht.clearBuffer(),i}function Ll(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ht;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),ud.set(t.boundingBox.min,t.boundingBox.max,n),i=ud),nn(c,a)){const d=e.geometry,u=d.index,f=d.attributes.position,h=t.index,g=t.attributes.position,x=fn(s,o),m=yn(c,a);if(Rr.copy(n).invert(),t.boundsTree)return Et(s,r,qa),qa.matrix.copy(Rr),qa.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>qa.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x*3,b=(m+x)*3;_<b;_+=3)if(At(Ns,_,u,f),Ns.needsUpdate=!0,y.intersectsTriangle(Ns))return!0;return!1}});{const p=qi(t);for(let y=x*3,_=(m+x)*3;y<_;y+=3){At(Fs,y,u,f),Fs.a.applyMatrix4(Rr),Fs.b.applyMatrix4(Rr),Fs.c.applyMatrix4(Rr),Fs.needsUpdate=!0;for(let b=0,v=p*3;b<v;b+=3)if(At(Ns,b,h,g),Ns.needsUpdate=!0,Fs.intersectsTriangle(Ns))return!0}}}else{const d=s+8,u=o[s+6];return Et(d,r,ja),!!(i.intersectsBox(ja)&&Ll(d,e,t,n,i)||(Et(u,r,ja),i.intersectsBox(ja)&&Ll(u,e,t,n,i)))}}const Ka=new Pe,yc=new Jt,Cr=new Jt,xy=new P,vy=new P,yy=new P,My=new P;function Sy(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),yc.set(e.boundingBox.min,e.boundingBox.max,t),yc.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,u=e.index,f=En.getPrimitive(),h=En.getPrimitive();let g=xy,x=vy,m=null,p=null;i&&(m=yy,p=My);let y=1/0,_=null,b=null;return Ka.copy(t).invert(),Cr.matrix.copy(Ka),s.shapecast({boundsTraverseOrder:v=>yc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(Cr.min.copy(v.min),Cr.max.copy(v.max),Cr.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:C=>Cr.distanceToBox(C),intersectsBounds:(C,S,M)=>M<y&&M<a,intersectsRange:(C,S)=>{for(let M=C,A=C+S;M<A;M++){At(h,3*M,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let L=v,D=v+E;L<D;L++){At(f,3*L,l,c),f.needsUpdate=!0;const F=f.distanceToTriangle(h,g,m);if(F<y&&(x.copy(g),p&&p.copy(m),y=F,_=L,b=M),F<r)return!0}}}});{const T=qi(e);for(let C=0,S=T;C<S;C++){At(h,3*C,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,A=v+E;M<A;M++){At(f,3*M,l,c),f.needsUpdate=!0;const L=f.distanceToTriangle(h,g,m);if(L<y&&(x.copy(g),p&&p.copy(m),y=L,_=M,b=C),L<r)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4(Ka),x.applyMatrix4(Ka),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function Ey(s,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=s.geometry,n=t.index?t.index.array:null,i=t.attributes.position;let r,a,o,c,l=0;const d=s._roots;for(let f=0,h=d.length;f<h;f++)r=d[f],a=new Uint32Array(r),o=new Uint16Array(r),c=new Float32Array(r),u(0,l),l+=r.byteLength;function u(f,h,g=!1){const x=f*2;if(o[x+15]===To){const p=a[f+6],y=o[x+14];let _=1/0,b=1/0,v=1/0,E=-1/0,T=-1/0,C=-1/0;for(let S=p,M=p+y;S<M;S++){const A=3*s.resolveTriangleIndex(S);for(let L=0;L<3;L++){let D=A+L;D=n?n[D]:D;const F=i.getX(D),O=i.getY(D),B=i.getZ(D);F<_&&(_=F),F>E&&(E=F),O<b&&(b=O),O>T&&(T=O),B<v&&(v=B),B>C&&(C=B)}}return c[f+0]!==_||c[f+1]!==b||c[f+2]!==v||c[f+3]!==E||c[f+4]!==T||c[f+5]!==C?(c[f+0]=_,c[f+1]=b,c[f+2]=v,c[f+3]=E,c[f+4]=T,c[f+5]=C,!0):!1}else{const p=f+8,y=a[f+6],_=p+h,b=y+h;let v=g,E=!1,T=!1;e?v||(E=e.has(_),T=e.has(b),v=!E&&!T):(E=!0,T=!0);const C=v||E,S=v||T;let M=!1;C&&(M=u(p,h,v));let A=!1;S&&(A=u(y,h,v));const L=M||A;if(L)for(let D=0;D<3;D++){const F=p+D,O=y+D,B=c[F],j=c[F+3],G=c[O],ee=c[O+3];c[f+D]=B<G?B:G,c[f+D+3]=j>ee?j:ee}return L}}}function Ty(s,e,t,n,i,r,a){ht.setBuffer(s._roots[e]),Dl(0,s,t,n,i,r,a),ht.clearBuffer()}function Dl(s,e,t,n,i,r,a){const{float32Array:o,uint16Array:c,uint32Array:l}=ht,d=s*2;if(nn(d,c)){const f=fn(s,l),h=yn(d,c);dy(e,t,n,f,h,i,r,a)}else{const f=Mn(s);Xi(f,o,n,r,a)&&Dl(f,e,t,n,i,r,a);const h=Sn(s,l);Xi(h,o,n,r,a)&&Dl(h,e,t,n,i,r,a)}}const wy=["x","y","z"];function Ay(s,e,t,n,i,r){ht.setBuffer(s._roots[e]);const a=Il(0,s,t,n,i,r);return ht.clearBuffer(),a}function Il(s,e,t,n,i,r){const{float32Array:a,uint16Array:o,uint32Array:c}=ht;let l=s*2;if(nn(l,o)){const u=fn(s,c),f=yn(l,o);return hy(e,t,n,u,f,i,r)}else{const u=yh(s,c),f=wy[u],g=n.direction[f]>=0;let x,m;g?(x=Mn(s),m=Sn(s,c)):(x=Sn(s,c),m=Mn(s));const y=Xi(x,a,n,i,r)?Il(x,e,t,n,i,r):null;if(y){const v=y.point[f];if(g?v<=a[m+u]:v>=a[m+u+3])return y}const b=Xi(m,a,n,i,r)?Il(m,e,t,n,i,r):null;return y&&b?y.distance<=b.distance?y:b:y||b||null}}const Ya=new ut,Os=new Vn,Bs=new Vn,Pr=new Pe,fd=new Jt,Ja=new Jt;function Ry(s,e,t,n){ht.setBuffer(s._roots[e]);const i=Ul(0,s,t,n);return ht.clearBuffer(),i}function Ul(s,e,t,n,i=null){const{float32Array:r,uint16Array:a,uint32Array:o}=ht;let c=s*2;if(i===null&&(t.boundingBox||t.computeBoundingBox(),fd.set(t.boundingBox.min,t.boundingBox.max,n),i=fd),nn(c,a)){const d=e.geometry,u=d.index,f=d.attributes.position,h=t.index,g=t.attributes.position,x=fn(s,o),m=yn(c,a);if(Pr.copy(n).invert(),t.boundsTree)return Et(s,r,Ja),Ja.matrix.copy(Pr),Ja.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:y=>Ja.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let _=x,b=m+x;_<b;_++)if(At(Bs,3*e.resolveTriangleIndex(_),u,f),Bs.needsUpdate=!0,y.intersectsTriangle(Bs))return!0;return!1}});{const p=qi(t);for(let y=x,_=m+x;y<_;y++){const b=e.resolveTriangleIndex(y);At(Os,3*b,u,f),Os.a.applyMatrix4(Pr),Os.b.applyMatrix4(Pr),Os.c.applyMatrix4(Pr),Os.needsUpdate=!0;for(let v=0,E=p*3;v<E;v+=3)if(At(Bs,v,h,g),Bs.needsUpdate=!0,Os.intersectsTriangle(Bs))return!0}}}else{const d=s+8,u=o[s+6];return Et(d,r,Ya),!!(i.intersectsBox(Ya)&&Ul(d,e,t,n,i)||(Et(u,r,Ya),i.intersectsBox(Ya)&&Ul(u,e,t,n,i)))}}const $a=new Pe,Mc=new Jt,Lr=new Jt,Cy=new P,Py=new P,Ly=new P,Dy=new P;function Iy(s,e,t,n={},i={},r=0,a=1/0){e.boundingBox||e.computeBoundingBox(),Mc.set(e.boundingBox.min,e.boundingBox.max,t),Mc.needsUpdate=!0;const o=s.geometry,c=o.attributes.position,l=o.index,d=e.attributes.position,u=e.index,f=En.getPrimitive(),h=En.getPrimitive();let g=Cy,x=Py,m=null,p=null;i&&(m=Ly,p=Dy);let y=1/0,_=null,b=null;return $a.copy(t).invert(),Lr.matrix.copy($a),s.shapecast({boundsTraverseOrder:v=>Mc.distanceToBox(v),intersectsBounds:(v,E,T)=>T<y&&T<a?(E&&(Lr.min.copy(v.min),Lr.max.copy(v.max),Lr.needsUpdate=!0),!0):!1,intersectsRange:(v,E)=>{if(e.boundsTree){const T=e.boundsTree;return T.shapecast({boundsTraverseOrder:C=>Lr.distanceToBox(C),intersectsBounds:(C,S,M)=>M<y&&M<a,intersectsRange:(C,S)=>{for(let M=C,A=C+S;M<A;M++){const L=T.resolveTriangleIndex(M);At(h,3*L,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let D=v,F=v+E;D<F;D++){const O=s.resolveTriangleIndex(D);At(f,3*O,l,c),f.needsUpdate=!0;const B=f.distanceToTriangle(h,g,m);if(B<y&&(x.copy(g),p&&p.copy(m),y=B,_=D,b=M),B<r)return!0}}}})}else{const T=qi(e);for(let C=0,S=T;C<S;C++){At(h,3*C,u,d),h.a.applyMatrix4(t),h.b.applyMatrix4(t),h.c.applyMatrix4(t),h.needsUpdate=!0;for(let M=v,A=v+E;M<A;M++){const L=s.resolveTriangleIndex(M);At(f,3*L,l,c),f.needsUpdate=!0;const D=f.distanceToTriangle(h,g,m);if(D<y&&(x.copy(g),p&&p.copy(m),y=D,_=M,b=C),D<r)return!0}}}}}),En.releasePrimitive(f),En.releasePrimitive(h),y===1/0?null:(n.point?n.point.copy(x):n.point=x.clone(),n.distance=y,n.faceIndex=_,i&&(i.point?i.point.copy(p):i.point=p.clone(),i.point.applyMatrix4($a),x.applyMatrix4($a),i.distance=x.sub(i.point).length(),i.faceIndex=b),n)}function Uy(){return typeof SharedArrayBuffer<"u"}const Xr=new ht.constructor,bo=new ht.constructor,Fi=new mu(()=>new ut),ks=new ut,zs=new ut,Sc=new ut,Ec=new ut;let Tc=!1;function Fy(s,e,t,n){if(Tc)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Tc=!0;const i=s._roots,r=e._roots;let a,o=0,c=0;const l=new Pe().copy(t).invert();for(let d=0,u=i.length;d<u;d++){Xr.setBuffer(i[d]),c=0;const f=Fi.getPrimitive();Et(0,Xr.float32Array,f),f.applyMatrix4(l);for(let h=0,g=r.length;h<g&&(bo.setBuffer(r[h]),a=In(0,0,t,l,n,o,c,0,0,f),bo.clearBuffer(),c+=r[h].length,!a);h++);if(Fi.releasePrimitive(f),Xr.clearBuffer(),o+=i[d].length,a)break}return Tc=!1,a}function In(s,e,t,n,i,r=0,a=0,o=0,c=0,l=null,d=!1){let u,f;d?(u=bo,f=Xr):(u=Xr,f=bo);const h=u.float32Array,g=u.uint32Array,x=u.uint16Array,m=f.float32Array,p=f.uint32Array,y=f.uint16Array,_=s*2,b=e*2,v=nn(_,x),E=nn(b,y);let T=!1;if(E&&v)d?T=i(fn(e,p),yn(e*2,y),fn(s,g),yn(s*2,x),c,a+e,o,r+s):T=i(fn(s,g),yn(s*2,x),fn(e,p),yn(e*2,y),o,r+s,c,a+e);else if(E){const C=Fi.getPrimitive();Et(e,m,C),C.applyMatrix4(t);const S=Mn(s),M=Sn(s,g);Et(S,h,ks),Et(M,h,zs);const A=C.intersectsBox(ks),L=C.intersectsBox(zs);T=A&&In(e,S,n,t,i,a,r,c,o+1,C,!d)||L&&In(e,M,n,t,i,a,r,c,o+1,C,!d),Fi.releasePrimitive(C)}else{const C=Mn(e),S=Sn(e,p);Et(C,m,Sc),Et(S,m,Ec);const M=l.intersectsBox(Sc),A=l.intersectsBox(Ec);if(M&&A)T=In(s,C,t,n,i,r,a,o,c+1,l,d)||In(s,S,t,n,i,r,a,o,c+1,l,d);else if(M)if(v)T=In(s,C,t,n,i,r,a,o,c+1,l,d);else{const L=Fi.getPrimitive();L.copy(Sc).applyMatrix4(t);const D=Mn(s),F=Sn(s,g);Et(D,h,ks),Et(F,h,zs);const O=L.intersectsBox(ks),B=L.intersectsBox(zs);T=O&&In(C,D,n,t,i,a,r,c,o+1,L,!d)||B&&In(C,F,n,t,i,a,r,c,o+1,L,!d),Fi.releasePrimitive(L)}else if(A)if(v)T=In(s,S,t,n,i,r,a,o,c+1,l,d);else{const L=Fi.getPrimitive();L.copy(Ec).applyMatrix4(t);const D=Mn(s),F=Sn(s,g);Et(D,h,ks),Et(F,h,zs);const O=L.intersectsBox(ks),B=L.intersectsBox(zs);T=O&&In(S,D,n,t,i,a,r,c,o+1,L,!d)||B&&In(S,F,n,t,i,a,r,c,o+1,L,!d),Fi.releasePrimitive(L)}}return T}const Za=new Jt,dd=new ut,Ny={strategy:_h,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class gu{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,i=e._roots,r=e._indirectBuffer,a=n.getIndex();let o;return t.cloneBuffers?o={roots:i.map(c=>c.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:i,index:a?a.array:null,indirectBuffer:r},o}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:i,roots:r,indirectBuffer:a}=e,o=new gu(t,{...n,[bc]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const c=t.getIndex();if(c===null){const l=new Ft(e.index,1,!1);t.setIndex(l)}else c.array!==i&&(c.array.set(i),c.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Ny,[bc]:!1},t),t.useSharedArrayBuffer&&!Uy())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[bc]||($v(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ut))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?Ey:fy)(this,e)}traverse(e,t=0){const n=this._roots[t],i=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,c=0){const l=o*2,d=r[l+15]===To;if(d){const u=i[o+6],f=r[l+14];e(c,d,new Float32Array(n,o*4,6),u,f)}else{const u=o+Wr/4,f=i[o+6],h=i[o+7];e(c,d,new Float32Array(n,o*4,6),h)||(a(u,c+1),a(f,c+1))}}}raycast(e,t=An,n=0,i=1/0){const r=this._roots,a=this.geometry,o=[],c=t.isMaterial,l=Array.isArray(t),d=a.groups,u=c?t.side:t,f=this.indirect?Ty:my;for(let h=0,g=r.length;h<g;h++){const x=l?t[d[h].materialIndex].side:u,m=o.length;if(f(this,h,x,e,o,n,i),l){const p=d[h].materialIndex;for(let y=m,_=o.length;y<_;y++)o[y].face.materialIndex=p}}return o}raycastFirst(e,t=An,n=0,i=1/0){const r=this._roots,a=this.geometry,o=t.isMaterial,c=Array.isArray(t);let l=null;const d=a.groups,u=o?t.side:t,f=this.indirect?Ay:by;for(let h=0,g=r.length;h<g;h++){const x=c?t[d[h].materialIndex].side:u,m=f(this,h,x,e,n,i);m!=null&&(l==null||m.distance<l.distance)&&(l=m,c&&(m.face.materialIndex=d[h].materialIndex))}return l}intersectsGeometry(e,t){let n=!1;const i=this._roots,r=this.indirect?Ry:_y;for(let a=0,o=i.length;a<o&&(n=r(this,a,e,t),!n);a++);return n}shapecast(e){const t=En.getPrimitive(),n=this.indirect?py:uy;let{boundsTraverseOrder:i,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=e;if(a&&o){const u=a;a=(f,h,g,x,m)=>u(f,h,g,x,m)?!0:n(f,h,this,o,g,x,t)}else a||(o?a=(u,f,h,g)=>n(u,f,this,o,h,g,t):a=(u,f,h)=>h);let c=!1,l=0;const d=this._roots;for(let u=0,f=d.length;u<f;u++){const h=d[u];if(c=iy(this,u,r,a,i,l),c)break;l+=h.byteLength}return En.releasePrimitive(t),c}bvhcast(e,t,n){let{intersectsRanges:i,intersectsTriangles:r}=n;const a=En.getPrimitive(),o=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?g=>{const x=this.resolveTriangleIndex(g);At(a,x*3,o,c)}:g=>{At(a,g*3,o,c)},d=En.getPrimitive(),u=e.geometry.index,f=e.geometry.attributes.position,h=e.indirect?g=>{const x=e.resolveTriangleIndex(g);At(d,x*3,u,f)}:g=>{At(d,g*3,u,f)};if(r){const g=(x,m,p,y,_,b,v,E)=>{for(let T=p,C=p+y;T<C;T++){h(T),d.a.applyMatrix4(t),d.b.applyMatrix4(t),d.c.applyMatrix4(t),d.needsUpdate=!0;for(let S=x,M=x+m;S<M;S++)if(l(S),a.needsUpdate=!0,r(a,d,S,T,_,b,v,E))return!0}return!1};if(i){const x=i;i=function(m,p,y,_,b,v,E,T){return x(m,p,y,_,b,v,E,T)?!0:g(m,p,y,_,b,v,E,T)}}else i=g}return Fy(this,e,t,i)}intersectsBox(e,t){return Za.set(e.min,e.max,t),Za.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Za.intersectsBox(n),intersectsTriangle:n=>Za.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},i={},r=0,a=1/0){return(this.indirect?Iy:Sy)(this,e,t,n,i,r,a)}closestPointToPoint(e,t={},n=0,i=1/0){return sy(this,e,t,n,i)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{Et(0,new Float32Array(n),dd),e.union(dd)}),e}}const Zn=Object.freeze({speed:4,minSpeed:3,maxSpeed:4,step:.1});class Oy{constructor(e){const n=e.filter(i=>i.id!=="COL_floor").map(i=>new hs(...i.size).applyMatrix4(new Pe().makeRotationY(i.rotationY||0)).translate(...i.center));this.geometry=Z0(n),n.forEach(i=>i.dispose()),this.bvh=new gu(this.geometry),this.radius=.25,this.velocity=new P,this.segment=new ni,this.bounds=new ut,this.onTriangle=new P,this.onCapsule=new P,this.normal=new P,this.contacts=0,this.speed=Zn.speed,this.correction=new P,this.queries=0}stop(){this.velocity.set(0,0,0)}resolve(e){this.queries++,this.segment.start.set(e.x,.25,e.z),this.segment.end.set(e.x,1.45,e.z);for(let t=0;t<4;t++){let n=!1;if(this.bounds.makeEmpty().expandByPoint(this.segment.start).expandByPoint(this.segment.end).expandByScalar(this.radius),this.bvh.shapecast({intersectsBounds:i=>i.intersectsBox(this.bounds),intersectsTriangle:i=>{if(i.getNormal(this.normal),Math.abs(this.normal.y)>.9)return!1;const r=i.closestPointToSegment(this.segment,this.onTriangle,this.onCapsule);if(r>=this.radius)return!1;this.normal.subVectors(this.onCapsule,this.onTriangle),this.normal.y=0,this.normal.lengthSq()<1e-12&&i.getNormal(this.normal),this.normal.normalize();const a=this.correction.copy(this.normal).multiplyScalar(this.radius-r+1e-5);this.segment.start.add(a),this.segment.end.add(a);const o=this.velocity.dot(this.normal);return o<0&&this.velocity.addScaledVector(this.normal,-o),this.contacts++,n=!0,!1}}),!n)break}e.x=this.segment.start.x,e.z=this.segment.start.z}step(e,t,n){if(t.lengthSq()===0){this.stop();return}this.velocity.copy(t).multiplyScalar(this.speed),e.addScaledVector(this.velocity,n),this.resolve(e)}update(e,t,n){const i=Math.max(1,Math.ceil(n/.008333333333333333)),r=n/i;for(let a=0;a<i;a++)this.step(e,t,r)}}const Fl=.36;function hd(s,e){const t=s[0]-e.center[0],n=s[1]-e.center[2],i=e.rotationY||0,r=Math.cos(i),a=Math.sin(i);return[r*t-a*n,a*t+r*n]}function pd(s,e,t,n=Fl){const i=hd(s,t),r=hd(e,t),a=[t.size[0]/2+n-1e-5,t.size[2]/2+n-1e-5];let o=0,c=1;for(let l=0;l<2;l++){const d=r[l]-i[l];if(Math.abs(d)<1e-10){if(Math.abs(i[l])>=a[l])return!1;continue}let u=(-a[l]-i[l])/d,f=(a[l]-i[l])/d;if(u>f&&([u,f]=[f,u]),o=Math.max(o,u),c=Math.min(c,f),o>=c)return!1}return c>0&&o<1}function By(s,e,t=.27){if(e.shape==="axial_gallery"){const[n,i]=s,r=n>=-8+t&&n<=8-t&&i>=-11&&i<=11-t,a=n>=-2.6+t&&n<=2.6-t&&i>=-22+t&&i<=-11;return r||a}return Math.abs(s[1])<=e.apothem-t&&Math.sqrt(3)/2*Math.abs(s[0])+.5*Math.abs(s[1])<=e.apothem-t}function Eh(s,e,t){const n=[s[0],s[2]],i=[e[0],e[2]],r=t.colliders.filter(f=>f.id!=="COL_floor"),a=(f,h)=>!r.some(g=>pd(f,h,g,.27));if(a(n,i))return[[...e]];const o=[n,i];for(const f of r){const h=Math.cos(f.rotationY||0),g=Math.sin(f.rotationY||0);for(const x of[-1,1])for(const m of[-1,1]){const p=x*(f.size[0]/2+Fl),y=m*(f.size[2]/2+Fl),_=[f.center[0]+h*p+g*y,f.center[2]-g*p+h*y];By(_,t.layout)&&!r.some(b=>pd(_,_,b,.27))&&o.push(_)}}const c=o.map(()=>1/0),l=o.map(()=>-1),d=new Set;for(c[0]=0;d.size<o.length;){let f=-1;for(let h=0;h<o.length;h++)!d.has(h)&&(f<0||c[h]<c[f])&&(f=h);if(f<0||!Number.isFinite(c[f]))return[];if(f===1)break;d.add(f);for(let h=0;h<o.length;h++){if(d.has(h)||!a(o[f],o[h]))continue;const g=c[f]+Math.hypot(o[f][0]-o[h][0],o[f][1]-o[h][1]);g<c[h]&&(c[h]=g,l[h]=f)}}const u=[];for(let f=1;f!==0;f=l[f]){if(f<0)return[];u.unshift([o[f][0],e[1],o[f][1]])}return u}class ky{constructor(e,{duration:t=1.15}={}){if(this.duration=t,this.progress=0,this.target=0,this.parts=[],e.traverse(n=>{!n.isMesh||![-1,1].includes(n.userData.doorLeaf)||this.parts.push({mesh:n,sign:n.userData.doorLeaf,closedX:n.position.x,travel:n.userData.slideDistance||2.26})}),![-1,1].every(n=>this.parts.some(i=>i.sign===n)))throw new Error("双扇玻璃门模型缺少门扇")}toggle(){return this.target=1-this.target,this.target===1}update(e){if(this.progress===this.target)return!1;const t=Math.max(0,e)/this.duration;this.progress=this.target>this.progress?Math.min(this.target,this.progress+t):Math.max(this.target,this.progress-t);const n=this.progress*this.progress*(3-2*this.progress);for(const i of this.parts)i.mesh.position.x=i.closedX+i.sign*i.travel*n;return this.target===1&&this.progress===1}reset(){this.progress=0,this.target=0;for(const e of this.parts)e.mesh.position.x=e.closedX}getState(){return{open:this.target===1,progress:this.progress,leaves:[-1,1].map(e=>({side:e,offset:this.parts.find(t=>t.sign===e).mesh.position.x-this.parts.find(t=>t.sign===e).closedX}))}}}class us extends gt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new zt;const n=this,i=t.color!==void 0?new De(t.color):new De(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||us.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,d=new qn,u=new P,f=new P,h=new P,g=new Pe,x=new P(0,0,-1),m=new et,p=new P,y=new P,_=new et,b=new Pe,v=this.camera,E=new Wi(r,a,{samples:l,type:cr}),T=new hn({name:c.name!==void 0?c.name:"unspecified",uniforms:qd.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});T.uniforms.tDiffuse.value=E.texture,T.uniforms.color.value=i,T.uniforms.textureMatrix.value=b,this.material=T,this.onBeforeRender=function(C,S,M){if(f.setFromMatrixPosition(n.matrixWorld),h.setFromMatrixPosition(M.matrixWorld),g.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(g),p.subVectors(f,h),p.dot(u)>0===!0&&this.forceUpdate===!1)return;p.reflect(u).negate(),p.add(f),g.extractRotation(M.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(h),y.subVectors(f,x),y.reflect(u).negate(),y.add(f),v.position.copy(p),v.up.set(0,1,0),v.up.applyMatrix4(g),v.up.reflect(u),v.lookAt(y),v.far=M.far,v.updateMatrixWorld(),v.projectionMatrix.copy(M.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(v.projectionMatrix),b.multiply(v.matrixWorldInverse),b.multiply(n.matrixWorld),d.setFromNormalAndCoplanarPoint(u,f),d.applyMatrix4(v.matrixWorldInverse),m.set(d.normal.x,d.normal.y,d.normal.z,d.constant);const L=v.projectionMatrix;_.x=(Math.sign(m.x)+L.elements[8])/L.elements[0],_.y=(Math.sign(m.y)+L.elements[9])/L.elements[5],_.z=-1,_.w=(1+L.elements[10])/L.elements[14],m.multiplyScalar(2/m.dot(_)),L.elements[2]=m.x,L.elements[6]=m.y,L.elements[10]=m.z+1-o,L.elements[14]=m.w,n.visible=!1;const D=C.getRenderTarget(),F=C.xr.enabled,O=C.shadowMap.autoUpdate;C.xr.enabled=!1,C.shadowMap.autoUpdate=!1,C.setRenderTarget(E),C.state.buffers.depth.setMask(!0),C.autoClear===!1&&C.clear(),C.render(S,v),C.xr.enabled=F,C.shadowMap.autoUpdate=O,C.setRenderTarget(D);const B=M.viewport;B!==void 0&&C.state.viewport(B),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}us.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};function zy(s,e,t){const n={...us.ReflectorShader,vertexShader:us.ReflectorShader.vertexShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vUv = textureMatrix * vec4( position, 1.0 );",`vUv = textureMatrix * vec4( position, 1.0 );
vFloorWorld=(modelMatrix*vec4(position,1.0)).xyz;`),fragmentShader:us.ReflectorShader.fragmentShader.replace("varying vec4 vUv;",`varying vec4 vUv;
varying vec3 vFloorWorld;`).replace("vec4 base = texture2DProj( tDiffuse, vUv );",`if(vFloorWorld.z < -11.0 && abs(vFloorWorld.x)>2.60) discard;
        vec2 uv=vUv.xy/vUv.w;
        vec3 reflected=texture2D(tDiffuse,uv).rgb*.40;
        reflected+=texture2D(tDiffuse,uv+vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(.0008,0.)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv+vec2(0.,.0008)).rgb*.15;
        reflected+=texture2D(tDiffuse,uv-vec2(0.,.0008)).rgb*.15;
        vec4 base=vec4(reflected,1.0);`).replace("gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );","gl_FragColor=vec4(base.rgb*.85,.26);")},i=new us(new ur(16,33),{textureWidth:512,textureHeight:512,clipBias:.002,multisample:0,shader:n});i.name="R11 polished marble floor reflection",i.rotation.x=-Math.PI/2,i.position.set(0,.016,-5.5),i.material.transparent=!0,i.material.depthWrite=!1,i.renderOrder=1,s.add(i);const r=[],a=[],o={position:new P(1/0,1/0,1/0),quaternion:new Cn,time:-1/0},c=i.onBeforeRender;i.onBeforeRender=function(d,u,f,...h){const g=performance.now();if(!(o.position.distanceToSquared(f.position)>1e-10||1-Math.abs(o.quaternion.dot(f.quaternion))>1e-10)&&g-o.time<100)return;o.position.copy(f.position),o.quaternion.copy(f.quaternion),o.time=g;const m=a.map(p=>p.visible);for(const p of a)p.visible=!1;try{return c.call(this,d,u,f,...h)}finally{a.forEach((p,y)=>p.visible=m[y])}},t.traverse(d=>{if(!d.isMesh)return;const u=Array.isArray(d.material)?d.material:[d.material];u.some(f=>f.name.toLowerCase().includes("glass"))&&a.push(d);for(const f of u){if(f.name.includes("hologram data curtain")){const h=new hn({uniforms:{pattern:{value:f.map},phase:{value:0}},transparent:!0,depthWrite:!1,side:tn,blending:Ys,vertexShader:"varying vec2 curtainUV; void main(){curtainUV=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",fragmentShader:`uniform sampler2D pattern;uniform float phase;varying vec2 curtainUV;
            void main(){
              vec4 ink=texture2D(pattern,vec2(curtainUV.x,fract(curtainUV.y+phase)));
              float edge=pow(abs(curtainUV.x-.5)*2.,10.);
              float streak=ink.a;
              vec3 blue=vec3(.012,.21,.93)*(.45+streak*1.6+edge*.25);
              gl_FragColor=vec4(blue,.16+streak*.62);
              #include <colorspace_fragment>
            }`});d.material=h,d.renderOrder=3,r.push(h)}f.name.includes("cyan edge light")&&(f.color.set(358655),f.emissive.set(358655),f.emissiveIntensity=2)}});let l=0;return{reflector:i,update(d,u){if(!u){l+=d*.026;for(const f of r)f.uniforms.phase.value=l}}}}function Hy(s,e,t,n=.0017){return!Number.isFinite(e)||!Number.isFinite(t)?!1:(s.rotation.order="YXZ",s.rotation.y-=e*n,s.rotation.x=Rn.clamp(s.rotation.x-t*n,-1.15,1.15),s.rotation.z=0,!0)}function Vy(s,e){if(!Number.isFinite(s)||!Number.isFinite(e)||e<=0)return 0;const t=Rn.clamp(s/e,0,1),n=.08;return t<n?-(n-t)/n*1.35:t>1-n?(t-(1-n))/n*1.35:0}function Th(s,e){const t={id:e.pointerId,x:e.clientX,y:e.clientY};return s?s.id!==void 0&&s.id!==e.pointerId?null:{point:t,dx:t.x-s.x,dy:t.y-s.y}:{point:t,dx:0,dy:0}}function wh(s,e){(e==null?void 0:e.id)!==void 0&&s.hasPointerCapture(e.id)&&s.releasePointerCapture(e.id)}function Gy(s,e){return(s==null?void 0:s.id)!==void 0&&s.id===e.pointerId}function Ah(s){const e=new P(...s.position);let t,n;if(s.side==="front")t=e.clone().add(new P(0,0,s.distance||3.15)),n=new P(1,0,0);else{const c=s.side==="left"?-1:1;t=e.clone().add(new P(-c*3.15,0,0)),n=new P(0,0,c)}t.y=1.65;const i=s.lateral||1.18,r=t.clone().addScaledVector(n,-i),a=t.clone().addScaledVector(n,i),o=e.clone();return o.y=s.targetHeight??.95,{left:r,right:a,front:t,target:o}}class Wy{constructor(e,{reduced:t=!1}={}){this.views=Ah(e),this.reduced=t,this.phase="left",this.elapsed=0,this.finished=!1,this.steps=[{phase:"left",from:"left",to:"left",duration:.7},{phase:"right",from:"left",to:"right",duration:4.2},{phase:"right-hold",from:"right",to:"right",duration:.5},{phase:"front",from:"right",to:"front",duration:2.4}],this.index=0}update(e,t){if(this.finished)return!0;const n=this.steps[this.index];this.phase=n.phase;const i=this.reduced?Math.min(n.duration,.22):n.duration;this.elapsed=Math.min(i,this.elapsed+Math.max(0,t));const r=Rn.smoothstep(this.elapsed/i,0,1);return e.position.lerpVectors(this.views[n.from],this.views[n.to],r),e.lookAt(this.views.target),this.elapsed>=i&&(this.index++,this.elapsed=0,this.index===this.steps.length)?(this.finished=!0,this.phase="complete",e.position.copy(this.views.front),e.lookAt(this.views.target),!0):!1}}class Xy{constructor(e){this.spec=e,this.phase="opening",this.elapsed=0,this.finished=!1}update(e,t,n){const i=this.spec;if(this.phase==="opening")e.position.fromArray(i.outside),e.lookAt(new P(...i.lookAt)),t.progress===1&&t.target===1&&(this.phase="walking",this.elapsed=0);else if(this.phase==="walking"){this.elapsed=Math.min(i.walkDuration,this.elapsed+Math.max(0,n));const r=Rn.smoothstep(this.elapsed/i.walkDuration,0,1);e.position.lerpVectors(new P(...i.outside),new P(...i.inside),r),e.lookAt(new P(...i.lookAt)),this.elapsed>=i.walkDuration&&(t.target=0,this.phase="closing")}else if(this.phase==="closing"&&(e.position.fromArray(i.inside),e.lookAt(new P(...i.lookAt)),t.progress===0&&t.target===0))return this.phase="complete",this.finished=!0,!0;return this.finished}}var Rh=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q:Odkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;w8Wqdbk;esezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9Uc;WFbGgocjdaocjd6EhDaicefhocbhqdnindndndnaeaq9nmbaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxalc9WGgmTmecbhPawcjdfhsaohzinaraz9Rax6mvarazaxfgo9RcK6mvczhlcbhHinalgic9WfgOawcj;cbffhldndndndndnazaOco4fRbbaHcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgOco4gAaAciSgAE86bbawcj;cbfaifglcGfaoclfaAfgARbbaOcl4ciGgCaCciSgCE86bbalcVfaAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc7faAaCfgARbbaOciGgOaOciSgOE86bbalctfaAaOfgARbbaoRbegOco4gCaCciSgCE86bbalc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc93faAaCfgARbbaOciGgOaOciSgOE86bbalc94faAaOfgARbbaoRbdgOco4gCaCciSgCE86bbalc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbalc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbalc97faAaCfgARbbaOciGgOaOciSgOE86bbalc98faAaOfgORbbaoRbigoco4gAaAciSgAE86bbalc99faOaAfgORbbaocl4ciGgAaAciSgAE86bbalc9:faOaAfgORbbaocd4ciGgAaAciSgAE86bbalcufaOaAfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgOcl4gAaAcsSgAE86bbawcj;cbfaifglcGfaocwfaAfgARbbaOcsGgOaOcsSgOE86bbalcVfaAaOfgORbbaoRbegAcl4gCaCcsSgCE86bbalc7faOaCfgORbbaAcsGgAaAcsSgAE86bbalctfaOaAfgORbbaoRbdgAcl4gCaCcsSgCE86bbalc91faOaCfgORbbaAcsGgAaAcsSgAE86bbalc4faOaAfgORbbaoRbigAcl4gCaCcsSgCE86bbalc93faOaCfgORbbaAcsGgAaAcsSgAE86bbalc94faOaAfgORbbaoRblgAcl4gCaCcsSgCE86bbalc95faOaCfgORbbaAcsGgAaAcsSgAE86bbalc96faOaAfgORbbaoRbvgAcl4gCaCcsSgCE86bbalc97faOaCfgORbbaAcsGgAaAcsSgAE86bbalc98faOaAfgORbbaoRbogAcl4gCaCcsSgCE86bbalc99faOaCfgORbbaAcsGgAaAcsSgAE86bbalc9:faOaAfgORbbaoRbrgocl4gAaAcsSgAE86bbalcufaOaAfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaHcdfhHaiczfhlarao9RcL0mekkaiam6mvaoTmvdnakTmbawaPfRbbhHawcj;cbfhlashiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkkascefhsaohzaPcefgPad9hmbxikkcbc99arao9Radcaadca0ESEhoxlkaoaxad2fhCdnakmbadhlinaoTmlarao9Rax6mlaoaxfhoalcufglmbkaChoxekcbhmawcjdfhAinarao9Rax6miawamfRbbhHawcj;cbfhlaAhiakhOinaialRbbgzce4cbazceG9R7aHfgH86bbaiadfhialcefhlaOcufgOmbkaAcefhAaoaxfhoamcefgmad9hmbkaChokabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekc9:hokavcj;ebf8Kjjjjbaok;cseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklzNbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q:6dkr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq:p9sqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:N8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhlaicefhodnaeTmbadTmbalc;WFbGglcjdalcjd6EhwcbhDinawaeaD9RaDawfae6Egqcsfglc9WGgkci2hxakcethmalcl4cifcd4hPabaDad2fhsakc;ab6hzcbhHincbhOaohAdndninaraA9RaP6meavcj;cbfaOak2fhCaAaPfhocbhidnazmbarao9Rc;Gb6mbcbhlinaCalfhidndndndndnaAalco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklbaoczfhokdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklzaoczfhokdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaiaopbbbpklaaoczfhokdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaiaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaoclfaYpQbfaXc:q:yjjbfRbbfhoxdkaiaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WaocwfaYpQbfaXc:q:yjjbfRbbfhoxekaiaopbbbpkl8Waoczfhokalc;abfhialcjefak0meaihlarao9Rc;Fb0mbkkdnaiak9pmbaici4hlinarao9RcK6miaCaifhXdndndndndnaAaico4fRbbalcoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpkbbxikaXaopbblaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaoclfaYpQbfaKc:q:yjjbfRbbfhoxdkaXaopbbwaopbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkbbaocwfaYpQbfaKc:q:yjjbfRbbfhoxekaXaopbbbpkbbaoczfhokalcdfhlaiczfgiak6mbkkaoTmeaohAaOcefgOclSmdxbkkc9:hoxlkdnakTmbavcjdfaHfhiavaHfpbdbhYcbhXinaiavcj;cbfaXfglpblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLalakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEalamfpblbg3cep9Ta3aQp9op9Hp9rg3alaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfglaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaladfglaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaladfglaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaladfglaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaladfhiaXczfgXak6mbkkaHclfgHad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfgDae6mbkkcbc99arao9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk::seHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgwce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhDaicefgqarfhidnaeTmbcmcsawceSEhkcbhxcbhmcbhPcbhwcbhlindnaiaD9nmbc9:hoxikdndnaqRbbgoc;Ve0mbavc;abfalaocu7gscl4fcsGcitfgzydlhrazydbhzdnaocsGgHak9pmbavawasfcsGcdtfydbaxaHEhoaHThsdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkaxasfhxcdhHavawcdtfaoBdbawasfhwcehsalhOxdkdndnaHcsSmbaHc987aHamffcefhoxekaicefhoai8SbbgHcFeGhsdndnaHcu9mmbaohixekaicvfhiascFbGhscrhHdninao8SbbgOcFbGaHtasVhsaOcu9kmeaocefhoaHcrfgHc8J9hmbxdkkaocefhikasce4cbasceG9R7amfhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhHavawcdtfaoBdbcehsawcefhwalhOaohmxekdnaocpe0mbaxcefgHavawaDaocsGfRbbgocl49RcsGcdtfydbaocz6gzEhravawao9RcsGcdtfydbaHazfgAaocsGgHEhoaHThCdndnadcd9hmbabaPcetfgHax87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHaxBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfaxBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgOaxBdlaOarBdbavawazfgwcsGcdtfaoBdbalcefcsGhOawaCfhwaxhzaAaCfhxxekaxcbaiRbbgOEgzaoc;:eSgHfhraOcsGhCaOcl4hAdndnaOcs0mbarcefhoxekarhoavawaA9RcsGcdtfydbhrkdndnaCmbaocefhxxekaohxavawaO9RcsGcdtfydbhokdndnaHTmbaicefhHxekaicdfhHai8SbegscFeGhzdnascu9kmbaicofhXazcFbGhzcrhidninaH8SbbgscFbGaitazVhzascu9kmeaHcefhHaicrfgic8J9hmbkaXhHxekaHcefhHkazce4cbazceG9R7amfgmhzkdndnaAcsSmbaHhsxekaHcefhsaH8SbbgicFeGhrdnaicu9kmbaHcvfhXarcFbGhrcrhidninas8SbbgHcFbGaitarVhraHcu9kmeascefhsaicrfgic8J9hmbkaXhsxekascefhskarce4cbarceG9R7amfgmhrkdndnaCcsSmbashixekascefhias8SbbgocFeGhHdnaocu9kmbascvfhXaHcFbGhHcrhodninai8SbbgscFbGaotaHVhHascu9kmeaicefhiaocrfgoc8J9hmbkaXhixekaicefhikaHce4cbaHceG9R7amfgmhokdndnadcd9hmbabaPcetfgHaz87ebaHclfao87ebaHcdfar87ebxekabaPcdtfgHazBdbaHcwfaoBdbaHclfarBdbkcdhsavawcdtfazBdbavawcefgwcsGcdtfarBdbcihHavc;abfalcitfgXazBdlaXarBdbavawaOcz6aAcsSVfgwcsGcdtfaoBdbawaCTaCcsSVfhwalcefcsGhOkaqcefhqavc;abfaOcitfgOarBdlaOaoBdbavc;abfalasfcsGcitfgraoBdlarazBdbawcsGhwalaHfcsGhlaPcifgPae6mbkkcbc99aiaDSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;Meawaqawamp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaDakp;Mearp;Keamp9oaqakp;Mearp;Keczp:Rep9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(i,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var y=new Uint8Array(p.length),_=0;_<p.length;++_){var b=p.charCodeAt(_);y[_]=b>96?b-97:b>64?b-39:b+4}for(var v=0,_=0;_<p.length;++_)y[v++]=y[_]<60?n[y[_]]:(y[_]-60)*64+y[++_];return y.buffer.slice(0,v)}function c(p,y,_,b,v,E,T){var C=p.exports.sbrk,S=b+3&-4,M=C(S*v),A=C(E.length),L=new Uint8Array(p.exports.memory.buffer);L.set(E,A);var D=y(M,b,v,A,E.length);if(D==0&&T&&T(M,S,v),_.set(L.subarray(M,M+b*v)),C(M-C(0)),D!=0)throw new Error("Malformed buffer data: "+D)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},d={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function h(p){var y={object:new Worker(p),pending:0,requests:{}};return y.object.onmessage=function(_){var b=_.data;y.pending-=b.count,y.requests[b.id][b.action](b.value),delete y.requests[b.id]},y}function g(p){for(var y="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(i)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),_=new Blob([y],{type:"text/javascript"}),b=URL.createObjectURL(_),v=u.length;v<p;++v)u[v]=h(b);for(var v=p;v<u.length;++v)u[v].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function x(p,y,_,b,v){for(var E=u[0],T=1;T<u.length;++T)u[T].pending<E.pending&&(E=u[T]);return new Promise(function(C,S){var M=new Uint8Array(_),A=++f;E.pending+=p,E.requests[A]={resolve:C,reject:S},E.object.postMessage({id:A,count:p,size:y,source:M,mode:b,filter:v},[M.buffer])})}function m(p){var y=p.data;if(!y.id)return self.close();self.ready.then(function(_){try{var b=new Uint8Array(y.count*y.size);c(_,_.exports[y.mode],b,y.count,y.size,y.source,_.exports[y.filter]),self.postMessage({id:y.id,count:y.count,action:"resolve",value:b},[b.buffer])}catch(v){self.postMessage({id:y.id,count:y.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,y,_,b,v){c(r,r.exports.meshopt_decodeVertexBuffer,p,y,_,b,r.exports[l[v]])},decodeIndexBuffer:function(p,y,_,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,y,_,b)},decodeIndexSequence:function(p,y,_,b){c(r,r.exports.meshopt_decodeIndexSequence,p,y,_,b)},decodeGltfBuffer:function(p,y,_,b,v,E){c(r,r.exports[d[v]],p,y,_,b,r.exports[l[E]])},decodeGltfBufferAsync:function(p,y,_,b,v){return u.length>0?x(p,y,_,d[b],l[v]):a.then(function(){var E=new Uint8Array(p*y);return c(r,r.exports[d[b]],E,p,y,_,r.exports[l[v]]),E})}}})();const as=.79,Zt="/artifacts/",Ks=[{artifactId:"phoenix-ewer",name:"凤首扁壶",nickname:"青花",cabinetId:1,position:[-5.6,as,6.6],modelDesktop:`${Zt}phoenix-web-desktop.glb`,modelMobile:`${Zt}phoenix-web-mobile.glb`,rotationY:0,height:.95,maxWidth:1.04,roughness:.5,metalness:0},{artifactId:"bronze-head",name:"青铜头像",nickname:"守望",cabinetId:2,position:[-5.6,as,0],modelDesktop:`${Zt}bronze-head-web-desktop.glb`,modelMobile:`${Zt}bronze-head-web-mobile.glb`,rotationY:0,height:1,maxWidth:1.04,roughness:.86,metalness:.15},{artifactId:"cloud-mirror",name:"八连弧纹铜镜",nickname:"照影",cabinetId:3,position:[-5.6,as,-6.6],modelDesktop:`${Zt}cloud-mirror-web-desktop.glb`,modelMobile:`${Zt}cloud-mirror-web-mobile.glb`,rotationY:0,height:.97,maxWidth:1.04,roughness:.72,metalness:.2},{artifactId:"liquan-bodhisattva",name:"菩萨立像",nickname:"静照",cabinetId:4,position:[5.6,as,6.6],modelDesktop:`${Zt}liquan-bodhisattva-web-desktop.glb`,modelMobile:`${Zt}liquan-bodhisattva-web-mobile.glb`,rotationY:-Math.PI,height:1.15,maxWidth:1.04,roughness:.94,metalness:0},{artifactId:"longquan-figure",name:"龙泉窑青瓷露胎人物塑像",nickname:"青隐",cabinetId:5,position:[5.6,as,0],modelDesktop:`${Zt}longquan-figure-web-desktop.glb`,modelMobile:`${Zt}longquan-figure-web-mobile.glb`,rotationY:-Math.PI,height:1.08,maxWidth:1.04,roughness:.66,metalness:0},{artifactId:"pipa-figurine",name:"彩绘陶弹琵琶女俑",nickname:"弦月",cabinetId:6,position:[5.6,as,-6.6],modelDesktop:`${Zt}pipa-figurine-web-desktop.glb`,modelMobile:`${Zt}pipa-figurine-web-mobile.glb`,rotationY:-Math.PI,height:1.04,maxWidth:1.04,roughness:.9,metalness:0},{artifactId:"speechless-buddha",name:"无语佛",nickname:"淡淡",cabinetId:"story",position:[0,as,-20.7],modelDesktop:`${Zt}speechless-buddha-web-desktop.glb`,modelMobile:`${Zt}speechless-buddha-web-mobile.glb`,rotationY:-Math.PI/2,height:1.12,maxWidth:1.04,roughness:.83,metalness:.03}];function jy(s,e,t){const n=Math.min(8,(t==null?void 0:t.capabilities.getMaxAnisotropy())??1);s.traverse(i=>{if(i.isMesh){i.userData.artifactId=e.artifactId;for(const r of Array.isArray(i.material)?i.material:[i.material]){r.roughness=e.roughness,r.metalness=e.metalness,r.envMapIntensity=.42;for(const a of Object.values(r))a!=null&&a.isTexture&&(a.magFilter=jt,a.minFilter=Fn,a.generateMipmaps=!0,a.anisotropy=n,a.needsUpdate=!0)}}})}function qy(s,e){const t=new On;t.name=`HallArtifact_${e.artifactId}`,t.userData.artifactId=e.artifactId;const n=new On;n.rotation.y=e.rotationY,n.add(s),t.add(n),t.updateMatrixWorld(!0);const i=new ut().setFromObject(n,!0),r=i.getSize(new P);if(i.isEmpty()||r.y<=0)throw new Error("文物模型没有可展示的有效网格");const a=Math.min(e.height/r.y,e.maxWidth/Math.max(r.x,r.z)),o=i.getCenter(new P);n.scale.setScalar(a),n.position.set(-o.x*a,-i.min.y*a,-o.z*a),t.position.fromArray(e.position),t.updateMatrixWorld(!0);const c=new ut().setFromObject(t,!0);let l=0,d=0;return t.traverse(u=>{var f;u.isMesh&&(u.userData.artifactId=e.artifactId,d++,l+=(((f=u.geometry.index)==null?void 0:f.count)??u.geometry.attributes.position.count)/3)}),{object:t,assignment:e,bounds:c,center:c.getCenter(new P),size:c.getSize(new P),triangleCount:l,meshCount:d}}async function Ky({scene:s,renderer:e,manifest:t,onArtifact:n,mobile:i=(a=>(a=globalThis.matchMedia)==null?void 0:a.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1,loader:r=new hu().setMeshoptDecoder(Rh)}){const o=[],c=[];return await Promise.all(Ks.map(async l=>{const d=i?l.modelMobile:l.modelDesktop;let u;try{const f=await r.loadAsync(d);jy(f.scene,l,e),u={...qy(f.scene,l),modelUrl:d},s.add(u.object),o.push(u)}catch(f){c.push({artifactId:l.artifactId,name:l.name,modelUrl:d,message:f.message});return}n==null||n(u)})),o.sort((l,d)=>Ks.indexOf(l.assignment)-Ks.indexOf(d.assignment)),{records:o,failures:c}}function Yy(s){var i,r;const e=(r=(i=s==null?void 0:s.object)==null?void 0:i.children[0])==null?void 0:r.children[0];if(!e)throw new Error("馆藏模型尚未就绪");const t=e.clone(!0),n=new Map;return t.traverse(a=>{if(!a.isMesh)return;const o=c=>(n.has(c)||n.set(c,c.clone()),n.get(c));a.material=Array.isArray(a.material)?a.material.map(o):o(a.material)}),{scene:t,sharedResources:!0}}const md="museum-artifact-v1";function Jy({canvas:s,camera:e,scene:t,assignments:n,colliders:i=[],getMode:r,isEntered:a,isBlocked:o=()=>!1,getPriorityTargets:c=()=>[],onOpen:l=()=>{},onClose:d=()=>{},detailUrl:u="http://127.0.0.1:5189/"}){const f=document.createElement("button");f.id="artifactHint",f.className="artifact-entry",f.hidden=!0;const h=document.createElement("dialog");h.id="artifactDetail",h.className="artifact-detail",h.setAttribute("aria-label","文物详情"),h.innerHTML='<button type="button" id="closeArtifactDetail" class="artifact-detail-exit"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m14 6-6 6 6 6M8 12h12"/></svg><span>返回展厅</span></button><div class="artifact-detail-host"></div><div class="artifact-detail-status" role="status"><p></p><div><button type="button" id="retryArtifactDetail" hidden>重新载入</button><a id="standaloneArtifactDetail" target="_blank" rel="noopener">独立打开详情 ↗</a></div></div>',document.body.append(f,h);const g=h.querySelector(".artifact-detail-host"),x=h.querySelector(".artifact-detail-status"),m=x.querySelector("p"),p=h.querySelector("#closeArtifactDetail"),y=h.querySelector("#retryArtifactDetail"),_=h.querySelector("#standaloneArtifactDetail"),b=new uh,v=new Ue,E=new P,T=new P,C=new ji,S=new P,M=new AbortController,A=new Map,L=i.map(K=>({id:K.id,box:new ut().setFromCenterAndSize(new P(...K.center),new P(...K.size))}));let D=null,F=null,O=null,B=null,j=!1;function G(K){let oe=A.get(K.artifactId);if(oe)return oe;const le=t.getObjectByName(`HallArtifact_${K.artifactId}`);if(!le)return null;le.updateWorldMatrix(!0,!0);const Ce=new ut().setFromObject(le);return oe={assignment:K,object:le,bounds:Ce,center:Ce.getCenter(new P)},A.set(K.artifactId,oe),oe}function ee(K,oe=K.center){const le=e.position.distanceTo(oe);return C.set(e.position,T.subVectors(oe,e.position).normalize()),!L.some(({id:Ce,box:Ye})=>(Ce.includes("exhibit")||Ce.includes("Far gallery"))&&Ye.containsPoint(K.center)?!1:C.intersectBox(Ye,S)&&e.position.distanceTo(S)<le-.05)}function ae(){return!h.open&&a()&&!o()&&["walk","paused"].includes(r())}function pe(K,oe=!1){if(e.position.distanceTo(K.center)>4.8||(E.copy(K.center).project(e),E.z<-1||E.z>1||Math.abs(E.x)>.92||Math.abs(E.y)>.82))return!1;const le=Math.hypot(E.x*s.clientWidth/2,E.y*s.clientHeight/2);return(oe||le<175)&&ee(K)}function Oe(){D=null,f.hidden=!0,s.dataset.artifactAim=""}function Je({selectedExhibit:K=null,observationPhase:oe=s.dataset.observationPhase}={}){if(!ae())return Oe(),null;const le=(K==null?void 0:K.id)??K,Ce=oe==="complete"&&r()==="paused";let Ye=null;if(Ce){const U=n.find(Fe=>String(Fe.cabinetId)===String(le)),Qe=U&&G(U);Qe&&pe(Qe,!0)&&(Ye=Qe)}if(!Ye){let U=1/0;for(const Qe of n){const Fe=G(Qe);if(!Fe||!pe(Fe))continue;const Ie=e.position.distanceToSquared(Fe.center);Ie<U&&(U=Ie,Ye=Fe)}}if(D=Ye||null,f.hidden=!D,s.dataset.artifactAim=(D==null?void 0:D.assignment.artifactId)||"",D){const{name:U,nickname:Qe}=D.assignment;f.textContent=`${U}${Qe?` · ${Qe}`:""}　查看详情 ↗`,f.setAttribute("aria-label",`查看${U}详情`),f.dataset.keyboard=matchMedia("(pointer: coarse)").matches?"":"E"}return(D==null?void 0:D.assignment.artifactId)||null}function Ze(K){!h.open||!F||(p.hidden=!1,x.hidden=!1,m.textContent=K,y.hidden=!1)}function te(){if(!h.open||!F)return;clearTimeout(B),j=!1,p.hidden=!1,x.hidden=!1,y.hidden=!0,m.textContent=`正在载入${F.name}的互动详情…`;const K=new URL(u,location.href);K.searchParams.set("artifact",F.artifactId),K.searchParams.set("museumEmbed","1"),K.searchParams.set("parentOrigin",location.origin),K.searchParams.set("returnUrl",location.href);const oe=new URL(K);oe.searchParams.delete("museumEmbed"),oe.searchParams.delete("parentOrigin"),_.href=oe.href,g.replaceChildren(),O=document.createElement("iframe"),O.title=`${F.name}互动详情`,O.allow="autoplay";const le=O;O.addEventListener("error",()=>{O===le&&Ze("详情服务暂时无法连接。可重新载入，或返回展厅继续参观。")},{once:!0}),O.src=K.href,g.append(O),B=setTimeout(()=>Ze("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)}function V(K=D==null?void 0:D.assignment.artifactId){const oe=n.find(le=>le.artifactId===K);return!oe||h.open?!1:(F=oe,Oe(),l(oe),h.setAttribute("aria-label",`${oe.name}详情`),h.showModal(),document.body.classList.add("artifact-detail-open"),te(),p.focus({preventScroll:!0}),!0)}function q(){return h.open?(clearTimeout(B),g.replaceChildren(),O=null,j=!1,h.close(),document.body.classList.remove("artifact-detail-open"),d(F),F=null,s.focus({preventScroll:!0}),!0):!1}return f.addEventListener("click",()=>{D&&ae()&&pe(D,!0)&&V()}),p.addEventListener("click",q),y.addEventListener("click",te),h.addEventListener("cancel",K=>{K.preventDefault(),q()}),s.addEventListener("click",K=>{if(!ae())return;if(document.pointerLockElement===s)v.set(0,0);else{const U=s.getBoundingClientRect();v.set((K.clientX-U.left)/U.width*2-1,-(K.clientY-U.top)/U.height*2+1)}if(b.setFromCamera(v,e),b.intersectObjects(c(),!1).some(U=>U.distance<12))return;const oe=n.map(G).filter(Boolean),Ce=b.intersectObjects(oe.map(U=>U.object),!0)[0];if(!Ce||Ce.distance>4.8)return;const Ye=oe.find(U=>U.assignment.artifactId===Ce.object.userData.artifactId);Ye&&ee(Ye,Ce.point)&&V(Ye.assignment.artifactId)&&(K.preventDefault(),K.stopImmediatePropagation())},{capture:!0,signal:M.signal}),window.addEventListener("keydown",K=>{var oe;if(K.key==="Escape"&&h.open){K.preventDefault(),K.stopImmediatePropagation(),q();return}K.code!=="KeyE"||K.repeat||!D||!ae()||/INPUT|TEXTAREA|SELECT/.test((oe=document.activeElement)==null?void 0:oe.tagName)||pe(D,!0)&&V()&&(K.preventDefault(),K.stopImmediatePropagation())},{capture:!0,signal:M.signal}),window.addEventListener("message",K=>{var Ce,Ye;const oe=new URL(u,location.href).origin;if(!h.open||K.origin!==oe||K.source!==(O==null?void 0:O.contentWindow)||((Ce=K.data)==null?void 0:Ce.channel)!==md)return;const le=n.find(U=>U.artifactId===K.data.artifactId);le&&(F=le,h.setAttribute("aria-label",`${le.name}详情`)),K.data.type==="loading"&&(j=!1,p.hidden=!1,x.hidden=!1,y.hidden=!0,m.textContent=`正在载入${F.name}的互动详情…`,clearTimeout(B),B=setTimeout(()=>Ze("详情尚未就绪。请确认文物服务已启动，再重新载入。"),25e3)),K.data.type==="ready"&&(j=!0,clearTimeout(B),x.hidden=!0,p.hidden=!0,O.contentWindow.postMessage({channel:md,type:"enter",reduced:((Ye=document.querySelector("#motion"))==null?void 0:Ye.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},oe),O.focus()),K.data.type==="error"&&Ze("文物模型暂时无法载入。可重新载入，或返回展厅继续参观。"),K.data.type==="close"&&q()},{signal:M.signal}),{update:Je,open:V,close:q,dispose(){q(),clearTimeout(B),M.abort(),A.clear(),f.remove(),h.remove()},isOpen:()=>h.open,get state(){return{open:h.open,ready:j,artifactId:(F==null?void 0:F.artifactId)||null,aimedArtifactId:(D==null?void 0:D.assignment.artifactId)||null}}}}const vt=new Rt,Qa=new P,gd=new Ue,bd=new Ue,_d=new Ue;class $y{constructor(e){this.geometry=e.geometry,this.randomFunction=Math.random,this.indexAttribute=this.geometry.index,this.positionAttribute=this.geometry.getAttribute("position"),this.normalAttribute=this.geometry.getAttribute("normal"),this.colorAttribute=this.geometry.getAttribute("color"),this.uvAttribute=this.geometry.getAttribute("uv"),this.weightAttribute=null,this.distribution=null}setWeightAttribute(e){return this.weightAttribute=e?this.geometry.getAttribute(e):null,this}build(){const e=this.indexAttribute,t=this.positionAttribute,n=this.weightAttribute,i=e?e.count/3:t.count/3,r=new Float32Array(i);for(let c=0;c<i;c++){let l=1,d=3*c,u=3*c+1,f=3*c+2;e&&(d=e.getX(d),u=e.getX(u),f=e.getX(f)),n&&(l=n.getX(d)+n.getX(u)+n.getX(f)),vt.a.fromBufferAttribute(t,d),vt.b.fromBufferAttribute(t,u),vt.c.fromBufferAttribute(t,f),l*=vt.getArea(),r[c]=l}const a=new Float32Array(i);let o=0;for(let c=0;c<i;c++)o+=r[c],a[c]=o;return this.distribution=a,this}setRandomGenerator(e){return this.randomFunction=e,this}sample(e,t,n,i){const r=this._sampleFaceIndex();return this._sampleFace(r,e,t,n,i)}_sampleFaceIndex(){const e=this.distribution[this.distribution.length-1];return this._binarySearch(this.randomFunction()*e)}_binarySearch(e){const t=this.distribution;let n=0,i=t.length-1,r=-1;for(;n<=i;){const a=Math.ceil((n+i)/2);if(a===0||t[a-1]<=e&&t[a]>e){r=a;break}else e<t[a]?i=a-1:n=a+1}return r}_sampleFace(e,t,n,i,r){let a=this.randomFunction(),o=this.randomFunction();a+o>1&&(a=1-a,o=1-o);const c=this.indexAttribute;let l=e*3,d=e*3+1,u=e*3+2;return c&&(l=c.getX(l),d=c.getX(d),u=c.getX(u)),vt.a.fromBufferAttribute(this.positionAttribute,l),vt.b.fromBufferAttribute(this.positionAttribute,d),vt.c.fromBufferAttribute(this.positionAttribute,u),t.set(0,0,0).addScaledVector(vt.a,a).addScaledVector(vt.b,o).addScaledVector(vt.c,1-(a+o)),n!==void 0&&(this.normalAttribute!==void 0?(vt.a.fromBufferAttribute(this.normalAttribute,l),vt.b.fromBufferAttribute(this.normalAttribute,d),vt.c.fromBufferAttribute(this.normalAttribute,u),n.set(0,0,0).addScaledVector(vt.a,a).addScaledVector(vt.b,o).addScaledVector(vt.c,1-(a+o)).normalize()):vt.getNormal(n)),i!==void 0&&this.colorAttribute!==void 0&&(vt.a.fromBufferAttribute(this.colorAttribute,l),vt.b.fromBufferAttribute(this.colorAttribute,d),vt.c.fromBufferAttribute(this.colorAttribute,u),Qa.set(0,0,0).addScaledVector(vt.a,a).addScaledVector(vt.b,o).addScaledVector(vt.c,1-(a+o)),i.r=Qa.x,i.g=Qa.y,i.b=Qa.z),r!==void 0&&this.uvAttribute!==void 0&&(gd.fromBufferAttribute(this.uvAttribute,l),bd.fromBufferAttribute(this.uvAttribute,d),_d.fromBufferAttribute(this.uvAttribute,u),r.set(0,0).addScaledVector(gd,a).addScaledVector(bd,o).addScaledVector(_d,1-(a+o))),this}}const jr=5,_o=.6;function Zy(s){const e=Math.max(0,s);return{due:e>=jr,opacity:Rn.smoothstep(e,0,_o)*(1-Rn.smoothstep(e,jr-_o,jr))}}function Dr(s,e=!1){const t=new Set,n=new Set,i=new Set;s.traverse(r=>{r.geometry&&(!e||r.isPoints)&&t.add(r.geometry);for(const a of r.material?Array.isArray(r.material)?r.material:[r.material]:[])if(n.add(a),!e)for(const o of Object.values(a))o!=null&&o.isTexture&&i.add(o)}),t.forEach(r=>r.dispose()),n.forEach(r=>r.dispose()),i.forEach(r=>{var a,o,c;r.dispose(),(c=(o=(a=r.source)==null?void 0:a.data)==null?void 0:o.close)==null||c.call(o)}),s.removeFromParent()}async function Qy(s,e){const t=new $y(s),n=t.positionAttribute,i=t.indexAttribute,r=((i==null?void 0:i.count)??n.count)/3,a=new Float32Array(r),o=new Rt;let c=0;for(let l=0;l<r;l+=8192){if(e.aborted)throw new DOMException("模型采样已取消","AbortError");for(let d=l;d<Math.min(r,l+8192);d++){const u=d*3;o.a.fromBufferAttribute(n,i?i.getX(u):u),o.b.fromBufferAttribute(n,i?i.getX(u+1):u+1),o.c.fromBufferAttribute(n,i?i.getX(u+2):u+2),c+=o.getArea(),a[d]=c}l+8192<r&&await new Promise(d=>setTimeout(d,0))}return t.distribution=a,t}async function eM(s,e,t){s.updateMatrixWorld(!0);const n=new ut().setFromObject(s),i=n.getSize(new P);if(n.isEmpty()||!Number.isFinite(i.length())||i.length()===0)throw new Error("模型没有可展示的几何体");const r=Math.min(1.5/Math.max(i.y,.001),1.6/Math.max(i.x,i.z,.001)),a=n.getCenter(new P),o=new On;o.add(s),s.position.sub(a),o.scale.setScalar(r),o.position.y=.13+i.y*r/2,o.updateMatrixWorld(!0);const c={opacity:{value:0},time:{value:0},dispersion:{value:1}},l=[],d=new Set;s.traverse(_=>{if(!_.isMesh||!_.geometry.attributes.position)return;l.push(_);const b=Array.isArray(_.material)?_.material:[_.material];for(const v of b)d.add(v),v.transparent=!0,v.depthWrite=!1,v.onBeforeCompile=E=>{E.uniforms.holoOpacity=c.opacity,E.uniforms.holoTime=c.time,E.vertexShader=`varying vec3 vHoloNormal; varying vec3 vHoloView; varying float vHoloHeight;
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
          #include <opaque_fragment>`)},v.customProgramCacheKey=()=>"museum-jade-edge-v2",v.needsUpdate=!0});const u=[],f=o.matrixWorld.clone().invert(),h=new P,g=e?550:1200,x=l.reduce((_,b)=>_+b.geometry.attributes.position.count,0);for(const _ of l){const b=new Pe().multiplyMatrices(f,_.matrixWorld);{const v=await Qy(_,t),E=Math.max(1,Math.round(g*_.geometry.attributes.position.count/x));for(let T=0;T<E;T++)v.sample(h),h.applyMatrix4(b),u.push(h.x,h.y,h.z)}}const m=[];for(let _=0;_<u.length/3;_++){const b=_*2.39996323,v=(.08+.12*(_*.61803399%1))/r;m.push(Math.cos(b)*v,Math.sin(_*1.37)*v*.6,Math.sin(b)*v)}const p=new rn;p.setAttribute("position",new Ot(u,3)),p.setAttribute("scatterOffset",new Ot(m,3));const y=new hn({uniforms:{opacity:c.opacity,time:c.time,dispersion:c.dispersion},transparent:!0,depthWrite:!1,blending:Ys,vertexShader:"uniform float time; uniform float dispersion; attribute vec3 scatterOffset; varying float sparkle; void main(){vec3 formedPosition=position+scatterOffset*dispersion;vec4 p=modelViewMatrix*vec4(formedPosition,1.);gl_Position=projectionMatrix*p;gl_PointSize=clamp(8. / max(.3,-p.z),1.,3.);sparkle=.55+.25*sin(time*.7+position.y*9.+position.x*13.);}",fragmentShader:"uniform float opacity; varying float sparkle; void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(.31,.92,.73,(1.-r*2.)*sparkle*sqrt(opacity)*.46);}"});return o.add(new nh(p,y)),{object:o,uniforms:c,surfaceMaterials:d}}function tM({scene:s,position:e=[0,.92,0],mobile:t=!1,loadModel:n=null}){const i=new On;i.position.fromArray(e),s.add(i);for(const[M,A,L]of[[.93,12428908,.6],[.83,6412464,.44],[.67,6412464,.18]]){const D=new gt(new ou(M,.008,6,96),new gi({color:A,transparent:!0,opacity:L,depthWrite:!1}));D.rotation.x=Math.PI/2,D.position.y=.025,i.add(D)}const r=new hn({transparent:!0,depthWrite:!1,blending:Ys,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float r=length(vUv-.5)*2.;float glow=pow(max(0.,1.-r),2.);gl_FragColor=vec4(.18,.78,.57,glow*.15);}"}),a=new gt(new ur(2.1,2.1),r);a.rotation.x=-Math.PI/2,a.position.y=.018,i.add(a);const o=new hn({side:tn,transparent:!0,depthWrite:!1,blending:Ys,vertexShader:"varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv; void main(){float heightFade=pow(1.-vUv.y,2.);gl_FragColor=vec4(.21,.72,.57,heightFade*.025);}"}),c=new gt(new au(.76,.91,1.85,48,1,!0),o);c.position.y=.96,i.add(c);let l=[],d=0,u=null,f=null,h=null,g=0,x=0,m=0,p=0,y=0,_=!1,b=!1,v=null;const E=new hu().setMeshoptDecoder(Rh);function T(M){M&&Dr(M.object,M.sharedResources)}function C(M){var O;if(_||h||f||!l.length||x<p)return;const A=l[M],L=y,D=new AbortController;h={controller:D,target:M};const F=new URL(A.modelUrl,((O=globalThis.location)==null?void 0:O.href)||"http://localhost/");(async()=>{let B;try{if(n)B=await n(A,D.signal);else{const G=await fetch(F,{signal:D.signal});if(!G.ok)throw new Error(`模型加载失败 (${G.status})`);B=await E.parseAsync(await G.arrayBuffer(),new URL(".",F).href)}if(_||L!==y){Dr(B.scene,B.sharedResources);return}const j=await eM(B.scene,t,D.signal);if(_||L!==y){Dr(j.object,B.sharedResources);return}f={...j,record:A,index:M,sharedResources:!!B.sharedResources},v=null}catch(j){B!=null&&B.scene&&Dr(B.scene,B.sharedResources),!_&&L===y&&j.name!=="AbortError"&&(v=String(j.message||j),d=M,p=x+jr)}finally{L===y&&(h=null)}})()}function S(){T(u),u=f,f=null,d=u.index,i.add(u.object),g=0}return{setModels(M){y++,h==null||h.controller.abort(),h=null,T(u),T(f),u=null,f=null,l=(M||[]).filter(A=>(A==null?void 0:A.id)&&(A==null?void 0:A.modelUrl)).map(A=>({...A})),d=0,g=0,p=0,v=null,_||C(0)},update(M,{paused:A=!1,reduced:L=!1}={}){if(_)return;const D=Number.isFinite(M)?Math.max(0,M):0;if(b&&!A&&(g=0),b=A,!u&&f&&S(),A||(x+=D,g+=D),L||(m+=Math.min(D,.1)),u){const F=Zy(g);if(A){const O=1-Math.exp(-D*12);u.uniforms.opacity.value=Rn.lerp(u.uniforms.opacity.value,1,O),u.uniforms.dispersion.value=Rn.lerp(u.uniforms.dispersion.value,0,O);for(const B of u.surfaceMaterials)B.depthWrite=!1}else{u.uniforms.opacity.value=l.length<2||!f?1:F.opacity,u.uniforms.dispersion.value=L?0:1-u.uniforms.opacity.value;for(const O of u.surfaceMaterials)O.depthWrite=u.uniforms.opacity.value>.98}u.uniforms.time.value=m,!A&&!L&&(u.object.rotation.y+=D*.13),!A&&F.due&&f&&S()}!f&&!h&&l.length&&(!u||l.length>1)&&C(u||v?(d+1)%l.length:d)},getCurrent(){return u?{...u.record}:null},getState(){return{status:_?"disposed":u?"ready":h?"loading":v?"error":"empty",error:v,currentId:(u==null?void 0:u.record.id)??null,nextId:(f==null?void 0:f.record.id)??null,loading:!!h,count:l.length,paused:b,elapsed:g,index:(u==null?void 0:u.index)??d,phase:u?g<_o?"forming":g>=jr-_o?"dispersing":"holding":"waiting"}},dispose(){_||(_=!0,y++,h==null||h.controller.abort(),h=null,T(u),T(f),u=null,f=null,Dr(i))}}}const nM="http://127.0.0.1:4317/images";function iM(s=globalThis.location){if(!s)return nM;const e=new URL("/images",s.href||`http://${s.hostname}/`);return e.port="4317",e.href}function sM({mobile:s=(e=>(e=globalThis.matchMedia)==null?void 0:e.call(globalThis,"(max-width: 760px), (pointer: coarse)").matches)()??!1}={}){return Ks.map(t=>({id:t.artifactId,artifactId:t.artifactId,name:t.name,nickname:t.nickname,modelUrl:s?t.modelMobile:t.modelDesktop,modelDesktop:t.modelDesktop,modelMobile:t.modelMobile,objective:"collection"}))}async function rM({signal:s,mobile:e}={}){return s==null||s.throwIfAborted(),sM({mobile:e})}function aM(s,e=globalThis.location){if(!Ks.some(n=>n.artifactId===s))throw new Error("未知馆藏");const t=new URL(e.href);return t.port="5189",t.pathname="/",t.search="",t.hash="",t.searchParams.set("artifact",s),t.searchParams.set("museumEmbed","1"),t.searchParams.set("parentOrigin",e.origin),t.searchParams.set("returnUrl",e.href),t}function oM({canvas:s,camera:e,scene:t,stage:n,position:i=[0,.92,0],colliders:r=[],isAvailable:a=()=>!0,onOpen:o=()=>{},onClose:c=()=>{}}){const l=new AbortController,d=(te,V,q,K={})=>te.addEventListener(V,q,{...K,signal:l.signal}),u=document.createElement("section");u.className="hologram-entry",u.hidden=!0,u.setAttribute("aria-label","中央全息展台"),u.innerHTML='<small>中央全息展台</small><strong></strong><span class="hologram-cycle"></span><p></p><div><button type="button" data-action="view" aria-label="查看当前文物">查看文物</button><button type="button" data-action="workbench" aria-label="进入文物修复台，新标签页打开">修复台 ↗</button></div><span class="hologram-key">按 E 查看文物</span>';const f=document.createElement("dialog");f.className="hologram-dialog",f.innerHTML='<header><div><small>全息藏品</small><h2></h2></div><button type="button" data-action="close">返回展厅 · Esc</button></header><div class="hologram-choices"><p></p><button type="button" data-action="view">查看当前文物</button><button type="button" data-action="workbench">进入文物修复台 ↗</button></div><div class="hologram-viewer" hidden></div><div class="hologram-feedback"><p class="hologram-status" role="status"></p><button type="button" data-action="retry" hidden>重新载入详情</button></div>',document.body.append(u,f);const h=f.querySelector("h2");h.id="hologram-dialog-title",f.setAttribute("aria-labelledby",h.id);const g=f.querySelector(".hologram-choices"),x=f.querySelector(".hologram-viewer"),m=f.querySelector(".hologram-status"),p=f.querySelector('[data-action="retry"]'),y=new P(...i),_=y.clone();_.y+=.88;const b=()=>"查看馆藏介绍、文物故事与三维细节。",v=new P,E=new P,T=new ji,C=r.map(te=>new ut().setFromCenterAndSize(new P(...te.center),new P(...te.size))).filter(te=>!te.containsPoint(y));let S=!1,M=null,A=null,L=null;const D=new URL(location.href);D.port="5189",D.pathname="/",D.search="",D.hash="";let F=!1,O=null,B=0;function j(){if(v.copy(_).project(e),v.z<-1||v.z>1||Math.abs(v.x)>.9||Math.abs(v.y)>.9)return!1;const te=e.position.distanceTo(_);return T.set(e.position,E.subVectors(_,e.position).normalize()),!C.some(V=>{const q=T.intersectBox(V,new P);return q&&e.position.distanceTo(q)<te-.1})}function G(){if(F)return;if(f.open){u.hidden=!0;return}const te=Math.hypot(e.position.x-y.x,e.position.z-y.z);if(S=a()&&te<=(S?3.9:3.3)&&j(),u.hidden=!S,!S)return;const V=n.getCurrent();u.dataset.modelId=(V==null?void 0:V.id)||"",u.querySelector("strong").textContent=(V==null?void 0:V.name)||"全息展台";const q=n.getState();u.querySelector(".hologram-cycle").textContent=V&&q.count?`馆藏 ${q.index+1} / ${q.count} · 已暂停轮播`:"已暂停轮播",u.dataset.status=(q==null?void 0:q.status)||"empty",u.querySelector("p").textContent=b(V==null?void 0:V.objective),u.querySelector('[data-action="view"]').disabled=!(V!=null&&V.artifactId)}function ee(){clearTimeout(L),L=null;const te=A;A=null,te&&(te.remove(),te.src="about:blank"),x.replaceChildren(),f.classList.remove("hologram-detail-active")}function ae(te){clearTimeout(L),L=null,!(F||!f.open||!A)&&(m.textContent=te,p.hidden=!1,f.dataset.status="error")}function pe(){f.open&&(ee(),f.close(),M=null,f.dataset.status="closed",document.body.classList.remove("hologram-open"),c(),s.focus({preventScroll:!0}),G())}function Oe(){return f.open||!S||!a()?!1:(M=n.getCurrent()?{...n.getCurrent()}:null,h.textContent=(M==null?void 0:M.name)||"中央全息展台",f.dataset.modelId=(M==null?void 0:M.id)||"",f.dataset.status="choices",g.querySelector("p").textContent=b(M==null?void 0:M.objective),g.querySelector('[data-action="view"]').disabled=!(M!=null&&M.artifactId),g.hidden=!1,x.hidden=!0,p.hidden=!0,m.textContent="",u.hidden=!0,document.pointerLockElement===s&&document.exitPointerLock(),f.showModal(),document.body.classList.add("hologram-open"),o(),Je(),!0)}function Je(){if(!f.open||!(M!=null&&M.artifactId))return;ee(),g.hidden=!0,x.hidden=!1,p.hidden=!0,m.textContent=`正在载入${M.name}的互动详情…`,f.dataset.status="loading",f.classList.add("hologram-detail-active");const te=aM(M.artifactId);A=document.createElement("iframe");const V=A;A.title=`${M.name}互动详情`,A.allow="autoplay",d(A,"error",()=>{A===V&&f.open&&ae("互动详情暂时无法连接，请重新载入或返回展厅。")}),A.src=te.href,x.append(A),L=setTimeout(()=>{A===V&&ae("互动详情尚未就绪。请确认文物详情服务已启动，再重新载入。")},25e3)}d(window,"message",te=>{var V,q;if(!(!f.open||!A||te.origin!==D.origin||te.source!==A.contentWindow||((V=te.data)==null?void 0:V.channel)!=="museum-artifact-v1")){if(te.data.type==="close"){pe();return}if(te.data.type==="error"){ae("互动详情暂时无法载入，请重新载入或返回展厅。");return}te.data.type==="loading"&&(f.dataset.status="loading",m.textContent="正在载入互动详情…",p.hidden=!0,clearTimeout(L),L=setTimeout(()=>ae("互动详情尚未就绪，请重新载入。"),25e3)),te.data.type==="ready"&&(clearTimeout(L),L=null,f.dataset.status="ready",m.textContent="",p.hidden=!0,A.contentWindow.postMessage({channel:"museum-artifact-v1",type:"enter",reduced:((q=document.querySelector("#motion"))==null?void 0:q.getAttribute("aria-pressed"))==="true"||matchMedia("(prefers-reduced-motion: reduce)").matches},D.origin),A.focus())}});function Ze(te){const V=te.target.closest("[data-action]");if(!V||V.disabled)return;const q=V.dataset.action;if(q==="close"){pe();return}if(q==="workbench"){window.open(iM(),"_blank","noopener"),f.open&&(m.textContent="修复台已在新标签页打开。完成后可返回展厅继续参观。");return}const K=f.open;!K&&!Oe()||(q==="view"&&K||q==="retry")&&Je()}return d(u,"click",Ze),d(f,"click",Ze),d(f,"cancel",te=>{te.preventDefault(),pe()}),d(window,"keydown",te=>{var V;if(te.key==="Escape"&&f.open){te.preventDefault(),te.stopImmediatePropagation(),pe();return}te.code!=="KeyE"||te.repeat||/INPUT|TEXTAREA|SELECT/.test((V=document.activeElement)==null?void 0:V.tagName)||Oe()&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0}),d(s,"pointerdown",te=>{O={x:te.clientX,y:te.clientY},B=0}),d(s,"pointermove",te=>{O&&(B=Math.max(B,Math.hypot(te.clientX-O.x,te.clientY-O.y)))}),d(s,"pointercancel",()=>{O=null,B=1/0}),d(s,"click",te=>{const V=B>7;if(O=null,V||!S||f.open)return;const q=s.getBoundingClientRect(),K=document.pointerLockElement===s?0:(te.clientX-q.left)/q.width*2-1,oe=document.pointerLockElement===s?0:-(te.clientY-q.top)/q.height*2+1;v.copy(_).project(e),!(Math.hypot((v.x-K)*q.width/2,(v.y-oe)*q.height/2)>145)&&Oe()&&(te.preventDefault(),te.stopImmediatePropagation())},{capture:!0}),{update:G,isOpen:()=>f.open,isEngaged:()=>S||f.open,getState:()=>({engaged:S,open:f.open,modelId:(M==null?void 0:M.id)??null,viewing:!!A}),dispose(){pe(),F=!0,l.abort(),ee(),u.remove(),f.remove()}}}const we=s=>document.querySelector(s),Xt=new Jd;Xt.background=new De("#101611");const mt=new $0({antialias:!0,powerPreference:"high-performance"});mt.setPixelRatio(Math.min(devicePixelRatio,1.25));mt.setSize(innerWidth,innerHeight);mt.outputColorSpace=It;mt.toneMapping=Cd;mt.toneMappingExposure=1.1;we("#canvas").appendChild(mt.domElement);mt.domElement.tabIndex=0;const ye=new zt(58,innerWidth/innerHeight,.05,140);ye.position.set(0,1.7,7.7);ye.rotation.order="YXZ";const Ch=new Ml(mt),Ph=new Iv;Xt.environment=Ch.fromScene(Ph,.02).texture;Ph.dispose();Ch.dispose();Xt.environmentIntensity=.48;Xt.add(new $m(14149106,1514020,.85));const ze=mt.domElement;ze.setAttribute("aria-label","可交互数字展厅");const bt={reticle:we("#reticle"),aim:we("#aimHint"),story:we("#story"),guide:we("#guide"),walk:we("#walk")},Lh=[];let Tn=null,Vi=!1,co=null,qr=!1,Gn=!1,Yn=null,vi=null,sa=null,sn=null,dn=null,Ir=[],xd=[],Nt=null,Mt=null,xo=null,vd=null,lo=!1;const Nl=new AbortController;function pn(){return!!(dn!=null&&dn.isOpen()||Mt!=null&&Mt.isOpen())}async function cM(){if(!(lo||!Nt||Mt!=null&&Mt.isEngaged()&&Nt.getCurrent())){lo=!0;try{const s=await rM({signal:Nl.signal});if(Nl.signal.aborted)return;const e=JSON.stringify(s);e!==vd&&(!(Mt!=null&&Mt.isEngaged())||!Nt.getCurrent())&&(Nt.setModels(s),vd=e),xo=null}catch(s){s.name!=="AbortError"&&(xo=s.message)}finally{lo=!1}}}const Ol=[],yd=new uh,wc=new Ue,Dh=new Cn,Bl=new P(0,1.55,8.94),Li=new P;let en,yt,Kt=!1,Ih=0,Gi=!1,Se="paused",$n=!1,Qn=matchMedia("(prefers-reduced-motion: reduce)").matches,fs=[],rr=null,Kr=null,Ii=0,kl=0,ii=null,yi=null,Md=!1,zl=!1,Uh=we("#edgeTurn").checked,ar=performance.now(),Ac=0,Rc=0,_i=!1,Or=0,Bn=Zn.speed,un=0,uo=0,Br=0,Cc=0,Pc=0;const Ws=new Map,Qt=new Set,ra=ye.position.clone(),Sd=new P,Di=new P,Hl=new P(3.7,1.35,7.6),Lc=new P,Ed=new ji,Td=new Cn,wd=new Cn,Oi=[],kr=[],zr=[];let Ui=Math.min(devicePixelRatio,1.25),Hs=0;const vo={entrance:{label:"入口总览"},cases:{label:"山水展廊"},hero:{label:"中央主展位"},story:{label:"后方展廊"}};function Ao(){Ii=ye.rotation.y,kl=ye.rotation.x}function bu(){const s=yi;yi=null,wh(ze,s)}function _u(){ye.position.y-=un,un=0,Br=0,Qt.clear();for(const[s,e]of Ws)wh(s,{id:e});Ws.clear(),ii=null,bu(),en==null||en.stop(),ra.copy(ye.position),Ao()}function lt(s,e=!1){s!=="story"&&(Kr=null),s!=="guide"&&(fs=[],rr=null),s!=="observe"&&(vi=null),s!=="guide"&&(sa=null),Se=s,$n=s==="walk"&&e,_u(),s!=="walk"&&document.pointerLockElement===ze&&document.exitPointerLock(),document.body.classList.toggle("mouse-look",$n),document.body.classList.toggle("free-visit",s==="walk"),document.querySelector("footer").inert=s==="walk"||s==="entering",we("#caseChoices").inert=s==="walk"||s==="entering",ze.dataset.mode=Se,ze.dataset.lookMode=$n?"mouse-follow":"paused",bt.walk.textContent=$n?"暂停环顾 · Esc":"继续鼠标环顾",bt.story.hidden=s!=="story"}let Vl;function yo(s){clearTimeout(Vl),we("#status").textContent=s,we("#status").classList.add("show"),Vl=setTimeout(()=>we("#status").classList.remove("show"),2600)}function ca(){Kt&&(Gi=!0,we("#intro").classList.add("dismissed"),we("#intro").inert=!0,ze.focus())}function xu(s){for(const e of document.querySelectorAll("nav button,#caseChoices button,#enter,#walk,#help,#motion"))e.disabled=s;document.body.classList.toggle("entering-gallery",s)}function lM(){ca(),lt("entering"),Gn=!1,qr=!1,sn=null,Tn.reset(),Tn.target=1,Yn=new Xy(yt.entrySequence),ye.position.fromArray(yt.entrySequence.outside),ye.lookAt(new P(...yt.entrySequence.lookAt)),Ao(),xu(!0),we("#caseChoices").hidden=!0,we("#location").textContent="推门入馆 · 正在打开玻璃门",ze.dataset.entryPhase="opening"}async function Fh(){if(!(!Kt||pn()||Se==="story"||Se==="entering"||bt.guide.open)){if(!Gn){lM();return}if(Se==="walk"&&$n){lt("paused");return}ca(),lt("walk",!matchMedia("(pointer:coarse)").matches),$n&&await Nh()}}async function Nh(){if(!(zl||document.pointerLockElement===ze))try{await ze.requestPointerLock({unadjustedMovement:!0})}catch{try{await ze.requestPointerLock()}catch{zl=!0}}}function uM(){qr=!1,lt("paused"),Gi=!1,Gn=!1,Yn=null,sn=null,xu(!1),we("#caseChoices").hidden=!0,Tn.reset(),ye.position.fromArray(vo.entrance.p),ye.quaternion.copy(Dh),ra.copy(ye.position),Ao(),uo=0,Bn=Zn.speed,en.speed=Bn,we("#speed").value=Bn,we("#speedValue").textContent=Bn.toFixed(1)+" 米/秒",_i=!1,Vi=!1,Or=0,ei.hidden=!0,wn.hidden=!0,bt.aim.textContent="",bt.reticle.classList.remove("target"),document.body.classList.remove("walking","mouse-look","free-visit"),we("#location").textContent="入口序厅",document.querySelectorAll("[data-view]").forEach(s=>s.classList.toggle("active",s.dataset.view==="entrance")),clearTimeout(Vl),we("#status").classList.remove("show"),bt.guide.open&&bt.guide.close(),we("#intro").inert=!1,we("#intro").classList.remove("dismissed"),we("#enter").focus({preventScroll:!0})}function Oh(){if(Se==="entering"){Qt.clear(),ii=null,bu();return}if(Se==="story"){_u();return}lt("paused")}function Bh(s){if(!Kt||pn()||Se==="entering")return;if(s==="cases"){we("#caseChoices").hidden=!1,Ro(Number.isInteger(sn==null?void 0:sn.id)?sn.id:1);return}if(s==="hero"||s==="story"){zh(yt.observationTargets[s],s);return}we("#caseChoices").hidden=!0,sn=null,sa=null,document.querySelectorAll("button[data-exhibit]").forEach(t=>t.classList.remove("active")),ca(),lt("guide");const e=vo[s];if(rr=new P(...e.t),Qn)ye.position.fromArray(e.p),ye.lookAt(rr),lt("paused");else{const t=Eh(ye.position.toArray(),e.p,yt);if(!t.length){yo("请先离开展柜边缘，再选择参观点"),lt("paused");return}fs=t.map(n=>new P(...n))}we("#location").textContent=e.label,document.querySelectorAll("[data-view]").forEach(t=>t.classList.toggle("active",t.dataset.view===s))}function kh(s){lt("observe"),sn=s,vi=new Wy(s,{reduced:Qn}),ye.position.copy(vi.views.left),ye.lookAt(vi.views.target),ze.dataset.selectedExhibit=String(s.id),ze.dataset.observationPhase="left",we("#location").textContent=s.label+" · 左侧观察"}function Ro(s){if(!Kt||pn()||Se==="entering")return;const e=yt.exhibits.find(t=>t.id===Number(s));e&&zh(e,"cases")}function zh(s,e){if(!Kt||pn()||Se==="entering")return;ca(),lt("guide"),sn=s,we("#caseChoices").hidden=e!=="cases";const t=Ah(s);if(rr=t.target,document.querySelectorAll("[data-view]").forEach(i=>i.classList.toggle("active",i.dataset.view===e)),document.querySelectorAll("button[data-exhibit]").forEach(i=>{const r=Number(i.dataset.exhibit)===s.id;i.classList.toggle("active",r),i.setAttribute("aria-pressed",String(r))}),we("#location").textContent=s.label+" · 前往左侧观察位",ze.dataset.selectedExhibit=String(s.id),ze.dataset.observationPhase="approach",Qn){kh(s);return}const n=Eh(ye.position.toArray(),t.left.toArray(),yt);if(!n.length){yo("请先离开展柜边缘，再选择观察位置"),lt("paused");return}sa=s,fs=n.map(i=>new P(...i))}we("#enter").onclick=Fh;bt.walk.onclick=Fh;document.querySelectorAll("[data-view]").forEach(s=>s.onclick=()=>Bh(s.dataset.view));document.querySelectorAll("button[data-exhibit]").forEach(s=>s.onclick=()=>Ro(s.dataset.exhibit));we("#help").onclick=()=>{pn()||Se==="story"||Se==="entering"||(lt("paused"),bt.guide.showModal())};we("#closeHelp").onclick=()=>bt.guide.close();function Hh(){we("#motion").setAttribute("aria-pressed",String(Qn)),we("#motion").textContent=Qn?"动态已减弱":"减弱动态"}Hh();we("#motion").onclick=()=>{Qn=!Qn,Hh()};we("#speed").min=Zn.minSpeed;we("#speed").max=Zn.maxSpeed;we("#speed").step=Zn.step;we("#speed").value=Bn;we("#speedValue").textContent=Bn.toFixed(1)+" 米/秒";we("#speed").oninput=s=>{const e=Number(s.target.value);Bn=Rn.clamp(Number.isFinite(e)?e:Zn.speed,Zn.minSpeed,Zn.maxSpeed),s.target.value=Bn,en&&(en.speed=Bn),we("#speedValue").textContent=Bn.toFixed(1)+" 米/秒"};we("#edgeTurn").onchange=s=>{Uh=s.target.checked,ii=null};const ei=document.createElement("button");ei.className="hotspot";ei.textContent="＋ 开启故事";ei.hidden=!0;we("#hotspots").appendChild(ei);function vu(){if(Se==="story"||bt.guide.open||!Kt)return;const s={p:ye.position.clone(),q:ye.quaternion.clone()};s.p.y-=un,lt("story"),Kr=s}ei.onclick=vu;const wn=document.createElement("button");wn.className="hotspot";wn.id="doorHotspot";wn.textContent="推开玻璃门";wn.hidden=!0;we("#hotspots").appendChild(wn);function yu(){!Kt||!Gn||Se==="story"||Se==="entering"||bt.guide.open||Tn.toggle()}wn.onclick=yu;function Mu(){Se==="story"&&(Kr&&(ye.position.copy(Kr.p),un=0,ye.quaternion.copy(Kr.q)),lt("paused"),ze.focus())}we("#closeStory").onclick=Mu;we("#returnStory").onclick=Mu;function Gl(s,e){pn()||Hy(ye,s,e)&&Ao()}document.addEventListener("mousemove",s=>{if(Se!=="walk"||!$n||pn()||bt.guide.open)return;if(document.pointerLockElement===ze){Gl(s.movementX,s.movementY);return}const e=Th(ii,s);Gl(e.dx,e.dy),ii=e.point});window.addEventListener("mouseout",s=>{s.relatedTarget||(ii=null)});ze.addEventListener("pointerdown",s=>{!Kt||pn()||!Gn||Se==="story"||Se==="entering"||bt.guide.open||(ze.focus(),s.pointerType==="mouse"&&s.isTrusted&&Se==="walk"&&$n&&Nh(),s.pointerType==="touch"&&!yi&&(Se!=="walk"&&lt("walk"),yi={id:s.pointerId,x:s.clientX,y:s.clientY},ze.setPointerCapture(s.pointerId)))});ze.addEventListener("pointermove",s=>{if(!yi||Se!=="walk"||pn())return;const e=Th(yi,s);e&&(Gl(e.dx,e.dy),yi=e.point)});for(const s of["pointerup","pointercancel","lostpointercapture"])ze.addEventListener(s,e=>{Gy(yi,e)&&(yi=null)});ze.addEventListener("click",s=>{if(!Kt||pn()||Se==="entering"||bt.guide.open)return;if(Se==="walk"&&_i){vu();return}if((Se==="walk"||Se==="paused")&&Vi){yu();return}if(document.pointerLockElement===ze)wc.set(0,0);else{const t=ze.getBoundingClientRect();wc.set((s.clientX-t.left)/t.width*2-1,-(s.clientY-t.top)/t.height*2+1)}yd.setFromCamera(wc,ye);const e=yd.intersectObjects(Ol,!1)[0];e&&e.distance<12&&Ro(e.object.userData.exhibitId)});document.addEventListener("pointerlockchange",()=>{const s=document.pointerLockElement===ze;if(document.body.classList.toggle("walking",s),ze.dataset.locked=String(s),s&&Se!=="walk"){document.exitPointerLock();return}ii=null,bu(),s?ze.dataset.lookMode="pointer-lock":Md&&Se==="walk"&&lt("paused"),Md=s});document.addEventListener("pointerlockerror",()=>{zl=!0});const Ad=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"]);window.addEventListener("keydown",s=>{if(!pn()){if(Se==="entering"){(Ad.has(s.code)||s.key==="Escape")&&s.preventDefault();return}if(s.key==="Escape"){Se==="story"?Mu():lt("paused");return}if(!(bt.guide.open||Se==="story")){if(s.code==="KeyE"&&_i){vu();return}if(s.code==="KeyE"&&Vi){s.repeat||yu();return}document.activeElement!==ze||!Gi||!Gn||!Ad.has(s.code)||(s.preventDefault(),Se!=="walk"&&lt("walk"),Qt.add(s.code))}}});window.addEventListener("keyup",s=>Qt.delete(s.code));window.addEventListener("blur",Oh);document.addEventListener("visibilitychange",()=>{document.hidden&&Oh(),ar=performance.now()});for(const s of document.querySelectorAll("[data-move]")){s.addEventListener("pointerdown",e=>{!Kt||pn()||!Gn||bt.guide.open||Se==="story"||Se==="entering"||Ws.has(s)||(e.preventDefault(),ca(),Se!=="walk"&&lt("walk"),Ws.set(s,e.pointerId),Qt.add(s.dataset.move),s.setPointerCapture(e.pointerId))});for(const e of["pointerup","pointercancel","lostpointercapture"])s.addEventListener(e,t=>{Ws.get(s)===t.pointerId&&(Ws.delete(s),Qt.delete(s.dataset.move))})}function fM(s){Di.copy(Hl).project(ye),Lc.subVectors(Hl,ye.position);const e=Lc.length();let t=yt.storyEnabled!==!1&&Gi&&Se!=="story"&&Se!=="guide"&&Se!=="entering"&&Se!=="observe"&&!bt.guide.open&&e<3.5&&Di.z<1&&Math.abs(Di.x)<1&&Math.abs(Di.y)<1;if(t){Ed.set(ye.position,Lc.normalize());const r=en.bvh.raycastFirst(Ed,tn);r&&r.distance<e-.5&&(t=!1)}ei.hidden=!t;let n=t&&Math.hypot(Di.x*innerWidth,Di.y*innerHeight)<(_i?110:80);n?Or||(Or=s):Or=0,_i=n&&s-Or>100,Li.copy(Bl).project(ye);const i=Gn&&Gi&&Se!=="story"&&Se!=="guide"&&Se!=="entering"&&Se!=="observe"&&!bt.guide.open&&ye.position.distanceTo(Bl)<4.2&&Li.z<1&&Math.abs(Li.x)<.95&&Math.abs(Li.y)<.95;Vi=i&&Math.hypot(Li.x*innerWidth,Li.y*innerHeight)<140,wn.hidden=!i,i&&(wn.textContent=Tn.target?"合上玻璃门":"推开玻璃门",wn.style.left=`${(Li.x*.5+.5)*innerWidth}px`,wn.style.top=`${(-Li.y*.5+.5)*innerHeight+65}px`),bt.reticle.classList.toggle("target",_i||Vi),bt.aim.textContent=_i?"点击 / E · 开启故事":Vi?`点击 / E · ${Tn.target?"合上":"推开"}玻璃门`:"",t&&!$n&&(ei.style.left=`${(Di.x*.5+.5)*innerWidth}px`,ei.style.top=`${(-Di.y*.5+.5)*innerHeight}px`)}function eo(s,e){if(!s.length)return 0;const t=[...s].sort((n,i)=>n-i);return t[Math.floor((t.length-1)*e)]}function Vh(){return{frameP50:eo(Oi,.5),frameP95:eo(Oi,.95),updateP95:eo(kr,.95),renderP95:eo(zr,.95),sampleCount:Oi.length,resolution:Ui}}function dM(s){for(const e of["map","normalMap","roughnessMap","metalnessMap","emissiveMap"]){const t=s[e];t&&(t.magFilter=jt,t.minFilter=Fn,t.generateMipmaps=!0,t.anisotropy=Math.min(8,mt.capabilities.getMaxAnisotropy()),t.needsUpdate=!0)}}async function hM(){try{yt=await(await fetch("/scene_manifest.json")).json();for(const[r,a]of Object.entries(yt.views))Object.assign(vo[r],a);ye.position.fromArray(vo.entrance.p);const s=yt.anchors.find(r=>r.id==="HOTSPOT_Story");Hl.fromArray(s.position),en=new Oy(yt.colliders),Bl.fromArray(yt.layout.doorPoint);const e=await new hu().loadAsync("/"+yt.model,r=>{r.total&&(we("#load").textContent=`载入模型 ${Math.round(r.loaded/r.total*100)}%`)});e.scene.traverse(r=>{var o;if(!r.isMesh)return;r.userData.exhibitId&&Ol.push(r),(o=r.material)!=null&&o.name.startsWith("Baked diffuse")&&(r.material=new gi({map:r.material.emissiveMap,color:r.material.emissive.clone().multiplyScalar(.79)}));const a=Array.isArray(r.material)?r.material:[r.material];for(const c of a)c.transparent||(c.side=An),c.name.toLowerCase().includes("glass")&&(c.transmission=0,c.forceSinglePass=!0,c.transparent=!0,c.opacity=.055,c.depthWrite=!1,c.roughness=.035,c.envMapIntensity=.45,c.color.set(13493742),c.needsUpdate=!0),c.name.includes("Idle screen")&&(c.color.set(5400924),c.emissive.set(7440239),c.emissiveIntensity=.35,Lh.push(c)),dM(c)}),Xt.add(e.scene),Tn=new ky(e.scene),co=zy(Xt,mt,e.scene),Xt.background=new De(463389);for(const r of yt.lights.filter(a=>a.type==="SPOT"&&a.name.includes("Gallery")).slice(0,4)){const a=new ch(new De(...r.color),10,8,Math.PI/5,.6,2);a.position.fromArray(r.position),a.target.position.set(r.position[0],.5,r.position[2]),Xt.add(a,a.target)}Kt=!0,Ih=performance.now(),Dh.copy(ye.quaternion),ra.copy(ye.position),document.body.dataset.ready="true",ze.dataset.collision="BVH capsule",we("#walk").disabled=!1,we("#enter").disabled=!1,we("#enter").textContent="进入展厅 →",we("#load").textContent="光影已就绪 · 可自由参观",window.museum={ready:!0,renderer:mt,scene:Xt,camera:ye,navigate:Bh,selectExhibit:Ro,door:Tn,getVisitState:()=>({entered:Gi,visitReady:Gn,mode:Se,entryPhase:Yn==null?void 0:Yn.phase,observationPhase:vi==null?void 0:vi.phase,selectedExhibit:sn==null?void 0:sn.id}),getMetrics:()=>({...Vh(),drawCalls:mt.info.render.calls,triangles:mt.info.render.triangles,position:ye.position.toArray()})},dn=Jy({canvas:ze,camera:ye,scene:Xt,assignments:Ks,getMode:()=>Se,isEntered:()=>Gi,isBlocked:()=>(Mt==null?void 0:Mt.isEngaged())||!Kt||Se==="entering"||Se==="story"||bt.guide.open||Vi||_i,colliders:yt.colliders,getPriorityTargets:()=>Ol,onOpen:()=>lt("paused"),onClose:()=>{lt("paused"),ar=performance.now(),ze.focus({preventScroll:!0})}}),yt.observationTargets.hero.distance=3,yt.observationTargets.hero.targetHeight=1.8;const t=yt.centralPlatform.position;Nt=tM({scene:Xt,position:t,mobile:matchMedia("(pointer:coarse)").matches||innerWidth<700,loadModel:async(r,a)=>{await i,a.throwIfAborted();const o=Ir.find(c=>c.assignment.artifactId===r.artifactId);if(!o)throw new Error("馆藏模型暂未载入");return Yy(o)}});const n={getCurrent:()=>Nt.getCurrent(),getState:()=>({...Nt.getState(),...xo&&!Nt.getCurrent()?{status:"error",error:xo}:{},libraryLoading:lo})};Mt=oM({canvas:ze,camera:ye,scene:Xt,stage:n,position:t,colliders:yt.colliders,isAvailable:()=>Kt&&Gi&&(Gn||ze.dataset.observationPhase==="complete")&&["walk","paused"].includes(Se)&&!(dn!=null&&dn.isOpen())&&!bt.guide.open&&!Vi&&!_i,onOpen:()=>{lt("paused"),ei.hidden=!0,wn.hidden=!0},onClose:()=>{lt("paused"),ar=performance.now(),ze.focus({preventScroll:!0})}}),window.museum.getHologram=()=>({...n.getState(),interaction:Mt.getState(),model:Nt.getCurrent()}),window.museum.artifactsReady=!1;const i=Ky({scene:Xt,renderer:mt,manifest:yt,onArtifact:r=>{Ir.push(r),ze.dataset.artifactCount=String(Ir.length);const a=r.assignment.cabinetId==="story"?yt.observationTargets.story:yt.exhibits.find(o=>o.id===r.assignment.cabinetId);a&&(a.targetHeight=r.center.y)}}).then(({records:r,failures:a})=>{Ir=r,xd=a,window.museum.artifactsReady=!0,ze.dataset.artifactCount=String(r.length),ze.dataset.artifactFailures=String(a.length),a.length&&yo("部分文物暂未载入，可以继续参观或刷新重试")}).catch(r=>{ze.dataset.artifactFailures="7",console.error("文物载入失败",r),yo("文物暂未载入，请刷新重试")});cM(),window.museum.getArtifacts=()=>({records:Ir.map(r=>({artifactId:r.assignment.artifactId,cabinetId:r.assignment.cabinetId,bounds:{min:r.bounds.min.toArray(),max:r.bounds.max.toArray()}})),failures:xd})}catch(s){console.error(s),we("#load").textContent="展厅加载失败，请刷新重试",we("#status").textContent=s.message}}hM();let or=0;function Su(s){or=requestAnimationFrame(Su);const e=(s-ar)/1e3,t=Math.min(e,.06);if(ar=s,document.hidden||pn())return;Kt&&qr&&(qr=!1,Se!=="entering"&&Tn.target===1&&Tn.progress===1&&uM()),ye.position.y-=un,un=0;const n=ye.position.x,i=ye.position.z,r=performance.now();if(!Kt){mt.render(Xt,ye);return}if(Se==="entering")Yn.update(ye,Tn,t)?(Yn=null,Gn=!0,xu(!1),lt("walk",!matchMedia("(pointer:coarse)").matches),ze.focus(),ze.dataset.entryPhase="complete",we("#location").textContent="入口序厅 · 可自由参观"):(ze.dataset.entryPhase=Yn.phase,we("#location").textContent=Yn.phase==="opening"?"推门入馆 · 正在打开玻璃门":Yn.phase==="walking"?"推门入馆 · 正在走入展厅":"推门入馆 · 正在合上玻璃门");else if(Se==="observe"){const u=vi.update(ye,t),f=vi.phase;ze.dataset.observationPhase=f,we("#location").textContent=sn.label+" · "+(f==="left"?"左侧观察":f.startsWith("right")?"右侧观察":f==="front"?"移向正视位置":"正视图"),u&&(lt("paused"),ze.dataset.observationPhase="complete")}else if(Se==="guide"&&fs.length){const u=fs[0],f=ye.position.distanceTo(u);ye.position.lerp(u,Math.min(1,1-Math.exp(-3*t),t*2.6/Math.max(f,.001))),Td.copy(ye.quaternion),ye.lookAt(rr),wd.copy(ye.quaternion),ye.quaternion.copy(Td).slerp(wd,1-Math.exp(-5*t)),f<.008&&(ye.position.copy(u),fs.shift()),fs.length||(ye.lookAt(rr),sa?kh(sa):lt("paused"))}else if(Se==="walk"){Uh&&$n&&ii&&document.pointerLockElement!==ze&&(Ii-=Vy(ii.x,innerWidth)*t),ye.rotation.set(kl,Ii,0);const u=Number(Qt.has("KeyW")||Qt.has("ArrowUp"))-Number(Qt.has("KeyS")||Qt.has("ArrowDown")),f=Number(Qt.has("KeyD")||Qt.has("ArrowRight"))-Number(Qt.has("KeyA")||Qt.has("ArrowLeft"));en.speed=Bn,Sd.set(-Math.sin(Ii)*u+Math.cos(Ii)*f,0,-Math.cos(Ii)*u-Math.sin(Ii)*f).normalize(),en.update(ra,Sd,t),ye.position.copy(ra)}const a=Math.hypot(ye.position.x-n,ye.position.z-i),o=Se==="walk"&&a>1e-4;if(Qn)Br=0,un=0;else{const u=o?Math.min(1,a/Math.max(t,.001)/Zn.speed):0;Br=Rn.lerp(Br,u,1-Math.exp(-16*t)),o&&(uo=(uo+a*Math.PI*2/1.2)%(Math.PI*2)),un=Math.sin(uo)*.018*Br,Math.abs(un)<1e-5&&(un=0)}if(Cc=Math.max(Cc,Math.abs(un)),Pc=Math.max(Pc,en.speed),ye.position.y+=un,Ac+=t,Ac>.05){if(fM(s),Mt==null||Mt.update(),dn==null||dn.update({selectedExhibit:sn,observationPhase:ze.dataset.observationPhase}),Nt){const u=Nt.getState();Object.assign(ze.dataset,{hologramId:u.currentId||"",hologramPhase:u.phase||u.status,hologramPaused:String(u.paused),hologramCount:String(u.count)})}Ac=0}for(const u of Lh)u.emissiveIntensity=Rn.lerp(u.emissiveIntensity,Se==="story"?.8:.35,1-Math.exp(-3*t));Tn.update(t)&&Se!=="entering"&&(qr=!0),co==null||co.update(t,Qn),Nt==null||Nt.update(t,{paused:!!(Mt!=null&&Mt.isEngaged()||bt.guide.open||Se==="story"),reduced:Qn});const c=performance.now()-r,l=performance.now();mt.render(Xt,ye);const d=performance.now()-l;if(!document.hidden&&s-Ih>2500&&e<.25&&(Oi.push(e*1e3),kr.push(c),zr.push(d),Oi.length>180&&(Oi.shift(),kr.shift(),zr.shift())),Rc+=t,Rc>1){const u=Vh();u.sampleCount>=30&&u.frameP95>24?Hs++:Hs=0,Hs>=2&&Ui>1?(Ui=1,mt.setPixelRatio(Ui),mt.setSize(innerWidth,innerHeight),Oi.length=0,kr.length=0,zr.length=0,Hs=0):Hs>=3&&u.frameP95>35&&Ui>.85&&(Ui=.85,mt.setPixelRatio(Ui),mt.setSize(innerWidth,innerHeight),Oi.length=0,kr.length=0,zr.length=0,Hs=0),Object.assign(ze.dataset,{position:ye.position.toArray().map(f=>f.toFixed(3)).join(","),direction:[Ii,kl].map(f=>f.toFixed(4)).join(","),mode:Se,bob:un.toFixed(4),bobPeak:Cc.toFixed(4),maxWalkSpeed:Pc,speed:en.speed,contacts:en.contacts,queries:en.queries,calls:mt.info.render.calls,triangles:mt.info.render.triangles,frameP50:u.frameP50.toFixed(2),frameP95:u.frameP95.toFixed(2),updateP95:u.updateP95.toFixed(2),renderP95:u.renderP95.toFixed(2),samples:u.sampleCount,dpr:Ui}),Rc=0}}or=requestAnimationFrame(Su);window.addEventListener("resize",()=>{ii=null,ye.aspect=innerWidth/innerHeight,ye.updateProjectionMatrix(),mt.setSize(innerWidth,innerHeight)});window.addEventListener("pagehide",s=>{cancelAnimationFrame(or),or=0,_u(),!s.persisted&&(Nl.abort(),dn==null||dn.dispose(),Mt==null||Mt.dispose(),Nt==null||Nt.dispose())});window.addEventListener("pageshow",s=>{s.persisted&&(ar=performance.now(),or||(or=requestAnimationFrame(Su)))});
